'use client';

import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { LOCATIONS, SITE_CONFIG } from '@/lib/constants';
import { LazyProjectMap } from '@/components/ui/LazyProjectMap';

// Charlotte PMI map ID
const CHARLOTTE_MAP_ID = '6929921876fb8fa56e295536';

export function ServiceAreas() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Side - PMI Project Map */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <LazyProjectMap mapId={CHARLOTTE_MAP_ID} cityName="Charlotte" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Proudly Serving Charlotte & Surrounding Areas
            </h2>

            <p className="text-gray text-lg mb-8">
              We provide professional roofing services throughout the Charlotte
              metropolitan area. Whether you're in the heart of Charlotte or a
              surrounding community, our team is ready to help protect your home.
            </p>

            {/* Locations Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {LOCATIONS.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-light transition-all group"
                >
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span className="text-dark font-medium group-hover:text-primary transition-colors">
                    {location.city}
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                View All Service Areas
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <span className="text-gray">|</span>
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors"
              >
                Not sure if we serve your area? Call us!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
