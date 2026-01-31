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
  Palette,
  Home,
  Sparkles,
  Wind,
  Layers,
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
  title: 'Designer Shingles Charlotte NC | Luxury Architectural Shingles',
  description:
    'Premium designer shingles for Charlotte NC luxury homes. GAF Grand Canyon, Timberline Ultra HD, CertainTeed Grand Manor, Owens Corning Woodcrest. HOA approved. Free estimates.',
  keywords: [
    'designer shingles charlotte nc',
    'luxury shingles charlotte',
    'premium architectural shingles charlotte nc',
    'gaf grand canyon shingles charlotte',
    'certainteed grand manor charlotte nc',
    'owens corning woodcrest charlotte',
    'designer roof shingles charlotte',
    'high end shingles charlotte nc',
    'luxury roofing shingles charlotte',
    'estate shingles charlotte nc',
    'hoa approved shingles charlotte',
    'premium roof charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/designer-shingles-charlotte-nc`,
  },
  openGraph: {
    title: 'Designer Shingles Charlotte NC | Luxury Architectural Shingles',
    description:
      'Premium designer shingles that replicate the look of slate and cedar shake. 50-year warranties. Perfect for Charlotte\'s upscale neighborhoods.',
    url: `${SITE_CONFIG.url}/designer-shingles-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.modern1,
        width: 1200,
        height: 630,
        alt: 'Designer shingles installation Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Designer shingle brands
const designerBrands = [
  {
    brand: 'GAF',
    products: [
      { name: 'Grand Canyon', description: 'Ultra-premium with rugged shake appearance', warranty: 'Lifetime' },
      { name: 'Camelot II', description: 'Old-world European style with artisan craftsmanship', warranty: 'Lifetime' },
      { name: 'Timberline Ultra HD', description: 'Bold, dramatic look with enhanced depth', warranty: 'Lifetime' },
    ],
    certified: 'Factory-Certified Installer',
  },
  {
    brand: 'CertainTeed',
    products: [
      { name: 'Grand Manor', description: 'Handcrafted appearance of natural slate', warranty: '50 Year' },
      { name: 'Carriage House', description: 'Old-world luxury with dramatic shadow lines', warranty: '50 Year' },
      { name: 'Presidential Shake', description: 'Authentic wood shake appearance', warranty: '50 Year' },
    ],
    certified: 'SELECT ShingleMaster',
  },
  {
    brand: 'Owens Corning',
    products: [
      { name: 'Woodcrest', description: 'Natural wood shake look with superior protection', warranty: 'Lifetime' },
      { name: 'Woodmoor', description: 'Bold wood shake appearance with coastal durability', warranty: 'Lifetime' },
      { name: 'Duration Designer', description: 'Premium designer colors with patented technology', warranty: 'Lifetime' },
    ],
    certified: 'Preferred Contractor',
  },
];

// Benefits of designer shingles
const benefits = [
  {
    icon: Palette,
    title: 'Stunning Aesthetics',
    description: 'Replicate the look of expensive slate, cedar shake, or European tiles at a fraction of the cost.',
  },
  {
    icon: Clock,
    title: '50-Year Warranties',
    description: 'Premium designer shingles come with industry-leading warranties up to 50 years or lifetime.',
  },
  {
    icon: Shield,
    title: 'Superior Protection',
    description: 'Multi-layer construction provides enhanced protection against wind, hail, and severe weather.',
  },
  {
    icon: Wind,
    title: '130+ MPH Wind Rating',
    description: 'Highest wind resistance ratings available - critical for Charlotte storm season.',
  },
  {
    icon: Home,
    title: 'Increases Home Value',
    description: 'Designer shingles significantly boost curb appeal and resale value of your home.',
  },
  {
    icon: CheckCircle,
    title: 'HOA Approved',
    description: 'Pre-approved in most Charlotte HOA communities including Ballantyne, Piper Glen, and Providence.',
  },
];

// Affluent neighborhoods
const luxuryNeighborhoods = [
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'Dilworth', href: '/roofing-dilworth-charlotte-nc' },
  { name: 'Eastover', href: '/roofing-eastover-charlotte-nc' },
  { name: 'Providence Plantation', href: '/neighborhoods/providence-plantation' },
  { name: 'Piper Glen', href: '/neighborhoods/piper-glen' },
  { name: 'Quail Hollow', href: '/neighborhoods/quail-hollow' },
  { name: 'Foxcroft', href: '/neighborhoods/foxcroft' },
  { name: 'Rea Farms', href: '/neighborhoods/rea-farms' },
];

// FAQs
const faqs = [
  {
    question: 'What are designer shingles and how are they different from regular shingles?',
    answer:
      'Designer shingles are premium architectural shingles that replicate the appearance of expensive roofing materials like slate, cedar shake, or European tiles. They feature multiple layers, enhanced dimensional appearance, and upgraded materials. Compared to standard 3-tab or basic architectural shingles, designers offer superior aesthetics, longer warranties (often 50 years to lifetime), and better wind/impact resistance.',
  },
  {
    question: 'How much do designer shingles cost in Charlotte NC?',
    answer:
      'Designer shingles in Charlotte typically cost $5-$9 per square foot installed, or roughly $15,000-$35,000 for a typical home. This compares to $3-$5 per square foot for standard architectural shingles. While the upfront cost is 30-50% higher, designer shingles offer dramatically improved curb appeal, longer lifespan, better warranties, and increased home value - making them an excellent investment for upscale Charlotte homes.',
  },
  {
    question: 'Which designer shingles are best for Charlotte\'s climate?',
    answer:
      'For Charlotte\'s hot, humid summers and occasional severe storms, we recommend GAF Grand Canyon, CertainTeed Grand Manor, or Owens Corning Woodcrest. All feature Class A fire rating, algae resistance (critical in our humid climate), high wind ratings (130+ MPH), and Class 4 impact resistance options. GAF\'s StainGuard Plus and CertainTeed\'s StreakFighter technology are particularly valuable for preventing black streaks in Charlotte\'s humidity.',
  },
  {
    question: 'Are designer shingles approved by Charlotte HOAs?',
    answer:
      'Yes, designer shingles are approved by virtually all Charlotte HOAs. In fact, many upscale communities like Ballantyne, Piper Glen, and Providence Plantation prefer or require designer-grade shingles. We can help you select colors and styles that meet your HOA requirements. We also handle the HOA approval process, submitting samples and documentation on your behalf.',
  },
  {
    question: 'How long do designer shingles last compared to regular shingles?',
    answer:
      'Designer shingles typically last 30-50 years compared to 15-25 years for standard shingles. Premium lines like GAF Grand Canyon and CertainTeed Grand Manor carry lifetime warranties and can last 40-50+ years with proper installation. The enhanced materials, thicker construction, and superior manufacturing translate to significantly longer service life.',
  },
  {
    question: 'Can designer shingles increase my home\'s value?',
    answer:
      'Absolutely. Studies show premium roofing can increase home value by 15-40% of the roof\'s cost. In Charlotte\'s competitive luxury home market, designer shingles provide immediate curb appeal that attracts buyers and commands higher prices. For homes valued at $500K+, designer shingles are often expected by buyers and can make your home stand out in the market.',
  },
];

export default function DesignerShinglesCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Services', url: `${SITE_CONFIG.url}/roofing-services` },
          { name: 'Designer Shingles Charlotte NC', url: `${SITE_CONFIG.url}/designer-shingles-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/designer-shingles-charlotte-nc`}
        pageName="Designer Shingles Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold">Premium Luxury Roofing</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Designer Shingles <br className="hidden md:block" />
              <span className="text-amber-400">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Luxury aesthetics with lifetime protection
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Transform your home with premium designer shingles that replicate the beauty of slate and cedar shake.
              GAF, CertainTeed, and Owens Corning certified installer with 50-year warranties.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Design Consultation
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                Triple Manufacturer Certified
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                50-Year Warranties
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                {SITE_CONFIG.googleReviewCount}+ 5-Star Reviews
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
              Why Choose Designer Shingles?
            </h2>
            <p className="text-gray text-lg">
              Premium designer shingles deliver the look of expensive materials with superior performance
              and value for Charlotte&apos;s discerning homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
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

      {/* Brands Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Premium Designer Shingle Brands
            </h2>
            <p className="text-gray text-lg">
              As a certified installer for all three major manufacturers, we offer the full range
              of designer shingle options for your Charlotte home.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {designerBrands.map((brand) => (
              <div key={brand.brand} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">{brand.brand}</h3>
                  <p className="text-sm text-white/80">{brand.certified}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {brand.products.map((product) => (
                      <div key={product.name} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-dark">{product.name}</h4>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            {product.warranty}
                          </span>
                        </div>
                        <p className="text-gray text-sm">{product.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Popular in Charlotte&apos;s Premier Neighborhoods
            </h2>
            <p className="text-gray text-lg">
              Designer shingles are the roofing choice for Charlotte&apos;s most prestigious communities,
              meeting strict HOA requirements while enhancing property values.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {luxuryNeighborhoods.map((neighborhood) => (
              <Link
                key={neighborhood.name}
                href={neighborhood.href}
                className="bg-light rounded-full px-5 py-2 text-primary font-medium hover:bg-primary hover:text-white transition-colors"
              >
                {neighborhood.name}
              </Link>
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
                Ready to Upgrade to Designer Shingles?
              </h2>
              <p className="text-white/90">
                Free color consultation and design matching for your home style.
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
                Schedule Consultation
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
                Designer Shingles FAQs
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

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Related Premium Roofing Options
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/slate-roofing-charlotte-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Natural Slate Roofing</h3>
              <p className="text-gray text-sm mb-3">The ultimate in luxury roofing with 100+ year lifespan</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/copper-roofing-charlotte-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Copper Roofing</h3>
              <p className="text-gray text-sm mb-3">Premium copper for accents, dormers, and full roofs</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/hoa-approved-roofing-charlotte-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">HOA Approved Roofing</h3>
              <p className="text-gray text-sm mb-3">Materials and colors approved by Charlotte HOAs</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Elevate Your Home with Designer Shingles"
        subtitle="Schedule a free consultation with Charlotte's premium shingle specialists. We'll help you select the perfect designer shingles that complement your home's architecture and meet your HOA requirements."
      />
    </>
  );
}
