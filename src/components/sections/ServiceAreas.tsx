'use client';

import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { LOCATIONS, SITE_CONFIG } from '@/lib/constants';
import ProjectMap from '@/components/projects/ProjectMap';

export function ServiceAreas() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Side - Internal Project Map */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <ProjectMap height="500px" showControls={true} />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <MapPin className="w-3.5 h-3.5 text-copper" aria-hidden="true" />
              <span className="eyebrow">Service Areas</span>
            </div>

            <h2 className="heading-display text-[28px] sm:text-[32px] md:text-[40px] mb-4">
              See Our Work & Service Areas
            </h2>

            <p className="text-slate text-[15px] md:text-[16px] leading-[1.65] mb-3 max-w-xl">
              We provide professional roofing services throughout the Charlotte
              metropolitan area. Whether you&apos;re in the heart of Charlotte or a
              surrounding community, our team is ready to help protect your home.
            </p>

            <p className="text-slate text-[14px] leading-[1.65] mb-8 max-w-xl">
              <strong className="text-navy">Click the map pins</strong> to view our completed roofing projects in your area.
              See before &amp; after photos, project details, and the quality craftsmanship we deliver to homes just like yours.
            </p>

            {/* Locations Grid — editorial hairline chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-line border border-line mb-8">
              {LOCATIONS.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-cream transition-colors group"
                >
                  <MapPin className="w-3.5 h-3.5 text-copper flex-shrink-0" aria-hidden="true" />
                  <span className="text-navy text-[13.5px] font-medium group-hover:text-copper transition-colors">
                    {location.city}
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                href="/locations"
                className="inline-flex items-center gap-1.5 text-navy text-[12.5px] font-semibold uppercase tracking-[0.08em] hover:text-copper transition-colors"
              >
                View All Service Areas
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
              <span className="text-line" aria-hidden="true">|</span>
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="inline-flex items-center gap-2 text-accent text-[13.5px] font-semibold hover:text-accent-dark transition-colors"
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
