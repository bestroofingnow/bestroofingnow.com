'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Home,
  Building2,
  Wrench,
  RefreshCw,
  Search,
  AlertTriangle,
  CloudRain,
  Droplets,
  Layers,
  Settings,
  Sun,
  Wind,
  Flame,
  PanelTop,
  Square,
  MapPin,
  Phone,
  ArrowRight,
  Award,
  FileText,
  HelpCircle,
  Shield,
  Hammer,
  Factory,
  Warehouse,
  BookOpen,
  DollarSign,
  Scale,
} from 'lucide-react';
import { SITE_CONFIG, SERVICES, LOCATIONS, ROOFING_MATERIALS, ROOFING_BRANDS } from '@/lib/constants';
import { cn } from '@/lib/utils';

// Icon mapping for services
const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Wrench,
  RefreshCw,
  Search,
  AlertTriangle,
  CloudRain,
  Droplets,
  Layers,
  Settings,
  Sun,
  Wind,
  Flame,
  PanelTop,
  Square,
};

// Group services by category
const serviceCategories = {
  'Core Services': ['residential-roofing', 'commercial-roofing', 'roof-replacement', 'roof-repair'],
  'Inspections & Maintenance': ['roof-inspection', 'roof-maintenance', 'roof-ventilation'],
  'Emergency & Storm': ['emergency-roofing', 'storm-damage'],
  'Additional Services': ['gutters', 'siding', 'skylight-installation', 'chimney-services', 'soffit-fascia', 'flat-roof-repair'],
};

// Group locations by county
const locationsByCounty = LOCATIONS.reduce((acc, loc) => {
  const county = loc.county || 'Other';
  if (!acc[county]) acc[county] = [];
  acc[county].push(loc);
  return acc;
}, {} as Record<string, typeof LOCATIONS>);

// Lake Norman area cities (special grouping)
const lakeNormanCities = [
  'huntersville-nc',
  'cornelius-nc',
  'davidson-nc',
  'mooresville-nc',
  'denver-nc',
  'sherrills-ford-nc',
  'terrell-nc',
  'lake-norman',
];

const lakeNormanLocations = LOCATIONS.filter((loc) =>
  lakeNormanCities.includes(loc.slug)
);

interface MegaMenuProps {
  isScrolled: boolean;
}

export function MegaMenu({ isScrolled }: MegaMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => setActiveMenu(null);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav ref={menuRef} className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
      {/* Services Mega Menu */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter('services')}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          className={cn(
            'flex items-center gap-1 px-4 py-2 text-dark font-medium rounded-lg',
            'hover:bg-light hover:text-primary transition-colors',
            activeMenu === 'services' && 'bg-light text-primary'
          )}
          aria-haspopup="true"
          aria-expanded={activeMenu === 'services'}
        >
          Services
          <ChevronDown className={cn('w-4 h-4 transition-transform', activeMenu === 'services' && 'rotate-180')} aria-hidden="true" />
        </button>

        {activeMenu === 'services' && (
          <div className="absolute top-full left-0 pt-2 z-50">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 w-[800px] max-w-[calc(100vw-2rem)] animate-fade-in">
              <div className="grid grid-cols-4 gap-6">
                {Object.entries(serviceCategories).map(([category, slugs]) => (
                  <div key={category}>
                    <h3 className="text-xs font-bold text-gray uppercase tracking-wider mb-3">{category}</h3>
                    <ul className="space-y-1">
                      {slugs.map((slug) => {
                        const service = SERVICES.find((s) => s.slug === slug);
                        if (!service) return null;
                        const Icon = serviceIcons[service.icon] || Wrench;
                        return (
                          <li key={slug}>
                            <Link
                              href={`/services/${slug}`}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-light transition-colors group"
                              onClick={() => setActiveMenu(null)}
                            >
                              <Icon className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
                              <span className="text-sm text-dark group-hover:text-primary transition-colors">
                                {service.shortTitle}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Popular Charlotte Searches - High Priority SEO Links */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h3 className="text-xs font-bold text-gray uppercase tracking-wider mb-3">Popular in Charlotte</h3>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/roofing-charlotte-nc"
                    className="text-xs px-3 py-1.5 bg-light rounded-full text-dark hover:bg-primary hover:text-white transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    Roofing Charlotte NC
                  </Link>
                  <Link
                    href="/roofers-charlotte-nc"
                    className="text-xs px-3 py-1.5 bg-light rounded-full text-dark hover:bg-primary hover:text-white transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    Roofers Charlotte NC
                  </Link>
                  <Link
                    href="/roof-repair-charlotte-nc"
                    className="text-xs px-3 py-1.5 bg-light rounded-full text-dark hover:bg-primary hover:text-white transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    Roof Repair Charlotte
                  </Link>
                  <Link
                    href="/roof-replacement-charlotte-nc"
                    className="text-xs px-3 py-1.5 bg-light rounded-full text-dark hover:bg-primary hover:text-white transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    Roof Replacement Charlotte
                  </Link>
                  <Link
                    href="/commercial-roofing-services"
                    className="text-xs px-3 py-1.5 bg-light rounded-full text-dark hover:bg-primary hover:text-white transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    Commercial Roofing
                  </Link>
                </div>
                {/* Lake Norman Area Quick Links */}
                <h3 className="text-xs font-bold text-gray uppercase tracking-wider mb-2 mt-4">Lake Norman Area</h3>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/roofing-huntersville-nc"
                    className="text-xs px-3 py-1.5 bg-accent/10 rounded-full text-dark hover:bg-accent hover:text-white transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    Huntersville
                  </Link>
                  <Link
                    href="/roofing-mooresville-nc"
                    className="text-xs px-3 py-1.5 bg-accent/10 rounded-full text-dark hover:bg-accent hover:text-white transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    Mooresville
                  </Link>
                  <Link
                    href="/roofing-concord-nc"
                    className="text-xs px-3 py-1.5 bg-accent/10 rounded-full text-dark hover:bg-accent hover:text-white transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    Concord
                  </Link>
                  <Link
                    href="/roofing-cornelius-nc"
                    className="text-xs px-3 py-1.5 bg-accent/10 rounded-full text-dark hover:bg-accent hover:text-white transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    Cornelius
                  </Link>
                  <Link
                    href="/roof-repair-huntersville-nc"
                    className="text-xs px-3 py-1.5 bg-accent/10 rounded-full text-dark hover:bg-accent hover:text-white transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    Roof Repair Huntersville
                  </Link>
                  <Link
                    href="/roof-replacement-mooresville-nc"
                    className="text-xs px-3 py-1.5 bg-accent/10 rounded-full text-dark hover:bg-accent hover:text-white transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    Roof Replacement Mooresville
                  </Link>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="/services"
                  className="text-primary text-sm font-semibold hover:text-accent transition-colors flex items-center gap-1"
                  onClick={() => setActiveMenu(null)}
                >
                  View All Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-primary btn-sm"
                  onClick={() => setActiveMenu(null)}
                >
                  <Phone className="w-4 h-4" />
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Commercial & Industrial Mega Menu */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter('commercial')}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          className={cn(
            'flex items-center gap-1 px-4 py-2 text-dark font-medium rounded-lg',
            'hover:bg-light hover:text-primary transition-colors',
            activeMenu === 'commercial' && 'bg-light text-primary'
          )}
          aria-haspopup="true"
          aria-expanded={activeMenu === 'commercial'}
        >
          Commercial
          <ChevronDown className={cn('w-4 h-4 transition-transform', activeMenu === 'commercial' && 'rotate-180')} aria-hidden="true" />
        </button>

        {activeMenu === 'commercial' && (
          <div className="absolute top-full left-0 pt-2 z-50">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 w-[700px] max-w-[calc(100vw-2rem)] animate-fade-in">
              <div className="grid grid-cols-3 gap-6">
                {/* Commercial Buildings */}
                <div>
                  <h3 className="text-xs font-bold text-gray uppercase tracking-wider mb-3 flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    Commercial Buildings
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/office-building-roofing-charlotte-nc" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        Office Buildings
                      </Link>
                    </li>
                    <li>
                      <Link href="/retail-shopping-center-roofing-charlotte-nc" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        Retail &amp; Shopping Centers
                      </Link>
                    </li>
                    <li>
                      <Link href="/hotel-hospitality-roofing-charlotte-nc" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        Hotels &amp; Hospitality
                      </Link>
                    </li>
                    <li>
                      <Link href="/healthcare-facility-roofing-charlotte-nc" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        Healthcare Facilities
                      </Link>
                    </li>
                    <li>
                      <Link href="/school-roofing-charlotte-nc" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        Schools &amp; Universities
                      </Link>
                    </li>
                    <li>
                      <Link href="/church-roofing-charlotte-nc" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        Churches
                      </Link>
                    </li>
                    <li>
                      <Link href="/auto-dealership-roofing-charlotte-nc" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        Auto Dealerships
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Industrial Facilities */}
                <div>
                  <h3 className="text-xs font-bold text-gray uppercase tracking-wider mb-3 flex items-center gap-1">
                    <Factory className="w-3 h-3" />
                    Industrial Facilities
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/industrial-roofing-charlotte-nc" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        Industrial Roofing
                      </Link>
                    </li>
                    <li>
                      <Link href="/warehouse-roofing-charlotte-nc" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        Warehouses
                      </Link>
                    </li>
                    <li>
                      <Link href="/distribution-center-roofing-charlotte-nc" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        Distribution Centers
                      </Link>
                    </li>
                    <li>
                      <Link href="/manufacturing-plant-roofing-charlotte-nc" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        Manufacturing Plants
                      </Link>
                    </li>
                    <li>
                      <Link href="/data-center-roofing-charlotte-nc" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        Data Centers
                      </Link>
                    </li>
                    <li>
                      <Link href="/government-building-roofing-charlotte-nc" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        Government Buildings
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Roofing Systems */}
                <div>
                  <h3 className="text-xs font-bold text-gray uppercase tracking-wider mb-3 flex items-center gap-1">
                    <Layers className="w-3 h-3" />
                    Roofing Systems
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/commercial-systems" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors font-semibold" onClick={() => setActiveMenu(null)}>
                        All Commercial Systems
                      </Link>
                    </li>
                    <li>
                      <Link href="/commercial-systems/tpo-roofing" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        TPO Roofing
                      </Link>
                    </li>
                    <li>
                      <Link href="/commercial-systems/epdm-roofing" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        EPDM Roofing
                      </Link>
                    </li>
                    <li>
                      <Link href="/commercial-systems/pvc-roofing" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        PVC Roofing
                      </Link>
                    </li>
                    <li>
                      <Link href="/commercial-systems/metal-commercial" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        Metal Roofing
                      </Link>
                    </li>
                    <li>
                      <Link href="/commercial-systems/built-up-roofing" className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors" onClick={() => setActiveMenu(null)}>
                        Built-Up Roofing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="/commercial-roofing-services"
                  className="text-primary text-sm font-semibold hover:text-accent transition-colors flex items-center gap-1"
                  onClick={() => setActiveMenu(null)}
                >
                  View All Commercial Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-primary btn-sm"
                  onClick={() => setActiveMenu(null)}
                >
                  <Phone className="w-4 h-4" />
                  Get Commercial Estimate
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Locations Mega Menu */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter('locations')}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          className={cn(
            'flex items-center gap-1 px-4 py-2 text-dark font-medium rounded-lg',
            'hover:bg-light hover:text-primary transition-colors',
            activeMenu === 'locations' && 'bg-light text-primary'
          )}
          aria-haspopup="true"
          aria-expanded={activeMenu === 'locations'}
        >
          Locations
          <ChevronDown className={cn('w-4 h-4 transition-transform', activeMenu === 'locations' && 'rotate-180')} aria-hidden="true" />
        </button>

        {activeMenu === 'locations' && (
          <div className="absolute top-full left-0 pt-2 z-50">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 w-[875px] max-w-[calc(100vw-2rem)] animate-fade-in">
              <div className="grid grid-cols-5 gap-5">
                {/* Lake Norman Column */}
                <div>
                  <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-3 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Lake Norman
                  </h3>
                  <ul className="space-y-1">
                    {lakeNormanLocations.slice(0, 8).map((loc) => (
                      <li key={loc.slug}>
                        <Link
                          href={`/locations/${loc.slug}`}
                          className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          {loc.city}, {loc.state}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* County Columns */}
                {Object.entries(locationsByCounty).slice(0, 4).map(([county, locs]) => (
                  <div key={county}>
                    <h3 className="text-xs font-bold text-gray uppercase tracking-wider mb-3 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {county} County
                    </h3>
                    <ul className="space-y-1">
                      {locs.slice(0, 6).map((loc) => (
                        <li key={loc.slug}>
                          <Link
                            href={`/locations/${loc.slug}`}
                            className="block px-3 py-1.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors"
                            onClick={() => setActiveMenu(null)}
                          >
                            {loc.city}, {loc.state}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* View All Link */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="/locations"
                  className="text-primary text-sm font-semibold hover:text-accent transition-colors flex items-center gap-1"
                  onClick={() => setActiveMenu(null)}
                >
                  View All {LOCATIONS.length} Service Areas <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-sm text-gray">Serving Charlotte & 50-Mile Radius</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Materials & Brands Mega Menu */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter('materials')}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          className={cn(
            'flex items-center gap-1 px-4 py-2 text-dark font-medium rounded-lg',
            'hover:bg-light hover:text-primary transition-colors',
            activeMenu === 'materials' && 'bg-light text-primary'
          )}
          aria-haspopup="true"
          aria-expanded={activeMenu === 'materials'}
        >
          Materials
          <ChevronDown className={cn('w-4 h-4 transition-transform', activeMenu === 'materials' && 'rotate-180')} aria-hidden="true" />
        </button>

        {activeMenu === 'materials' && (
          <div className="absolute top-full right-0 pt-2 z-50">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 w-[600px] max-w-[calc(100vw-2rem)] animate-fade-in">
              <div className="grid grid-cols-3 gap-6">
                {/* Roofing Materials */}
                <div>
                  <h3 className="text-xs font-bold text-gray uppercase tracking-wider mb-3 flex items-center gap-1">
                    <Hammer className="w-3 h-3" />
                    Roofing Materials
                  </h3>
                  <ul className="space-y-1">
                    {ROOFING_MATERIALS.map((material) => (
                      <li key={material.slug}>
                        <Link
                          href={`/materials/${material.slug}`}
                          className="block px-3 py-2 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          {material.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Brands */}
                <div>
                  <h3 className="text-xs font-bold text-gray uppercase tracking-wider mb-3 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Top Brands
                  </h3>
                  <ul className="space-y-1">
                    {ROOFING_BRANDS.map((brand) => (
                      <li key={brand.slug}>
                        <Link
                          href={`/brands/${brand.slug}`}
                          className="block px-3 py-2 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          {brand.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-xs font-bold text-gray uppercase tracking-wider mb-3 flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    Resources
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="/compare"
                        className="block px-3 py-2 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors"
                        onClick={() => setActiveMenu(null)}
                      >
                        Compare Materials
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides/roof-replacement-cost"
                        className="block px-3 py-2 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors"
                        onClick={() => setActiveMenu(null)}
                      >
                        Cost Guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/warranty"
                        className="block px-3 py-2 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors"
                        onClick={() => setActiveMenu(null)}
                      >
                        <Shield className="w-3 h-3 inline mr-1" />
                        Warranty Info
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="block px-3 py-2 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors"
                        onClick={() => setActiveMenu(null)}
                      >
                        <HelpCircle className="w-3 h-3 inline mr-1" />
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href="/materials"
                  className="text-primary text-sm font-semibold hover:text-accent transition-colors flex items-center gap-1"
                  onClick={() => setActiveMenu(null)}
                >
                  Browse All Materials & Products <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Guides Mega Menu */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter('guides')}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          className={cn(
            'flex items-center gap-1 px-4 py-2 text-dark font-medium rounded-lg',
            'hover:bg-light hover:text-primary transition-colors',
            activeMenu === 'guides' && 'bg-light text-primary'
          )}
          aria-haspopup="true"
          aria-expanded={activeMenu === 'guides'}
        >
          Guides
          <ChevronDown className={cn('w-4 h-4 transition-transform', activeMenu === 'guides' && 'rotate-180')} aria-hidden="true" />
        </button>

        {activeMenu === 'guides' && (
          <div className="absolute top-full right-0 pt-2 z-50">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 w-[420px] max-w-[calc(100vw-2rem)] animate-fade-in">
              <h3 className="text-xs font-bold text-gray uppercase tracking-wider mb-3 flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                Charlotte Roofing Guides
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/charlotte-roofing-handbook"
                    className="flex items-center gap-3 px-3 py-2.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    <BookOpen className="w-4 h-4 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium">Roofing Handbook</div>
                      <div className="text-xs text-gray">Complete homeowner guide for 2026</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/roof-repair-vs-replacement-charlotte-nc"
                    className="flex items-center gap-3 px-3 py-2.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    <Scale className="w-4 h-4 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium">Repair vs. Replacement</div>
                      <div className="text-xs text-gray">Make the right decision for your roof</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/charlotte-storm-season-roof-guide"
                    className="flex items-center gap-3 px-3 py-2.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    <CloudRain className="w-4 h-4 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium">Storm Protection Guide</div>
                      <div className="text-xs text-gray">Before, during & after the storm</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/charlotte-roofing-costs-2026"
                    className="flex items-center gap-3 px-3 py-2.5 text-sm text-dark rounded-lg hover:bg-light hover:text-primary transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    <DollarSign className="w-4 h-4 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium">Pricing Guide (2026)</div>
                      <div className="text-xs text-gray">Charlotte roofing costs & estimates</div>
                    </div>
                  </Link>
                </li>
              </ul>

              {/* Bottom Link */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <Link
                  href="/guides"
                  className="text-primary text-sm font-semibold hover:text-accent transition-colors flex items-center gap-1"
                  onClick={() => setActiveMenu(null)}
                >
                  Browse All Guides <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Standard Links */}
      <Link
        href="/reviews"
        className="px-4 py-2 text-dark font-medium rounded-lg hover:bg-light hover:text-primary transition-colors"
      >
        Reviews
      </Link>

      <Link
        href="/roof-financing-charlotte-nc"
        className="px-4 py-2 text-dark font-medium rounded-lg hover:bg-light hover:text-primary transition-colors"
      >
        Financing
      </Link>

      <Link
        href="/blog"
        className="px-4 py-2 text-dark font-medium rounded-lg hover:bg-light hover:text-primary transition-colors"
      >
        Blog
      </Link>

    </nav>
  );
}
