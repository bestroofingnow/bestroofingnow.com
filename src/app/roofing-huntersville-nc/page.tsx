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
import { BreadcrumbSchema, FAQSchema, ServiceAreaPageSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Huntersville NC | Top-Rated Roofers | Best Roofing Now',
  description:
    'Looking for top-rated roofers in Huntersville NC? Best Roofing Now provides expert roofing services to Huntersville and the Lake Norman area. BBB A+ rated, veteran-owned. Free estimates for roof repair, replacement, and installation.',
  keywords: [
    'roofing huntersville nc',
    'roofers huntersville nc',
    'roofing contractor huntersville',
    'roofing company huntersville nc',
    'huntersville roofing',
    'local roofers huntersville nc',
    'huntersville nc roofing company',
    'best roofers huntersville nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-huntersville-nc`,
  },
  openGraph: {
    title: 'Roofing Huntersville NC | Top-Rated Roofers | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing company serving Huntersville NC and Lake Norman. Licensed and insured with 500+ roofs installed. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/roofing-huntersville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Huntersville NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Huntersville homes including shingle, metal, and tile roofing.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems for Huntersville businesses and commercial properties.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in Huntersville.',
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
    description: 'Free comprehensive inspections for Huntersville homeowners with detailed reports.',
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
    description: 'Round-the-clock emergency roofing services when Huntersville residents need us most.',
  },
];

// Huntersville neighborhoods and areas
const huntersvilleAreas = [
  'Birkdale Village',
  'Bryton',
  'Cedarfield',
  'Downtown Huntersville',
  'Gilead Ridge',
  'Huntington Green',
  'Jetton Road Area',
  'Lake Norman',
  'Northstone',
  'Olmsted',
  'Rosedale',
  'Skybrook',
  'The Hamptons',
  'Torrence Creek',
  'Vermillion',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Cornelius', href: '/roofing-cornelius-nc' },
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs specific to Huntersville
const faqs = [
  {
    question: 'Do you provide roofing services in Huntersville NC?',
    answer:
      'Yes! Best Roofing Now proudly serves Huntersville NC and all of the Lake Norman region from our Charlotte headquarters. We provide complete roofing services including roof repair, replacement, inspection, and storm damage restoration to all Huntersville neighborhoods from Birkdale Village to Skybrook.',
  },
  {
    question: 'How much does a roof replacement cost in Huntersville NC?',
    answer:
      'Roof replacement costs in Huntersville typically range from $8,000 to $25,000 for most homes, depending on roof size, pitch, material choice, and complexity. Larger lakefront homes or properties with complex roof lines may be higher. We provide free, detailed estimates with transparent pricing.',
  },
  {
    question: 'What makes Huntersville roofing needs unique?',
    answer:
      'Huntersville sits on the shores of Lake Norman, exposing homes to lake-effect weather patterns including humidity, strong winds, and severe storms. Our team understands these conditions and recommends roofing materials and installation methods that withstand the Lake Norman climate.',
  },
  {
    question: 'Do you handle insurance claims for storm damage in Huntersville?',
    answer:
      'Yes, we have extensive experience helping Huntersville homeowners with storm damage insurance claims. Lake Norman sees severe weather, and we provide thorough documentation, meet with adjusters, and advocate for fair settlements to restore your roof properly.',
  },
  {
    question: 'What roofing materials work best for Huntersville homes?',
    answer:
      'For Huntersville homes, we typically recommend architectural shingles from CertainTeed, GAF, or Owens Corning for their durability and aesthetic appeal. Metal roofing is popular for its longevity, especially for lakefront properties. We also install tile and specialty roofing materials.',
  },
  {
    question: 'How long does a roof replacement take in Huntersville?',
    answer:
      'Most residential roof replacements in Huntersville are completed in 1-3 days. Larger homes or complex roof designs may take 3-5 days. We work efficiently while maintaining quality standards and always leave your property clean and debris-free.',
  },
  {
    question: 'Do you offer free roof inspections in Huntersville?',
    answer:
      'Yes! We offer completely free roof inspections throughout Huntersville and Lake Norman. Our certified inspectors will thoroughly examine your roof and provide a detailed written report with photos. There\'s no sales pressure - just honest information to help you make informed decisions.',
  },
  {
    question: 'Are you familiar with Huntersville HOA requirements?',
    answer:
      'Yes, we regularly work with HOA communities throughout Huntersville and Mecklenburg County. We can help you select approved materials and colors, and provide the documentation needed for HOA approval before starting your project.',
  },
];

export default function RoofingHuntersvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Huntersville NC', url: `${SITE_CONFIG.url}/roofing-huntersville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Huntersville"
        state="NC"
        slug="roofing-huntersville-nc"
        distance={20}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-huntersville-nc`}
        pageName="Roofing Huntersville NC"
        city="Huntersville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Professional roofing services in Huntersville NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Huntersville & Lake Norman</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Huntersville NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Top-Rated Lake Norman Roofers</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert roofing services for Huntersville with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now serves Huntersville NC and the Lake Norman area from our Charlotte headquarters.
              From residential roofing in Birkdale Village to lakefront properties, our certified
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
              Complete Roofing Services in Huntersville NC
            </h2>
            <p className="text-gray text-lg">
              From residential repairs to commercial projects, our certified contractors serve all of Huntersville and
              the Lake Norman region with expert craftsmanship and premium materials.
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
                Why Huntersville Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need a roofing contractor serving Huntersville NC, you want experts who deliver on their
                promises. Best Roofing Now has built our reputation on honesty, quality workmanship, and putting
                customers first - values that resonate with Lake Norman residents.
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
                alt="Completed roofing project in Huntersville NC by Best Roofing Now"
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
              Serving All of Huntersville & Lake Norman
            </h2>
            <p className="text-gray text-lg">
              From Downtown Huntersville to lakefront communities, we provide expert roofing services throughout
              northern Mecklenburg County and Lake Norman.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Huntersville Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Huntersville Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {huntersvilleAreas.map((area) => (
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

          {/* Huntersville Context */}
          <div className="mt-12 bg-primary/5 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Lake Norman&apos;s Gateway Community
            </h3>
            <p className="text-gray mb-4">
              Huntersville is one of the most sought-after communities on Lake Norman, offering the perfect blend
              of suburban convenience and lakeside living. Located just north of Charlotte, Huntersville provides
              easy access to Lake Norman&apos;s recreational opportunities while maintaining a strong sense of community.
            </p>
            <p className="text-gray mb-4">
              From the vibrant Birkdale Village shopping and dining district to established neighborhoods like
              Skybrook and Northstone, Huntersville features diverse housing options from starter homes to
              luxurious lakefront estates. Our team understands the unique character of each community.
            </p>
            <p className="text-gray">
              Whether you&apos;re in a townhome near Birkdale, a family home in Vermillion, or a waterfront property
              on Lake Norman, Best Roofing Now delivers the quality roofing services that Huntersville
              residents deserve. We&apos;re just a short drive from our Charlotte headquarters, ensuring fast
              response times and reliable service.
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
                Need a Roofer in Huntersville NC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Lake Norman&apos;s most trusted roofing company.
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
                Huntersville Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Huntersville NC and Lake Norman.
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

      {/* Service City Links */}
      <ServiceCityLinks
        city="Huntersville"
        citySlug="huntersville-nc"
        title="Complete Roofing Services in Huntersville NC"
        subtitle="From repairs to replacements, we offer comprehensive roofing solutions for Lake Norman homes."
      />

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Huntersville"
        service="Roofing Services"
        serviceSlug="roofing"
        title="Roofing Services in Nearby Lake Norman Cities"
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for Expert Roofing in Huntersville NC?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your Lake Norman home or business."
      />
    </>
  );
}
