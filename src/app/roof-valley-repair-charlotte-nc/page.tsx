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
  AlertTriangle,
  Wrench,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Valley Repair Charlotte NC | Valley Leak Experts | Best Roofing Now',
  description:
    'Expert roof valley repair in Charlotte NC. Fix leaking roof valleys with professional metal valley installation and shingle repair. BBB A+ rated, licensed contractor. Free inspections available.',
  keywords: [
    'roof valley repair Charlotte NC',
    'leaking roof valley Charlotte',
    'roof valley leak repair Charlotte NC',
    'metal roof valley Charlotte',
    'valley flashing repair Charlotte',
    'roof valley replacement Charlotte NC',
    'open valley repair Charlotte',
    'closed valley repair Charlotte NC',
    'woven valley repair Charlotte',
    'roof valley leak Charlotte',
    'valley shingle repair Charlotte NC',
    'roof valley experts Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-valley-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Valley Repair Charlotte NC | Valley Leak Experts | Best Roofing Now',
    description:
      'Fix leaking roof valleys with expert repair services in Charlotte NC. Metal valley installation, shingle repair, and leak prevention. Free inspections.',
    url: `${SITE_CONFIG.url}/roof-valley-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional roof valley repair Charlotte NC',
      },
    ],
  },
};

// Valley repair services
const valleyServices = [
  {
    icon: Wrench,
    title: 'Open Valley Repair',
    description: 'Repair or install metal valleys with exposed flashing for superior water drainage and longevity.',
    features: ['Aluminum or copper options', 'W-style crimped center', '30+ year lifespan'],
  },
  {
    icon: Home,
    title: 'Closed Valley Repair',
    description: 'Fix closed cut valleys where shingles extend across the valley with no exposed metal.',
    features: ['Seamless appearance', 'Ice & water shield', 'Proper overlap technique'],
  },
  {
    icon: Droplets,
    title: 'Woven Valley Repair',
    description: 'Repair woven valleys where shingles from both roof planes interweave across the valley.',
    features: ['Continuous shingle pattern', 'No exposed metal', 'Proper weaving technique'],
  },
  {
    icon: Shield,
    title: 'Valley Flashing Installation',
    description: 'Install proper underlayment and valley flashing to prevent leaks in new and existing valleys.',
    features: ['Ice & water barrier', 'Metal valley liners', 'Sealed overlaps'],
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'Valley Leak Specialists',
    description: 'Our team has extensive experience diagnosing and repairing roof valley leaks.',
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
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for manufacturer-backed warranties.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Same-day inspections and emergency valley leak repairs available.',
  },
];

// Common valley problems
const valleyProblems = [
  {
    problem: 'Debris Accumulation',
    description: 'Leaves, twigs, and debris clog valleys, causing water to back up under shingles.',
  },
  {
    problem: 'Improper Shingle Installation',
    description: 'Nails placed in the valley center or insufficient overlap leads to leaks.',
  },
  {
    problem: 'Missing Ice & Water Shield',
    description: 'Valleys without proper underlayment are vulnerable to ice dams and wind-driven rain.',
  },
  {
    problem: 'Worn or Corroded Metal',
    description: 'Old metal valleys can rust, crack, or separate from the roof surface.',
  },
  {
    problem: 'Shingle Granule Loss',
    description: 'Heavy water flow wears away shingle granules in valley areas faster than elsewhere.',
  },
  {
    problem: 'Incorrect Valley Type',
    description: 'Some valley styles aren\'t suitable for certain roof pitches or climates.',
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
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
];

// FAQs about roof valleys
const faqs = [
  {
    question: 'Why is my roof valley leaking in Charlotte?',
    answer:
      'Roof valley leaks in Charlotte are commonly caused by debris accumulation, worn shingles, corroded metal flashing, improper installation, or missing ice and water shield. Charlotte\'s heavy rainfall concentrates in valleys, making them high-stress areas. Our free inspection identifies the exact cause and provides repair solutions.',
  },
  {
    question: 'How much does roof valley repair cost in Charlotte NC?',
    answer:
      'Roof valley repair in Charlotte typically costs $300-$1,000 for minor repairs and $800-$2,500 for complete valley replacement. The cost depends on valley length, type (open vs closed), material choice, and extent of damage. We provide free estimates with transparent pricing.',
  },
  {
    question: 'What is the best type of roof valley for Charlotte homes?',
    answer:
      'For Charlotte\'s climate with heavy rainfall, we often recommend open metal valleys with W-style crimping. The exposed metal handles high water volume better than closed valleys and is easier to maintain. However, closed valleys can work well with proper ice and water shield installation. We assess your specific roof and recommend the best option.',
  },
  {
    question: 'How long do roof valleys last?',
    answer:
      'Properly installed roof valleys should last as long as your roof (20-30 years for shingles). Metal valleys can last 30-50+ years. However, valleys often fail before the rest of the roof due to concentrated water flow and debris accumulation. Regular maintenance extends valley life significantly.',
  },
  {
    question: 'Can you repair just the valley without replacing the whole roof?',
    answer:
      'Yes, in most cases we can repair or replace just the valley without affecting the rest of your roof. We carefully remove shingles from the valley area, install new underlayment and flashing, then weave the existing or new shingles back into place. This targeted repair is much more cost-effective than full roof replacement.',
  },
  {
    question: 'What is ice and water shield for valleys?',
    answer:
      'Ice and water shield is a self-adhering waterproof membrane installed under shingles in valleys before the metal or shingles are applied. It provides a secondary waterproofing layer that protects against leaks from ice dams, wind-driven rain, and water backup. We install ice and water shield on all valley repairs.',
  },
  {
    question: 'Should I choose an open or closed valley?',
    answer:
      'Open valleys (with exposed metal) are generally better for Charlotte\'s heavy rainfall as they handle water volume more effectively and are easier to maintain. Closed valleys (shingles across the valley) provide a cleaner look but require careful installation. We\'ll recommend the best option based on your roof design and preferences.',
  },
  {
    question: 'How do I prevent roof valley leaks?',
    answer:
      'Prevent valley leaks by: 1) Keeping valleys clear of debris and leaves, 2) Trimming overhanging tree branches, 3) Having annual roof inspections, 4) Addressing minor issues before they become major leaks, 5) Ensuring proper ice and water shield installation. Regular maintenance is key to long-lasting valleys.',
  },
];

export default function RoofValleyRepairCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Valley Repair Charlotte NC', url: `${SITE_CONFIG.url}/roof-valley-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Professional roof valley repair Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Valley Leak Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Valley Repair <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Stop valley leaks with expert repair and metal valley installation
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Roof valleys are one of the most common leak sources on Charlotte homes. Best Roofing Now
              specializes in valley repair, replacement, and proper installation to permanently stop leaks
              and protect your home from water damage.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Inspection
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

      {/* Valley Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roof Valley Repair Services
            </h2>
            <p className="text-gray text-lg">
              From minor valley repairs to complete valley replacement, we have the expertise to
              permanently stop leaks and protect your home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {valleyServices.map((service) => (
              <div
                key={service.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 text-xl">{service.title}</h3>
                <p className="text-gray text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Valley Problems Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Common Roof Valley Problems in Charlotte
              </h2>
              <p className="text-gray text-lg mb-6">
                Valleys collect more water than any other part of your roof, making them prone to
                specific problems. Here are the most common valley issues we repair:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {valleyProblems.map((item) => (
                  <div key={item.problem} className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-dark mb-1">{item.problem}</h3>
                        <p className="text-gray text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Roof valley inspection Charlotte NC"
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

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Homeowners Trust Us for Valley Repairs
            </h2>
            <p className="text-gray text-lg">
              Proper valley installation requires specialized knowledge. Here&apos;s why homeowners
              choose Best Roofing Now for their valley repairs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 bg-light rounded-lg">
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
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Roof Valley Leaking? We Can Help!
              </h2>
              <p className="text-white/90">
                Get a free inspection and repair estimate from Charlotte&apos;s valley leak specialists.
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
                Schedule Free Inspection
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
              Roof Valley Repair Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We provide professional roof valley repair services for homes throughout the Greater Charlotte area.
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
                Roof Valley Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof valley repair in Charlotte NC.
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
        title="Ready to Fix Your Roof Valley?"
        subtitle="Don't let a valley leak cause water damage to your home. Get a free inspection and repair estimate from Charlotte's roof valley specialists."
      />
    </>
  );
}
