#!/usr/bin/env node
/**
 * Bulk-inject <SpeakableContentBlocks city="Charlotte" /> into pages that don't
 * already have a speakable schema component.
 *
 * Built 2026-05-17 to close the AEO gap flagged in deep-dive-2026-05-17.md:
 * 230 pages were missing SpeakableContentBlocks. The component tells voice
 * assistants and Google AI Overview which content blocks are "speakable" —
 * an important signal for surfacing in voice search and AI answers.
 *
 * Conservative behavior:
 *   - Only injects into pages that have an `export const metadata` block
 *     (i.e., real content pages, not admin or layout files)
 *   - Skips if SpeakableContent or SpeakableContentBlocks is already imported
 *   - Adds import to existing schema-import block (or creates a new one if absent)
 *   - Inserts the JSX after an existing schema component anchor
 *     (BreadcrumbSchema, FAQSchema, WebPageSchema, or AISearchOptimizationBundle)
 *   - Falls back to skip (logs as "needs manual review") if no safe anchor found
 *
 * Run: node scripts/inject-speakable.mjs --dry-run
 *      node scripts/inject-speakable.mjs
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

/** Add SpeakableContentBlocks to the import block. Returns null if no schema
 *  import block exists to extend (signals fallback path). */
function addImport(src) {
  // Pattern 1: existing import { ... } from '@/components/seo/SchemaMarkup';
  // Match the closing brace of the import list and inject before it.
  const importBlockRe = /import\s*\{([^}]+)\}\s*from\s*['"]@\/components\/seo\/SchemaMarkup['"]/;
  const m = src.match(importBlockRe);
  if (!m) return null;

  // Already imported?
  if (/\bSpeakableContent(Blocks)?\b/.test(m[1])) return src; // No-op

  // Add SpeakableContentBlocks at end of import list (preserve indentation if multi-line)
  const importList = m[1];
  const isMultiLine = importList.includes('\n');
  const trailingComma = importList.trimEnd().endsWith(',');
  const sep = isMultiLine ? (trailingComma ? '\n  ' : ',\n  ') : ', ';
  const newImportList = importList.trimEnd() + (trailingComma ? '' : sep === ', ' ? ',' : '') + (sep === ', ' ? ' ' : '\n  ') + 'SpeakableContentBlocks,' + (isMultiLine ? '\n' : '');
  // Cleaner approach: just append before the closing brace
  const cleanList = importList.trimEnd().replace(/,?\s*$/, '');
  const inserted = isMultiLine
    ? `${cleanList},\n  SpeakableContentBlocks,\n`
    : `${cleanList}, SpeakableContentBlocks `;
  return src.replace(importBlockRe, `import {${inserted}} from '@/components/seo/SchemaMarkup'`);
}

/** Pick an anchor (closing tag of an existing schema component) and insert the
 *  JSX right after it. Returns null if no anchor found. */
function injectJsx(src) {
  // Try these anchors in order of preference.
  const anchors = [
    /<VoiceSearchActionSchema\s*\/>/,
    /<AISearchOptimizationBundle[\s\S]*?\/>/,
    /<FreeInspectionOfferSchema\s*\/>/,
    /<FAQSchema[\s\S]*?\/>/,
    /<WebPageSchema[\s\S]*?\/>/,
    /<BreadcrumbSchema[\s\S]*?\/>/,
  ];

  for (const anchor of anchors) {
    const m = src.match(anchor);
    if (m) {
      const insertion = `${m[0]}\n      <SpeakableContentBlocks city="Charlotte" />`;
      return src.replace(anchor, insertion);
    }
  }
  return null;
}

async function main() {
  const log = { changed: 0, alreadyHas: 0, noImportBlock: 0, noJsxAnchor: 0, changes: [] };

  for await (const file of walkPages(APP_DIR)) {
    let src;
    try { src = await fs.readFile(file, 'utf8'); } catch { continue; }
    if (!/export const metadata/.test(src)) continue;

    // Already has speakable?
    if (/\bSpeakableContent(Blocks)?\b/.test(src)) {
      log.alreadyHas++;
      continue;
    }

    const route = file.replace(APP_DIR, '').replace(/\\/g, '/').replace(/\/page\.tsx$/, '');

    let newSrc = addImport(src);
    if (newSrc === null) {
      log.noImportBlock++;
      log.changes.push({ route, status: 'no-import-block' });
      continue;
    }
    if (newSrc === src) {
      log.alreadyHas++;
      continue;
    }

    const withJsx = injectJsx(newSrc);
    if (withJsx === null) {
      log.noJsxAnchor++;
      log.changes.push({ route, status: 'no-jsx-anchor' });
      continue;
    }

    log.changed++;
    log.changes.push({ route, status: 'changed' });
    if (!DRY_RUN) await fs.writeFile(file, withJsx, 'utf8');
  }

  // Report
  const lines = [];
  lines.push(`# SpeakableContentBlocks Bulk Inject — ${TODAY}`);
  lines.push('');
  lines.push(`**Mode:** ${DRY_RUN ? 'DRY-RUN' : 'APPLIED'}`);
  lines.push(`**Files updated:** ${log.changed}`);
  lines.push(`**Already had speakable:** ${log.alreadyHas}`);
  lines.push(`**Skipped (no schema import block):** ${log.noImportBlock}`);
  lines.push(`**Skipped (no JSX anchor):** ${log.noJsxAnchor}`);
  lines.push('');
  lines.push('## Changes');
  for (const c of log.changes) lines.push(`- \`${c.route}\` — ${c.status}`);

  await fs.mkdir(REPORT_DIR, { recursive: true });
  const outPath = path.join(REPORT_DIR, `inject-speakable-${TODAY}.md`);
  await fs.writeFile(outPath, lines.join('\n'), 'utf8');

  console.log(`Files updated:           ${log.changed}${DRY_RUN ? ' (DRY-RUN)' : ''}`);
  console.log(`Already had speakable:   ${log.alreadyHas}`);
  console.log(`No schema import block:  ${log.noImportBlock}`);
  console.log(`No JSX anchor:           ${log.noJsxAnchor}`);
  console.log(`Report: ${path.relative(ROOT, outPath)}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
