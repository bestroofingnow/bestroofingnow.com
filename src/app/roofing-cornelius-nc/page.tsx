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
  title: 'Roofing Cornelius NC | 5-Star',
  description:
    'Looking for a trusted roofing company in Cornelius NC? Best Roofing Now serves Lake Norman area homeowners from our Charlotte headquarters. BBB A+ rated, veteran-owned. Free estimates for roof repair, replacement, and installation.',
  keywords: [
    'roofing cornelius nc',
    'roofing company cornelius nc',
    'cornelius roofers',
    'cornelius nc roofing contractor',
    'roof repair cornelius nc',
    'roof replacement cornelius nc',
    'lake norman roofing company',
    'roofers near cornelius nc',
    'best roofer cornelius',
    'cornelius roof inspection',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-cornelius-nc`,
  },
  openGraph: {
    title: 'Roofing Cornelius NC | Lake Norman Roofing Company | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing company serving Cornelius NC and Lake Norman. Licensed and insured with 500+ roofs installed. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/roofing-cornelius-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Cornelius NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Cornelius homes including shingle, metal, and tile roofing.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, and commercial roof repairs for Lake Norman businesses.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in Cornelius.',
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
    description: 'Free comprehensive inspections for Cornelius homeowners with detailed reports.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for Lake Norman.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Lake Norman homeowners.`,
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
    description: 'Round-the-clock emergency roofing services when Lake Norman residents need us most.',
  },
];

// Cornelius neighborhoods and areas
const corneliusAreas = [
  'Antiquity',
  'Bailey\'s Glen',
  'Cornelius Town Center',
  'Jetton Road',
  'Magnolia Estates',
  'Oakhurst',
  'Peninsula',
  'Sailview',
  'Smithville',
  'The Farms',
  'The Greens',
  'The Vineyard',
  'Westmoreland',
  'Jetton Park Area',
  'Lake Norman Waterfront',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Huntersville', href: '/roofing-huntersville-nc' },
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs specific to Cornelius
const faqs = [
  {
    question: 'Do you provide roofing services in Cornelius NC?',
    answer:
      'Yes! Best Roofing Now proudly serves Cornelius NC and the entire Lake Norman area from our Charlotte headquarters. We provide full roofing services including roof repair, replacement, inspection, and storm damage restoration to all Cornelius neighborhoods from Antiquity to the Peninsula.',
  },
  {
    question: 'How much does a new roof cost in Cornelius NC?',
    answer:
      'Roof replacement costs in Cornelius typically range from $8,000 to $25,000 for most homes, depending on roof size, pitch, material choice, and complexity. Many Lake Norman waterfront homes with larger square footage or steeper pitches may be on the higher end. We provide free, no-obligation estimates with transparent pricing.',
  },
  {
    question: 'What roofing materials do you recommend for Lake Norman homes?',
    answer:
      'For Cornelius and Lake Norman homes, we typically recommend architectural shingles from CertainTeed, GAF, or Owens Corning for their durability and wind resistance. Waterfront properties may benefit from impact-resistant shingles. Metal roofing is also popular for its longevity and ability to withstand lake-area weather conditions.',
  },
  {
    question: 'Do you handle storm damage claims for Cornelius homeowners?',
    answer:
      'Absolutely. Lake Norman sees its share of severe weather, and we have extensive experience helping Cornelius homeowners with insurance claims. We provide thorough damage documentation, meet with adjusters, and advocate for fair settlements. Our goal is to restore your roof with minimal hassle.',
  },
  {
    question: 'How long does a roof replacement take in Cornelius?',
    answer:
      'Most residential roof replacements in Cornelius are completed in 1-3 days. Larger Lake Norman homes or complex roof designs may take 3-5 days. We work efficiently while maintaining quality standards and always clean up thoroughly, respecting your property and HOA requirements.',
  },
  {
    question: 'Are you familiar with Cornelius HOA roofing requirements?',
    answer:
      'Yes, we work with many HOA communities throughout Cornelius and Lake Norman. We understand that neighborhoods like Antiquity, The Peninsula, and Bailey\'s Glen have specific architectural guidelines. We can help you choose approved materials and colors and provide documentation for HOA approval.',
  },
  {
    question: 'Do you offer free roof inspections in Cornelius?',
    answer:
      'Yes! We offer completely free roof inspections throughout Cornelius and Lake Norman. Our certified inspectors will thoroughly examine your roof and provide a detailed written report with photos. There\'s no obligation - just honest information to help you make informed decisions.',
  },
  {
    question: 'What areas near Cornelius do you also serve?',
    answer:
      'In addition to Cornelius, we serve all Lake Norman communities including Davidson, Huntersville, Mooresville, Denver, and surrounding areas. Our Charlotte headquarters allows us to efficiently serve the entire Lake Norman region with the same quality service.',
  },
];

export default function RoofingCorneliusNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Cornelius NC', url: `${SITE_CONFIG.url}/roofing-cornelius-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Cornelius"
        state="NC"
        slug="roofing-cornelius-nc"
        distance={20}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Professional roofing services in Cornelius NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Cornelius from Charlotte</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Cornelius NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Lake Norman Roofing Company</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Trusted roofing services for Lake Norman homeowners with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now serves Cornelius NC and the Lake Norman area from our Charlotte headquarters. Whether
              you need roof repairs for your waterfront home or a complete replacement in Antiquity or the Peninsula,
              our certified team delivers exceptional quality backed by industry-leading warranties.
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
              Complete Roofing Services in Cornelius NC
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to complete roof replacements, our certified contractors serve all of Cornelius and
              Lake Norman with expert craftsmanship and premium materials.
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
                Why Cornelius Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need a roofing company serving Cornelius NC, you want experts who understand Lake Norman homes.
                Best Roofing Now has built our reputation on honesty, quality workmanship, and putting customers first.
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
                alt="Completed roofing project in Cornelius NC by Best Roofing Now"
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

      {/* Local Area Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving All of Cornelius & Lake Norman
            </h2>
            <p className="text-gray text-lg">
              From waterfront estates to family neighborhoods, we provide expert roofing services throughout Cornelius
              and nearby Lake Norman communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Cornelius Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Cornelius Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {corneliusAreas.map((area) => (
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
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Lake Norman Cities We Serve</h3>
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

          {/* Lake Norman Context */}
          <div className="mt-12 bg-primary/5 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Lake Norman's Trusted Roofing Experts
            </h3>
            <p className="text-gray mb-4">
              Cornelius sits at the heart of Lake Norman, North Carolina's largest man-made lake. Our team understands
              the unique roofing challenges that come with lakefront living - from increased moisture exposure to the
              specific architectural styles popular in communities like The Peninsula and Antiquity.
            </p>
            <p className="text-gray mb-4">
              Just minutes from Davidson to the north and Huntersville to the south, Cornelius homeowners enjoy the
              perfect blend of small-town charm and proximity to Charlotte. We're proud to serve this community from
              our Charlotte headquarters, providing the same exceptional service we've delivered to {SITE_CONFIG.roofsInstalled}+
              homeowners across the region.
            </p>
            <p className="text-gray">
              Whether your home overlooks Lake Norman or you're in one of Cornelius's established neighborhoods, Best
              Roofing Now delivers quality roofing services backed by our BBB A+ rating and manufacturer certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Need a Roofing Company in Cornelius NC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Lake Norman's most trusted roofing company.
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
                Cornelius Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Cornelius NC and Lake Norman.
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
        city="Cornelius"
        slug="roofing-cornelius-nc"
        count={4}
        title="Recent Roofing Projects in Cornelius, NC"
        subtitle="Browse completed roofing projects from the Cornelius area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-cornelius-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Cornelius"

        state="NC"

        citySlug="cornelius-nc"

        service="Roofing"

      />

      <CTASection
        title="Ready for Expert Roofing in Cornelius NC?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your Lake Norman home."
      />
    </>
  );
}
