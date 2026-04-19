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
  title: 'Roofers Sherrills Ford NC',
  description:
    'Looking for roofers in Sherrills Ford NC? Best Roofing Now is a BBB A+ rated, veteran-owned roofing company serving Sherrills Ford and Lake Norman. Licensed, insured, and trusted by Catawba County homeowners. Free estimates!',
  keywords: [
    'roofers sherrills ford nc',
    'sherrills ford roofers',
    'roofing company sherrills ford',
    'roofer near me sherrills ford',
    'lake norman roofers',
    'catawba county roofers',
    'sherrills ford roofing contractor',
    'best roofers sherrills ford nc',
    'local roofers sherrills ford',
    'roofing contractors near sherrills ford',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofers-sherrills-ford-nc`,
  },
  openGraph: {
    title: 'Roofers Sherrills Ford NC | Lake Norman Roofing Company | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofers serving Sherrills Ford NC and Lake Norman. Licensed and insured with 500+ roofs installed. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/roofers-sherrills-ford-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional roofers serving Sherrills Ford NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing for Sherrills Ford homes including shingle, metal, and tile systems.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, and flat roof solutions for Catawba County businesses and commercial properties.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast leak repairs, shingle fixes, and flashing work for Lake Norman area homes.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials and manufacturer warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage',
    description: 'Emergency storm damage restoration and insurance claim assistance for lakefront properties.',
    href: '/services/storm-damage',
  },
  {
    icon: Search,
    title: 'Roof Inspections',
    description: 'Free comprehensive roof inspections with detailed written reports and photos.',
    href: '/services/roof-inspection',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from homeowners across the region.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and discipline.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance coverage.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency response when Lake Norman storms cause roof damage.',
  },
];

// Sherrills Ford area communities
const localAreas = [
  'Sherrills Ford',
  'Lake Norman Waterfront',
  'Catawba County',
  'Terrell',
  'Claremont',
  'Maiden',
  'Conover',
  'Newton',
  'Hickory',
  'Denver',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Hickory', href: '/locations/hickory-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs
const faqs = [
  {
    question: 'Who are the best roofers in Sherrills Ford NC?',
    answer:
      'Best Roofing Now is the top-rated roofing company serving Sherrills Ford and Lake Norman. With a BBB A+ rating, over ' + SITE_CONFIG.googleReviewCount + ' five-star Google reviews, and veteran-owned values, we deliver exceptional quality for every project. Our certified installers are trained by CertainTeed, GAF, and Owens Corning.',
  },
  {
    question: 'Are you licensed and insured roofers in Sherrills Ford?',
    answer:
      'Yes, Best Roofing Now is fully licensed as a North Carolina roofing contractor and carries comprehensive general liability insurance. We are also bonded and maintain workers\' compensation coverage for our entire team. You can verify our credentials at any time.',
  },
  {
    question: 'How do I choose a roofer in Sherrills Ford NC?',
    answer:
      'When choosing a roofer in Sherrills Ford, look for proper NC licensing, liability insurance, manufacturer certifications, and a proven track record. Check BBB ratings and Google reviews. Best Roofing Now meets all these criteria and provides free written estimates with transparent pricing.',
  },
  {
    question: 'Do your roofers serve the Lake Norman waterfront?',
    answer:
      'Absolutely! We regularly complete roofing projects on Lake Norman waterfront properties in Sherrills Ford and surrounding areas. Lakefront homes require special attention to wind resistance and moisture protection, and our team has extensive experience with these unique challenges.',
  },
  {
    question: 'How much do roofers charge in Sherrills Ford NC?',
    answer:
      'Roofing costs in Sherrills Ford vary based on the scope of work. Repairs typically range from $200-$1,500, while full replacements range from $8,000-$25,000 depending on home size, materials, and complexity. Waterfront homes may require upgraded materials. We provide free estimates with no hidden fees.',
  },
  {
    question: 'Do you offer financing for roofing in Sherrills Ford?',
    answer:
      'Yes, we offer flexible financing options to make roofing affordable for Sherrills Ford homeowners. We work with trusted lending partners to provide competitive rates and manageable monthly payments. Ask about our financing during your free estimate.',
  },
  {
    question: 'How quickly can your roofers start work in Sherrills Ford?',
    answer:
      'For emergency repairs, we offer same-day and next-day service throughout the Lake Norman area. For scheduled projects like replacements, we typically begin within 1-2 weeks of signing. We prioritize Sherrills Ford and Catawba County homeowners with urgent needs.',
  },
  {
    question: 'What warranties do your Sherrills Ford roofers offer?',
    answer:
      'We provide comprehensive warranties including manufacturer material warranties (up to 50 years with GAF and CertainTeed) plus our own workmanship warranty. As certified installers, we can offer enhanced warranty packages that cover both materials and labor.',
  },
];

export default function RoofersSherrillsFordNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofers Sherrills Ford NC', url: `${SITE_CONFIG.url}/roofers-sherrills-ford-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofers-sherrills-ford-nc`}
        pageName="Roofers Sherrills Ford NC"
        city="Sherrills Ford"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero2}
            alt="Professional roofers serving Sherrills Ford NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Lake Norman&apos;s Trusted Roofers</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofers <br className="hidden md:block" />
              <span className="text-accent-light">Sherrills Ford NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Trusted roofers for Lake Norman&apos;s western shore and Catawba County
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is the premier roofing company serving Sherrills Ford and the Lake Norman waterfront community.
              Our certified roofers deliver expert craftsmanship for residential and commercial properties throughout
              Catawba County, backed by industry-leading warranties and a BBB A+ rating.
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
              Roofing Services We Offer in Sherrills Ford
            </h2>
            <p className="text-gray text-lg">
              From Lake Norman waterfront homes to Catawba County commercial properties, our certified roofers
              handle every roofing need with premium materials and expert installation.
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
                Why Sherrills Ford Trusts Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Sherrills Ford homeowners deserve roofers who understand the unique challenges of Lake Norman
                waterfront living. Our team brings years of experience, manufacturer certifications, and a
                commitment to quality that sets us apart.
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
                alt="Best Roofing Now - Trusted roofers serving Sherrills Ford NC"
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
                Need a Roofer in Sherrills Ford?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Lake Norman&apos;s most trusted roofing company.
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
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofers Serving Sherrills Ford & Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Our roofing team serves homeowners and businesses throughout Catawba County and the greater Lake Norman region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Local Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Sherrills Ford Area Communities</h3>
              <div className="flex flex-wrap gap-2">
                {localAreas.map((area) => (
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
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Sherrills Ford Roofer FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about finding roofers in Sherrills Ford NC.
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
        city="Denver"
        slug="roofers-sherrills-ford-nc"
      />

      <CityGeoSection
        city="Sherrills Ford"
        state="NC"
        citySlug="sherrills-ford-nc"
        service="Roofers"
      />


      <LKNPartnershipsBlock city={"Sherrills Ford"} />
      <LKNDataCitations city={"Sherrills Ford"} />
      <CTASection
        title="Ready to Hire Sherrills Ford's Top-Rated Roofers?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations for your Lake Norman home."
      />
    </>
  );
}
