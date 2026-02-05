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
  Settings,
  FileCheck,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Commercial Roofing Mooresville NC',
  description:
    'Commercial roofing experts in Mooresville NC serving race shops, warehouses, and industrial facilities. TPO, EPDM, flat roofs, and metal roofing. BBB A+ rated, veteran-owned. Free estimates for commercial properties!',
  keywords: [
    'commercial roofing Mooresville NC',
    'flat roof Mooresville',
    'race shop roofing Mooresville',
    'industrial roofing Mooresville NC',
    'TPO roofing Mooresville',
    'EPDM roofing Mooresville NC',
    'warehouse roofing Mooresville',
    'commercial roof repair Mooresville',
    'flat roof repair Mooresville NC',
    'commercial roofer Mooresville',
    'metal roof commercial Mooresville',
    'NASCAR shop roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-roofing-mooresville-nc`,
  },
  openGraph: {
    title: 'Commercial Roofing Mooresville NC | Race Shop Roofing | Best Roofing Now',
    description:
      'Expert commercial roofing in Mooresville NC. Specializing in race shops, warehouses, and industrial facilities. TPO, EPDM, flat roofs, and metal roofing systems.',
    url: `${SITE_CONFIG.url}/commercial-roofing-mooresville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.warehouse,
        width: 1200,
        height: 630,
        alt: 'Commercial roofing services in Mooresville NC - Best Roofing Now',
      },
    ],
  },
};

// Commercial services offered
const commercialServices = [
  {
    icon: Building2,
    title: 'TPO Roofing Systems',
    description: 'Energy-efficient TPO membrane roofing ideal for Mooresville\'s hot summers and large commercial buildings.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Factory,
    title: 'Race Shop Roofing',
    description: 'Specialized roofing for NASCAR team shops and racing facilities throughout Mooresville.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Warehouse,
    title: 'Warehouse Roofing',
    description: 'Large-scale roofing solutions for warehouses and distribution centers with minimal disruption.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Settings,
    title: 'EPDM Rubber Roofing',
    description: 'Durable EPDM membrane systems for flat and low-slope commercial roofs.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Commercial Roof Repair',
    description: 'Fast repairs for leaks, punctures, and storm damage to minimize business interruption.',
    href: '/services/commercial-roofing',
  },
  {
    icon: FileCheck,
    title: 'Roof Maintenance Programs',
    description: 'Preventive maintenance plans to extend your commercial roof\'s life and catch problems early.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied commercial clients.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: Factory,
    title: 'Industrial Experience',
    description: 'Extensive experience with race shops, warehouses, and industrial facilities.',
  },
  {
    icon: Clock,
    title: 'Minimal Downtime',
    description: 'We work around your schedule to minimize disruption to your business operations.',
  },
  {
    icon: Users,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with comprehensive commercial liability coverage.',
  },
];

// Mooresville commercial areas served
const mooresvilleAreas = [
  'Downtown Mooresville',
  'Race City USA Corridor',
  'Gateway Industrial Park',
  'Mooresville South',
  'Morrison Plantation',
  'Langtree at the Lake',
  'Brawley School Road',
  'Highway 150 Corridor',
  'Williamson Road Area',
  'Plaza Drive',
  'Talbert Road Industrial',
  'Performance Road',
  'Mazeppa Road',
  'I-77 Business Corridor',
  'Lake Norman Business Park',
  'NC Highway 3 Area',
];

// Types of commercial properties served
const propertyTypes = [
  'NASCAR Team Shops',
  'Racing Fabrication Facilities',
  'Warehouses & Distribution',
  'Manufacturing Plants',
  'Office Buildings',
  'Retail Centers',
  'Medical Facilities',
  'Restaurants',
  'Auto Dealerships',
  'Self-Storage Facilities',
  'Churches',
  'Schools',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Davidson', href: '/roof-replacement-davidson-nc' },
  { name: 'Cornelius', href: '/roof-repair-cornelius-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Statesville', href: '/locations/statesville-nc' },
  { name: 'Troutman', href: '/locations/mooresville-nc' },
];

// FAQs about commercial roofing in Mooresville
const faqs = [
  {
    question: 'What commercial roofing systems do you install in Mooresville?',
    answer:
      'We install all major commercial roofing systems including TPO (Thermoplastic Polyolefin), EPDM rubber roofing, PVC membrane, modified bitumen, built-up roofing (BUR), and standing seam metal roofing. For Mooresville\'s climate, we often recommend white TPO for its energy efficiency and durability.',
  },
  {
    question: 'Do you have experience with race shop roofing in Mooresville?',
    answer:
      'Yes! Mooresville is "Race City USA" and we have extensive experience roofing NASCAR team shops, racing fabrication facilities, and automotive performance buildings. We understand the unique requirements of these large-span buildings including proper ventilation, clear-span roof systems, and accommodating heavy equipment.',
  },
  {
    question: 'How much does commercial roofing cost in Mooresville NC?',
    answer:
      'Commercial roofing costs typically range from $4-$12 per square foot depending on the roofing system, roof condition, and building size. TPO and EPDM tend to be more economical ($4-$8/sq ft), while metal and specialty systems cost more ($8-$15/sq ft). We provide free detailed estimates for all commercial projects.',
  },
  {
    question: 'Can you work around our business hours?',
    answer:
      'Absolutely! We understand that business operations can\'t stop for roofing work. We can schedule work during off-hours, weekends, or in phases to minimize disruption. For race shops with critical deadlines, we coordinate around your schedule to ensure your operations continue uninterrupted.',
  },
  {
    question: 'How long does a commercial roof replacement take?',
    answer:
      'Commercial roof replacement timelines vary based on building size and roof system. Small buildings (under 10,000 sq ft) typically take 3-7 days. Larger warehouses and race shops can take 2-4 weeks. We provide detailed project timelines with your estimate and keep you updated throughout the process.',
  },
  {
    question: 'Do you offer commercial roof maintenance programs?',
    answer:
      'Yes, we offer comprehensive preventive maintenance programs for commercial roofs. Regular inspections and maintenance can extend your roof\'s life by 5-10 years, catch small problems before they become expensive repairs, and ensure warranty compliance. Many Mooresville businesses save significantly with our maintenance plans.',
  },
  {
    question: 'What warranties do you offer on commercial roofing?',
    answer:
      'Commercial roof warranties vary by system. TPO and EPDM systems typically come with 20-30 year manufacturer warranties. Metal roofing offers 40-50 year coverage. We also provide our workmanship warranty on all installations. Extended NDL (No Dollar Limit) warranties are available for additional protection.',
  },
  {
    question: 'Do you handle commercial roof insurance claims?',
    answer:
      'Yes, we work with commercial insurance claims regularly. We provide detailed documentation, meet with adjusters, and help ensure you receive fair compensation for storm damage and other covered events. Many Mooresville commercial roofs have qualified for full replacement after hail storms.',
  },
];

export default function CommercialRoofingMooresvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing Mooresville NC', url: `${SITE_CONFIG.url}/commercial-roofing-mooresville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/commercial-roofing-mooresville-nc`}
        pageName="Commercial Roofing Mooresville NC"
        city="Mooresville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.warehouse}
            alt="Commercial roofing services in Mooresville NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Race City USA's Commercial Roofing Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Commercial Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Mooresville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert roofing for race shops, warehouses & commercial buildings
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides professional commercial roofing services throughout Mooresville and
              the Lake Norman region. From NASCAR team shops to warehouses and retail centers, our experienced
              team delivers quality commercial roofing solutions with minimal disruption to your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Commercial Quote
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
                Fully Licensed & Insured
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
              Commercial Roofing Services in Mooresville NC
            </h2>
            <p className="text-gray text-lg">
              From TPO membrane systems to metal roofing, we provide complete commercial roofing solutions
              for Race City USA's diverse business community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Property Types Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Commercial Properties We Serve in Mooresville
              </h2>
              <p className="text-gray text-lg mb-8">
                As Mooresville's trusted commercial roofing contractor, we serve the diverse needs of
                Race City USA - from world-class racing facilities to retail and industrial properties.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {propertyTypes.map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-dark">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.commercial.office}
                alt="Commercial roofing for Mooresville businesses - Best Roofing Now"
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

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Mooresville Businesses Choose Best Roofing Now
            </h2>
            <p className="text-gray text-lg">
              We understand the unique needs of commercial properties and deliver solutions that protect
              your investment while minimizing business disruption.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-light rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
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
                Need Commercial Roofing in Mooresville?
              </h2>
              <p className="text-white/90">
                Get a free quote from Race City USA's trusted commercial roofing experts.
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
              Commercial Roofing Throughout Mooresville & Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We provide commercial roofing services to businesses throughout Mooresville and the surrounding region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mooresville Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Mooresville Business Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {mooresvilleAreas.map((area) => (
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

      {/* Commercial Roofing Systems */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Roofing Systems We Install
            </h2>
            <p className="text-gray text-lg">
              We install and service all major commercial roofing systems to meet your building's specific needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">TPO Membrane</h3>
              <p className="text-gray text-sm">
                Single-ply thermoplastic membrane ideal for flat roofs. Energy-efficient white surface reflects heat
                and reduces cooling costs. 20-30 year warranties available.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">EPDM Rubber</h3>
              <p className="text-gray text-sm">
                Durable synthetic rubber membrane with excellent weather resistance. Proven track record for
                warehouses and industrial buildings. 25+ year lifespan.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">PVC Roofing</h3>
              <p className="text-gray text-sm">
                Chemical-resistant membrane ideal for restaurants and manufacturing. Heat-welded seams create
                watertight bonds. Excellent for demanding environments.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Modified Bitumen</h3>
              <p className="text-gray text-sm">
                Multi-layer asphalt system with reinforced membranes. Excellent for high-traffic roofs
                and buildings with rooftop equipment.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Standing Seam Metal</h3>
              <p className="text-gray text-sm">
                Long-lasting metal roofing with concealed fasteners. 40-50+ year lifespan with minimal maintenance.
                Ideal for race shops and premium facilities.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Built-Up Roofing (BUR)</h3>
              <p className="text-gray text-sm">
                Traditional multi-layer system with proven performance. Excellent waterproofing for flat roofs.
                Can be combined with reflective coatings for energy savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Commercial Work in Mooresville
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed commercial roofing projects throughout Mooresville and Lake Norman.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.commercial.warehouse}
                alt="Commercial warehouse roofing in Mooresville NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.commercial.office}
                alt="Office building roofing in Mooresville"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.beforeAfter.commercialFlat.after}
                alt="Commercial flat roof installation in Mooresville NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of commercial roofing project in Mooresville"
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
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Commercial Roofing FAQs for Mooresville
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about commercial roofing services in Mooresville NC.
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
        city="Mooresville"
        slug="commercial-roofing-mooresville-nc"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Mooresville"

        state="NC"

        citySlug="mooresville-nc"

        service="Commercial Roofing"

      />

      <CTASection
        title="Ready to Protect Your Mooresville Business?"
        subtitle="Get a free, no-obligation commercial roofing quote. We'll assess your building and provide honest recommendations tailored to your business needs."
      />
    </>
  );
}
