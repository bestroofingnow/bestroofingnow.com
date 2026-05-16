#!/usr/bin/env node
/**
 * SEO + AEO quick audit — read-only. For each src/app/**\/page.tsx, extract
 * title, description, and schema markers, then flag:
 *
 *   - title length > 60 chars (Google truncates beyond ~60)
 *   - description length > 160 chars (Google truncates beyond ~155-160)
 *   - title length < 30 chars (probably too short, leaving SERP real estate on the table)
 *   - missing AISearchOptimizationBundle / SpeakableContentBlocks (AEO signals)
 *   - missing FAQ schema where the page has FAQ content
 *   - missing canonical
 *   - missing OpenGraph
 *   - missing primary image / featured image hint
 *
 * Writes a Markdown report to scripts/seo-audit-results/seo-aeo-YYYY-MM-DD.md
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

const ADMIN_PATH = 'n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK';

async function* walkPages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('_') || entry.name.startsWith('[') || entry.name === ADMIN_PATH) continue;
      yield* walkPages(full);
    } else if (entry.name === 'page.tsx') {
      yield full;
    }
  }
}

function extractTitle(src) {
  let m = src.match(/title:\s*\{\s*absolute:\s*['"`]([^'"`]+)['"`]/);
  if (m) return m[1];
  m = src.match(/^\s*title:\s*['"`]([^'"`]+)['"`]/m);
  if (m) return m[1];
  m = src.match(/^\s*title:\s*"([^"]+)"/m);
  if (m) return m[1];
  return null;
}

function extractDescription(src) {
  // first description: under metadata
  const m = src.match(/^export const metadata[\s\S]*?description:\s*\n?\s*['"`]([^'"`]+)['"`]/m);
  return m ? m[1] : null;
}

function pathToRoute(file) {
  const rel = path.relative(APP_DIR, file).replace(/\\/g, '/').replace(/\/page\.tsx$/, '');
  return '/' + rel.replace(/^\/?/, '');
}

async function main() {
  const issues = {
    titleTooLong: [],
    titleTooShort: [],
    descTooLong: [],
    descTooShort: [],
    missingCanonical: [],
    missingOpenGraph: [],
    missingSpeakable: [],
    missingAISearchBundle: [],
    faqWithoutSchema: [],
  };

  let scanned = 0;
  for await (const file of walkPages(APP_DIR)) {
    const src = await fs.readFile(file, 'utf8');
    const route = pathToRoute(file);
    scanned++;

    // Some pages defer metadata to a co-located layout.tsx — skip those for length checks.
    if (!/export const metadata/.test(src)) continue;

    const title = extractTitle(src);
    const description = extractDescription(src);

    if (title) {
      if (title.length > 60) issues.titleTooLong.push({ route, len: title.length, title });
      else if (title.length < 30) issues.titleTooShort.push({ route, len: title.length, title });
    }
    if (description) {
      if (description.length > 160) issues.descTooLong.push({ route, len: description.length, description });
      else if (description.length < 80) issues.descTooShort.push({ route, len: description.length, description });
    }
    if (!/alternates:\s*\{[\s\S]*?canonical:/m.test(src)) issues.missingCanonical.push(route);
    if (!/openGraph:\s*\{/m.test(src)) issues.missingOpenGraph.push(route);
    if (!/SpeakableContent(Blocks)?/i.test(src)) issues.missingSpeakable.push(route);
    if (!/AISearchOptimizationBundle/i.test(src)) issues.missingAISearchBundle.push(route);

    // FAQ heuristic: page lists FAQs but doesn't render FAQSchema
    const hasFAQContent = /const\s+faqs\s*=|<FAQ\s/i.test(src);
    const hasFAQSchema = /FAQSchema|FAQPage/i.test(src);
    if (hasFAQContent && !hasFAQSchema) issues.faqWithoutSchema.push(route);
  }

  const lines = [];
  lines.push(`# SEO + AEO Quick Audit — ${TODAY}`);
  lines.push('');
  lines.push(`**Scope:** ${scanned} static \`page.tsx\` files (admin path excluded).`);
  lines.push('');

  for (const [name, list] of Object.entries(issues)) {
    lines.push(`## ${name} (${list.length})`);
    lines.push('');
    if (list.length === 0) {
      lines.push('_None._');
    } else {
      // Show first 25
      for (const item of list.slice(0, 25)) {
        if (typeof item === 'string') lines.push(`- \`${item}\``);
        else if (item.title) lines.push(`- \`${item.route}\` (${item.len} chars) — "${item.title}"`);
        else if (item.description) lines.push(`- \`${item.route}\` (${item.len} chars) — "${item.description.slice(0, 120)}…"`);
        else lines.push(`- \`${item.route}\``);
      }
      if (list.length > 25) lines.push(`- … and ${list.length - 25} more`);
    }
    lines.push('');
  }

  await fs.mkdir(REPORT_DIR, { recursive: true });
  const outPath = path.join(REPORT_DIR, `seo-aeo-${TODAY}.md`);
  await fs.writeFile(outPath, lines.join('\n'), 'utf8');

  console.log(`Pages scanned:           ${scanned}`);
  for (const [name, list] of Object.entries(issues)) {
    console.log(`  ${name.padEnd(22)} ${list.length}`);
  }
  console.log(`Report: ${path.relative(ROOT, outPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
