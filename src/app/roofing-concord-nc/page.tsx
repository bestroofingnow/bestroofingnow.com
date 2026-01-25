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
import { BreadcrumbSchema, FAQSchema, ServiceAreaPageSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Concord NC | Speedway Area Roofing Company | Best Roofing Now',
  description:
    'Looking for a trusted roofing company in Concord NC? Best Roofing Now serves Cabarrus County from our Charlotte headquarters. BBB A+ rated, veteran-owned. Expert roof repair and replacement near Charlotte Motor Speedway.',
  keywords: [
    'roofing concord nc',
    'roofers concord nc',
    'roofing company concord nc',
    'roof repair concord nc',
    'roof replacement concord nc',
    'concord roofing contractor',
    'cabarrus county roofers',
    'concord nc roofer',
    'roofing contractors near me concord',
    'speedway area roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-concord-nc`,
  },
  openGraph: {
    title: 'Roofing Concord NC | Speedway Area Roofing Company | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing company serving Concord NC and Cabarrus County from our Charlotte headquarters. Expert roofing services near Charlotte Motor Speedway.',
    url: `${SITE_CONFIG.url}/roofing-concord-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero5,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Concord NC - Best Roofing Now team',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Concord homes including shingle, metal, and tile roofing.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems for Concord businesses and industrial properties.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in Concord.',
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
    description: 'Free comprehensive inspections with detailed reports for Concord property owners.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance in Cabarrus County.',
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
    title: 'I-85 Access',
    description: 'Easy I-85 corridor access means fast response times for Concord roofing needs.',
  },
];

// Concord neighborhoods and areas
const concordAreas = [
  'Downtown Concord',
  'Afton Village',
  'Christenbury',
  'Skybrook',
  'Speedway Area',
  'Concord Mills',
  'Gibson Village',
  'Odell School Road',
  'Poplar Tent',
  'Cabarrus Arena',
  'Kannapolis Highway',
  'Bruton Smith Blvd',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Kannapolis', href: '/locations/kannapolis-nc' },
  { name: 'Harrisburg', href: '/locations/harrisburg-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Mint Hill', href: '/roofing-mint-hill-nc' },
  { name: 'Salisbury', href: '/locations/salisbury-nc' },
];

// FAQs specific to Concord
const faqs = [
  {
    question: 'Do you provide roofing services in Concord NC?',
    answer:
      'Yes! Best Roofing Now proudly serves Concord NC and all of Cabarrus County from our Charlotte headquarters, just 20 miles away via I-85. We provide complete roofing services throughout Concord, including the Speedway area, Concord Mills, and all surrounding neighborhoods.',
  },
  {
    question: 'How quickly can you respond to roofing emergencies in Concord?',
    answer:
      'Thanks to easy I-85 access, we can typically respond to Concord roofing emergencies within 45-60 minutes. For urgent situations like active leaks or storm damage, we offer 24/7 emergency services to protect your Cabarrus County home or business.',
  },
  {
    question: 'Do you work with commercial properties near Charlotte Motor Speedway?',
    answer:
      'Absolutely. We serve commercial properties throughout the Speedway area including hotels, restaurants, retail centers, and industrial facilities. Our commercial roofing services include TPO, EPDM, flat roofs, metal roofing, and more.',
  },
  {
    question: 'What roofing services do you offer in Concord NC?',
    answer:
      'We offer complete roofing services in Concord including residential roof repair, roof replacement, new construction roofing, commercial roofing, storm damage repair, emergency roofing services, free roof inspections, gutter services, and siding installation.',
  },
  {
    question: 'How much does a new roof cost in Concord NC?',
    answer:
      'The cost of a new roof in Concord typically ranges from $8,000 to $25,000 for most residential homes, depending on size, pitch, and material choice. Concord has many newer subdivisions with varying home sizes. We provide free, detailed estimates with no hidden fees.',
  },
  {
    question: 'Do you offer free roof inspections in Concord?',
    answer:
      'Yes, we offer completely free roof inspections for both residential and commercial properties throughout Concord and Cabarrus County. Our certified inspectors will thoroughly examine your roof and provide a detailed written report with photos.',
  },
  {
    question: 'What type of roofing is best for Concord homes?',
    answer:
      'Most Concord homes do well with architectural asphalt shingles like CertainTeed Landmark or GAF Timberline. For the growing number of custom homes in areas like Christenbury and Skybrook, we also install premium designer shingles, metal roofing, and specialty materials.',
  },
  {
    question: 'Do you help with insurance claims for storm damage in Cabarrus County?',
    answer:
      'Absolutely. Cabarrus County experiences significant storm activity including hail and high winds. We have extensive experience helping Concord homeowners with insurance claims and provide thorough documentation, adjuster coordination, and advocacy for fair settlements.',
  },
];

export default function RoofingConcordNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Concord NC', url: `${SITE_CONFIG.url}/roofing-concord-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Concord"
        state="NC"
        county="Cabarrus"
        distance={20}
        slug="concord-nc"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero5}
            alt="Professional roofing services in Concord NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Concord from our Charlotte headquarters</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Concord NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Speedway Area Roofing Company</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert roofing services for Cabarrus County homes and businesses
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now proudly serves Concord NC from our Charlotte location, with easy access via I-85.
              Our veteran-owned, BBB A+ rated company provides expert roofing services throughout Cabarrus County,
              from the Charlotte Motor Speedway area to the growing residential communities throughout Concord.
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

      {/* About Concord Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Your Trusted Roofer in Concord NC
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Concord is the heart of Cabarrus County and one of North Carolina's fastest-growing cities. Home to
                the Charlotte Motor Speedway, Concord Mills Mall, and a thriving mix of residential and commercial
                development, Concord offers a unique blend of small-town charm and big-city amenities. Located just
                20 miles from our Charlotte headquarters via I-85, we're perfectly positioned to serve Concord's
                diverse roofing needs.
              </p>
              <p>
                The city features everything from historic downtown properties to brand-new subdivisions like
                Christenbury, Skybrook, and Afton Village. Whether you own a classic home near downtown or a newly
                built house in one of Concord's master-planned communities, our certified installers have the
                expertise to handle any roofing project.
              </p>
              <p>
                Concord's commercial sector is equally diverse, from the hotels and businesses near the Speedway to
                the retail centers along Concord Mills Boulevard. Our commercial roofing team serves properties of
                all sizes, providing the same quality and attention to detail that has earned us our reputation
                throughout the Charlotte metro area.
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
              Complete Roofing Services in Concord NC
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
                Why Concord Property Owners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need a roofing company in Concord NC, you want a team that can handle both the established
                neighborhoods and the new construction that defines this growing city. Best Roofing Now delivers
                quality, reliability, and expertise for Cabarrus County property owners.
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
                src={IMAGES.realProjects.project3}
                alt="Professional roofing project completed in Concord NC area"
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
                Need a Roofer in Concord NC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Cabarrus County's trusted roofing experts.
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
              Serving All of Concord NC & Cabarrus County
            </h2>
            <p className="text-gray text-lg">
              Our roofing contractors serve homeowners and businesses throughout Concord and surrounding Cabarrus County.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Concord Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Concord Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {concordAreas.map((area) => (
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
                Concord Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Concord NC.
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
        title="Ready for Expert Roofing Services in Concord NC?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your needs and budget."
      />
    </>
  );
}
