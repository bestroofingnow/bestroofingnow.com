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
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Commercial Roofing Charlotte NC | #1 Rated | Best Roofing Now',
  description:
    'Expert commercial roofing in Charlotte NC. TPO, EPDM, flat roofing, metal roofing & roof coatings for warehouses, offices, retail & more. BBB A+ rated, veteran-owned. Free estimates!',
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

// Building types served
const buildingTypes = [
  {
    icon: Warehouse,
    title: 'Warehouses & Distribution Centers',
    description: 'Large-scale flat roof systems for logistics and storage facilities throughout the Charlotte metro.',
  },
  {
    icon: Building,
    title: 'Office Buildings & Complexes',
    description: 'Professional roofing for corporate offices, business parks, and multi-tenant commercial buildings.',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Shopping Centers',
    description: 'Roofing solutions for strip malls, standalone retail, restaurants, and mixed-use developments.',
  },
  {
    icon: Hospital,
    title: 'Medical & Healthcare Facilities',
    description: 'Specialized roofing for hospitals, clinics, dental offices, and medical complexes requiring minimal disruption.',
  },
  {
    icon: Church,
    title: 'Churches & Religious Buildings',
    description: 'Expert roofing for houses of worship including flat roofs, steep-slope sections, and steeples.',
  },
  {
    icon: GraduationCap,
    title: 'Schools & Educational Facilities',
    description: 'Safe, efficient roofing installations for K-12 schools, daycares, and educational institutions.',
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

// Commercial roofing FAQs
const faqs = [
  {
    question: 'What types of commercial roofing systems do you install in Charlotte NC?',
    answer:
      'Best Roofing Now installs all major commercial roofing systems in Charlotte including TPO (Thermoplastic Polyolefin), EPDM (Ethylene Propylene Diene Monomer), PVC (Polyvinyl Chloride), modified bitumen, built-up roofing (BUR), standing seam metal roofing, and various roof coating systems. We help Charlotte businesses select the optimal system based on building type, budget, energy efficiency goals, and long-term maintenance requirements.',
  },
  {
    question: 'How much does commercial roofing cost in Charlotte NC?',
    answer:
      'Commercial roofing costs in Charlotte typically range from $4 to $12 per square foot depending on the roofing system, roof complexity, and project size. TPO and EPDM systems average $5-8 per square foot, while metal roofing ranges from $8-15 per square foot. A 10,000 sq ft flat roof replacement typically costs $50,000-$100,000. We provide free, detailed estimates with transparent pricing for all commercial projects.',
  },
  {
    question: 'What is the best roofing material for commercial buildings in Charlotte?',
    answer:
      'For Charlotte\'s climate with hot summers and occasional severe storms, TPO roofing is often the best choice for commercial buildings. TPO\'s white reflective surface reduces cooling costs by 10-30%, resists UV damage, and handles temperature fluctuations well. EPDM is excellent for buildings with rooftop equipment, while metal roofing offers superior longevity for industrial facilities. We assess each building\'s specific needs to recommend the optimal solution.',
  },
  {
    question: 'How long does a commercial roof last in Charlotte NC?',
    answer:
      'Commercial roof lifespan in Charlotte varies by material: TPO and EPDM typically last 20-30 years, modified bitumen 15-25 years, metal roofing 40-70 years, and built-up roofing 15-30 years. Proper maintenance significantly extends roof life. Charlotte\'s intense sun, heat, and storm activity make quality installation and regular maintenance essential for maximizing commercial roof longevity.',
  },
  {
    question: 'Do you offer commercial roof maintenance programs?',
    answer:
      'Yes, Best Roofing Now offers comprehensive commercial roof maintenance programs in Charlotte. Our programs include bi-annual inspections, detailed reporting, minor repairs, debris removal, drain clearing, and documentation for warranty compliance. Regular maintenance can extend roof life by 25-50% and helps identify small issues before they become costly emergency repairs.',
  },
  {
    question: 'Can you work around our business hours to minimize disruption?',
    answer:
      'Absolutely. We understand that business continuity is critical. Best Roofing Now offers flexible scheduling for Charlotte commercial projects including night shifts, weekend work, and phased installations. For retail and office buildings, we can complete sections after business hours. For 24/7 facilities like warehouses and medical centers, we develop custom schedules to minimize operational impact.',
  },
  {
    question: 'What warranties do you offer on commercial roofing in Charlotte?',
    answer:
      'We offer industry-leading warranties on commercial roofing including manufacturer warranties up to 30 years NDL (No Dollar Limit) on materials from GAF, Carlisle, Firestone, and Johns Manville. Our workmanship warranty covers labor for 10-15 years depending on the project. NDL warranties cover full replacement cost with no depreciation, providing maximum protection for your investment.',
  },
  {
    question: 'Do you handle commercial roof insurance claims?',
    answer:
      'Yes, Best Roofing Now has extensive experience with commercial roof insurance claims in Charlotte. We provide thorough damage documentation, meet with adjusters, prepare detailed estimates in insurance-approved formats, and advocate for fair settlements. Storm damage, hail damage, and wind damage to commercial roofs are often covered by property insurance.',
  },
  {
    question: 'What commercial buildings do you service in Charlotte?',
    answer:
      'Best Roofing Now services all types of commercial buildings in Charlotte including warehouses, distribution centers, office buildings, retail stores, shopping centers, restaurants, medical facilities, hospitals, churches, schools, industrial facilities, manufacturing plants, multi-family housing, and HOA properties. No commercial project is too large or too small.',
  },
  {
    question: 'How quickly can you respond to commercial roof emergencies?',
    answer:
      'Best Roofing Now offers 24/7 emergency commercial roofing services throughout Charlotte. For active leaks and urgent situations, we typically respond within 2-4 hours. Our emergency team can provide temporary repairs to prevent further damage, then schedule permanent repairs or replacement. Call (704) 605-6047 for immediate commercial roof emergencies.',
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
      <LocalBusinessSchema />

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
              warranties, a BBB A+ rating, and {SITE_CONFIG.googleReviewCount}+ five-star reviews.
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

      {/* Building Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Buildings We Serve</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Roofing for Every Building Type
            </h2>
            <p className="text-gray text-lg">
              From massive distribution centers to local churches, Best Roofing Now has the expertise and
              equipment to handle commercial roofing projects of any size in Charlotte NC.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildingTypes.map((building) => (
              <div key={building.title} className="bg-light rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <building.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{building.title}</h3>
                <p className="text-gray text-sm">{building.description}</p>
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

      {/* Service Areas Section */}
      <section className="section bg-light">
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
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Commercial Districts</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteAreas.map((area) => (
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
      <section className="section bg-white">
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
              <div key={index} className="bg-light rounded-xl shadow-md p-6">
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
      <section className="section bg-light">
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
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">GAF Master Commercial</h3>
              <p className="text-gray text-sm">
                Factory-certified for GAF commercial roofing systems with NDL warranty eligibility.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Carlisle Certified</h3>
              <p className="text-gray text-sm">
                Authorized installer for Carlisle TPO, EPDM, and PVC roofing systems.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Firestone Contractor</h3>
              <p className="text-gray text-sm">
                Certified Firestone Building Products contractor for commercial applications.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
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
      <section className="section bg-white">
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
                <div key={index} className="bg-light rounded-xl shadow-md p-6">
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
