'use client';

import { ArrowRight, CheckCircle } from 'lucide-react';
import { useEstimate } from '@/components/estimate';

const FIELDS = ['Full name', 'Phone', 'Email', 'Street address or ZIP'] as const;
const TRUST_POINTS = ['Photos included', 'Same-day leak help', 'Repair-first advice'] as const;

export function HeroLeadCard() {
  const { openEstimateModal } = useEstimate();

  return (
    <div
      className="bg-white text-ink p-7 shadow-[0_24px_60px_rgba(0,0,0,0.25)]"
      style={{
        borderTop: '4px solid var(--color-copper)',
        borderRadius: 4,
      }}
    >
      <div className="eyebrow mb-2">60-second estimate</div>
      <div className="font-display font-medium text-navy text-[26px] leading-[1.1] tracking-[-0.015em] mb-5">
        Get your free roof inspection.
      </div>
      <div className="grid grid-cols-1 gap-2 mb-5">
        {TRUST_POINTS.map((point) => (
          <div key={point} className="flex items-center gap-2 text-[12.5px] text-slate">
            <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" aria-hidden="true" />
            <span>{point}</span>
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          openEstimateModal('residential');
        }}
      >
        {FIELDS.map((label) => (
          <input
            key={label}
            type="text"
            placeholder={label}
            aria-label={label}
            readOnly
            onFocus={() => openEstimateModal('residential')}
            className="w-full px-3.5 py-3 mb-2 text-[13.5px] bg-mist border border-line rounded-[3px] cursor-pointer focus:outline-none focus:border-copper hover:border-copper transition-colors"
          />
        ))}
        <select
          aria-label="Service needed"
          defaultValue=""
          onMouseDown={(e) => {
            e.preventDefault();
            openEstimateModal('residential');
          }}
          className="w-full px-3.5 py-3 mb-3.5 text-[13.5px] bg-mist border border-line rounded-[3px] text-mute cursor-pointer focus:outline-none focus:border-copper hover:border-copper transition-colors"
        >
          <option value="" disabled>
            Repair, replacement, storm damage, or inspection
          </option>
        </select>
        <button
          type="submit"
          className="w-full px-5 py-3.5 bg-accent hover:bg-accent-dark text-white text-[13px] font-bold uppercase tracking-[0.08em] rounded-[2px] inline-flex items-center justify-center gap-2.5 transition-colors"
        >
          Get my free estimate <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
        <div className="text-[11px] text-mute text-center mt-2.5">
          No spam. A local roofing specialist follows up within 1 business hour.
        </div>
      </form>
    </div>
  );
}

