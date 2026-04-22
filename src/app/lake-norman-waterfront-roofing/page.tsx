import { Metadata } from 'next';
import { Fraunces } from 'next/font/google';
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
  MapPin,
  Waves,
  Wind,
  Droplets,
  Sun,
  Home,
} from 'lucide-react';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
});

// Evolved "Lake Norman Waterfront" palette from Claude Design handoff
const LKN_PALETTE = {
  navy: '#0E1F57',
  navyDeep: '#081134',
  red: '#B8322B',
  copper: '#A86A43',
  copperLight: '#C88B64',
  cream: '#F5F1EA',
  lakeMist: '#E7EEF2',
  ink: '#0B1220',
  slate: '#3C4658',
  mute: '#8A93A3',
  line: '#E5E8EE',
  gold: '#D8A852',
} as const;
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
import { LKNNeighborhoodGrid } from '@/components/sections/LKNNeighborhoodGrid';
import { LKNHowToBundle } from '@/components/seo/LKNHowToSchemas';
import { LKNExpertiseSchema } from '@/components/seo/LKNExpertiseSchema';
import { LKNFounderSchema } from '@/components/seo/LKNFounderSchema';
const LAKE_NORMAN_CITIES = ['Mooresville', 'Cornelius', 'Davidson', 'Huntersville', 'Denver', 'Sherrills Ford'];

export const metadata: Metadata = {
  title: 'Lake Norman Waterfront Roofing',
  description:
    'Waterfront roofing for Lake Norman lakefront estates. Standing seam metal, natural slate, and Class 4 impact systems engineered for open-water exposure. Call (704) 605-6047.',
  keywords: [
    'waterfront roofing lake norman',
    'lakefront home roofer',
    'lake house roofing lake norman nc',
    'waterfront roof replacement lake norman',
    'lakefront roofing contractor',
    'wind resistant roofing lake norman',
    'lake norman waterfront home roofer',
    'impact resistant shingles lake norman',
    'standing seam metal roof lake norman',
    'lake house roof repair',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/lake-norman-waterfront-roofing`,
  },
  openGraph: {
    title: 'Lake Norman Waterfront Roofing | Lakefront Home Specialists',
    description:
      'Waterfront roofing specialists for Lake Norman lakefront homes. Wind-resistant, impact-rated materials designed for lakeside exposure.',
    url: `${SITE_CONFIG.url}/lake-norman-waterfront-roofing`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.modern1,
        width: 1200,
        height: 630,
        alt: 'Lake Norman waterfront home roofing - lakefront specialists',
      },
    ],
  },
};

// Waterfront roofing challenges
const waterfrontChallenges = [
  {
    icon: Wind,
    title: 'Wind Exposure Over Open Water',
    description:
      'Lake Norman spans over 32,000 acres. Homes on the shoreline face sustained winds 20-40% stronger than inland properties, with gusts channeled across the open water surface that can exceed 80 MPH during storms.',
  },
  {
    icon: Droplets,
    title: 'Moisture & Humidity Effects',
    description:
      'Lakefront homes experience elevated humidity year-round. Persistent moisture accelerates shingle degradation, promotes algae and moss growth, and can compromise underlayment integrity if not properly addressed.',
  },
  {
    icon: Sun,
    title: 'High-UV Lake Reflection',
    description:
      'Water surfaces reflect UV radiation onto lakefront roofs, increasing UV exposure by up to 25%. This accelerates shingle granule loss and color fading, reducing the effective lifespan of standard roofing materials.',
  },
  {
    icon: Waves,
    title: 'Wind-Driven Rain & Ice Dams',
    description:
      'Horizontal rain driven by lake winds penetrates standard installations. In winter, temperature differentials between the lake and shore create ice dam conditions that standard roofing systems cannot withstand.',
  },
];

// Recommended materials
const waterfrontMaterials = [
  {
    name: 'Standing Seam Metal Roofing',
    rating: 'Best Overall',
    windRating: '140+ MPH',
    lifespan: '50-70 years',
    description:
      'The gold standard for Lake Norman waterfront homes. Concealed fastener panels resist wind uplift, shed water instantly, and reflect UV radiation. Zero maintenance and exceptional longevity in lakeside conditions.',
    priceRange: '$18-$28 per sq ft installed',
  },
  {
    name: 'Class 4 Impact-Resistant Shingles',
    rating: 'Best Value',
    windRating: '130+ MPH',
    lifespan: '30-50 years',
    description:
      'GAF HDZ and CertainTeed Landmark Pro shingles with SBS-modified asphalt withstand hail, wind-driven debris, and UV degradation. Insurance discounts of 10-28% available for Class 4 rated installations.',
    priceRange: '$10-$16 per sq ft installed',
  },
  {
    name: 'Natural Slate Roofing',
    rating: 'Premium Choice',
    windRating: '110+ MPH',
    lifespan: '75-150 years',
    description:
      'Natural slate is virtually impervious to moisture, UV, and biological growth. Ideal for luxury Lake Norman waterfront estates where aesthetics and century-long durability justify the investment.',
    priceRange: '$25-$45 per sq ft installed',
  },
  {
    name: 'Synthetic Slate & Composite',
    rating: 'Smart Alternative',
    windRating: '130+ MPH',
    lifespan: '40-60 years',
    description:
      'DaVinci and Brava synthetic slate tiles deliver the look of natural slate at 40% less weight and cost. Impact-rated, wind-resistant, and engineered for high-moisture environments.',
    priceRange: '$14-$22 per sq ft installed',
  },
];

// Lake Norman waterfront communities
const waterfrontCommunities = [
  {
    name: 'Cornelius',
    slug: 'cornelius-nc',
    neighborhoods: 'The Peninsula, Jetton Road, Robbins Park',
    waterfrontNote: 'Highest concentration of waterfront estates on LKN',
  },
  {
    name: 'Davidson',
    slug: 'davidson-nc',
    neighborhoods: 'River Run, Westmoreland, Lake Davidson',
    waterfrontNote: 'Historic lakefront homes with unique roofing requirements',
  },
  {
    name: 'Mooresville',
    slug: 'mooresville-nc',
    neighborhoods: 'The Point, Langtree, Harbor Watch',
    waterfrontNote: 'Largest lakefront footprint with diverse home styles',
  },
  {
    name: 'Huntersville',
    slug: 'huntersville-nc',
    neighborhoods: 'Northcross, Skybrook, Birkdale',
    waterfrontNote: 'Lake-adjacent communities with partial lake exposure',
  },
  {
    name: 'Denver',
    slug: 'denver-nc',
    neighborhoods: 'Westport, Island Point, Pinnacle Shores',
    waterfrontNote: 'Western shore with maximum open-water wind exposure',
  },
  {
    name: 'Sherrills Ford',
    slug: 'sherrills-ford-nc',
    neighborhoods: 'South shore lakefront communities',
    waterfrontNote: 'Southern lake exposure with storm-prone positioning',
  },
];

// FAQs
const waterfrontFAQs = [
  {
    question: 'Why do Lake Norman waterfront homes need specialized roofing?',
    answer:
      'Waterfront homes on Lake Norman face 20-40% stronger winds than inland properties, elevated humidity, UV reflection off the water surface, and wind-driven rain. Standard roofing installations fail prematurely in these conditions. Specialized waterfront roofing uses enhanced underlayment, wind-resistant fastening patterns, and materials rated for 130+ MPH to withstand lake exposure.',
  },
  {
    question: 'What is the best roofing material for a Lake Norman lakefront home?',
    answer:
      'Standing seam metal roofing is the top choice for Lake Norman waterfront homes due to its 140+ MPH wind rating, zero-maintenance profile, and 50-70 year lifespan. For homeowners preferring shingles, Class 4 impact-resistant options like GAF HDZ or CertainTeed Landmark Pro with 130+ MPH wind ratings are excellent alternatives at a lower price point.',
  },
  {
    question: 'How much more does waterfront roofing cost compared to a standard roof?',
    answer:
      'Waterfront roofing on Lake Norman typically costs 15-30% more than standard inland installations. The premium covers enhanced underlayment systems, wind-resistant fastening (6-nail pattern vs 4-nail), higher-grade materials, and additional waterproofing at penetrations and edges. However, the longer lifespan and reduced repair frequency make it more cost-effective over time.',
  },
  {
    question: 'Do wind-resistant shingles really make a difference on Lake Norman?',
    answer:
      'Absolutely. Standard 3-tab shingles rated for 60-70 MPH frequently fail on Lake Norman waterfront homes during storms. Wind-resistant architectural shingles rated for 130+ MPH use wider nailing zones, stronger adhesive strips, and heavier construction. After Hurricane Helene remnants hit LKN, homes with 130+ MPH rated shingles experienced 90% fewer failures than those with standard shingles.',
  },
  {
    question: 'How often should a Lake Norman waterfront roof be inspected?',
    answer:
      'We recommend twice-yearly inspections for Lake Norman waterfront roofs: once in spring after winter storms and again in fall before winter weather. Lakefront roofs accumulate more wear from wind, moisture, and UV exposure. Early detection of granule loss, lifted shingles, or sealant deterioration prevents costly damage. Best Roofing Now offers free annual inspections for waterfront clients.',
  },
  {
    question: 'Can I get an insurance discount for impact-resistant roofing on my lake house?',
    answer:
      'Yes. North Carolina insurers offer discounts of 10-28% on homeowner premiums for Class 4 impact-resistant roofing. On a Lake Norman waterfront home with higher-than-average premiums, this can save $500-$2,000+ annually. We provide all documentation needed for your insurance company, including manufacturer impact-rating certificates and installation compliance photos.',
  },
  {
    question: 'What causes ice dams on Lake Norman waterfront homes?',
    answer:
      'Lake Norman rarely freezes, creating a temperature differential between the warmer lake air and cold roof surfaces during winter. This differential, combined with wind-driven moisture, creates ice dam conditions along eaves and valleys. Proper ice and water shield membrane extending 3+ feet from eaves, combined with adequate attic ventilation, prevents ice dam damage on lakefront homes.',
  },
  {
    question: 'Do you handle waterfront HOA roofing requirements on Lake Norman?',
    answer:
      'Yes. Many Lake Norman waterfront communities like The Peninsula, The Point, and River Run have strict HOA architectural guidelines for roofing materials, colors, and styles. We work directly with HOA architectural review boards to ensure material selections comply with community standards while still providing maximum wind and weather protection for lakefront exposure.',
  },
];

export default function LakeNormanWaterfrontRoofingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Norman Roofing', url: `${SITE_CONFIG.url}/roofing-lake-norman-nc` },
          { name: 'Waterfront Roofing', url: `${SITE_CONFIG.url}/lake-norman-waterfront-roofing` },
        ]}
      />
      <LocalBusinessSchema includeRating={true} />
      <FAQSchema faqs={waterfrontFAQs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/lake-norman-waterfront-roofing`}
        pageName="Lake Norman Waterfront Roofing | Lakefront Home Specialists"
        city="Lake Norman"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/lake-norman-waterfront-roofing`} city={"Lake Norman"} />
      <LKNExpertiseSchema pageUrl={`${SITE_CONFIG.url}/lake-norman-waterfront-roofing`} />
      <LKNFounderSchema pageUrl={`${SITE_CONFIG.url}/lake-norman-waterfront-roofing`} />

      {/* Hero — Editorial Split (Claude Design V1) */}
      <section
        className={`${fraunces.variable} relative grid grid-cols-1 lg:grid-cols-[5fr_4fr]`}
        style={{ background: LKN_PALETTE.lakeMist, minHeight: 720 }}
      >
        {/* Left: editorial navy panel */}
        <div
          className="relative overflow-hidden px-8 py-14 md:px-14 md:py-20 lg:px-14 lg:py-[72px] text-white flex flex-col justify-between"
          style={{ background: `linear-gradient(180deg, ${LKN_PALETTE.navyDeep} 0%, ${LKN_PALETTE.navy} 100%)` }}
        >
          {/* Topographic lake wave background */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid slice"
          >
            <g fill="none" stroke="#fff" strokeOpacity="0.05" strokeWidth="1">
              {Array.from({ length: 18 }).map((_, i) => (
                <path
                  key={i}
                  d={`M0 ${60 + i * 28} Q 300 ${20 + i * 28} 600 ${60 + i * 28} T 1200 ${60 + i * 28}`}
                />
              ))}
            </g>
          </svg>

          <div className="relative z-[2]">
            <div className="flex items-center gap-3.5 mb-9">
              <span className="inline-block h-px w-7" style={{ background: LKN_PALETTE.copperLight }} aria-hidden="true" />
              <span
                className="text-[11px] font-semibold uppercase"
                style={{ color: LKN_PALETTE.copperLight, letterSpacing: '0.22em' }}
              >
                Vol. 11 — Est. {SITE_CONFIG.founded}
              </span>
            </div>

            <h1
              className="m-0 text-[44px] sm:text-[56px] lg:text-[76px] font-normal"
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                lineHeight: 0.98,
                letterSpacing: '-0.025em',
                textWrap: 'balance',
              }}
            >
              Lake Norman waterfront{' '}
              <em
                className="font-normal italic"
                style={{ color: LKN_PALETTE.copperLight }}
              >
                roofing.
              </em>
            </h1>

            <p
              className="mt-7 mb-10 max-w-[480px] text-[17px] font-normal"
              style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.55 }}
            >
              A quiet specialty practice serving Lake Norman&apos;s waterfront estates since {SITE_CONFIG.founded}. Standing seam metal, natural slate, and Class 4 impact-rated systems engineered for open-water exposure — installed by a veteran-led crew that treats your home like heritage.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 items-start sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-[15px] text-[13px] font-semibold uppercase text-white transition-colors hover:brightness-110"
                style={{
                  background: LKN_PALETTE.red,
                  borderRadius: 2,
                  letterSpacing: '0.1em',
                }}
              >
                Schedule Site Visit <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-[13px] font-medium uppercase text-white transition-colors hover:bg-white/10"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.35)',
                  borderRadius: 2,
                  letterSpacing: '0.08em',
                }}
              >
                <Phone className="h-3.5 w-3.5" /> {SITE_CONFIG.phone}
              </a>
            </div>
          </div>

          {/* Bottom: rating + credentials */}
          <div
            className="relative z-[2] mt-12 flex flex-col sm:flex-row gap-6 sm:items-end sm:justify-between pt-7"
            style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
          >
            <div>
              <span className="inline-flex items-center gap-0.5" role="img" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5"
                    style={{ color: LKN_PALETTE.gold, fill: LKN_PALETTE.gold }}
                    aria-hidden="true"
                  />
                ))}
              </span>
              <div className="mt-2 text-[12px]" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                {SITE_CONFIG.googleRating} across {SITE_CONFIG.googleReviewCount}+ Google, Facebook<br className="hidden sm:block" />
                {' '}&amp; Nextdoor reviews
              </div>
            </div>
            <div className="sm:text-right">
              <div
                className="text-[10.5px] font-medium uppercase mb-2.5"
                style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.22em' }}
              >
                Credentials
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4 text-[12.5px] font-medium" style={{ letterSpacing: '0.04em' }}>
                <span>GAF Master Elite</span>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
                <span>CertainTeed SELECT</span>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
                <span>BBB A+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: image with copper inset frame + featured-project caption */}
        <div className="relative overflow-hidden min-h-[360px] lg:min-h-0" style={{ background: LKN_PALETTE.lakeMist }}>
          <SEOImage
            src={IMAGES.houses.modern1}
            alt="Lake Norman waterfront luxury home — standing seam metal roof installed by Best Roofing Now"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle copper inset frame */}
          <div
            className="pointer-events-none absolute inset-4 lg:inset-7"
            style={{ border: `1px solid ${LKN_PALETTE.copperLight}` }}
            aria-hidden="true"
          />
          {/* Featured project caption card */}
          <div
            className="absolute left-5 bottom-5 lg:left-10 lg:bottom-10 max-w-[280px] bg-white"
            style={{
              padding: '20px 24px',
              borderLeft: `3px solid ${LKN_PALETTE.copper}`,
              boxShadow: '0 20px 40px rgba(8, 17, 52, 0.15)',
            }}
          >
            <div
              className="text-[10.5px] font-semibold uppercase mb-2"
              style={{ color: LKN_PALETTE.copper, letterSpacing: '0.2em' }}
            >
              Featured Project
            </div>
            <div
              className="text-[17px] font-medium"
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                color: LKN_PALETTE.navy,
                lineHeight: 1.25,
              }}
            >
              Standing seam copper roof, The Peninsula
            </div>
            <div className="mt-1.5 text-[12px]" style={{ color: LKN_PALETTE.mute }}>
              Cornelius, NC · March 2026
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Marquee */}
      <div
        className={`${fraunces.variable} flex flex-wrap justify-center lg:justify-between items-center gap-x-8 gap-y-3 px-6 md:px-14 py-[22px]`}
        style={{
          background: LKN_PALETTE.cream,
          borderBottom: `1px solid ${LKN_PALETTE.line}`,
        }}
      >
        {[
          'GAF Master Elite',
          'CertainTeed SELECT',
          'BBB A+ Accredited',
          'NRCA Member',
          'Owens Corning Preferred',
          'Veteran-Owned',
        ].map((c) => (
          <div
            key={c}
            className="text-[14px] font-medium"
            style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              color: LKN_PALETTE.navy,
              letterSpacing: '0.01em',
              opacity: 0.85,
            }}
          >
            {c}
          </div>
        ))}
      </div>

      {/* Waterfront Challenges Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Waterfront Roofing Is Different
            </h2>
            <p className="text-gray-600 text-lg">
              Lake Norman&apos;s 520 miles of shoreline create a unique microclimate that
              standard roofing installations are not engineered to handle. Understanding
              these challenges is the first step to protecting your lakefront investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {waterfrontChallenges.map((challenge) => (
              <div
                key={challenge.title}
                className="bg-light rounded-xl p-8"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <challenge.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{challenge.title}</h3>
                <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Practice — Editorial 3-Column Materials (Claude Design V1) */}
      <section className={`${fraunces.variable} bg-white px-6 md:px-14 py-20 md:py-[88px]`}>
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <div
              className="mb-3.5 text-[11px] font-semibold uppercase"
              style={{ color: LKN_PALETTE.copper, letterSpacing: '0.22em' }}
            >
              The Practice
            </div>
            <h2
              className="m-0 text-[36px] sm:text-[44px] lg:text-[52px] font-normal"
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                color: LKN_PALETTE.navy,
                lineHeight: 1.02,
                letterSpacing: '-0.02em',
              }}
            >
              Three systems, engineered for open water.
            </h2>
          </div>
          <p
            className="m-0 max-w-[480px] text-[16px]"
            style={{ color: LKN_PALETTE.slate, lineHeight: 1.65 }}
          >
            Lake Norman spans 32,000 acres. Homes on the shoreline face sustained winds 20–40% stronger than inland properties, with UV reflection 25% higher and humidity that never quits. We install accordingly.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: `1px solid ${LKN_PALETTE.line}` }}
        >
          {waterfrontMaterials.slice(0, 3).map((material, i) => {
            const tag = String(i + 1).padStart(2, '0');
            return (
              <div
                key={material.name}
                className="py-9"
                style={{
                  borderBottom: `1px solid ${LKN_PALETTE.line}`,
                  borderRight: i < 2 ? `1px solid ${LKN_PALETTE.line}` : undefined,
                  paddingLeft: i > 0 ? 32 : 0,
                  paddingRight: 32,
                }}
              >
                <div
                  className="mb-5 italic font-light"
                  style={{
                    fontFamily: 'var(--font-fraunces), Georgia, serif',
                    fontSize: 34,
                    color: LKN_PALETTE.copper,
                  }}
                >
                  {tag}
                </div>
                <div
                  className="mb-3 text-[22px] font-medium"
                  style={{
                    fontFamily: 'var(--font-fraunces), Georgia, serif',
                    color: LKN_PALETTE.navy,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {material.name}
                </div>
                <div className="mb-5 text-[14px]" style={{ color: LKN_PALETTE.slate, lineHeight: 1.6 }}>
                  {material.description}
                </div>
                <dl className="space-y-1 text-[12px]" style={{ color: LKN_PALETTE.mute }}>
                  <div className="flex gap-2">
                    <dt className="uppercase" style={{ letterSpacing: '0.08em' }}>Wind</dt>
                    <dd style={{ fontVariantNumeric: 'tabular-nums', color: LKN_PALETTE.slate }}>
                      {material.windRating}
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="uppercase" style={{ letterSpacing: '0.08em' }}>Lifespan</dt>
                    <dd style={{ fontVariantNumeric: 'tabular-nums', color: LKN_PALETTE.slate }}>
                      {material.lifespan}
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="uppercase" style={{ letterSpacing: '0.08em' }}>Installed</dt>
                    <dd style={{ fontVariantNumeric: 'tabular-nums', color: LKN_PALETTE.slate }}>
                      {material.priceRange}
                    </dd>
                  </div>
                </dl>
              </div>
            );
          })}
        </div>

        {/* 4th material (Synthetic) rendered as a quieter footnote card so we don't lose SEO content */}
        {waterfrontMaterials[3] && (
          <div
            className="mt-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6 pt-10"
            style={{ borderTop: `1px solid ${LKN_PALETTE.line}` }}
          >
            <div className="max-w-[560px]">
              <div
                className="mb-3 text-[11px] font-semibold uppercase"
                style={{ color: LKN_PALETTE.copper, letterSpacing: '0.22em' }}
              >
                Also specified — {waterfrontMaterials[3].rating}
              </div>
              <div
                className="mb-2 text-[20px] font-medium"
                style={{
                  fontFamily: 'var(--font-fraunces), Georgia, serif',
                  color: LKN_PALETTE.navy,
                }}
              >
                {waterfrontMaterials[3].name}
              </div>
              <p className="m-0 text-[14px]" style={{ color: LKN_PALETTE.slate, lineHeight: 1.65 }}>
                {waterfrontMaterials[3].description}
              </p>
            </div>
            <div className="flex flex-col gap-1 text-[12px] md:text-right" style={{ color: LKN_PALETTE.mute }}>
              <span>Wind <span style={{ color: LKN_PALETTE.slate }}>{waterfrontMaterials[3].windRating}</span></span>
              <span>Lifespan <span style={{ color: LKN_PALETTE.slate }}>{waterfrontMaterials[3].lifespan}</span></span>
              <span>Installed <span style={{ color: LKN_PALETTE.slate }}>{waterfrontMaterials[3].priceRange}</span></span>
            </div>
          </div>
        )}
      </section>

      {/* Our Waterfront Approach */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Waterfront Roofing Approach
              </h2>
              <p className="text-gray-600 mb-8">
                Every lakefront roof we install follows our enhanced waterfront protocol,
                developed from years of experience on Lake Norman&apos;s shoreline properties.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Enhanced Underlayment System</h3>
                    <p className="text-gray-600">
                      Synthetic underlayment with ice and water shield extended 6+ feet from
                      eaves, valleys, and all penetrations for maximum wind-driven rain protection.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">6-Nail High-Wind Fastening</h3>
                    <p className="text-gray-600">
                      Every shingle secured with 6 nails instead of the standard 4, following
                      manufacturer high-wind specifications for 130+ MPH warranty coverage.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Reinforced Ridge & Edge Details</h3>
                    <p className="text-gray-600">
                      Hip and ridge caps, drip edges, and starter strips all upgraded to
                      high-wind components that resist uplift from lake-driven wind gusts.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Ventilation Optimization</h3>
                    <p className="text-gray-600">
                      Balanced attic ventilation sized for lakefront humidity levels, preventing
                      moisture buildup, ice dams, and premature decking deterioration.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Algae & UV Protection</h3>
                    <p className="text-gray-600">
                      Copper-infused granules and UV-stabilized materials resist algae growth
                      and color fading from reflected lake UV radiation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <SEOImage
                src={IMAGES.houses.house1}
                alt="Lake Norman waterfront home with new roof installation"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">130+</div>
                <div className="text-sm text-white/80">MPH Wind Rated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage — Navy Editorial Communities Grid (Claude Design V1) */}
      <section
        className={`${fraunces.variable} relative overflow-hidden px-6 md:px-14 py-20 md:py-[88px] text-white`}
        style={{ background: LKN_PALETTE.navy }}
      >
        {/* Topographic background */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <g fill="none" stroke="#fff" strokeOpacity="0.04" strokeWidth="1">
            {Array.from({ length: 18 }).map((_, i) => (
              <path
                key={i}
                d={`M0 ${60 + i * 28} Q 300 ${20 + i * 28} 600 ${60 + i * 28} T 1200 ${60 + i * 28}`}
              />
            ))}
          </g>
        </svg>

        <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-[72px] items-start">
          <div>
            <div
              className="mb-3.5 text-[11px] font-semibold uppercase"
              style={{ color: LKN_PALETTE.copperLight, letterSpacing: '0.22em' }}
            >
              Coverage
            </div>
            <h2
              className="m-0 text-[32px] sm:text-[38px] lg:text-[44px] font-normal"
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              Every cove. Every community.
            </h2>
            <p
              className="mt-6 max-w-[360px] text-[15px]"
              style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.65 }}
            >
              200+ completed projects across Lake Norman&apos;s shoreline. We know the permit desks, HOA architectural boards, and wind patterns block by block.
            </p>
            <Link
              href="/locations/lake-norman"
              className="mt-8 inline-flex items-center gap-2.5 text-[13px] font-medium uppercase transition-colors hover:brightness-125"
              style={{ color: LKN_PALETTE.copperLight, letterSpacing: '0.08em' }}
            >
              View coverage map <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div
            className="grid grid-cols-2 lg:grid-cols-4"
            style={{ gap: 1, background: 'rgba(255,255,255,0.08)' }}
          >
            {[
              { name: 'The Peninsula', city: 'Cornelius', count: 42, slug: 'cornelius-nc' },
              { name: 'The Point', city: 'Mooresville', count: 38, slug: 'mooresville-nc' },
              { name: 'The Farms', city: 'Mooresville', count: 27, slug: 'mooresville-nc' },
              { name: 'Davidson Landing', city: 'Davidson', count: 19, slug: 'davidson-nc' },
              { name: 'Jetton Cove', city: 'Cornelius', count: 24, slug: 'cornelius-nc' },
              { name: 'Northington', city: 'Huntersville', count: 16, slug: 'huntersville-nc' },
              { name: 'Trump National', city: 'Mooresville', count: 31, slug: 'mooresville-nc' },
              { name: 'Bay Crossing', city: 'Denver', count: 14, slug: 'denver-nc' },
            ].map((h) => (
              <Link
                key={`${h.name}-${h.city}`}
                href={`/roofing-${h.slug}`}
                className="group block p-5 lg:px-5 lg:py-6 transition-colors"
                style={{ background: LKN_PALETTE.navy }}
              >
                <div
                  className="text-[18px] lg:text-[20px] font-medium transition-colors group-hover:brightness-110"
                  style={{
                    fontFamily: 'var(--font-fraunces), Georgia, serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {h.name}
                </div>
                <div
                  className="mt-1 text-[12px]"
                  style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}
                >
                  {h.city}, NC
                </div>
                <div
                  className="mt-4 flex items-baseline gap-1.5"
                  style={{ color: LKN_PALETTE.copperLight }}
                >
                  <span
                    className="text-[22px] font-normal"
                    style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
                  >
                    {h.count}
                  </span>
                  <span
                    className="text-[10.5px] uppercase opacity-75"
                    style={{ letterSpacing: '0.14em' }}
                  >
                    projects
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Secondary: the original cities/neighborhoods list, preserved for SEO */}
        <div className="relative z-[2] mt-16 grid grid-cols-2 md:grid-cols-3 gap-6" style={{ color: 'rgba(255,255,255,0.82)' }}>
          {waterfrontCommunities.map((community) => (
            <Link
              key={community.slug}
              href={`/roofing-${community.slug}`}
              className="block pt-5 transition-colors hover:text-white"
              style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-[15px] font-medium"
                  style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
                >
                  {community.name}
                </span>
                <MapPin className="h-4 w-4" style={{ color: LKN_PALETTE.copperLight }} aria-hidden="true" />
              </div>
              <p className="mt-1 text-[12px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {community.neighborhoods}
              </p>
              <p className="mt-1 text-[12px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {community.waterfrontNote}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Private Site Visit — Editorial CTA (Claude Design V1) */}
      <section className={`${fraunces.variable}`} style={{ background: LKN_PALETTE.cream, padding: '72px 24px' }}>
        <div
          className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-10 lg:gap-14 bg-white"
          style={{
            padding: '48px 40px',
            borderTop: `3px solid ${LKN_PALETTE.copper}`,
            boxShadow: '0 1px 0 rgba(0,0,0,0.03)',
          }}
        >
          <div>
            <div
              className="mb-3 text-[11px] font-semibold uppercase"
              style={{ color: LKN_PALETTE.copper, letterSpacing: '0.22em' }}
            >
              Scheduling — April 2026
            </div>
            <h2
              className="m-0 text-[30px] md:text-[40px] font-normal"
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                color: LKN_PALETTE.navy,
                lineHeight: 1.08,
                letterSpacing: '-0.015em',
              }}
            >
              A private site visit,{' '}
              <em className="italic font-normal" style={{ color: LKN_PALETTE.copper }}>
                at no cost.
              </em>
            </h2>
            <p
              className="mt-4 max-w-[560px] text-[15px]"
              style={{ color: LKN_PALETTE.slate, lineHeight: 1.6 }}
            >
              Drone inspection, moisture scan, and a written assessment delivered within 72 hours. No pressure, no commission-driven upsell — just an honest read from a veteran-led crew that specializes in open-water exposure.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:min-w-[240px]">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-[13px] font-semibold uppercase text-white transition-colors hover:brightness-110"
              style={{
                background: LKN_PALETTE.navy,
                borderRadius: 2,
                letterSpacing: '0.1em',
              }}
            >
              Request Consultation <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <div className="text-center text-[12px]" style={{ color: LKN_PALETTE.mute }}>
              or call{' '}
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="font-semibold"
                style={{ color: LKN_PALETTE.navy }}
              >
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Waterfront Roofing FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions from Lake Norman waterfront homeowners about roofing materials,
              wind resistance, and lakefront-specific challenges.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {waterfrontFAQs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related LKN Pages */}
      <section className="py-16 bg-light">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            More Lake Norman Roofing Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/roofing-lake-norman-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Lake Norman Roofing</h3>
              <p className="text-sm text-gray-600">Complete LKN roofing hub</p>
            </Link>
            <Link href="/luxury-roofing-lake-norman-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Luxury Roofing LKN</h3>
              <p className="text-sm text-gray-600">Premium waterfront estates</p>
            </Link>
            <Link href="/roofing-cornelius-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Cornelius NC</h3>
              <p className="text-sm text-gray-600">The Peninsula &amp; Jetton Rd</p>
            </Link>
            <Link href="/roofing-davidson-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Davidson NC</h3>
              <p className="text-sm text-gray-600">Historic lakefront homes</p>
            </Link>
            <Link href="/roofing-mooresville-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Mooresville NC</h3>
              <p className="text-sm text-gray-600">The Point &amp; Langtree</p>
            </Link>
            <Link href="/roofing-denver-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Denver NC</h3>
              <p className="text-sm text-gray-600">Western shore lakefront</p>
            </Link>
            <Link href="/metal-roofing-mooresville-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Metal Roofing LKN</h3>
              <p className="text-sm text-gray-600">Standing seam for waterfront</p>
            </Link>
            <Link href="/roofing-sherrills-ford-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Sherrills Ford</h3>
              <p className="text-sm text-gray-600">South shore communities</p>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="location"
        city="Cornelius"
        slug="lake-norman-waterfront-roofing"
        count={4}
        title="Recent Waterfront Roofing Projects on Lake Norman"
        subtitle="Browse completed lakefront roofing projects from the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/lake-norman-waterfront-roofing`}
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Waterfront Roofing"
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

      <LKNNeighborhoodGrid currentSlug="lake-norman-waterfront-roofing" />
      <CTASection
        title="Protect Your Lakefront Investment"
        subtitle="Get a free waterfront roofing assessment from Lake Norman's lakefront home specialists. Wind-resistant, impact-rated solutions for every shore of LKN."
      />
    </>
  );
}
