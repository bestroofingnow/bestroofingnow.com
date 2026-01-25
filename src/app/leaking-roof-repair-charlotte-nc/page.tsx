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
  AlertTriangle,
  Search,
  Wrench,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Leaking Roof Repair Charlotte NC | Find & Fix Leaks Fast | Best Roofing Now',
  description:
    'Expert leaking roof repair in Charlotte NC. Fast leak detection and permanent fixes by licensed roofers. 24/7 emergency response, free inspections. Stop water damage now - call Best Roofing Now!',
  keywords: [
    'leaking roof repair charlotte nc',
    'roof leak fix charlotte',
    'roof leak repair charlotte nc',
    'fix leaking roof charlotte',
    'emergency roof leak repair charlotte',
    'water leak roof repair charlotte nc',
    'roof leak detection charlotte',
    'stop roof leak charlotte',
    'ceiling leak repair charlotte nc',
    'roof water damage repair charlotte',
    'licensed roof leak repair charlotte',
    'roof leak specialist charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/leaking-roof-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Leaking Roof Repair Charlotte NC | Find & Fix Leaks Fast | Best Roofing Now',
    description:
      'Expert leak detection and permanent roof leak repairs in Charlotte NC. 24/7 emergency response. BBB A+ rated, veteran-owned. Free inspections available.',
    url: `${SITE_CONFIG.url}/leaking-roof-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Professional leaking roof repair service in Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Common leak sources
const leakSources = [
  {
    icon: Droplets,
    title: 'Damaged Shingles',
    description: 'Cracked, curling, or missing shingles allow water to penetrate the roof deck.',
  },
  {
    icon: Wrench,
    title: 'Flashing Failures',
    description: 'Deteriorated flashing around chimneys, vents, and skylights is a top leak source.',
  },
  {
    icon: AlertTriangle,
    title: 'Clogged Gutters',
    description: 'Backed-up gutters cause water to pool and seep under roofing materials.',
  },
  {
    icon: Search,
    title: 'Vent Boot Cracks',
    description: 'Rubber boots around pipe vents crack over time, creating entry points for water.',
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
    title: 'Leak Detection Experts',
    description: 'Advanced techniques to find hidden leaks and address the root cause, not just symptoms.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency leak repair when you need us most.',
  },
];

// Repair process
const repairProcess = [
  {
    step: '1',
    title: 'Emergency Response',
    description: 'We respond quickly to minimize water damage. Temporary protection if needed while planning permanent repairs.',
  },
  {
    step: '2',
    title: 'Leak Detection',
    description: 'Thorough inspection inside and out to locate the exact source of the leak - not just where water appears.',
  },
  {
    step: '3',
    title: 'Permanent Repair',
    description: 'Professional repair using quality materials to fix the leak right the first time with lasting results.',
  },
  {
    step: '4',
    title: 'Verification',
    description: 'Water testing to confirm the repair is complete and your roof is watertight.',
  },
];

// FAQs
const faqs = [
  {
    question: 'How quickly can you respond to a roof leak emergency in Charlotte?',
    answer:
      'We offer 24/7 emergency response for roof leaks in Charlotte and surrounding areas. During business hours, we can often be on-site within 1-2 hours. After hours, we respond as quickly as possible to prevent further water damage. Call us immediately at (704) 605-6047 when you discover a leak.',
  },
  {
    question: 'How much does it cost to fix a leaking roof in Charlotte NC?',
    answer:
      'Roof leak repairs in Charlotte typically range from $200 to $1,500 depending on the leak source and extent of damage. Simple repairs like replacing a vent boot may cost $200-$400, while more complex issues like extensive flashing repairs can run $800-$1,500. We provide free inspections and upfront quotes with no hidden fees.',
  },
  {
    question: 'Can you find a leak if I can\'t see where it\'s coming from?',
    answer:
      'Yes! Finding hidden leaks is one of our specialties. Water can travel along rafters and sheathing before dripping into your living space, making the source hard to identify. We use systematic inspection techniques, moisture meters, and years of experience to trace leaks back to their origin point.',
  },
  {
    question: 'Should I try to fix a roof leak myself?',
    answer:
      'We strongly recommend against DIY roof leak repairs. Without proper training, you may not find the actual source of the leak, leading to continued water damage. Additionally, roof work is dangerous without proper safety equipment. A professional repair ensures the job is done right and maintains your roof warranty.',
  },
  {
    question: 'Will my homeowners insurance cover roof leak repair?',
    answer:
      'It depends on the cause. Storm damage (hail, wind, fallen trees) is typically covered. However, leaks from normal wear and tear or lack of maintenance are usually not covered. We can help document damage and work with your insurance company if your leak is storm-related.',
  },
  {
    question: 'How do I know if I have a roof leak vs. condensation problem?',
    answer:
      'Roof leaks typically worsen during rain, while condensation issues often occur in cold weather when warm, moist indoor air meets cold surfaces. Leak stains are usually brown from picking up dirt, while condensation often appears as clear water. Our inspection will determine the true cause and appropriate solution.',
  },
  {
    question: 'What should I do while waiting for roof leak repair?',
    answer:
      'Place buckets or containers under drips to catch water. If water is pooling on the ceiling, carefully puncture a small hole to let it drain into a container - this prevents ceiling collapse. Move valuables away from the leak area. Take photos for insurance purposes. Avoid going on the roof yourself.',
  },
  {
    question: 'Do you repair all types of roof leaks?',
    answer:
      'Yes, we repair leaks on all residential roofing systems including asphalt shingles, metal roofing, tile roofs, and flat roofs. We also handle commercial roof leak repairs for TPO, EPDM, and other commercial systems. No leak is too big or too small for our experienced team.',
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

export default function LeakingRoofRepairCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Leaking Roof Repair Charlotte NC', url: `${SITE_CONFIG.url}/leaking-roof-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Professional leaking roof repair in Charlotte NC - Best Roofing Now crew fixing a roof leak"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 Emergency Leak Repair</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Leaking Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Find & Fix Leaks Fast - Stop Water Damage Before It Spreads
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              A leaking roof can cause thousands in water damage if not addressed quickly. Best Roofing Now provides
              expert leak detection and permanent repairs in Charlotte. We find the source - not just where water
              appears - and fix it right the first time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call Now: {SITE_CONFIG.phone}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Inspection
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
                <Clock className="w-5 h-5 text-accent-light" />
                24/7 Emergency Service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Common Causes of Roof Leaks in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Charlotte's heavy rainfall (43+ inches annually) and severe storms put roofs to the test.
              Understanding what causes leaks helps you protect your home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leakSources.map((source) => (
              <div
                key={source.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <source.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{source.title}</h3>
                <p className="text-gray text-sm">{source.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Leak Repair Process
            </h2>
            <p className="text-gray text-lg">
              We don't just patch leaks - we find the root cause and provide lasting solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairProcess.map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md h-full">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
              </div>
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
                Why Charlotte Trusts Us for Roof Leak Repair
              </h2>
              <p className="text-gray text-lg mb-8">
                When water is dripping through your ceiling, you need a roofing company you can trust
                to respond fast and fix it right. Best Roofing Now has built our reputation on
                honest assessments, quality repairs, and standing behind our work.
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
                alt="Best Roofing Now - Trusted roof leak repair experts in Charlotte NC"
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
                Roof Leaking? Don't Wait - Water Damage Spreads Fast
              </h2>
              <p className="text-white/90">
                Get a free inspection and quote today. We'll find the leak and fix it right.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
              <Button
                href="/contact"
                className="bg-white !text-accent hover:bg-white/90"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Free Inspection
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
              Roof Leak Repair Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We provide fast leak repair services across the Greater Charlotte metro area.
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
                Roof Leak Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about fixing roof leaks in Charlotte.
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
        title="Stop Your Roof Leak Today"
        subtitle="Don't let a small leak become major water damage. Get a free inspection and permanent repair from Charlotte's trusted leak repair experts."
      />
    </>
  );
}
