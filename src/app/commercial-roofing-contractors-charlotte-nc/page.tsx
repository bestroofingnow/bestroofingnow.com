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
  Building2,
  MapPin,
  Wrench,
  Factory,
  Warehouse,
  DollarSign,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Commercial Roofing Contractors Charlotte NC | TPO, EPDM, Flat Roofs | Best Roofing Now',
  description:
    'Looking for commercial roofing contractors in Charlotte NC? Best Roofing Now specializes in TPO, EPDM, flat roofs for businesses, warehouses, and industrial buildings. BBB A+ rated, licensed & insured. Free estimates.',
  keywords: [
    'commercial roofing contractors charlotte nc',
    'commercial roofing charlotte',
    'commercial roofing company charlotte nc',
    'tpo roofing charlotte nc',
    'epdm roofing charlotte',
    'flat roof contractors charlotte nc',
    'commercial flat roof repair charlotte',
    'industrial roofing charlotte nc',
    'warehouse roofing charlotte',
    'business roofing contractors charlotte',
    'commercial roof replacement charlotte nc',
    'commercial roof repair charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-roofing-contractors-charlotte-nc`,
  },
  openGraph: {
    title: 'Commercial Roofing Contractors Charlotte NC | TPO, EPDM, Flat Roofs | Best Roofing Now',
    description:
      'BBB A+ rated commercial roofing contractors serving Charlotte NC. TPO, EPDM, flat roofs for businesses, warehouses, and industrial buildings. Licensed and insured with free estimates.',
    url: `${SITE_CONFIG.url}/commercial-roofing-contractors-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.office,
        width: 1200,
        height: 630,
        alt: 'Commercial roofing contractors Charlotte NC - Best Roofing Now commercial project',
      },
    ],
  },
};

// Commercial roofing services
const commercialServices = [
  {
    icon: Building2,
    title: 'TPO Roofing Systems',
    description: 'Energy-efficient thermoplastic roofing ideal for flat commercial roofs. Highly reflective and durable.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Factory,
    title: 'EPDM Rubber Roofing',
    description: 'Synthetic rubber membrane known for durability and weather resistance. Perfect for large commercial buildings.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Warehouse,
    title: 'Flat Roof Systems',
    description: 'Complete flat roof installation, repair, and maintenance for warehouses and commercial properties.',
    href: '/services/flat-roof-repair',
  },
  {
    icon: Wrench,
    title: 'Commercial Roof Repair',
    description: 'Fast, reliable repairs for leaks, ponding water, membrane damage, and flashing issues.',
    href: '/services/roof-repair',
  },
  {
    icon: Shield,
    title: 'Roof Coatings',
    description: 'Extend your roof life with reflective coatings that reduce energy costs and protect membranes.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Clock,
    title: 'Preventive Maintenance',
    description: 'Regular inspections and maintenance programs to prevent costly repairs and extend roof life.',
    href: '/services/commercial-roof-maintenance',
  },
];

// Why choose us for commercial roofing
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Trusted commercial roofing contractor with an A+ Better Business Bureau rating.',
  },
  {
    icon: Star,
    title: 'Certified Installers',
    description: 'Factory-trained and certified in TPO, EPDM, PVC, and modified bitumen systems.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with comprehensive liability and workers comp coverage.',
  },
  {
    icon: CheckCircle,
    title: 'Minimal Disruption',
    description: 'We work around your business hours to minimize impact on your operations.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: `${SITE_CONFIG.roofsInstalled}+ commercial and residential roofs completed in the Charlotte area.`,
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Transparent quotes with no hidden fees. Financing options available for larger projects.',
  },
];

// Business types served
const businessTypes = [
  'Office Buildings',
  'Warehouses',
  'Retail Centers',
  'Restaurants',
  'Medical Facilities',
  'Schools & Universities',
  'Churches',
  'Manufacturing Plants',
  'Hotels & Motels',
  'Apartment Complexes',
  'Government Buildings',
  'Auto Dealerships',
];

// Charlotte neighborhoods served
const charlotteNeighborhoods = [
  'University City',
  'Uptown Charlotte',
  'South End',
  'NoDa',
  'Plaza Midwood',
  'Ballantyne',
  'Northlake',
  'Steele Creek',
  'Airport Area',
  'Freedom Drive Corridor',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
];

// FAQs about commercial roofing
const faqs = [
  {
    question: 'What types of commercial roofing systems do you install in Charlotte?',
    answer:
      'We install all major commercial roofing systems including TPO (Thermoplastic Polyolefin), EPDM (rubber roofing), PVC membranes, modified bitumen, built-up roofing (BUR), and metal roofing systems. Our team is factory-certified in each system type, allowing us to offer extended manufacturer warranties on materials and workmanship.',
  },
  {
    question: 'How much does commercial roofing cost in Charlotte NC?',
    answer:
      'Commercial roofing costs in Charlotte typically range from $4 to $12 per square foot depending on the roofing system, roof size, and complexity. TPO and EPDM systems are generally $5-8 per sq ft, while PVC and metal systems run $7-12 per sq ft. We provide free, detailed estimates with transparent pricing and no hidden fees.',
  },
  {
    question: 'What is the best roofing material for flat commercial roofs?',
    answer:
      'For Charlotte\'s climate, we often recommend TPO (Thermoplastic Polyolefin) roofing. Its white reflective surface reduces cooling costs by up to 30% during our hot summers, it handles temperature fluctuations well, and offers excellent resistance to punctures and chemicals. EPDM is another excellent choice for larger buildings due to its durability and cost-effectiveness.',
  },
  {
    question: 'How long does commercial roof installation take?',
    answer:
      'Most commercial roof installations take 3-14 days depending on the roof size, system type, and weather conditions. A typical 10,000 sq ft flat roof can be completed in 5-7 business days. We work efficiently and can often schedule around your business hours to minimize disruption to your operations.',
  },
  {
    question: 'Do you offer commercial roof maintenance programs?',
    answer:
      'Yes, we offer comprehensive commercial roof maintenance programs designed to extend your roof\'s lifespan and prevent costly repairs. Our bi-annual inspections include drain clearing, membrane assessment, seam integrity checks, and detailed condition reports. Regular maintenance can add 5-10 years to your commercial roof\'s life.',
  },
  {
    question: 'Can you work on my building without disrupting business operations?',
    answer:
      'Absolutely. We understand that your business can\'t afford downtime. We schedule work around your operating hours, use quiet equipment during business hours when possible, and maintain clean, safe work areas. Many of our commercial projects are completed with minimal to no impact on daily business operations.',
  },
  {
    question: 'What warranties do you offer on commercial roofing?',
    answer:
      'We offer comprehensive warranty coverage on all commercial roofing projects. Manufacturer warranties range from 10-30 years depending on the system and installation package. We also provide our own workmanship warranty. As certified installers for major manufacturers, we can offer enhanced warranty packages including NDL (No Dollar Limit) coverage.',
  },
  {
    question: 'Do you help with commercial roof insurance claims in Charlotte?',
    answer:
      'Yes, we have extensive experience with commercial roof insurance claims in Charlotte. We provide thorough damage documentation, detailed repair estimates, and work directly with adjusters to ensure fair settlements. Our team has helped numerous Charlotte businesses navigate the claims process for storm damage, hail damage, and other covered events.',
  },
];

export default function CommercialRoofingContractorsCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing Contractors Charlotte NC', url: `${SITE_CONFIG.url}/commercial-roofing-contractors-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/commercial-roofing-contractors-charlotte-nc`}
        pageName="Commercial Roofing Contractors Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.office}
            alt="Commercial roofing contractors Charlotte NC - Best Roofing Now commercial project"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">TPO | EPDM | Flat Roofs</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Commercial Roofing Contractors <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Trusted commercial roofing solutions for businesses across Charlotte
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert commercial roofing services including TPO, EPDM, and flat roof systems
              for businesses, warehouses, and industrial buildings throughout Charlotte NC. Licensed, insured, and
              committed to minimizing disruption to your operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Estimate
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

            {/* Trust Signals */}
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
                Certified Installers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Roofing Services in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              From TPO membrane installation to emergency flat roof repairs, our certified team handles all your
              commercial roofing needs with expert craftsmanship and premium materials.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Why Charlotte Businesses Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When it comes to protecting your business investment, you need a commercial roofing contractor you can
                trust. Best Roofing Now delivers quality workmanship, transparent pricing, and minimal disruption to
                your operations.
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
                alt="Commercial roofing project in Charlotte NC - warehouse flat roof installation"
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
                    <p className="font-bold text-dark">5.0 Rating</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types Served */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Properties We Serve
            </h2>
            <p className="text-gray text-lg">
              We provide commercial roofing services for all types of businesses and properties throughout Charlotte.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {businessTypes.map((type) => (
              <span
                key={type}
                className="inline-block bg-light px-4 py-2 rounded-full text-gray font-medium border border-gray-200 hover:border-primary hover:text-primary transition-colors"
              >
                {type}
              </span>
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
                Need a Commercial Roofing Contractor in Charlotte?
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
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Roofing Services Across Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              Our commercial roofing contractors serve businesses throughout the Greater Charlotte metro area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Business Districts */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Business Districts</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-light rounded-xl p-6">
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

          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
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
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Commercial Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about commercial roofing services in Charlotte NC.
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

      {/* Final CTA */}
      <CTASection
        title="Ready to Work with Charlotte's Best Commercial Roofing Contractors?"
        subtitle="Get a free, no-obligation estimate for your commercial roofing project. We'll assess your building and provide honest recommendations tailored to your needs and budget."
      />
    </>
  );
}
