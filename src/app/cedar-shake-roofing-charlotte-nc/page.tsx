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
  TreePine,
  Sparkles,
  Home,
  Landmark,
  Leaf,
  Paintbrush,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Cedar Shake Roofing Charlotte NC | Premium Wood Shake Installation',
  description:
    'Expert cedar shake roofing installation in Charlotte NC. Natural wood shakes & shingles for luxury homes. 30-50 year lifespan with stunning rustic elegance. Free estimates from certified installers.',
  keywords: [
    'cedar shake roofing charlotte nc',
    'cedar shake roof installation charlotte',
    'wood shake roof charlotte nc',
    'cedar shingle roofing charlotte',
    'cedar roofing contractors charlotte nc',
    'natural wood roofing charlotte',
    'premium cedar shakes charlotte nc',
    'cedar roof repair charlotte nc',
    'luxury wood roof charlotte',
    'cedar shake replacement charlotte',
    'treated cedar shakes charlotte nc',
    'cedar roofing myers park charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/cedar-shake-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Cedar Shake Roofing Charlotte NC | Premium Wood Shake Installation',
    description:
      'Premium cedar shake roofing for Charlotte\'s finest homes. Expert installation of natural wood shakes with stunning rustic elegance. 30-50 year lifespan.',
    url: `${SITE_CONFIG.url}/cedar-shake-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.house1,
        width: 1200,
        height: 630,
        alt: 'Cedar shake roofing installation Charlotte NC - Best Roofing Now luxury roofing',
      },
    ],
  },
};

// Benefits of cedar shake roofing
const benefits = [
  {
    icon: TreePine,
    title: 'Natural Beauty',
    description: 'Each cedar shake is unique with natural grain patterns, providing unmatched rustic elegance and curb appeal.',
  },
  {
    icon: Clock,
    title: '30-50 Year Lifespan',
    description: 'Properly maintained cedar shakes can last 30-50 years, with premium treated shakes lasting even longer.',
  },
  {
    icon: Shield,
    title: 'Natural Insulation',
    description: 'Cedar provides R-values 2x greater than asphalt shingles, reducing energy costs and improving comfort.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: '100% natural and renewable material. Cedar is biodegradable and sustainably harvested from managed forests.',
  },
  {
    icon: Sparkles,
    title: 'Weather Resistant',
    description: 'Naturally resistant to harsh weather, UV rays, and moisture. Expands and contracts with temperature changes.',
  },
  {
    icon: Paintbrush,
    title: 'Ages Beautifully',
    description: 'Develops a distinguished silver-gray patina over time, adding character to your home.',
  },
];

// Why choose us for cedar shake roofing
const whyChooseUs = [
  {
    icon: Award,
    title: 'Certified Cedar Installers',
    description: 'Our team includes certified cedar shake specialists trained in proper installation and ventilation techniques.',
  },
  {
    icon: Landmark,
    title: 'Historic & Luxury Expertise',
    description: 'Extensive experience with Charlotte\'s historic properties and custom luxury homes requiring authentic wood roofing.',
  },
  {
    icon: Home,
    title: 'HOA & Architectural Review',
    description: 'We handle HOA submissions and work with architectural review boards in Charlotte\'s prestigious communities.',
  },
  {
    icon: Shield,
    title: 'Premium Materials',
    description: 'We use only #1 Grade Western Red Cedar and offer premium fire-treated and preservative-treated options.',
  },
];

// Cedar shake options
const cedarOptions = [
  {
    title: 'Natural Cedar Shakes',
    description: 'Traditional hand-split cedar shakes with rustic, textured appearance. Thicker and more irregular for authentic character.',
    ideal: 'Historic homes, estates, custom architecturally-designed homes',
  },
  {
    title: 'Cedar Shingles',
    description: 'Precision sawn for a smoother, more uniform appearance. Machine-cut for consistent thickness and clean lines.',
    ideal: 'Colonial, Cape Cod, and traditional architectural styles',
  },
  {
    title: 'Fire-Treated Cedar',
    description: 'Cedar treated with fire retardant to meet Class A, B, or C fire ratings. Required in many HOA communities.',
    ideal: 'HOA communities, fire-prone areas, insurance requirements',
  },
  {
    title: 'Preservative-Treated Cedar',
    description: 'Pressure-treated with wood preservatives for enhanced rot, mold, and insect resistance in humid climates.',
    ideal: 'Charlotte\'s humid climate, shaded properties, near lakes',
  },
];

// Affluent neighborhoods we serve
const luxuryNeighborhoods = [
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'Eastover', href: '/roofing-eastover-charlotte-nc' },
  { name: 'Dilworth', href: '/roofing-dilworth-charlotte-nc' },
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Foxcroft', href: '/neighborhoods/foxcroft' },
  { name: 'Quail Hollow', href: '/neighborhoods/quail-hollow' },
  { name: 'Piper Glen', href: '/neighborhoods/piper-glen' },
  { name: 'Providence Plantation', href: '/neighborhoods/providence-plantation' },
  { name: 'Lake Norman Estates', href: '/roofing-cornelius-nc' },
  { name: 'The Peninsula', href: '/neighborhoods/the-peninsula' },
];

// FAQs about cedar shake roofing
const faqs = [
  {
    question: 'How much does cedar shake roofing cost in Charlotte NC?',
    answer:
      'Cedar shake roofing in Charlotte typically costs $15-$30 per square foot installed, depending on shake grade and treatment options. A full cedar shake roof on a typical Charlotte luxury home costs $25,000-$60,000+. Fire-treated and preservative-treated shakes cost more but provide enhanced protection in our humid climate. While more expensive than asphalt, cedar offers superior insulation and longevity.',
  },
  {
    question: 'How long does a cedar shake roof last in Charlotte?',
    answer:
      'In Charlotte\'s climate, a well-maintained cedar shake roof typically lasts 30-40 years. Premium treated shakes can last 40-50+ years. Longevity depends on proper installation, adequate ventilation, regular maintenance, and treatment type. We recommend annual inspections and treatment applications every 3-5 years to maximize lifespan.',
  },
  {
    question: 'Does cedar shake roofing require special maintenance?',
    answer:
      'Yes, cedar shakes require more maintenance than some roofing materials but less than many homeowners expect. Key maintenance includes: keeping the roof clear of debris and leaves, treating with preservative every 3-5 years, addressing moss/mold promptly, maintaining proper ventilation, and annual professional inspections. Our maintenance plans make this easy.',
  },
  {
    question: 'Is cedar shake roofing a fire hazard?',
    answer:
      'Untreated cedar is combustible, but fire-treated cedar shakes meet Class A, B, or C fire ratings. Many Charlotte HOAs require fire-treated cedar. We primarily install fire-treated shakes which have been pressure-treated with fire retardant chemicals. These treated shakes are as fire-resistant as other common roofing materials.',
  },
  {
    question: 'Will my HOA approve cedar shake roofing?',
    answer:
      'Most Charlotte HOAs in affluent neighborhoods approve cedar shake roofing, especially for traditional and historic architectural styles. Many HOAs specifically require fire-treated cedar. We handle HOA submissions and architectural review board presentations. We can provide samples, specifications, and photos of our completed cedar shake installations in similar communities.',
  },
  {
    question: 'What\'s the difference between cedar shakes and cedar shingles?',
    answer:
      'Cedar shakes are split from logs (hand-split face) for a rustic, textured appearance with irregular thickness. Cedar shingles are sawn on both sides for a smoother, more uniform look. Shakes are thicker (½" to ¾") and more weather-resistant, while shingles (less than ½") provide cleaner lines. The choice depends on your architectural style and aesthetic preferences.',
  },
];

export default function CedarShakeRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Luxury Roofing', url: `${SITE_CONFIG.url}/luxury-roofing-charlotte-nc` },
          { name: 'Cedar Shake Roofing Charlotte NC', url: `${SITE_CONFIG.url}/cedar-shake-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/cedar-shake-roofing-charlotte-nc`}
        pageName="Cedar Shake Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <TreePine className="w-4 h-4 text-amber-200" />
              <span className="text-sm font-semibold">Premium Natural Wood Roofing</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Cedar Shake Roofing <br className="hidden md:block" />
              <span className="text-amber-200">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Natural elegance with rustic character
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in premium cedar shake and shingle roofing for Charlotte&apos;s
              finest homes. Our certified installers deliver exceptional quality that enhances your home&apos;s
              natural beauty with 30-50+ years of distinguished protection.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-amber-400 hover:bg-amber-300 text-amber-950"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Cedar Consultation
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-amber-900"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-200" />
                Certified Cedar Installers
              </span>
              <span className="flex items-center gap-2">
                <Landmark className="w-5 h-5 text-amber-200" />
                Historic Home Specialists
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-200" />
                30-50 Year Lifespan
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Cedar Shake Roofing?
            </h2>
            <p className="text-gray text-lg">
              Cedar is the choice for Charlotte homeowners who appreciate natural beauty,
              exceptional insulation, and timeless architectural appeal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cedar Options Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Cedar Shake & Shingle Options
            </h2>
            <p className="text-gray text-lg">
              We offer a full range of cedar roofing products to match your home&apos;s style
              and meet HOA requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {cedarOptions.map((option) => (
              <div key={option.title} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-xl mb-2">{option.title}</h3>
                <p className="text-gray mb-3">{option.description}</p>
                <p className="text-sm text-amber-700 font-medium">
                  <span className="text-gray-500">Ideal for:</span> {option.ideal}
                </p>
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
                Charlotte&apos;s Cedar Shake Experts
              </h2>
              <p className="text-gray text-lg mb-8">
                Cedar shake installation requires specialized expertise for proper ventilation,
                waterproofing, and longevity. Best Roofing Now has the certified training and
                experience to deliver exceptional cedar installations that last.
              </p>
              <div className="space-y-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-amber-700" />
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
                src={IMAGES.houses.house1}
                alt="Cedar shake roofing installation in Charlotte NC luxury home"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-700 text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">30-50</p>
                <p className="text-sm text-white/90">Year Lifespan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Neighborhoods Section */}
      <section className="section bg-amber-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving Charlotte&apos;s Premier Neighborhoods
            </h2>
            <p className="text-gray text-lg">
              We have extensive experience installing cedar shake roofing in Charlotte&apos;s most
              prestigious communities, working with HOAs and architectural review boards.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {luxuryNeighborhoods.map((neighborhood) => (
              <Link
                key={neighborhood.name}
                href={neighborhood.href}
                className="bg-white rounded-full px-5 py-2 text-amber-800 font-medium hover:bg-amber-600 hover:text-white transition-colors shadow-sm"
              >
                {neighborhood.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-amber-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for a Beautiful Cedar Shake Roof?
              </h2>
              <p className="text-white/90">
                Schedule a consultation with our cedar roofing specialists.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-amber-700"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Consultation
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-amber-700 hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Cedar Shake Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions about cedar shake roofing in Charlotte NC.
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
              Related Premium Roofing Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/copper-roofing-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Copper Roofing</h3>
              <p className="text-gray text-sm mb-3">Premium copper roofs and accents with 100+ year lifespan</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/slate-roofing-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Slate Roofing</h3>
              <p className="text-gray text-sm mb-3">Natural slate for 100+ year beauty and protection</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/designer-shingles-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Designer Shingles</h3>
              <p className="text-gray text-sm mb-3">GAF Grand Canyon & CertainTeed Grand Manor luxury shingles</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Elevate Your Home with Cedar Shake Roofing"
        subtitle="Request a consultation with Charlotte's cedar roofing specialists. We'll help you explore cedar options that enhance your home's natural beauty for decades to come."
      />
    </>
  );
}
