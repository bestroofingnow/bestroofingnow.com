'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

interface LazyProjectMapProps {
  mapId: string;
  cityName: string;
}

export function LazyProjectMap({ mapId, cityName }: LazyProjectMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading 200px before visible
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full" style={{ minHeight: '600px' }}>
      {isInView ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 rounded-2xl">
              <div className="animate-pulse flex flex-col items-center gap-4">
                <MapPin className="w-12 h-12 text-primary" />
                <p className="text-gray-600">Loading project map...</p>
              </div>
            </div>
          )}
          <iframe
            src={`https://projectmapit.com/best-roofing-now-llc/map?map=${mapId}`}
            width="100%"
            height="600"
            style={{ border: 0, opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
            title={`Roofing Projects Near ${cityName}`}
            className="w-full rounded-2xl"
            onLoad={() => setIsLoaded(true)}
          />
        </>
      ) : (
        <div className="w-full h-[600px] bg-gray-100 rounded-2xl flex flex-col items-center justify-center">
          <MapPin className="w-12 h-12 text-primary/50 mb-4" />
          <p className="text-gray-500">Scroll to view project map</p>
        </div>
      )}
    </div>
  );
}
