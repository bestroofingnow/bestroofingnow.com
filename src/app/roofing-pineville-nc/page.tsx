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
import { BreadcrumbSchema, FAQSchema, ServiceAreaPageSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Pineville NC | Top Rated',
  description:
    'Looking for a trusted roofing company in Pineville NC? Best Roofing Now serves the Carolina Place area from our Charlotte headquarters. BBB A+ rated, veteran-owned. Free estimates for roof repair and replacement.',
  keywords: [
    'roofing pineville nc',
    'roofing company pineville nc',
    'roofers pineville nc',
    'roof repair pineville nc',
    'roof replacement pineville nc',
    'pineville roofing contractor',
    'carolina place area roofers',
    'pineville nc roofer',
    'roofing contractors near me pineville',
    'best roofer pineville nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-pineville-nc`,
  },
  openGraph: {
    title: 'Roofing Pineville NC | Carolina Place Area Roofers | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing company serving Pineville NC and the Carolina Place area from our Charlotte headquarters. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/roofing-pineville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero4,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Pineville NC - Best Roofing Now team',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Pineville homes including shingle, metal, and tile roofing.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems for Pineville businesses near Carolina Place Mall.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in Pineville.',
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
    description: 'Free comprehensive inspections with detailed reports for Pineville property owners.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance in Pineville.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte area homeowners.`,
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
    title: 'Convenient I-485 Access',
    description: 'Easy access via I-485 means fast response times for Pineville roofing needs.',
  },
];

// Pineville neighborhoods and areas
const pinevilleAreas = [
  'Carolina Place',
  'McMullen Creek',
  'Park Crossing',
  'Pineville Commons',
  'Pineville-Matthews Road',
  'Lancaster Highway',
  'Johnston Road Area',
  'Carmel Commons',
  'Waverly',
  'Sterling',
  'Pinecrest',
  'The Palisades',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Matthews', href: '/roofing-matthews-nc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
  { name: 'Indian Land, SC', href: '/locations/indian-land-sc' },
  { name: 'Ballantyne', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Waxhaw', href: '/locations/waxhaw-nc' },
  { name: 'Weddington', href: '/locations/weddington-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
];

// FAQs specific to Pineville
const faqs = [
  {
    question: 'Do you provide roofing services in Pineville NC?',
    answer:
      'Yes! Best Roofing Now proudly serves Pineville NC from our Charlotte headquarters, just 12 miles away. We provide complete roofing services throughout Pineville, including the Carolina Place area, I-485 corridor, and all surrounding neighborhoods.',
  },
  {
    question: 'How quickly can you respond to roofing emergencies in Pineville?',
    answer:
      'Thanks to easy I-485 access, we can typically respond to Pineville roofing emergencies within 30-45 minutes. For urgent situations like active leaks or storm damage, we offer 24/7 emergency services to protect your home or business.',
  },
  {
    question: 'Do you provide commercial roofing services near Carolina Place Mall?',
    answer:
      'Absolutely. We serve commercial properties throughout Pineville including the Carolina Place Mall area, shopping centers, office buildings, and retail spaces. Our commercial roofing services include TPO, EPDM, flat roofs, and metal roofing systems.',
  },
  {
    question: 'What roofing services do you offer in Pineville NC?',
    answer:
      'We offer complete roofing services in Pineville including residential roof repair, roof replacement, new construction roofing, commercial roofing, storm damage repair, emergency roofing services, free roof inspections, gutter services, and siding installation.',
  },
  {
    question: 'How much does a new roof cost in Pineville NC?',
    answer:
      'The cost of a new roof in Pineville typically ranges from $8,000 to $25,000 for most residential homes, depending on size, pitch, and material choice. Commercial properties vary based on size and roof system type. We provide free, detailed estimates with no hidden fees.',
  },
  {
    question: 'Do you offer free roof inspections in Pineville?',
    answer:
      'Yes, we offer completely free roof inspections for both residential and commercial properties throughout Pineville. Our certified inspectors will thoroughly examine your roof and provide a detailed written report with photos. There is no obligation afterward.',
  },
  {
    question: 'What type of roofing is best for Pineville homes?',
    answer:
      'Most Pineville homes do well with architectural asphalt shingles like CertainTeed Landmark or GAF Timberline, offering durability and aesthetic appeal. For energy efficiency in our hot summers, metal roofing and reflective shingles are increasingly popular options.',
  },
  {
    question: 'Do you work with South Carolina clients near Pineville?',
    answer:
      'Yes! Pineville\'s location near the NC/SC border means we frequently serve clients in Fort Mill, Indian Land, and other nearby South Carolina communities. We\'re fully licensed for roofing work in both North Carolina and South Carolina.',
  },
];

export default function RoofingPinevilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Pineville NC', url: `${SITE_CONFIG.url}/roofing-pineville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Pineville"
        state="NC"
        county="Mecklenburg"
        distance={12}
        slug="pineville-nc"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero4}
            alt="Professional roofing services in Pineville NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Pineville from our Charlotte headquarters</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Pineville NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Carolina Place Area Roofers</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Trusted roofing for homes and businesses along the I-485 corridor
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now proudly serves Pineville NC from our Charlotte location, with easy access via I-485.
              Our veteran-owned, BBB A+ rated company provides expert roofing services for residential and commercial
              properties throughout the Carolina Place area and surrounding neighborhoods.
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

      {/* About Pineville Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Your Trusted Roofer in Pineville NC
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Pineville is a vibrant Charlotte suburb known for its excellent shopping at Carolina Place Mall,
                convenient access to I-485, and mix of residential and commercial properties. Located just 12 miles
                from our Charlotte headquarters, we're perfectly positioned to serve Pineville with fast, reliable
                roofing services.
              </p>
              <p>
                The community features a diverse mix of housing from established neighborhoods to newer developments,
                along with a thriving commercial sector. Whether you own a home near McMullen Creek or a business
                property along Carolina Place Parkway, our team has the expertise to handle any roofing project.
              </p>
              <p>
                Pineville's location near the South Carolina border means many residents and businesses benefit from
                our cross-state service capability. We're fully licensed in both North Carolina and South Carolina,
                making us a convenient choice for property owners throughout the greater Pineville area.
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
              Complete Roofing Services in Pineville NC
            </h2>
            <p className="text-gray text-lg">
              From residential repairs to commercial installations, our certified contractors handle all your roofing
              needs with expert craftsmanship and premium materials.
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

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Pineville Property Owners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need a roofing company in Pineville NC, you want a team you can trust for both residential
                and commercial projects. Best Roofing Now delivers the quality, reliability, and service that
                Pineville property owners expect.
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
                src={IMAGES.realProjects.project2}
                alt="Professional roofing project completed in Pineville NC area"
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
                Need a Roofer in Pineville NC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from the Carolina Place area's most trusted roofing company.
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
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving All of Pineville NC & Surrounding Areas
            </h2>
            <p className="text-gray text-lg">
              Our roofing contractors serve homeowners and businesses throughout Pineville and the Carolina Place area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pineville Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Pineville Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {pinevilleAreas.map((area) => (
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
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
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
                Pineville Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Pineville NC.
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
        pageType="location"
        city="Pineville"
        slug="roofing-pineville-nc"
        count={4}
        title="Recent Roofing Projects in Pineville, NC"
        subtitle="Browse completed roofing projects from the Pineville area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-pineville-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Pineville"

        state="NC"

        citySlug="pineville-nc"

        service="Roofing"

      />

      <CTASection
        title="Ready for Expert Roofing Services in Pineville NC?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your needs and budget."
      />
    </>
  );
}
