'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown, ChevronRight, MapPin, Home, Building2, Wrench, AlertTriangle, Settings, Award } from 'lucide-react';
import { SITE_CONFIG, SERVICES, LOCATIONS, ROOFING_MATERIALS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { cn, trackPhoneClick } from '@/lib/utils';
import { MegaMenu } from './MegaMenu';

// Simplified mobile navigation
const mobileNavigation = [
  { label: 'Services', href: '/services', hasChildren: true },
  { label: 'Locations', href: '/locations', hasChildren: true },
  { label: 'Materials', href: '/materials', hasChildren: true },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Financing', href: '/financing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setExpandedMobileSection(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileSection = (section: string) => {
    setExpandedMobileSection(expandedMobileSection === section ? null : section);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>Veteran-Founded, Family Owned</span>
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

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 bg-white transition-all duration-300',
          isScrolled ? 'shadow-lg' : 'shadow-sm'
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png"
                alt={SITE_CONFIG.name}
                width={360}
                height={160}
                className="h-24 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - Mega Menu */}
            <MegaMenu isScrolled={isScrolled} />

            {/* CTA Buttons */}
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

            {/* Mobile Phone & Menu */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="flex items-center gap-1.5 px-3 py-2 bg-primary text-white rounded-lg font-semibold text-sm"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-white border-t border-gray-100 animate-fade-in max-h-[calc(100vh-112px)] overflow-y-auto"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container py-4">
              <nav className="space-y-1" aria-label="Main navigation">
                {mobileNavigation.map((item) => (
                  <div key={item.label}>
                    {item.hasChildren ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between py-3 px-4 text-dark font-medium rounded-lg hover:bg-light"
                          onClick={() => toggleMobileSection(item.label)}
                          aria-expanded={expandedMobileSection === item.label}
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              'w-5 h-5 transition-transform',
                              expandedMobileSection === item.label && 'rotate-180'
                            )}
                          />
                        </button>

                        {/* Expanded Sections */}
                        {expandedMobileSection === item.label && (
                          <div className="pl-4 pb-2 animate-fade-in">
                            {item.label === 'Services' && (
                              <div className="space-y-1">
                                {SERVICES.slice(0, 8).map((service) => (
                                  <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className="flex items-center gap-2 py-2 px-4 text-sm text-gray rounded-lg hover:bg-light hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <ChevronRight className="w-4 h-4" />
                                    {service.shortTitle}
                                  </Link>
                                ))}
                                <Link
                                  href="/services"
                                  className="flex items-center gap-2 py-2 px-4 text-sm text-primary font-semibold rounded-lg hover:bg-light"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  View All Services →
                                </Link>
                              </div>
                            )}

                            {item.label === 'Locations' && (
                              <div className="space-y-1">
                                {LOCATIONS.slice(0, 8).map((loc) => (
                                  <Link
                                    key={loc.slug}
                                    href={`/locations/${loc.slug}`}
                                    className="flex items-center gap-2 py-2 px-4 text-sm text-gray rounded-lg hover:bg-light hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <MapPin className="w-4 h-4" />
                                    {loc.city}, {loc.state}
                                  </Link>
                                ))}
                                <Link
                                  href="/locations"
                                  className="flex items-center gap-2 py-2 px-4 text-sm text-primary font-semibold rounded-lg hover:bg-light"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  View All Locations →
                                </Link>
                              </div>
                            )}

                            {item.label === 'Materials' && (
                              <div className="space-y-1">
                                {ROOFING_MATERIALS.map((material) => (
                                  <Link
                                    key={material.slug}
                                    href={`/materials/${material.slug}`}
                                    className="flex items-center gap-2 py-2 px-4 text-sm text-gray rounded-lg hover:bg-light hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <ChevronRight className="w-4 h-4" />
                                    {material.shortName}
                                  </Link>
                                ))}
                                <Link
                                  href="/brands"
                                  className="flex items-center gap-2 py-2 px-4 text-sm text-gray rounded-lg hover:bg-light hover:text-primary"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <Award className="w-4 h-4" />
                                  View Brands
                                </Link>
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-3 px-4 text-dark font-medium rounded-lg hover:bg-light"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                <a
                  href={`tel:${SITE_CONFIG.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-lg font-semibold"
                  aria-label={`Call us at ${SITE_CONFIG.phone}`}
                  onClick={() => trackPhoneClick('mobile-menu')}
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call {SITE_CONFIG.phone}
                </a>
                <Button href="/contact" variant="primary" className="w-full">
                  Get Free Inspection
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
