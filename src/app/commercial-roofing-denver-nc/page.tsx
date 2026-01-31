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
  Wrench,
  Building2,
  Factory,
  Warehouse,
  MapPin,
  FileCheck,
  Layers,
  Thermometer,
  DollarSign,
  Waves,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Commercial Roofing Denver NC | TPO & Flat Roof | Best Roofing Now',
  description:
    'Expert commercial roofing in Denver NC. TPO, EPDM, flat roofs, metal for Lake Norman businesses. Lincoln County specialists. BBB A+ rated. Free estimates!',
  keywords: [
    'commercial roofing denver nc',
    'commercial roofing contractors denver nc',
    'commercial roof repair denver nc',
    'flat roof contractors denver nc',
    'tpo roofing denver nc',
    'epdm roofing denver nc',
    'industrial roofing denver nc',
    'warehouse roofing denver nc',
    'office building roofing denver',
    'commercial flat roof denver nc',
    'metal roofing commercial denver',
    'lake norman commercial roofing',
    'lincoln county commercial roofer',
    'business roofing denver nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-roofing-denver-nc`,
  },
  openGraph: {
    title: 'Commercial Roofing Denver NC | TPO & Flat Roof',
    description:
      'Expert commercial roofing in Denver NC. TPO, EPDM, flat roofing, metal roofing for Lake Norman businesses. Lincoln County specialists. BBB A+ rated. Free estimates!',
    url: `${SITE_CONFIG.url}/commercial-roofing-denver-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.warehouse,
        width: 1200,
        height: 630,
        alt: 'Commercial roofing Denver NC - Best Roofing Now',
      },
    ],
  },
};

// Commercial roofing services
const commercialServices = [
  {
    icon: Layers,
    title: 'TPO Roofing Systems',
    description: 'Energy-efficient thermoplastic membranes ideal for Denver commercial buildings along Highway 16 and 73 corridors.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'EPDM Roofing',
    description: 'Durable synthetic rubber membrane roofing with excellent weather resistance for Lincoln County businesses.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Building2,
    title: 'Flat Roof Systems',
    description: 'Complete flat roof installation and repair including built-up roofing and single-ply systems for Denver properties.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Factory,
    title: 'Metal Roofing',
    description: 'Standing seam and corrugated metal roofing for commercial and industrial facilities near Lake Norman.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Thermometer,
    title: 'Roof Coatings',
    description: 'Silicone and acrylic roof coatings that extend roof life and reduce cooling costs in North Carolina summers.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Commercial Roof Repair',
    description: '24/7 emergency repairs for leaks, storm damage, and ponding water on Denver commercial roofs.',
    href: '/services/roof-repair',
  },
  {
    icon: FileCheck,
    title: 'Roof Inspections',
    description: 'Comprehensive commercial roof assessments with detailed reports meeting Lincoln County standards.',
    href: '/services/roof-inspection',
  },
  {
    icon: DollarSign,
    title: 'Maintenance Programs',
    description: 'Scheduled maintenance programs to extend roof life and maintain warranty compliance for Denver businesses.',
    href: '/services/commercial-roofing',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Star,
    title: '#1 Rated Commercial Roofer',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Lake Norman area commercial clients.`,
  },
  {
    icon: Award,
    title: 'BBB A+ Accredited',
    description: 'Better Business Bureau A+ rating with zero complaints on commercial projects.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned & Operated',
    description: 'Military values of integrity and excellence on every Denver commercial project.',
  },
  {
    icon: CheckCircle,
    title: 'Lincoln County Licensed',
    description: 'Fully licensed NC commercial contractor familiar with Lincoln County permitting and codes.',
  },
  {
    icon: Users,
    title: 'Manufacturer Certified',
    description: 'Certified installers for GAF, Carlisle, Firestone, and Johns Manville commercial systems.',
  },
  {
    icon: Clock,
    title: 'Minimal Business Disruption',
    description: 'Nights, weekends, and phased installation to keep your Denver business running smoothly.',
  },
];

// Denver commercial areas
const denverCommercialAreas = [
  'Highway 16 Corridor',
  'Highway 73 Corridor',
  'East Lincoln Industrial Area',
  'Downtown Denver',
  'Denver Town Center',
  'NC 16 Business District',
  'Beatty\'s Ford Road Commercial',
  'Lake Norman Marina District',
  'Westport Business Area',
  'Denver Industrial Park',
  'Highway 150 Corridor',
  'East Lincoln Commerce',
];

// Property types served
const propertyTypes = [
  'Retail Centers',
  'Office Buildings',
  'Medical Facilities',
  'Restaurants',
  'Marinas & Lake Businesses',
  'Warehouses',
  'Self-Storage Facilities',
  'Churches',
  'Schools',
  'Multi-Family Housing',
  'Agricultural Buildings',
  'Light Industrial',
];

// Nearby cities
const nearbyCities = [
  { name: 'Charlotte', href: '/commercial-roofing-charlotte-nc' },
  { name: 'Huntersville', href: '/commercial-roofing-huntersville-nc' },
  { name: 'Cornelius', href: '/commercial-roofing-cornelius-nc' },
  { name: 'Mooresville', href: '/commercial-roofing-mooresville-nc' },
  { name: 'Lincolnton', href: '/locations/lincolnton-nc' },
  { name: 'Gastonia', href: '/commercial-roofing-gastonia-nc' },
];

// FAQs
const faqs = [
  {
    question: 'What commercial roofing systems do you install in Denver NC?',
    answer:
      'Best Roofing Now installs all major commercial roofing systems in Denver NC including TPO (Thermoplastic Polyolefin), EPDM (Ethylene Propylene Diene Monomer), PVC (Polyvinyl Chloride), modified bitumen, built-up roofing (BUR), standing seam metal roofing, and various roof coating systems. We help Denver and Lincoln County businesses select the optimal system based on building type, budget, and long-term performance requirements.',
  },
  {
    question: 'How much does commercial roofing cost in Denver NC?',
    answer:
      'Commercial roofing costs in Denver typically range from $4 to $12 per square foot depending on the roofing system, roof complexity, and project size. TPO and EPDM systems average $5-8 per square foot, while metal roofing ranges from $8-15 per square foot. A 10,000 sq ft flat roof replacement typically costs $50,000-$100,000. Lincoln County permit fees are generally lower than Mecklenburg County. We provide free, detailed estimates for all Denver commercial projects.',
  },
  {
    question: 'What is the best commercial roofing material for Denver NC businesses?',
    answer:
      'For Denver and the Lake Norman western shore climate with hot summers and occasional severe storms, TPO roofing is often the best choice for flat-roof commercial buildings. TPO\'s white reflective surface reduces cooling costs by 10-30%, resists UV damage, and handles temperature fluctuations well. For commercial buildings near the lakefront, we also recommend impact-resistant options to handle wind-driven debris from western shore exposure.',
  },
  {
    question: 'Do you handle Lincoln County commercial building permits?',
    answer:
      'Yes, we manage the full Lincoln County permitting process for commercial roofing projects. Denver is in Lincoln County, which has different building codes and inspection requirements than Mecklenburg County (Charlotte). Our team handles permit applications, coordinates inspections with Lincoln County Building Inspections, and ensures full code compliance on every Denver commercial project.',
  },
  {
    question: 'Do you offer emergency commercial roof repair in Denver NC?',
    answer:
      'Yes, Best Roofing Now offers 24/7 emergency commercial roofing services throughout Denver and the Lake Norman western shore. For active leaks and urgent situations, we typically respond within 2-4 hours. Our emergency team provides temporary repairs to prevent further damage, then schedules permanent repairs. Call (704) 605-6047 for immediate assistance.',
  },
  {
    question: 'How long does a commercial roof last in Denver NC?',
    answer:
      'Commercial roof lifespan in Denver varies by material: TPO and EPDM typically last 20-30 years, modified bitumen 15-25 years, metal roofing 40-70 years, and built-up roofing 15-30 years. Proper maintenance significantly extends roof life. Denver\'s western shore sun exposure, heat, and occasional severe weather from Lake Norman make quality installation and regular maintenance essential for maximum lifespan.',
  },
  {
    question: 'Can you work around business operations in Denver NC?',
    answer:
      'Absolutely. We understand business continuity is critical for Denver and Lincoln County businesses. Best Roofing Now offers flexible scheduling including night shifts, weekend work, and phased installations. For Highway 16 and 73 corridor retail locations and restaurants, we can complete sections after business hours to minimize customer disruption.',
  },
  {
    question: 'What commercial roof warranties do you offer in Denver?',
    answer:
      'We offer industry-leading warranties including manufacturer warranties up to 30 years NDL (No Dollar Limit) on materials from GAF, Carlisle, Firestone, and Johns Manville. Our workmanship warranty covers labor for 10-15 years. NDL warranties cover full replacement cost with no depreciation, providing maximum protection for Denver commercial property owners.',
  },
];

export default function CommercialRoofingDenverNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Denver NC', url: `${SITE_CONFIG.url}/locations/denver-nc` },
          { name: 'Commercial Roofing Denver NC', url: `${SITE_CONFIG.url}/commercial-roofing-denver-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/commercial-roofing-denver-nc`}
        pageName="Commercial Roofing Denver NC"
        city="Denver"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.warehouse}
            alt="Commercial roofing Denver NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Waves className="w-4 h-4" />
              <span className="text-sm font-semibold">Lake Norman Commercial Roofing | Lincoln County</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Commercial Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Denver NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Lincoln County&apos;s Trusted Commercial Roofing Contractor
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now delivers professional commercial roofing solutions throughout Denver and the
              Lake Norman western shore. From Highway 16 corridor businesses to East Lincoln industrial
              facilities, our certified team provides exceptional quality backed by industry-leading
              warranties and {SITE_CONFIG.googleReviewCount}+ five-star reviews.
            </p>

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
                Lincoln County Licensed
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Commercial Roofing Services in Denver NC
            </h2>
            <p className="text-gray text-lg">
              From flat roof installations to emergency repairs, Best Roofing Now provides comprehensive commercial
              roofing solutions for Denver and Lincoln County businesses of all sizes.
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
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Denver Businesses Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When your Denver commercial property needs roofing work, you need a contractor who
                understands Lincoln County building codes and Lake Norman western shore conditions.
                We combine technical expertise with a commitment to minimizing business disruption.
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
                alt="Commercial roofing Denver NC - Lincoln County office building"
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
        </div>
      </section>

      {/* Property Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Properties We Serve in Denver NC
            </h2>
            <p className="text-gray text-lg">
              From lakefront marinas to Highway 16 retail centers, we provide expert commercial roofing
              for every building type in Lincoln County.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {propertyTypes.map((type) => (
              <div key={type} className="flex items-center gap-3 bg-light rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium text-dark">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lincoln County Permits Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                  <FileCheck className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm font-semibold">Lincoln County Compliance</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Lincoln County Commercial Permits & Codes
                </h2>
                <p className="text-gray text-lg mb-4">
                  Denver operates under Lincoln County jurisdiction, not Mecklenburg County. Commercial
                  roofing projects require Lincoln County building permits and inspections, which have
                  different requirements and timelines than Charlotte-area projects.
                </p>
                <p className="text-gray">
                  Our team manages the full Lincoln County permitting process for your commercial roofing
                  project, from initial application through final inspection sign-off. We maintain strong
                  relationships with Lincoln County Building Inspections for efficient project completion.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-lg mb-4">What We Handle</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Lincoln County commercial building permit applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Code compliance for Lincoln County commercial standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Coordination with Lincoln County inspectors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Wind load calculations for western shore exposure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Final inspection and certificate of compliance</span>
                  </li>
                </ul>
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
                Need Commercial Roofing in Denver NC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate for your Lincoln County commercial roofing project.
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
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Roofing Throughout Denver & Lincoln County
            </h2>
            <p className="text-gray text-lg">
              We provide commercial roofing services to businesses throughout Denver, Lincoln County,
              and the greater Lake Norman region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-light rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Denver Commercial Districts</h3>
              <div className="flex flex-wrap gap-2">
                {denverCommercialAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

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
        </div>
      </section>

      {/* Commercial Systems Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Roofing Systems We Install in Denver
            </h2>
            <p className="text-gray text-lg">
              We install and service all major commercial roofing systems for Denver and Lincoln County businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">TPO Membrane</h3>
              <p className="text-gray text-sm">
                Single-ply thermoplastic membrane ideal for Denver flat-roof commercial buildings. Energy-efficient
                white surface reflects heat and reduces cooling costs along the Highway 16 corridor. 20-30 year warranties available.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">EPDM Rubber</h3>
              <p className="text-gray text-sm">
                Durable synthetic rubber membrane with excellent weather resistance. Proven track record for
                Lincoln County commercial buildings and warehouses. 25+ year lifespan.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">PVC Roofing</h3>
              <p className="text-gray text-sm">
                Chemical-resistant membrane ideal for Denver restaurants and food service businesses.
                Heat-welded seams create watertight bonds resistant to grease and chemicals.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Modified Bitumen</h3>
              <p className="text-gray text-sm">
                Multi-layer asphalt system with reinforced membranes. Excellent for high-traffic roofs
                and Denver commercial buildings with rooftop HVAC equipment.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Standing Seam Metal</h3>
              <p className="text-gray text-sm">
                Long-lasting metal roofing with concealed fasteners. 40-50+ year lifespan with minimal maintenance.
                Ideal for Denver lakefront commercial properties with high wind exposure.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Built-Up Roofing (BUR)</h3>
              <p className="text-gray text-sm">
                Traditional multi-layer system with proven performance for East Lincoln industrial buildings.
                Excellent waterproofing for flat roofs with reflective coating options.
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
                Commercial Roofing Denver NC FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about commercial roofing services in Denver NC and Lincoln County.
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

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Denver"
        service="Commercial Roofing"
        serviceSlug="commercial-roofing"
        title="Commercial Roofing in Nearby Cities"
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for Professional Commercial Roofing in Denver NC?"
        subtitle="Get a free, no-obligation estimate from Lake Norman's trusted commercial roofing company. Our certified team will assess your building and provide expert recommendations tailored to Lincoln County requirements and your business needs."
      />
    </>
  );
}
