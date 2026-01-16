'use client';

import { Phone, Calculator } from 'lucide-react';
import { useEstimate } from '@/components/estimate';
import { SITE_CONFIG } from '@/lib/constants';

export function HeroCTA() {
  const { openEstimateModal } = useEstimate();

  return (
    <div
      className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12 animate-fade-in-up"
      style={{ animationDelay: '0.15s' }}
    >
      <button
        onClick={openEstimateModal}
        aria-label="Open free roof estimate calculator"
        className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold rounded-lg bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/30 hover:scale-105 active:scale-98 transition-transform"
      >
        <Calculator className="w-5 h-5" aria-hidden="true" />
        Get Free Instant Estimate
      </button>
      <a
        href={`tel:${SITE_CONFIG.phoneClean}`}
        aria-label={`Call us at ${SITE_CONFIG.phone}`}
        className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 active:scale-98 transition-transform"
      >
        <Phone className="w-5 h-5" aria-hidden="true" />
        {SITE_CONFIG.phone}
      </a>
    </div>
  );
}
