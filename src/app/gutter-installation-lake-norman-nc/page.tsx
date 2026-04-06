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
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema, ServiceAreaPageSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Gutter Installation Lake Norman NC | Seamless Gutters & Guards',
  description:
    'Professional gutter installation across Lake Norman NC. Seamless aluminum gutters, gutter guards, and repairs for lakefront homes in Cornelius, Davidson, Mooresville, Huntersville & Denver. Free estimates!',
  keywords: [
    'gutter installation lake norman nc',
    'seamless gutters lake norman',
    'gutter guards lake norman',
    'gutter company lake norman nc',
    'gutter repair lake norman nc',
    'aluminum gutters lake norman',
    'gutter replacement lake norman',
    'lakefront gutter installation',
    'lake norman gutter contractor',
    'downspout installation lake norman nc',
    'gutter cleaning lake norman',
    'seamless gutters cornelius nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-installation-lake-norman-nc`,
  },
  openGraph: {
    title: 'Gutter Installation Lake Norman NC | Seamless Gutters & Guards | Best Roofing Now',
    description:
      'BBB A+ rated gutter installation serving Lake Norman. Custom seamless gutters, gutter guards, and repair services for lakefront properties. Free estimates.',
    url: `${SITE_CONFIG.url}/gutter-installation-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.gutters,
        width: 1200,
        height: 630,
        alt: 'Gutter installation Lake Norman NC - Best Roofing Now seamless gutter services',
      },
    ],
  },
};

// Lake Norman cities for gallery strip
const LAKE_NORMAN_CITIES = ['Mooresville', 'Cornelius', 'Davidson', 'Huntersville', 'Denver', 'Sherrills Ford'];

// Gutter services offered
const services = [
  {
    icon: Droplets,
    title: 'Seamless Gutter Installation',
    description: 'Custom-fabricated seamless aluminum gutters made on-site for Lake Norman homes with zero leak-prone joints.',
    href: '/services/gutter-installation',
  },
  {
    icon: Shield,
    title: 'Gutter Guard Installation',
    description: 'High-performance gutter protection essential for lakefront properties with heavy tree debris and seasonal pollen.',
    href: '/services/gutter-guards',
  },
  {
    icon: Wrench,
    title: 'Gutter Repair & Maintenance',
    description: 'Fast, reliable repairs for sagging, leaking, or storm-damaged gutters throughout the Lake Norman region.',
    href: '/services/gutter-repair',
  },
  {
    icon: Ruler,
    title: 'Downspout Installation',
    description: 'Properly sized and positioned downspouts that channel heavy lakeside rainfall safely away from your foundation.',
    href: '/services/gutter-installation',
  },
  {
    icon: Paintbrush,
    title: 'Custom Copper Gutters',
    description: 'Premium copper gutter systems for upscale Lake Norman waterfront homes seeking lasting beauty and durability.',
    href: '/services/gutter-installation',
  },
  {
    icon: Home,
    title: 'Gutter Cleaning',
    description: 'Professional gutter and downspout cleaning to restore proper flow and prevent water damage to lakefront properties.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from homeowners across the Lake Norman region.`,
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
    description: 'Most Lake Norman gutter installations are completed within a single day with minimal disruption.',
  },
];

// Lake Norman neighborhoods and areas
const lakeNormanAreas = [
  'The Peninsula (Cornelius)',
  'Jetton Road Area (Cornelius)',
  'River Run (Davidson)',
  'Westmoreland (Davidson)',
  'The Point (Mooresville)',
  'Langtree (Mooresville)',
  'Morrison Plantation (Mooresville)',
  'Northcross (Huntersville)',
  'Birkdale Village Area',
  'Westport (Denver)',
  'Sailview (Denver)',
  'Pinnacle Shores (Denver)',
  'Trilogy at Lake Norman',
  'Sherrills Ford Lakefront',
  'Lake Norman State Park Area',
  'Coddle Creek (Mooresville)',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Mooresville', href: '/gutter-installation-mooresville-nc' },
  { name: 'Denver', href: '/gutter-installation-denver-nc' },
  { name: 'Charlotte', href: '/gutter-installation-charlotte-nc' },
  { name: 'Cornelius', href: '/roofing-cornelius-nc' },
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Huntersville', href: '/roofing-huntersville-nc' },
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

// FAQs about gutter installation in Lake Norman
const faqs = [
  {
    question: 'Why are seamless gutters essential for Lake Norman lakefront homes?',
    answer:
      'Seamless gutters eliminate the joints found every 10-20 feet in sectional systems, which are the primary source of leaks and clogs. For Lake Norman lakefront properties, this is critical because heavy rainfall, mature trees, and seasonal pollen create significant debris. The increased water runoff from lakeside exposure demands gutters that flow freely without failure. Seamless gutters are custom-made on-site to match your home exactly.',
  },
  {
    question: 'How much does gutter installation cost in Lake Norman NC?',
    answer:
      'Gutter installation across Lake Norman typically costs $1,500-$5,000 depending on home size, material, gutter size, and roof complexity. This breaks down to $5-$13 per linear foot. An average Lake Norman home needs 150-200 linear feet of gutters. Waterfront homes with steeper rooflines and multi-level designs may be at the higher end. We provide free on-site estimates with transparent pricing across Cornelius, Davidson, Mooresville, Huntersville, and Denver.',
  },
  {
    question: 'What gutter size do Lake Norman homes need?',
    answer:
      'We recommend 5-inch seamless gutters for most Lake Norman residences. However, lakefront homes with large roof areas, steep pitches, or heavily wooded lots benefit from 6-inch oversized gutters. Waterfront properties facing the lake need extra capacity to handle heavy storm runoff. We also install 3x4 downspouts when extra flow capacity is needed to manage the heavy summer thunderstorms common around Lake Norman.',
  },
  {
    question: 'Do gutter guards help with Lake Norman lakefront debris?',
    answer:
      'Absolutely! Gutter guards are especially valuable for Lake Norman lakefront homes due to the abundant hardwood and pine trees surrounding most properties. We offer micro-mesh guards for fine debris like pine needles and pollen, screen guards for larger leaves, and solid cover systems with surface tension technology. Guards dramatically reduce maintenance and prevent the clogs that lead to water damage and erosion around lakefront foundations.',
  },
  {
    question: 'How often should Lake Norman gutters be cleaned?',
    answer:
      'Without gutter guards, we recommend cleaning at least twice per year: once in late spring after pollen season and again in late fall after leaf drop. Lakefront properties with heavy tree canopy may need a third cleaning in mid-summer. Installing gutter guards can reduce cleanings to once per year or less, saving significant time and expense for Lake Norman homeowners.',
  },
  {
    question: 'Do you serve all Lake Norman communities for gutter installation?',
    answer:
      'Yes! Best Roofing Now provides gutter installation services throughout the entire Lake Norman region including Cornelius, Davidson, Mooresville, Huntersville, Denver, and Sherrills Ford. We are fully licensed in both Mecklenburg County and Iredell County. We have installed gutters in communities from The Peninsula and Jetton Cove to The Point and Trilogy at Lake Norman.',
  },
];

export default function GutterInstallationLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Norman Roofing', url: `${SITE_CONFIG.url}/roofing-lake-norman-nc` },
          { name: 'Gutter Installation Lake Norman NC', url: `${SITE_CONFIG.url}/gutter-installation-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/gutter-installation-lake-norman-nc`}
        pageName="Gutter Installation Lake Norman NC"
        city="Lake Norman"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does gutter installation cost in Lake Norman NC?',
            answer: 'Gutter installation in Lake Norman NC costs $1,500-$5,000 for most homes, or $5-$13 per linear foot for seamless aluminum gutters. Best Roofing Now serves all Lake Norman communities with free estimates and quality workmanship warranties.',
            speakableAnswer: 'Gutter installation in Lake Norman costs $1,500 to $5,000 for most homes. Best Roofing Now offers free estimates. Call 704-605-6047.',
          },
          {
            question: 'Who installs gutters in Lake Norman NC?',
            answer: 'Best Roofing Now is a top-rated gutter installer serving all Lake Norman communities including Cornelius, Davidson, Mooresville, Huntersville, and Denver with a 5-star Google rating and BBB A+ accreditation.',
            speakableAnswer: 'Best Roofing Now installs gutters across Lake Norman with 5-star ratings. Call 704-605-6047.',
          },
        ]}
      />
      <VoiceSearchActionSchema />
      <ServiceAreaPageSchema
        city="Lake Norman"
        state="NC"
        slug="gutter-installation-lake-norman-nc"
        distance={25}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.gutters}
            alt="Gutter installation Lake Norman NC - Best Roofing Now seamless gutter experts"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Droplets className="w-4 h-4" />
              <span className="text-sm font-semibold">Lake Norman Gutter Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Installation <br className="hidden md:block" />
              <span className="text-accent-light">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Custom seamless gutters &amp; guards for Lake Norman lakefront homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Protect your Lake Norman home from water damage with professionally installed seamless gutters
              from Best Roofing Now. Our mobile fabrication unit creates custom gutter runs right in your
              driveway, ensuring a precise fit with no seams to leak. Serving lakefront communities from
              Cornelius and Davidson to Mooresville, Huntersville, and Denver.
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
              Gutter Services Across Lake Norman NC
            </h2>
            <p className="text-gray text-lg">
              From seamless gutter installation to repairs, guards, and custom copper work, we deliver
              complete gutter solutions for lakefront and lake-area homes throughout the Lake Norman region.
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
                Why Lake Norman Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Lake Norman lakefront homes face heavy rainfall, erosion challenges, and seasonal storms that
                demand gutters built to handle serious water management. Best Roofing Now provides premium
                seamless gutters with expert installation, protecting your Lake Norman investment for decades.
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
                alt="Professional gutter installation completed at Lake Norman home - Best Roofing Now"
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
              Gutter Colors to Match Your Lake Norman Home
            </h2>
            <p className="text-gray text-lg">
              Select from a wide palette of factory-finished colors to complement your exterior, from
              classic whites to rich bronze and black tones popular in Lake Norman waterfront communities.
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
                Ready for New Gutters in Lake Norman?
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
              Serving All Lake Norman Communities
            </h2>
            <p className="text-gray text-lg">
              Our gutter installation crews serve homeowners throughout every Lake Norman community,
              from waterfront estates to lake-area neighborhoods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Lake Norman Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Norman Communities We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {lakeNormanAreas.map((area) => (
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
              <h3 className="text-xl font-bold text-dark mb-4">Lake Norman Cities We Serve</h3>
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
              href="/roofing-lake-norman-nc"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Lake Norman Roofing Services
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
              Benefits of Seamless Gutters for Lake Norman Homes
            </h2>
            <p className="text-gray text-lg">
              Why homeowners across the Lake Norman region are upgrading to seamless gutter systems.
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
                gutter leaks that damage fascia boards and lakefront foundations.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Precision Fit</h3>
              <p className="text-gray text-sm">
                Each gutter run is formed on-site to your home&apos;s exact dimensions, producing a clean
                line that enhances curb appeal in Lake Norman neighborhoods.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Lakefront Water Management</h3>
              <p className="text-gray text-sm">
                Properly sized gutters and downspouts channel heavy lakeside rainfall away from foundations,
                preventing the erosion issues common on Lake Norman properties.
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
              Our Work Across Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Browse gutter installation projects we have completed for homeowners throughout
              the Lake Norman area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Seamless gutter installation completed in Lake Norman NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Gutter and roofing project in the Lake Norman area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed gutter installation near Lake Norman"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional gutter installation project in Lake Norman NC"
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
                Gutter Installation FAQs - Lake Norman NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about gutter installation across the Lake Norman region.
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

      <GeoProjectGalleryStrip
        pageType="location"
        city="Mooresville"
        slug="gutter-installation-lake-norman-nc"
        count={4}
        title="Recent Gutter Projects in Lake Norman, NC"
        subtitle="Browse completed gutter installation projects from the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/gutter-installation-lake-norman-nc`}
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Gutter Installation"
      />

      <CTASection
        title="Ready for Seamless Gutters in Lake Norman?"
        subtitle="Get a free, no-obligation estimate for custom seamless gutters. We serve all Lake Norman communities including Cornelius, Davidson, Mooresville, Huntersville, and Denver with transparent pricing."
      />
    </>
  );
}
