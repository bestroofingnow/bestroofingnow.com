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
  Ruler,
  Hammer,
  MapPin,
  ClipboardList,
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
  title: 'Custom Home Roofing Charlotte NC',
  description:
    'Custom home roofing in Charlotte NC. Premium materials and builder coordination for architect-designed homes. BBB A+ rated. Free estimates.',
  keywords: [
    'custom home roofing charlotte nc',
    'custom home roofer charlotte',
    'architect designed home roofing charlotte',
    'custom roof installation charlotte nc',
    'one of a kind roof design charlotte',
    'custom home roof materials charlotte',
    'luxury custom home roofer charlotte nc',
    'unique roof design charlotte nc',
    'custom build roofing charlotte',
    'charlotte custom home roofing contractor',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/custom-home-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Custom Home Roofing Charlotte NC | Architect-Designed Homes | Best Roofing Now',
    description:
      'Expert custom home and new construction roofing in Charlotte NC. Builder partnerships, premium material selection, and seamless coordination with general contractors.',
    url: `${SITE_CONFIG.url}/custom-home-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Custom home roofing Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Home,
    title: 'New Construction Roofing',
    description: 'Complete roofing systems for custom-built homes from foundation to finish, coordinated with your builder\'s timeline.',
    href: '/services/residential-roofing',
  },
  {
    icon: Ruler,
    title: 'Material Selection',
    description: 'Expert guidance choosing the perfect roofing material to match your custom home\'s architectural style and budget.',
    href: '/services/roof-replacement',
  },
  {
    icon: Building2,
    title: 'Builder Partnerships',
    description: 'Trusted roofing subcontractor for Charlotte\'s top custom home builders with seamless project coordination.',
    href: '/services/commercial-roofing',
  },
  {
    icon: ClipboardList,
    title: 'Blueprint Review',
    description: 'Pre-construction roof plan review to optimize drainage, ventilation, and material efficiency before breaking ground.',
    href: '/services/roof-inspection',
  },
  {
    icon: Hammer,
    title: 'Complex Roof Systems',
    description: 'Multi-plane, steep-pitch, and architecturally complex roof designs that custom homes demand.',
    href: '/services/residential-roofing',
  },
  {
    icon: Wrench,
    title: 'Warranty & Support',
    description: 'Comprehensive manufacturer and workmanship warranties with post-construction support for your new home.',
    href: '/services/roof-repair',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Builder Preferred',
    description: 'Trusted by Charlotte\'s top custom home builders for reliable scheduling and quality installations.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from builders and homeowners across Charlotte.`,
  },
  {
    icon: Shield,
    title: 'Manufacturer Certified',
    description: 'GAF Factory-Certified and CertainTeed ShingleMaster for the highest quality new construction installations.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability and workers\' compensation coverage.',
  },
  {
    icon: Users,
    title: 'Dedicated Project Manager',
    description: 'Single point of contact coordinating with your builder, architect, and design team throughout the project.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We understand construction timelines are critical and deliver on schedule to keep your build moving forward.',
  },
];

const builderBenefits = [
  'Reliable scheduling that keeps your project on track',
  'Pre-construction blueprint review and material takeoffs',
  'Competitive builder pricing with volume discounts',
  'Clean job sites and professional crew behavior',
  'Direct communication with dedicated project manager',
  'Quick turnaround on change orders and material upgrades',
  'Warranty documentation for homeowner closing packages',
  'Code compliance expertise for Charlotte building requirements',
];

const customHomeMaterials = [
  {
    title: 'Designer Architectural Shingles',
    description: 'CertainTeed Grand Manor, GAF Grand Sequoia, and premium laminated shingles that replicate natural slate and wood shake.',
    ideal: 'Traditional, Colonial, Craftsman styles',
  },
  {
    title: 'Standing Seam Metal',
    description: 'Modern metal roofing in premium Kynar finishes for contemporary and transitional custom homes.',
    ideal: 'Contemporary, Modern Farmhouse, Transitional',
  },
  {
    title: 'Natural & Synthetic Slate',
    description: 'Authentic quarried slate or lightweight synthetic alternatives for timeless elegance and century-long performance.',
    ideal: 'Estate homes, Tudor, European styles',
  },
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
    question: 'When should I involve a roofer in the custom home building process?',
    answer:
      'We recommend involving us during the design phase, ideally before blueprints are finalized. This allows us to review roof plans for optimal drainage, ventilation, and material efficiency. Early involvement prevents costly changes during construction and ensures your roofing system is designed correctly from the start.',
  },
  {
    question: 'How do you coordinate with general contractors on new construction?',
    answer:
      'We assign a dedicated project manager who works directly with your general contractor and builder. We coordinate scheduling around other trades, attend progress meetings when needed, and maintain open communication throughout the build. Our goal is to integrate seamlessly into your construction timeline without causing delays.',
  },
  {
    question: 'What roofing materials work best for custom homes in Charlotte?',
    answer:
      'The best material depends on your home\'s architectural style, budget, and HOA requirements. For traditional estates, we recommend designer shingles or natural slate. Contemporary homes pair well with standing seam metal. We help you select materials that complement your architect\'s vision while performing well in Charlotte\'s climate.',
  },
  {
    question: 'How long does a new construction roof installation take?',
    answer:
      'A typical custom home roof installation takes 3-7 days depending on size, complexity, and material type. Premium materials like slate or copper may require additional time. We provide detailed timelines during the planning phase and coordinate closely with your builder to minimize impact on other trades.',
  },
  {
    question: 'Do you offer builder volume pricing for multiple custom homes?',
    answer:
      'Yes, we offer competitive builder pricing and volume discounts for contractors building multiple custom homes. We understand the economics of custom home building and provide transparent, predictable pricing that builders can rely on for accurate project budgeting.',
  },
  {
    question: 'What warranties are available for new construction roofing?',
    answer:
      'New construction roofing includes manufacturer warranties up to 50 years on materials plus our own workmanship warranty. As GAF Factory-Certified and CertainTeed ShingleMaster installers, we can offer enhanced warranties like GAF Golden Pledge and CertainTeed SureStart PLUS. All warranty documentation is provided for homeowner closing packages.',
  },
  {
    question: 'Can you handle complex roof designs with multiple planes and steep pitches?',
    answer:
      'Absolutely. Custom homes often feature architecturally complex roof systems with multiple planes, steep pitches, dormers, turrets, and unique angles. Our experienced crews are trained in complex roof installations and have the equipment and expertise to handle even the most challenging designs safely and efficiently.',
  },
  {
    question: 'How do you ensure proper ventilation in new construction roofing?',
    answer:
      'We design ventilation systems to meet or exceed building code requirements and manufacturer specifications. This includes calculating proper intake and exhaust ratios, selecting appropriate vent types for the roof design, and coordinating with HVAC contractors. Proper ventilation extends roof life and improves energy efficiency in Charlotte\'s hot, humid summers.',
  },
];

export default function CustomHomeRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Custom Home Roofing Charlotte NC', url: `${SITE_CONFIG.url}/custom-home-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/custom-home-roofing-charlotte-nc`}
        pageName="Custom Home Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <WebPageSchema
        name="Custom Home Roofing Charlotte NC | Architect-Designed Homes | Best Roofing Now"
        url={`${SITE_CONFIG.url}/custom-home-roofing-charlotte-nc`}
        description="New-construction roofing for Charlotte custom builders. Blueprint review, complex multi-plane systems, premium material selection (designer shingles / metal / slate), builder volume pricing, on-time delivery."
        primaryImage={IMAGES.hero.hero1}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Custom Home Roofing Charlotte NC', url: `${SITE_CONFIG.url}/custom-home-roofing-charlotte-nc` },
        ]}
      />
      <FeaturedSnippetListAnswerSchema
        question="What does custom home roofing in Charlotte include during new construction?"
        directAnswer="Custom home roofing on Charlotte new construction starts with blueprint review during design phase, then includes material selection (designer shingles, standing seam metal, natural or synthetic slate), complex multi-plane installation, balanced ventilation engineered to NC IRC §R806, builder coordination, and warranty documentation for the homeowner closing package."
        items={[
          'Pre-construction blueprint review (drainage paths, ventilation calc, material takeoffs, valley/hip/ridge planning) before framing locks in geometry',
          'Material selection for architectural style: designer shingles (CertainTeed Grand Manor / GAF Grand Sequoia / Camelot II) for traditional, standing seam metal Kynar finishes for modern farmhouse, natural or synthetic slate (DaVinci / Brava) for estate',
          'Complex multi-plane installation with steep pitches, dormers, turrets, and architectural transitions requiring specialized crews and engineering review',
          'Balanced ventilation system to NC IRC §R806 (1:300 NFVA balanced ridge intake/soffit exhaust) coordinated with HVAC and insulation contractors',
          'Direct GC coordination through dedicated project manager: scheduling around dry-in milestones, change-order responsiveness, on-site progress meetings, code-inspection support',
          'Premium NDL warranty documentation for closing packages: GAF Golden Pledge / CertainTeed 5-Star / Owens Corning Platinum Protection 50 yr non-prorated transferable',
        ]}
        pageUrl={`${SITE_CONFIG.url}/custom-home-roofing-charlotte-nc`}
      />
      <FreeInspectionOfferSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero1}
            alt="Custom home roofing Charlotte NC - new construction roof installation"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Hammer className="w-4 h-4" />
              <span className="text-sm font-semibold">New Construction Roofing Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Custom Home Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert Roofing for New Construction &amp; Custom-Built Homes
            </p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now partners with Charlotte&apos;s top custom home builders and architects on
              new construction across Myers Park, SouthPark, Ballantyne, Lake Norman waterfront, and the
              Davidson/Huntersville/Waxhaw corridors. As GAF Master Elite (top 2% of US roofers),
              CertainTeed SELECT ShingleMaster, and Owens Corning Platinum Preferred installers, we
              deliver blueprint review, premium material selection (designer shingles, standing seam
              metal, natural or synthetic slate), 50 yr non-prorated transferable warranties, and
              dedicated PM coordination through framing, dry-in, and final inspection.
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
                Builder Preferred
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Home Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Charlotte&apos;s Trusted Partner for Custom Home Roofing
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Building a custom home is one of the most significant investments you will make, and the
                roofing system is critical to protecting that investment for decades. Best Roofing Now
                specializes in new construction roofing for custom-built homes throughout the Charlotte
                metro area, working hand-in-hand with builders, architects, and homeowners.
              </p>
              <p>
                Unlike standard production home roofing, custom homes demand a higher level of coordination,
                material expertise, and craftsmanship. Complex roof designs with multiple planes, steep
                pitches, dormers, and architectural features require experienced crews who understand how
                every detail affects both aesthetics and performance.
              </p>
              <p>
                We bring that expertise to every new construction project, from modest custom builds in
                South Charlotte to grand estate homes in Myers Park and waterfront properties on Lake
                Norman. Our dedicated project managers coordinate directly with your general contractor
                to ensure on-time delivery without compromising quality.
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
              Custom Home Roofing Services
            </h2>
            <p className="text-gray text-lg">
              From pre-construction planning to final installation, we deliver comprehensive
              roofing solutions for Charlotte&apos;s custom home builders and homeowners.
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
                Why Builders &amp; Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Custom home builders and homeowners across Charlotte choose us because we understand the
                unique demands of new construction roofing and deliver consistent quality on every project.
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
                alt="Custom home roofing installation in Charlotte NC - Best Roofing Now"
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

      {/* Builder Benefits Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                For Builders: Why Partner with Best Roofing Now?
              </h2>
              <p className="text-gray text-lg">
                We make your custom home builds smoother and more profitable with reliable roofing
                subcontracting that never holds up your project.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {builderBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray">{benefit}</span>
                </div>
              ))}
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
                Building a Custom Home in Charlotte?
              </h2>
              <p className="text-white/90">
                Get a free roofing consultation for your new construction project today.
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

      {/* Materials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Premium Materials for Custom Homes
            </h2>
            <p className="text-gray text-lg">
              We help you select the perfect roofing material to complement your custom home&apos;s
              architectural style and meet Charlotte building codes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {customHomeMaterials.map((material) => (
              <div key={material.title} className="bg-light rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-2">{material.title}</h3>
                <p className="text-gray text-sm mb-4">{material.description}</p>
                <p className="text-sm text-primary font-medium">Best for: {material.ideal}</p>
              </div>
            ))}
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
              Custom Home Roofing Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              We provide new construction roofing services throughout the Charlotte metro area and Lake Norman region.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md max-w-2xl mx-auto">
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
                Custom Home Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about new construction and custom home roofing in Charlotte NC.
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
        slug="custom-home-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/custom-home-roofing-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Custom Home Roofing"
      />

      <CTASection
        title="Ready to Roof Your Custom Home?"
        subtitle="Get a free consultation from Charlotte's trusted new construction roofing experts. We'll review your plans, recommend the best materials, and coordinate with your builder for a seamless installation."
      />
    </>
  );
}
