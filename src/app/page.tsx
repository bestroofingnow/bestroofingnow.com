import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { ServiceAreas } from '@/components/sections/ServiceAreas';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { ProjectGallery } from '@/components/sections/ProjectGallery';
import { InteractiveServiceMap } from '@/components/ui/InteractiveServiceMap';
import { FAQSchema, BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
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
      <FAQSchema faqs={HOMEPAGE_FAQ} />
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }]} />
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
