import { GeoTaggedImage, PROJECT_IMAGES } from './images';

export type PageType = 'homepage' | 'main-service-area' | 'location' | 'service' | 'blog' | 'guide' | 'other';

/**
 * Returns appropriate geo-tagged images based on page type and optional city filter.
 *
 * Homepage & main service area pages: ONLY 'new-roof' and 'before-after' types
 * All other pages: any project type
 */
export function getGeoImages(options: {
  pageType: PageType;
  city?: string;
  count?: number;
  projectType?: GeoTaggedImage['projectType'];
  excludeUrls?: string[];
  seed?: string;
}): GeoTaggedImage[] {
  const { pageType, city, count = 4, projectType, excludeUrls = [], seed } = options;

  let pool = [...PROJECT_IMAGES];

  // Filter by page type rules
  if (pageType === 'homepage' || pageType === 'main-service-area') {
    pool = pool.filter(img => img.projectType === 'new-roof' || img.projectType === 'before-after');
  }

  // Filter by project type if specified
  if (projectType) {
    pool = pool.filter(img => img.projectType === projectType);
  }

  // Filter by city if specified
  if (city) {
    const cityImages = pool.filter(img => img.city.toLowerCase() === city.toLowerCase());
    if (cityImages.length >= count) {
      pool = cityImages;
    } else {
      // Supplement with Charlotte images if city has insufficient images
      const charlotteImages = pool.filter(
        img => img.city === 'Charlotte' && !cityImages.some(ci => ci.url === img.url)
      );
      pool = [...cityImages, ...charlotteImages];
    }
  }

  // Exclude already-used URLs
  if (excludeUrls.length > 0) {
    pool = pool.filter(img => !excludeUrls.includes(img.url));
  }

  // Deterministic shuffle using seed (critical for SSR hydration)
  if (seed) {
    pool = deterministicShuffle(pool, seed);
  }

  return pool.slice(0, count);
}

/**
 * Generate SEO-optimized alt text for a geo-tagged image.
 */
export function generateGeoAltText(
  image: GeoTaggedImage,
  context?: {
    serviceName?: string;
    pageTitle?: string;
  }
): string {
  const typeMap: Record<string, string> = {
    'new-roof': 'New roof installation',
    'repair': 'Roof repair',
    'before-after': 'Before and after roof project',
    'storm-damage': 'Storm damage roof repair',
    'work-in-progress': 'Roofing project in progress',
    'completed-exterior': 'Completed roofing project',
  };

  const typeDesc = context?.serviceName
    ? `${context.serviceName} project`
    : typeMap[image.projectType] || 'Roofing project';

  const location = image.neighborhood
    ? `${image.neighborhood}, ${image.city}, ${image.state}`
    : `${image.city}, ${image.state}`;

  const parts = [typeDesc, `in ${location}`];

  if (image.description) {
    parts.push(`- ${image.description}`);
  }

  if (image.materialType) {
    parts.push(`using ${image.materialType}`);
  }

  parts.push('by Best Roofing Now');

  return parts.join(' ');
}

/**
 * Deterministic shuffle to avoid SSR/client hydration mismatch.
 * Uses a simple hash of the seed string.
 */
function deterministicShuffle<T>(arr: T[], seed: string): T[] {
  const result = [...arr];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;
  }
  for (let i = result.length - 1; i > 0; i--) {
    hash = ((hash << 5) - hash + i) | 0;
    const j = Math.abs(hash) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
