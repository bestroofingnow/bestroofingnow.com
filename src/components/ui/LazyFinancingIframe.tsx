'use client';

import { useEffect, useRef, useState } from 'react';
import { DollarSign } from 'lucide-react';

interface LazyFinancingIframeProps {
  src: string;
  title?: string;
  minHeight?: number;
}

export function LazyFinancingIframe({
  src,
  title = 'PowerPay Roof Financing Application',
  minHeight = 600
}: LazyFinancingIframeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [iframeHeight, setIframeHeight] = useState(minHeight);

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

  // Listen for height messages from iframe
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      const scrollHeight = e.data;
      if (typeof scrollHeight === 'number' && scrollHeight > 0) {
        setIframeHeight(scrollHeight);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white rounded-2xl overflow-hidden"
      style={{ minHeight: `${minHeight}px` }}
    >
      {isInView ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 rounded-2xl">
              <div className="animate-pulse flex flex-col items-center gap-4">
                <DollarSign className="w-12 h-12 text-primary" aria-hidden="true" />
                <p className="text-gray-600">Loading financing application...</p>
              </div>
            </div>
          )}
          <iframe
            ref={iframeRef}
            id="gpp-iframe"
            src={src}
            width="100%"
            height={iframeHeight}
            frameBorder="0"
            scrolling="no"
            title={title}
            loading="lazy"
            className="w-full"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s',
              minHeight: `${minHeight}px`
            }}
            onLoad={() => setIsLoaded(true)}
          />
        </>
      ) : (
        <div
          className="w-full bg-gray-50 rounded-2xl flex flex-col items-center justify-center"
          style={{ height: `${minHeight}px` }}
        >
          <DollarSign className="w-12 h-12 text-primary/50 mb-4" aria-hidden="true" />
          <p className="text-gray-500">Scroll to apply for financing</p>
        </div>
      )}
    </div>
  );
}
