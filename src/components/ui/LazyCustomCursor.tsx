'use client';

import dynamic from 'next/dynamic';

// Lazy load CustomCursor - not needed for initial paint, only on desktop
const CustomCursor = dynamic(() => import('./CustomCursor'), {
  ssr: false,
});

export function LazyCustomCursor() {
  return <CustomCursor />;
}
