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
  title: 'Storm Damage Roof Repair Mt Holly NC',
  description:
    'Storm damage to your Mt Holly roof? Best Roofing Now provides 24/7 emergency repairs and insurance claim assistance. BBB A+ rated, veteran-owned. Call now for fast help!',
  keywords: [
    'storm damage roof repair mt holly nc',
    'hail damage roof repair mt holly',
    'wind damage roof repair mt holly nc',
    'emergency roof repair mt holly',
    'storm damage roofing mt holly',
    'roof storm damage mt holly nc',
    'roofing insurance claims mt holly',
    'storm damage restoration mt holly nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/storm-damage-roof-repair-mt-holly-nc`,
  },
  openGraph: {
    title: 'Storm Damage Roof Repair Mt Holly NC | 24/7 Emergency | Best Roofing Now',
    description:
      'Fast storm damage roof repair in Mt Holly NC. Hail, wind, and emergency repairs with insurance claim assistance. BBB A+ rated, veteran-owned.',
    url: `${SITE_CONFIG.url}/storm-damage-roof-repair-mt-holly-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Storm damage roof repair in Mt Holly NC - Best Roofing Now',
      },
    ],
  },
};

// Storm damage types
const damageTypes = [
  {
    icon: CloudRain,
    title: 'Hail Damage',
    description: 'Repair and replacement for hail-damaged shingles, dents, and granule loss.',
  },
  {
    icon: Wind,
    title: 'Wind Damage',
    description: 'Fix lifted, torn, or missing shingles caused by high winds and storms.',
  },
  {
    icon: AlertTriangle,
    title: 'Fallen Debris',
    description: 'Repair damage from fallen trees, branches, and storm debris.',
  },
  {
    icon: Clock,
    title: 'Emergency Tarping',
    description: 'Immediate temporary protection to prevent further water damage.',
  },
  {
    icon: FileText,
    title: 'Insurance Claims',
    description: 'Complete assistance with documentation and insurance claim process.',
  },
  {
    icon: Shield,
    title: 'Full Restoration',
    description: 'Complete roof restoration to pre-storm condition with quality materials.',
  },
];

// Insurance process steps
const insuranceProcess = [
  { step: 1, title: 'Free Inspection', description: 'We document all storm damage with photos and detailed reports.' },
  { step: 2, title: 'Insurance Filing', description: 'We help you file your claim with proper documentation.' },
  { step: 3, title: 'Adjuster Meeting', description: 'We meet with your adjuster to ensure fair assessment.' },
  { step: 4, title: 'Approved Repairs', description: 'Once approved, we complete repairs to the highest standards.' },
];

// FAQs
const faqs = [
  {
    question: 'What should I do after storm damage to my Mt Holly roof?',
    answer:
      'First, ensure everyone is safe. Then document any visible damage with photos if possible. Call us immediately for a free inspection - we offer 24/7 emergency response. Avoid going on your roof yourself as it may be unsafe.',
  },
  {
    question: 'Do you help with insurance claims for storm damage?',
    answer:
      'Yes! We have extensive experience with storm damage insurance claims in Mt Holly and Gaston County. We document all damage, provide detailed estimates, meet with your adjuster, and advocate for fair settlement.',
  },
  {
    question: 'How quickly can you respond to storm damage in Mt Holly?',
    answer:
      'We offer 24/7 emergency response for storm damage. For urgent situations with active leaks or exposed areas, we can typically respond within hours to provide temporary protection and prevent further damage.',
  },
  {
    question: 'Will my insurance cover storm damage repairs?',
    answer:
      'Most homeowner\'s insurance policies cover storm damage including hail and wind damage. We work with all major insurance companies and will help you understand your coverage and maximize your claim.',
  },
  {
    question: 'How can I tell if my roof has storm damage?',
    answer:
      'Signs include missing or lifted shingles, granules in gutters, dents on metal components, damaged flashing, and water stains inside. After any significant storm, we recommend a professional inspection even if damage isn\'t obvious.',
  },
  {
    question: 'Should I get multiple estimates for storm damage repair?',
    answer:
      'While you can get multiple estimates, insurance typically pays based on the scope of damage, not the lowest bid. Choose a reputable contractor based on quality and service, not just price. We provide thorough documentation for fair claim settlement.',
  },
];

export default function StormDamageRoofRepairMtHollyNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Damage', url: `${SITE_CONFIG.url}/services/storm-damage` },
          { name: 'Mt Holly NC', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-mt-holly-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Mt Holly"
        state="NC"
        slug="storm-damage-roof-repair-mt-holly-nc"
        distance={15}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair-mt-holly-nc`}
        pageName="Storm Damage Roof Repair Mt Holly NC"
        city="Mt Holly"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Storm damage roof repair in Mt Holly NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
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
              <span className="text-accent-light">Mt Holly NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast emergency repairs + insurance claim assistance
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When storms damage your Mt Holly roof, trust Best Roofing Now for fast, professional
              repairs. We provide 24/7 emergency response, thorough damage documentation, and
              complete insurance claim assistance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call Now: {SITE_CONFIG.phone}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Inspection
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-light" />
                24/7 Emergency Response
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                Insurance Claim Experts
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Damage Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Storm Damage Services in Mt Holly
            </h2>
            <p className="text-gray text-lg">
              We handle all types of storm damage to Mt Holly roofs, from emergency tarping
              to complete restoration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {damageTypes.map((type) => (
              <div
                key={type.title}
                className="p-6 bg-light rounded-xl"
              >
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

      {/* Insurance Process Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Insurance Claim Process
            </h2>
            <p className="text-gray text-lg">
              We guide you through the entire insurance claim process, making storm damage
              restoration stress-free.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insuranceProcess.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-red-600 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Storm Damage Emergency?
              </h2>
              <p className="text-white/90">
                Don&apos;t wait - call now for immediate 24/7 emergency response in Mt Holly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-red-600 hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-red-600"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Inspection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <GeoProjectGalleryStrip
        pageType="service"
        city="Mt Holly"
        slug="storm-damage-roof-repair-mt-holly-nc"
        count={4}
        title="Storm Damage Repairs in Mt Holly"
        subtitle="Browse storm damage restoration projects from the Mt Holly area."
        schemaPageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair-mt-holly-nc`}
      />

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Storm Damage FAQs
              </h2>
              <p className="text-gray text-lg">
                Questions about storm damage repair in Mt Holly? We have answers.
              </p>
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

      {/* Service City Links */}
      <ServiceCityLinks
        city="Mt Holly"
        citySlug="mt-holly-nc"
        title="Complete Roofing Services in Mt Holly"
        subtitle="Beyond storm damage, we offer comprehensive roofing solutions."
      />

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Mt Holly"
        service="Storm Damage Repair"
        serviceSlug="storm-damage-roof-repair"
        title="Storm Damage Repair in Nearby Cities"
      />

      <CityGeoSection
        city="Mt Holly"
        state="NC"
        citySlug="mt-holly-nc"
        service="Storm Damage Repair"
      />

      <CTASection
        title="Storm Damage? We're Here to Help Mt Holly"
        subtitle="Get a free inspection and insurance claim assistance. We'll restore your roof and guide you through the entire process."
      />
    </>
  );
}
