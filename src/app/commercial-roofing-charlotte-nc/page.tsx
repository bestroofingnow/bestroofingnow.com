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
  Factory,
  MapPin,
  Wrench,
  FileCheck,
  Layers,
  Thermometer,
  DollarSign,
  Warehouse,
  Building,
  Hospital,
  GraduationCap,
  Church,
  ShoppingBag,
  Calculator,
  Zap,
  Headphones,
  ClipboardList,
  BarChart3,
  Repeat,
  Home,
  Car,
  Server,
  LandPlot,
  BadgeCheck,
} from 'lucide-react';
import EstimateButton from '@/components/estimate/EstimateButton';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Commercial Roofing Charlotte NC | #1 Rated | Best Roofing Now',
  description:
    `Expert commercial roofing in Charlotte NC. TPO, EPDM, flat roofing, metal roofing & roof coatings for warehouses, offices, retail & more. ${SITE_CONFIG.googleRating} Google rating, BBB A+ rated, veteran-owned. Free estimates!`,
  keywords: [
    'commercial roofing charlotte nc',
    'commercial roofing contractors charlotte nc',
    'commercial roof repair charlotte',
    'flat roof contractors charlotte nc',
    'TPO roofing charlotte nc',
    'EPDM roofing charlotte nc',
    'commercial roof replacement charlotte',
    'industrial roofing charlotte nc',
    'warehouse roofing charlotte',
    'office building roofing charlotte nc',
    'commercial flat roof repair',
    'metal roofing commercial charlotte',
    'roof coating charlotte nc',
    'commercial roofing company charlotte',
    'business roofing charlotte nc',
    'commercial roof maintenance charlotte nc',
    'property manager roofing charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Commercial Roofing Charlotte NC | #1 Rated | Best Roofing Now',
    description:
      'Expert commercial roofing services in Charlotte NC. TPO, EPDM, flat roofing, metal roofing for warehouses, offices, retail & more. BBB A+ rated. Free estimates!',
    url: `${SITE_CONFIG.url}/commercial-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.warehouse,
        width: 1200,
        height: 630,
        alt: 'Commercial roofing Charlotte NC - Best Roofing Now completing a commercial roof installation',
      },
    ],
  },
};

// Commercial roofing services
const commercialServices = [
  {
    icon: Layers,
    title: 'TPO Roofing Systems',
    description: 'Energy-efficient thermoplastic polyolefin membranes ideal for Charlotte\'s hot summers. Highly reflective and cost-effective.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'EPDM Roofing',
    description: 'Durable synthetic rubber membrane roofing with excellent weather resistance. Proven performance for 30+ years.',
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
    description: 'Standing seam and corrugated metal roofing for industrial facilities. 40-70 year lifespan with minimal maintenance.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Thermometer,
    title: 'Roof Coatings',
    description: 'Silicone and acrylic roof coatings that extend roof life, improve energy efficiency, and reduce cooling costs.',
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
    description: 'Comprehensive commercial roof assessments with detailed reports, drone imagery, and maintenance recommendations.',
    href: '/services/roof-inspection',
  },
  {
    icon: DollarSign,
    title: 'Preventive Maintenance',
    description: 'Scheduled maintenance programs to extend roof life, prevent costly repairs, and maintain warranty compliance.',
    href: '/services/commercial-roofing',
  },
];

// Why choose us for commercial roofing
const whyChooseUs = [
  {
    icon: Star,
    title: '#1 Rated Commercial Roofer',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied commercial clients throughout Charlotte.`,
  },
  {
    icon: Award,
    title: 'BBB A+ Accredited',
    description: 'Better Business Bureau A+ rating with zero complaints. We stand behind every commercial project.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned & Operated',
    description: 'Military values of integrity, excellence, and commitment guide every commercial roofing project.',
  },
  {
    icon: CheckCircle,
    title: 'Fully Licensed & Insured',
    description: 'NC licensed commercial roofing contractor with $2M+ liability coverage and full workers comp.',
  },
  {
    icon: Users,
    title: 'Manufacturer Certified',
    description: 'Certified installers for GAF, Carlisle, Firestone, Johns Manville, and other commercial systems.',
  },
  {
    icon: Clock,
    title: 'Minimal Business Disruption',
    description: 'We work around your schedule - nights, weekends, and phased installation to keep your business running.',
  },
  {
    icon: FileCheck,
    title: 'Extended Warranties',
    description: 'Up to 30-year NDL (No Dollar Limit) warranties on materials and workmanship for qualifying projects.',
  },
  {
    icon: DollarSign,
    title: 'Commercial Financing',
    description: 'Flexible financing options for commercial projects. Preserve capital while protecting your investment.',
  },
];

// Building types we serve - with links to dedicated pages
const buildingTypesLinked = [
  {
    icon: Warehouse,
    title: 'Warehouses',
    href: '/warehouse-roofing-charlotte-nc',
    description: 'Large-scale flat roof systems for logistics and storage facilities.',
  },
  {
    icon: Warehouse,
    title: 'Distribution Centers',
    href: '/distribution-center-roofing-charlotte-nc',
    description: 'High-capacity roofing for distribution and fulfillment centers.',
  },
  {
    icon: Hospital,
    title: 'Healthcare Facilities',
    href: '/healthcare-facility-roofing-charlotte-nc',
    description: 'Specialized roofing for hospitals, clinics, and medical offices.',
  },
  {
    icon: Building,
    title: 'Office Buildings',
    href: '/office-building-roofing-charlotte-nc',
    description: 'Professional roofing for corporate offices and business parks.',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Shopping Centers',
    href: '/retail-shopping-center-roofing-charlotte-nc',
    description: 'Roofing solutions for strip malls, retail, and mixed-use spaces.',
  },
  {
    icon: Building,
    title: 'Hotels & Hospitality',
    href: '/hotel-hospitality-roofing-charlotte-nc',
    description: 'Expert roofing for hotels, motels, and hospitality properties.',
  },
  {
    icon: GraduationCap,
    title: 'Schools & Education',
    href: '/school-roofing-charlotte-nc',
    description: 'Safe, efficient roofing for K-12 schools and educational facilities.',
  },
  {
    icon: Factory,
    title: 'Manufacturing Plants',
    href: '/manufacturing-plant-roofing-charlotte-nc',
    description: 'Industrial-grade roofing for manufacturing and processing facilities.',
  },
  {
    icon: Building2,
    title: 'Government Buildings',
    href: '/government-building-roofing-charlotte-nc',
    description: 'Compliant roofing for government and municipal properties.',
  },
  {
    icon: Server,
    title: 'Data Centers',
    href: '/data-center-roofing-charlotte-nc',
    description: 'Mission-critical roofing for data centers and tech facilities.',
  },
  {
    icon: Car,
    title: 'Auto Dealerships',
    href: '/auto-dealership-roofing-charlotte-nc',
    description: 'Specialized roofing for automotive dealerships and service centers.',
  },
  {
    icon: Church,
    title: 'Churches & Worship',
    href: '/church-roofing-charlotte-nc',
    description: 'Expert roofing for houses of worship including flat and steep-slope.',
  },
  {
    icon: Home,
    title: 'Apartments & Multi-Family',
    href: '/apartment-roofing-charlotte-nc',
    description: 'Comprehensive roofing for apartment complexes and multi-family housing.',
  },
  {
    icon: Factory,
    title: 'Industrial Facilities',
    href: '/industrial-roofing-charlotte-nc',
    description: 'Heavy-duty roofing for industrial parks and production facilities.',
  },
];

// Property Manager Services
const propertyManagerServices = [
  {
    icon: Headphones,
    title: '24/7 Emergency Response',
    description: 'Round-the-clock emergency commercial roofing services. When a roof emergency threatens your property, we respond within 2-4 hours to minimize damage and protect tenants.',
  },
  {
    icon: ClipboardList,
    title: 'Maintenance Contracts',
    description: 'Customized preventive maintenance contracts with bi-annual inspections, priority scheduling, and discounted repairs. Extend roof life by 25-50% and reduce emergency costs.',
  },
  {
    icon: LandPlot,
    title: 'Multi-Property Portfolio Management',
    description: 'Manage roofing across your entire property portfolio with a single trusted partner. Consistent quality, unified billing, and coordinated scheduling across all locations.',
  },
  {
    icon: BarChart3,
    title: 'Detailed Reporting for Stakeholders',
    description: 'Comprehensive documentation including inspection reports, drone imagery, condition assessments, maintenance logs, and budget projections for property owners and investors.',
  },
];

// Maintenance program tiers
const maintenanceTiers = [
  {
    name: 'Essential',
    frequency: 'Annual Inspection',
    features: [
      'Annual roof inspection',
      'Written condition report',
      'Drone imagery documentation',
      'Minor repair identification',
      'Drain and gutter clearing',
    ],
    ideal: 'Ideal for newer commercial roofs in good condition',
  },
  {
    name: 'Professional',
    frequency: 'Bi-Annual Inspections',
    features: [
      'Spring & fall inspections',
      'Detailed photo documentation',
      'Drone thermal imaging',
      'Minor repairs included',
      'Drain clearing & debris removal',
      'Warranty compliance tracking',
      'Priority scheduling',
    ],
    ideal: 'Most popular for office buildings and retail properties',
    popular: true,
  },
  {
    name: 'Premium',
    frequency: 'Quarterly Inspections',
    features: [
      'Quarterly inspections',
      'Complete photo documentation',
      'Drone thermal imaging',
      'All minor repairs included',
      'Drain clearing & debris removal',
      'Warranty compliance tracking',
      'Priority emergency response',
      '24/7 dedicated hotline',
      'Annual budget projections',
      'Stakeholder reports',
    ],
    ideal: 'Best for large portfolios and mission-critical facilities',
  },
];

// Charlotte service areas
const charlotteAreas = [
  'Uptown Charlotte',
  'South End',
  'University City',
  'Ballantyne',
  'SouthPark',
  'NoDa',
  'Plaza Midwood',
  'North Charlotte',
  'East Charlotte',
  'West Charlotte',
  'Airport Area',
  'I-77 Corridor',
  'I-85 Corridor',
  'Independence Blvd',
  'South Blvd',
  'North Tryon',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Pineville', href: '/locations/pineville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
  { name: 'Indian Trail', href: '/locations/indian-trail-nc' },
];

// Commercial client testimonials
const testimonials = [
  {
    name: 'Robert M.',
    company: 'Industrial Park Manager',
    location: 'University City, Charlotte',
    rating: 5,
    text: 'Best Roofing Now replaced the TPO roof on our 50,000 sq ft warehouse. They worked nights and weekends to avoid disrupting our operations. Exceptional quality and professionalism from start to finish.',
  },
  {
    name: 'Jennifer L.',
    company: 'Property Management Company',
    location: 'Ballantyne, Charlotte',
    rating: 5,
    text: 'We manage 12 commercial properties in Charlotte and Best Roofing Now handles all our roofing needs. Their preventive maintenance program has saved us thousands in emergency repairs. Highly recommend for commercial work.',
  },
  {
    name: 'Pastor David W.',
    company: 'First Baptist Church',
    location: 'South Charlotte',
    rating: 5,
    text: 'Our church needed a new flat roof on our fellowship hall plus repairs to the main sanctuary. Best Roofing Now provided excellent work at a fair price and even offered flexible payment terms. True professionals.',
  },
];

// Commercial roofing FAQs - optimized 8 questions
const faqs = [
  {
    question: 'How much does commercial roofing cost in Charlotte NC?',
    answer:
      'Commercial roofing costs in Charlotte NC typically range from $4 to $12 per square foot depending on the roofing system, roof complexity, building size, and accessibility. TPO roofing averages $5-8 per square foot, EPDM runs $4-7 per square foot, PVC costs $6-10 per square foot, and standing seam metal ranges from $8-15 per square foot. A 10,000 sq ft flat roof replacement typically costs $50,000-$100,000. Best Roofing Now provides free, detailed estimates with fully transparent pricing for all commercial projects in Charlotte.',
  },
  {
    question: 'What is the best commercial roofing system for Charlotte?',
    answer:
      'For Charlotte\'s climate with hot, humid summers and occasional severe storms, TPO (Thermoplastic Polyolefin) is often the best commercial roofing choice. TPO\'s highly reflective white surface reduces cooling costs by 10-30%, resists UV degradation, and handles Charlotte\'s temperature fluctuations exceptionally well. EPDM is excellent for buildings with extensive rooftop equipment, while standing seam metal offers superior longevity (40-70 years) for industrial facilities. Best Roofing Now assesses each building\'s specific requirements to recommend the optimal system.',
  },
  {
    question: 'How often should a commercial roof be inspected?',
    answer:
      'Commercial roofs in Charlotte should be inspected at least twice per year - ideally in spring (after winter weather) and fall (before storm season). Buildings with rooftop HVAC equipment, older roofs, or previous issues should consider quarterly inspections. Best Roofing Now offers commercial roof inspection programs with detailed reporting, drone thermal imaging, and actionable maintenance recommendations. Regular inspections catch small problems before they become costly emergencies and are required to maintain most manufacturer warranties.',
  },
  {
    question: 'Can you repair a commercial roof without replacing it?',
    answer:
      'Yes, many commercial roof issues in Charlotte can be repaired without full replacement. Localized leaks, seam failures, punctures, ponding water issues, and flashing damage can often be addressed through targeted repairs. Roof coating systems can extend an aging roof\'s life by 10-15 years at a fraction of replacement cost. Best Roofing Now provides honest assessments - we recommend repair when it makes financial sense and replacement only when necessary. Our free inspection will give you a clear picture of your roof\'s condition and options.',
  },
  {
    question: 'What commercial roofing warranties do you offer?',
    answer:
      'Best Roofing Now offers industry-leading commercial roofing warranties including manufacturer warranties up to 30 years NDL (No Dollar Limit) on materials from GAF, Carlisle, Firestone, and Johns Manville. NDL warranties cover full replacement cost with no depreciation, providing maximum protection for your investment. Our workmanship warranty covers labor for 10-15 years depending on the project. Extended warranty options are available for qualifying commercial projects through our manufacturer certification status.',
  },
  {
    question: 'Do you work on occupied commercial buildings?',
    answer:
      'Absolutely. Best Roofing Now specializes in working on occupied commercial buildings throughout Charlotte while minimizing disruption to daily operations. We offer flexible scheduling options including night shifts, weekend work, and phased installations. For retail locations, we can work after business hours. For 24/7 operations like warehouses and hospitals, we develop custom work plans that section the roof and manage noise, debris, and access carefully. Safety and minimal disruption are our top priorities.',
  },
  {
    question: 'What is the difference between TPO, EPDM, and PVC roofing?',
    answer:
      'TPO (Thermoplastic Polyolefin) is a single-ply membrane that is heat-welded for seamless installation, highly energy-efficient with a white reflective surface, and cost-effective. EPDM (Ethylene Propylene Diene Monomer) is a synthetic rubber membrane available in black or white, extremely durable with 30+ year track records, and excellent for roofs with heavy foot traffic or equipment. PVC (Polyvinyl Chloride) is the most chemical-resistant option, ideal for restaurants and facilities with grease exhaust. Best Roofing Now installs all three systems and will recommend the best option for your specific building needs and budget.',
  },
  {
    question: 'How do I budget for commercial roof maintenance?',
    answer:
      'Industry experts recommend budgeting 1-2% of your building\'s value annually for commercial roof maintenance in Charlotte. For a building worth $1 million, that\'s $10,000-$20,000 per year. This covers bi-annual inspections ($500-$1,500 each), minor repairs ($500-$5,000 per occurrence), drain maintenance, and coating touch-ups. Proactive maintenance extends roof life by 25-50% and prevents costly emergency repairs. Best Roofing Now offers structured maintenance contracts that simplify budgeting with fixed annual costs and priority service.',
  },
];

export default function CommercialRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing Charlotte NC', url: `${SITE_CONFIG.url}/commercial-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/commercial-roofing-charlotte-nc`}
        pageName="Commercial Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.warehouse}
            alt="Commercial roofing Charlotte NC - Best Roofing Now team completing a commercial roof installation"
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
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Charlotte&apos;s trusted commercial roofing experts with {SITE_CONFIG.roofsInstalled}+ projects completed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now delivers professional commercial roofing solutions throughout Charlotte NC. From TPO and EPDM
              flat roofs to metal roofing systems, our certified team provides exceptional quality backed by industry-leading
              warranties, a BBB A+ rating, and {SITE_CONFIG.googleReviewCount}+ five-star reviews. We serve warehouses,
              office buildings, retail centers, healthcare facilities, schools, churches, and every type of commercial property.
            </p>

            {/* CTA Buttons */}
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

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                {SITE_CONFIG.googleRating} Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed &amp; Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Commercial Roofing Services in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              From flat roof installations to emergency repairs, Best Roofing Now provides comprehensive commercial
              roofing solutions for businesses of all sizes throughout the Charlotte metro area.
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

          {/* Internal Links */}
          <div className="mt-12 text-center">
            <p className="text-gray mb-4">Explore our specialized commercial roofing services:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services/commercial-roofing"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Commercial Roofing Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/commercial-roofing-contractors-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Commercial Roofing Contractors
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/industrial-roofing-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Industrial Roofing
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/warehouse-roofing-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Warehouse Roofing
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/flat-roof-contractors-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Flat Roof Contractors
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/flat-roof-repair-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Flat Roof Repair
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
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
                When your commercial property needs roofing work, you need a contractor who understands business priorities.
                Best Roofing Now combines technical expertise with a commitment to minimizing disruption and delivering
                lasting results that protect your investment.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.slice(0, 6).map((item) => (
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
                alt="Commercial roofing Charlotte NC - Office building roof installation by Best Roofing Now"
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

          {/* Additional trust factors */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {whyChooseUs.slice(6, 8).map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Types We Serve - with links to ALL building type pages */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Building Types We Serve</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Roofing for Every Building Type in Charlotte
            </h2>
            <p className="text-gray text-lg">
              From massive distribution centers to local churches, Best Roofing Now has the expertise and
              equipment to handle commercial roofing projects of any size in Charlotte NC. Click any building
              type to learn more about our specialized services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {buildingTypesLinked.map((building) => (
              <Link
                key={building.title}
                href={building.href}
                className="group bg-light rounded-xl p-5 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <building.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">{building.title}</h3>
                    <p className="text-gray text-xs">{building.description}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1 text-primary font-semibold text-sm">
                  View Services
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Property Manager Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <ClipboardList className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Property Manager Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Roofing Services for Charlotte Property Managers
            </h2>
            <p className="text-gray text-lg">
              Managing commercial properties requires a roofing partner you can rely on 24/7. Best Roofing Now
              offers dedicated property manager services designed to protect your portfolio, simplify maintenance,
              and deliver detailed reporting for stakeholders.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {propertyManagerServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">{service.title}</h3>
                    <p className="text-gray text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <EstimateButton variant="primary" size="lg" className="text-lg px-8" estimateType="commercial">
              Request Property Manager Consultation
            </EstimateButton>
          </div>
        </div>
      </section>

      {/* Commercial Instant Estimate Section */}
      <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-bold">CHARLOTTE&apos;S FIRST</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Commercial Roof Instant Estimate
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Get an instant price range for your commercial roofing project in seconds — no waiting, no phone tag.
            </p>
            <p className="text-white/70">
              The first commercial roofing instant estimate tool in Charlotte NC
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Roof Replacement */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Roof Replacement</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,000 - $2,200</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">TPO, EPDM, PVC, Modified Bitumen</p>
            </div>

            {/* Roof Coatings */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Roof Coatings</h3>
              <p className="text-3xl font-bold text-accent mb-2">$800 - $1,000</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Silicone, Acrylic, Elastomeric</p>
            </div>

            {/* Metal Roofing */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Metal Roofing</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,000 - $1,600</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Standing Seam, Corrugated, R-Panel</p>
            </div>
          </div>

          <div className="text-center">
            <EstimateButton variant="white" size="lg" className="text-lg px-10" estimateType="commercial">
              Get Your Instant Commercial Estimate
            </EstimateButton>
            <p className="text-white/60 text-sm mt-4">
              No obligation &bull; Instant results &bull; 100% free
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance Program Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Repeat className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Maintenance Programs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Roof Maintenance Programs in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              Proactive maintenance extends commercial roof life by 25-50% and prevents costly emergency repairs.
              Choose the program that fits your property&apos;s needs and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {maintenanceTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-6 shadow-md ${tier.popular ? 'bg-primary text-white ring-4 ring-accent' : 'bg-light'}`}
              >
                {tier.popular && (
                  <div className="inline-flex items-center gap-2 bg-accent rounded-full px-3 py-1 mb-4">
                    <Star className="w-3 h-3" />
                    <span className="text-xs font-bold">MOST POPULAR</span>
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-1 ${tier.popular ? 'text-white' : 'text-dark'}`}>{tier.name}</h3>
                <p className={`text-sm mb-4 ${tier.popular ? 'text-white/80' : 'text-primary font-semibold'}`}>{tier.frequency}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.popular ? 'text-accent' : 'text-green-500'}`} />
                      <span className={`text-sm ${tier.popular ? 'text-white/90' : 'text-gray'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className={`text-xs italic ${tier.popular ? 'text-white/70' : 'text-gray'}`}>{tier.ideal}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
            >
              Discuss Maintenance Options
            </Button>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Need Commercial Roofing in Charlotte NC?
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

      {/* Commercial Project Portfolio Highlights */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <BadgeCheck className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Project Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Roofing Projects Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our portfolio spans every type of commercial property in the Charlotte metro area.
              Here are highlights from recent commercial roofing projects.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src={IMAGES.commercial.warehouse}
                  alt="Commercial warehouse roofing project Charlotte NC"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-dark mb-2">50,000 SF Warehouse TPO Replacement</h3>
                <p className="text-gray text-sm">Complete TPO roof replacement for a University City distribution warehouse. Completed on nights and weekends to avoid operational disruption.</p>
                <Link href="/warehouse-roofing-charlotte-nc" className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-3">
                  Warehouse Roofing Services <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src={IMAGES.commercial.office}
                  alt="Commercial office building roofing project Charlotte NC"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-dark mb-2">Multi-Building Office Park EPDM System</h3>
                <p className="text-gray text-sm">EPDM roof installation across a 3-building Ballantyne office complex. Phased approach maintained full tenant access throughout.</p>
                <Link href="/office-building-roofing-charlotte-nc" className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-3">
                  Office Building Roofing <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src={IMAGES.commercial.flatRoof}
                  alt="Commercial retail center roofing project Charlotte NC"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-dark mb-2">Shopping Center Roof Coating System</h3>
                <p className="text-gray text-sm">Silicone roof coating application for a South Charlotte retail center. Extended existing roof life by 15+ years at 40% of replacement cost.</p>
                <Link href="/retail-shopping-center-roofing-charlotte-nc" className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-3">
                  Retail Roofing Services <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
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
              Commercial Roofing Across Greater Charlotte
            </h2>
            <p className="text-gray text-lg">
              Best Roofing Now provides commercial roofing services throughout the Charlotte metro area
              and surrounding business districts.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Areas */}
            <div className="bg-light rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Commercial Districts</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteAreas.map((area) => (
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
            <div className="bg-light rounded-xl p-6 shadow-md">
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

      {/* Customer Testimonials Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 fill-primary" aria-hidden="true" />
              <span className="text-sm font-semibold">Client Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Charlotte Businesses Say About Our Commercial Roofing
            </h2>
            <p className="text-gray text-lg">
              With {SITE_CONFIG.googleReviewCount}+ five-star reviews, our commitment to quality commercial
              roofing and client satisfaction speaks for itself.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-dark">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                  <p className="text-sm text-gray">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Read More Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Roofing Certifications
            </h2>
            <p className="text-gray text-lg">
              Our manufacturer certifications mean extended warranties and proven expertise for your
              commercial roofing project.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">GAF Master Commercial</h3>
              <p className="text-gray text-sm">
                Factory-certified for GAF commercial roofing systems with NDL warranty eligibility.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Carlisle Certified</h3>
              <p className="text-gray text-sm">
                Authorized installer for Carlisle TPO, EPDM, and PVC roofing systems.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Firestone Contractor</h3>
              <p className="text-gray text-sm">
                Certified Firestone Building Products contractor for commercial applications.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Johns Manville Certified</h3>
              <p className="text-gray text-sm">
                Approved installer for Johns Manville single-ply and built-up roofing systems.
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
                Commercial Roofing Charlotte NC FAQs
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

      {/* Service City Links */}
      <ServiceCityLinks
        city="Charlotte"
        citySlug="charlotte-nc"
        title="All Roofing Services in Charlotte NC"
        subtitle="Beyond commercial roofing, we offer complete solutions for residential and commercial properties."
      />

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Charlotte"
        service="Commercial Roofing"
        serviceSlug="commercial-roofing"
        title="Commercial Roofing in Nearby Cities"
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for Professional Commercial Roofing in Charlotte NC?"
        subtitle="Get a free, no-obligation estimate from Charlotte's #1 rated commercial roofing company. Our certified team will assess your building and provide expert recommendations tailored to your business needs and budget."
      />
    </>
  );
}
