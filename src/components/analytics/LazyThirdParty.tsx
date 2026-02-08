'use client';

import { useEffect, useState, useCallback, ReactNode } from 'react';

interface LazyThirdPartyProps {
  children: ReactNode;
  /** Delay in ms after interaction before loading (default: 0) */
  delay?: number;
  /** Load immediately on mobile (they need analytics for attribution) */
  loadOnMobile?: boolean;
}

/**
 * Defers loading of third-party scripts until user interaction.
 * Improves initial page load performance by not blocking on analytics/tracking scripts.
 *
 * Scripts load after:
 * - User scrolls
 * - User clicks anywhere
 * - User touches the screen (mobile)
 * - 5 seconds timeout (fallback)
 */
export function LazyThirdParty({ children, delay = 0, loadOnMobile = false }: LazyThirdPartyProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  const triggerLoad = useCallback(() => {
    if (delay > 0) {
      setTimeout(() => setShouldLoad(true), delay);
    } else {
      setShouldLoad(true);
    }
  }, [delay]);

  useEffect(() => {
    // On mobile, load after a short delay for better attribution
    if (loadOnMobile && typeof window !== 'undefined' && window.innerWidth < 768) {
      const timer = setTimeout(triggerLoad, 1000);
      return () => clearTimeout(timer);
    }

    // Set up interaction listeners
    const events = ['scroll', 'click', 'touchstart', 'mousemove', 'keydown'];

    const handleInteraction = () => {
      triggerLoad();
      // Remove all listeners after first interaction
      events.forEach(event => {
        window.removeEventListener(event, handleInteraction, { capture: true });
      });
    };

    // Add listeners with capture to catch all events
    events.forEach(event => {
      window.addEventListener(event, handleInteraction, { capture: true, passive: true });
    });

    // Fallback: load after 5 seconds even without interaction
    const fallbackTimer = setTimeout(triggerLoad, 5000);

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleInteraction, { capture: true });
      });
      clearTimeout(fallbackTimer);
    };
  }, [triggerLoad, loadOnMobile]);

  if (!shouldLoad) {
    return null;
  }

  return <>{children}</>;
}
