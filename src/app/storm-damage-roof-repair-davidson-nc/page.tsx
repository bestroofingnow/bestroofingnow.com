import { Metadata } from 'next';
import Image from 'next/image';
import {
  Phone,
  Calendar,
  Shield,
  Star,
  HelpCircle,
  Clock,
  CloudRain,
  Wind,
  AlertTriangle,
  MapPin,
  FileText,
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
  title: 'Storm Damage Roof Repair Davidson NC',
  description:
    'Storm damage to your Davidson roof? Best Roofing Now provides 24/7 emergency repairs and insurance claim assistance. BBB A+ rated, veteran-owned. Call now!',
  keywords: [
    'storm damage roof repair davidson nc',
    'hail damage roof repair davidson',
    'wind damage roof repair davidson nc',
    'emergency roof repair davidson',
    'storm damage roofing davidson',
    'roofing insurance claims davidson',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/storm-damage-roof-repair-davidson-nc`,
  },
  openGraph: {
    title: 'Storm Damage Roof Repair Davidson NC | 24/7 Emergency | Best Roofing Now',
    description: 'Fast storm damage roof repair in Davidson NC with insurance claim assistance.',
    url: `${SITE_CONFIG.url}/storm-damage-roof-repair-davidson-nc`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Storm damage roof repair in Davidson NC' }],
  },
};

const damageTypes = [
  { icon: CloudRain, title: 'Hail Damage', description: 'Repair and replacement for hail-damaged shingles.' },
  { icon: Wind, title: 'Wind Damage', description: 'Fix lifted, torn, or missing shingles from high winds.' },
  { icon: AlertTriangle, title: 'Fallen Debris', description: 'Repair damage from fallen trees and branches.' },
  { icon: Clock, title: 'Emergency Tarping', description: 'Immediate temporary protection.' },
  { icon: FileText, title: 'Insurance Claims', description: 'Complete insurance claim assistance.' },
  { icon: Shield, title: 'Full Restoration', description: 'Complete roof restoration to pre-storm condition.' },
];

const insuranceProcess = [
  { step: 1, title: 'Free Inspection', description: 'We document all damage with photos and reports.' },
  { step: 2, title: 'Insurance Filing', description: 'We help file your claim properly.' },
  { step: 3, title: 'Adjuster Meeting', description: 'We meet with your adjuster for fair assessment.' },
  { step: 4, title: 'Approved Repairs', description: 'We complete repairs to highest standards.' },
];

const faqs = [
  { question: 'What should I do after storm damage to my Davidson roof?', answer: 'First, ensure safety. Document damage with photos. Call us for a free 24/7 inspection.' },
  { question: 'Do you help with insurance claims?', answer: 'Yes! We document all damage, provide estimates, and meet with your adjuster.' },
  { question: 'How quickly can you respond in Davidson?', answer: 'We offer 24/7 emergency response. For urgent situations, we can respond within hours.' },
  { question: 'Will my insurance cover storm damage?', answer: 'Most policies cover storm damage including hail and wind. We work with all major insurers.' },
  { question: 'How can I tell if my roof has storm damage?', answer: 'Signs include missing shingles, granules in gutters, dents, and water stains inside.' },
  { question: 'Should I get multiple estimates?', answer: 'Insurance pays based on damage scope. Choose a reputable contractor for quality.' },
];

export default function StormDamageRoofRepairDavidsonNCPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Storm Damage', url: `${SITE_CONFIG.url}/services/storm-damage` }, { name: 'Davidson NC', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-davidson-nc` }]} />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema city="Davidson" state="NC" slug="storm-damage-roof-repair-davidson-nc" distance={18} />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair-davidson-nc`} pageName="Storm Damage Roof Repair Davidson NC" city="Davidson" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Storm damage roof repair in Davidson NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-red-500/80 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 Emergency Storm Response</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Storm Damage Roof Repair
              <br className="hidden md:block" />
              <span className="text-accent-light">Davidson NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Fast emergency repairs + insurance claim assistance</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When storms damage your Davidson roof, trust Best Roofing Now for fast, professional repairs. We provide 24/7 emergency response and complete insurance claim assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="primary" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call Now: {SITE_CONFIG.phone}</Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Schedule Inspection</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-accent-light" />24/7 Emergency Response</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />Insurance Claim Experts</span>
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Storm Damage Services in Davidson</h2>
            <p className="text-gray text-lg">We handle all types of storm damage.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {damageTypes.map((type) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Insurance Claim Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insuranceProcess.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-600 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Storm Damage Emergency?</h2>
              <p className="text-white/90">Call now for 24/7 emergency response in Davidson.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-red-600 hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Request Inspection</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Davidson" slug="storm-damage-roof-repair-davidson-nc" count={4} title="Storm Damage Repairs in Davidson" subtitle="Browse storm damage restoration projects." schemaPageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair-davidson-nc`} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Storm Damage FAQs</h2>
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

      <ServiceCityLinks city="Davidson" citySlug="davidson-nc" title="Complete Roofing Services in Davidson" subtitle="Beyond storm damage, we offer comprehensive solutions." />
      <RelatedCitiesLinks currentCity="Davidson" service="Storm Damage Repair" serviceSlug="storm-damage-roof-repair" title="Storm Damage Repair in Nearby Cities" />
      <CityGeoSection city="Davidson" state="NC" citySlug="davidson-nc" service="Storm Damage Repair" />
      <CTASection title="Storm Damage? We're Here to Help Davidson" subtitle="Get a free inspection and insurance claim assistance." />
    </>
  );
}
