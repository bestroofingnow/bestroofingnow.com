'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

export function UrgencyBanner() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="bg-accent text-white py-2 px-4 text-sm relative" role="banner">
      <div className="container flex items-center justify-center gap-2 text-center pr-8">
        <p className="font-medium">
          <span className="font-bold">Spring storm season is here.</span>{' '}
          Free roof inspection — honest answers, no pressure.{' '}
          <Link
            href="/contact"
            className="underline underline-offset-2 font-bold hover:text-white/90 transition-colors"
          >
            Schedule yours
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
