import Image, { ImageProps } from 'next/image';

/**
 * Drop-in replacement for next/image that auto-sets `title` from `alt` text.
 * DataForSEO flags missing image title attributes as an on-page issue.
 */
export function SEOImage({ alt, title, ...props }: ImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      title={title || (typeof alt === 'string' ? alt : undefined)}
    />
  );
}
