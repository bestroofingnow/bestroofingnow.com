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
  Home,
  Wrench,
  Landmark,
  MapPin,
  BookOpen,
  Palette,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Historic Home Roofing Charlotte NC',
  description:
    'Historic home roofing preservation in Charlotte NC. Period-appropriate materials, historic district compliance, Dilworth, Elizabeth, and Myers Park specialists. Synthetic slate and traditional roofing. Free consultation.',
  keywords: [
    'historic home roofing charlotte nc',
    'historic district roofing charlotte nc',
    'period appropriate roofing charlotte',
    'historic preservation roofing charlotte',
    'old home roofing charlotte nc',
    'historic roof repair charlotte',
    'synthetic slate historic homes charlotte',
    'historic home roofers charlotte',
    'century old home roofing charlotte',
    'charlotte historic home roofing contractor',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/historic-home-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Historic Home Roofing Charlotte NC | Preservation Experts | Best Roofing Now',
    description:
      'Charlotte\'s historic home roofing specialists. Period-appropriate materials, historic district compliance, and preservation expertise for Dilworth, Elizabeth, and Myers Park.',
    url: `${SITE_CONFIG.url}/historic-home-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Historic home roofing Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Landmark,
    title: 'Historic Roof Restoration',
    description: 'Faithful restoration of historic roofing systems using period-appropriate materials and traditional techniques.',
    href: '/services/roof-replacement',
  },
  {
    icon: Palette,
    title: 'Period-Appropriate Materials',
    description: 'Expert selection of natural slate, synthetic slate, wood shake, and other materials that honor your home\'s original character.',
    href: '/services/residential-roofing',
  },
  {
    icon: BookOpen,
    title: 'Historic District Compliance',
    description: 'Navigation of Charlotte\'s historic district guidelines and Historic District Commission requirements.',
    href: '/services/roof-inspection',
  },
  {
    icon: Wrench,
    title: 'Historic Roof Repair',
    description: 'Careful repairs to existing historic roofing including slate repair, flashing restoration, and leak remediation.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Synthetic Slate Installation',
    description: 'Lightweight synthetic slate options that replicate authentic slate appearance while meeting modern building codes.',
    href: '/slate-roofing-charlotte-nc',
  },
  {
    icon: Shield,
    title: 'Storm Damage Restoration',
    description: 'Careful storm damage restoration that preserves historic character while meeting insurance requirements.',
    href: '/services/storm-damage',
  },
];

const whyChooseUs = [
  {
    icon: Landmark,
    title: 'Preservation Expertise',
    description: 'Deep understanding of historic roofing systems, materials, and preservation best practices.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from homeowners in Charlotte's historic districts.`,
  },
  {
    icon: Shield,
    title: 'Manufacturer Certified',
    description: 'Certified installers for synthetic slate, natural slate, and other period-appropriate premium materials.',
  },
  {
    icon: CheckCircle,
    title: 'District Compliance',
    description: 'Experience working within Charlotte\'s historic district guidelines and commission requirements.',
  },
  {
    icon: Users,
    title: 'Skilled Craftsmen',
    description: 'Crews trained in traditional roofing techniques and careful handling of vintage architectural elements.',
  },
  {
    icon: Clock,
    title: 'Respectful Process',
    description: 'We treat every historic home with the respect and care its heritage deserves throughout the project.',
  },
];

const historicDistricts = [
  {
    name: 'Dilworth',
    era: '1890s-1930s',
    description: 'Charlotte\'s first streetcar suburb with Queen Anne, Colonial Revival, and Craftsman bungalows. Dilworth is a locally designated historic district with specific roofing guidelines.',
    href: '/roofing-dilworth-charlotte-nc',
  },
  {
    name: 'Elizabeth',
    era: '1900s-1940s',
    description: 'Diverse architectural styles including Colonial Revival, Tudor, and Craftsman homes. Elizabeth\'s historic homes require careful material selection to maintain neighborhood character.',
    href: '/roofing-contractor-charlotte-nc',
  },
  {
    name: 'Myers Park',
    era: '1910s-1940s',
    description: 'Grand estates and tree-lined boulevards featuring Georgian, Tudor, and Colonial Revival architecture. Many homes have original or period-appropriate slate and tile roofs.',
    href: '/roofing-myers-park-charlotte-nc',
  },
  {
    name: 'Plaza Midwood',
    era: '1920s-1950s',
    description: 'Eclectic neighborhood with Craftsman bungalows, Tudor cottages, and mid-century homes. Growing interest in preserving original architectural character.',
    href: '/roofing-plaza-midwood-charlotte-nc',
  },
  {
    name: 'Eastover',
    era: '1920s-1950s',
    description: 'Charlotte\'s most exclusive neighborhood with grand estates featuring original slate roofs, copper accents, and custom architectural metalwork.',
    href: '/roofing-eastover-charlotte-nc',
  },
  {
    name: 'Wesley Heights',
    era: '1900s-1930s',
    description: 'National Register historic district with Queen Anne, Colonial Revival, and Craftsman homes requiring strict preservation standards for roofing materials.',
    href: '/roofing-contractor-charlotte-nc',
  },
];

const historicMaterials = [
  {
    title: 'Natural Slate',
    description: 'The gold standard for historic roofing. We source matching slate for repairs and full replacements, matching original color, thickness, and texture.',
    href: '/slate-roofing-charlotte-nc',
  },
  {
    title: 'Synthetic Slate',
    description: 'Modern lightweight alternatives like DaVinci and EcoStar that replicate authentic slate appearance at a lower weight and cost, often approved for historic districts.',
    href: '/slate-roofing-charlotte-nc',
  },
  {
    title: 'Architectural Shingles',
    description: 'Premium designer shingles like CertainTeed Grand Manor that mimic historic materials while providing modern performance and manufacturer warranties.',
    href: '/designer-shingles-charlotte-nc',
  },
];

const nearbyAreas = [
  { name: 'Dilworth', href: '/roofing-dilworth-charlotte-nc' },
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'Plaza Midwood', href: '/roofing-plaza-midwood-charlotte-nc' },
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'NoDa', href: '/roofing-noda-charlotte-nc' },
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Eastover', href: '/roofing-eastover-charlotte-nc' },
];

const faqs = [
  {
    question: 'What makes historic home roofing different from standard residential roofing?',
    answer:
      'Historic home roofing requires knowledge of period-appropriate materials, traditional installation techniques, and compliance with historic district guidelines. The roof must honor the home\'s original architectural character while meeting modern building codes. This often means sourcing specialty materials, working with thinner or irregular roof decking, and coordinating with historic preservation commissions.',
  },
  {
    question: 'Do I need historic district approval to replace my roof in Dilworth or Elizabeth?',
    answer:
      'If your home is in a locally designated historic district like Dilworth, you may need approval from the Charlotte-Mecklenburg Historic District Commission before replacing your roof. The commission reviews material and color choices to ensure they are appropriate for the district\'s character. We handle this approval process for you, preparing all necessary documentation and material samples.',
  },
  {
    question: 'Can synthetic slate be used on historic homes in Charlotte?',
    answer:
      'Yes, synthetic slate is increasingly accepted for historic homes in Charlotte, especially products like DaVinci Roofscapes and EcoStar that closely replicate natural slate\'s appearance. Many historic district commissions approve synthetic slate when it matches the original material in profile, color, and texture. Synthetic slate offers the benefit of reduced weight on aging roof structures.',
  },
  {
    question: 'How do you match existing slate on a historic home for partial repairs?',
    answer:
      'We maintain relationships with specialty slate suppliers who can source matching slate by quarry origin, color, thickness, and weathering pattern. For partial repairs, we carefully remove damaged slates and install matching replacements using traditional copper nail and hook techniques. When exact matches are unavailable, we select the closest available alternative and can blend new and salvaged slates.',
  },
  {
    question: 'What is the cost of roofing a historic home in Charlotte?',
    answer:
      'Historic home roofing costs vary significantly based on material choice and home complexity. Synthetic slate typically ranges from $15-$25 per square foot installed, while natural slate can range from $25-$50+ per square foot. Premium architectural shingles approved for historic districts typically cost $8-$15 per square foot. We provide detailed estimates after assessing your specific home.',
  },
  {
    question: 'How do you protect a historic home during roofing work?',
    answer:
      'We implement extra protection protocols for historic homes including covering and shielding original architectural details, protecting vintage windows and trim, using careful tear-off techniques to avoid damage to underlying structures, and daily cleanup. Our crews are trained to identify and preserve historic elements that standard roofing contractors might overlook or damage.',
  },
  {
    question: 'Can you replicate decorative roofing patterns on Victorian-era homes?',
    answer:
      'Yes, we can replicate decorative slate patterns, fish-scale shingles, diamond patterns, and other ornamental roofing details found on Victorian and Queen Anne homes in Charlotte\'s historic districts. Whether using natural or synthetic materials, we work from photographs and measurements to faithfully reproduce the original decorative patterns.',
  },
  {
    question: 'Do you work with historic preservation tax credits for roofing projects?',
    answer:
      'We are familiar with the federal and North Carolina historic preservation tax credit programs that may apply to qualifying roofing projects on designated historic properties. While we cannot provide tax advice, we can ensure that our materials and methods meet the Secretary of the Interior\'s Standards for Rehabilitation, which is typically required for tax credit eligibility.',
  },
];

export default function HistoricHomeRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Historic Home Roofing Charlotte NC', url: `${SITE_CONFIG.url}/historic-home-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/historic-home-roofing-charlotte-nc`}
        pageName="Historic Home Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Historic home roofing Charlotte NC - preservation roofing specialists"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Landmark className="w-4 h-4" />
              <span className="text-sm font-semibold">Historic Home Preservation Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Historic Home Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Period-Appropriate Roofing for Charlotte&apos;s Historic Treasures
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in roofing for Charlotte&apos;s historic homes and
              historic district properties. We combine preservation expertise with modern
              building science to protect your home&apos;s heritage while ensuring lasting performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Consultation
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
                <Landmark className="w-5 h-5 text-accent-light" />
                Historic District Experts
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
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
              Preserving Charlotte&apos;s Architectural Heritage Through Expert Roofing
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Charlotte&apos;s historic neighborhoods, from Dilworth&apos;s charming bungalows to
                Myers Park&apos;s grand estates, represent irreplaceable architectural heritage that
                deserves expert care. At Best Roofing Now, we understand that roofing a historic
                home is about more than weather protection; it is about preserving the character
                and craftsmanship that make these homes extraordinary.
              </p>
              <p>
                Our team has extensive experience working in Charlotte&apos;s historic districts,
                including locally designated areas where material choices must be approved by the
                Historic District Commission. We know which materials are appropriate for each era
                and architectural style, and we handle the approval process from start to finish.
              </p>
              <p>
                Whether your historic home needs a full slate roof restoration, a synthetic slate
                upgrade, or careful repairs to preserve its original roofing, we bring the expertise
                and respect for craftsmanship that these special properties require.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Districts */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Charlotte&apos;s Historic Districts We Serve
            </h2>
            <p className="text-gray text-lg">
              Deep experience roofing homes in Charlotte&apos;s most cherished historic neighborhoods.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historicDistricts.map((district) => (
              <Link
                key={district.name}
                href={district.href}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-dark text-xl group-hover:text-primary transition-colors">
                    {district.name}
                  </h3>
                  <span className="text-sm text-primary font-medium">{district.era}</span>
                </div>
                <p className="text-gray text-sm mb-3">{district.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  View Area
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Historic Home Roofing Services
            </h2>
            <p className="text-gray text-lg">
              Specialized roofing services designed to preserve and protect Charlotte&apos;s historic homes.
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

      {/* Materials Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Period-Appropriate Roofing Materials
            </h2>
            <p className="text-gray text-lg">
              We offer a range of materials that honor your historic home&apos;s original character
              while providing modern performance and durability.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {historicMaterials.map((material) => (
              <Link
                key={material.title}
                href={material.href}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-dark mb-2 text-xl group-hover:text-primary transition-colors">
                  {material.title}
                </h3>
                <p className="text-gray text-sm">{material.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Historic Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Owners of Charlotte&apos;s historic homes choose us because we combine preservation
                knowledge with modern roofing expertise to deliver results that honor the past
                while protecting the future.
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
                alt="Historic home roofing preservation in Charlotte NC - Best Roofing Now"
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
                Own a Historic Home in Charlotte?
              </h2>
              <p className="text-white/90">
                Get a free consultation from roofing experts who understand historic preservation.
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
                Schedule Consultation
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
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nearby Areas We Serve
            </h2>
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
                Historic Home Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing for historic homes in Charlotte NC.
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
        slug="historic-home-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/historic-home-roofing-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Historic Home Roofing"
      />

      <CTASection
        title="Ready to Preserve Your Historic Home's Roof?"
        subtitle="Get a free consultation from Charlotte's historic home roofing specialists. We'll assess your roof, recommend period-appropriate materials, and ensure compliance with historic district requirements."
      />
    </>
  );
}
