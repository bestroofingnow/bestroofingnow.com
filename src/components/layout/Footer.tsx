import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { SITE_CONFIG, SERVICES, LOCATIONS } from '@/lib/constants';
import { getCurrentYear } from '@/lib/utils';

// Custom icon components for platforms not in Lucide
const XTwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0a12 12 0 00-4.37 23.17c-.1-.94-.2-2.4.04-3.43l1.4-5.94s-.36-.72-.36-1.77c0-1.66.96-2.9 2.16-2.9 1.02 0 1.51.77 1.51 1.69 0 1.03-.66 2.57-.99 4-.28 1.19.6 2.16 1.78 2.16 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.07-4.88-5.02-4.88-3.42 0-5.43 2.56-5.43 5.22 0 1.03.4 2.14.89 2.74a.36.36 0 01.08.35c-.09.37-.29 1.19-.33 1.35-.05.21-.17.26-.4.16-1.46-.68-2.37-2.82-2.37-4.55 0-3.7 2.69-7.09 7.77-7.09 4.08 0 7.24 2.9 7.24 6.78 0 4.05-2.55 7.32-6.1 7.32-1.19 0-2.31-.62-2.7-1.35l-.73 2.8c-.27 1.02-.99 2.3-1.47 3.08A12 12 0 1012 0z" />
  </svg>
);

const YelpIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.16 12.6l-4.08 1.44c-.24.08-.32.28-.2.48l2.6 4.04c.2.32.68.28.84-.04l1.2-3.48c.2-.44-.08-.96-.36-2.44zm-4.52 3.6l-2.76-3.88c-.16-.24-.08-.52.2-.6l4.04-1.44c.44-.16 1 .12 1 .68l-.08 3.76c-.04.44-.52.72-.88.52l-1.52-.04zm-3.84-3.56l3.92-1.4c.4-.16.48-.6.16-.88l-3.12-2.92c-.32-.28-.84-.12-.92.28l-.76 3.76c-.12.52.28 1 .72 1.16zm3.4 6.76l-2.68-3.96c-.16-.24-.48-.24-.64.04l-2.08 3.52c-.2.32.04.76.4.8l3.64.4c.44.04.8-.36.64-.8h.72zm-3.96-7.28l3.84-1.4c.4-.16.56-.6.32-.92l-2.48-3.32c-.24-.32-.72-.24-.92.12l-1.52 4.32c-.16.44.32.92.76 1.2zm-4.04 2.96l3.8 2.48c.32.2.72-.04.68-.44l-.32-4.52c-.04-.44-.52-.72-.92-.52l-3 1.92c-.36.2-.44.76-.24 1.08z" />
  </svg>
);

const socialLinks = [
  { icon: Facebook, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
  { icon: Instagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
  { icon: Youtube, href: SITE_CONFIG.social.youtube, label: 'YouTube' },
  { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
  { icon: XTwitterIcon, href: SITE_CONFIG.social.twitter, label: 'X (Twitter)', isCustom: true },
  { icon: TikTokIcon, href: SITE_CONFIG.social.tiktok, label: 'TikTok', isCustom: true },
  { icon: PinterestIcon, href: SITE_CONFIG.social.pinterest, label: 'Pinterest', isCustom: true },
  { icon: YelpIcon, href: SITE_CONFIG.social.yelp, label: 'Yelp', isCustom: true },
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
              src="https://bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png"
              alt={SITE_CONFIG.name}
              width={180}
              height={80}
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-white mb-6">
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
              <span className="text-white">({SITE_CONFIG.googleReviewCount} reviews)</span>
            </div>
            {/* Social Links */}
            <div className="flex flex-wrap gap-2 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                  aria-label={`Follow us on ${social.label}`}
                >
                  {social.isCustom ? (
                    <social.icon />
                  ) : (
                    <social.icon className="w-4 h-4" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Service Areas</h3>
            <ul className="space-y-3">
              {LOCATIONS.slice(0, 10).map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="text-white hover:text-white transition-colors"
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
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phoneClean}`}
                  className="flex items-start gap-3 text-white hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="font-semibold text-lg">{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-white hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  {SITE_CONFIG.address.street}<br />
                  {SITE_CONFIG.address.suite}<br />
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                </span>
              </li>
              <li className="flex items-start gap-3 text-white">
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
            <p className="text-white/90 text-sm">
              © {getCurrentYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-white/90 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/90 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-white/90 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
