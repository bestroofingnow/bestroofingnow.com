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
  Zap,
  Leaf,
  Clock,
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
  title: 'Metal Roofing Mt Holly NC | Durable',
  description:
    'Looking for metal roofing in Mt Holly NC? Best Roofing Now installs premium standing seam and metal shingle roofs. 50+ year lifespan, energy efficient. Free estimates!',
  keywords: [
    'metal roofing mt holly nc',
    'metal roof mt holly nc',
    'standing seam metal roof mt holly',
    'metal roofing contractors mt holly',
    'metal roof installation mt holly nc',
    'metal roofing cost mt holly',
    'metal roof near me mt holly',
    'metal shingle roof mt holly nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/metal-roofing-mt-holly-nc`,
  },
  openGraph: {
    title: 'Metal Roofing Mt Holly NC | Expert Installation | Best Roofing Now',
    description:
      'Premium metal roofing installation in Mt Holly NC. Standing seam, metal shingles, and more. 50+ year lifespan, energy efficient, low maintenance.',
    url: `${SITE_CONFIG.url}/metal-roofing-mt-holly-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Metal roofing installation in Mt Holly NC - Best Roofing Now',
      },
    ],
  },
};

// Metal roof benefits
const benefits = [
  {
    icon: Clock,
    title: '50+ Year Lifespan',
    description: 'Metal roofs last 2-3 times longer than traditional asphalt shingles, often lasting 50+ years.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Reflective coatings reduce cooling costs by up to 25%, saving money on energy bills.',
  },
  {
    icon: Shield,
    title: 'Storm Resistant',
    description: 'Withstands winds up to 140 mph, resists hail, and won\'t rot or crack like other materials.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: '100% recyclable at end of life and often made from recycled materials.',
  },
  {
    icon: Award,
    title: 'Low Maintenance',
    description: 'Minimal upkeep required - no cracking, shrinking, or erosion concerns.',
  },
  {
    icon: Star,
    title: 'Increases Value',
    description: 'Metal roofing can increase your home\'s resale value and curb appeal.',
  },
];

// Metal roof types
const metalTypes = [
  {
    title: 'Standing Seam',
    description: 'The premium choice with concealed fasteners and clean, modern lines. Ideal for contemporary homes.',
  },
  {
    title: 'Metal Shingles',
    description: 'Combines the look of traditional shingles with metal durability. Perfect for traditional home styles.',
  },
  {
    title: 'Corrugated Metal',
    description: 'Cost-effective option popular for agricultural, industrial, and modern residential applications.',
  },
  {
    title: 'Stone-Coated Steel',
    description: 'Metal durability with the appearance of slate, tile, or shake at a fraction of the weight.',
  },
];

// FAQs
const faqs = [
  {
    question: 'How much does metal roofing cost in Mt Holly NC?',
    answer:
      'Metal roofing in Mt Holly typically costs $12,000 to $35,000 for most homes, depending on size, style, and material choice. While the upfront cost is higher than asphalt, the 50+ year lifespan often makes it more economical long-term.',
  },
  {
    question: 'Is metal roofing noisy during rain?',
    answer:
      'Modern metal roofing installed over solid decking with proper underlayment is no noisier than any other roofing material. The insulation and decking absorb sound effectively.',
  },
  {
    question: 'Will a metal roof attract lightning?',
    answer:
      'No, metal roofing does not attract lightning. In fact, if lightning does strike, metal roofing dissipates the charge safely and is non-combustible, making it safer than many alternatives.',
  },
  {
    question: 'Can you install a metal roof over existing shingles?',
    answer:
      'While possible in some cases, we typically recommend removing old shingles for best results. This allows for proper decking inspection, ensures warranty coverage, and provides the best installation quality.',
  },
  {
    question: 'What colors and styles are available?',
    answer:
      'Metal roofing comes in a wide variety of colors and styles. We offer standing seam, metal shingles, stone-coated steel, and more in dozens of colors to complement any Mt Holly home.',
  },
  {
    question: 'How long does metal roof installation take?',
    answer:
      'Most residential metal roof installations in Mt Holly are completed in 2-5 days depending on size and complexity. Standing seam installations may take slightly longer than metal shingle systems.',
  },
];

export default function MetalRoofingMtHollyNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Metal Roofing', url: `${SITE_CONFIG.url}/metal-roofing-services` },
          { name: 'Mt Holly NC', url: `${SITE_CONFIG.url}/metal-roofing-mt-holly-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Mt Holly"
        state="NC"
        slug="metal-roofing-mt-holly-nc"
        distance={15}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/metal-roofing-mt-holly-nc`}
        pageName="Metal Roofing Mt Holly NC"
        city="Mt Holly"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Metal roofing installation in Mt Holly NC - Best Roofing Now"
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
              Metal Roofing Mt Holly NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Built to Last 50+ Years</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium metal roof installation for Mt Holly homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Upgrade to the durability and efficiency of metal roofing. Best Roofing Now installs
              standing seam, metal shingles, and stone-coated steel roofing systems throughout
              Mt Holly and Gaston County.
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
                50+ Year Warranty Options
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Certified Installers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Mt Holly Homeowners Choose Metal Roofing
            </h2>
            <p className="text-gray text-lg">
              Metal roofing offers unmatched durability, efficiency, and value for Gaston County homes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-light rounded-xl"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metal Types Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Metal Roofing Options for Mt Holly
            </h2>
            <p className="text-gray text-lg">
              We install a variety of metal roofing styles to match any home architecture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {metalTypes.map((type) => (
              <div key={type.title} className="p-6 bg-white rounded-xl">
                <h3 className="font-bold text-dark text-xl mb-2">{type.title}</h3>
                <p className="text-gray">{type.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/metal-roofing-services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Learn More About Metal Roofing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for a Metal Roof in Mt Holly?
              </h2>
              <p className="text-white/90">
                Get a free estimate and see how metal roofing can benefit your home.
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
        slug="metal-roofing-mt-holly-nc"
        count={4}
        title="Metal Roofing Projects in Mt Holly"
        subtitle="Browse completed metal roofing projects from the Mt Holly area."
        schemaPageUrl={`${SITE_CONFIG.url}/metal-roofing-mt-holly-nc`}
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
                Metal Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Questions about metal roofing in Mt Holly NC? We have answers.
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
        subtitle="Beyond metal roofing, we offer comprehensive roofing solutions."
      />

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Mt Holly"
        service="Metal Roofing"
        serviceSlug="metal-roofing"
        title="Metal Roofing in Nearby Cities"
      />

      <CityGeoSection
        city="Mt Holly"
        state="NC"
        citySlug="mt-holly-nc"
        service="Metal Roofing"
      />

      <CTASection
        title="Upgrade to Metal Roofing in Mt Holly"
        subtitle="Get a free estimate for premium metal roofing installation. Experience the durability and efficiency that lasts 50+ years."
      />
    </>
  );
}
