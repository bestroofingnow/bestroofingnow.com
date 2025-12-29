'use client';

import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 text-dark font-medium rounded-lg',
                      'hover:bg-light hover:text-primary transition-colors'
                    )}
                    aria-haspopup={item.children ? 'menu' : undefined}
                    aria-expanded={item.children ? openDropdown === item.label : undefined}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-4 h-4" aria-hidden="true" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && openDropdown === item.label && (
                    <div
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
                            : 'space-y-1'
                        )}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-3 py-2 rounded-lg hover:bg-light transition-colors',
                              item.label === 'Services' && 'text-center'
                            )}
                          >
                            <span className="font-medium text-dark text-sm">{child.label}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-gray-100 mt-3 pt-3 px-4">
                        <Link
                          href={item.href}
                          className="text-primary text-sm font-medium hover:underline"
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

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-light"
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
                >
                  <Phone className="w-5 h-5" />
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
