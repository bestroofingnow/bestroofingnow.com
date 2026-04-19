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
  Wrench,
  Wind,
  MapPin,
  Zap,
  Waves,
  Lock,
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
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
import { LKNNeighborhoodGrid } from '@/components/sections/LKNNeighborhoodGrid';
import { LKNHowToBundle } from '@/components/seo/LKNHowToSchemas';
export const metadata: Metadata = {
  title: 'Metal Roof The Peninsula Cornelius NC',
  description:
    'Standing seam metal roofing for The Peninsula Cornelius NC. Kynar 500 finishes, 140+ MPH wind rating, HOA-approved palettes, McElroy & Drexel installs. Free estimate.',
  keywords: [
    'metal roof the peninsula cornelius',
    'standing seam peninsula cornelius',
    'metal roofing peninsula lake norman',
    'the peninsula metal roof contractor',
    'kynar 500 metal roof cornelius nc',
    'metal roofing peninsula club cornelius',
    'standing seam metal roof 28031',
    'mcelroy metal roof peninsula cornelius',
    'drexel metal roof lake norman',
    'metal roof installer peninsula cornelius nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/metal-roofing-the-peninsula-cornelius-nc`,
  },
  openGraph: {
    title: 'Metal Roof The Peninsula Cornelius NC | Standing Seam Specialists',
    description:
      'Premium standing seam metal roofing for The Peninsula in Cornelius. Kynar 500 finishes, 140+ MPH wind rating, full Peninsula HOA / ARC compliance.',
    url: `${SITE_CONFIG.url}/metal-roofing-the-peninsula-cornelius-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Standing seam metal roof at The Peninsula Cornelius NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Home,
    title: 'Standing Seam Installation',
    description:
      'Full standing seam metal roof systems for Peninsula estates with concealed fasteners, 24-gauge steel or .032 aluminum, and Kynar 500 finishes.',
    href: '/standing-seam-metal-roof-lake-norman-nc',
  },
  {
    icon: Gem,
    title: 'Metal Accents & Turret Roofs',
    description:
      'Standing seam metal accents on porches, dormers, bay windows, and turrets — paired with synthetic slate or designer shingles on the main field.',
    href: '/copper-roofing-charlotte-nc',
  },
  {
    icon: Wind,
    title: 'Wind-Rated Lakefront Systems',
    description:
      'Engineered standing seam systems rated for 140+ MPH winds — built for the exposed peninsula landform on Jetton Rd inside The Peninsula Club.',
    href: '/lake-norman-waterfront-roofing',
  },
  {
    icon: Zap,
    title: 'Cool Metal Roofing',
    description:
      'Reflective Kynar 500 cool-roof colors that reduce attic temps and cooling costs by 20-25% across hot Cornelius summers around Lake Norman.',
    href: '/metal-roofing-cornelius-nc',
  },
  {
    icon: Wrench,
    title: 'Metal Roof Repair & Re-Seal',
    description:
      'Panel repair, fastener replacement, sealant renewal, and flashing rebuilds for existing metal roofs throughout The Peninsula community.',
    href: '/services/roof-repair',
  },
  {
    icon: Shield,
    title: 'Full Roof Replacement',
    description:
      'Complete tear-off and metal replacement for Peninsula homes with original 1990s/2000s shingle roofs reaching 25-30 year end of life.',
    href: '/services/roof-replacement',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Standing Seam Certified',
    description:
      'Manufacturer-trained installers for McElroy, Drexel Metals, Petersen (PAC-CLAD), Englert, and ATAS standing seam metal systems.',
  },
  {
    icon: Lock,
    title: 'Peninsula Gate & ARC Experience',
    description:
      'We pre-register crews with Peninsula security, follow community work-hour rules, and have submitted dozens of Peninsula ARC roofing packages.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from homeowners across Cornelius, Davidson, and Lake Norman.`,
  },
  {
    icon: Shield,
    title: 'Manufacturer Warranties',
    description:
      'Up to 50-year non-prorated finish warranties on Kynar 500 (PVDF) coatings, plus our installation workmanship guarantee.',
  },
  {
    icon: Users,
    title: 'Lake Norman Specialists',
    description:
      'Years of metal roofing work along Jetton Rd, Peninsula Club Dr, and the wider Cornelius 28031 luxury market.',
  },
  {
    icon: Clock,
    title: '50-70+ Year Lifespan',
    description:
      'A standing seam metal roof installed correctly on a Peninsula home is, realistically, the last roof that home will ever need.',
  },
];

const metalBenefits = [
  {
    title: 'Wind Resistance',
    description:
      'Standing seam metal at The Peninsula is rated to 140+ MPH — critical for Lake Norman peninsula exposure where shingles top out around 110 MPH.',
    stat: '140+ MPH',
    label: 'Wind Rating',
  },
  {
    title: 'Premium Aesthetic',
    description:
      'Kynar 500 charcoal, slate gray, and weathered copper finishes match the estate feel of the Rees Jones-designed Peninsula Club community.',
    stat: 'Kynar 500',
    label: 'PVDF Finish',
  },
  {
    title: 'Energy Efficiency',
    description:
      'Reflective metal panels reduce summer cooling load by 20-25%, a meaningful savings on 4,000-7,000+ sqft Peninsula estates.',
    stat: '20-25%',
    label: 'Cooling Savings',
  },
  {
    title: 'Longevity',
    description:
      'Standing seam metal roofs at The Peninsula routinely last 50-70+ years — the literal last roof needed on the home.',
    stat: '50-70+',
    label: 'Year Lifespan',
  },
];

const lakeNormanAreas = [
  { name: 'The Peninsula', href: '/roofing-the-peninsula-cornelius-nc' },
  { name: 'Cornelius', href: '/roofing-cornelius-nc' },
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Huntersville', href: '/roofing-huntersville-nc' },
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Lake Norman', href: '/roofing-lake-norman-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

const faqs = [
  {
    question: 'How much does a metal roof cost at The Peninsula Cornelius?',
    answer:
      'Standing seam metal roofing at The Peninsula in Cornelius typically costs $14-$24 per square foot installed, reflecting premium 24-gauge steel or .032 aluminum panels with Kynar 500 PVDF finishes. For a 4,500 sq ft Peninsula estate that works out to roughly $63,000-$108,000. Larger 7,000-10,000+ sq ft homes on Peninsula Club Dr or Jetton Rd can run $100,000-$240,000 depending on roof complexity, brand (McElroy, Drexel, Petersen PAC-CLAD), and whether copper accents are included.',
  },
  {
    question: 'Does The Peninsula HOA approve standing seam metal roofs?',
    answer:
      'Yes. The Peninsula Architectural Review Committee (ARC) has approved standing seam metal roofs in Kynar 500 finishes on many homes inside the community, especially in muted, estate-friendly colors such as charcoal gray, slate gray, matte black, dark bronze, and weathered copper. Approval is typically granted on a per-home basis after submitting panel specifications, color chips, and elevation drawings. Best Roofing Now prepares the full Peninsula ARC submittal package on your behalf.',
  },
  {
    question: 'What is the best metal roof color for The Peninsula?',
    answer:
      'For The Peninsula, the most ARC-friendly and resale-friendly Kynar 500 colors are charcoal gray, slate gray, matte black, dark bronze, and weathered copper. These tones complement the brick, stone, stucco, and Hardie siding common to Peninsula Club estates and read as "premium" rather than "industrial." Bright reds, blues, and greens are generally not approved for Peninsula homes. Your installer should bring full-size Kynar 500 chips to evaluate against your home in Lake Norman daylight before ordering.',
  },
  {
    question: 'How long do metal roofs last at the Lake Norman Peninsula?',
    answer:
      'A properly installed standing seam metal roof at The Peninsula on Lake Norman should last 50-70+ years. The Kynar 500 PVDF finish carries 30-50 year non-prorated warranties against fade and chalk, and the underlying 24-gauge steel or aluminum substrate routinely outlasts the finish. For most Peninsula homeowners, a metal roof installed in their 40s or 50s will quite literally be the last roof the home ever needs.',
  },
  {
    question: 'Are metal roofs noisy in rain at The Peninsula?',
    answer:
      'No. A modern standing seam metal roof installed over solid plywood decking with synthetic underlayment — the standard system on Peninsula homes — is no louder than a shingle roof during Lake Norman rainstorms. The decking, underlayment, attic insulation, and conditioned spaces below absorb sound. Peninsula homeowners who switch from shingles to standing seam consistently report no noticeable rain noise difference inside the home.',
  },
  {
    question: 'Can I do metal accents instead of full metal at The Peninsula?',
    answer:
      'Absolutely — and this is one of the most popular Peninsula configurations. Many Peninsula homes use standing seam metal in Kynar 500 only on porches, dormers, bay windows, and turret roofs, paired with synthetic slate, designer shingles (GAF Grand Canyon, CertainTeed Grand Manor), or premium architectural shingles on the main roof field. This blended approach is ARC-friendly, hits a more accessible price point, and adds premium architectural character. See our synthetic slate page for combined-system ideas.',
  },
  {
    question: 'What wind rating do I need at The Peninsula?',
    answer:
      'At minimum, we recommend 130 MPH wind-rated roofing for Peninsula homes, with 140-150 MPH ratings strongly recommended for homes on the most exposed lakefront points along Jetton Rd. Standing seam metal roofs ship with 140+ MPH UL 580 / UL 1897 wind uplift ratings as standard, while typical asphalt shingles are limited to 110 MPH. The peninsula landform inside The Peninsula Club catches stronger straight-line winds off Lake Norman than most Cornelius neighborhoods.',
  },
  {
    question: 'Will my insurance discount apply for metal roofing at The Peninsula?',
    answer:
      'Most NC carriers offer wind-mitigation discounts on Peninsula homeowner policies when you upgrade to a 140+ MPH-rated standing seam metal roof, and many also offer impact-resistance discounts for UL 2218 Class 4 metal panels. Discounts typically range from 5% to 25% off the wind portion of premium. We supply the manufacturer documentation and installation certificate your insurance carrier needs to apply the credit on your Peninsula policy.',
  },
  {
    question: 'How long does metal roof installation take at The Peninsula?',
    answer:
      'A standing seam metal roof installation on a Peninsula home typically takes 5-12 working days depending on roof size, pitch, and complexity. A 4,000-5,000 sqft home runs about 5-7 days, while 7,000-10,000+ sqft estates with copper accents, multiple turrets, and complex valley work can take 10-14+ days. We coordinate gate access, deliveries, and dumpster placement around Peninsula community guidelines and the homeowner schedule.',
  },
  {
    question: 'What is the ARC submittal process for a Peninsula metal roof?',
    answer:
      'The Peninsula ARC process for a metal roof generally requires: (1) a written application describing the work, (2) manufacturer panel specifications (e.g., McElroy Maxima, Drexel 1.5" mechanical seam, Petersen PAC-CLAD Snap-Clad), (3) Kynar 500 color chips, (4) elevation drawings or photos showing where metal will be installed, and (5) the installer\'s license and insurance. Best Roofing Now assembles and submits the full package, responds to ARC questions, and won\'t schedule installation until written approval is in hand.',
  },
];

export default function MetalRoofingThePeninsulaCorneliusPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Cornelius NC', url: `${SITE_CONFIG.url}/roofing-cornelius-nc` },
          { name: 'The Peninsula Cornelius NC', url: `${SITE_CONFIG.url}/roofing-the-peninsula-cornelius-nc` },
          {
            name: 'Metal Roofing The Peninsula Cornelius NC',
            url: `${SITE_CONFIG.url}/metal-roofing-the-peninsula-cornelius-nc`,
          },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/metal-roofing-the-peninsula-cornelius-nc`}
        pageName="Metal Roofing The Peninsula Cornelius NC"
        city="Cornelius"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/metal-roofing-the-peninsula-cornelius-nc`} city={"Cornelius"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero1}
            alt="Standing seam metal roof at The Peninsula Cornelius NC — Lake Norman luxury estate"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 rounded-full px-4 py-2 mb-4">
              <Lock className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">
                Gated Peninsula Club Specialists
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Metal Roof The Peninsula <br className="hidden md:block" />
              <span className="text-blue-300">Cornelius NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Standing seam metal roofing for The Peninsula on Lake Norman
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now installs premium standing seam metal roofs for The Peninsula
              estates in Cornelius — Kynar 500 finishes, 140+ MPH wind ratings, and full Peninsula
              ARC compliance. Built for the wind-exposed Jetton Rd peninsula landform and the
              Rees Jones-designed Peninsula Club community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Peninsula Estimate
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
                <Star className="w-5 h-5 text-blue-300 fill-blue-300" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-300" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Wind className="w-5 h-5 text-blue-300" />
                140+ MPH Wind Rated
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-300" />
                Peninsula ARC Approved
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #1 - Why Peninsula Estate Owners Are Choosing Metal */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why The Peninsula Estate Owners Are Choosing Metal Roofing
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                The Peninsula Club is a gated golf community on the Jetton Rd peninsula in
                Cornelius (28031), built around a Rees Jones-designed championship course and
                roughly 1,200 luxury homes ranging from $850K to $2.5M+. Many of those homes
                were built in the late 1990s and early 2000s, which means a large cohort of
                Peninsula roofs are now hitting 25-30 years of age — squarely in the
                replacement window. For owners weighing what to put back on, standing seam
                metal roofing is rapidly becoming the top choice at The Peninsula.
              </p>
              <p>
                The reasons are straightforward. The Peninsula sits on an exposed landform
                that catches stronger straight-line winds off Lake Norman than most of
                inland Cornelius. A 140+ MPH-rated standing seam metal roof simply outperforms
                a 110 MPH-rated asphalt shingle in that environment. Combine that with the
                premium aesthetic of a Kynar 500 PVDF finish — charcoal, slate gray,
                weathered copper — and metal hits two of the most important boxes for any
                Peninsula homeowner: durability and curb appeal worthy of an estate.
              </p>
              <p>
                There is also a financial argument. A standing seam metal roof installed
                correctly on a Peninsula home should last 50-70+ years. For an owner planning
                to keep the home through retirement, that is the last roof the property will
                ever need. Add 20-25% summer cooling savings from reflective metal panels
                and many NC insurance carriers&apos; wind-mitigation discounts, and the math
                on metal at The Peninsula increasingly outperforms premium shingle on a
                15-20 year horizon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Standing Seam Metal Benefits at The Peninsula
            </h2>
            <p className="text-gray text-lg">
              Why metal roofing has become the default upgrade for Peninsula Club estates on
              Lake Norman.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metalBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-primary mb-1">{benefit.stat}</div>
                <div className="text-sm text-gray mb-4">{benefit.label}</div>
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2 #2 - Services */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Metal Roofing Services for The Peninsula Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Full-service standing seam metal roofing — full replacements, accents, repairs,
              and ARC submittals — for homes inside The Peninsula in Cornelius.
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

      {/* H2 #3 - Cost */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              How Much Does a Metal Roof Cost at The Peninsula Cornelius?
            </h2>
            <div className="prose prose-lg max-w-none text-gray mb-8">
              <p>
                Standing seam metal roofs at The Peninsula in Cornelius typically run
                <strong> $14-$24 per square foot installed</strong>. That premium range
                reflects 24-gauge steel or .032 aluminum panels with Kynar 500 PVDF finishes,
                full tear-off of the existing roof, premium synthetic underlayment, ice and
                water shield in valleys, and the additional handling and protection required
                inside a gated community of this caliber.
              </p>
              <p>
                The biggest cost drivers on a Peninsula metal roof are home size, roof
                complexity (turrets, dormers, multiple valleys), panel brand
                (McElroy, Drexel, Petersen PAC-CLAD, Englert, ATAS), and whether copper
                accents are mixed in. Cedar and slate accents push cost further. For a
                detailed apples-to-apples breakdown across Lake Norman, see our
                <Link href="/lake-norman-roofing-costs-2026" className="text-primary hover:underline"> 2026 Lake Norman roofing cost guide </Link>
                or the <Link href="/roofing-cost-cornelius-nc" className="text-primary hover:underline">Cornelius cost page</Link>.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-sm text-gray mb-1">3,500 sq ft Peninsula home</p>
                <p className="text-2xl font-bold text-primary mb-2">$49K-$84K</p>
                <p className="text-sm text-gray">
                  Standing seam, Kynar 500 finish, single-color field, modest accents.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-sm text-gray mb-1">4,500 sq ft Peninsula estate</p>
                <p className="text-2xl font-bold text-primary mb-2">$63K-$108K</p>
                <p className="text-sm text-gray">
                  24-ga steel or .032 aluminum, full tear-off, premium underlayment.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-sm text-gray mb-1">7,000-10,000+ sq ft</p>
                <p className="text-2xl font-bold text-primary mb-2">$100K-$240K</p>
                <p className="text-sm text-gray">
                  Larger Peninsula Club Dr / Jetton Rd estates with turret and copper work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #4 - HOA & ARC Approval */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Peninsula HOA &amp; ARC Approval for Metal Roofing
            </h2>
            <div className="prose prose-lg max-w-none text-gray mb-6">
              <p>
                The Peninsula&apos;s Architectural Review Committee (ARC) does approve
                standing seam metal roofs on a per-home basis, and has done so on many
                Peninsula homes over the past decade. Approval almost always hinges on three
                things: (1) the panel system and gauge, (2) the Kynar 500 color, and
                (3) where on the home the metal will be installed. Bright industrial colors
                are rarely approved; estate-friendly muted tones routinely are.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">
                  Typically ARC-Friendly Kynar 500 Colors
                </h3>
                <ul className="text-gray text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Charcoal Gray</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Slate Gray</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Matte Black</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Dark / Burnished Bronze</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Weathered Copper accents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Aged Patina Green (accents only)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">
                  What Best Roofing Now Submits to Peninsula ARC
                </h3>
                <ul className="text-gray text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Written application describing the scope</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Manufacturer spec sheets (McElroy, Drexel, Petersen)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Kynar 500 PVDF color chips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Elevation drawings / photos of metal locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>NC roofing license + insurance certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Wind uplift and finish warranty documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #5 - Standing Seam vs Premium Shingle */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Standing Seam vs Premium Shingle for The Peninsula
            </h2>
            <p className="text-gray text-lg text-center mb-10 max-w-3xl mx-auto">
              How standing seam metal compares head-to-head with premium designer shingle
              systems for Peninsula homes in Cornelius.
            </p>
            <div className="overflow-x-auto bg-white rounded-xl shadow-md">
              <table className="w-full text-left">
                <thead className="bg-primary/10 text-dark">
                  <tr>
                    <th className="p-4 font-bold">Factor</th>
                    <th className="p-4 font-bold">Standing Seam Metal</th>
                    <th className="p-4 font-bold">Premium Designer Shingle</th>
                  </tr>
                </thead>
                <tbody className="text-gray text-sm">
                  <tr className="border-t">
                    <td className="p-4 font-semibold text-dark">Lifespan</td>
                    <td className="p-4">50-70+ years</td>
                    <td className="p-4">25-40 years</td>
                  </tr>
                  <tr className="border-t bg-light/50">
                    <td className="p-4 font-semibold text-dark">Wind Rating</td>
                    <td className="p-4">140+ MPH (UL 580 / UL 1897)</td>
                    <td className="p-4">110-130 MPH</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-semibold text-dark">Installed Cost (Peninsula)</td>
                    <td className="p-4">$14-$24 / sq ft</td>
                    <td className="p-4">$8-$14 / sq ft</td>
                  </tr>
                  <tr className="border-t bg-light/50">
                    <td className="p-4 font-semibold text-dark">Energy / Cooling</td>
                    <td className="p-4">20-25% summer cooling savings</td>
                    <td className="p-4">Minimal — dark shingles absorb heat</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-semibold text-dark">Finish Warranty</td>
                    <td className="p-4">30-50 yr Kynar 500 PVDF</td>
                    <td className="p-4">Lifetime (limited / prorated)</td>
                  </tr>
                  <tr className="border-t bg-light/50">
                    <td className="p-4 font-semibold text-dark">Maintenance</td>
                    <td className="p-4">Minimal — annual visual inspection</td>
                    <td className="p-4">Moderate — granule loss, algae, blow-offs</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-semibold text-dark">Peninsula ARC Approval</td>
                    <td className="p-4">Approved in muted Kynar 500 colors</td>
                    <td className="p-4">Approved in designer profiles</td>
                  </tr>
                  <tr className="border-t bg-light/50">
                    <td className="p-4 font-semibold text-dark">Resale on Peninsula Estates</td>
                    <td className="p-4">Premium signal — &quot;last roof&quot;</td>
                    <td className="p-4">Expected baseline for the community</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray text-sm text-center mt-6">
              For a deeper material comparison across Lake Norman, see our
              <Link href="/standing-seam-metal-roof-lake-norman-nc" className="text-primary hover:underline"> standing seam Lake Norman page </Link>
              or our
              <Link href="/synthetic-slate-roofing-lake-norman-nc" className="text-primary hover:underline"> synthetic slate page</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #6 - Wind Performance */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Wind Performance: Why Metal Beats Shingle for Peninsula Estates
            </h2>
            <div className="prose prose-lg max-w-none text-gray mb-6">
              <p>
                The Peninsula sits on a literal peninsula jutting into Lake Norman off Jetton
                Rd. That landform is exactly what gives the community its dramatic water
                views — and exactly what makes wind exposure a real engineering concern.
                Straight-line winds, downbursts during summer thunderstorms, and the
                outer bands of tropical systems all hit Peninsula rooflines harder than
                they hit interior Cornelius neighborhoods.
              </p>
              <p>
                Standing seam metal panels are mechanically seamed (or snap-locked) into a
                continuous, interlocking surface with concealed fasteners. There are no
                tabs to lift, no individual pieces to blow off, and no exposed nails to back
                out over time. Tested standing seam systems from McElroy, Drexel, and
                Petersen PAC-CLAD routinely achieve UL 580 Class 90 and UL 1897 wind uplift
                ratings well past 140 MPH. Premium asphalt shingle, by contrast, is
                generally limited to 110-130 MPH — and that&apos;s on a brand-new roof with
                hand-sealed tabs, not one that&apos;s been in the Lake Norman sun for ten
                summers.
              </p>
              <p>
                For Peninsula homeowners, the practical result is fewer storm claims, fewer
                emergency tarp calls, and — in many cases — meaningful wind-mitigation
                credits on NC homeowners insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Considering a Standing Seam Metal Roof at The Peninsula?
              </h2>
              <p className="text-white/90">
                Get a Peninsula-specific estimate, ARC submittal package, and Kynar 500
                color consultation from our metal roofing specialists.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-800"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-blue-800 hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #7 - Why Best Roofing Now */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Best Roofing Now for Peninsula Metal Installations
              </h2>
              <p className="text-gray text-lg mb-8">
                Metal roofing on a Peninsula estate is a serious project. It needs the right
                panel brand, the right gauge, the right finish, the right ARC documentation,
                and a crew that respects a gated community. We bring all of that.
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
                alt="Standing seam metal roof installation at The Peninsula in Cornelius NC by Best Roofing Now"
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

      {/* Approved Brands */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Standing Seam Brands We Install at The Peninsula
            </h2>
            <p className="text-gray text-lg">
              Manufacturer-trained on the leading standing seam metal systems in the U.S.
              market — all available in Kynar 500 PVDF finishes for The Peninsula ARC.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { name: 'McElroy Metal', detail: 'Maxima, Medallion-Lok' },
              { name: 'Drexel Metals', detail: '1.5" Mechanical Seam' },
              { name: 'Petersen PAC-CLAD', detail: 'Snap-Clad, Tite-Loc' },
              { name: 'Englert', detail: 'Series 1300 / 2500' },
              { name: 'ATAS', detail: 'Standing Seam Systems' },
            ].map((brand) => (
              <div
                key={brand.name}
                className="bg-light rounded-xl p-4 text-center shadow-sm"
              >
                <p className="font-bold text-dark">{brand.name}</p>
                <p className="text-sm text-gray">{brand.detail}</p>
              </div>
            ))}
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
              Serving The Peninsula &amp; All of Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We install standing seam metal roofs across The Peninsula, Cornelius 28031, and
              the wider Lake Norman region.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-3">
              {lakeNormanAreas.map((area) => (
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

      {/* Related Pages */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Related Peninsula &amp; Metal Roofing Pages
            </h2>
            <p className="text-gray text-lg">
              Explore related content for The Peninsula and metal roofing on Lake Norman.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/roofing-the-peninsula-cornelius-nc"
              className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <Lock className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Roofing The Peninsula Cornelius
              </h3>
              <p className="text-gray text-sm mb-3">
                Full luxury roofing services for The Peninsula gated community.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/standing-seam-metal-roof-lake-norman-nc"
              className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <Wind className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Standing Seam Lake Norman
              </h3>
              <p className="text-gray text-sm mb-3">
                Standing seam metal roofing across the Lake Norman region.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/metal-roofing-cornelius-nc"
              className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <Home className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Metal Roofing Cornelius NC
              </h3>
              <p className="text-gray text-sm mb-3">
                Metal roofing services across all of Cornelius 28031.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/metal-roofing-lake-norman-nc"
              className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <Waves className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Metal Roofing Lake Norman
              </h3>
              <p className="text-gray text-sm mb-3">
                Lake Norman-wide metal roofing for waterfront and lakeside homes.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/luxury-roofing-lake-norman-nc"
              className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <Gem className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Luxury Roofing Lake Norman
              </h3>
              <p className="text-gray text-sm mb-3">
                Premium roofing for Lake Norman&apos;s most exclusive estates.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/lake-norman-waterfront-roofing"
              className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <Waves className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Lake Norman Waterfront Roofing
              </h3>
              <p className="text-gray text-sm mb-3">
                Roofing engineered for direct lake exposure and wind.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* H2 #8 - FAQ */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Metal Roofing The Peninsula FAQs
              </h2>
              <p className="text-gray text-lg">
                Hyper-local answers about standing seam metal roofing for The Peninsula in
                Cornelius on Lake Norman.
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
        city="Cornelius"
        slug="metal-roofing-the-peninsula-cornelius-nc"
        count={4}
        title="Recent Roofing Projects Near The Peninsula"
        subtitle="Recent roofing work from Best Roofing Now in and around The Peninsula on Lake Norman."
        schemaPageUrl={`${SITE_CONFIG.url}/metal-roofing-the-peninsula-cornelius-nc`}
      />

      <CityGeoSection
        city="Cornelius"
        state="NC"
        citySlug="cornelius-nc"
        service="Metal Roofing"
      />

      {/* Lake Norman Guide Cross-Link */}
      <section className="py-8 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray mb-4">
              Want the full picture on roofing the Lake Norman market?
            </p>
            <Link
              href="/lake-norman-roofing-guide"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-lg"
            >
              Read The Complete Lake Norman Roofing Guide (2026)
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <LKNNeighborhoodGrid currentCity="Cornelius" currentSlug="metal-roofing-the-peninsula-cornelius-nc" />
      <LKNPartnershipsBlock city={'Cornelius'} />
      <LKNDataCitations city={'Cornelius'} />
      <CTASection
        title="Ready for a Standing Seam Metal Roof at The Peninsula?"
        subtitle="Get a free, Peninsula-specific estimate from Best Roofing Now. We'll measure your home, walk you through Kynar 500 color options, prepare your Peninsula ARC submittal, and deliver a standing seam metal roof engineered to last 50-70+ years on Lake Norman."
      />
    </>
  );
}
