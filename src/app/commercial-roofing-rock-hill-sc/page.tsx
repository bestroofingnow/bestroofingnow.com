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
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Commercial Roofing Rock Hill SC | Industrial & Flat Roof | Best Roofing Now',
  description:
    'Expert commercial roofing in Rock Hill SC. TPO, EPDM, flat roofs, metal roofing for warehouses, industrial facilities & retail. I-77 corridor. BBB A+ rated, veteran-owned. Free estimates!',
  keywords: [
    'commercial roofing rock hill sc',
    'commercial roofing contractors rock hill',
    'commercial roof repair rock hill sc',
    'flat roof contractors rock hill sc',
    'tpo roofing rock hill sc',
    'epdm roofing rock hill',
    'industrial roofing rock hill sc',
    'warehouse roofing rock hill',
    'commercial flat roof rock hill sc',
    'metal roofing commercial rock hill',
    'commercial roofer rock hill sc',
    'business roofing rock hill sc',
    'rock hill industrial roofing',
    'knowledge park roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-roofing-rock-hill-sc`,
  },
  openGraph: {
    title: 'Commercial Roofing Rock Hill SC | Industrial & Flat Roof',
    description:
      'Expert commercial roofing in Rock Hill SC. TPO, EPDM, flat roofing, metal roofing for warehouses, industrial facilities & retail. BBB A+ rated. Free estimates!',
    url: `${SITE_CONFIG.url}/commercial-roofing-rock-hill-sc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.warehouse,
        width: 1200,
        height: 630,
        alt: 'Commercial roofing Rock Hill SC - Best Roofing Now',
      },
    ],
  },
};

// Commercial roofing services
const commercialServices = [
  {
    icon: Layers,
    title: 'TPO Roofing Systems',
    description: 'Energy-efficient thermoplastic membranes ideal for Rock Hill commercial buildings and warehouses.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'EPDM Roofing',
    description: 'Durable synthetic rubber membrane roofing with excellent weather resistance for industrial facilities.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Building2,
    title: 'Flat Roof Systems',
    description: 'Complete flat roof installation and repair for industrial, retail, and office buildings.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Factory,
    title: 'Industrial Roofing',
    description: 'Specialized roofing for manufacturing plants, distribution centers, and industrial parks.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Rock Hill commercial clients.`,
  },
  {
    icon: Award,
    title: 'BBB A+ Accredited',
    description: 'Better Business Bureau A+ rating with zero complaints.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned & Operated',
    description: 'Military values of integrity and excellence on every commercial project.',
  },
  {
    icon: CheckCircle,
    title: 'SC Licensed & Insured',
    description: 'SC licensed commercial contractor with $2M+ liability coverage.',
  },
  {
    icon: Users,
    title: 'Manufacturer Certified',
    description: 'Certified installers for GAF, Carlisle, Firestone, and Johns Manville.',
  },
  {
    icon: Clock,
    title: 'Minimal Business Disruption',
    description: 'Nights, weekends, and phased installation to keep your business running.',
  },
];

// Rock Hill commercial areas
const rockHillAreas = [
  'Knowledge Park',
  'Riverwalk Business District',
  'I-77 Industrial Corridor',
  'Dave Lyle Boulevard',
  'Cherry Road',
  'Celanese Road',
  'Mt. Gallant Road',
  'Galleria Area',
  'Manchester Village',
  'Rock Hill Economic Development Park',
  'US-21 Corridor',
  'Downtown Rock Hill',
  'Herlong Avenue',
  'Anderson Road Industrial',
];

// Property types served
const propertyTypes = [
  'Manufacturing Plants',
  'Warehouses & Distribution',
  'Industrial Facilities',
  'Office Buildings',
  'Retail Centers',
  'Shopping Centers',
  'Medical Facilities',
  'Restaurants',
  'Hotels',
  'Self-Storage Facilities',
  'Churches',
  'Schools',
];

// Nearby cities
const nearbyCities = [
  { name: 'Charlotte, NC', href: '/commercial-roofing-charlotte-nc' },
  { name: 'Fort Mill, SC', href: '/commercial-roofing-fort-mill-sc' },
  { name: 'Indian Land, SC', href: '/locations/indian-land-sc' },
  { name: 'Tega Cay, SC', href: '/locations/tega-cay-sc' },
  { name: 'Lancaster, SC', href: '/locations/lancaster-sc' },
  { name: 'York, SC', href: '/locations/york-sc' },
];

// FAQs
const faqs = [
  {
    question: 'What commercial roofing systems do you install in Rock Hill SC?',
    answer:
      'Best Roofing Now installs all major commercial roofing systems in Rock Hill including TPO (Thermoplastic Polyolefin), EPDM (Ethylene Propylene Diene Monomer), PVC (Polyvinyl Chloride), modified bitumen, built-up roofing (BUR), standing seam metal roofing, and various roof coating systems. We help Rock Hill businesses select the optimal system based on building type, budget, and energy efficiency goals.',
  },
  {
    question: 'How much does commercial roofing cost in Rock Hill SC?',
    answer:
      'Commercial roofing costs in Rock Hill typically range from $4 to $12 per square foot depending on the roofing system, roof complexity, and project size. TPO and EPDM systems average $5-8 per square foot, while metal roofing ranges from $8-15 per square foot. Large industrial projects may qualify for volume pricing. We provide free, detailed estimates.',
  },
  {
    question: 'Do you have experience with industrial roofing in Rock Hill?',
    answer:
      'Yes, Best Roofing Now has extensive experience with industrial roofing in Rock Hill including manufacturing plants along the I-77 corridor, Knowledge Park facilities, and distribution centers. We understand the unique requirements of industrial buildings including proper drainage, accommodating rooftop equipment, and working around production schedules.',
  },
  {
    question: 'Do you offer emergency commercial roof repair in Rock Hill SC?',
    answer:
      'Yes, Best Roofing Now offers 24/7 emergency commercial roofing services throughout Rock Hill and York County. For active leaks and urgent situations, we typically respond within 2-4 hours. Our emergency team provides temporary repairs to prevent further damage. Call (704) 605-6047 for immediate assistance.',
  },
  {
    question: 'Are you licensed to work in South Carolina?',
    answer:
      'Yes, Best Roofing Now is fully licensed to perform commercial roofing work in South Carolina. We maintain all required SC contractor licenses, comprehensive liability insurance, and workers compensation coverage. We serve Rock Hill, Fort Mill, Indian Land, and throughout York County.',
  },
  {
    question: 'How long does a commercial roof last in Rock Hill SC?',
    answer:
      'Commercial roof lifespan in Rock Hill varies by material: TPO and EPDM typically last 20-30 years, modified bitumen 15-25 years, metal roofing 40-70 years, and built-up roofing 15-30 years. South Carolina\'s heat and humidity make quality installation and regular maintenance essential for maximizing roof life.',
  },
  {
    question: 'What commercial roof warranties do you offer?',
    answer:
      'We offer industry-leading warranties including manufacturer warranties up to 30 years NDL (No Dollar Limit) on materials from GAF, Carlisle, Firestone, and Johns Manville. Our workmanship warranty covers labor for 10-15 years. NDL warranties cover full replacement cost with no depreciation.',
  },
  {
    question: 'Do you handle commercial roof insurance claims in Rock Hill?',
    answer:
      'Yes, we have extensive experience with commercial roof insurance claims in Rock Hill and throughout South Carolina. We provide thorough damage documentation, meet with adjusters, prepare detailed estimates, and advocate for fair settlements. Storm damage, hail damage, and wind damage are often covered.',
  },
];

export default function CommercialRoofingRockHillSCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Rock Hill SC', url: `${SITE_CONFIG.url}/roofing-rock-hill-sc` },
          { name: 'Commercial Roofing Rock Hill SC', url: `${SITE_CONFIG.url}/commercial-roofing-rock-hill-sc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/commercial-roofing-rock-hill-sc`}
        pageName="Commercial Roofing Rock Hill SC"
        city="Rock Hill"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.warehouse}
            alt="Commercial roofing Rock Hill SC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Rock Hill&apos;s Commercial Roofing Experts | SC Licensed</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Commercial Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Rock Hill SC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Industrial, Warehouse & Commercial Roofing Specialists
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now delivers professional commercial roofing solutions throughout Rock Hill and York County SC.
              From Knowledge Park industrial facilities to I-77 corridor warehouses, our certified team provides exceptional
              quality backed by industry-leading warranties and {SITE_CONFIG.googleReviewCount}+ five-star reviews.
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
                SC Licensed & Insured
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
              Complete Commercial Roofing Services in Rock Hill SC
            </h2>
            <p className="text-gray text-lg">
              From flat roof installations to emergency repairs, Best Roofing Now provides comprehensive commercial
              roofing solutions for Rock Hill businesses and industrial facilities.
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
                Why Rock Hill Businesses Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When your commercial property needs roofing work, you need a contractor who understands South Carolina
                business requirements. We combine technical expertise with a commitment to minimizing disruption.
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
                alt="Commercial roofing Rock Hill SC - Industrial building"
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
                    <p className="font-bold text-dark">#1 Rated Commercial</p>
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
              Commercial Properties We Serve in Rock Hill SC
            </h2>
            <p className="text-gray text-lg">
              From manufacturing plants to retail centers, we provide expert commercial roofing for every building type.
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
                Need Commercial Roofing in Rock Hill SC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate for your commercial or industrial roofing project.
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
              Commercial Roofing Throughout Rock Hill & York County SC
            </h2>
            <p className="text-gray text-lg">
              We provide commercial roofing services to businesses throughout Rock Hill and the greater Charlotte metro.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Rock Hill Commercial Districts</h3>
              <div className="flex flex-wrap gap-2">
                {rockHillAreas.map((area) => (
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
              Commercial Roofing Systems We Install
            </h2>
            <p className="text-gray text-lg">
              We install and service all major commercial roofing systems for Rock Hill businesses.
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
                and buildings with heavy equipment.
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
                Commercial Roofing Rock Hill SC FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about commercial roofing services in Rock Hill SC.
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
        currentCity="Rock Hill"
        service="Commercial Roofing"
        serviceSlug="commercial-roofing"
        title="Commercial Roofing in Nearby Cities"
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for Professional Commercial Roofing in Rock Hill SC?"
        subtitle="Get a free, no-obligation estimate from Rock Hill's trusted commercial roofing company. Our certified team will assess your facility and provide expert recommendations."
      />
    </>
  );
}
