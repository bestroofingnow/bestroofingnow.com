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
  Home,
  Sun,
  Thermometer,
  Wind,
  MapPin,
  Zap,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Summer Roof Maintenance Charlotte NC | Heat Protection | Best Roofing Now',
  description:
    'Expert summer roof maintenance in Charlotte NC. Protect your roof from UV damage, heat stress, and summer storms. Professional inspections, ventilation upgrades, and preventive care.',
  keywords: [
    'summer roof maintenance Charlotte NC',
    'roof maintenance summer Charlotte',
    'UV roof protection Charlotte',
    'heat damage roof repair',
    'summer roof inspection Charlotte',
    'roof ventilation Charlotte NC',
    'shingle heat damage',
    'attic ventilation summer',
    'Charlotte summer roofing',
    'preventive roof maintenance',
    'roof coating Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/summer-roof-maintenance-charlotte-nc`,
  },
  openGraph: {
    title: 'Summer Roof Maintenance Charlotte NC | Heat Protection | Best Roofing Now',
    description:
      'Protect your Charlotte roof from intense summer heat and UV damage. Professional maintenance, ventilation upgrades, and cooling solutions. BBB A+ rated.',
    url: `${SITE_CONFIG.url}/summer-roof-maintenance-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero5,
        width: 1200,
        height: 630,
        alt: 'Summer roof maintenance services in Charlotte NC - Best Roofing Now heat protection experts',
      },
    ],
  },
};

// Summer-specific services
const summerServices = [
  {
    icon: Sun,
    title: 'UV Protection Inspection',
    description: 'Comprehensive assessment of UV damage and protective coating recommendations.',
    href: '/services/roof-inspection',
  },
  {
    icon: Thermometer,
    title: 'Heat Damage Assessment',
    description: 'Identify shingle curling, cracking, and heat-related deterioration before it spreads.',
    href: '/services/roof-repair',
  },
  {
    icon: Wind,
    title: 'Ventilation Upgrades',
    description: 'Improve attic airflow to reduce heat buildup and extend shingle life.',
    href: '/services/roof-ventilation',
  },
  {
    icon: Home,
    title: 'Reflective Coatings',
    description: 'Cool roof coatings that reflect sunlight and reduce cooling costs up to 25%.',
    href: '/services/flat-roof-repair',
  },
  {
    icon: Wrench,
    title: 'Preventive Repairs',
    description: 'Address minor issues before Charlotte\'s intense summer heat makes them worse.',
    href: '/services/roof-repair',
  },
  {
    icon: Zap,
    title: 'Energy Efficiency Audit',
    description: 'Evaluate your roof\'s impact on cooling costs and recommend improvements.',
    href: '/services/roof-inspection',
  },
];

// Why choose us points for summer
const whyChooseUs = [
  {
    icon: Award,
    title: 'Heat Protection Experts',
    description: 'Specialized knowledge of how Charlotte\'s extreme summer heat affects roofing materials.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned with commitment to quality and integrity in every service.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability coverage.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium products and warranties.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Early morning appointments available to beat the summer heat.',
  },
];

// Charlotte neighborhoods served
const charlotteNeighborhoods = [
  'Myers Park',
  'Dilworth',
  'South End',
  'NoDa',
  'Plaza Midwood',
  'Ballantyne',
  'University City',
  'Cotswold',
  'Elizabeth',
  'Eastover',
  'SouthPark',
  'Uptown Charlotte',
  'Wesley Heights',
  'Fourth Ward',
  'Cherry',
  'Madison Park',
  'Montford',
  'Chantilly',
  'Commonwealth',
  'Sedgefield',
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

// FAQs about summer roof maintenance
const faqs = [
  {
    question: 'Why is summer roof maintenance important in Charlotte?',
    answer:
      'Charlotte summers bring intense heat with temperatures regularly exceeding 90°F and attic temperatures often reaching 150°F or higher. This extreme heat accelerates shingle aging, causes thermal expansion stress, and can lead to premature cracking, curling, and granule loss. Summer maintenance identifies and addresses these issues before they become costly repairs. Additionally, summer thunderstorms can reveal vulnerabilities that weren\'t apparent in drier months.',
  },
  {
    question: 'How does Charlotte\'s heat damage roofs?',
    answer:
      'Charlotte\'s intense summer heat affects roofs in several ways: UV radiation breaks down asphalt shingle compounds over time, extreme temperatures cause thermal expansion and contraction that stresses materials, heat buildup in poorly ventilated attics can "cook" shingles from below, and dark-colored roofs absorb heat that transfers into your home. Heat damage shows as curling, cracking, granule loss, and premature aging.',
  },
  {
    question: 'What does summer roof maintenance include?',
    answer:
      'Our summer maintenance service includes comprehensive inspection for heat damage, UV deterioration assessment, ventilation evaluation, flashing and seal inspection, gutter and drainage check, debris removal, minor repair of worn areas, attic temperature assessment, and detailed report with recommendations. We focus on identifying heat-related issues and preventing summer storm damage.',
  },
  {
    question: 'How can I reduce heat damage to my roof?',
    answer:
      'Several strategies help reduce heat damage: proper attic ventilation allows hot air to escape (we recommend at least 1 sq ft of vent area per 150 sq ft of attic space), reflective or "cool roof" coatings can reduce surface temperatures by 50°F, lighter-colored shingles absorb less heat, radiant barriers in the attic reduce heat transfer, and shade trees can significantly lower roof temperatures.',
  },
  {
    question: 'Should I install a ridge vent for better ventilation?',
    answer:
      'Ridge vents are excellent for Charlotte homes and are one of the most effective ventilation solutions. They run along the roof peak, allowing hot air to escape naturally as it rises. Combined with soffit vents for intake, ridge vents create continuous airflow that significantly reduces attic temperatures. This protects your shingles from below and can reduce cooling costs by 10-15%. We recommend ridge vents for most Charlotte homes.',
  },
  {
    question: 'How much does summer roof maintenance cost?',
    answer:
      'Summer roof maintenance in Charlotte typically costs $150-$350 depending on roof size and accessibility. This includes a comprehensive inspection, minor repairs, debris removal, and a detailed condition report. Ventilation upgrades, if needed, typically range from $400-$1,500 for ridge vent installation. Consider that proper maintenance can extend your roof\'s life by 5-10 years, making it a wise investment.',
  },
  {
    question: 'What are cool roof coatings?',
    answer:
      'Cool roof coatings are reflective materials applied to your roof surface that reflect more sunlight and absorb less heat than standard roofing materials. They can reduce roof surface temperatures by up to 50°F, lower attic temperatures significantly, and decrease cooling costs by 10-30%. Coatings are especially effective on flat or low-slope commercial roofs but are also available for residential applications. We offer white, aluminum, and tinted reflective coatings.',
  },
  {
    question: 'When is the best time for summer roof maintenance?',
    answer:
      'We recommend scheduling summer maintenance in late spring (May-June) before the most intense heat arrives. This timing allows us to identify and address any winter damage, prepare your roof for peak summer stress, and complete any ventilation upgrades before they\'re most needed. We offer early morning appointments (starting at 7 AM) during peak summer to work in cooler conditions.',
  },
];

export default function SummerRoofMaintenanceCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Summer Roof Maintenance Charlotte NC', url: `${SITE_CONFIG.url}/summer-roof-maintenance-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero5}
            alt="Summer roof maintenance in Charlotte NC - Best Roofing Now heat protection experts"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Sun className="w-4 h-4" />
              <span className="text-sm font-semibold">Heat Protection Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Summer Roof Maintenance <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Protect your roof from Charlotte's intense summer heat and UV damage
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Charlotte summers are brutal on roofs. With temperatures pushing into the 90s and attic temps reaching
              150°F+, your roof needs expert care to stay in top condition. Best Roofing Now provides comprehensive
              summer maintenance to prevent heat damage and extend your roof's life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Summer Maintenance
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

      {/* Summer Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Summer Roofing Services in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              Comprehensive summer maintenance and heat protection services designed specifically for Charlotte's
              extreme summer conditions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {summerServices.map((service) => (
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
                Charlotte's Summer Roof Maintenance Experts
              </h2>
              <p className="text-gray text-lg mb-8">
                Charlotte's summer heat is among the most demanding for roofing materials in the Southeast. Our team
                understands exactly how local conditions affect your roof and what preventive measures make the biggest
                difference in extending its lifespan.
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
                src={IMAGES.realProjects.drone1}
                alt="Best Roofing Now - Summer roof maintenance experts in Charlotte NC"
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
                    <p className="font-bold text-dark">5.0 Rating</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Google Reviews</p>
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
                Beat the Heat - Schedule Your Summer Maintenance
              </h2>
              <p className="text-white/90">
                Early morning appointments available. Protect your roof before peak summer arrives.
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
                Schedule Maintenance
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
              Summer Roof Maintenance Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our summer maintenance crews serve homeowners throughout the Greater Charlotte metro area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-light rounded-xl p-6">
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

      {/* Summer Roofing Tips Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Summer Roof Care Tips for Charlotte Homeowners
            </h2>
            <p className="text-gray text-lg">
              Protect your investment with these expert recommendations for surviving Charlotte summers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2 text-center">Optimize Ventilation</h3>
              <p className="text-gray text-sm text-center">
                Proper attic ventilation can reduce temperatures by 40°F+, protecting shingles and lowering AC costs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2 text-center">Consider Light Colors</h3>
              <p className="text-gray text-sm text-center">
                Light-colored shingles reflect more heat. When replacing, consider colors with higher solar reflectance.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2 text-center">Annual Inspections</h3>
              <p className="text-gray text-sm text-center">
                Catch heat damage early with annual inspections. Small issues become big problems in Charlotte heat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Summer Roof Projects Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed summer maintenance and heat protection projects.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Summer roof maintenance completed in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Heat-resistant shingle installation in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of summer roof project in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional summer roofing work in Charlotte area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
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
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Summer Roof Maintenance FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about summer roof care in Charlotte NC.
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

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="summer-roof-maintenance-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/summer-roof-maintenance-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready to Protect Your Roof This Summer?"
        subtitle="Schedule your summer maintenance before peak heat arrives. Free inspections and honest recommendations from Charlotte's trusted roofing experts."
      />
    </>
  );
}
