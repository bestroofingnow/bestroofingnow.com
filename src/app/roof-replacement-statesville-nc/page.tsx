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
  Search,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
export const metadata: Metadata = {
  title: 'Roof Replacement Statesville NC',
  description:
    'Need a roof replacement in Statesville NC? Best Roofing Now provides expert roof replacement services in Iredell County. BBB A+ rated, veteran-owned. CertainTeed, GAF, and Owens Corning certified. Free estimates!',
  keywords: [
    'roof replacement statesville nc',
    'new roof statesville nc',
    'reroof statesville',
    'roof replacement cost statesville',
    'statesville roof replacement',
    'iredell county roof replacement',
    'shingle roof replacement statesville',
    'roof replacement near me statesville',
    'best roof replacement statesville nc',
    'roof tear off statesville nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-replacement-statesville-nc`,
  },
  openGraph: {
    title: 'Roof Replacement Statesville NC | Certified Installers | Best Roofing Now',
    description:
      'Expert roof replacement in Statesville NC. BBB A+ rated, veteran-owned. CertainTeed, GAF, and Owens Corning certified installers. Free estimates with transparent pricing!',
    url: `${SITE_CONFIG.url}/roof-replacement-statesville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional roof replacement in Statesville NC - Best Roofing Now',
      },
    ],
  },
};

// Replacement services
const replacementServices = [
  {
    icon: Home,
    title: 'Asphalt Shingles',
    description: 'Premium architectural shingles from CertainTeed, GAF, and Owens Corning with extended warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Shield,
    title: 'Metal Roofing',
    description: 'Durable standing seam and metal shingle systems built to last 50+ years in Iredell County.',
    href: '/metal-roofing-statesville-nc',
  },
  {
    icon: Building2,
    title: 'Commercial Systems',
    description: 'TPO, EPDM, and modified bitumen systems for Statesville commercial properties.',
    href: '/commercial-roofing-statesville-nc',
  },
  {
    icon: Search,
    title: 'Free Inspection',
    description: 'Complimentary pre-replacement inspection with detailed condition report and recommendations.',
    href: '/roof-inspection-statesville-nc',
  },
  {
    icon: Wrench,
    title: 'Full Tear-Off',
    description: 'Complete removal of old roofing, deck inspection, and full system replacement.',
    href: '/services/roof-replacement',
  },
  {
    icon: CheckCircle,
    title: 'Warranty Protection',
    description: 'Manufacturer warranties up to 50 years plus our comprehensive workmanship guarantee.',
    href: '/services/roof-replacement',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied homeowners across the region.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for the best warranty coverage.',
  },
  {
    icon: Users,
    title: '500+ Roofs Installed',
    description: `${SITE_CONFIG.roofsInstalled}+ successful roof installations across the Charlotte metro area.`,
  },
  {
    icon: Clock,
    title: 'On-Time Completion',
    description: 'We respect your schedule and complete most replacements within 1-3 days.',
  },
];

// Local areas
const localAreas = [
  'Downtown Statesville',
  'Historic District',
  'Signal Hill',
  'Brookdale',
  'Fourth Creek',
  'Cool Springs',
  'West End',
  'Northview',
  'Southview',
  'Amity Hill',
  'Scotts Creek',
  'Elmwood',
];

// Nearby cities
const nearbyCities = [
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Troutman', href: '/roofing-troutman-nc' },
  { name: 'Hickory', href: '/locations/hickory-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Lake Norman', href: '/roofing-lake-norman-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
];

// FAQs
const faqs = [
  {
    question: 'How much does a roof replacement cost in Statesville NC?',
    answer:
      'Roof replacement costs in Statesville typically range from $8,000-$25,000 for most homes, depending on size, pitch, material choice, and complexity. Factors like removing multiple layers, repairing decking, and upgrading ventilation can affect the final price. We provide free, detailed estimates with transparent pricing.',
  },
  {
    question: 'How long does a roof replacement take in Statesville?',
    answer:
      'Most residential roof replacements in Statesville are completed in 1-3 days. Larger homes or those with complex roof lines may take slightly longer. Weather can also affect the timeline. We always provide a clear schedule before starting and keep you informed throughout the project.',
  },
  {
    question: 'What roofing materials are best for Statesville homes?',
    answer:
      'For most Statesville homes, we recommend premium architectural shingles from CertainTeed, GAF, or Owens Corning for the best balance of durability, aesthetics, and value. Metal roofing is excellent for homes wanting 50+ year protection. For historic homes downtown, we can match period-appropriate materials while providing modern performance.',
  },
  {
    question: 'Do I need a permit for roof replacement in Statesville?',
    answer:
      'Yes, roof replacements in Statesville and Iredell County typically require a building permit. Best Roofing Now handles all permitting on your behalf as part of our service. We ensure your new roof meets all local building codes and passes inspection.',
  },
  {
    question: 'Will my insurance cover a roof replacement in Statesville?',
    answer:
      'If your roof was damaged by a covered event like a storm, hail, or wind, your homeowner\'s insurance may cover part or all of the replacement cost. We have extensive experience working with insurance companies and will help you navigate the claims process, document damage, and communicate with adjusters.',
  },
  {
    question: 'Can you replace my roof in the winter in Statesville?',
    answer:
      'Yes, we install roofs year-round in Statesville. While spring and fall are ideal, modern roofing materials are designed for installation in a wide range of temperatures. We follow manufacturer guidelines for cold-weather installation and will schedule around extreme weather to ensure the best results.',
  },
  {
    question: 'What happens to my old roof during replacement?',
    answer:
      'During a full tear-off, we completely remove all old shingles and underlayment, inspect the roof deck for damage, make any necessary repairs, and install your new roofing system from scratch. We use tarps and protective equipment to shield your landscaping and clean up thoroughly each day.',
  },
  {
    question: 'Do you offer financing for roof replacement in Statesville?',
    answer:
      'Yes, we offer flexible financing options to make roof replacement affordable for Statesville homeowners. We partner with trusted lending providers to offer competitive rates and manageable monthly payments. Ask about our current financing programs when you schedule your free estimate.',
  },
];

export default function RoofReplacementStatesvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Replacement Statesville NC', url: `${SITE_CONFIG.url}/roof-replacement-statesville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-replacement-statesville-nc`}
        pageName="Roof Replacement Statesville NC"
        city="Statesville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Professional roof replacement in Statesville NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Certified Roof Replacement Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Replacement <br className="hidden md:block" />
              <span className="text-accent-light">Statesville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium roof replacements backed by manufacturer warranties up to 50 years
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Is your Statesville roof aging, damaged, or past its prime? Best Roofing Now provides expert
              roof replacement services throughout Iredell County. Our CertainTeed, GAF, and Owens Corning
              certified installers ensure your new roof is installed to the highest standards.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Replacement Estimate
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
              Roof Replacement Options in Statesville
            </h2>
            <p className="text-gray text-lg">
              We offer a full range of roofing materials and systems to match every Statesville home's
              style, budget, and performance requirements.
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
                Why Statesville Homeowners Trust Us for Roof Replacement
              </h2>
              <p className="text-gray text-lg mb-8">
                A new roof is one of the biggest investments you will make in your home. Statesville homeowners
                trust Best Roofing Now for our certified expertise, transparent pricing, and commitment to
                quality on every project.
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
                alt="Best Roofing Now - Expert roof replacement in Statesville NC"
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
                Ready for a New Roof in Statesville?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation replacement estimate with transparent pricing and financing options.
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

      {/* Local Area Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Roof Replacement for Statesville & Iredell County Homes
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Statesville, the county seat of Iredell County, features a diverse range of homes from beautifully
                preserved historic properties downtown to modern construction in growing neighborhoods like Signal
                Hill and Brookdale. Each home type has unique roofing requirements, and our team has the experience
                to handle them all.
              </p>
              <p>
                Located at the crossroads of I-77 and I-40, Statesville homes are exposed to severe weather
                patterns that can accelerate roof aging. Our certified installers use premium materials from
                CertainTeed, GAF, and Owens Corning to ensure your new roof provides decades of reliable
                protection against North Carolina's climate challenges.
              </p>
              <p>
                With over {SITE_CONFIG.roofsInstalled} successful roof installations across the Charlotte metro
                area, Best Roofing Now brings unmatched expertise to every Statesville roof replacement project.
                Our manufacturer certifications allow us to offer enhanced warranty coverage that protects your
                investment for years to come.
              </p>
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
              Roof Replacement Throughout Statesville & Iredell County
            </h2>
            <p className="text-gray text-lg">
              We provide roof replacement services to homeowners throughout Statesville and surrounding communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Statesville Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {localAreas.map((area) => (
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
                Roof Replacement FAQs for Statesville
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof replacement in Statesville NC.
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
        city="Statesville"
        slug="roof-replacement-statesville-nc"
      />

      <CityGeoSection
        city="Statesville"
        state="NC"
        citySlug="statesville-nc"
        service="Roof Replacement"
      />


      <LKNPartnershipsBlock city={"Statesville"} />
      <LKNDataCitations city={"Statesville"} />
      <CTASection
        title="Ready for a New Roof on Your Statesville Home?"
        subtitle="Get a free, no-obligation replacement estimate from our certified team. We'll help you choose the perfect roofing system for your Iredell County home."
      />
    </>
  );
}
