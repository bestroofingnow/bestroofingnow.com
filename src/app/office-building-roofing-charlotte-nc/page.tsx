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
  title: 'Office Building Roofing Charlotte NC | Corporate & Commercial Roofs | Best Roofing Now',
  description:
    'Expert office building roofing contractors in Charlotte NC. Specializing in high-rise towers, corporate campuses, Class A office, and multi-tenant buildings in Uptown, SouthPark & Ballantyne. Free estimates.',
  keywords: [
    'office building roofing charlotte nc',
    'corporate campus roofing charlotte',
    'high rise roof repair charlotte nc',
    'commercial office roofing charlotte',
    'class a office building roofing charlotte nc',
    'office park roofing charlotte',
    'uptown charlotte roofing contractor',
    'ballantyne office roofing',
    'southpark office building roofing charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/office-building-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Office Building Roofing Charlotte NC | Corporate & Commercial Roofs | Best Roofing Now',
    description:
      'Expert office building roofing contractors in Charlotte NC. Specializing in high-rise towers, corporate campuses & multi-tenant office buildings. Licensed & insured with free estimates.',
    url: `${SITE_CONFIG.url}/office-building-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.office,
        width: 1200,
        height: 630,
        alt: 'Office building roofing Charlotte NC - Best Roofing Now commercial office roofing project',
      },
    ],
  },
};

// Office building roofing systems
const roofingSystems = [
  {
    icon: Building2,
    title: 'TPO Roofing Systems',
    description: 'Energy-efficient single-ply membrane ideal for office building flat roofs. Reflective white surface meets Charlotte energy codes and reduces cooling costs for tenants.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'PVC Roofing Systems',
    description: 'Premium single-ply membrane offering superior chemical and grease resistance, ideal for office buildings with rooftop restaurants, mechanical rooms, or exhaust systems.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Factory,
    title: 'EPDM Rubber Roofing',
    description: 'Time-tested rubber membrane for corporate campuses and office parks. Excellent for large, multi-building portfolios requiring consistent, cost-effective roofing.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Metal Roofing Systems',
    description: 'Architectural standing seam metal for office buildings where aesthetic curb appeal matters. Popular for Class A properties in Uptown, SouthPark, and Ballantyne.',
    href: '/services/metal-roofing',
  },
  {
    icon: Thermometer,
    title: 'Green Roofing Systems',
    description: 'Vegetated roof systems for LEED-certified office buildings pursuing sustainability goals. Reduces stormwater runoff, improves insulation, and creates rooftop amenity spaces.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Clock,
    title: 'Roof Coatings & Restoration',
    description: 'Reflective coatings that extend existing office building roof life by 10-15 years, avoiding the cost and tenant disruption of a full replacement.',
    href: '/services/commercial-roofing',
  },
];

// Types of office buildings served
const buildingTypes = [
  {
    icon: Building2,
    title: 'High-Rise Office Towers',
    description: 'Specialized roofing for Charlotte\u0027s Uptown high-rises, including wind uplift engineering, multi-story access coordination, and crane logistics for material delivery.',
  },
  {
    icon: Layers,
    title: 'Corporate Campuses',
    description: 'Multi-building roofing programs for corporate campuses like those in Ballantyne and University Research Park, with consistent quality across every structure.',
  },
  {
    icon: Award,
    title: 'Class A Office Buildings',
    description: 'Premium roofing systems for Class A office properties where aesthetic standards, energy performance, and long-term warranty coverage are non-negotiable.',
  },
  {
    icon: Users,
    title: 'Multi-Tenant Office Buildings',
    description: 'Roofing for multi-tenant office buildings requiring careful coordination with property management, individual tenants, and shared building systems.',
  },
  {
    icon: Ruler,
    title: 'Professional & Office Parks',
    description: 'Cost-effective roofing solutions for suburban office parks and professional complexes throughout Charlotte\u0027s major business corridors.',
  },
  {
    icon: Zap,
    title: 'Coworking & Flex Space',
    description: 'Modern roofing for Charlotte\u0027s growing coworking and flexible office spaces, often in renovated buildings requiring creative roofing solutions.',
  },
];

// Why choose us for office building projects
const whyChooseUs = [
  {
    icon: Building2,
    title: 'High-Rise Experienced',
    description: 'We have the equipment, safety training, and logistics expertise for multi-story office buildings, including crane operations and helicopter deliveries when needed.',
  },
  {
    icon: Clock,
    title: 'Minimal Tenant Disruption',
    description: 'We schedule noisy work during off-hours and weekends, coordinate with your property management, and keep common areas clean and professional throughout.',
  },
  {
    icon: Award,
    title: 'LEED & Energy Code Compliant',
    description: 'We install roofing systems that meet Charlotte\u0027s energy codes and LEED requirements, helping your building achieve and maintain green certifications.',
  },
  {
    icon: Shield,
    title: 'Manufacturer Certified',
    description: 'Factory-certified installers for GAF, Carlisle, Firestone, and Sika Sarnafil, providing NDL warranty coverage for your investment.',
  },
  {
    icon: DollarSign,
    title: 'Portfolio Pricing',
    description: 'Volume discounts for property owners and management companies with multiple office buildings. Standardized quality across your entire Charlotte portfolio.',
  },
  {
    icon: Users,
    title: 'Property Manager Coordination',
    description: 'We work seamlessly with property management teams, providing detailed project schedules, tenant notifications, and professional progress reporting.',
  },
];

// Charlotte office areas served
const serviceAreas = [
  'Uptown Charlotte/Center City',
  'SouthPark Office District',
  'Ballantyne Corporate Park',
  'University City/Research Park',
  'Mooresville/Lake Norman Business',
  'South End/LoSo',
  'NorthPark/Northlake',
  'Midtown/Elizabeth',
  'Arrowood/Whitehall Corporate',
  'I-485/Rea Road Corridor',
  'Matthews/Mint Hill Business',
  'Concord/Kannapolis Office Parks',
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

// FAQs about office building roofing
const faqs = [
  {
    question: 'How much does office building roof replacement cost in Charlotte NC?',
    answer:
      'Office building roof replacement in Charlotte typically costs $6 to $14 per square foot for membrane systems (TPO, PVC, EPDM) and $12 to $22 per square foot for architectural metal or green roofing systems. A typical 30,000 sq ft Class A office building might cost $180,000-$420,000. High-rise buildings in Uptown Charlotte carry additional costs for crane logistics, safety rigging, and extended timelines. We provide free, detailed estimates for any office building project.',
  },
  {
    question: 'Can you reroof our office building without disrupting tenants?',
    answer:
      'Yes, minimizing tenant disruption is central to how we approach office building projects. We schedule tear-off and other noisy work during evenings, nights, or weekends. During business hours, we focus on quiet work like membrane welding and detailing. We coordinate elevator usage for material transport in high-rises, keep common areas and entrances clean, and provide advance notice to all tenants through your property management team.',
  },
  {
    question: 'What roofing system is best for Charlotte office buildings?',
    answer:
      'For most Charlotte office buildings, we recommend TPO membrane roofing for its energy efficiency, which helps meet Charlotte\u0027s commercial energy codes. For Class A properties where aesthetics matter, architectural standing seam metal provides a premium look. PVC is excellent for buildings with rooftop restaurants or heavy HVAC exhaust. For LEED-certified buildings, green roofing systems add insulation value and sustainability credentials. We recommend the best system based on your building\u0027s specific needs.',
  },
  {
    question: 'Do you work with office building property management companies?',
    answer:
      'Yes, we regularly partner with property management companies across the Charlotte market. We understand PM workflows, provide standardized reporting and documentation, coordinate with on-site building engineers, and offer portfolio-wide pricing for multi-property owners. Our dedicated commercial project managers serve as your single point of contact, providing the professional communication and accountability that property managers require.',
  },
  {
    question: 'Can your roofing systems help our office building meet LEED requirements?',
    answer:
      'Absolutely. We install Energy Star-rated roofing systems with high Solar Reflectance Index (SRI) values that contribute to LEED credits. We can also install green roof systems for stormwater management credits, use recycled-content materials, and provide documentation for waste diversion during tear-off. Our team is familiar with LEED v4.1 requirements and can help your project earn roofing-related credits.',
  },
  {
    question: 'How do you handle roofing on high-rise office buildings in Uptown Charlotte?',
    answer:
      'High-rise office roofing requires specialized logistics. We coordinate crane permits and lane closures with the City of Charlotte, schedule material hoisting during off-peak traffic hours, and use dedicated freight elevators when available. Our crews are trained in high-rise safety protocols, including fall protection systems certified for your building. We carry elevated insurance coverage specifically for high-rise projects.',
  },
  {
    question: 'What about the aesthetic appearance of our office building roof?',
    answer:
      'For office buildings, roof aesthetics matter — especially when the roof is visible from upper floors of adjacent buildings or from the street. We offer architectural metal roofing in a range of colors and profiles, clean white membrane systems, and green roof options that create attractive rooftop views. We also ensure all rooftop equipment is properly screened and flashings are clean and color-matched.',
  },
  {
    question: 'Do you offer roof maintenance programs for office building portfolios?',
    answer:
      'Yes, we offer comprehensive preventive maintenance programs tailored to office building portfolios. Our plans include bi-annual inspections, drain clearing, sealant maintenance, and detailed condition reports with photos. Regular maintenance extends roof life by 5-10 years, prevents tenant disruption from unexpected leaks, and is often required to maintain manufacturer warranty coverage. We offer multi-building portfolio pricing for property management companies.',
  },
];

export default function OfficeBuildingRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Office Building Roofing Charlotte NC', url: `${SITE_CONFIG.url}/office-building-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/office-building-roofing-charlotte-nc`}
        pageName="Office Building Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.office}
            alt="Office building roofing Charlotte NC - Best Roofing Now commercial office roofing project"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Office Buildings | Corporate Campuses | Financial Centers</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Office Building Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Professional Roofing for Corporate Towers, Office Parks & Class A Properties
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              As the nation&apos;s second-largest banking center, Charlotte is defined by its skyline of office
              towers and sprawling corporate campuses. Best Roofing Now delivers professional-grade roofing for
              Uptown high-rises, Ballantyne corporate parks, SouthPark office buildings, and everything in between
              — with minimal disruption to your tenants.
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
                <Building2 className="w-5 h-5 text-accent-light" />
                High-Rise Capable
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                LEED Compliant Systems
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
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
              Office Buildings We Serve
            </h2>
            <p className="text-gray text-lg">
              From Uptown Charlotte&apos;s tallest towers to suburban office parks in Ballantyne and University City,
              we have the expertise to handle any commercial office roofing project.
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
              Office Building Roofing Systems
            </h2>
            <p className="text-gray text-lg">
              We install roofing systems that meet the demanding standards of Charlotte&apos;s commercial office
              market — balancing energy performance, aesthetics, and long-term value.
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
                Why Charlotte&apos;s Office Buildings Trust Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Office building roofing requires a contractor who understands the commercial real estate world:
                tenant coordination, property manager expectations, aesthetic standards, and the financial impact
                of every roofing decision on your asset&apos;s value.
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
                alt="Office building roofing project in Charlotte NC - commercial office roof installation"
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
                    <p className="font-bold text-dark">Office Roofing Specialists</p>
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
              Office Building Roof Instant Estimate
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Get an instant price range for your office building roofing project — no waiting, no hassle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Membrane Replacement</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,100 - $2,400</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">TPO, PVC, EPDM Systems</p>
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
                <Factory className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Metal Roofing</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,400 - $2,200</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Standing Seam, Architectural Metal</p>
            </div>
          </div>

          <div className="text-center">
            <EstimateButton variant="white" size="lg" className="text-lg px-10" estimateType="commercial">
              Get Your Instant Office Building Estimate
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
              Office Building Roofing Across the Charlotte Region
            </h2>
            <p className="text-gray text-lg">
              We serve office buildings throughout the Greater Charlotte market, from Uptown&apos;s financial
              district to the region&apos;s suburban corporate parks.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Office Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Office Districts & Business Parks</h3>
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
                Office Building Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about office building roofing services in Charlotte NC.
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
              Explore our full range of commercial roofing solutions for Charlotte NC office buildings and beyond.
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
              href="/healthcare-facility-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Healthcare Facility Roofing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/retail-shopping-center-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Retail & Shopping Center Roofing
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
        title="Ready to Discuss Your Office Building Roofing Project?"
        subtitle="Get a free, no-obligation estimate for your office tower, corporate campus, or multi-tenant office building. Our team will assess your property and provide honest recommendations that protect your investment and minimize tenant disruption."
      />
    </>
  );
}
