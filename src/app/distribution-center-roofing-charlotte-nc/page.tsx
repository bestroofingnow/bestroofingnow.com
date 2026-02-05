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
  Ruler,
  Zap,
  Thermometer,
  Truck,
  Layers,
  Calculator,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import EstimateButton from '@/components/estimate/EstimateButton';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Distribution Center Roofing CLT',
  description:
    'Expert distribution center roofing contractors in Charlotte NC. Specializing in fulfillment centers, cold storage, logistics facilities & e-commerce warehouses along the I-85 corridor. TPO, EPDM, metal roofing. Free estimates.',
  keywords: [
    'distribution center roofing charlotte nc',
    'fulfillment center roofing charlotte',
    'logistics facility roofing charlotte nc',
    'cold storage roofing charlotte',
    'warehouse roofing i-85 corridor',
    'e-commerce warehouse roofing charlotte nc',
    'distribution center roof repair charlotte',
    'commercial roofing charlotte nc',
    'last mile hub roofing charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/distribution-center-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Distribution Center Roofing Charlotte NC | Warehouse & Logistics Roofs | Best Roofing Now',
    description:
      'Expert distribution center roofing contractors in Charlotte NC. Specializing in fulfillment centers, cold storage, logistics facilities & e-commerce warehouses. Licensed & insured with free estimates.',
    url: `${SITE_CONFIG.url}/distribution-center-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.warehouse,
        width: 1200,
        height: 630,
        alt: 'Distribution center roofing Charlotte NC - Best Roofing Now logistics facility roofing project',
      },
    ],
  },
};

// Distribution center roofing systems
const roofingSystems = [
  {
    icon: Building2,
    title: 'TPO Roofing Systems',
    description: 'Energy-efficient single-ply membrane ideal for large distribution center roofs. Reflective white surface reduces cooling costs across massive floor plates.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Factory,
    title: 'EPDM Rubber Roofing',
    description: 'Durable synthetic rubber membrane built for the scale of distribution facilities. Excellent weather resistance and 30+ year lifespan with minimal maintenance.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Metal Roofing Systems',
    description: 'Standing seam and R-panel metal roofing for distribution centers requiring superior durability, long spans, and minimal maintenance downtime.',
    href: '/services/metal-roofing',
  },
  {
    icon: Thermometer,
    title: 'Spray Foam Roofing',
    description: 'Seamless insulation and waterproofing perfect for cold storage facilities and temperature-sensitive distribution operations requiring superior R-values.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'Built-Up Roofing (BUR)',
    description: 'Multi-layer roofing systems providing heavy-duty protection for high-traffic distribution centers with rooftop equipment and HVAC units.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Clock,
    title: 'Roof Coatings & Restoration',
    description: 'Reflective coatings that extend existing roof life by 10-15 years, reducing costs for distribution centers looking to avoid full replacement.',
    href: '/services/commercial-roofing',
  },
];

// Types of distribution facilities served
const buildingTypes = [
  {
    icon: Warehouse,
    title: 'Distribution Centers',
    description: 'Large-scale roofing for regional and national distribution hubs ranging from 100,000 to 1,000,000+ square feet along Charlotte\u0027s major corridors.',
  },
  {
    icon: Truck,
    title: 'Fulfillment Centers',
    description: 'Roofing solutions for e-commerce fulfillment operations requiring uninterrupted 24/7 service, including Amazon-style sortation centers.',
  },
  {
    icon: Thermometer,
    title: 'Cold Storage Facilities',
    description: 'Specialized insulated roofing systems for refrigerated warehouses and freezer facilities that maintain strict temperature control and prevent condensation.',
  },
  {
    icon: Layers,
    title: 'Cross-Dock Facilities',
    description: 'Roofing for cross-docking terminals with multiple loading dock areas, designed to handle high-traffic operations and constant door openings.',
  },
  {
    icon: Zap,
    title: 'E-Commerce Warehouses',
    description: 'Modern roofing systems for tech-enabled e-commerce warehouses with extensive lighting, conveyor, and automation infrastructure on the roof deck.',
  },
  {
    icon: Building2,
    title: 'Last-Mile Delivery Hubs',
    description: 'Roofing for last-mile distribution stations and delivery hubs popping up across Charlotte\u0027s growing suburban corridors and neighborhoods.',
  },
];

// Why choose us for distribution center projects
const whyChooseUs = [
  {
    icon: Ruler,
    title: 'Large-Scale Expertise',
    description: 'Experienced with projects from 100,000 to 1,000,000+ square feet. We have the equipment, crews, and logistics to match your facility\u0027s scale.',
  },
  {
    icon: Clock,
    title: 'Zero-Downtime Installation',
    description: 'We work around 24/7 operations with night, weekend, and phased crews so your shipments never stop moving.',
  },
  {
    icon: Shield,
    title: 'Safety Certified',
    description: 'OSHA-compliant crews trained in distribution center safety protocols, including forklift zones, dock areas, and active shipping lanes.',
  },
  {
    icon: Award,
    title: 'Manufacturer Certified',
    description: 'Factory-certified installers for GAF, Carlisle, Firestone, and Johns Manville, ensuring top-tier warranty coverage on your investment.',
  },
  {
    icon: DollarSign,
    title: 'Volume Pricing',
    description: 'Competitive per-square-foot pricing for large distribution center projects. Transparent bids with no hidden costs or change orders.',
  },
  {
    icon: Users,
    title: 'Dedicated Project Managers',
    description: 'Single point of contact who coordinates with your facility and operations managers, providing weekly updates and clear timelines.',
  },
];

// Charlotte distribution/logistics areas served
const serviceAreas = [
  'CLT Airport/Wilkinson Blvd',
  'Steele Creek Logistics Park',
  'I-85 Corridor (Concord to Gastonia)',
  'Concord/Kannapolis Industrial',
  'Pineville Distribution Parks',
  'Mooresville/Exit 28 Area',
  'Mount Holly Industrial',
  'Northlake Business Park',
  'Arrowood/Nations Ford',
  'I-77 Corridor South',
  'University City Logistics',
  'Indian Trail/Monroe Industrial',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mount Holly', href: '/locations/mount-holly-nc' },
];

// FAQs about distribution center roofing
const faqs = [
  {
    question: 'How much does distribution center roof replacement cost in Charlotte NC?',
    answer:
      'Distribution center roof replacement in Charlotte typically costs $4 to $9 per square foot for membrane systems (TPO, EPDM) and $8 to $14 per square foot for metal roofing. A 200,000 sq ft distribution center might cost $800,000-$1,800,000 depending on the system, deck condition, and insulation requirements. Cold storage facilities can be 20-30% higher due to specialized insulation. We provide free detailed estimates tailored to your facility.',
  },
  {
    question: 'Can you reroof our distribution center without disrupting 24/7 operations?',
    answer:
      'Absolutely. We specialize in zero-downtime roofing for 24/7 distribution and fulfillment operations. Our crews work in carefully planned sections, coordinating with your operations team to avoid active shipping lanes, dock areas, and critical zones. We offer night and weekend shifts and have completed projects for major logistics companies in Charlotte without a single shipment delay.',
  },
  {
    question: 'What is the best roofing system for a distribution center in Charlotte?',
    answer:
      'For most Charlotte distribution centers, we recommend TPO membrane roofing. Its reflective white surface reduces cooling costs by up to 30% during our hot summers, and it handles the large, flat roof expanses common in distribution facilities. For cold storage operations, spray polyurethane foam (SPF) with a protective coating offers superior insulation. Metal roofing is ideal for facilities needing 40+ year lifespans with minimal maintenance.',
  },
  {
    question: 'How do you handle roofing for cold storage and refrigerated warehouses?',
    answer:
      'Cold storage roofing requires specialized expertise to prevent condensation, ice damming, and thermal bridging. We install high-R-value insulation systems, vapor barriers on the warm side of the assembly, and membrane systems designed for temperature differentials. Our crews understand the critical importance of maintaining your cold chain during installation and work in small sections to prevent temperature fluctuations.',
  },
  {
    question: 'How long does a distribution center roof installation take?',
    answer:
      'Timeline depends on facility size and complexity. A typical 100,000 sq ft distribution center takes 3-5 weeks for membrane systems, while 500,000+ sq ft facilities may require 10-16 weeks. We provide detailed project schedules upfront, and our phased approach means your operations continue uninterrupted throughout the process. Fast-track options are available for urgent situations.',
  },
  {
    question: 'Do you offer roof maintenance programs for distribution centers?',
    answer:
      'Yes, we offer comprehensive preventive maintenance programs specifically designed for distribution centers and logistics facilities. Our plans include bi-annual inspections, drain clearing, sealant maintenance, and prompt repair of any issues before they cause leaks that could damage inventory. Regular maintenance can extend your roof\u0027s life by 5-10 years and is often required to maintain manufacturer warranties.',
  },
  {
    question: 'Can your roofing support rooftop solar installations on our distribution center?',
    answer:
      'Many distribution centers along the I-85 corridor are adding rooftop solar to reduce energy costs. We work with solar contractors to ensure proper load distribution, waterproof penetrations, and compatible membrane systems. We can install a new roof system specifically engineered to support solar arrays, potentially qualifying your facility for federal tax credits and North Carolina renewable energy incentives.',
  },
  {
    question: 'Do you work with national logistics companies and REITs?',
    answer:
      'Yes, we work with national logistics companies, real estate investment trusts (REITs), and property management firms with multiple distribution facilities in the Charlotte region. We offer dedicated account management, standardized reporting, and can coordinate multi-site projects across your Charlotte-area portfolio. Our experience with national compliance standards and procurement processes makes us a trusted partner for institutional owners.',
  },
];

export default function DistributionCenterRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Distribution Center Roofing Charlotte NC', url: `${SITE_CONFIG.url}/distribution-center-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/distribution-center-roofing-charlotte-nc`}
        pageName="Distribution Center Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.warehouse}
            alt="Distribution center roofing Charlotte NC - Best Roofing Now logistics facility roofing project"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Truck className="w-4 h-4" />
              <span className="text-sm font-semibold">Distribution Centers | Fulfillment | Logistics Facilities</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Distribution Center Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Large-Scale Roofing for Fulfillment Centers, Logistics Hubs & Distribution Facilities
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Charlotte is one of the Southeast&apos;s fastest-growing logistics hubs, with distribution centers
              lining the I-85 and I-77 corridors. Best Roofing Now specializes in roofing these massive facilities
              with zero disruption to your 24/7 operations — protecting your inventory, equipment, and bottom line.
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
                <Ruler className="w-5 h-5 text-accent-light" />
                100,000+ Sq Ft Projects
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-light" />
                24/7 Operation Friendly
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Manufacturer Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Building Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Distribution Facilities We Serve
            </h2>
            <p className="text-gray text-lg">
              From massive regional distribution centers along I-85 to last-mile delivery hubs throughout Charlotte,
              we have the expertise to roof any logistics facility.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildingTypes.map((type) => (
              <div
                key={type.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">
                  {type.title}
                </h3>
                <p className="text-gray text-sm">{type.description}</p>
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
              Distribution Center Roofing Systems
            </h2>
            <p className="text-gray text-lg">
              We install and maintain all major commercial roofing systems, selecting the optimal solution based on
              your facility&apos;s size, operational requirements, and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roofingSystems.map((system) => (
              <Link
                key={system.title}
                href={system.href}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <system.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {system.title}
                </h3>
                <p className="text-gray text-sm mb-3">{system.description}</p>
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
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte&apos;s Distribution Centers Trust Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Distribution center roofing demands contractors who understand the unique challenges of logistics
                facilities: 24/7 operations, massive roof areas, dock-door coordination, and the need to protect
                millions of dollars in inventory. We deliver on every front.
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
                alt="Distribution center roofing project in Charlotte NC - large logistics facility roof installation"
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
                    <p className="font-bold text-dark">Logistics Roofing Experts</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.roofsInstalled}+ Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Estimate Section */}
      <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-bold">CHARLOTTE&apos;S FIRST</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Distribution Center Roof Instant Estimate
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Get an instant price range for your distribution center roofing project — no waiting, no hassle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Membrane Replacement</h3>
              <p className="text-3xl font-bold text-accent mb-2">$900 - $2,000</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">TPO, EPDM, PVC Systems</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Roof Coatings</h3>
              <p className="text-3xl font-bold text-accent mb-2">$700 - $1,000</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Silicone, Acrylic, Elastomeric</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Metal Roofing</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,000 - $1,500</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Standing Seam, R-Panel, Corrugated</p>
            </div>
          </div>

          <div className="text-center">
            <EstimateButton variant="white" size="lg" className="text-lg px-10" estimateType="commercial">
              Get Your Instant Distribution Center Estimate
            </EstimateButton>
            <p className="text-white/60 text-sm mt-4">
              No obligation • Instant results • 100% free
            </p>
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
              Distribution Center Roofing Across the Charlotte Region
            </h2>
            <p className="text-gray text-lg">
              We serve distribution and logistics facilities throughout the Greater Charlotte area,
              including the I-85 and I-77 industrial corridors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Logistics Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Logistics & Industrial Areas</h3>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-white rounded-xl p-6">
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
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Distribution Center Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about distribution center roofing services in Charlotte NC.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="section bg-light">
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
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/warehouse-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Warehouse Roofing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/industrial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Industrial Roofing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/flat-roof-contractors-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Flat Roof Contractors
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/commercial-roofing-contractors-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing Contractors
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/metal-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Metal Roofing Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="distribution-center-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/distribution-center-roofing-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Distribution Center Roofing"

      />

      <CTASection
        title="Ready to Discuss Your Distribution Center Roofing Project?"
        subtitle="Get a free, no-obligation estimate for your distribution center, fulfillment facility, or logistics hub. Our team will assess your building and provide honest recommendations tailored to your operational needs and budget."
      />
    </>
  );
}
