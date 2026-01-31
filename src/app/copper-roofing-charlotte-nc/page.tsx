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
  Landmark,
  Leaf,
  Zap,
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
  title: 'Copper Roofing Charlotte NC | Premium Copper Roof Installation',
  description:
    'Expert copper roofing installation in Charlotte NC. Copper roofs, accents, dormers, bay windows & gutters for luxury homes. 100+ year lifespan with beautiful patina. Free estimates from certified craftsmen.',
  keywords: [
    'copper roofing charlotte nc',
    'copper roof installation charlotte',
    'copper roof charlotte nc',
    'copper accent roofing charlotte',
    'copper dormers charlotte nc',
    'copper bay window roofs charlotte',
    'copper gutters charlotte nc',
    'standing seam copper roof charlotte',
    'copper roof repair charlotte nc',
    'premium copper roofing charlotte',
    'luxury copper roof charlotte',
    'copper roofing contractors charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/copper-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Copper Roofing Charlotte NC | Premium Copper Roof Installation',
    description:
      'Premium copper roofing for Charlotte\'s finest homes. Expert installation of copper roofs, accents, and gutters. 100+ year lifespan with stunning natural patina.',
    url: `${SITE_CONFIG.url}/copper-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.modern1,
        width: 1200,
        height: 630,
        alt: 'Copper roofing installation Charlotte NC - Best Roofing Now luxury roofing',
      },
    ],
  },
};

// Benefits of copper roofing
const benefits = [
  {
    icon: Clock,
    title: '100+ Year Lifespan',
    description: 'Copper roofs can last 100-200 years with minimal maintenance, far exceeding any other roofing material.',
  },
  {
    icon: Gem,
    title: 'Stunning Natural Patina',
    description: 'Develops a beautiful verdigris patina over time, giving your home timeless character and elegance.',
  },
  {
    icon: Shield,
    title: 'Corrosion Resistant',
    description: 'Naturally resistant to corrosion, mold, mildew, and pest damage. Never rusts or deteriorates.',
  },
  {
    icon: Leaf,
    title: '100% Recyclable',
    description: 'Completely sustainable and recyclable. Copper roofs are eco-friendly and retain value even after removal.',
  },
  {
    icon: Sparkles,
    title: 'Increases Property Value',
    description: 'Copper roofing significantly increases curb appeal and property value for luxury homes and estates.',
  },
  {
    icon: Zap,
    title: 'Lightweight & Strong',
    description: 'Lighter than slate or tile but incredibly durable. Ideal for historic homes and complex architectural details.',
  },
];

// Why choose us for copper roofing
const whyChooseUs = [
  {
    icon: Award,
    title: 'Certified Copper Craftsmen',
    description: 'Our team includes certified copper roofing specialists trained in traditional and modern copper installation techniques.',
  },
  {
    icon: Landmark,
    title: 'Historic Home Expertise',
    description: 'Extensive experience with Charlotte\'s historic properties in Myers Park, Eastover, Dilworth, and Elizabeth.',
  },
  {
    icon: Home,
    title: 'Custom Fabrication',
    description: 'On-site copper fabrication for custom flashing, dormers, bay windows, and architectural details.',
  },
  {
    icon: Shield,
    title: 'Premium Materials',
    description: 'We use only 16oz and 20oz cold-rolled copper sheets from trusted American suppliers.',
  },
];

// Copper roofing applications
const applications = [
  {
    title: 'Full Copper Roofs',
    description: 'Complete standing seam or flat seam copper roof installations for luxury homes and estates.',
    ideal: 'Historic estates, custom homes, architectural landmarks',
  },
  {
    title: 'Copper Accents & Details',
    description: 'Bay window roofs, cupolas, dormers, and turrets that add elegance and character.',
    ideal: 'Traditional homes, Tudor style, French Provincial',
  },
  {
    title: 'Copper Gutters & Downspouts',
    description: 'Half-round copper gutters and custom downspouts that complement any roofing system.',
    ideal: 'Any premium home seeking lasting curb appeal',
  },
  {
    title: 'Copper Flashing & Chimney Caps',
    description: 'Critical waterproofing details that protect vulnerable roof areas with lasting beauty.',
    ideal: 'All roofing systems, especially slate and cedar shake',
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
  { name: 'Lake Norman Waterfront', href: '/roofing-cornelius-nc' },
  { name: 'The Peninsula', href: '/neighborhoods/the-peninsula' },
];

// FAQs about copper roofing
const faqs = [
  {
    question: 'How much does copper roofing cost in Charlotte NC?',
    answer:
      'Copper roofing is a premium investment, typically ranging from $25-$40 per square foot installed for standing seam copper in Charlotte. Full copper roofs on luxury homes typically cost $40,000-$100,000+ depending on size and complexity. Copper accents like bay windows or dormers are more affordable at $3,000-$15,000. While the upfront cost is higher than other materials, copper\'s 100+ year lifespan and zero maintenance make it cost-effective long-term.',
  },
  {
    question: 'How long does a copper roof last?',
    answer:
      'Copper roofs routinely last 100-200 years with virtually no maintenance required. Many copper roofs installed over a century ago in Europe and America are still in excellent condition today. The copper develops a protective patina that actually strengthens over time. Compared to asphalt shingles (15-25 years), copper provides exceptional long-term value.',
  },
  {
    question: 'Will my copper roof turn green?',
    answer:
      'Yes, copper naturally develops a green patina (verdigris) over time - this is highly desirable and adds character. New copper starts bright and shiny, then darkens to brown over 1-5 years, and gradually develops the signature green patina over 10-30 years depending on climate. If you prefer to maintain the bright copper look, we can apply protective coatings, though most homeowners embrace the natural patina.',
  },
  {
    question: 'Is copper roofing good for Charlotte\'s climate?',
    answer:
      'Copper is excellent for Charlotte\'s humid subtropical climate. It handles heat, humidity, heavy rain, and occasional ice/snow exceptionally well. Copper naturally resists mold, mildew, and algae that can affect other roofing materials in our climate. It also performs well during Charlotte\'s occasional severe storms and high winds.',
  },
  {
    question: 'What areas of my roof can have copper?',
    answer:
      'Copper can be used for full roofs, partial applications, or accents. Common copper applications include: standing seam copper roofs, bay window roofs, dormers, cupolas, turrets, porch roofs, chimney caps and flashing, valleys and transition areas, and copper gutters with downspouts. Many Charlotte homeowners start with copper accents and later add more copper elements.',
  },
  {
    question: 'Do you install copper roofing in Myers Park and Eastover?',
    answer:
      'Yes, we have extensive experience installing copper roofing in Charlotte\'s most prestigious neighborhoods including Myers Park, Eastover, Dilworth, SouthPark, Foxcroft, Quail Hollow, and Lake Norman waterfront communities. Our team understands the architectural styles and historic preservation requirements in these areas. We work closely with homeowners and architects to ensure copper installations complement the existing character.',
  },
];

export default function CopperRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Metal Roofing', url: `${SITE_CONFIG.url}/metal-roofing-charlotte-nc` },
          { name: 'Copper Roofing Charlotte NC', url: `${SITE_CONFIG.url}/copper-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/copper-roofing-charlotte-nc`}
        pageName="Copper Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-800 via-amber-900 to-amber-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Gem className="w-4 h-4 text-amber-300" />
              <span className="text-sm font-semibold">Premium Luxury Roofing</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Copper Roofing <br className="hidden md:block" />
              <span className="text-amber-300">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Timeless elegance with 100+ year lifespan
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in premium copper roofing for Charlotte&apos;s finest homes.
              From full copper roofs to elegant accents, our certified craftsmen deliver exceptional quality
              that enhances your home&apos;s beauty and value for generations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-amber-500 hover:bg-amber-400 text-amber-950"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Copper Consultation
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
                <Award className="w-5 h-5 text-amber-300" />
                Certified Copper Craftsmen
              </span>
              <span className="flex items-center gap-2">
                <Landmark className="w-5 h-5 text-amber-300" />
                Historic Home Specialists
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-300" />
                100+ Year Material
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
              Why Choose Copper Roofing?
            </h2>
            <p className="text-gray text-lg">
              Copper is the premier choice for discerning Charlotte homeowners who demand the finest
              in quality, beauty, and longevity.
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

      {/* Applications Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Copper Roofing Applications
            </h2>
            <p className="text-gray text-lg">
              From full copper roofs to elegant accents, we offer comprehensive copper roofing solutions
              for every application.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {applications.map((app) => (
              <div key={app.title} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-xl mb-2">{app.title}</h3>
                <p className="text-gray mb-3">{app.description}</p>
                <p className="text-sm text-amber-700 font-medium">
                  <span className="text-gray-500">Ideal for:</span> {app.ideal}
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
                Charlotte&apos;s Copper Roofing Specialists
              </h2>
              <p className="text-gray text-lg mb-8">
                Copper roofing requires specialized expertise that few contractors possess. Best Roofing Now
                has invested in certified training and premium tools to deliver exceptional copper installations
                for Charlotte&apos;s most discerning homeowners.
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
                src={IMAGES.houses.modern1}
                alt="Copper roofing installation in Charlotte NC luxury home"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">100+</p>
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
              We have extensive experience installing copper roofing in Charlotte&apos;s most prestigious
              communities, understanding the unique architectural styles and requirements of each area.
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
                Ready to Invest in Copper Roofing?
              </h2>
              <p className="text-white/90">
                Schedule a consultation with our copper roofing specialists.
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
                Copper Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions about copper roofing in Charlotte NC.
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
            <Link href="/slate-roofing-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Slate Roofing</h3>
              <p className="text-gray text-sm mb-3">Natural slate for 100+ year beauty and protection</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/metal-roofing-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Standing Seam Metal</h3>
              <p className="text-gray text-sm mb-3">Modern metal roofing with 40-70 year lifespan</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/hoa-approved-roofing-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">HOA Approved Roofing</h3>
              <p className="text-gray text-sm mb-3">Roofing materials pre-approved for HOA communities</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Elevate Your Home with Copper Roofing"
        subtitle="Request a consultation with Charlotte's copper roofing specialists. We'll help you explore copper options that enhance your home's beauty and value for generations."
      />
    </>
  );
}
