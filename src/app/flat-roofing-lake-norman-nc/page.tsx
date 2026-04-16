import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  Droplets,
  HelpCircle,
  Layers,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
  Wrench,
  Zap,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  ServiceAreaPageSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Flat Roofing Lake Norman NC',
  description:
    'Expert flat roofing services for Lake Norman NC commercial and residential properties. TPO, EPDM, modified bitumen, and flat roof repair. BBB A+ rated, veteran-owned. Free estimates for Cornelius, Davidson, Mooresville, and Huntersville.',
  keywords: [
    'flat roofing lake norman nc',
    'flat roof repair lake norman',
    'TPO roofing lake norman nc',
    'EPDM roofing lake norman',
    'commercial flat roof lake norman',
    'flat roof contractors lake norman nc',
    'flat roof coating lake norman',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/flat-roofing-lake-norman-nc`,
  },
  openGraph: {
    title: 'Flat Roofing Lake Norman NC | TPO, EPDM & Flat Roof Repair | Best Roofing Now',
    description:
      'BBB A+ rated flat roofing contractors serving Lake Norman NC. TPO, EPDM, modified bitumen, coatings, and repairs for commercial and residential flat roofs.',
    url: `${SITE_CONFIG.url}/flat-roofing-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.stock.roofCommercialFlat1,
        width: 1200,
        height: 630,
        alt: 'Flat roofing services in Lake Norman NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Layers,
    title: 'TPO Roofing',
    description:
      'Thermoplastic Polyolefin single-ply membrane offering superior UV resistance, energy efficiency, and proven performance for Lake Norman commercial buildings.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'EPDM Roofing',
    description:
      'Ethylene Propylene Diene Monomer rubber roofing known for exceptional durability and flexibility. Ideal for Lake Norman properties facing temperature extremes.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Zap,
    title: 'Modified Bitumen',
    description:
      'Multi-layer asphalt roofing system with reinforced fabric for superior waterproofing and puncture resistance. Excellent for high-traffic flat roofs.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Building2,
    title: 'Built-Up Roofing (BUR)',
    description:
      'Time-tested multi-ply roofing system using alternating layers of bitumen and reinforcing fabric. Provides decades of reliable waterproofing.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Flat Roof Repair',
    description:
      'Fast, reliable repairs for leaks, ponding water, membrane tears, and flashing failures. Emergency service available for Lake Norman businesses.',
    href: '/services/roof-repair',
  },
  {
    icon: Droplets,
    title: 'Flat Roof Coating',
    description:
      'Elastomeric and silicone roof coatings that extend flat roof life by 10-15 years. Reflective coatings reduce cooling costs for Lake Norman properties.',
    href: '/flat-roof-coating-charlotte-nc',
  },
];

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
    description: 'Factory-trained in TPO, EPDM, and modified bitumen flat roof systems.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency flat roof repairs when Lake Norman storms cause damage.',
  },
];

const localAreas = [
  'Lake Norman Waterfront',
  'Cornelius',
  'Davidson',
  'Mooresville',
  'Huntersville',
  'Denver',
  'Sherrills Ford',
  'Troutman',
  'Statesville',
  'Lake Norman Business Parks',
];

const nearbyCities = [
  { name: 'Charlotte (Flat Roof)', href: '/flat-roof-contractors-charlotte-nc' },
  { name: 'Mooresville', href: '/commercial-roofing-mooresville-nc' },
  { name: 'Cornelius', href: '/commercial-roofing-cornelius-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Denver', href: '/roofing-denver-nc' },
];

const faqs = [
  {
    question: 'What is the best flat roof material for Lake Norman NC?',
    answer:
      'TPO is the most popular flat roofing material for Lake Norman properties due to its superior UV resistance, energy efficiency (white reflective surface), and excellent waterproofing. For budget-conscious projects, EPDM offers proven durability at a lower cost. Modified bitumen is ideal for high-traffic roofs where puncture resistance matters. Our team assesses your specific building and recommends the best system for your needs and budget.',
  },
  {
    question: 'How much does a flat roof cost in the Lake Norman area?',
    answer:
      'Flat roof costs in the Lake Norman area typically range from $5.50-$12.00 per square foot installed, depending on the material and system chosen. TPO averages $6.00-$9.00 per square foot, EPDM ranges from $5.50-$8.00, and modified bitumen runs $7.00-$12.00 per square foot. Factors like roof access, existing conditions, and insulation requirements affect final pricing. We provide free, detailed estimates for all Lake Norman properties.',
  },
  {
    question: 'How long does a flat roof last in North Carolina?',
    answer:
      'With proper installation and maintenance, TPO roofs last 20-30 years, EPDM roofs last 25-30 years, modified bitumen lasts 20-25 years, and built-up roofing lasts 25-30 years. North Carolina\'s humidity and UV exposure can reduce these lifespans without regular maintenance. Proper drainage is critical for flat roofs in the Lake Norman area to prevent ponding water damage.',
  },
  {
    question: 'Do flat roofs leak more than pitched roofs?',
    answer:
      'Modern flat roofing systems, when properly installed, are extremely reliable and do not inherently leak more than pitched roofs. The key is proper drainage design, quality installation, and regular maintenance. Lake Norman flat roofs need adequate slope (minimum 1/4 inch per foot) to prevent ponding water. Our certified installers ensure proper drainage on every flat roof project.',
  },
  {
    question: 'How do you handle drainage on flat roofs near Lake Norman?',
    answer:
      'We design flat roof drainage systems using interior drains, scuppers, and gutters sized for Lake Norman\'s heavy rainfall events. Roofs are installed with tapered insulation systems to create positive drainage and eliminate ponding water. For waterfront properties, we account for additional wind-driven rain. We also install overflow drains as a safety measure for severe storms.',
  },
  {
    question: 'Can a flat roof be repaired instead of replaced?',
    answer:
      'Yes, many flat roof issues can be repaired rather than replaced. Localized leaks, small membrane tears, flashing failures, and minor ponding can often be fixed cost-effectively. However, if your flat roof has widespread membrane deterioration, multiple leak points, or is past its expected lifespan, replacement is more economical long-term. We provide honest assessments and never recommend unnecessary replacement.',
  },
  {
    question: 'What warranty do you offer on flat roofing?',
    answer:
      'We offer manufacturer warranties up to 20-30 years on flat roofing materials and a 10-year workmanship warranty on our installation. TPO and EPDM systems from our certified manufacturers include NDL (No Dollar Limit) warranty options that cover both materials and labor. Our veteran-owned company has been serving Charlotte and Lake Norman since our founding, so our warranties are backed by a stable, local business.',
  },
  {
    question: 'Do you handle flat roofing for both commercial and residential properties?',
    answer:
      'Absolutely. We install and repair flat roofs on commercial buildings, retail centers, restaurants, warehouses, and office buildings throughout Lake Norman. We also handle residential flat roofs, which are common on modern homes, additions, sunrooms, and covered porches in the Lake Norman area. The same quality materials and installation standards apply to every project.',
  },
];

export default function FlatRoofingLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Flat Roofing Lake Norman NC', url: `${SITE_CONFIG.url}/flat-roofing-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Lake Norman"
        state="NC"
        county="Mecklenburg/Iredell"
        distance={15}
        slug="flat-roofing-lake-norman-nc"
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/flat-roofing-lake-norman-nc`}
        pageName="Flat Roofing Lake Norman NC"
        city="Lake Norman"
      />
      <VoiceSearchActionSchema />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Flat Roofing Lake Norman NC' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.stock.roofCommercialFlat1}
            alt="Flat roofing services in Lake Norman NC - commercial and residential"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Commercial & Residential Flat Roofing</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Flat Roofing Lake Norman NC
              <br className="hidden md:block" />
              <span className="text-accent-light">TPO, EPDM & More</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert flat roof installation, repair, and coating for Lake Norman businesses and homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides certified flat roofing services throughout the Lake Norman region.
              From waterfront commercial properties in Cornelius to business parks in Mooresville, our team
              delivers watertight flat roof solutions backed by manufacturer warranties.
            </p>

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

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Flat Roofing Services for Lake Norman
            </h2>
            <p className="text-gray text-lg">
              From single-ply membrane installation to flat roof coatings and emergency repairs, our
              certified contractors handle all flat roofing needs for Lake Norman commercial and residential properties.
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

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Lake Norman Chooses Best Roofing Now for Flat Roofs
              </h2>
              <p className="text-gray text-lg mb-8">
                Flat roofing requires specialized knowledge and certified installation techniques.
                Our team is factory-trained on the leading flat roof systems and has completed flat roof
                projects across the Lake Norman business community.
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
                src={IMAGES.stock.roofCommercialFlat2}
                alt="Commercial flat roof installation in Lake Norman NC area"
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

      {/* Waterfront Challenges */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Flat Roofing Challenges on Lake Norman
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Lake Norman waterfront commercial properties face unique flat roofing challenges that
                require specialized expertise. The increased moisture exposure from the lake, higher wind
                loads, and heavy rainfall events demand flat roof systems designed for extreme weather resistance.
              </p>
              <p>
                Ponding water is the primary enemy of flat roofs, and Lake Norman&apos;s frequent thunderstorms
                can overwhelm poorly designed drainage systems. Our team installs tapered insulation systems
                to create positive drainage, sized scuppers and interior drains for maximum flow capacity,
                and overflow drains as a failsafe during severe storms.
              </p>
              <p>
                For Lake Norman commercial properties, we recommend TPO or EPDM membrane systems with
                fully adhered installation for superior wind uplift resistance. Combined with proper
                flashing details and regular maintenance, these systems deliver decades of leak-free
                performance for restaurants, retail centers, offices, and mixed-use buildings throughout
                the Lake Norman corridor.
              </p>
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
                Need a Flat Roof Quote for Lake Norman?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from the Lake Norman area&apos;s trusted flat roofing experts.
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

      {/* Service Areas */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Flat Roofing Across the Lake Norman Region
            </h2>
            <p className="text-gray text-lg">
              Our flat roofing contractors serve businesses and homeowners throughout the Lake Norman corridor
              and surrounding communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Norman Area Communities</h3>
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
                Lake Norman Flat Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about flat roofing services in the Lake Norman area.
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
        pageType="service"
        city="Cornelius"
        slug="flat-roofing-lake-norman-nc"
        count={4}
        title="Recent Flat Roofing Projects Near Lake Norman"
        subtitle="Browse completed flat roofing projects from the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/flat-roofing-lake-norman-nc`}
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Flat Roofing"
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
        title="Ready for Expert Flat Roofing in Lake Norman?"
        subtitle="Get a free, no-obligation estimate from our certified flat roof specialists. We assess your property and recommend the best flat roofing system for your building and budget."
      />
    </>
  );
}
