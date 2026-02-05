'use client';

import { Shield, DollarSign } from 'lucide-react';

interface FinancingBannerProps {
  className?: string;
  variant?: 'sidebar' | 'inline';
}

export function FinancingBanner({ className = '', variant = 'sidebar' }: FinancingBannerProps) {
  if (variant === 'inline') {
    return (
      <div className={`bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-6 ${className}`}>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <a
            href="https://app.getpowerpay.com/apply/16995"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-gradient-to-br from-[#ee9c48] to-[#d98a3a] text-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <DollarSign className="w-10 h-10 mx-auto mb-2" aria-hidden="true" />
            <span className="block text-lg font-bold">Apply Now</span>
            <span className="block text-sm opacity-90">Roof Financing</span>
          </a>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary mb-2">
              Affordable Financing Available
            </h3>
            <p className="text-gray-600 mb-3">
              Get the roof you need without breaking the bank. Check your rate in seconds with no impact to your credit score.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-sm font-semibold">
              <Shield className="w-4 h-4" aria-hidden="true" />
              Soft Credit Pull - Won&apos;t Hurt Your Credit
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Sidebar variant
  return (
    <div className={`text-center ${className}`}>
      <a
        href="https://app.getpowerpay.com/apply/16995"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gradient-to-br from-[#ee9c48] to-[#d98a3a] text-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow mx-auto max-w-[300px]"
      >
        <DollarSign className="w-12 h-12 mx-auto mb-3" aria-hidden="true" />
        <span className="block text-xl font-bold mb-1">Roof Financing</span>
        <span className="block text-sm opacity-90 mb-3">Affordable monthly payments</span>
        <span className="inline-block bg-white text-[#d98a3a] font-bold px-4 py-2 rounded-lg text-sm">
          Apply Now
        </span>
      </a>
      <p className="mt-3 text-sm text-gray-600 flex items-center justify-center gap-1.5">
        <Shield className="w-4 h-4 text-green-600" aria-hidden="true" />
        <span>Soft credit pull - won&apos;t hurt your credit!</span>
      </p>
    </div>
  );
}
