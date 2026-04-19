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
  TreePine,
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
  title: "Roofing Governor's Island Denver NC | Lakefront Homes",
  description:
    "Expert roofing for Governor's Island in Denver NC. Premium materials for lakefront estates on Lake Norman. BBB A+ rated. Free estimates.",
  keywords: [
    'governors island roofing denver nc',
    'roofing governors island lake norman',
    'luxury roofing denver nc',
    'governors island denver roofing contractor',
    'lakefront roofing governors island',
    'waterfront roofing denver nc',
    'slate roofing denver nc',
    'copper roofing governors island',
    'cedar shake roofing denver',
    'designer shingles governors island',
    'lake norman roofing denver',
    'premium roofing denver nc',
    'standing seam metal roofing denver nc',
    'luxury estate roofing denver',
    'governors island hoa roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-governors-island-denver-nc`,
  },
  openGraph: {
    title: "Roofing Governor's Island Denver NC | Lakefront Homes",
    description:
      "Premium roofing for Governor's Island, Denver's exclusive lakefront community on Lake Norman. Expert installation of copper, slate, cedar shake, and designer shingles for homes valued $800K-$3M+.",
    url: `${SITE_CONFIG.url}/roofing-governors-island-denver-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: "Roofing Governor's Island Denver NC - Best Roofing Now lakefront specialists",
      },
    ],
  },
};

// Premium roofing services for Governor's Island
const services = [
  {
    title: 'Standing Seam Metal',
    description: 'Wind-rated to 140+ MPH, ideal for Governor\'s Island lakefront exposure. Premium finishes complement waterfront estate architecture with 40-70 year lifespan.',
    benefits: ['Wind resistant', 'Low maintenance', 'Energy efficient'],
    href: '/metal-roofing-charlotte-nc',
  },
  {
    title: 'Copper Roofing & Accents',
    description: 'Elegant copper installations for dormers, turrets, and bay windows on Governor\'s Island estates. Develops a stunning patina that enhances lakefront curb appeal.',
    benefits: ['100+ year life', 'Corrosion proof', 'Increases value'],
    href: '/copper-roofing-charlotte-nc',
  },
  {
    title: 'Natural Slate Roofing',
    description: 'Authentic slate provides unmatched beauty and 100+ years of protection for Governor\'s Island custom homes. The ultimate in luxury roofing materials.',
    benefits: ['Timeless beauty', 'Fire resistant', 'Heirloom quality'],
    href: '/slate-roofing-charlotte-nc',
  },
  {
    title: 'Cedar Shake Roofing',
    description: 'Premium fire-treated cedar shake for homes seeking natural wood beauty. Hand-split shakes create depth and warmth on lakefront custom estates.',
    benefits: ['Natural insulation', 'Rustic elegance', 'Eco-friendly'],
    href: '/cedar-shake-roofing-charlotte-nc',
  },
  {
    title: 'Designer Shingles',
    description: 'GAF Grand Canyon, CertainTeed Grand Manor -- luxury aesthetics with Class 4 impact resistance and lifetime warranties. Popular for Governor\'s Island homes.',
    benefits: ['Lifetime warranty', 'Impact rated', 'HOA approved'],
    href: '/designer-shingles-charlotte-nc',
  },
  {
    title: 'Roof Inspections & Maintenance',
    description: 'Annual inspections and preventive maintenance plans for Governor\'s Island homes. Protect your waterfront investment with proactive roof care.',
    benefits: ['Annual plans', 'Storm readiness', 'Extends lifespan'],
    href: '/roof-inspection-charlotte-nc',
  },
];

// Why choose us for Governor's Island
const whyChooseUs = [
  {
    icon: Waves,
    title: 'Waterfront Roofing Experts',
    description: 'Deep expertise with Lake Norman\'s wind exposure, lake-effect moisture, and the unique demands of Governor\'s Island lakefront construction.',
  },
  {
    icon: Award,
    title: 'Premium Certifications',
    description: 'GAF Master Elite, CertainTeed ShingleMaster, and certified copper and slate installers trusted for luxury lakefront properties.',
  },
  {
    icon: Home,
    title: 'HOA Compliance',
    description: 'Full experience with Governor\'s Island architectural standards. We handle all submissions, material samples, and compliance documentation.',
  },
  {
    icon: Shield,
    title: 'Enhanced Warranties',
    description: 'Manufacturer-backed warranties up to 50 years on materials, plus our comprehensive installation workmanship guarantee.',
  },
  {
    icon: Gem,
    title: 'Estate-Level Craftsmanship',
    description: 'Our crews are trained to work on homes valued $800K-$3M+. We protect landscaping, docks, and finishes throughout every project.',
  },
  {
    icon: Clock,
    title: 'Efficient Project Timelines',
    description: 'We understand that lakefront homeowners need minimal disruption. Our crews work efficiently while maintaining the highest quality standards.',
  },
];

// FAQs for Governor's Island
const faqs = [
  {
    question: "What roofing materials work best for Governor's Island lakefront homes?",
    answer:
      "For Governor's Island properties, we recommend materials rated for high wind and moisture exposure: standing seam metal (140+ MPH rated), impact-resistant Class 4 designer shingles, natural slate, or premium cedar shake. Copper accents and gutters add lasting beauty and corrosion resistance. We assess each property's specific exposure to Lake Norman and recommend the optimal solution.",
  },
  {
    question: "How much does roofing cost in Governor's Island?",
    answer:
      "Roofing costs in Governor's Island vary by home size (3,000-8,000 sq ft) and material. Designer shingles typically run $45,000-$100,000, standing seam metal $60,000-$150,000, cedar shake $70,000-$160,000, and natural slate $120,000-$280,000+. We provide detailed estimates after an on-site inspection of your Governor's Island property.",
  },
  {
    question: "Do you work with the Governor's Island HOA?",
    answer:
      "Yes, we have experience working within Governor's Island's architectural guidelines. We handle all HOA submissions, provide material samples and color options for review, and ensure complete compliance with community standards before beginning any work. Our team understands the importance of maintaining the neighborhood's aesthetic standards.",
  },
  {
    question: "What wind rating should my Governor's Island roof have?",
    answer:
      "We recommend minimum 120 MPH wind-rated materials for Governor's Island properties, with 130-150 MPH ratings for the most exposed lakefront positions. Lake Norman generates significant wind during summer storms and hurricane remnants, and Governor's Island's waterfront location increases exposure. Higher wind ratings also qualify for insurance premium reductions.",
  },
  {
    question: "How do you protect lakefront properties during roof replacement?",
    answer:
      "We implement comprehensive protection for Governor's Island waterfront homes including: full tarping and sealing each evening, specialized debris containment to protect docks, boats, and landscaping, coordination with boat schedules, and expedited timelines to minimize exposure. Our crews understand the unique considerations of lakefront construction.",
  },
  {
    question: 'Can you install copper accents on existing roofs?',
    answer:
      "Absolutely. Copper accent work is one of our specialties. We install copper dormers, bay window roofs, chimney flashings, ridge caps, and decorative gutters on Governor's Island homes. Copper can be added to complement an existing roof or as part of a full replacement. It develops a beautiful patina over time that enhances lakefront curb appeal.",
  },
  {
    question: "Do you offer emergency storm repair for Governor's Island?",
    answer:
      "Yes, we provide 24/7 emergency storm response for Governor's Island homes. Lake Norman properties are particularly vulnerable to wind and hail damage during severe weather. We offer rapid tarping and temporary repairs, followed by full restoration. We coordinate directly with your insurance company and HOA to streamline the claims and approval process.",
  },
  {
    question: "How long will my Governor's Island roof last?",
    answer:
      "Roofing lifespan on Governor's Island depends on the material selected. Designer architectural shingles last 30-50 years, standing seam metal 40-70 years, cedar shake 30-50 years with proper maintenance, and natural slate or copper 100+ years. We recommend materials rated for lakefront exposure to maximize longevity against Lake Norman's weather patterns.",
  },
];

export default function RoofingGovernorsIslandDenverPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Denver NC', url: `${SITE_CONFIG.url}/roofing-denver-nc` },
          { name: "Roofing Governor's Island Denver NC", url: `${SITE_CONFIG.url}/roofing-governors-island-denver-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-governors-island-denver-nc`}
        pageName="Roofing Governor's Island Denver NC"
        city="Denver"
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
              <span className="text-sm font-semibold">Lakefront Home Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Governor&apos;s Island <br className="hidden md:block" />
              <span className="text-blue-300">Denver NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium roofing for exclusive Lake Norman lakefront estates
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Governor&apos;s Island is one of Lake Norman&apos;s most coveted lakefront communities near Denver NC,
              featuring custom waterfront estates valued from $800K to $3M+. Best Roofing Now delivers the premium
              materials and expert craftsmanship that Governor&apos;s Island homeowners demand -- from standing seam
              metal and copper to natural slate and designer shingles.
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
                Request Lakefront Consultation
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

      {/* About Governor's Island */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Exclusive Lakefront Living in Denver NC
              </h2>
              <p className="text-gray text-lg mb-4">
                Governor&apos;s Island is an exclusive lakefront community near Denver NC, offering some of
                Lake Norman&apos;s finest waterfront properties. Custom homes range from 3,000 to over 8,000
                square feet, with direct lake access and stunning water views that demand roofing materials
                engineered for beauty and waterfront durability.
              </p>
              <p className="text-gray text-lg mb-6">
                These estates require roofing contractors who understand the unique challenges of lakefront
                construction -- from enhanced wind exposure and lake-effect moisture to HOA compliance and
                the meticulous attention to detail that luxury homeowners expect.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">$800K-$3M+</p>
                  <p className="text-sm text-gray">Home Values</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">3,000-8,000</p>
                  <p className="text-sm text-gray">Sq Ft Homes</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">Waterfront</p>
                  <p className="text-sm text-gray">Lake Access</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">Custom</p>
                  <p className="text-sm text-gray">Estate Homes</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <SEOImage
                src={IMAGES.hero.hero1}
                alt="Luxury roofing Governor's Island Denver NC lakefront home"
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
              Premium Roofing for Governor&apos;s Island Homes
            </h2>
            <p className="text-gray text-lg">
              We specialize in wind-resistant, impact-rated materials engineered for Lake Norman&apos;s
              waterfront exposure and Governor&apos;s Island&apos;s architectural standards.
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
              Why Governor&apos;s Island Homeowners Trust Us
            </h2>
            <p className="text-gray text-lg">
              Lakefront estate roofing demands specialized expertise, premium materials, and a commitment to
              protecting your waterfront investment.
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
                Protect Your Lakefront Investment
              </h2>
              <p className="text-white/90">
                Schedule a consultation with our Governor&apos;s Island roofing specialists.
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
              Explore the luxury materials we install on Governor&apos;s Island homes.
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

      {/* Governor's Island Roofing Expertise Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              What Makes Governor&apos;s Island Roofing Unique
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Direct Lake Exposure</h3>
                <p className="text-gray text-sm">
                  Governor&apos;s Island homes face direct Lake Norman exposure with open water on multiple sides.
                  This creates higher wind loads and increased moisture compared to interior neighborhoods. We
                  select materials and installation methods specifically rated for this level of waterfront exposure.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Dock & Waterfront Protection</h3>
                <p className="text-gray text-sm">
                  Many Governor&apos;s Island homes have private docks, boathouses, and lakefront patios. Our
                  crews implement specialized debris containment and protection measures for all waterfront
                  structures. We schedule material deliveries and removal to avoid any impact to dock access.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Custom Estate Architecture</h3>
                <p className="text-gray text-sm">
                  Governor&apos;s Island features custom-built estates with complex rooflines including multiple
                  peaks, dormers, valleys, and steep pitches. Our experienced crews handle these architectural
                  details with precision, ensuring proper flashing, ventilation, and waterproofing at every junction.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Denver NC Expertise</h3>
                <p className="text-gray text-sm">
                  As active roofers in the Denver NC area, we understand local building codes, Lincoln County
                  permit requirements, and the specific weather patterns that affect the western shore of Lake
                  Norman. Our local knowledge ensures your project proceeds smoothly from permit to completion.
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
                Governor&apos;s Island Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions about premium roofing for Governor&apos;s Island in Denver NC.
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
            <Link href="/roofing-denver-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <MapPin className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Denver NC</h3>
              <p className="text-gray text-sm mb-3">Complete roofing services for all Denver neighborhoods</p>
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

      <GeoProjectGalleryStrip pageType="location" city="Denver" slug="roofing-governors-island-denver-nc" />

      <CityGeoSection
        city="Denver"
        state="NC"
        citySlug="denver-nc"
        service="Luxury Roofing"
      />


      <LKNNeighborhoodGrid currentCity="Denver" currentSlug="roofing-governors-island-denver-nc" />
      <LKNPartnershipsBlock city={"Denver"} />
      <LKNDataCitations city={"Denver"} />
      <CTASection
        title="Elevate Your Governor's Island Home"
        subtitle="Request a consultation with our lakefront roofing specialists. We'll help you select premium materials engineered for waterfront exposure and built to protect your investment for generations."
      />
    </>
  );
}
