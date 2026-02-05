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
  title: 'Roof Replacement Cornelius NC | Lake Norman | Free Estimates',
  description:
    'Expert roof replacement in Cornelius NC. Serving Lake Norman waterfront homes with premium materials. GAF & CertainTeed certified. Financing available. Free estimates from BBB A+ rated contractor.',
  keywords: [
    'roof replacement cornelius nc',
    'cornelius roof replacement',
    'new roof cornelius nc',
    'roof replacement cost cornelius',
    'replace roof cornelius',
    'cornelius nc roof replacement',
    'lake norman roof replacement',
    'waterfront roof replacement cornelius',
    'residential roof replacement cornelius',
    'full roof replacement cornelius nc',
    'roof replacement near the peninsula',
    'cornelius roofing replacement',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-replacement-cornelius-nc`,
  },
  openGraph: {
    title: 'Roof Replacement Cornelius NC | Lake Norman Specialists',
    description:
      'Premium roof replacement for Cornelius NC and Lake Norman waterfront homes. GAF Master Elite certified. Financing available. Free estimates from veteran-owned contractor.',
    url: `${SITE_CONFIG.url}/roof-replacement-cornelius-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roof replacement Cornelius NC - Best Roofing Now',
      },
    ],
  },
};

// Roof replacement options
const roofingOptions = [
  {
    title: 'Architectural Shingles',
    description: 'Premium dimensional shingles with 30-50 year warranties. GAF Timberline and CertainTeed Landmark.',
    priceRange: '$12-18/sq ft',
    bestFor: 'Most Cornelius homes',
  },
  {
    title: 'Designer Shingles',
    description: 'Luxury appearance mimicking slate or cedar. GAF Grand Canyon, CertainTeed Grand Manor.',
    priceRange: '$18-28/sq ft',
    bestFor: 'High-end neighborhoods',
  },
  {
    title: 'Standing Seam Metal',
    description: 'Premium metal roofing rated 140+ MPH. 40-70 year lifespan, ideal for lakefront.',
    priceRange: '$18-30/sq ft',
    bestFor: 'Waterfront properties',
  },
  {
    title: 'Natural Slate',
    description: 'Authentic slate with 100+ year lifespan. Ultimate luxury for estate homes.',
    priceRange: '$30-50/sq ft',
    bestFor: 'Luxury estates',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Waves,
    title: 'Lake Norman Specialists',
    description: 'Deep experience with waterfront properties including The Peninsula, Jetton Road, and Antiquity.',
  },
  {
    icon: Award,
    title: 'GAF Master Elite',
    description: 'Top 2% of roofers nationally. Access to Golden Pledge warranties up to 50 years.',
  },
  {
    icon: DollarSign,
    title: 'Financing Available',
    description: 'Flexible financing options with payments as low as $150/month for qualified buyers.',
  },
  {
    icon: FileCheck,
    title: 'Insurance Experts',
    description: 'We work directly with insurance companies to maximize your claim for storm damage replacements.',
  },
];

// FAQs
const faqs = [
  {
    question: 'How much does roof replacement cost in Cornelius NC?',
    answer:
      'Roof replacement in Cornelius typically ranges from $15,000-$35,000 for average homes with architectural shingles. Lake Norman waterfront properties with premium materials like metal or designer shingles often range $35,000-$75,000+. The Peninsula and Jetton Road estates with copper or slate can exceed $100,000. We provide free detailed estimates.',
  },
  {
    question: 'How long does roof replacement take in Cornelius?',
    answer:
      'Most Cornelius roof replacements are completed in 1-3 days depending on size and complexity. Larger waterfront homes may take 3-5 days. We work efficiently while maintaining quality, and always secure your home each evening. Weather can affect timing, especially during Lake Norman\'s storm season.',
  },
  {
    question: 'What roofing materials are best for Cornelius waterfront homes?',
    answer:
      'For Lake Norman waterfront properties, we recommend impact-resistant Class 4 shingles or standing seam metal rated 130+ MPH. These materials handle wind exposure, resist hail damage, and often qualify for insurance discounts. Premium options include copper accents and natural slate for estates.',
  },
  {
    question: 'Do you offer financing for roof replacement in Cornelius?',
    answer:
      'Yes, we offer flexible financing options for Cornelius homeowners. Qualified buyers can get same-as-cash financing or low monthly payments starting around $150/month. We also work with insurance companies for storm damage claims, which may cover full replacement costs.',
  },
  {
    question: 'Will my Cornelius HOA approve my new roof?',
    answer:
      'We have extensive experience with Cornelius HOAs including The Peninsula, Antiquity, and other communities. We provide all documentation needed for architectural review boards, help you select HOA-approved colors and materials, and can attend board meetings if needed.',
  },
  {
    question: 'What warranties do you offer on roof replacements?',
    answer:
      'We offer comprehensive warranties: our 10-year workmanship warranty, plus manufacturer warranties up to 50 years on materials. As GAF Master Elite certified, we can offer the Golden Pledge warranty - the best in the industry covering both materials and workmanship.',
  },
];

export default function RoofReplacementCorneliusNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Cornelius NC', url: `${SITE_CONFIG.url}/roofing-cornelius-nc` },
          { name: 'Roof Replacement Cornelius NC', url: `${SITE_CONFIG.url}/roof-replacement-cornelius-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-replacement-cornelius-nc`}
        pageName="Roof Replacement Cornelius NC"
        city="Cornelius"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Roof replacement Cornelius NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Waves className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold">Lake Norman Roof Replacement Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Replacement <br className="hidden md:block" />
              <span className="text-secondary">Cornelius NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium Materials | Waterfront Expertise | Financing Available
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now delivers exceptional roof replacements for Cornelius and Lake Norman
              homeowners. From The Peninsula to Jetton Road, we install premium roofing systems
              engineered for lakefront performance.
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
                <Award className="w-5 h-5 text-secondary" />
                GAF Master Elite
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
              Roof Replacement Options for Cornelius
            </h2>
            <p className="text-gray text-lg">
              We offer premium roofing materials selected for Lake Norman&apos;s climate and
              the architectural styles of Cornelius neighborhoods.
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
                Why Cornelius Homeowners Choose Us
              </h2>
              <p className="text-gray text-lg mb-8">
                When it&apos;s time for roof replacement in Cornelius, choose a contractor with
                Lake Norman expertise, premium certifications, and flexible financing options.
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
                src={IMAGES.houses.modern1}
                alt="Cornelius NC roof replacement project"
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

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Cornelius Roof Replacement Process
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-bold text-dark mb-2">Free Inspection</h3>
              <p className="text-gray text-sm">Comprehensive roof assessment with detailed report and photos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-bold text-dark mb-2">Custom Proposal</h3>
              <p className="text-gray text-sm">Detailed estimate with material options and financing choices</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-bold text-dark mb-2">Expert Installation</h3>
              <p className="text-gray text-sm">Certified crews complete your roof in 1-3 days with full cleanup</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-bold text-dark mb-2">Final Inspection</h3>
              <p className="text-gray text-sm">Quality check and warranty registration for your protection</p>
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
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Cornelius Roof Replacement FAQs
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
        city="Cornelius"
        citySlug="cornelius-nc"
        variant="compact"
      />

      {/* Project Gallery Strip */}
      <GeoProjectGalleryStrip
        pageType="location"
        city="Cornelius"
        slug="roof-replacement-cornelius-nc"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Cornelius"

        state="NC"

        citySlug="cornelius-nc"

        service="Roof Replacement"

      />

      <CTASection
        title="Ready for Your New Cornelius Roof?"
        subtitle="Get a free estimate for roof replacement from Lake Norman's most trusted roofing contractor. Financing available with payments as low as $150/month."
      />
    </>
  );
}
