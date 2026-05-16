#!/usr/bin/env node
/**
 * Phase 2 cleanup: remove `keywords: [...]` metadata field from all page.tsx files.
 *
 * Why: Google does not use `<meta name="keywords">` for ranking. A long list per page
 * looks outdated and over-optimized. The 19-section gold-standard plan §4 mandates
 * removal sitewide. Layout-level removal already done; this script handles page-level.
 *
 * Approach: parse each `keywords: [` and walk balanced brackets to find the matching `]`.
 * Then remove the property + its trailing comma/newline. Idempotent: skips files without
 * a keywords field. Safe-by-default: does not run unless --apply is passed.
 *
 * Usage:
 *   node scripts/remove-page-keywords.js          # dry run, prints planned diffs
 *   node scripts/remove-page-keywords.js --apply  # actually writes changes
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'src', 'app');
const APPLY = process.argv.includes('--apply');

function findPageFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) findPageFiles(full, acc);
    else if (entry.isFile() && entry.name === 'page.tsx') acc.push(full);
  }
  return acc;
}

/**
 * Find the start and end indices of `keywords: [...]` (multiline, balanced brackets)
 * within the metadata export. Returns null if not found.
 */
function findKeywordsBlock(src) {
  // Match the property declaration; allow any leading whitespace
  const re = /^(\s*)keywords:\s*\[/m;
  const m = re.exec(src);
  if (!m) return null;

  const propStart = m.index;
  const arrayStart = m.index + m[0].length - 1; // index of the `[`
  let depth = 1;
  let i = arrayStart + 1;

  while (i < src.length && depth > 0) {
    const ch = src[i];
    // Skip string literals so unbalanced brackets inside strings don't confuse us
    if (ch === "'" || ch === '"' || ch === '`') {
      const quote = ch;
      i++;
      while (i < src.length && src[i] !== quote) {
        if (src[i] === '\\') i += 2;
        else i++;
      }
      i++;
      continue;
    }
    if (ch === '[') depth++;
    else if (ch === ']') depth--;
    i++;
  }

  if (depth !== 0) return null; // unbalanced — bail

  // Include trailing comma if present, then any trailing whitespace + newline
  let end = i;
  if (src[end] === ',') end++;
  while (end < src.length && (src[end] === ' ' || src[end] === '\t')) end++;
  if (src[end] === '\n') end++;

  return { start: propStart, end };
}

let scanned = 0;
let modified = 0;
let unchanged = 0;
let parseFails = 0;
const changedFiles = [];

for (const file of findPageFiles(APP_DIR)) {
  scanned++;
  const src = fs.readFileSync(file, 'utf-8');

  if (!/^\s*keywords:\s*\[/m.test(src)) {
    unchanged++;
    continue;
  }

  const block = findKeywordsBlock(src);
  if (!block) {
    parseFails++;
    console.error(`  PARSE FAIL: ${path.relative(process.cwd(), file)}`);
    continue;
  }

  const next = src.slice(0, block.start) + src.slice(block.end);
  modified++;
  changedFiles.push(path.relative(process.cwd(), file));

  if (APPLY) {
    fs.writeFileSync(file, next, 'utf-8');
  }
}

console.log('');
console.log(`scanned:       ${scanned}`);
console.log(`would modify:  ${modified}`);
console.log(`unchanged:     ${unchanged}`);
console.log(`parse fails:   ${parseFails}`);
console.log('');

if (!APPLY) {
  console.log('DRY RUN. Pass --apply to write changes.');
  if (changedFiles.length > 0) {
    console.log('First 10 files that would change:');
    for (const f of changedFiles.slice(0, 10)) console.log(`  ${f}`);
  }
} else {
  console.log(`APPLIED. ${modified} files updated.`);
}
