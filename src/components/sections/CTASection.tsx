'use client';

import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { trackPhoneClick } from '@/lib/utils';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: 'primary' | 'accent';
}

export function CTASection({
  title = 'Ready to Protect Your Home?',
  subtitle = "Get a free, no-obligation roof inspection from Charlotte's most trusted roofing company. We'll assess your roof and provide honest recommendations.",
  variant = 'accent',
}: CTASectionProps) {
  const bgClass = variant === 'primary' ? 'bg-gradient-primary' : 'bg-accent';

  return (
    <section className={`${bgClass} text-white py-16`}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-accent"
              icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
            >
              Schedule Free Inspection
            </Button>
            <Button
              href={`tel:${SITE_CONFIG.phoneClean}`}
              variant="secondary"
              size="lg"
              className="bg-white !text-accent hover:bg-white/90"
              icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              onClick={() => trackPhoneClick('cta-section')}
            >
              Call {SITE_CONFIG.phone}
            </Button>
          </div>

          <p className="mt-6 text-white/90 text-sm">
            No pressure. No obligation. Just honest advice from a family-owned business.
          </p>
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
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-white min-h-[44px] py-3 rounded-lg font-semibold"
        aria-label={`Call Best Roofing Now at ${SITE_CONFIG.phone}`}
        onClick={() => trackPhoneClick('sticky-cta')}
      >
        <Phone className="w-5 h-5" aria-hidden="true" />
        Call Now
      </a>
      <a
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 bg-accent text-white min-h-[44px] py-3 rounded-lg font-semibold"
        aria-label="Get a free roofing quote"
      >
        Free Quote
        <ArrowRight className="w-5 h-5" aria-hidden="true" />
      </a>
    </div>
  );
}
