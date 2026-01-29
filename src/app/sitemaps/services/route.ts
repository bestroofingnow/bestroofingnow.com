import { NextResponse } from 'next/server';
import { SERVICES } from '@/lib/constants';

const BASE_URL = 'https://www.bestroofingnow.com';

// Services sitemap: All service pages
export async function GET() {
  const lastmod = new Date().toISOString();

  // Services index page
  const indexPage = {
    url: `${BASE_URL}/services`,
    changefreq: 'monthly',
    priority: '0.9',
  };

  // Individual service pages
  const servicePages = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
  }));

  const allPages = [indexPage, ...servicePages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
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
