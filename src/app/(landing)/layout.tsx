import Script from 'next/script';
import { Phone } from 'lucide-react';
import { EstimateProvider } from '@/components/estimate';
import { SocialProofProvider } from '@/components/social-proof';
import { WebVitals } from '@/components/analytics/WebVitals';
import { AnalyticsProvider } from '@/components/analytics';
import { StickyCTA } from '@/components/sections/CTASection';
import { SITE_CONFIG } from '@/lib/constants';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <EstimateProvider>
      <SocialProofProvider>
        <WebVitals />
        <AnalyticsProvider />
        {/* Minimal top bar — logo + phone only, no navigation */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="flex items-center gap-2" aria-label="Best Roofing Now">
                <span className="text-xl font-bold text-primary">Best Roofing Now</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="flex items-center gap-2 text-primary font-bold text-lg hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">{SITE_CONFIG.phone}</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </div>
          </div>
        </header>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        {/* Minimal footer — no links to leak traffic */}
        <footer className="bg-dark text-white/60 py-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved. Veteran-Owned &amp; Family-Operated.</p>
          <p className="mt-1">{SITE_CONFIG.address.street}, {SITE_CONFIG.address.suite}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}</p>
        </footer>
        <StickyCTA />
        <Script
          id="ghl-chat-widget-landing"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com"
          data-widget-id="692def99cf45951b90d25076"
          strategy="lazyOnload"
        />
      </SocialProofProvider>
    </EstimateProvider>
  );
}
