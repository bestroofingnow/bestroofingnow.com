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
  Lock,
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
  title: 'Roofing Antiquity Cornelius NC',
  description:
    'Expert roofing for Antiquity in Cornelius NC. Premium materials for gated luxury estates near Lake Norman. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'antiquity roofing cornelius nc',
    'roofing antiquity cornelius',
    'gated community roofing cornelius nc',
    'antiquity cornelius roofing contractor',
    'luxury roofing antiquity cornelius',
    'hoa roofing cornelius nc',
    'designer shingles antiquity',
    'standing seam metal roofing cornelius',
    'cedar shake roofing antiquity cornelius',
    'copper roofing cornelius nc',
    'slate roofing antiquity',
    'premium roofing cornelius nc',
    'antiquity hoa roofing compliance',
    'gated community roof replacement cornelius',
    'upscale roofing cornelius nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-antiquity-cornelius-nc`,
  },
  openGraph: {
    title: 'Roofing Antiquity Cornelius NC | Gated Community',
    description:
      'Premium roofing for Antiquity, Cornelius\' gated luxury community. Expert installation of designer shingles, standing seam metal, and cedar shake for homes valued $600K-$1.5M.',
    url: `${SITE_CONFIG.url}/roofing-antiquity-cornelius-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roofing Antiquity Cornelius NC - Best Roofing Now gated community specialists',
      },
    ],
  },
};

// Premium roofing services for Antiquity
const services = [
  {
    title: 'Designer Shingles',
    description: 'GAF Grand Canyon, CertainTeed Grand Manor, and Owens Corning Berkshire collection -- luxury aesthetics with Class 4 impact resistance and lifetime warranties. The most popular choice for Antiquity homes.',
    benefits: ['Lifetime warranty', 'Impact rated', 'HOA approved'],
    href: '/designer-shingles-charlotte-nc',
  },
  {
    title: 'Standing Seam Metal',
    description: 'Wind-rated to 140+ MPH with premium finishes that complement Antiquity\'s upscale architecture. Energy-efficient with a 40-70 year lifespan and minimal maintenance.',
    benefits: ['Wind resistant', 'Low maintenance', 'Energy efficient'],
    href: '/metal-roofing-charlotte-nc',
  },
  {
    title: 'Cedar Shake Roofing',
    description: 'Premium fire-treated cedar shake for Antiquity homes seeking natural wood beauty. Hand-split shakes create depth and character that enhances large-lot estate homes.',
    benefits: ['Natural insulation', 'Rustic elegance', 'Eco-friendly'],
    href: '/cedar-shake-roofing-charlotte-nc',
  },
  {
    title: 'Copper Roofing & Accents',
    description: 'Elegant copper work for dormers, bay windows, and architectural accents. Copper adds timeless character to Antiquity\'s custom homes with a 100+ year lifespan.',
    benefits: ['100+ year life', 'Corrosion proof', 'Increases value'],
    href: '/copper-roofing-charlotte-nc',
  },
  {
    title: 'Natural Slate Roofing',
    description: 'Authentic slate provides unmatched beauty and century-long protection for Antiquity\'s finest homes. Fire-resistant and virtually maintenance-free.',
    benefits: ['Timeless beauty', 'Fire resistant', 'Heirloom quality'],
    href: '/slate-roofing-charlotte-nc',
  },
  {
    title: 'Roof Inspections & Maintenance',
    description: 'Annual inspection and preventive maintenance plans for Antiquity homes. Catch small issues before they become costly repairs and extend your roof\'s lifespan.',
    benefits: ['Annual plans', 'Early detection', 'Extends lifespan'],
    href: '/roof-inspection-charlotte-nc',
  },
];

// Why choose us for Antiquity
const whyChooseUs = [
  {
    icon: Lock,
    title: 'Gated Community Experience',
    description: 'We understand the access protocols, scheduling requirements, and professional expectations of working in Antiquity\'s gated environment.',
  },
  {
    icon: Home,
    title: 'HOA Compliance Experts',
    description: 'Full experience with Antiquity\'s architectural review board. We handle all submissions, provide material samples, and ensure complete HOA compliance.',
  },
  {
    icon: Award,
    title: 'Premium Certifications',
    description: 'GAF Master Elite, CertainTeed ShingleMaster, and certified installers trusted by homeowners in Cornelius\' most exclusive gated communities.',
  },
  {
    icon: Shield,
    title: 'Enhanced Warranties',
    description: 'Manufacturer-backed warranties up to 50 years on materials, backed by our comprehensive installation workmanship guarantee.',
  },
  {
    icon: Gem,
    title: 'Large-Lot Estate Expertise',
    description: 'Antiquity features spacious 3,500-6,000 sq ft homes on large lots. Our crews are equipped and experienced to handle these larger-scale projects efficiently.',
  },
  {
    icon: Clock,
    title: 'Respectful & Efficient',
    description: 'We respect Antiquity\'s quiet, upscale environment. Our crews maintain clean job sites, follow community noise guidelines, and minimize disruption.',
  },
];

// FAQs for Antiquity
const faqs = [
  {
    question: 'What roofing materials does the Antiquity HOA approve?',
    answer:
      'Antiquity\'s architectural review board typically approves premium materials including designer architectural shingles (GAF Grand Canyon, CertainTeed Grand Manor), standing seam metal in approved colors, cedar shake, and in some cases natural slate or copper accents. We work directly with the HOA to submit material samples and color selections before any work begins, ensuring full compliance.',
  },
  {
    question: 'How much does a roof replacement cost in Antiquity?',
    answer:
      'Roof replacement costs in Antiquity depend on home size (typically 3,500-6,000 sq ft) and material selection. Designer shingles run $40,000-$85,000, standing seam metal $55,000-$120,000, cedar shake $60,000-$130,000, and natural slate $100,000-$220,000+. We provide detailed estimates after an on-site inspection of your Antiquity home.',
  },
  {
    question: 'Do you have experience working in gated communities like Antiquity?',
    answer:
      'Yes, we have extensive experience working in gated Lake Norman communities including Antiquity. We coordinate gate access for our crews, follow all community protocols for work hours and vehicle restrictions, maintain immaculate job sites, and communicate with property managers throughout the project. Our teams understand the expectations of gated community living.',
  },
  {
    question: 'What makes Antiquity homes different from a roofing perspective?',
    answer:
      'Antiquity features upscale homes on large lots, typically 3,500-6,000 sq ft with complex rooflines including multiple peaks, dormers, and steep pitches. These larger roofs require more material, specialized equipment for steep-slope work, and experienced crews who can handle architectural complexity. We also ensure all work meets the community\'s strict aesthetic standards.',
  },
  {
    question: 'How long does a roof replacement take on an Antiquity home?',
    answer:
      'For Antiquity homes ranging from 3,500-6,000 sq ft, a complete roof replacement typically takes 4-10 business days depending on the material selected, roof complexity, and weather conditions. Designer shingles are fastest, while slate and copper installations take longer. We provide a detailed timeline during your consultation.',
  },
  {
    question: 'Do you handle the HOA approval process for Antiquity?',
    answer:
      'Absolutely. We handle the entire Antiquity HOA approval process including: preparing documentation with material specifications and color selections, submitting to the architectural review board, providing physical material samples when required, and attending meetings on your behalf if needed. We don\'t begin work until full approval is obtained.',
  },
  {
    question: 'Can you match the existing roof style on my Antiquity home?',
    answer:
      'Yes. Many Antiquity homes feature specific architectural details and material choices that need to be preserved during a partial repair or matched during a full replacement. We carefully identify existing materials, colors, and installation patterns, and bring samples on-site for comparison before ordering. This ensures a seamless result.',
  },
  {
    question: 'Do you offer financing for Antiquity roof replacements?',
    answer:
      'Yes, we offer flexible financing options for Antiquity homeowners. With roof replacements on larger homes often ranging from $40,000 to $130,000+, we provide multiple financing plans to fit your budget. We also work directly with insurance companies on storm damage claims, which can significantly reduce out-of-pocket costs.',
  },
];

export default function RoofingAntiquityCorneliusPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Cornelius NC', url: `${SITE_CONFIG.url}/roofing-cornelius-nc` },
          { name: 'Roofing Antiquity Cornelius NC', url: `${SITE_CONFIG.url}/roofing-antiquity-cornelius-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-antiquity-cornelius-nc`}
        pageName="Roofing Antiquity Cornelius NC"
        city="Cornelius"
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
              <Lock className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold">Gated Community Roofing Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Antiquity <br className="hidden md:block" />
              <span className="text-blue-300">Cornelius NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium roofing for Cornelius&apos; gated luxury community
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Antiquity is one of Cornelius&apos; premier gated communities, featuring upscale homes on large
              lots valued from $600K to $1.5M. With homes ranging from 3,500 to 6,000 square feet, these
              properties demand premium roofing materials and expert craftsmanship. Best Roofing Now brings
              gated community experience, HOA compliance expertise, and the quality that Antiquity homeowners expect.
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
                Request Antiquity Consultation
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
                <Lock className="w-5 h-5 text-blue-300" />
                Gated Community Access
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-300" />
                HOA Compliant
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-300" />
                GAF Master Elite
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Antiquity */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Upscale Gated Living in Cornelius
              </h2>
              <p className="text-gray text-lg mb-4">
                Antiquity is a prestigious gated community in Cornelius, NC, known for its spacious
                homes on generous lots. With properties ranging from 3,500 to 6,000 square feet and
                values from $600K to $1.5M, Antiquity represents the best of upscale suburban living
                near Lake Norman.
              </p>
              <p className="text-gray text-lg mb-6">
                These substantial homes feature complex rooflines with multiple peaks, dormers, and
                steep pitches that require experienced roofing contractors. Antiquity&apos;s HOA maintains
                high standards for exterior aesthetics, making material selection and professional
                installation essential for approval and long-term curb appeal.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">$600K-$1.5M</p>
                  <p className="text-sm text-gray">Home Values</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">3,500-6,000</p>
                  <p className="text-sm text-gray">Sq Ft Homes</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">Gated</p>
                  <p className="text-sm text-gray">Private Access</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">Large Lots</p>
                  <p className="text-sm text-gray">Spacious Estates</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.hero.hero1}
                alt="Premium roofing Antiquity Cornelius NC gated community"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">HOA</p>
                <p className="text-sm text-white/90">Compliant Experts</p>
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
              Premium Roofing Services for Antiquity
            </h2>
            <p className="text-gray text-lg">
              We offer HOA-approved roofing materials and expert installation designed for
              Antiquity&apos;s upscale homes and architectural standards.
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
              Why Antiquity Homeowners Choose Best Roofing Now
            </h2>
            <p className="text-gray text-lg">
              Working in gated communities requires professionalism, HOA expertise, and a commitment to
              maintaining the neighborhood&apos;s premium standards.
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
                Ready to Upgrade Your Antiquity Home?
              </h2>
              <p className="text-white/90">
                Schedule a consultation with our gated community roofing specialists.
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
              Explore the luxury materials we install on Antiquity homes.
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

      {/* Antiquity Roofing Expertise Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              What Makes Antiquity Roofing Unique
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Large-Lot Estate Homes</h3>
                <p className="text-gray text-sm">
                  Antiquity features spacious lots with homes ranging from 3,500 to 6,000 square feet. These
                  larger homes have complex rooflines with multiple peaks, valleys, and dormers that require
                  experienced crews and specialized equipment for proper installation on steep-slope sections.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Strict HOA Standards</h3>
                <p className="text-gray text-sm">
                  Antiquity maintains rigorous architectural standards for exterior modifications. We prepare
                  comprehensive HOA submission packages including material specs, color samples, and installation
                  details. Our proactive approach streamlines the approval process for homeowners.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Gated Security Protocols</h3>
                <p className="text-gray text-sm">
                  We pre-register all crew members and vehicles with Antiquity&apos;s gate staff, schedule material
                  deliveries within community guidelines, and ensure our teams follow all access protocols.
                  Our project managers handle all coordination so homeowners can focus on their daily routine.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Near Lake Norman</h3>
                <p className="text-gray text-sm">
                  While not directly lakefront, Antiquity&apos;s Cornelius location near Lake Norman means homes
                  still experience lake-effect weather patterns including increased moisture and occasional strong
                  winds. We recommend materials rated for this environment to ensure maximum roof longevity.
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
                Antiquity Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions about premium roofing for Antiquity in Cornelius.
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
              Explore Our Cornelius Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/roofing-cornelius-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <MapPin className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Cornelius NC</h3>
              <p className="text-gray text-sm mb-3">Complete roofing services for all Cornelius neighborhoods</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/luxury-roofing-lake-norman-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Waves className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Luxury Roofing Lake Norman</h3>
              <p className="text-gray text-sm mb-3">Premium roofing for all Lake Norman luxury communities</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="location" city="Cornelius" slug="roofing-antiquity-cornelius-nc" />

      <CityGeoSection
        city="Cornelius"
        state="NC"
        citySlug="cornelius-nc"
        service="Luxury Roofing"
      />


      <LKNNeighborhoodGrid currentCity="Cornelius" currentSlug="roofing-antiquity-cornelius-nc" />
      <LKNPartnershipsBlock city={"Cornelius"} />
      <LKNDataCitations city={"Cornelius"} />
      <CTASection
        title="Elevate Your Antiquity Home"
        subtitle="Request a consultation with our gated community roofing specialists. We'll help you select HOA-approved premium materials and deliver expert installation that protects your Antiquity investment."
      />
    </>
  );
}
