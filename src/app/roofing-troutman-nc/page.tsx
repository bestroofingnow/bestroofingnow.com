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
import { BreadcrumbSchema, FAQSchema, ServiceAreaPageSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
export const metadata: Metadata = {
  title: 'Roofing Troutman NC',
  description:
    'Looking for roofing services in Troutman NC? Best Roofing Now serves Troutman and the I-77 corridor from our Charlotte headquarters. BBB A+ rated, veteran-owned. Free estimates for roof repair, replacement, and installation in Iredell County.',
  keywords: [
    'roofing troutman nc',
    'roofers troutman',
    'roof repair troutman nc',
    'roof replacement troutman',
    'iredell county roofers',
    'troutman roofing contractor',
    'lake norman roofing',
    'troutman nc roofer',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-troutman-nc`,
  },
  openGraph: {
    title: 'Roofing Troutman NC | Iredell County Roofing | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving Troutman NC and the I-77 corridor. Licensed and insured with 500+ roofs installed. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/roofing-troutman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Troutman NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Troutman homes including shingle, metal, and tile roofing.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, and commercial roof repairs for Iredell County businesses.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in Iredell County.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials and extended warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections with detailed reports for Troutman homeowners.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for Troutman properties.',
    href: '/services/storm-damage',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied customers across the region.`,
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
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when storms strike in Troutman.',
  },
];

// Troutman area communities
const localAreas = [
  'Troutman',
  'South Iredell',
  'Lake Norman North Shore',
  'Triplett',
  'Ebenezer',
  'Ostwalt',
  'Houston',
  'Houstonville',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Statesville', href: '/roofing-statesville-nc' },
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Lake Norman', href: '/roofing-lake-norman-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs about roofing in Troutman
const faqs = [
  {
    question: 'Do you provide roofing services in Troutman NC?',
    answer:
      'Yes! Best Roofing Now proudly serves Troutman and all of Iredell County from our Charlotte headquarters. We regularly complete roofing projects throughout the I-77 corridor between Statesville and Mooresville. Our team is familiar with local building codes and the unique roofing needs of the Troutman community.',
  },
  {
    question: 'How far is Troutman from your Charlotte location?',
    answer:
      'Troutman is approximately 35 miles north of our Charlotte headquarters along I-77. This is well within our primary service area, and we have completed numerous roofing projects in Troutman and surrounding Iredell County communities. Distance is never an issue - we provide the same quality service and response times throughout our service area.',
  },
  {
    question: 'What roofing challenges are common in Troutman NC?',
    answer:
      'Troutman homes face typical North Carolina roofing challenges including heat and humidity in summer, occasional ice and snow in winter, and severe thunderstorms with hail. The mix of established homes and new construction in Troutman means we see everything from aging roofs needing replacement to new builds requiring quality installation. Our team recommends appropriate solutions for each situation.',
  },
  {
    question: 'How much does a new roof cost in Troutman?',
    answer:
      'Roof replacement costs in Troutman typically range from $8,000-$25,000 for most homes, depending on size, pitch, material choice, and complexity. We provide free, no-obligation estimates with transparent pricing for Troutman homeowners. Financing options are also available to help manage the investment.',
  },
  {
    question: 'Do you offer free roof inspections in Troutman?',
    answer:
      'Absolutely! Best Roofing Now offers completely free roof inspections throughout Troutman and the Iredell County area. Our certified inspectors will thoroughly examine your roof, identify any issues, and provide a detailed written report with photos. There is no obligation to hire us after the inspection.',
  },
  {
    question: 'Can you help with insurance claims for storm damage in Troutman?',
    answer:
      'Yes, we have extensive experience helping Troutman and Iredell County homeowners with storm damage insurance claims. The I-77 corridor sees its share of severe weather, and we provide thorough documentation, meet with adjusters, and advocate for fair settlements. Many roofs qualify for insurance coverage after storm events.',
  },
  {
    question: 'What roofing materials do you recommend for Troutman homes?',
    answer:
      'For Troutman homes, we often recommend architectural shingles with high wind ratings for their durability and curb appeal, or metal roofing for superior longevity. For new construction along the I-77 growth corridor, we can match materials to your builder specifications. Our team will assess your specific home and recommend the best materials for your needs and budget.',
  },
  {
    question: 'How quickly can you respond to roofing emergencies in Troutman?',
    answer:
      'We offer 24/7 emergency roofing services throughout the Iredell County area including Troutman. For emergencies like active leaks or storm damage, we typically respond within 1-4 hours to secure your property and prevent further damage. Call us anytime at (704) 605-6047 for emergency service.',
  },
];

export default function RoofingTroutmanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Troutman NC', url: `${SITE_CONFIG.url}/roofing-troutman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-troutman-nc`}
        pageName="Roofing Troutman NC"
        city="Troutman"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero2}
            alt="Professional roofing services in Troutman NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Troutman from Charlotte</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Troutman NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Iredell County Roofing</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Serving Troutman from our Charlotte headquarters with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert roofing services to Troutman and the I-77 growth corridor.
              From established neighborhoods to new construction in Iredell County, our certified team delivers
              exceptional quality backed by industry-leading warranties.
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
              Complete Roofing Services in Troutman NC
            </h2>
            <p className="text-gray text-lg">
              From established homes to new construction along the I-77 corridor, our certified contractors
              handle all your roofing needs with expert craftsmanship and premium materials.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
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
                Why Troutman Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need a roofing contractor in Troutman, you want a company you can trust. Best Roofing
                Now has built our reputation on honesty, quality workmanship, and putting customers first throughout
                the Iredell County region.
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
              <SEOImage
                src={IMAGES.realProjects.drone1}
                alt="Best Roofing Now - Trusted roofing contractor serving Troutman NC"
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
                Need a Roofing Contractor in Troutman?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from the I-77 corridor's most trusted roofing company.
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
              Roofing Services for Troutman & the I-77 Corridor
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Troutman is a small town in Iredell County located along the I-77 corridor between Statesville
                and Mooresville, near the northern end of Lake Norman. Best Roofing Now is proud to serve this
                growing community from our Charlotte headquarters, providing the same exceptional roofing
                services that have earned us a BBB A+ rating and over {SITE_CONFIG.googleReviewCount} five-star reviews.
              </p>
              <p>
                With a mix of established homes and new construction, Troutman presents a variety of roofing
                needs. Older homes may require roof replacement or repair to address wear from decades of North
                Carolina weather, while new builds along the I-77 growth corridor need quality installation from
                the start. Our team has the expertise to handle both, recommending the right materials and
                techniques for each situation.
              </p>
              <p>
                Whether you own a home in one of Troutman's established neighborhoods, a property near Lake
                Norman's north shore, or are building new in the South Iredell area, Best Roofing Now delivers
                exceptional workmanship backed by industry-leading warranties from manufacturers like CertainTeed,
                GAF, and Owens Corning.
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
              Serving Troutman & Surrounding Iredell County Areas
            </h2>
            <p className="text-gray text-lg">
              Our roofing contractors serve homeowners and businesses throughout Iredell County and the I-77 corridor.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Local Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Troutman Area Communities</h3>
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

            {/* Nearby Cities */}
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

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Work Across the Iredell County Region
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects throughout Troutman and Iredell County.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.project1}
                alt="Completed residential roof replacement in Troutman NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation in Iredell County area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed roof project in Iredell County"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.project3}
                alt="Professional roofing work in Troutman area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Projects
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
                Troutman Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Troutman and Iredell County.
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
        slug="roofing-troutman-nc"
        count={4}
        title="Recent Roofing Projects in Troutman, NC"
        subtitle="Browse completed roofing projects from the Troutman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-troutman-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection
        city="Troutman"
        state="NC"
        citySlug="troutman-nc"
        service="Roofing"
      />


      <LKNPartnershipsBlock city={"Troutman"} />
      <LKNDataCitations city={"Troutman"} />
      <CTASection
        title="Ready to Work with Troutman's Trusted Roofing Team?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your Troutman home's needs."
      />
    </>
  );
}
