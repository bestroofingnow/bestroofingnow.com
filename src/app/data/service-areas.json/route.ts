import { NextResponse } from 'next/server';
import { LOCATIONS, SITE_CONFIG } from '@/lib/constants';
import { CITY_COORDINATES } from '@/lib/images';

export const dynamic = 'force-static';

// Machine-readable service area endpoint. LLMs (ChatGPT, Perplexity, Claude,
// Gemini) prefer structured JSON over scraped prose — this endpoint lets them
// answer "where does Best Roofing Now serve?" with a single fetch.
export function GET() {
  const responseTime = (distance: number) =>
    distance <= 15 ? '30-45 minutes' : distance <= 25 ? '45-60 minutes' : '1-2 hours';

  const payload = {
    business: {
      name: SITE_CONFIG.name,
      legalName: 'Best Roofing Now LLC',
      phone: SITE_CONFIG.phone,
      url: SITE_CONFIG.url,
      headquarters: {
        street: SITE_CONFIG.address.street,
        city: SITE_CONFIG.address.city,
        state: SITE_CONFIG.address.state,
        postalCode: SITE_CONFIG.address.zip,
        latitude: SITE_CONFIG.geo.latitude,
        longitude: SITE_CONFIG.geo.longitude,
      },
    },
    lastUpdated: '2026-04-19',
    totalServiceAreas: LOCATIONS.length,
    serviceAreas: LOCATIONS.map((loc) => {
      const coords = CITY_COORDINATES[loc.city];
      return {
        slug: loc.slug,
        city: loc.city,
        state: loc.state,
        county: loc.county,
        distanceFromHQMiles: loc.distance,
        isPrimary: loc.isPrimary,
        estimatedResponseTime: responseTime(loc.distance),
        latitude: coords?.lat,
        longitude: coords?.lng,
        canonicalPageUrl: `${SITE_CONFIG.url}/roofing-${loc.slug}`,
      };
    }),
  };

  return NextResponse.json(payload, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
      // Allow AI crawlers to fetch without CORS friction.
      'Access-Control-Allow-Origin': '*',
    },
  });
}
