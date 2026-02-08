'use client';

import { GoogleAnalytics, analytics, trackEvent, trackConversion } from './GoogleAnalytics';
import { MicrosoftClarity } from './MicrosoftClarity';
import { FacebookPixel, fbEvents } from './FacebookPixel';
import { AutoTrack } from './AutoTrack';
import { LazyThirdParty } from './LazyThirdParty';

// Combined Analytics Provider - Add to layout.tsx
// Scripts are deferred until user interaction to improve initial page load
export function AnalyticsProvider() {
  return (
    <LazyThirdParty loadOnMobile={true}>
      <GoogleAnalytics />
      <MicrosoftClarity />
      <FacebookPixel />
      <AutoTrack />
    </LazyThirdParty>
  );
}

// Re-export everything for easy imports
export { GoogleAnalytics, analytics, trackEvent, trackConversion };
export { MicrosoftClarity };
export { FacebookPixel, fbEvents };

// Combined tracking for key conversions
export const trackLead = (source: string) => {
  analytics.estimateRequest(source);
  fbEvents.lead(source);
};

export const trackPhoneCall = (phoneNumber: string) => {
  analytics.phoneClick(phoneNumber);
  fbEvents.contact();
};

export const trackFormSubmission = (formName: string) => {
  analytics.formSubmit(formName);
  fbEvents.lead(formName);
};
