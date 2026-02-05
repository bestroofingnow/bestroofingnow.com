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
  Car,
  Paintbrush,
  Eye,
  Sparkles,
  Timer,
  Wind,
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
  title: 'Auto Dealership Roofing Charlotte NC | Showroom & Service Center Roofs',
  description:
    'Expert auto dealership roofing contractors in Charlotte NC for showrooms, service bays, body shops & car washes. Curb appeal specialists. Quick turnaround to minimize revenue loss. Licensed & insured. Free estimates.',
  keywords: [
    'auto dealership roofing charlotte nc',
    'car dealership roofing charlotte',
    'showroom roofing charlotte nc',
    'service center roofing charlotte',
    'auto dealer roof repair charlotte nc',
    'dealership roof replacement charlotte',
    'car wash roofing charlotte nc',
    'auto body shop roofing charlotte',
    'dealership roofing contractors charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/auto-dealership-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Auto Dealership Roofing Charlotte NC | Showroom & Service Center Roofs | Best Roofing Now',
    description:
      'Expert auto dealership roofing contractors in Charlotte NC for showrooms, service bays, body shops & car washes. Curb appeal specialists with quick turnaround and free estimates.',
    url: `${SITE_CONFIG.url}/auto-dealership-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.office,
        width: 1200,
        height: 630,
        alt: 'Auto dealership roofing Charlotte NC - Best Roofing Now dealership roofing project',
      },
    ],
  },
};

// Auto dealership roofing systems
const dealershipRoofingSystems = [
  {
    icon: Wrench,
    title: 'Standing Seam Metal Roofing',
    description: 'The premier choice for auto dealership showrooms. Clean architectural lines enhance curb appeal, support brand image, and provide 50+ years of low-maintenance durability.',
    href: '/services/metal-roofing',
  },
  {
    icon: Building2,
    title: 'TPO Roofing Systems',
    description: 'Energy-efficient white membrane ideal for large service bay roofs and parts departments. Reduces cooling costs and provides reliable waterproofing for vehicle inventory below.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Factory,
    title: 'Modified Bitumen Roofing',
    description: 'Tough, multi-layer system perfect for service bays and body shops that experience heavy foot traffic, chemical exposure, and equipment loads on the roof.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'EPDM Rubber Roofing',
    description: 'Cost-effective rubber membrane for used car lot offices, detail shops, and support buildings. Excellent weather resistance with a proven track record in Charlotte&apos;s climate.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Thermometer,
    title: 'Built-Up Roofing (BUR)',
    description: 'Traditional multi-ply system offering exceptional puncture resistance for service centers with rooftop HVAC units, exhaust systems, and mechanical equipment.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Clock,
    title: 'Roof Coatings & Restoration',
    description: 'Extend the life of existing dealership roofs without the disruption of a full replacement. Reflective coatings reduce energy bills and refresh building appearance.',
    href: '/services/commercial-roofing',
  },
];

// Types of auto dealership buildings served
const dealershipBuildingTypes = [
  {
    icon: Car,
    title: 'New Car Dealerships',
    description: 'Roofing solutions for brand-new and OEM-certified dealerships, including showroom buildings that must meet manufacturer image standards and brand design guidelines.',
  },
  {
    icon: DollarSign,
    title: 'Used Car Lots',
    description: 'Cost-effective roofing for independent used car dealerships, sales offices, and covered display areas along Charlotte&apos;s major auto corridors.',
  },
  {
    icon: Wrench,
    title: 'Service & Repair Bays',
    description: 'Heavy-duty roofing for high-bay service departments with proper ventilation integration, exhaust system penetrations, and resistance to oil and chemical exposure.',
  },
  {
    icon: Paintbrush,
    title: 'Body Shops & Paint Facilities',
    description: 'Specialized roofing for collision repair centers and paint booths requiring chemical-resistant membranes and proper ventilation system integration.',
  },
  {
    icon: Sparkles,
    title: 'Car Washes & Detail Centers',
    description: 'Moisture-resistant roofing systems for high-humidity environments, including tunnel car washes, self-serve bays, and detailing facilities.',
  },
  {
    icon: Layers,
    title: 'Tire & Auto Parts Stores',
    description: 'Reliable roofing for standalone tire shops, auto parts retailers, and quick-service centers like oil change and brake shops throughout the Charlotte area.',
  },
];

// Why choose us for dealership projects
const whyChooseUs = [
  {
    icon: Eye,
    title: 'Curb Appeal Specialists',
    description: 'We understand that your showroom roof is part of your brand image. We deliver roofing that enhances your dealership&apos;s appearance and helps attract customers.',
  },
  {
    icon: Timer,
    title: 'Quick Turnaround',
    description: 'Every day with a closed showroom or service bay is lost revenue. We offer accelerated timelines, weekend work, and phased installations to keep your business open.',
  },
  {
    icon: Wind,
    title: 'Service Bay Ventilation Experts',
    description: 'Experienced with exhaust fan integration, ventilation ductwork penetrations, and air handling systems required by service departments and body shops.',
  },
  {
    icon: Award,
    title: 'OEM Brand Standards',
    description: 'Familiar with manufacturer facility image programs from major brands. We deliver roofing that meets the design guidelines your franchise agreement requires.',
  },
  {
    icon: DollarSign,
    title: 'Revenue-Conscious Scheduling',
    description: 'We schedule work to minimize impact during your peak sales periods and coordinate with your managers to protect vehicle inventory from debris and dust.',
  },
  {
    icon: Users,
    title: 'Multi-Location Experience',
    description: 'We work with dealership groups operating multiple locations across Charlotte, providing consistent quality and pricing for all your facilities.',
  },
];

// Charlotte auto dealership areas
const dealershipAreas = [
  'Independence Blvd (Auto Row)',
  'South Blvd Corridor',
  'I-77 North (Lake Norman)',
  'I-85 Corridor (Concord)',
  'University City / UNCC Area',
  'Pineville / Carolina Place',
  'Gastonia / US-321',
  'East Independence',
  'North Tryon Street',
  'Albemarle Road',
  'Kannapolis / Dale Earnhardt Blvd',
  'Rock Hill, SC / Cherry Road',
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

// FAQs about auto dealership roofing
const faqs = [
  {
    question: 'What is the best roofing material for an auto dealership showroom in Charlotte?',
    answer:
      'For auto dealership showrooms in Charlotte, standing seam metal roofing is the top choice. It delivers the clean, modern architectural lines that enhance curb appeal and brand image — critical for attracting customers. Standing seam metal also meets OEM facility image standards from manufacturers like Ford, Toyota, Honda, and BMW. It offers 50+ years of durability, excellent wind resistance for Charlotte storms, and virtually no maintenance. For showroom roofs visible from the road, the aesthetic upgrade pays for itself in customer perception and brand consistency.',
  },
  {
    question: 'How much does auto dealership roof replacement cost in Charlotte NC?',
    answer:
      'Auto dealership roof replacement costs in Charlotte depend on the building type and material. Showroom roofs using standing seam metal typically run $10-$18 per square foot installed. Service bay and parts department flat roofs using TPO or modified bitumen cost $6-$12 per square foot. A typical dealership complex with a 15,000 sq ft showroom and 20,000 sq ft service area might cost $250,000-$500,000 total. We offer free detailed estimates and can phase work to spread costs across budget periods.',
  },
  {
    question: 'Can you roof our dealership without shutting down sales or service operations?',
    answer:
      'Absolutely. We specialize in keeping dealerships fully operational during roof work. For showrooms, we use dust barriers, protective coverings for vehicles, and schedule the noisiest work before or after business hours. For service bays, we work in sections so that only a portion of the service department is affected at any time. We coordinate directly with your general manager and service director to plan around your busiest days and protect vehicle inventory throughout the project.',
  },
  {
    question: 'How do you protect our vehicle inventory during roofing work?',
    answer:
      'Vehicle inventory protection is a top priority on every dealership project. We establish exclusion zones around active work areas, use debris nets and tarps to prevent material from reaching vehicles, and move our material staging areas away from display lots. Before work begins, we create a detailed vehicle protection plan with your inventory manager. At the end of each work day, our crew performs a cleanup sweep and inspection. We carry full liability coverage specifically for situations involving vehicle inventory.',
  },
  {
    question: 'Can you integrate our dealership signage and branding into the new roof design?',
    answer:
      'Yes, we regularly coordinate with sign companies and dealership brand consultants to integrate signage mounting, channel letter supports, and illuminated sign connections into the roofing system. We ensure sign penetrations are properly flashed and waterproofed, electrical conduit is properly routed, and the roof membrane is not compromised by sign installation. For major rebrands or franchise changes, we can modify the roof structure to accommodate new signage requirements while maintaining watertight integrity.',
  },
  {
    question: 'What are the special roofing considerations for service bays and body shops?',
    answer:
      'Service bays and body shops have unique roofing requirements beyond standard commercial buildings. Exhaust fan and ventilation system penetrations must be properly flashed and sealed. The roof membrane must resist exposure to oil, solvents, and automotive chemicals that can degrade certain materials — this is why we often recommend modified bitumen or PVC for these areas. High-bay ceilings mean the roof deck handles more thermal movement. We also ensure proper drainage around overhead door headers and loading areas.',
  },
  {
    question: 'When is the best time to re-roof an auto dealership in Charlotte?',
    answer:
      'The ideal time to re-roof a Charlotte dealership depends on your sales cycle. Most dealerships find that January through March offers the lowest impact on sales, as this is traditionally a slower period for car sales in the Charlotte market. However, weather conditions are also a factor — Charlotte&apos;s spring and fall offer the most predictable weather for roofing work. We can also schedule work to avoid major sales events like year-end clearance, new model launches, and holiday promotions. We work with your management team to find the optimal timing.',
  },
  {
    question: 'Do you handle insurance claims for dealership roof damage from Charlotte storms?',
    answer:
      'Yes, we have extensive experience working with insurance companies on auto dealership roof claims. Charlotte experiences frequent hailstorms and high winds that damage dealership roofs — both the building roofs and vehicles on the lot. We provide detailed damage assessments, photo documentation, and repair estimates that insurance adjusters need. We can meet with your adjuster on-site, supplement claims when initial assessments are insufficient, and coordinate the repair timeline with your insurance company. We also help document vehicle inventory damage separately from building claims.',
  },
];

export default function AutoDealershipRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Auto Dealership Roofing Charlotte NC', url: `${SITE_CONFIG.url}/auto-dealership-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/auto-dealership-roofing-charlotte-nc`}
        pageName="Auto Dealership Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.office}
            alt="Auto dealership roofing Charlotte NC - Best Roofing Now dealership roofing project"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Car className="w-4 h-4" />
              <span className="text-sm font-semibold">Auto Dealerships | Service Centers | Car Washes</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Auto Dealership Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Showroom-Ready Roofing That Protects Your Brand & Your Bottom Line
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Charlotte&apos;s auto dealership corridor stretches from Independence Blvd to South Blvd, I-77 to I-85 —
              and every dealership needs a roof that looks as sharp as the vehicles on the lot. Best Roofing Now
              specializes in auto dealership roofing with quick turnarounds that minimize revenue loss, curb appeal
              that attracts customers, and durable systems that protect your investment.
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
                <Eye className="w-5 h-5 text-accent-light" />
                Curb Appeal Experts
              </span>
              <span className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-accent-light" />
                Quick Turnaround
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

      {/* Dealership Building Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Auto Dealership Facilities We Serve
            </h2>
            <p className="text-gray text-lg">
              From gleaming new car showrooms on Independence Blvd to high-volume service bays and detail centers,
              we deliver roofing solutions tailored to every type of automotive facility.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealershipBuildingTypes.map((type) => (
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
              Auto Dealership Roofing Systems
            </h2>
            <p className="text-gray text-lg">
              We install roofing systems that balance showroom aesthetics with the heavy-duty performance
              your service bays and support buildings demand — all at price points that make financial sense.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealershipRoofingSystems.map((system) => (
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
                Why Charlotte&apos;s Auto Dealerships Trust Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Your dealership&apos;s roof is more than weather protection — it&apos;s part of your customer&apos;s
                first impression. A worn, stained, or leaking roof sends the wrong message. We deliver roofing
                that enhances your brand while protecting your most valuable assets: your inventory and your reputation.
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
                alt="Auto dealership roofing project in Charlotte NC - showroom roof installation"
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
                    <p className="font-bold text-dark">Dealership Specialists</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.roofsInstalled}+ Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dealership Instant Estimate Section */}
      <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-bold">CHARLOTTE&apos;S FIRST</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Auto Dealership Roof Instant Estimate
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Get an instant price range for your dealership roofing project — no waiting, no hassle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Showroom Metal Roof</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,200 - $2,000</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Standing Seam, Architectural Metal</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Service Bay Flat Roof</h3>
              <p className="text-3xl font-bold text-accent mb-2">$800 - $1,400</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">TPO, Modified Bitumen, EPDM</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Roof Coatings</h3>
              <p className="text-3xl font-bold text-accent mb-2">$600 - $900</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Silicone, Acrylic, Elastomeric</p>
            </div>
          </div>

          <div className="text-center">
            <EstimateButton variant="white" size="lg" className="text-lg px-10" estimateType="commercial">
              Get Your Instant Dealership Estimate
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
              Auto Dealership Roofing Across the Charlotte Region
            </h2>
            <p className="text-gray text-lg">
              We serve auto dealerships throughout the Charlotte metro area, from the Independence Blvd auto corridor
              to dealership rows along I-77, I-85, and South Blvd.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Dealership Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Auto Dealer Corridors</h3>
              <div className="flex flex-wrap gap-2">
                {dealershipAreas.map((area) => (
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
                Auto Dealership Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about auto dealership roofing services in Charlotte NC.
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
              href="/metal-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Metal Roofing Charlotte
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
              href="/industrial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Industrial Roofing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/insurance-claim-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Insurance Claim Roofing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/commercial-roofing-contractors-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing Contractors
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="auto-dealership-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/auto-dealership-roofing-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Auto Dealership Roofing"

      />

      <CTASection
        title="Ready to Discuss Your Auto Dealership Roofing Project?"
        subtitle="Get a free, no-obligation estimate for your showroom, service center, or auto facility. Our team understands that every day of disruption costs you sales — we deliver quality roofing on accelerated timelines that keep your doors open and your customers coming in."
      />
    </>
  );
}
