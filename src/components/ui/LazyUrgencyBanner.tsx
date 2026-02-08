'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Lazy load the actual banner after initial paint
const UrgencyBanner = dynamic(() => import('./UrgencyBanner').then(m => ({ default: m.UrgencyBanner })), {
  ssr: false,
  loading: () => (
    // Static placeholder that matches banner height to prevent CLS
    <div className="bg-accent text-white py-2 px-4 text-sm" role="banner">
      <div className="container flex items-center justify-center gap-2 text-center pr-8">
        <p className="font-medium">
          <span className="font-bold">Ice & Snow Damage?</span>
          {' '}Get <span className="font-bold">10% off repairs</span> with a free inspection.
        </p>
      </div>
    </div>
  ),
});

export function LazyUrgencyBanner() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Defer loading until after first paint
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setShouldLoad(true), { timeout: 2000 });
    } else {
      setTimeout(() => setShouldLoad(true), 100);
    }
  }, []);

  if (!shouldLoad) {
    // Return static HTML placeholder - no JS hydration needed
    return (
      <div className="bg-accent text-white py-2 px-4 text-sm" role="banner">
        <div className="container flex items-center justify-center gap-2 text-center pr-8">
          <p className="font-medium">
            <span className="font-bold">Ice & Snow Damage?</span>
            {' '}Get <span className="font-bold">10% off repairs</span> with a free inspection.
          </p>
        </div>
      </div>
    );
  }

  return <UrgencyBanner />;
}
