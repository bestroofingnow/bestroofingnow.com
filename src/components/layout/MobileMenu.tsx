'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Phone,
  Home,
  Building2,
  Wrench,
  MapPin,
  Layers,
  BookOpen,
  Star,
  CreditCard,
  FileText,
} from 'lucide-react';
import { SITE_CONFIG, SERVICES, LOCATIONS } from '@/lib/constants';
import { cn, trackPhoneClick } from '@/lib/utils';

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <nav
      id="mobile-menu"
      className="lg:hidden fixed inset-0 top-28 z-40 bg-white overflow-y-auto"
      style={{ paddingBottom: 'max(5rem, env(safe-area-inset-bottom))' }}
      aria-label="Mobile navigation"
    >
      <div className="container py-4">
        {/* Phone CTA */}
        <a
          href={`tel:${SITE_CONFIG.phoneClean}`}
          className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-lg font-semibold text-lg mb-4"
          onClick={() => trackPhoneClick('mobile-menu')}
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          Call {SITE_CONFIG.phone}
        </a>

        <div className="space-y-1">
          {/* Services Accordion */}
          <div className="border-b border-gray-100">
            <button
              type="button"
              className="flex items-center justify-between w-full py-4 text-left font-medium"
              onClick={() => toggleSection('services')}
              aria-expanded={openSection === 'services'}
            >
              <span className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" aria-hidden="true" />
                Services
              </span>
              <ChevronDown
                className={cn('w-5 h-5 transition-transform', openSection === 'services' && 'rotate-180')}
                aria-hidden="true"
              />
            </button>
            {openSection === 'services' && (
              <div className="pb-4 pl-7 space-y-2">
                {SERVICES.slice(0, 8).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block py-2 text-gray hover:text-primary"
                    onClick={onClose}
                  >
                    {service.shortTitle}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="block py-2 text-primary font-medium"
                  onClick={onClose}
                >
                  View All Services →
                </Link>
              </div>
            )}
          </div>

          {/* Commercial Accordion */}
          <div className="border-b border-gray-100">
            <button
              type="button"
              className="flex items-center justify-between w-full py-4 text-left font-medium"
              onClick={() => toggleSection('commercial')}
              aria-expanded={openSection === 'commercial'}
            >
              <span className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" aria-hidden="true" />
                Commercial
              </span>
              <ChevronDown
                className={cn('w-5 h-5 transition-transform', openSection === 'commercial' && 'rotate-180')}
                aria-hidden="true"
              />
            </button>
            {openSection === 'commercial' && (
              <div className="pb-4 pl-7 space-y-2">
                <Link href="/services/commercial-roofing" className="block py-2 text-gray hover:text-primary" onClick={onClose}>
                  Commercial Roofing
                </Link>
                <Link href="/industrial-roofing-charlotte-nc" className="block py-2 text-gray hover:text-primary" onClick={onClose}>
                  Industrial Roofing
                </Link>
                <Link href="/commercial-systems" className="block py-2 text-gray hover:text-primary" onClick={onClose}>
                  Roofing Systems
                </Link>
                <Link
                  href="/commercial-roofing-services"
                  className="block py-2 text-primary font-medium"
                  onClick={onClose}
                >
                  View All Commercial →
                </Link>
              </div>
            )}
          </div>

          {/* Service Areas Accordion */}
          <div className="border-b border-gray-100">
            <button
              type="button"
              className="flex items-center justify-between w-full py-4 text-left font-medium"
              onClick={() => toggleSection('locations')}
              aria-expanded={openSection === 'locations'}
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                Service Areas
              </span>
              <ChevronDown
                className={cn('w-5 h-5 transition-transform', openSection === 'locations' && 'rotate-180')}
                aria-hidden="true"
              />
            </button>
            {openSection === 'locations' && (
              <div className="pb-4 pl-7 space-y-2">
                {LOCATIONS.slice(0, 6).map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="block py-2 text-gray hover:text-primary"
                    onClick={onClose}
                  >
                    {loc.city}, {loc.state}
                  </Link>
                ))}
                <Link
                  href="/locations"
                  className="block py-2 text-primary font-medium"
                  onClick={onClose}
                >
                  View All {LOCATIONS.length} Areas →
                </Link>
              </div>
            )}
          </div>

          {/* Materials Accordion */}
          <div className="border-b border-gray-100">
            <button
              type="button"
              className="flex items-center justify-between w-full py-4 text-left font-medium"
              onClick={() => toggleSection('materials')}
              aria-expanded={openSection === 'materials'}
            >
              <span className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" aria-hidden="true" />
                Materials
              </span>
              <ChevronDown
                className={cn('w-5 h-5 transition-transform', openSection === 'materials' && 'rotate-180')}
                aria-hidden="true"
              />
            </button>
            {openSection === 'materials' && (
              <div className="pb-4 pl-7 space-y-2">
                <Link href="/materials" className="block py-2 text-gray hover:text-primary" onClick={onClose}>
                  All Materials
                </Link>
                <Link href="/brands" className="block py-2 text-gray hover:text-primary" onClick={onClose}>
                  Brands We Install
                </Link>
                <Link href="/compare" className="block py-2 text-gray hover:text-primary" onClick={onClose}>
                  Compare Materials
                </Link>
              </div>
            )}
          </div>

          {/* Guides Accordion */}
          <div className="border-b border-gray-100">
            <button
              type="button"
              className="flex items-center justify-between w-full py-4 text-left font-medium"
              onClick={() => toggleSection('guides')}
              aria-expanded={openSection === 'guides'}
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" aria-hidden="true" />
                Guides
              </span>
              <ChevronDown
                className={cn('w-5 h-5 transition-transform', openSection === 'guides' && 'rotate-180')}
                aria-hidden="true"
              />
            </button>
            {openSection === 'guides' && (
              <div className="pb-4 pl-7 space-y-2">
                <Link href="/charlotte-roofing-handbook" className="block py-2 text-gray hover:text-primary" onClick={onClose}>
                  Roofing Handbook
                </Link>
                <Link href="/charlotte-roofing-costs-2026" className="block py-2 text-gray hover:text-primary" onClick={onClose}>
                  Pricing Guide 2026
                </Link>
                <Link href="/charlotte-storm-season-roof-guide" className="block py-2 text-gray hover:text-primary" onClick={onClose}>
                  Storm Protection
                </Link>
                <Link
                  href="/guides"
                  className="block py-2 text-primary font-medium"
                  onClick={onClose}
                >
                  View All Guides →
                </Link>
              </div>
            )}
          </div>

          {/* Direct Links */}
          <Link
            href="/reviews"
            className="flex items-center gap-2 py-4 font-medium border-b border-gray-100"
            onClick={onClose}
          >
            <Star className="w-5 h-5 text-primary" aria-hidden="true" />
            Reviews
          </Link>

          <Link
            href="/roof-financing-charlotte-nc"
            className="flex items-center gap-2 py-4 font-medium border-b border-gray-100"
            onClick={onClose}
          >
            <CreditCard className="w-5 h-5 text-primary" aria-hidden="true" />
            Financing
          </Link>

          <Link
            href="/blog"
            className="flex items-center gap-2 py-4 font-medium border-b border-gray-100"
            onClick={onClose}
          >
            <FileText className="w-5 h-5 text-primary" aria-hidden="true" />
            Blog
          </Link>
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full py-4 bg-accent text-white rounded-lg font-semibold text-lg"
            onClick={onClose}
          >
            Get Free Inspection
          </Link>
        </div>
      </div>
    </nav>
  );
}
