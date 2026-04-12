/**
 * PageSpeed Insights Audit Script
 * Tests critical pages for both mobile and desktop performance.
 *
 * Usage:
 *   PSI_API_KEY=your_key node scripts/pagespeed-audit.mjs
 *   node scripts/pagespeed-audit.mjs              (tries without key)
 *
 * Get a free API key at: https://developers.google.com/speed/docs/insights/v5/get-started
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Load .env.local if it exists (for GOOGLE_API_KEY)
try {
  const envPath = path.join(ROOT, '.env.local');
  const envContent = await fs.readFile(envPath, 'utf-8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    let value = trimmed.slice(eqIdx + 1).trim();
    // Strip surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
} catch {
  // .env.local not found, continue without it
}

const PAGES = [
  { name: 'Homepage', url: 'https://www.bestroofingnow.com' },
  { name: 'Roofing Charlotte NC', url: 'https://www.bestroofingnow.com/roofing-charlotte-nc' },
  { name: 'Roof Replacement Charlotte NC', url: 'https://www.bestroofingnow.com/roof-replacement-charlotte-nc' },
  { name: 'Roofing Lake Norman NC', url: 'https://www.bestroofingnow.com/roofing-lake-norman-nc' },
  { name: 'Roof Repair Charlotte NC', url: 'https://www.bestroofingnow.com/roof-repair-charlotte-nc' },
];

const STRATEGIES = ['mobile', 'desktop'];

const API_BASE = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
const API_KEY = process.env.PSI_API_KEY || process.env.GOOGLE_API_KEY || '';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchPSI(url, strategy) {
  const keyParam = API_KEY ? `&key=${API_KEY}` : '';
  const apiUrl = `${API_BASE}?url=${encodeURIComponent(url)}&strategy=${strategy}&category=performance${keyParam}`;
  console.log(`  Fetching ${strategy} for ${url} ...`);

  const res = await fetch(apiUrl);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PSI API error ${res.status}: ${text}`);
  }
  return res.json();
}

function extractMetrics(data) {
  const lhr = data.lighthouseResult;
  const audits = lhr.audits;
  const categories = lhr.categories;

  const perfScore = Math.round((categories.performance?.score ?? 0) * 100);

  const metrics = {
    performanceScore: perfScore,
    firstContentfulPaint: audits['first-contentful-paint']?.displayValue ?? 'N/A',
    firstContentfulPaintMs: audits['first-contentful-paint']?.numericValue ?? null,
    largestContentfulPaint: audits['largest-contentful-paint']?.displayValue ?? 'N/A',
    largestContentfulPaintMs: audits['largest-contentful-paint']?.numericValue ?? null,
    totalBlockingTime: audits['total-blocking-time']?.displayValue ?? 'N/A',
    totalBlockingTimeMs: audits['total-blocking-time']?.numericValue ?? null,
    cumulativeLayoutShift: audits['cumulative-layout-shift']?.displayValue ?? 'N/A',
    cumulativeLayoutShiftValue: audits['cumulative-layout-shift']?.numericValue ?? null,
    speedIndex: audits['speed-index']?.displayValue ?? 'N/A',
    speedIndexMs: audits['speed-index']?.numericValue ?? null,
  };

  // Extract top opportunities
  const opportunities = [];
  const opportunityAudits = Object.values(audits).filter(
    (a) =>
      a.details?.type === 'opportunity' &&
      a.details?.overallSavingsMs > 0 &&
      a.score !== null &&
      a.score < 1
  );

  opportunityAudits.sort(
    (a, b) => (b.details.overallSavingsMs ?? 0) - (a.details.overallSavingsMs ?? 0)
  );

  for (const opp of opportunityAudits.slice(0, 5)) {
    opportunities.push({
      title: opp.title,
      description: opp.description,
      savingsMs: opp.details.overallSavingsMs,
      savingsBytes: opp.details.overallSavingsBytes ?? null,
      displayValue: opp.displayValue ?? '',
    });
  }

  return { metrics, opportunities };
}

function scoreEmoji(score) {
  if (score >= 90) return 'GOOD';
  if (score >= 50) return 'NEEDS WORK';
  return 'POOR';
}

function formatMs(ms) {
  if (ms === null) return 'N/A';
  return ms >= 1000 ? `${(ms / 1000).toFixed(1)} s` : `${Math.round(ms)} ms`;
}

function generateMarkdown(results) {
  const lines = [];
  lines.push('# PageSpeed Insights Audit Report');
  lines.push(`**Date:** 2026-04-11`);
  lines.push(`**Site:** bestroofingnow.com`);
  lines.push(`**Pages tested:** ${PAGES.length}`);
  lines.push('');

  // Overall scores table
  lines.push('## Performance Scores Overview');
  lines.push('');
  lines.push('| Page | Mobile | Desktop |');
  lines.push('|------|--------|---------|');

  for (const r of results) {
    const mScore = r.mobile?.metrics.performanceScore ?? 'ERR';
    const dScore = r.desktop?.metrics.performanceScore ?? 'ERR';
    const mLabel = typeof mScore === 'number' ? `${mScore} (${scoreEmoji(mScore)})` : mScore;
    const dLabel = typeof dScore === 'number' ? `${dScore} (${scoreEmoji(dScore)})` : dScore;
    lines.push(`| ${r.name} | ${mLabel} | ${dLabel} |`);
  }
  lines.push('');

  // Detailed metrics per page
  lines.push('## Detailed Metrics');
  lines.push('');

  for (const r of results) {
    lines.push(`### ${r.name}`);
    lines.push(`URL: ${r.url}`);
    lines.push('');
    lines.push('| Metric | Mobile | Desktop |');
    lines.push('|--------|--------|---------|');

    const m = r.mobile?.metrics;
    const d = r.desktop?.metrics;

    lines.push(`| Performance Score | ${m?.performanceScore ?? 'ERR'} | ${d?.performanceScore ?? 'ERR'} |`);
    lines.push(`| First Contentful Paint | ${m?.firstContentfulPaint ?? 'ERR'} | ${d?.firstContentfulPaint ?? 'ERR'} |`);
    lines.push(`| Largest Contentful Paint | ${m?.largestContentfulPaint ?? 'ERR'} | ${d?.largestContentfulPaint ?? 'ERR'} |`);
    lines.push(`| Total Blocking Time | ${m?.totalBlockingTime ?? 'ERR'} | ${d?.totalBlockingTime ?? 'ERR'} |`);
    lines.push(`| Cumulative Layout Shift | ${m?.cumulativeLayoutShift ?? 'ERR'} | ${d?.cumulativeLayoutShift ?? 'ERR'} |`);
    lines.push(`| Speed Index | ${m?.speedIndex ?? 'ERR'} | ${d?.speedIndex ?? 'ERR'} |`);
    lines.push('');

    // Opportunities
    if (r.mobile?.opportunities?.length > 0) {
      lines.push('**Top Mobile Opportunities:**');
      lines.push('');
      for (const opp of r.mobile.opportunities) {
        const savings = formatMs(opp.savingsMs);
        const bytes = opp.savingsBytes ? ` / ${(opp.savingsBytes / 1024).toFixed(0)} KB` : '';
        lines.push(`- **${opp.title}** -- Est. savings: ${savings}${bytes}`);
      }
      lines.push('');
    }

    if (r.desktop?.opportunities?.length > 0) {
      lines.push('**Top Desktop Opportunities:**');
      lines.push('');
      for (const opp of r.desktop.opportunities) {
        const savings = formatMs(opp.savingsMs);
        const bytes = opp.savingsBytes ? ` / ${(opp.savingsBytes / 1024).toFixed(0)} KB` : '';
        lines.push(`- **${opp.title}** -- Est. savings: ${savings}${bytes}`);
      }
      lines.push('');
    }
  }

  // Aggregate analysis
  lines.push('## Critical Issues to Fix');
  lines.push('');

  // Collect all mobile opportunities across pages
  const allMobileOpps = new Map();
  for (const r of results) {
    for (const opp of r.mobile?.opportunities ?? []) {
      const existing = allMobileOpps.get(opp.title);
      if (!existing || opp.savingsMs > existing.savingsMs) {
        allMobileOpps.set(opp.title, { ...opp, pages: [...(existing?.pages ?? []), r.name] });
      } else {
        existing.pages.push(r.name);
      }
    }
  }

  const sortedOpps = [...allMobileOpps.entries()].sort((a, b) => b[1].savingsMs - a[1].savingsMs);

  if (sortedOpps.length > 0) {
    for (const [title, opp] of sortedOpps.slice(0, 8)) {
      lines.push(`1. **${title}** -- Up to ${formatMs(opp.savingsMs)} savings across ${opp.pages.length} page(s)`);
    }
  } else {
    lines.push('No significant opportunities detected (or all pages errored).');
  }
  lines.push('');

  // Quick wins
  lines.push('## Quick Wins');
  lines.push('');
  lines.push('These are low-effort changes that typically improve scores across all pages:');
  lines.push('');
  lines.push('1. **Optimize images** -- Use next/image with proper sizing, serve WebP/AVIF, add explicit width/height');
  lines.push('2. **Reduce unused JavaScript** -- Code-split with dynamic imports, defer non-critical scripts');
  lines.push('3. **Preconnect to required origins** -- Add `<link rel="preconnect">` for third-party domains (Google Fonts, analytics, CMS)');
  lines.push('4. **Eliminate render-blocking resources** -- Inline critical CSS, defer non-critical stylesheets');
  lines.push('5. **Cache static assets** -- Ensure proper Cache-Control headers on Vercel for static files');
  lines.push('');

  // Recommendations
  lines.push('## Recommendations (Prioritized by Impact)');
  lines.push('');
  lines.push('### High Impact');
  lines.push('- Fix LCP issues: Ensure hero images are preloaded and served at correct size');
  lines.push('- Reduce TBT: Move heavy JS execution off the main thread; lazy-load non-critical components');
  lines.push('- Minimize CLS: Set explicit dimensions on all images, embeds, and dynamic content');
  lines.push('');
  lines.push('### Medium Impact');
  lines.push('- Enable text compression (gzip/brotli) for all text-based assets');
  lines.push('- Reduce server response time (TTFB) -- check Vercel edge function cold starts');
  lines.push('- Use `next/font` to avoid font-related layout shifts');
  lines.push('');
  lines.push('### Low Impact (Polish)');
  lines.push('- Minimize main-thread work by deferring analytics/tracking scripts');
  lines.push('- Remove unused CSS with PurgeCSS or Tailwind content configuration');
  lines.push('- Add `fetchpriority="high"` to LCP images');
  lines.push('');

  return lines.join('\n');
}

async function main() {
  console.log('=== PageSpeed Insights Audit ===');
  if (!API_KEY) {
    console.log('WARNING: No PSI_API_KEY set. The free quota may be exhausted.');
    console.log('Get a key at: https://developers.google.com/speed/docs/insights/v5/get-started');
    console.log('Then run: PSI_API_KEY=your_key node scripts/pagespeed-audit.mjs\n');
  }
  console.log(`Testing ${PAGES.length} pages x ${STRATEGIES.length} strategies = ${PAGES.length * STRATEGIES.length} API calls`);
  console.log('This may take a few minutes...\n');

  const results = [];

  for (const page of PAGES) {
    const result = { name: page.name, url: page.url, mobile: null, desktop: null };

    for (const strategy of STRATEGIES) {
      try {
        const raw = await fetchPSI(page.url, strategy);
        const extracted = extractMetrics(raw);
        result[strategy] = extracted;
        console.log(`    ${strategy}: Score ${extracted.metrics.performanceScore}`);
      } catch (err) {
        console.error(`    ERROR (${strategy}): ${err.message}`);
        result[strategy] = { metrics: { performanceScore: null }, opportunities: [], error: err.message };
      }

      // Be polite to the free API
      await delay(3000);
    }

    results.push(result);
    console.log('');
  }

  // Save JSON
  const jsonPath = path.join(ROOT, 'research', 'pagespeed-audit-2026-04-11.json');
  await fs.writeFile(jsonPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`JSON results saved to: ${jsonPath}`);

  // Save Markdown
  const mdPath = path.join(ROOT, 'research', 'pagespeed-audit-2026-04-11.md');
  const markdown = generateMarkdown(results);
  await fs.writeFile(mdPath, markdown, 'utf-8');
  console.log(`Markdown report saved to: ${mdPath}`);

  // Print summary
  console.log('\n=== Summary ===');
  for (const r of results) {
    const mScore = r.mobile?.metrics.performanceScore ?? 'ERR';
    const dScore = r.desktop?.metrics.performanceScore ?? 'ERR';
    console.log(`${r.name}: Mobile=${mScore}, Desktop=${dScore}`);
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
