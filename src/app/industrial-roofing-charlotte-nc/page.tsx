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
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
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

export const metadata: Metadata = {
  title: 'Industrial Roofing Charlotte NC | Warehouse & Factory Roofs | Best Roofing Now',
  description:
    'Expert industrial roofing contractors in Charlotte NC specializing in warehouses, factories, manufacturing plants & distribution centers. TPO, EPDM, metal roofing systems. Licensed & insured. Free estimates.',
  keywords: [
    'industrial roofing charlotte nc',
    'industrial roof repair charlotte',
    'warehouse roofing charlotte nc',
    'factory roofing charlotte',
    'manufacturing plant roofing charlotte nc',
    'industrial roof replacement charlotte',
    'large building roofing charlotte nc',
    'metal roof industrial charlotte',
    'industrial roofing contractors charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/industrial-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Industrial Roofing Charlotte NC | Warehouse & Factory Roofs | Best Roofing Now',
    description:
      'Expert industrial roofing contractors in Charlotte NC specializing in warehouses, factories, manufacturing plants & distribution centers. Licensed & insured with free estimates.',
    url: `${SITE_CONFIG.url}/industrial-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.warehouse,
        width: 1200,
        height: 630,
        alt: 'Industrial roofing Charlotte NC - Best Roofing Now warehouse roofing project',
      },
    ],
  },
};

// Industrial roofing systems
const industrialRoofingSystems = [
  {
    icon: Building2,
    title: 'TPO Roofing Systems',
    description: 'Single-ply membrane ideal for large industrial roofs. Energy-efficient, reflective surface reduces cooling costs in warehouses and factories.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Factory,
    title: 'EPDM Rubber Roofing',
    description: 'Durable synthetic rubber membrane perfect for large-scale industrial buildings. Excellent weather resistance and 30+ year lifespan.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Metal Roofing Systems',
    description: 'Standing seam and corrugated metal roofing for industrial applications. Superior durability and minimal maintenance requirements.',
    href: '/services/metal-roofing',
  },
  {
    icon: Shield,
    title: 'Built-Up Roofing (BUR)',
    description: 'Multi-layer roofing systems providing exceptional protection for manufacturing facilities and heavy industrial operations.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Thermometer,
    title: 'Spray Foam Roofing',
    description: 'Seamless insulation and waterproofing ideal for irregularly shaped industrial roofs and energy-conscious facilities.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Clock,
    title: 'Industrial Roof Coatings',
    description: 'Reflective coatings that extend roof life, reduce energy costs, and provide additional waterproofing for aging industrial roofs.',
    href: '/services/commercial-roofing',
  },
];

// Types of industrial buildings served
const industrialBuildingTypes = [
  {
    icon: Warehouse,
    title: 'Warehouses & Distribution Centers',
    description: 'Large-scale roofing solutions for logistics facilities, fulfillment centers, and storage warehouses of all sizes.',
  },
  {
    icon: Factory,
    title: 'Manufacturing Plants',
    description: 'Heavy-duty roofing systems designed to handle the demands of manufacturing operations, including heat, chemicals, and heavy equipment.',
  },
  {
    icon: Truck,
    title: 'Transportation & Logistics Hubs',
    description: 'Roofing for trucking terminals, rail facilities, and intermodal centers requiring durable, low-maintenance solutions.',
  },
  {
    icon: Zap,
    title: 'Power & Utility Facilities',
    description: 'Specialized roofing for substations, data centers, and utility buildings with unique environmental requirements.',
  },
  {
    icon: Building2,
    title: 'Food Processing Plants',
    description: 'Sanitary roofing solutions meeting FDA and USDA requirements for food manufacturing and processing facilities.',
  },
  {
    icon: Ruler,
    title: 'Cold Storage Facilities',
    description: 'Insulated roofing systems designed to maintain temperature control for refrigerated warehouses and freezer facilities.',
  },
];

// Why choose us for industrial projects
const whyChooseUs = [
  {
    icon: Ruler,
    title: 'Large-Scale Expertise',
    description: 'Experienced in projects ranging from 50,000 to 500,000+ square feet. We have the equipment and crews for industrial-scale work.',
  },
  {
    icon: Clock,
    title: 'Minimal Downtime',
    description: 'We work around production schedules, offering night and weekend crews to keep your operations running smoothly.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'OSHA-compliant crews with extensive industrial safety training. Zero-incident track record on industrial sites.',
  },
  {
    icon: Award,
    title: 'Manufacturer Certified',
    description: 'Factory-certified installers for major industrial roofing systems including GAF, Carlisle, Firestone, and more.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Volume discounts for large projects. Transparent pricing with no hidden fees or surprise costs.',
  },
  {
    icon: Users,
    title: 'Dedicated Project Managers',
    description: 'Single point of contact throughout your project. Regular updates and clear communication at every stage.',
  },
];

// Charlotte industrial areas served
const industrialAreas = [
  'Airport/CLT Area',
  'Steele Creek Industrial',
  'Northlake Business Park',
  'University Research Park',
  'Arrowood Industrial',
  'Freedom Drive Corridor',
  'Brookshire Industrial',
  'Mount Holly Industrial',
  'Pineville Industrial',
  'I-77 Corridor',
  'I-85 Corridor',
  'Concord Industrial Parks',
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

// FAQs about industrial roofing
const faqs = [
  {
    question: 'What is the best roofing system for industrial warehouses in Charlotte?',
    answer:
      'For large industrial warehouses in Charlotte, we typically recommend TPO or EPDM membrane systems. TPO offers excellent energy efficiency with its reflective white surface, reducing cooling costs by up to 30% in our hot summers. EPDM provides superior durability and a 30+ year lifespan. For facilities requiring additional structural support or aesthetics, standing seam metal roofing is an excellent choice. We assess each building individually to recommend the optimal solution.',
  },
  {
    question: 'How much does industrial roof replacement cost in Charlotte NC?',
    answer:
      'Industrial roof replacement costs in Charlotte typically range from $4 to $10 per square foot for membrane systems (TPO, EPDM) and $8 to $15 per square foot for metal roofing. A 100,000 sq ft warehouse might cost $400,000-$1,000,000 depending on the system, existing roof condition, and access requirements. We offer free detailed estimates and can discuss financing options for large projects.',
  },
  {
    question: 'Can you work on our facility without stopping production?',
    answer:
      'Absolutely. We specialize in keeping industrial operations running during roof work. Our crews work in sections, offer night and weekend scheduling, and coordinate with your facility managers to avoid disruptions. We have completed numerous industrial projects in Charlotte without a single hour of production downtime for our clients.',
  },
  {
    question: 'How long does an industrial roof installation take?',
    answer:
      'Industrial roof installation timelines depend on building size and complexity. A typical 50,000 sq ft warehouse takes 2-4 weeks, while larger facilities (200,000+ sq ft) may require 6-12 weeks. We provide detailed project schedules upfront and can fast-track projects when needed, though this may affect pricing.',
  },
  {
    question: 'Do you handle industrial roof repairs and maintenance?',
    answer:
      'Yes, we offer comprehensive industrial roof repair and maintenance services. Our emergency response team can address leaks and storm damage quickly to protect your inventory and equipment. We also offer preventive maintenance programs with bi-annual inspections designed specifically for industrial facilities, helping extend roof life and prevent costly emergency repairs.',
  },
  {
    question: 'What warranties do you offer on industrial roofing projects?',
    answer:
      'We offer manufacturer warranties ranging from 15 to 30 years depending on the roofing system and installation package. As certified installers for major manufacturers, we can provide NDL (No Dollar Limit) warranties on larger projects. Our workmanship warranty covers installation quality. Extended warranty options are available for facilities requiring enhanced coverage.',
  },
  {
    question: 'Can industrial roofs support solar panel installations?',
    answer:
      'Many industrial roofing systems can accommodate solar installations. We work with solar contractors to ensure proper roof penetrations, load distribution, and waterproofing. If you are planning a solar installation, we can install a roof system specifically designed to support and integrate with solar arrays, potentially qualifying for additional energy incentives.',
  },
  {
    question: 'Do you work with property management companies and national accounts?',
    answer:
      'Yes, we work with property management companies, REITs, and national accounts with multiple facilities in the Charlotte region. We offer dedicated account management, standardized reporting, and can coordinate multi-site projects. Our experience with national standards and compliance requirements makes us a trusted partner for institutional property owners.',
  },
];

export default function IndustrialRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Industrial Roofing Charlotte NC', url: `${SITE_CONFIG.url}/industrial-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/industrial-roofing-charlotte-nc`}
        pageName="Industrial Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.warehouse}
            alt="Industrial roofing Charlotte NC - Best Roofing Now warehouse roofing project"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Factory className="w-4 h-4" />
              <span className="text-sm font-semibold">Warehouses | Factories | Manufacturing Plants</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Industrial Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Large-Scale Roofing Solutions for Warehouses, Factories & Industrial Facilities
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in industrial roofing for Charlotte&apos;s warehouses, manufacturing plants,
              and distribution centers. We have the equipment, crews, and expertise to handle projects of any size
              while minimizing disruption to your operations.
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
                50,000+ Sq Ft Projects
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                OSHA Compliant
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

      {/* Industrial Building Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Industrial Facilities We Serve
            </h2>
            <p className="text-gray text-lg">
              From massive distribution centers to specialized manufacturing plants, we have the expertise to handle
              the unique roofing challenges of any industrial facility.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrialBuildingTypes.map((type) => (
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
              Industrial Roofing Systems
            </h2>
            <p className="text-gray text-lg">
              We install and maintain all major industrial roofing systems, selecting the optimal solution based on
              your facility&apos;s specific requirements, budget, and operational needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrialRoofingSystems.map((system) => (
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
                Why Charlotte&apos;s Industrial Facilities Trust Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Industrial roofing demands contractors who understand the unique challenges of large-scale projects:
                tight schedules, safety requirements, and the need to keep operations running. We deliver on all fronts.
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
                alt="Industrial roofing project in Charlotte NC - large warehouse roof installation"
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
                    <p className="font-bold text-dark">Industrial Specialists</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.roofsInstalled}+ Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Need Industrial Roofing in Charlotte?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate for your warehouse, factory, or industrial facility.
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
              Industrial Roofing Across the Charlotte Region
            </h2>
            <p className="text-gray text-lg">
              We serve industrial facilities throughout the Greater Charlotte area and surrounding industrial corridors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Industrial Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Industrial Areas</h3>
              <div className="flex flex-wrap gap-2">
                {industrialAreas.map((area) => (
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
                Industrial Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about industrial roofing services in Charlotte NC.
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
              href="/flat-roof-contractors-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Flat Roof Contractors
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/flat-roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Flat Roof Repair
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

      {/* Final CTA */}
      <CTASection
        title="Ready to Discuss Your Industrial Roofing Project?"
        subtitle="Get a free, no-obligation estimate for your warehouse, factory, or industrial facility. Our team will assess your building and provide honest recommendations tailored to your operational needs and budget."
      />
    </>
  );
}
