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
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Gastonia NC | Gaston County Roofers | Best Roofing Now',
  description:
    'Looking for roofing services in Gastonia NC? Best Roofing Now serves Gastonia and Gaston County from our Charlotte headquarters. BBB A+ rated, veteran-owned. Free estimates for roof repair, replacement, and installation along the I-85 corridor.',
  keywords: [
    'roofing gastonia nc',
    'roofing company gastonia nc',
    'roofers gastonia nc',
    'roof repair gastonia nc',
    'roof replacement gastonia',
    'gaston county roofers',
    'gastonia roof contractor',
    'i-85 corridor roofing',
    'gastonia nc roofing services',
    'best roofer gastonia nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-gastonia-nc`,
  },
  openGraph: {
    title: 'Roofing Gastonia NC | Gaston County Roofers | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving Gastonia NC and Gaston County. Licensed and insured with 500+ roofs installed. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/roofing-gastonia-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero6,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Gastonia NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Gastonia homes including shingle, metal, and tile roofing.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, and commercial roof repairs for Gaston County businesses.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage throughout Gastonia.',
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
    description: 'Free comprehensive inspections with detailed reports for Gastonia homeowners.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for Gaston County properties.',
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
    description: 'Round-the-clock emergency roofing services when storms strike Gaston County.',
  },
];

// Gastonia area communities
const localAreas = [
  'Gastonia',
  'Downtown Gastonia',
  'Ranlo',
  'Lowell',
  'McAdenville',
  'Cramerton',
  'Belmont',
  'Mt Holly',
  'Dallas',
  'Bessemer City',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Belmont', href: '/locations/belmont-nc' },
  { name: 'Mt Holly', href: '/locations/mt-holly-nc' },
  { name: 'Kings Mountain', href: '/locations/kings-mountain-nc' },
  { name: 'Cherryville', href: '/locations/cherryville-nc' },
  { name: 'Shelby', href: '/locations/shelby-nc' },
  { name: 'Lincolnton', href: '/locations/lincolnton-nc' },
  { name: 'Lake Wylie', href: '/locations/lake-wylie-sc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs about roofing in Gastonia
const faqs = [
  {
    question: 'Do you provide roofing services in Gastonia NC?',
    answer:
      'Yes! Best Roofing Now proudly serves Gastonia and all of Gaston County from our Charlotte headquarters. Gastonia is approximately 20 miles from our office via I-85, making it a convenient and frequent service area for our team. We complete numerous roofing projects throughout Gastonia and the surrounding communities.',
  },
  {
    question: 'How far is Gastonia from your Charlotte location?',
    answer:
      'Gastonia is approximately 20 miles west of Charlotte along the I-85 corridor. This direct highway connection means quick response times and easy access for our team. We regularly serve Gastonia customers and consider Gaston County a primary service area.',
  },
  {
    question: 'What makes Gastonia roofing different from other areas?',
    answer:
      'Gastonia and Gaston County have a diverse housing stock ranging from historic downtown homes to newer suburban developments. The area also sees significant industrial and commercial construction along the I-85 corridor. Our team is experienced with all building types and understands the specific needs of Gaston County properties.',
  },
  {
    question: 'How much does a new roof cost in Gastonia NC?',
    answer:
      'Roof replacement costs in Gastonia typically range from $8,000-$25,000 for most homes, depending on size, pitch, material choice, and complexity. Gastonia often has more affordable housing than Charlotte proper, which can translate to lower roofing costs. We provide free, no-obligation estimates with transparent pricing.',
  },
  {
    question: 'Do you offer free roof inspections in Gastonia?',
    answer:
      'Absolutely! Best Roofing Now offers completely free roof inspections throughout Gastonia and Gaston County. Our certified inspectors will thoroughly examine your roof, identify any issues, and provide a detailed written report with photos. There is no obligation to hire us after the inspection.',
  },
  {
    question: 'Can you help with insurance claims for storm damage in Gastonia?',
    answer:
      'Yes, we have extensive experience helping Gastonia and Gaston County homeowners with storm damage insurance claims. This area sees significant severe weather including hail, high winds, and occasional tornado activity. We provide thorough documentation, meet with adjusters, and advocate for fair settlements.',
  },
  {
    question: 'Do you work with commercial properties along the I-85 corridor?',
    answer:
      'Yes, we provide commercial roofing services for businesses throughout Gastonia and along the I-85 corridor. This includes TPO, EPDM, flat roof systems, metal roofing, and commercial roof repairs. We understand that businesses need minimal disruption and can often work around your operating hours.',
  },
  {
    question: 'How quickly can you respond to roofing emergencies in Gastonia?',
    answer:
      'We offer 24/7 emergency roofing services throughout Gastonia and Gaston County. For emergencies like active leaks or storm damage, we typically respond within 1-4 hours to secure your property and prevent further damage. Call us anytime at (704) 605-6047 for emergency service.',
  },
];

export default function RoofingGastoniaNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Gastonia NC', url: `${SITE_CONFIG.url}/roofing-gastonia-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero6}
            alt="Professional roofing services in Gastonia NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Gastonia from Charlotte</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Gastonia NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Gaston County Roofers</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Serving Gastonia from our Charlotte headquarters with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert roofing services to Gastonia and all of Gaston County. From residential
              neighborhoods to commercial properties along the I-85 corridor, our certified team delivers exceptional
              quality backed by industry-leading warranties.
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
              Complete Roofing Services in Gastonia NC
            </h2>
            <p className="text-gray text-lg">
              From downtown Gastonia to commercial properties along I-85, our certified contractors
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
                Why Gastonia Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need a roofing contractor in Gastonia, you want a company you can trust. Best Roofing
                Now has built our reputation on honesty, quality workmanship, and putting customers first throughout
                Gaston County and the greater Charlotte region.
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
                src={IMAGES.realProjects.project4}
                alt="Best Roofing Now - Trusted roofing contractor serving Gastonia NC"
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
                Need a Roofing Contractor in Gastonia?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Gaston County's most trusted roofing company.
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
              Roofing Services for Gastonia & Gaston County
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Gastonia is the largest city in Gaston County and serves as the county seat. Located along the I-85
                corridor west of Charlotte, Gastonia has a rich history as a textile manufacturing center and continues
                to grow as part of the greater Charlotte metropolitan area. Best Roofing Now is proud to serve Gastonia
                homeowners and businesses from our Charlotte headquarters, providing exceptional roofing services that
                have earned us a BBB A+ rating and over {SITE_CONFIG.googleReviewCount} five-star reviews.
              </p>
              <p>
                Gaston County offers diverse roofing opportunities, from historic homes in downtown Gastonia to newer
                suburban developments and commercial properties along the I-85 corridor. The area's industrial heritage
                means many buildings have larger commercial roof systems that require specialized expertise. Our team
                is experienced with all types of roofing, from traditional residential shingles to TPO and EPDM
                commercial systems.
              </p>
              <p>
                Whether you own a home in one of Gastonia's established neighborhoods, a newer development in the
                growing suburbs, or a commercial property along I-85, Best Roofing Now delivers exceptional workmanship
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
              Serving Gastonia & Surrounding Gaston County Areas
            </h2>
            <p className="text-gray text-lg">
              Our roofing contractors serve homeowners and businesses throughout Gaston County and the western Charlotte metro.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Local Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Gastonia Area Communities</h3>
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
              Our Work Across Gaston County
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects throughout Gastonia and Gaston County.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project9}
                alt="Completed residential roof replacement in Gastonia NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation in Gaston County"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof project in Gastonia"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project10}
                alt="Professional roofing work in Gastonia area"
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
                Gastonia Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Gastonia and Gaston County.
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
        city="Gastonia"
        slug="roofing-gastonia-nc"
        count={4}
        title="Recent Roofing Projects in Gastonia, NC"
        subtitle="Browse completed roofing projects from the Gastonia area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-gastonia-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready to Work with Gastonia's Trusted Roofing Team?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your Gaston County property's needs."
      />
    </>
  );
}
