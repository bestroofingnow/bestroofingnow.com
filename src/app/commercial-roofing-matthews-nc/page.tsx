import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  ArrowRight,
  HelpCircle,
  Award,
  Building2,
  Clock,
  Wrench,
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
  title: 'Commercial Roofing Matthews NC',
  description:
    'Commercial roofing services in Matthews NC. Best Roofing Now installs TPO, EPDM, metal, and flat roofing systems for businesses. Licensed, insured. Free estimates!',
  keywords: [
    'commercial roofing matthews nc',
    'commercial roof repair matthews',
    'flat roof matthews nc',
    'tpo roofing matthews nc',
    'commercial roofing contractors matthews',
    'business roofing matthews nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-roofing-matthews-nc`,
  },
  openGraph: {
    title: 'Commercial Roofing Matthews NC | TPO, EPDM, Flat Roofs | Best Roofing Now',
    description: 'Expert commercial roofing in Matthews NC. TPO, EPDM, metal systems for businesses.',
    url: `${SITE_CONFIG.url}/commercial-roofing-matthews-nc`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Commercial roofing in Matthews NC' }],
  },
};

const roofingSystems = [
  { title: 'TPO Roofing', description: 'Energy-efficient single-ply membrane for flat commercial roofs.', popular: true },
  { title: 'EPDM Roofing', description: 'Durable rubber membrane with excellent weather resistance.' },
  { title: 'Metal Roofing', description: 'Standing seam and metal panel systems for commercial buildings.' },
  { title: 'Modified Bitumen', description: 'Multi-layer asphalt system for excellent waterproofing.' },
  { title: 'Built-Up Roofing (BUR)', description: 'Traditional multi-ply system with proven performance.' },
  { title: 'Roof Coatings', description: 'Extend your roof\'s life with reflective coatings.' },
];

const commercialServices = [
  { icon: Building2, title: 'New Construction', description: 'Complete roofing systems for new commercial buildings.' },
  { icon: Wrench, title: 'Roof Replacement', description: 'Full tear-off and replacement with modern systems.' },
  { icon: Clock, title: 'Repairs & Maintenance', description: 'Fast repairs and preventive maintenance.' },
  { icon: Shield, title: 'Roof Inspections', description: 'Comprehensive inspections to identify issues.' },
];

const faqs = [
  { question: 'What commercial roofing systems do you install in Matthews?', answer: 'We install TPO, EPDM, PVC, modified bitumen, built-up roofing, metal roofing, and roof coatings.' },
  { question: 'How much does commercial roofing cost in Matthews NC?', answer: 'Costs vary based on roof size and system type. TPO and EPDM typically run $5-10 per square foot installed.' },
  { question: 'Can you work around our business hours?', answer: 'Yes! We can schedule work during off-hours, weekends, or in phases to minimize business disruption.' },
  { question: 'Do you offer commercial roof maintenance programs?', answer: 'Yes, we offer preventive maintenance programs. Regular inspections extend your roof\'s lifespan.' },
  { question: 'What warranties do you offer on commercial roofing?', answer: 'We offer manufacturer warranties up to 30 years and our own workmanship warranty.' },
  { question: 'How long does commercial roof installation take?', answer: 'Small commercial roofs may take 3-5 days, while larger projects can take 2-4 weeks.' },
];

export default function CommercialRoofingMatthewsNCPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/services/commercial-roofing` }, { name: 'Matthews NC', url: `${SITE_CONFIG.url}/commercial-roofing-matthews-nc` }]} />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema city="Matthews" state="NC" slug="commercial-roofing-matthews-nc" distance={12} />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/commercial-roofing-matthews-nc`} pageName="Commercial Roofing Matthews NC" city="Matthews" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Commercial roofing in Matthews NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Matthews & South Charlotte</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Commercial Roofing Matthews NC
              <br className="hidden md:block" />
              <span className="text-accent-light">TPO, EPDM & Flat Roof Experts</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Professional commercial roofing for Matthews businesses</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert commercial roofing services throughout Matthews. From new installations to repairs, we deliver quality solutions for businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Your Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />Licensed & Insured</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />BBB A+ Rated</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Commercial Roofing Systems</h2>
            <p className="text-gray text-lg">We install all major commercial roofing systems for Matthews businesses.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roofingSystems.map((system) => (
              <div key={system.title} className={`p-6 rounded-xl ${system.popular ? 'bg-primary text-white' : 'bg-light'}`}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`font-bold text-xl ${system.popular ? 'text-white' : 'text-dark'}`}>{system.title}</h3>
                  {system.popular && <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">Popular</span>}
                </div>
                <p className={system.popular ? 'text-white/90' : 'text-gray'}>{system.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Commercial Services in Matthews</h2>
            <p className="text-gray text-lg">Complete commercial roofing solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialServices.map((service) => (
              <div key={service.title} className="text-center p-6 bg-white rounded-xl">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-gray text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Need Commercial Roofing in Matthews?</h2>
              <p className="text-white/90">Get a free estimate for your business or commercial property.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Matthews" slug="commercial-roofing-matthews-nc" count={4} title="Commercial Projects in Matthews" subtitle="Browse commercial roofing projects." schemaPageUrl={`${SITE_CONFIG.url}/commercial-roofing-matthews-nc`} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Commercial Roofing FAQs</h2>
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

      <ServiceCityLinks city="Matthews" citySlug="matthews-nc" title="Complete Roofing Services in Matthews" subtitle="Beyond commercial, we offer comprehensive solutions." />
      <RelatedCitiesLinks currentCity="Matthews" service="Commercial Roofing" serviceSlug="commercial-roofing" title="Commercial Roofing in Nearby Cities" />
      <CityGeoSection city="Matthews" state="NC" citySlug="matthews-nc" service="Commercial Roofing" />
      <CTASection title="Expert Commercial Roofing in Matthews" subtitle="Get a free estimate. We work around your schedule." />
    </>
  );
}
