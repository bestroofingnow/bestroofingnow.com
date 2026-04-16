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
  Leaf,
  Droplets,
  ShieldCheck,
  Wind,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Gutter Guards Lake Norman NC',
  description:
    'Professional gutter guard installation for Lake Norman NC homes. Micro-mesh, reverse curve, and screen guards for heavy tree canopy and pine needle protection. Veteran-owned, BBB A+ rated. Free estimates for gutter guard installation.',
  keywords: [
    'gutter guards lake norman nc',
    'leaf guard lake norman',
    'gutter protection lake norman nc',
    'micro mesh gutter guards lake norman',
    'gutter guard installation lake norman',
    'leaffilter lake norman nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-guards-lake-norman-nc`,
  },
  openGraph: {
    title: 'Gutter Guards Lake Norman NC | Leaf & Debris Protection | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned gutter guard installer serving Lake Norman NC. Micro-mesh, reverse curve, and screen gutter protection for lakefront homes. Free estimates.',
    url: `${SITE_CONFIG.url}/gutter-guards-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Gutter guard installation for Lake Norman NC homes - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: ShieldCheck,
    title: 'Micro-Mesh Guards',
    description: 'Surgical-grade stainless steel mesh that blocks pine needles, seed pods, and fine debris from Lake Norman trees.',
    href: '/services/residential-roofing',
  },
  {
    icon: Wind,
    title: 'Reverse Curve Guards',
    description: 'Surface tension gutter guards that deflect leaves and debris while channeling water into gutters efficiently.',
    href: '/services/residential-roofing',
  },
  {
    icon: Shield,
    title: 'Screen Guards',
    description: 'Cost-effective screen-style gutter protection ideal for moderate debris levels in Lake Norman neighborhoods.',
    href: '/services/residential-roofing',
  },
  {
    icon: Droplets,
    title: 'Foam Guards',
    description: 'Foam insert gutter guards that allow water through while blocking leaves and debris from clogging gutters.',
    href: '/services/residential-roofing',
  },
  {
    icon: Wrench,
    title: 'Gutter Guard Repair',
    description: 'Repair and re-secure existing gutter guards damaged by storms, ice, or wind on Lake Norman properties.',
    href: '/services/residential-roofing',
  },
  {
    icon: Leaf,
    title: 'Gutter Cleaning',
    description: 'Professional gutter cleaning to remove accumulated debris before guard installation or as standalone service.',
    href: '/services/residential-roofing',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied customers across the region.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with comprehensive liability insurance for every project.',
  },
  {
    icon: Users,
    title: 'Lakefront Expertise',
    description: 'Specialized experience with Lake Norman homes that face heavy tree canopy and pine needle challenges.',
  },
  {
    icon: Clock,
    title: 'Fast Installation',
    description: 'Most gutter guard installations completed in a single day with minimal disruption to your routine.',
  },
];

const localAreas = [
  'Lake Norman Waterfront',
  'Cornelius',
  'Davidson',
  'Mooresville',
  'Huntersville',
  'Denver',
  'Sherrills Ford',
];

const nearbyCities = [
  { name: 'Charlotte', href: '/gutter-guards-charlotte-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Sherrills Ford', href: '/roofing-sherrills-ford-nc' },
  { name: 'Statesville', href: '/locations/statesville-nc' },
];

const faqs = [
  {
    question: 'What type of gutter guard is best for Lake Norman homes?',
    answer:
      'Micro-mesh gutter guards are the best choice for most Lake Norman homes because they block even the smallest debris including pine needles, seed pods, and oak catkins that are common around the lake. The stainless steel mesh allows water to flow through while keeping out debris as small as a grain of sand. For homes with heavy pine tree coverage, micro-mesh is the only option that reliably prevents needle accumulation.',
  },
  {
    question: 'How much do gutter guards cost on Lake Norman?',
    answer:
      'Gutter guard installation for Lake Norman homes typically costs $7-$30 per linear foot depending on the type and material. For a typical home with 150-200 linear feet of gutters, expect $1,500-$6,000 total installed. Micro-mesh guards are on the higher end but provide the best protection for Lake Norman\'s heavy tree canopy. We provide free estimates with transparent pricing for every project.',
  },
  {
    question: 'Do gutter guards work with pine needles around Lake Norman?',
    answer:
      'Standard screen and foam gutter guards struggle with pine needles because needles can slip through larger openings or accumulate on top. Micro-mesh gutter guards with surgical-grade stainless steel mesh are the solution. They block pine needles completely while still allowing rainwater to flow through. We specifically recommend micro-mesh for any Lake Norman home near pine trees.',
  },
  {
    question: 'How long do gutter guards last on Lake Norman?',
    answer:
      'Quality gutter guards last 20-30+ years on Lake Norman homes when properly installed. Stainless steel micro-mesh guards offer the longest lifespan and typically come with 25-year or lifetime warranties. Aluminum screen guards last 15-20 years, while foam inserts may need replacement every 5-8 years. We recommend investing in higher-quality guards for the best long-term value.',
  },
  {
    question: 'Can gutter guards handle heavy rain on Lake Norman?',
    answer:
      'Yes, quality gutter guards are designed to handle heavy rainfall. Lake Norman can experience intense thunderstorms with rainfall rates exceeding 2 inches per hour. Micro-mesh and reverse curve guards are engineered to channel high volumes of water into gutters while shedding debris. We ensure proper installation pitch and alignment to maximize water flow capacity during storms.',
  },
  {
    question: 'Do I still need gutter cleaning with gutter guards?',
    answer:
      'Gutter guards dramatically reduce cleaning frequency but do not eliminate maintenance entirely. With quality micro-mesh guards, most Lake Norman homeowners go from cleaning gutters 2-4 times per year to once every 2-3 years. Some fine debris may accumulate on top of the guards and can be brushed off or rinsed with a hose during an annual inspection.',
  },
  {
    question: 'How long does gutter guard installation take?',
    answer:
      'Most Lake Norman gutter guard installations are completed in a single day. A typical home with 150-200 linear feet of gutters takes 4-6 hours to install. Larger homes or those requiring gutter cleaning or repair before installation may take a full day or slightly longer. We schedule installations to minimize disruption to your daily routine.',
  },
  {
    question: 'Do gutter guards come with a warranty?',
    answer:
      'Yes, all gutter guard products we install come with manufacturer warranties ranging from 20 years to lifetime coverage depending on the product. Micro-mesh guards from premium manufacturers typically carry 25-year or lifetime warranties. We also provide our own labor warranty on the installation. We will review all warranty details with you before work begins.',
  },
];

export default function GutterGuardsLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gutter Guards Lake Norman NC', url: `${SITE_CONFIG.url}/gutter-guards-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/gutter-guards-lake-norman-nc`}
        pageName="Gutter Guards Lake Norman NC"
        city="Cornelius"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Gutter guard installation for Lake Norman NC homes - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-semibold">Lake Norman&apos;s Gutter Protection Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Guards Lake Norman NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Stop Leaves. Stop Cleaning.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Professional gutter guard installation for Lake Norman&apos;s heavy tree canopy
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Lake Norman homes are surrounded by oaks, pines, and hardwoods that clog gutters year-round.
              Best Roofing Now installs micro-mesh, reverse curve, and screen gutter guards that keep debris out
              and water flowing, protecting your home from overflow damage and eliminating constant gutter cleaning.
            </p>

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
              Gutter Guard Solutions for Lake Norman Homes
            </h2>
            <p className="text-gray text-lg">
              We install multiple types of gutter protection to match your Lake Norman home&apos;s specific debris
              challenges, roof style, and budget. Every installation includes a thorough gutter inspection and cleaning.
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
                Why Lake Norman Homeowners Choose Best Roofing Now for Gutter Guards
              </h2>
              <p className="text-gray text-lg mb-8">
                Lake Norman&apos;s dense tree canopy of oaks, pines, sweetgums, and maples creates a constant stream
                of leaves, needles, and seed pods that clog unprotected gutters. Our team knows the specific
                debris challenges of lakefront living and installs the right guards to solve them permanently.
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
                alt="Best Roofing Now - Gutter guard installation experts serving Lake Norman NC"
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
                Tired of Cleaning Gutters on Lake Norman?
              </h2>
              <p className="text-white/90">
                Get a free estimate for professional gutter guard installation from Lake Norman&apos;s trusted experts.
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

      {/* Local Area Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Gutter Protection for Lake Norman&apos;s Heavy Tree Canopy
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Lake Norman is surrounded by mature hardwood and pine forests that create a constant debris
                challenge for homeowners. Oak trees drop leaves in fall and catkins in spring. Pines shed
                needles year-round. Sweetgums produce spiky seed balls that jam gutters. Without proper gutter
                protection, Lake Norman homeowners face clogged gutters, overflowing water, and potential
                foundation and fascia board damage.
              </p>
              <p>
                <strong>Micro-mesh gutter guards</strong> are our top recommendation for Lake Norman homes,
                especially those near pine trees. The surgical-grade stainless steel mesh blocks even the finest
                pine needles and seed pods while allowing water to flow freely. Unlike screen guards that let
                small debris pass through, micro-mesh provides comprehensive protection for Lake Norman&apos;s
                diverse tree debris.
              </p>
              <p>
                We serve all Lake Norman communities including Cornelius, Davidson, Mooresville, Huntersville,
                Denver, and Sherrills Ford. Whether your waterfront home sits under towering pines or your
                lakeside neighborhood is lined with oaks and maples, our team will assess your specific debris
                conditions and install the right gutter guard solution to keep your gutters flowing freely
                for decades.
              </p>
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
              Serving Lake Norman & Surrounding Communities
            </h2>
            <p className="text-gray text-lg">
              Our gutter guard installers serve homeowners throughout the Lake Norman region and surrounding communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Norman Area Communities</h3>
              <div className="flex flex-wrap gap-2">
                {localAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

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

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Work Across the Lake Norman Region
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed projects throughout Lake Norman and the surrounding area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed gutter guard installation on Lake Norman home"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Gutter protection project in Lake Norman area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed project near Lake Norman"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional gutter guard work in Lake Norman community"
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
                Lake Norman Gutter Guard FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about gutter guards for Lake Norman homes.
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
        pageType="service"
        city="Cornelius"
        slug="gutter-guards-lake-norman-nc"
        count={4}
        title="Recent Projects in Lake Norman, NC"
        subtitle="Browse completed projects from the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/gutter-guards-lake-norman-nc`}
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Gutter Guards"
      />

      {/* Lake Norman Guide Cross-Link */}
      <section className="py-8 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray mb-4">Want to learn everything about roofing on Lake Norman?</p>
            <Link href="/lake-norman-roofing-guide" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-lg">
              Read The Complete Lake Norman Roofing Guide (2026) <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Stop Cleaning Gutters on Lake Norman?"
        subtitle="Get a free, no-obligation estimate for gutter guard installation. We'll assess your tree coverage and recommend the best gutter protection for your Lake Norman home."
      />
    </>
  );
}
