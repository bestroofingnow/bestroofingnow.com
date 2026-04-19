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
  MapPin,
  Mountain,
  Gem,
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
  title: 'Slate Roofing Lake Norman NC',
  description:
    'Natural slate roofing for Lake Norman estate homes. 75-150+ year lifespan, $20-$50/sq ft installed, Buckingham & Vermont quarried slate. BBB A+ rated.',
  keywords: [
    'slate roofing lake norman nc',
    'natural slate roof lake norman',
    'slate roof cornelius nc',
    'slate roof davidson nc',
    'slate roof mooresville nc',
    'lake norman slate roof contractor',
    'buckingham slate roof lake norman',
    'vermont slate roof nc',
    'estate home slate roofing lake norman',
    'luxury slate roofing peninsula cornelius',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/slate-roofing-lake-norman-nc`,
  },
  openGraph: {
    title: 'Slate Roofing Lake Norman NC | Natural Slate | Best Roofing Now',
    description:
      'Lake Norman\'s natural slate roofing specialists. Quarried Buckingham, Vermont, and North Country slate for luxury estate homes in The Peninsula, Trump National, and River Run.',
    url: `${SITE_CONFIG.url}/slate-roofing-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Natural slate roofing Lake Norman NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Mountain,
    title: 'Natural Slate Installation',
    description: 'Hand-laid quarried slate from Buckingham VA, Vermont, and North Country NY for Lake Norman estate homes — installed with copper flashing and snow guards.',
    href: '/contact',
  },
  {
    icon: Gem,
    title: 'Estate-Grade Slate Roofing',
    description: 'Premium slate roof systems engineered for luxury Lake Norman waterfront homes in The Peninsula, Trump National, and Davidson Pointe.',
    href: '/luxury-roofing-lake-norman-nc',
  },
  {
    icon: Wrench,
    title: 'Slate Roof Repair & Restoration',
    description: 'Specialized slate repair, individual tile replacement, and restoration of historic slate roofs across Cornelius, Davidson, and Mooresville.',
    href: '/services/roof-repair',
  },
  {
    icon: Hammer,
    title: 'Structural Reinforcement',
    description: 'Engineering assessment and structural reinforcement for retrofitting natural slate (800-1,500 lbs/square) on existing Lake Norman homes.',
    href: '/contact',
  },
  {
    icon: Shield,
    title: 'Copper Flashing & Snow Guards',
    description: 'Copper and zinc valley, eave, and chimney flashing engineered to outlast the slate above — with optional snow guards for steep Lake Norman estate rooflines.',
    href: '/contact',
  },
  {
    icon: Home,
    title: 'Synthetic Slate Alternatives',
    description: 'When natural slate is not the right fit, we install Class 4 impact-rated synthetic slate that mimics the look at a fraction of the weight and cost.',
    href: '/synthetic-slate-roofing-charlotte-nc',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Slate Roofing Specialists',
    description: 'Trained in traditional hand-laid slate techniques — a craft very few Lake Norman roofers practice today.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from homeowners across Cornelius, Davidson, Mooresville, and the Lake Norman region.`,
  },
  {
    icon: Shield,
    title: 'Manufacturer Certified',
    description: 'Approved installers for North Country Slate (100-year warranty) and other premium quarried-slate suppliers.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability and workers\' compensation coverage for high-pitch slate work.',
  },
  {
    icon: Users,
    title: 'Lake Norman Estate Experience',
    description: 'Decades of experience working with luxury Lake Norman waterfront properties, ARC committees, and HOA approval processes.',
  },
  {
    icon: Clock,
    title: '75-150+ Year Lifespan',
    description: 'A natural slate roof installed today on a Lake Norman home will outlast the original homeowner — and likely the next two generations.',
  },
];

const slateBenefits = [
  {
    title: 'Lifespan',
    description: 'Natural slate is the longest-lasting roofing material on the market — 75 to 150+ years with proper installation and copper flashing.',
    stat: '75-150+',
    label: 'Year Lifespan',
  },
  {
    title: 'Fire Resistance',
    description: 'Slate is naturally Class A fire-rated stone — it cannot ignite. Ideal for wooded Lake Norman lots in The Peninsula and River Run.',
    stat: 'Class A',
    label: 'Fire Rating',
  },
  {
    title: 'Impact Rating',
    description: 'Most quarried slate carries a UL 2218 Class 4 impact rating — the highest available — which qualifies for NC homeowner-insurance discounts.',
    stat: 'Class 4',
    label: 'Impact Rated',
  },
  {
    title: 'Resale Value',
    description: 'A slate roof is a permanent, transferable asset on Lake Norman luxury homes — appraisers consistently value slate above any other roofing material.',
    stat: '$60K-$150K',
    label: 'Typical Estate Cost',
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

const slateVsSynthetic = [
  {
    factor: 'Material',
    natural: 'Quarried natural stone (Buckingham VA, Vermont, North Country NY)',
    synthetic: 'Engineered polymer / recycled rubber composite',
  },
  {
    factor: 'Lifespan',
    natural: '75-150+ years',
    synthetic: '40-50 years',
  },
  {
    factor: 'Weight',
    natural: '800-1,500 lbs per square',
    synthetic: '250-400 lbs per square',
  },
  {
    factor: 'Cost (installed)',
    natural: '$20-$50 per sq ft',
    synthetic: '$8-$15 per sq ft',
  },
  {
    factor: 'Structural Reinforcement',
    natural: 'Often required on retrofits',
    synthetic: 'Rarely required — installs over standard framing',
  },
  {
    factor: 'Lake Norman HOA Approval',
    natural: 'Almost always granted (premium aesthetic)',
    synthetic: 'Approval varies — confirm with ARC committee',
  },
  {
    factor: 'Best Fit',
    natural: 'Estate homes in The Peninsula, Trump National, Davidson Pointe, River Run',
    synthetic: 'Mid-range Lake Norman homes wanting the look without the weight',
  },
];

const faqs = [
  {
    question: 'How much does a slate roof cost in Lake Norman NC?',
    answer:
      'A natural slate roof in Lake Norman costs $20 to $50 per square foot installed, depending on slate origin (Buckingham VA, Vermont, or North Country NY), thickness, and roof complexity. For a typical 3,000 sq ft Lake Norman estate home in The Peninsula, River Run, or Trump National, that puts a complete slate roof in the $60,000 to $150,000 range. Premium hard slates and complex rooflines push toward the upper end.',
  },
  {
    question: 'How long does a slate roof last on a Lake Norman home?',
    answer:
      'Natural slate roofs last 75 to 150+ years on Lake Norman homes when properly installed with copper or zinc flashing. Vermont and Buckingham slates routinely exceed 100 years. Because slate is quarried stone, the climate around Lake Norman — humid summers, mild winters — has virtually no impact on its lifespan. The flashing and underlayment will need attention long before the slate itself.',
  },
  {
    question: 'Can my Lake Norman home support a slate roof?',
    answer:
      'Most Lake Norman estate homes built since 2000 can support a natural slate roof, but a structural engineer should confirm before installation. Natural slate weighs 800 to 1,500 pounds per square (100 sq ft), versus 250 pounds for asphalt shingles. Homes in The Peninsula, Trump National, and Davidson Pointe that were originally framed for tile or designer shingles often need only modest reinforcement, while older Cornelius and Mooresville homes may require additional rafters or sister joists.',
  },
  {
    question: 'Do Lake Norman HOAs allow slate roofing?',
    answer:
      'Yes — Lake Norman HOAs almost always approve natural slate roofing because it is considered the most premium and traditional roofing material available. Communities including The Peninsula (Cornelius), Trump National (Mooresville), River Run (Davidson), Davidson Pointe, The Point, Antiquity, and Jetton Cove have all approved slate installations. We handle the ARC submission, prepare slate samples, and coordinate the approval process before scheduling work.',
  },
  {
    question: 'Where does slate for Lake Norman roofs come from?',
    answer:
      'Natural slate for Lake Norman roofs is quarried primarily in Buckingham County, Virginia, the Slate Valley of Vermont and New York (Vermont Black, Sea Green, Purple, Mottled Green & Purple), and the North Country region of New York. Buckingham slate is the historical standard for Carolina estate homes. We source directly from the quarries and partner with North Country Slate, which carries a 100-year manufacturer warranty.',
  },
  {
    question: 'Is natural slate worth it vs synthetic slate?',
    answer:
      'Natural slate is worth it when you own a luxury Lake Norman estate home you intend to keep for 20+ years or pass to family — its 100-year lifespan and resale value justify the $20-$50 per square foot cost. Synthetic slate at $8-$15 per square foot makes more sense for mid-range Lake Norman homes, structurally lighter framing, or owners who plan to sell within a decade. Both look beautiful from the street; the difference is permanence.',
  },
  {
    question: 'How long does slate roof installation take?',
    answer:
      'A natural slate roof installation on a Lake Norman estate home typically takes 4 to 8 weeks, depending on roof size, pitch, and copper flashing complexity. Each slate is hand-laid and individually nailed with copper or stainless nails — the process cannot be rushed. We sequence the work to keep the home weather-tight throughout, which is critical during Lake Norman thunderstorm season.',
  },
  {
    question: 'Do slate roofs handle Lake Norman wind and storms well?',
    answer:
      'Slate roofs handle Lake Norman wind and storms exceptionally well. Properly installed slate is rated for 110+ MPH winds, and because each slate is individually fastened, there are no large panels or shingle strips to peel up. The Class 4 impact rating means slate also shrugs off the hail that occasionally hits the region. The most common storm-related issue is a single cracked slate, which is a quick repair.',
  },
  {
    question: 'Are there insurance discounts for slate roofs in NC?',
    answer:
      'Many North Carolina homeowner-insurance carriers offer premium discounts of 5% to 30% for slate roofs because of the UL 2218 Class 4 impact rating and Class A fire rating. Discounts vary by carrier — confirm directly with your NC insurance agent and request the impact-resistant roofing endorsement. We provide manufacturer documentation for your file at closeout.',
  },
  {
    question: 'How do I find a qualified slate roofer in Lake Norman?',
    answer:
      'Slate is a specialized craft, and very few Lake Norman roofers actually install natural slate — most subcontract or decline the work. Look for a contractor who is manufacturer-certified by North Country Slate or a comparable quarry, can show you completed Lake Norman slate projects, carries proper liability insurance for steep-pitch work, and has experience with luxury HOAs like The Peninsula and Trump National. Best Roofing Now meets all four criteria and serves the entire Lake Norman region.',
  },
];

export default function SlateRoofingLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Slate Roofing Lake Norman NC', url: `${SITE_CONFIG.url}/slate-roofing-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/slate-roofing-lake-norman-nc`}
        pageName="Slate Roofing Lake Norman NC"
        city="Cornelius"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/slate-roofing-lake-norman-nc`} city={"Lake Norman"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero1}
            alt="Natural slate roof Lake Norman NC - quarried slate estate home roofing"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-slate-500/20 rounded-full px-4 py-2 mb-4">
              <Mountain className="w-4 h-4 text-slate-300" />
              <span className="text-sm font-semibold text-slate-200">Natural Quarried Slate Roofing</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Slate Roofing <br className="hidden md:block" />
              <span className="text-slate-300">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Natural Quarried Slate for Lake Norman Estate Homes &amp; Luxury Waterfront
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now installs natural slate roofs sourced from Buckingham VA, Vermont, and
              North Country NY quarries on Lake Norman&apos;s finest estate homes. With a 75-150+ year
              lifespan and Class 4 impact rating, natural slate is the last roof your Cornelius,
              Davidson, or Mooresville home will ever need.
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
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-slate-300" />
                75-150+ Year Lifespan
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-slate-300" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Estate Homes Choose Slate */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Lake Norman Estate Homes Choose Natural Slate Roofing
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Natural slate is the most premium roofing material on the market, and Lake Norman&apos;s
                luxury waterfront communities have long recognized it as the appropriate choice for
                estate-grade architecture. From the brick-and-stone manors of The Peninsula in
                Cornelius to the lakefront homes of Trump National in Mooresville, slate signals
                permanence, craftsmanship, and old-money taste in a way no engineered material can match.
              </p>
              <p>
                Slate is quarried stone — not manufactured. It is split by hand from blocks of dense,
                fine-grained metamorphic rock pulled from quarries in Buckingham County (Virginia),
                the Slate Valley of Vermont and New York, and North Country, New York. Buckingham
                slate has been the standard for prestigious Carolina estates for more than a century,
                while Vermont Black and unfading green slates are common on Lake Norman&apos;s newer
                luxury builds in River Run, Davidson Pointe, Antiquity, and Jetton Cove.
              </p>
              <p>
                Beyond its appearance, natural slate is engineered by geology. It is Class A fire-rated
                (it cannot burn), carries a UL 2218 Class 4 impact rating (the highest available, which
                often qualifies for NC homeowner-insurance discounts), and lasts 75 to 150+ years.
                Many manufacturers — including North Country Slate, which we install across Lake Norman —
                back their material with 100-year warranties. A slate roof installed on your Lake
                Norman home today will likely outlast you, your children, and your grandchildren.
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
              Natural Slate Roof Benefits
            </h2>
            <p className="text-gray text-lg">
              Why natural slate is the definitive roofing choice for Lake Norman&apos;s most valuable homes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slateBenefits.map((benefit) => (
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
              How Much Does a Slate Roof Cost in Lake Norman?
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                <strong>A natural slate roof in Lake Norman costs $20 to $50 per square foot installed.</strong>{' '}
                For the typical 3,000 square foot Lake Norman estate home, that puts a complete slate
                roof in the <strong>$60,000 to $150,000</strong> range. The variance comes down to four
                things: the slate itself (Buckingham, Vermont Black, and unfading greens command a premium),
                roof complexity and pitch, copper-versus-aluminum flashing choices, and whether the
                existing structure needs reinforcement to carry the weight.
              </p>
              <p>
                On a per-square basis (roofing terminology for 100 sq ft), natural slate runs roughly
                <strong> $2,000 to $5,000 per square installed</strong>. For comparison, architectural
                asphalt shingles on the same Lake Norman home run $400-$700 per square, and synthetic
                slate runs $800-$1,500 per square. The premium for natural slate is real — but so is
                the difference: a 100-year roof versus a 25-year roof.
              </p>
              <p>
                Most Lake Norman slate projects we estimate land between <strong>$80,000 and $120,000</strong>{' '}
                because the homes that warrant slate also tend to have steep pitches, dormers, turrets,
                and complex valley work. We provide detailed line-item estimates that separate the slate,
                copper flashing, snow guards, underlayment, and labor so you can see exactly where every
                dollar is going. Financing is available through PowerPay for qualified Lake Norman homeowners.
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
              Slate Roofing Services for Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Comprehensive natural slate roofing solutions for Lake Norman&apos;s waterfront estates,
              luxury HOA communities, and historic homes.
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

      {/* Neighborhoods Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Lake Norman Neighborhoods Where Slate Roofs Belong
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Not every Lake Norman home is a candidate for a natural slate roof — the architecture,
                framing, and HOA character all need to align. These are the Lake Norman communities
                where we most commonly install and recommend natural slate:
              </p>
              <ul>
                <li>
                  <strong>The Peninsula (Cornelius)</strong> — Lake Norman&apos;s flagship gated waterfront
                  community. Many original 1990s and 2000s estate homes were framed for tile or slate;
                  ARC committees consistently approve natural slate, especially Buckingham gray and
                  Vermont Black profiles.
                </li>
                <li>
                  <strong>Trump National (Mooresville)</strong> — Custom estate homes on the Mooresville
                  side of Lake Norman with Tudor, French Country, and traditional Southern architecture
                  that practically demands slate or synthetic slate.
                </li>
                <li>
                  <strong>River Run (Davidson)</strong> — Davidson&apos;s premier golf community. Brick-and-stone
                  manors with steep pitches and turrets are textbook slate candidates.
                </li>
                <li>
                  <strong>Davidson Pointe</strong> — Lakefront luxury homes in Davidson where natural
                  slate is regularly approved and installed alongside copper gutters and standing
                  seam accents.
                </li>
                <li>
                  <strong>The Point (Mooresville)</strong> — Greg Norman-designed golf community on
                  the Brawley peninsula. Custom estate homes with European-inspired architecture
                  frequently feature slate or premium synthetic slate.
                </li>
                <li>
                  <strong>Antiquity &amp; Jetton Cove (Cornelius)</strong> — Walkable Cornelius
                  neighborhoods with traditional architecture; slate is a strong fit on the larger
                  estate-style homes and select custom builds.
                </li>
                <li>
                  <strong>Sherrills Ford &amp; Denver waterfront</strong> — Lakefront custom builds
                  on the Catawba County (Denver) and Catawba/Lincoln (Sherrills Ford) sides of Lake
                  Norman where lot sizes and architecture support slate without HOA complications.
                </li>
              </ul>
              <p>
                If your Lake Norman home falls outside these communities, we still install slate —
                we just have a more honest conversation upfront about whether your home&apos;s framing,
                architecture, and resale market support the investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slate vs Synthetic Comparison */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Slate vs Synthetic Slate: Which Is Right for Your Lake Norman Home?
              </h2>
              <p className="text-gray text-lg max-w-3xl mx-auto">
                Both natural slate and synthetic slate look stunning on a Lake Norman home — but they
                are fundamentally different products. Here is the honest comparison.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="p-4 font-bold">Factor</th>
                      <th className="p-4 font-bold">Natural Slate</th>
                      <th className="p-4 font-bold">Synthetic Slate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slateVsSynthetic.map((row, idx) => (
                      <tr key={row.factor} className={idx % 2 === 0 ? 'bg-white' : 'bg-light'}>
                        <td className="p-4 font-semibold text-dark align-top">{row.factor}</td>
                        <td className="p-4 text-gray align-top">{row.natural}</td>
                        <td className="p-4 text-gray align-top">{row.synthetic}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-gray text-center mt-6">
              Considering the lighter alternative? See our{' '}
              <Link href="/synthetic-slate-roofing-charlotte-nc" className="text-primary font-semibold hover:underline">
                synthetic slate roofing page
              </Link>{' '}
              for the full comparison.
            </p>
          </div>
        </div>
      </section>

      {/* Structural Requirements */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Structural Requirements for a Slate Roof Installation
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Natural slate is heavy. Depending on thickness and origin, slate weighs <strong>800 to
                1,500 pounds per square</strong> (a square is 100 square feet). For perspective,
                architectural asphalt shingles weigh about 250 pounds per square — meaning slate is
                roughly 3 to 6 times heavier than what most Lake Norman homes were originally framed for.
              </p>
              <p>
                <strong>What this means for retrofits:</strong> If your existing Lake Norman home was
                built for asphalt shingles and you want to switch to natural slate, a structural
                engineer needs to evaluate your rafters, joists, and load path before any slate is
                ordered. In our experience, most Lake Norman estate homes built since 2000 — especially
                in The Peninsula, Trump National, and Davidson Pointe — were framed with at least
                2x10 or 2x12 rafters and can carry slate with modest reinforcement (sister joists or
                additional collar ties). Older Cornelius and Mooresville homes may require more
                substantial structural work.
              </p>
              <p>
                <strong>For new construction or full rebuilds</strong>, framing for slate from day one
                is straightforward — your architect simply specifies the upgraded rafter and decking
                schedule. We work with several Lake Norman builders and architects who routinely spec
                slate-ready framing on luxury Davidson, Cornelius, and Mooresville custom homes.
              </p>
              <p>
                <strong>Other technical requirements:</strong> Natural slate needs solid sheathing
                (typically 5/8&quot; or 3/4&quot; plywood), high-temperature ice-and-water shield in
                valleys and at eaves, copper or stainless-steel nails, and copper or zinc flashing.
                Snow guards are optional but recommended on the steepest pitches in The Peninsula and
                River Run. We engineer all of this into the estimate so there are no surprises mid-project.
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
                Why Best Roofing Now for Slate in Lake Norman
              </h2>
              <p className="text-gray text-lg mb-8">
                Slate is a craft, not a product. Lake Norman estate homeowners choose Best Roofing
                Now because we have the manufacturer certifications, the hand-laid slate experience,
                and the local relationships with The Peninsula, Trump National, and River Run ARC
                committees to deliver a slate roof that lasts a century.
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
                alt="Natural slate roof installation at Lake Norman NC estate home - Best Roofing Now"
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
                Ready for a Natural Slate Roof on Your Lake Norman Estate?
              </h2>
              <p className="text-white/90">
                Get a free, detailed slate-roof estimate from Lake Norman&apos;s slate specialists.
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
              Slate Roofing Throughout Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We install natural slate across every Lake Norman community — waterfront, golf, and historic.
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
              <Link href="/luxury-roofing-lake-norman-nc" className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="font-bold text-primary mb-1">Luxury Roofing Lake Norman NC</h3>
                <p className="text-gray text-sm">High-end roofing for Lake Norman estate homes.</p>
              </Link>
              <Link href="/lake-norman-waterfront-roofing" className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="font-bold text-primary mb-1">Lake Norman Waterfront Roofing</h3>
                <p className="text-gray text-sm">Specialized roofing for lakefront properties.</p>
              </Link>
              <Link href="/standing-seam-metal-roof-lake-norman-nc" className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="font-bold text-primary mb-1">Standing Seam Metal Roof Lake Norman</h3>
                <p className="text-gray text-sm">Premium metal roofing for waterfront homes.</p>
              </Link>
              <Link href="/synthetic-slate-roofing-charlotte-nc" className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="font-bold text-primary mb-1">Synthetic Slate Roofing</h3>
                <p className="text-gray text-sm">Lightweight slate alternative — Class 4 impact rated.</p>
              </Link>
              <Link href="/roofers-lake-norman-nc" className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="font-bold text-primary mb-1">Roofers Lake Norman NC</h3>
                <p className="text-gray text-sm">Trusted roofing contractor across the Lake Norman region.</p>
              </Link>
              <Link href="/services/roof-replacement" className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="font-bold text-primary mb-1">Roof Replacement Services</h3>
                <p className="text-gray text-sm">Full roof replacement options across all materials.</p>
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
                Slate Roofing Lake Norman FAQs
              </h2>
              <p className="text-gray text-lg">
                Direct, citable answers to the most-asked questions about natural slate roofing on Lake Norman homes.
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
        slug="slate-roofing-lake-norman-nc"
        count={4}
        title="Recent Roofing Projects in the Lake Norman Area"
        subtitle="Browse completed roofing projects from the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/slate-roofing-lake-norman-nc`}
      />

      <CityGeoSection
        city="Cornelius"
        state="NC"
        citySlug="cornelius-nc"
        service="Natural Slate Roofing"
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
        title="Ready for a 100-Year Slate Roof?"
        subtitle="Get a free estimate from Lake Norman's natural slate roofing specialists. We'll evaluate your home's structure, walk you through Buckingham, Vermont, and North Country slate options, and deliver an installation that will outlast every other roof on your street."
      />
    </>
  );
}
