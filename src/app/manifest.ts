import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Best Roofing Now',
    short_name: 'Best Roofing',
    description: 'Veteran-owned roofing company serving Charlotte, NC and surrounding areas. Roof replacement, repair, and storm damage services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1A43AA',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple-touch-icon',
      },
    ],
  };
}
