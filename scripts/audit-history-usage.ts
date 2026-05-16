#!/usr/bin/env tsx
/**
 * Phase 1 of brn-gold-standard: static audit for browser-history manipulation
 * patterns flagged by Google's April 2026 spam policy (back-button hijacking).
 * Demotion takes effect 2026-06-15.
 *
 * Scans `src/` and reports every match of the API surface that can interfere
 * with browser navigation. Reviewers must classify each finding as:
 *   - SAFE     normal SPA navigation, analytics-only beforeunload, etc.
 *   - REVIEW   intentional but warrants double-check
 *   - VIOLATES exit-intent popup, scroll trap, or back-button block
 *
 * The script is read-only. It writes a JSON report to
 * scripts/seo-audit-results/history-audit-<date>.json plus a Markdown summary.
 *
 * Usage:
 *   npx tsx scripts/audit-history-usage.ts
 *   npx tsx scripts/audit-history-usage.ts --include-third-party
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

interface Finding {
  file: string;
  line: number;
  pattern: string;
  snippet: string;
}

const SRC_DIR = join(__dirname, '..', 'src');
const REPORT_DIR = join(__dirname, 'seo-audit-results');
const INCLUDE_NODE_MODULES = process.argv.includes('--include-third-party');

const PATTERNS: Array<{ name: string; re: RegExp; rationale: string }> = [
  {
    name: 'history.pushState',
    re: /\bhistory\.pushState\b/,
    rationale: 'Mutating browser history can prevent the user from returning to the referrer.',
  },
  {
    name: 'history.replaceState',
    re: /\bhistory\.replaceState\b/,
    rationale: 'Replacing the current entry can hide where the user came from.',
  },
  {
    name: 'popstate listener',
    re: /addEventListener\(\s*['"`]popstate['"`]/,
    rationale: 'popstate handlers may cancel or redirect Back navigation.',
  },
  {
    name: 'beforeunload listener',
    re: /addEventListener\(\s*['"`]beforeunload['"`]/,
    rationale: 'beforeunload prompts must NOT block organic-search exit. Analytics-only is allowed.',
  },
  {
    name: 'window.location assignment',
    re: /window\.location\s*=|window\.location\.(href|replace|assign)\s*=/,
    rationale: 'Programmatic navigation is acceptable; ensure it is not chained on Back/scroll.',
  },
  {
    name: 'router.replace',
    re: /\brouter\.replace\(/,
    rationale: 'Next router.replace removes the current entry; verify it is not used to trap users.',
  },
  {
    name: 'document.referrer redirect',
    re: /document\.referrer/,
    rationale: 'Behavior keyed off referrer can be a tell for organic-search-only traps.',
  },
  {
    name: 'mouseleave/exit-intent',
    re: /\bmouseleave\b|\bexit[-_ ]?intent\b/i,
    rationale: 'Exit-intent popups must be passive (no history manipulation, dismissible).',
  },
  {
    name: 'scroll-lock body overflow',
    re: /document\.body\.style\.overflow\s*=\s*['"`]hidden['"`]/,
    rationale: 'Body scroll-lock is fine for modals. Verify it always unlocks on close.',
  },
];

const SKIP_DIRS = new Set([
  'node_modules', '.next', '.git', 'dist', 'build', '.cache', '.turbo',
]);

function walk(dir: string, acc: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    if (!INCLUDE_NODE_MODULES && SKIP_DIRS.has(name)) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, acc);
    else if (st.isFile() && /\.(ts|tsx|js|jsx|mjs|cjs)$/.test(name)) acc.push(full);
  }
  return acc;
}

function snippetAt(lines: string[], idx: number): string {
  return lines[idx]?.trim().slice(0, 200) ?? '';
}

const findings: Finding[] = [];
const filesScanned = walk(SRC_DIR);

for (const file of filesScanned) {
  const content = readFileSync(file, 'utf-8');
  const lines = content.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const p of PATTERNS) {
      if (p.re.test(line)) {
        findings.push({
          file: relative(process.cwd(), file),
          line: i + 1,
          pattern: p.name,
          snippet: snippetAt(lines, i),
        });
      }
    }
  }
}

mkdirSync(REPORT_DIR, { recursive: true });
const date = new Date().toISOString().slice(0, 10);
const jsonPath = join(REPORT_DIR, `history-audit-${date}.json`);
const mdPath = join(REPORT_DIR, `history-audit-${date}.md`);

writeFileSync(jsonPath, JSON.stringify({ date, filesScanned: filesScanned.length, findings }, null, 2));

const byPattern = new Map<string, Finding[]>();
for (const f of findings) {
  if (!byPattern.has(f.pattern)) byPattern.set(f.pattern, []);
  byPattern.get(f.pattern)!.push(f);
}

const md: string[] = [];
md.push(`# Browser History Usage Audit — ${date}`);
md.push('');
md.push(`Phase 1 of \`.claude/plan/brn-gold-standard.md\` — pre-flight check for Google's June 15 2026 back-button-hijacking demotion.`);
md.push('');
md.push(`- Files scanned: **${filesScanned.length}**`);
md.push(`- Findings: **${findings.length}**`);
md.push('');
md.push('Each finding is read-only and may be entirely safe. Review and tag SAFE / REVIEW / VIOLATES.');
md.push('');
for (const [pattern, list] of byPattern) {
  const meta = PATTERNS.find((p) => p.name === pattern)!;
  md.push(`## ${pattern} (${list.length})`);
  md.push('');
  md.push(`> ${meta.rationale}`);
  md.push('');
  for (const f of list) {
    md.push(`- \`${f.file}:${f.line}\` — \`${f.snippet}\``);
  }
  md.push('');
}

if (findings.length === 0) {
  md.push('No matches. Either the codebase is clean or patterns need to be widened.');
}

writeFileSync(mdPath, md.join('\n'));

console.log(`Scanned ${filesScanned.length} files in ${relative(process.cwd(), SRC_DIR)}/.`);
console.log(`Findings: ${findings.length}.`);
console.log(`JSON: ${relative(process.cwd(), jsonPath)}`);
console.log(`MD:   ${relative(process.cwd(), mdPath)}`);
