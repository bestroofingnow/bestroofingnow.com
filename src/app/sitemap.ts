import { MetadataRoute } from 'next';
import {
  LOCATIONS,
  SERVICES,
  ROOFING_GUIDES,
  ROOFING_MATERIALS,
  ROOF_TYPES,
  ROOFING_BRANDS,
  COMMERCIAL_SYSTEMS,
  ROOFING_PROBLEMS,
  SEASONAL_ROOFING,
  ROOFING_COMPARISONS,
  SHINGLE_PRODUCTS,
} from '@/lib/constants';
import { getAllPostSlugs } from '@/lib/wordpress';

const BASE_URL = 'https://bestroofingnow.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  // Static pages - core site pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/reviews`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/financing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/emergency`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/warranty`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/ventilation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/process`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/stories`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/materials`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/roof-types`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/brands`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/commercial-systems`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/problems`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/seasonal`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/compare`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Location pages
  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((location) => ({
    url: `${BASE_URL}/locations/${location.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Guide pages
  const guidePages: MetadataRoute.Sitemap = ROOFING_GUIDES.map((guide) => ({
    url: `${BASE_URL}/guides/${guide.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Material pages
  const materialPages: MetadataRoute.Sitemap = ROOFING_MATERIALS.map((material) => ({
    url: `${BASE_URL}/materials/${material.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Roof type pages
  const roofTypePages: MetadataRoute.Sitemap = ROOF_TYPES.map((roofType) => ({
    url: `${BASE_URL}/roof-types/${roofType.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Brand pages
  const brandPages: MetadataRoute.Sitemap = ROOFING_BRANDS.map((brand) => ({
    url: `${BASE_URL}/brands/${brand.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Commercial system pages
  const commercialPages: MetadataRoute.Sitemap = COMMERCIAL_SYSTEMS.map((system) => ({
    url: `${BASE_URL}/commercial-systems/${system.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Problem pages
  const problemPages: MetadataRoute.Sitemap = ROOFING_PROBLEMS.map((problem) => ({
    url: `${BASE_URL}/problems/${problem.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Seasonal pages
  const seasonalPages: MetadataRoute.Sitemap = SEASONAL_ROOFING.map((season) => ({
    url: `${BASE_URL}/seasonal/${season.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  // Comparison pages
  const comparisonPages: MetadataRoute.Sitemap = ROOFING_COMPARISONS.map((comparison) => ({
    url: `${BASE_URL}/compare/${comparison.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Product pages
  const productPages: MetadataRoute.Sitemap = SHINGLE_PRODUCTS.map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Blog posts - wrapped in try/catch to prevent sitemap failure
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const blogSlugs = await getAllPostSlugs();
    if (Array.isArray(blogSlugs)) {
      blogPages = blogSlugs.map((slug) => ({
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }));
    }
  } catch (error) {
    // Log error but don't fail sitemap generation
    console.error('Error fetching blog slugs for sitemap:', error);
  }

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...guidePages,
    ...materialPages,
    ...roofTypePages,
    ...brandPages,
    ...commercialPages,
    ...problemPages,
    ...seasonalPages,
    ...comparisonPages,
    ...productPages,
    ...blogPages,
  ];
}
