'use client';

import Script from 'next/script';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}

// Track custom events
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Track conversions (for Google Ads)
export function trackConversion(conversionId: string, conversionLabel: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
      value: value,
      currency: 'USD',
    });
  }
}

// Pre-built event trackers for roofing business
export const analytics = {
  // Phone call clicks
  phoneClick: (phoneNumber: string) => {
    trackEvent('click', 'Contact', `Phone: ${phoneNumber}`);
  },

  // Form submissions
  formSubmit: (formName: string) => {
    trackEvent('submit', 'Form', formName);
  },

  // Estimate requests
  estimateRequest: (source: string) => {
    trackEvent('request', 'Estimate', source);
  },

  // Project gallery views
  projectView: (projectId: string, city: string) => {
    trackEvent('view', 'Project', `${city} - ${projectId}`);
  },

  // Service page views
  serviceView: (serviceName: string) => {
    trackEvent('view', 'Service', serviceName);
  },

  // Location page views
  locationView: (city: string) => {
    trackEvent('view', 'Location', city);
  },

  // CTA button clicks
  ctaClick: (ctaName: string, location: string) => {
    trackEvent('click', 'CTA', `${ctaName} - ${location}`);
  },

  // Chat/contact widget opens
  chatOpen: () => {
    trackEvent('open', 'Chat', 'Widget');
  },

  // Scroll depth
  scrollDepth: (percentage: number, pagePath: string) => {
    trackEvent('scroll', 'Engagement', pagePath, percentage);
  },
};

// Window types for gtag/dataLayer are declared in src/lib/utils.ts
