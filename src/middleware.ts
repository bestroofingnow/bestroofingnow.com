import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Known routes that should NOT be redirected to /blog/
const KNOWN_ROUTES = new Set([
  '',
  'about',
  'contact',
  'services',
  'locations',
  'reviews',
  'blog',
  'financing',
  'faq',
  'materials',
  'brands',
  'compare',
  'guides',
  'problems',
  'seasonal',
  'process',
  'emergency',
  'commercial-systems',
  'ventilation',
  'roof-types',
  'products',
  'warranty',
  'stories',
  'sitemap',
  'sitemaps',
  'privacy-policy',
  'terms',
  // GBP-aligned service category pages
  'roofing-services',
  'gutter-services',
  'siding-services',
  'storm-restoration',
  'specialty-services',
  'solar-services',
  'metal-roofing-services',
  'commercial-roofing-services',
  // System routes
  'api',
  '_next',
  'static',
  'favicon.ico',
  'robots.txt',
  'sitemap.xml',
  'manifest.webmanifest',
  'icon',
  'apple-icon',
]);

// Service slugs that have their own pages
const SERVICE_SLUGS = new Set([
  'residential-roofing',
  'commercial-roofing',
  'roof-repair',
  'roof-replacement',
  'roof-inspection',
  'emergency-roofing',
  'storm-damage',
  'gutters',
  'siding',
]);

// Location slugs - these are handled by /locations/[city]
const LOCATION_PATTERN = /^(charlotte|huntersville|cornelius|davidson|mooresville|denver|sherrills-ford|terrell|lake-norman|concord|kannapolis|harrisburg|mint-hill|matthews|pineville|indian-trail|weddington|waxhaw|monroe|gastonia|belmont|mount-holly|lincolnton|hickory|statesville|troutman|rock-hill|fort-mill|tega-cay|indian-land|lancaster)-?(nc)?$/i;

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Get the first segment of the path
  const firstSegment = pathname.split('/')[1] || '';

  // Skip known routes
  if (KNOWN_ROUTES.has(firstSegment)) {
    return NextResponse.next();
  }

  // Skip service pages (they have explicit redirects in next.config.ts)
  if (SERVICE_SLUGS.has(firstSegment)) {
    return NextResponse.next();
  }

  // Skip location-like patterns
  if (LOCATION_PATTERN.test(firstSegment)) {
    return NextResponse.next();
  }

  // Skip paths that start with underscores or dots (Next.js internal)
  if (firstSegment.startsWith('_') || firstSegment.startsWith('.')) {
    return NextResponse.next();
  }

  // Skip static file extensions
  if (/\.(ico|png|jpg|jpeg|gif|webp|svg|css|js|woff|woff2|ttf|eot|map|json)$/i.test(pathname)) {
    return NextResponse.next();
  }

  // For any other root-level path, check if it could be an old blog post
  // and redirect to /blog/{slug}
  // This catches old WordPress URLs like /post-slug and redirects to /blog/post-slug

  // Only redirect single-segment paths (not /foo/bar)
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 1) {
    const slug = segments[0];

    // Redirect old blog URLs to new structure
    const url = request.nextUrl.clone();
    url.pathname = `/blog/${slug}`;

    // Use 301 for permanent redirect (SEO-friendly)
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  // Match all paths except static files and API routes
  matcher: [
    /*
     * Match all request paths except for:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, robots.txt, sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
