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
  Cog,
  FlaskConical,
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
  title: 'Manufacturing Plant Roofing Charlotte NC | Factories & Processing Facilities | Best Roofing Now',
  description:
    'Expert manufacturing plant roofing contractors in Charlotte NC. Specializing in factories, processing facilities & production centers. Chemical-resistant, OSHA-compliant roofing. Licensed & insured. Free estimates.',
  keywords: [
    'manufacturing plant roofing charlotte nc',
    'factory roofing charlotte nc',
    'manufacturing roof repair charlotte',
    'processing facility roofing charlotte nc',
    'production center roofing charlotte',
    'manufacturing roof replacement charlotte nc',
    'industrial manufacturing roofing charlotte',
    'chemical resistant roofing charlotte nc',
    'manufacturing roofing contractors charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/manufacturing-plant-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Manufacturing Plant Roofing Charlotte NC | Factories & Processing Facilities | Best Roofing Now',
    description:
      'Expert manufacturing plant roofing contractors in Charlotte NC. Chemical-resistant, OSHA-compliant roofing for factories and processing facilities. Licensed & insured with free estimates.',
    url: `${SITE_CONFIG.url}/manufacturing-plant-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.warehouse,
        width: 1200,
        height: 630,
        alt: 'Manufacturing plant roofing Charlotte NC - Best Roofing Now factory roofing project',
      },
    ],
  },
};

// Manufacturing roofing systems
const manufacturingRoofingSystems = [
  {
    icon: Wrench,
    title: 'Metal Roofing Systems',
    description: 'Standing seam and corrugated metal roofing for manufacturing plants. Superior durability against vibration, heat, and industrial stress. 40+ year lifespan with minimal maintenance.',
    href: '/services/metal-roofing',
  },
  {
    icon: Shield,
    title: 'EPDM Rubber Roofing',
    description: 'Synthetic rubber membrane with excellent resistance to extreme temperatures, UV exposure, and weathering. Ideal for large manufacturing roofs requiring long-term reliability.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Layers,
    title: 'Built-Up Roofing (BUR)',
    description: 'Multi-layer asphalt systems offering exceptional durability for heavy manufacturing environments. Excellent foot traffic resistance for maintenance access to rooftop equipment.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Thermometer,
    title: 'Spray Polyurethane Foam',
    description: 'Seamless insulation and waterproofing system ideal for manufacturing plants with irregular roof shapes, multiple penetrations, and high energy costs.',
    href: '/services/commercial-roofing',
  },
  {
    icon: FlaskConical,
    title: 'PVC Roofing (Chemical Resistant)',
    description: 'Superior chemical resistance makes PVC the top choice for facilities with chemical exposure, grease exhausts, and process emissions that can damage other roof membranes.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Clock,
    title: 'Industrial Roof Coatings',
    description: 'High-performance coatings that restore and protect aging manufacturing roofs. Chemical-resistant formulas available for harsh industrial environments.',
    href: '/services/commercial-roofing',
  },
];

// Types of manufacturing buildings served
const manufacturingBuildingTypes = [
  {
    icon: Factory,
    title: 'Heavy Manufacturing Plants',
    description: 'Roofing for large-scale manufacturing operations like Siemens Energy and heavy equipment producers. Systems designed to handle vibration, heat, and heavy rooftop loads.',
  },
  {
    icon: Cog,
    title: 'Light Manufacturing & Assembly',
    description: 'Roofing solutions for assembly plants, fabrication shops, and light industrial manufacturing facilities throughout the Charlotte metro corridor.',
  },
  {
    icon: Building2,
    title: 'Food Processing Facilities',
    description: 'FDA and USDA-compliant roofing for food manufacturing and processing plants. Systems meeting sanitary requirements with no risk of contamination.',
  },
  {
    icon: FlaskConical,
    title: 'Pharmaceutical Manufacturing',
    description: 'Clean-room compatible roofing systems for pharmaceutical production facilities. Sealed systems that prevent particulate intrusion and maintain controlled environments.',
  },
  {
    icon: Thermometer,
    title: 'Chemical Processing Plants',
    description: 'Chemically resistant roofing for facilities handling acids, solvents, and industrial chemicals. PVC and specialty coatings that withstand harsh chemical exposure.',
  },
  {
    icon: Wrench,
    title: 'Automotive Parts Manufacturing',
    description: 'Roofing for the Charlotte region&apos;s automotive parts suppliers and manufacturing facilities. Systems designed for high-heat environments and heavy equipment vibration.',
  },
];

// Why choose us for manufacturing projects
const whyChooseUs = [
  {
    icon: FlaskConical,
    title: 'Chemical Exposure Expertise',
    description: 'We specify roofing systems rated for chemical exposure from manufacturing processes. PVC, specialty coatings, and chemical-resistant flashings protect your investment.',
  },
  {
    icon: Thermometer,
    title: 'High-Heat Environment Solutions',
    description: 'Manufacturing plants generate extreme heat. We install systems designed to withstand thermal cycling and reflective surfaces that reduce interior temperatures.',
  },
  {
    icon: Ruler,
    title: 'Heavy Load Engineering',
    description: 'Manufacturing roofs carry heavy HVAC, exhaust systems, and process equipment. We engineer solutions that properly distribute loads without compromising waterproofing.',
  },
  {
    icon: Shield,
    title: 'OSHA Compliance',
    description: 'Full OSHA compliance for all manufacturing site work. Our crews hold OSHA 30 certifications, follow lockout/tagout procedures, and coordinate with your EHS team.',
  },
  {
    icon: Clock,
    title: 'Production Schedule Coordination',
    description: 'We work around your production schedule with night, weekend, and holiday crews. Phased installation plans that never require a full production shutdown.',
  },
  {
    icon: Users,
    title: 'Dedicated Project Managers',
    description: 'Single point of contact who coordinates with your plant manager and maintenance team. Safety briefings, daily progress reports, and clear communication throughout.',
  },
];

// Charlotte manufacturing areas served
const manufacturingAreas = [
  'I-85 Corridor Industrial',
  'Steele Creek Manufacturing',
  'Mount Holly Industrial',
  'Gastonia Manufacturing District',
  'Concord / Kannapolis',
  'Statesville Industrial',
  'Airport / CLT Area',
  'Brookshire Industrial',
  'Arrowood Industrial',
  'Freedom Drive Corridor',
  'Northlake Business Park',
  'Pineville Industrial',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Mount Holly', href: '/locations/mount-holly-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Statesville', href: '/locations/statesville-nc' },
  { name: 'Kannapolis', href: '/locations/kannapolis-nc' },
];

// FAQs about manufacturing plant roofing
const faqs = [
  {
    question: 'What roofing system is best for manufacturing plants with chemical exposure?',
    answer:
      'For manufacturing facilities with chemical exposure, PVC (polyvinyl chloride) membrane roofing is typically our top recommendation. PVC has superior resistance to chemicals, oils, greases, and industrial byproducts that can degrade other roofing materials. For facilities with heavy acid exposure, we may recommend specialty coatings or stainless steel flashings. We always start with a chemical exposure assessment to understand exactly what your roof will face and specify materials accordingly. Facilities producing caustic fumes or exhaust should also consider enhanced ventilation curb details.',
  },
  {
    question: 'How do you handle roofing on manufacturing plants that operate 24/7?',
    answer:
      'Many Charlotte-area manufacturing plants run continuous operations, and we are fully equipped to work around your production schedule. We develop phased installation plans that allow us to complete sections of the roof without disrupting active production areas below. Our crews are available nights, weekends, and holidays. We use vibration-dampening equipment near sensitive production areas and coordinate with your plant manager on material deliveries to avoid blocking loading docks or truck routes. Most of our 24/7 manufacturing clients experience zero production downtime during re-roofing.',
  },
  {
    question: 'How much does manufacturing plant roof replacement cost in Charlotte NC?',
    answer:
      'Manufacturing plant roof replacement costs in Charlotte vary based on size, system, and complexity. EPDM and TPO membrane systems typically range from $4 to $9 per square foot. Metal roofing systems run $8 to $16 per square foot. PVC systems for chemical-resistant applications range from $6 to $12 per square foot. A 100,000 sq ft manufacturing plant might cost $400,000-$1,200,000 depending on the system selected, existing roof condition, and complexity of rooftop penetrations. We provide detailed estimates and can phase projects across multiple budget years if needed.',
  },
  {
    question: 'Can your roofing systems handle heavy rooftop equipment loads?',
    answer:
      'Yes, manufacturing plants often have significant rooftop equipment including large RTU HVAC units, exhaust fans, process ventilation, cooling towers, and piping systems. We engineer our roofing systems to accommodate existing and planned equipment loads. This includes reinforced decking at equipment locations, properly engineered curbs and supports, and walk pads for maintenance access. Before installation, we conduct a structural assessment to ensure the roof deck can support both the roofing system and equipment. We also coordinate with mechanical contractors on any equipment that needs to be temporarily relocated during re-roofing.',
  },
  {
    question: 'What OSHA requirements apply to roofing work on manufacturing plants?',
    answer:
      'Roofing work on manufacturing plants falls under OSHA General Industry (29 CFR 1910) and Construction (29 CFR 1926) standards. Our crews maintain OSHA 30 certifications, and we implement comprehensive safety plans including fall protection systems, hazard communication protocols, lockout/tagout procedures for rooftop equipment, and hot work permits when applicable. We participate in your plant&apos;s safety orientation programs and daily safety briefings. Our EMR (Experience Modification Rate) is maintained well below industry average, and we carry the elevated insurance coverage that manufacturing facilities require.',
  },
  {
    question: 'How do you manage ventilation and exhaust penetrations on manufacturing roofs?',
    answer:
      'Manufacturing roofs typically have far more penetrations than standard commercial buildings, including exhaust stacks, process vents, makeup air intakes, and pipe supports. Each penetration is a potential leak point, so we use factory-fabricated flashings, multiple layers of membrane reinforcement, and chemical-resistant sealants appropriate for the exhaust type. For high-temperature exhaust stacks, we install heat shields and use high-temp rated flashings. We document every penetration with photos and details for your maintenance team, and our preventive maintenance programs include bi-annual inspection of all penetration flashings.',
  },
  {
    question: 'Do you offer preventive maintenance programs for manufacturing facilities?',
    answer:
      'Yes, our preventive maintenance programs are especially valuable for manufacturing facilities where a roof leak can damage expensive equipment, halt production, or contaminate product. Our manufacturing maintenance program includes bi-annual inspections (spring and fall), drain clearing, flashing inspection around all penetrations and equipment curbs, membrane condition assessment, and a detailed report with photos. We identify and address small issues before they become expensive emergency repairs. Most manufacturing clients find that preventive maintenance extends their roof life by 5-10 years and reduces total cost of ownership significantly.',
  },
  {
    question: 'Can manufacturing roofs support solar panel installations?',
    answer:
      'Many manufacturing facilities are ideal candidates for solar installations due to their large, unobstructed roof areas. Charlotte&apos;s manufacturing plants can often generate 500kW to 2MW+ from rooftop solar, significantly offsetting energy costs. We work with solar contractors to ensure proper roof system specification, including appropriate load distribution, waterproof penetrations, and warranty compatibility. If you are planning solar within the next 5 years, we can install a roof system specifically designed to support and integrate with solar arrays, potentially saving significant costs on the solar installation.',
  },
];

export default function ManufacturingPlantRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Manufacturing Plant Roofing Charlotte NC', url: `${SITE_CONFIG.url}/manufacturing-plant-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/manufacturing-plant-roofing-charlotte-nc`}
        pageName="Manufacturing Plant Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.warehouse}
            alt="Manufacturing plant roofing Charlotte NC - Best Roofing Now factory roofing project"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Factory className="w-4 h-4" />
              <span className="text-sm font-semibold">Manufacturing Plants | Processing Facilities | Production Centers</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Manufacturing Plant Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Heavy-Duty Roofing for Factories, Processing Facilities &amp; Production Centers
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              The Charlotte metro area is a major manufacturing hub, home to companies like Siemens Energy, Honeywell,
              and hundreds of production facilities along the I-85 and I-77 corridors. Best Roofing Now specializes in
              manufacturing plant roofing with chemical-resistant systems, OSHA-compliant crews, and production schedule
              coordination that keeps your plant running.
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
                <Shield className="w-5 h-5 text-accent-light" />
                OSHA Compliant Crews
              </span>
              <span className="flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-accent-light" />
                Chemical-Resistant Systems
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed &amp; Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Manufacturer Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Building Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Manufacturing Facilities We Serve
            </h2>
            <p className="text-gray text-lg">
              From heavy manufacturing plants along the I-85 corridor to food processing facilities in Steele Creek,
              we have the expertise to handle the demanding roofing needs of every manufacturing operation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manufacturingBuildingTypes.map((type) => (
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
              Manufacturing Roofing Systems
            </h2>
            <p className="text-gray text-lg">
              We install and maintain roofing systems engineered for manufacturing environments, selecting the optimal
              solution based on your facility&apos;s chemical exposure, heat levels, equipment loads, and production requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manufacturingRoofingSystems.map((system) => (
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
                Why Charlotte&apos;s Manufacturers Trust Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Manufacturing plant roofing is among the most demanding in the commercial roofing industry. Chemical
                exposure, extreme heat, heavy equipment loads, and the need to maintain production schedules all require
                a contractor with specialized expertise. We deliver on every requirement.
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
                alt="Manufacturing plant roofing project in Charlotte NC - factory roof installation"
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
                    <p className="font-bold text-dark">Manufacturing Specialists</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.roofsInstalled}+ Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Instant Estimate Section */}
      <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-bold">CHARLOTTE&apos;S FIRST</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Manufacturing Roof Instant Estimate
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Get an instant price range for your manufacturing plant roofing project — no waiting, no hassle.
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
              <p className="text-white/60 text-xs mt-2">EPDM, PVC, TPO, BUR</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Spray Foam &amp; Coatings</h3>
              <p className="text-3xl font-bold text-accent mb-2">$800 - $1,200</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">SPF, Silicone, Industrial Grade</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Metal Roofing</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,000 - $1,800</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Standing Seam, Corrugated, R-Panel</p>
            </div>
          </div>

          <div className="text-center">
            <EstimateButton variant="white" size="lg" className="text-lg px-10" estimateType="commercial">
              Get Your Instant Manufacturing Estimate
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
              Manufacturing Roofing Across the Charlotte Region
            </h2>
            <p className="text-gray text-lg">
              We serve manufacturing plants and production facilities throughout the Greater Charlotte industrial corridors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Manufacturing Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Manufacturing Corridors</h3>
              <div className="flex flex-wrap gap-2">
                {manufacturingAreas.map((area) => (
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
                Manufacturing Plant Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about manufacturing plant roofing services in Charlotte NC.
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
              Related Industrial &amp; Commercial Roofing Services
            </h2>
            <p className="text-gray">
              Explore our full range of industrial, commercial, and specialty roofing solutions in Charlotte NC.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/industrial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Industrial Roofing Charlotte
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
              href="/commercial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing Charlotte
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
        title="Ready to Discuss Your Manufacturing Plant Roofing Project?"
        subtitle="Get a free, no-obligation estimate for your factory, processing facility, or production center. Our team will assess your building and provide honest recommendations tailored to your chemical exposure, production schedule, and budget."
      />
    </>
  );
}
