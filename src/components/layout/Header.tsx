'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { trackPhoneClick } from '@/lib/utils';

// Lazy load heavy components - MegaMenu has 35+ icons, only needed on desktop
const MegaMenu = lazy(() => import('./MegaMenu').then(m => ({ default: m.MegaMenu })));

// Lazy load mobile menu - only needed when user clicks hamburger
const MobileMenu = lazy(() => import('./MobileMenu'));

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Only set overflow when menu is open - removed scroll/resize listeners for performance
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Bar - hidden on mobile */}
      <div className="bg-primary text-white py-2 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>Veteran-Founded, Family Owned</span>
            <span>|</span>
            <span>Residential, Commercial & Industrial</span>
            <span>|</span>
            <span>BBB A+ Rated</span>
            <span>|</span>
            <span>Open 24 Hours</span>
          </div>
          <a
            href={`tel:${SITE_CONFIG.phoneClean}`}
            className="flex items-center gap-2 font-semibold hover:text-accent-light transition-colors"
            aria-label={`Call us at ${SITE_CONFIG.phone}`}
            onClick={() => trackPhoneClick('header-top-bar')}
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {SITE_CONFIG.phone}
          </a>
        </div>
      </div>

      {/* Main Header - uses CSS scroll-driven shadow instead of JS listener */}
      <header className="sticky top-0 z-50 bg-white shadow-sm header-scroll-shadow">
        <div className="container">
          <div className="flex items-center justify-between h-28">
            {/* Logo - critical for LCP */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png"
                alt={SITE_CONFIG.name}
                width={180}
                height={80}
                className="h-20 w-auto"
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
            </Link>

            {/* Desktop Navigation - Lazy loaded MegaMenu */}
            <Suspense fallback={<nav className="hidden lg:block" />}>
              <MegaMenu />
            </Suspense>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="phone-link flex items-center gap-2"
                aria-label={`Call us at ${SITE_CONFIG.phone}`}
                onClick={() => trackPhoneClick('header-desktop')}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                {SITE_CONFIG.phone}
              </a>
              <Button href="/contact" variant="primary">
                Free Inspection
              </Button>
            </div>

            {/* Mobile Phone & Menu Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="flex items-center gap-1.5 px-3 py-3 min-h-[44px] bg-primary text-white rounded-lg font-semibold text-sm"
                aria-label={`Call ${SITE_CONFIG.phone}`}
                onClick={() => trackPhoneClick('header-mobile')}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">Call Now</span>
              </a>
              <button
                className="p-2 rounded-lg hover:bg-light"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Lazy loaded, only renders when open */}
        {isMobileMenuOpen && (
          <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
            <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
          </Suspense>
        )}
      </header>
    </>
  );
}
