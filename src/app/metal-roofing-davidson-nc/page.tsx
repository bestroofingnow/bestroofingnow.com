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
  Landmark,
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
  title: 'Metal Roofing Davidson NC | Lake Norman | Standing Seam Experts',
  description:
    'Expert metal roofing installation in Davidson NC. Standing seam & metal shingles for Lake Norman homes. Historic & modern styles. 40-70 year lifespan. Free estimates.',
  keywords: [
    'metal roofing davidson nc',
    'davidson metal roof',
    'standing seam metal roof davidson',
    'metal roof installation davidson nc',
    'metal roofing contractors davidson',
    'lake norman metal roofing',
    'davidson nc metal roofing company',
    'metal roof replacement davidson',
    'metal roofing cost davidson nc',
    'river run metal roofing',
    'historic davidson metal roofing',
    'davidson college area metal roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/metal-roofing-davidson-nc`,
  },
  openGraph: {
    title: 'Metal Roofing Davidson NC | Lake Norman Specialists',
    description:
      'Premium metal roofing for Davidson NC homes. Standing seam and metal shingles for historic and lakefront properties. 40-70 year lifespan. Free estimates.',
    url: `${SITE_CONFIG.url}/metal-roofing-davidson-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.house1,
        width: 1200,
        height: 630,
        alt: 'Metal roofing Davidson NC - Best Roofing Now',
      },
    ],
  },
};

// Metal roofing benefits
const benefits = [
  {
    icon: Clock,
    title: '40-70 Year Lifespan',
    description: 'Metal roofs last 2-3x longer than asphalt shingles with minimal maintenance.',
  },
  {
    icon: Wind,
    title: '130+ MPH Wind Rating',
    description: 'Excellent for Davidson properties near Lake Norman with wind exposure.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Reflects solar heat, reducing cooling costs 10-25% during hot NC summers.',
  },
  {
    icon: Shield,
    title: 'Impact Resistant',
    description: 'Class 4 hail rating protects against severe weather events.',
  },
  {
    icon: Landmark,
    title: 'Historic Compatible',
    description: 'Metal shingle styles complement Davidson\'s historic architecture.',
  },
  {
    icon: DollarSign,
    title: 'Insurance Savings',
    description: 'Many insurers offer premium discounts for metal\'s durability.',
  },
];

// Metal roofing options for Davidson
const metalOptions = [
  {
    title: 'Standing Seam',
    description: 'Premium concealed fastener system with clean, modern lines. Popular for River Run and lakefront homes.',
    lifespan: '40-70 years',
    style: 'Modern/Contemporary',
  },
  {
    title: 'Metal Shingles',
    description: 'Metal panels designed to look like traditional shingles, slate, or cedar shake. Ideal for historic Davidson homes.',
    lifespan: '40-60 years',
    style: 'Traditional/Historic',
  },
  {
    title: 'Metal Slate',
    description: 'Lightweight metal that replicates the beauty of natural slate without the weight concerns.',
    lifespan: '50+ years',
    style: 'Colonial/Georgian',
  },
  {
    title: 'Copper Accents',
    description: 'Premium copper for dormers, bay windows, and architectural details on historic properties.',
    lifespan: '100+ years',
    style: 'Historic/Estate',
  },
];

// FAQs
const faqs = [
  {
    question: 'How much does metal roofing cost in Davidson NC?',
    answer:
      'Metal roofing in Davidson typically costs $15-28 per square foot installed for standing seam, and $12-22 for metal shingles. For a typical Davidson home, expect $20,000-$45,000. Historic homes with specialized metal slate or copper details often range $35,000-$70,000+. While higher than shingles initially, metal\'s 40-70 year lifespan provides excellent long-term value.',
  },
  {
    question: 'Is metal roofing appropriate for historic Davidson homes?',
    answer:
      'Yes! Metal has been used on American homes for over 200 years and is historically appropriate for Davidson\'s older properties. We offer metal shingle and metal slate options that replicate the look of traditional materials while providing modern performance. Many historic preservation boards approve properly selected metal roofing.',
  },
  {
    question: 'How long does a metal roof last in Davidson NC?',
    answer:
      'Metal roofs in Davidson typically last 40-70 years, with premium options like copper lasting 100+ years. This is 2-3x longer than traditional asphalt shingles. Proper installation and quality materials are key - both of which we guarantee with our workmanship warranty.',
  },
  {
    question: 'What metal roofing styles work for Davidson homes?',
    answer:
      'We match metal roofing style to Davidson architecture: standing seam for modern homes and River Run lakefront properties, metal shingles for traditional neighborhoods, and metal slate for historic homes near downtown. We help you select options that complement your home and meet any HOA or historic district requirements.',
  },
  {
    question: 'Does metal roofing work in Davidson\'s climate?',
    answer:
      'Metal roofing excels in Davidson\'s climate. It handles heat, humidity, heavy rain, and occasional ice/snow exceptionally well. Metal reflects solar heat reducing cooling costs, sheds rain and snow effectively, and won\'t rot or grow mold in our humid summers. It\'s also rated for high winds common near Lake Norman.',
  },
  {
    question: 'Will my Davidson HOA approve metal roofing?',
    answer:
      'Many Davidson HOAs approve metal roofing, especially metal shingle styles that match the neighborhood aesthetic. We have experience working with Davidson HOAs and can help with the approval process. Metal slate and metal shake options are often approved for traditional neighborhoods.',
  },
];

export default function MetalRoofingDavidsonNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Davidson NC', url: `${SITE_CONFIG.url}/roofing-davidson-nc` },
          { name: 'Metal Roofing Davidson NC', url: `${SITE_CONFIG.url}/metal-roofing-davidson-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/metal-roofing-davidson-nc`}
        pageName="Metal Roofing Davidson NC"
        city="Davidson"
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
              <Landmark className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold">Davidson Metal Roofing Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Metal Roofing <br className="hidden md:block" />
              <span className="text-blue-300">Davidson NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Standing Seam | Metal Shingles | Historic Compatible
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in premium metal roofing for Davidson homes. From
              modern River Run estates to historic downtown properties, we install metal roofing
              systems that match Davidson&apos;s character while delivering decades of performance.
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
                <Clock className="w-5 h-5 text-blue-300" />
                40-70 Year Lifespan
              </span>
              <span className="flex items-center gap-2">
                <Landmark className="w-5 h-5 text-blue-300" />
                Historic Compatible
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
              Why Metal Roofing for Davidson Homes?
            </h2>
            <p className="text-gray text-lg">
              Metal roofing offers exceptional performance for Davidson&apos;s mix of historic
              and modern homes - from lakefront estates to downtown properties.
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
              Metal Roofing Options for Davidson
            </h2>
            <p className="text-gray text-lg">
              We offer metal roofing styles to match Davidson&apos;s diverse architecture -
              from modern lakefront to historic charm.
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
                    {option.style}
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
                Davidson Metal Roofing Experts
              </h2>
              <p className="text-gray text-lg mb-6">
                Metal roofing requires specialized expertise - especially for Davidson&apos;s
                historic properties. Our certified crews understand both modern installation
                techniques and historic preservation requirements.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray">Certified metal roofing installers with manufacturer training</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray">Historic home experience with preservation-appropriate materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray">Premium materials from Sheffield Metals, Isaiah Industries, Decra</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray">Comprehensive warranties up to 50 years on materials</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.houses.house1}
                alt="Metal roofing installation Davidson NC"
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
                Davidson Metal Roofing FAQs
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
              Related Davidson Roofing Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/roofing-davidson-nc" className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Davidson NC</h3>
              <p className="text-gray text-sm mb-3">Complete roofing services for Davidson homes</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roof-replacement-davidson-nc" className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roof Replacement</h3>
              <p className="text-gray text-sm mb-3">Full roof replacement with premium materials</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofers-davidson-nc" className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofers Davidson NC</h3>
              <p className="text-gray text-sm mb-3">Trusted local roofers for Lake Norman area</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service City Links */}
      <ServiceCityLinks
        city="Davidson"
        citySlug="davidson-nc"
        variant="compact"
      />

      <GeoProjectGalleryStrip
        pageType="location"
        city="Davidson"
        slug="metal-roofing-davidson-nc"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Davidson"

        state="NC"

        citySlug="davidson-nc"

        service="Metal Roofing"

      />

      <CTASection
        title="Ready for Metal Roofing in Davidson?"
        subtitle="Get a free quote for premium metal roofing from Lake Norman's trusted specialists. We match metal styles to Davidson's unique character."
      />
    </>
  );
}
