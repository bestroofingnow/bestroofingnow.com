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
  Droplets,
  Home,
  Wind,
  Flame,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Flashing Repair Charlotte NC | Stop Leaks | Best Roofing Now',
  description:
    'Expert roof flashing repair in Charlotte NC. Stop leaks around chimneys, vents, skylights, and walls. Licensed roofers, free inspections. Call Best Roofing Now today!',
  keywords: [
    'roof flashing repair charlotte nc',
    'flashing replacement charlotte',
    'chimney flashing repair charlotte nc',
    'skylight flashing repair charlotte',
    'vent flashing repair charlotte nc',
    'roof flashing leak charlotte',
    'step flashing repair charlotte',
    'counter flashing charlotte nc',
    'roof valley flashing charlotte',
    'flashing around chimney charlotte nc',
    'metal flashing repair charlotte',
    'roof flashing installation charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-flashing-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Flashing Repair Charlotte NC | Stop Leaks | Best Roofing Now',
    description:
      'Expert flashing repair around chimneys, vents, skylights, and walls. Stop leaks at their source. BBB A+ rated, free inspections. Charlotte NC.',
    url: `${SITE_CONFIG.url}/roof-flashing-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero4,
        width: 1200,
        height: 630,
        alt: 'Professional roof flashing repair in Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Types of flashing we repair
const flashingTypes = [
  {
    icon: Flame,
    title: 'Chimney Flashing',
    description: 'Step flashing, counter flashing, and cricket installation around masonry chimneys.',
  },
  {
    icon: Wind,
    title: 'Vent Pipe Flashing',
    description: 'Repair or replace rubber boots and metal flashing around plumbing vents.',
  },
  {
    icon: Home,
    title: 'Skylight Flashing',
    description: 'Proper sealing and flashing around skylights to prevent leaks.',
  },
  {
    icon: Droplets,
    title: 'Valley Flashing',
    description: 'Metal flashing in roof valleys where two roof planes meet.',
  },
];

// Signs of flashing failure
const flashingProblems = [
  {
    title: 'Water Stains Near Chimney',
    description: 'Brown stains on ceiling or walls near your chimney indicate failing chimney flashing.',
  },
  {
    title: 'Leaks During Heavy Rain',
    description: 'Leaks that only appear during heavy storms often point to flashing issues.',
  },
  {
    title: 'Visible Rust or Corrosion',
    description: 'Rusted or corroded flashing can no longer provide proper waterproofing.',
  },
  {
    title: 'Separated or Lifted Flashing',
    description: 'Flashing that has pulled away from the surface it should seal against.',
  },
  {
    title: 'Missing Caulk or Sealant',
    description: 'Dried, cracked, or missing sealant allows water to penetrate.',
  },
  {
    title: 'Damp Attic Near Penetrations',
    description: 'Moisture in your attic near vents, chimneys, or skylights.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte homeowners.`,
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
    title: 'Flashing Experts',
    description: 'Specialized experience with all types of roof flashing repairs and installations.',
  },
  {
    icon: Clock,
    title: 'Fast Service',
    description: 'Most flashing repairs completed same-day or within 1-2 days.',
  },
];

// FAQs
const faqs = [
  {
    question: 'What is roof flashing and why is it important?',
    answer:
      'Roof flashing is thin metal (usually aluminum, copper, or galvanized steel) installed at vulnerable points where the roof meets walls, chimneys, vents, skylights, or valleys. Flashing creates a waterproof barrier that directs water away from these critical junctions. Without properly functioning flashing, water can seep into your home and cause significant damage.',
  },
  {
    question: 'How much does roof flashing repair cost in Charlotte NC?',
    answer:
      'Flashing repair costs in Charlotte typically range from $200 to $800 depending on the location and extent of repairs needed. Simple vent boot replacements start around $150-$250, while chimney flashing replacement can run $400-$1,000+ depending on chimney size and complexity. We provide free inspections and detailed quotes.',
  },
  {
    question: 'How do I know if my roof flashing needs repair?',
    answer:
      'Common signs include water stains on ceilings or walls near your chimney, skylights, or vents; leaks that appear during heavy rain; visible rust, cracks, or separation in the flashing; missing or deteriorated caulk/sealant; and damp spots in your attic near roof penetrations. We offer free inspections to assess your flashing condition.',
  },
  {
    question: 'Can you repair flashing without replacing the whole roof?',
    answer:
      'Yes! Flashing repair is a common, standalone repair that doesn\'t require roof replacement. In most cases, we can repair or replace just the failed flashing without disturbing the surrounding shingles (or with minimal shingle work). This is much more cost-effective than full roof replacement when the rest of your roof is in good condition.',
  },
  {
    question: 'What causes roof flashing to fail?',
    answer:
      'Flashing fails due to age and weathering, thermal expansion/contraction, improper original installation, corrosion, storm damage, settled structures causing separation, and deteriorated sealants. Charlotte\'s hot summers and freeze-thaw cycles in winter are particularly hard on flashing and sealants.',
  },
  {
    question: 'How long does roof flashing last?',
    answer:
      'Quality roof flashing typically lasts 15-30 years depending on material and installation quality. Aluminum flashing lasts 15-20 years, galvanized steel 20-25 years, and copper can last 50+ years. However, the sealants used with flashing typically need reapplication every 5-10 years to maintain waterproofing.',
  },
  {
    question: 'Should I try to repair roof flashing myself?',
    answer:
      'We don\'t recommend DIY flashing repair. Improper installation can actually make leaks worse and void roof warranties. Flashing must be properly integrated with roofing materials, and repairs often require working on steep or high roofs. Professional installation ensures the repair is done correctly and safely.',
  },
  {
    question: 'Do you offer warranties on flashing repair?',
    answer:
      'Yes, all our flashing repairs are backed by our workmanship warranty. We also use quality materials that carry manufacturer warranties. During your free inspection, we\'ll discuss warranty coverage specific to your repair needs.',
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

export default function RoofFlashingRepairCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Flashing Repair Charlotte NC', url: `${SITE_CONFIG.url}/roof-flashing-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero4}
            alt="Professional roof flashing repair in Charlotte NC - Best Roofing Now experts at work"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Droplets className="w-4 h-4" />
              <span className="text-sm font-semibold">Stop Leaks at the Source</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Flashing Repair <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert Flashing Repair for Chimneys, Vents, Skylights & More
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Most roof leaks originate at flashing points - where your roof meets walls, chimneys, vents,
              and skylights. Best Roofing Now specializes in flashing repair and replacement to stop leaks
              permanently. Free inspections to identify and fix the problem.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Inspection
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

      {/* Flashing Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Types of Flashing We Repair
            </h2>
            <p className="text-gray text-lg">
              Every roof has multiple flashing points that can fail over time. We repair and replace
              all types of roof flashing to ensure complete waterproofing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashingTypes.map((type) => (
              <div
                key={type.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{type.title}</h3>
                <p className="text-gray text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs of Flashing Failure */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Signs Your Flashing Needs Repair
              </h2>
              <p className="text-gray text-lg mb-8">
                Flashing problems are often the hidden cause of persistent roof leaks. Here are
                warning signs to watch for:
              </p>
              <div className="grid gap-4">
                {flashingProblems.map((problem) => (
                  <div key={problem.title} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-dark">{problem.title}</h3>
                      <p className="text-gray text-sm">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.projects.closeup1}
                alt="Roof flashing inspection and repair - Best Roofing Now Charlotte NC"
                width={600}
                height={500}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Free Inspection</p>
                    <p className="text-sm text-gray">Find Hidden Problems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Trusts Us for Flashing Repair
            </h2>
            <p className="text-gray text-lg">
              Proper flashing repair requires expertise and attention to detail. We deliver quality
              repairs that last.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
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
                Suspect Flashing Problems? Get a Free Inspection
              </h2>
              <p className="text-white/90">
                We'll identify the source of your leak and provide an honest repair recommendation.
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
                Schedule Inspection
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
              Flashing Repair Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We provide expert flashing repair services across the Greater Charlotte metro area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
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
                Roof Flashing Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about flashing repair in Charlotte.
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
        title="Stop Flashing Leaks for Good"
        subtitle="Get a free inspection from Charlotte's flashing repair experts. We'll find the problem and fix it right the first time."
      />
    </>
  );
}
