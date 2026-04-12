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
  Home,
  Search,
  MapPin,
  Zap,
  Leaf,
  Thermometer,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Metal Roofing Sherrills Ford NC',
  description:
    'Looking for metal roofing in Sherrills Ford NC? Best Roofing Now installs standing seam and metal panel roofs for Lake Norman homes. 50+ year lifespan, energy efficient, wind resistant. BBB A+ rated, veteran-owned. Free estimates!',
  keywords: [
    'metal roofing sherrills ford nc',
    'metal roof sherrills ford',
    'standing seam metal roof sherrills ford',
    'metal roof installation sherrills ford nc',
    'lake norman metal roofing',
    'catawba county metal roof',
    'metal roof cost sherrills ford',
    'metal roofing contractor sherrills ford',
    'steel roofing sherrills ford nc',
    'metal roof replacement sherrills ford',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/metal-roofing-sherrills-ford-nc`,
  },
  openGraph: {
    title: 'Metal Roofing Sherrills Ford NC | Standing Seam & Metal Panels | Best Roofing Now',
    description:
      'Expert metal roofing installation in Sherrills Ford NC. Standing seam, corrugated, and metal panel systems. 50+ year lifespan, energy efficient. Free estimates!',
    url: `${SITE_CONFIG.url}/metal-roofing-sherrills-ford-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.metalRoof,
        width: 1200,
        height: 630,
        alt: 'Metal roofing installation in Sherrills Ford NC - Best Roofing Now',
      },
    ],
  },
};

// Metal roofing options
const metalOptions = [
  {
    icon: Shield,
    title: 'Standing Seam',
    description: 'Premium concealed-fastener panels with superior weather protection for Lake Norman waterfront homes.',
    href: '/services/metal-roofing',
  },
  {
    icon: Home,
    title: 'Metal Shingles',
    description: 'Lightweight metal shingles that mimic traditional roofing styles with 50+ year durability.',
    href: '/services/metal-roofing',
  },
  {
    icon: Zap,
    title: 'Corrugated Panels',
    description: 'Cost-effective corrugated metal panels ideal for agricultural and outbuilding applications.',
    href: '/services/metal-roofing',
  },
  {
    icon: Thermometer,
    title: 'Energy Efficient',
    description: 'Reflective metal roofing that reduces cooling costs by up to 25% in Sherrills Ford summers.',
    href: '/services/metal-roofing',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: '100% recyclable materials with minimal environmental impact over a 50+ year lifespan.',
    href: '/services/metal-roofing',
  },
  {
    icon: Search,
    title: 'Free Consultation',
    description: 'Expert guidance on the best metal roofing system for your Lake Norman property and budget.',
    href: '/services/roof-inspection',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Lake Norman homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned with military precision applied to every metal roof installation.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor specializing in metal roofing systems.',
  },
  {
    icon: Clock,
    title: '50+ Year Lifespan',
    description: 'Metal roofs last 2-3 times longer than traditional shingles with minimal maintenance.',
  },
  {
    icon: Users,
    title: 'Lakefront Experience',
    description: 'Extensive experience installing metal roofs on Lake Norman waterfront properties.',
  },
];

// Sherrills Ford area communities
const localAreas = [
  'Sherrills Ford',
  'Lake Norman Waterfront',
  'Catawba County',
  'Terrell',
  'Claremont',
  'Maiden',
  'Conover',
  'Newton',
  'Hickory',
  'Denver',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Hickory', href: '/locations/hickory-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs
const faqs = [
  {
    question: 'How much does a metal roof cost in Sherrills Ford NC?',
    answer:
      'Metal roofing in Sherrills Ford typically costs $12,000-$35,000 depending on the system type, home size, and complexity. Standing seam is premium ($15-$25/sq ft), while corrugated panels are more affordable ($8-$14/sq ft). While the upfront cost is higher than shingles, the 50+ year lifespan makes metal roofing a better long-term value.',
  },
  {
    question: 'Is metal roofing good for Lake Norman waterfront homes?',
    answer:
      'Metal roofing is excellent for Lake Norman waterfront properties. It withstands high winds (up to 140 mph), resists corrosion with proper coatings, and handles the increased moisture and humidity near the lake. Standing seam systems with concealed fasteners provide the best protection against water-driven rain.',
  },
  {
    question: 'How long does a metal roof last in Sherrills Ford?',
    answer:
      'A properly installed metal roof in Sherrills Ford will last 50-70+ years with minimal maintenance. Compare this to 20-30 years for architectural shingles. Metal roofs also maintain their appearance longer, resist moss and algae growth, and require far fewer repairs over their lifetime.',
  },
  {
    question: 'Will a metal roof make my Sherrills Ford home hotter?',
    answer:
      'Actually, the opposite is true. Metal roofs reflect solar heat rather than absorbing it, which can reduce cooling costs by 20-25% in Sherrills Ford summers. With proper ventilation and reflective coatings, metal roofing keeps your home more comfortable and energy efficient year-round.',
  },
  {
    question: 'Is a metal roof noisy during Lake Norman rain storms?',
    answer:
      'Modern metal roofs installed over solid decking with proper underlayment are no louder than any other roofing material during rain. The combination of decking, underlayment, and attic insulation effectively dampens sound. Many homeowners are surprised by how quiet their metal roof is.',
  },
  {
    question: 'Can you install a metal roof over existing shingles?',
    answer:
      'In many cases, yes. Metal roofing can be installed over one layer of existing shingles, which saves on tear-off costs and reduces waste. However, we always recommend a thorough inspection first to ensure the underlying decking is sound. We will advise you on the best approach for your specific situation.',
  },
  {
    question: 'What colors are available for metal roofing?',
    answer:
      'Metal roofing comes in a wide range of colors and finishes including traditional charcoal, slate gray, barn red, forest green, and more. Premium finishes with Kynar 500 coatings resist fading for 40+ years. We help you choose colors that complement your Sherrills Ford home and neighborhood.',
  },
];

export default function MetalRoofingSherrillsFordNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Metal Roofing Sherrills Ford NC', url: `${SITE_CONFIG.url}/metal-roofing-sherrills-ford-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/metal-roofing-sherrills-ford-nc`}
        pageName="Metal Roofing Sherrills Ford NC"
        city="Sherrills Ford"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.metalRoof}
            alt="Metal roofing installation in Sherrills Ford NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Metal Roofing Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Metal Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Sherrills Ford NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Durable, energy-efficient metal roofs for Lake Norman homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Upgrade your Sherrills Ford home with a premium metal roof that lasts 50+ years. Best Roofing Now
              installs standing seam, metal shingle, and corrugated panel systems engineered to withstand
              Lake Norman weather while dramatically reducing your energy costs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Metal Roof Estimate
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
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Metal Roofing Options for Sherrills Ford Homes
            </h2>
            <p className="text-gray text-lg">
              From premium standing seam to cost-effective corrugated panels, we offer metal roofing solutions
              tailored to Lake Norman properties and Catawba County homes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metalOptions.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray text-sm mb-3">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Sherrills Ford Homeowners Choose Metal Roofing
              </h2>
              <p className="text-gray text-lg mb-8">
                Metal roofing is the premium choice for Lake Norman waterfront homes. With superior wind
                resistance, energy efficiency, and a lifespan measured in decades, it&apos;s the last roof
                you&apos;ll ever need.
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
                src={IMAGES.hero.metalRoof}
                alt="Best Roofing Now - Metal roofing experts serving Sherrills Ford NC"
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
                Interested in Metal Roofing for Your Sherrills Ford Home?
              </h2>
              <p className="text-white/90">
                Get a free consultation and estimate for a metal roof that lasts a lifetime.
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

      {/* Service Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Metal Roofing Across Sherrills Ford & Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We install metal roofs throughout Sherrills Ford, Catawba County, and the Lake Norman region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Sherrills Ford Area Communities</h3>
              <div className="flex flex-wrap gap-2">
                {localAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Cities We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {nearbyCities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
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
                Metal Roofing FAQs for Sherrills Ford
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about metal roofing in Sherrills Ford NC.
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

      <GeoProjectGalleryStrip
        pageType="location"
        city="Denver"
        slug="metal-roofing-sherrills-ford-nc"
      />

      <CityGeoSection
        city="Sherrills Ford"
        state="NC"
        citySlug="sherrills-ford-nc"
        service="Metal Roofing"
      />

      <CTASection
        title="Upgrade to a Metal Roof in Sherrills Ford"
        subtitle="Get a free, no-obligation estimate for a premium metal roof. Superior durability, energy efficiency, and beauty for your Lake Norman home."
      />
    </>
  );
}
