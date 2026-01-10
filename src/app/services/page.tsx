import { Metadata } from 'next';
import Image from 'next/image';
import { Services } from '@/components/sections/Services';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Services Charlotte NC | Roofing Contractor Near Me',
  description:
    'Professional roofing services from Charlotte\'s #1 roofing contractor. Roof repair, replacement, storm damage, inspections, gutters & siding. 5-star rated, 500+ roofs installed. Free estimates!',
  keywords: [
    'roofing services Charlotte NC',
    'roofing contractor Charlotte',
    'roofing contractor near me',
    'roof repair Charlotte',
    'roof replacement Charlotte NC',
    'residential roofing Charlotte',
    'commercial roofing Charlotte',
  ],
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

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Services', href: '/services' },
            ]}
          />
        </div>
      </div>

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
              Roofing Contractor Services in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90">
              Charlotte's #1 rated roofing contractor with 500+ roofs installed. From minor repairs to complete roof replacements, we provide
              comprehensive roofing solutions for residential and commercial
              properties. 5-star rated, veteran-owned, BBB A+ accredited.
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
