import { NextResponse } from 'next/server';
import { ROOFING_MATERIALS } from '@/lib/constants';

const BASE_URL = 'https://bestroofingnow.com';

// Materials sitemap: All roofing materials pages
export async function GET() {
  const pages: { url: string; lastmod: string; changefreq: string; priority: string }[] = [];

  // Materials index page
  pages.push({
    url: `${BASE_URL}/materials`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.8',
  });

  // Individual material pages
  ROOFING_MATERIALS.forEach((material) => {
    pages.push({
      url: `${BASE_URL}/materials/${material.slug}`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.7',
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
