import Image from 'next/image';
import { GeoTaggedImage } from '@/lib/images';
import { generateGeoAltText } from '@/lib/geo-images';

interface GeoTaggedProjectImageProps {
  image: GeoTaggedImage;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  context?: { serviceName?: string; pageTitle?: string };
  includeSchema?: boolean;
  schemaPageUrl?: string;
}

export function GeoTaggedProjectImage({
  image,
  fill,
  width,
  height,
  className,
  sizes,
  priority,
  loading = 'lazy',
  context,
  includeSchema = false,
  schemaPageUrl,
}: GeoTaggedProjectImageProps) {
  const altText = generateGeoAltText(image, context);

  return (
    <>
      {includeSchema && schemaPageUrl && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ImageObject',
              url: image.url,
              contentUrl: image.url,
              caption: altText,
              name: altText,
              width: width || 1200,
              height: height || 800,
              creditText: 'Best Roofing Now',
              copyrightNotice: '© Best Roofing Now LLC',
              contentLocation: {
                '@type': 'Place',
                name: image.neighborhood
                  ? `${image.neighborhood}, ${image.city}, ${image.state}`
                  : `${image.city}, ${image.state}`,
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: image.lat,
                  longitude: image.lng,
                },
              },
              creator: {
                '@type': 'Organization',
                name: 'Best Roofing Now',
              },
            }),
          }}
        />
      )}
      <Image
        src={image.url}
        alt={altText}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={className}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : loading}
      />
    </>
  );
}
