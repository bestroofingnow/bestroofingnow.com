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
  Layers,
  Home,
  Building2,
  Zap,
  MapPin,
  Thermometer,
  Wind,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema, ServiceAreaPageSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Metal Roofing Lake Norman NC | Standing Seam & Metal Shingles',
  description:
    'Premium metal roofing installation across Lake Norman NC. Standing seam, metal shingles, and corrugated panels for waterfront and lakefront homes. 50+ year lifespan, wind-resistant. Free estimates!',
  keywords: [
    'metal roofing lake norman nc',
    'standing seam metal roof lake norman',
    'metal roof cost lake norman',
    'metal roofing contractor lake norman',
    'lakefront metal roofing lake norman',
    'waterfront metal roof lake norman nc',
    'metal shingles lake norman',
    'metal roof installation lake norman',
    'wind resistant roofing lake norman',
    'lake norman metal roofing company',
    'standing seam roof cornelius nc',
    'metal roof mooresville nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/metal-roofing-lake-norman-nc`,
  },
  openGraph: {
    title: 'Metal Roofing Lake Norman NC | Standing Seam & Metal Shingles | Best Roofing Now',
    description:
      'Premium metal roofing across Lake Norman NC. Standing seam specialists with 50+ year systems for waterfront homes. Energy efficient, storm resistant. Free estimates!',
    url: `${SITE_CONFIG.url}/metal-roofing-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero10,
        width: 1200,
        height: 630,
        alt: 'Metal roofing installation in Lake Norman NC - Best Roofing Now',
      },
    ],
  },
};

// Lake Norman cities for gallery strip
const LAKE_NORMAN_CITIES = ['Mooresville', 'Cornelius', 'Davidson', 'Huntersville', 'Denver', 'Sherrills Ford'];

// Metal roofing services offered
const metalServices = [
  {
    icon: Layers,
    title: 'Standing Seam Metal Roofing',
    description: 'Premium standing seam panels with concealed fasteners for a sleek, modern look ideal for Lake Norman waterfront homes.',
    href: '/services/metal-roofing',
  },
  {
    icon: Home,
    title: 'Metal Shingles',
    description: 'Metal shingles that replicate the look of traditional materials with superior wind resistance for lakefront properties.',
    href: '/services/metal-roofing',
  },
  {
    icon: Building2,
    title: 'Corrugated Metal',
    description: 'Durable corrugated metal panels for residential, agricultural, and commercial applications throughout Lake Norman.',
    href: '/services/metal-roofing',
  },
  {
    icon: Thermometer,
    title: 'Energy-Efficient Options',
    description: 'Cool roof coatings and reflective finishes to reduce cooling costs during Lake Norman\'s hot summers.',
    href: '/services/metal-roofing',
  },
  {
    icon: Wind,
    title: 'Wind-Resistant Systems',
    description: 'Metal roofing rated for 140+ MPH winds - critical for Lake Norman waterfront homes with direct lake exposure.',
    href: '/services/metal-roofing',
  },
  {
    icon: Shield,
    title: 'Extended Warranties',
    description: '40-50 year warranties available on premium metal roofing systems installed across the Lake Norman region.',
    href: '/services/metal-roofing',
  },
];

// Why choose metal roofing for Lake Norman
const metalBenefits = [
  {
    icon: Clock,
    title: '50+ Year Lifespan',
    description: 'Metal roofs last 2-3 times longer than asphalt shingles, making them the ideal long-term investment for Lake Norman homes.',
  },
  {
    icon: Wind,
    title: 'Waterfront Wind Resistance',
    description: 'Metal roofing withstands winds up to 140 MPH - essential for lakefront properties exposed to wind accelerating over open water.',
  },
  {
    icon: Thermometer,
    title: 'Energy Efficient',
    description: 'Reflective metal roofing can reduce cooling costs by up to 25% during hot Lake Norman summers.',
  },
  {
    icon: Zap,
    title: 'Low Maintenance',
    description: 'Virtually maintenance-free with no worries about rot, insect damage, or cracking from lake humidity.',
  },
  {
    icon: Shield,
    title: 'Fire & Hail Resistant',
    description: 'Class A fire rating and Class 4 impact resistance provide maximum protection for Lake Norman homes.',
  },
  {
    icon: Star,
    title: 'Increases Home Value',
    description: 'Metal roofs add significant value and appeal to Lake Norman waterfront and luxury homes.',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Award,
    title: 'Metal Roofing Specialists',
    description: 'Specialized training and experience in all types of metal roofing systems for lakefront conditions.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Lake Norman homeowners.`,
  },
  {
    icon: Shield,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor in Mecklenburg and Iredell Counties with comprehensive liability coverage.',
  },
  {
    icon: Users,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned with military values of integrity and quality.',
  },
  {
    icon: Clock,
    title: 'Expert Installation',
    description: 'Precise installation ensures your metal roof performs flawlessly for decades against Lake Norman weather.',
  },
];

// Lake Norman waterfront communities
const lakeNormanAreas = [
  'The Peninsula (Cornelius)',
  'Jetton Cove (Cornelius)',
  'River Run (Davidson)',
  'Westmoreland (Davidson)',
  'The Point (Mooresville)',
  'Harborside (Mooresville)',
  'Northcross (Huntersville)',
  'Birkdale Village Area',
  'Westport (Denver)',
  'Pinnacle Shores (Denver)',
  'Sailview (Denver)',
  'Lake Norman State Park Area',
];

// Nearby cities
const nearbyCities = [
  { name: 'Mooresville', href: '/metal-roofing-mooresville-nc' },
  { name: 'Cornelius', href: '/metal-roofing-cornelius-nc' },
  { name: 'Charlotte', href: '/metal-roofing-charlotte-nc' },
  { name: 'Denver', href: '/metal-roofing-denver-nc' },
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Huntersville', href: '/roofing-huntersville-nc' },
];

// FAQs specific to metal roofing in Lake Norman
const faqs = [
  {
    question: 'How much does metal roofing cost in Lake Norman NC?',
    answer:
      'Metal roofing in Lake Norman typically costs $15,000-$35,000 for residential homes, depending on the system type and roof size. Standing seam panels range from $10-$16 per square foot installed, while metal shingles range from $8-$12 per square foot. While more expensive upfront than asphalt shingles, metal roofs last 2-3 times longer and often pay for themselves through reduced energy and maintenance costs. We provide free estimates for all Lake Norman communities.',
  },
  {
    question: 'Is metal roofing the best choice for Lake Norman waterfront homes?',
    answer:
      'Metal roofing is arguably the best choice for Lake Norman waterfront homes. The wind resistance (rated for 140+ MPH) is critical for lakefront properties where wind accelerates across open water. Metal also handles the increased humidity without algae growth, resists hail damage with Class 4 impact ratings, and reflects heat to reduce cooling costs. Many Lake Norman waterfront and luxury homes choose metal for its unmatched durability and modern aesthetic.',
  },
  {
    question: 'How long does a metal roof last in the Lake Norman area?',
    answer:
      'A properly installed metal roof in the Lake Norman area can last 50-70 years or more. Standing seam systems with quality coatings often last the longest. Compare this to 15-25 years for asphalt shingles. Many Lake Norman homeowners find that a metal roof is the last roof they ever need to install. The durability is especially valuable for waterfront homes facing accelerated wear from lake exposure.',
  },
  {
    question: 'What is standing seam metal roofing?',
    answer:
      'Standing seam metal roofing features vertical panels with raised seams that interlock and conceal the fasteners. This creates a sleek, modern appearance with no exposed screws or nails. The concealed fastener system eliminates potential leak points and allows for thermal expansion without damage. It is the premium choice for Lake Norman residential metal roofing and pairs beautifully with waterfront architecture.',
  },
  {
    question: 'Will a metal roof make my Lake Norman house hot?',
    answer:
      'No - actually the opposite! Metal roofs reflect solar radiation rather than absorbing it like asphalt shingles. With proper ventilation and optional cool roof coatings, metal roofs can reduce cooling costs by up to 25%. Metal also releases heat quickly after sunset, unlike asphalt which radiates stored heat into the attic all night. This is especially beneficial for Lake Norman homes during the long, hot Carolina summers.',
  },
  {
    question: 'Do you install metal roofing across all Lake Norman communities?',
    answer:
      'Yes! Best Roofing Now installs premium metal roofing throughout the entire Lake Norman region including Cornelius, Davidson, Mooresville, Huntersville, Denver, and Sherrills Ford. We are fully licensed in both Mecklenburg County and Iredell County. We understand the unique HOA requirements and architectural guidelines in Lake Norman communities like The Peninsula, River Run, and The Point.',
  },
];

export default function MetalRoofingLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Norman Roofing', url: `${SITE_CONFIG.url}/roofing-lake-norman-nc` },
          { name: 'Metal Roofing Lake Norman NC', url: `${SITE_CONFIG.url}/metal-roofing-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/metal-roofing-lake-norman-nc`}
        pageName="Metal Roofing Lake Norman NC"
        city="Lake Norman"
      />
      <VoiceSearchActionSchema />
      <ServiceAreaPageSchema
        city="Lake Norman"
        state="NC"
        slug="metal-roofing-lake-norman-nc"
        distance={25}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero10}
            alt="Metal roofing installation in Lake Norman NC - waterfront homes"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4" />
              <span className="text-sm font-semibold">Lake Norman Standing Seam Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Metal Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium metal roofing for Lake Norman waterfront &amp; luxury homes - built to last 50+ years
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is Lake Norman&apos;s trusted expert for metal roofing installation. From standing seam panels
              to metal shingles, we provide wind-resistant, energy-efficient metal roofing systems designed to protect
              your lakefront home for generations. Serving Cornelius, Davidson, Mooresville, Huntersville, and Denver.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Estimate
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
                <Clock className="w-5 h-5 text-accent-light" />
                50+ Year Systems
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed & Insured
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
              Metal Roofing Options for Lake Norman NC
            </h2>
            <p className="text-gray text-lg">
              We install all types of metal roofing systems across the Lake Norman region, from premium standing seam panels to
              metal shingles that replicate traditional materials with superior wind and weather performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metalServices.map((service) => (
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

      {/* Benefits Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Lake Norman Homeowners Choose Metal Roofing
              </h2>
              <p className="text-gray text-lg mb-8">
                Metal roofing offers unmatched durability, wind resistance, and energy efficiency for Lake Norman
                homes - especially waterfront properties facing direct lake exposure and accelerated weather wear.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {metalBenefits.map((item) => (
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
                src={IMAGES.hero.metalRoof}
                alt="Premium metal roofing on Lake Norman waterfront home"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-dark">50+ Year</p>
                    <p className="text-sm text-gray">Expected Lifespan</p>
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
              Why Choose Best Roofing Now for Metal Roofing
            </h2>
            <p className="text-gray text-lg">
              Metal roofing requires specialized knowledge and precise installation. Our team has the
              training and experience to ensure your metal roof performs flawlessly in Lake Norman conditions.
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
                Ready for a Metal Roof in Lake Norman?
              </h2>
              <p className="text-white/90">
                Get a free estimate and see why metal roofing is the smart choice for Lake Norman waterfront homes.
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
                Get Free Estimate
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
              Metal Roofing Throughout Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We install premium metal roofing throughout the greater Lake Norman region, including waterfront communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Lake Norman Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Norman Communities We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {lakeNormanAreas.map((area) => (
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
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Norman Cities We Serve</h3>
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
              href="/roofing-lake-norman-nc"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Lake Norman Roofing Services
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
                Metal Roofing FAQs - Lake Norman NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about metal roofing in the Lake Norman area.
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
        slug="metal-roofing-lake-norman-nc"
        count={4}
        title="Recent Metal Roofing Projects in Lake Norman, NC"
        subtitle="Browse completed metal roofing projects from the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/metal-roofing-lake-norman-nc`}
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Metal Roofing"
      />

      {/* Lake Norman Guide Cross-Link */}
      <section className="py-8 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray mb-4">Want to learn everything about roofing on Lake Norman?</p>
            <Link href="/lake-norman-roofing-guide" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-lg">
              Read The Complete Lake Norman Roofing Guide (2026) <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Get Your Free Metal Roofing Estimate in Lake Norman"
        subtitle="Contact us today for a free consultation on metal roofing. We'll help you choose the perfect system for your Lake Norman home and provide transparent pricing. Serving Cornelius, Davidson, Mooresville, Huntersville & Denver."
      />
    </>
  );
}
