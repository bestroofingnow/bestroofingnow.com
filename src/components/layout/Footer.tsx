import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { SITE_CONFIG, SERVICES, LOCATIONS } from '@/lib/constants';
import { getCurrentYear } from '@/lib/utils';

const socialLinks = [
  { icon: Facebook, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
  { icon: Instagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
  { icon: Youtube, href: SITE_CONFIG.social.youtube, label: 'YouTube' },
  { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Image
              src="https://bestroofingnow.com/wp-content/uploads/2024/09/OLD-BRN-logo-no-backgrnd.png"
              alt={SITE_CONFIG.name}
              width={180}
              height={80}
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-white/80 mb-6">
              Family-owned, veteran-operated roofing company serving Charlotte and
              surrounding areas since 2020. We believe in honesty, transparency,
              and doing the right thing for every customer.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold">{SITE_CONFIG.googleRating}</span>
              <span className="text-white/70">({SITE_CONFIG.googleReviewCount} reviews)</span>
            </div>
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {LOCATIONS.slice(0, 10).map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {location.city}, {location.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="text-accent-light hover:text-white font-medium"
                >
                  View All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phoneClean}`}
                  className="flex items-start gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="font-semibold text-lg">{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  {SITE_CONFIG.address.street}<br />
                  {SITE_CONFIG.address.suite}<br />
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{SITE_CONFIG.hours}</span>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-all"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {getCurrentYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-white/60 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-white/60 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
