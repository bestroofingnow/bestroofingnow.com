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
  Wrench,
  Home,
  Building2,
  CloudRain,
  Search,
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
  title: 'Roofing Rea Farms Charlotte NC',
  description:
    'Expert roofing contractor serving Rea Farms in South Charlotte NC. Roof replacement, repair, and storm damage for newer luxury homes built 2000s-2010s. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing rea farms charlotte nc',
    'roofer rea farms charlotte',
    'rea farms roof replacement charlotte',
    'rea farms roof repair charlotte nc',
    'roofing contractor rea farms',
    'rea road roofing charlotte',
    'south charlotte roofing rea farms',
    'rea farms neighborhood roofer',
    'best roofer rea farms charlotte nc',
    'rea farms charlotte roofing services',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-rea-farms-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Rea Farms Charlotte NC | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving Rea Farms in South Charlotte. Premium services for newer luxury homes. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-rea-farms-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Rea Farms Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Premium roof replacement for Rea Farms luxury homes with designer shingles and enhanced warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Expert repairs for leaks, storm damage, and wear on Rea Farms homes built in the 2000s-2010s.',
    href: '/services/roof-repair',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Fast storm damage restoration with insurance claim assistance for Rea Farms homeowners.',
    href: '/services/storm-damage',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Comprehensive inspections for maintenance planning, warranty claims, and real estate transactions.',
    href: '/services/roof-inspection',
  },
  {
    icon: Building2,
    title: 'HOA Compliant Roofing',
    description: 'We handle HOA material approvals and ensure your new roof meets Rea Farms community standards.',
    href: '/services/residential-roofing',
  },
  {
    icon: Shield,
    title: 'Emergency Service',
    description: '24/7 emergency roofing service for Rea Farms homeowners dealing with urgent leaks or storm damage.',
    href: '/services/emergency-roofing',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from homeowners across South Charlotte.`,
  },
  {
    icon: Shield,
    title: 'Manufacturer Certified',
    description: 'GAF Factory-Certified and CertainTeed ShingleMaster for warranty-backed premium installations.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability and workers\' comp coverage.',
  },
  {
    icon: Users,
    title: 'Luxury Home Expertise',
    description: 'Experience with the premium materials and higher-end finishes found in Rea Farms homes.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Rea Farms homeowners need immediate help.',
  },
];

const reaFarmsAreas = [
  'Rea Farms',
  'Rea Road',
  'Ardrey Kell Road',
  'Rea Village',
  'Rea Crossing',
  'Palisades',
  'Berewick',
  'Marvin Ridge',
  'Providence Road South',
  'Rea Farms Road',
  'Tom Short Road',
  'Community House Road',
];

const nearbyAreas = [
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Waxhaw', href: '/roofing-waxhaw-nc' },
  { name: 'Weddington', href: '/roofing-weddington-nc' },
  { name: 'Pineville', href: '/roofing-pineville-nc' },
  { name: 'Matthews', href: '/roofing-matthews-nc' },
  { name: 'Marvin', href: '/roofing-marvin-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

const faqs = [
  {
    question: 'What roofing services do you offer in Rea Farms?',
    answer:
      'Best Roofing Now provides comprehensive roofing services in Rea Farms including roof replacement, roof repair, storm damage restoration, emergency services, and roof inspections. We specialize in the newer luxury homes built throughout the Rea Farms area in the 2000s and 2010s.',
  },
  {
    question: 'How old are most roofs in Rea Farms?',
    answer:
      'Most Rea Farms homes were built between 2000 and 2015, making roofs 10-25 years old. While many are still in good condition, homes built before 2010 may be approaching the need for their first roof replacement, especially after significant storm events.',
  },
  {
    question: 'How much does a roof replacement cost in Rea Farms?',
    answer:
      'Roof replacement in Rea Farms typically costs $10,000-$25,000 depending on home size, roof complexity, and material choice. Homes in the $400K-$900K range common in this area often have 2,500-4,500 sq ft roof areas. We provide free, detailed estimates for every project.',
  },
  {
    question: 'Do you handle HOA approvals for Rea Farms communities?',
    answer:
      'Yes, we work with HOAs throughout the Rea Farms area and handle the complete approval process. We prepare material samples, color selections, and documentation for architectural review boards, ensuring your new roof meets all community standards.',
  },
  {
    question: 'What roofing materials do you recommend for Rea Farms homes?',
    answer:
      'For Rea Farms luxury homes, we recommend premium architectural shingles like GAF Timberline HDZ, CertainTeed Landmark Pro, or designer options like GAF Grand Canyon. These materials provide excellent aesthetics, durability, and enhanced warranties appropriate for the quality of homes in this area.',
  },
  {
    question: 'Do you offer storm damage insurance claim help?',
    answer:
      'Absolutely. We have extensive experience managing insurance claims for storm damage in Rea Farms. We document all damage thoroughly, meet with adjusters on your property, and advocate for fair settlements that cover proper repairs or replacement with quality materials.',
  },
  {
    question: 'How long does a roof replacement take in Rea Farms?',
    answer:
      'Most Rea Farms roof replacements are completed in 1-3 days depending on home size and complexity. Larger luxury homes may require 3-5 days. We work efficiently while maintaining the highest quality standards and keeping job sites clean.',
  },
  {
    question: 'Do you offer warranties on roofing work in Rea Farms?',
    answer:
      'Yes, all our work includes comprehensive warranties. As GAF Factory-Certified and CertainTeed ShingleMaster installers, we offer enhanced manufacturer warranties up to 50 years plus our own workmanship warranty for complete peace of mind.',
  },
];

export default function RoofingReaFarmsCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Rea Farms Charlotte NC', url: `${SITE_CONFIG.url}/roofing-rea-farms-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-rea-farms-charlotte-nc`}
        pageName="Roofing Rea Farms Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Professional roofing contractor in Rea Farms Charlotte NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Rea Farms <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium Roofing for Rea Farms&apos; Newer Luxury Homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now serves the Rea Farms area of South Charlotte with premium roofing
              services for homes built in the 2000s and 2010s. From routine maintenance to full
              replacements and storm damage repair, we deliver quality that matches the caliber
              of your Rea Farms home.
            </p>

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
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Expert Roofing for Rea Farms Luxury Homes
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Rea Farms is one of South Charlotte&apos;s premier residential areas, featuring newer
                luxury homes in the $400K-$900K range built primarily during the 2000s and 2010s.
                Located along Rea Road and Ardrey Kell Road, this area combines upscale living with
                excellent schools and convenient access to Ballantyne and SouthPark.
              </p>
              <p>
                Best Roofing Now understands the quality standards that Rea Farms homeowners expect.
                Many homes feature premium architectural shingles, complex roof designs, and HOA
                requirements that demand experienced, certified contractors. We bring that expertise
                to every project, whether it is a storm damage repair or a full roof replacement.
              </p>
              <p>
                With homes in this area now 10-25 years old, many original roofs are beginning to
                show their age. We provide honest assessments and help you make informed decisions
                about repair versus replacement, ensuring you get maximum value from your roofing
                investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Services in Rea Farms
            </h2>
            <p className="text-gray text-lg">
              Complete roofing solutions tailored to the premium homes in the Rea Farms area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
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

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Rea Farms Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Rea Farms homeowners choose us for our premium materials, certified installations,
                and experience with the higher-end homes in this South Charlotte community.
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
                src={IMAGES.hero.hero1}
                alt="Best Roofing Now - Trusted roofing contractor in Rea Farms Charlotte NC"
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
                Need a Roofer in Rea Farms?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate for your Rea Farms home today.
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

      {/* Service Areas */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving Rea Farms &amp; Surrounding Areas
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Rea Farms Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {reaFarmsAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Areas We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {nearbyAreas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{area.name}</span>
                  </Link>
                ))}
              </div>
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
                Rea Farms Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in the Rea Farms area of Charlotte NC.
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

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="roofing-rea-farms-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-rea-farms-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roofing Rea Farms"
      />

      <CTASection
        title="Ready to Work with Rea Farms' Trusted Roofer?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide expert recommendations for your Rea Farms home."
      />
    </>
  );
}
