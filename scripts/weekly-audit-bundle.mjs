#!/usr/bin/env node
/**
 * Weekly audit bundle — runs the cannibalization + SEO/AEO audits, compares
 * results against the previous week's snapshot, and produces a single
 * combined weekly report.
 *
 * Outputs:
 *   - research/weekly/YYYY-Www.md (where Www = ISO week number)
 *   - scripts/seo-audit-results/cannibalization-YYYY-MM-DD.md (refreshed)
 *   - scripts/seo-audit-results/seo-aeo-YYYY-MM-DD.md (refreshed)
 *
 * Why a bundle: running each audit separately produces three reports that you
 * have to mentally combine. This bundle merges them and emphasizes week-over-week
 * deltas — what got better, what got worse since last Monday.
 *
 * The Claude /seo:weekly-audit slash command extends this with Ahrefs MCP pulls
 * (GSC 7-day delta, referring-domains delta, Site Audit issues delta) that
 * can't run from a plain Node process.
 *
 * Run: node scripts/weekly-audit-bundle.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const AUDIT_DIR = path.join(__dirname, 'seo-audit-results');
const WEEKLY_DIR = path.join(ROOT, 'research', 'weekly');
const TODAY = new Date().toISOString().split('T')[0];

function isoWeek(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNum = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNum).padStart(2, '0')}`;
}

function runChild(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: ['inherit', 'pipe', 'pipe'], shell: process.platform === 'win32' });
    let stdout = '', stderr = '';
    p.stdout.on('data', (d) => { stdout += d.toString(); });
    p.stderr.on('data', (d) => { stderr += d.toString(); });
    p.on('close', (code) => {
      if (code === 0) resolve(stdout);
      else reject(new Error(`${cmd} exited ${code}: ${stderr}`));
    });
  });
}

async function findPriorWeekReport() {
  try {
    const files = await fs.readdir(WEEKLY_DIR);
    const sorted = files.filter((f) => f.endsWith('.md')).sort().reverse();
    if (sorted.length === 0) return null;
    return sorted[0];
  } catch {
    return null;
  }
}

async function parseAuditCounts(reportPath) {
  try {
    const content = await fs.readFile(reportPath, 'utf8');
    const counts = {};
    const patterns = {
      dupCanonicals: /Exact-duplicate canonicals:\s*(\d+)/,
      dupTitles: /Exact-duplicate titles:\s*(\d+)/,
      dupH1s: /Exact-duplicate H1s:\s*(\d+)/,
      clusterOverlaps: /Cluster overlaps \(3\+\):\s*(\d+)/,
      titleTooLong: /titleTooLong\s*\((\d+)\)/,
      titleTooShort: /titleTooShort\s*\((\d+)\)/,
      descTooLong: /descTooLong\s*\((\d+)\)/,
      descTooShort: /descTooShort\s*\((\d+)\)/,
      missingCanonical: /missingCanonical\s*\((\d+)\)/,
      missingOpenGraph: /missingOpenGraph\s*\((\d+)\)/,
      missingSpeakable: /missingSpeakable\s*\((\d+)\)/,
      missingAISearchBundle: /missingAISearchBundle\s*\((\d+)\)/,
      faqWithoutSchema: /faqWithoutSchema\s*\((\d+)\)/,
    };
    for (const [key, re] of Object.entries(patterns)) {
      const m = content.match(re);
      if (m) counts[key] = parseInt(m[1], 10);
    }
    return counts;
  } catch {
    return null;
  }
}

function deltaArrow(prev, curr) {
  if (prev === undefined || curr === undefined) return '';
  if (curr < prev) return ` 🟢 (-${prev - curr})`;
  if (curr > prev) return ` 🔴 (+${curr - prev})`;
  return ' ➖';
}

async function main() {
  const week = isoWeek();
  console.log(`Weekly audit ${week}...`);

  await fs.mkdir(WEEKLY_DIR, { recursive: true });

  // Find prior week report BEFORE re-running audits so we can pull the previous counts
  const priorWeekFile = await findPriorWeekReport();
  let priorCounts = null;
  if (priorWeekFile) {
    priorCounts = await parseAuditCounts(path.join(WEEKLY_DIR, priorWeekFile));
  }

  // Run the audits
  console.log('Running cannibalization audit...');
  await runChild('node', [path.join(__dirname, 'cannibalization-audit.mjs')]);
  console.log('Running SEO/AEO quick audit...');
  await runChild('node', [path.join(__dirname, 'seo-aeo-quick-audit.mjs')]);

  // Read the fresh reports
  const cannibPath = path.join(AUDIT_DIR, `cannibalization-${TODAY}.md`);
  const seoAeoPath = path.join(AUDIT_DIR, `seo-aeo-${TODAY}.md`);
  const cannibContent = await fs.readFile(cannibPath, 'utf8').catch(() => '');
  const seoAeoContent = await fs.readFile(seoAeoPath, 'utf8').catch(() => '');
  const currentCounts = {
    ...(await parseAuditCounts(cannibPath)),
    ...(await parseAuditCounts(seoAeoPath)),
  };

  // Build weekly summary report
  const lines = [];
  lines.push(`# Weekly Audit — ${week}`);
  lines.push('');
  lines.push(`**Generated:** ${TODAY}`);
  lines.push(`**Prior week:** ${priorWeekFile || '_no prior report_'}`);
  lines.push('');
  lines.push('## Audit metrics — week-over-week');
  lines.push('');
  lines.push('| Metric | Prior week | This week | Δ |');
  lines.push('|---|---|---|---|');
  const order = [
    ['Duplicate canonicals', 'dupCanonicals'],
    ['Duplicate titles', 'dupTitles'],
    ['Duplicate H1s', 'dupH1s'],
    ['Cluster overlaps (3+)', 'clusterOverlaps'],
    ['Titles > 60 chars', 'titleTooLong'],
    ['Titles < 30 chars', 'titleTooShort'],
    ['Descriptions > 160 chars', 'descTooLong'],
    ['Descriptions < 80 chars', 'descTooShort'],
    ['Missing canonical', 'missingCanonical'],
    ['Missing OpenGraph', 'missingOpenGraph'],
    ['Missing speakable', 'missingSpeakable'],
    ['Missing AISearchBundle', 'missingAISearchBundle'],
    ['FAQ without schema', 'faqWithoutSchema'],
  ];
  for (const [label, key] of order) {
    const prev = priorCounts ? priorCounts[key] : undefined;
    const curr = currentCounts[key];
    if (curr === undefined) continue;
    lines.push(`| ${label} | ${prev ?? '—'} | ${curr} |${deltaArrow(prev, curr)} |`);
  }
  lines.push('');

  // Regression flags
  const regressions = [];
  if (priorCounts) {
    for (const [label, key] of order) {
      const prev = priorCounts[key];
      const curr = currentCounts[key];
      if (prev !== undefined && curr !== undefined && curr > prev) {
        regressions.push({ label, prev, curr });
      }
    }
  }
  lines.push('## Regression flags');
  lines.push('');
  if (regressions.length === 0) {
    lines.push('✅ No metric regressed this week.');
  } else {
    lines.push(`🚨 ${regressions.length} metric(s) regressed:`);
    for (const r of regressions) {
      lines.push(`- **${r.label}**: ${r.prev} → ${r.curr} (+${r.curr - r.prev})`);
    }
    lines.push('');
    lines.push('Investigation: check `git log --since="7 days ago" -- src/app/` for recent changes that may have introduced new issues. Common culprits:');
    lines.push('- New pages added without canonical/OpenGraph/speakable');
    lines.push('- Component refactors that broke title patterns');
    lines.push('- Mass-edit scripts that introduced regressions');
  }
  lines.push('');

  // Pointers to detail reports
  lines.push('## Full reports');
  lines.push('');
  lines.push(`- Cannibalization audit: \`${path.relative(ROOT, cannibPath)}\``);
  lines.push(`- SEO/AEO quick audit: \`${path.relative(ROOT, seoAeoPath)}\``);
  lines.push('');

  // Manual checklist for the human
  lines.push('## Weekly manual checklist');
  lines.push('');
  lines.push('- [ ] Read full reports above for any new issues');
  lines.push('- [ ] Clear 2-5 items from the Tier 3 backlog');
  lines.push('- [ ] Run `/seo:research-performance` for quick-win keywords');
  lines.push('- [ ] GBP: post + photos + responses');
  lines.push('- [ ] Send 2-3 HARO pitches');
  lines.push('- [ ] Send 1 partner outreach email');
  lines.push('');

  const outPath = path.join(WEEKLY_DIR, `${week}.md`);
  await fs.writeFile(outPath, lines.join('\n'), 'utf8');

  console.log(`Weekly report: ${path.relative(ROOT, outPath)}`);
  console.log(`Regressions: ${regressions.length}`);
  for (const r of regressions) console.log(`  - ${r.label}: ${r.prev} → ${r.curr}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
