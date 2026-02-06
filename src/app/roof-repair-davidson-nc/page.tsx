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
  Clock,
  AlertTriangle,
  Droplets,
  Wind,
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
  title: 'Roof Repair Davidson NC | Fast Fixes',
  description:
    'Need roof repair in Davidson NC? Best Roofing Now provides fast, reliable repairs for leaks, storm damage, and more. BBB A+ rated, veteran-owned. Free inspections!',
  keywords: [
    'roof repair davidson nc',
    'roof leak repair davidson',
    'emergency roof repair davidson nc',
    'roofing repair davidson',
    'fix roof leak davidson nc',
    'storm damage repair davidson',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-repair-davidson-nc`,
  },
  openGraph: {
    title: 'Roof Repair Davidson NC | Fast & Reliable | Best Roofing Now',
    description: 'Expert roof repair services in Davidson NC. Same-day emergency repairs, storm damage restoration, leak fixes.',
    url: `${SITE_CONFIG.url}/roof-repair-davidson-nc`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Roof repair services in Davidson NC' }],
  },
};

const repairTypes = [
  { icon: Droplets, title: 'Leak Repairs', description: 'Fast detection and repair of roof leaks before they cause water damage.' },
  { icon: Wind, title: 'Storm Damage', description: 'Comprehensive storm damage repairs including missing shingles and wind damage.' },
  { icon: AlertTriangle, title: 'Emergency Repairs', description: '24/7 emergency roofing services for urgent situations.' },
  { icon: Shield, title: 'Flashing Repairs', description: 'Repair and replacement of roof flashing around chimneys and vents.' },
  { icon: CheckCircle, title: 'Shingle Replacement', description: 'Individual or section shingle replacement to restore protection.' },
  { icon: Clock, title: 'Preventive Repairs', description: 'Minor repairs that prevent larger problems and extend roof lifespan.' },
];

const repairProcess = [
  { step: 1, title: 'Free Inspection', description: 'We thoroughly inspect your roof and identify all issues.' },
  { step: 2, title: 'Detailed Estimate', description: 'Receive a transparent quote with no hidden fees.' },
  { step: 3, title: 'Professional Repair', description: 'Our certified team completes the repair efficiently.' },
  { step: 4, title: 'Quality Check', description: 'We verify the repair and clean up completely.' },
];

const faqs = [
  { question: 'How quickly can you repair my roof in Davidson?', answer: 'For emergency repairs, we typically respond within 24 hours. Standard repairs are usually scheduled within 1-2 weeks.' },
  { question: 'How much does roof repair cost in Davidson NC?', answer: 'Costs vary based on damage extent. Minor repairs may cost $200-$500, while more extensive repairs can range from $500-$2,000+. We provide free estimates.' },
  { question: 'Do you offer emergency roof repair in Davidson?', answer: 'Yes! We provide 24/7 emergency roof repair services for Davidson and Lake Norman. Call us immediately for urgent issues.' },
  { question: 'Should I repair or replace my roof?', answer: 'If repairs exceed 30% of replacement cost or your roof is near end of lifespan, replacement may be more economical. We\'ll give you an honest recommendation.' },
  { question: 'Do you handle insurance claims for roof repairs?', answer: 'Yes, we have extensive experience with insurance claims. We document all damage and can meet with your adjuster.' },
  { question: 'What are signs I need roof repair?', answer: 'Signs include visible leaks, missing or damaged shingles, granules in gutters, sagging areas, and higher energy bills.' },
];

export default function RoofRepairDavidsonNCPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Repair', url: `${SITE_CONFIG.url}/services/roof-repair` }, { name: 'Davidson NC', url: `${SITE_CONFIG.url}/roof-repair-davidson-nc` }]} />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema city="Davidson" state="NC" slug="roof-repair-davidson-nc" distance={18} />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/roof-repair-davidson-nc`} pageName="Roof Repair Davidson NC" city="Davidson" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Roof repair services in Davidson NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Davidson & Lake Norman</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Repair Davidson NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Fast, Reliable Repairs</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Expert roof repairs for Davidson homes and businesses</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              From minor leaks to major storm damage, Best Roofing Now provides fast, reliable roof repair services throughout Davidson NC. Our certified technicians fix problems right the first time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Schedule Free Inspection</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-accent-light" />24/7 Emergency Service</span>
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />BBB A+ Rated</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Roof Repair Services in Davidson</h2>
            <p className="text-gray text-lg">We handle all types of roof repairs for Davidson homes and businesses.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairTypes.map((type) => (
              <div key={type.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{type.title}</h3>
                <p className="text-gray text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Roof Repair Process</h2>
            <p className="text-gray text-lg">We make roof repairs simple and stress-free.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairProcess.map((item) => (
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Need Roof Repair in Davidson?</h2>
              <p className="text-white/90">Don&apos;t wait for small problems to become big ones. Schedule your free inspection today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Schedule Inspection</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Davidson" slug="roof-repair-davidson-nc" count={4} title="Recent Roof Repairs in Davidson" subtitle="Browse completed roof repair projects." schemaPageUrl={`${SITE_CONFIG.url}/roof-repair-davidson-nc`} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Roof Repair FAQs</h2>
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

      <ServiceCityLinks city="Davidson" citySlug="davidson-nc" title="Complete Roofing Services in Davidson" subtitle="Beyond repairs, we offer comprehensive roofing solutions." />
      <RelatedCitiesLinks currentCity="Davidson" service="Roof Repair" serviceSlug="roof-repair" title="Roof Repair in Nearby Cities" />
      <CityGeoSection city="Davidson" state="NC" citySlug="davidson-nc" service="Roof Repair" />
      <CTASection title="Ready to Fix Your Roof in Davidson?" subtitle="Get a free inspection and honest assessment from our certified team." />
    </>
  );
}
