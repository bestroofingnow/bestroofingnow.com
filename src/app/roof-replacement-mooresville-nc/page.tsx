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
  Building2,
  Layers,
  RefreshCw,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocationSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Replacement Mooresville NC',
  description:
    'Need a new roof in Mooresville NC? Best Roofing Now is the Lake Norman area\'s trusted roof replacement company. Premium materials, expert installation, and financing available. Free estimates!',
  keywords: [
    'roof replacement Mooresville NC',
    'new roof Mooresville',
    'Mooresville roof replacement',
    'roof replacement cost Mooresville NC',
    'roofing company Mooresville NC',
    'roofers Mooresville NC',
    'Lake Norman roof replacement',
    'Mooresville roofing contractor',
    'new roof cost Mooresville',
    'best roofer Mooresville NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-replacement-mooresville-nc`,
  },
  openGraph: {
    title: 'Roof Replacement Mooresville NC | Lake Norman Experts | Best Roofing Now',
    description:
      'Premium roof replacement in Mooresville NC. Lake Norman\'s trusted roofing company with BBB A+ rating. CertainTeed, GAF, and Owens Corning certified. Free estimates!',
    url: `${SITE_CONFIG.url}/roof-replacement-mooresville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero4,
        width: 1200,
        height: 630,
        alt: 'Professional roof replacement in Mooresville NC - Best Roofing Now',
      },
    ],
  },
};

// Replacement services offered
const replacementServices = [
  {
    icon: Home,
    title: 'Asphalt Shingle Roofing',
    description: 'Premium architectural shingles from CertainTeed, GAF, and Owens Corning with enhanced warranties.',
    href: '/services/residential-roofing',
  },
  {
    icon: Layers,
    title: 'Metal Roofing',
    description: 'Standing seam and metal shingle systems for superior durability and energy efficiency.',
    href: '/services/metal-roofing',
  },
  {
    icon: Building2,
    title: 'Luxury Shingles',
    description: 'Designer shingles that replicate the look of slate or cedar shake at a fraction of the cost.',
    href: '/services/residential-roofing',
  },
  {
    icon: RefreshCw,
    title: 'Complete Tear-Off',
    description: 'Full removal of old roofing down to the deck for proper inspection and replacement.',
    href: '/services/roof-replacement',
  },
  {
    icon: Shield,
    title: 'Extended Warranties',
    description: 'Up to 50-year warranties available through our manufacturer certifications.',
    href: '/services/roof-replacement',
  },
  {
    icon: Sparkles,
    title: 'Financing Available',
    description: 'Flexible financing options to fit your budget with competitive rates.',
    href: '/financing',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'Certified Installers',
    description: 'CertainTeed ShingleMaster, GAF Factory-Certified Contractor.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Lake Norman homeowners.`,
  },
  {
    icon: Shield,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability and workers comp coverage.',
  },
  {
    icon: Users,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: Clock,
    title: 'Fast Installation',
    description: 'Most roof replacements completed in just 1-3 days with thorough cleanup.',
  },
];

// Mooresville neighborhoods/areas
const mooresvilleAreas = [
  'Downtown Mooresville',
  'Morrison Plantation',
  'Langtree',
  'Curtis Pond',
  'Lake Norman',
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
  { name: 'Denver', href: '/roof-replacement-denver-nc' },
  { name: 'Statesville', href: '/locations/statesville-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs specific to roof replacement in Mooresville
const faqs = [
  {
    question: 'How much does a roof replacement cost in Mooresville NC?',
    answer:
      'Roof replacement costs in Mooresville typically range from $8,000-$25,000 for most homes, depending on size, materials, and complexity. Factors affecting price include roof square footage, pitch/steepness, number of layers to remove, material choice (architectural shingles vs. metal vs. premium), and any necessary repairs to decking or ventilation. We provide free, detailed estimates with transparent pricing.',
  },
  {
    question: 'How long does a roof replacement take in Mooresville?',
    answer:
      'Most residential roof replacements in Mooresville are completed in 1-3 days. The exact timeline depends on your roof\'s size, complexity, and weather conditions. Larger Lake Norman lakefront homes or complex designs may take 3-5 days. We work efficiently while maintaining quality standards and always provide a clear timeline before starting.',
  },
  {
    question: 'What roofing materials do you recommend for Lake Norman homes?',
    answer:
      'For Lake Norman homes, we typically recommend premium architectural shingles (CertainTeed Landmark Pro, GAF Timberline HDZ) or metal roofing for waterfront properties. The humid lakeside environment and occasional severe storms make impact-resistant, algae-resistant materials ideal. We help you select the best material for your specific location and budget.',
  },
  {
    question: 'Do you offer financing for roof replacement in Mooresville?',
    answer:
      'Yes! We offer flexible financing options to make your roof replacement affordable. Our financing partners provide competitive rates with various term lengths. Many homeowners qualify for low monthly payments. We also work with insurance companies if your roof qualifies for storm damage coverage.',
  },
  {
    question: 'What warranties do you offer on new roofs in Mooresville?',
    answer:
      'As CertainTeed ShingleMaster, GAF Factory-Certified Contractor, we offer enhanced warranty options. This includes GAF\'s Golden Pledge warranty (50 years material + 25 years workmanship), CertainTeed SureStart PLUS warranty, and Owens Corning Platinum Protection. We also provide our own workmanship warranty on every installation.',
  },
  {
    question: 'How do I know if I need a new roof vs. repairs?',
    answer:
      'Key signs you need a replacement include: roof age over 20 years, widespread shingle damage or granule loss, multiple leaks, sagging or uneven areas, and if repair costs exceed 30% of replacement cost. We provide honest assessments and never recommend replacement if repairs will suffice. Our free inspections help you make an informed decision.',
  },
  {
    question: 'Will a new roof increase my home value in Mooresville?',
    answer:
      'Yes! A new roof typically returns 60-70% of its cost in increased home value and can be a major selling point. In the competitive Lake Norman real estate market, a new roof provides peace of mind to buyers and can help your home sell faster. Quality materials like architectural shingles or metal roofing add even more value.',
  },
  {
    question: 'What is included in your roof replacement service?',
    answer:
      'Our complete roof replacement includes: full tear-off of existing roofing, thorough deck inspection and repairs, installation of quality underlayment, proper ventilation assessment, installation of ice and water shield (where required), new drip edge and flashing, premium material installation, and complete cleanup with magnetic nail sweep. We leave your property cleaner than we found it.',
  },
];

export default function RoofReplacementMooresvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Replacement Mooresville NC', url: `${SITE_CONFIG.url}/roof-replacement-mooresville-nc` },
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
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-replacement-mooresville-nc`}
        pageName="Roof Replacement Mooresville NC"
        city="Mooresville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero4}
            alt="Professional roof replacement in Mooresville NC - Lake Norman area"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Lake Norman's Trusted Roofing Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Replacement <br className="hidden md:block" />
              <span className="text-accent-light">Mooresville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium roof replacement for Lake Norman homes with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is Mooresville's trusted roofing company for complete roof replacements. As certified installers
              for CertainTeed, GAF, and Owens Corning, we deliver exceptional quality backed by industry-leading warranties.
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
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Certified Installers
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
              Roof Replacement Options in Mooresville NC
            </h2>
            <p className="text-gray text-lg">
              From premium architectural shingles to metal roofing, we offer complete roof replacement
              solutions with materials designed to protect your Lake Norman home for decades.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {replacementServices.map((service) => (
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
                Why Mooresville Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                A new roof is a major investment in your home. When Lake Norman homeowners need a roof replacement,
                they trust Best Roofing Now for premium materials, expert installation, and exceptional warranties.
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
                src={IMAGES.realProjects.drone2}
                alt="Completed roof replacement project in Mooresville NC - Lake Norman area"
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
                Ready for a New Roof in Mooresville?
              </h2>
              <p className="text-white/90">
                Get a free estimate and see why Lake Norman homeowners trust us with their roof replacements.
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
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving Mooresville & Lake Norman Communities
            </h2>
            <p className="text-gray text-lg">
              We provide premium roof replacement services throughout Mooresville and the greater Lake Norman region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mooresville Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Mooresville Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {mooresvilleAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
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

      {/* Certifications Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certified for Premium Warranties
            </h2>
            <p className="text-gray text-lg">
              Our manufacturer certifications mean your new roof comes with the best warranty coverage available.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">CertainTeed ShingleMaster</h3>
              <p className="text-gray text-sm">
                Top-tier certification with access to SureStart PLUS extended warranties.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">GAF Factory-Certified</h3>
              <p className="text-gray text-sm">
                Authorized for GAF's Golden Pledge warranty - 50 years material, 25 years workmanship.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">BBB A+ Accredited</h3>
              <p className="text-gray text-sm">
                Better Business Bureau A+ rating with zero complaints. Trusted by Mooresville homeowners.
              </p>
            </div>
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
                Roof Replacement FAQs - Mooresville NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof replacement in Mooresville and Lake Norman.
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

      {/* Project Gallery Strip */}
      <GeoProjectGalleryStrip
        pageType="location"
        city="Mooresville"
        slug="roof-replacement-mooresville-nc"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Mooresville"

        state="NC"

        citySlug="mooresville-nc"

        service="Roof Replacement"

      />

      <CTASection
        title="Get Your Free Roof Replacement Estimate in Mooresville"
        subtitle="Contact us today for a free inspection and detailed estimate. We'll help you choose the perfect roofing solution for your Lake Norman home."
      />
    </>
  );
}
