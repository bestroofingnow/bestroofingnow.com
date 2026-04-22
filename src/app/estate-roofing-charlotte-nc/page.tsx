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
  Home,
  Building2,
  Wrench,
  Crown,
  MapPin,
  Gem,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  SpeakableContentBlocks,
  WebPageSchema,
  FeaturedSnippetListAnswerSchema,
  FreeInspectionOfferSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Estate Roofing Charlotte NC | Large Homes',
  description:
    'Estate roofing specialists in Charlotte NC for homes 5,000+ sq ft. Complex roof systems and premium materials for large homes. BBB A+ rated. Free consultation.',
  keywords: [
    'estate roofing charlotte',
    'large home roofing charlotte nc',
    'mansion roofing charlotte',
    'estate roof replacement charlotte',
    'large home roofer charlotte nc',
    'luxury estate roofing charlotte',
    'big house roofing charlotte',
    'complex roof systems charlotte nc',
    'multi-story roofing charlotte',
    'charlotte estate roofing contractor',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/estate-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Estate Roofing Charlotte NC | Large Home Specialists | Best Roofing Now',
    description:
      'Charlotte\'s estate roofing experts for 5,000+ sq ft homes. Complex roof systems, premium materials, and dedicated project management for large properties.',
    url: `${SITE_CONFIG.url}/estate-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Estate roofing Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Home,
    title: 'Full Estate Roof Replacement',
    description: 'Complete roof replacement for large homes with complex designs, multiple wings, and varied rooflines.',
    href: '/services/roof-replacement',
  },
  {
    icon: Crown,
    title: 'Premium Material Installation',
    description: 'Expert installation of slate, copper, tile, designer shingles, and other luxury materials for estate homes.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Multi-Phase Projects',
    description: 'Phased roofing projects for occupied estates, minimizing disruption while maintaining quality.',
    href: '/services/residential-roofing',
  },
  {
    icon: Wrench,
    title: 'Complex Roof Repairs',
    description: 'Expert repair of intricate roof systems with multiple valleys, dormers, turrets, and architectural details.',
    href: '/services/roof-repair',
  },
  {
    icon: Gem,
    title: 'Copper & Metal Accents',
    description: 'Custom copper work, standing seam metal panels, and accent roofing that elevates estate aesthetics.',
    href: '/metal-roofing-charlotte-nc',
  },
  {
    icon: Shield,
    title: 'Storm Damage Restoration',
    description: 'Comprehensive storm damage restoration for large properties with insurance claim management expertise.',
    href: '/services/storm-damage',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Estate Specialists',
    description: 'Proven track record with homes 5,000-15,000+ sq ft across Charlotte\'s most prestigious neighborhoods.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from estate homeowners throughout Charlotte.`,
  },
  {
    icon: Shield,
    title: 'Premium Certifications',
    description: 'GAF Factory-Certified and CertainTeed ShingleMaster with specialized training in luxury materials.',
  },
  {
    icon: CheckCircle,
    title: 'Fully Insured',
    description: 'Comprehensive liability coverage appropriate for high-value properties and premium installations.',
  },
  {
    icon: Users,
    title: 'Dedicated Project Manager',
    description: 'Single point of contact managing every detail of your estate roofing project from start to finish.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'We work around your schedule, including phased installations for occupied properties and seasonal timing.',
  },
];

const estateFeatures = [
  {
    title: 'Complex Roof Systems',
    description: 'Estate homes often feature intricate roof designs with 20+ planes, steep pitches, dormers, turrets, covered porticos, and architectural details that require specialized expertise.',
  },
  {
    title: 'Multi-Phase Execution',
    description: 'Large estate projects may span 2-4 weeks and can be executed in phases to accommodate occupied homes, weather windows, and material delivery schedules.',
  },
  {
    title: 'Premium Materials',
    description: 'We source and install the finest roofing materials including natural slate, hand-formed copper, imported clay tile, and the highest-tier architectural shingles from GAF and CertainTeed.',
  },
  {
    title: 'Property Protection',
    description: 'Extensive protection protocols for landscaping, outdoor living spaces, pools, driveways, and architectural features that surround estate properties.',
  },
];

const estateNeighborhoods = [
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc', value: '$800K-$4M+' },
  { name: 'Eastover', href: '/roofing-eastover-charlotte-nc', value: '$1.5M-$10M+' },
  { name: 'Quail Hollow', href: '/roofing-southpark-charlotte-nc', value: '$1.5M-$8M+' },
  { name: 'Foxcroft', href: '/roofing-southpark-charlotte-nc', value: '$800K-$3M+' },
  { name: 'The Peninsula', href: '/roofing-cornelius-nc', value: '$1.5M-$8M+' },
  { name: 'Piper Glen', href: '/roofing-ballantyne-charlotte-nc', value: '$1.2M-$5M+' },
  { name: 'Lake Norman Waterfront', href: '/roofing-cornelius-nc', value: '$1M-$5M+' },
  { name: 'Davidson', href: '/roofing-davidson-nc', value: '$750K-$3M+' },
];

const nearbyAreas = [
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'Lake Norman', href: '/roofing-cornelius-nc' },
  { name: 'Dilworth', href: '/roofing-dilworth-charlotte-nc' },
  { name: 'Huntersville', href: '/roofing-huntersville-nc' },
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Waxhaw', href: '/roofing-waxhaw-nc' },
];

const faqs = [
  {
    question: 'What qualifies as an estate roofing project?',
    answer:
      'Estate roofing typically involves homes of 5,000 square feet or larger with complex roof systems featuring multiple planes, steep pitches, dormers, turrets, or mixed material applications. These homes require specialized crews, extended timelines, premium materials, and a dedicated project manager to ensure exceptional results.',
  },
  {
    question: 'How long does an estate roof replacement take?',
    answer:
      'Estate roof replacements typically take 1-4 weeks depending on the home\'s size, roof complexity, and material type. A 5,000 sq ft home with standard architectural shingles may take 5-7 days, while a 10,000+ sq ft estate with slate or copper can require 3-4 weeks. We provide detailed timelines during the planning phase.',
  },
  {
    question: 'Can you handle multi-phase roofing projects on occupied estates?',
    answer:
      'Absolutely. We frequently execute multi-phase roofing projects on occupied estate homes. This involves dividing the roof into sections, completing each phase before moving to the next, and ensuring the home remains weatherproof throughout the process. Our project manager coordinates scheduling to minimize disruption to your daily life.',
  },
  {
    question: 'What materials do you recommend for estate homes in Charlotte?',
    answer:
      'For Charlotte estate homes, we recommend materials based on architectural style and budget. Natural slate for traditional estates, designer shingles like CertainTeed Grand Manor for elegant homes, standing seam copper for architectural accents, and clay tile for Mediterranean styles. We help you select materials that enhance your home\'s character while performing well in Charlotte\'s climate.',
  },
  {
    question: 'How do you protect property during large-scale roofing projects?',
    answer:
      'We implement comprehensive property protection including covering landscaping with tarps, protecting pools and outdoor kitchens, laying boards over driveways and walkways, daily debris cleanup, magnetic nail sweeping, and post-project property inspection. For estate homes, we often set up dedicated material staging areas away from primary living and entertaining spaces.',
  },
  {
    question: 'Do you work with insurance on storm damage for large homes?',
    answer:
      'Yes, we have extensive experience with insurance claims for storm damage on estate properties. Larger homes often have more complex claims due to their size, multiple material types, and higher replacement costs. We provide thorough documentation, meet with adjusters on-site, and advocate for fair settlements that cover proper restoration with matching premium materials.',
  },
  {
    question: 'What warranty coverage is available for estate roofing?',
    answer:
      'Estate roofing projects include manufacturer warranties up to 50 years (lifetime on select products) plus our own workmanship warranty. As certified installers, we offer enhanced warranties like GAF Golden Pledge and CertainTeed SureStart PLUS. For premium materials like slate and copper, we provide specialized warranty documentation reflecting their exceptional longevity.',
  },
  {
    question: 'How much does estate roofing cost in Charlotte?',
    answer:
      'Estate roofing costs in Charlotte typically range from $25,000-$150,000+ depending on home size, roof complexity, and material selection. A 5,000 sq ft home with premium shingles may cost $25,000-$40,000, while a 10,000+ sq ft estate with natural slate or copper can exceed $100,000. We provide detailed, transparent estimates for every project.',
  },
];

export default function EstateRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Estate Roofing Charlotte NC', url: `${SITE_CONFIG.url}/estate-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/estate-roofing-charlotte-nc`}
        pageName="Estate Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <WebPageSchema
        name="Estate Roofing Charlotte NC | Large Home Specialists | Best Roofing Now"
        url={`${SITE_CONFIG.url}/estate-roofing-charlotte-nc`}
        description="Estate roofing for Charlotte homes 5,000+ sq ft: complex multi-plane roofs, premium materials (slate / copper / clay tile / designer shingles), dedicated PM, multi-phase scheduling."
        primaryImage={IMAGES.hero.hero1}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Estate Roofing Charlotte NC', url: `${SITE_CONFIG.url}/estate-roofing-charlotte-nc` },
        ]}
      />
      <FeaturedSnippetListAnswerSchema
        question="What makes estate roofing different from standard residential roofing in Charlotte?"
        directAnswer="Estate roofing on Charlotte homes 5,000+ sq ft requires specialized crews, premium materials, multi-week timelines, and dedicated project management. Roof areas often exceed 8,000-15,000 sq ft with 20+ planes, steep pitches, dormers, turrets, and mixed materials — and 2026 budgets typically run $25,000 to $150,000+."
        items={[
          'Complex multi-plane roof systems with 20+ planes, steep pitches, dormers, turrets, covered porticos, and architectural details requiring specialized crews and engineering review',
          'Premium materials with full NDL warranty stack: natural slate, hand-formed copper, imported clay tile, CertainTeed Grand Manor / Presidential Shake, GAF Camelot II / Glenwood / Grand Sequoia (Golden Pledge / 5-Star)',
          'Multi-week to multi-phase execution (5,000-7,000 sq ft asphalt projects 1-2 weeks; 10,000+ sq ft slate/copper estates 3-4 weeks; phased scheduling on occupied properties)',
          'Dedicated estate project manager as single point of contact for material procurement, crew scheduling, quality control, HOA coordination, and daily client communication',
          'Comprehensive property protection: tarped landscaping, plywood paths over driveways, dedicated material staging away from pools and outdoor kitchens, daily debris cleanup, magnetic nail sweeps',
          'High-value insurance claim handling with Xactimate documentation for matching premium materials, on-site adjuster meetings, and supplemental filing for code-required upgrades',
        ]}
        pageUrl={`${SITE_CONFIG.url}/estate-roofing-charlotte-nc`}
      />
      <FreeInspectionOfferSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero1}
            alt="Estate roofing Charlotte NC - large home roof replacement specialists"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 rounded-full px-4 py-2 mb-4">
              <Crown className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-200">Large Home Roofing Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Estate Roofing <br className="hidden md:block" />
              <span className="text-amber-400">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium Roofing for Charlotte&apos;s Largest &amp; Finest Homes
            </p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in estate roofing for Charlotte homes 5,000-15,000+ sq ft
              across Myers Park, Eastover, Quail Hollow, Foxcroft, Piper Glen, The Peninsula, and
              Lake Norman waterfront. As GAF Master Elite, CertainTeed SELECT ShingleMaster, and
              Owens Corning Platinum Preferred installers, we deliver premium materials (natural
              slate, hand-formed copper, imported clay tile, designer shingles) with 50-year
              non-prorated warranties, dedicated project management, and multi-phase scheduling
              for occupied properties.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Estate Consultation
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-400" />
                5,000+ Sq Ft Specialists
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Charlotte&apos;s Estate Roofing Specialists
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Estate homes are among the most challenging roofing projects in the industry.
                With roof areas often exceeding 8,000-15,000 square feet, complex multi-plane
                designs, steep pitches, and premium material requirements, these projects demand
                contractors with specialized expertise and the right equipment.
              </p>
              <p>
                Best Roofing Now has built our reputation on delivering exceptional roofing for
                Charlotte&apos;s largest homes. From the grand estates of Myers Park and Eastover to
                sprawling waterfront properties on Lake Norman, we bring the experience, crews,
                and project management capabilities that large-scale residential roofing requires.
              </p>
              <p>
                Every estate project receives a dedicated project manager who oversees material
                procurement, crew scheduling, quality control, and client communication. We
                understand that these properties represent significant investments, and we treat
                every detail with the care and precision your home deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Estate Features */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Sets Estate Roofing Apart
            </h2>
            <p className="text-gray text-lg">
              Estate homes require specialized approaches that go far beyond standard residential roofing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {estateFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-xl mb-3">{feature.title}</h3>
                <p className="text-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Estate Roofing Services
            </h2>
            <p className="text-gray text-lg">
              Comprehensive roofing solutions for Charlotte&apos;s largest and most distinguished homes.
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
                Why Estate Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Charlotte&apos;s estate homeowners choose us because we bring the specialized expertise,
                premium materials, and dedicated project management that large-scale residential roofing demands.
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
                alt="Estate roofing project in Charlotte NC - Best Roofing Now"
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
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Own a Large Estate in Charlotte?
              </h2>
              <p className="text-white/90">
                Schedule a complimentary consultation with our estate roofing specialists.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-amber-700"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Consultation
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-amber-700 hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Estate Neighborhoods</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Charlotte&apos;s Premier Estate Neighborhoods
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {estateNeighborhoods.map((neighborhood) => (
              <Link
                key={neighborhood.name}
                href={neighborhood.href}
                className="bg-light rounded-xl p-4 shadow-sm hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-dark group-hover:text-primary transition-colors">
                  {neighborhood.name}
                </h3>
                <p className="text-sm text-gray">{neighborhood.value}</p>
              </Link>
            ))}
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
                Estate Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing for large homes and estates in Charlotte NC.
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
        pageType="other"
        city="Charlotte"
        slug="estate-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/estate-roofing-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Estate Roofing"
      />

      <CTASection
        title="Ready for Estate-Caliber Roofing?"
        subtitle="Schedule a complimentary consultation with Charlotte's estate roofing specialists. We'll assess your property, recommend premium materials, and develop a project plan tailored to your home's unique requirements."
      />
    </>
  );
}
