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
  Building2,
  Factory,
  Warehouse,
  MapPin,
  FileCheck,
  Layers,
  Thermometer,
  DollarSign,
  Waves,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Commercial Roofing Lake Wylie SC | Flat Roof & TPO Experts',
  description:
    'Expert commercial roofing in Lake Wylie SC. TPO, EPDM, flat roofs, metal roofing for waterfront businesses, Tega Cay & River District. BBB A+ rated, veteran-owned. Free estimates!',
  keywords: [
    'commercial roofing lake wylie sc',
    'commercial roof repair lake wylie',
    'flat roof lake wylie sc',
    'commercial roofing contractors lake wylie',
    'tpo roofing lake wylie sc',
    'epdm roofing lake wylie',
    'industrial roofing lake wylie sc',
    'warehouse roofing lake wylie',
    'commercial flat roof lake wylie sc',
    'metal roofing commercial lake wylie',
    'commercial roofer lake wylie sc',
    'business roofing lake wylie sc',
    'tega cay commercial roofing',
    'york county commercial roofer',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-roofing-lake-wylie-sc`,
  },
  openGraph: {
    title: 'Commercial Roofing Lake Wylie SC | Flat Roof & TPO Experts',
    description:
      'Expert commercial roofing in Lake Wylie SC. TPO, EPDM, flat roofing, metal roofing for waterfront businesses & York County. BBB A+ rated. Free estimates!',
    url: `${SITE_CONFIG.url}/commercial-roofing-lake-wylie-sc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.warehouse,
        width: 1200,
        height: 630,
        alt: 'Commercial roofing Lake Wylie SC - Best Roofing Now',
      },
    ],
  },
};

// Commercial roofing services
const commercialServices = [
  {
    icon: Layers,
    title: 'TPO Roofing Systems',
    description: 'Energy-efficient thermoplastic membranes ideal for Lake Wylie commercial buildings and lakefront businesses.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'EPDM Roofing',
    description: 'Durable synthetic rubber membrane roofing with excellent weather resistance for warehouses and retail.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Building2,
    title: 'Flat Roof Systems',
    description: 'Complete flat roof installation and repair for office parks, retail, and industrial buildings in the Lake Wylie corridor.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Factory,
    title: 'Metal Roofing',
    description: 'Standing seam and corrugated metal roofing for commercial and industrial applications with waterfront durability.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Thermometer,
    title: 'Roof Coatings',
    description: 'Silicone and acrylic roof coatings that extend roof life and reduce cooling costs in South Carolina heat.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Commercial Roof Repair',
    description: '24/7 emergency repairs for leaks, storm damage, and ponding water issues across the Lake Wylie area.',
    href: '/services/roof-repair',
  },
  {
    icon: FileCheck,
    title: 'Roof Inspections',
    description: 'Comprehensive commercial roof assessments with detailed reports and maintenance recommendations.',
    href: '/services/roof-inspection',
  },
  {
    icon: DollarSign,
    title: 'Preventive Maintenance',
    description: 'Scheduled maintenance programs to extend roof life and maintain warranty compliance for Lake Wylie businesses.',
    href: '/services/commercial-roofing',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Star,
    title: '#1 Rated Commercial Roofer',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Lake Wylie area commercial clients.`,
  },
  {
    icon: Award,
    title: 'BBB A+ Accredited',
    description: 'Better Business Bureau A+ rating with zero complaints.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned & Operated',
    description: 'Military values of integrity and excellence on every commercial project.',
  },
  {
    icon: CheckCircle,
    title: 'SC Licensed & Insured',
    description: 'SC licensed commercial contractor with $2M+ liability coverage for York County projects.',
  },
  {
    icon: Users,
    title: 'Manufacturer Certified',
    description: 'Certified installers for GAF, Carlisle, Firestone, and Johns Manville.',
  },
  {
    icon: Clock,
    title: 'Minimal Business Disruption',
    description: 'Nights, weekends, and phased installation to keep your Lake Wylie business running.',
  },
];

// Lake Wylie commercial areas
const lakeWylieAreas = [
  'Lake Wylie Waterfront',
  'Tega Cay Town Center',
  'River District',
  'Highway 49 Corridor',
  'Highway 274',
  'Palisades Area',
  'Buster Boyd Bridge Road',
  'SC-274 Commercial Corridor',
  'Hands Mill Highway',
  'Gold Hill Road',
  'Clover Highway',
  'Lake Wylie Marina District',
  'Camp Creek Road',
  'Pleasant Road',
];

// Property types served
const propertyTypes = [
  'Lakefront Businesses',
  'Marina Facilities',
  'Retail Centers',
  'Restaurants & Dining',
  'Medical Facilities',
  'Office Buildings',
  'Warehouses',
  'Churches',
  'Self-Storage Facilities',
  'Hotels & Lodging',
  'Mixed-Use Developments',
  'Schools',
];

// Nearby cities
const nearbyCities = [
  { name: 'Charlotte, NC', href: '/commercial-roofing-charlotte-nc' },
  { name: 'Fort Mill, SC', href: '/commercial-roofing-fort-mill-sc' },
  { name: 'Rock Hill, SC', href: '/commercial-roofing-rock-hill-sc' },
  { name: 'Tega Cay, SC', href: '/locations/tega-cay-sc' },
  { name: 'Clover, SC', href: '/locations/clover-sc' },
  { name: 'Gastonia, NC', href: '/roofing-gastonia-nc' },
];

// FAQs
const faqs = [
  {
    question: 'What commercial roofing systems do you install in Lake Wylie SC?',
    answer:
      'Best Roofing Now installs all major commercial roofing systems in Lake Wylie including TPO (Thermoplastic Polyolefin), EPDM (Ethylene Propylene Diene Monomer), PVC (Polyvinyl Chloride), modified bitumen, built-up roofing (BUR), standing seam metal roofing, and various roof coating systems. For Lake Wylie\'s waterfront businesses, we often recommend TPO for its energy efficiency and long-term value, or metal roofing for superior wind resistance near the lake.',
  },
  {
    question: 'How much does commercial roofing cost in Lake Wylie SC?',
    answer:
      'Commercial roofing costs in Lake Wylie typically range from $4 to $15 per square foot depending on the roofing system, roof complexity, and project size. TPO and EPDM systems average $5-8 per square foot, while metal roofing ranges from $8-15 per square foot. Waterfront commercial properties may require wind-rated materials that can add 10-15% to the cost. We provide free, detailed estimates for all commercial projects.',
  },
  {
    question: 'Do you serve Lake Wylie commercial properties from Charlotte?',
    answer:
      'Yes! Best Roofing Now proudly serves Lake Wylie, Tega Cay, Fort Mill, Clover, and all of York County from our Charlotte headquarters. We are fully licensed and insured for commercial roofing work in South Carolina. Lake Wylie is one of our most active service areas with numerous completed commercial projects across the lakefront and Highway 49 corridor.',
  },
  {
    question: 'Do you offer emergency commercial roof repair in Lake Wylie SC?',
    answer:
      'Yes, Best Roofing Now offers 24/7 emergency commercial roofing services throughout Lake Wylie and York County. For active leaks and urgent situations, we typically respond within 2-4 hours. Lake Wylie businesses are especially vulnerable to wind-driven storms off the lake, and our emergency team provides immediate temporary repairs to prevent further damage. Call (704) 605-6047 for immediate assistance.',
  },
  {
    question: 'Are you licensed to do commercial roofing in South Carolina?',
    answer:
      'Yes, Best Roofing Now is fully licensed to perform commercial roofing work in South Carolina. We maintain all required SC contractor licenses, comprehensive liability insurance ($2M+), and workers compensation coverage. We serve Lake Wylie, Tega Cay, Fort Mill, Clover, and throughout York County with full knowledge of local building codes and permit requirements.',
  },
  {
    question: 'What commercial roof warranties do you offer in Lake Wylie?',
    answer:
      'We offer industry-leading warranties including manufacturer warranties up to 30 years NDL (No Dollar Limit) on materials from GAF, Carlisle, Firestone, and Johns Manville. Our workmanship warranty covers labor for 10-15 years. NDL warranties cover full replacement cost with no depreciation - critical for Lake Wylie businesses needing long-term protection against lakeside weather exposure.',
  },
];

export default function CommercialRoofingLakeWylieSCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Wylie SC', url: `${SITE_CONFIG.url}/roofing-lake-wylie-sc` },
          { name: 'Commercial Roofing Lake Wylie SC', url: `${SITE_CONFIG.url}/commercial-roofing-lake-wylie-sc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/commercial-roofing-lake-wylie-sc`}
        pageName="Commercial Roofing Lake Wylie SC"
        city="Lake Wylie"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.warehouse}
            alt="Commercial roofing Lake Wylie SC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Waves className="w-4 h-4" />
              <span className="text-sm font-semibold">Waterfront Commercial Specialists | SC Licensed</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Commercial Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Lake Wylie SC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Flat Roof, TPO &amp; Metal Roofing for Lake Wylie &amp; York County Businesses
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now delivers professional commercial roofing solutions throughout Lake Wylie, Tega Cay, Fort Mill,
              and the River District. From lakefront marinas to Highway 49 retail centers, our certified team provides exceptional
              quality backed by industry-leading warranties and {SITE_CONFIG.googleReviewCount}+ five-star reviews.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Commercial Estimate
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
                SC Licensed & Insured
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Commercial Roofing Services in Lake Wylie SC
            </h2>
            <p className="text-gray text-lg">
              From flat roof installations to emergency repairs, Best Roofing Now provides comprehensive commercial
              roofing solutions for Lake Wylie&apos;s waterfront businesses and growing commercial community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialServices.map((service) => (
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
                Why Lake Wylie Businesses Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When your commercial property near the lake needs roofing work, you need a contractor who understands
                waterfront weather exposure and the specific needs of Lake Wylie&apos;s business community. We deliver
                quality with minimal disruption.
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
                src={IMAGES.commercial.office}
                alt="Commercial roofing Lake Wylie SC - Office building"
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
                    <p className="font-bold text-dark">#1 Rated Commercial</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ 5-Star Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Properties We Serve in Lake Wylie SC
            </h2>
            <p className="text-gray text-lg">
              From lakefront marinas to retail centers, we provide expert commercial roofing for every building type in the Lake Wylie area.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {propertyTypes.map((type) => (
              <div key={type} className="flex items-center gap-3 bg-light rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium text-dark">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Need Commercial Roofing in Lake Wylie SC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate for your commercial roofing project.
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
              Commercial Roofing Throughout Lake Wylie &amp; York County SC
            </h2>
            <p className="text-gray text-lg">
              We provide commercial roofing services to businesses throughout Lake Wylie, Tega Cay, Fort Mill, Clover, and the greater Charlotte metro.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Wylie Commercial Districts</h3>
              <div className="flex flex-wrap gap-2">
                {lakeWylieAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

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
        </div>
      </section>

      {/* Commercial Systems Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Roofing Systems We Install
            </h2>
            <p className="text-gray text-lg">
              We install and service all major commercial roofing systems for Lake Wylie and York County businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">TPO Membrane</h3>
              <p className="text-gray text-sm">
                Single-ply thermoplastic membrane ideal for large flat roofs. Energy-efficient white surface reflects heat
                and reduces cooling costs in South Carolina&apos;s hot summers. 20-30 year warranties.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">EPDM Rubber</h3>
              <p className="text-gray text-sm">
                Durable synthetic rubber membrane with excellent weather resistance. Proven track record for
                office and retail buildings in the Lake Wylie corridor. 25+ year lifespan.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">PVC Roofing</h3>
              <p className="text-gray text-sm">
                Chemical-resistant membrane ideal for restaurants and food service businesses along Lake Wylie. Heat-welded seams create
                watertight bonds perfect for lakeside weather exposure.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Standing Seam Metal</h3>
              <p className="text-gray text-sm">
                Long-lasting metal roofing with concealed fasteners. 40-50+ year lifespan with minimal maintenance.
                Excellent wind resistance for waterfront commercial properties.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Modified Bitumen</h3>
              <p className="text-gray text-sm">
                Multi-layer asphalt system with reinforced membranes. Excellent for high-traffic roofs
                and buildings with rooftop equipment throughout the Lake Wylie area.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Built-Up Roofing (BUR)</h3>
              <p className="text-gray text-sm">
                Traditional multi-layer system with proven performance. Excellent waterproofing for flat roofs.
                Can be combined with reflective coatings for SC energy savings.
              </p>
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
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Commercial Roofing Lake Wylie SC FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about commercial roofing services in Lake Wylie SC.
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

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Lake Wylie"
        service="Commercial Roofing"
        serviceSlug="commercial-roofing"
        title="Commercial Roofing in Nearby Cities"
      />

      <GeoProjectGalleryStrip
        pageType="location"
        city="Lake Wylie"
        slug="commercial-roofing-lake-wylie-sc"
      />

      <CityGeoSection
        city="Lake Wylie"
        state="SC"
        citySlug="lake-wylie-sc"
        service="Commercial Roofing"
      />

      <CTASection
        title="Ready for Professional Commercial Roofing in Lake Wylie SC?"
        subtitle="Get a free, no-obligation estimate from Lake Wylie's trusted commercial roofing company. Our certified team will assess your building and provide expert recommendations for waterfront and inland commercial properties."
      />
    </>
  );
}
