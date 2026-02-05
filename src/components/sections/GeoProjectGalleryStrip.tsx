import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GeoTaggedProjectImage } from '@/components/ui/GeoTaggedProjectImage';
import { getGeoImages, type PageType } from '@/lib/geo-images';
import { SITE_CONFIG } from '@/lib/constants';

interface GeoProjectGalleryStripProps {
  pageType: PageType;
  city?: string;
  slug: string;
  count?: number;
  title?: string;
  subtitle?: string;
  excludeUrls?: string[];
  includeSchema?: boolean;
  schemaPageUrl?: string;
  className?: string;
}

export function GeoProjectGalleryStrip({
  pageType,
  city,
  slug,
  count = 4,
  title,
  subtitle,
  excludeUrls,
  includeSchema = true,
  schemaPageUrl,
  className = '',
}: GeoProjectGalleryStripProps) {
  const images = getGeoImages({
    pageType,
    city,
    count,
    excludeUrls,
    seed: slug,
  });

  if (images.length === 0) return null;

  const displayCity = city || 'Charlotte';
  const displayTitle = title || `Recent Roofing Projects in ${displayCity}, NC`;
  const displaySubtitle = subtitle || `Browse completed roofing projects from the ${displayCity} area by Best Roofing Now.`;
  const pageUrl = schemaPageUrl || `${SITE_CONFIG.url}/${slug}`;

  return (
    <section className={`py-12 bg-white ${className}`}>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ImageGallery',
              name: displayTitle,
              description: displaySubtitle,
              url: pageUrl,
              image: images.map(img => ({
                '@type': 'ImageObject',
                url: img.url,
                contentUrl: img.url,
                caption: `${img.description} in ${img.city}, ${img.state}`,
                creditText: 'Best Roofing Now',
                contentLocation: {
                  '@type': 'Place',
                  name: `${img.city}, ${img.state}`,
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: img.lat,
                    longitude: img.lng,
                  },
                },
              })),
            }),
          }}
        />
      )}
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            {displayTitle}
          </h2>
          <p className="text-gray-600">
            {displaySubtitle}
          </p>
        </div>
        <div className={`grid grid-cols-2 ${count > 4 ? 'md:grid-cols-4' : 'md:grid-cols-' + Math.min(count, 4)} gap-4`}>
          {images.map((image, index) => (
            <div key={image.url} className="relative aspect-square rounded-xl overflow-hidden group">
              <GeoTaggedProjectImage
                image={image}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                includeSchema={includeSchema && index === 0}
                schemaPageUrl={pageUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-sm font-medium truncate">
                    {image.city}, {image.state}
                  </p>
                  <p className="text-white/80 text-xs truncate capitalize">
                    {image.projectType.replace(/-/g, ' ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
