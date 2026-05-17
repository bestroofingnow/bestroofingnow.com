#!/usr/bin/env node
/**
 * Title trimmer v2 — cluster-aware heuristics for the 73 over-length titles
 * that v1 (trim-titles-descriptions.mjs) couldn't reduce below 60 chars.
 *
 * Built 2026-05-17 after the v1 trim cleared the easy cases. The remaining
 * titles fall into a few specific patterns identified from the audit report:
 *   - Q&A "How Do I X in Charlotte NC?" → "How to X Charlotte NC?"
 *   - Date-prefixed news titles "January 2026 X..." → "2026 X..."
 *   - Duplicate "Charlotte NC" mentions → keep one
 *   - Multi-pipe titles with redundant trailing geo segment
 *
 * Each heuristic is conservative — only applies if it strictly shortens AND
 * preserves keyword anchors.
 *
 * Run: node scripts/trim-titles-v2.mjs --dry-run
 *      node scripts/trim-titles-v2.mjs
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
const DRY_RUN = process.argv.includes('--dry-run');
const TITLE_MAX = 60;

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

function hasEscapedQuoteInMetadata(src) {
  const meta = src.match(/^export const metadata[^{]*\{([\s\S]*?)^\};/m);
  if (!meta) return false;
  return /\\['"]/.test(meta[1]);
}

function extractTitle(src) {
  let m = src.match(/title:\s*\{\s*absolute:\s*['"`]([^'"`]+)['"`]/);
  if (m) return { value: m[1], isAbsolute: true };
  m = src.match(/^\s*title:\s*['"`]([^'"`]+)['"`]/m);
  if (m) return { value: m[1], isAbsolute: false };
  return null;
}

/** Cluster-aware title trim. Returns the shortest valid form found. */
function trimTitleV2(title) {
  let t = title.trim();
  if (t.length <= TITLE_MAX) return t;

  // Heuristic 1: "How Do I X" → "How to X" — saves 4 chars, keeps the keyword pattern
  // ("how to X" is a stronger Google search query than "how do I X" anyway)
  if (/^How Do I /.test(t)) {
    t = t.replace(/^How Do I /, 'How to ');
  }
  if (t.length <= TITLE_MAX) return t;

  // Heuristic 2: "How Much Does It Cost to X" → "How Much Does X Cost"
  // (handled by existing titles being well-written, skip)

  // Heuristic 3: " in Charlotte NC" → " Charlotte NC" — saves 3 chars
  // Only when "Charlotte NC" appears once (otherwise heuristic 4 handles it)
  const charlotteCount = (t.match(/Charlotte NC/g) || []).length;
  if (charlotteCount === 1 && / in Charlotte NC/.test(t)) {
    t = t.replace(/ in Charlotte NC/, ' Charlotte NC');
  }
  if (t.length <= TITLE_MAX) return t;

  // Heuristic 4: Duplicate "Charlotte NC" → strip the trailing one when it's a pipe segment
  if ((t.match(/Charlotte NC/g) || []).length >= 2) {
    const trial = t.replace(/\s*\|\s*Charlotte NC\s*$/i, '');
    if (trial.length >= 30 && trial.length < t.length) t = trial;
  }
  if (t.length <= TITLE_MAX) return t;

  // Heuristic 5: Date-prefix removal — "January 2026 X" → "2026 X"
  t = t.replace(/^(January|February|March|April|May|June|July|August|September|October|November|December)\s+/i, '');
  if (t.length <= TITLE_MAX) return t;

  // Heuristic 6: Strip the LAST trailing " | …" segment unconditionally (any pipe count)
  if (t.includes(' | ')) {
    const trial = t.replace(/\s*\|\s*[^|]+$/, '').trim();
    if (trial.length >= 30 && trial.length < t.length) {
      t = trial;
    }
  }
  if (t.length <= TITLE_MAX) return t;

  // Heuristic 7: Abbreviate "Lake Norman NC" → "Lake Norman" (saves 3 chars,
  // only when this gets us under 60 — keeps the geo name intact)
  if (t.includes('Lake Norman NC')) {
    const trial = t.replace(/Lake Norman NC/g, 'Lake Norman');
    if (trial.length <= TITLE_MAX) return trial;
    if (trial.length < t.length) t = trial;
  }
  if (t.length <= TITLE_MAX) return t;

  // Heuristic 8: "for My Charlotte NC" → "for Charlotte NC" (saves 3 chars, preserves
  // the geo keyword while dropping the possessive pronoun that adds no SEO value)
  if (t.includes('for My Charlotte NC')) {
    t = t.replace(/for My Charlotte NC/g, 'for Charlotte NC');
  }
  if (t.length <= TITLE_MAX) return t;

  // Heuristic 9: "Why Does It Matter" → "Why It Matters" (saves 4 chars, same meaning,
  // Google understands either as a question marker for the same query)
  if (t.includes('Why Does It Matter')) {
    t = t.replace(/Why Does It Matter/g, 'Why It Matters');
  }
  if (t.length <= TITLE_MAX) return t;

  // Heuristic 10: "and Why It Matters" → "+ Why It Matters" doesn't help. Try
  // dropping the conjunction entirely when the second clause is short:
  // "X and Why It Matters for Charlotte NC?" → "X — Why It Matters Charlotte NC?"
  // Skipped — too aggressive, loses readability.

  // Heuristic 11: "and How Do I Get One" → "" when the geo is in tail
  if (/and How (Do I|to) Get One/.test(t)) {
    t = t.replace(/\s*and How (Do I|to) Get One/, '');
  }
  if (t.length <= TITLE_MAX) return t;

  // Heuristic 12: " for Commercial Roofs?" → "?" when "Commercial" is implied
  // by the question (e.g., "TPO Seam Welding" is inherently commercial)
  // Skipped — too domain-specific, risk of changing meaning.

  // Heuristic 13: Strip parenthetical at end "(O&P)" "(SRI)" etc. — they're
  // explanatory acronyms that add no SERP value when the full name is already there
  const acronymPattern = /\s*\([A-Z][A-Z&]+\)/;
  if (acronymPattern.test(t)) {
    const trial = t.replace(acronymPattern, '');
    if (trial.length < t.length) t = trial;
  }
  if (t.length <= TITLE_MAX) return t;

  // Heuristic 14: " & " → " + " (saves 1 char each — last resort)
  if (t.length - TITLE_MAX <= ((t.match(/ & /g) || []).length)) {
    const trial = t.replace(/ & /g, ' + ');
    if (trial.length <= TITLE_MAX) return trial;
  }

  return t;
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/'/g, "\\'");
}

function applyTitleTrim(src, oldTitle, newTitle, isAbsolute) {
  if (oldTitle === newTitle) return src;
  if (isAbsolute) {
    const pattern = new RegExp(`(title:\\s*\\{\\s*absolute:\\s*)(['"\`])${escapeRegex(oldTitle)}\\2`);
    if (pattern.test(src)) {
      return src.replace(pattern, (_m, p, q) => `${p}${q}${newTitle}${q}`);
    }
  } else {
    const pattern = new RegExp(`(^\\s*title:\\s*)(['"\`])${escapeRegex(oldTitle)}\\2`, 'm');
    if (pattern.test(src)) {
      return src.replace(pattern, (_m, p, q) => `${p}${q}${newTitle}${q}`);
    }
  }
  return src;
}

async function main() {
  const log = { changed: 0, stillOver: [], trims: [] };

  for await (const file of walkPages(APP_DIR)) {
    let src;
    try { src = await fs.readFile(file, 'utf8'); } catch { continue; }
    if (!/export const metadata/.test(src)) continue;
    if (hasEscapedQuoteInMetadata(src)) continue;

    const titleData = extractTitle(src);
    if (!titleData) continue;
    if (titleData.value.length <= TITLE_MAX) continue;

    const trimmed = trimTitleV2(titleData.value);
    if (trimmed.length >= titleData.value.length) {
      // No improvement
      log.stillOver.push({ route: file.replace(APP_DIR, '').replace(/\\/g, '/').replace(/\/page\.tsx$/, ''), len: trimmed.length, title: trimmed });
      continue;
    }

    const newSrc = applyTitleTrim(src, titleData.value, trimmed, titleData.isAbsolute);
    if (newSrc === src) continue;

    const route = file.replace(APP_DIR, '').replace(/\\/g, '/').replace(/\/page\.tsx$/, '');
    log.trims.push({ route, from: titleData.value, to: trimmed, fromLen: titleData.value.length, toLen: trimmed.length });
    log.changed++;
    if (trimmed.length > TITLE_MAX) log.stillOver.push({ route, len: trimmed.length, title: trimmed });

    if (!DRY_RUN) await fs.writeFile(file, newSrc, 'utf8');
  }

  // Report
  const lines = [];
  lines.push(`# Title Trim v2 — ${TODAY}`);
  lines.push('');
  lines.push(`**Mode:** ${DRY_RUN ? 'DRY-RUN' : 'APPLIED'}`);
  lines.push(`**Titles changed:** ${log.changed}`);
  lines.push(`**Still over ${TITLE_MAX} (need manual review):** ${log.stillOver.length}`);
  lines.push('');
  lines.push('## Changes applied');
  for (const t of log.trims) {
    lines.push(`- \`${t.route}\` (${t.fromLen} → ${t.toLen})`);
    lines.push(`  - From: "${t.from}"`);
    lines.push(`  - To:   "${t.to}"`);
  }
  lines.push('');
  lines.push('## Still over limit');
  for (const t of log.stillOver) {
    lines.push(`- \`${t.route}\` (${t.len}) — "${t.title}"`);
  }

  await fs.mkdir(REPORT_DIR, { recursive: true });
  const outPath = path.join(REPORT_DIR, `trim-titles-v2-${TODAY}.md`);
  await fs.writeFile(outPath, lines.join('\n'), 'utf8');

  console.log(`Titles changed: ${log.changed}${DRY_RUN ? ' (DRY-RUN)' : ''}`);
  console.log(`Still over:     ${log.stillOver.length}`);
  console.log(`Report: ${path.relative(ROOT, outPath)}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
