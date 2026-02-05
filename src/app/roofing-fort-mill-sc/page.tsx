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
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Fort Mill SC | Top Rated',
  description:
    'Looking for roofing services in Fort Mill SC? Best Roofing Now serves Fort Mill, Baxter, and Tega Cay from our Charlotte headquarters. BBB A+ rated, veteran-owned. Free estimates for roof repair, replacement, and installation in York County.',
  keywords: [
    'roofing fort mill sc',
    'roofers fort mill sc',
    'roof repair fort mill sc',
    'roof replacement fort mill',
    'south charlotte roofing',
    'fort mill roof contractor',
    'roofing company fort mill sc',
    'york county roofers',
    'baxter roofing',
    'tega cay roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-fort-mill-sc`,
  },
  openGraph: {
    title: 'Roofing Fort Mill SC | South Charlotte Roofing | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving Fort Mill SC and York County. Licensed and insured with 500+ roofs installed. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/roofing-fort-mill-sc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero4,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Fort Mill SC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Fort Mill homes including shingle, metal, and tile roofing.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, and commercial roof repairs for Fort Mill businesses.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in York County.',
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
    description: 'Free comprehensive inspections with detailed reports for Fort Mill homeowners.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for York County properties.',
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
    description: 'Fully licensed roofing contractor with comprehensive liability insurance for SC work.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when storms strike Fort Mill.',
  },
];

// Fort Mill area communities
const localAreas = [
  'Fort Mill',
  'Baxter Village',
  'Tega Cay',
  'Kingsley',
  'Springfield',
  'Regent Park',
  'Massey',
  'Sutton',
  'Indian Land',
  'Lake Wylie',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Rock Hill', href: '/roofing-rock-hill-sc' },
  { name: 'Tega Cay', href: '/locations/tega-cay-sc' },
  { name: 'Indian Land', href: '/locations/indian-land-sc' },
  { name: 'Lake Wylie', href: '/locations/lake-wylie-sc' },
  { name: 'Pineville', href: '/locations/pineville-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Ballantyne', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs about roofing in Fort Mill
const faqs = [
  {
    question: 'Do you provide roofing services in Fort Mill SC?',
    answer:
      'Yes! Best Roofing Now proudly serves Fort Mill and all of York County from our Charlotte headquarters. Fort Mill is just 16 miles from our office, making it one of our most convenient service areas. We complete numerous roofing projects throughout Fort Mill, including the Baxter, Tega Cay, and Kingsley communities.',
  },
  {
    question: 'Are you licensed to work in South Carolina?',
    answer:
      'Yes, Best Roofing Now is fully licensed and insured to perform roofing work in South Carolina. We carry comprehensive general liability insurance and workers compensation coverage that protects you during any project. We are familiar with York County building codes and permit requirements.',
  },
  {
    question: 'How does cross-border service work for Fort Mill customers?',
    answer:
      'Our Charlotte-based team regularly serves Fort Mill and other South Carolina communities. There is no difference in service quality, response time, or warranty coverage. We handle all necessary permits and inspections according to South Carolina and York County requirements. Many of our Charlotte-area clients have recommended us to friends and family in Fort Mill.',
  },
  {
    question: 'How much does a new roof cost in Fort Mill SC?',
    answer:
      'Roof replacement costs in Fort Mill typically range from $8,000-$25,000 for most homes, depending on size, pitch, material choice, and complexity. The growing communities like Baxter and Kingsley often have larger homes that may be at the higher end of this range. We provide free, no-obligation estimates with transparent pricing.',
  },
  {
    question: 'Do you offer free roof inspections in Fort Mill?',
    answer:
      'Absolutely! Best Roofing Now offers completely free roof inspections throughout Fort Mill and York County. Our certified inspectors will thoroughly examine your roof, identify any issues, and provide a detailed written report with photos. There is no obligation to hire us after the inspection.',
  },
  {
    question: 'Can you help with insurance claims for storm damage in Fort Mill?',
    answer:
      'Yes, we have extensive experience helping Fort Mill and York County homeowners with storm damage insurance claims. South Carolina sees significant severe weather, and we provide thorough documentation, meet with adjusters, and advocate for fair settlements. Many roofs qualify for insurance coverage after storm events.',
  },
  {
    question: 'What roofing materials do you recommend for Fort Mill homes?',
    answer:
      'For Fort Mill homes, we typically recommend architectural shingles from CertainTeed, GAF, or Owens Corning for their excellent durability and warranty coverage. Many of the newer communities like Baxter have HOA requirements we are familiar with. Metal roofing is also growing in popularity for its longevity and energy efficiency.',
  },
  {
    question: 'How quickly can you respond to roofing emergencies in Fort Mill?',
    answer:
      'We offer 24/7 emergency roofing services throughout Fort Mill and York County. For emergencies like active leaks or storm damage, we typically respond within 1-4 hours to secure your property and prevent further damage. Call us anytime at (704) 605-6047 for emergency service.',
  },
];

export default function RoofingFortMillSCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Fort Mill SC', url: `${SITE_CONFIG.url}/roofing-fort-mill-sc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero4}
            alt="Professional roofing services in Fort Mill SC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Fort Mill from Charlotte</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Fort Mill SC
              <br className="hidden md:block" />
              <span className="text-accent-light">South Charlotte Roofing</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Serving Fort Mill from our Charlotte headquarters with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert roofing services to Fort Mill, Baxter, Tega Cay, and all of York County.
              Our certified team delivers exceptional quality backed by industry-leading warranties for South Carolina
              homeowners.
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
              Complete Roofing Services in Fort Mill SC
            </h2>
            <p className="text-gray text-lg">
              From Baxter to Tega Cay, our certified contractors handle all your roofing needs with expert
              craftsmanship and premium materials throughout York County.
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
                Why Fort Mill Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need a roofing contractor in Fort Mill, you want a company you can trust. Best Roofing
                Now has built our reputation on honesty, quality workmanship, and putting customers first throughout
                the greater Charlotte region, including South Carolina.
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
                src={IMAGES.realProjects.project1}
                alt="Best Roofing Now - Trusted roofing contractor serving Fort Mill SC"
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
                Need a Roofing Contractor in Fort Mill?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from the South Charlotte area's most trusted roofing company.
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
              Roofing Services for Fort Mill & York County
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Fort Mill, South Carolina, has become one of the fastest-growing communities in the Charlotte metro area.
                Located just across the state line in York County, Fort Mill offers excellent schools, beautiful
                master-planned communities like Baxter and Kingsley, and easy access to Charlotte. Best Roofing Now
                is proud to serve Fort Mill homeowners from our Charlotte headquarters, providing the same exceptional
                roofing services that have earned us a BBB A+ rating and over {SITE_CONFIG.googleReviewCount} five-star reviews.
              </p>
              <p>
                Our cross-border service means Fort Mill homeowners get the best of both worlds: a Charlotte-based
                company with extensive experience and resources, combined with full licensing and familiarity with
                South Carolina building codes and requirements. We handle all necessary permits and inspections
                according to York County regulations.
              </p>
              <p>
                Whether you live in the established neighborhoods of downtown Fort Mill, the popular Baxter community,
                waterfront Tega Cay, or anywhere else in York County, Best Roofing Now delivers exceptional workmanship
                backed by industry-leading warranties from manufacturers like CertainTeed, GAF, and Owens Corning.
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
              Serving Fort Mill & Surrounding York County Areas
            </h2>
            <p className="text-gray text-lg">
              Our roofing contractors serve homeowners and businesses throughout York County and the South Charlotte region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Local Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Fort Mill Area Communities</h3>
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
              Our Work Across York County
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects throughout Fort Mill and South Charlotte.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project5}
                alt="Completed residential roof replacement in Fort Mill SC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation in York County"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof project in Fort Mill"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project6}
                alt="Professional roofing work in Fort Mill area"
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
                Fort Mill Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Fort Mill and York County.
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

      <GeoProjectGalleryStrip pageType="location" city="Fort Mill" slug="roofing-fort-mill-sc" />

      {/* Final CTA */}

      <CityGeoSection

        city="Fort Mill"

        state="SC"

        citySlug="fort-mill-sc"

        service="Roofing"

      />

      <CTASection
        title="Ready to Work with Fort Mill's Trusted Roofing Team?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your York County home's needs."
      />
    </>
  );
}
