import { NextResponse } from 'next/server';
import { IMAGES, LOCATION_HERO_IMAGES, SERVICE_HERO_IMAGES, PROJECT_IMAGES } from '@/lib/images';
import { SERVICES, LOCATIONS } from '@/lib/constants';
import { getAllNeighborhoodParams } from '@/lib/neighborhoods';
import { generateGeoAltText } from '@/lib/geo-images';

const BASE_URL = 'https://www.bestroofingnow.com';

interface ImageEntry {
  pageUrl: string;
  images: { loc: string; title: string; caption?: string }[];
}

// Google Image Sitemap format
export async function GET() {
  const imageEntries: ImageEntry[] = [];

  // Homepage images with geo-enriched captions
  imageEntries.push({
    pageUrl: BASE_URL,
    images: [
      { loc: IMAGES.logo, title: 'Best Roofing Now Logo', caption: 'Professional roofing company in Charlotte, NC - veteran-owned' },
      { loc: IMAGES.hero.roofTeam, title: 'Best Roofing Now crew installing new roof in Charlotte, NC', caption: 'Professional roofing team working on residential roof installation in Charlotte, NC by Best Roofing Now' },
      { loc: IMAGES.houses.house1, title: 'Completed residential roof project in Charlotte, NC', caption: 'Beautiful home with new roof installed by Best Roofing Now in Charlotte, NC' },
      { loc: IMAGES.houses.modern1, title: 'Premium roof installation in Charlotte, NC', caption: 'Modern home with quality architectural shingle roofing in Charlotte, NC by Best Roofing Now' },
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

  // Location pages with geo-enriched images
  LOCATIONS.forEach((location) => {
    const heroImage = LOCATION_HERO_IMAGES[location.slug] || IMAGES.houses.house1;
    // Skip video files for image sitemap
    if (!heroImage.endsWith('.mp4')) {
      // Find matching geo-tagged image for richer caption
      const geoImage = PROJECT_IMAGES.find(img => img.url === heroImage);
      const caption = geoImage
        ? generateGeoAltText(geoImage)
        : `Professional roofing services in ${location.city}, ${location.state} by Best Roofing Now`;
      imageEntries.push({
        pageUrl: `${BASE_URL}/locations/${location.slug}`,
        images: [
          { loc: heroImage, title: `Roofing project in ${location.city}, ${location.state}`, caption },
        ],
      });
    }
  });

  // Neighborhood pages with geo-enriched captions
  const neighborhoodParams = getAllNeighborhoodParams();
  neighborhoodParams.forEach(({ city, neighborhood }) => {
    const cityHeroImage = LOCATION_HERO_IMAGES[city] || IMAGES.houses.house1;
    // Skip video files for image sitemap
    if (!cityHeroImage.endsWith('.mp4')) {
      const neighborhoodName = neighborhood.replace(/-/g, ' ');
      const geoImage = PROJECT_IMAGES.find(img => img.url === cityHeroImage);
      const caption = geoImage
        ? generateGeoAltText(geoImage)
        : `Professional roofing services in ${neighborhoodName} by Best Roofing Now`;
      imageEntries.push({
        pageUrl: `${BASE_URL}/locations/${city}/${neighborhood}`,
        images: [
          { loc: cityHeroImage, title: `Roofing project in ${neighborhoodName}`, caption },
        ],
      });
    }
  });

  // Real project photos gallery with geo-enriched captions
  imageEntries.push({
    pageUrl: `${BASE_URL}/reviews`,
    images: Object.entries(IMAGES.realProjects).slice(0, 20).map(([, url]) => {
      const geoImage = PROJECT_IMAGES.find(img => img.url === url);
      return {
        loc: url as string,
        title: geoImage
          ? `Roofing project in ${geoImage.city}, ${geoImage.state}`
          : 'Completed roofing project in Charlotte, NC',
        caption: geoImage
          ? generateGeoAltText(geoImage)
          : 'Professional roofing project completed in Charlotte metro area by Best Roofing Now',
      };
    }),
  });

  // Additional geo-tagged project images across all service areas
  const geoImagesByCity = new Map<string, typeof PROJECT_IMAGES>();
  PROJECT_IMAGES.forEach(img => {
    const key = `${img.city}-${img.state}`;
    if (!geoImagesByCity.has(key)) geoImagesByCity.set(key, []);
    geoImagesByCity.get(key)!.push(img);
  });

  imageEntries.push({
    pageUrl: `${BASE_URL}/projects`,
    images: PROJECT_IMAGES.slice(0, 30).map(img => ({
      loc: img.url,
      title: `${img.projectType.replace(/-/g, ' ')} in ${img.city}, ${img.state}`,
      caption: generateGeoAltText(img),
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
