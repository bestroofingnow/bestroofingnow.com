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
  Settings,
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
  title: 'Commercial Roofing Huntersville NC | Flat Roof & TPO Experts | Best Roofing Now',
  description:
    'Expert commercial roofing in Huntersville NC. TPO, EPDM, flat roofs, metal roofing for warehouses, offices & retail. Birkdale Village to Northcross. BBB A+ rated, veteran-owned. Free estimates!',
  keywords: [
    'commercial roofing huntersville nc',
    'commercial roofing contractors huntersville',
    'commercial roof repair huntersville nc',
    'flat roof contractors huntersville',
    'tpo roofing huntersville nc',
    'epdm roofing huntersville',
    'industrial roofing huntersville nc',
    'warehouse roofing huntersville',
    'office building roofing huntersville',
    'commercial flat roof huntersville nc',
    'metal roofing commercial huntersville',
    'roof coating huntersville nc',
    'commercial roofer huntersville',
    'business roofing huntersville nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-roofing-huntersville-nc`,
  },
  openGraph: {
    title: 'Commercial Roofing Huntersville NC | Flat Roof & TPO Experts',
    description:
      'Expert commercial roofing in Huntersville NC. TPO, EPDM, flat roofing, metal roofing for warehouses, offices, retail & more. BBB A+ rated. Free estimates!',
    url: `${SITE_CONFIG.url}/commercial-roofing-huntersville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.warehouse,
        width: 1200,
        height: 630,
        alt: 'Commercial roofing Huntersville NC - Best Roofing Now',
      },
    ],
  },
};

// Commercial roofing services
const commercialServices = [
  {
    icon: Layers,
    title: 'TPO Roofing Systems',
    description: 'Energy-efficient thermoplastic polyolefin membranes ideal for Huntersville businesses. Highly reflective and cost-effective.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'EPDM Roofing',
    description: 'Durable synthetic rubber membrane roofing with excellent weather resistance. 30+ year proven performance.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Building2,
    title: 'Flat Roof Systems',
    description: 'Complete flat roof installation and repair including built-up roofing, modified bitumen, and single-ply systems.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Factory,
    title: 'Metal Roofing',
    description: 'Standing seam and corrugated metal roofing for industrial facilities. 40-70 year lifespan.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Thermometer,
    title: 'Roof Coatings',
    description: 'Silicone and acrylic roof coatings that extend roof life and reduce cooling costs in Huntersville.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Commercial Roof Repair',
    description: '24/7 emergency repairs for leaks, storm damage, and ponding water. Minimize business disruption.',
    href: '/services/roof-repair',
  },
  {
    icon: FileCheck,
    title: 'Roof Inspections',
    description: 'Comprehensive commercial roof assessments with detailed reports and maintenance recommendations.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Huntersville commercial clients.`,
  },
  {
    icon: Award,
    title: 'BBB A+ Accredited',
    description: 'Better Business Bureau A+ rating with zero complaints.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned & Operated',
    description: 'Military values of integrity and excellence on every project.',
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
    title: 'Minimal Business Disruption',
    description: 'Nights, weekends, phased installation to keep your business running.',
  },
];

// Huntersville commercial areas
const huntersvilleAreas = [
  'Birkdale Village',
  'Northcross',
  'Gilead Road Corridor',
  'Sam Furr Road',
  'I-77 Business Corridor',
  'Huntersville Business Park',
  'Statesville Road',
  'Mt Holly-Huntersville Road',
  'Beatties Ford Road',
  'NC 73 Corridor',
  'Hambright Road',
  'Verhoeff Drive Industrial',
];

// Property types served
const propertyTypes = [
  'Warehouses & Distribution',
  'Office Buildings',
  'Retail Centers',
  'Shopping Plazas',
  'Medical Facilities',
  'Restaurants',
  'Auto Dealerships',
  'Manufacturing Plants',
  'Self-Storage Facilities',
  'Churches',
  'Schools',
  'Multi-Family Housing',
];

// Nearby cities
const nearbyCities = [
  { name: 'Charlotte', href: '/commercial-roofing-charlotte-nc' },
  { name: 'Cornelius', href: '/commercial-roofing-cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Mooresville', href: '/commercial-roofing-mooresville-nc' },
  { name: 'Concord', href: '/commercial-roofing-concord-nc' },
  { name: 'Denver', href: '/locations/denver-nc' },
];

// FAQs
const faqs = [
  {
    question: 'What types of commercial roofing systems do you install in Huntersville NC?',
    answer:
      'Best Roofing Now installs all major commercial roofing systems in Huntersville including TPO (Thermoplastic Polyolefin), EPDM (Ethylene Propylene Diene Monomer), PVC (Polyvinyl Chloride), modified bitumen, built-up roofing (BUR), standing seam metal roofing, and various roof coating systems. We help Huntersville businesses select the optimal system based on building type, budget, and energy efficiency goals.',
  },
  {
    question: 'How much does commercial roofing cost in Huntersville NC?',
    answer:
      'Commercial roofing costs in Huntersville typically range from $4 to $12 per square foot depending on the roofing system, roof complexity, and project size. TPO and EPDM systems average $5-8 per square foot, while metal roofing ranges from $8-15 per square foot. A 10,000 sq ft flat roof replacement typically costs $50,000-$100,000. We provide free, detailed estimates.',
  },
  {
    question: 'What is the best commercial roofing material for Huntersville businesses?',
    answer:
      'For Huntersville\'s climate with hot summers and occasional severe storms, TPO roofing is often the best choice for commercial buildings. TPO\'s white reflective surface reduces cooling costs by 10-30%, resists UV damage, and handles temperature fluctuations well. EPDM is excellent for buildings with rooftop equipment, while metal roofing offers superior longevity for warehouses and industrial facilities.',
  },
  {
    question: 'Do you offer emergency commercial roof repair in Huntersville?',
    answer:
      'Yes, Best Roofing Now offers 24/7 emergency commercial roofing services throughout Huntersville. For active leaks and urgent situations, we typically respond within 2-4 hours. Our emergency team provides temporary repairs to prevent further damage, then schedules permanent repairs. Call (704) 605-6047 for immediate assistance.',
  },
  {
    question: 'How long does a commercial roof last in Huntersville NC?',
    answer:
      'Commercial roof lifespan in Huntersville varies by material: TPO and EPDM typically last 20-30 years, modified bitumen 15-25 years, metal roofing 40-70 years, and built-up roofing 15-30 years. Proper maintenance significantly extends roof life. Huntersville\'s sun, heat, and occasional hail make quality installation and regular maintenance essential.',
  },
  {
    question: 'Can you work around our business operations in Huntersville?',
    answer:
      'Absolutely. We understand business continuity is critical for Huntersville companies. Best Roofing Now offers flexible scheduling including night shifts, weekend work, and phased installations. For retail locations at Birkdale Village or Northcross, we can complete sections after business hours to minimize customer disruption.',
  },
  {
    question: 'What commercial roof warranties do you offer?',
    answer:
      'We offer industry-leading warranties including manufacturer warranties up to 30 years NDL (No Dollar Limit) on materials from GAF, Carlisle, Firestone, and Johns Manville. Our workmanship warranty covers labor for 10-15 years depending on the project. NDL warranties cover full replacement cost with no depreciation.',
  },
  {
    question: 'Do you handle commercial roof insurance claims in Huntersville?',
    answer:
      'Yes, we have extensive experience with commercial roof insurance claims in Huntersville. We provide thorough damage documentation, meet with adjusters, prepare detailed estimates, and advocate for fair settlements. Storm damage, hail damage, and wind damage to commercial roofs are often covered by property insurance.',
  },
];

export default function CommercialRoofingHuntersvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Huntersville NC', url: `${SITE_CONFIG.url}/roofing-huntersville-nc` },
          { name: 'Commercial Roofing Huntersville NC', url: `${SITE_CONFIG.url}/commercial-roofing-huntersville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/commercial-roofing-huntersville-nc`}
        pageName="Commercial Roofing Huntersville NC"
        city="Huntersville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.warehouse}
            alt="Commercial roofing Huntersville NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">#1 Commercial Roofing Contractor | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Commercial Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Huntersville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Flat Roof, TPO, EPDM & Metal Roofing Experts
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now delivers professional commercial roofing solutions throughout Huntersville NC.
              From Birkdale Village retail to I-77 corridor warehouses, our certified team provides exceptional
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
              Complete Commercial Roofing Services in Huntersville NC
            </h2>
            <p className="text-gray text-lg">
              From flat roof installations to emergency repairs, Best Roofing Now provides comprehensive commercial
              roofing solutions for businesses of all sizes throughout Huntersville.
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
                Why Huntersville Businesses Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When your commercial property needs roofing work, you need a contractor who understands business priorities.
                We combine technical expertise with a commitment to minimizing disruption and delivering lasting results.
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
                src={IMAGES.commercial.office}
                alt="Commercial roofing Huntersville NC - Office building"
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
              Commercial Properties We Serve in Huntersville
            </h2>
            <p className="text-gray text-lg">
              From retail centers to warehouses, we provide expert commercial roofing for every building type.
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
                Need Commercial Roofing in Huntersville NC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate for your commercial roofing project.
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
              Commercial Roofing Throughout Huntersville
            </h2>
            <p className="text-gray text-lg">
              We provide commercial roofing services to businesses throughout Huntersville and the greater Charlotte metro.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Huntersville Commercial Districts</h3>
              <div className="flex flex-wrap gap-2">
                {huntersvilleAreas.map((area) => (
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
              We install and service all major commercial roofing systems for Huntersville businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">TPO Membrane</h3>
              <p className="text-gray text-sm">
                Single-ply thermoplastic membrane ideal for flat roofs. Energy-efficient white surface reflects heat
                and reduces cooling costs. 20-30 year warranties available.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">EPDM Rubber</h3>
              <p className="text-gray text-sm">
                Durable synthetic rubber membrane with excellent weather resistance. Proven track record for
                warehouses and industrial buildings. 25+ year lifespan.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">PVC Roofing</h3>
              <p className="text-gray text-sm">
                Chemical-resistant membrane ideal for restaurants and manufacturing. Heat-welded seams create
                watertight bonds. Excellent for demanding environments.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Modified Bitumen</h3>
              <p className="text-gray text-sm">
                Multi-layer asphalt system with reinforced membranes. Excellent for high-traffic roofs
                and buildings with rooftop equipment.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Standing Seam Metal</h3>
              <p className="text-gray text-sm">
                Long-lasting metal roofing with concealed fasteners. 40-50+ year lifespan with minimal maintenance.
                Ideal for warehouses and premium commercial buildings.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Built-Up Roofing (BUR)</h3>
              <p className="text-gray text-sm">
                Traditional multi-layer system with proven performance. Excellent waterproofing for flat roofs.
                Can be combined with reflective coatings for energy savings.
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
                Commercial Roofing Huntersville NC FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about commercial roofing services in Huntersville NC.
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
        currentCity="Huntersville"
        service="Commercial Roofing"
        serviceSlug="commercial-roofing"
        title="Commercial Roofing in Nearby Cities"
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for Professional Commercial Roofing in Huntersville NC?"
        subtitle="Get a free, no-obligation estimate from Huntersville's trusted commercial roofing company. Our certified team will assess your building and provide expert recommendations tailored to your business needs."
      />
    </>
  );
}
