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
  Droplets,
  Home,
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
  title: 'Gutter Installation Davidson NC',
  description:
    'Need new gutters in Davidson NC? Best Roofing Now installs seamless aluminum and copper gutters with gutter guards. Protect your home from water damage. Free estimates!',
  keywords: [
    'gutter installation davidson nc',
    'seamless gutters davidson nc',
    'gutter replacement davidson',
    'gutter contractors davidson nc',
    'new gutters davidson nc',
    'gutter guards davidson',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-installation-davidson-nc`,
  },
  openGraph: {
    title: 'Gutter Installation Davidson NC | Seamless Gutters | Best Roofing Now',
    description: 'Professional gutter installation in Davidson NC.',
    url: `${SITE_CONFIG.url}/gutter-installation-davidson-nc`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Gutter installation in Davidson NC' }],
  },
};

const gutterServices = [
  { icon: Droplets, title: 'Seamless Gutters', description: 'Custom-fabricated seamless aluminum gutters that reduce leaks.' },
  { icon: Shield, title: 'Gutter Guards', description: 'Keep debris out with quality gutter protection.' },
  { icon: Home, title: 'Gutter Replacement', description: 'Full gutter system replacement including downspouts.' },
  { icon: CheckCircle, title: 'Downspout Installation', description: 'Proper placement to direct water from foundation.' },
  { icon: Award, title: 'Copper Gutters', description: 'Premium copper gutter systems.' },
  { icon: Droplets, title: 'Gutter Repair', description: 'Fix sagging, leaking, or damaged gutters.' },
];

const benefits = [
  'Protects your foundation from water damage',
  'Prevents basement flooding and moisture issues',
  'Reduces soil erosion around your home',
  'Prevents fascia and soffit rot',
  'Protects landscaping from water runoff',
  'Increases curb appeal and home value',
];

const faqs = [
  { question: 'How much do new gutters cost in Davidson NC?', answer: 'Gutter installation typically costs $1,200 to $4,000 for most homes, depending on footage and material.' },
  { question: 'What size gutters do I need?', answer: 'Most Davidson homes use 5-inch K-style gutters, though 6-inch may be recommended for large roof areas.' },
  { question: 'Are seamless gutters worth it?', answer: 'Yes! Fewer joints means fewer leaks and longer lifespan.' },
  { question: 'Do you install gutter guards?', answer: 'Yes, we offer several gutter guard options.' },
  { question: 'How long do gutters last?', answer: 'Aluminum gutters last 20-30 years, copper 50+ years.' },
  { question: 'Can you match my existing gutter color?', answer: 'Yes! We offer gutters in many colors.' },
];

export default function GutterInstallationDavidsonNCPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Gutter Installation', url: `${SITE_CONFIG.url}/services/gutter-installation` }, { name: 'Davidson NC', url: `${SITE_CONFIG.url}/gutter-installation-davidson-nc` }]} />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema city="Davidson" state="NC" slug="gutter-installation-davidson-nc" distance={18} />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/gutter-installation-davidson-nc`} pageName="Gutter Installation Davidson NC" city="Davidson" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Gutter installation in Davidson NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Davidson & Lake Norman</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Installation Davidson NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Protect Your Home from Water</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Seamless gutters custom-fitted to your Davidson home</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Protect your home from water damage with quality gutter installation from Best Roofing Now. We install seamless aluminum, copper, and steel gutters throughout Davidson.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Your Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />BBB A+ Rated</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" />Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gutter Services in Davidson NC</h2>
            <p className="text-gray text-lg">Complete gutter solutions for Davidson homes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gutterServices.map((service) => (
              <div key={service.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-gray text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why New Gutters Matter</h2>
              <p className="text-gray text-lg mb-6">Gutters protect your home&apos;s foundation, siding, and landscaping from water damage.</p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image src={IMAGES.realProjects.drone2} alt="Gutter installation project in Davidson NC" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Need New Gutters in Davidson?</h2>
              <p className="text-white/90">Get a free estimate for seamless gutter installation.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Davidson" slug="gutter-installation-davidson-nc" count={4} title="Gutter Projects in Davidson" subtitle="Browse completed gutter installation projects." schemaPageUrl={`${SITE_CONFIG.url}/gutter-installation-davidson-nc`} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gutter Installation FAQs</h2>
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

      <ServiceCityLinks city="Davidson" citySlug="davidson-nc" title="Complete Roofing Services in Davidson" subtitle="Beyond gutters, we offer comprehensive solutions." />
      <RelatedCitiesLinks currentCity="Davidson" service="Gutter Installation" serviceSlug="gutter-installation" title="Gutter Installation in Nearby Cities" />
      <CityGeoSection city="Davidson" state="NC" citySlug="davidson-nc" service="Gutter Installation" />
      <CTASection title="Protect Your Davidson Home with New Gutters" subtitle="Get a free estimate for seamless gutter installation." />
    </>
  );
}
