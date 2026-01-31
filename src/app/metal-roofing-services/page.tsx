import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Layers,
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  Award,
  Clock,
  Home,
  Building2,
  Zap,
  Wind,
  Thermometer,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/components/sections/FAQ';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ServiceSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  LocalBusinessSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations, TrustBadges } from '@/components/ui/DirectoryCitations';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'Metal Roofing Installation Services Charlotte NC | Contractor You Can Trust',
  description:
    'Professional metal roofing installation services in Charlotte NC. Hire a trusted contractor for standing seam, metal shingles, and corrugated panel installation. 50+ year lifespan, energy efficient. GAF certified. Free estimates!',
  keywords: [
    'metal roofing installation services Charlotte NC',
    'metal roofing contractor Charlotte NC',
    'metal roof installation Charlotte',
    'metal roof contractor near me',
    'steel roofing installation Charlotte NC',
    'metal shingle installation Charlotte',
    'metal roofing company Charlotte',
    'hire metal roofing contractor Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/metal-roofing-services`,
  },
  openGraph: {
    title: 'Metal Roofing Installation Services Charlotte NC | Contractor You Can Trust',
    description:
      'Professional metal roofing installation services in Charlotte NC. Trusted contractor for standing seam, metal shingles, and corrugated panels. 50+ year lifespan.',
    url: `${SITE_CONFIG.url}/metal-roofing-services`,
  },
};

// Metal roofing types
const metalRoofingTypes = [
  {
    title: 'Standing Seam Metal Roofing',
    description: 'Premium concealed fastener system with raised seams for superior weather protection. The gold standard for residential and commercial metal roofing.',
    icon: Layers,
    highlights: ['Hidden fasteners', '50+ year lifespan', 'No exposed screws'],
    priceRange: '$12-$18 per sq ft',
    bestFor: 'Premium homes, modern architecture, solar panel mounting',
  },
  {
    title: 'Metal Shingles',
    description: 'Metal panels designed to look like traditional shingles, slate, or tile. Combines metal durability with classic aesthetics.',
    icon: Home,
    highlights: ['Classic appearance', 'Lightweight', 'Impact resistant'],
    priceRange: '$8-$14 per sq ft',
    bestFor: 'Traditional homes, HOA-restricted neighborhoods',
  },
  {
    title: 'Corrugated Metal Roofing',
    description: 'Economical exposed fastener metal panels. Excellent for agricultural, commercial, and rustic residential applications.',
    icon: Building2,
    highlights: ['Cost effective', 'Quick install', 'Industrial strength'],
    priceRange: '$5-$10 per sq ft',
    bestFor: 'Barns, commercial buildings, budget-conscious projects',
  },
  {
    title: 'Commercial Metal Roofing',
    description: 'Large-scale metal roof systems for commercial and industrial buildings. Standing seam, R-panel, and architectural options.',
    icon: Building2,
    highlights: ['Energy efficient', 'Low maintenance', 'Long warranties'],
    priceRange: '$6-$15 per sq ft',
    bestFor: 'Office buildings, warehouses, retail centers',
  },
];

// Metal roofing benefits
const metalBenefits = [
  {
    title: '50+ Year Lifespan',
    description: 'Metal roofs can last 50-70 years with minimal maintenance - 2-3x longer than asphalt shingles.',
    icon: Clock,
  },
  {
    title: 'Energy Efficient',
    description: 'Reflective coatings reduce cooling costs by up to 25% - ideal for Charlotte\'s hot summers.',
    icon: Thermometer,
  },
  {
    title: 'Storm Resistant',
    description: 'Wind ratings up to 140 mph. Hail and impact resistant. Non-combustible (Class A fire rating).',
    icon: Wind,
  },
  {
    title: 'Eco-Friendly',
    description: 'Made from 25-95% recycled content. 100% recyclable at end of life. Reduces landfill waste.',
    icon: Zap,
  },
];

// Metal roofing FAQs
const metalFAQs = [
  {
    question: 'How much does a metal roof cost in Charlotte?',
    answer: 'Metal roofing in Charlotte typically costs $15,000-$40,000+ for a standard home, depending on the type and complexity. Standing seam runs $12-$18 per sq ft installed, metal shingles $8-$14, and corrugated panels $5-$10. While the upfront cost is 2-3x more than asphalt, the 50+ year lifespan makes metal roofing more cost-effective long-term.',
  },
  {
    question: 'Is a metal roof worth it in Charlotte NC?',
    answer: 'Yes, metal roofing is especially well-suited for Charlotte\'s climate. The reflective surface reduces cooling costs by 20-25% during our hot summers, and metal handles severe thunderstorms, hail, and high winds better than most materials. The 50+ year lifespan means most homeowners never need another roof. Metal also increases home value by 1-6%.',
  },
  {
    question: 'Are metal roofs noisy when it rains?',
    answer: 'Modern metal roofs installed over solid decking with proper underlayment are no louder than asphalt shingles during rain. The decking, underlayment, and attic insulation all dampen sound. Many homeowners can\'t tell the difference. If noise is a concern, we can add additional sound-deadening underlayment.',
  },
  {
    question: 'Do metal roofs attract lightning?',
    answer: 'No, metal roofs do not attract lightning. Lightning strikes the highest point in an area regardless of material. In fact, if lightning does strike, metal roofs are safer because they\'re non-combustible and disperse the energy across the surface. Metal roofing actually reduces fire risk compared to other materials.',
  },
  {
    question: 'What colors are available for metal roofing?',
    answer: 'Metal roofing comes in virtually any color you can imagine. Popular choices in Charlotte include charcoal gray, dark bronze, matte black, forest green, and barn red. Premium PVDF/Kynar coatings resist fading for 30+ years. We can match or complement your home\'s existing color scheme perfectly.',
  },
  {
    question: 'Can you install solar panels on a metal roof?',
    answer: 'Absolutely! Standing seam metal roofing is ideal for solar panels. Special clamps attach directly to the raised seams without any roof penetrations, eliminating potential leak points. This is one of the safest and most secure ways to mount solar panels. Metal roofs and solar panels both last 30-50 years, making them perfect partners.',
  },
  {
    question: 'How long does metal roof installation take?',
    answer: 'Most residential metal roof installations take 2-5 days depending on roof size, complexity, and the type of metal system. Standing seam takes longer than metal shingles or corrugated panels. We work efficiently while ensuring proper installation techniques for maximum longevity and warranty coverage.',
  },
  {
    question: 'What warranty do you offer on metal roofing?',
    answer: 'Metal roofing warranties vary by manufacturer and product. Paint finish warranties typically run 25-40 years against fading and chalking. Substrate warranties (against rust and perforation) often extend 40-50 years. Our workmanship warranty covers installation quality. We\'ll explain all warranty options during your consultation.',
  },
];

// Service for schema
const metalCategoryService = {
  slug: 'metal-roofing-services',
  title: 'Metal Roofing Contractor Charlotte NC',
  description: 'Professional metal roofing contractor in Charlotte NC. Standing seam, metal shingles, and corrugated metal roofing. 50+ year lifespan, energy efficient, storm resistant.',
  keywords: ['metal roofing contractor Charlotte NC', 'metal roof Charlotte', 'standing seam metal roof'],
  priceRange: '$15,000 - $40,000+',
};

export default function MetalRoofingServicesPage() {
  const pageUrl = `${SITE_CONFIG.url}/metal-roofing-services`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Metal Roofing Contractor Charlotte NC | Standing Seam & Metal Shingles"
        description="Professional metal roofing contractor in Charlotte NC. Standing seam, metal shingles, and corrugated panels."
        url={pageUrl}
        primaryImage={IMAGES.hero.metalRoof}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Metal Roofing Contractor Charlotte NC', url: pageUrl },
        ]}
      />
      <ServiceSchema service={metalCategoryService} />
      <FAQSchema faqs={metalFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Metal Roofing Contractor Charlotte NC', url: pageUrl },
        ]}
      />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={pageUrl}
        pageName="Metal Roofing Contractor Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does a metal roof cost in Charlotte NC?',
            answer: 'Metal roofing in Charlotte typically costs $15,000-$40,000+ for a standard home. Standing seam metal roofing costs $12-$18 per square foot installed, metal shingles cost $8-$14 per square foot, and corrugated panels cost $5-$10 per square foot. While the upfront cost is higher than asphalt shingles, metal roofs last 50+ years, making them more cost-effective long-term.',
            speakableAnswer: 'Metal roofing in Charlotte costs $15,000 to $40,000 for a typical home. Standing seam runs $12 to $18 per square foot. The 50+ year lifespan makes metal more cost-effective than shingles.',
          },
          {
            question: 'Who is the best metal roofing contractor in Charlotte NC?',
            answer: 'Best Roofing Now is a top-rated metal roofing contractor in Charlotte NC, offering standing seam, metal shingles, and corrugated panel installation. We are GAF certified, fully licensed and insured, with excellent reviews. Call 704-605-6047 for a free metal roof estimate.',
            speakableAnswer: 'Best Roofing Now is a top-rated metal roofing contractor in Charlotte. We install standing seam, metal shingles, and corrugated panels. Call 704-605-6047 for a free estimate.',
          },
          {
            question: 'How long does a metal roof last in North Carolina?',
            answer: 'A properly installed metal roof in North Carolina lasts 50-70 years with minimal maintenance. This is 2-3 times longer than asphalt shingles which typically last 15-25 years. Metal roofs are especially well-suited for NC weather, handling heat, humidity, storms, and hail better than most materials.',
            speakableAnswer: 'Metal roofs last 50 to 70 years in North Carolina, which is 2 to 3 times longer than asphalt shingles. They handle NC heat, storms, and humidity exceptionally well.',
          },
          {
            question: 'Is a metal roof worth it in Charlotte?',
            answer: 'Yes, metal roofing is worth it in Charlotte. Metal roofs reduce cooling costs by 20-25% during hot summers, resist severe storms and hail, and last 50+ years. They also increase home value by 1-6%. While the upfront cost is higher, you save money long-term by never needing another roof replacement.',
            speakableAnswer: 'Yes, metal roofs are worth it in Charlotte. They reduce cooling costs by 20-25%, resist storms and hail, last 50+ years, and increase home value. You save money long-term.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[{ name: 'Metal Roofing Contractor Charlotte NC', href: '/metal-roofing-services' }]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero.metalRoof}
            alt="Metal roofing installation in Charlotte NC - standing seam metal roof"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4" />
                50+ Year Lifespan
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <Thermometer className="w-4 h-4" />
                Energy Efficient
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <Wind className="w-4 h-4" />
                Storm Resistant
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Metal Roofing Contractor Charlotte NC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Standing Seam, Metal Shingles &amp; Corrugated Panels
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              The last roof you&apos;ll ever need. Best Roofing Now installs premium metal roofing systems
              built to last 50+ years. Superior storm resistance, energy efficiency, and stunning aesthetics
              for Charlotte homes and businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                size="lg"
                icon={<Phone className="w-5 h-5" />}
              >
                Call: {SITE_CONFIG.phone}
              </Button>
              <EstimateButton
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Free Metal Roof Estimate
              </EstimateButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container">
          <TrustBadges />
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Charlotte Homeowners Choose Metal Roofing
            </h2>
            <p className="text-lg text-gray">
              Metal roofing is the smart choice for Charlotte&apos;s climate - reflecting summer heat,
              resisting severe storms, and lasting decades longer than traditional materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {metalBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-gray text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metal Roofing Types */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Metal Roofing Options
          </h2>
          <p className="text-gray text-center max-w-2xl mx-auto mb-12">
            From sleek standing seam to classic metal shingles, we install the right metal roof for your property.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {metalRoofingTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={index}
                  className="bg-light rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">{type.title}</h3>
                      <p className="text-accent font-medium text-sm">{type.priceRange}</p>
                    </div>
                  </div>
                  <p className="text-gray mb-4">{type.description}</p>
                  <ul className="space-y-2 mb-4">
                    {type.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500">
                    <strong>Best for:</strong> {type.bestFor}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services/metal-roofing"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Learn More About Metal Roofing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Metal Roofing vs. Asphalt Shingles
            </h2>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-3 bg-primary text-white font-semibold">
                <div className="p-4">Feature</div>
                <div className="p-4 text-center">Metal Roofing</div>
                <div className="p-4 text-center">Asphalt Shingles</div>
              </div>
              {[
                ['Lifespan', '50-70 years', '15-25 years'],
                ['Upfront Cost', '$15,000-$40,000', '$8,000-$15,000'],
                ['Lifetime Cost', 'Lower (1 roof)', 'Higher (2-3 roofs)'],
                ['Energy Savings', 'Up to 25%', 'Minimal'],
                ['Wind Resistance', 'Up to 140 mph', 'Up to 130 mph'],
                ['Maintenance', 'Very Low', 'Moderate'],
                ['Resale Value', 'Adds 1-6%', 'Standard'],
                ['Eco-Friendly', '100% Recyclable', 'Landfill waste'],
              ].map(([feature, metal, asphalt], index) => (
                <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <div className="p-4 font-medium text-gray-700">{feature}</div>
                  <div className="p-4 text-center text-accent font-medium">{metal}</div>
                  <div className="p-4 text-center text-gray">{asphalt}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/compare/metal-vs-shingles"
                className="inline-flex items-center text-primary font-semibold hover:text-accent"
              >
                View Full Comparison Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={metalFAQs}
        title="Metal Roofing FAQ"
        subtitle="Common questions about metal roofing in Charlotte NC"
      />

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/roofing-services" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">All Roofing Services</h3>
              <p className="text-gray text-sm">Complete residential and commercial roofing solutions for Charlotte.</p>
            </Link>
            <Link href="/solar-services" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Solar Roofing</h3>
              <p className="text-gray text-sm">Metal roofs are ideal for solar - no penetrations needed for panel mounting.</p>
            </Link>
            <Link href="/commercial-roofing-services" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Commercial Roofing</h3>
              <p className="text-gray text-sm">Large-scale metal roofing for commercial and industrial buildings.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <DirectoryCitations pageType="service" maxLinks={4} variant="inline" title="Verified Business Profiles" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready for the Last Roof You&apos;ll Ever Need?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free metal roofing estimate and discover why Charlotte homeowners are choosing
              metal for its unmatched durability, energy savings, and stunning appearance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="secondary"
                size="lg"
                className="bg-white !text-accent hover:bg-white/90"
                icon={<Phone className="w-5 h-5" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
              <EstimateButton
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
              >
                Free Metal Roof Estimate
              </EstimateButton>
            </div>

            <p className="mt-6 text-white/80 text-sm">
              Serving Charlotte, Huntersville, Matthews, Concord, and 60+ communities across NC &amp; SC
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
