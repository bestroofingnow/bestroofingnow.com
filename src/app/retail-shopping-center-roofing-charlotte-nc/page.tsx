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
  ShoppingBag,
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
  title: 'Retail & Shopping Center Roofing Charlotte NC | Mall & Strip Center Roofs | Best Roofing Now',
  description:
    'Expert retail and shopping center roofing contractors in Charlotte NC. Specializing in malls, strip centers, big box stores & grocery stores. Minimal business disruption. SouthPark, Northlake, Concord Mills. Free estimates.',
  keywords: [
    'shopping center roofing charlotte nc',
    'retail roofing charlotte nc',
    'strip mall roofing charlotte',
    'mall roofing charlotte nc',
    'big box store roofing charlotte',
    'grocery store roofing charlotte nc',
    'retail roof repair charlotte',
    'shopping center roof replacement charlotte nc',
    'commercial retail roofing charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/retail-shopping-center-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Retail & Shopping Center Roofing Charlotte NC | Mall & Strip Center Roofs | Best Roofing Now',
    description:
      'Expert retail and shopping center roofing contractors in Charlotte NC. Specializing in malls, strip centers, big box stores & grocery stores. Minimal business disruption. Free estimates.',
    url: `${SITE_CONFIG.url}/retail-shopping-center-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.office,
        width: 1200,
        height: 630,
        alt: 'Retail shopping center roofing Charlotte NC - Best Roofing Now commercial retail roofing project',
      },
    ],
  },
};

// Retail roofing systems
const roofingSystems = [
  {
    icon: Building2,
    title: 'TPO Roofing Systems',
    description: 'Energy-efficient single-ply membrane ideal for retail flat roofs. Reflective surface reduces cooling costs, keeping stores comfortable and utility bills manageable.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Factory,
    title: 'EPDM Rubber Roofing',
    description: 'Durable, cost-effective rubber membrane perfect for strip centers and multi-tenant retail buildings where reliable, low-maintenance performance is the priority.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Metal Roofing Systems',
    description: 'Standing seam and architectural metal roofing for retail buildings where curb appeal matters. Attractive profiles in multiple colors to complement any storefront.',
    href: '/services/metal-roofing',
  },
  {
    icon: Layers,
    title: 'Modified Bitumen Roofing',
    description: 'Multi-layer protection ideal for retail buildings with heavy rooftop HVAC equipment, signage supports, and regular maintenance foot traffic.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'Built-Up Roofing (BUR)',
    description: 'Proven multi-ply roofing system for large retail facilities like big box stores and grocery anchors requiring long-term, heavy-duty waterproofing.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Clock,
    title: 'Roof Coatings & Restoration',
    description: 'Reflective coatings that extend retail roof life by 10-15 years. A budget-friendly option for shopping centers looking to avoid full tear-off disruption.',
    href: '/services/commercial-roofing',
  },
];

// Types of retail buildings served
const buildingTypes = [
  {
    icon: Building2,
    title: 'Regional Shopping Malls',
    description: 'Large-scale roofing for regional malls like SouthPark Mall, Northlake Mall, and Concord Mills, managing complex multi-section roof systems and anchor tenant coordination.',
  },
  {
    icon: ShoppingBag,
    title: 'Strip Centers & Plazas',
    description: 'Cost-effective roofing for neighborhood strip centers and retail plazas with multiple tenants, coordinating work schedules around each business\u0027s operating hours.',
  },
  {
    icon: Ruler,
    title: 'Big Box Retail Stores',
    description: 'Large-footprint roofing for big box retailers like Home Depot, Target, and Walmart, handling 80,000-200,000+ sq ft roof areas efficiently.',
  },
  {
    icon: Thermometer,
    title: 'Grocery & Supermarket Stores',
    description: 'Specialized roofing for grocery stores with extensive HVAC and refrigeration systems, ensuring insulation performance that keeps energy costs in check.',
  },
  {
    icon: Star,
    title: 'Boutique & Specialty Retail',
    description: 'Aesthetic-focused roofing for boutique retail, restaurants, and specialty stores in upscale shopping areas like SouthPark and Birkdale Village.',
  },
  {
    icon: Zap,
    title: 'Gas Stations & Convenience Stores',
    description: 'Quick-turnaround roofing for gas stations, convenience stores, and quick-service restaurants that cannot afford extended closure periods.',
  },
];

// Why choose us for retail projects
const whyChooseUs = [
  {
    icon: Clock,
    title: 'Business-Hour Friendly',
    description: 'We schedule noisy work before store openings or after closing, keeping noise levels minimal during peak shopping hours and customer-facing operations.',
  },
  {
    icon: Users,
    title: 'Multi-Tenant Coordination',
    description: 'We coordinate with property management and individual tenants to schedule work around business operations, sales events, and seasonal busy periods.',
  },
  {
    icon: Shield,
    title: 'Customer Safety First',
    description: 'Clear safety barriers, clean staging areas, and debris-free walkways ensure your shoppers and employees are safe throughout the entire project.',
  },
  {
    icon: Award,
    title: 'Manufacturer Certified',
    description: 'Factory-certified installers for major roofing manufacturers, providing warranty coverage that meets national retail tenant and landlord standards.',
  },
  {
    icon: DollarSign,
    title: 'Portfolio & Multi-Site Pricing',
    description: 'Volume discounts for retail property owners with multiple locations. Consistent quality and pricing across your Charlotte-area portfolio.',
  },
  {
    icon: Wrench,
    title: 'Signage & Curb Appeal',
    description: 'We protect and work around existing signage, facades, and storefronts, maintaining your retail center\u0027s image throughout the roofing project.',
  },
];

// Charlotte retail areas served
const serviceAreas = [
  'SouthPark Mall Area',
  'Northlake Mall/I-77',
  'Concord Mills/Afton Ridge',
  'Independence Blvd Corridor',
  'South Blvd/I-77 Retail',
  'Pineville/Carolina Place',
  'University City/IKEA Area',
  'Steele Creek/Rivergate',
  'Matthews/Sycamore Commons',
  'Huntersville/Birkdale Village',
  'Gastonia/Franklin Square',
  'Monroe/Indian Trail Retail',
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

// FAQs about retail shopping center roofing
const faqs = [
  {
    question: 'How much does shopping center roof replacement cost in Charlotte NC?',
    answer:
      'Shopping center roof replacement in Charlotte typically costs $5 to $11 per square foot for membrane systems (TPO, EPDM) and $10 to $18 per square foot for metal roofing. A 40,000 sq ft strip center might cost $200,000-$440,000, while a 200,000+ sq ft regional mall section could range from $1,000,000-$2,200,000. Costs vary based on rooftop equipment density, number of penetrations, and access constraints. We provide free detailed estimates.',
  },
  {
    question: 'Can you reroof our shopping center without closing stores?',
    answer:
      'Absolutely. We specialize in keeping retail businesses open and operating during roof work. Our crews work in sections, schedule tear-off and noisy operations during off-hours (early mornings, evenings, or overnight for 24-hour tenants), and maintain clear, safe access to all storefronts throughout the project. We have completed shopping center projects across Charlotte without a single day of forced tenant closure.',
  },
  {
    question: 'How do you coordinate with multiple tenants in a shopping center?',
    answer:
      'We work closely with your property management team to develop a tenant communication plan before work begins. This includes advance notification letters, a posted project schedule, designated contact information for concerns, and regular progress updates. We schedule work around high-traffic periods, avoid major sales events like Black Friday, and coordinate individually with tenants who have unique concerns like restaurants or medical offices.',
  },
  {
    question: 'What is the best roofing system for a retail shopping center in Charlotte?',
    answer:
      'For most Charlotte shopping centers, TPO membrane is the top choice — it offers excellent energy efficiency, meets current energy codes, and provides a clean, professional appearance. For strip centers where budget is the primary concern, EPDM provides reliable performance at a lower cost. Modified bitumen works well for centers with heavy rooftop equipment. Visible roof areas on upscale retail benefit from architectural standing seam metal for aesthetic appeal.',
  },
  {
    question: 'How do you handle drainage issues on flat retail roofs?',
    answer:
      'Poor drainage is one of the most common problems on retail flat roofs, leading to ponding water, leaks, and premature membrane failure. We evaluate your entire drainage system during our assessment, including internal drains, scuppers, and gutters. We can add tapered insulation to create proper slope, install additional drains, and ensure all drainage pathways are clear. Proper drainage design is included in every full replacement project.',
  },
  {
    question: 'Can you work around our holiday retail season?',
    answer:
      'Yes, we understand that the holiday season (October through January) is the busiest time for retail. We typically recommend scheduling major roofing work during the slower months of February through September. However, if emergency repairs are needed during the holidays, our crews can perform targeted repairs during off-hours with minimal impact on your business. We plan project timelines around your retail calendar.',
  },
  {
    question: 'What about rooftop signage and HVAC equipment during a reroof?',
    answer:
      'We carefully remove, store, and reinstall rooftop signage, curbing, and equipment supports during the reroofing process. HVAC units are typically set on temporary supports and remain operational throughout the project. We coordinate with your HVAC contractors to ensure units are properly resealed and reconnected. All signage is reinstalled to its original position with proper flashing and waterproofing.',
  },
  {
    question: 'Do you offer roof maintenance programs for retail properties?',
    answer:
      'Yes, we offer preventive maintenance programs designed for retail properties. Our plans include bi-annual inspections (typically spring and fall), drain clearing, sealant touch-ups, and prompt repair of any issues before they become leaks that could damage tenant spaces and inventory. Regular maintenance extends roof life by 5-10 years and helps prevent emergency situations during peak retail periods. We offer portfolio pricing for multi-property owners.',
  },
];

export default function RetailShoppingCenterRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Retail & Shopping Center Roofing Charlotte NC', url: `${SITE_CONFIG.url}/retail-shopping-center-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/retail-shopping-center-roofing-charlotte-nc`}
        pageName="Retail Shopping Center Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.office}
            alt="Retail shopping center roofing Charlotte NC - Best Roofing Now commercial retail roofing project"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-sm font-semibold">Shopping Centers | Retail Stores | Strip Malls</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Retail & Shopping Center Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Professional Roofing for Malls, Strip Centers, Big Box Stores & Retail Properties
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              From SouthPark Mall and Concord Mills to neighborhood strip centers, Charlotte&apos;s retail
              landscape demands roofing contractors who keep businesses open during construction. Best Roofing Now
              delivers professional roofing for retail properties with zero customer disruption and full
              coordination with your tenants and property management.
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
                <ShoppingBag className="w-5 h-5 text-accent-light" />
                Retail Roofing Experts
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-light" />
                Stores Stay Open
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
              Retail Properties We Serve
            </h2>
            <p className="text-gray text-lg">
              From Charlotte&apos;s largest regional malls to corner convenience stores, we have the experience
              and flexibility to handle any retail roofing project while keeping your business running.
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
              Retail Roofing Systems
            </h2>
            <p className="text-gray text-lg">
              We install and maintain all major commercial roofing systems, selecting the right solution for your
              retail property&apos;s size, budget, aesthetic requirements, and tenant mix.
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
                Why Charlotte&apos;s Retail Properties Trust Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Retail roofing is about more than waterproofing — it&apos;s about protecting your tenants&apos;
                businesses, your property&apos;s image, and your investment value. We understand the retail real
                estate world and deliver accordingly.
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
                alt="Retail shopping center roofing project in Charlotte NC - commercial retail roof installation"
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
                    <p className="font-bold text-dark">Retail Roofing Specialists</p>
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
              Retail Roof Instant Estimate
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Get an instant price range for your retail property roofing project — no waiting, no hassle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Membrane Replacement</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,000 - $2,200</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">TPO, EPDM, Modified Bitumen</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Roof Coatings</h3>
              <p className="text-3xl font-bold text-accent mb-2">$800 - $1,000</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Silicone, Acrylic, Elastomeric</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Metal Roofing</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,200 - $1,800</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Standing Seam, Architectural Metal</p>
            </div>
          </div>

          <div className="text-center">
            <EstimateButton variant="white" size="lg" className="text-lg px-10" estimateType="commercial">
              Get Your Instant Retail Roofing Estimate
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
              Retail Roofing Across the Charlotte Region
            </h2>
            <p className="text-gray text-lg">
              We serve shopping centers, strip malls, and retail properties throughout the Greater Charlotte
              market and surrounding communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Retail Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Retail Corridors & Shopping Areas</h3>
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
                Retail & Shopping Center Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about retail and shopping center roofing services in Charlotte NC.
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
              Explore our full range of commercial roofing solutions for Charlotte NC retail properties and beyond.
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
              href="/office-building-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Office Building Roofing
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
        title="Ready to Discuss Your Retail Property Roofing Project?"
        subtitle="Get a free, no-obligation estimate for your shopping center, strip mall, or retail property. Our team will assess your building and provide honest recommendations that protect your investment while keeping your tenants happy and open for business."
      />
    </>
  );
}
