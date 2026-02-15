/**
 * Comprehensive SEO Audit for bestroofingnow.com
 *
 * Usage:
 *   node scripts/seo-full-audit.js
 *   node scripts/seo-full-audit.js --mode=baseline --geo=us --date=2026-02-14
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

try {
  const dotenv = require('dotenv');
  dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
  dotenv.config();
} catch (_e) {
  // Optional.
}

function parseArgs(argv) {
  const out = {};
  argv.forEach((arg) => {
    if (!arg.startsWith('--')) return;
    const body = arg.slice(2);
    const eq = body.indexOf('=');
    if (eq === -1) {
      out[body] = true;
    } else {
      out[body.slice(0, eq)] = body.slice(eq + 1);
    }
  });
  return out;
}

function validDate(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
}

const ARGS = parseArgs(process.argv.slice(2));
const RUN_MODE = ARGS.mode === 'baseline' ? 'baseline' : 'full';
const GEO_TARGET = ARGS.geo === 'us' ? 'us' : 'charlotte';
const REPORT_DATE = validDate(ARGS.date) ? ARGS.date : new Date().toISOString().split('T')[0];

const login = process.env.DATAFORSEO_LOGIN;
const password = process.env.DATAFORSEO_PASSWORD;

if (!login || !password) {
  console.error('\nERROR: Missing DATAFORSEO_LOGIN or DATAFORSEO_PASSWORD');
  process.exit(1);
}

const AUTH_HEADER = Buffer.from(`${login}:${password}`).toString('base64');

const CONFIG = {
  domain: 'bestroofingnow.com',
  baseUrl: 'https://www.bestroofingnow.com',
  languageCode: 'en',
  locationCodeCharlotte: 1024231,
  locationCodeUS: 2840,
  locationNameCharlotte: 'Charlotte,North Carolina,United States',
  locationNameUS: 'United States',
  competitorsFallback: [
    'southendroofing.com',
    'prohomeclt.com',
    'goeliteroofing.com',
    'adamsroofingcharlotte.com',
    'horizonroofing.com',
  ],
  nap: {
    name: 'Best Roofing Now',
    address: '10130 Mallard Creek Rd Ste 300, Charlotte, NC 28262',
    phone: '(704) 605-6047',
  },
  expectedSchemas: {
    homepage: ['LocalBusiness', 'WebSite', 'Organization'],
    service: ['Service', 'FAQPage', 'BreadcrumbList'],
    location: ['LocalBusiness', 'Place', 'BreadcrumbList'],
    blog: ['Article', 'BreadcrumbList'],
    other: ['BreadcrumbList'],
  },
  samplePages: {
    homepage: 'https://www.bestroofingnow.com/',
    services: [
      'https://www.bestroofingnow.com/services/roof-replacement',
      'https://www.bestroofingnow.com/services/roof-repair',
      'https://www.bestroofingnow.com/services/commercial-roofing',
    ],
    locations: [
      'https://www.bestroofingnow.com/locations/charlotte-nc',
      'https://www.bestroofingnow.com/locations/huntersville-nc',
      'https://www.bestroofingnow.com/locations/mooresville-nc',
    ],
    blogs: [
      'https://www.bestroofingnow.com/blog/roof-shingle-cost-per-square-foot',
      'https://www.bestroofingnow.com/blog/roof-crickets-101-what-they-are-benefits-and-why-your-roof-might-need-one',
    ],
  },
};

CONFIG.locationCode = GEO_TARGET === 'us' ? CONFIG.locationCodeUS : CONFIG.locationCodeCharlotte;
CONFIG.locationName = GEO_TARGET === 'us' ? CONFIG.locationNameUS : CONFIG.locationNameCharlotte;
let activeLabsLocationCode = CONFIG.locationCode;
let activeLabsLocationName = CONFIG.locationName;
let labsFallbackApplied = false;

const BENCHMARKS = { blog: 1500, service: 800, location: 600, homepage: 400, other: 400 };
const LOCAL_BUSINESS_TYPES = new Set(['LocalBusiness', 'RoofingContractor', 'HomeAndConstructionBusiness']);
const SERP_FEATURE_TYPES = new Set(['featured_snippet', 'people_also_ask', 'people_also_search', 'faq']);
const ROOT_SERVICE_HINTS = ['roof', 'roofing', 'roofer', 'gutter', 'siding', 'skylight', 'chimney', 'storm', 'repair', 'replacement', 'commercial', 'residential', 'metal', 'flat'];
const ROOT_LOCATION_HINTS = ['charlotte-nc', 'huntersville-nc', 'mooresville-nc', 'cornelius-nc', 'davidson-nc', 'concord-nc', 'matthews-nc', 'rock-hill-sc', 'fort-mill-sc', 'lake-norman'];

const DIRECTORY_LISTINGS = [
  { name: 'Google Reviews', url: 'https://g.page/r/CaUQ2-TmxmVZEAE/review', priority: 1 },
  { name: 'Yelp', url: 'https://www.yelp.com/biz/best-roofing-now-charlotte-9', priority: 1 },
  { name: 'BBB', url: 'https://www.bbb.org/us/nc/charlotte/profile/roofing-contractors/best-roofing-now-0473-908763', priority: 1 },
  { name: 'Nextdoor', url: 'https://nextdoor.com/pages/best-roofing-now-llc-charlotte-nc/', priority: 1 },
  { name: 'Thumbtack', url: 'https://www.thumbtack.com/services?servicePk=458573394032246790', priority: 2 },
  { name: 'Chamber of Commerce', url: 'https://www.chamberofcommerce.com/business-directory/north-carolina/charlotte/roofing-contractor/2012422657-best-roofing-now', priority: 2 },
  { name: 'Lake Norman Chamber', url: 'https://business.lakenormanchamber.org/directory/details/best-roofing-now-4317292', priority: 1 },
  { name: 'Charlotte Area Chamber', url: 'https://charlotteareachamberofcommerce.growthzoneapp.com/memberdirectory/Details/active-member-directory-info-4627168', priority: 1 },
];

const EXCLUDED_COMPETITOR_DOMAINS = new Set([
  'facebook.com', 'reddit.com', 'youtube.com', 'instagram.com', 'x.com', 'twitter.com', 'linkedin.com',
  'wikipedia.org', 'angi.com', 'yelp.com', 'gaf.com', 'homeadvisor.com', 'thumbtack.com', 'bbb.org', 'google.com',
]);

const PRIORITY_SCORES = { critical: 100, high: 75, medium: 50, low: 25 };

const auditResults = {
  meta: {
    domain: CONFIG.domain,
    generatedAt: new Date().toISOString(),
    version: '2.0.0',
    runMode: RUN_MODE,
    geoTarget: GEO_TARGET,
    reportDate: REPORT_DATE,
    locationCode: CONFIG.locationCode,
    locationName: CONFIG.locationName,
    activeLabsLocationCode: CONFIG.locationCode,
    activeLabsLocationName: CONFIG.locationName,
    labsFallbackApplied: false,
  },
  summary: { overallScore: 0, criticalIssues: 0, highIssues: 0, mediumIssues: 0, lowIssues: 0, categoryScores: {} },
  cannibalization: null,
  onPage: null,
  technical: null,
  schema: null,
  backlinks: null,
  contentGap: null,
  localSEO: null,
  serp: null,
  actionItems: [],
};

function addIssue(priority, category, title, description, affectedUrls = []) {
  const p = String(priority || 'medium').toLowerCase();
  auditResults.actionItems.push({
    priority: p,
    priorityScore: PRIORITY_SCORES[p] || 0,
    category,
    title,
    description,
    affectedUrls,
  });
  if (p === 'critical') auditResults.summary.criticalIssues += 1;
  if (p === 'high') auditResults.summary.highIssues += 1;
  if (p === 'medium') auditResults.summary.mediumIssues += 1;
  if (p === 'low') auditResults.summary.lowIssues += 1;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizeHost(hostname) {
  return String(hostname || '').toLowerCase().replace(/^www\./, '');
}

function ensureAbsoluteUrl(value) {
  if (!value) return null;
  const cleaned = String(value).trim().replace(/^"|"$/g, '');
  if (!cleaned) return null;
  try {
    if (/^https?:\/\//i.test(cleaned)) return new URL(cleaned).toString();
    if (cleaned.startsWith('/')) return new URL(cleaned, CONFIG.baseUrl).toString();
  } catch (_e) {
    return null;
  }
  return null;
}

function relativePathFromUrl(value) {
  try {
    const abs = ensureAbsoluteUrl(value);
    if (!abs) return null;
    const u = new URL(abs);
    let p = u.pathname || '/';
    p = p.replace(/\/+$/, '');
    if (!p) p = '/';
    return p;
  } catch (_e) {
    return null;
  }
}

function parseCsvFirstColumn(line) {
  if (!line) return '';
  const trimmed = line.trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('"')) {
    let i = 1;
    let value = '';
    while (i < trimmed.length) {
      const ch = trimmed[i];
      if (ch === '"') {
        if (trimmed[i + 1] === '"') {
          value += '"';
          i += 2;
          continue;
        }
        break;
      }
      value += ch;
      i += 1;
    }
    return value;
  }
  const comma = trimmed.indexOf(',');
  return comma === -1 ? trimmed : trimmed.slice(0, comma);
}

function classifyPageType(pathname) {
  const p = String(pathname || '/').toLowerCase();
  if (p === '/') return 'homepage';
  if (p.startsWith('/blog')) return 'blog';
  if (p.startsWith('/locations/') || p.startsWith('/neighborhoods/')) return 'location';
  if (p.startsWith('/services/')) return 'service';
  if (/^\/[^/]+$/.test(p)) {
    const slug = p.slice(1);
    if (ROOT_LOCATION_HINTS.some((hint) => slug.includes(hint))) return 'location';
    if (ROOT_SERVICE_HINTS.some((hint) => slug.includes(hint))) return 'service';
  }
  return 'other';
}

function toPlainText(html) {
  if (!html) return '';
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function wordCountFromHtml(html) {
  const text = toPlainText(html);
  return text ? text.split(' ').filter(Boolean).length : 0;
}

function extractJsonLd(html) {
  const schemas = [];
  const regex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1]);
      if (Array.isArray(parsed)) schemas.push(...parsed);
      else schemas.push(parsed);
    } catch (_e) {
      // Ignore invalid JSON-LD.
    }
  }
  return schemas;
}

function flattenSchemas(rawSchemas) {
  const flat = [];
  function walk(node) {
    if (!node) return;
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    if (typeof node !== 'object') return;
    if (node['@graph']) walk(node['@graph']);
    if (node['@type']) flat.push(node);
    Object.keys(node).forEach((key) => {
      if (key === '@type' || key === '@graph') return;
      const val = node[key];
      if (val && typeof val === 'object') walk(val);
    });
  }
  rawSchemas.forEach(walk);
  return flat;
}

function schemaTypes(schema) {
  const t = schema && schema['@type'];
  if (!t) return [];
  if (Array.isArray(t)) return t.map((x) => String(x));
  return [String(t)];
}

function hasExpectedSchema(foundTypes, expectedType) {
  if (expectedType === 'LocalBusiness') {
    return Array.from(foundTypes).some((t) => LOCAL_BUSINESS_TYPES.has(t));
  }
  return foundTypes.has(expectedType);
}

function classifyReachabilityStatus(statusCode) {
  if (statusCode >= 200 && statusCode < 400) return 'reachable';
  if ([401, 403, 429].includes(statusCode)) return 'restricted';
  if (statusCode >= 400) return 'unreachable';
  return 'unknown';
}

function scoreSeverityByVolume(volume) {
  if (volume > 500) return 'HIGH';
  if (volume >= 100) return 'MEDIUM';
  return 'LOW';
}

function percentage(part, total) {
  if (!total) return '0.0%';
  return `${((part / total) * 100).toFixed(1)}%`;
}

function escapeMd(value) {
  return String(value ?? '').replace(/\|/g, '\\|');
}

function httpRequest(urlValue, method = 'GET', headers = {}, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > 6) return reject(new Error('Too many redirects'));

    let target;
    try {
      target = new URL(urlValue);
    } catch (_e) {
      return reject(new Error(`Invalid URL: ${urlValue}`));
    }

    const protocol = target.protocol === 'https:' ? https : http;
    const req = protocol.request(target, {
      method,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SEOAuditBot/2.0; +https://www.bestroofingnow.com)',
        'Accept': '*/*',
        ...headers,
      },
      timeout: 30000,
    }, (res) => {
      const statusCode = res.statusCode || 0;
      const location = res.headers.location;
      if (statusCode >= 300 && statusCode < 400 && location) {
        res.resume();
        const nextUrl = new URL(location, target).toString();
        return httpRequest(nextUrl, method, headers, redirectCount + 1).then(resolve).catch(reject);
      }
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => resolve({ statusCode, headers: res.headers, body, finalUrl: target.toString() }));
    });
    req.on('timeout', () => req.destroy(new Error('Request timeout')));
    req.on('error', reject);
    req.end();
  });
}

function fetchPage(url) {
  return httpRequest(url, 'GET');
}

async function checkUrlReachability(url) {
  try {
    const head = await httpRequest(url, 'HEAD');
    let classification = classifyReachabilityStatus(head.statusCode);
    if (classification === 'unreachable' || classification === 'unknown') {
      const get = await httpRequest(url, 'GET');
      classification = classifyReachabilityStatus(get.statusCode);
      return { statusCode: get.statusCode, classification, finalUrl: get.finalUrl };
    }
    return { statusCode: head.statusCode, classification, finalUrl: head.finalUrl };
  } catch (_e) {
    try {
      const get = await httpRequest(url, 'GET');
      return { statusCode: get.statusCode, classification: classifyReachabilityStatus(get.statusCode), finalUrl: get.finalUrl };
    } catch (inner) {
      return { statusCode: null, classification: 'error', finalUrl: null, error: inner.message };
    }
  }
}

function makeDataForSEORequest(endpoint, postData) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(postData);
    const req = https.request({
      hostname: 'api.dataforseo.com',
      path: endpoint,
      method: 'POST',
      headers: {
        'Authorization': `Basic ${AUTH_HEADER}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
      },
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.status_code && parsed.status_code !== 20000) {
            console.log(`    API Warning (${endpoint}): ${parsed.status_message}`);
          }
          resolve(parsed);
        } catch (e) {
          reject(new Error(`JSON parse error for ${endpoint}: ${e.message}`));
        }
      });
    });
    req.on('error', reject);
    req.setTimeout(60000, () => req.destroy(new Error('Request timeout')));
    req.write(payload);
    req.end();
  });
}

function getFirstResult(response) {
  return response?.tasks?.[0]?.result?.[0] || null;
}

async function mapLimit(items, limit, worker) {
  if (!items.length) return [];
  const results = new Array(items.length);
  let idx = 0;
  async function runner() {
    while (true) {
      const i = idx;
      idx += 1;
      if (i >= items.length) return;
      try {
        results[i] = await worker(items[i], i);
      } catch (e) {
        results[i] = { error: e.message || String(e) };
      }
    }
  }
  const workers = Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, () => runner());
  await Promise.all(workers);
  return results;
}

function normalizeRelativeForGrouping(urlValue) {
  const abs = ensureAbsoluteUrl(urlValue);
  if (!abs) return '/';
  try {
    const u = new URL(abs);
    const host = normalizeHost(u.hostname);
    if (host === CONFIG.domain || host.endsWith(`.${CONFIG.domain}`)) {
      let p = u.pathname || '/';
      p = p.replace(/\/+$/, '');
      if (!p) p = '/';
      return p;
    }
    return abs;
  } catch (_e) {
    return '/';
  }
}

function buildSampleInventory() {
  return [
    { url: CONFIG.samplePages.homepage, path: '/', type: 'homepage' },
    ...CONFIG.samplePages.services.map((url) => ({ url, path: relativePathFromUrl(url), type: 'service' })),
    ...CONFIG.samplePages.locations.map((url) => ({ url, path: relativePathFromUrl(url), type: 'location' })),
    ...CONFIG.samplePages.blogs.map((url) => ({ url, path: relativePathFromUrl(url), type: 'blog' })),
  ];
}

function loadPageInventory() {
  const csvPath = path.join(__dirname, 'all-pages-complete.csv');
  if (!fs.existsSync(csvPath)) return buildSampleInventory();

  const lines = fs.readFileSync(csvPath, 'utf8').split(/\r?\n/);
  const dedup = new Map();
  lines.forEach((line, index) => {
    if (!line || !line.trim()) return;
    if (index === 0 && /url/i.test(line)) return;
    const first = parseCsvFirstColumn(line);
    const abs = ensureAbsoluteUrl(first);
    const rel = relativePathFromUrl(abs);
    if (!abs || !rel || dedup.has(rel)) return;
    dedup.set(rel, { url: abs, path: rel, type: classifyPageType(rel) });
  });
  if (!dedup.has('/')) dedup.set('/', { url: ensureAbsoluteUrl('/'), path: '/', type: 'homepage' });
  return Array.from(dedup.values()).sort((a, b) => a.path.localeCompare(b.path));
}

function pickPagesForMode(pageInventory, purpose) {
  if (RUN_MODE === 'baseline') {
    if (purpose === 'technical') {
      return [
        { url: CONFIG.samplePages.homepage, path: '/', type: 'homepage' },
        { url: CONFIG.samplePages.services[0], path: relativePathFromUrl(CONFIG.samplePages.services[0]), type: 'service' },
        { url: CONFIG.samplePages.locations[0], path: relativePathFromUrl(CONFIG.samplePages.locations[0]), type: 'location' },
      ];
    }
    if (purpose === 'schema') {
      return [
        { url: CONFIG.samplePages.homepage, path: '/', type: 'homepage' },
        { url: CONFIG.samplePages.services[0], path: relativePathFromUrl(CONFIG.samplePages.services[0]), type: 'service' },
        { url: CONFIG.samplePages.locations[0], path: relativePathFromUrl(CONFIG.samplePages.locations[0]), type: 'location' },
        { url: CONFIG.samplePages.blogs[0], path: relativePathFromUrl(CONFIG.samplePages.blogs[0]), type: 'blog' },
      ];
    }
    return buildSampleInventory();
  }

  if (purpose === 'technical') {
    const homepage = pageInventory.find((p) => p.type === 'homepage') || pageInventory[0];
    const services = pageInventory.filter((p) => p.type === 'service').slice(0, 3);
    const locations = pageInventory.filter((p) => p.type === 'location').slice(0, 2);
    const blogs = pageInventory.filter((p) => p.type === 'blog').slice(0, 2);
    const selected = [homepage, ...services, ...locations, ...blogs].filter(Boolean);
    const dedup = new Map();
    selected.forEach((p) => { if (!dedup.has(p.path)) dedup.set(p.path, p); });
    if (dedup.size < 8) {
      for (const page of pageInventory) {
        if (!dedup.has(page.path)) {
          dedup.set(page.path, page);
          if (dedup.size >= 8) break;
        }
      }
    }
    return Array.from(dedup.values()).slice(0, 8);
  }

  return pageInventory;
}

let rankedKeywordsCache = null;

async function getRankedKeywords() {
  if (rankedKeywordsCache) return rankedKeywordsCache;

  async function requestByLocation(locationCode) {
    const response = await makeDataForSEORequest('/v3/dataforseo_labs/google/ranked_keywords/live', [{
      target: CONFIG.domain,
      location_code: locationCode,
      language_code: CONFIG.languageCode,
      limit: 1000,
      order_by: ['keyword_data.keyword_info.search_volume,desc'],
    }]);
    return getFirstResult(response)?.items || [];
  }

  let items = await requestByLocation(activeLabsLocationCode);

  if (!items.length && GEO_TARGET === 'charlotte' && activeLabsLocationCode !== CONFIG.locationCodeUS) {
    const fallbackItems = await requestByLocation(CONFIG.locationCodeUS);
    if (fallbackItems.length) {
      items = fallbackItems;
      activeLabsLocationCode = CONFIG.locationCodeUS;
      activeLabsLocationName = CONFIG.locationNameUS;
      labsFallbackApplied = true;
      auditResults.meta.activeLabsLocationCode = activeLabsLocationCode;
      auditResults.meta.activeLabsLocationName = activeLabsLocationName;
      auditResults.meta.labsFallbackApplied = true;
      console.log(`  DataForSEO Labs fallback applied: using location_code ${activeLabsLocationCode} (${activeLabsLocationName})`);
    }
  }

  rankedKeywordsCache = items.map((item) => {
    const info = item?.keyword_data?.keyword_info || {};
    const position = item?.ranked_serp_element?.serp_item?.rank_absolute;
    return {
      keyword: item?.keyword_data?.keyword || null,
      position: typeof position === 'number' ? position : null,
      searchVolume: info.search_volume || 0,
      cpc: info.cpc || 0,
      url: item?.ranked_serp_element?.serp_item?.url || null,
      serpItemTypes: Array.isArray(info.serp_item_types) ? info.serp_item_types : [],
      isFeaturedSnippet: Boolean(info.is_featured_snippet),
    };
  }).filter((row) => row.keyword);
  return rankedKeywordsCache;
}

async function analyzeCannibalization() {
  console.log('\n' + '='.repeat(70));
  console.log('1. KEYWORD CANNIBALIZATION ANALYSIS');
  console.log('='.repeat(70));
  try {
    const keywords = await getRankedKeywords();
    if (!keywords.length) {
      auditResults.cannibalization = {
        summary: { totalCannibalized: 0, highSeverity: 0, mediumSeverity: 0, lowSeverity: 0 },
        highSeverityIssues: [],
        mediumSeverityIssues: [],
        lowSeverityIssues: [],
      };
      return;
    }
    const keywordToUrls = new Map();
    keywords.forEach((k) => {
      if (!k.keyword || !k.url) return;
      const key = k.keyword.toLowerCase();
      if (!keywordToUrls.has(key)) keywordToUrls.set(key, []);
      keywordToUrls.get(key).push(k);
    });

    const cannibalized = [];
    keywordToUrls.forEach((entries, keyword) => {
      const uniqueUrls = new Map();
      entries.forEach((entry) => {
        const rel = normalizeRelativeForGrouping(entry.url);
        if (!uniqueUrls.has(rel)) uniqueUrls.set(rel, { url: rel, position: entry.position, searchVolume: entry.searchVolume });
      });
      const urls = Array.from(uniqueUrls.values()).sort((a, b) => (a.position || 999) - (b.position || 999));
      if (urls.length > 1) {
        const searchVolume = urls[0].searchVolume || 0;
        const severity = scoreSeverityByVolume(searchVolume);
        const keep = urls[0].url;
        cannibalized.push({
          keyword,
          searchVolume,
          severity,
          urls,
          recommendation: urls.length === 2
            ? `Consolidate toward ${keep} or differentiate intent`
            : `Consolidate overlapping URLs and keep strongest page (${keep})`,
        });
      }
    });
    cannibalized.sort((a, b) => b.searchVolume - a.searchVolume);
    const high = cannibalized.filter((x) => x.severity === 'HIGH');
    const medium = cannibalized.filter((x) => x.severity === 'MEDIUM');
    const low = cannibalized.filter((x) => x.severity === 'LOW');
    auditResults.cannibalization = {
      summary: { totalCannibalized: cannibalized.length, highSeverity: high.length, mediumSeverity: medium.length, lowSeverity: low.length },
      highSeverityIssues: high.slice(0, 25),
      mediumSeverityIssues: medium.slice(0, 25),
      lowSeverityIssues: low.slice(0, 25),
    };
    high.forEach((item) => {
      addIssue('high', 'cannibalization', `Keyword cannibalization: "${item.keyword}"`, `${item.urls.length} pages compete for volume ${item.searchVolume}. ${item.recommendation}`, item.urls.map((u) => u.url));
    });
    console.log(`  Cannibalized Keywords: ${cannibalized.length}`);
    console.log(`    HIGH: ${high.length} | MEDIUM: ${medium.length} | LOW: ${low.length}`);
  } catch (e) {
    addIssue('high', 'cannibalization', 'Cannibalization analysis failed', e.message);
  }
}

async function analyzeOnPage(pageInventory) {
  console.log('\n' + '='.repeat(70));
  console.log('2. ON-PAGE SEO ANALYSIS');
  console.log('='.repeat(70));

  const pages = pickPagesForMode(pageInventory, 'onPage');
  const rows = await mapLimit(pages, RUN_MODE === 'baseline' ? 3 : 8, async (page) => {
    await delay(80);
    try {
      const res = await fetchPage(page.url);
      const html = res.body || '';
      const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      const title = titleMatch ? toPlainText(titleMatch[1]) : '';
      const descMatch =
        html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
        html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
      const description = descMatch ? descMatch[1].trim() : '';
      const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => toPlainText(m[1]));
      const h2s = [...html.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => toPlainText(m[1]));
      const imgs = html.match(/<img\b[^>]*>/gi) || [];
      const withAlt = imgs.filter((img) => /\balt=["'][^"']+["']/i.test(img)).length;
      const withoutAlt = imgs.length - withAlt;
      const internalLinks = html.match(/href=["'](\/[^"'#]*|https?:\/\/(?:www\.)?bestroofingnow\.com[^"']*)["']/gi) || [];
      const wc = wordCountFromHtml(html);
      const density = Number(((internalLinks.length / Math.max(1, wc)) * 1000).toFixed(2));
      const target = BENCHMARKS[page.type] ?? BENCHMARKS.other;
      const issues = [];
      if (title.length < 30) issues.push('Title too short (<30 chars)');
      if (title.length > 60) issues.push('Title too long (>60 chars)');
      if (description.length < 120) issues.push('Description too short (<120 chars)');
      if (description.length > 160) issues.push('Description too long (>160 chars)');
      if (h1s.length === 0) issues.push('Missing H1 tag');
      if (h1s.length > 1) issues.push(`Multiple H1 tags (${h1s.length})`);
      if (h2s.length === 0) issues.push('No H2 headings found');
      if (withoutAlt > 0) issues.push(`${withoutAlt} images missing alt text`);
      if (wc < target) issues.push(`Content below benchmark (${wc} < ${target})`);
      if (density < 1) issues.push(`Low internal link density (${density} per 1000 words)`);
      issues.forEach((issue) => addIssue('medium', 'onPage', issue, `Found on ${page.path}`, [page.path]));
      return {
        url: page.path,
        type: page.type,
        statusCode: res.statusCode,
        titleLength: title.length,
        descriptionLength: description.length,
        h1Count: h1s.length,
        h2Count: h2s.length,
        imagesTotal: imgs.length,
        imagesWithoutAlt: withoutAlt,
        wordCount: wc,
        internalLinks: internalLinks.length,
        internalLinkDensity: density,
        issues,
      };
    } catch (e) {
      addIssue('medium', 'onPage', 'Page fetch failed', `${page.path}: ${e.message}`, [page.path]);
      return { url: page.path, type: page.type, error: e.message };
    }
  });

  const valid = rows.filter((r) => !r.error);
  const withIssues = rows.filter((r) => r.error || (r.issues && r.issues.length > 0));
  auditResults.onPage = {
    summary: {
      pagesAnalyzed: rows.length,
      pagesWithIssues: withIssues.length,
      avgTitleLength: valid.length ? Math.round(valid.reduce((s, r) => s + r.titleLength, 0) / valid.length) : 0,
      avgDescriptionLength: valid.length ? Math.round(valid.reduce((s, r) => s + r.descriptionLength, 0) / valid.length) : 0,
      avgWordCount: valid.length ? Math.round(valid.reduce((s, r) => s + r.wordCount, 0) / valid.length) : 0,
      avgInternalLinkDensity: valid.length ? Number((valid.reduce((s, r) => s + r.internalLinkDensity, 0) / valid.length).toFixed(2)) : 0,
      coverageMode: RUN_MODE === 'baseline' ? 'sample' : 'full-inventory',
    },
    pages: rows,
  };
  console.log(`  Pages analyzed: ${rows.length}`);
  console.log(`  Pages with issues: ${withIssues.length}`);
}

async function analyzeTechnical(pageInventory) {
  console.log('\n' + '='.repeat(70));
  console.log('3. TECHNICAL SEO (LIGHTHOUSE)');
  console.log('='.repeat(70));

  const pages = pickPagesForMode(pageInventory, 'technical');
  const rows = [];

  for (const page of pages) {
    await delay(300);
    try {
      const response = await makeDataForSEORequest('/v3/on_page/lighthouse/live', [{
        url: page.url,
        for_mobile: true,
        categories: ['performance', 'accessibility', 'best-practices', 'seo'],
      }]);
      const raw = getFirstResult(response);
      const data = raw?.items?.[0] || raw;
      if (!data) {
        addIssue('medium', 'technical', 'Lighthouse data unavailable', `No lighthouse result for ${page.path}`, [page.path]);
        rows.push({ url: page.path, error: 'No lighthouse data' });
        continue;
      }
      const categories = data.categories || {};
      const audits = data.audits || {};
      const perf = Math.round((categories.performance?.score || 0) * 100);
      const seo = Math.round((categories.seo?.score || 0) * 100);
      const acc = Math.round((categories.accessibility?.score || 0) * 100);
      const bp = Math.round((categories['best-practices']?.score || 0) * 100);
      const lcp = audits['largest-contentful-paint']?.numericValue || null;
      const fid = audits['max-potential-fid']?.numericValue || null;
      const cls = audits['cumulative-layout-shift']?.numericValue || null;
      const issues = [];
      if (typeof lcp === 'number' && lcp > 2500) issues.push(`LCP ${Math.round(lcp)}ms > 2500ms`);
      if (typeof fid === 'number' && fid > 100) issues.push(`FID ${Math.round(fid)}ms > 100ms`);
      if (typeof cls === 'number' && cls > 0.1) issues.push(`CLS ${cls.toFixed(3)} > 0.1`);
      if (perf < 50) issues.push(`Performance score ${perf} < 50`);
      if (seo < 90) issues.push(`SEO score ${seo} < 90`);
      issues.forEach((issue) => addIssue('high', 'technical', issue, `Core Web Vitals issue on ${page.path}`, [page.path]));
      rows.push({ url: page.path, performance: perf, seo, accessibility: acc, bestPractices: bp, coreWebVitals: { lcp, fid, cls }, issues });
    } catch (e) {
      addIssue('medium', 'technical', 'Technical analysis request failed', `${page.path}: ${e.message}`, [page.path]);
      rows.push({ url: page.path, error: e.message });
    }
  }

  const valid = rows.filter((r) => typeof r.performance === 'number');
  auditResults.technical = {
    summary: {
      pagesAnalyzed: rows.length,
      avgPerformance: valid.length ? Math.round(valid.reduce((s, r) => s + r.performance, 0) / valid.length) : null,
      avgSEO: valid.length ? Math.round(valid.reduce((s, r) => s + r.seo, 0) / valid.length) : null,
      pagesWithCWVIssues: rows.filter((r) => r.issues && r.issues.length > 0).length,
      sampleSet: pages.map((p) => p.path),
    },
    pages: rows,
  };
  console.log(`  Pages tested: ${rows.length}`);
}

async function auditSchema(pageInventory) {
  console.log('\n' + '='.repeat(70));
  console.log('4. SCHEMA MARKUP AUDIT');
  console.log('='.repeat(70));

  const pages = pickPagesForMode(pageInventory, 'schema');
  const rows = await mapLimit(pages, RUN_MODE === 'baseline' ? 3 : 8, async (page) => {
    await delay(60);
    try {
      const res = await fetchPage(page.url);
      const flat = flattenSchemas(extractJsonLd(res.body || ''));
      const foundTypes = new Set();
      flat.forEach((schema) => schemaTypes(schema).forEach((type) => foundTypes.add(type)));
      const expected = CONFIG.expectedSchemas[page.type] || CONFIG.expectedSchemas.other;
      const missing = expected.filter((type) => !hasExpectedSchema(foundTypes, type));
      const issues = [];
      const local = flat.find((schema) => schemaTypes(schema).some((type) => LOCAL_BUSINESS_TYPES.has(type)));
      if (local) {
        ['name', 'address', 'telephone', 'url'].forEach((field) => {
          if (!local[field]) issues.push(`LocalBusiness missing ${field}`);
        });
      }
      const service = flat.find((schema) => schemaTypes(schema).includes('Service'));
      if (service) {
        ['name', 'provider'].forEach((field) => {
          if (!service[field]) issues.push(`Service schema missing ${field}`);
        });
      }
      const article = flat.find((schema) => schemaTypes(schema).includes('Article'));
      if (article) {
        ['headline', 'datePublished', 'author'].forEach((field) => {
          if (!article[field]) issues.push(`Article schema missing ${field}`);
        });
      }
      const faq = flat.find((schema) => schemaTypes(schema).includes('FAQPage'));
      if (faq && !faq.mainEntity) issues.push('FAQPage schema missing mainEntity');
      if (missing.length) addIssue('medium', 'schema', `Missing schema on ${page.path}`, `Missing: ${missing.join(', ')}`, [page.path]);
      issues.forEach((issue) => addIssue('medium', 'schema', issue, `Schema validation issue on ${page.path}`, [page.path]));
      return {
        url: page.path,
        type: page.type,
        foundSchemas: Array.from(foundTypes),
        expectedSchemas: expected,
        missingSchemas: missing,
        schemaCount: flat.length,
        issues,
        hasAllRequired: missing.length === 0 && issues.length === 0,
      };
    } catch (e) {
      addIssue('medium', 'schema', 'Schema audit fetch failed', `${page.path}: ${e.message}`, [page.path]);
      return { url: page.path, type: page.type, error: e.message };
    }
  });

  const valid = rows.filter((r) => !r.error);
  auditResults.schema = {
    summary: {
      pagesAnalyzed: rows.length,
      pagesWithAllSchemas: valid.filter((r) => r.hasAllRequired).length,
      pagesWithMissingSchemas: valid.filter((r) => (r.missingSchemas || []).length > 0).length,
      coverageMode: RUN_MODE === 'baseline' ? 'sample' : 'full-inventory',
    },
    pages: rows,
  };
  console.log(`  Pages analyzed: ${rows.length}`);
}

function categorizeAnchorText(anchorText) {
  const text = String(anchorText || '').toLowerCase().trim();
  if (!text) return 'generic';
  const brandTerms = ['best roofing now', 'bestroofingnow', 'brn'];
  const exactTerms = ['roofing charlotte nc', 'roofers charlotte nc', 'roofing company charlotte nc', 'roof repair charlotte nc', 'roof replacement charlotte nc'];
  const genericTerms = ['click', 'click here', 'here', 'website', 'read more', 'link'];
  if (/https?:\/\//.test(text) || /www\./.test(text) || /bestroofingnow\.com/.test(text)) return 'url';
  if (brandTerms.some((term) => text.includes(term))) return 'branded';
  if (exactTerms.includes(text)) return 'exactMatch';
  if (genericTerms.some((term) => text === term || text.includes(term))) return 'generic';
  if (text.includes('roof')) return 'partial';
  return 'other';
}

async function analyzeBacklinks() {
  console.log('\n' + '='.repeat(70));
  console.log('5. BACKLINK PROFILE ANALYSIS');
  console.log('='.repeat(70));
  try {
    const summaryResponse = await makeDataForSEORequest('/v3/backlinks/summary/live', [{ target: CONFIG.domain, include_subdomains: true }]);
    const summaryData = getFirstResult(summaryResponse);
    let summary = {
      totalBacklinks: 0,
      referringDomains: 0,
      dofollow: 0,
      nofollow: 0,
      domainRank: 0,
      brokenBacklinks: 0,
      spamScore: null,
      spamScoreNote: 'DataForSEO summary response did not include backlink summary',
    };
    if (summaryData) {
      const referringDomains = summaryData.referring_domains ?? 0;
      const nofollow = summaryData.referring_domains_nofollow ?? 0;
      const spamScore = typeof summaryData.spam_score === 'number'
        ? summaryData.spam_score
        : (typeof summaryData.spam === 'number' ? summaryData.spam : null);
      summary = {
        totalBacklinks: summaryData.backlinks ?? summaryData.total_backlinks ?? 0,
        referringDomains,
        dofollow: Math.max(0, referringDomains - nofollow),
        nofollow,
        domainRank: summaryData.rank ?? summaryData.domain_rank ?? 0,
        brokenBacklinks: summaryData.broken_backlinks ?? 0,
        spamScore,
        spamScoreNote: spamScore === null ? 'DataForSEO summary response did not include spam score' : null,
      };
    } else {
      addIssue('medium', 'backlinks', 'Backlink summary unavailable', 'DataForSEO backlinks/summary returned no usable result.');
    }

    await delay(300);
    const anchorsResponse = await makeDataForSEORequest('/v3/backlinks/anchors/live', [{ target: CONFIG.domain, limit: 100, order_by: ['backlinks,desc'] }]);
    const anchorItems = getFirstResult(anchorsResponse)?.items || [];
    let anchorDistribution = null;
    if (anchorItems.length) {
      const bucket = { branded: 0, exactMatch: 0, partial: 0, generic: 0, url: 0, other: 0 };
      let total = 0;
      const topAnchors = [];
      anchorItems.slice(0, 100).forEach((anchor) => {
        const count = anchor.backlinks || 0;
        total += count;
        const cat = categorizeAnchorText(anchor.anchor);
        if (!Object.prototype.hasOwnProperty.call(bucket, cat)) bucket.other += count;
        else bucket[cat] += count;
        topAnchors.push({ anchor: anchor.anchor, backlinks: count, category: cat });
      });
      anchorDistribution = {
        total,
        distribution: {
          branded: percentage(bucket.branded, total),
          exactMatch: percentage(bucket.exactMatch, total),
          partial: percentage(bucket.partial, total),
          generic: percentage(bucket.generic, total),
          url: percentage(bucket.url, total),
          other: percentage(bucket.other, total),
        },
        topAnchors: topAnchors.slice(0, 20),
      };
    }

    if (summary.referringDomains > 0 && summary.referringDomains < 50) addIssue('high', 'backlinks', 'Low referring domain count', `Only ${summary.referringDomains} referring domains.`);
    if (summary.brokenBacklinks > 10) addIssue('medium', 'backlinks', 'Broken backlinks detected', `${summary.brokenBacklinks} broken backlinks found.`);
    if (typeof summary.spamScore === 'number' && summary.spamScore > 40) addIssue('high', 'backlinks', 'Elevated backlink spam score', `Spam score is ${summary.spamScore}.`);

    auditResults.backlinks = { summary, anchorDistribution };
  } catch (e) {
    addIssue('high', 'backlinks', 'Backlink analysis failed', e.message);
  }
}

function domainIsCompetitor(domain) {
  const normalized = normalizeHost(domain);
  if (!normalized || normalized === CONFIG.domain || normalized.endsWith(`.${CONFIG.domain}`)) return false;
  for (const excluded of EXCLUDED_COMPETITOR_DOMAINS) {
    if (normalized === excluded || normalized.endsWith(`.${excluded}`)) return false;
  }
  return true;
}

function extractSerpFeatureInfo(item) {
  const info = item?.keyword_data?.keyword_info || {};
  const types = Array.isArray(info.serp_item_types)
    ? info.serp_item_types
    : (Array.isArray(item?.serp_item_types) ? item.serp_item_types : []);
  return {
    types: Array.from(new Set(types.filter(Boolean))),
    featuredSnippet: Boolean(info.is_featured_snippet || item?.is_featured_snippet),
  };
}

async function querySerpFeaturesForKeyword(keyword) {
  try {
    const response = await makeDataForSEORequest('/v3/serp/google/organic/live/regular', [{
      keyword,
      location_name: CONFIG.locationName,
      language_name: 'English',
      depth: 20,
    }]);
    const result = getFirstResult(response);
    const types = Array.from(new Set((result?.items || []).map((item) => item.type).filter(Boolean)));
    return { types, featuredSnippet: types.includes('featured_snippet') };
  } catch (e) {
    return { types: [], featuredSnippet: false, error: e.message };
  }
}

async function analyzeContentGap() {
  console.log('\n' + '='.repeat(70));
  console.log('6. CONTENT GAP ANALYSIS');
  console.log('='.repeat(70));
  try {
    const competitorsResponse = await makeDataForSEORequest('/v3/dataforseo_labs/google/competitors_domain/live', [{
      target: CONFIG.domain,
      location_code: activeLabsLocationCode,
      language_code: CONFIG.languageCode,
      limit: 20,
    }]);
    const competitorItems = getFirstResult(competitorsResponse)?.items || [];
    let topCompetitors = competitorItems
      .map((item) => ({ domain: item.domain, intersections: item.intersections || 0, relevance: item.full_domain_metrics?.organic?.etv || 0 }))
      .filter((item) => domainIsCompetitor(item.domain))
      .slice(0, 5);
    if (topCompetitors.length < 5) {
      CONFIG.competitorsFallback.forEach((domain) => {
        if (topCompetitors.length >= 5) return;
        if (!topCompetitors.some((item) => normalizeHost(item.domain) === normalizeHost(domain))) {
          topCompetitors.push({ domain, intersections: null, relevance: null, source: 'fallback' });
        }
      });
    }

    const ranked = await getRankedKeywords();
    const ourMap = new Map();
    ranked.forEach((item) => {
      const key = item.keyword.toLowerCase();
      const cur = ourMap.get(key);
      if (!cur || ((item.position || 999) < (cur.position || 999))) ourMap.set(key, item);
    });

    const gapMap = new Map();
    const featureMap = new Map();

    for (const competitor of topCompetitors.slice(0, 5)) {
      await delay(350);
      try {
        const gapResponse = await makeDataForSEORequest('/v3/dataforseo_labs/google/domain_intersection/live', [{
          target1: CONFIG.domain,
          target2: competitor.domain,
          location_code: activeLabsLocationCode,
          language_code: CONFIG.languageCode,
          intersections: false,
          limit: 100,
          order_by: ['keyword_data.keyword_info.search_volume,desc'],
        }]);
        const items = getFirstResult(gapResponse)?.items || [];
        items.forEach((item) => {
          const keyword = item?.keyword_data?.keyword;
          if (!keyword) return;
          const key = keyword.toLowerCase();
          const searchVolume = item?.keyword_data?.keyword_info?.search_volume || 0;
          const ourPosFromIntersection = item?.first_domain_serp_element?.serp_item?.rank_absolute;
          const theirPos = item?.second_domain_serp_element?.serp_item?.rank_absolute;
          const mapEntry = ourMap.get(key);
          const ourPos = typeof ourPosFromIntersection === 'number'
            ? ourPosFromIntersection
            : (typeof mapEntry?.position === 'number' ? mapEntry.position : 999);
          const competitorPos = typeof theirPos === 'number' ? theirPos : 999;
          const features = extractSerpFeatureInfo(item);
          const hasFeature = features.featuredSnippet || features.types.some((type) => SERP_FEATURE_TYPES.has(type));
          if (hasFeature) {
            const current = featureMap.get(key);
            const row = {
              keyword,
              searchVolume,
              featureTypes: features.types,
              featuredSnippet: features.featuredSnippet,
              ourPosition: ourPos === 999 ? 'Not ranked' : ourPos,
              competitorPosition: competitorPos === 999 ? 'Unknown' : competitorPos,
              competitorDomain: competitor.domain,
            };
            if (!current || current.searchVolume < searchVolume) featureMap.set(key, row);
          }
          if (competitorPos <= 20 && ourPos > 30) {
            const current = gapMap.get(key);
            const row = {
              keyword,
              searchVolume,
              ourPosition: ourPos === 999 ? 'Not ranked' : ourPos,
              competitorPosition: competitorPos,
              competitorDomain: competitor.domain,
            };
            if (!current || current.searchVolume < searchVolume) gapMap.set(key, row);
          }
        });
      } catch (innerErr) {
        addIssue('medium', 'contentGap', 'Competitor gap request failed', `${competitor.domain}: ${innerErr.message}`);
      }
    }

    const keywordGaps = Array.from(gapMap.values()).sort((a, b) => b.searchVolume - a.searchVolume);
    const strikingDistance = ranked
      .filter((item) => typeof item.position === 'number' && item.position >= 11 && item.position <= 30)
      .map((item) => ({ keyword: item.keyword, position: item.position, searchVolume: item.searchVolume, url: normalizeRelativeForGrouping(item.url) }))
      .sort((a, b) => b.searchVolume - a.searchVolume);

    if (featureMap.size === 0 && keywordGaps.length > 0) {
      for (const gap of keywordGaps.slice(0, 10)) {
        await delay(250);
        const feature = await querySerpFeaturesForKeyword(gap.keyword);
        if (feature.featuredSnippet || feature.types.some((type) => SERP_FEATURE_TYPES.has(type))) {
          featureMap.set(gap.keyword.toLowerCase(), {
            keyword: gap.keyword,
            searchVolume: gap.searchVolume,
            featureTypes: feature.types,
            featuredSnippet: feature.featuredSnippet,
            ourPosition: gap.ourPosition,
            competitorPosition: gap.competitorPosition,
            competitorDomain: gap.competitorDomain,
          });
        }
      }
    }

    const strikingVolume = strikingDistance.reduce((s, row) => s + row.searchVolume, 0);
    const totalOpportunityVolume = keywordGaps.reduce((s, row) => s + row.searchVolume, 0);
    const serpFeatureOpportunities = Array.from(featureMap.values()).sort((a, b) => b.searchVolume - a.searchVolume).slice(0, 40);

    if (keywordGaps.length > 25) addIssue('high', 'contentGap', 'Large competitor keyword gap', `${keywordGaps.length} high-value keywords where competitors rank top 20 and we are >30 or not ranked.`);
    else if (keywordGaps.length > 0) addIssue('medium', 'contentGap', 'Competitor keyword opportunities identified', `${keywordGaps.length} keyword gaps with ${totalOpportunityVolume.toLocaleString()} total monthly volume.`);
    if (strikingDistance.length > 0) addIssue('medium', 'contentGap', `${strikingDistance.length} keywords in striking distance`, `${strikingDistance.length} keywords rank 11-30 with ${strikingVolume.toLocaleString()} total volume.`);

    auditResults.contentGap = {
      topCompetitors,
      keywordGaps: keywordGaps.slice(0, 50),
      totalOpportunityVolume,
      strikingDistance: { count: strikingDistance.length, totalVolume: strikingVolume, keywords: strikingDistance.slice(0, 50) },
      serpFeatureOpportunities,
    };
    console.log(`  Keyword gaps: ${keywordGaps.length}`);
    console.log(`  Striking distance: ${strikingDistance.length}`);
    console.log(`  SERP feature opportunities: ${serpFeatureOpportunities.length}`);
  } catch (e) {
    addIssue('high', 'contentGap', 'Content gap analysis failed', e.message);
  }
}

async function analyzeLocalSEO() {
  console.log('\n' + '='.repeat(70));
  console.log('7. LOCAL SEO SIGNALS');
  console.log('='.repeat(70));

  const localKeywords = [
    'roofing charlotte nc',
    'roofers charlotte nc',
    'roofing company charlotte nc',
    'roof repair charlotte nc',
    'roof replacement charlotte nc',
    'roofing lake norman nc',
    'roofers huntersville nc',
    'commercial roofing charlotte',
  ];

  let ranked = [];
  try { ranked = await getRankedKeywords(); } catch (e) { addIssue('high', 'localSEO', 'Local ranking data unavailable', e.message); }
  const localRankings = localKeywords.map((keyword) => {
    const found = ranked.find((row) => row.keyword.toLowerCase() === keyword.toLowerCase());
    return { keyword, position: typeof found?.position === 'number' ? found.position : 'Not ranked', searchVolume: found?.searchVolume || 0 };
  });

  let napConsistency = { name: false, address: false, phone: false };
  let hasLocalBusinessSchema = false;
  try {
    const homepage = await fetchPage(CONFIG.baseUrl);
    const html = homepage.body || '';
    napConsistency = {
      name: html.includes(CONFIG.nap.name),
      address: html.includes('10130 Mallard Creek') || html.includes('Charlotte, NC 28262'),
      phone: html.includes(CONFIG.nap.phone) || html.includes(CONFIG.nap.phone.replace(/[()\-\s]/g, '')),
    };
    const schemas = flattenSchemas(extractJsonLd(html));
    hasLocalBusinessSchema = schemas.some((schema) => schemaTypes(schema).some((type) => LOCAL_BUSINESS_TYPES.has(type)));
  } catch (e) {
    addIssue('medium', 'localSEO', 'Failed to validate homepage NAP/schema', e.message, ['/']);
  }

  const directoryRows = await mapLimit(DIRECTORY_LISTINGS, 3, async (listing) => {
    await delay(120);
    const status = await checkUrlReachability(listing.url);
    return { name: listing.name, url: listing.url, priority: listing.priority, statusCode: status.statusCode, classification: status.classification, finalUrl: status.finalUrl, error: status.error || null };
  });
  const directorySummary = {
    total: directoryRows.length,
    reachable: directoryRows.filter((row) => row.classification === 'reachable').length,
    restricted: directoryRows.filter((row) => row.classification === 'restricted').length,
    unreachable: directoryRows.filter((row) => row.classification === 'unreachable').length,
    errors: directoryRows.filter((row) => row.classification === 'error').length,
  };

  if (!hasLocalBusinessSchema) addIssue('high', 'localSEO', 'Missing LocalBusiness schema on homepage', 'Add LocalBusiness or RoofingContractor schema to homepage', ['/']);
  const notRanked = localRankings.filter((row) => row.position === 'Not ranked');
  if (notRanked.length > 0) addIssue('high', 'localSEO', `Not ranking for ${notRanked.length} local keywords`, `Missing rankings for: ${notRanked.map((row) => row.keyword).join(', ')}`);
  const poor = localRankings.filter((row) => typeof row.position === 'number' && row.position > 20);
  if (poor.length > 0) addIssue('medium', 'localSEO', `${poor.length} local keywords outside top 20`, `Improve rankings for: ${poor.map((row) => `${row.keyword} (#${row.position})`).join(', ')}`);
  if (directorySummary.reachable < 6) addIssue('medium', 'localSEO', 'Directory presence gaps detected', `${directorySummary.reachable}/${directorySummary.total} priority directories are directly reachable.`);

  auditResults.localSEO = {
    localRankings,
    napConsistency,
    hasLocalBusinessSchema,
    directoryPresence: { summary: directorySummary, listings: directoryRows },
  };
}

async function analyzeSERP() {
  console.log('\n' + '='.repeat(70));
  console.log('8. SERP PERFORMANCE ANALYSIS');
  console.log('='.repeat(70));
  try {
    const keywords = await getRankedKeywords();
    if (!keywords.length) {
      addIssue('critical', 'serp', 'No ranked keyword data found', 'SERP analysis returned no ranked keywords.');
      auditResults.serp = { summary: { totalKeywords: 0, totalVolume: 0, top10Volume: 0, visibilityScore: 0, estimatedTraffic: 0 }, positionDistribution: { top3: 0, top10: 0, top20: 0, top50: 0, top100: 0 }, topKeywords: [], topPages: [] };
      return;
    }
    const distribution = {
      top3: keywords.filter((row) => row.position && row.position <= 3).length,
      top10: keywords.filter((row) => row.position && row.position <= 10).length,
      top20: keywords.filter((row) => row.position && row.position <= 20).length,
      top50: keywords.filter((row) => row.position && row.position <= 50).length,
      top100: keywords.filter((row) => row.position && row.position <= 100).length,
    };
    const totalVolume = keywords.reduce((s, row) => s + row.searchVolume, 0);
    const top10Volume = keywords.filter((row) => row.position && row.position <= 10).reduce((s, row) => s + row.searchVolume, 0);
    let visibilityScore = 0;
    keywords.forEach((row) => {
      if (!row.position || row.position > 100) return;
      visibilityScore += Math.max(0, 101 - row.position) * Math.max(1, row.searchVolume);
    });
    const ctr = { 1: 0.32, 2: 0.17, 3: 0.11, 4: 0.08, 5: 0.06, 6: 0.05, 7: 0.04, 8: 0.03, 9: 0.03, 10: 0.02 };
    let estimatedTraffic = 0;
    keywords.forEach((row) => { if (row.position && row.position <= 10) estimatedTraffic += row.searchVolume * (ctr[row.position] || 0.02); });
    const pageMap = new Map();
    keywords.forEach((row) => {
      const page = normalizeRelativeForGrouping(row.url);
      if (!pageMap.has(page)) pageMap.set(page, { keywords: 0, volume: 0, bestPosition: 999 });
      const cur = pageMap.get(page);
      cur.keywords += 1;
      cur.volume += row.searchVolume;
      if (row.position && row.position < cur.bestPosition) cur.bestPosition = row.position;
    });
    const topPages = Array.from(pageMap.entries()).map(([url, m]) => ({ url, ...m })).sort((a, b) => b.volume - a.volume).slice(0, 25);
    auditResults.serp = {
      summary: { totalKeywords: keywords.length, totalVolume, top10Volume, visibilityScore, estimatedTraffic: Math.round(estimatedTraffic) },
      positionDistribution: distribution,
      topKeywords: keywords.slice(0, 100),
      topPages,
    };
    if (distribution.top10 < 5) addIssue('critical', 'serp', 'Very few top 10 rankings', `Only ${distribution.top10} keywords in top 10.`);
    if (distribution.top3 === 0) addIssue('high', 'serp', 'No top 3 rankings', 'No tracked keywords are in positions 1-3.');
  } catch (e) {
    addIssue('critical', 'serp', 'SERP performance analysis failed', e.message);
  }
}

function calculateOverallScore() {
  const cannibalizationScore = (() => {
    const high = auditResults.cannibalization?.summary?.highSeverity ?? 0;
    if (high === 0) return 100;
    if (high < 5) return 70;
    return 40;
  })();
  const onPageScore = (() => {
    const analyzed = auditResults.onPage?.summary?.pagesAnalyzed ?? 0;
    const withIssues = auditResults.onPage?.summary?.pagesWithIssues ?? analyzed;
    if (!analyzed) return 50;
    return Math.max(30, Math.round(100 - (withIssues / analyzed) * 70));
  })();
  const technicalScore = (() => {
    const avg = auditResults.technical?.summary?.avgPerformance;
    return typeof avg === 'number' ? avg : 50;
  })();
  const schemaScore = (() => {
    const analyzed = auditResults.schema?.summary?.pagesAnalyzed ?? 0;
    const complete = auditResults.schema?.summary?.pagesWithAllSchemas ?? 0;
    if (!analyzed) return 50;
    return Math.round((complete / analyzed) * 100);
  })();
  const backlinksScore = (() => {
    const summary = auditResults.backlinks?.summary;
    if (!summary) return 50;
    let score = summary.referringDomains > 100 ? 90 : summary.referringDomains > 50 ? 70 : 40;
    if (typeof summary.spamScore === 'number' && summary.spamScore > 30) score -= 15;
    return Math.max(20, score);
  })();
  const contentGapScore = (() => {
    const gaps = auditResults.contentGap?.keywordGaps?.length ?? 0;
    if (gaps === 0) return 90;
    return Math.max(40, 90 - Math.min(50, Math.round(gaps / 2)));
  })();
  const localScore = (() => {
    const local = auditResults.localSEO;
    if (!local) return 50;
    const rankings = local.localRankings || [];
    const rankedCount = rankings.filter((row) => typeof row.position === 'number').length;
    const rankingRatio = rankings.length ? rankedCount / rankings.length : 0;
    const nap = local.napConsistency || {};
    const napRatio = [nap.name, nap.address, nap.phone].filter(Boolean).length / 3;
    const dirs = local.directoryPresence?.summary;
    const dirRatio = dirs && dirs.total ? dirs.reachable / dirs.total : 0;
    const schemaBonus = local.hasLocalBusinessSchema ? 20 : 0;
    return Math.min(100, Math.max(20, Math.round((rankingRatio * 50) + (napRatio * 20) + (dirRatio * 20) + schemaBonus)));
  })();
  const serpScore = (() => {
    const top10 = auditResults.serp?.positionDistribution?.top10 ?? 0;
    const top3 = auditResults.serp?.positionDistribution?.top3 ?? 0;
    if (top10 >= 15) return 90;
    if (top10 >= 5) return top3 > 0 ? 75 : 70;
    return 40;
  })();

  const scores = {
    cannibalization: cannibalizationScore,
    onPage: onPageScore,
    technical: technicalScore,
    schema: schemaScore,
    backlinks: backlinksScore,
    contentGap: contentGapScore,
    localSEO: localScore,
    serp: serpScore,
  };

  auditResults.summary.categoryScores = scores;
  auditResults.summary.overallScore = Math.round(Object.values(scores).reduce((s, x) => s + x, 0) / Object.keys(scores).length);
}

function sortActionItems() {
  auditResults.actionItems.sort((a, b) => {
    if (b.priorityScore !== a.priorityScore) return b.priorityScore - a.priorityScore;
    return a.title.localeCompare(b.title);
  });
}

function getTopRecommendations(limit = 5) {
  const seen = new Set();
  const output = [];
  for (const item of auditResults.actionItems) {
    const key = `${item.category}:${item.title}`;
    if (seen.has(key)) continue;
    seen.add(key);
    output.push(item);
    if (output.length >= limit) break;
  }
  return output;
}

function getQuickWins(limit = 5) {
  return (auditResults.contentGap?.strikingDistance?.keywords || []).slice(0, limit);
}

function generateReports() {
  console.log('\n' + '='.repeat(70));
  console.log('GENERATING REPORTS');
  console.log('='.repeat(70));

  calculateOverallScore();
  sortActionItems();

  const outputDir = path.join(__dirname, 'seo-audit-results');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  const jsonPath = path.join(outputDir, `seo-audit-${REPORT_DATE}.json`);
  const mdPath = path.join(outputDir, `seo-audit-${REPORT_DATE}.md`);
  fs.writeFileSync(jsonPath, JSON.stringify(auditResults, null, 2));

  const topActions = auditResults.actionItems.slice(0, 15);
  const topRecs = getTopRecommendations(5);
  const quickWins = getQuickWins(15);

  let md = '';
  md += `# SEO Audit Report: ${CONFIG.domain}\n\n`;
  md += `- Generated: ${auditResults.meta.generatedAt}\n`;
  md += `- Mode: ${auditResults.meta.runMode}\n`;
  md += `- Geo Target: ${auditResults.meta.geoTarget} (location_code=${auditResults.meta.locationCode})\n\n`;
  md += `## Executive Summary\n\n`;
  md += `| Metric | Value |\n|---|---|\n`;
  md += `| Overall Score | **${auditResults.summary.overallScore}/100** |\n`;
  md += `| Critical Issues | ${auditResults.summary.criticalIssues} |\n`;
  md += `| High Issues | ${auditResults.summary.highIssues} |\n`;
  md += `| Medium Issues | ${auditResults.summary.mediumIssues} |\n`;
  md += `| Low Issues | ${auditResults.summary.lowIssues} |\n\n`;
  md += `## Quick Stats\n\n`;
  md += `| Metric | Value |\n|---|---|\n`;
  md += `| Total Ranked Keywords | ${auditResults.serp?.summary?.totalKeywords ?? 'N/A'} |\n`;
  md += `| Total Search Volume | ${(auditResults.serp?.summary?.totalVolume ?? 0).toLocaleString()} |\n`;
  md += `| Top 10 Rankings | ${auditResults.serp?.positionDistribution?.top10 ?? 'N/A'} |\n`;
  md += `| Referring Domains | ${auditResults.backlinks?.summary?.referringDomains ?? 'N/A'} |\n`;
  md += `| Cannibalized Keywords | ${auditResults.cannibalization?.summary?.totalCannibalized ?? 0} |\n`;
  md += `| Striking Distance Keywords | ${auditResults.contentGap?.strikingDistance?.count ?? 0} |\n\n`;
  md += `## Top 15 Priority Action Items\n\n`;
  topActions.forEach((item, i) => {
    md += `### ${i + 1}. [${item.priority.toUpperCase()}] ${escapeMd(item.title)}\n\n`;
    md += `- Category: ${item.category}\n`;
    md += `- Detail: ${escapeMd(item.description)}\n`;
    if (item.affectedUrls?.length) md += `- Affected URLs: ${item.affectedUrls.slice(0, 8).map((u) => `\`${u}\``).join(', ')}\n`;
    md += `\n`;
  });
  md += `## Top 5 Recommendations\n\n`;
  topRecs.forEach((item, i) => { md += `${i + 1}. **${escapeMd(item.title)}** - ${escapeMd(item.description)}\n`; });
  md += `\n## Detailed Analysis\n\n`;
  md += `### Content Gap Opportunities\n\n`;
  md += `- Keyword Gaps: ${auditResults.contentGap?.keywordGaps?.length ?? 0}\n`;
  md += `- Total Opportunity Volume: ${(auditResults.contentGap?.totalOpportunityVolume ?? 0).toLocaleString()}\n\n`;
  md += `#### Striking Distance Keyword Opportunities (Quick Wins)\n\n`;
  md += `| Keyword | Position | Volume | URL |\n|---|---:|---:|---|\n`;
  quickWins.forEach((row) => { md += `| ${escapeMd(row.keyword)} | ${row.position} | ${row.searchVolume} | ${escapeMd(row.url)} |\n`; });
  if (!quickWins.length) md += `| None | - | - | - |\n`;
  md += `\n#### SERP Feature Opportunities (FAQs, Featured Snippets)\n\n`;
  md += `| Keyword | Volume | Our Position | Competitor Position | Features |\n|---|---:|---|---|---|\n`;
  (auditResults.contentGap?.serpFeatureOpportunities || []).slice(0, 15).forEach((row) => {
    const featureLabel = row.featuredSnippet ? `featured_snippet, ${row.featureTypes.join(', ')}` : row.featureTypes.join(', ');
    md += `| ${escapeMd(row.keyword)} | ${row.searchVolume} | ${row.ourPosition} | ${row.competitorPosition} | ${escapeMd(featureLabel || 'none')} |\n`;
  });
  if (!(auditResults.contentGap?.serpFeatureOpportunities || []).length) md += `| None | - | - | - | - |\n`;
  md += `\n#### Directory Presence Check\n\n`;
  md += `| Directory | Status | HTTP Code | URL |\n|---|---|---:|---|\n`;
  (auditResults.localSEO?.directoryPresence?.listings || []).forEach((row) => {
    md += `| ${escapeMd(row.name)} | ${row.classification} | ${row.statusCode ?? '-'} | ${escapeMd(row.url)} |\n`;
  });
  md += `\n---\n\n`;
  md += `*Generated by SEO Full Audit Script v2.0.0*\n`;
  md += `*Data source: DataForSEO API*\n`;
  fs.writeFileSync(mdPath, md);
  console.log(`  JSON Report: ${jsonPath}`);
  console.log(`  Markdown Report: ${mdPath}`);
  return { jsonPath, mdPath };
}

async function runFullAudit() {
  console.log('\n' + '='.repeat(70));
  console.log(`SEO FULL AUDIT: ${CONFIG.domain}`);
  console.log('='.repeat(70));
  console.log(`Started: ${new Date().toISOString()}`);
  console.log(`Mode: ${RUN_MODE}`);
  console.log(`Geo: ${GEO_TARGET} (location_code=${CONFIG.locationCode})`);
  try {
    const pageInventory = loadPageInventory();
    console.log(`Page inventory loaded: ${pageInventory.length} URLs`);
    await analyzeCannibalization();
    await delay(200);
    await analyzeOnPage(pageInventory);
    await delay(200);
    await analyzeTechnical(pageInventory);
    await delay(200);
    await auditSchema(pageInventory);
    await delay(200);
    await analyzeBacklinks();
    await delay(200);
    await analyzeContentGap();
    await delay(200);
    await analyzeLocalSEO();
    await delay(200);
    await analyzeSERP();
    const { jsonPath, mdPath } = generateReports();
    const topRecs = getTopRecommendations(5);
    const quickWins = getQuickWins(5);
    console.log('\n' + '='.repeat(70));
    console.log('AUDIT COMPLETE');
    console.log('='.repeat(70));
    console.log(`Overall Score: ${auditResults.summary.overallScore}/100`);
    console.log(`Total Issues Found: ${auditResults.actionItems.length}`);
    console.log(`  Critical: ${auditResults.summary.criticalIssues}`);
    console.log(`  High: ${auditResults.summary.highIssues}`);
    console.log(`  Medium: ${auditResults.summary.mediumIssues}`);
    console.log(`  Low: ${auditResults.summary.lowIssues}`);
    console.log('\nTop 5 Actionable Recommendations:');
    topRecs.forEach((item, idx) => console.log(`  ${idx + 1}. [${item.priority.toUpperCase()}] ${item.title}`));
    console.log('\nQuick Wins (Striking Distance Keywords):');
    if (quickWins.length) quickWins.forEach((row, idx) => console.log(`  ${idx + 1}. ${row.keyword} (pos: ${row.position}, vol: ${row.searchVolume})`));
    else console.log('  None identified.');
    console.log('\nReports saved to:');
    console.log(`  ${jsonPath}`);
    console.log(`  ${mdPath}`);
  } catch (e) {
    console.error('\nFATAL ERROR:', e.message);
    console.error(e.stack);
    process.exit(1);
  }
}

runFullAudit();
