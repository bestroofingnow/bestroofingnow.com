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

export const metadata: Metadata = {
  title: 'Roofing The Peninsula Cornelius NC',
  description:
    'Expert roofing for The Peninsula in Cornelius NC. Slate, copper, and cedar shake for luxury lakefront estates. BBB A+ rated. Free estimates.',
  keywords: [
    'the peninsula roofing cornelius nc',
    'roofing the peninsula lake norman',
    'luxury roofing cornelius nc',
    'peninsula cornelius roofing contractor',
    'gated community roofing lake norman',
    'lakefront roofing the peninsula',
    'slate roofing cornelius nc',
    'copper roofing the peninsula',
    'cedar shake roofing cornelius',
    'designer shingles the peninsula',
    'hoa roofing cornelius nc',
    'waterfront roofing lake norman',
    'standing seam metal roofing cornelius',
    'luxury estate roofing cornelius',
    'the peninsula hoa roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-the-peninsula-cornelius-nc`,
  },
  openGraph: {
    title: 'Roofing The Peninsula Cornelius NC | Luxury Lakefront',
    description:
      'Premium roofing for The Peninsula, Cornelius\' most exclusive gated lakefront community. Expert installation of slate, copper, cedar shake, and designer shingles for homes valued $1M-$5M+.',
    url: `${SITE_CONFIG.url}/roofing-the-peninsula-cornelius-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roofing The Peninsula Cornelius NC - Best Roofing Now luxury lakefront specialists',
      },
    ],
  },
};

// Premium roofing services for The Peninsula
const services = [
  {
    title: 'Slate Roof Installation',
    description: 'Authentic natural slate providing timeless elegance and 100+ years of protection for Peninsula estates. Fire-resistant and virtually maintenance-free.',
    benefits: ['100+ year lifespan', 'Fire resistant', 'Heirloom quality'],
    href: '/slate-roofing-charlotte-nc',
  },
  {
    title: 'Copper Roofing & Accents',
    description: 'Stunning copper roofing and accent work for dormers, bay windows, and turrets. Develops a beautiful natural patina that complements lakefront architecture.',
    benefits: ['Corrosion proof', 'Natural patina', 'Increases value'],
    href: '/copper-roofing-charlotte-nc',
  },
  {
    title: 'Cedar Shake Roofing',
    description: 'Premium fire-treated cedar shake for Peninsula homes seeking natural wood beauty. Hand-split shakes create depth and character on custom estates.',
    benefits: ['Natural insulation', 'Rustic elegance', 'Eco-friendly'],
    href: '/cedar-shake-roofing-charlotte-nc',
  },
  {
    title: 'Designer Shingles',
    description: 'GAF Grand Canyon, CertainTeed Grand Manor, and Owens Corning Berkshire collection. Luxury appearance with lifetime warranties and HOA approval.',
    benefits: ['Lifetime warranty', 'Impact rated', 'HOA approved'],
    href: '/designer-shingles-charlotte-nc',
  },
  {
    title: 'Standing Seam Metal',
    description: 'Wind-rated to 140+ MPH, standing seam metal is ideal for Peninsula lakefront exposure. Available in premium finishes that complement estate architecture.',
    benefits: ['Wind resistant', 'Low maintenance', 'Energy efficient'],
    href: '/metal-roofing-charlotte-nc',
  },
  {
    title: 'Storm Damage Repair',
    description: 'Rapid response for Peninsula homes after Lake Norman storms. We coordinate with your HOA and insurance to restore your roof to pre-storm condition.',
    benefits: ['24/7 emergency', 'Insurance liaison', 'HOA coordination'],
    href: '/hail-damage-roof-repair-charlotte-nc',
  },
];

// Why choose us for The Peninsula
const whyChooseUs = [
  {
    icon: Lock,
    title: 'Gated Community Experience',
    description: 'We understand the access protocols, scheduling requirements, and privacy expectations of The Peninsula\'s gated environment.',
  },
  {
    icon: Award,
    title: 'Premium Certifications',
    description: 'GAF Master Elite, CertainTeed ShingleMaster, and certified copper and slate installers trusted for million-dollar homes.',
  },
  {
    icon: Home,
    title: 'HOA Compliance Experts',
    description: 'Full experience with The Peninsula\'s architectural review board. We handle submissions, provide material samples, and ensure complete compliance.',
  },
  {
    icon: Waves,
    title: 'Lakefront Specialists',
    description: 'Deep expertise with Lake Norman\'s wind exposure, lake-effect moisture, and the unique demands of waterfront roofing on Peninsula properties.',
  },
  {
    icon: Shield,
    title: 'Enhanced Warranties',
    description: 'Manufacturer-backed warranties up to 50 years on materials, backed by our installation workmanship guarantee for complete peace of mind.',
  },
  {
    icon: Gem,
    title: 'Million-Dollar Home Expertise',
    description: 'Our crews are trained to work on homes valued $1M-$5M+. We protect landscaping, docks, and finishes throughout the entire project.',
  },
];

// FAQs for The Peninsula
const faqs = [
  {
    question: 'What roofing materials are approved by The Peninsula HOA?',
    answer:
      'The Peninsula\'s architectural review board typically approves premium materials including natural slate, designer architectural shingles (GAF Grand Canyon, CertainTeed Grand Manor), standing seam metal in approved colors, and copper accents. We work directly with the HOA to submit material samples and color selections before any work begins, ensuring full compliance with community standards.',
  },
  {
    question: 'How much does a roof replacement cost in The Peninsula?',
    answer:
      'Roof replacement costs in The Peninsula vary based on home size (4,000-10,000+ sq ft) and material selection. Designer shingles typically run $60,000-$120,000, standing seam metal $80,000-$180,000, cedar shake $90,000-$200,000, and natural slate $150,000-$350,000+. We provide detailed estimates after an on-site inspection of your Peninsula home.',
  },
  {
    question: 'Do you have experience working in gated communities?',
    answer:
      'Yes, we have extensive experience working in The Peninsula and other gated Lake Norman communities. We coordinate gate access for our crews, follow all community protocols for work hours and vehicle access, maintain clean job sites, and communicate with property managers throughout the project. Our teams understand the privacy and security expectations of Peninsula residents.',
  },
  {
    question: 'What wind rating do you recommend for Peninsula lakefront homes?',
    answer:
      'For The Peninsula\'s lakefront exposure, we recommend minimum 130 MPH wind-rated materials, with 140-150 MPH ratings for homes on the most exposed points. Peninsula homes face significant wind from Lake Norman, especially during summer storms and hurricane remnants. Higher wind ratings also qualify for insurance premium reductions.',
  },
  {
    question: 'How do you protect Peninsula homes and docks during roof work?',
    answer:
      'We implement comprehensive protection protocols for Peninsula properties including: full tarping and sealing each evening, specialized debris containment to protect docks, boats, and lakefront landscaping, coordination with marina schedules, and expedited timelines to minimize exposure. We treat every Peninsula home as if it were our own.',
  },
  {
    question: 'Can you match the existing roofing style on my Peninsula home?',
    answer:
      'Absolutely. Many Peninsula homes feature custom architectural details including copper dormers, slate accents, and specialty ridge work. We carefully match existing materials, colors, and installation patterns to maintain the architectural integrity of your home. We bring material samples on-site for comparison before ordering.',
  },
  {
    question: 'Do you offer copper roofing for Peninsula estate homes?',
    answer:
      'Yes, copper roofing is one of our specialties and is a popular choice for Peninsula estates. We install copper standing seam roofs, copper accent panels, copper dormers, bay window roofs, and decorative copper gutters. Copper provides a 100+ year lifespan and develops a stunning patina that complements lakefront luxury homes.',
  },
  {
    question: 'How long does a roof replacement take on a large Peninsula home?',
    answer:
      'For Peninsula homes ranging from 4,000-10,000+ sq ft, a complete roof replacement typically takes 5-15 business days depending on the material (slate and copper take longer than shingles), roof complexity, and weather conditions. We provide a detailed timeline during your consultation and keep you updated throughout the project.',
  },
];

export default function RoofingThePeninsulaCorneliusPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Cornelius NC', url: `${SITE_CONFIG.url}/roofing-cornelius-nc` },
          { name: 'Roofing The Peninsula Cornelius NC', url: `${SITE_CONFIG.url}/roofing-the-peninsula-cornelius-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-the-peninsula-cornelius-nc`}
        pageName="Roofing The Peninsula Cornelius NC"
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
              <span className="text-sm font-semibold">Gated Lakefront Community Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing The Peninsula <br className="hidden md:block" />
              <span className="text-blue-300">Cornelius NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium roofing for Lake Norman&apos;s most exclusive lakefront estates
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              The Peninsula is one of Lake Norman&apos;s ultra-luxury gated communities, featuring custom
              lakefront estates valued from $1M to $5M+. Best Roofing Now brings the expertise, certifications,
              and attention to detail that Peninsula homeowners expect -- from slate and copper installations
              to full HOA compliance and gated community coordination.
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
                Request Peninsula Consultation
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

      {/* About The Peninsula */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Lake Norman&apos;s Premier Gated Lakefront Community
              </h2>
              <p className="text-gray text-lg mb-4">
                The Peninsula in Cornelius is one of the most prestigious addresses on Lake Norman. With custom
                lakefront estates ranging from 4,000 to over 10,000 square feet, these homes demand roofing
                materials and craftsmanship that match their caliber -- slate, copper, cedar shake, designer
                shingles, and standing seam metal.
              </p>
              <p className="text-gray text-lg mb-6">
                As a gated community with a golf course, marina, and some of Lake Norman&apos;s most expensive
                waterfront properties, The Peninsula requires roofers who understand HOA architectural review
                processes, respect gated access protocols, and have proven experience working on million-dollar homes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">$1M-$5M+</p>
                  <p className="text-sm text-gray">Home Values</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">4,000-10,000+</p>
                  <p className="text-sm text-gray">Sq Ft Homes</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">Golf + Marina</p>
                  <p className="text-sm text-gray">Amenities</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">Gated</p>
                  <p className="text-sm text-gray">Private Access</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.hero.hero1}
                alt="Luxury roofing The Peninsula Cornelius NC lakefront estate"
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
              Premium Roofing Services for The Peninsula
            </h2>
            <p className="text-gray text-lg">
              We specialize in luxury roofing materials engineered for Lake Norman&apos;s waterfront exposure
              and built to meet The Peninsula&apos;s architectural standards.
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
              Why Peninsula Homeowners Choose Best Roofing Now
            </h2>
            <p className="text-gray text-lg">
              Working on million-dollar lakefront estates requires more than roofing skill -- it demands
              professionalism, discretion, and attention to every detail.
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
                Ready to Elevate Your Peninsula Home?
              </h2>
              <p className="text-white/90">
                Schedule a private consultation with our luxury lakefront roofing specialists.
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
              Explore the luxury materials we install on Peninsula estates.
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

      {/* Peninsula Roofing Expertise Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              What Makes Peninsula Roofing Unique
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Marina & Dock Proximity</h3>
                <p className="text-gray text-sm">
                  The Peninsula features a private marina, meaning many homes have docks and watercraft nearby. Our
                  crews implement specialized debris containment and scheduling to protect marina assets during
                  roof work. We coordinate with dock schedules and cover all waterfront areas before work begins.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Golf Course Aesthetics</h3>
                <p className="text-gray text-sm">
                  Homes along The Peninsula&apos;s golf course have heightened visibility. We select materials and
                  colors that enhance curb appeal from the fairway while meeting HOA standards. Our installations
                  are designed to look stunning from every angle, including elevated course views.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Gated Access Coordination</h3>
                <p className="text-gray text-sm">
                  We pre-register all crew members and vehicles with Peninsula security, schedule material
                  deliveries within community guidelines, and ensure our teams follow all gate protocols.
                  Our project managers coordinate directly with the guard house for seamless daily access.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Architectural Review Support</h3>
                <p className="text-gray text-sm">
                  The Peninsula&apos;s ARB has specific requirements for roofing materials, colors, and installation
                  standards. We prepare professional submission packages with material specifications, color
                  samples, and installation details to streamline the approval process for Peninsula homeowners.
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
                The Peninsula Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions about premium roofing for The Peninsula in Cornelius.
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
          <div className="grid md:grid-cols-3 gap-6">
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
              <p className="text-gray text-sm mb-3">Premium roofing for all Lake Norman waterfront communities</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-lake-norman-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Anchor className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Lake Norman NC</h3>
              <p className="text-gray text-sm mb-3">Full roofing services across the entire Lake Norman region</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="location" city="Cornelius" slug="roofing-the-peninsula-cornelius-nc" />

      <CityGeoSection
        city="Cornelius"
        state="NC"
        citySlug="cornelius-nc"
        service="Luxury Roofing"
      />

      <CTASection
        title="Elevate Your Peninsula Estate"
        subtitle="Request a private consultation with our luxury lakefront roofing specialists. We'll help you select premium materials engineered for Peninsula waterfront exposure and built to protect your investment for generations."
      />
    </>
  );
}
