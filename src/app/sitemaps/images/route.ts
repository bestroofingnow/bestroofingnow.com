import { NextResponse } from 'next/server';
import { IMAGES, LOCATION_HERO_IMAGES, SERVICE_HERO_IMAGES } from '@/lib/images';
import { SERVICES, LOCATIONS } from '@/lib/constants';
import { getAllNeighborhoodParams } from '@/lib/neighborhoods';

const BASE_URL = 'https://www.bestroofingnow.com';

interface ImageEntry {
  pageUrl: string;
  images: { loc: string; title: string; caption?: string }[];
}

// Google Image Sitemap format
export async function GET() {
  const imageEntries: ImageEntry[] = [];

  // Homepage images
  imageEntries.push({
    pageUrl: BASE_URL,
    images: [
      { loc: IMAGES.logo, title: 'Best Roofing Now Logo', caption: 'Professional roofing company in Charlotte NC' },
      { loc: IMAGES.hero.roofTeam, title: 'Roofing team working on roof', caption: 'Best Roofing Now crew installing new roof in Charlotte' },
      { loc: IMAGES.houses.house1, title: 'Beautiful home with new roof', caption: 'Residential roofing project in Charlotte NC' },
      { loc: IMAGES.houses.modern1, title: 'Modern home with quality roofing', caption: 'Premium roof installation Charlotte' },
    ],
  });

  // About page images
  imageEntries.push({
    pageUrl: `${BASE_URL}/about`,
    images: [
      { loc: IMAGES.team.jamesAndFred, title: 'James and Fred - Best Roofing Now owners', caption: 'Veteran-owned family roofing business' },
      { loc: IMAGES.hero.menOnRoof, title: 'Professional roofers at work', caption: 'Expert roofing team serving Charlotte' },
    ],
  });

  // Service pages with their hero images
  SERVICES.forEach((service) => {
    const heroImage = SERVICE_HERO_IMAGES[service.slug] || IMAGES.hero.hero1;
    imageEntries.push({
      pageUrl: `${BASE_URL}/services/${service.slug}`,
      images: [
        { loc: heroImage, title: `${service.title} in Charlotte NC`, caption: service.description },
      ],
    });
  });

  // Location pages with their images
  LOCATIONS.forEach((location) => {
    const heroImage = LOCATION_HERO_IMAGES[location.slug] || IMAGES.houses.house1;
    // Skip video files for image sitemap
    if (!heroImage.endsWith('.mp4')) {
      imageEntries.push({
        pageUrl: `${BASE_URL}/locations/${location.slug}`,
        images: [
          { loc: heroImage, title: `Roofing services in ${location.city}, ${location.state}`, caption: `Professional roofing company serving ${location.city}` },
        ],
      });
    }
  });

  // Neighborhood pages
  const neighborhoodParams = getAllNeighborhoodParams();
  neighborhoodParams.forEach(({ city, neighborhood }) => {
    const cityHeroImage = LOCATION_HERO_IMAGES[city] || IMAGES.houses.house1;
    // Skip video files for image sitemap
    if (!cityHeroImage.endsWith('.mp4')) {
      imageEntries.push({
        pageUrl: `${BASE_URL}/locations/${city}/${neighborhood}`,
        images: [
          { loc: cityHeroImage, title: `Roofing in ${neighborhood.replace(/-/g, ' ')}`, caption: `Professional roofing services` },
        ],
      });
    }
  });

  // Real project photos gallery
  imageEntries.push({
    pageUrl: `${BASE_URL}/reviews`,
    images: Object.entries(IMAGES.realProjects).slice(0, 20).map(([key, url]) => ({
      loc: url,
      title: `Roofing project ${key.replace(/\d+/, '')}`,
      caption: 'Completed roofing project in Charlotte metro area',
    })),
  });

  // Build XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageEntries.map(entry => `  <url>
    <loc>${entry.pageUrl}</loc>
${entry.images.map(img => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
${img.caption ? `      <image:caption>${escapeXml(img.caption)}</image:caption>` : ''}
    </image:image>`).join('\n')}
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
