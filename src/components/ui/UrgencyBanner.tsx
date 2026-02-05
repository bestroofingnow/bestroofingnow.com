'use client';

import { useState } from 'react';
import { X, Snowflake } from 'lucide-react';
import Link from 'next/link';

export function UrgencyBanner() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="bg-accent text-white py-2 px-4 text-sm relative" role="banner">
      <div className="container flex items-center justify-center gap-2 text-center pr-8">
        <Snowflake className="w-4 h-4 flex-shrink-0 hidden sm:block" aria-hidden="true" />
        <p className="font-medium">
          <span className="font-bold">Ice & Snow Damage?</span>
          {' '}Get <span className="font-bold">10% off repairs</span> with a free inspection or{' '}
          <span className="font-bold">25% off</span> when you sign up for a maintenance plan.{' '}
          <Link
            href="/contact"
            className="underline underline-offset-2 font-bold hover:text-white/90 transition-colors"
          >
            Schedule Now
          </Link>
        </p>
      </div>
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  );
}
