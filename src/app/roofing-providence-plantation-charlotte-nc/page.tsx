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
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Providence Plantation Charlotte NC',
  description:
    'Trusted roofer in Providence Plantation Charlotte NC. Premium architectural shingles for established homes. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing providence plantation charlotte nc',
    'roofers providence plantation',
    'providence plantation roofing contractor',
    'south charlotte roofers',
    'providence plantation roof repair',
    'providence plantation roof replacement',
    'roofing providence country club',
    'architectural shingles providence plantation',
    'best roofer providence plantation charlotte',
    'providence plantation charlotte roofing services',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-providence-plantation-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Providence Plantation Charlotte NC | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving Providence Plantation in south Charlotte NC. Architectural shingles and premium materials for established homes. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-providence-plantation-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Providence Plantation Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Expert roofing for Providence Plantation\'s established traditional and colonial homes ranging from 2,500-4,500 sq ft.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Professional roofing for commercial properties near Providence Plantation and Providence Road.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Reliable repairs for leaks, missing shingles, and wear on Providence Plantation\'s mature roofing systems.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full roof replacement with premium architectural and designer shingles for homes built in the 1980s-2000s.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Thorough inspections for Providence Plantation homes with detailed reports on roof condition and remaining life.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Fast storm damage restoration for Providence Plantation\'s tree-lined streets where wind and debris cause roof damage.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Providence Plantation homeowners.`,
  },
  {
    icon: Shield,
    title: 'South Charlotte Experts',
    description: 'Deep experience with Providence Plantation\'s established homes and neighborhood standards.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Premium Materials',
    description: 'CertainTeed, GAF, and Owens Corning architectural and designer shingles that complement traditional homes.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Providence Plantation homeowners need us most.',
  },
];

// Providence Plantation neighborhoods and areas
const providencePlantationAreas = [
  'Providence Plantation',
  'Providence Country Club',
  'Providence Crossing',
  'Providence Road',
  'Rea Road',
  'Tom Short Road',
  'Providence Downs',
  'Providence Springs',
  'Strawberry Hill',
  'Providence West',
  'Providence Estates',
  'Bridgehampton',
  'Highgate',
  'Raintree',
  'Olde Providence',
  'Providence Glen',
  'Ballantyne East',
  'Ardrey Chase',
  'Marvin Creek',
  'Weddington Chase',
];

// Nearby areas served
const nearbyAreas = [
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'Matthews', href: '/roofing-matthews-nc' },
  { name: 'Piper Glen', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'Rea Farms', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'Weddington', href: '/roofing-weddington-nc' },
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Marvin', href: '/roofing-marvin-nc' },
  { name: 'Mint Hill', href: '/roofing-mint-hill-nc' },
];

// FAQs specific to Providence Plantation
const faqs = [
  {
    question: 'What roofing services do you offer in Providence Plantation Charlotte NC?',
    answer:
      'Best Roofing Now provides complete roofing services in Providence Plantation including roof repair, roof replacement, new roof installation, storm damage repair, emergency services, and comprehensive inspections. We specialize in architectural and designer shingles ideal for the neighborhood\'s traditional and colonial homes.',
  },
  {
    question: 'How much does a roof replacement cost in Providence Plantation?',
    answer:
      'Roof replacement costs in Providence Plantation typically range from $12,000-$35,000 depending on home size (most are 2,500-4,500 sq ft), roof complexity, and material choice. We provide detailed, transparent estimates and help you choose the best value for your home.',
  },
  {
    question: 'What roofing materials work best for Providence Plantation homes?',
    answer:
      'Providence Plantation homes built in the 1980s-2000s typically feature architectural shingles, which remain the best choice for the neighborhood. We offer premium options from CertainTeed Landmark, GAF Timberline HDZ, and Owens Corning Duration. Some homeowners upgrade to designer shingles for added curb appeal.',
  },
  {
    question: 'Do many Providence Plantation homes need roof replacement?',
    answer:
      'Yes, many Providence Plantation homes built in the 1980s and 1990s are now reaching or past the 25-30 year lifespan of their original roofing materials. If your roof is 20+ years old, we recommend a professional inspection to assess its condition and plan ahead for replacement.',
  },
  {
    question: 'How long does a roof replacement take in Providence Plantation?',
    answer:
      'Most Providence Plantation homes require 2-4 days for complete roof replacement, depending on size and roof complexity. We work efficiently to minimize disruption to your family and neighborhood while maintaining the highest quality standards.',
  },
  {
    question: 'Do you work with Providence Plantation HOA requirements?',
    answer:
      'Yes, we have extensive experience working with Providence Plantation HOA guidelines and architectural review requirements. We help you select materials, colors, and styles that comply with community standards while enhancing your home\'s curb appeal.',
  },
  {
    question: 'What warranty do you provide for Providence Plantation roofing projects?',
    answer:
      'We offer comprehensive warranty coverage including manufacturer warranties up to 50 years on materials and our own workmanship warranty. As certified installers for CertainTeed, GAF, and Owens Corning, we can offer enhanced warranties like GAF Golden Pledge and CertainTeed SureStart PLUS.',
  },
  {
    question: 'Do you handle insurance claims for storm damage in Providence Plantation?',
    answer:
      'Absolutely. Providence Plantation\'s tree-lined streets make homes susceptible to wind and debris damage during storms. We provide thorough documentation, work directly with insurance adjusters, and ensure your claim covers proper restoration with quality materials.',
  },
];

export default function RoofingProvidencePlantationCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Providence Plantation Charlotte NC', url: `${SITE_CONFIG.url}/roofing-providence-plantation-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Professional roofing contractor in Providence Plantation Charlotte NC - Best Roofing Now crew"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | South Charlotte Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Providence Plantation <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Trusted Roofing for South Charlotte's Established Community
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is the trusted choice for Providence Plantation homeowners. We specialize in
              roofing for established south Charlotte homes, delivering expert craftsmanship with premium
              architectural shingles that protect your home and enhance curb appeal on every tree-lined street.
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
                Premium Materials
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Providence Plantation-Specific Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Expert Roofing for Providence Plantation's Established Homes
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Providence Plantation is one of south Charlotte's most desirable established communities,
                featuring traditional, colonial, and transitional homes nestled along beautiful tree-lined
                streets. Built primarily from the 1980s through the 2000s, these homes range from 2,500 to
                4,500 square feet with home values from $400K to $800K.
              </p>
              <p>
                Many Providence Plantation homes are now reaching the age where original roofing materials
                need attention or replacement. Best Roofing Now understands the specific needs of these
                established homes and delivers roofing solutions that protect your investment while maintaining
                the neighborhood's attractive, cohesive appearance.
              </p>
              <p>
                Whether you live in Providence Plantation proper, Providence Country Club, or the adjacent
                Providence Crossing community, our team provides premium architectural shingles and expert
                installation that stands up to Carolina weather and enhances your home's value for years to come.
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
              Roofing Services in Providence Plantation
            </h2>
            <p className="text-gray text-lg">
              From roof replacements on aging homes to storm damage repairs, our certified contractors deliver
              quality roofing for Providence Plantation's established community.
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
                Why Providence Plantation Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Providence Plantation homeowners choose us because we understand established south Charlotte
                communities. Our combination of premium materials, expert craftsmanship, and reliable service
                makes us the trusted roofer for this well-maintained neighborhood.
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
                src={IMAGES.hero.hero1}
                alt="Best Roofing Now - Trusted roofing contractor in Providence Plantation Charlotte NC"
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
                Need a Trusted Roofer in Providence Plantation?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from south Charlotte's trusted roofing experts.
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
              Serving All of Providence Plantation
            </h2>
            <p className="text-gray text-lg">
              We provide expert roofing services throughout Providence Plantation and surrounding south Charlotte neighborhoods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Providence Plantation Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Providence Plantation Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {providencePlantationAreas.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Areas We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {nearbyAreas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{area.name}</span>
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

      {/* Premium Materials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Materials for Providence Plantation Homes
            </h2>
            <p className="text-gray text-lg">
              We offer premium roofing materials that complement Providence Plantation's traditional
              and colonial architecture while delivering lasting protection.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Architectural Shingles</h3>
              <p className="text-gray text-sm">
                CertainTeed Landmark, GAF Timberline HDZ, and Owens Corning Duration dimensional shingles that add depth and curb appeal to established homes.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Designer Shingles</h3>
              <p className="text-gray text-sm">
                Premium designer shingles like CertainTeed Grand Manor and GAF Grand Sequoia for homeowners seeking an upgraded look on their traditional homes.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Impact-Resistant Options</h3>
              <p className="text-gray text-sm">
                Class 4 impact-resistant shingles that protect against hail damage and may qualify for insurance premium discounts for Providence Plantation homeowners.
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
              Our Work Near Providence Plantation
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects in Providence Plantation and surrounding south Charlotte neighborhoods.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed roof replacement in Providence Plantation Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed architectural shingle installation in south Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof project near Providence Plantation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Professional roofing work in Providence Plantation area"
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
                Providence Plantation Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Providence Plantation Charlotte NC.
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
        pageType="other"
        city="Charlotte"
        slug="roofing-providence-plantation-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-providence-plantation-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roofing Providence Plantation"
      />

      <CTASection
        title="Ready for Expert Roofing in Providence Plantation?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide recommendations tailored to your Providence Plantation home."
      />
    </>
  );
}
