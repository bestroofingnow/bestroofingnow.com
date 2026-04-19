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
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
export const metadata: Metadata = {
  title: 'Roofing Statesville NC',
  description:
    'Looking for roofing services in Statesville NC? Best Roofing Now serves Statesville and Iredell County from our Charlotte headquarters. BBB A+ rated, veteran-owned. Free estimates for roof repair, replacement, and installation.',
  keywords: [
    'roofing statesville nc',
    'roofers statesville',
    'roof repair statesville nc',
    'roof replacement statesville',
    'iredell county roofing',
    'statesville roof contractor',
    'roofing company statesville nc',
    'statesville nc roofer',
    'roofing near me statesville',
    'best roofer statesville nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-statesville-nc`,
  },
  openGraph: {
    title: 'Roofing Statesville NC | Iredell County Roofing | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving Statesville NC and Iredell County. Licensed and insured with 500+ roofs installed. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/roofing-statesville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Statesville NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Statesville homes including shingle, metal, and tile roofing.',
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
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in Statesville.',
    href: '/roof-repair-statesville-nc',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials and extended warranties.',
    href: '/roof-replacement-statesville-nc',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections with detailed reports for Statesville homeowners.',
    href: '/roof-inspection-statesville-nc',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for Iredell County properties.',
    href: '/storm-damage-roof-repair-statesville-nc',
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
    description: 'Round-the-clock emergency roofing services when Iredell County storms strike.',
  },
];

// Statesville area communities
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

// Nearby cities served
const nearbyCities = [
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Troutman', href: '/roofing-troutman-nc' },
  { name: 'Hickory', href: '/locations/hickory-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Lake Norman', href: '/roofing-lake-norman-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
];

// FAQs about roofing in Statesville
const faqs = [
  {
    question: 'Do you provide roofing services in Statesville NC?',
    answer:
      'Yes! Best Roofing Now proudly serves Statesville and all of Iredell County from our Charlotte headquarters, approximately 39 miles away. We regularly complete roofing projects throughout the Statesville area, from the Historic District to newer subdivisions near I-77 and I-40. Our team is familiar with local building codes and the unique roofing needs of the Statesville community.',
  },
  {
    question: 'How far is Statesville from your Charlotte location?',
    answer:
      'Statesville is approximately 39 miles north of our Charlotte headquarters via I-77. This is well within our primary service area, and we have completed numerous roofing projects in Statesville and surrounding Iredell County communities. We provide the same quality service and response times throughout our entire service area.',
  },
  {
    question: 'What roofing challenges are common in Statesville NC?',
    answer:
      'Statesville homes face several roofing challenges including severe thunderstorms along the I-77/I-40 corridor, occasional hail events, high summer humidity that can promote algae growth on shingles, and wind exposure. The mix of historic homes in downtown and newer construction means we work with a variety of roof types and materials. Our team recommends appropriate solutions based on your home\'s specific needs.',
  },
  {
    question: 'How much does a new roof cost in Statesville?',
    answer:
      'Roof replacement costs in Statesville typically range from $8,000-$25,000 for most homes, depending on size, pitch, material choice, and complexity. Historic homes in downtown Statesville may have unique requirements that affect pricing. We provide free, no-obligation estimates with transparent pricing for all Statesville homeowners.',
  },
  {
    question: 'Do you offer free roof inspections in Statesville?',
    answer:
      'Absolutely! Best Roofing Now offers completely free roof inspections throughout Statesville and Iredell County. Our certified inspectors will thoroughly examine your roof, identify any issues, and provide a detailed written report with photos. There is no obligation to hire us after the inspection.',
  },
  {
    question: 'Can you help with insurance claims for storm damage in Statesville?',
    answer:
      'Yes, we have extensive experience helping Statesville and Iredell County homeowners with storm damage insurance claims. The I-77/I-40 corridor sees its share of severe weather, and we provide thorough documentation, meet with adjusters, and advocate for fair settlements. Many roofs qualify for insurance coverage after storm events.',
  },
  {
    question: 'What roofing materials do you recommend for Statesville homes?',
    answer:
      'For Statesville homes, we typically recommend architectural shingles from top manufacturers like CertainTeed, GAF, and Owens Corning. For homes wanting maximum durability, metal roofing is an excellent choice that handles Iredell County weather well. For historic properties in downtown Statesville, we can match period-appropriate materials while ensuring modern protection.',
  },
  {
    question: 'How quickly can you respond to roofing emergencies in Statesville?',
    answer:
      'We offer 24/7 emergency roofing services throughout the Statesville area. For emergencies like active leaks or storm damage, we typically respond within 2-4 hours to secure your property and prevent further damage. Call us anytime at (704) 605-6047 for emergency service.',
  },
];

export default function RoofingStatesvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Statesville NC', url: `${SITE_CONFIG.url}/roofing-statesville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-statesville-nc`}
        pageName="Roofing Statesville NC"
        city="Statesville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero2}
            alt="Professional roofing services in Statesville NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Statesville from Charlotte</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Statesville NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Iredell County Roofing</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Serving Statesville from our Charlotte headquarters with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert roofing services to Statesville and the Iredell County community.
              From historic homes downtown to new construction along the I-77 corridor, our certified team delivers
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
              Complete Roofing Services in Statesville NC
            </h2>
            <p className="text-gray text-lg">
              From historic downtown homes to properties throughout Iredell County, our certified contractors
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
                Why Statesville Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need a roofing contractor in Statesville, you want a company you can trust. Best Roofing
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
                alt="Best Roofing Now - Trusted roofing contractor serving Statesville NC"
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
                Need a Roofing Contractor in Statesville?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Iredell County's most trusted roofing company.
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
              Roofing Services for Statesville & Iredell County
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Statesville, the county seat of Iredell County, sits at the crossroads of I-77 and I-40
                approximately 30 miles north of Charlotte. With a population of around 30,000, Statesville
                blends historic charm with modern growth. Best Roofing Now is proud to serve this thriving
                community from our Charlotte headquarters, providing the same exceptional roofing services
                that have earned us a BBB A+ rating and over {SITE_CONFIG.googleReviewCount} five-star reviews.
              </p>
              <p>
                The Statesville area features a diverse mix of housing, from beautifully preserved historic homes
                in the downtown district to newer construction in growing neighborhoods like Signal Hill and
                Brookdale. Each property type presents unique roofing considerations, and our experienced team
                has the expertise to handle them all. Whether your historic home needs period-appropriate roofing
                or your newer home needs a modern upgrade, we deliver quality results.
              </p>
              <p>
                Located near the northern end of Lake Norman, Statesville homeowners benefit from our extensive
                experience serving the entire Lake Norman region. Our CertainTeed, GAF, and Owens Corning
                certified installers ensure every project meets the highest standards, backed by industry-leading
                manufacturer warranties.
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
              Serving Statesville & Surrounding Iredell County Areas
            </h2>
            <p className="text-gray text-lg">
              Our roofing contractors serve homeowners and businesses throughout Iredell County and the I-77 corridor.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Local Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Statesville Area Communities</h3>
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
              Browse our portfolio of completed roofing projects throughout Statesville and Iredell County.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.project1}
                alt="Completed residential roof replacement in Statesville NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation in Iredell County"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed roof project in Statesville"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.project3}
                alt="Professional roofing work in Statesville area"
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
                Statesville Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Statesville and Iredell County.
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
        slug="roofing-statesville-nc"
        count={4}
        title="Recent Roofing Projects in Statesville, NC"
        subtitle="Browse completed roofing projects from the Statesville area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-statesville-nc`}
      />

      <CityGeoSection
        city="Statesville"
        state="NC"
        citySlug="statesville-nc"
        service="Roofing"
      />


      <LKNPartnershipsBlock city={"Statesville"} />
      <LKNDataCitations city={"Statesville"} />
      <CTASection
        title="Ready to Work with Statesville's Trusted Roofing Team?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your Iredell County home's needs."
      />
    </>
  );
}
