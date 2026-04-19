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
  MapPin,
  Zap,
  Thermometer,
  DollarSign,
  Waves,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Metal Roofing Lake Wylie SC | Standing Seam & Metal Shingles',
  description:
    'Premium metal roofing in Lake Wylie SC. Standing seam, metal shingles, and metal roof repairs for waterfront homes. 130+ MPH wind rating, salt air resistant. BBB A+ rated. Free estimates!',
  keywords: [
    'metal roofing lake wylie sc',
    'standing seam metal roof lake wylie',
    'metal roof installation lake wylie',
    'metal roofing contractors lake wylie sc',
    'metal roof repair lake wylie sc',
    'metal shingle roof lake wylie',
    'waterfront metal roofing lake wylie',
    'wind resistant metal roof lake wylie',
    'steel roofing lake wylie sc',
    'aluminum roofing lake wylie',
    'energy efficient roofing lake wylie',
    'metal roof cost lake wylie sc',
    'best metal roofer lake wylie',
    'tega cay metal roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/metal-roofing-lake-wylie-sc`,
  },
  openGraph: {
    title: 'Metal Roofing Lake Wylie SC | Standing Seam & Metal Shingles',
    description:
      'BBB A+ rated metal roofing experts serving Lake Wylie SC. Standing seam, metal shingles for waterfront homes. 130+ MPH wind rated. Veteran-owned. Free estimates!',
    url: `${SITE_CONFIG.url}/metal-roofing-lake-wylie-sc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.metalRoof,
        width: 1200,
        height: 630,
        alt: 'Metal roofing installation in Lake Wylie SC by Best Roofing Now',
      },
    ],
  },
};

// Metal roofing services offered
const services = [
  {
    icon: Home,
    title: 'Standing Seam Metal Roofing',
    description: 'Premium standing seam panels with concealed fasteners. 130+ MPH wind rating ideal for Lake Wylie waterfront homes.',
    href: '/services/metal-roofing',
  },
  {
    icon: Building2,
    title: 'Metal Shingle Roofing',
    description: 'Metal shingles that replicate traditional aesthetics with superior longevity for lakeside living.',
    href: '/services/metal-roofing',
  },
  {
    icon: Wrench,
    title: 'Metal Roof Repair',
    description: 'Expert repairs for existing metal roofs including leak fixes, panel replacement, and fastener work.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Metal Roof Replacement',
    description: 'Complete metal roof replacement with premium materials engineered for Lake Wylie weather exposure.',
    href: '/services/roof-replacement',
  },
  {
    icon: Building2,
    title: 'Commercial Metal Roofing',
    description: 'Industrial and commercial metal roofing systems for businesses in the Lake Wylie corridor.',
    href: '/services/commercial-roofing',
  },
  {
    icon: CloudRain,
    title: 'Storm-Resistant Metal Roofing',
    description: 'Impact-resistant metal roofing designed to withstand severe lakeside weather and hail.',
    href: '/services/storm-damage',
  },
];

// Why choose metal roofing points
const whyChooseMetal = [
  {
    icon: Clock,
    title: '50+ Year Lifespan',
    description: 'Metal roofs last 2-3 times longer than traditional asphalt shingles, often exceeding 50 years.',
  },
  {
    icon: Thermometer,
    title: 'Energy Efficient',
    description: 'Reflective metal roofing can reduce cooling costs by 10-25% in Lake Wylie\'s hot South Carolina summers.',
  },
  {
    icon: Shield,
    title: '130+ MPH Wind Rating',
    description: 'Metal roofs withstand winds up to 140 mph - critical for Lake Wylie waterfront homes exposed to lake storms.',
  },
  {
    icon: Zap,
    title: 'Fire Resistant',
    description: 'Metal roofing is non-combustible with a Class A fire rating for maximum protection.',
  },
  {
    icon: DollarSign,
    title: 'Increases Home Value',
    description: 'Metal roofs recoup up to 85% of installation costs and boost curb appeal for Lake Wylie properties.',
  },
  {
    icon: Award,
    title: 'Salt Air Resistant',
    description: 'Premium coatings resist moisture and humidity damage from Lake Wylie\'s waterfront environment.',
  },
];

// Why choose Best Roofing Now
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Lake Wylie homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'SC Licensed & Insured',
    description: 'Fully licensed SC roofing contractor with $2M+ liability coverage for York County projects.',
  },
  {
    icon: Users,
    title: 'Metal Roof Specialists',
    description: 'Factory-trained installers certified in standing seam and metal shingle systems.',
  },
  {
    icon: Clock,
    title: 'Waterfront Experts',
    description: 'Serving Lake Wylie, Tega Cay, Fort Mill & the River District with fast response times.',
  },
];

// Lake Wylie communities served
const lakeWylieCommunities = [
  'The Palisades',
  'River Hills',
  'Reflection Pointe',
  'Tega Cay Peninsula',
  'Camp Creek',
  'Lake Wylie Waterfront',
  'River District',
  'Clover',
  'Bethany Bend',
  'Catawba Cove',
  'McLean',
  'Windjammer',
  'Lake Shore',
  'Lakeshore Estates',
  'Fort Mill',
  'Baxter Village',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Charlotte, NC', href: '/metal-roofing-charlotte-nc' },
  { name: 'Tega Cay, SC', href: '/locations/tega-cay-sc' },
  { name: 'Fort Mill, SC', href: '/roofing-fort-mill-sc' },
  { name: 'Clover, SC', href: '/locations/clover-sc' },
  { name: 'Rock Hill, SC', href: '/roofing-rock-hill-sc' },
  { name: 'Gastonia, NC', href: '/roofing-gastonia-nc' },
];

// FAQs about metal roofing in Lake Wylie
const faqs = [
  {
    question: 'How much does metal roofing cost in Lake Wylie SC?',
    answer:
      'Metal roofing in Lake Wylie typically costs between $15,000 and $35,000 for most residential homes, depending on the type of metal, roof size, and complexity. Standing seam metal roofing ranges from $12-$18 per sq ft, while metal shingles range from $8-$14 per sq ft. Waterfront homes in Palisades or River Hills may cost more due to size and accessibility. While the initial cost is higher than asphalt, the 50+ year lifespan makes metal roofing a better long-term investment for Lake Wylie lakefront properties.',
  },
  {
    question: 'Is metal roofing good for Lake Wylie waterfront homes?',
    answer:
      'Metal roofing is one of the best choices for Lake Wylie waterfront homes. Standing seam metal roofs are rated for 130+ MPH winds, which is critical for homes exposed to storms crossing the lake. Metal resists moisture damage, humidity, and the salt-air-like conditions near the water. It also withstands heavy rain, provides Class 4 hail resistance, and reflects solar heat to reduce cooling costs in South Carolina\'s summers.',
  },
  {
    question: 'What types of metal roofing do you install in Lake Wylie SC?',
    answer:
      'Best Roofing Now installs all types of metal roofing in Lake Wylie including standing seam (our most popular for waterfront homes), metal shingles, corrugated metal, and stone-coated steel. We work with premium materials from manufacturers like Drexel Metals, McElroy Metal, and DECRA. Each system offers different aesthetics and price points to match your home and budget.',
  },
  {
    question: 'How long does a metal roof last on Lake Wylie homes?',
    answer:
      'Metal roofs on Lake Wylie homes typically last 50-70 years with proper installation and minimal maintenance. The premium coatings used on modern metal roofing resist fading, chalking, and corrosion even in Lake Wylie\'s humid lakeside environment. Compare this to asphalt shingles which typically last 15-25 years - a metal roof could be the last roof your Lake Wylie home ever needs.',
  },
  {
    question: 'Are you licensed to install metal roofing in South Carolina?',
    answer:
      'Yes, Best Roofing Now is fully licensed to perform roofing work in South Carolina. We maintain all required SC contractor licenses, $2M+ liability insurance, and workers compensation coverage. We serve Lake Wylie, Tega Cay, Fort Mill, Clover, and throughout York County. Our cross-border expertise means seamless service whether your Lake Wylie home is on the SC or NC side.',
  },
  {
    question: 'Can metal roofing withstand Lake Wylie storms and hail?',
    answer:
      'Absolutely. Metal roofing is one of the most storm-resistant options available for Lake Wylie homes. Standing seam metal roofs are rated for 130-140 MPH winds and carry Class 4 impact resistance (the highest rating) for hail. Lake Wylie properties are particularly exposed to wind-driven storms off the water, making metal roofing an excellent protective investment. Many insurance companies offer premium discounts for metal roofs.',
  },
];

export default function MetalRoofingLakeWylieSCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Wylie SC', url: `${SITE_CONFIG.url}/roofing-lake-wylie-sc` },
          { name: 'Metal Roofing Lake Wylie SC', url: `${SITE_CONFIG.url}/metal-roofing-lake-wylie-sc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/metal-roofing-lake-wylie-sc`}
        pageName="Metal Roofing Lake Wylie SC"
        city="Lake Wylie"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.metalRoof}
            alt="Metal roofing installation in Lake Wylie SC - Best Roofing Now standing seam experts"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Waves className="w-4 h-4" />
              <span className="text-sm font-semibold">Waterfront Metal Roof Experts | SC Licensed</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Metal Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Lake Wylie SC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Standing seam &amp; metal shingle roofing with 130+ MPH wind rating for waterfront homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is Lake Wylie&apos;s trusted metal roofing specialist. From standing seam to metal shingles,
              our factory-trained installers deliver energy-efficient, storm-resistant roofing engineered for
              lakefront durability that lasts a lifetime.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Metal Roof Estimate
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
                130+ MPH Wind Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Metal Roofing Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Lake Wylie Homeowners Choose Metal Roofing
            </h2>
            <p className="text-gray text-lg">
              Metal roofing offers unmatched durability, energy efficiency, and waterfront protection
              for Lake Wylie lakeside properties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseMetal.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
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

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Metal Roofing Services in Lake Wylie SC
            </h2>
            <p className="text-gray text-lg">
              Complete metal roofing solutions from installation to repair, backed by industry-leading warranties
              and engineered for Lake Wylie&apos;s waterfront climate.
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
                Why Lake Wylie Chooses Best Roofing Now for Metal Roofing
              </h2>
              <p className="text-gray text-lg mb-8">
                When you invest in metal roofing for your Lake Wylie home, you want installers who specialize in metal systems
                and understand waterfront exposure. Best Roofing Now&apos;s factory-trained team delivers precision installation
                that maximizes the lifespan and performance of your metal roof against lakeside weather.
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
                src={IMAGES.hero.metalRoof}
                alt="Best Roofing Now - Metal roofing experts in Lake Wylie SC"
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
                Ready for a Metal Roof in Lake Wylie?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Lake Wylie&apos;s metal roofing specialists.
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
              Metal Roofing Throughout Lake Wylie &amp; York County
            </h2>
            <p className="text-gray text-lg">
              Our metal roofing experts serve all Lake Wylie communities, Tega Cay, Fort Mill, and the River District.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Lake Wylie Communities */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Wylie Communities We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {lakeWylieCommunities.map((community) => (
                  <span
                    key={community}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {community}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-white rounded-xl p-6">
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
              Metal Roofing Projects in the Lake Wylie Area
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of metal roofing installations throughout Lake Wylie and York County.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.project1}
                alt="Metal roof installation in Lake Wylie SC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.hero.metalRoof}
                alt="Standing seam metal roof by Best Roofing Now in Lake Wylie"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of metal roofing project in Lake Wylie area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.project3}
                alt="Metal roofing contractor work in Lake Wylie SC"
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
                Metal Roofing FAQs for Lake Wylie SC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about metal roofing in Lake Wylie SC.
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
        city="Lake Wylie"
        slug="metal-roofing-lake-wylie-sc"
      />

      <CityGeoSection
        city="Lake Wylie"
        state="SC"
        citySlug="lake-wylie-sc"
        service="Metal Roofing"
      />

      <CTASection
        title="Ready for Premium Metal Roofing in Lake Wylie SC?"
        subtitle="Get a free, no-obligation estimate from Lake Wylie's metal roofing experts. We'll help you choose the perfect metal roofing system for your waterfront home and budget."
      />
    </>
  );
}
