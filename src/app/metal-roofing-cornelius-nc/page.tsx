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
  Zap,
  Wind,
  Waves,
  Leaf,
  DollarSign,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Metal Roofing Cornelius NC | Lake Norman | Standing Seam Experts',
  description:
    'Expert metal roofing installation in Cornelius NC. Standing seam & corrugated metal for Lake Norman waterfront homes. 140+ MPH wind rated. 40-70 year lifespan. Free estimates.',
  keywords: [
    'metal roofing cornelius nc',
    'cornelius metal roof',
    'standing seam metal roof cornelius',
    'metal roof installation cornelius nc',
    'metal roofing contractors cornelius',
    'lake norman metal roofing',
    'waterfront metal roofing cornelius',
    'metal roof replacement cornelius',
    'metal roofing cost cornelius nc',
    'wind resistant roofing cornelius',
    'metal roof the peninsula',
    'cornelius nc metal roofing company',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/metal-roofing-cornelius-nc`,
  },
  openGraph: {
    title: 'Metal Roofing Cornelius NC | Lake Norman Waterfront Specialists',
    description:
      'Premium metal roofing for Cornelius NC and Lake Norman waterfront homes. Standing seam rated 140+ MPH. 40-70 year lifespan with minimal maintenance. Free estimates.',
    url: `${SITE_CONFIG.url}/metal-roofing-cornelius-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.modern1,
        width: 1200,
        height: 630,
        alt: 'Metal roofing Cornelius NC - Best Roofing Now',
      },
    ],
  },
};

// Metal roofing benefits
const benefits = [
  {
    icon: Clock,
    title: '40-70 Year Lifespan',
    description: 'Metal roofs last 2-3x longer than asphalt shingles with minimal maintenance required.',
  },
  {
    icon: Wind,
    title: '140+ MPH Wind Rating',
    description: 'Standing seam metal is ideal for Lake Norman waterfront homes exposed to high winds.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Reflects solar heat reducing cooling costs 10-25% in Cornelius summers.',
  },
  {
    icon: Shield,
    title: 'Impact Resistant',
    description: 'Class 4 hail rating protects against Lake Norman\'s severe storm events.',
  },
  {
    icon: Leaf,
    title: '100% Recyclable',
    description: 'Environmentally friendly with most metal roofs containing 25-95% recycled content.',
  },
  {
    icon: DollarSign,
    title: 'Insurance Savings',
    description: 'Many insurers offer premium discounts for metal roofing\'s durability.',
  },
];

// Metal roofing options
const metalOptions = [
  {
    title: 'Standing Seam',
    description: 'Premium concealed fastener system with clean, modern lines. Most popular for Lake Norman homes.',
    lifespan: '40-70 years',
    windRating: '140+ MPH',
  },
  {
    title: 'Metal Shingles',
    description: 'Metal panels designed to look like traditional shingles, slate, or cedar shake.',
    lifespan: '40-60 years',
    windRating: '110+ MPH',
  },
  {
    title: 'Corrugated Metal',
    description: 'Classic ribbed profile, popular for modern architectural and farmhouse styles.',
    lifespan: '40-50 years',
    windRating: '120+ MPH',
  },
  {
    title: 'Copper Roofing',
    description: 'Premium copper panels and accents with stunning natural patina development.',
    lifespan: '100+ years',
    windRating: '140+ MPH',
  },
];

// FAQs
const faqs = [
  {
    question: 'How much does metal roofing cost in Cornelius NC?',
    answer:
      'Metal roofing in Cornelius typically costs $15-30 per square foot installed for standing seam, depending on panel style, gauge, and coating. For a typical Cornelius home, expect $25,000-$50,000. Lake Norman waterfront homes with premium options like copper accents often range $40,000-$80,000+. While more expensive upfront than shingles, metal\'s 40-70 year lifespan makes it cost-effective long-term.',
  },
  {
    question: 'Is metal roofing good for Lake Norman waterfront homes?',
    answer:
      'Metal roofing is excellent for Lake Norman waterfront properties. Standing seam metal is rated for 140+ MPH winds - ideal for exposed lakefront locations. It resists moisture, won\'t rot or grow mold, and handles temperature swings well. Many Peninsula and Jetton Road homeowners choose metal specifically for its waterfront performance.',
  },
  {
    question: 'How long does a metal roof last in Cornelius?',
    answer:
      'Metal roofs in Cornelius typically last 40-70 years, with copper lasting 100+ years. This is 2-3x longer than asphalt shingles. Most metal roofs in our area still look great and perform well after 50+ years. The key is proper installation and quality materials - both of which we guarantee.',
  },
  {
    question: 'Will a metal roof be noisy in rain?',
    answer:
      'Modern metal roofs installed over solid decking with proper underlayment are no louder than shingle roofs during rain. The combination of decking, underlayment, and insulation absorbs sound effectively. Most Cornelius homeowners are surprised how quiet their metal roof is.',
  },
  {
    question: 'Do metal roofs attract lightning?',
    answer:
      'No, metal roofs do not attract lightning. Metal is no more likely to be struck than other roofing materials. In fact, if lightning does strike, metal roofs are actually safer because they\'re non-combustible and disperse the energy safely. Metal roofing is a great choice for Lake Norman\'s thunderstorm-prone climate.',
  },
  {
    question: 'What colors are available for metal roofing in Cornelius?',
    answer:
      'We offer metal roofing in 20+ colors to match Cornelius neighborhood aesthetics. Popular choices include charcoal gray, bronze, dark brown, and forest green. Kynar/PVDF coatings ensure color retention for 30+ years. We help you select colors that complement your home and meet HOA requirements.',
  },
];

export default function MetalRoofingCorneliusNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Cornelius NC', url: `${SITE_CONFIG.url}/roofing-cornelius-nc` },
          { name: 'Metal Roofing Cornelius NC', url: `${SITE_CONFIG.url}/metal-roofing-cornelius-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/metal-roofing-cornelius-nc`}
        pageName="Metal Roofing Cornelius NC"
        city="Cornelius"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Waves className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold">Lake Norman Metal Roofing Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Metal Roofing <br className="hidden md:block" />
              <span className="text-blue-300">Cornelius NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Standing Seam | 140+ MPH Rated | 40-70 Year Lifespan
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in premium metal roofing for Cornelius and Lake Norman
              waterfront homes. Our standing seam systems handle lakefront wind exposure while
              delivering modern aesthetics and decades of maintenance-free performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-blue-500 hover:bg-blue-400"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Metal Roof Quote
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

            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Wind className="w-5 h-5 text-blue-300" />
                140+ MPH Wind Rated
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-300" />
                40-70 Year Lifespan
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-300" />
                Class 4 Impact Rated
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
              Why Metal Roofing for Cornelius Homes?
            </h2>
            <p className="text-gray text-lg">
              Metal roofing offers unmatched performance for Lake Norman&apos;s climate - from
              waterfront wind exposure to summer heat and severe storms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metal Options Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Metal Roofing Options for Cornelius
            </h2>
            <p className="text-gray text-lg">
              We install a full range of metal roofing systems to match your home&apos;s style
              and Lake Norman&apos;s performance requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {metalOptions.map((option) => (
              <div key={option.title} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-xl mb-2">{option.title}</h3>
                <p className="text-gray mb-4">{option.description}</p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                    {option.lifespan}
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {option.windRating}
                  </span>
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
                Cornelius Metal Roofing Experts
              </h2>
              <p className="text-gray text-lg mb-6">
                Metal roofing requires specialized expertise for proper installation. Our certified
                crews have installed metal roofs throughout Cornelius and Lake Norman, from The
                Peninsula to Jetton Road waterfront estates.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray">Certified metal roofing installers with manufacturer training</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray">Lake Norman waterfront installation experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray">Premium materials from Sheffield Metals, ATAS, McElroy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray">Comprehensive warranties up to 50 years on materials</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.houses.modern1}
                alt="Metal roofing installation Cornelius NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-800 text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">40-70</p>
                <p className="text-sm text-white/90">Year Lifespan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Cornelius Metal Roofing FAQs
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
              Related Cornelius Roofing Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/roofing-cornelius-nc" className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Cornelius NC</h3>
              <p className="text-gray text-sm mb-3">Complete roofing services for Lake Norman homes</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roof-replacement-cornelius-nc" className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roof Replacement</h3>
              <p className="text-gray text-sm mb-3">Full roof replacement with premium materials</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/copper-roofing-charlotte-nc" className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Copper Roofing</h3>
              <p className="text-gray text-sm mb-3">Premium copper roofs and accents for luxury homes</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service City Links */}
      <ServiceCityLinks
        city="Cornelius"
        citySlug="cornelius-nc"
        variant="compact"
      />

      <GeoProjectGalleryStrip
        pageType="location"
        city="Cornelius"
        slug="metal-roofing-cornelius-nc"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Cornelius"

        state="NC"

        citySlug="cornelius-nc"

        service="Metal Roofing"

      />

      <CTASection
        title="Ready for Metal Roofing in Cornelius?"
        subtitle="Get a free quote for premium metal roofing from Lake Norman's waterfront specialists. Our standing seam systems are engineered for lakefront performance."
      />
    </>
  );
}
