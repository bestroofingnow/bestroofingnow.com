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
import { InteractiveServiceMap } from '@/components/ui/InteractiveServiceMap';
import { FAQSchema, BreadcrumbSchema, HomePageAEOSchemas, SpeakableContent } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG, HOMEPAGE_FAQ } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: "#1 Roofing Contractor Charlotte NC | Roofers Near Me | BBB A+ Rated",
  description: 'Best Roofing Now is Charlotte\'s top-rated roofing contractor. 5-star Google rating, 500+ roofs installed, veteran-owned. Free inspections, storm damage experts. Call (704) 605-6047.',
  keywords: [
    'roofing contractor Charlotte NC',
    'roofing company Charlotte NC',
    'roofers near me Charlotte',
    'roofing contractor near me',
    'roofing company near me',
    'Charlotte roofers',
    'roof repair Charlotte NC',
    'roof replacement Charlotte',
    'best roofer Charlotte',
  ],
  openGraph: {
    title: "#1 Roofing Contractor Charlotte NC | Best Roofing Now",
    description: 'Charlotte\'s top-rated roofing contractor. 5-star Google rating, veteran-owned, BBB A+ rated. Free roof inspections and estimates.',
    url: SITE_CONFIG.url,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Schema Markup for SEO */}
      <FAQSchema faqs={HOMEPAGE_FAQ} />
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }]} />
      {/* AEO Schemas for Voice Search and AI Assistants */}
      <HomePageAEOSchemas />
      {/* Speakable Content for Voice Assistants */}
      <SpeakableContent />
      <Hero
        title="Charlotte's #1 Roofing Contractor"
        subtitle="Veteran-owned roofing company with 500+ roofs installed. 5-star Google rating, BBB A+ accredited. Free inspections, honest assessments, and quality craftsmanship guaranteed."
        backgroundImage={IMAGES.hero.roofTeam}
      />
      <Services
        title="Our Roofing Services"
        subtitle="Comprehensive roofing solutions for residential and commercial properties."
        limit={6}
        showAll={false}
      />
      <WhyChooseUs />

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
      <InteractiveServiceMap />
      <ServiceAreas />
      <FAQ />
      <CTASection
        title="Ready to Protect Your Home?"
        subtitle="Get a free, no-obligation roof inspection from Charlotte's most trusted roofing company."
      />
    </>
  );
}
