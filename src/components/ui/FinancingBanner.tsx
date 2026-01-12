'use client';

import { Shield } from 'lucide-react';

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
            className="flex-shrink-0 hover:opacity-90 transition-opacity"
          >
            <img
              src="https://getpowerpay.com/banners/300x250/1.png"
              alt="PowerPay Roof Financing - Apply Now"
              width={300}
              height={250}
              className="rounded-lg shadow-md"
            />
          </a>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary mb-2">
              Affordable Financing Available
            </h3>
            <p className="text-gray-600 mb-3">
              Get the roof you need without breaking the bank. Check your rate in seconds with no impact to your credit score.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-sm font-semibold">
              <Shield className="w-4 h-4" />
              Soft Credit Pull - Won&apos;t Hurt Your Credit
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Sidebar variant (300x250 banner)
  return (
    <div className={`text-center ${className}`}>
      <a
        href="https://app.getpowerpay.com/apply/16995"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:opacity-90 transition-opacity"
      >
        <img
          src="https://getpowerpay.com/banners/300x250/1.png"
          alt="PowerPay Roof Financing - Apply Now"
          width={300}
          height={250}
          className="rounded-lg shadow-md mx-auto"
        />
      </a>
      <p className="mt-3 text-sm text-gray-600 flex items-center justify-center gap-1.5">
        <Shield className="w-4 h-4 text-green-600" />
        <span>Soft credit pull - won&apos;t hurt your credit!</span>
      </p>
    </div>
  );
}
