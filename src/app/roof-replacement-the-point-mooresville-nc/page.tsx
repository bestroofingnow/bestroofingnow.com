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
  Clock,
  Gem,
  Home,
  Waves,
  MapPin,
  Flag,
  Hammer,
  FileCheck,
  DollarSign,
  TrendingUp,
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
  title: 'Roof Replacement The Point Mooresville NC',
  description:
    'Roof replacement at The Point Trump National in Mooresville NC. Synthetic slate, natural slate, premium shingles, copper accents. ARC compliant. Free estimates.',
  keywords: [
    'roof replacement the point mooresville',
    'the point trump national roof replacement',
    'trump national charlotte roof replacement',
    'roof replacement the point lake norman',
    'the point mooresville roof replacement contractor',
    'luxury estate roof replacement mooresville nc',
    'synthetic slate roof replacement the point',
    'davinci bellaforte the point mooresville',
    'arc approved roof replacement the point',
    'brawley school rd roof replacement mooresville',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-replacement-the-point-mooresville-nc`,
  },
  openGraph: {
    title: 'Roof Replacement The Point Mooresville NC | Trump National Estates',
    description:
      'Premium roof replacement for The Point at Trump National Golf Club Charlotte in Mooresville NC. Synthetic slate, natural slate, designer shingles, and standing seam accents engineered for Lake Norman estate homes.',
    url: `${SITE_CONFIG.url}/roof-replacement-the-point-mooresville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roof replacement at The Point Trump National Mooresville NC - Best Roofing Now',
      },
    ],
  },
};

const replacementServices = [
  {
    icon: Gem,
    title: 'Synthetic Slate Replacement',
    description:
      'DaVinci Bellaforte and Brava Old World synthetic slate roof replacement for The Point estates -- the most-approved premium look at Trump National with 50-year warranties and Class 4 impact ratings.',
    href: '/synthetic-slate-roofing-lake-norman-nc',
  },
  {
    icon: Hammer,
    title: 'Natural Slate Replacement',
    description:
      'Authentic quarried slate roof replacement for The Point lakefront estates -- the heirloom choice with a 100+ year lifespan, ideal for Greg Norman-era custom homes on Brawley School Rd.',
    href: '/slate-roofing-lake-norman-nc',
  },
  {
    icon: Shield,
    title: 'Premium Architectural Shingle Replacement',
    description:
      'CertainTeed Presidential, GAF Camelot II, and Owens Corning Berkshire designer shingle replacement -- ARC-friendly luxury aesthetics with lifetime warranties for The Point.',
    href: '/roof-replacement-mooresville-nc',
  },
  {
    icon: Waves,
    title: 'Standing Seam Metal Accents',
    description:
      'Copper and Kynar-finished standing seam metal accent replacement for The Point dormers, turrets, bay windows, and porch roofs -- complementing primary slate or shingle fields.',
    href: '/standing-seam-metal-roof-lake-norman-nc',
  },
  {
    icon: FileCheck,
    title: 'ARC Submission & HOA Coordination',
    description:
      'Full Architectural Review Committee submission package preparation for the Trump National Charlotte Property Owners Association -- samples, color boards, and approved-vendor documentation.',
    href: '/contact',
  },
  {
    icon: TrendingUp,
    title: 'Storm & Insurance Roof Replacement',
    description:
      'Hail and wind damage roof replacement at The Point with full insurance claim representation -- documentation, adjuster meetings, and supplemental claims for estate-grade rebuilds.',
    href: '/services/storm-damage',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'The Point Replacement Specialists',
    description:
      'Active roof replacement contractor inside the Trump National Charlotte gates -- we know the ARC palette, the gatehouse access protocol, and the estate-grade detailing The Point demands.',
  },
  {
    icon: Star,
    title: '5-Star Reviewed',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Lake Norman homeowners, including completed roof replacement projects across Mooresville and the 28117 zip.`,
  },
  {
    icon: Shield,
    title: 'Manufacturer Certified',
    description:
      'GAF Master Elite, CertainTeed ShingleMaster, DaVinci preferred installer, and certified slate and copper craftsmen -- the credentials Trump National estate owners verify.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed, Bonded & Insured',
    description:
      'Fully licensed NC roofing contractor with $2M general liability and full workers comp -- the coverage The Point HOA and Trump National Property Owners Association require for any vendor.',
  },
  {
    icon: Home,
    title: 'Estate-Home Craftsmanship',
    description:
      'Crews trained on multi-gable, dormered, copper-accented Greg Norman-era estates -- complex rooflines with steep 8/12 to 12/12 pitches are our wheelhouse, not an exception.',
  },
  {
    icon: Clock,
    title: 'Built for the 25-30 Year Cohort',
    description:
      'The Point homes built 1995-2015 are hitting the replacement window now -- we are scheduled to replace dozens of original Trump National roofs across Mooresville this season.',
  },
];

const replacementMaterials = [
  {
    title: 'Synthetic Slate',
    description:
      'DaVinci Bellaforte and Brava Old World synthetic slate -- the #1 ARC-approved premium replacement at The Point. Class 4 impact, 50-year warranty, ~40% lighter than natural slate.',
    stat: '50-Year',
    label: 'Warranty',
  },
  {
    title: 'Natural Slate',
    description:
      'Quarried Vermont, Buckingham, and Spanish slate -- the heirloom roof for The Point lakefront estates. 100+ year lifespan, fireproof, virtually zero maintenance.',
    stat: '100+ Yr',
    label: 'Lifespan',
  },
  {
    title: 'Premium Shingle',
    description:
      'CertainTeed Presidential TL and GAF Camelot II -- the ARC-approved upgrade replacement that mimics shake or slate at a price point most The Point owners choose first.',
    stat: 'Class 4',
    label: 'Impact Rated',
  },
  {
    title: 'Metal Accents',
    description:
      'Copper, zinc, and Kynar-finished standing seam panels for The Point turrets, bays, and porch roofs -- 50-70 year lifespan with the patina detail Trump National ARC encourages.',
    stat: '140 MPH',
    label: 'Wind Rated',
  },
];

const lakeNormanAreas = [
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'The Point (Roofing)', href: '/roofing-the-point-mooresville-nc' },
  { name: 'Cornelius', href: '/roofing-cornelius-nc' },
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Huntersville', href: '/roofing-huntersville-nc' },
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Lake Norman', href: '/roofing-lake-norman-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

const faqs = [
  {
    question: 'How much does roof replacement cost at The Point Mooresville?',
    answer:
      'Roof replacement at The Point Mooresville typically ranges $40,000 to $300,000+ depending on home size and material. Most The Point estates are 4,000-8,000+ sq ft with complex rooflines. Premium architectural shingle replacement runs $40K-$95K, synthetic slate (DaVinci Bellaforte / Brava) $75K-$175K, natural slate $150K-$300K+, and standing seam metal $80K-$200K. Copper accents on dormers and turrets add $10K-$45K. We provide detailed Trump National estate-specific estimates after an on-site inspection at your home in the 28117 zip.',
  },
  {
    question: 'What is the best roofing material for The Point Trump National?',
    answer:
      'For most The Point homes at Trump National, synthetic slate (DaVinci Bellaforte or Brava Old World) is the best roof replacement material -- it matches the Greg Norman-era estate aesthetic, sails through ARC approval, weighs ~40% less than natural slate (no structural retrofit), carries 50-year warranties, and holds Class 4 impact ratings against Lake Norman hail. Natural slate is the heirloom choice for the largest lakefront estates, premium architectural shingles (CertainTeed Presidential, GAF Camelot II) are the value upgrade, and standing seam metal works beautifully as accents on turrets, dormers, and porches.',
  },
  {
    question: 'Does The Point HOA require ARC approval for roof replacement?',
    answer:
      'Yes -- the Trump National Charlotte Property Owners Association and The Point HOA require Architectural Review Committee (ARC) approval before any roof replacement at The Point Mooresville. The ARC maintains a pre-approved palette of materials, colors, and profiles consistent with the Greg Norman-era estate aesthetic. We prepare the full submission package: material samples, manufacturer specs, color boards, contractor licensing/insurance, and the proposed scope. Most ARC reviews at Trump National Charlotte run 2-4 weeks. We do not break ground on any The Point roof replacement until written ARC approval is in hand.',
  },
  {
    question: 'How long does roof replacement take at The Point estate homes?',
    answer:
      'Roof replacement at The Point estate homes typically takes 5 to 18 business days. Premium architectural shingle replacement on a 5,000-7,000 sq ft Trump National home runs 5-9 days. Synthetic slate replacement runs 8-14 days. Natural slate and complex copper-accented roof replacements can run 14-18+ days because of the steep 8/12 to 12/12 pitches and multi-gable, dormered, turreted rooflines common at The Point. Lake Norman weather and the Trump National gatehouse access protocol can add a day or two. We provide a written schedule before mobilization.',
  },
  {
    question: 'Are synthetic slate roofs allowed at The Point?',
    answer:
      'Yes, synthetic slate roofs are allowed at The Point and are one of the most ARC-approved roof replacement materials at Trump National Charlotte. DaVinci Bellaforte and Brava Old World are both on the pre-approved palette in standard estate colors (Slate Gray, Weathered Gray, Mountain Plum, Black). They deliver the natural-slate look the Greg Norman-era The Point homes were designed for, without the 1,200+ lbs/square structural load of real slate -- meaning no engineered framing retrofit on most replacements.',
  },
  {
    question: 'Are standing seam metal accents allowed at The Point?',
    answer:
      'Yes -- standing seam metal accents are not only allowed at The Point, the Trump National Charlotte ARC actively encourages them on turrets, bay windows, porch roofs, dormers, and copper-clad chimney caps. Full standing seam fields (the entire main roof in metal) are reviewed case-by-case and typically approved only in dark Kynar finishes (Burnished Bronze, Charcoal Gray, Dark Bronze) that complement the surrounding estate aesthetic. Copper accent metal is the ARC favorite -- it patinas beautifully and signals the estate craftsmanship Trump National was designed around.',
  },
  {
    question: 'Will my insurance cover roof replacement at The Point if hail-damaged?',
    answer:
      'In most cases yes -- if your The Point roof has documented hail or wind damage, your homeowners insurance should cover full roof replacement under the ACV or RCV provisions of your policy. Lake Norman hail events (March-May and August-October) routinely produce 1"-2" stones that compromise asphalt shingle, slate, and metal roofs across Mooresville and the 28117 zip. We perform a full pre-claim inspection, document damage with drone imagery and elevation reports, meet your adjuster on-site at The Point, and pursue supplements when carriers underpay -- estate-grade roof replacements are routinely underestimated by adjusters unfamiliar with Trump National material standards.',
  },
  {
    question: "What's the warranty on a roof replacement at The Point?",
    answer:
      'Roof replacement at The Point comes with manufacturer warranties of 50 years (DaVinci Bellaforte synthetic slate), Lifetime Limited (CertainTeed Presidential, GAF Camelot II premium shingles), 50 years (Brava Old World), 40-50 years on Kynar 500 metal finishes, and 75-100+ years on natural slate and copper. Best Roofing Now layers a comprehensive workmanship warranty on top of every roof replacement at Trump National Charlotte -- and as a GAF Master Elite and CertainTeed ShingleMaster contractor, we can extend qualifying installations to enhanced 50-year non-prorated coverage.',
  },
  {
    question: 'Can I finance a roof replacement at The Point?',
    answer:
      'Yes -- we offer financing on roof replacement at The Point through our roofing-specialty lending partners. Even at Trump National Charlotte, where most estates are owned outright, financing a roof replacement frees liquidity for other investments. We offer programs including 0% intro APR, 12-24 month same-as-cash, and 5-15 year fixed-rate options for replacements in the $40K-$300K+ range typical at The Point. Approval decisions are usually returned same-day.',
  },
  {
    question: 'Why should I replace my The Point roof now vs waiting?',
    answer:
      'Most The Point homes were built between 1995 and 2015, which means original roofs are now 11-30 years old -- right in the proactive replacement window for asphalt shingle and the inspection window for slate and metal. Waiting risks: (1) interior damage from a single hail or wind event, (2) insurance carriers non-renewing policies on roofs over 20 years (a growing trend in Iredell County), (3) ARC-approved material lead times that have stretched to 8-16 weeks for synthetic and natural slate, and (4) rising material/labor costs. Replacing now -- on your schedule, with your material choice, before damage forces an emergency claim -- preserves both home value and the Trump National ARC compliance buyers in the 28117 zip expect.',
  },
];

export default function RoofReplacementThePointMooresvillePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Replacement Mooresville NC', url: `${SITE_CONFIG.url}/roof-replacement-mooresville-nc` },
          { name: 'Roof Replacement The Point Mooresville NC', url: `${SITE_CONFIG.url}/roof-replacement-the-point-mooresville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-replacement-the-point-mooresville-nc`}
        pageName="Roof Replacement The Point Mooresville NC"
        city="Mooresville"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/roof-replacement-the-point-mooresville-nc`} city={"Mooresville"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Roof replacement The Point Trump National Mooresville NC - estate roof replacement"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 rounded-full px-4 py-2 mb-4">
              <Flag className="w-4 h-4 text-amber-300" />
              <span className="text-sm font-semibold text-amber-200">Trump National Charlotte Estate Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Replacement The Point <br className="hidden md:block" />
              <span className="text-amber-300">Mooresville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Estate-Grade Roof Replacement at Trump National Golf Club Charlotte
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now delivers premium roof replacement at The Point in Mooresville NC --
              Lake Norman&apos;s ultra-luxury gated estate community at Trump National Golf Club Charlotte.
              From DaVinci Bellaforte synthetic slate and natural slate to CertainTeed Presidential shingles
              and copper standing seam accents, every roof replacement at The Point is engineered for the
              Greg Norman-era estate aesthetic and approved by the Trump National Charlotte ARC.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-amber-500 hover:bg-amber-400 text-slate-900"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request The Point Estimate
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
                <Star className="w-5 h-5 text-amber-300 fill-amber-300" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-300" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-amber-300" />
                ARC Compliant
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-300" />
                GAF Master Elite
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About The Point Roof Replacement */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why The Point Estate Owners Choose Best Roofing Now for Roof Replacement
              </h2>
              <p className="text-gray text-lg mb-4">
                The Point at Trump National Golf Club Charlotte is the ultra-luxury gated community
                on the Brawley School Rd peninsula in southwest Mooresville. Originally The Pointe Golf
                Club, the property was acquired by the Trump Organization in 2012 and the Greg Norman-redesigned
                course re-launched as Trump National Charlotte. The Point&apos;s ~700 estate homes -- most
                built 1995-2015 on Lake Norman&apos;s most coveted lakefront and golf-course lots -- are
                now hitting the original-roof replacement window all at the same time.
              </p>
              <p className="text-gray text-lg mb-6">
                Best Roofing Now is the roof replacement contractor The Point estate owners trust for
                synthetic slate, natural slate, premium architectural shingle, and copper standing seam
                replacements. We know the Trump National Charlotte ARC palette, the gatehouse vendor
                protocol, the steep multi-gable rooflines, and the structural load math that decides
                between DaVinci Bellaforte synthetic slate and quarried natural slate. Every roof
                replacement at The Point Mooresville is permit-pulled, ARC-approved, and built to
                survive Lake Norman&apos;s hail and straight-line wind season.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">$40K-$300K+</p>
                  <p className="text-sm text-gray">Replacement Range</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">~700</p>
                  <p className="text-sm text-gray">Estate Homes</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">28117</p>
                  <p className="text-sm text-gray">Mooresville Zip</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">8/12-12/12</p>
                  <p className="text-sm text-gray">Estate Pitches</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.hero.hero1}
                alt="Roof replacement The Point Trump National Mooresville NC luxury estate"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-slate-900 rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">ARC</p>
                <p className="text-sm">Compliant Process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Replacement Process */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Roof Replacement Process for The Point Trump National Estates
            </h2>
            <p className="text-gray text-lg mb-10 text-center">
              Roof replacement at The Point Mooresville is not a same-week, drop-a-dumpster job.
              Trump National Charlotte estate roofs require a deliberate process that respects the ARC,
              the gatehouse, the home, and the Lake Norman setting.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-amber-600 font-bold text-sm mb-2">STEP 1</div>
                <h3 className="font-bold text-dark text-lg mb-2">On-Site Estate Assessment</h3>
                <p className="text-gray text-sm">
                  We meet you at your The Point home, walk every elevation, drone-survey the roof,
                  document existing material profiles, and identify multi-gable, dormer, turret, and
                  copper-accent details that drive the roof replacement scope and ARC submission.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-amber-600 font-bold text-sm mb-2">STEP 2</div>
                <h3 className="font-bold text-dark text-lg mb-2">Material Selection &amp; ARC Package</h3>
                <p className="text-gray text-sm">
                  We bring physical samples of every approved material -- DaVinci Bellaforte, Brava
                  Old World, CertainTeed Presidential, GAF Camelot II, copper -- and prepare the full
                  Trump National Charlotte ARC submission with color boards, manufacturer specs, and
                  contractor credentials.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-amber-600 font-bold text-sm mb-2">STEP 3</div>
                <h3 className="font-bold text-dark text-lg mb-2">ARC Approval &amp; Permitting</h3>
                <p className="text-gray text-sm">
                  We track the ARC review (typically 2-4 weeks), pull Iredell County permits for
                  Mooresville, schedule your roof replacement around weather windows, and coordinate
                  with the Trump National gatehouse for crew, dumpster, and material delivery access.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-amber-600 font-bold text-sm mb-2">STEP 4</div>
                <h3 className="font-bold text-dark text-lg mb-2">Tear-Off &amp; Deck Inspection</h3>
                <p className="text-gray text-sm">
                  Full tear-off down to the deck, full inspection of plywood and OSB sheathing,
                  replacement of any rotted deck, installation of premium ice-and-water shield in
                  valleys and around penetrations, and synthetic underlayment across the entire field.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-amber-600 font-bold text-sm mb-2">STEP 5</div>
                <h3 className="font-bold text-dark text-lg mb-2">Estate-Grade Installation</h3>
                <p className="text-gray text-sm">
                  Manufacturer-spec installation on every The Point roof replacement -- synthetic
                  slate hidden-clip systems, slate copper nails, standing seam concealed fasteners,
                  copper soldered seams. Steep 8/12 to 12/12 pitches handled with full-fall-arrest
                  rigging.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-amber-600 font-bold text-sm mb-2">STEP 6</div>
                <h3 className="font-bold text-dark text-lg mb-2">Cleanup, Inspection &amp; Warranty</h3>
                <p className="text-gray text-sm">
                  Full magnetic-rolled property cleanup (we leave The Point grounds cleaner than we
                  found them), final county inspection, ARC final-condition sign-off, and registration
                  of your manufacturer and Best Roofing Now workmanship warranties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              How Much Does Roof Replacement Cost at The Point Mooresville?
            </h2>
            <p className="text-gray text-lg mb-10 text-center">
              Roof replacement at The Point Trump National typically ranges $40,000 to $300,000+
              depending on home size, material, and roofline complexity. Below are the realistic
              2026 ranges for the most common Trump National Charlotte estate scopes.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-light rounded-xl p-6 shadow-md">
                <DollarSign className="w-8 h-8 text-amber-600 mb-2" />
                <h3 className="font-bold text-dark text-lg mb-2">Premium Architectural Shingle</h3>
                <p className="text-2xl font-bold text-primary mb-2">$40K - $95K</p>
                <p className="text-gray text-sm">
                  CertainTeed Presidential TL or GAF Camelot II on a 4,000-7,000 sq ft The Point home.
                  The most-chosen ARC-approved replacement material across Trump National Charlotte.
                </p>
              </div>
              <div className="bg-light rounded-xl p-6 shadow-md">
                <DollarSign className="w-8 h-8 text-amber-600 mb-2" />
                <h3 className="font-bold text-dark text-lg mb-2">Synthetic Slate (DaVinci / Brava)</h3>
                <p className="text-2xl font-bold text-primary mb-2">$75K - $175K</p>
                <p className="text-gray text-sm">
                  DaVinci Bellaforte or Brava Old World synthetic slate roof replacement -- the natural
                  slate look at ~40% of the weight, with a 50-year warranty and Class 4 impact rating.
                </p>
              </div>
              <div className="bg-light rounded-xl p-6 shadow-md">
                <DollarSign className="w-8 h-8 text-amber-600 mb-2" />
                <h3 className="font-bold text-dark text-lg mb-2">Natural Slate Replacement</h3>
                <p className="text-2xl font-bold text-primary mb-2">$150K - $300K+</p>
                <p className="text-gray text-sm">
                  Quarried Vermont, Buckingham, or Spanish slate -- the heirloom roof for The Point&apos;s
                  largest lakefront estates. 100+ year lifespan, the longest-living roof in residential
                  roofing.
                </p>
              </div>
              <div className="bg-light rounded-xl p-6 shadow-md">
                <DollarSign className="w-8 h-8 text-amber-600 mb-2" />
                <h3 className="font-bold text-dark text-lg mb-2">Standing Seam Metal (Full Field)</h3>
                <p className="text-2xl font-bold text-primary mb-2">$80K - $200K</p>
                <p className="text-gray text-sm">
                  Full standing seam metal replacement in dark Kynar finishes -- ARC-approved on
                  case-by-case basis, ideal for modern estate aesthetics at The Point. 50-70 year
                  lifespan.
                </p>
              </div>
              <div className="bg-light rounded-xl p-6 shadow-md">
                <DollarSign className="w-8 h-8 text-amber-600 mb-2" />
                <h3 className="font-bold text-dark text-lg mb-2">Copper Accents</h3>
                <p className="text-2xl font-bold text-primary mb-2">+$10K - $45K</p>
                <p className="text-gray text-sm">
                  Copper standing seam on turrets, dormers, bay window roofs, porch roofs, chimney
                  caps -- the ARC-favorite detail that signals estate craftsmanship at Trump National.
                </p>
              </div>
              <div className="bg-light rounded-xl p-6 shadow-md">
                <DollarSign className="w-8 h-8 text-amber-600 mb-2" />
                <h3 className="font-bold text-dark text-lg mb-2">Insurance Hail/Wind Replacement</h3>
                <p className="text-2xl font-bold text-primary mb-2">Deductible Only</p>
                <p className="text-gray text-sm">
                  If your The Point roof has documented hail or wind damage, your homeowners
                  insurance typically covers the full replacement minus your deductible -- we manage
                  the entire claim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Detail */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Best Roof Replacement Materials for The Point
            </h2>
            <p className="text-gray text-lg">
              Every material on this list is ARC-allowed at Trump National Charlotte. We will help
              you choose the right one for your The Point estate.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {replacementMaterials.map((material) => (
              <div key={material.title} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-primary mb-1">{material.stat}</div>
                <div className="text-sm text-gray mb-4">{material.label}</div>
                <h3 className="font-bold text-dark mb-2">{material.title}</h3>
                <p className="text-gray text-sm">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Replacement Services */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Replacement Services for The Point
            </h2>
            <p className="text-gray text-lg">
              The full roof replacement scope The Point estate owners need -- from ARC submission
              to copper detail to insurance claim.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {replacementServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <service.icon className="w-6 h-6 text-amber-700" />
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

      {/* HOA / ARC Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              The Point HOA &amp; ARC Approval for Roof Replacement
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              The Point at Trump National Charlotte is governed by the Trump National Charlotte
              Property Owners Association and an active Architectural Review Committee. Every roof
              replacement at The Point Mooresville requires written ARC approval before tear-off.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-lg mb-3">What the ARC Reviews</h3>
                <ul className="text-gray text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>Material type (synthetic slate, slate, premium shingle, metal, copper)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>Color (must align with Trump National Charlotte estate palette)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>Profile and texture (matching Greg Norman-era estate aesthetic)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>Contractor licensing, insurance, and warranty backing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-lg mb-3">What We Submit</h3>
                <ul className="text-gray text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>Physical material samples and color boards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>Manufacturer specs, warranty documents, and impact ratings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>NC contractor license, COI, workers comp documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>Project schedule and Trump National gatehouse access plan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Cohort Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Why So Many The Point Homes Are Replacing Roofs Now
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              The Point estate cohort is hitting peak roof replacement window all at once -- here is
              why your Trump National neighbors are scheduling roof replacement this season.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">The Build-Out Cohort (1995-2015)</h3>
                <p className="text-gray text-sm">
                  The Point&apos;s ~700 estate homes were largely built between 1995 and 2015, with
                  the heaviest concentration 2000-2010. That means the original 25-30 year asphalt
                  shingle roofs are now in their replacement window all at the same time, and the
                  20-year mark on slate and metal triggers inspection-and-refresh decisions across
                  Trump National Charlotte.
                </p>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Lake Norman Hail Seasons</h3>
                <p className="text-gray text-sm">
                  Mooresville and the 28117 zip sit in an active hail corridor. March-May and
                  August-October routinely produce 1&quot;-2&quot;+ stones across The Point and the
                  Brawley School Rd peninsula. Multiple hail events have compounded damage on The
                  Point roofs, and insurance carriers are now writing replacement claims at scale.
                </p>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Insurance Non-Renewal Pressure</h3>
                <p className="text-gray text-sm">
                  NC homeowners carriers are increasingly non-renewing policies on roofs over 20 years
                  -- a trend now hitting The Point. Proactive roof replacement at Trump National
                  Charlotte preserves insurability and keeps premiums in check, especially on lakefront
                  estates where rebuild costs trigger high-value policy thresholds.
                </p>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Resale &amp; Buyer Expectations</h3>
                <p className="text-gray text-sm">
                  Buyers in the $1.2M-$10M+ The Point market expect ARC-current roofing -- a fresh
                  synthetic slate or natural slate roof is now table stakes for top-quartile listings
                  near Lake Norman High School and the Brawley Middle / Lake Norman Elementary feeder
                  pattern. Replacing now positions the home for a strong resale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Best Roofing Now for The Point Trump National Roof Replacement
              </h2>
              <p className="text-gray text-lg mb-8">
                Roof replacement at The Point in Mooresville is not a commodity job. The Trump
                National Charlotte ARC, the steep estate rooflines, the gatehouse vendor protocol,
                the Greg Norman-era architectural standard -- all of it requires a contractor who
                works inside the gates often, not occasionally.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-amber-700" />
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
                alt="The Point Trump National roof replacement Mooresville NC - Best Roofing Now"
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
                Ready to Replace Your The Point Roof?
              </h2>
              <p className="text-white/90">
                Schedule your on-site Trump National Charlotte estate consultation today.
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
                Schedule Estimate
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

      {/* Related Cross-Links */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Related Lake Norman &amp; Mooresville Roofing Pages
            </h2>
            <p className="text-gray text-lg">
              Explore our complete coverage of roof replacement across The Point, Mooresville, and
              the Lake Norman region.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/roofing-the-point-mooresville-nc" className="group bg-light rounded-xl p-5 hover:shadow-md transition-all">
              <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">Roofing The Point Mooresville</h3>
              <p className="text-gray text-sm">Full roofing services at The Point Trump National</p>
            </Link>
            <Link href="/roof-replacement-mooresville-nc" className="group bg-light rounded-xl p-5 hover:shadow-md transition-all">
              <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">Roof Replacement Mooresville</h3>
              <p className="text-gray text-sm">Citywide roof replacement across Mooresville NC</p>
            </Link>
            <Link href="/roof-replacement-lake-norman-nc" className="group bg-light rounded-xl p-5 hover:shadow-md transition-all">
              <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">Roof Replacement Lake Norman</h3>
              <p className="text-gray text-sm">Lake Norman regional roof replacement specialists</p>
            </Link>
            <Link href="/roofing-mooresville-nc" className="group bg-light rounded-xl p-5 hover:shadow-md transition-all">
              <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">Roofing Mooresville NC</h3>
              <p className="text-gray text-sm">Complete Mooresville roofing services</p>
            </Link>
            <Link href="/roofing-lake-norman-nc" className="group bg-light rounded-xl p-5 hover:shadow-md transition-all">
              <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">Roofing Lake Norman</h3>
              <p className="text-gray text-sm">Lake Norman regional roofing contractor</p>
            </Link>
            <Link href="/lake-norman-roofing-guide" className="group bg-light rounded-xl p-5 hover:shadow-md transition-all">
              <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">Lake Norman Roofing Guide</h3>
              <p className="text-gray text-sm">The complete 2026 Lake Norman roofing guide</p>
            </Link>
            <Link href="/luxury-roofing-lake-norman-nc" className="group bg-light rounded-xl p-5 hover:shadow-md transition-all">
              <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">Luxury Roofing Lake Norman</h3>
              <p className="text-gray text-sm">Premium roofing for Lake Norman estates</p>
            </Link>
            <Link href="/lake-norman-waterfront-roofing" className="group bg-light rounded-xl p-5 hover:shadow-md transition-all">
              <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">Lake Norman Waterfront Roofing</h3>
              <p className="text-gray text-sm">Waterfront-specific roofing solutions</p>
            </Link>
            <Link href="/slate-roofing-lake-norman-nc" className="group bg-light rounded-xl p-5 hover:shadow-md transition-all">
              <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">Slate Roofing Lake Norman</h3>
              <p className="text-gray text-sm">Natural slate for Lake Norman estates</p>
            </Link>
            <Link href="/synthetic-slate-roofing-lake-norman-nc" className="group bg-light rounded-xl p-5 hover:shadow-md transition-all">
              <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">Synthetic Slate Lake Norman</h3>
              <p className="text-gray text-sm">DaVinci, Brava synthetic slate roofing</p>
            </Link>
            <Link href="/standing-seam-metal-roof-lake-norman-nc" className="group bg-light rounded-xl p-5 hover:shadow-md transition-all">
              <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">Standing Seam Metal Lake Norman</h3>
              <p className="text-gray text-sm">Standing seam metal roofing systems</p>
            </Link>
            <Link href="/lake-norman-roofing-costs-2026" className="group bg-light rounded-xl p-5 hover:shadow-md transition-all">
              <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">Lake Norman Roofing Costs 2026</h3>
              <p className="text-gray text-sm">2026 pricing benchmarks across Lake Norman</p>
            </Link>
            <Link href="/roofing-cost-mooresville-nc" className="group bg-light rounded-xl p-5 hover:shadow-md transition-all">
              <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">Roofing Cost Mooresville</h3>
              <p className="text-gray text-sm">Mooresville-specific roofing cost data</p>
            </Link>
            <Link href="/services/roof-replacement" className="group bg-light rounded-xl p-5 hover:shadow-md transition-all">
              <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">Roof Replacement Services</h3>
              <p className="text-gray text-sm">Our complete roof replacement service overview</p>
            </Link>
            <Link href="/contact" className="group bg-light rounded-xl p-5 hover:shadow-md transition-all">
              <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">Contact Best Roofing Now</h3>
              <p className="text-gray text-sm">Request your The Point estate consultation</p>
            </Link>
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
              Roof Replacement Across Mooresville &amp; Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We provide roof replacement at The Point Mooresville and across the surrounding Lake
              Norman communities and Charlotte metro.
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

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">The Point Roof Replacement FAQs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roof Replacement FAQs for The Point Mooresville
              </h2>
              <p className="text-gray text-lg">
                Hyper-local answers to the questions Trump National Charlotte estate owners ask
                before scheduling roof replacement at The Point.
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
        slug="roof-replacement-the-point-mooresville-nc"
        count={4}
        title="Recent Roof Replacement Projects at Lake Norman"
        subtitle="Browse completed roof replacement projects from Mooresville and the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roof-replacement-the-point-mooresville-nc`}
      />

      <CityGeoSection
        city="Mooresville"
        state="NC"
        citySlug="mooresville-nc"
        service="Roof Replacement"
      />

      {/* Lake Norman Guide Cross-Link */}
      <section className="py-8 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray mb-4">Want the complete roadmap for Lake Norman roof replacement?</p>
            <Link href="/lake-norman-roofing-guide" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-lg">
              Read The Complete Lake Norman Roofing Guide (2026) <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <LKNNeighborhoodGrid currentCity="Mooresville" currentSlug="roof-replacement-the-point-mooresville-nc" />
      <LKNPartnershipsBlock city={"Mooresville"} />
      <LKNDataCitations city={"Mooresville"} />
      <CTASection
        title="Replace Your The Point Roof With Confidence"
        subtitle="Get a free, on-site estimate for roof replacement at The Point in Mooresville. We'll walk every elevation, recommend the right ARC-approved material -- synthetic slate, natural slate, premium shingle, or standing seam metal -- and deliver an estate-grade roof replacement built for Lake Norman, Trump National Charlotte, and your home's next 30+ years."
      />
    </>
  );
}
