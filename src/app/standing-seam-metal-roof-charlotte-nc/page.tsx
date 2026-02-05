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
  Users,
  Clock,
  Thermometer,
  Zap,
  Palette,
  Home,
  Building2,
  Wind,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Standing Seam Metal Roof Charlotte NC | Premium Metal Roofing',
  description:
    'Expert standing seam metal roof installation in Charlotte NC. Premium metal roofing with 50+ year lifespan, superior energy efficiency, and stunning curb appeal. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'standing seam metal roof charlotte nc',
    'standing seam roofing charlotte',
    'metal roof charlotte nc',
    'metal roofing contractors charlotte',
    'standing seam metal roof installation',
    'premium metal roofing charlotte',
    'metal roof cost charlotte nc',
    'steel roofing charlotte nc',
    'metal roof colors charlotte',
    'energy efficient metal roof charlotte',
    'residential metal roofing charlotte',
    'metal roof replacement charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/standing-seam-metal-roof-charlotte-nc`,
  },
  openGraph: {
    title: 'Standing Seam Metal Roof Charlotte NC | Premium Metal Roofing',
    description:
      'Premium standing seam metal roof installation by Charlotte\'s BBB A+ rated, veteran-owned roofing company. 50+ year lifespan, energy savings, and beautiful design options.',
    url: `${SITE_CONFIG.url}/standing-seam-metal-roof-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.metalRoof,
        width: 1200,
        height: 630,
        alt: 'Standing seam metal roof installation Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Benefits of standing seam metal roofs
const benefits = [
  {
    icon: Clock,
    title: '50+ Year Lifespan',
    description: 'Standing seam metal roofs last 50-70 years with proper installation, outlasting asphalt shingles by decades.',
  },
  {
    icon: Thermometer,
    title: 'Energy Efficiency',
    description: 'Reflective metal surfaces can reduce cooling costs by 25-40% in Charlotte\'s hot summers.',
  },
  {
    icon: Wind,
    title: 'Superior Wind Resistance',
    description: 'Rated for winds up to 140 mph. Concealed fasteners eliminate lift points during storms.',
  },
  {
    icon: Palette,
    title: 'Color Options',
    description: 'Choose from 40+ colors with Kynar 500 finishes that resist fading for 30+ years.',
  },
  {
    icon: Shield,
    title: 'Low Maintenance',
    description: 'No shingles to replace, no granule loss. Just occasional inspections keep it pristine.',
  },
  {
    icon: Zap,
    title: 'Fire Resistant',
    description: 'Class A fire rating provides maximum protection for your home and family.',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'Metal Roofing Specialists',
    description: 'Our crews are specifically trained in standing seam installation techniques and best practices.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Manufacturer Certified',
    description: 'Certified installers for premium metal roofing systems with enhanced warranty options.',
  },
  {
    icon: Clock,
    title: 'Lifetime Investment',
    description: 'We help you choose the right metal roof system for your home and budget.',
  },
];

// Metal roof color categories
const colorOptions = [
  {
    category: 'Classic Colors',
    colors: ['Charcoal Gray', 'Matte Black', 'Dark Bronze', 'Forest Green', 'Colonial Red'],
  },
  {
    category: 'Earth Tones',
    colors: ['Weathered Copper', 'Rustic Brown', 'Terra Cotta', 'Clay', 'Sandstone'],
  },
  {
    category: 'Modern Colors',
    colors: ['Slate Blue', 'Ash Gray', 'Pewter', 'Burnished Slate', 'Zinc Gray'],
  },
];

// Comparison with other roofing materials
const comparison = [
  { feature: 'Lifespan', metal: '50-70 years', asphalt: '15-25 years', tile: '40-50 years' },
  { feature: 'Wind Resistance', metal: 'Up to 140 mph', asphalt: '60-110 mph', tile: '100-150 mph' },
  { feature: 'Energy Savings', metal: '25-40%', asphalt: '0-10%', tile: '10-20%' },
  { feature: 'Maintenance', metal: 'Very Low', asphalt: 'Moderate', tile: 'Low' },
  { feature: 'Fire Rating', metal: 'Class A', asphalt: 'Class A-C', tile: 'Class A' },
  { feature: 'Weight', metal: '1-1.5 lbs/sq ft', asphalt: '2-4 lbs/sq ft', tile: '6-12 lbs/sq ft' },
];

// FAQs
const faqs = [
  {
    question: 'How much does a standing seam metal roof cost in Charlotte NC?',
    answer:
      'Standing seam metal roofs in Charlotte typically cost $15,000 to $40,000+ for an average home, or $12-18 per square foot installed. While more expensive upfront than asphalt shingles, the 50+ year lifespan, energy savings of 25-40%, and virtually zero maintenance make it the most cost-effective roofing choice over time. Many Charlotte homeowners find it\'s the last roof they ever need.',
  },
  {
    question: 'Is a standing seam metal roof worth it in Charlotte?',
    answer:
      'Absolutely. Charlotte\'s hot summers make metal roofing especially valuable due to its reflective properties that reduce cooling costs by 25-40%. Standing seam roofs also handle our occasional severe storms with wind ratings up to 140 mph. The 50-70 year lifespan means you\'ll likely never replace your roof again, and many homeowners see increased property values of 1-6%.',
  },
  {
    question: 'What colors are available for standing seam metal roofs?',
    answer:
      'Standing seam metal roofs come in 40+ color options with Kynar 500/Hylar 5000 finishes that resist fading for 30+ years. Popular choices in Charlotte include Charcoal Gray, Matte Black, Dark Bronze, and Weathered Copper. We can help you choose colors that complement your home\'s architecture and meet any HOA requirements.',
  },
  {
    question: 'Are metal roofs noisy when it rains?',
    answer:
      'Modern standing seam metal roofs installed over solid decking and with proper insulation are no louder than asphalt shingles during rain. The multiple layers (decking, underlayment, insulation, and metal panels) absorb and dampen sound. Many homeowners say they don\'t notice any difference from their previous roof.',
  },
  {
    question: 'How long does standing seam metal roof installation take?',
    answer:
      'Most residential standing seam metal roof installations in Charlotte take 2-5 days depending on roof size and complexity. The process includes removing old roofing, inspecting and repairing decking, installing underlayment, and precisely fitting each metal panel. We work efficiently while maintaining the highest quality standards.',
  },
  {
    question: 'Do standing seam metal roofs attract lightning?',
    answer:
      'No. Metal roofs do not attract lightning. In fact, because metal is non-combustible, a metal roof is actually safer than other roofing materials if lightning does strike. Metal roofs conduct electricity safely through the structure to the ground, and their fire resistance provides additional protection.',
  },
  {
    question: 'What warranty comes with a standing seam metal roof?',
    answer:
      'Standing seam metal roofs typically include a 40-50 year paint/finish warranty against fading and chalking, plus a 25-30 year warranty against manufacturing defects. Best Roofing Now also provides our own workmanship warranty. Combined, you get comprehensive protection for decades.',
  },
  {
    question: 'Can you install a standing seam metal roof over existing shingles?',
    answer:
      'While it\'s sometimes possible, we typically recommend full tear-off for standing seam installations. This allows proper inspection of the decking, ensures a flat substrate for optimal panel fit, and provides the best long-term performance. A full tear-off also ensures you get the maximum benefit from your investment.',
  },
];

export default function StandingSeamMetalRoofCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Standing Seam Metal Roof Charlotte NC', url: `${SITE_CONFIG.url}/standing-seam-metal-roof-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.metalRoof}
            alt="Standing seam metal roof installation Charlotte NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Premium Metal Roofing Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Standing Seam Metal Roof <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium metal roofing that lasts 50+ years with superior energy efficiency
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in standing seam metal roof installation throughout Charlotte.
              Experience the ultimate in durability, energy savings, and timeless beauty with a roof
              that may be the last one you ever need.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                50+ Year Lifespan
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Standing Seam Metal Roofing?
            </h2>
            <p className="text-gray text-lg">
              Standing seam metal roofs offer unmatched benefits that make them the premium choice
              for discerning Charlotte homeowners.
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

      {/* Color Options Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                40+ Premium Color Options
              </h2>
              <p className="text-gray text-lg mb-6">
                Standing seam metal roofs come in a stunning array of colors with Kynar 500 finishes
                that resist fading for 30+ years. From classic charcoal to modern slate blue,
                find the perfect complement to your home.
              </p>
              {colorOptions.map((group) => (
                <div key={group.category} className="mb-6">
                  <h3 className="font-bold text-dark mb-3">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.colors.map((color) => (
                      <span
                        key={color}
                        className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <p className="text-sm text-gray italic">
                * Ask about color samples to see how they look on your home
              </p>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.hero.metalRoof}
                alt="Standing seam metal roof colors and styles available in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How Standing Seam Compares
            </h2>
            <p className="text-gray text-lg">
              See why standing seam metal roofing outperforms other materials across key metrics.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-light rounded-xl overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">Standing Seam Metal</th>
                  <th className="px-6 py-4 text-center font-semibold">Asphalt Shingles</th>
                  <th className="px-6 py-4 text-center font-semibold">Tile Roofing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparison.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 font-medium text-dark">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{row.metal}</td>
                    <td className="px-6 py-4 text-center text-gray">{row.asphalt}</td>
                    <td className="px-6 py-4 text-center text-gray">{row.tile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Chooses Best Roofing Now for Metal Roofing
              </h2>
              <p className="text-gray text-lg mb-8">
                Standing seam installation requires specialized skills and experience.
                Our certified metal roofing crews deliver precision installation that
                maximizes performance and longevity.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
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
                src={IMAGES.realProjects.drone1}
                alt="Best Roofing Now - Premium standing seam metal roof installation in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-dark">5.0 Rating</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for a Metal Roof That Lasts a Lifetime?
              </h2>
              <p className="text-white/90">
                Get a free estimate on standing seam metal roofing for your Charlotte home.
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
                Schedule Free Estimate
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

      {/* Applications Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Perfect for Residential & Commercial
            </h2>
            <p className="text-gray text-lg">
              Standing seam metal roofing excels on a variety of structures throughout Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-light rounded-xl p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Residential Metal Roofing</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray">Modern and traditional home styles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray">Increases home resale value 1-6%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray">HOA-friendly color options available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray">Lifetime investment with minimal upkeep</span>
                </li>
              </ul>
            </div>
            <div className="bg-light rounded-xl p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Commercial Metal Roofing</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray">Office buildings and retail spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray">Warehouses and industrial facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray">Significant HVAC cost reduction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray">Long-term ROI for property owners</span>
                </li>
              </ul>
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
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Standing Seam Metal Roof FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about standing seam metal roofing in Charlotte NC.
              </p>
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
              Related Roofing Services
            </h2>
            <p className="text-gray text-lg">
              Explore our full range of professional roofing services in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/services/metal-roofing"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                All Metal Roofing Options
              </h3>
              <p className="text-gray text-sm mb-3">
                Compare standing seam, metal shingles, and corrugated options.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/services/roof-replacement"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Roof Replacement
              </h3>
              <p className="text-gray text-sm mb-3">
                Full roof replacement with premium materials and expert installation.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/roofing-contractor-charlotte-nc"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Charlotte Roofing Contractor
              </h3>
              <p className="text-gray text-sm mb-3">
                Learn more about Best Roofing Now and our complete services.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="standing-seam-metal-roof-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/standing-seam-metal-roof-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Standing Seam Metal Roof"

      />

      <CTASection
        title="Get a Free Standing Seam Metal Roof Estimate"
        subtitle="Ready to invest in a roof that lasts a lifetime? Contact Charlotte's trusted metal roofing specialists for a free consultation and detailed estimate."
      />
    </>
  );
}
