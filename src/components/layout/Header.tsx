'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { SITE_CONFIG, SERVICES, LOCATIONS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface NavChild {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const navigation: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: SERVICES.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
      description: s.description.slice(0, 60) + '...',
    })),
  },
  {
    label: 'Locations',
    href: '/locations',
    children: LOCATIONS.slice(0, 8).map((l) => ({
      label: `${l.city}, ${l.state}`,
      href: `/locations/${l.slug}`,
    })),
  },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Financing', href: '/financing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard navigation for dropdowns
  const handleKeyDown = useCallback((e: React.KeyboardEvent, item: NavItem) => {
    if (!item.children) return;

    const children = item.children;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        setOpenDropdown(openDropdown === item.label ? null : item.label);
        setFocusedIndex(0);
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (openDropdown === item.label) {
          setFocusedIndex(prev => Math.min(prev + 1, children.length - 1));
        } else {
          setOpenDropdown(item.label);
          setFocusedIndex(0);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (openDropdown === item.label) {
          setFocusedIndex(prev => Math.max(prev - 1, 0));
        }
        break;
      case 'Escape':
        setOpenDropdown(null);
        setFocusedIndex(-1);
        break;
      case 'Tab':
        setOpenDropdown(null);
        setFocusedIndex(-1);
        break;
    }
  }, [openDropdown]);

  // Focus dropdown item when index changes
  useEffect(() => {
    if (focusedIndex >= 0 && dropdownRef.current) {
      const links = dropdownRef.current.querySelectorAll('a[role="menuitem"]');
      (links[focusedIndex] as HTMLElement)?.focus();
    }
  }, [focusedIndex]);

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
          >
            <Phone className="w-4 h-4" />
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => { setOpenDropdown(null); setFocusedIndex(-1); }}
                >
                  {item.children ? (
                    <button
                      type="button"
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 text-dark font-medium rounded-lg',
                        'hover:bg-light hover:text-primary transition-colors'
                      )}
                      aria-haspopup="menu"
                      aria-expanded={openDropdown === item.label}
                      aria-label={`${item.label} menu`}
                      onKeyDown={(e) => handleKeyDown(e, item)}
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown className={cn('w-4 h-4 transition-transform', openDropdown === item.label && 'rotate-180')} aria-hidden="true" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 text-dark font-medium rounded-lg',
                        'hover:bg-light hover:text-primary transition-colors'
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && openDropdown === item.label && (
                    <div
                      ref={dropdownRef}
                      className={cn(
                        'absolute top-full left-0 bg-white rounded-lg shadow-xl border border-gray-100 py-4 pt-6 animate-fade-in',
                        item.label === 'Services' ? 'w-[600px] -left-40' : 'w-64'
                      )}
                      style={{ marginTop: '-8px' }}
                      role="menu"
                      aria-label={`${item.label} submenu`}
                    >
                      <div
                        className={cn(
                          item.label === 'Services'
                            ? 'grid grid-cols-3 gap-2 px-4'
                            : 'space-y-1 px-2'
                        )}
                      >
                        {item.children.map((child, index) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            tabIndex={focusedIndex === index ? 0 : -1}
                            className={cn(
                              'block px-3 py-2 rounded-lg hover:bg-light transition-colors focus:bg-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset',
                              item.label === 'Services' && 'text-center'
                            )}
                            onKeyDown={(e) => {
                              if (e.key === 'Escape') {
                                setOpenDropdown(null);
                                setFocusedIndex(-1);
                              }
                            }}
                          >
                            <span className="font-medium text-dark text-sm">{child.label}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-gray-100 mt-3 pt-3 px-4">
                        <Link
                          href={item.href}
                          className="text-primary text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                        >
                          View All {item.label} →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="phone-link flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
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
            className="lg:hidden bg-white border-t border-gray-100 animate-fade-in"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container py-4">
              <nav className="space-y-2" aria-label="Main navigation">
                {navigation.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block py-3 px-4 text-dark font-medium rounded-lg hover:bg-light"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                <a
                  href={`tel:${SITE_CONFIG.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-lg font-semibold"
                  aria-label={`Call us at ${SITE_CONFIG.phone}`}
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
