import {
NextResponse } from 'next/server';

export const dynamic = 'force-static';
import {
  ROOFING_MATERIALS,
  ROOFING_GUIDES,
  ROOFING_COMPARISONS,
  ROOF_TYPES,
  ROOFING_PROBLEMS,
  SEASONAL_ROOFING,
  ROOFING_BRANDS,
  COMMERCIAL_SYSTEMS,
} from '@/lib/constants';
import { getSitemapLastmod } from '@/lib/sitemap';

const BASE_URL = 'https://www.bestroofingnow.com';

// Resources sitemap: Materials, Guides, Comparisons, Roof Types, Problems, Seasonal, Warranty
export async function GET() {
  const lastmod = getSitemapLastmod();
  const pages: { url: string; lastmod: string; changefreq: string; priority: string }[] = [];

  // Materials index page
  pages.push({
    url: `${BASE_URL}/materials`,
    lastmod,
    changefreq: 'weekly',
    priority: '0.8',
  });

  // Individual material pages
  ROOFING_MATERIALS.forEach((material) => {
    pages.push({
      url: `${BASE_URL}/materials/${material.slug}`,
      lastmod,
      changefreq: 'monthly',
      priority: '0.7',
    });
  });

  // Guides index page
  pages.push({
    url: `${BASE_URL}/guides`,
    lastmod,
    changefreq: 'weekly',
    priority: '0.8',
  });

  // Individual guide pages
  ROOFING_GUIDES.forEach((guide) => {
    pages.push({
      url: `${BASE_URL}/guides/${guide.slug}`,
      lastmod,
      changefreq: 'monthly',
      priority: '0.7',
    });
  });

  // Comparisons index page
  pages.push({
    url: `${BASE_URL}/compare`,
    lastmod,
    changefreq: 'weekly',
    priority: '0.8',
  });

  // Individual comparison pages
  ROOFING_COMPARISONS.forEach((comparison) => {
    pages.push({
      url: `${BASE_URL}/compare/${comparison.slug}`,
      lastmod,
      changefreq: 'monthly',
      priority: '0.7',
    });
  });

  // Roof Types index page
  pages.push({
    url: `${BASE_URL}/roof-types`,
    lastmod,
    changefreq: 'weekly',
    priority: '0.8',
  });

  // Individual roof type pages
  ROOF_TYPES.forEach((roofType) => {
    pages.push({
      url: `${BASE_URL}/roof-types/${roofType.slug}`,
      lastmod,
      changefreq: 'monthly',
      priority: '0.7',
    });
  });

  // Roofing Problems index page
  pages.push({
    url: `${BASE_URL}/problems`,
    lastmod,
    changefreq: 'weekly',
    priority: '0.8',
  });

  // Individual problem pages
  ROOFING_PROBLEMS.forEach((problem) => {
    pages.push({
      url: `${BASE_URL}/problems/${problem.slug}`,
      lastmod,
      changefreq: 'monthly',
      priority: '0.7',
    });
  });

  // Seasonal Roofing index page
  pages.push({
    url: `${BASE_URL}/seasonal`,
    lastmod,
    changefreq: 'weekly',
    priority: '0.8',
  });

  // Individual seasonal pages
  SEASONAL_ROOFING.forEach((season) => {
    pages.push({
      url: `${BASE_URL}/seasonal/${season.slug}`,
      lastmod,
      changefreq: 'monthly',
      priority: '0.7',
    });
  });

  // Warranty information page
  pages.push({
    url: `${BASE_URL}/warranty`,
    lastmod,
    changefreq: 'monthly',
    priority: '0.7',
  });

  // Process page
  pages.push({
    url: `${BASE_URL}/process`,
    lastmod,
    changefreq: 'monthly',
    priority: '0.8',
  });

  // Emergency services page
  pages.push({
    url: `${BASE_URL}/emergency`,
    lastmod,
    changefreq: 'monthly',
    priority: '0.8',
  });

  // Brands index page
  pages.push({
    url: `${BASE_URL}/brands`,
    lastmod,
    changefreq: 'weekly',
    priority: '0.8',
  });

  // Individual brand pages
  ROOFING_BRANDS.forEach((brand) => {
    pages.push({
      url: `${BASE_URL}/brands/${brand.slug}`,
      lastmod,
      changefreq: 'monthly',
      priority: '0.7',
    });
  });

  // Commercial Systems index page
  pages.push({
    url: `${BASE_URL}/commercial-systems`,
    lastmod,
    changefreq: 'weekly',
    priority: '0.8',
  });

  // Individual commercial system pages
  COMMERCIAL_SYSTEMS.forEach((system) => {
    pages.push({
      url: `${BASE_URL}/commercial-systems/${system.slug}`,
      lastmod,
      changefreq: 'monthly',
      priority: '0.7',
    });
  });

  // Ventilation page
  pages.push({
    url: `${BASE_URL}/ventilation`,
    lastmod,
    changefreq: 'monthly',
    priority: '0.7',
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
