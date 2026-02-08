'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

/**
 * Lazy-loads the GHL Chat Widget only after user interaction.
 * This prevents the heavy reCaptcha and chat scripts from blocking initial render.
 *
 * The widget loads after:
 * - User scrolls the page
 * - User clicks/touches anywhere
 * - 8 seconds have passed (fallback for idle users)
 */
export function LazyChatWidget() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const events = ['scroll', 'click', 'touchstart'];

    const loadWidget = () => {
      setShouldLoad(true);
      // Remove listeners after loading
      events.forEach(event => {
        window.removeEventListener(event, loadWidget, { capture: true });
      });
    };

    // Add listeners
    events.forEach(event => {
      window.addEventListener(event, loadWidget, { capture: true, passive: true });
    });

    // Fallback: load after 8 seconds even without interaction
    const timer = setTimeout(loadWidget, 8000);

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, loadWidget, { capture: true });
      });
      clearTimeout(timer);
    };
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return (
    <Script
      id="ghl-chat-widget"
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com"
      data-widget-id="692def99cf45951b90d25076"
      strategy="lazyOnload"
    />
  );
}
