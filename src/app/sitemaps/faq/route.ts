import {
NextResponse } from 'next/server';
import { getSitemapLastmod } from '@/lib/sitemap';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.bestroofingnow.com';

// FAQ hub and category pages
export async function GET() {
  const pages = [
    { url: `${BASE_URL}/roofing-faq`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-costs-faq`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/choosing-roofing-contractor-faq`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-insurance-claims-faq`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/when-to-replace-roof-faq`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-materials-comparison-faq`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-maintenance-faq`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-technical-terms-faq`, changefreq: 'weekly', priority: '0.7' },
  ];

  const lastmod = getSitemapLastmod();

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
