#!/usr/bin/env node
/**
 * Cannibalization audit — scans every src/app/**\/page.tsx file, extracts
 * the metadata.title and canonical URL, the first <h1> text, and groups
 * pages by:
 *
 *   - exact-duplicate title
 *   - exact-duplicate H1
 *   - exact-duplicate canonical (worst-case cannibalization)
 *   - near-duplicate title (normalized: lowercased, common boilerplate stripped)
 *   - cluster overlap (same primary phrase token before the first " | ")
 *
 * Writes a Markdown report to scripts/seo-audit-results/cannibalization-YYYY-MM-DD.md
 *
 * Read-only on the codebase.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'src', 'app');
const REPORT_DIR = path.join(__dirname, 'seo-audit-results');
const TODAY = new Date().toISOString().split('T')[0];

/** Walk recursively, yield every page.tsx path. */
async function* walkPages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('_') || entry.name.startsWith('[')) continue;
      yield* walkPages(full);
    } else if (entry.name === 'page.tsx') {
      yield full;
    }
  }
}

/** Extract `title: '...'` or `title: { absolute: '...' }` from page metadata. */
function extractTitle(src) {
  // title: { absolute: '...' }
  let m = src.match(/title:\s*\{\s*absolute:\s*['"`]([^'"`]+)['"`]/);
  if (m) return m[1];
  // title: '...'
  m = src.match(/title:\s*['"`]([^'"`]+)['"`]/);
  if (m) return m[1];
  // title: "..."
  m = src.match(/title:\s*"([^"]+)"/);
  if (m) return m[1];
  return null;
}

/** Extract canonical URL from metadata.alternates.canonical. */
function extractCanonical(src) {
  let m = src.match(/canonical:\s*[`'"]([^`'"]+)[`'"]/);
  if (m) return m[1];
  m = src.match(/canonical:\s*`\$\{SITE_CONFIG\.url\}([^`]*)`/);
  if (m) return m[1] || '/';
  return null;
}

/** Extract first <h1>...</h1> text content. Best-effort regex (JSX-aware). */
function extractH1(src) {
  // <h1 ...>TEXT</h1> — first occurrence, allow multiline
  const m = src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) return null;
  // Strip JSX expressions, tags, and whitespace
  return m[1]
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Convert page.tsx path → route path. */
function pathToRoute(file) {
  const rel = path.relative(APP_DIR, file).replace(/\\/g, '/').replace(/\/page\.tsx$/, '');
  return '/' + rel.replace(/^\/?/, '');
}

/** Normalize a title for near-duplicate detection. */
function normalize(t) {
  if (!t) return '';
  return t
    .toLowerCase()
    .replace(/\s*\|\s*best roofing now.*$/i, '')
    .replace(/\s*\|\s*charlotte( nc)?.*$/i, '')
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Strip qualifier tokens (city, year) for cluster-token grouping. */
const CITY_RE = /\b(charlotte|cornelius|davidson|denver|huntersville|matthews|mooresville|mt holly|sherrills ford|statesville|lake norman|lake wylie|fort mill|gastonia|concord|rock hill|lancaster|sc|nc)\b/gi;
const YEAR_RE = /\b20\d{2}\b/g;
function clusterToken(t) {
  return normalize(t).replace(CITY_RE, '').replace(YEAR_RE, '').replace(/\s+/g, ' ').trim();
}

async function main() {
  const pages = [];
  for await (const file of walkPages(APP_DIR)) {
    const src = await fs.readFile(file, 'utf8');
    const route = pathToRoute(file);
    pages.push({
      route,
      file: path.relative(ROOT, file),
      title: extractTitle(src),
      h1: extractH1(src),
      canonical: extractCanonical(src),
      hasMetadata: /export const metadata/.test(src),
    });
  }

  // Group by exact title
  const byTitle = new Map();
  const byH1 = new Map();
  const byCanonical = new Map();
  const byNormalizedTitle = new Map();
  const byClusterToken = new Map();
  const noMetadata = [];

  for (const p of pages) {
    if (!p.hasMetadata) noMetadata.push(p);
    if (p.title) {
      const k = p.title.trim();
      if (!byTitle.has(k)) byTitle.set(k, []);
      byTitle.get(k).push(p);
      const n = normalize(p.title);
      if (n) {
        if (!byNormalizedTitle.has(n)) byNormalizedTitle.set(n, []);
        byNormalizedTitle.get(n).push(p);
      }
      const t = clusterToken(p.title);
      if (t && t.length > 4) {
        if (!byClusterToken.has(t)) byClusterToken.set(t, []);
        byClusterToken.get(t).push(p);
      }
    }
    if (p.h1) {
      const k = p.h1.trim();
      if (!byH1.has(k)) byH1.set(k, []);
      byH1.get(k).push(p);
    }
    if (p.canonical) {
      const k = p.canonical;
      if (!byCanonical.has(k)) byCanonical.set(k, []);
      byCanonical.get(k).push(p);
    }
  }

  const dupTitles = [...byTitle.entries()].filter(([, v]) => v.length > 1);
  const dupH1s = [...byH1.entries()].filter(([, v]) => v.length > 1);
  const dupCanonicals = [...byCanonical.entries()].filter(([, v]) => v.length > 1);
  const dupNormalized = [...byNormalizedTitle.entries()]
    .filter(([, v]) => v.length > 1)
    .filter(([n, v]) => !dupTitles.some(([k]) => normalize(k) === n));
  const clusterOverlaps = [...byClusterToken.entries()]
    .filter(([, v]) => v.length >= 3)
    .sort((a, b) => b[1].length - a[1].length);

  // Render report
  const lines = [];
  lines.push(`# Cannibalization Audit — ${TODAY}`);
  lines.push('');
  lines.push(`**Scope:** Every \`src/app/**/page.tsx\` (excluding dynamic \`[slug]\` routes).`);
  lines.push(`**Pages scanned:** ${pages.length}`);
  lines.push(`**Pages with title extracted:** ${pages.filter((p) => p.title).length}`);
  lines.push(`**Pages with H1 extracted:** ${pages.filter((p) => p.h1).length}`);
  lines.push(`**Pages with canonical extracted:** ${pages.filter((p) => p.canonical).length}`);
  lines.push('');

  lines.push('## 🚨 Exact-duplicate canonicals');
  lines.push('Worst-case — multiple pages pointing to the same canonical URL.');
  lines.push('');
  if (dupCanonicals.length === 0) {
    lines.push('_None_ — every page has a unique canonical.');
  } else {
    for (const [c, ps] of dupCanonicals) {
      lines.push(`### \`${c}\` (${ps.length} pages)`);
      for (const p of ps) lines.push(`- \`${p.route}\` — title: ${p.title || '(none)'}`);
      lines.push('');
    }
  }
  lines.push('');

  lines.push('## 🚨 Exact-duplicate titles');
  lines.push('');
  if (dupTitles.length === 0) {
    lines.push('_None_ — every page has a unique title.');
  } else {
    for (const [t, ps] of dupTitles) {
      lines.push(`### "${t}" (${ps.length} pages)`);
      for (const p of ps) lines.push(`- \`${p.route}\``);
      lines.push('');
    }
  }
  lines.push('');

  lines.push('## ⚠️  Near-duplicate titles (same after normalization)');
  lines.push('Titles that match after stripping " | Best Roofing Now", " | Charlotte NC", and punctuation.');
  lines.push('');
  if (dupNormalized.length === 0) {
    lines.push('_None_.');
  } else {
    for (const [n, ps] of dupNormalized.slice(0, 30)) {
      lines.push(`### normalized: "${n}" (${ps.length} pages)`);
      for (const p of ps) lines.push(`- \`${p.route}\` — title: ${p.title}`);
      lines.push('');
    }
  }
  lines.push('');

  lines.push('## ⚠️  Exact-duplicate H1s');
  lines.push('');
  if (dupH1s.length === 0) {
    lines.push('_None_ — every page has a unique H1.');
  } else {
    for (const [h, ps] of dupH1s.slice(0, 20)) {
      lines.push(`### "${h}" (${ps.length} pages)`);
      for (const p of ps) lines.push(`- \`${p.route}\``);
      lines.push('');
    }
  }
  lines.push('');

  lines.push('## 📊 Cluster overlap (pages sharing core phrase after city/year strip)');
  lines.push('Clusters of 3+ pages targeting the same core phrase. Some of these are intentional');
  lines.push('(geographic variants), others may be cannibalizing.');
  lines.push('');
  for (const [t, ps] of clusterOverlaps.slice(0, 25)) {
    lines.push(`### "${t}" — ${ps.length} pages`);
    for (const p of ps.slice(0, 12)) lines.push(`- \`${p.route}\` — title: ${p.title}`);
    if (ps.length > 12) lines.push(`- … and ${ps.length - 12} more`);
    lines.push('');
  }

  lines.push('## 🔧 Pages missing metadata export');
  lines.push('');
  if (noMetadata.length === 0) {
    lines.push('_None_.');
  } else {
    for (const p of noMetadata.slice(0, 20)) lines.push(`- \`${p.route}\``);
  }

  await fs.mkdir(REPORT_DIR, { recursive: true });
  const outPath = path.join(REPORT_DIR, `cannibalization-${TODAY}.md`);
  await fs.writeFile(outPath, lines.join('\n'), 'utf8');

  // Console summary
  console.log(`Pages scanned: ${pages.length}`);
  console.log(`Exact-duplicate canonicals: ${dupCanonicals.length}`);
  console.log(`Exact-duplicate titles:     ${dupTitles.length}`);
  console.log(`Near-duplicate titles:      ${dupNormalized.length}`);
  console.log(`Exact-duplicate H1s:        ${dupH1s.length}`);
  console.log(`Cluster overlaps (3+):      ${clusterOverlaps.length}`);
  console.log(`Pages missing metadata:     ${noMetadata.length}`);
  console.log(`Report: ${path.relative(ROOT, outPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
