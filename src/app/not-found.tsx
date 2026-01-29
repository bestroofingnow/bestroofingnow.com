import Link from 'next/link';
import { Home, Search, Phone, ArrowRight, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function NotFound() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <a
            href={`tel:${SITE_CONFIG.phoneClean}`}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call {SITE_CONFIG.phone}
          </a>
        </div>

        <div className="text-left bg-gray-50 rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/services', label: 'Our Services', icon: Search },
              { href: '/locations', label: 'Service Areas', icon: MapPin },
              { href: '/projects', label: 'Project Gallery', icon: ArrowRight },
              { href: '/contact', label: 'Contact Us', icon: Phone },
              { href: '/reviews', label: 'Customer Reviews', icon: ArrowRight },
              { href: '/blog', label: 'Roofing Blog', icon: ArrowRight },
            ].map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg text-gray-700 hover:text-primary hover:shadow-sm transition-all"
              >
                <Icon className="w-4 h-4 text-primary" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
