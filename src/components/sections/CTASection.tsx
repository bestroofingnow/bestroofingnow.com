'use client';

import { useState, useEffect } from 'react';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { trackPhoneClick } from '@/lib/utils';

interface CTABannerData {
  title: string;
  subtitle: string | null;
  buttonText: string;
  buttonUrl: string;
  secondaryButtonText: string | null;
  secondaryButtonUrl: string | null;
  footnote: string | null;
  variant: string;
}

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  /** Retained for backwards compatibility — ignored in editorial layout. */
  variant?: 'primary' | 'accent';
  placement?: string;
}

// Default fallback values
const DEFAULTS = {
  title: 'Ready to Protect Your Home?',
  subtitle: "Get a free, no-obligation roof inspection from Charlotte's most trusted roofing company. We'll assess your roof and provide honest recommendations.",
  buttonText: 'Schedule Free Inspection',
  buttonUrl: '/contact',
  footnote: 'No pressure. No obligation. Just honest advice from a family-owned business.',
};

export function CTASection({
  title,
  subtitle,
  variant: _variant = 'accent',
  placement = 'global',
}: CTASectionProps) {
  void _variant;
  const [banner, setBanner] = useState<CTABannerData | null>(null);

  useEffect(() => {
    // Only fetch if no explicit title/subtitle props were passed
    if (!title && !subtitle) {
      fetch(`/api/cta-banners/active?placement=${placement}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.banner) {
            setBanner(data.banner);
          }
        })
        .catch(() => {
          // Silently fail - use defaults
        });
    }
  }, [title, subtitle, placement]);

  // Use banner data from DB, or props, or defaults
  const displayTitle = title || banner?.title || DEFAULTS.title;
  const displaySubtitle = subtitle || banner?.subtitle || DEFAULTS.subtitle;
  const displayButtonText = banner?.buttonText || DEFAULTS.buttonText;
  const displayButtonUrl = banner?.buttonUrl || DEFAULTS.buttonUrl;
  const displayFootnote = banner?.footnote || DEFAULTS.footnote;

  return (
    <section className="bg-cream py-14 md:py-20">
      <div className="container">
        <div
          className="max-w-5xl mx-auto bg-white shadow-[0_8px_24px_rgba(14,31,87,0.08)] grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center px-7 py-10 md:px-12 md:py-12"
          style={{ borderTop: '3px solid var(--color-copper)' }}
        >
          <div>
            <div className="eyebrow mb-3">Scheduling Now</div>
            <h2 className="heading-display text-[26px] sm:text-[30px] md:text-[36px]">
              {displayTitle}
            </h2>
            <p className="text-slate text-[15px] leading-[1.6] mt-3 max-w-xl">
              {displaySubtitle}
            </p>
            {displayFootnote && (
              <p className="mt-5 text-mute text-[12.5px] leading-[1.5]">
                {displayFootnote}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2.5">
            <Button
              href={displayButtonUrl}
              variant="secondary"
              size="lg"
              icon={<Calendar className="w-4 h-4" aria-hidden="true" />}
              iconPosition="right"
            >
              {displayButtonText}
            </Button>
            {banner?.secondaryButtonText && banner?.secondaryButtonUrl ? (
              <Button
                href={banner.secondaryButtonUrl}
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
                iconPosition="right"
              >
                {banner.secondaryButtonText}
              </Button>
            ) : (
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                icon={<Phone className="w-4 h-4" aria-hidden="true" />}
                onClick={() => trackPhoneClick('cta-section')}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Sticky Mobile CTA
export function StickyCTA() {
  return (
    <div className="sticky-cta" role="navigation" aria-label="Quick contact options">
      <a
        href={`tel:${SITE_CONFIG.phoneClean}`}
        className="flex-1 flex items-center justify-center gap-2 bg-navy text-white min-h-[44px] py-3 rounded-[2px] font-semibold uppercase tracking-[0.06em] text-[12.5px]"
        aria-label={`Call Best Roofing Now at ${SITE_CONFIG.phone}`}
        onClick={() => trackPhoneClick('sticky-cta')}
      >
        <Phone className="w-4 h-4" aria-hidden="true" />
        Active Leak? Call
      </a>
      <a
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 bg-accent text-white min-h-[44px] py-3 rounded-[2px] font-semibold uppercase tracking-[0.06em] text-[12.5px]"
        aria-label="Schedule a free roof inspection"
      >
        Free Inspection
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </a>
    </div>
  );
}
