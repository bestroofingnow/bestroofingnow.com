import { NextResponse } from 'next/server';
import { SHINGLE_PRODUCTS } from '@/lib/constants';

const BASE_URL = 'https://www.bestroofingnow.com';

// Products sitemap: /products and /products/[slug]
export async function GET() {
  const lastmod = new Date().toISOString();

  const indexPage = {
    url: `${BASE_URL}/products`,
    changefreq: 'monthly',
    priority: '0.8',
  };

  const productPages = SHINGLE_PRODUCTS.map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    changefreq: 'monthly',
    priority: '0.7',
  }));

  const allPages = [indexPage, ...productPages];

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

