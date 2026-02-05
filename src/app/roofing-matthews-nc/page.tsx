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

export const metadata: Metadata = {
  title: 'Roofing Matthews NC | South Charlotte Roofing Company | Best Roofing Now',
  description:
    'Looking for a trusted roofing company in Matthews NC? Best Roofing Now serves Matthews from our Charlotte headquarters. BBB A+ rated, veteran-owned. Free estimates for roof repair, replacement, and installation in South Charlotte.',
  keywords: [
    'roofing matthews nc',
    'roofing company matthews nc',
    'roofers matthews nc',
    'roof repair matthews nc',
    'roof replacement matthews nc',
    'matthews roofing contractor',
    'south charlotte roofing company',
    'matthews nc roofer',
    'roofing contractors near me matthews',
    'best roofer matthews nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-matthews-nc`,
  },
  openGraph: {
    title: 'Roofing Matthews NC | South Charlotte Roofing Company | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing company serving Matthews NC from our Charlotte headquarters. Free estimates for all roofing services in the South Charlotte area.',
    url: `${SITE_CONFIG.url}/roofing-matthews-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Matthews NC - Best Roofing Now team',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Matthews homes including shingle, metal, and tile roofing.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, and commercial roof repairs for Matthews businesses.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in Matthews.',
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
    description: 'Free comprehensive inspections with detailed reports for Matthews homeowners.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance in Matthews.',
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
    title: 'Fast Response Time',
    description: 'Serving Matthews from nearby Charlotte means quick response for your roofing needs.',
  },
];

// Matthews neighborhoods and areas
const matthewsAreas = [
  'Downtown Matthews',
  'Sardis Forest',
  'Crestdale',
  'Matthews Township',
  'Weddington Chase',
  'Fullwood',
  'Crown Point',
  'Matthews Crossing',
  'Plantation Acres',
  'McKee Farms',
  'Stumptown',
  'Saddlewood',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Mint Hill', href: '/roofing-mint-hill-nc' },
  { name: 'Indian Trail', href: '/roofing-indian-trail-nc' },
  { name: 'Stallings', href: '/locations/stallings-nc' },
  { name: 'Weddington', href: '/locations/weddington-nc' },
  { name: 'Monroe', href: '/locations/monroe-nc' },
  { name: 'Pineville', href: '/roofing-pineville-nc' },
  { name: 'Waxhaw', href: '/locations/waxhaw-nc' },
];

// FAQs specific to Matthews
const faqs = [
  {
    question: 'Do you provide roofing services in Matthews NC?',
    answer:
      'Yes! Best Roofing Now proudly serves Matthews NC from our Charlotte headquarters, just 10 miles away. We provide complete roofing services including roof repair, replacement, installation, and inspections throughout Matthews and the surrounding South Charlotte communities.',
  },
  {
    question: 'How quickly can you respond to roofing emergencies in Matthews?',
    answer:
      'Our proximity to Matthews allows us to respond quickly to roofing emergencies. Typically, we can be on-site in Matthews within 30-45 minutes for urgent situations like active leaks or storm damage. We offer 24/7 emergency services.',
  },
  {
    question: 'What roofing services do you offer in Matthews NC?',
    answer:
      'We offer complete roofing services in Matthews including residential roof repair, roof replacement, new construction roofing, commercial roofing, storm damage repair, emergency roofing services, free roof inspections, gutter services, and siding installation.',
  },
  {
    question: 'How much does a new roof cost in Matthews NC?',
    answer:
      'The cost of a new roof in Matthews typically ranges from $8,000 to $25,000 for most homes, depending on size, pitch, and material choice. Matthews homes often have larger lots and multi-level designs that can affect pricing. We provide free, detailed estimates with no hidden fees.',
  },
  {
    question: 'Do you offer free roof inspections in Matthews?',
    answer:
      'Yes, we offer completely free roof inspections throughout Matthews and the South Charlotte area. Our certified inspectors will thoroughly examine your roof and provide a detailed written report with photos. There is no obligation to hire us afterward.',
  },
  {
    question: 'Are you licensed and insured to work in Matthews NC?',
    answer:
      'Yes, Best Roofing Now is fully licensed to perform roofing work in North Carolina and carries comprehensive general liability insurance and workers compensation coverage. We are happy to provide proof of insurance upon request.',
  },
  {
    question: 'What type of roofing is best for Matthews homes?',
    answer:
      'Most Matthews homes do well with architectural asphalt shingles like CertainTeed Landmark or GAF Timberline, which offer excellent durability and curb appeal for the family-oriented neighborhoods. Metal roofing is also popular for its longevity and energy efficiency in our hot summers.',
  },
  {
    question: 'Do you help with insurance claims for storm damage in Matthews?',
    answer:
      'Absolutely. We have extensive experience helping Matthews homeowners with insurance claims for storm damage. We provide detailed documentation, meet with adjusters, and advocate for fair settlements. Many Matthews roofs qualify for insurance coverage after hail and wind events.',
  },
];

export default function RoofingMatthewsNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Matthews NC', url: `${SITE_CONFIG.url}/roofing-matthews-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Matthews"
        state="NC"
        county="Mecklenburg"
        distance={10}
        slug="matthews-nc"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Professional roofing services in Matthews NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Matthews from our Charlotte headquarters</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Matthews NC
              <br className="hidden md:block" />
              <span className="text-accent-light">South Charlotte Roofing Company</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Trusted roofing services for Matthews families and businesses
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now proudly serves Matthews NC from our Charlotte location, just 10 miles away. Our
              veteran-owned, BBB A+ rated company provides expert roofing services to this thriving family community
              with fast response times and exceptional craftsmanship.
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

      {/* About Matthews Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Your Trusted Roofer in Matthews NC
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Matthews is one of South Charlotte's most desirable communities, known for its excellent schools,
                family-friendly neighborhoods, and charming downtown area. Located just 10 miles from our Charlotte
                headquarters, we're perfectly positioned to serve Matthews homeowners with fast, reliable roofing
                services.
              </p>
              <p>
                The homes in Matthews range from established neighborhoods with mature trees to newer developments
                with modern architecture. Whether you own a classic ranch home in Sardis Forest or a newer construction
                in Matthews Crossing, our certified installers have the expertise to handle any roofing project.
              </p>
              <p>
                As a family-focused community, Matthews homeowners value quality, reliability, and honest service -
                exactly what Best Roofing Now delivers. We treat every Matthews home as if it were our own, providing
                the same level of care and attention to detail that has earned us our BBB A+ rating and 5-star reviews.
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
              Complete Roofing Services in Matthews NC
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to complete roof replacements, our certified contractors handle all your roofing
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
                Why Matthews Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need a roofing company in Matthews NC, you want a team you can trust. Best Roofing Now
                has built our reputation on honesty, quality workmanship, and putting customers first - values that
                resonate with the Matthews community.
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
                alt="Professional roofing project completed in Matthews NC area"
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
                Need a Roofer in Matthews NC?
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

      {/* Service Areas Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving All of Matthews NC & Surrounding Areas
            </h2>
            <p className="text-gray text-lg">
              Our roofing contractors serve homeowners throughout Matthews and nearby South Charlotte communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Matthews Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Matthews Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {matthewsAreas.map((area) => (
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
                Matthews Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Matthews NC.
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
        city="Matthews"
        slug="roofing-matthews-nc"
        count={4}
        title="Recent Roofing Projects in Matthews, NC"
        subtitle="Browse completed roofing projects from the Matthews area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-matthews-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for Expert Roofing Services in Matthews NC?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your needs and budget."
      />
    </>
  );
}
