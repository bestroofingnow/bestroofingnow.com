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
  Building2,
  CloudRain,
  Search,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  ServiceAreaPageSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Mooresville NC | Trusted Lake Norman Roofers | Best Roofing Now',
  description:
    'Looking for a trusted roofing contractor in Mooresville NC? Best Roofing Now serves Mooresville and Lake Norman from our Charlotte headquarters. BBB A+ rated, veteran-owned. Free estimates for roof repair, replacement, and installation.',
  keywords: [
    'roofing mooresville nc',
    'roofing contractor mooresville nc',
    'mooresville roofers',
    'mooresville nc roofing company',
    'roof repair mooresville nc',
    'roof replacement mooresville nc',
    'lake norman roofers',
    'roofers near mooresville nc',
    'best roofer mooresville',
    'mooresville roof inspection',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-mooresville-nc`,
  },
  openGraph: {
    title: 'Roofing Mooresville NC | Trusted Lake Norman Roofers | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing company serving Mooresville NC and Lake Norman. Licensed and insured with 500+ roofs installed. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/roofing-mooresville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Mooresville NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Mooresville homes including shingle, metal, and tile roofing.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems for Mooresville businesses and race shops.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in Mooresville.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials and extended warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections for Mooresville homeowners with detailed reports.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for Lake Norman.',
    href: '/services/storm-damage',
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
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Mooresville residents need us most.',
  },
];

// Mooresville neighborhoods and areas
const mooresvilleAreas = [
  'Brawley School',
  'Curtis Pond',
  'Davidson Bay',
  'Downtown Mooresville',
  'Lake Norman South',
  'Langtree',
  'Lombardy',
  'Morrison Plantation',
  'Race City',
  'River Highway Area',
  'Rolling Hills',
  'South Iredell',
  'The Farm',
  'The Point',
  'Williamson Road Corridor',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Cornelius', href: '/roofing-cornelius-nc' },
  { name: 'Huntersville', href: '/roofing-huntersville-nc' },
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs specific to Mooresville
const faqs = [
  {
    question: 'Do you provide roofing services in Mooresville NC?',
    answer:
      'Yes! Best Roofing Now proudly serves Mooresville NC and all of Lake Norman from our Charlotte headquarters. We provide complete roofing services including roof repair, replacement, inspection, and storm damage restoration to all Mooresville neighborhoods from Downtown to The Point.',
  },
  {
    question: 'How much does a roof replacement cost in Mooresville NC?',
    answer:
      'Roof replacement costs in Mooresville typically range from $8,000 to $25,000 for most homes, depending on roof size, pitch, material choice, and complexity. Larger lakefront homes or properties with complex roof lines may be higher. We provide free, detailed estimates with transparent pricing.',
  },
  {
    question: 'Can you work on commercial roofing for Mooresville businesses?',
    answer:
      'Absolutely! Mooresville is home to many NASCAR race shops and commercial facilities, and we provide expert commercial roofing services including TPO, EPDM, flat roof systems, and metal roofing. We understand the unique needs of commercial properties and can work around your business hours.',
  },
  {
    question: 'Do you handle insurance claims for storm damage in Mooresville?',
    answer:
      'Yes, we have extensive experience helping Mooresville homeowners with storm damage insurance claims. Lake Norman sees severe weather, and we provide thorough documentation, meet with adjusters, and advocate for fair settlements to restore your roof properly.',
  },
  {
    question: 'What roofing materials work best for Mooresville homes?',
    answer:
      'For Mooresville homes, we typically recommend architectural shingles from CertainTeed, GAF, or Owens Corning for their durability and aesthetic appeal. Metal roofing is popular for its longevity, especially for lakefront properties. We also install tile and specialty roofing materials.',
  },
  {
    question: 'How long does a roof replacement take in Mooresville?',
    answer:
      'Most residential roof replacements in Mooresville are completed in 1-3 days. Larger homes or complex roof designs may take 3-5 days. We work efficiently while maintaining quality standards and always leave your property clean and debris-free.',
  },
  {
    question: 'Do you offer free roof inspections in Mooresville?',
    answer:
      'Yes! We offer completely free roof inspections throughout Mooresville and Lake Norman. Our certified inspectors will thoroughly examine your roof and provide a detailed written report with photos. There\'s no sales pressure - just honest information to help you make informed decisions.',
  },
  {
    question: 'Are you familiar with Mooresville HOA requirements?',
    answer:
      'Yes, we regularly work with HOA communities throughout Mooresville and Iredell County. We can help you select approved materials and colors, and provide the documentation needed for HOA approval before starting your project.',
  },
];

export default function RoofingMooresvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Mooresville NC', url: `${SITE_CONFIG.url}/roofing-mooresville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Mooresville"
        state="NC"
        slug="roofing-mooresville-nc"
        distance={30}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-mooresville-nc`}
        pageName="Roofing Mooresville NC"
        city="Mooresville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Professional roofing services in Mooresville NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Mooresville from Charlotte</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Mooresville NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Trusted Lake Norman Roofers</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert roofing services for Race City with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now serves Mooresville NC and the Lake Norman area from our Charlotte headquarters.
              From residential roofing in Morrison Plantation to commercial projects for race shops, our certified
              team delivers exceptional quality backed by industry-leading warranties.
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
              Complete Roofing Services in Mooresville NC
            </h2>
            <p className="text-gray text-lg">
              From residential repairs to commercial projects, our certified contractors serve all of Mooresville and
              South Iredell County with expert craftsmanship and premium materials.
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
                When you need a roofing contractor serving Mooresville NC, you want experts who deliver on their
                promises. Best Roofing Now has built our reputation on honesty, quality workmanship, and putting
                customers first - values that resonate with Race City residents.
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
                src={IMAGES.realProjects.drone2}
                alt="Completed roofing project in Mooresville NC by Best Roofing Now"
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

      {/* Local Area Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving All of Mooresville & Lake Norman
            </h2>
            <p className="text-gray text-lg">
              From Downtown Mooresville to lakefront communities, we provide expert roofing services throughout
              Race City and Iredell County.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mooresville Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Mooresville Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {mooresvilleAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Lake Norman Cities We Serve</h3>
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

          {/* Mooresville Context */}
          <div className="mt-12 bg-primary/5 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Race City's Trusted Roofing Experts
            </h3>
            <p className="text-gray mb-4">
              Mooresville, known as Race City USA, is home to numerous NASCAR race shops, teams, and automotive
              businesses. We understand the unique roofing needs of both residential homeowners and commercial
              facilities in this vibrant Lake Norman community.
            </p>
            <p className="text-gray mb-4">
              Located at the northern end of Lake Norman, Mooresville offers beautiful waterfront living, established
              neighborhoods like Morrison Plantation and The Point, and a thriving downtown area. Our team serves all
              of Mooresville from our Charlotte headquarters, providing fast response times and reliable service.
            </p>
            <p className="text-gray">
              Whether you're in a lakefront estate, a family home near Brawley School, or own a commercial property
              on the River Highway corridor, Best Roofing Now delivers the quality roofing services that Mooresville
              residents deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Need a Roofer in Mooresville NC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Lake Norman's most trusted roofing company.
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
                Mooresville Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Mooresville NC and Lake Norman.
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
        pageType="location"
        city="Mooresville"
        slug="roofing-mooresville-nc"
        count={4}
        title="Recent Roofing Projects in Mooresville, NC"
        subtitle="Browse completed roofing projects from the Mooresville area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-mooresville-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for Expert Roofing in Mooresville NC?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your Lake Norman home or business."
      />
    </>
  );
}
