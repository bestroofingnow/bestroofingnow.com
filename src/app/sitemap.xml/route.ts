import {
NextResponse } from 'next/server';
import { getSitemapLastmod } from '@/lib/sitemap';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.bestroofingnow.com';

// Master sitemap index that links to all category sitemaps
export async function GET() {
  const lastmod = getSitemapLastmod();
  const sitemaps = [
    { loc: `${BASE_URL}/sitemaps/core`, lastmod },
    { loc: `${BASE_URL}/sitemaps/services`, lastmod },
    { loc: `${BASE_URL}/sitemaps/locations`, lastmod },
    { loc: `${BASE_URL}/sitemaps/lake-norman`, lastmod },
    { loc: `${BASE_URL}/sitemaps/projects`, lastmod },
    { loc: `${BASE_URL}/sitemaps/products`, lastmod },
    { loc: `${BASE_URL}/sitemaps/materials`, lastmod },
    { loc: `${BASE_URL}/sitemaps/resources`, lastmod },
    { loc: `${BASE_URL}/sitemaps/faq`, lastmod },
    { loc: `${BASE_URL}/sitemaps/stories`, lastmod },
    { loc: `${BASE_URL}/sitemaps/blog`, lastmod },
    { loc: `${BASE_URL}/sitemaps/images`, lastmod },
    { loc: `${BASE_URL}/sitemaps/videos`, lastmod },
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
