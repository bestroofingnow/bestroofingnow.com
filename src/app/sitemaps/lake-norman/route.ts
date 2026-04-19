import { NextResponse } from 'next/server';

const BASE_URL = 'https://www.bestroofingnow.com';

// Dedicated Lake Norman sitemap. Surfaces every LKN-cluster URL so Google
// Search Console can monitor LKN indexation independently of the rest of
// the site. Higher cluster priority (0.9) signals topical authority.

const LKN_REGIONAL_HUBS = [
  'lake-norman-roofing-guide',
  'roofing-lake-norman-nc',
  'best-roofer-lake-norman-nc',
  'roofers-lake-norman-nc',
  'roof-repair-lake-norman-nc',
  'roof-replacement-lake-norman-nc',
  'lake-norman-waterfront-roofing',
  'lake-norman-storm-damage-guide',
  'lake-norman-roofing-costs-2026',
  'metal-roofing-lake-norman-nc',
  'standing-seam-metal-roof-lake-norman-nc',
  'commercial-roofing-lake-norman-nc',
  'flat-roofing-lake-norman-nc',
  'gutter-installation-lake-norman-nc',
  'gutter-guards-lake-norman-nc',
  'roof-inspection-lake-norman-nc',
  'storm-damage-roof-repair-lake-norman-nc',
  'emergency-roof-repair-lake-norman-nc',
  'hail-damage-roof-repair-lake-norman-nc',
  'ice-storm-damage-lake-norman-nc',
  'insurance-claim-roofing-lake-norman-nc',
  'luxury-roofing-lake-norman-nc',
  'siding-installation-lake-norman-nc',
  'solar-roofing-lake-norman-nc',
  // Premium material pages built Apr 18 2026
  'slate-roofing-lake-norman-nc',
  'cedar-shake-roofing-lake-norman-nc',
  'synthetic-slate-roofing-lake-norman-nc',
  'tile-roofing-lake-norman-nc',
  // AEO educational guides
  'signs-you-need-new-roof-lake-norman-nc',
];

const LKN_CITIES = ['cornelius', 'davidson', 'mooresville', 'huntersville', 'denver', 'sherrills-ford', 'statesville'];

// Service+City pages that exist for each LKN city
const SERVICE_CITY_PATTERNS = [
  'roofing',
  'roof-repair',
  'roof-replacement',
  'roofers',
  'metal-roofing',
  'gutter-installation',
  'storm-damage-roof-repair',
  'commercial-roofing',
  'roof-inspection',
  'emergency-roof-repair',
];

const LKN_CITY_HUBS: string[] = [];
for (const city of LKN_CITIES) {
  for (const svc of SERVICE_CITY_PATTERNS) {
    LKN_CITY_HUBS.push(`${svc}-${city}-nc`);
  }
}

// LKN neighborhood pages (17 total)
const LKN_NEIGHBORHOODS = [
  'roofing-the-peninsula-cornelius-nc',
  'roofing-antiquity-cornelius-nc',
  'roofing-jetton-cove-cornelius-nc',
  'metal-roofing-the-peninsula-cornelius-nc',
  'roofing-river-run-davidson-nc',
  'roofing-davidson-pointe-davidson-nc',
  'roofing-the-point-mooresville-nc',
  'roof-replacement-the-point-mooresville-nc',
  'roofing-the-farms-mooresville-nc',
  'roofing-curtis-pond-mooresville-nc',
  'roofing-cove-creek-mooresville-nc',
  'roofing-birkdale-huntersville-nc',
  'roofing-vermillion-huntersville-nc',
  'roofing-skybrook-huntersville-nc',
  'roofing-northstone-huntersville-nc',
  'roofing-sailview-denver-nc',
  'roofing-governors-island-denver-nc',
];

// LKN small-town single pages
const LKN_SMALL_TOWNS = [
  'roofing-troutman-nc',
  'roofing-terrell-nc',
];

// Cost guide cluster
const LKN_COST_GUIDES = [
  'roofing-cost-mooresville-nc',
  'roofing-cost-cornelius-nc',
];

export async function GET() {
  const lastmod = new Date().toISOString();

  // Use a Set to dedupe in case any slug appears in multiple groups
  const allSlugs = new Set<string>([
    ...LKN_REGIONAL_HUBS,
    ...LKN_CITY_HUBS,
    ...LKN_NEIGHBORHOODS,
    ...LKN_SMALL_TOWNS,
    ...LKN_COST_GUIDES,
  ]);

  // Priority assignment: regional hubs and authority pages = 1.0,
  // city service pages = 0.9, neighborhood pages = 0.85,
  // small towns = 0.7
  function priorityFor(slug: string): string {
    if (LKN_REGIONAL_HUBS.includes(slug)) return '1.0';
    if (LKN_NEIGHBORHOODS.includes(slug)) return '0.85';
    if (LKN_COST_GUIDES.includes(slug)) return '0.9';
    if (LKN_SMALL_TOWNS.includes(slug)) return '0.7';
    return '0.9';
  }

  const urls = [...allSlugs]
    .sort()
    .map((slug) => ({
      loc: `${BASE_URL}/${slug}`,
      lastmod,
      changefreq: 'weekly',
      priority: priorityFor(slug),
    }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
