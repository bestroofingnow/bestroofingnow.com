import { NextResponse } from 'next/server';
import { LOCATIONS } from '@/lib/constants';
import { getAllNeighborhoodParams } from '@/lib/neighborhoods';

const BASE_URL = 'https://bestroofingnow.com';

// Locations sitemap: All cities and neighborhoods
export async function GET() {
  const lastmod = new Date().toISOString();

  // Locations index page
  const indexPage = {
    url: `${BASE_URL}/locations`,
    changefreq: 'monthly',
    priority: '0.9',
  };

  // City pages
  const cityPages = LOCATIONS.map((location) => ({
    url: `${BASE_URL}/locations/${location.slug}`,
    changefreq: 'monthly',
    priority: location.isPrimary ? '0.8' : '0.7',
  }));

  // Neighborhood pages
  const neighborhoodParams = getAllNeighborhoodParams();
  const neighborhoodPages = neighborhoodParams.map(({ city, neighborhood }) => ({
    url: `${BASE_URL}/locations/${city}/${neighborhood}`,
    changefreq: 'monthly',
    priority: '0.7',
  }));

  const allPages = [indexPage, ...cityPages, ...neighborhoodPages];

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
