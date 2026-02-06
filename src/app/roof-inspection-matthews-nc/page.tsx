import { Metadata } from 'next';
import Image from 'next/image';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  HelpCircle,
  Award,
  Search,
  FileText,
  Camera,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceAreaPageSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Inspection Matthews NC | Free',
  description:
    'Need a roof inspection in Matthews NC? Best Roofing Now offers FREE comprehensive roof inspections with detailed reports. BBB A+ rated, veteran-owned. Schedule today!',
  keywords: [
    'roof inspection matthews nc',
    'free roof inspection matthews',
    'roof inspection near me matthews',
    'roof inspection cost matthews nc',
    'roof inspection service matthews',
    'roof assessment matthews nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-inspection-matthews-nc`,
  },
  openGraph: {
    title: 'Roof Inspection Matthews NC | Free Inspections | Best Roofing Now',
    description: 'Free comprehensive roof inspections in Matthews NC with detailed reports.',
    url: `${SITE_CONFIG.url}/roof-inspection-matthews-nc`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Roof inspection in Matthews NC' }],
  },
};

const inspectionFeatures = [
  { icon: Search, title: 'Thorough Examination', description: 'We inspect every component of your roof - shingles, flashing, vents, and more.' },
  { icon: Camera, title: 'Photo Documentation', description: 'Detailed photos of any issues found for your records and insurance.' },
  { icon: FileText, title: 'Written Report', description: 'Comprehensive written report with findings and recommendations.' },
  { icon: Shield, title: 'No Obligation', description: 'Our inspections are completely free with no sales pressure.' },
  { icon: Award, title: 'Certified Inspectors', description: 'Trained and certified inspectors who know what to look for.' },
  { icon: CheckCircle, title: 'Honest Assessment', description: 'We\'ll tell you the truth about your roof\'s condition.' },
];

const inspectionProcess = [
  { step: 1, title: 'Schedule', description: 'Call or book online to schedule your free inspection.' },
  { step: 2, title: 'Inspect', description: 'Our certified inspector examines your entire roof system.' },
  { step: 3, title: 'Document', description: 'We take photos and notes of any issues found.' },
  { step: 4, title: 'Report', description: 'Receive a detailed report with our honest recommendations.' },
];

const faqs = [
  { question: 'Is the roof inspection really free?', answer: 'Yes! Our roof inspections in Matthews are completely free with no obligation. We believe in honest assessments without sales pressure.' },
  { question: 'How long does a roof inspection take?', answer: 'Most inspections take 30-60 minutes depending on roof size and complexity. We\'ll be thorough without rushing.' },
  { question: 'Will you go on my roof?', answer: 'Yes, our inspectors will safely access your roof to perform a hands-on inspection. We also use drone technology when needed.' },
  { question: 'When should I get a roof inspection?', answer: 'We recommend annual inspections, after major storms, before buying/selling a home, or if you notice any issues like leaks or missing shingles.' },
  { question: 'What does the inspection report include?', answer: 'Your report includes photos, condition assessment, identified issues, repair recommendations, and estimated remaining roof lifespan.' },
  { question: 'Can you inspect for insurance claims?', answer: 'Yes, we provide detailed inspections for insurance purposes and can document storm damage with photos and measurements.' },
];

export default function RoofInspectionMatthewsNCPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Inspection', url: `${SITE_CONFIG.url}/services/roof-inspection` }, { name: 'Matthews NC', url: `${SITE_CONFIG.url}/roof-inspection-matthews-nc` }]} />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema city="Matthews" state="NC" slug="roof-inspection-matthews-nc" distance={12} />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/roof-inspection-matthews-nc`} pageName="Roof Inspection Matthews NC" city="Matthews" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Roof inspection in Matthews NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Matthews & South Charlotte</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Inspection Matthews NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Free Comprehensive Inspections</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Know your roof&apos;s condition with a free professional inspection</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides free, thorough roof inspections throughout Matthews. Get an honest assessment with detailed photos and a written report - no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Schedule Free Inspection</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />100% Free</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" />No Obligation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What&apos;s Included in Your Free Inspection</h2>
            <p className="text-gray text-lg">Our comprehensive inspection covers every aspect of your roofing system.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspectionFeatures.map((feature) => (
              <div key={feature.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{feature.title}</h3>
                <p className="text-gray text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Inspection Process</h2>
            <p className="text-gray text-lg">Getting your free roof inspection is simple.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspectionProcess.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Ready for Your Free Roof Inspection?</h2>
              <p className="text-white/90">Schedule today - no obligation, just honest answers.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Schedule Now</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Matthews" slug="roof-inspection-matthews-nc" count={4} title="Recent Inspections in Matthews" subtitle="See our work throughout Matthews." schemaPageUrl={`${SITE_CONFIG.url}/roof-inspection-matthews-nc`} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Roof Inspection FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceCityLinks city="Matthews" citySlug="matthews-nc" title="Complete Roofing Services in Matthews" subtitle="Beyond inspections, we offer comprehensive roofing solutions." />
      <RelatedCitiesLinks currentCity="Matthews" service="Roof Inspection" serviceSlug="roof-inspection" title="Roof Inspections in Nearby Cities" />
      <CityGeoSection city="Matthews" state="NC" citySlug="matthews-nc" service="Roof Inspection" />
      <CTASection title="Get Your Free Roof Inspection in Matthews" subtitle="Know the true condition of your roof. Schedule your free inspection today." />
    </>
  );
}
