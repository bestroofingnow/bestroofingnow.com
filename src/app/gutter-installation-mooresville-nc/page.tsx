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
  Droplets,
  MapPin,
  Paintbrush,
  Ruler,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import YouTubeShort from '@/components/sections/YouTubeShort';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Gutter Installation Mooresville NC | Seamless Gutters',
  description:
    'Professional gutter installation in Mooresville NC. Seamless aluminum gutters, gutter guards, and repairs for Lake Norman homes. BBB A+ rated. Free estimates!',
  keywords: [
    'gutter installation Mooresville NC',
    'gutters Mooresville NC',
    'seamless gutters Mooresville',
    'gutter company Mooresville NC',
    'gutter repair Mooresville NC',
    'gutter guards Mooresville',
    'aluminum gutters Mooresville NC',
    'gutter replacement Mooresville',
    'Lake Norman gutter installer',
    'Mooresville gutter contractor',
    'downspout installation Mooresville NC',
    'gutter cleaning Mooresville NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-installation-mooresville-nc`,
  },
  openGraph: {
    title: 'Gutter Installation Mooresville NC | Seamless Gutters',
    description:
      'BBB A+ rated gutter installation serving Mooresville and northern Lake Norman. Custom seamless gutters, gutter guards, and repair services. Free estimates.',
    url: `${SITE_CONFIG.url}/gutter-installation-mooresville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.gutters,
        width: 1200,
        height: 630,
        alt: 'Gutter installation Mooresville NC - Best Roofing Now seamless gutter services',
      },
    ],
  },
};

// Gutter services offered in Mooresville
const services = [
  {
    icon: Droplets,
    title: 'Seamless Gutter Installation',
    description: 'Custom-fabricated seamless aluminum gutters made on-site for Mooresville homes with zero leak-prone joints.',
    href: '/services/gutter-installation',
  },
  {
    icon: Shield,
    title: 'Gutter Guard Installation',
    description: 'High-performance gutter protection to handle heavy leaf and pine needle debris near Lake Norman.',
    href: '/services/gutter-guards',
  },
  {
    icon: Wrench,
    title: 'Gutter Repair & Maintenance',
    description: 'Fast, reliable repairs for sagging, leaking, or storm-damaged gutters throughout Mooresville.',
    href: '/services/gutter-repair',
  },
  {
    icon: Ruler,
    title: 'Downspout Installation',
    description: 'Properly sized and positioned downspouts that channel water safely away from your foundation.',
    href: '/services/gutter-installation',
  },
  {
    icon: Paintbrush,
    title: 'Custom Copper Gutters',
    description: 'Premium copper gutter systems for upscale Mooresville homes seeking lasting beauty and durability.',
    href: '/services/gutter-installation',
  },
  {
    icon: Home,
    title: 'Gutter Cleaning',
    description: 'Professional gutter and downspout cleaning to restore proper flow and prevent water damage.',
    href: '/services/gutter-cleaning',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Better Business Bureau accredited with an A+ rating and zero unresolved complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied homeowners across the Lake Norman region.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'A veteran-owned company delivering military-grade precision on every gutter installation.',
  },
  {
    icon: CheckCircle,
    title: 'On-Site Fabrication',
    description: 'Seamless gutters formed on-site with our mobile gutter machine for a guaranteed perfect fit.',
  },
  {
    icon: Users,
    title: 'Trained Installers',
    description: 'Experienced professionals who ensure proper slope, secure brackets, and watertight connections.',
  },
  {
    icon: Clock,
    title: 'One-Day Installation',
    description: 'Most Mooresville gutter installations are completed within a single day with minimal disruption.',
  },
];

// Mooresville neighborhoods and areas
const mooresvilleAreas = [
  'Downtown Mooresville',
  'Langtree',
  'Morrison Plantation',
  'Muirfield',
  'Curtis Pond',
  'Riverwood',
  'The Point',
  'Northington',
  'Pine Lake',
  'Brawley School Road Area',
  'Alcove',
  'Mooresville South',
  'Lake Norman Waterfront',
  'Race City District',
  'Coddle Creek',
  'Rocky River Crossing',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Denver', href: '/gutter-installation-denver-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Lake Norman Area', href: '/locations/lake-norman' },
];

// Gutter color options
const gutterColors = [
  'White',
  'Almond',
  'Clay',
  'Cream',
  'Pearl Gray',
  'Musket Brown',
  'Royal Brown',
  'Black',
  'Bronze',
  'Forest Green',
  'Colonial Gray',
  'Terratone',
];

// FAQs about gutter installation in Mooresville
const faqs = [
  {
    question: 'Why are seamless gutters the best choice for Mooresville homes?',
    answer:
      'Seamless gutters eliminate the joints found every 10-20 feet in sectional systems, which are the primary source of leaks and clogs. In Mooresville, where mature oaks and pines drop heavy debris near Lake Norman and seasonal storms dump significant rainfall, seamless gutters deliver superior performance. They are custom-made on-site to match your home exactly, so they look great and function flawlessly.',
  },
  {
    question: 'How much does gutter installation cost in Mooresville NC?',
    answer:
      'Gutter installation in Mooresville typically runs $5-$13 per linear foot depending on material, gutter size, and roof complexity. An average Mooresville home needs 150-200 linear feet of gutters. Homes in lakefront communities like The Point or Riverwood with steeper rooflines may be at the higher end. We provide free on-site estimates with transparent pricing and no surprise fees.',
  },
  {
    question: 'What gutter size do Mooresville homes need?',
    answer:
      'We recommend 5-inch seamless gutters for most Mooresville residences. However, homes with large roof areas, steep pitches, or heavily wooded lots in areas like Pine Lake and Northington benefit from 6-inch oversized gutters. We also install 3x4 downspouts when extra flow capacity is needed to handle the heavy summer thunderstorms common along the I-77 corridor.',
  },
  {
    question: 'How long does a gutter installation take in Mooresville?',
    answer:
      'Most residential gutter installations in Mooresville are finished within a single day. We bring our mobile fabrication machine directly to your property, manufacture each seamless run on-site, and install everything with hidden hangers for a clean look. Larger homes or those with complex multi-level rooflines may take two days.',
  },
  {
    question: 'Do you install gutter guards for Mooresville homes?',
    answer:
      'Yes. Gutter guards are especially valuable in Mooresville due to the abundant hardwood and pine trees surrounding many neighborhoods. We offer micro-mesh guards for fine debris like pine needles and pollen, screen guards for larger leaves, and solid cover systems with surface tension technology. Guards dramatically reduce cleaning frequency and prevent clogs.',
  },
  {
    question: 'What gutter colors match Mooresville homes?',
    answer:
      'We stock over a dozen factory-finished colors to complement any exterior. Popular selections in Mooresville include white, almond, and clay for lighter homes, plus musket brown, bronze, and black for darker trim. The baked enamel finish resists fading, chipping, and peeling through years of North Carolina sun and rain.',
  },
  {
    question: 'How often should Mooresville gutters be cleaned?',
    answer:
      'Without gutter guards, we recommend cleaning at least twice per year: once in late spring after pollen season and again in late fall after leaf drop. Mooresville properties surrounded by pines or near Lake Norman may need a third cleaning in mid-summer. Installing gutter guards can reduce cleanings to once per year or less.',
  },
  {
    question: 'Can you repair my existing gutters in Mooresville?',
    answer:
      'Absolutely. We repair all gutter types across Mooresville, including resealing leaky joints, reattaching sagging sections, patching holes, replacing damaged downspouts, and fixing hanger failures. We will inspect your system and give you an honest recommendation on whether repair or replacement makes the most sense for your budget and long-term needs.',
  },
];

export default function GutterInstallationMooresvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gutter Installation Mooresville NC', url: `${SITE_CONFIG.url}/gutter-installation-mooresville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/gutter-installation-mooresville-nc`}
        pageName="Gutter Installation Mooresville NC"
        city="Mooresville"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does gutter installation cost in Mooresville NC?',
            answer: 'Gutter installation in Mooresville NC costs $5-$13 per linear foot for seamless aluminum gutters, averaging $1,000-$2,600 for Lake Norman area homes. Best Roofing Now serves Mooresville with free estimates and quality workmanship warranties.',
            speakableAnswer: 'Gutter installation in Mooresville costs $5-13 per foot. Best Roofing Now offers free estimates. Call 704-605-6047.',
          },
          {
            question: 'Who installs gutters in Mooresville and Lake Norman?',
            answer: 'Best Roofing Now is a top-rated gutter installer serving Mooresville and northern Lake Norman with a 5-star Google rating and BBB A+ accreditation. They fabricate seamless aluminum gutters on-site for a perfect fit.',
            speakableAnswer: 'Best Roofing Now installs gutters in Mooresville and Lake Norman with 5-star ratings. Call 704-605-6047.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.gutters}
            alt="Gutter installation Mooresville NC - Best Roofing Now seamless gutter experts"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Droplets className="w-4 h-4" />
              <span className="text-sm font-semibold">Northern Lake Norman Gutter Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Installation <br className="hidden md:block" />
              <span className="text-accent-light">Mooresville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Custom seamless gutters fabricated on-site for a leak-free fit
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Shield your Mooresville home from water damage with professionally installed seamless gutters
              from Best Roofing Now. Our mobile fabrication unit creates custom gutter runs right in your
              driveway, ensuring a precise fit with no seams to leak. Serving every neighborhood from
              Langtree to The Point along northern Lake Norman.
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

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Gutter Services in Mooresville NC
            </h2>
            <p className="text-gray text-lg">
              From seamless gutter installation to repairs, guards, and custom copper work, we deliver
              complete gutter solutions for Mooresville and northern Lake Norman homes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
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
                Why Mooresville Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Northern Lake Norman homes face heavy rainfall, mature tree debris, and seasonal storms that
                demand gutters built to last. Best Roofing Now provides premium seamless gutters with expert
                installation, protecting your Mooresville investment for decades.
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
                alt="Professional gutter installation completed in Mooresville NC - Best Roofing Now"
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

      {/* Gutter Colors Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Gutter Colors to Match Your Mooresville Home
            </h2>
            <p className="text-gray text-lg">
              Select from a wide palette of factory-finished colors to complement your exterior, from
              classic whites to rich bronze and black tones popular in Race City neighborhoods.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {gutterColors.map((color) => (
              <span
                key={color}
                className="inline-block bg-light px-4 py-2 rounded-full text-sm text-dark font-medium border border-gray-200"
              >
                {color}
              </span>
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
                Ready for New Gutters in Mooresville?
              </h2>
              <p className="text-white/90">
                Get a free estimate for seamless gutter installation, repairs, or gutter guards today.
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
              Serving Mooresville & Northern Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Our gutter installation crews serve homeowners throughout Mooresville, the NASCAR corridor,
              and every lakefront neighborhood along the northern shore.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mooresville Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Mooresville Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {mooresvilleAreas.map((area) => (
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

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Benefits of Seamless Gutters for Mooresville Homes
            </h2>
            <p className="text-gray text-lg">
              Why homeowners across Iredell County are upgrading to seamless gutter systems.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Zero Leak Points</h3>
              <p className="text-gray text-sm">
                Without joints along their length, seamless gutters eliminate the most common cause of
                gutter leaks that damage fascia boards and foundations.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Precision Fit</h3>
              <p className="text-gray text-sm">
                Each gutter run is formed on-site to your home&apos;s exact dimensions, producing a clean
                line that enhances curb appeal in Mooresville neighborhoods.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Reduced Maintenance</h3>
              <p className="text-gray text-sm">
                Fewer joints means less debris buildup and trap points, cutting maintenance time in half
                compared to traditional sectional gutter systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Work in Mooresville
            </h2>
            <p className="text-gray text-lg">
              Browse gutter installation projects we have completed for homeowners in Mooresville and
              the northern Lake Norman area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Seamless gutter installation completed in Mooresville NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Gutter and roofing project in the Mooresville area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed gutter installation near northern Lake Norman"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional gutter installation project in Mooresville NC"
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
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Gutter Installation FAQs - Mooresville NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about gutter installation in Mooresville and northern Lake Norman.
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

      {/* YouTube Short */}
      <YouTubeShort
        videoId="CXaG6atl-nE"
        title="The $10,000 Gutter Mistake"
        heading="Watch: The $10,000 Gutter Mistake"
        description="See why proper gutter installation is critical to protecting your Mooresville home's foundation."
      />

      <GeoProjectGalleryStrip
        pageType="location"
        city="Mooresville"
        slug="gutter-installation-mooresville-nc"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Mooresville"

        state="NC"

        citySlug="mooresville-nc"

        service="Gutter Installation"

      />

      <CTASection
        title="Ready for Seamless Gutters in Mooresville?"
        subtitle="Get a free, no-obligation estimate for custom seamless gutters. We'll measure your home, recommend the ideal size and color, and provide transparent pricing with zero hidden fees."
      />
    </>
  );
}
