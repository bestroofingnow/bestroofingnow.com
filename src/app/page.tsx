import { Metadata } from 'next';
import Image from 'next/image';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { ServiceAreas } from '@/components/sections/ServiceAreas';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { ProjectGallery } from '@/components/sections/ProjectGallery';
import { LazyInteractiveServiceMap } from '@/components/ui/LazyInteractiveServiceMap';
import {
  FAQSchema,
  BreadcrumbSchema,
  HomePageAEOSchemas,
  SpeakableContent,
  WebPageSchema,
  HeroImageSchema,
  GallerySchema,
} from '@/components/seo/SchemaMarkup';
import { DirectoryCitations, TrustBadges } from '@/components/ui/DirectoryCitations';
import { SITE_CONFIG, HOMEPAGE_FAQ } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: "Best Roofing Now | Top-Rated Roofing Company Charlotte NC | BBB A+",
  description: 'Best Roofing Now is Charlotte\'s top-rated roofing contractor. 5-star Google rating, 500+ roofs installed, veteran-owned. Free inspections, storm damage experts. Call (704) 605-6047.',
  keywords: [
    'Best Roofing Now',
    'roofing company Charlotte NC',
    'roofers near me',
    'roofing contractor near me',
    'roof repair near me',
    'roof replacement near me',
    'Charlotte roofing company',
    'veteran owned roofing',
    'BBB A+ roofer',
  ],
  openGraph: {
    title: "Best Roofing Now | Charlotte's Top-Rated Roofing Company",
    description: 'Charlotte\'s top-rated roofing contractor. 5-star Google rating, veteran-owned, BBB A+ rated. Free roof inspections and estimates.',
    url: 'https://www.bestroofingnow.com/',
  },
  alternates: {
    canonical: 'https://www.bestroofingnow.com/',
  },
};

export default function HomePage() {
  // Gallery images for schema
  const galleryImages = [
    { url: IMAGES.projects.work1, caption: 'Complete roof replacement in Charlotte NC - asphalt shingle installation' },
    { url: IMAGES.projects.work2, caption: 'Residential roofing project in Myers Park Charlotte' },
    { url: IMAGES.projects.work3, caption: 'Storm damage roof repair in Huntersville NC' },
    { url: IMAGES.projects.work4, caption: 'New roof installation in Matthews NC' },
    { url: IMAGES.projects.work5, caption: 'Commercial roofing project in Charlotte metro area' },
  ];

  return (
    <>
      {/* Enhanced Schema Markup for SEO */}
      <WebPageSchema
        name="Best Roofing Now | Top-Rated Roofing Company Charlotte NC"
        description="Charlotte's top-rated roofing contractor. 5-star Google rating, 500+ roofs installed, veteran-owned. Free inspections, storm damage experts."
        url={SITE_CONFIG.url}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString().split('T')[0]}
        primaryImage={IMAGES.hero.roofTeam}
        breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }]}
      />
      <FAQSchema faqs={HOMEPAGE_FAQ} />
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }]} />
      <HeroImageSchema
        url={IMAGES.hero.roofTeam}
        caption="Best Roofing Now team - Charlotte's top-rated roofing contractors"
        pageUrl={SITE_CONFIG.url}
      />
      <GallerySchema
        name="Best Roofing Now Project Gallery"
        description="Recent roofing projects completed in Charlotte NC and surrounding areas"
        images={galleryImages}
        pageUrl={SITE_CONFIG.url}
      />
      {/* AEO Schemas for Voice Search and AI Assistants */}
      <HomePageAEOSchemas />
      {/* Speakable Content for Voice Assistants */}
      <SpeakableContent />
      <Hero
        title="Best Roofing Now - Charlotte's Top-Rated Roofing Company"
        subtitle="Veteran-owned roofing contractor with 500+ roofs installed. Full-service roofing, siding, gutters, skylights, and chimney services. Storm damage restoration and insurance claim experts. 5-star Google rating, BBB A+ accredited."
        backgroundImage={IMAGES.hero.roofTeam}
      />
      <Services
        title="Our Roofing Services"
        subtitle="Comprehensive roofing solutions from Charlotte's trusted general contractor. Roof repair, replacement, gutter services, siding installation, skylights, chimney repair, and building restoration for residential and commercial properties."
        limit={9}
        showAll={false}
      />
      <WhyChooseUs />

      {/* Full-Service Contractor Section - GBP Category Coverage */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Charlotte&apos;s Full-Service Roofing &amp; Exterior Contractor
            </h2>
            <p className="text-gray-600 mb-8">
              Best Roofing Now is more than just a roofing contractor. As a licensed general contractor and construction company,
              we provide comprehensive exterior services to protect and beautify your home or business.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-left">
              <a href="/services/roof-repair" className="bg-light rounded-lg p-4 hover:shadow-md transition-shadow">
                <span className="font-semibold text-primary">Roof Repair Shop</span>
                <p className="text-sm text-gray-500">Fast, reliable repairs</p>
              </a>
              <a href="/services/gutters" className="bg-light rounded-lg p-4 hover:shadow-md transition-shadow">
                <span className="font-semibold text-primary">Gutter Service</span>
                <p className="text-sm text-gray-500">Installation &amp; repair</p>
              </a>
              <a href="/services/gutter-cleaning" className="bg-light rounded-lg p-4 hover:shadow-md transition-shadow">
                <span className="font-semibold text-primary">Gutter Cleaning</span>
                <p className="text-sm text-gray-500">Professional cleaning</p>
              </a>
              <a href="/services/siding" className="bg-light rounded-lg p-4 hover:shadow-md transition-shadow">
                <span className="font-semibold text-primary">Siding Contractor</span>
                <p className="text-sm text-gray-500">Vinyl &amp; fiber cement</p>
              </a>
              <a href="/services/building-restoration" className="bg-light rounded-lg p-4 hover:shadow-md transition-shadow">
                <span className="font-semibold text-primary">Building Restoration</span>
                <p className="text-sm text-gray-500">Storm &amp; fire damage</p>
              </a>
              <a href="/services/skylight-installation" className="bg-light rounded-lg p-4 hover:shadow-md transition-shadow">
                <span className="font-semibold text-primary">Skylight Contractor</span>
                <p className="text-sm text-gray-500">VELUX certified</p>
              </a>
              <a href="/services/chimney-services" className="bg-light rounded-lg p-4 hover:shadow-md transition-shadow">
                <span className="font-semibold text-primary">Chimney Services</span>
                <p className="text-sm text-gray-500">Flashing &amp; caps</p>
              </a>
              <a href="/services" className="bg-primary rounded-lg p-4 hover:bg-primary-dark transition-colors">
                <span className="font-semibold text-white">View All Services</span>
                <p className="text-sm text-white/80">25+ service options</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Badge Section */}
      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <p className="text-lg font-semibold text-gray-700">
              Affordable Financing Options Available
            </p>
            <a
              href="https://app.getpowerpay.com/apply/16995"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <Image
                src="https://getpowerpay.com/badges/home-improvement-style2.png"
                alt="PowerPay Roof Financing - Apply Now for Home Improvement Financing"
                width={200}
                height={80}
                className="w-[200px] block"
                loading="lazy"
                unoptimized
              />
              <span className="block text-center text-xs font-bold text-[#ee9c48]">
                Roof Financing
              </span>
            </a>
          </div>
        </div>
      </section>

      <ProjectGallery
        title="See Our Work"
        subtitle="Real roofing projects from Charlotte homes just like yours."
      />
      <Testimonials />

      {/* Trust Badges Section with Directory Citations */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Verified On</p>
          </div>
          <TrustBadges />
          <div className="mt-6 flex justify-center">
            <DirectoryCitations pageType="home" maxLinks={3} variant="inline" title="Also Listed On" />
          </div>
        </div>
      </section>

      <LazyInteractiveServiceMap />
      <ServiceAreas />
      <FAQ />
      <CTASection
        title="Ready to Protect Your Home?"
        subtitle="Get a free, no-obligation roof inspection from Charlotte's most trusted roofing company."
      />
    </>
  );
}
