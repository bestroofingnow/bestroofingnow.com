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
  Home,
  Palette,
  Wind,
  Droplets,
  FileCheck,
  BadgeCheck,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'CertainTeed Shingles Charlotte NC | SELECT ShingleMaster',
  description:
    'CertainTeed shingles installed by Charlotte\'s only SELECT ShingleMaster contractor. Premium Landmark shingles with industry-best warranties. BBB A+ rated. Free estimates.',
  keywords: [
    'certainteed shingles charlotte nc',
    'certainteed roofing charlotte',
    'certainteed landmark shingles charlotte',
    'select shinglemaster charlotte nc',
    'certainteed contractor charlotte',
    'certainteed landmark pro charlotte',
    'certainteed warranty charlotte nc',
    'architectural shingles charlotte',
    'certainteed colors charlotte nc',
    'premium shingles charlotte',
    'certainteed installer charlotte nc',
    'surestart warranty charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/certainteed-shingles-charlotte-nc`,
  },
  openGraph: {
    title: 'CertainTeed Shingles Charlotte NC | SELECT ShingleMaster',
    description:
      'Premium CertainTeed Landmark shingles installed by Charlotte\'s SELECT ShingleMaster contractor. Enhanced warranties, beautiful colors, and exceptional protection.',
    url: `${SITE_CONFIG.url}/certainteed-shingles-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.realProjects.certainteed1,
        width: 1200,
        height: 630,
        alt: 'CertainTeed shingles installation Charlotte NC - Best Roofing Now SELECT ShingleMaster',
      },
    ],
  },
};

// CertainTeed product lines
const productLines = [
  {
    name: 'Landmark',
    description: 'The #1 selling premium architectural shingle with dimensional beauty and reliable performance.',
    warranty: '50-year limited warranty',
    windRating: '110 mph',
    algaeResistance: 'StreakFighter technology',
  },
  {
    name: 'Landmark PRO',
    description: 'Enhanced protection with Max Def colors for superior curb appeal and performance.',
    warranty: '50-year limited warranty',
    windRating: '130 mph',
    algaeResistance: 'StreakFighter technology',
  },
  {
    name: 'Landmark Premium',
    description: 'Ultra-premium weight for maximum impact resistance and distinctive appearance.',
    warranty: '50-year limited warranty',
    windRating: '130 mph',
    algaeResistance: 'StreakFighter technology',
  },
  {
    name: 'Grand Manor',
    description: 'Luxury shingle mimicking the look of natural slate at a fraction of the cost.',
    warranty: 'Lifetime limited warranty',
    windRating: '110 mph',
    algaeResistance: 'StreakFighter technology',
  },
];

// SELECT ShingleMaster benefits
const selectBenefits = [
  {
    icon: BadgeCheck,
    title: 'SELECT ShingleMaster Certified',
    description: 'The highest CertainTeed contractor certification - only 1% of contractors qualify.',
  },
  {
    icon: FileCheck,
    title: 'SureStart PLUS Warranty',
    description: 'Enhanced 4-star warranty coverage including workmanship for maximum protection.',
  },
  {
    icon: Award,
    title: 'Factory-Trained Crews',
    description: 'Our installers complete rigorous CertainTeed certification training annually.',
  },
  {
    icon: Shield,
    title: 'Material & Labor Coverage',
    description: 'Full coverage of materials AND labor - not just materials like standard warranties.',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'SELECT ShingleMaster',
    description: 'Charlotte\'s trusted CertainTeed SELECT ShingleMaster contractor since 2020.',
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
    title: 'Expert Installation',
    description: 'Manufacturer-certified installation that protects your warranty investment.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Most residential roofs completed in 1-2 days with thorough cleanup.',
  },
];

// Popular color collections
const colorCollections = [
  {
    name: 'Natural Earthtones',
    colors: ['Weathered Wood', 'Heather Blend', 'Burnt Sienna', 'Resawn Shake'],
  },
  {
    name: 'Classic Grays',
    colors: ['Pewter', 'Pewterwood', 'Charcoal Black', 'Colonial Slate'],
  },
  {
    name: 'Designer Colors',
    colors: ['Moire Black', 'Driftwood', 'Georgetown Gray', 'Hunter Green'],
  },
];

// Comparison with other brands
const comparison = [
  { feature: 'Max Warranty', certainteed: '50-Year/Lifetime', gaf: '50-Year', owenscorning: '50-Year' },
  { feature: 'Wind Rating', certainteed: 'Up to 130 mph', gaf: 'Up to 130 mph', owenscorning: 'Up to 130 mph' },
  { feature: 'Algae Resistance', certainteed: 'StreakFighter', gaf: 'StainGuard', owenscorning: 'StreakGuard' },
  { feature: 'Color Options', certainteed: '50+', gaf: '40+', owenscorning: '40+' },
  { feature: 'Enhanced Warranty', certainteed: 'SureStart PLUS', gaf: 'Golden Pledge', owenscorning: 'Platinum Protection' },
];

// FAQs
const faqs = [
  {
    question: 'What is a CertainTeed SELECT ShingleMaster?',
    answer:
      'SELECT ShingleMaster is CertainTeed\'s highest contractor certification level - only the top 1% of roofing contractors qualify. To achieve this status, contractors must meet strict credentialing requirements, maintain excellent customer reviews, and complete advanced installation training. Best Roofing Now is proud to be Charlotte\'s trusted SELECT ShingleMaster contractor.',
  },
  {
    question: 'What warranty comes with CertainTeed shingles?',
    answer:
      'CertainTeed Landmark shingles come with a 50-year limited warranty. As a SELECT ShingleMaster, we can offer the SureStart PLUS extended warranty which includes 4-star coverage: materials, labor, and workmanship for the first 25 years, with full transferability. This is one of the best warranties in the industry.',
  },
  {
    question: 'How much do CertainTeed shingles cost in Charlotte?',
    answer:
      'CertainTeed Landmark shingles typically cost $8,000-$15,000 installed for an average Charlotte home, depending on roof size, complexity, and specific product line. Landmark PRO and Premium lines cost slightly more. We provide detailed, transparent estimates with no hidden fees. The enhanced warranty protection makes CertainTeed an excellent value.',
  },
  {
    question: 'How long do CertainTeed shingles last?',
    answer:
      'CertainTeed Landmark shingles are designed to last 25-30 years or more in Charlotte\'s climate when properly installed. The 50-year warranty reflects CertainTeed\'s confidence in their products. Proper installation by a certified contractor like Best Roofing Now is key to achieving maximum lifespan.',
  },
  {
    question: 'What colors are available in CertainTeed Landmark?',
    answer:
      'CertainTeed offers 50+ colors across their product lines. Popular choices in Charlotte include Weathered Wood, Pewter, Charcoal Black, and Colonial Slate. The Max Def color technology in Landmark PRO provides enhanced color definition and depth. We have samples available to help you choose the perfect color for your home.',
  },
  {
    question: 'What is StreakFighter technology?',
    answer:
      'StreakFighter is CertainTeed\'s algae-resistant technology that prevents ugly black streaks caused by algae growth. This is especially important in Charlotte\'s humid climate where algae can be a problem. All Landmark shingles include StreakFighter technology standard.',
  },
  {
    question: 'Is CertainTeed better than GAF or Owens Corning?',
    answer:
      'CertainTeed, GAF, and Owens Corning are all excellent manufacturers. CertainTeed stands out for its extensive color selection, StreakFighter algae resistance, and the SELECT ShingleMaster program which ensures top-quality installation. As certified contractors for multiple manufacturers, we can help you choose the best option for your specific needs.',
  },
  {
    question: 'Can I transfer my CertainTeed warranty if I sell my home?',
    answer:
      'Yes! CertainTeed warranties are transferable, which adds value when selling your home. With the SureStart PLUS warranty available through SELECT ShingleMaster contractors, the enhanced coverage transfers to the new owner, making your home more attractive to buyers.',
  },
];

export default function CertainTeedShinglesCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'CertainTeed Shingles Charlotte NC', url: `${SITE_CONFIG.url}/certainteed-shingles-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.realProjects.certainteed1}
            alt="CertainTeed shingles installation Charlotte NC - Best Roofing Now SELECT ShingleMaster"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <BadgeCheck className="w-4 h-4" />
              <span className="text-sm font-semibold">CertainTeed SELECT ShingleMaster</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              CertainTeed Shingles <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium Landmark shingles with enhanced SureStart PLUS warranty
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is Charlotte's trusted CertainTeed SELECT ShingleMaster contractor.
              This top-tier certification means you get factory-trained installation, enhanced warranty
              coverage, and the peace of mind that comes with working with the best.
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
                <BadgeCheck className="w-5 h-5 text-green-400" />
                SELECT ShingleMaster
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SELECT ShingleMaster Benefits */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              The SELECT ShingleMaster Advantage
            </h2>
            <p className="text-gray text-lg">
              As one of the top 1% of CertainTeed contractors, we offer exclusive benefits
              you won't find with standard installers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Lines Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              CertainTeed Landmark Product Lines
            </h2>
            <p className="text-gray text-lg">
              From the popular Landmark to luxury Grand Manor, CertainTeed offers a shingle
              for every home and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {productLines.map((product) => (
              <div key={product.name} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-dark mb-2">{product.name}</h3>
                <p className="text-gray mb-4">{product.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-primary" />
                    <span className="text-gray"><strong>Warranty:</strong> {product.warranty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-primary" />
                    <span className="text-gray"><strong>Wind Rating:</strong> {product.windRating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-primary" />
                    <span className="text-gray"><strong>Algae Protection:</strong> {product.algaeResistance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Options Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                50+ Beautiful Color Options
              </h2>
              <p className="text-gray text-lg mb-8">
                CertainTeed's Max Def color technology creates shingles with exceptional depth
                and dimension. Find the perfect color to complement your home's architecture.
              </p>
              {colorCollections.map((collection) => (
                <div key={collection.name} className="mb-6">
                  <h3 className="font-bold text-dark mb-3">{collection.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {collection.colors.map((color) => (
                      <span
                        key={color}
                        className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <p className="text-sm text-gray italic mt-4">
                <Palette className="w-4 h-4 inline mr-1" />
                Visit our showroom or request sample boards to see colors in person
              </p>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed Landmark shingle colors available in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How CertainTeed Compares
            </h2>
            <p className="text-gray text-lg">
              See how CertainTeed stacks up against other leading shingle manufacturers.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-md">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">CertainTeed</th>
                  <th className="px-6 py-4 text-center font-semibold">GAF</th>
                  <th className="px-6 py-4 text-center font-semibold">Owens Corning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparison.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 font-medium text-dark">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{row.certainteed}</td>
                    <td className="px-6 py-4 text-center text-gray">{row.gaf}</td>
                    <td className="px-6 py-4 text-center text-gray">{row.owenscorning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray mt-4">
            As certified contractors for all three manufacturers, we can help you choose the best option for your home.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Your warranty is only as good as your installation. As a CertainTeed SELECT
                ShingleMaster, we deliver the certified installation that protects your investment.
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
                alt="Best Roofing Now - CertainTeed SELECT ShingleMaster in Charlotte NC"
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
                Ready for a Premium CertainTeed Roof?
              </h2>
              <p className="text-white/90">
                Get a free estimate from Charlotte's SELECT ShingleMaster contractor.
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

      {/* Warranty Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                SureStart PLUS Warranty Protection
              </h2>
              <p className="text-gray text-lg">
                Only available through SELECT ShingleMaster contractors, the SureStart PLUS
                warranty provides industry-leading protection.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-dark mb-4">What's Covered</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray">100% material replacement cost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray">100% labor costs for repairs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray">Workmanship coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray">Algae discoloration protection</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-4">Coverage Period</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray">25 years full coverage (4-star)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray">50 years pro-rated coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray">Fully transferable to new owner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray">No deductible for claims</span>
                    </li>
                  </ul>
                </div>
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
                CertainTeed Shingles FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about CertainTeed shingles in Charlotte NC.
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

      {/* Related Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Related Roofing Services
            </h2>
            <p className="text-gray text-lg">
              Explore our full range of professional roofing services in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/services/roof-replacement"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Home className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Roof Replacement
              </h3>
              <p className="text-gray text-sm mb-3">
                Full roof replacement with premium materials and expert installation.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/standing-seam-metal-roof-charlotte-nc"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Standing Seam Metal
              </h3>
              <p className="text-gray text-sm mb-3">
                Premium metal roofing with 50+ year lifespan and modern elegance.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/roofing-contractor-charlotte-nc"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Award className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Charlotte Roofing Contractor
              </h3>
              <p className="text-gray text-sm mb-3">
                Learn more about Best Roofing Now and our complete services.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="certainteed-shingles-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/certainteed-shingles-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Get a Free CertainTeed Shingles Estimate"
        subtitle="Experience the SELECT ShingleMaster difference. Contact Charlotte's trusted CertainTeed contractor for a free consultation and detailed estimate with enhanced warranty options."
      />
    </>
  );
}
