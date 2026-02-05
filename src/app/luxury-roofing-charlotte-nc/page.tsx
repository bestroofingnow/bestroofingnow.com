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
  Home,
  Landmark,
  Sparkles,
  Crown,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
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
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Luxury Roofing Charlotte NC | Premium Roofing for Fine Homes',
  description:
    'Premium luxury roofing for Charlotte\'s finest homes. Slate, copper, cedar shake, designer shingles for $800K+ homes. Myers Park, Eastover, SouthPark specialists. Free consultation.',
  keywords: [
    'luxury roofing charlotte nc',
    'premium roofing charlotte',
    'high end roofing charlotte nc',
    'luxury home roofing charlotte',
    'estate roofing charlotte nc',
    'custom home roofing charlotte',
    'upscale roofing charlotte nc',
    'fine home roofing charlotte',
    'executive home roofing charlotte',
    'mansion roofing charlotte nc',
    'myers park roofing',
    'eastover roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/luxury-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Luxury Roofing Charlotte NC | Premium Roofing for Fine Homes',
    description:
      'Charlotte\'s luxury roofing specialists. Premium materials for $800K+ homes including slate, copper, cedar shake, and designer shingles. Free consultation.',
    url: `${SITE_CONFIG.url}/luxury-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.modern1,
        width: 1200,
        height: 630,
        alt: 'Luxury roofing Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Premium roofing materials
const premiumMaterials = [
  {
    title: 'Natural Slate',
    description: 'The ultimate in luxury roofing. Quarried stone with 100-150 year lifespan. Timeless beauty that only improves with age.',
    lifespan: '100-150 years',
    priceRange: '$$$$$',
    ideal: 'Historic estates, traditional luxury homes',
    href: '/slate-roofing-charlotte-nc',
  },
  {
    title: 'Copper Roofing',
    description: 'Premium metal with stunning natural patina. Full roofs, accents, dormers, and gutters. Zero maintenance required.',
    lifespan: '100-200 years',
    priceRange: '$$$$$',
    ideal: 'Historic homes, architectural accents',
    href: '/copper-roofing-charlotte-nc',
  },
  {
    title: 'Designer Shingles',
    description: 'Luxury architectural shingles that replicate slate and shake. GAF Grand Canyon, CertainTeed Grand Manor.',
    lifespan: '40-50 years',
    priceRange: '$$$',
    ideal: 'Upscale homes, HOA communities',
    href: '/designer-shingles-charlotte-nc',
  },
  {
    title: 'Cedar Shake',
    description: 'Natural wood beauty with rustic elegance. Hand-split or tapersawn shakes with superior insulation.',
    lifespan: '30-40 years',
    priceRange: '$$$$',
    ideal: 'Traditional homes, lake houses',
    href: '/asphalt-shingle-roofing-charlotte-nc',
  },
  {
    title: 'Standing Seam Metal',
    description: 'Modern architectural metal in premium finishes. Clean lines, exceptional durability, energy efficient.',
    lifespan: '50-70 years',
    priceRange: '$$$$',
    ideal: 'Contemporary homes, transitional styles',
    href: '/metal-roofing-charlotte-nc',
  },
  {
    title: 'Clay & Concrete Tile',
    description: 'Mediterranean and Spanish Colonial elegance. Class A fire rating with exceptional longevity.',
    lifespan: '50-100 years',
    priceRange: '$$$$',
    ideal: 'Mediterranean, Spanish, Italian styles',
    href: '/tile-roofing-charlotte-nc',
  },
];

// Luxury neighborhoods
const luxuryNeighborhoods = [
  { name: 'Myers Park', value: '$800K-$4M+', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'Eastover', value: '$1.5M-$10M+', href: '/roofing-eastover-charlotte-nc' },
  { name: 'Foxcroft', value: '$800K-$3M+', href: '/neighborhoods/foxcroft' },
  { name: 'Quail Hollow', value: '$1.5M-$8M+', href: '/neighborhoods/quail-hollow' },
  { name: 'Piper Glen', value: '$1.2M-$5M+', href: '/neighborhoods/piper-glen' },
  { name: 'SouthPark', value: '$500K-$3M', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Ballantyne', value: '$450K-$2.5M', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'Providence Plantation', value: '$700K-$1.5M', href: '/neighborhoods/providence-plantation' },
  { name: 'Dilworth', value: '$450K-$1.8M', href: '/roofing-dilworth-charlotte-nc' },
  { name: 'The Peninsula', value: '$1.5M-$8M+', href: '/neighborhoods/the-peninsula' },
  { name: 'Lake Norman Waterfront', value: '$1M-$5M+', href: '/roofing-cornelius-nc' },
  { name: 'Davidson Waterfront', value: '$750K-$3M+', href: '/roofing-davidson-nc' },
];

// Why choose us for luxury roofing
const whyChooseUs = [
  {
    icon: Award,
    title: 'Triple Manufacturer Certified',
    description: 'GAF Factory-Certified, CertainTeed SELECT ShingleMaster, and Owens Corning Preferred - the highest certifications available.',
  },
  {
    icon: Landmark,
    title: 'Historic Home Specialists',
    description: 'Extensive experience with Charlotte\'s historic properties and preservation requirements in Myers Park, Eastover, and Dilworth.',
  },
  {
    icon: Gem,
    title: 'Premium Material Expertise',
    description: 'Specialized training in slate, copper, cedar shake, and other premium materials that require advanced installation techniques.',
  },
  {
    icon: Crown,
    title: 'White Glove Service',
    description: 'Dedicated project manager, detailed communication, meticulous cleanup, and respect for your property throughout the project.',
  },
  {
    icon: Shield,
    title: 'Comprehensive Warranties',
    description: 'Extended manufacturer warranties up to 50 years plus our own workmanship guarantee for complete peace of mind.',
  },
  {
    icon: Home,
    title: 'HOA Expertise',
    description: 'We handle HOA approval processes, material submissions, and ensure compliance with community architectural standards.',
  },
];

// FAQs
const faqs = [
  {
    question: 'What makes a roofing contractor qualified for luxury homes?',
    answer:
      'Luxury home roofing requires specialized expertise that most contractors don\'t have. Key qualifications include: manufacturer certifications (GAF Master Elite, CertainTeed SELECT ShingleMaster), experience with premium materials (slate, copper, cedar), understanding of historic preservation, knowledge of HOA requirements, and attention to architectural detail. Best Roofing Now holds the highest certifications from all major manufacturers and has extensive experience in Charlotte\'s most prestigious neighborhoods.',
  },
  {
    question: 'What roofing material is best for homes over $800K?',
    answer:
      'For luxury homes valued at $800K+, we typically recommend: Natural Slate for traditional estates ($1M+), Copper for accents and historic homes, Designer Shingles (GAF Grand Canyon, CertainTeed Grand Manor) for most upscale homes, and Standing Seam Metal for contemporary architecture. The best choice depends on your home\'s architectural style, HOA requirements, and personal preference. We provide free consultations to help you select the perfect material.',
  },
  {
    question: 'Do you handle HOA approval for luxury neighborhoods?',
    answer:
      'Yes, we handle the entire HOA approval process for communities like Ballantyne, Piper Glen, Quail Hollow, and Providence Plantation. We prepare material samples, color selections, and documentation. We know which materials are pre-approved in most Charlotte HOAs and can navigate any special requirements. Our experience with these communities means faster approvals and no surprises.',
  },
  {
    question: 'How do you protect my property during luxury home roofing?',
    answer:
      'We implement extensive property protection protocols for luxury homes including: covering landscaping and outdoor living areas, protecting driveways with boards or runners, daily cleanup of all debris, magnetic sweeping for nails, and post-project inspection. We understand that our clients have invested significantly in their properties and we treat every home with the respect it deserves.',
  },
  {
    question: 'What warranties do you offer for premium roofing?',
    answer:
      'Our premium roofing installations include: manufacturer warranties up to 50 years (lifetime for certain products), enhanced wind warranties up to 130 MPH, algae resistance guarantees for humid Charlotte climate, and our own 10-year workmanship warranty. For slate and copper, we offer specialized warranties reflecting these materials\' exceptional longevity.',
  },
  {
    question: 'Do you work with architects and builders on custom homes?',
    answer:
      'Yes, we regularly collaborate with Charlotte architects, custom builders, and designers on new construction and renovation projects. We can provide detailed specifications, material samples, and pricing for architectural review. Our team understands blueprints and can coordinate installation timing with other trades. We\'ve partnered with many of Charlotte\'s premier custom home builders.',
  },
];

export default function LuxuryRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Luxury Roofing Charlotte NC', url: `${SITE_CONFIG.url}/luxury-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/luxury-roofing-charlotte-nc`}
        pageName="Luxury Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.houses.modern1}
            alt="Luxury roofing Charlotte NC - Premium roofing for fine homes"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 rounded-full px-4 py-2 mb-4">
              <Crown className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-200">Premium Services for Fine Homes</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Luxury Roofing <br className="hidden md:block" />
              <span className="text-amber-400">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium roofing for Charlotte&apos;s finest homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in luxury roofing for homes valued at $800K and above.
              From natural slate and copper to designer shingles, we deliver exceptional quality
              that protects your investment and enhances your home&apos;s beauty for generations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Luxury Consultation
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
                <Landmark className="w-5 h-5 text-amber-400" />
                Historic Home Specialists
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                {SITE_CONFIG.googleReviewCount}+ 5-Star Reviews
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
              Premium Roofing Materials
            </h2>
            <p className="text-gray text-lg">
              We specialize in the finest roofing materials available, each selected for superior
              beauty, longevity, and performance in Charlotte&apos;s climate.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumMaterials.map((material) => (
              <Link
                key={material.title}
                href={material.href}
                className="group bg-light rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-dark text-xl group-hover:text-primary transition-colors">
                    {material.title}
                  </h3>
                  <span className="text-amber-600 font-bold text-sm">{material.priceRange}</span>
                </div>
                <p className="text-gray text-sm mb-4">{material.description}</p>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 pt-4">
                  <span className="text-gray">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {material.lifespan}
                  </span>
                  <span className="inline-flex items-center text-primary font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Charlotte&apos;s Most Prestigious Neighborhoods
            </h2>
            <p className="text-gray text-lg">
              We have extensive experience in Charlotte&apos;s most exclusive communities,
              understanding the unique architectural styles and HOA requirements of each area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {luxuryNeighborhoods.map((neighborhood) => (
              <Link
                key={neighborhood.name}
                href={neighborhood.href}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-dark group-hover:text-primary transition-colors">
                  {neighborhood.name}
                </h3>
                <p className="text-sm text-gray">{neighborhood.value}</p>
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
              Why Choose Best Roofing Now for Luxury Homes?
            </h2>
            <p className="text-gray text-lg">
              Luxury homes require contractors with specialized expertise, premium materials,
              and a commitment to excellence that matches your standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for Premium Roofing?
              </h2>
              <p className="text-white/90">
                Schedule a complimentary consultation with our luxury roofing specialists.
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
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Luxury Roofing FAQs
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

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="luxury-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/luxury-roofing-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Luxury Roofing"

      />

      <CTASection
        title="Experience Luxury Roofing Excellence"
        subtitle="Schedule a complimentary consultation with Charlotte's luxury roofing specialists. We'll help you select the perfect roofing solution that enhances your home's beauty and protects your investment for generations."
      />
    </>
  );
}
