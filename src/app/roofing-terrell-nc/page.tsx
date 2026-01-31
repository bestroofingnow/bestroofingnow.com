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

export const metadata: Metadata = {
  title: 'Roofing Terrell NC | West Lake Norman Roofers | Best Roofing Now',
  description:
    'Looking for roofing services in Terrell NC? Best Roofing Now serves Terrell and West Lake Norman from our Charlotte headquarters. BBB A+ rated, veteran-owned. Free estimates for roof repair, replacement, and installation.',
  keywords: [
    'roofing terrell nc',
    'roof repair terrell nc',
    'roofers terrell nc',
    'roof replacement terrell',
    'west lake norman roofing',
    'terrell nc roof contractor',
    'roofing company terrell nc',
    'catawba county roofers',
    'lake norman roofers',
    'terrell nc roofing services',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-terrell-nc`,
  },
  openGraph: {
    title: 'Roofing Terrell NC | West Lake Norman Roofers | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving Terrell NC and West Lake Norman. Licensed and insured with 500+ roofs installed. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/roofing-terrell-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Terrell NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Terrell homes including shingle, metal, and tile roofing.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, and commercial roof repairs for local businesses.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in the Terrell area.',
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
    description: 'Free comprehensive inspections with detailed reports for Terrell homeowners.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for West Lake Norman.',
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
    description: 'Round-the-clock emergency roofing services when storms strike the Lake Norman area.',
  },
];

// Terrell area communities
const localAreas = [
  'Terrell',
  'West Lake Norman',
  'Catawba County',
  'Sherrills Ford',
  'Claremont',
  'Maiden',
  'Conover',
  'Newton',
  'Denver',
  'Lincolnton',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Sherrills Ford', href: '/roofing-sherrills-ford-nc' },
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Hickory', href: '/locations/hickory-nc' },
  { name: 'Newton', href: '/locations/newton-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs about roofing in Terrell
const faqs = [
  {
    question: 'Do you provide roofing services in Terrell NC?',
    answer:
      'Yes! Best Roofing Now proudly serves Terrell and all of the West Lake Norman area from our Charlotte headquarters. We regularly complete roofing projects throughout this rural Catawba County community. Our team is familiar with local building requirements and the unique needs of properties in the Terrell area.',
  },
  {
    question: 'How far is Terrell from your Charlotte location?',
    answer:
      'Terrell is approximately 30 miles from our Charlotte headquarters. This is well within our primary service area, and we have completed numerous roofing projects in Terrell and surrounding communities. Distance is never an issue - we provide the same quality service and response times throughout our Lake Norman service area.',
  },
  {
    question: 'What roofing considerations are important for rural Terrell properties?',
    answer:
      'Rural properties in Terrell often have larger roof areas, may lack nearby tree coverage for wind protection, and can be more exposed to severe weather. We recommend high-quality architectural shingles with excellent wind ratings or metal roofing for superior durability. Proper ventilation is also crucial for homes without the shade of mature trees.',
  },
  {
    question: 'How much does a new roof cost in Terrell NC?',
    answer:
      'Roof replacement costs in Terrell typically range from $8,000-$25,000 for most homes, depending on size, pitch, material choice, and complexity. Rural properties with larger roofs may be at the higher end of this range. We provide free, no-obligation estimates with transparent pricing for Terrell homeowners.',
  },
  {
    question: 'Do you offer free roof inspections in Terrell?',
    answer:
      'Absolutely! Best Roofing Now offers completely free roof inspections throughout Terrell and the West Lake Norman area. Our certified inspectors will thoroughly examine your roof, identify any issues, and provide a detailed written report with photos. There is no obligation to hire us after the inspection.',
  },
  {
    question: 'Can you help with insurance claims for storm damage in Terrell?',
    answer:
      'Yes, we have extensive experience helping Terrell and Lake Norman homeowners with storm damage insurance claims. This area sees its share of severe weather, and we provide thorough documentation, meet with adjusters, and advocate for fair settlements. Many roofs qualify for insurance coverage after storm events.',
  },
  {
    question: 'What roofing materials work best for Terrell homes?',
    answer:
      'For Terrell properties, we often recommend architectural shingles with high wind ratings (Class F or H) or metal roofing for superior durability and longevity. Metal roofing is particularly popular in rural areas for its low maintenance and 50+ year lifespan. Our team will assess your specific property and recommend the best materials for your needs.',
  },
  {
    question: 'How quickly can you respond to roofing emergencies in Terrell?',
    answer:
      'We offer 24/7 emergency roofing services throughout the Lake Norman area including Terrell. For emergencies like active leaks or storm damage, we typically respond within 1-4 hours to secure your property and prevent further damage. Call us anytime at (704) 605-6047 for emergency service.',
  },
];

export default function RoofingTerrellNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Terrell NC', url: `${SITE_CONFIG.url}/roofing-terrell-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Professional roofing services in Terrell NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Terrell from Charlotte</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Terrell NC
              <br className="hidden md:block" />
              <span className="text-accent-light">West Lake Norman Roofers</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Serving Terrell from our Charlotte headquarters with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert roofing services to Terrell and the West Lake Norman community.
              From rural properties to lakeside homes, our certified team delivers exceptional quality backed by
              industry-leading warranties.
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
              Complete Roofing Services in Terrell NC
            </h2>
            <p className="text-gray text-lg">
              From rural properties to Lake Norman homes, our certified contractors handle all your roofing
              needs with expert craftsmanship and premium materials.
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
                Why Terrell Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need a roofing contractor in Terrell, you want a company you can trust. Best Roofing
                Now has built our reputation on honesty, quality workmanship, and putting customers first throughout
                the Lake Norman region.
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
                src={IMAGES.realProjects.drone2}
                alt="Best Roofing Now - Trusted roofing contractor serving Terrell NC"
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
                Need a Roofing Contractor in Terrell?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from the Lake Norman area's most trusted roofing company.
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
              Roofing Services for Terrell & West Lake Norman
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Terrell is a quiet, rural community located on the western side of Lake Norman in Catawba County.
                Known for its peaceful atmosphere and proximity to the lake, Terrell offers residents a blend of
                country living with access to Lake Norman recreation. Best Roofing Now is proud to serve this
                community from our Charlotte headquarters, providing the same exceptional roofing services that
                have earned us a BBB A+ rating and over {SITE_CONFIG.googleReviewCount} five-star reviews.
              </p>
              <p>
                Rural properties in Terrell often present unique roofing considerations. With larger lot sizes,
                many homes have expansive roof areas that require expert installation. The more open terrain can
                also mean increased wind exposure compared to densely developed areas. Our team understands these
                factors and recommends appropriate solutions including high-wind-rated shingles and metal roofing
                systems designed to withstand the elements.
              </p>
              <p>
                Whether you have a family home in Terrell, a Lake Norman retreat, or property elsewhere in Catawba
                County, Best Roofing Now delivers exceptional workmanship backed by industry-leading warranties
                from manufacturers like CertainTeed, GAF, and Owens Corning.
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
              Serving Terrell & Surrounding Lake Norman Areas
            </h2>
            <p className="text-gray text-lg">
              Our roofing contractors serve homeowners and businesses throughout Catawba County and the Lake Norman region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Local Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Terrell Area Communities</h3>
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
              Our Work Across the Lake Norman Region
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects throughout Terrell and Lake Norman.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project2}
                alt="Completed residential roof replacement in Terrell NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation in Lake Norman area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof project in Catawba County"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project4}
                alt="Professional roofing work in Terrell area"
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
                Terrell Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Terrell and West Lake Norman.
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

      {/* Final CTA */}
      <CTASection
        title="Ready to Work with Terrell's Trusted Roofing Team?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your property's needs."
      />
    </>
  );
}
