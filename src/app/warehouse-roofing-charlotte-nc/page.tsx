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
  Warehouse,
  DollarSign,
  Thermometer,
  Droplets,
  Wind,
  Zap,
  Truck,
  Package,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Warehouse Roofing Charlotte NC | Flat Roof Specialists | Best Roofing Now',
  description:
    'Expert warehouse roofing contractors in Charlotte NC. Specializing in flat roofs for warehouses, distribution centers, and logistics facilities. TPO, EPDM, and metal roofing systems. Minimal business disruption guaranteed. Free estimates.',
  keywords: [
    'warehouse roofing charlotte nc',
    'warehouse roof repair charlotte',
    'distribution center roofing charlotte nc',
    'logistics facility roofing charlotte',
    'warehouse roof replacement charlotte',
    'warehouse flat roof charlotte nc',
    'commercial warehouse roofing charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/warehouse-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Warehouse Roofing Charlotte NC | Flat Roof Specialists | Best Roofing Now',
    description:
      'Expert warehouse and distribution center roofing in Charlotte NC. TPO, EPDM, and metal roofing systems designed for large-scale facilities. Minimal disruption to your operations.',
    url: `${SITE_CONFIG.url}/warehouse-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.warehouse,
        width: 1200,
        height: 630,
        alt: 'Warehouse roofing Charlotte NC - Best Roofing Now warehouse roofing project',
      },
    ],
  },
};

// Warehouse roofing challenges
const warehouseChallenges = [
  {
    icon: Building2,
    title: 'Large Roof Spans',
    description: 'Warehouses often have 50,000-500,000+ sq ft roofs requiring specialized equipment, experienced crews, and efficient project management to complete within tight timelines.',
  },
  {
    icon: Droplets,
    title: 'Minimal Slope Drainage',
    description: 'Flat and low-slope roofs on warehouses require precise drainage design to prevent ponding water, which can lead to structural stress and premature membrane failure.',
  },
  {
    icon: Thermometer,
    title: 'HVAC & Mechanical Systems',
    description: 'Warehouse roofs support heavy HVAC units, exhaust systems, and rooftop equipment. Proper flashing and reinforcement around penetrations is critical.',
  },
  {
    icon: Wind,
    title: 'Wind Uplift Resistance',
    description: 'Large unobstructed roof areas are susceptible to wind uplift. We design and install systems that meet or exceed FM Global and local code requirements.',
  },
  {
    icon: Zap,
    title: 'Energy Efficiency',
    description: 'Climate control in large warehouses is expensive. Reflective roof membranes and proper insulation can reduce cooling costs by up to 30%.',
  },
  {
    icon: Package,
    title: 'Protecting Inventory',
    description: 'Warehouse roof leaks can damage millions in inventory. Our preventive maintenance and rapid response services protect your stored goods.',
  },
];

// Roofing systems for warehouses
const warehouseRoofingSystems = [
  {
    icon: Shield,
    title: 'TPO Roofing Systems',
    description: 'The preferred choice for Charlotte warehouses. TPO offers excellent energy efficiency with its white reflective surface, reducing cooling costs in our hot summers. Heat-welded seams provide superior leak protection.',
    benefits: ['30% cooling cost reduction', 'Heat-welded seams', '20-30 year warranties', 'Puncture resistant'],
  },
  {
    icon: Wrench,
    title: 'EPDM Rubber Roofing',
    description: 'A proven performer for large warehouse roofs. EPDM handles temperature extremes, offers excellent durability, and provides cost-effective coverage for expansive roof areas.',
    benefits: ['50+ year track record', 'Temperature resistant', 'Low maintenance', 'Cost-effective for large roofs'],
  },
  {
    icon: Building2,
    title: 'Standing Seam Metal',
    description: 'Ideal for warehouses requiring maximum durability and longevity. Metal roofing handles heavy equipment loads, resists fire, and can last 40-60 years with minimal maintenance.',
    benefits: ['40-60 year lifespan', 'Fire resistant', 'Handles equipment loads', 'Low maintenance'],
  },
  {
    icon: Warehouse,
    title: 'Modified Bitumen',
    description: 'Multi-layer protection perfect for warehouses with heavy rooftop traffic. Modified bitumen systems offer excellent puncture resistance and proven waterproofing performance.',
    benefits: ['Multi-layer protection', 'High puncture resistance', 'Handles foot traffic', 'Proven performance'],
  },
];

// Minimal disruption approach
const minimalDisruptionApproach = [
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'We work around your operation schedules, including nights, weekends, and off-peak hours to minimize impact on your business.',
  },
  {
    icon: Truck,
    title: 'Phased Installation',
    description: 'Large warehouse roofs are completed in sections, allowing your facility to remain operational throughout the project.',
  },
  {
    icon: Users,
    title: 'Experienced Crews',
    description: 'Our commercial crews are trained in warehouse environments and understand the importance of maintaining a safe, clean work area.',
  },
  {
    icon: Shield,
    title: 'Dust & Debris Control',
    description: 'We implement strict containment protocols to prevent roofing debris from entering your warehouse or affecting operations.',
  },
];

// Why choose us for warehouse roofing
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Trusted commercial roofing contractor with an A+ Better Business Bureau rating.',
  },
  {
    icon: Star,
    title: 'Warehouse Specialists',
    description: 'Extensive experience with distribution centers, logistics facilities, and industrial warehouses.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with comprehensive liability and workers comp coverage.',
  },
  {
    icon: CheckCircle,
    title: 'FM Global Compliant',
    description: 'We install roof systems that meet FM Global standards for insurance compliance.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: `${SITE_CONFIG.roofsInstalled}+ commercial and residential roofs completed in the Charlotte area.`,
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Transparent quotes with volume pricing for large warehouse projects. Financing available.',
  },
];

// Warehouse types served
const warehouseTypes = [
  'Distribution Centers',
  'Fulfillment Warehouses',
  'Cold Storage Facilities',
  'Manufacturing Plants',
  'Logistics Hubs',
  'Cross-Docking Facilities',
  'E-Commerce Fulfillment',
  'Third-Party Logistics (3PL)',
  'Automotive Warehouses',
  'Food & Beverage Storage',
  'Pharmaceutical Warehouses',
  'General Storage Warehouses',
];

// Charlotte industrial areas served
const charlotteIndustrialAreas = [
  'Charlotte Douglas Airport Area',
  'Steele Creek Industrial Park',
  'Northlake/I-77 Corridor',
  'University City',
  'Pineville Industrial',
  'Harrisburg Industrial',
  'Concord Mills Area',
  'I-85 South Corridor',
  'Rock Hill Industrial Park',
  'Fort Mill Distribution Hub',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
  { name: 'Indian Trail', href: '/locations/indian-trail-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
];

// FAQs about warehouse roofing
const faqs = [
  {
    question: 'What is the best roofing system for a large warehouse in Charlotte?',
    answer:
      'For most warehouses in Charlotte, we recommend TPO (Thermoplastic Polyolefin) roofing. Its white reflective surface reduces cooling costs by up to 30% in our hot summers, heat-welded seams provide superior leak protection, and it handles the thermal expansion of large roof areas exceptionally well. For warehouses with heavy rooftop equipment or foot traffic, we may recommend EPDM or modified bitumen systems.',
  },
  {
    question: 'How much does warehouse roof replacement cost in Charlotte NC?',
    answer:
      'Warehouse roof replacement in Charlotte typically costs $4-10 per square foot depending on the roofing system, roof condition, and complexity. A 100,000 sq ft warehouse roof replacement might range from $400,000 to $1,000,000. We offer volume pricing for large projects and can work with your budget through phased installations. Contact us for a free, detailed estimate.',
  },
  {
    question: 'Can you replace our warehouse roof without shutting down operations?',
    answer:
      'Yes, we specialize in minimizing operational disruption during warehouse roof projects. We use phased installation approaches, completing sections of the roof while your facility continues operating. We can also schedule work during off-hours, nights, or weekends. Our crews are trained in active warehouse environments and maintain strict safety and cleanliness protocols.',
  },
  {
    question: 'How long does it take to replace a large warehouse roof?',
    answer:
      'The timeline for warehouse roof replacement depends on the roof size, system type, and weather conditions. A 50,000 sq ft warehouse typically takes 2-4 weeks. A 200,000+ sq ft distribution center might take 6-12 weeks. We provide detailed project schedules and can often work in phases to accommodate your operational needs.',
  },
  {
    question: 'Do you handle roof repairs for warehouse leaks?',
    answer:
      'Absolutely. We provide emergency leak repairs for warehouses, often responding within 24 hours for urgent situations. We also offer comprehensive roof maintenance programs designed for large facilities, including bi-annual inspections, preventive repairs, and detailed condition assessments to catch problems before they cause inventory damage.',
  },
  {
    question: 'What warranties do you offer on warehouse roofing systems?',
    answer:
      'We offer manufacturer warranties ranging from 15-30 years depending on the roofing system and installation package. As certified installers for major manufacturers, we can offer enhanced warranty packages including NDL (No Dollar Limit) coverage. We also provide our own workmanship warranty on all installations.',
  },
  {
    question: 'Are your roof installations FM Global compliant?',
    answer:
      'Yes, we are experienced in FM Global requirements and install roofing systems that meet or exceed FM Global standards for wind uplift, fire resistance, and hail protection. This is important for warehouses carrying property insurance through FM Global-affiliated carriers. We can work with your insurance requirements to ensure compliance.',
  },
  {
    question: 'Can you install roofing systems for cold storage warehouses?',
    answer:
      'Yes, we have experience with cold storage and refrigerated warehouse roofing. These facilities require specialized insulation systems and vapor barriers to prevent condensation and maintain temperature efficiency. We work with engineers to design roofing systems that meet the unique thermal requirements of cold storage facilities.',
  },
];

export default function WarehouseRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Warehouse Roofing Charlotte NC', url: `${SITE_CONFIG.url}/warehouse-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/warehouse-roofing-charlotte-nc`}
        pageName="Warehouse Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.warehouse}
            alt="Warehouse roofing Charlotte NC - Best Roofing Now warehouse roofing project"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Warehouse className="w-4 h-4" />
              <span className="text-sm font-semibold">Distribution Centers | Warehouses | Logistics Facilities</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Warehouse Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert flat roof solutions for warehouses and distribution centers
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in roofing systems for large-scale warehouse and logistics facilities
              throughout Charlotte NC. We understand the unique challenges of warehouse roofing including large
              spans, minimal slope drainage, and the critical need to protect your inventory while minimizing
              operational disruption.
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
                <Warehouse className="w-5 h-5 text-accent-light" />
                Large-Scale Specialists
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Roofing Challenges Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Unique Challenges of Warehouse Roofing
            </h2>
            <p className="text-gray text-lg">
              Warehouse and distribution center roofs face challenges that typical commercial buildings do not.
              Our team has the expertise and equipment to address every aspect of large-scale industrial roofing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warehouseChallenges.map((challenge) => (
              <div
                key={challenge.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{challenge.title}</h3>
                <p className="text-gray text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roofing Systems Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Systems for Warehouses
            </h2>
            <p className="text-gray text-lg">
              We install and maintain all major commercial roofing systems, each with specific advantages for
              warehouse and distribution center applications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {warehouseRoofingSystems.map((system) => (
              <div
                key={system.title}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <system.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-lg">{system.title}</h3>
                  </div>
                </div>
                <p className="text-gray mb-4">{system.description}</p>
                <div className="flex flex-wrap gap-2">
                  {system.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services/commercial-roofing"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Learn More About Commercial Roofing Systems
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Minimal Disruption Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Minimal Business Disruption Approach
              </h2>
              <p className="text-gray text-lg mb-8">
                We understand that downtime costs money. Your warehouse operations cannot stop for roof work.
                That is why we have developed specialized approaches to complete warehouse roofing projects
                with minimal impact on your daily operations.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {minimalDisruptionApproach.map((item) => (
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
                alt="Warehouse roofing project in Charlotte NC - distribution center flat roof"
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

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Warehouses Choose Best Roofing Now
            </h2>
            <p className="text-gray text-lg">
              When your inventory and operations depend on a reliable roof, you need a contractor with
              proven experience in large-scale warehouse roofing projects.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse Types Served */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Warehouse & Industrial Facilities We Serve
            </h2>
            <p className="text-gray text-lg">
              From e-commerce fulfillment centers to cold storage facilities, we have the expertise to
              handle any warehouse roofing project.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {warehouseTypes.map((type) => (
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
                Need Warehouse Roofing Services in Charlotte?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate for your warehouse or distribution center roofing project.
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
              Warehouse Roofing Across Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              We serve industrial areas and distribution hubs throughout the Greater Charlotte metro region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Industrial Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Industrial Areas</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteIndustrialAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
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
                Warehouse Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about warehouse and distribution center roofing in Charlotte NC.
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

      {/* Related Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Related Commercial Roofing Services
            </h2>
            <p className="text-gray">
              Explore our full range of commercial and industrial roofing solutions in Charlotte NC.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/commercial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/industrial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Industrial Roofing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/flat-roof-contractors-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Flat Roof Contractors
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/flat-roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Flat Roof Repair
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/commercial-roofing-contractors-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing Contractors
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/metal-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Metal Roofing Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Protect Your Warehouse Investment?"
        subtitle="Get a free, no-obligation estimate for your warehouse roofing project. We'll assess your facility and provide honest recommendations tailored to your operational needs and budget."
      />
    </>
  );
}
