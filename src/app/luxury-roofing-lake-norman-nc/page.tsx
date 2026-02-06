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
  Gem,
  Sparkles,
  Home,
  Waves,
  MapPin,
  Anchor,
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
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Luxury Roofing Lake Norman NC | Waterfront Home Specialists',
  description:
    'Premium roofing for Lake Norman waterfront homes and estates. Copper, slate, cedar shake, designer shingles for Cornelius, Davidson, Mooresville, Huntersville. Wind-resistant & impact-rated materials.',
  keywords: [
    'luxury roofing lake norman',
    'lake norman waterfront roofing',
    'premium roofing lake norman nc',
    'lakefront home roofing',
    'waterfront roofing cornelius',
    'estate roofing davidson nc',
    'luxury roofing mooresville',
    'high-end roofing huntersville',
    'copper roofing lake norman',
    'slate roofing lake norman nc',
    'cedar shake lake norman',
    'impact resistant roofing lake norman',
    'wind resistant roofing lake norman',
    'the peninsula roofing',
    'lake norman estate roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/luxury-roofing-lake-norman-nc`,
  },
  openGraph: {
    title: 'Luxury Roofing Lake Norman NC | Waterfront Home Specialists',
    description:
      'Premium roofing for Lake Norman\'s finest waterfront homes and estates. Expert installation of copper, slate, cedar shake, and designer shingles with wind-resistant ratings.',
    url: `${SITE_CONFIG.url}/luxury-roofing-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.modern1,
        width: 1200,
        height: 630,
        alt: 'Luxury roofing Lake Norman NC - Best Roofing Now waterfront specialists',
      },
    ],
  },
};

// Premium roofing materials for waterfront homes
const premiumMaterials = [
  {
    title: 'Standing Seam Metal',
    description: 'Wind-rated to 140+ MPH, ideal for lakefront exposure. 40-70 year lifespan with minimal maintenance.',
    benefits: ['Wind resistant', 'Low maintenance', 'Energy efficient'],
    href: '/metal-roofing-charlotte-nc',
  },
  {
    title: 'Copper Roofing',
    description: '100+ year lifespan with stunning natural patina. Perfect for accents, dormers, and bay windows.',
    benefits: ['100+ year life', 'Corrosion proof', 'Increases value'],
    href: '/copper-roofing-charlotte-nc',
  },
  {
    title: 'Natural Slate',
    description: 'Authentic slate provides unmatched beauty and 100+ years of protection for luxury estates.',
    benefits: ['Timeless beauty', 'Fire resistant', 'Heirloom quality'],
    href: '/slate-roofing-charlotte-nc',
  },
  {
    title: 'Cedar Shake',
    description: 'Natural wood beauty with premium fire-treated options. 30-50 year lifespan with proper care.',
    benefits: ['Natural insulation', 'Rustic elegance', 'Eco-friendly'],
    href: '/cedar-shake-roofing-charlotte-nc',
  },
  {
    title: 'Designer Shingles',
    description: 'GAF Grand Canyon, CertainTeed Grand Manor - luxury appearance with proven performance.',
    benefits: ['Lifetime warranty', 'Impact rated', 'HOA approved'],
    href: '/designer-shingles-charlotte-nc',
  },
  {
    title: 'Impact-Resistant',
    description: 'Class 4 impact-rated shingles designed for Lake Norman\'s severe weather and hail events.',
    benefits: ['Class 4 rated', 'Insurance discounts', 'Hail protection'],
    href: '/hail-damage-roof-repair-charlotte-nc',
  },
];

// Lake Norman communities we serve
const lakeNormanCommunities = [
  {
    name: 'The Peninsula',
    city: 'Cornelius',
    homes: '$1M - $10M+',
    href: '/roofing-cornelius-nc',
    description: 'Exclusive gated waterfront community with marina access',
  },
  {
    name: 'Jetton Road Estates',
    city: 'Cornelius',
    homes: '$800K - $5M+',
    href: '/roofing-cornelius-nc',
    description: 'Premier waterfront properties with private docks',
  },
  {
    name: 'Governors Island',
    city: 'Denver',
    homes: '$1M - $4M+',
    href: '/roofing-denver-nc',
    description: 'Private island community with stunning lake views',
  },
  {
    name: 'Westport',
    city: 'Denver',
    homes: '$700K - $3M+',
    href: '/roofing-denver-nc',
    description: 'Upscale waterfront neighborhood with golf course',
  },
  {
    name: 'River Run',
    city: 'Davidson',
    homes: '$800K - $2.5M+',
    href: '/roofing-davidson-nc',
    description: 'Custom lakefront homes with private beach access',
  },
  {
    name: 'Birkdale',
    city: 'Huntersville',
    homes: '$600K - $1.5M+',
    href: '/roofing-huntersville-nc',
    description: 'Master-planned community near Lake Norman',
  },
  {
    name: 'The Point',
    city: 'Mooresville',
    homes: '$1.5M - $8M+',
    href: '/roofing-mooresville-nc',
    description: 'Exclusive peninsula with panoramic lake views',
  },
  {
    name: 'Trump National',
    city: 'Mooresville',
    homes: '$1M - $5M+',
    href: '/roofing-mooresville-nc',
    description: 'Golf course community with waterfront homesites',
  },
];

// Why choose us for Lake Norman luxury homes
const whyChooseUs = [
  {
    icon: Waves,
    title: 'Waterfront Specialists',
    description: 'Deep experience with Lake Norman\'s unique weather patterns, lake-effect moisture, and wind exposure.',
  },
  {
    icon: Award,
    title: 'Premium Certifications',
    description: 'GAF Master Elite, CertainTeed ShingleMaster, and certified copper/slate installers.',
  },
  {
    icon: Shield,
    title: 'Enhanced Warranties',
    description: 'Manufacturer-backed warranties up to 50 years on materials with our installation workmanship guarantee.',
  },
  {
    icon: Home,
    title: 'HOA Experience',
    description: 'Extensive experience with Lake Norman HOA requirements and architectural review boards.',
  },
];

// FAQs
const faqs = [
  {
    question: 'What roofing materials are best for Lake Norman waterfront homes?',
    answer:
      'For Lake Norman waterfront properties, we recommend materials rated for high wind exposure: standing seam metal (140+ MPH rated), impact-resistant Class 4 shingles, or premium synthetic slate. Copper accents and gutters add lasting beauty and corrosion resistance for lakefront moisture. We assess each property\'s exposure and recommend the optimal solution.',
  },
  {
    question: 'How much does luxury roofing cost in Lake Norman?',
    answer:
      'Luxury roofing in Lake Norman varies by material and home size. Designer shingles typically run $15-25/sq ft installed, standing seam metal $18-30/sq ft, cedar shake $20-35/sq ft, and copper $35-60/sq ft. For a 3,000 sq ft Lake Norman waterfront home, expect $45,000-$150,000+ depending on materials. Premium materials often qualify for insurance discounts and significantly increase property value.',
  },
  {
    question: 'Do you work with Lake Norman HOAs and architectural review boards?',
    answer:
      'Yes, we have extensive experience with Lake Norman HOA requirements including The Peninsula, Trump National, The Point, and other exclusive communities. We handle all HOA submissions, provide material samples, and attend architectural review board meetings when needed. We ensure your new roof meets all community standards.',
  },
  {
    question: 'What wind rating should my Lake Norman roof have?',
    answer:
      'We recommend minimum 110 MPH wind-rated materials for Lake Norman properties, with 130-150 MPH ratings for exposed waterfront and peninsula locations. Lake Norman experiences significant wind exposure, especially during summer storms and hurricane remnants. Higher wind ratings also often qualify for homeowner insurance premium reductions.',
  },
  {
    question: 'How do you protect waterfront homes during roof replacement?',
    answer:
      'We implement comprehensive protection for Lake Norman waterfront properties including: tarping and sealing each evening, specialized debris containment to protect docks and landscaping, coordination with dock/boat schedules, and expedited timelines to minimize exposure. Our crews understand the unique considerations of lakefront construction.',
  },
  {
    question: 'Which Lake Norman cities do you serve?',
    answer:
      'We serve all Lake Norman communities including Cornelius, Davidson, Huntersville, Mooresville, Denver, Sherrills Ford, and Terrell. Our team has completed luxury roofing projects throughout the Lake Norman region, from The Peninsula to Trump National to Governors Island. We provide free on-site estimates for all Lake Norman homeowners.',
  },
];

export default function LuxuryRoofingLakeNormanPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Luxury Roofing', url: `${SITE_CONFIG.url}/luxury-roofing-charlotte-nc` },
          { name: 'Luxury Roofing Lake Norman NC', url: `${SITE_CONFIG.url}/luxury-roofing-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/luxury-roofing-lake-norman-nc`}
        pageName="Luxury Roofing Lake Norman NC"
        city="Lake Norman"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Waves className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold">Waterfront Home Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Luxury Roofing <br className="hidden md:block" />
              <span className="text-blue-300">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium roofing for waterfront homes & estates
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in luxury roofing for Lake Norman&apos;s finest properties.
              From The Peninsula to Trump National, we deliver wind-rated, impact-resistant roofing
              systems designed for lakefront exposure and built to last generations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-blue-500 hover:bg-blue-400 text-white"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Waterfront Consultation
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Waves className="w-5 h-5 text-blue-300" />
                Waterfront Experts
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-300" />
                140+ MPH Wind Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-300" />
                GAF Master Elite
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Materials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Premium Roofing for Lakefront Homes
            </h2>
            <p className="text-gray text-lg">
              We specialize in wind-resistant, impact-rated materials engineered for Lake Norman&apos;s
              unique weather patterns and waterfront exposure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumMaterials.map((material) => (
              <Link
                key={material.title}
                href={material.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-dark text-xl mb-2 group-hover:text-primary transition-colors">
                  {material.title}
                </h3>
                <p className="text-gray text-sm mb-4">{material.description}</p>
                <div className="flex flex-wrap gap-2">
                  {material.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {benefit}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center text-primary font-medium text-sm mt-4">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lake Norman Communities Section */}
      <section className="section bg-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving Lake Norman&apos;s Premier Communities
            </h2>
            <p className="text-gray text-lg">
              From exclusive waterfront estates to master-planned communities, we provide luxury roofing
              services throughout the Lake Norman region.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {lakeNormanCommunities.map((community) => (
              <Link
                key={community.name}
                href={community.href}
                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Anchor className="w-4 h-4 text-blue-600" />
                  <span className="text-xs text-blue-600 font-medium">{community.city}</span>
                </div>
                <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">
                  {community.name}
                </h3>
                <p className="text-xs text-gray mb-2">{community.description}</p>
                <p className="text-sm font-semibold text-blue-700">{community.homes}</p>
              </Link>
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
                Lake Norman&apos;s Waterfront Roofing Experts
              </h2>
              <p className="text-gray text-lg mb-8">
                Lake Norman waterfront properties require specialized roofing expertise. Our team
                understands lake-effect weather, wind exposure, and the unique requirements of
                luxury lakefront construction.
              </p>
              <div className="space-y-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-700" />
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
                alt="Luxury roofing Lake Norman NC waterfront home"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">140+</p>
                <p className="text-sm text-white/90">MPH Wind Rated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Links Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Lake Norman Roofing Services by City
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/roofing-cornelius-nc" className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all text-center">
              <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Cornelius</h3>
              <p className="text-xs text-gray">The Peninsula, Jetton Road</p>
            </Link>
            <Link href="/roofing-davidson-nc" className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all text-center">
              <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Davidson</h3>
              <p className="text-xs text-gray">River Run, Historic Downtown</p>
            </Link>
            <Link href="/roofing-mooresville-nc" className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all text-center">
              <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Mooresville</h3>
              <p className="text-xs text-gray">The Point, Trump National</p>
            </Link>
            <Link href="/roofing-huntersville-nc" className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all text-center">
              <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Huntersville</h3>
              <p className="text-xs text-gray">Birkdale, Skybrook</p>
            </Link>
            <Link href="/roofing-denver-nc" className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all text-center">
              <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Denver</h3>
              <p className="text-xs text-gray">Governors Island, Westport</p>
            </Link>
            <Link href="/roofing-sherrills-ford-nc" className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all text-center">
              <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Sherrills Ford</h3>
              <p className="text-xs text-gray">Waterfront Estates</p>
            </Link>
            <Link href="/roofing-terrell-nc" className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all text-center">
              <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Terrell</h3>
              <p className="text-xs text-gray">Lakefront Properties</p>
            </Link>
            <Link href="/luxury-roofing-charlotte-nc" className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all text-center">
              <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Charlotte</h3>
              <p className="text-xs text-gray">Myers Park, Eastover</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for Premium Lakefront Roofing?
              </h2>
              <p className="text-white/90">
                Schedule a consultation with our Lake Norman waterfront specialists.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-700"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Consultation
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-blue-700 hover:bg-white/90"
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
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Lake Norman Luxury Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions about premium roofing for Lake Norman waterfront homes.
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
              Premium Roofing Materials
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/copper-roofing-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Copper Roofing</h3>
              <p className="text-gray text-sm mb-3">100+ year lifespan with stunning patina</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/slate-roofing-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Slate Roofing</h3>
              <p className="text-gray text-sm mb-3">Natural slate for 100+ year beauty</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/cedar-shake-roofing-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Cedar Shake</h3>
              <p className="text-gray text-sm mb-3">Natural wood beauty, 30-50 years</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/designer-shingles-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Designer Shingles</h3>
              <p className="text-gray text-sm mb-3">GAF Grand Canyon, CertainTeed Grand Manor</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="location" city="Lake Norman" slug="luxury-roofing-lake-norman-nc" />

      {/* Final CTA */}

      <CityGeoSection

        city="Lake Norman"

        state="NC"

        citySlug="lake-norman"

        service="Luxury Roofing"

      />

      <CTASection
        title="Elevate Your Lake Norman Home"
        subtitle="Request a consultation with our waterfront roofing specialists. We'll help you select premium materials engineered for lakefront exposure and built to protect your investment for generations."
      />
    </>
  );
}
