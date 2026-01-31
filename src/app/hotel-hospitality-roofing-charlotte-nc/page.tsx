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
  DollarSign,
  Ruler,
  Zap,
  Thermometer,
  Layers,
  BedDouble,
  UtensilsCrossed,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
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

export const metadata: Metadata = {
  title: 'Hotel & Hospitality Roofing Charlotte NC | Hotels, Resorts & Convention Centers | Best Roofing Now',
  description:
    'Expert hotel and hospitality roofing contractors in Charlotte NC. We specialize in hotels, resorts, convention centers & restaurants. Minimal guest disruption, fast turnaround. Licensed & insured. Free estimates.',
  keywords: [
    'hotel roofing charlotte nc',
    'hospitality roofing charlotte nc',
    'hotel roof repair charlotte',
    'convention center roofing charlotte nc',
    'resort roofing charlotte',
    'hotel roof replacement charlotte nc',
    'commercial hotel roofing charlotte',
    'hospitality roofing contractors charlotte',
    'restaurant roofing charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/hotel-hospitality-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Hotel & Hospitality Roofing Charlotte NC | Hotels, Resorts & Convention Centers | Best Roofing Now',
    description:
      'Expert hotel and hospitality roofing contractors in Charlotte NC. Minimal guest disruption, fast turnaround. Licensed & insured with free estimates.',
    url: `${SITE_CONFIG.url}/hotel-hospitality-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.hospitality,
        width: 1200,
        height: 630,
        alt: 'Hotel and hospitality roofing Charlotte NC - Best Roofing Now hotel roofing project',
      },
    ],
  },
};

// Hospitality roofing systems
const hospitalityRoofingSystems = [
  {
    icon: Building2,
    title: 'TPO Roofing Systems',
    description: 'Energy-efficient single-ply membrane ideal for large hotel roofs. The reflective white surface reduces cooling costs, keeping guest rooms comfortable during Charlotte summers.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'PVC Roofing Systems',
    description: 'Superior chemical resistance perfect for hotels with rooftop restaurants, pools, and grease-producing kitchen exhaust. Excellent fire rating and long lifespan.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Metal Roofing Systems',
    description: 'Standing seam metal roofing adds curb appeal to boutique hotels and resorts. Available in designer colors to match brand aesthetics and architectural style.',
    href: '/services/metal-roofing',
  },
  {
    icon: Layers,
    title: 'Modified Bitumen Roofing',
    description: 'Multi-layer roofing offering excellent waterproofing for multi-story hotels. Ideal for roofs with heavy foot traffic from HVAC maintenance access.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Thermometer,
    title: 'Built-Up Roofing (BUR)',
    description: 'Time-tested roofing system providing superior protection for convention centers and large hospitality complexes with expansive flat roof areas.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Clock,
    title: 'Roof Coatings & Restoration',
    description: 'Extend the life of your existing hotel roof by 10-15 years with reflective coatings. Minimal disruption to guests during application.',
    href: '/services/commercial-roofing',
  },
];

// Types of hospitality buildings served
const hospitalityBuildingTypes = [
  {
    icon: Building2,
    title: 'Full-Service Hotels',
    description: 'Comprehensive roofing for large branded hotels like Marriott, Hilton, and Hyatt properties across the Charlotte metro area.',
  },
  {
    icon: BedDouble,
    title: 'Limited-Service & Budget Hotels',
    description: 'Cost-effective roofing solutions for select-service and economy hotels along Charlotte corridors and near CLT Airport.',
  },
  {
    icon: Clock,
    title: 'Extended Stay Properties',
    description: 'Roofing for extended-stay hotels that require minimal disruption to long-term guests who are essentially living on-site.',
  },
  {
    icon: Users,
    title: 'Convention Centers & Event Venues',
    description: 'Large-scale roofing for convention facilities and event spaces, including coordination around scheduled events and conferences.',
  },
  {
    icon: Star,
    title: 'Resorts & Spas',
    description: 'Premium roofing solutions for upscale resorts and spa facilities where aesthetics and guest experience are paramount.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Bed & Breakfasts / Boutique Hotels',
    description: 'Specialized roofing for historic and boutique properties that require careful preservation of architectural character and charm.',
  },
];

// Why choose us for hospitality projects
const whyChooseUs = [
  {
    icon: Users,
    title: 'Guest Disruption Management',
    description: 'We coordinate work schedules to minimize noise, debris, and visual impact. Night and early morning crews available for occupied properties.',
  },
  {
    icon: Clock,
    title: 'Speed of Completion',
    description: 'Fast turnaround times critical in hospitality. We work in phases so you never have to close sections of your hotel during roofing work.',
  },
  {
    icon: Shield,
    title: 'Multi-Story Expertise',
    description: 'Experienced with 3-story to 20+ story hotel buildings. Proper safety rigging, crane access, and material staging for high-rise projects.',
  },
  {
    icon: Award,
    title: 'Curb Appeal Focus',
    description: 'We understand that your hotel roof is part of the guest first impression. Clean, professional installations that enhance property appearance.',
  },
  {
    icon: DollarSign,
    title: 'Brand Standard Compliance',
    description: 'Familiar with franchise brand standards from Marriott, Hilton, IHG, Wyndham, and Choice Hotels. We meet or exceed PIP requirements.',
  },
  {
    icon: Ruler,
    title: 'Dedicated Project Managers',
    description: 'Single point of contact who coordinates with your hotel GM and engineering team. Detailed daily progress reports and clear timelines.',
  },
];

// Charlotte hospitality areas served
const hospitalityAreas = [
  'Uptown Charlotte',
  'CLT Airport Area',
  'I-77 Corridor Hotels',
  'Pineville / Carowinds Area',
  'Lake Norman / Northlake',
  'Concord / Charlotte Motor Speedway',
  'SouthPark',
  'University City',
  'Ballantyne',
  'I-85 Corridor',
  'South End / Dilworth',
  'NoDa / Plaza Midwood',
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
  { name: 'Pineville', href: '/locations/pineville-nc' },
];

// FAQs about hospitality roofing
const faqs = [
  {
    question: 'How do you minimize disruption to hotel guests during roofing work?',
    answer:
      'Guest comfort is our top priority on hospitality projects. We develop detailed disruption management plans with your hotel team before any work begins. This includes scheduling noisy work during low-occupancy periods, using sound-dampening equipment, maintaining clean staging areas hidden from guest view, and coordinating with housekeeping to manage dust and debris. We can also work nights and early mornings when guest areas are least impacted. Many of our hotel clients report that guests were completely unaware roofing work was happening overhead.',
  },
  {
    question: 'What is the best time of year to replace a hotel roof in Charlotte?',
    answer:
      'Charlotte hotels typically see lower occupancy in January through March, making winter the ideal time for major roofing work. However, convention center hotels near Uptown may have different patterns. We work with your revenue management team to identify low-occupancy windows. For properties near Charlotte Motor Speedway or Carowinds, we avoid major event weekends. Spring and fall offer the best weather for installation, but we can work year-round in Charlotte&apos;s relatively mild climate.',
  },
  {
    question: 'How much does hotel roof replacement cost in Charlotte NC?',
    answer:
      'Hotel roof replacement in Charlotte typically ranges from $5 to $12 per square foot for membrane systems (TPO, PVC) and $10 to $18 per square foot for premium metal roofing. A 50,000 sq ft hotel roof might cost $250,000-$600,000 depending on the system, number of stories, HVAC penetrations, and access complexity. We provide detailed estimates broken down by phase so you can budget accordingly, and we offer financing options for larger projects.',
  },
  {
    question: 'Can you work around our pool deck and outdoor amenity areas?',
    answer:
      'Absolutely. We frequently work on hotels with rooftop pools, outdoor dining areas, and amenity decks. We install temporary protection barriers to keep debris away from pool areas and coordinate with your facilities team on pool closure schedules if needed. For rooftop restaurants, we phase the work to keep dining areas operational. We carry additional liability coverage specifically for work near guest amenity areas.',
  },
  {
    question: 'How do you handle the large HVAC systems on hotel roofs?',
    answer:
      'Hotel roofs typically have extensive HVAC equipment including RTUs, cooling towers, and exhaust fans. Our crews are experienced in working around this equipment and coordinating with HVAC contractors when units need to be temporarily relocated or raised during re-roofing. We ensure proper flashing and curb details around all penetrations to prevent leaks. We can also coordinate HVAC replacement or upgrades during the roofing project for cost savings.',
  },
  {
    question: 'Do you meet franchise brand PIP (Property Improvement Plan) requirements?',
    answer:
      'Yes, we are familiar with PIP requirements from major hotel brands including Marriott, Hilton, IHG, Wyndham, Choice Hotels, and Best Western. We can provide documentation, warranties, and finish specifications that meet or exceed brand standards. Our project managers can coordinate directly with brand inspectors during and after the project to ensure full compliance.',
  },
  {
    question: 'What roofing system is best for hotels with rooftop amenities?',
    answer:
      'For hotels with rooftop pools, bars, or event spaces, we typically recommend PVC membrane as the base waterproofing layer due to its superior chemical resistance and weldable seams. Over-decking options include pavers, synthetic turf, or composite decking systems. For visible roof areas, standing seam metal provides an attractive, durable solution. We design systems that accommodate heavy foot traffic, furniture loads, and drainage requirements unique to amenity spaces.',
  },
  {
    question: 'Do you offer emergency roof repair for hotels?',
    answer:
      'Yes, we provide 24/7 emergency roof repair services for hospitality properties. A hotel leak impacts guest experience immediately, so we treat every hotel leak as urgent. Our emergency team can typically respond within 2-4 hours in the Charlotte area to provide temporary weatherproofing and prevent further interior damage. We carry tarps, sealants, and temporary repair materials on our trucks at all times.',
  },
];

export default function HotelHospitalityRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Hotel & Hospitality Roofing Charlotte NC', url: `${SITE_CONFIG.url}/hotel-hospitality-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/hotel-hospitality-roofing-charlotte-nc`}
        pageName="Hotel & Hospitality Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.hospitality}
            alt="Hotel and hospitality roofing Charlotte NC - Best Roofing Now hotel roofing project"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Hotels | Resorts | Convention Centers</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Hotel &amp; Hospitality Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert Roofing for Hotels, Resorts, Convention Centers &amp; Hospitality Properties
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Charlotte is the Southeast&apos;s premier convention and event destination, home to hundreds of hotels
              serving NASCAR fans, banking professionals, and convention attendees. Best Roofing Now specializes in
              hospitality roofing with minimal guest disruption, fast turnaround, and results that enhance curb appeal.
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
                <Users className="w-5 h-5 text-accent-light" />
                Minimal Guest Disruption
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                Licensed &amp; Insured
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Brand Standard Compliant
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Manufacturer Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Building Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Hospitality Properties We Serve
            </h2>
            <p className="text-gray text-lg">
              From Uptown Charlotte&apos;s full-service convention hotels to Lake Norman lakefront resorts, we have the
              expertise to handle the unique roofing needs of every hospitality property.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitalityBuildingTypes.map((type) => (
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
              Hospitality Roofing Systems
            </h2>
            <p className="text-gray text-lg">
              We install and maintain all major commercial roofing systems, selecting the optimal solution based on
              your property&apos;s unique requirements, brand standards, and guest experience priorities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitalityRoofingSystems.map((system) => (
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
                Why Charlotte&apos;s Hotels Trust Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Hotel roofing demands contractors who understand hospitality: guest comfort comes first, timelines are
                non-negotiable, and the finished product must enhance your property&apos;s appearance. We deliver on all fronts.
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
                src={IMAGES.commercial.hospitality}
                alt="Hotel roofing project in Charlotte NC - hospitality building roof installation"
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
                    <p className="font-bold text-dark">Hospitality Specialists</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.roofsInstalled}+ Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Instant Estimate Section */}
      <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-bold">CHARLOTTE&apos;S FIRST</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Hotel Roof Instant Estimate
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Get an instant price range for your hospitality roofing project — no waiting, no hassle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Roof Replacement</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,000 - $2,400</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">TPO, PVC, Modified Bitumen</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Roof Coatings</h3>
              <p className="text-3xl font-bold text-accent mb-2">$800 - $1,100</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Silicone, Acrylic, Elastomeric</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Metal Roofing</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,200 - $1,800</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Standing Seam, Designer Panels</p>
            </div>
          </div>

          <div className="text-center">
            <EstimateButton variant="white" size="lg" className="text-lg px-10" estimateType="commercial">
              Get Your Instant Hospitality Estimate
            </EstimateButton>
            <p className="text-white/60 text-sm mt-4">
              No obligation * Instant results * 100% free
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
              Hospitality Roofing Across the Charlotte Region
            </h2>
            <p className="text-gray text-lg">
              We serve hotels, resorts, and hospitality properties throughout the Greater Charlotte metro area and surrounding communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Hospitality Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Hotel Districts</h3>
              <div className="flex flex-wrap gap-2">
                {hospitalityAreas.map((area) => (
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
                Hotel &amp; Hospitality Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about hospitality roofing services in Charlotte NC.
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
              Explore our full range of commercial and specialty roofing solutions in Charlotte NC.
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
        title="Ready to Discuss Your Hotel Roofing Project?"
        subtitle="Get a free, no-obligation estimate for your hotel, resort, or hospitality property. Our team will assess your building and provide honest recommendations tailored to your guest experience priorities and budget."
      />
    </>
  );
}
