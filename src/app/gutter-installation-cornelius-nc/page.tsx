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

export const metadata: Metadata = {
  title: 'Gutter Installation Cornelius NC | Seamless Gutters | Best Roofing Now',
  description:
    'Professional gutter installation in Cornelius NC. Seamless aluminum gutters, gutter guards, and gutter repair for Lake Norman homes. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'gutter installation Cornelius NC',
    'gutters Cornelius NC',
    'seamless gutters Cornelius',
    'gutter company Cornelius NC',
    'gutter repair Cornelius NC',
    'gutter guards Cornelius',
    'aluminum gutters Cornelius NC',
    'gutter replacement Cornelius',
    'Lake Norman gutter installation',
    'Cornelius gutter contractor',
    'downspout installation Cornelius NC',
    'gutter cleaning Cornelius NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-installation-cornelius-nc`,
  },
  openGraph: {
    title: 'Gutter Installation Cornelius NC | Seamless Gutters | Best Roofing Now',
    description:
      'BBB A+ rated gutter installation specialists serving Cornelius and Lake Norman. Custom seamless gutters, gutter guards, and repair services. Free estimates.',
    url: `${SITE_CONFIG.url}/gutter-installation-cornelius-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.gutters,
        width: 1200,
        height: 630,
        alt: 'Gutter installation Cornelius NC - Best Roofing Now seamless gutter services',
      },
    ],
  },
};

// Gutter services offered
const services = [
  {
    icon: Droplets,
    title: 'Seamless Gutter Installation',
    description: 'Custom-fit seamless aluminum gutters made on-site for a perfect fit with no leak points.',
    href: '/services/gutter-installation',
  },
  {
    icon: Shield,
    title: 'Gutter Guard Installation',
    description: 'Quality gutter protection systems to keep leaves and debris out of your gutters.',
    href: '/services/gutter-guards',
  },
  {
    icon: Wrench,
    title: 'Gutter Repair',
    description: 'Fast, reliable repairs for leaking, sagging, or damaged gutters and downspouts.',
    href: '/services/gutter-repair',
  },
  {
    icon: Paintbrush,
    title: 'Gutter Cleaning',
    description: 'Professional gutter cleaning to remove debris and ensure proper water flow.',
    href: '/services/gutter-cleaning',
  },
  {
    icon: Ruler,
    title: 'Downspout Installation',
    description: 'Properly sized downspouts and extensions to direct water away from your foundation.',
    href: '/services/gutter-installation',
  },
  {
    icon: Home,
    title: 'Gutter Replacement',
    description: 'Complete gutter system replacement with premium materials and expert installation.',
    href: '/services/gutter-installation',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Lake Norman homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Custom Fabrication',
    description: 'Seamless gutters made on-site with our mobile gutter machine for a perfect fit.',
  },
  {
    icon: Users,
    title: 'Expert Installers',
    description: 'Trained professionals who ensure proper pitch, secure hangers, and quality seams.',
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Many gutter installations and repairs completed in just one day.',
  },
];

// Cornelius neighborhoods and areas
const corneliusAreas = [
  'Downtown Cornelius',
  'Antiquity',
  'Bailey\'s Glen',
  'Jetton Road',
  'Smithville',
  'Westmoreland',
  'The Peninsula',
  'Magnolia Estates',
  'Oakhurst',
  'Norman Shores',
  'Sail View',
  'Harbor Cove',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Denver', href: '/gutter-installation-denver-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Lake Norman', href: '/locations/lake-norman' },
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

// FAQs about gutter installation in Cornelius
const faqs = [
  {
    question: 'Why should I choose seamless gutters for my Cornelius home?',
    answer:
      'Seamless gutters are the gold standard for Lake Norman homes because they have no joints along their length where leaks can develop. Traditional sectional gutters have seams every 10-20 feet that can separate and leak over time. Our seamless gutters are custom-made on-site to fit your home perfectly, ensuring maximum durability and a clean, attractive appearance.',
  },
  {
    question: 'How much does gutter installation cost in Cornelius NC?',
    answer:
      'Gutter installation in Cornelius typically ranges from $4-12 per linear foot, depending on the material, size, and complexity of your home. A typical home requires 150-200 linear feet of gutters. We provide free on-site estimates with transparent pricing and no hidden fees. Financing options are also available for larger projects.',
  },
  {
    question: 'What size gutters do you recommend for Cornelius homes?',
    answer:
      'We typically recommend 5-inch seamless gutters for most Cornelius homes, which handle normal rainfall well. However, homes with large roof areas, steep pitches, or in heavily wooded areas may benefit from 6-inch gutters for extra capacity. We also recommend 3x4 downspouts for maximum flow during heavy Lake Norman thunderstorms.',
  },
  {
    question: 'How long does gutter installation take?',
    answer:
      'Most residential gutter installations in Cornelius are completed in just one day. Larger homes or homes with complex rooflines may require two days. We bring our mobile gutter fabrication machine to your property, custom-make each gutter run on-site, and install everything with minimal disruption to your day.',
  },
  {
    question: 'Do you offer gutter guards in Cornelius NC?',
    answer:
      'Yes! We install several types of gutter protection systems to match your needs and budget. With the abundance of pine and oak trees around Lake Norman, gutter guards are an excellent investment. Options include micro-mesh guards for fine debris, screen guards for leaves, and solid covers with surface tension technology.',
  },
  {
    question: 'What colors are available for gutters in Cornelius?',
    answer:
      'We offer a wide range of gutter colors to complement your home\'s exterior. Popular choices in Cornelius include white, almond, clay, musket brown, and bronze. Our seamless aluminum gutters are factory-painted with a baked enamel finish that resists fading, chipping, and peeling for years of attractive performance.',
  },
  {
    question: 'How often should I clean my gutters in Cornelius?',
    answer:
      'With Lake Norman\'s heavy tree coverage, we recommend cleaning gutters at least twice per year - once in late spring after pollen season and again in late fall after the leaves have dropped. Homes surrounded by pine trees may need more frequent cleaning due to pine needle accumulation. Gutter guards can significantly reduce cleaning frequency.',
  },
  {
    question: 'Do you repair existing gutters in Cornelius NC?',
    answer:
      'Yes, we provide comprehensive gutter repair services in Cornelius. Common repairs include resealing leaky seams, reattaching sagging gutters, replacing damaged sections, clearing clogs, and fixing or replacing downspouts. Sometimes repair is more cost-effective than replacement; we\'ll provide an honest assessment of your options.',
  },
];

export default function GutterInstallationCorneliusNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gutter Installation Cornelius NC', url: `${SITE_CONFIG.url}/gutter-installation-cornelius-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/gutter-installation-cornelius-nc`}
        pageName="Gutter Installation Cornelius NC"
        city="Cornelius"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does gutter installation cost in Cornelius NC?',
            answer: 'Gutter installation in Cornelius NC costs $6-$15 per linear foot for seamless aluminum gutters, averaging $1,200-$3,000 for Lake Norman homes. Best Roofing Now serves Cornelius with free estimates and lifetime warranties.',
            speakableAnswer: 'Gutter installation in Cornelius costs $6-15 per foot. Best Roofing Now offers free estimates. Call 704-605-6047.',
          },
          {
            question: 'Who installs gutters in Cornelius and Lake Norman?',
            answer: 'Best Roofing Now is the top-rated gutter installer serving Cornelius and Lake Norman communities with a 5-star Google rating. They install seamless aluminum gutters made on-site with color matching to your home.',
            speakableAnswer: 'Best Roofing Now installs gutters in Cornelius and Lake Norman with 5-star ratings. Call 704-605-6047.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.gutters}
            alt="Gutter installation Cornelius NC - Best Roofing Now seamless gutter experts"
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
              <span className="text-accent-light">Cornelius NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Custom seamless gutters for Lake Norman homes - made on-site for a perfect fit
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Protect your Cornelius home from water damage with professionally installed seamless gutters from
              Best Roofing Now. Our custom gutter systems are fabricated on-site to fit your home perfectly,
              with no seams to leak and a wide range of colors to match your exterior.
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
              Gutter Services in Cornelius NC
            </h2>
            <p className="text-gray text-lg">
              From seamless gutter installation to repairs and gutter guards, we provide complete gutter
              solutions for Cornelius and Lake Norman homes.
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
                Why Cornelius Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When it comes to gutter installation in Cornelius, quality matters. Best Roofing Now delivers
                premium seamless gutters with expert installation, protecting your Lake Norman home from
                water damage for years to come.
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
                alt="Professional gutter installation completed in Cornelius NC - Best Roofing Now"
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
              Gutter Colors to Match Your Home
            </h2>
            <p className="text-gray text-lg">
              Choose from a wide selection of colors to complement your Cornelius home's exterior.
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
                Ready for New Gutters in Cornelius?
              </h2>
              <p className="text-white/90">
                Get a free estimate for seamless gutter installation, repair, or gutter guards.
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
              Serving Cornelius & Lake Norman Area
            </h2>
            <p className="text-gray text-lg">
              Our gutter installation team serves homeowners throughout Cornelius and the greater Lake Norman region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Cornelius Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Cornelius Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {corneliusAreas.map((area) => (
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
              Benefits of Seamless Gutters
            </h2>
            <p className="text-gray text-lg">
              Why Cornelius homeowners are choosing seamless gutters over traditional sectional systems.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">No Leak Points</h3>
              <p className="text-gray text-sm">
                Seamless gutters have no joints along their length, eliminating the most common source of gutter leaks.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Custom Fit</h3>
              <p className="text-gray text-sm">
                Made on-site to match your home's exact measurements for a clean, professional appearance.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Low Maintenance</h3>
              <p className="text-gray text-sm">
                Fewer seams mean less debris buildup and reduced maintenance compared to sectional gutters.
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
              Our Work in Cornelius
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of gutter installations completed for Cornelius and Lake Norman homeowners.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Seamless gutter installation completed in Cornelius NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Gutter and roof installation in Lake Norman area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed gutter installation in Cornelius"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional gutter installation project in Cornelius NC"
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
                Gutter Installation FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about gutter installation in Cornelius NC.
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
        description="See why proper gutter installation is critical to protecting your Cornelius home's foundation."
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for Seamless Gutters in Cornelius?"
        subtitle="Get a free, no-obligation estimate for custom seamless gutters. We'll measure your home, recommend the right size and style, and provide transparent pricing with no hidden fees."
      />
    </>
  );
}
