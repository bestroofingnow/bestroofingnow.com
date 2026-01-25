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
import { BreadcrumbSchema, FAQSchema, ServiceAreaPageSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Mint Hill NC | East Charlotte Roofers | Best Roofing Now',
  description:
    'Need a roofer in Mint Hill NC? Best Roofing Now serves Mint Hill from our Charlotte headquarters. BBB A+ rated, veteran-owned. Expert roof repair, replacement, and installation for larger properties in East Charlotte.',
  keywords: [
    'roofing mint hill nc',
    'roof repair mint hill nc',
    'roofers mint hill nc',
    'roofing company mint hill nc',
    'roof replacement mint hill nc',
    'mint hill roofing contractor',
    'east charlotte roofers',
    'mint hill nc roofer',
    'roofing contractors near me mint hill',
    'best roofer mint hill nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-mint-hill-nc`,
  },
  openGraph: {
    title: 'Roofing Mint Hill NC | East Charlotte Roofers | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing company serving Mint Hill NC from our Charlotte headquarters. Expert roofing for larger properties and rural estates in East Charlotte.',
    url: `${SITE_CONFIG.url}/roofing-mint-hill-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Mint Hill NC - Best Roofing Now team',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Mint Hill homes, including larger properties and estates.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems for Mint Hill businesses and agricultural buildings.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in Mint Hill.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials for large and complex roofs.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections for Mint Hill properties of all sizes.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance in Mint Hill.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte area homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Large Property Experience',
    description: 'Experienced with larger properties and complex roof designs common in Mint Hill.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: 'Fast Response Time',
    description: 'Serving Mint Hill from nearby Charlotte means quick response for your roofing needs.',
  },
];

// Mint Hill areas
const mintHillAreas = [
  'Downtown Mint Hill',
  'Bain Estates',
  'Cheval',
  'Kuykendall',
  'Fairview',
  'Clear Creek',
  'Lebanon',
  'Goose Creek',
  'Brief Road Area',
  'Matthews-Mint Hill Road',
  'Lawyers Road',
  'Idlewild Area',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Matthews', href: '/roofing-matthews-nc' },
  { name: 'Indian Trail', href: '/roofing-indian-trail-nc' },
  { name: 'Stallings', href: '/locations/stallings-nc' },
  { name: 'Harrisburg', href: '/locations/harrisburg-nc' },
  { name: 'Concord', href: '/roofing-concord-nc' },
  { name: 'Monroe', href: '/locations/monroe-nc' },
  { name: 'Albemarle', href: '/locations/albemarle-nc' },
];

// FAQs specific to Mint Hill
const faqs = [
  {
    question: 'Do you provide roofing services in Mint Hill NC?',
    answer:
      'Yes! Best Roofing Now proudly serves Mint Hill NC from our Charlotte headquarters, just 11 miles away. We provide complete roofing services throughout Mint Hill, including the rural areas and larger properties the community is known for.',
  },
  {
    question: 'Can you handle larger roofs and complex properties in Mint Hill?',
    answer:
      'Absolutely. Mint Hill is known for its larger lots and spacious homes. Our team has extensive experience with larger residential roofs, multi-structure properties, and complex roof designs. We have the crew size and expertise to handle projects of any scale.',
  },
  {
    question: 'How quickly can you respond to roofing emergencies in Mint Hill?',
    answer:
      'Our proximity to Mint Hill allows us to respond quickly to roofing emergencies. Typically, we can be on-site within 30-45 minutes for urgent situations like active leaks or storm damage. We offer 24/7 emergency services for the Mint Hill area.',
  },
  {
    question: 'What roofing materials work best for Mint Hill homes?',
    answer:
      'Mint Hill homes often benefit from premium architectural shingles like CertainTeed Landmark Pro or GAF Timberline HDZ for their durability and aesthetic appeal. For larger properties, metal roofing is increasingly popular due to its longevity and low maintenance. We also install specialty materials for historic or custom homes.',
  },
  {
    question: 'How much does a new roof cost in Mint Hill NC?',
    answer:
      'The cost of a new roof in Mint Hill typically ranges from $10,000 to $35,000 or more, as many Mint Hill homes are larger than average. Factors include roof size, pitch, accessibility, and material choice. We provide free, detailed estimates with no hidden fees.',
  },
  {
    question: 'Do you offer roofing services for barns and outbuildings in Mint Hill?',
    answer:
      'Yes, we provide roofing services for all types of structures including barns, detached garages, workshops, and other outbuildings. Mint Hill\'s rural character means many properties have multiple structures, and we can handle them all with one convenient visit.',
  },
  {
    question: 'Do you offer free roof inspections in Mint Hill?',
    answer:
      'Yes, we offer completely free roof inspections throughout Mint Hill. Our certified inspectors will thoroughly examine your roof - even on larger properties - and provide a detailed written report with photos. There is no obligation to hire us afterward.',
  },
  {
    question: 'Do you help with insurance claims for storm damage in Mint Hill?',
    answer:
      'Absolutely. Mint Hill\'s rural setting can mean more exposure to storm damage. We have extensive experience helping homeowners with insurance claims and provide thorough documentation, adjuster coordination, and advocacy for fair settlements.',
  },
];

export default function RoofingMintHillNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Mint Hill NC', url: `${SITE_CONFIG.url}/roofing-mint-hill-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Mint Hill"
        state="NC"
        county="Mecklenburg"
        distance={11}
        slug="mint-hill-nc"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Professional roofing services in Mint Hill NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Mint Hill from our Charlotte headquarters</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Mint Hill NC
              <br className="hidden md:block" />
              <span className="text-accent-light">East Charlotte Roofers</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert roofing for larger properties and rural estates
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now proudly serves Mint Hill NC from our Charlotte location, just 11 miles away. Our
              veteran-owned, BBB A+ rated company has the experience and crew capacity to handle the larger properties
              and diverse structures that define this unique East Charlotte community.
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

      {/* About Mint Hill Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Your Trusted Roofer in Mint Hill NC
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Mint Hill stands out among Charlotte suburbs for its rural character, larger lots, and peaceful
                atmosphere. Located just 11 miles from our Charlotte headquarters, we understand what makes roofing
                in Mint Hill unique - from sprawling properties with multiple structures to homes nestled among
                mature trees.
              </p>
              <p>
                The larger properties common in Mint Hill often mean larger roofs with more complex designs. Many
                homes also have detached garages, workshops, barns, or other outbuildings that need roofing attention.
                Our team has the experience and crew capacity to handle projects of any scale, ensuring consistent
                quality across all your structures.
              </p>
              <p>
                Mint Hill's tree-lined streets and rural setting add charm but can also create roofing challenges.
                Overhanging branches, leaf accumulation, and exposure to wind all affect roof longevity. We help
                Mint Hill homeowners choose materials and maintenance plans that account for these local conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roofing Services in Mint Hill NC
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to large-scale replacements, our certified contractors handle all your roofing
              needs with expert craftsmanship and premium materials.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
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
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Mint Hill Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need a roofing company in Mint Hill NC, you want a team that understands the unique needs
                of larger properties and rural settings. Best Roofing Now brings the expertise, crew size, and
                commitment to quality that Mint Hill homeowners expect.
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
                src={IMAGES.realProjects.project1}
                alt="Professional roofing project completed in Mint Hill NC area"
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
                Need a Roofer in Mint Hill NC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from East Charlotte's trusted roofing experts.
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
              Serving All of Mint Hill NC & Surrounding Areas
            </h2>
            <p className="text-gray text-lg">
              Our roofing contractors serve homeowners throughout Mint Hill and nearby East Charlotte communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mint Hill Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Mint Hill Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {mintHillAreas.map((area) => (
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
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
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
                Mint Hill Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Mint Hill NC.
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

      {/* Final CTA */}
      <CTASection
        title="Ready for Expert Roofing Services in Mint Hill NC?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your property's unique needs."
      />
    </>
  );
}
