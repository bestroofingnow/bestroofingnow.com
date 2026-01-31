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
  Users,
  Clock,
  Wrench,
  Building2,
  Factory,
  Warehouse,
  MapPin,
  FileCheck,
  Layers,
  Thermometer,
  DollarSign,
  Cog,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Commercial Roofing Gastonia NC | Industrial & Warehouse | Best Roofing Now',
  description:
    'Expert commercial roofing in Gastonia NC. TPO, EPDM, flat roofs, metal roofing for warehouses, manufacturing plants & industrial facilities. I-85 corridor specialists. BBB A+ rated. Free estimates!',
  keywords: [
    'commercial roofing gastonia nc',
    'commercial roofing contractors gastonia',
    'commercial roof repair gastonia nc',
    'flat roof contractors gastonia',
    'tpo roofing gastonia nc',
    'epdm roofing gastonia',
    'industrial roofing gastonia nc',
    'warehouse roofing gastonia',
    'manufacturing plant roofing gastonia',
    'commercial flat roof gastonia nc',
    'metal roofing commercial gastonia',
    'factory roofing gastonia nc',
    'commercial roofer gastonia',
    'business roofing gastonia nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-roofing-gastonia-nc`,
  },
  openGraph: {
    title: 'Commercial Roofing Gastonia NC | Industrial & Warehouse',
    description:
      'Expert commercial and industrial roofing in Gastonia NC. TPO, EPDM, flat roofing, metal roofing for warehouses and manufacturing. BBB A+ rated. Free estimates!',
    url: `${SITE_CONFIG.url}/commercial-roofing-gastonia-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.warehouse,
        width: 1200,
        height: 630,
        alt: 'Commercial roofing Gastonia NC - Best Roofing Now',
      },
    ],
  },
};

// Commercial roofing services
const commercialServices = [
  {
    icon: Layers,
    title: 'TPO Roofing Systems',
    description: 'Energy-efficient thermoplastic membranes ideal for Gastonia warehouses and manufacturing facilities.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'EPDM Roofing',
    description: 'Durable synthetic rubber membrane roofing with excellent weather resistance for industrial buildings.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Factory,
    title: 'Industrial Roofing',
    description: 'Specialized roofing for manufacturing plants, factories, and industrial facilities throughout Gastonia.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Warehouse,
    title: 'Warehouse Roofing',
    description: 'Large-scale flat roof systems for distribution centers and storage facilities along I-85.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Thermometer,
    title: 'Roof Coatings',
    description: 'Silicone and acrylic roof coatings that extend roof life and reduce cooling costs.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Commercial Roof Repair',
    description: '24/7 emergency repairs for leaks, storm damage, and ponding water issues.',
    href: '/services/roof-repair',
  },
  {
    icon: FileCheck,
    title: 'Roof Inspections',
    description: 'Comprehensive commercial roof assessments with detailed reports and recommendations.',
    href: '/services/roof-inspection',
  },
  {
    icon: DollarSign,
    title: 'Preventive Maintenance',
    description: 'Scheduled maintenance programs to extend roof life and maintain warranty compliance.',
    href: '/services/commercial-roofing',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Star,
    title: '#1 Rated Commercial Roofer',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Gastonia commercial clients.`,
  },
  {
    icon: Factory,
    title: 'Industrial Expertise',
    description: 'Extensive experience with manufacturing plants, warehouses, and industrial facilities.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned & Operated',
    description: 'Military values of integrity and excellence on every commercial project.',
  },
  {
    icon: CheckCircle,
    title: 'Fully Licensed & Insured',
    description: 'NC licensed commercial contractor with $2M+ liability coverage.',
  },
  {
    icon: Users,
    title: 'Manufacturer Certified',
    description: 'Certified installers for GAF, Carlisle, Firestone, and Johns Manville.',
  },
  {
    icon: Clock,
    title: 'Minimal Production Disruption',
    description: 'Nights, weekends, and phased installation to keep your facility running.',
  },
];

// Gastonia commercial areas
const gastoniaAreas = [
  'I-85 Industrial Corridor',
  'Franklin Boulevard',
  'Downtown Gastonia',
  'Garrison Boulevard',
  'New Hope Road',
  'Cox Road Industrial',
  'Hudson Boulevard',
  'Remount Road',
  'Airline Avenue',
  'Gaston Mall Area',
  'Bessemer City Road',
  'US-321 Corridor',
  'Myrtle School Road',
  'Technology Drive',
];

// Property types served
const propertyTypes = [
  'Manufacturing Plants',
  'Warehouses & Distribution',
  'Industrial Facilities',
  'Textile Mills',
  'Food Processing Plants',
  'Office Buildings',
  'Retail Centers',
  'Auto Dealerships',
  'Medical Facilities',
  'Self-Storage Facilities',
  'Churches',
  'Schools',
];

// Nearby cities
const nearbyCities = [
  { name: 'Charlotte', href: '/commercial-roofing-charlotte-nc' },
  { name: 'Mount Holly', href: '/locations/mount-holly-nc' },
  { name: 'Belmont', href: '/locations/belmont-nc' },
  { name: 'Dallas', href: '/locations/dallas-nc' },
  { name: 'Kings Mountain', href: '/locations/kings-mountain-nc' },
  { name: 'Lincolnton', href: '/locations/lincolnton-nc' },
];

// FAQs
const faqs = [
  {
    question: 'What commercial roofing systems do you install in Gastonia NC?',
    answer:
      'Best Roofing Now installs all major commercial roofing systems in Gastonia including TPO (Thermoplastic Polyolefin), EPDM (Ethylene Propylene Diene Monomer), PVC (Polyvinyl Chloride), modified bitumen, built-up roofing (BUR), standing seam metal roofing, and various roof coating systems. For Gastonia\'s manufacturing plants and warehouses, we often recommend TPO or metal for durability and energy efficiency.',
  },
  {
    question: 'How much does commercial roofing cost in Gastonia NC?',
    answer:
      'Commercial roofing costs in Gastonia typically range from $4 to $12 per square foot depending on the roofing system, roof complexity, and project size. TPO and EPDM systems average $5-8 per square foot, while metal roofing ranges from $8-15 per square foot. Large warehouse projects may qualify for volume discounts. We provide free, detailed estimates for all commercial projects.',
  },
  {
    question: 'Do you have experience with industrial roofing in Gastonia?',
    answer:
      'Yes, Best Roofing Now has extensive experience with industrial roofing in Gastonia including manufacturing plants, warehouses, distribution centers, and processing facilities. We understand the unique requirements of industrial buildings including proper drainage for large roof spans, accommodating rooftop equipment, and working around production schedules.',
  },
  {
    question: 'Do you offer emergency commercial roof repair in Gastonia?',
    answer:
      'Yes, Best Roofing Now offers 24/7 emergency commercial roofing services throughout Gastonia and Gaston County. For active leaks and urgent situations in manufacturing facilities and warehouses, we typically respond within 2-4 hours. Our emergency team provides temporary repairs to prevent production disruption and damage. Call (704) 605-6047 for immediate assistance.',
  },
  {
    question: 'How long does a commercial roof last in Gastonia NC?',
    answer:
      'Commercial roof lifespan in Gastonia varies by material: TPO and EPDM typically last 20-30 years, modified bitumen 15-25 years, metal roofing 40-70 years, and built-up roofing 15-30 years. Industrial buildings with proper maintenance can often exceed these lifespans. Regular inspections and maintenance are essential for Gastonia\'s commercial and industrial roofs.',
  },
  {
    question: 'Can you work around manufacturing schedules in Gastonia?',
    answer:
      'Absolutely. We understand that production downtime costs money. Best Roofing Now offers flexible scheduling including night shifts, weekend work, and phased installations. For manufacturing facilities with 24/7 operations, we coordinate closely with plant managers to minimize disruption while ensuring worker safety.',
  },
  {
    question: 'What commercial roof warranties do you offer?',
    answer:
      'We offer industry-leading warranties including manufacturer warranties up to 30 years NDL (No Dollar Limit) on materials from GAF, Carlisle, Firestone, and Johns Manville. Our workmanship warranty covers labor for 10-15 years. For large industrial projects, extended warranty options are available.',
  },
  {
    question: 'Do you handle commercial roof insurance claims in Gastonia?',
    answer:
      'Yes, we have extensive experience with commercial and industrial roof insurance claims in Gastonia. We provide thorough damage documentation, meet with adjusters, and prepare detailed estimates. Storm damage, hail damage, and wind damage to commercial roofs are often covered by property insurance.',
  },
];

export default function CommercialRoofingGastoniaNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gastonia NC', url: `${SITE_CONFIG.url}/roofing-gastonia-nc` },
          { name: 'Commercial Roofing Gastonia NC', url: `${SITE_CONFIG.url}/commercial-roofing-gastonia-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/commercial-roofing-gastonia-nc`}
        pageName="Commercial Roofing Gastonia NC"
        city="Gastonia"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.warehouse}
            alt="Commercial roofing Gastonia NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Cog className="w-4 h-4" />
              <span className="text-sm font-semibold">Industrial & Commercial Roofing Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Commercial Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Gastonia NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Industrial, Warehouse & Manufacturing Roofing Specialists
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now delivers professional commercial and industrial roofing solutions throughout Gastonia
              and Gaston County. From I-85 corridor warehouses to manufacturing plants, our certified team provides
              exceptional quality backed by industry-leading warranties.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Commercial Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Commercial & Industrial Roofing in Gastonia NC
            </h2>
            <p className="text-gray text-lg">
              From flat roof installations to emergency repairs, Best Roofing Now provides comprehensive commercial
              roofing solutions for Gastonia&apos;s manufacturing and business community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray text-sm mb-3">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Gastonia Businesses Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When your industrial or commercial property needs roofing work, you need a contractor who understands
                manufacturing and warehouse operations. We minimize disruption while delivering lasting results.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                      <p className="text-gray text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.commercial.warehouse}
                alt="Commercial roofing Gastonia NC - Industrial building"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-dark">Industrial Experts</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ 5-Star Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial & Industrial Properties We Serve in Gastonia
            </h2>
            <p className="text-gray text-lg">
              From manufacturing plants to distribution centers, we provide expert roofing for every industrial building type.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {propertyTypes.map((type) => (
              <div key={type} className="flex items-center gap-3 bg-light rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium text-dark">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Need Commercial Roofing in Gastonia NC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate for your industrial or commercial roofing project.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-accent hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Roofing Throughout Gastonia & Gaston County
            </h2>
            <p className="text-gray text-lg">
              We provide commercial and industrial roofing services throughout Gastonia and the greater Charlotte region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Gastonia Industrial & Commercial Areas</h3>
              <div className="flex flex-wrap gap-2">
                {gastoniaAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Cities We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {nearbyCities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Systems Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial & Industrial Roofing Systems We Install
            </h2>
            <p className="text-gray text-lg">
              We install and service all major commercial roofing systems for Gastonia industrial facilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">TPO Membrane</h3>
              <p className="text-gray text-sm">
                Single-ply thermoplastic membrane ideal for large flat roofs. Energy-efficient white surface reflects heat
                and reduces cooling costs. 20-30 year warranties.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">EPDM Rubber</h3>
              <p className="text-gray text-sm">
                Durable synthetic rubber membrane with excellent weather resistance. Proven track record for
                warehouses and manufacturing. 25+ year lifespan.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">PVC Roofing</h3>
              <p className="text-gray text-sm">
                Chemical-resistant membrane ideal for manufacturing and food processing. Heat-welded seams create
                watertight bonds.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Standing Seam Metal</h3>
              <p className="text-gray text-sm">
                Long-lasting metal roofing with concealed fasteners. 40-70 year lifespan with minimal maintenance.
                Ideal for warehouses and industrial buildings.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Modified Bitumen</h3>
              <p className="text-gray text-sm">
                Multi-layer asphalt system with reinforced membranes. Excellent for high-traffic roofs
                and buildings with heavy rooftop equipment.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Built-Up Roofing (BUR)</h3>
              <p className="text-gray text-sm">
                Traditional multi-layer system with proven industrial performance. Excellent waterproofing.
                Can be combined with reflective coatings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Commercial Roofing Gastonia NC FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about commercial and industrial roofing in Gastonia NC.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Gastonia"
        service="Commercial Roofing"
        serviceSlug="commercial-roofing"
        title="Commercial Roofing in Nearby Cities"
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for Professional Commercial Roofing in Gastonia NC?"
        subtitle="Get a free, no-obligation estimate from Gastonia's trusted commercial and industrial roofing company. Our certified team will assess your facility and provide expert recommendations."
      />
    </>
  );
}
