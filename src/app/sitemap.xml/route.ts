import { NextResponse } from 'next/server';

const BASE_URL = 'https://www.bestroofingnow.com';

// Master sitemap index that links to all category sitemaps
export async function GET() {
  const sitemaps = [
    { loc: `${BASE_URL}/sitemaps/core`, lastmod: new Date().toISOString() },
    { loc: `${BASE_URL}/sitemaps/services`, lastmod: new Date().toISOString() },
    { loc: `${BASE_URL}/sitemaps/locations`, lastmod: new Date().toISOString() },
    { loc: `${BASE_URL}/sitemaps/projects`, lastmod: new Date().toISOString() },
    { loc: `${BASE_URL}/sitemaps/materials`, lastmod: new Date().toISOString() },
    { loc: `${BASE_URL}/sitemaps/resources`, lastmod: new Date().toISOString() },
    { loc: `${BASE_URL}/sitemaps/stories`, lastmod: new Date().toISOString() },
    { loc: `${BASE_URL}/sitemaps/blog`, lastmod: new Date().toISOString() },
    { loc: `${BASE_URL}/sitemaps/images`, lastmod: new Date().toISOString() },
    { loc: `${BASE_URL}/sitemaps/videos`, lastmod: new Date().toISOString() },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
