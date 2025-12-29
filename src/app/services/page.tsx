import { Metadata } from 'next';
import Image from 'next/image';
import { Services } from '@/components/sections/Services';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Services Charlotte NC | Residential & Commercial',
  description:
    'Professional roofing services in Charlotte NC. Residential roofing, commercial roofing, roof repair, replacement, inspection, emergency services, gutters, and siding. Free estimates.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Services', url: `${SITE_CONFIG.url}/services` },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero.roofTeam}
            alt="Best Roofing Now team working on a roof"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Professional Roofing Services in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90">
              From minor repairs to complete roof replacements, we provide
              comprehensive roofing solutions for residential and commercial
              properties. Quality craftsmanship backed by industry-leading
              warranties.
            </p>
          </div>
        </div>
      </section>

      {/* All Services */}
      <Services
        title="Our Complete Service Offerings"
        subtitle="We handle every aspect of your roofing needs with expertise and care."
        showAll={true}
      />

      {/* CTA */}
      <CTASection />
    </>
  );
}
