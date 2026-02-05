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
  Waves,
  DollarSign,
  FileCheck,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Replacement Huntersville NC | Lake Norman | Free Estimates',
  description:
    'Expert roof replacement in Huntersville NC. Serving Birkdale, Skybrook & Lake Norman area. GAF & CertainTeed certified. Financing available. Free estimates from BBB A+ rated contractor.',
  keywords: [
    'roof replacement huntersville nc',
    'huntersville roof replacement',
    'new roof huntersville nc',
    'roof replacement cost huntersville',
    'replace roof huntersville',
    'huntersville nc roof replacement',
    'lake norman roof replacement',
    'birkdale roof replacement',
    'skybrook roof replacement',
    'residential roof replacement huntersville',
    'full roof replacement huntersville nc',
    'huntersville roofing replacement',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-replacement-huntersville-nc`,
  },
  openGraph: {
    title: 'Roof Replacement Huntersville NC | Lake Norman Area',
    description:
      'Premium roof replacement for Huntersville NC. Serving Birkdale, Skybrook, and Lake Norman communities. GAF Master Elite certified. Financing available.',
    url: `${SITE_CONFIG.url}/roof-replacement-huntersville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roof replacement Huntersville NC - Best Roofing Now',
      },
    ],
  },
};

// Roof replacement options
const roofingOptions = [
  {
    title: 'Architectural Shingles',
    description: 'Premium dimensional shingles with 30-50 year warranties. GAF Timberline HDZ and CertainTeed Landmark.',
    priceRange: '$12-18/sq ft',
    bestFor: 'Most Huntersville homes',
  },
  {
    title: 'Impact-Resistant Shingles',
    description: 'Class 4 rated for hail protection. Often qualifies for insurance discounts.',
    priceRange: '$15-22/sq ft',
    bestFor: 'Storm-prone areas',
  },
  {
    title: 'Standing Seam Metal',
    description: 'Premium metal roofing with 40-70 year lifespan. Excellent for modern homes.',
    priceRange: '$18-30/sq ft',
    bestFor: 'Modern & lakefront homes',
  },
  {
    title: 'Designer Shingles',
    description: 'Luxury shingles mimicking slate or cedar. GAF Grand Canyon, CertainTeed Grand Manor.',
    priceRange: '$18-28/sq ft',
    bestFor: 'Upscale neighborhoods',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Star,
    title: '500+ 5-Star Reviews',
    description: 'The highest-rated roofing company in the Lake Norman area with verified customer reviews.',
  },
  {
    icon: Award,
    title: 'GAF Master Elite',
    description: 'Top 2% of roofers nationally. Golden Pledge warranties up to 50 years available.',
  },
  {
    icon: DollarSign,
    title: 'Financing Available',
    description: 'Flexible financing with payments as low as $150/month for qualified Huntersville homeowners.',
  },
  {
    icon: FileCheck,
    title: 'Insurance Specialists',
    description: 'We work directly with insurance companies to maximize storm damage claims.',
  },
];

// Huntersville neighborhoods
const huntersvilleNeighborhoods = [
  'Birkdale Village',
  'Skybrook',
  'Rosedale',
  'Vermillion',
  'Cedarfield',
  'Beckett',
  'Northstone',
  'Torrence Chapel',
  'Gilead Ridge',
  'Wynfield Creek',
];

// FAQs
const faqs = [
  {
    question: 'How much does roof replacement cost in Huntersville NC?',
    answer:
      'Roof replacement in Huntersville typically ranges from $12,000-$30,000 for average homes with architectural shingles. Larger homes in Birkdale, Skybrook, or lakefront areas with premium materials often range $25,000-$50,000+. We provide free detailed estimates with exact pricing for your specific home.',
  },
  {
    question: 'How long does roof replacement take in Huntersville?',
    answer:
      'Most Huntersville roof replacements are completed in 1-2 days for standard homes. Larger homes or those with complex roof designs may take 2-4 days. We always secure your home each evening and complete thorough cleanup before leaving.',
  },
  {
    question: 'What roofing materials are most popular in Huntersville?',
    answer:
      'Architectural shingles like GAF Timberline HDZ are most popular in Huntersville for their balance of value and performance. Birkdale and Skybrook homeowners often choose designer shingles for enhanced curb appeal. Impact-resistant shingles are increasingly popular for insurance savings.',
  },
  {
    question: 'Do you offer financing for roof replacement?',
    answer:
      'Yes, we offer multiple financing options for Huntersville homeowners including same-as-cash financing and low monthly payment plans starting around $150/month. We also help with insurance claims for storm damage replacements, which may cover your entire roof.',
  },
  {
    question: 'Will you work with my Huntersville HOA?',
    answer:
      'Yes, we have extensive experience with Huntersville HOAs including Birkdale, Skybrook, Vermillion, and other communities. We provide all documentation for architectural review, help select approved colors, and can coordinate with your HOA board directly.',
  },
  {
    question: 'What warranties do you offer on Huntersville roof replacements?',
    answer:
      'We offer comprehensive warranties including our 10-year workmanship guarantee plus manufacturer warranties up to 50 years. As GAF Master Elite certified, we offer the Golden Pledge warranty - the strongest in the industry covering both materials and labor.',
  },
];

export default function RoofReplacementHuntersvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Huntersville NC', url: `${SITE_CONFIG.url}/roofing-huntersville-nc` },
          { name: 'Roof Replacement Huntersville NC', url: `${SITE_CONFIG.url}/roof-replacement-huntersville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-replacement-huntersville-nc`}
        pageName="Roof Replacement Huntersville NC"
        city="Huntersville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Roof replacement Huntersville NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Home className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold">Huntersville Roof Replacement Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Replacement <br className="hidden md:block" />
              <span className="text-secondary">Huntersville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium Materials | Expert Installation | Financing Available
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now delivers exceptional roof replacements for Huntersville homeowners.
              From Birkdale to Skybrook, we install premium roofing systems backed by industry-leading
              warranties and flexible financing options.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Estimate
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
                <Star className="w-5 h-5 text-secondary" />
                {SITE_CONFIG.googleReviewCount}+ 5-Star Reviews
              </span>
              <span className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-secondary" />
                Financing Available
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary" />
                50-Year Warranties
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Roofing Options Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Replacement Options for Huntersville
            </h2>
            <p className="text-gray text-lg">
              We offer premium roofing materials suited for Huntersville&apos;s climate and
              neighborhood architectural standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {roofingOptions.map((option) => (
              <div key={option.title} className="bg-light rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-dark text-xl">{option.title}</h3>
                  <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                    {option.priceRange}
                  </span>
                </div>
                <p className="text-gray mb-3">{option.description}</p>
                <p className="text-sm font-medium text-primary">
                  Best for: {option.bestFor}
                </p>
              </div>
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
                Why Huntersville Homeowners Choose Us
              </h2>
              <p className="text-gray text-lg mb-8">
                When it&apos;s time for roof replacement in Huntersville, choose a contractor with
                exceptional reviews, premium certifications, and flexible financing options.
              </p>
              <div className="space-y-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
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
                src={IMAGES.houses.modern2}
                alt="Huntersville NC roof replacement project"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-primary rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">$150/mo</p>
                <p className="text-sm">Financing Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Huntersville Neighborhoods We Serve
            </h2>
            <p className="text-gray text-lg">
              We&apos;ve completed roof replacements throughout Huntersville&apos;s finest neighborhoods.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {huntersvilleNeighborhoods.map((neighborhood) => (
              <span
                key={neighborhood}
                className="bg-light rounded-full px-5 py-2 text-primary font-medium"
              >
                {neighborhood}
              </span>
            ))}
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
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Huntersville Roof Replacement FAQs
              </h2>
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
        variant="compact"
      />

      {/* Project Gallery Strip */}
      <GeoProjectGalleryStrip
        pageType="location"
        city="Huntersville"
        slug="roof-replacement-huntersville-nc"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Huntersville"

        state="NC"

        citySlug="huntersville-nc"

        service="Roof Replacement"

      />

      <CTASection
        title="Ready for Your New Huntersville Roof?"
        subtitle="Get a free estimate for roof replacement from the Lake Norman area's most trusted contractor. Financing available with payments as low as $150/month."
      />
    </>
  );
}
