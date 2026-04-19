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
  MapPin,
  Layers,
  Recycle,
  Wind,
  Flame,
  Hammer,
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
import { LKNHowToBundle } from '@/components/seo/LKNHowToSchemas';
export const metadata: Metadata = {
  title: 'Synthetic Slate Roofing Lake Norman NC',
  description:
    'Synthetic slate roofing for Lake Norman NC homes — DaVinci, Brava, F-Wave, CertainTeed Symphony. Class 4 impact, 50-yr warranty, $9-$18/sq ft. BBB A+.',
  keywords: [
    'synthetic slate roofing lake norman nc',
    'composite slate roof lake norman',
    'davinci roofscapes lake norman',
    'brava roof tile lake norman',
    'f-wave revia synthetic slate nc',
    'certainteed symphony slate cornelius',
    'polymer slate roof davidson nc',
    'synthetic slate mooresville nc',
    'lightweight slate alternative lake norman',
    'class 4 impact slate roof lake norman',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/synthetic-slate-roofing-lake-norman-nc`,
  },
  openGraph: {
    title: 'Synthetic Slate Roofing Lake Norman NC | DaVinci, Brava, F-Wave | Best Roofing Now',
    description:
      'Lake Norman\'s synthetic slate roofing specialists. DaVinci Bellaforté, Brava Old World Slate, F-Wave REVIA, CertainTeed Symphony — Class 4 impact, 50-yr warranty.',
    url: `${SITE_CONFIG.url}/synthetic-slate-roofing-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Synthetic slate roofing Lake Norman NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Layers,
    title: 'Synthetic Slate Installation',
    description: 'Full installation of DaVinci Multi-Width Slate, Bellaforté, Brava Old World Slate, F-Wave REVIA, and CertainTeed Symphony for Lake Norman homes.',
    href: '/contact',
  },
  {
    icon: Home,
    title: 'Polymer Slate Re-Roofs',
    description: 'Tear-off and replacement with composite slate on existing Cornelius, Davidson, and Mooresville homes — no structural reinforcement required.',
    href: '/services/roof-replacement',
  },
  {
    icon: Wind,
    title: 'High-Wind Synthetic Slate',
    description: 'Up to 211 MPH wind-rated synthetic slate panels engineered for Lake Norman waterfront, Peninsula, and Trump National exposure.',
    href: '/lake-norman-waterfront-roofing',
  },
  {
    icon: Wrench,
    title: 'Repair &amp; Tile Replacement',
    description: 'Individual tile replacement, ridge, hip, and flashing repair on existing DaVinci, Brava, and F-Wave synthetic slate roofs across Lake Norman.',
    href: '/services/roof-repair',
  },
  {
    icon: Shield,
    title: 'HOA &amp; ARC Approvals',
    description: 'We prepare manufacturer samples, color renderings, and warranty documentation for The Peninsula, River Run, and Davidson Pointe ARC submissions.',
    href: '/contact',
  },
  {
    icon: Hammer,
    title: 'Natural Slate Alternative',
    description: 'When natural slate is too heavy or too expensive, synthetic slate delivers the same look at half the weight and a third of the cost.',
    href: '/slate-roofing-lake-norman-nc',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Certified Synthetic Slate Installers',
    description: 'Manufacturer-certified for DaVinci Roofscapes, Brava Roof Tile, and F-Wave — meaning full 50-year warranty coverage on every Lake Norman install.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from homeowners across Cornelius, Davidson, Mooresville, Huntersville, and the broader Lake Norman region.`,
  },
  {
    icon: Shield,
    title: 'Class 4 Impact &amp; Class A Fire',
    description: 'Every synthetic slate system we install carries UL 2218 Class 4 impact and Class A fire ratings — qualifying for NC homeowner-insurance discounts.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed &amp; Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability and workers\' compensation coverage for steep-pitch Lake Norman estate work.',
  },
  {
    icon: Users,
    title: 'Lake Norman HOA Experience',
    description: 'Years of experience navigating ARC committees at The Peninsula, Trump National, River Run, Davidson Pointe, Antiquity, and Jetton Cove.',
  },
  {
    icon: Clock,
    title: '50-Year Lifespan',
    description: 'DaVinci, Brava, and F-Wave all carry 50-year limited warranties — synthetic slate is often the last roof a Lake Norman homeowner will install.',
  },
];

const syntheticBenefits = [
  {
    title: 'Lifespan',
    description: 'DaVinci, Brava, and F-Wave all carry 50-year limited warranties — typical real-world lifespan is 50+ years on Lake Norman homes.',
    stat: '50 Yr',
    label: 'Limited Warranty',
  },
  {
    title: 'Weight',
    description: 'Synthetic slate weighs 250-400 lbs per square — about half of natural slate. No structural reinforcement needed on standard Lake Norman framing.',
    stat: '~50%',
    label: 'Lighter Than Slate',
  },
  {
    title: 'Wind Rating',
    description: 'Most synthetic slate is rated 110+ MPH; some F-Wave and DaVinci profiles reach 211 MPH — perfect for Lake Norman waterfront exposure.',
    stat: '110-211',
    label: 'MPH Wind Rated',
  },
  {
    title: 'Cost',
    description: 'Installed cost in Lake Norman runs $9-$18 per square foot — roughly one-third the price of natural slate at $20-$50 per square foot.',
    stat: '$9-$18',
    label: 'Per Sq Ft Installed',
  },
];

const lakeNormanAreas = [
  { name: 'Cornelius', href: '/roofing-cornelius-nc' },
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Huntersville', href: '/roofing-huntersville-nc' },
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Sherrills Ford', href: '/roofing-contractor-charlotte-nc' },
  { name: 'The Peninsula (Cornelius)', href: '/roofing-cornelius-nc' },
  { name: 'Trump National (Mooresville)', href: '/roofing-mooresville-nc' },
];

const brandComparison = [
  {
    brand: 'DaVinci Roofscapes',
    products: 'Multi-Width Slate, Bellaforté Slate, Single-Width Slate',
    material: 'Virgin engineered polymer',
    warranty: '50-year limited (lifetime to original owner)',
    impact: 'Class 4 (UL 2218)',
    wind: 'Up to 110 MPH (Bellaforté tested to 211 MPH)',
    bestFor: 'Estate homes in The Peninsula, Trump National, River Run wanting a true natural-slate look with widest color palette',
  },
  {
    brand: 'Brava Roof Tile',
    products: 'Old World Slate',
    material: '100% recycled polymer composite',
    warranty: '50-year limited',
    impact: 'Class 4 (UL 2218)',
    wind: '180+ MPH',
    bestFor: 'Davidson and Mooresville homeowners prioritizing sustainability and a hand-crafted, multi-thickness slate aesthetic',
  },
  {
    brand: 'F-Wave REVIA',
    products: 'REVIA Synthetic Slate',
    material: 'Engineered polymer (single-piece shingle format)',
    warranty: '50-year limited',
    impact: 'Class 4 (UL 2218)',
    wind: '130 MPH (up to 211 MPH with enhanced fastening)',
    bestFor: 'Mid-range Lake Norman homes wanting fastest install times and shingle-style installation cost',
  },
  {
    brand: 'CertainTeed Symphony',
    products: 'Symphony Slate',
    material: 'Engineered composite slate',
    warranty: '50-year limited',
    impact: 'Class 4 (UL 2218)',
    wind: '110+ MPH',
    bestFor: 'Lake Norman homeowners already in the CertainTeed system who want full SureStart Plus warranty coverage',
  },
];

const threeWayComparison = [
  {
    factor: 'Material',
    synthetic: 'Engineered / recycled polymer composite',
    natural: 'Quarried natural stone',
    asphalt: 'Asphalt-saturated fiberglass mat with granules',
  },
  {
    factor: 'Lifespan',
    synthetic: '50 years (warranty)',
    natural: '75-150+ years',
    asphalt: '20-30 years',
  },
  {
    factor: 'Weight per Square',
    synthetic: '250-400 lbs',
    natural: '800-1,500 lbs',
    asphalt: '~250 lbs',
  },
  {
    factor: 'Cost (installed, Lake Norman)',
    synthetic: '$9-$18 / sq ft',
    natural: '$20-$50 / sq ft',
    asphalt: '$5-$8 / sq ft',
  },
  {
    factor: 'Total Cost on 2,500 sq ft Home',
    synthetic: '$22,500 - $45,000',
    natural: '$50,000 - $125,000',
    asphalt: '$12,500 - $20,000',
  },
  {
    factor: 'Structural Reinforcement',
    synthetic: 'Not required on standard framing',
    natural: 'Often required on retrofits',
    asphalt: 'Not required',
  },
  {
    factor: 'Impact Rating',
    synthetic: 'Class 4 (UL 2218)',
    natural: 'Class 4 (UL 2218)',
    asphalt: 'Class 3 typical (Class 4 available)',
  },
  {
    factor: 'Fire Rating',
    synthetic: 'Class A',
    natural: 'Class A',
    asphalt: 'Class A',
  },
  {
    factor: 'Lake Norman HOA Approval',
    synthetic: 'Generally easy — confirm with ARC',
    natural: 'Almost always granted',
    asphalt: 'Always granted',
  },
];

const faqs = [
  {
    question: 'How much does synthetic slate cost in Lake Norman NC?',
    answer:
      'Synthetic slate roofing in Lake Norman costs $9 to $18 per square foot installed, depending on the brand (DaVinci Bellaforté and Brava Old World Slate command a premium over F-Wave REVIA), color choice, and roof complexity. For a typical 2,500 square foot Lake Norman home, that puts a complete synthetic slate roof in the $22,500 to $45,000 range. That is roughly one-third the cost of natural slate at the same square footage, while delivering nearly identical curb appeal and a 50-year warranty.',
  },
  {
    question: 'Which synthetic slate brand is best for Lake Norman?',
    answer:
      'For Lake Norman estate homes in The Peninsula, Trump National, and River Run, DaVinci Multi-Width Slate and Bellaforté Slate offer the widest color palette and most authentic hand-split slate look. For sustainability-conscious Davidson and Mooresville homeowners, Brava Old World Slate (made from 100% recycled polymer) is the standout. For fastest install and value, F-Wave REVIA Synthetic Slate is hard to beat. CertainTeed Symphony Slate is the right call when you want the SureStart Plus warranty and a CertainTeed-backed system.',
  },
  {
    question: 'How long does synthetic slate last on a Lake Norman roof?',
    answer:
      'Synthetic slate carries 50-year limited manufacturer warranties from DaVinci Roofscapes, Brava Roof Tile, F-Wave, and CertainTeed Symphony. Real-world Lake Norman lifespan typically meets or exceeds the warranty term because Lake Norman\'s humid summers and mild winters are far gentler than the freeze-thaw cycles synthetic slate is engineered to handle. Modern UV stabilizers and color formulations have largely eliminated the fading issues seen in early-2000s composite slate products.',
  },
  {
    question: 'Is synthetic slate strong enough for Lake Norman storms?',
    answer:
      'Yes — synthetic slate is one of the most storm-resistant roofing materials available. Every major brand (DaVinci, Brava, F-Wave, CertainTeed Symphony) carries a UL 2218 Class 4 impact rating, the highest available. Wind ratings range from 110 MPH on standard installs to 211 MPH on Bellaforté and F-Wave REVIA with enhanced fastening — more than enough for Lake Norman waterfront thunderstorms and the occasional tropical-storm remnant. Class A fire rating is standard across the category.',
  },
  {
    question: 'Do Lake Norman HOAs accept synthetic slate?',
    answer:
      'Lake Norman HOAs generally approve synthetic slate, but approval depends on the specific community and the brand. The Peninsula, Trump National, River Run, Davidson Pointe, Antiquity, and Jetton Cove have all approved DaVinci, Brava, and CertainTeed Symphony installations because the look is virtually indistinguishable from natural slate from street level. Best Roofing Now prepares ARC submission packages with manufacturer samples, color renderings, and warranty documentation to make approval straightforward.',
  },
  {
    question: 'Can my Lake Norman home support synthetic slate without reinforcement?',
    answer:
      'Almost always, yes. Synthetic slate weighs 250-400 pounds per square (100 sq ft) — roughly the same as architectural asphalt shingles and about half the weight of natural slate. Standard Lake Norman framing built for asphalt or designer shingles can carry synthetic slate without any structural reinforcement, sister joists, or rafter upgrades. This is the single biggest practical advantage synthetic slate has over natural slate on existing Cornelius, Davidson, and Mooresville homes.',
  },
  {
    question: 'How does synthetic slate handle hail in NC?',
    answer:
      'Synthetic slate handles North Carolina hail extremely well. Every major brand (DaVinci, Brava, F-Wave, CertainTeed Symphony) is tested to UL 2218 Class 4 — the highest impact rating available, which simulates a 2-inch steel ball dropped from 20 feet. Most NC homeowner-insurance carriers offer 5% to 30% premium discounts for Class 4 impact-rated roofs. Even direct hail strikes on synthetic slate typically leave only cosmetic marks rather than the splits or punctures that compromise asphalt shingles.',
  },
  {
    question: 'Are there warranties on synthetic slate in Lake Norman?',
    answer:
      'Yes — synthetic slate carries some of the strongest warranties in the roofing industry. DaVinci Roofscapes provides a 50-year limited material warranty (with lifetime coverage to the original owner on certain product lines). Brava Roof Tile, F-Wave REVIA, and CertainTeed Symphony Slate all carry 50-year limited warranties. As manufacturer-certified installers, Best Roofing Now activates the full warranty on every Lake Norman installation, including workmanship coverage on top of the manufacturer material warranty.',
  },
  {
    question: 'Synthetic slate vs cedar shake — which is better for waterfront?',
    answer:
      'For Lake Norman waterfront homes, synthetic slate is generally the better choice over cedar shake. Cedar shake requires regular maintenance (cleaning, oiling, moss removal) and has a 30-40 year lifespan in Lake Norman\'s humid lakefront climate. Synthetic slate is virtually maintenance-free, lasts 50+ years, and carries the Class A fire and Class 4 impact ratings cedar shake cannot match. Some synthetic slate products also come in cedar-shake textures (DaVinci Single-Width Shake, F-Wave Cedar) if you prefer the shake aesthetic without the maintenance.',
  },
  {
    question: 'How long does synthetic slate installation take?',
    answer:
      'A typical Lake Norman synthetic slate installation takes 5 to 14 days, depending on roof size and complexity. F-Wave REVIA installs fastest because it is a single-piece shingle format. DaVinci Multi-Width Slate and Brava Old World Slate take longer because each tile is individually placed for a more authentic, hand-laid appearance. Compared to natural slate (4-8 weeks), synthetic slate installs in a fraction of the time — another reason it has become the preferred choice for Lake Norman homeowners on a project schedule.',
  },
];

export default function SyntheticSlateRoofingLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Synthetic Slate Roofing Lake Norman NC', url: `${SITE_CONFIG.url}/synthetic-slate-roofing-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/synthetic-slate-roofing-lake-norman-nc`}
        pageName="Synthetic Slate Roofing Lake Norman NC"
        city="Cornelius"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/synthetic-slate-roofing-lake-norman-nc`} city={"Lake Norman"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Synthetic slate roof Lake Norman NC - DaVinci, Brava, F-Wave composite slate roofing"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-slate-500/20 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4 text-slate-300" />
              <span className="text-sm font-semibold text-slate-200">Composite &amp; Polymer Slate Roofing</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Synthetic Slate Roofing <br className="hidden md:block" />
              <span className="text-slate-300">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              DaVinci, Brava, F-Wave &amp; CertainTeed Symphony for Lake Norman Homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now installs polymer and composite synthetic slate from DaVinci Roofscapes,
              Brava Roof Tile, F-Wave REVIA, and CertainTeed Symphony across Lake Norman. Get the
              luxury slate look at half the weight, a third of the cost, and a 50-year warranty —
              perfect for Cornelius, Davidson, Mooresville, and Huntersville homes.
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
                className="border-white text-white hover:bg-white hover:text-slate-900"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-slate-300 fill-slate-300" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-slate-300" />
                Class 4 Impact Rated
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-slate-300" />
                50-Year Warranty
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-slate-300" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lake Norman Chooses Synthetic Slate */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Lake Norman Homeowners Choose Synthetic Slate Over Natural Slate
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Lake Norman homeowners have always loved the look of natural slate — it signals
                permanence, craftsmanship, and architectural seriousness in a way no other material can.
                The catch is weight, cost, and structural commitment. Natural slate runs $20 to $50 per
                square foot installed, weighs 800-1,500 pounds per square, and frequently requires
                rafter reinforcement on existing Lake Norman homes. <strong>Synthetic slate solves all
                three problems</strong> while delivering a finished roof that is virtually indistinguishable
                from quarried slate at street level.
              </p>
              <p>
                Modern synthetic slate is a far cry from the early-2000s composite products that faded,
                curled, or cracked. Today&apos;s leading brands — <strong>DaVinci Roofscapes</strong> (Multi-Width
                Slate, Bellaforté Slate), <strong>Brava Roof Tile</strong> (Old World Slate), <strong>F-Wave
                REVIA Synthetic Slate</strong>, and <strong>CertainTeed Symphony Slate</strong> — use
                engineered polymers with advanced UV stabilizers, color-through formulations, and
                fade-resistant pigments that hold their appearance for 50+ years. DaVinci even backs
                Bellaforté with a lifetime warranty to the original Lake Norman owner.
              </p>
              <p>
                For Lake Norman&apos;s estate communities — The Peninsula in Cornelius, Trump National
                in Mooresville, River Run in Davidson, Davidson Pointe, The Point, Antiquity, and
                Jetton Cove — synthetic slate has become the default premium roofing choice. It carries
                the same Class A fire and UL 2218 Class 4 impact ratings as natural slate, qualifies
                for the same NC homeowner-insurance discounts, and clears HOA Architectural Review
                Committees with far less friction than older composite products. And because it weighs
                half what quarried slate does, your Lake Norman home almost certainly does not need
                any structural reinforcement.
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
              Synthetic Slate Roof Benefits
            </h2>
            <p className="text-gray text-lg">
              Why composite slate is the smart roofing choice for Lake Norman&apos;s mid-to-upper-market homes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {syntheticBenefits.map((benefit) => (
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

      {/* Cost Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              How Much Does Synthetic Slate Cost in Lake Norman?
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                <strong>Synthetic slate roofing in Lake Norman costs $9 to $18 per square foot installed.</strong>{' '}
                For a typical 2,500 square foot Lake Norman home, that puts a complete synthetic slate
                roof in the <strong>$22,500 to $45,000</strong> range. For a larger 3,500 square foot
                Cornelius or Mooresville estate home, expect <strong>$31,500 to $63,000</strong>.
                Where you land in that range depends on the brand, the color choice, and the complexity
                of your roofline.
              </p>
              <p>
                On a per-square basis (100 sq ft), synthetic slate runs roughly <strong>$900 to $1,800
                per square installed</strong>. For comparison, natural slate runs $2,000 to $5,000 per
                square, and architectural asphalt shingles run $400 to $700 per square. Synthetic
                slate sits squarely in the &quot;premium without the natural-slate price tag&quot; sweet
                spot — which is why it has become the dominant choice on Lake Norman estate homes
                being re-roofed today.
              </p>
              <p>
                <strong>Brand-specific Lake Norman pricing (installed):</strong>
              </p>
              <ul>
                <li><strong>F-Wave REVIA Synthetic Slate</strong> — $9 to $13 per sq ft (most affordable, fastest install)</li>
                <li><strong>CertainTeed Symphony Slate</strong> — $11 to $15 per sq ft (full SureStart Plus warranty)</li>
                <li><strong>DaVinci Multi-Width Slate &amp; Bellaforté</strong> — $13 to $18 per sq ft (widest color palette, most authentic look)</li>
                <li><strong>Brava Old World Slate</strong> — $13 to $18 per sq ft (100% recycled polymer, hand-crafted aesthetic)</li>
              </ul>
              <p>
                Best Roofing Now provides itemized estimates that separate the slate, underlayment,
                flashing, ridge and hip components, and labor — so Lake Norman homeowners see exactly
                where every dollar goes. Financing through PowerPay is available for qualified applicants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Top Synthetic Slate Brands for Lake Norman Homes
              </h2>
              <p className="text-gray text-lg max-w-3xl mx-auto">
                Best Roofing Now is manufacturer-certified to install all four leading synthetic slate
                systems on Lake Norman properties. Here is how they compare side by side.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {brandComparison.map((b) => (
                <div key={b.brand} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{b.brand}</h3>
                  <p className="text-sm text-gray mb-4"><strong>Products:</strong> {b.products}</p>
                  <ul className="space-y-2 text-sm text-gray mb-4">
                    <li><strong>Material:</strong> {b.material}</li>
                    <li><strong>Warranty:</strong> {b.warranty}</li>
                    <li><strong>Impact:</strong> {b.impact}</li>
                    <li><strong>Wind:</strong> {b.wind}</li>
                  </ul>
                  <p className="text-sm text-dark border-t border-light pt-3">
                    <strong>Best for:</strong> {b.bestFor}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2 flex items-center gap-2">
                <Recycle className="w-5 h-5 text-primary" /> Honorable Mention: Quarrix Building Products
              </h3>
              <p className="text-gray text-sm">
                Quarrix synthetic slate is occasionally specified on Lake Norman new construction and is a
                solid Class 4 impact-rated option. We will install Quarrix on request, though most Lake
                Norman homeowners gravitate to DaVinci, Brava, F-Wave, or CertainTeed Symphony for the
                broader color libraries and stronger warranty terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Way Comparison */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Synthetic Slate vs Natural Slate vs Asphalt Shingle: Lake Norman Comparison
              </h2>
              <p className="text-gray text-lg max-w-3xl mx-auto">
                Three honest comparisons across the metrics Lake Norman homeowners actually weigh
                when choosing a premium roof.
              </p>
            </div>
            <div className="bg-light rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="p-4 font-bold">Factor</th>
                      <th className="p-4 font-bold">Synthetic Slate</th>
                      <th className="p-4 font-bold">Natural Slate</th>
                      <th className="p-4 font-bold">Asphalt Shingle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {threeWayComparison.map((row, idx) => (
                      <tr key={row.factor} className={idx % 2 === 0 ? 'bg-white' : 'bg-light'}>
                        <td className="p-4 font-semibold text-dark align-top">{row.factor}</td>
                        <td className="p-4 text-gray align-top">{row.synthetic}</td>
                        <td className="p-4 text-gray align-top">{row.natural}</td>
                        <td className="p-4 text-gray align-top">{row.asphalt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-gray text-center mt-6">
              Want the natural-stone version instead? See our{' '}
              <Link href="/slate-roofing-lake-norman-nc" className="text-primary font-semibold hover:underline">
                natural slate roofing Lake Norman page
              </Link>{' '}
              for the deeper dive.
            </p>
          </div>
        </div>
      </section>

      {/* Wind, Hail, Fire Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Wind, Hail, and Fire Ratings: Why Synthetic Slate Beats Natural for Lake Norman
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Lake Norman&apos;s climate is mostly mild — but the storms that do roll through can be
                violent. Spring and summer thunderstorms regularly bring 60+ MPH straight-line winds
                across the open water, occasional hailstorms drop quarter-to-golf-ball-sized hail
                across Cornelius, Davidson, and Mooresville, and tropical-storm remnants from the
                Carolina coast occasionally push into the region. Synthetic slate is engineered for
                exactly these conditions.
              </p>
              <p>
                <strong className="flex items-center gap-2"><Wind className="w-5 h-5 text-primary" /> Wind:</strong>{' '}
                Standard installs of DaVinci Multi-Width Slate, CertainTeed Symphony, and Brava Old
                World Slate are rated to 110+ MPH. With enhanced fastening patterns, DaVinci Bellaforté
                and F-Wave REVIA test up to <strong>211 MPH</strong> — wind speeds Lake Norman has not
                seen in recorded history. For waterfront homes in The Peninsula or on the open Catawba
                shoreline at Sherrills Ford and Denver, this is meaningful insurance against the worst
                straight-line wind events.
              </p>
              <p>
                <strong className="flex items-center gap-2"><Shield className="w-5 h-5 text-primary" /> Hail:</strong>{' '}
                Every major synthetic slate brand we install carries a UL 2218 <strong>Class 4
                impact rating</strong> — the highest available. The UL 2218 test drops a 2-inch
                steel ball from 20 feet onto a tile; Class 4 means no cracking, splitting, or
                puncture. In practical terms, hail strikes that would shatter natural slate or shred
                asphalt shingles typically leave only cosmetic marks on synthetic slate. That rating
                qualifies most Lake Norman homeowners for <strong>5% to 30% premium discounts</strong>{' '}
                from their NC homeowner-insurance carrier.
              </p>
              <p>
                <strong className="flex items-center gap-2"><Flame className="w-5 h-5 text-primary" /> Fire:</strong>{' '}
                All four leading synthetic slate brands carry a <strong>Class A fire rating</strong> —
                the highest available — when installed over standard underlayment and decking. For
                wooded Lake Norman lots in River Run, Davidson Pointe, and the Antiquity / Jetton Cove
                tree canopy, this is the same protection natural slate offers without the weight penalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Synthetic Slate Roofing Services for Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Comprehensive composite slate roofing solutions for Lake Norman&apos;s waterfront, golf,
              and luxury HOA communities.
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

      {/* Neighborhoods Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Lake Norman Neighborhoods Where Synthetic Slate Thrives
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Synthetic slate is a strong fit on a wider range of Lake Norman homes than natural
                slate ever could be. Because it is lighter and more affordable, it works on mid-range
                custom builds and luxury estates alike. These are the Lake Norman communities where we
                most often install DaVinci, Brava, F-Wave, and CertainTeed Symphony:
              </p>
              <ul>
                <li>
                  <strong>The Peninsula (Cornelius)</strong> — Lake Norman&apos;s flagship gated
                  waterfront community. ARC committees here have approved DaVinci Bellaforté Slate
                  and Brava Old World Slate as natural-slate equivalents on multiple homes we have
                  re-roofed.
                </li>
                <li>
                  <strong>Trump National (Mooresville)</strong> — Custom estate homes with European
                  and Tudor architecture where DaVinci Multi-Width Slate and Brava Old World Slate
                  are the most common upgrade from original cedar shake or asphalt.
                </li>
                <li>
                  <strong>River Run (Davidson)</strong> — Davidson&apos;s premier golf community.
                  Brick-and-stone manors with steep pitches are textbook synthetic slate candidates;
                  CertainTeed Symphony is a popular fit when homeowners want a CertainTeed-system warranty.
                </li>
                <li>
                  <strong>Davidson Pointe</strong> — Lakefront luxury where DaVinci Bellaforté and
                  F-Wave REVIA both clear ARC review and pair beautifully with copper gutters and
                  standing seam metal accents.
                </li>
                <li>
                  <strong>Antiquity &amp; Jetton Cove (Cornelius)</strong> — Walkable Cornelius
                  neighborhoods with traditional architecture. F-Wave REVIA is a popular value choice
                  here; Brava Old World Slate works on the larger estate-style homes.
                </li>
                <li>
                  <strong>The Point (Mooresville)</strong> — Greg Norman-designed golf community on
                  the Brawley peninsula. DaVinci Multi-Width Slate is a frequent upgrade on the
                  European-inspired custom homes here.
                </li>
                <li>
                  <strong>Sherrills Ford &amp; Denver (Catawba/Lincoln County)</strong> — Lakefront
                  custom builds where wind exposure makes the 211 MPH-rated DaVinci Bellaforté and
                  F-Wave REVIA particularly attractive.
                </li>
                <li>
                  <strong>Huntersville &amp; Birkdale</strong> — Move-up luxury homes where synthetic
                  slate elevates curb appeal without the weight or expense of natural slate.
                </li>
              </ul>
              <p>
                Outside these communities we still install synthetic slate regularly across Lake
                Norman — every home and every HOA is its own conversation, and we will tell you
                honestly whether your home, your framing, and your resale market support the investment.
              </p>
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
                Why Best Roofing Now for Synthetic Slate Installation
              </h2>
              <p className="text-gray text-lg mb-8">
                Synthetic slate looks deceptively simple — until you see a bad install. Lake Norman
                homeowners choose Best Roofing Now because we are manufacturer-certified across
                DaVinci, Brava, F-Wave, and CertainTeed Symphony, we know exactly how each system
                handles ridges, hips, valleys, and flashing details, and we have walked dozens of
                Lake Norman ARC committees through synthetic slate approval.
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
                alt="Synthetic slate roof installation at Lake Norman NC home - DaVinci Bellaforté - Best Roofing Now"
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
      <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for a Synthetic Slate Roof on Your Lake Norman Home?
              </h2>
              <p className="text-white/90">
                Free estimates from Lake Norman&apos;s certified DaVinci, Brava, F-Wave, and CertainTeed Symphony installers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-slate-900 hover:bg-white/90"
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
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Synthetic Slate Roofing Throughout Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We install DaVinci, Brava, F-Wave, and CertainTeed Symphony across every Lake Norman
              community — waterfront, golf, walkable, and historic.
            </p>
          </div>
          <div className="bg-light rounded-xl p-6 shadow-md max-w-2xl mx-auto">
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

      {/* Related Lake Norman Pages */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              Related Lake Norman Roofing Resources
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/slate-roofing-lake-norman-nc" className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="font-bold text-primary mb-1">Natural Slate Roofing Lake Norman</h3>
                <p className="text-gray text-sm">Quarried Buckingham, Vermont, and North Country slate for Lake Norman estate homes.</p>
              </Link>
              <Link href="/cedar-shake-roofing-lake-norman-nc" className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="font-bold text-primary mb-1">Cedar Shake Roofing Lake Norman</h3>
                <p className="text-gray text-sm">Natural cedar shake — and the synthetic alternatives that outlast it.</p>
              </Link>
              <Link href="/standing-seam-metal-roof-lake-norman-nc" className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="font-bold text-primary mb-1">Standing Seam Metal Roof Lake Norman</h3>
                <p className="text-gray text-sm">Premium metal roofing for waterfront and lakeside homes.</p>
              </Link>
              <Link href="/luxury-roofing-lake-norman-nc" className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="font-bold text-primary mb-1">Luxury Roofing Lake Norman NC</h3>
                <p className="text-gray text-sm">High-end roofing systems for Lake Norman estate homes.</p>
              </Link>
              <Link href="/lake-norman-waterfront-roofing" className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="font-bold text-primary mb-1">Lake Norman Waterfront Roofing</h3>
                <p className="text-gray text-sm">Specialized roofing for lakefront properties and exposure.</p>
              </Link>
              <Link href="/roofers-lake-norman-nc" className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="font-bold text-primary mb-1">Roofers Lake Norman NC</h3>
                <p className="text-gray text-sm">Trusted roofing contractor across the Lake Norman region.</p>
              </Link>
              <Link href="/services/roof-replacement" className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="font-bold text-primary mb-1">Roof Replacement Services</h3>
                <p className="text-gray text-sm">Full roof replacement options across all materials.</p>
              </Link>
              <Link href="/contact" className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="font-bold text-primary mb-1">Contact Best Roofing Now</h3>
                <p className="text-gray text-sm">Free estimates for synthetic slate across Lake Norman.</p>
              </Link>
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
                Synthetic Slate Roofing Lake Norman FAQs
              </h2>
              <p className="text-gray text-lg">
                Direct, citable answers to the most-asked questions about composite and polymer slate
                roofing on Lake Norman homes.
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
        city="Cornelius"
        slug="synthetic-slate-roofing-lake-norman-nc"
        count={4}
        title="Recent Roofing Projects in the Lake Norman Area"
        subtitle="Browse completed roofing projects from the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/synthetic-slate-roofing-lake-norman-nc`}
      />

      <CityGeoSection
        city="Cornelius"
        state="NC"
        citySlug="cornelius-nc"
        service="Synthetic Slate Roofing"
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

      <LKNPartnershipsBlock city={"Lake Norman"} />
      <LKNDataCitations city={"Lake Norman"} />
      <CTASection
        title="Ready for a 50-Year Synthetic Slate Roof?"
        subtitle="Get a free estimate from Lake Norman's certified DaVinci, Brava, F-Wave, and CertainTeed Symphony installers. We'll walk your roof, prepare your HOA approval package, and deliver a synthetic slate installation that looks like quarried slate — without the weight, the wait, or the price tag."
      />
    </>
  );
}
