import { NextResponse } from 'next/server';

const BASE_URL = 'https://bestroofingnow.com';

// Core pages sitemap: Homepage, about, contact, reviews, financing, faq
export async function GET() {
  const pages = [
    { url: BASE_URL, changefreq: 'weekly', priority: '1.0' },
    { url: `${BASE_URL}/about`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/contact`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/reviews`, changefreq: 'weekly', priority: '0.7' },
    { url: `${BASE_URL}/financing`, changefreq: 'monthly', priority: '0.6' },
    { url: `${BASE_URL}/faq`, changefreq: 'monthly', priority: '0.5' },
  ];

  const lastmod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
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
