const DEFAULT_SITEMAP_LASTMOD = '2026-04-28T00:00:00.000Z';

export function getSitemapLastmod(fallback = DEFAULT_SITEMAP_LASTMOD): string {
  const configured = process.env.NEXT_PUBLIC_BUILD_TIME;

  if (!configured) {
    return fallback;
  }

  const parsed = new Date(configured);
  return Number.isNaN(parsed.getTime()) ? fallback : parsed.toISOString();
}

