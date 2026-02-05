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
  DollarSign,
  Ruler,
  Zap,
  Thermometer,
  Layers,
  Calculator,
  Server,
  Droplets,
  Wind,
  Lock,
  Activity,
  Cpu,
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
  title: 'Data Center Roofing Charlotte NC',
  description:
    'Specialized data center roofing contractors in Charlotte NC for enterprise data centers, colocation facilities & cloud provider centers. Zero-downtime installations. Waterproofing experts. Licensed & insured. Free estimates.',
  keywords: [
    'data center roofing charlotte nc',
    'data center roof repair charlotte',
    'server farm roofing charlotte nc',
    'tech facility roofing charlotte',
    'colocation roofing charlotte nc',
    'data center roof replacement charlotte',
    'zero downtime roofing charlotte nc',
    'data center waterproofing charlotte',
    'data center roofing contractors charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/data-center-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Data Center Roofing Charlotte NC | Server Farm & Tech Facility Roofs | Best Roofing Now',
    description:
      'Specialized data center roofing contractors in Charlotte NC for enterprise data centers, colocation facilities & cloud provider centers. Zero-downtime installations with free estimates.',
    url: `${SITE_CONFIG.url}/data-center-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.warehouse,
        width: 1200,
        height: 630,
        alt: 'Data center roofing Charlotte NC - Best Roofing Now tech facility roofing project',
      },
    ],
  },
};

// Data center roofing systems
const dataCenterRoofingSystems = [
  {
    icon: Building2,
    title: 'TPO Roofing Systems',
    description: 'High-performance single-ply membrane with superior reflectivity that reduces cooling loads on data centers. Heat-welded seams provide watertight protection for critical equipment below.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Droplets,
    title: 'PVC Roofing Systems',
    description: 'Chemical-resistant membrane ideal for data centers with rooftop HVAC equipment, generators, and battery systems. Exceptional resistance to oils, greases, and chemical exposure.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Metal Roofing Systems',
    description: 'Standing seam metal roofing providing superior wind resistance and 50+ year lifespan for mission-critical data center facilities that cannot afford roof failures.',
    href: '/services/metal-roofing',
  },
  {
    icon: Thermometer,
    title: 'Spray Foam Roofing',
    description: 'Seamless insulation and waterproofing in one application. Excellent R-value reduces HVAC load, and the monolithic membrane eliminates seams where leaks could threaten equipment.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Factory,
    title: 'EPDM Rubber Roofing',
    description: 'Proven synthetic rubber membrane with superior weather resistance and a 30+ year lifespan. Ideal for large data center footprints requiring reliable, cost-effective protection.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Clock,
    title: 'Roof Coatings & Restoration',
    description: 'Reflective coating systems that extend existing roof life without the risk of full tear-off. Minimizes disruption to data center operations while improving energy efficiency.',
    href: '/services/commercial-roofing',
  },
];

// Types of data center buildings served
const dataCenterBuildingTypes = [
  {
    icon: Server,
    title: 'Enterprise Data Centers',
    description: 'Roofing for corporate-owned data centers operated by Charlotte&apos;s major financial institutions, healthcare systems, and Fortune 500 companies with on-premises IT infrastructure.',
  },
  {
    icon: Building2,
    title: 'Colocation Facilities',
    description: 'Multi-tenant data center roofing requiring zero-downtime installation methods. We coordinate with facility managers to protect all tenants&apos; equipment during roof work.',
  },
  {
    icon: Cpu,
    title: 'Cloud Provider Centers',
    description: 'Large-scale roofing solutions for hyperscale and regional cloud provider facilities in the Charlotte metro area, including massive footprint buildings with specialized HVAC requirements.',
  },
  {
    icon: Zap,
    title: 'Edge Data Centers',
    description: 'Compact roofing solutions for distributed edge computing facilities throughout the Charlotte region, including cell tower equipment shelters and micro data centers.',
  },
  {
    icon: Shield,
    title: 'Disaster Recovery Sites',
    description: 'Redundant roofing systems for backup and disaster recovery facilities that must maintain watertight integrity during the worst weather events Charlotte experiences.',
  },
  {
    icon: Activity,
    title: 'Telecom Hubs & Network Centers',
    description: 'Specialized roofing for telecommunications switching centers, carrier hotels, and fiber interconnection points that form the backbone of Charlotte&apos;s digital infrastructure.',
  },
];

// Why choose us for data center projects
const whyChooseUs = [
  {
    icon: Clock,
    title: 'Zero-Downtime Installation',
    description: 'We install and repair roofs without interrupting data center operations. Phased approach with redundant waterproofing at every stage protects equipment 24/7.',
  },
  {
    icon: Droplets,
    title: 'Waterproofing Specialists',
    description: 'Multiple waterproofing layers and leak detection protocols protect millions of dollars in servers and networking equipment from even the smallest water intrusion.',
  },
  {
    icon: Wind,
    title: 'HVAC Integration Experts',
    description: 'Experienced with the massive rooftop HVAC systems, cooling towers, and mechanical equipment that data centers require. Proper penetration flashing is critical.',
  },
  {
    icon: Lock,
    title: 'Security Protocol Compliant',
    description: 'Background-checked crews familiar with data center security requirements including escort policies, camera monitoring, and restricted area access procedures.',
  },
  {
    icon: Shield,
    title: 'Redundancy Planning',
    description: 'We design roof systems with built-in redundancy — dual membrane layers, secondary drainage, and emergency response plans for your most critical facilities.',
  },
  {
    icon: Users,
    title: 'Dedicated Project Managers',
    description: 'Single point of contact with experience managing data center projects. Regular reporting, pre-work safety briefings, and coordination with your facility team.',
  },
];

// Charlotte data center areas
const dataCenterAreas = [
  'University Research Park',
  'Northlake / I-77 Corridor',
  'South Charlotte / Ballantyne',
  'Uptown Charlotte',
  'Airport / CLT Area',
  'Concord / Kannapolis',
  'I-85 Corridor',
  'Steele Creek',
  'University City',
  'Mooresville / Lake Norman',
  'Rock Hill, SC',
  'Fort Mill, SC',
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

// FAQs about data center roofing
const faqs = [
  {
    question: 'Can you replace a data center roof without any downtime to our operations?',
    answer:
      'Yes, zero-downtime roof replacement is our standard approach for data center projects. We work in small sections with temporary waterproofing barriers in place at all times, ensuring your servers and equipment are never exposed. Our phased installation method means only a small portion of the roof is open at any given time, with redundant protection layers underneath. We have completed numerous data center roof projects in Charlotte without a single minute of unplanned downtime for our clients.',
  },
  {
    question: 'What makes data center roofing different from standard commercial roofing?',
    answer:
      'Data center roofing is fundamentally different because the consequences of any water intrusion can be catastrophic — potentially destroying millions of dollars in equipment and causing service outages affecting thousands of users. We use enhanced waterproofing protocols including dual-membrane systems, redundant drainage, leak detection sensors, and emergency response plans. Additionally, data center roofs must accommodate massive HVAC penetrations, support heavy mechanical equipment loads, and provide superior thermal performance to reduce cooling costs.',
  },
  {
    question: 'How do you handle the massive HVAC equipment on data center roofs?',
    answer:
      'Charlotte data centers often have extensive rooftop mechanical equipment including cooling towers, CRAH units, condensers, and generators. We coordinate with your mechanical contractors to properly flash around all penetrations, ensure adequate structural support for equipment loads, and maintain clear access paths for maintenance. We use pitch pockets, equipment curbs, and flexible flashing systems designed to accommodate the vibration and thermal movement that HVAC equipment produces.',
  },
  {
    question: 'What roofing system is best for data centers in Charlotte NC?',
    answer:
      'For Charlotte data centers, we most often recommend TPO or PVC membrane systems. TPO provides excellent energy efficiency with its reflective surface, reducing the cooling load that makes up 30-40% of data center operating costs. PVC is ideal when chemical resistance is needed around generators, battery systems, or cooling equipment. For facilities requiring maximum lifespan, standing seam metal roofing offers 50+ years of protection. We assess each facility individually, considering equipment loads, penetration count, and your uptime requirements.',
  },
  {
    question: 'How do you address fire protection requirements for data center roofs?',
    answer:
      'Data center roofing must meet strict fire protection standards including UL Class A fire ratings. We install roofing systems that are FM Global-approved and meet NFPA standards for data center construction. This includes fire-rated roof assemblies, proper fire stops at penetrations, and coordination with your fire suppression systems. Our installations comply with the International Building Code and any additional requirements specified by your insurance carrier or certification standards (such as Uptime Institute Tier requirements).',
  },
  {
    question: 'Do you work with Tier 3 and Tier 4 data center certification requirements?',
    answer:
      'Yes, we understand the roofing implications of Uptime Institute Tier classifications. Tier 3 and Tier 4 facilities require concurrently maintainable and fault-tolerant infrastructure, and the roof is a critical component. We design roof systems with redundant drainage, dual waterproofing layers, and maintenance access that allows roof work without impacting IT operations — all requirements for maintaining Tier 3/4 certification. We provide documentation that supports your certification audits.',
  },
  {
    question: 'What is the cost of data center roofing in Charlotte NC?',
    answer:
      'Data center roofing in Charlotte typically costs $8 to $16 per square foot for premium membrane systems with enhanced waterproofing, and $12 to $20 per square foot for metal roofing systems. These costs are higher than standard commercial roofing because of the additional waterproofing layers, phased installation requirements, and specialized penetration flashing that data centers demand. A 50,000 sq ft data center roof might cost $400,000-$800,000 depending on the system and complexity. We provide detailed estimates with transparent pricing.',
  },
  {
    question: 'How quickly can you respond to an emergency roof leak at a data center?',
    answer:
      'We offer 24/7 emergency response for data center clients in the Charlotte area. For facilities with our priority service agreement, we guarantee a 2-hour on-site response time. Our emergency crews carry materials for immediate temporary repairs to stop water intrusion and protect your equipment. We also work with data center operators to develop pre-planned emergency response protocols so that our team knows exactly where to go and what to do when called — minimizing response time when every minute counts.',
  },
];

export default function DataCenterRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Data Center Roofing Charlotte NC', url: `${SITE_CONFIG.url}/data-center-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/data-center-roofing-charlotte-nc`}
        pageName="Data Center Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.warehouse}
            alt="Data center roofing Charlotte NC - Best Roofing Now tech facility roofing project"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Server className="w-4 h-4" />
              <span className="text-sm font-semibold">Data Centers | Server Farms | Tech Facilities</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Data Center Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Zero-Downtime Roofing Solutions for Mission-Critical Facilities
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Charlotte is one of the fastest-growing data center markets in the Southeast, powered by its
              fiber infrastructure, reliable power grid, and proximity to the financial industry. Best Roofing Now
              specializes in protecting these mission-critical facilities with roofing systems designed for zero
              downtime, superior waterproofing, and seamless HVAC integration.
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
                <Clock className="w-5 h-5 text-accent-light" />
                Zero-Downtime Installs
              </span>
              <span className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-accent-light" />
                Waterproofing Experts
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

      {/* Data Center Building Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Data Center Facilities We Serve
            </h2>
            <p className="text-gray text-lg">
              From hyperscale cloud facilities to edge computing sites, we understand the unique roofing
              requirements that keep Charlotte&apos;s digital infrastructure protected and operational.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataCenterBuildingTypes.map((type) => (
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
              Data Center Roofing Systems
            </h2>
            <p className="text-gray text-lg">
              We install roofing systems engineered for the demanding requirements of data centers — superior
              waterproofing, energy efficiency, and the ability to support heavy mechanical equipment loads.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataCenterRoofingSystems.map((system) => (
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
                Why Charlotte&apos;s Data Centers Trust Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Data center roofing is not standard commercial roofing. A single roof leak can destroy millions in
                equipment and cause outages affecting thousands of businesses. We bring the specialized expertise,
                zero-downtime methods, and redundancy planning that mission-critical facilities demand.
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
                alt="Data center roofing project in Charlotte NC - tech facility roof installation"
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
                    <p className="font-bold text-dark">Data Center Specialists</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.roofsInstalled}+ Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Center Instant Estimate Section */}
      <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-bold">CHARLOTTE&apos;S FIRST</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Data Center Roof Instant Estimate
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Get an instant price range for your data center roofing project — no waiting, no hassle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Premium Membrane</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,200 - $2,400</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">TPO, PVC, EPDM w/ enhanced waterproofing</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Spray Foam Systems</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,000 - $1,800</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Seamless insulation + waterproofing</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Metal Roofing</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,400 - $2,200</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Standing Seam, Structural Metal</p>
            </div>
          </div>

          <div className="text-center">
            <EstimateButton variant="white" size="lg" className="text-lg px-10" estimateType="commercial">
              Get Your Instant Data Center Estimate
            </EstimateButton>
            <p className="text-white/60 text-sm mt-4">
              No obligation &bull; Instant results &bull; 100% free
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
              Data Center Roofing Across the Charlotte Region
            </h2>
            <p className="text-gray text-lg">
              We serve data center facilities throughout the Greater Charlotte metro area, from University Research Park
              to the I-77 and I-85 corridors where Charlotte&apos;s data center market is growing fastest.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Data Center Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Data Center Corridors</h3>
              <div className="flex flex-wrap gap-2">
                {dataCenterAreas.map((area) => (
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
                Data Center Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about data center roofing services in Charlotte NC.
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
              href="/industrial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Industrial Roofing
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
              href="/flat-roof-contractors-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Flat Roof Contractors
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tpo-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              TPO Roofing Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/epdm-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              EPDM Roofing Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="data-center-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/data-center-roofing-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Data Center Roofing"

      />

      <CTASection
        title="Ready to Discuss Your Data Center Roofing Project?"
        subtitle="Get a free, no-obligation estimate for your data center, colocation facility, or tech building. Our team specializes in zero-downtime installations with the enhanced waterproofing and redundancy that mission-critical facilities demand."
      />
    </>
  );
}
