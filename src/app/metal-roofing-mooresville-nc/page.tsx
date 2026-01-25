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
  Layers,
  Home,
  Building2,
  Zap,
  MapPin,
  Thermometer,
  Wind,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocationSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Metal Roofing Mooresville NC | Standing Seam Experts | Best Roofing Now',
  description:
    'Premium metal roofing installation in Mooresville NC. Standing seam, metal shingles, and corrugated panels. 50+ year lifespan, energy efficient. Lake Norman\'s metal roofing experts!',
  keywords: [
    'metal roofing Mooresville NC',
    'metal roof Mooresville',
    'standing seam metal roof Mooresville NC',
    'metal roofing contractor Mooresville',
    'steel roofing Mooresville NC',
    'metal roof installation Lake Norman',
    'metal shingles Mooresville',
    'metal roof cost Mooresville NC',
    'metal roofing company near me',
    'Lake Norman metal roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/metal-roofing-mooresville-nc`,
  },
  openGraph: {
    title: 'Metal Roofing Mooresville NC | Standing Seam Experts | Best Roofing Now',
    description:
      'Premium metal roofing in Mooresville NC. Standing seam specialists with 50+ year systems. Energy efficient, storm resistant. Free estimates!',
    url: `${SITE_CONFIG.url}/metal-roofing-mooresville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero10,
        width: 1200,
        height: 630,
        alt: 'Metal roofing installation in Mooresville NC - Best Roofing Now',
      },
    ],
  },
};

// Metal roofing services offered
const metalServices = [
  {
    icon: Layers,
    title: 'Standing Seam Metal Roofing',
    description: 'Premium standing seam panels with concealed fasteners for a sleek, modern look and superior durability.',
    href: '/services/metal-roofing',
  },
  {
    icon: Home,
    title: 'Metal Shingles',
    description: 'Metal shingles that replicate the look of traditional materials with metal\'s superior performance.',
    href: '/services/metal-roofing',
  },
  {
    icon: Building2,
    title: 'Corrugated Metal',
    description: 'Durable corrugated metal panels for residential, agricultural, and commercial applications.',
    href: '/services/metal-roofing',
  },
  {
    icon: Thermometer,
    title: 'Energy-Efficient Options',
    description: 'Cool roof coatings and reflective finishes to reduce cooling costs in Lake Norman summers.',
    href: '/services/metal-roofing',
  },
  {
    icon: Wind,
    title: 'Storm-Resistant Systems',
    description: 'Metal roofing rated for extreme winds and impact resistance for maximum protection.',
    href: '/services/metal-roofing',
  },
  {
    icon: Shield,
    title: 'Extended Warranties',
    description: '40-50 year warranties available on premium metal roofing systems.',
    href: '/services/metal-roofing',
  },
];

// Why choose metal roofing
const metalBenefits = [
  {
    icon: Clock,
    title: '50+ Year Lifespan',
    description: 'Metal roofs last 2-3 times longer than asphalt shingles, making them a smart long-term investment.',
  },
  {
    icon: Thermometer,
    title: 'Energy Efficient',
    description: 'Reflective metal roofing can reduce cooling costs by up to 25% in hot Lake Norman summers.',
  },
  {
    icon: Wind,
    title: 'Storm Resistant',
    description: 'Metal roofing withstands winds up to 140 mph and resists hail damage better than shingles.',
  },
  {
    icon: Zap,
    title: 'Low Maintenance',
    description: 'Virtually maintenance-free with no worries about rot, insect damage, or cracking.',
  },
  {
    icon: Shield,
    title: 'Fire Resistant',
    description: 'Class A fire rating provides the highest level of fire protection for your home.',
  },
  {
    icon: Star,
    title: 'Increases Home Value',
    description: 'Metal roofs add significant value and appeal to Lake Norman waterfront and luxury homes.',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Award,
    title: 'Metal Roofing Specialists',
    description: 'Specialized training and experience in all types of metal roofing systems.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Lake Norman homeowners.`,
  },
  {
    icon: Shield,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with comprehensive liability coverage.',
  },
  {
    icon: Users,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned with military values of integrity and quality.',
  },
  {
    icon: Clock,
    title: 'Expert Installation',
    description: 'Precise installation ensures your metal roof performs flawlessly for decades.',
  },
];

// Mooresville neighborhoods/areas
const mooresvilleAreas = [
  'Downtown Mooresville',
  'Morrison Plantation',
  'Langtree',
  'Curtis Pond',
  'Lake Norman Waterfront',
  'The Point',
  'Bridgemore Village',
  'Harborside',
  'Westport',
  'Mallard Head',
  'Muirfield',
  'Coddle Creek',
];

// Nearby cities
const nearbyCities = [
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Denver', href: '/locations/denver-nc' },
  { name: 'Statesville', href: '/locations/statesville-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs specific to metal roofing in Mooresville
const faqs = [
  {
    question: 'How much does metal roofing cost in Mooresville NC?',
    answer:
      'Metal roofing in Mooresville typically costs $15,000-$40,000+ for residential homes, depending on the system type and roof size. Standing seam panels range from $10-$16 per square foot installed, while metal shingles range from $8-$12 per square foot. While more expensive upfront than asphalt shingles, metal roofs last 2-3 times longer and often pay for themselves in reduced energy and maintenance costs.',
  },
  {
    question: 'Is metal roofing a good choice for Lake Norman homes?',
    answer:
      'Metal roofing is an excellent choice for Lake Norman homes. The reflective surface reduces cooling costs during hot summers, it handles our occasional severe storms with ease, and it stands up to the humidity without issues like algae growth. Many Lake Norman waterfront and luxury homes choose metal for its durability, low maintenance, and modern aesthetic.',
  },
  {
    question: 'How long does a metal roof last in Mooresville?',
    answer:
      'A properly installed metal roof in Mooresville can last 50-70 years or more. Standing seam systems with quality coatings often last the longest. Compare this to 15-25 years for asphalt shingles. Many homeowners find that a metal roof is the last roof they ever need to install on their home.',
  },
  {
    question: 'What is standing seam metal roofing?',
    answer:
      'Standing seam metal roofing features vertical panels with raised seams that interlock and conceal the fasteners. This creates a sleek, modern appearance with no exposed screws or nails. The concealed fastener system also eliminates potential leak points and allows for thermal expansion without damage. It is the premium choice for residential metal roofing.',
  },
  {
    question: 'Will a metal roof make my house hot?',
    answer:
      'No - actually the opposite! Metal roofs reflect solar radiation rather than absorbing it like asphalt shingles. With proper ventilation and optional cool roof coatings, metal roofs can reduce cooling costs by up to 25%. Metal also releases heat quickly after sunset, unlike asphalt which radiates stored heat into the attic all night.',
  },
  {
    question: 'Is metal roofing noisy in the rain?',
    answer:
      'Modern metal roofing installed over solid decking with proper underlayment is no louder than other roofing materials. The combination of solid roof deck, insulation, and attic space absorbs sound. Some homeowners enjoy the subtle rain sound, but it is far from the tin roof stereotype. We can demonstrate sound levels during your consultation.',
  },
  {
    question: 'Can metal roofing be installed over existing shingles?',
    answer:
      'In some cases, metal roofing can be installed over existing shingles, which saves on tear-off costs. However, this depends on the condition of the existing roof, local building codes, and the type of metal system. We generally recommend full tear-off for standing seam installations to ensure proper inspection of the deck and optimal results.',
  },
  {
    question: 'What colors are available for metal roofing?',
    answer:
      'Metal roofing comes in a wide range of colors and finishes. Popular choices for Mooresville homes include charcoal, bronze, slate gray, forest green, and various shades of brown and beige. Kynar/PVDF finishes resist fading for 30+ years. We can help you select a color that complements your home\'s style during your free consultation.',
  },
];

export default function MetalRoofingMooresvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Metal Roofing Mooresville NC', url: `${SITE_CONFIG.url}/metal-roofing-mooresville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocationSchema
        location={{
          city: 'Mooresville',
          state: 'NC',
          slug: 'mooresville-nc',
          county: 'Iredell',
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero10}
            alt="Metal roofing installation in Mooresville NC - Lake Norman area"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4" />
              <span className="text-sm font-semibold">Standing Seam Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Metal Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Mooresville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium metal roofing for Lake Norman homes - built to last 50+ years
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is Mooresville's trusted expert for metal roofing installation. From standing seam panels
              to metal shingles, we provide energy-efficient, storm-resistant metal roofing systems designed to protect
              your Lake Norman home for generations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Estimate
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
                <Clock className="w-5 h-5 text-accent-light" />
                50+ Year Systems
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed & Insured
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
              Metal Roofing Options in Mooresville NC
            </h2>
            <p className="text-gray text-lg">
              We install all types of metal roofing systems, from premium standing seam panels to
              metal shingles that replicate traditional materials with superior performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metalServices.map((service) => (
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

      {/* Benefits Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Lake Norman Homeowners Choose Metal Roofing
              </h2>
              <p className="text-gray text-lg mb-8">
                Metal roofing offers unmatched durability, energy efficiency, and value for Mooresville homes.
                Here's why it's the smart choice for the Lake Norman area.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {metalBenefits.map((item) => (
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
                alt="Premium metal roofing on Lake Norman home"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-dark">50+ Year</p>
                    <p className="text-sm text-gray">Expected Lifespan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Best Roofing Now for Metal Roofing
            </h2>
            <p className="text-gray text-lg">
              Metal roofing requires specialized knowledge and precise installation. Our team has the
              training and experience to ensure your metal roof performs flawlessly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-light rounded-xl p-6">
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
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for a Metal Roof in Mooresville?
              </h2>
              <p className="text-white/90">
                Get a free estimate and see why metal roofing is the smart choice for Lake Norman homes.
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
                Get Free Estimate
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
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Metal Roofing Throughout Mooresville & Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We install premium metal roofing throughout Mooresville and the greater Lake Norman region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mooresville Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Mooresville Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {mooresvilleAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-white rounded-xl p-6">
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
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Metal Roofing FAQs - Mooresville NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about metal roofing in Mooresville and Lake Norman.
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

      {/* Final CTA */}
      <CTASection
        title="Get Your Free Metal Roofing Estimate in Mooresville"
        subtitle="Contact us today for a free consultation on metal roofing. We'll help you choose the perfect system for your Lake Norman home and provide transparent pricing."
      />
    </>
  );
}
