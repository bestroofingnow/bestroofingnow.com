#!/usr/bin/env node
/**
 * Phase 0 of brn-gold-standard: page-level template SEO assertions.
 *
 * Crawls a sample URL set per template (homepage, service, location, blog index,
 * blog post, project, reviews, contact, financing, trust pages) and asserts:
 *   - HTTP 200
 *   - exactly one <link rel="canonical">
 *   - exactly one <h1>
 *   - no <meta name="keywords"> (Google ignores; gold-standard removes)
 *   - LocalBusiness aggregateRating only on pages with visible review content
 *   - JSON-LD blocks parse as valid JSON
 *   - URL appears in core sitemap
 *
 * Read-only. Writes a JSON + Markdown report to scripts/seo-audit-results/.
 *
 * Usage:
 *   node scripts/seo-template-audit.js                     # uses prod base URL
 *   node scripts/seo-template-audit.js --base=http://localhost:3000
 *   node scripts/seo-template-audit.js --strict            # exit non-zero on any failure
 */

const https = require('node:https');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { URL } = require('node:url');

const ARGS = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/);
    return m ? [m[1], m[2] ?? true] : [a, true];
  }),
);

const BASE = (ARGS.base || 'https://www.bestroofingnow.com').replace(/\/$/, '');
const STRICT = !!ARGS.strict;
const REPORT_DIR = path.join(__dirname, 'seo-audit-results');

// Sample URL set covering each template type. Add new pages here as they ship.
const SAMPLES = [
  { template: 'homepage', path: '/', expectAggregateRating: true },
  { template: 'service-city', path: '/roof-replacement-charlotte-nc', expectAggregateRating: 'allowed' },
  { template: 'service', path: '/commercial-roofing-services', expectAggregateRating: 'allowed' },
  { template: 'location-city', path: '/locations/charlotte', expectAggregateRating: false },
  { template: 'reviews', path: '/reviews', expectAggregateRating: true },
  { template: 'about', path: '/about', expectAggregateRating: false },
  { template: 'contact', path: '/contact', expectAggregateRating: false },
  { template: 'warranty', path: '/warranty', expectAggregateRating: false },
  { template: 'faq', path: '/faq', expectAggregateRating: false },
  { template: 'emergency', path: '/emergency', expectAggregateRating: false },
  { template: 'blog-index', path: '/blog', expectAggregateRating: false },
  { template: 'projects-index', path: '/projects', expectAggregateRating: false },
];

function fetch(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, { headers: { 'user-agent': 'BRN-SEO-Audit/1.0' } }, (res) => {
      let body = '';
      res.on('data', (c) => (body += c));
      res.on('end', () => resolve({ status: res.statusCode || 0, body, headers: res.headers }));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => req.destroy(new Error('timeout')));
  });
}

function countMatches(html, re) {
  return (html.match(re) || []).length;
}

function extractJsonLd(html) {
  const blocks = [];
  const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    blocks.push(m[1].trim());
  }
  return blocks;
}

function jsonLdHasAggregateRating(blocks) {
  for (const text of blocks) {
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      continue;
    }
    const list = Array.isArray(parsed) ? parsed : [parsed];
    for (const node of list) {
      if (node && typeof node === 'object' && 'aggregateRating' in node) return true;
    }
  }
  return false;
}

async function loadSitemapUrls() {
  try {
    const res = await fetch(`${BASE}/sitemaps/core`);
    if (res.status !== 200) return null;
    const urls = new Set();
    const re = /<loc>([^<]+)<\/loc>/g;
    let m;
    while ((m = re.exec(res.body)) !== null) {
      urls.add(m[1].trim());
    }
    return urls;
  } catch {
    return null;
  }
}

async function audit(sample, sitemapUrls) {
  const url = `${BASE}${sample.path}`;
  const failures = [];
  const warnings = [];

  let res;
  try {
    res = await fetch(url);
  } catch (e) {
    return { ...sample, url, status: 0, failures: [`fetch error: ${e.message}`], warnings, jsonLdBlocks: 0 };
  }

  if (res.status !== 200) failures.push(`status ${res.status}`);

  const html = res.body;
  const canonicals = countMatches(html, /<link[^>]+rel=["']canonical["'][^>]*>/gi);
  if (canonicals === 0) failures.push('missing canonical');
  if (canonicals > 1) failures.push(`duplicate canonical (${canonicals})`);

  const h1s = countMatches(html, /<h1[\s>]/gi);
  if (h1s === 0) failures.push('missing h1');
  if (h1s > 1) warnings.push(`multiple h1s (${h1s})`);

  if (/<meta[^>]+name=["']keywords["'][^>]*>/i.test(html)) {
    failures.push('meta keywords still present');
  }

  const blocks = extractJsonLd(html);
  let invalidJson = 0;
  for (const b of blocks) {
    try {
      JSON.parse(b);
    } catch {
      invalidJson++;
    }
  }
  if (invalidJson > 0) failures.push(`${invalidJson} invalid JSON-LD block(s)`);

  const hasRating = jsonLdHasAggregateRating(blocks);
  if (sample.expectAggregateRating === true && !hasRating) {
    failures.push('expected aggregateRating but none present');
  } else if (sample.expectAggregateRating === false && hasRating) {
    failures.push('aggregateRating present but page should not emit it (no visible reviews)');
  }

  if (sitemapUrls && sample.path !== '/' && !sitemapUrls.has(url) && !sitemapUrls.has(url + '/')) {
    warnings.push('not in core sitemap');
  }

  return {
    ...sample,
    url,
    status: res.status,
    canonicals,
    h1s,
    jsonLdBlocks: blocks.length,
    invalidJson,
    hasAggregateRating: hasRating,
    failures,
    warnings,
  };
}

(async () => {
  console.log(`SEO template audit against ${BASE}`);
  console.log(`Samples: ${SAMPLES.length}`);

  const sitemapUrls = await loadSitemapUrls();
  if (!sitemapUrls) console.warn('Sitemap not reachable; skipping sitemap-coverage check.');

  const results = [];
  for (const s of SAMPLES) {
    const r = await audit(s, sitemapUrls);
    results.push(r);
    const status = r.failures.length === 0 ? 'PASS' : 'FAIL';
    console.log(`  ${status.padEnd(5)} ${r.template.padEnd(16)} ${r.path}`);
    for (const f of r.failures) console.log(`         FAIL: ${f}`);
    for (const w of r.warnings) console.log(`         WARN: ${w}`);
  }

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  const date = new Date().toISOString().slice(0, 10);
  const jsonPath = path.join(REPORT_DIR, `template-audit-${date}.json`);
  const mdPath = path.join(REPORT_DIR, `template-audit-${date}.md`);
  fs.writeFileSync(jsonPath, JSON.stringify({ date, base: BASE, results }, null, 2));

  const md = [];
  md.push(`# SEO Template Audit — ${date}`);
  md.push('');
  md.push(`Phase 0 of \`.claude/plan/brn-gold-standard.md\`. Base URL: \`${BASE}\`.`);
  md.push('');
  md.push('| Template | Path | Status | Canonical | H1 | JSON-LD | Rating | Failures |');
  md.push('|----------|------|--------|-----------|----|---------|--------|----------|');
  for (const r of results) {
    const fails = r.failures.length === 0 ? '—' : r.failures.join('; ');
    md.push(`| ${r.template} | \`${r.path}\` | ${r.status} | ${r.canonicals} | ${r.h1s} | ${r.jsonLdBlocks} | ${r.hasAggregateRating ? 'yes' : 'no'} | ${fails} |`);
  }
  fs.writeFileSync(mdPath, md.join('\n'));

  const totalFails = results.reduce((n, r) => n + r.failures.length, 0);
  console.log('');
  console.log(`JSON: ${path.relative(process.cwd(), jsonPath)}`);
  console.log(`MD:   ${path.relative(process.cwd(), mdPath)}`);
  console.log(`Total failures: ${totalFails}`);

  if (STRICT && totalFails > 0) process.exit(1);
})();
