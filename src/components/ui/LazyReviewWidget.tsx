'use client';

import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

interface LazyReviewWidgetProps {
  src: string;
  title?: string;
  height?: number;
}

export function LazyReviewWidget({
  src,
  title = 'Customer Reviews',
  height = 600
}: LazyReviewWidgetProps) {
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
    <div
      ref={containerRef}
      className="relative w-full rounded-xl shadow-lg overflow-hidden"
      style={{ minHeight: `${height}px` }}
    >
      {isInView ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 rounded-xl">
              <div className="animate-pulse flex flex-col items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-600">Loading reviews...</p>
              </div>
            </div>
          )}
          <iframe
            src={src}
            width="100%"
            height={height}
            frameBorder="0"
            title={title}
            loading="lazy"
            className="w-full rounded-xl"
            style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
            onLoad={() => setIsLoaded(true)}
          />
        </>
      ) : (
        <div
          className="w-full bg-gray-100 rounded-xl flex flex-col items-center justify-center"
          style={{ height: `${height}px` }}
        >
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-primary/30" aria-hidden="true" />
            ))}
          </div>
          <p className="text-gray-500">Scroll to view reviews</p>
        </div>
      )}
    </div>
  );
}
