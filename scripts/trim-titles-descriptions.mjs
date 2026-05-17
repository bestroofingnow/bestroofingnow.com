#!/usr/bin/env node
/**
 * Mass-trim over-length titles and descriptions across src/app/**\/page.tsx.
 *
 * Built 2026-05-17 in response to deep-dive findings:
 *   - 442 pages with title > 60 chars (Google SERP display limit)
 *   - 612+ pages with description > 160 chars (Google snippet display limit)
 *
 * Heuristics (in order, stop when title fits):
 *   1. Strip " | Best Roofing Now" suffix
 *   2. Strip the LAST " | …" trailing segment if 3+ pipes remain
 *   3. Abbreviate "Charlotte NC" → "Charlotte" (only when this saves enough)
 *   4. Strip "Best Roofing Now" anywhere as a brand mention
 *   5. Strip leading "How Much Does It Cost to" / "What Are the" boilerplate
 *
 * Description heuristics:
 *   1. Trim at the last sentence boundary that keeps length ≤ 155
 *   2. Strip duplicate brand mentions
 *
 * The script is intentionally conservative: it leaves anything ambiguous alone
 * and writes a per-file change log to scripts/seo-audit-results/trim-YYYY-MM-DD.md
 * for review.
 *
 * Run: node scripts/trim-titles-descriptions.mjs
 *      node scripts/trim-titles-descriptions.mjs --dry-run
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
const TITLE_MIN_AFTER_TRIM = 30;
const DESC_MAX = 155;
const DESC_MIN_AFTER_TRIM = 80;

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

function trimTitle(title) {
  let t = title.trim();
  if (t.length <= TITLE_MAX) return t;

  // Heuristic 1: strip " | Best Roofing Now" (the layout already adds it via title template,
  // but only on string titles — { absolute: ... } skips the template, so the suffix
  // is sometimes manually included. Removing it here doesn't double-add).
  t = t.replace(/\s*\|\s*Best Roofing Now\s*$/i, '');
  if (t.length <= TITLE_MAX) return t;

  // Heuristic 2: if 3+ pipes still present, drop the LAST trailing segment
  const pipeCount = (t.match(/\|/g) || []).length;
  if (pipeCount >= 2) {
    const trimmed = t.replace(/\s*\|\s*[^|]+$/, '').trim();
    if (trimmed.length >= TITLE_MIN_AFTER_TRIM && trimmed.length <= TITLE_MAX) return trimmed;
    if (trimmed.length <= TITLE_MAX) t = trimmed;
  }
  if (t.length <= TITLE_MAX) return t;

  // Heuristic 3: abbreviate "Charlotte NC" → "Charlotte" (saves 3 chars)
  if (t.includes('Charlotte NC')) {
    const trial = t.replace(/Charlotte NC/g, 'Charlotte');
    if (trial.length >= TITLE_MIN_AFTER_TRIM && trial.length <= TITLE_MAX) return trial;
    t = trial.length < t.length ? trial : t;
  }
  if (t.length <= TITLE_MAX) return t;

  // Heuristic 4: strip standalone "Best Roofing Now" mention
  if (t.includes('Best Roofing Now')) {
    const trial = t.replace(/\s*\|\s*Best Roofing Now\s*\|?\s*/g, ' | ').replace(/\s*\|\s*\|\s*/g, ' | ').replace(/\s+\|\s*$/, '').trim();
    if (trial.length >= TITLE_MIN_AFTER_TRIM && trial.length <= TITLE_MAX) return trial;
    t = trial.length < t.length ? trial : t;
  }

  // Heuristic 5: strip "Lake Norman" → "LKN" only as last resort (saves 8 chars)
  // Skipped — risks losing SEO value on a primary geo. Better to manual-fix.

  // Don't return a mangled title; if heuristics didn't get us under 60, surface for review.
  return t;
}

function trimDescription(desc) {
  let d = desc.trim();
  if (d.length <= DESC_MAX) return d;

  // Heuristic 1: cut at last sentence boundary (. or ! or ?) that keeps length ≤ DESC_MAX
  let candidate = d;
  while (candidate.length > DESC_MAX) {
    // find last sentence-ending punctuation before DESC_MAX
    const slice = candidate.slice(0, DESC_MAX + 1);
    const lastDot = Math.max(slice.lastIndexOf('. '), slice.lastIndexOf('! '), slice.lastIndexOf('? '));
    if (lastDot > DESC_MIN_AFTER_TRIM) {
      candidate = candidate.slice(0, lastDot + 1).trim();
      break;
    }
    // No sentence boundary — try comma or middle-dot
    const lastComma = Math.max(slice.lastIndexOf(', '), slice.lastIndexOf(' · '));
    if (lastComma > DESC_MIN_AFTER_TRIM) {
      candidate = candidate.slice(0, lastComma).trim() + '.';
      break;
    }
    // Last resort: hard truncate at last space before DESC_MAX, add ellipsis
    const lastSpace = slice.slice(0, DESC_MAX - 1).lastIndexOf(' ');
    if (lastSpace > DESC_MIN_AFTER_TRIM) {
      candidate = candidate.slice(0, lastSpace).trim() + '…';
      break;
    }
    // Give up
    break;
  }
  return candidate.length <= DESC_MAX ? candidate : d;
}

/** Find the metadata title literal and replace if trimmed.
 *
 *  Uses a function callback for String.replace so that `$`, `$1`, etc. in the
 *  replacement value are treated literally (not as backreference patterns).
 *  This was the bug in v1: descriptions containing "$100-$300" got mangled
 *  because `$1` in the replacement was interpolated as capture group 1. */
function applyTitleTrim(src, oldTitle, newTitle) {
  if (oldTitle === newTitle) return src;
  // Try { absolute: 'OLD' }
  let pattern = new RegExp(`(title:\\s*\\{\\s*absolute:\\s*)(['"\`])${escapeRegex(oldTitle)}\\2`);
  if (pattern.test(src)) {
    return src.replace(pattern, (_match, prefix, quote) => `${prefix}${quote}${newTitle}${quote}`);
  }
  // Try title: 'OLD' or title: "OLD"
  pattern = new RegExp(`(title:\\s*)(['"\`])${escapeRegex(oldTitle)}\\2`);
  if (pattern.test(src)) {
    return src.replace(pattern, (_match, prefix, quote) => `${prefix}${quote}${newTitle}${quote}`);
  }
  return src;
}

function applyDescTrim(src, oldDesc, newDesc) {
  if (oldDesc === newDesc) return src;
  const pattern = new RegExp(`(description:\\s*\\n?\\s*)(['"\`])${escapeRegex(oldDesc)}\\2`);
  if (pattern.test(src)) {
    return src.replace(pattern, (_match, prefix, quote) => `${prefix}${quote}${newDesc}${quote}`);
  }
  return src;
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/'/g, "\\'");
}

// IMPORTANT: these extractors deliberately match string literals with NO escaped
// quotes inside. The regex character class [^'"`] terminates at the first inner
// quote, so a description like `'your roof\'s life'` would be truncated at `roof`
// and the trim would corrupt the file. Pages whose description/title contains an
// escaped quote (\' or \") are skipped — the calling code checks for that
// pattern and bails on those files.
function extractTitle(src) {
  let m = src.match(/title:\s*\{\s*absolute:\s*['"`]([^'"`]+)['"`]/);
  if (m) return m[1];
  m = src.match(/^\s*title:\s*['"`]([^'"`]+)['"`]/m);
  if (m) return m[1];
  return null;
}

function extractDescription(src) {
  const m = src.match(/^export const metadata[\s\S]*?description:\s*\n?\s*['"`]([^'"`]+)['"`]/m);
  return m ? m[1] : null;
}

/** Returns true if the metadata block's title or description contains an
 *  escaped quote (\' or \") which our naive extractor can't safely handle. */
function hasEscapedQuoteInMetadata(src) {
  // Grab the metadata block ({ ... } after export const metadata)
  const meta = src.match(/^export const metadata[^{]*\{([\s\S]*?)^\};/m);
  if (!meta) return false;
  // Look for backslash-quote inside the block. This is a conservative check —
  // we only need to know "is it safe to trim this file with regex?"
  return /\\['"]/.test(meta[1]);
}

async function main() {
  const log = {
    titlesTrimmed: 0,
    titlesStillOver: [],
    descsTrimmed: 0,
    descsStillOver: [],
    filesChanged: 0,
    changes: [],
  };

  for await (const file of walkPages(APP_DIR)) {
    const route = '/' + path.relative(APP_DIR, file).replace(/\\/g, '/').replace(/\/page\.tsx$/, '');
    let src;
    try {
      src = await fs.readFile(file, 'utf8');
    } catch {
      continue;
    }
    if (!/export const metadata/.test(src)) continue;

    // Skip files whose metadata block contains escaped quotes — our regex-based
    // extractor can't safely handle them and would mangle the source.
    if (hasEscapedQuoteInMetadata(src)) {
      log.skippedEscaped = (log.skippedEscaped || 0) + 1;
      continue;
    }

    const origTitle = extractTitle(src);
    const origDesc = extractDescription(src);

    let newSrc = src;
    const change = { route, title: null, desc: null };

    if (origTitle && origTitle.length > TITLE_MAX) {
      const trimmed = trimTitle(origTitle);
      if (trimmed.length < origTitle.length) {
        // Only apply if we successfully shortened — even if not all the way to 60
        if (trimmed.length <= TITLE_MAX) {
          newSrc = applyTitleTrim(newSrc, origTitle, trimmed);
          if (newSrc !== src) {
            log.titlesTrimmed++;
            change.title = { from: origTitle, to: trimmed, fromLen: origTitle.length, toLen: trimmed.length };
          }
        } else {
          log.titlesStillOver.push({ route, len: trimmed.length, title: trimmed });
        }
      } else {
        log.titlesStillOver.push({ route, len: origTitle.length, title: origTitle });
      }
    }

    if (origDesc && origDesc.length > DESC_MAX) {
      const trimmed = trimDescription(origDesc);
      if (trimmed.length < origDesc.length && trimmed.length <= DESC_MAX) {
        const before = newSrc;
        newSrc = applyDescTrim(newSrc, origDesc, trimmed);
        if (newSrc !== before) {
          log.descsTrimmed++;
          change.desc = { from: origDesc, to: trimmed, fromLen: origDesc.length, toLen: trimmed.length };
        }
      } else {
        log.descsStillOver.push({ route, len: origDesc.length, desc: origDesc });
      }
    }

    if (newSrc !== src) {
      log.filesChanged++;
      log.changes.push(change);
      if (!DRY_RUN) await fs.writeFile(file, newSrc, 'utf8');
    }
  }

  // Render report
  const lines = [];
  lines.push(`# Title + Description Mass Trim — ${TODAY}`);
  lines.push('');
  lines.push(`**Mode:** ${DRY_RUN ? 'DRY-RUN (no files written)' : 'APPLIED'}`);
  lines.push(`**Files changed:** ${log.filesChanged}`);
  lines.push(`**Titles trimmed:** ${log.titlesTrimmed}`);
  lines.push(`**Descriptions trimmed:** ${log.descsTrimmed}`);
  lines.push(`**Titles still over ${TITLE_MAX} (need manual review):** ${log.titlesStillOver.length}`);
  lines.push(`**Descriptions still over ${DESC_MAX} (need manual review):** ${log.descsStillOver.length}`);
  lines.push('');
  lines.push('## Sample of changes applied');
  lines.push('');
  for (const c of log.changes.slice(0, 50)) {
    lines.push(`### \`${c.route}\``);
    if (c.title) {
      lines.push(`- **Title** (${c.title.fromLen} → ${c.title.toLen}):`);
      lines.push(`  - From: "${c.title.from}"`);
      lines.push(`  - To:   "${c.title.to}"`);
    }
    if (c.desc) {
      lines.push(`- **Desc** (${c.desc.fromLen} → ${c.desc.toLen}):`);
      lines.push(`  - From: "${c.desc.from.slice(0, 200)}…"`);
      lines.push(`  - To:   "${c.desc.to}"`);
    }
    lines.push('');
  }
  if (log.changes.length > 50) lines.push(`_…and ${log.changes.length - 50} more changes._`);
  lines.push('');
  lines.push('## Titles still over limit (heuristics insufficient — manual review)');
  for (const t of log.titlesStillOver.slice(0, 50)) {
    lines.push(`- \`${t.route}\` (${t.len}): "${t.title}"`);
  }
  if (log.titlesStillOver.length > 50) lines.push(`_…and ${log.titlesStillOver.length - 50} more._`);
  lines.push('');
  lines.push('## Descriptions still over limit');
  for (const d of log.descsStillOver.slice(0, 30)) {
    lines.push(`- \`${d.route}\` (${d.len})`);
  }
  if (log.descsStillOver.length > 30) lines.push(`_…and ${log.descsStillOver.length - 30} more._`);

  await fs.mkdir(REPORT_DIR, { recursive: true });
  const outPath = path.join(REPORT_DIR, `trim-${TODAY}.md`);
  await fs.writeFile(outPath, lines.join('\n'), 'utf8');

  console.log(`Files changed:        ${log.filesChanged}${DRY_RUN ? ' (DRY-RUN)' : ''}`);
  console.log(`Titles trimmed:       ${log.titlesTrimmed}`);
  console.log(`Descriptions trimmed: ${log.descsTrimmed}`);
  console.log(`Titles still over:    ${log.titlesStillOver.length}`);
  console.log(`Descs still over:     ${log.descsStillOver.length}`);
  console.log(`Report: ${path.relative(ROOT, outPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
