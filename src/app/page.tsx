import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { ServiceAreas } from '@/components/sections/ServiceAreas';
import { FAQ } from '@/components/sections/FAQ';
import { InstantEstimate } from '@/components/sections/InstantEstimate';
import { CTASection } from '@/components/sections/CTASection';
import { ProjectGallery } from '@/components/sections/ProjectGallery';
import { InteractiveServiceMap } from '@/components/ui/InteractiveServiceMap';
import { FAQSchema, BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG, HOMEPAGE_FAQ } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: "Charlotte's #1 Roofing Company | Roof Repair & Replacement",
  description: 'Best Roofing Now is Charlotte NC trusted roofing company. Family-owned, veteran-operated. Free roof inspections, storm damage repair. BBB A+ rated.',
  openGraph: {
    title: "Best Roofing Now | Charlotte's Trusted Roofing Company",
    description: 'Family-owned, veteran-operated roofing company in Charlotte NC. Free inspections, honest assessments, and quality craftsmanship.',
    url: SITE_CONFIG.url,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function HomePage() {
  return (
    <>
      <FAQSchema faqs={HOMEPAGE_FAQ} />
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }]} />
      <Hero
        title="Charlotte's Most Trusted Roofing Company"
        subtitle="Family-owned, veteran-founded. We treat every home like it's our own. Free inspections, honest advice, and quality work that lasts."
        backgroundImage={IMAGES.hero.roofTeam}
      />
      <Services
        title="Our Roofing Services"
        subtitle="Comprehensive roofing solutions for residential and commercial properties."
        limit={6}
        showAll={false}
      />
      <WhyChooseUs />
      <InstantEstimate />
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
