import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG, LOCATIONS } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Service Areas | Roofing Company Charlotte & Surrounding Areas',
  description:
    'Best Roofing Now serves Charlotte NC and all surrounding areas including Concord, Huntersville, Matthews, Cornelius, Davidson, Lake Norman, and more. Free estimates.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations`,
  },
};

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Service Areas', url: `${SITE_CONFIG.url}/locations` },
        ]}
      />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Service Areas', href: '/locations' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero.hero17}
            alt="Roofing services across Charlotte metro area"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="font-semibold">Service Areas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Proudly Serving Charlotte & Surrounding Areas
            </h1>
            <p className="text-xl text-white/90">
              From our home base in Charlotte, we provide professional roofing
              services throughout the greater Charlotte metropolitan area.
            </p>
          </div>
        </div>
      </section>

      {/* Area Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Best Roofing Now serves the entire Charlotte metro area, from the Lake Norman waterfront communities of Cornelius, Davidson, and Denver to the growing suburbs of Concord, Huntersville, and Matthews. Our crews travel daily across Mecklenburg, Iredell, Cabarrus, Lincoln, Gaston, and York (SC) counties, so we know the local building codes, HOA requirements, and weather patterns that affect every roof in the region.
              </p>
              <p>
                Each service area page below includes verified project photos, neighborhood-specific roofing recommendations, and direct contact information. Whether you need a quick storm-damage inspection in Fort Mill or a full roof replacement in Mooresville, our family-owned team is ready to help. Select your city to see recent work near you and request a free, no-obligation estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all group border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
                      {location.city}, {location.state}
                    </h2>
                    <p className="text-gray text-sm mt-1">{location.county} County</p>
                    {location.isPrimary && (
                      <span className="inline-block mt-2 text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                        Main Office Location
                      </span>
                    )}
                    <p className="text-primary font-medium text-sm mt-3 group-hover:text-accent">
                      View roofing services →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed CTA */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Don't See Your City?
            </h2>
            <p className="text-gray text-lg mb-6">
              We serve many communities throughout the Charlotte region. Give us a call
              to confirm service availability in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="btn btn-primary">
                Call {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="btn btn-outline">
                Contact Us Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
