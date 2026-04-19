import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
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
  Flag,
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
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
import { LKNNeighborhoodGrid } from '@/components/sections/LKNNeighborhoodGrid';
export const metadata: Metadata = {
  title: 'Roofing The Point Mooresville NC',
  description:
    'Expert roofing for The Point in Mooresville NC. Slate, copper, and cedar shake for lakefront and golf course estates. BBB A+ rated. Free estimates.',
  keywords: [
    'the point roofing mooresville nc',
    'roofing the point lake norman',
    'luxury roofing mooresville nc',
    'the point mooresville roofing contractor',
    'lakefront roofing the point',
    'golf course roofing mooresville nc',
    'slate roofing mooresville nc',
    'copper roofing the point',
    'cedar shake roofing mooresville',
    'designer shingles the point',
    'lake norman roofing mooresville',
    'premium roofing mooresville nc',
    'standing seam metal roofing mooresville nc',
    'the point hoa roofing',
    'waterfront estate roofing mooresville',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-the-point-mooresville-nc`,
  },
  openGraph: {
    title: 'Roofing The Point Mooresville NC | Lakefront Estates',
    description:
      'Premium roofing for The Point, Mooresville\'s premier lakefront and golf course community on Lake Norman. Expert installation of slate, copper, cedar shake, and designer shingles for homes valued $800K-$3M+.',
    url: `${SITE_CONFIG.url}/roofing-the-point-mooresville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roofing The Point Mooresville NC - Best Roofing Now lakefront estate specialists',
      },
    ],
  },
};

// Premium roofing services for The Point
const services = [
  {
    title: 'Natural Slate Roofing',
    description: 'Authentic slate provides unmatched beauty and 100+ years of protection for The Point\'s finest lakefront estates. Fire-resistant, virtually maintenance-free, and truly heirloom quality.',
    benefits: ['100+ year lifespan', 'Fire resistant', 'Heirloom quality'],
    href: '/slate-roofing-charlotte-nc',
  },
  {
    title: 'Copper Roofing & Accents',
    description: 'Stunning copper installations for dormers, turrets, bay windows, and chimney caps on The Point estates. Develops a beautiful natural patina that complements lakefront and golf course views.',
    benefits: ['Corrosion proof', 'Natural patina', 'Increases value'],
    href: '/copper-roofing-charlotte-nc',
  },
  {
    title: 'Standing Seam Metal',
    description: 'Wind-rated to 140+ MPH, ideal for The Point\'s exposed lakefront and peninsula positions. Premium finishes complement estate architecture with a 40-70 year lifespan.',
    benefits: ['Wind resistant', 'Low maintenance', 'Energy efficient'],
    href: '/metal-roofing-charlotte-nc',
  },
  {
    title: 'Cedar Shake Roofing',
    description: 'Premium fire-treated cedar shake for The Point homes seeking natural wood character. Hand-split shakes create depth and warmth on lakefront and golf course estates.',
    benefits: ['Natural insulation', 'Rustic elegance', 'Eco-friendly'],
    href: '/cedar-shake-roofing-charlotte-nc',
  },
  {
    title: 'Designer Shingles',
    description: 'GAF Grand Canyon, CertainTeed Grand Manor, and Owens Corning Berkshire -- luxury aesthetics with Class 4 impact resistance and lifetime warranties. HOA approved for The Point.',
    benefits: ['Lifetime warranty', 'Impact rated', 'HOA approved'],
    href: '/designer-shingles-charlotte-nc',
  },
  {
    title: 'Storm Damage Restoration',
    description: 'Rapid response for The Point homes after Lake Norman storms. We coordinate with your HOA and insurance company for seamless restoration of your lakefront estate.',
    benefits: ['24/7 emergency', 'Insurance liaison', 'HOA coordination'],
    href: '/hail-damage-roof-repair-charlotte-nc',
  },
];

// Why choose us for The Point
const whyChooseUs = [
  {
    icon: Waves,
    title: 'Lakefront Specialists',
    description: 'Deep expertise with Lake Norman\'s wind exposure, lake-effect moisture, and the unique demands of roofing The Point\'s exposed peninsula and waterfront positions.',
  },
  {
    icon: Flag,
    title: 'Golf Course Home Experience',
    description: 'Experienced working on homes along The Point\'s golf course. We understand sight lines, landscaping protection, and the aesthetic standards of golf course communities.',
  },
  {
    icon: Award,
    title: 'Premium Certifications',
    description: 'GAF Master Elite, CertainTeed ShingleMaster, and certified copper and slate installers trusted for million-dollar lakefront estates.',
  },
  {
    icon: Home,
    title: 'HOA Compliance Experts',
    description: 'Full experience with The Point\'s architectural review board. We handle all submissions, provide material samples, and ensure complete compliance.',
  },
  {
    icon: Shield,
    title: 'Enhanced Warranties',
    description: 'Manufacturer-backed warranties up to 50 years on materials, backed by our comprehensive installation workmanship guarantee for total peace of mind.',
  },
  {
    icon: Gem,
    title: 'Estate-Level Craftsmanship',
    description: 'Our crews are trained to work on homes valued $800K-$3M+. We protect landscaping, outdoor living spaces, docks, and finishes throughout every project.',
  },
];

// FAQs for The Point
const faqs = [
  {
    question: 'What roofing materials are best for The Point lakefront homes?',
    answer:
      'For The Point\'s lakefront properties, we recommend materials rated for high wind and moisture exposure: standing seam metal (140+ MPH rated), natural slate, impact-resistant Class 4 designer shingles, or premium cedar shake. Copper accents add lasting beauty and corrosion resistance. We assess each property\'s specific exposure -- lakefront homes at The Point face more wind than interior golf course lots -- and recommend accordingly.',
  },
  {
    question: 'How much does a roof replacement cost in The Point?',
    answer:
      'Roof replacement costs in The Point vary by home size (3,000-8,000+ sq ft) and material. Designer shingles typically run $45,000-$110,000, standing seam metal $65,000-$160,000, cedar shake $70,000-$170,000, and natural slate $130,000-$300,000+. Copper accents add $10,000-$40,000+. We provide detailed estimates after an on-site inspection of your Point home.',
  },
  {
    question: 'Do you work with The Point HOA and architectural review board?',
    answer:
      'Yes, we have experience working within The Point\'s architectural guidelines. We handle all HOA submissions, provide material samples and color options for the architectural review board, and ensure complete compliance before beginning any work. We understand the importance of maintaining The Point\'s premium aesthetic standards.',
  },
  {
    question: 'What wind rating should The Point lakefront homes have?',
    answer:
      'For The Point\'s lakefront and peninsula positions, we recommend minimum 130 MPH wind-rated materials, with 140-150 MPH ratings for the most exposed lots. The Point\'s peninsula geography creates concentrated wind exposure from Lake Norman, especially during summer storms and hurricane remnants. Interior golf course lots may require slightly lower ratings.',
  },
  {
    question: 'How do you protect The Point homes and docks during roof work?',
    answer:
      'We implement comprehensive protection for The Point properties including: full tarping and sealing each evening, specialized debris containment for docks, boats, and lakefront landscaping, golf course buffer protection for course-adjacent homes, and expedited timelines to minimize disruption. Our crews are trained in the specific protocols needed for lakefront estate construction.',
  },
  {
    question: 'Do you work on both lakefront and golf course homes at The Point?',
    answer:
      'Absolutely. The Point features both lakefront estates and golf course homes, and we have experience with both. Lakefront homes typically need higher wind ratings and enhanced moisture protection, while golf course homes may prioritize aesthetic appeal and impact resistance. We tailor our material recommendations and installation approach to each property\'s unique position and exposure.',
  },
  {
    question: 'Can you install copper roofing on The Point estates?',
    answer:
      'Yes, copper is one of our specialties and a popular choice for The Point\'s finest homes. We install copper standing seam roofs, copper accent panels, copper dormers, bay window roofs, chimney caps, and decorative copper gutters. Copper provides a 100+ year lifespan and develops a stunning patina that beautifully complements lakefront and golf course settings.',
  },
  {
    question: 'How long does a roof replacement take on a large Point home?',
    answer:
      'For The Point homes ranging from 3,000-8,000+ sq ft, a complete roof replacement typically takes 5-15 business days depending on material choice (slate and copper installations take longer), roof complexity, and weather. Lake Norman weather can occasionally cause brief delays. We provide a detailed timeline during consultation and communicate proactively throughout the project.',
  },
];

export default function RoofingThePointMooresvillePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Mooresville NC', url: `${SITE_CONFIG.url}/roofing-mooresville-nc` },
          { name: 'Roofing The Point Mooresville NC', url: `${SITE_CONFIG.url}/roofing-the-point-mooresville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-the-point-mooresville-nc`}
        pageName="Roofing The Point Mooresville NC"
        city="Mooresville"
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
              <span className="text-sm font-semibold">Lakefront Estate Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing The Point <br className="hidden md:block" />
              <span className="text-blue-300">Mooresville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium roofing for Lake Norman&apos;s premier lakefront & golf course community
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              The Point is one of Lake Norman&apos;s most prestigious communities in Mooresville, featuring
              custom lakefront estates and golf course homes valued from $800K to $3M+. Best Roofing Now
              delivers the premium materials and expert craftsmanship that Point homeowners demand -- from
              natural slate and copper to designer shingles and standing seam metal engineered for
              lakefront exposure.
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
                Request Point Consultation
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
                Lakefront Experts
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

      {/* About The Point */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Mooresville&apos;s Premier Lakefront Community
              </h2>
              <p className="text-gray text-lg mb-4">
                The Point in Mooresville is one of Lake Norman&apos;s most sought-after addresses, offering
                custom lakefront estates and golf course homes ranging from 3,000 to over 8,000 square feet.
                With panoramic lake views and a championship golf course, these properties demand roofing
                materials and craftsmanship that match their exceptional setting.
              </p>
              <p className="text-gray text-lg mb-6">
                The Point&apos;s peninsula geography creates unique roofing challenges -- increased wind
                exposure from Lake Norman, lake-effect moisture, and the need for materials that maintain
                their beauty in a waterfront environment. Our team brings the specialized expertise these
                homes require.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">$800K-$3M+</p>
                  <p className="text-sm text-gray">Home Values</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">3,000-8,000+</p>
                  <p className="text-sm text-gray">Sq Ft Homes</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">Lakefront</p>
                  <p className="text-sm text-gray">& Golf Course</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">Peninsula</p>
                  <p className="text-sm text-gray">Lake Views</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <SEOImage
                src={IMAGES.hero.hero1}
                alt="Luxury roofing The Point Mooresville NC lakefront estate"
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

      {/* Trust Signals Section */}
      <section className="section bg-blue-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.googleRating}</p>
              <p className="text-sm text-gray">Google Rating</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">GAF Master Elite</p>
              <p className="text-sm text-gray">Top 2% of Contractors</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.bbbRating}</p>
              <p className="text-sm text-gray">BBB Rating</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.yearsInBusiness}+ Years</p>
              <p className="text-sm text-gray">Serving Lake Norman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Premium Roofing Services for The Point
            </h2>
            <p className="text-gray text-lg">
              We specialize in luxury roofing materials engineered for Lake Norman&apos;s waterfront
              exposure and built to meet The Point&apos;s architectural standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-dark text-xl mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((benefit) => (
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

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Point Homeowners Choose Best Roofing Now
            </h2>
            <p className="text-gray text-lg">
              Roofing lakefront and golf course estates at The Point demands specialized expertise,
              premium materials, and a commitment to protecting your investment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready to Elevate Your Point Estate?
              </h2>
              <p className="text-white/90">
                Schedule a consultation with our lakefront estate roofing specialists.
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

      {/* Premium Materials Detail Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Premium Roofing Materials
            </h2>
            <p className="text-gray text-lg">
              Explore the luxury materials we install on Point estates.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/copper-roofing-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Copper Roofing</h3>
              <p className="text-gray text-sm mb-3">100+ year lifespan with stunning natural patina</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/slate-roofing-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Slate Roofing</h3>
              <p className="text-gray text-sm mb-3">Natural slate for 100+ year heirloom beauty</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/cedar-shake-roofing-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Cedar Shake</h3>
              <p className="text-gray text-sm mb-3">Natural wood beauty with 30-50 year lifespan</p>
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

      {/* The Point Roofing Expertise Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              What Makes The Point Roofing Unique
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Peninsula Wind Exposure</h3>
                <p className="text-gray text-sm">
                  The Point&apos;s peninsula geography means homes face Lake Norman winds from multiple directions.
                  This concentrated exposure requires materials rated 130-150 MPH and installation techniques
                  specifically designed for high-wind lakefront environments. We engineer every installation
                  for The Point&apos;s unique wind patterns.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Golf Course Visibility</h3>
                <p className="text-gray text-sm">
                  Homes along The Point&apos;s championship golf course have heightened visibility from multiple
                  angles. We select materials and colors that enhance curb appeal both from the street and the
                  fairway, ensuring your roof looks stunning from every perspective while meeting HOA standards.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Dock & Marina Coordination</h3>
                <p className="text-gray text-sm">
                  Many Point lakefront homes have private docks, boat lifts, and waterfront structures. Our
                  crews implement specialized protection for all marina assets, schedule work around boating
                  activities, and ensure no debris reaches the lake. We treat your waterfront as carefully
                  as your roof.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Mooresville Local Expertise</h3>
                <p className="text-gray text-sm">
                  As active roofers in the Mooresville area, we know Iredell County building codes, local permit
                  requirements, and The Point&apos;s specific community standards inside and out. Our local knowledge
                  and relationships with inspectors ensure your project proceeds smoothly from start to completion.
                </p>
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
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                The Point Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions about premium roofing for The Point in Mooresville.
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

      {/* Related Links */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Explore Our Lake Norman Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/roofing-mooresville-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <MapPin className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Mooresville NC</h3>
              <p className="text-gray text-sm mb-3">Complete roofing services for all Mooresville neighborhoods</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/luxury-roofing-lake-norman-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Waves className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Luxury Roofing Lake Norman</h3>
              <p className="text-gray text-sm mb-3">Premium roofing for all Lake Norman waterfront communities</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="location" city="Mooresville" slug="roofing-the-point-mooresville-nc" />

      <CityGeoSection
        city="Mooresville"
        state="NC"
        citySlug="mooresville-nc"
        service="Luxury Roofing"
      />


      <LKNNeighborhoodGrid currentCity="Mooresville" currentSlug="roofing-the-point-mooresville-nc" />
      <LKNPartnershipsBlock city={"Mooresville"} />
      <LKNDataCitations city={"Mooresville"} />
      <CTASection
        title="Elevate Your Point Estate"
        subtitle="Request a consultation with our lakefront roofing specialists. We'll help you select premium materials engineered for The Point's waterfront and golf course exposure, built to protect your investment for generations."
      />
    </>
  );
}
