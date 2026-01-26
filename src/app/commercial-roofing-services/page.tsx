import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  Award,
  Clock,
  Layers,
  Thermometer,
  Wrench,
  FileText,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/components/sections/FAQ';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ServiceSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations, TrustBadges } from '@/components/ui/DirectoryCitations';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'Commercial Roofing Contractor Charlotte NC | TPO, EPDM, Flat Roofs',
  description:
    'Professional commercial roofing contractor in Charlotte NC. TPO, EPDM, PVC, metal, and flat roof systems for businesses. Minimal disruption, 24/7 emergency service. Free estimates!',
  keywords: [
    'commercial roofing contractor Charlotte NC',
    'commercial roofing Charlotte',
    'flat roof contractor Charlotte NC',
    'TPO roofing Charlotte',
    'EPDM roofing Charlotte NC',
    'commercial roof repair Charlotte',
    'industrial roofing Charlotte',
    'business roofing contractor Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-roofing-services`,
  },
  openGraph: {
    title: 'Commercial Roofing Contractor Charlotte NC | TPO, EPDM, Flat Roofs',
    description:
      'Professional commercial roofing contractor in Charlotte NC. TPO, EPDM, PVC, metal, and flat roof systems.',
    url: `${SITE_CONFIG.url}/commercial-roofing-services`,
  },
};

// Commercial roofing systems
const commercialSystems = [
  {
    slug: 'tpo-roofing',
    title: 'TPO Roofing',
    description: 'Thermoplastic Polyolefin single-ply membrane. Energy-efficient white surface reflects heat, reducing cooling costs by up to 30%.',
    highlights: ['Energy Star rated', 'Heat-welded seams', '20-30 year lifespan'],
    priceRange: '$5-$8 per sq ft',
    bestFor: 'Office buildings, retail centers, warehouses',
  },
  {
    slug: 'epdm-roofing',
    title: 'EPDM Rubber Roofing',
    description: 'Ethylene Propylene Diene Monomer synthetic rubber membrane. Proven 50+ year track record for flat roof durability.',
    highlights: ['50+ year history', 'Flexible in cold', 'Easy repairs'],
    priceRange: '$4-$7 per sq ft',
    bestFor: 'Industrial buildings, older commercial properties',
  },
  {
    slug: 'pvc-roofing',
    title: 'PVC Roofing',
    description: 'Polyvinyl Chloride membrane with superior chemical resistance. Ideal for restaurants and facilities with rooftop equipment.',
    highlights: ['Chemical resistant', 'Fire resistant', 'Weldable seams'],
    priceRange: '$6-$10 per sq ft',
    bestFor: 'Restaurants, hospitals, chemical facilities',
  },
  {
    slug: 'built-up-roofing',
    title: 'Built-Up Roofing (BUR)',
    description: 'Traditional multi-layer system with alternating plies of bitumen and reinforcing fabric. Time-tested durability.',
    highlights: ['Proven technology', 'Excellent waterproofing', 'Redundant layers'],
    priceRange: '$5-$9 per sq ft',
    bestFor: 'Large commercial buildings, traditional structures',
  },
  {
    slug: 'metal-commercial',
    title: 'Commercial Metal Roofing',
    description: 'Standing seam and R-panel metal systems for commercial applications. 40-60 year lifespan with minimal maintenance.',
    highlights: ['50+ year lifespan', 'Low maintenance', 'Solar-ready'],
    priceRange: '$8-$15 per sq ft',
    bestFor: 'Warehouses, manufacturing, retail buildings',
  },
  {
    slug: 'roof-coating',
    title: 'Commercial Roof Coating',
    description: 'Extend your existing roof\'s life by 10-15 years with reflective elastomeric coatings. Fraction of replacement cost.',
    highlights: ['Extends roof life', 'Energy savings', 'No tear-off needed'],
    priceRange: '$2-$5 per sq ft',
    bestFor: 'Existing roofs in fair condition, budget-conscious projects',
  },
];

// Property types served
const propertyTypes = [
  { name: 'Office Buildings', icon: '🏢' },
  { name: 'Retail Centers', icon: '🏬' },
  { name: 'Warehouses', icon: '🏭' },
  { name: 'Restaurants', icon: '🍽️' },
  { name: 'Hotels', icon: '🏨' },
  { name: 'Healthcare Facilities', icon: '🏥' },
  { name: 'Schools & Universities', icon: '🏫' },
  { name: 'Churches', icon: '⛪' },
  { name: 'Manufacturing', icon: '🔧' },
  { name: 'Apartment Complexes', icon: '🏠' },
  { name: 'Government Buildings', icon: '🏛️' },
  { name: 'Sports Facilities', icon: '🏟️' },
];

// Commercial roofing FAQs
const commercialFAQs = [
  {
    question: 'What is the best commercial roofing material for Charlotte?',
    answer: 'TPO is our top recommendation for most Charlotte commercial buildings. Its white reflective surface reduces cooling costs by 20-30% - significant savings during our hot summers. TPO offers excellent durability, heat-welded seams for superior waterproofing, and a competitive price point. For restaurants or chemical facilities, PVC is better due to its chemical resistance. EPDM remains a solid budget-friendly option with a proven track record.',
  },
  {
    question: 'How long does a commercial roof last?',
    answer: 'Commercial roof lifespans vary by system: TPO and PVC last 20-30 years, EPDM 25-30 years, BUR 20-30 years, and metal 40-60+ years. Regular maintenance can extend these lifespans significantly. We offer commercial maintenance programs specifically designed to maximize your roof\'s service life and catch issues before they become expensive problems.',
  },
  {
    question: 'Can you work around our business hours?',
    answer: 'Absolutely. We understand your business can\'t afford disruption. Best Roofing Now regularly schedules commercial work during off-hours, weekends, or phases the project to minimize impact on your operations. For 24-hour facilities, we coordinate carefully to keep noise and disruption away from customer-facing areas during peak times.',
  },
  {
    question: 'How much does commercial roofing cost in Charlotte?',
    answer: 'Commercial roofing in Charlotte typically costs $4-$15 per square foot depending on the system. A 10,000 sq ft flat roof might run $50,000-$100,000 for TPO/EPDM, or $80,000-$150,000 for metal. Roof coatings can extend an existing roof\'s life for just $2-$5 per square foot. We provide detailed estimates with clear pricing and financing options.',
  },
  {
    question: 'Do you offer emergency commercial roof repair?',
    answer: 'Yes, we provide 24/7 emergency commercial roof repair services. Active leaks in a commercial building can cause significant damage to inventory, equipment, and operations. Our emergency team responds quickly with tarping, temporary repairs, and permanent solutions. Call (704) 605-6047 any time for emergency service.',
  },
  {
    question: 'What is included in a commercial roof inspection?',
    answer: 'Our comprehensive commercial inspections include: membrane condition assessment, seam integrity check, flashing evaluation, drain and scupper inspection, HVAC penetration assessment, parapet wall inspection, ponding water analysis, interior leak detection, and detailed photo documentation. We provide a written report with condition ratings and prioritized recommendations.',
  },
  {
    question: 'Do you handle commercial roof maintenance contracts?',
    answer: 'Yes, we offer commercial roof maintenance programs with bi-annual inspections, priority emergency service, drain cleaning, minor repairs, and detailed condition reports. Regular maintenance can extend your roof\'s life by 25-50% and helps identify warranty issues before they expire. Most commercial property managers find maintenance contracts far more cost-effective than reactive repairs.',
  },
  {
    question: 'Can you install rooftop equipment curbs and penetrations?',
    answer: 'Yes, we properly integrate HVAC units, exhaust fans, skylights, solar panels, and other rooftop equipment. Poorly installed penetrations are a leading cause of commercial roof leaks. We use proper curbs, flashing, and sealants to maintain waterproof integrity around all equipment. We can also relocate or add penetrations during roof replacement.',
  },
];

// Service for schema
const commercialCategoryService = {
  slug: 'commercial-roofing-services',
  title: 'Commercial Roofing Contractor Charlotte NC',
  description: 'Professional commercial roofing contractor in Charlotte NC. TPO, EPDM, PVC, metal, and flat roof systems for businesses. Minimal disruption, 24/7 emergency service.',
  keywords: ['commercial roofing contractor Charlotte NC', 'commercial roofing Charlotte', 'flat roof contractor Charlotte'],
  priceRange: '$4 - $15 per sq ft',
};

export default function CommercialRoofingServicesPage() {
  const pageUrl = `${SITE_CONFIG.url}/commercial-roofing-services`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Commercial Roofing Contractor Charlotte NC | TPO, EPDM, Flat Roofs"
        description="Professional commercial roofing contractor in Charlotte NC. TPO, EPDM, PVC, metal, and flat roof systems."
        url={pageUrl}
        primaryImage={IMAGES.commercial.office}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing Contractor Charlotte NC', url: pageUrl },
        ]}
      />
      <ServiceSchema service={commercialCategoryService} />
      <FAQSchema faqs={commercialFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing Contractor Charlotte NC', url: pageUrl },
        ]}
      />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[{ name: 'Commercial Roofing Contractor Charlotte NC', href: '/commercial-roofing-services' }]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.commercial.office}
            alt="Commercial roofing contractor Charlotte NC - flat roof installation"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <Building2 className="w-4 h-4" />
                Commercial Specialists
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4" />
                24/7 Emergency Service
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <Shield className="w-4 h-4" />
                Fully Insured
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Commercial Roofing Contractor Charlotte NC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              TPO, EPDM, PVC, Metal &amp; Flat Roof Systems
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Protect your business investment with Charlotte&apos;s trusted commercial roofing contractor.
              Best Roofing Now delivers expert installation, repairs, and maintenance for all commercial
              roof systems - with minimal disruption to your operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                size="lg"
                icon={<Phone className="w-5 h-5" />}
              >
                Call: {SITE_CONFIG.phone}
              </Button>
              <EstimateButton
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                estimateType="commercial"
              >
                Free Commercial Estimate
              </EstimateButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container">
          <TrustBadges />
        </div>
      </section>

      {/* Why Choose Us for Commercial */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
              Why Charlotte Businesses Choose Best Roofing Now
            </h2>
            <p className="text-lg text-gray text-center mb-10">
              Your commercial roof protects your business, employees, customers, and inventory.
              We treat that responsibility seriously.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">Minimal Business Disruption</h3>
                    <p className="text-gray text-sm">
                      We schedule around your operations - nights, weekends, or phased installation.
                      Your business stays open and running.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">24/7 Emergency Response</h3>
                    <p className="text-gray text-sm">
                      Commercial leaks can&apos;t wait for business hours. Our emergency team responds
                      quickly to protect your property and operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">Detailed Documentation</h3>
                    <p className="text-gray text-sm">
                      Comprehensive reports, photos, and warranties for property management records.
                      We make your job easier.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">Maintenance Programs</h3>
                    <p className="text-gray text-sm">
                      Proactive maintenance extends roof life by 25-50% and catches issues before
                      they become expensive emergencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Roofing Systems */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Commercial Roofing Systems We Install
          </h2>
          <p className="text-gray text-center max-w-2xl mx-auto mb-12">
            Expert installation of all major commercial roofing systems. We recommend the right solution for your building and budget.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialSystems.map((system, index) => (
              <Link
                key={index}
                href={`/commercial-systems/${system.slug}`}
                className="bg-light rounded-xl p-6 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                    {system.title}
                  </h3>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                    {system.priceRange}
                  </span>
                </div>
                <p className="text-gray text-sm mb-4">{system.description}</p>
                <ul className="space-y-1 mb-4">
                  {system.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray">
                      <CheckCircle className="w-3 h-3 text-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 mb-3">
                  <strong>Best for:</strong> {system.bestFor}
                </p>
                <span className="inline-flex items-center text-sm text-primary font-medium group-hover:text-accent">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/commercial-systems"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              View All Commercial Systems
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Properties We Serve
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {propertyTypes.map((property, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl mb-2 block">{property.icon}</span>
                  <span className="text-sm font-medium text-gray">{property.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={commercialFAQs}
        title="Commercial Roofing FAQ"
        subtitle="Common questions about commercial roofing in Charlotte NC"
      />

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Related Commercial Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/services/commercial-roof-maintenance" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Commercial Maintenance</h3>
              <p className="text-gray text-sm">Bi-annual inspections and proactive maintenance to maximize roof life.</p>
            </Link>
            <Link href="/services/flat-roof-repair" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Flat Roof Repair</h3>
              <p className="text-gray text-sm">Expert repairs for all flat roof systems - leaks, ponding, seam issues.</p>
            </Link>
            <Link href="/metal-roofing-services" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Commercial Metal Roofing</h3>
              <p className="text-gray text-sm">Standing seam and R-panel metal roofing for commercial applications.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <DirectoryCitations pageType="service" maxLinks={4} variant="inline" title="Verified Business Profiles" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Protect Your Business Investment
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free commercial roof assessment from Charlotte&apos;s trusted commercial roofing experts.
              We&apos;ll evaluate your roof, discuss options, and provide transparent pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="secondary"
                size="lg"
                className="bg-white !text-accent hover:bg-white/90"
                icon={<Phone className="w-5 h-5" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
              <EstimateButton
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
                estimateType="commercial"
              >
                Free Commercial Estimate
              </EstimateButton>
            </div>

            <p className="mt-6 text-white/80 text-sm">
              Serving Charlotte metro commercial properties across NC &amp; SC
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
