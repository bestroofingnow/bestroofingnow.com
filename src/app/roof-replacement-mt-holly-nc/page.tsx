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
  Clock,
  Home,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceAreaPageSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Replacement Mt Holly NC | New Roof',
  description:
    'Need a new roof in Mt Holly NC? Best Roofing Now provides expert roof replacement with premium materials and warranties. BBB A+ rated, veteran-owned. Free estimates!',
  keywords: [
    'roof replacement mt holly nc',
    'new roof mt holly nc',
    'reroof mt holly nc',
    'roof installation mt holly',
    'replace roof mt holly nc',
    'mt holly roof replacement cost',
    'roof replacement near me mt holly',
    'residential roof replacement mt holly',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-replacement-mt-holly-nc`,
  },
  openGraph: {
    title: 'Roof Replacement Mt Holly NC | Quality Installation | Best Roofing Now',
    description:
      'Professional roof replacement in Mt Holly NC. Premium materials, certified installers, industry-leading warranties. BBB A+ rated, veteran-owned.',
    url: `${SITE_CONFIG.url}/roof-replacement-mt-holly-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Roof replacement in Mt Holly NC - Best Roofing Now',
      },
    ],
  },
};

// Roofing materials
const materials = [
  {
    title: 'Architectural Shingles',
    description: 'Premium dimensional shingles from CertainTeed, GAF, and Owens Corning with 30-50 year warranties.',
    popular: true,
  },
  {
    title: 'Metal Roofing',
    description: 'Durable standing seam and metal shingle options with 50+ year lifespan and energy efficiency.',
    popular: false,
  },
  {
    title: '3-Tab Shingles',
    description: 'Affordable traditional asphalt shingles for budget-conscious homeowners.',
    popular: false,
  },
  {
    title: 'Designer Shingles',
    description: 'Premium luxury shingles that replicate slate or wood shake at a fraction of the cost.',
    popular: false,
  },
];

// Why replace your roof
const whyReplace = [
  { title: 'Roof Age', description: 'Asphalt shingle roofs typically last 20-25 years. If yours is approaching this age, it\'s time to consider replacement.' },
  { title: 'Frequent Repairs', description: 'If you\'re constantly repairing your roof, replacement may be more cost-effective in the long run.' },
  { title: 'Storm Damage', description: 'Severe storm damage may necessitate full replacement, often covered by insurance.' },
  { title: 'Energy Bills', description: 'A new roof with proper ventilation can significantly reduce heating and cooling costs.' },
  { title: 'Home Sale', description: 'A new roof increases home value and makes properties more attractive to buyers.' },
  { title: 'Curb Appeal', description: 'Update your home\'s appearance with modern roofing materials and colors.' },
];

// FAQs
const faqs = [
  {
    question: 'How much does roof replacement cost in Mt Holly NC?',
    answer:
      'Roof replacement in Mt Holly typically costs $7,500 to $22,000 for most homes, depending on size, material, and complexity. Larger or more complex roofs may cost more. We provide detailed, transparent estimates with no hidden fees.',
  },
  {
    question: 'How long does a roof replacement take in Mt Holly?',
    answer:
      'Most residential roof replacements in Mt Holly are completed in 1-3 days. Larger homes, complex roof designs, or unexpected issues (like decking replacement) may extend the timeline to 3-5 days.',
  },
  {
    question: 'What roofing materials do you recommend for Mt Holly homes?',
    answer:
      'For most Mt Holly homes, we recommend architectural shingles from CertainTeed, GAF, or Owens Corning. They offer excellent durability, aesthetics, and value. Metal roofing is great for longevity, especially for properties near the river.',
  },
  {
    question: 'Do you remove the old roof or install over it?',
    answer:
      'We always recommend and perform complete tear-off of the old roofing. This allows us to inspect the decking, ensure proper installation, and provide the best warranty coverage. Installing over old shingles can hide problems and void warranties.',
  },
  {
    question: 'What warranties do you offer on roof replacement?',
    answer:
      'We offer manufacturer warranties up to 50 years on materials and our own workmanship warranty. As certified installers for CertainTeed, GAF, and Owens Corning, we can offer enhanced warranty programs with extended coverage.',
  },
  {
    question: 'Will you help with financing for roof replacement?',
    answer:
      'Yes! We offer flexible financing options through our partners to make roof replacement affordable. Many homeowners qualify for low monthly payments. We also work with insurance companies on storm damage claims.',
  },
];

export default function RoofReplacementMtHollyNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Replacement', url: `${SITE_CONFIG.url}/services/roof-replacement` },
          { name: 'Mt Holly NC', url: `${SITE_CONFIG.url}/roof-replacement-mt-holly-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Mt Holly"
        state="NC"
        slug="roof-replacement-mt-holly-nc"
        distance={15}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-replacement-mt-holly-nc`}
        pageName="Roof Replacement Mt Holly NC"
        city="Mt Holly"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Roof replacement in Mt Holly NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Mt Holly & Gaston County</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Replacement Mt Holly NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Premium Materials & Warranties</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert roof installation with {SITE_CONFIG.roofsInstalled}+ roofs completed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When it&apos;s time for a new roof, trust Best Roofing Now for quality installation
              with premium materials and industry-leading warranties. We serve Mt Holly and
              Gaston County with certified craftsmanship.
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
                5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Certified Installers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Materials for Mt Holly Homes
            </h2>
            <p className="text-gray text-lg">
              We install premium roofing materials from industry-leading manufacturers, backed
              by comprehensive warranties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {materials.map((material) => (
              <div
                key={material.title}
                className={`p-6 rounded-xl ${material.popular ? 'bg-primary text-white' : 'bg-light'}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`font-bold text-xl ${material.popular ? 'text-white' : 'text-dark'}`}>
                    {material.title}
                  </h3>
                  {material.popular && (
                    <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className={material.popular ? 'text-white/90' : 'text-gray'}>
                  {material.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/materials"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Explore All Roofing Materials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Replace Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Signs You Need Roof Replacement
            </h2>
            <p className="text-gray text-lg">
              Not sure if you need a new roof? Here are common reasons Mt Holly homeowners choose replacement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyReplace.map((reason) => (
              <div key={reason.title} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <Home className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark mb-1">{reason.title}</h3>
                  <p className="text-gray text-sm">{reason.description}</p>
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
                Ready for a New Roof in Mt Holly?
              </h2>
              <p className="text-white/90">
                Get a free estimate with transparent pricing and financing options.
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
                Get Free Estimate
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

      {/* Project Gallery */}
      <GeoProjectGalleryStrip
        pageType="service"
        city="Mt Holly"
        slug="roof-replacement-mt-holly-nc"
        count={4}
        title="Recent Roof Replacements in Mt Holly"
        subtitle="Browse completed roof replacement projects from the Mt Holly area."
        schemaPageUrl={`${SITE_CONFIG.url}/roof-replacement-mt-holly-nc`}
      />

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
                Roof Replacement FAQs
              </h2>
              <p className="text-gray text-lg">
                Questions about roof replacement in Mt Holly NC? We have answers.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl p-6">
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
        city="Mt Holly"
        citySlug="mt-holly-nc"
        title="Complete Roofing Services in Mt Holly"
        subtitle="Beyond replacement, we offer comprehensive roofing solutions for Mt Holly."
      />

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Mt Holly"
        service="Roof Replacement"
        serviceSlug="roof-replacement"
        title="Roof Replacement in Nearby Cities"
      />

      <CityGeoSection
        city="Mt Holly"
        state="NC"
        citySlug="mt-holly-nc"
        service="Roof Replacement"
      />

      <CTASection
        title="Ready for Your New Roof in Mt Holly?"
        subtitle="Get a free estimate with detailed material options and transparent pricing. Financing available for qualified homeowners."
      />
    </>
  );
}
