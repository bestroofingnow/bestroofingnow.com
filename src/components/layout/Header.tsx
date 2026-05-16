'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Shield, Clock } from 'lucide-react';
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
      {/* Top Bar - editorial trust strip */}
      <div className="bg-navy-deep text-white text-[12px] hidden md:block">
        <div className="container flex justify-between items-center py-2">
          <div className="flex items-center gap-4 lg:gap-5">
            <span className="inline-flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-gold" aria-hidden="true" />
              Veteran-Owned
            </span>
            <span className="text-white/40" aria-hidden="true">·</span>
            <span>BBB A+ Accredited</span>
            <span className="text-white/40" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-gold" aria-hidden="true" />
              24/7 Emergency
            </span>
            <span className="text-white/40 hidden lg:inline" aria-hidden="true">·</span>
            <Link href="/services/roof-maintenance" className="hidden lg:inline text-white/80 hover:text-white">
              Save $1,000s — Get Your Roof Maintenance Plan Today Starting at Just $49/mo
            </Link>
          </div>
          <div className="flex items-center gap-4 lg:gap-5">
            <span className="text-white/70 hidden lg:inline">Financing available</span>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="font-semibold tabular hover:text-gold transition-colors"
              aria-label={`Call us at ${SITE_CONFIG.phone}`}
              onClick={() => trackPhoneClick('header-top-bar')}
            >
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - hairline border + scroll shadow */}
      <header className="sticky top-0 z-50 bg-white border-b border-line header-scroll-shadow">
        <div className="container">
          <div className="flex items-center justify-between h-24 lg:h-[88px]">
            {/* Logo - critical for LCP */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-3.5">
              <Image
                src="/images/logo.jpg"
                alt={SITE_CONFIG.name}
                width={180}
                height={80}
                className="h-16 lg:h-[60px] w-auto"
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
              <span className="hidden xl:flex flex-col leading-tight pl-3.5 border-l border-line">
                <span className="text-[10px] tracking-[0.18em] uppercase font-semibold text-mute">
                  Charlotte · Lake Norman
                </span>
                <span className="text-[11px] font-semibold text-copper mt-0.5">
                  Veteran-Owned · Since 2020
                </span>
              </span>
            </Link>

            {/* Desktop Navigation - Lazy loaded MegaMenu */}
            <Suspense fallback={<nav className="hidden lg:block" />}>
              <MegaMenu />
            </Suspense>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="inline-flex items-center gap-2 text-navy font-semibold text-[14px] tabular hover:text-accent transition-colors"
                aria-label={`Call us at ${SITE_CONFIG.phone}`}
                onClick={() => trackPhoneClick('header-desktop')}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {SITE_CONFIG.phone}
              </a>
              <Button href="/contact" variant="primary" size="sm">
                Free Inspection
              </Button>
            </div>

            {/* Mobile Phone & Menu Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="flex items-center gap-1.5 px-3 py-3 min-h-[44px] bg-accent text-white rounded-[2px] font-semibold text-[12.5px] uppercase tracking-[0.06em]"
                aria-label={`Call ${SITE_CONFIG.phone}`}
                onClick={() => trackPhoneClick('header-mobile')}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">Call Now</span>
              </a>
              <button
                className="p-2 rounded-[2px] hover:bg-light text-navy"
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
