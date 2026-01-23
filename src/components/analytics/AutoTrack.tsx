'use client';

import { useEffect } from 'react';
import { analytics } from './GoogleAnalytics';
import { fbEvents } from './FacebookPixel';

// Automatically tracks common user interactions site-wide
export function AutoTrack() {
  useEffect(() => {
    // Track phone number clicks
    const handlePhoneClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="tel:"]') as HTMLAnchorElement;
      if (link) {
        const phone = link.href.replace('tel:', '');
        analytics.phoneClick(phone);
        fbEvents.contact();
      }
    };

    // Track email clicks
    const handleEmailClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="mailto:"]') as HTMLAnchorElement;
      if (link) {
        const email = link.href.replace('mailto:', '');
        analytics.ctaClick('Email', email);
      }
    };

    // Track outbound links
    const handleOutboundClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="http"]') as HTMLAnchorElement;
      if (link && !link.href.includes(window.location.hostname)) {
        analytics.ctaClick('Outbound Link', link.href);
      }
    };

    // Track scroll depth
    let maxScroll = 0;
    const scrollMilestones = [25, 50, 75, 90];
    const trackedMilestones = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;

        scrollMilestones.forEach((milestone) => {
          if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
            trackedMilestones.add(milestone);
            analytics.scrollDepth(milestone, window.location.pathname);
          }
        });
      }
    };

    // Debounced scroll handler
    let scrollTimeout: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };

    // Track time on page
    const startTime = Date.now();
    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (timeOnPage > 10) {
        // Only track if > 10 seconds
        analytics.scrollDepth(maxScroll, window.location.pathname);
      }
    };

    // Add event listeners
    document.addEventListener('click', handlePhoneClick);
    document.addEventListener('click', handleEmailClick);
    document.addEventListener('click', handleOutboundClick);
    window.addEventListener('scroll', debouncedScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('click', handlePhoneClick);
      document.removeEventListener('click', handleEmailClick);
      document.removeEventListener('click', handleOutboundClick);
      window.removeEventListener('scroll', debouncedScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return null;
}
