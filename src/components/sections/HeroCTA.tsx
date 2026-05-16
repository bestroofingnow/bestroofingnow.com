'use client';

import { Phone, Calculator } from 'lucide-react';
import { useEstimate } from '@/components/estimate';
import { SITE_CONFIG } from '@/lib/constants';
import { trackPhoneClick } from '@/lib/utils';

export function HeroCTA() {
  const { openEstimateModal } = useEstimate();

  return (
    <div className="mb-8 md:mb-12">
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <button
          onClick={() => openEstimateModal()}
          aria-label="Open free roof estimate calculator"
          className="inline-flex items-center justify-center gap-2 px-6 py-4 text-[15px] md:text-[16px] font-bold rounded-[3px] bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/25 active:scale-[0.99] transition-[background-color,transform]"
        >
          <Calculator className="w-5 h-5" aria-hidden="true" />
          Get My Free Roof Estimate
        </button>
        <a
          href={`tel:${SITE_CONFIG.phoneClean}`}
          aria-label={`Call Best Roofing Now for an active leak at ${SITE_CONFIG.phone}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-4 text-[15px] md:text-[16px] font-bold rounded-[3px] border-2 border-white text-white hover:bg-white hover:text-primary active:scale-[0.99] transition-[color,background-color,transform]"
          onClick={() => trackPhoneClick('hero-active-leak')}
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          Active Leak? Call Now
        </a>
      </div>
      <p className="mt-3 text-[12.5px] leading-[1.5] text-white/65">
        Charlotte and Lake Norman crews. Roof photos included. No pressure to replace what can be repaired.
      </p>
    </div>
  );
}
