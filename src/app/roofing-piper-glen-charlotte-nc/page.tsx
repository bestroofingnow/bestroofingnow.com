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
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Piper Glen Charlotte NC',
  description:
    'Trusted roofer in Piper Glen Charlotte NC. Premium roofing for executive golf community homes. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing piper glen charlotte nc',
    'roofers piper glen',
    'piper glen roofing contractor',
    'golf community roofing charlotte',
    'piper glen roof repair',
    'piper glen roof replacement',
    'luxury roofing piper glen',
    'designer shingles piper glen charlotte',
    'best roofer piper glen charlotte',
    'piper glen estates roofing services',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-piper-glen-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Piper Glen Charlotte NC | Golf Community Roofer | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor specializing in executive homes in Piper Glen Charlotte NC. Designer shingles, metal accents. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-piper-glen-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Piper Glen Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Executive Home Roofing',
    description: 'Premium roofing solutions for Piper Glen\'s custom-built executive homes ranging from 4,000-7,000 sq ft.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Expert roofing for commercial properties and clubhouses in the Piper Glen and Providence area.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Meticulous repairs for designer shingles, architectural shingles, and metal accents on golf course homes.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full replacement with designer shingles, premium architectural shingles, or metal roofing systems.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Comprehensive inspections for Piper Glen homes with detailed condition reports and HOA-compliant recommendations.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration with premium materials that meet Piper Glen community standards.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Piper Glen homeowners.`,
  },
  {
    icon: Shield,
    title: 'Golf Community Expertise',
    description: 'Experienced with gated golf community requirements including HOA compliance and architectural standards.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance for executive homes.',
  },
  {
    icon: Users,
    title: 'Designer Materials',
    description: 'Access to premium designer shingles from CertainTeed, GAF, and Owens Corning for executive homes.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Piper Glen homeowners need us most.',
  },
];

// Piper Glen neighborhoods and areas
const piperGlenNeighborhoods = [
  'Piper Glen',
  'Piper Glen Estates',
  'Piper Glen Golf Course',
  'Providence Country Club',
  'Providence Plantation',
  'Highgate',
  'Rea Farms',
  'Rea Road Corridor',
  'Providence Road West',
  'Ballantyne East',
  'Ardrey Kell Road',
  'Community House Road',
  'Johnston Road',
  'Providence Crossing',
  'Berkeley Place',
  'Reavencrest',
  'Stratford on Providence',
  'The Sanctuary',
  'Wynfield Creek',
  'Whitegate',
];

// Nearby areas served
const nearbyAreas = [
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'Providence Plantation', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Rea Farms', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Weddington', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Marvin', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Waxhaw', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Luxury Roofing', href: '/luxury-roofing-charlotte-nc' },
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
];

// FAQs specific to Piper Glen
const faqs = [
  {
    question: 'What roofing services do you offer in Piper Glen Charlotte NC?',
    answer:
      'Best Roofing Now provides complete roofing services in Piper Glen including roof repair, roof replacement, new roof installation, storm damage repair, emergency services, and comprehensive inspections. We specialize in designer shingles, premium architectural shingles, and metal accents that meet Piper Glen\'s exacting community standards.',
  },
  {
    question: 'Do you specialize in golf community roofing in Piper Glen?',
    answer:
      'Yes, Best Roofing Now has extensive experience with Piper Glen\'s gated golf community and its custom-built executive homes. We understand the high standards and HOA requirements in this prestigious community and offer premium materials, expert craftsmanship, and meticulous attention to detail for homes ranging from 4,000 to 7,000+ square feet.',
  },
  {
    question: 'How much does a roof replacement cost in Piper Glen?',
    answer:
      'Roof replacement costs in Piper Glen typically range from $12,000-$40,000 depending on home size, roof complexity, and material choice. Many Piper Glen homes feature larger footprints with complex rooflines and premium designer shingles or metal accents. We provide detailed, transparent estimates for every project.',
  },
  {
    question: 'What premium roofing materials do you offer for Piper Glen homes?',
    answer:
      'We offer the finest roofing materials including CertainTeed Grand Manor and Landmark Premium shingles, GAF Grand Sequoia and Timberline HDZ designer shingles, Owens Corning Duration Designer shingles, standing seam metal roofing accents, and premium synthetic options. We help you select materials that complement your home\'s architecture and meet HOA requirements.',
  },
  {
    question: 'How long does a roof replacement take on a Piper Glen home?',
    answer:
      'Piper Glen executive homes typically require 2-5 days for complete roof replacement, depending on home size, roof complexity, and material type. We coordinate with the Piper Glen HOA and gate management to ensure smooth access and minimal disruption to the community.',
  },
  {
    question: 'Do you work with Piper Glen HOA and architectural review boards?',
    answer:
      'Yes, we have extensive experience working with Piper Glen\'s HOA and architectural review committee. We understand the gated community\'s approval processes and can help you select materials, colors, and styles that meet community guidelines while enhancing your home\'s curb appeal on the golf course.',
  },
  {
    question: 'What warranty do you provide on Piper Glen roofing projects?',
    answer:
      'We offer comprehensive warranty coverage including manufacturer warranties up to 50 years on materials (lifetime on some premium products) and our own workmanship warranty. As certified installers, we can offer enhanced warranties like GAF Golden Pledge and CertainTeed SureStart PLUS for Piper Glen homes.',
  },
  {
    question: 'Do you handle insurance claims for storm damage in Piper Glen?',
    answer:
      'Absolutely. We have extensive experience with insurance claims for storm damage on executive properties in Piper Glen. We provide thorough documentation, work directly with adjusters, and advocate for settlements that cover proper restoration with premium materials matching your home\'s existing quality and community standards.',
  },
];

export default function RoofingPiperGlenCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Piper Glen Charlotte NC', url: `${SITE_CONFIG.url}/roofing-piper-glen-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero1}
            alt="Professional roofing contractor in Piper Glen Charlotte NC - Best Roofing Now crew"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Golf Community Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Piper Glen <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium Roofing for Charlotte's Premier Golf Community
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is the trusted choice for Piper Glen's executive homeowners. We specialize in
              premium roofing for custom-built golf course homes, using designer materials and delivering
              craftsmanship that matches the excellence of this exclusive gated community.
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
                Designer Materials
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Piper Glen-Specific Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Executive Roofing Services for Piper Glen's Golf Course Homes
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Piper Glen is one of Charlotte's most sought-after gated golf communities, where custom-built
                executive homes line the fairways of the renowned Piper Glen golf course. Established in the
                1990s and 2000s, these impressive 4,000-7,000+ square foot homes represent the finest in
                Charlotte luxury living with values ranging from $600K to $1.5M.
              </p>
              <h3>Roofing Challenges Specific to Piper Glen</h3>
              <p>
                Piper Glen homes built in the late 1990s and early 2000s are now 25-30 years old — right
                at the end of life for the standard 25-year architectural shingles that were commonly
                installed during original construction. If your home still has its original roof, you're
                likely seeing granule loss in gutters, curling edges on south-facing slopes, and reduced
                wind resistance. The golf-course-adjacent lots get heavy sun exposure on the
                fairway side with little shade protection, which accelerates shingle aging by 3-5 years
                compared to tree-shaded sections.
              </p>
              <p>
                The Piper Glen HOA's architectural review committee requires pre-approval for all roof
                replacements. Approved colors and materials are specified in the community covenants —
                generally earth-tone architectural shingles in the "Weathered Wood," "Barkwood," or
                "Charcoal" family. Designer shingles like CertainTeed Grand Manor and GAF Camelot II
                are approved and popular among homeowners seeking a distinctive look. We submit the
                approval paperwork on your behalf and typically receive approval within 5-10 business days.
              </p>
              <p>
                With roof areas averaging 35-55 squares (3,500-5,500 sq ft) on Piper Glen homes,
                replacement costs typically fall between $18,000-$35,000 for premium architectural
                shingles, depending on complexity and material grade. Homes with multiple roof planes,
                hip-and-valley designs, or standing-seam metal accents on portico roofs will be at the
                higher end. We provide itemized estimates so you see exactly where each dollar goes.
              </p>
              <p>
                Course-adjacent homes require special coordination during tear-off and installation.
                We schedule work on weekday mornings to minimize disruption to golfers and neighbors,
                use magnetic nail sweepers along the property perimeter, and place protective tarps on
                landscaping adjacent to the course. Our crews are experienced in the extra care these
                high-visibility properties demand.
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
              Premium Roofing Services in Piper Glen
            </h2>
            <p className="text-gray text-lg">
              From designer roof replacements to meticulous repairs, our certified contractors deliver
              exceptional quality for Piper Glen's executive homes.
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
                Why Piper Glen Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Piper Glen homeowners choose us because we understand what it takes to work in Charlotte's
                premier gated golf community. Our combination of designer materials, expert craftsmanship,
                and HOA-compliant service matches the standards of this exclusive neighborhood.
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
                src={IMAGES.hero.hero1}
                alt="Best Roofing Now - Trusted roofing contractor in Piper Glen Charlotte NC"
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
                Need a Roofing Contractor in Piper Glen?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte's premier golf community roofing experts.
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
              Serving All of Piper Glen
            </h2>
            <p className="text-gray text-lg">
              We provide premium roofing services throughout Piper Glen and surrounding Charlotte neighborhoods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Piper Glen Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Piper Glen Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {piperGlenNeighborhoods.map((neighborhood) => (
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
              Premium Roofing Materials for Piper Glen Homes
            </h2>
            <p className="text-gray text-lg">
              We offer the finest roofing materials available, ensuring your Piper Glen home receives
              a roof worthy of its executive character and golf course setting.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Designer Shingles</h3>
              <p className="text-gray text-sm">
                CertainTeed Grand Manor, GAF Grand Sequoia, and Owens Corning Duration Designer shingles that elevate your home's curb appeal.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Architectural Shingles</h3>
              <p className="text-gray text-sm">
                High-performance architectural shingles with enhanced wind resistance and dimensional profiles ideal for golf course homes.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Metal Roofing Accents</h3>
              <p className="text-gray text-sm">
                Standing seam metal accents, copper details, and metal roofing systems that add distinguished character to executive homes.
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
              Our Work in Piper Glen
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects in Piper Glen and surrounding neighborhoods.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.project1}
                alt="Completed executive home roof replacement in Piper Glen Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed designer shingle installation in Piper Glen"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof project in Piper Glen"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.drone2}
                alt="Professional roofing work on Piper Glen home"
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
                Piper Glen Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Piper Glen Charlotte NC.
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
        slug="roofing-piper-glen-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-piper-glen-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Roofing Piper Glen"

      />

      <CTASection
        title="Ready to Work with Piper Glen's Premier Roofing Experts?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide recommendations worthy of your Piper Glen executive home."
      />
    </>
  );
}
