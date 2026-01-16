'use client';

import dynamic from 'next/dynamic';

// Lazy load InteractiveServiceMap - below the fold, not needed for initial paint
const InteractiveServiceMap = dynamic(() => import('./InteractiveServiceMap'), {
  loading: () => (
    <div className="section bg-gradient-to-br from-primary via-primary-dark to-[#0f172a]">
      <div className="container">
        <div className="h-64 bg-primary-dark/50 rounded-xl animate-pulse" />
      </div>
    </div>
  ),
  ssr: false,
});

export function LazyInteractiveServiceMap() {
  return <InteractiveServiceMap />;
}
