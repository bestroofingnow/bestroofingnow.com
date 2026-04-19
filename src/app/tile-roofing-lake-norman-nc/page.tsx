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
  Flame,
  Layers,
  Leaf,
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
  title: 'Tile Roofing Lake Norman NC',
  description:
    'Clay & concrete tile roofing for Lake Norman NC estate homes. Boral, Eagle, Ludowici. 50-100 year lifespan, 150 MPH wind. Free estimates from Best Roofing Now.',
  keywords: [
    'tile roofing lake norman nc',
    'clay tile roof lake norman',
    'concrete tile roof cornelius nc',
    'spanish tile roofing davidson nc',
    'mediterranean roof mooresville nc',
    'boral tile roof lake norman',
    'eagle tile roofing huntersville nc',
    'ludowici clay tile lake norman',
    'tile roof installer lake norman',
    'luxury tile roofing trump national charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tile-roofing-lake-norman-nc`,
  },
  openGraph: {
    title: 'Tile Roofing Lake Norman NC | Clay & Concrete | Best Roofing Now',
    description:
      'Lake Norman\'s clay and concrete tile roofing specialists. Boral/Westlake, Eagle, and Ludowici tile for estate homes in Cornelius, Davidson, and Mooresville.',
    url: `${SITE_CONFIG.url}/tile-roofing-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Tile roofing Lake Norman NC - clay and concrete tile installation',
      },
    ],
  },
};

const services = [
  {
    icon: Home,
    title: 'Clay Tile Installation',
    description:
      'Authentic Spanish, Mediterranean, and Italianate clay tile roofs for Lake Norman estates — Ludowici, Boral Saxony, and Eagle Capistrano profiles.',
    href: '/services/roof-replacement',
  },
  {
    icon: Layers,
    title: 'Concrete Tile Installation',
    description:
      'Boral/Westlake Cedarlite and Slatestyle plus Eagle Bel Air and Malibu concrete tile in flat, low, and high profiles for Lake Norman homes.',
    href: '/services/roof-replacement',
  },
  {
    icon: Hammer,
    title: 'Structural Framing Review',
    description:
      'In-house engineering review of your Lake Norman roof framing to confirm load capacity for 600-1,200 lb/sq tile before installation.',
    href: '/contact',
  },
  {
    icon: Wrench,
    title: 'Tile Roof Repair',
    description:
      'Cracked tile replacement, underlayment renewal, ridge re-bedding, and broken-tile matching for existing tile roofs across Lake Norman.',
    href: '/services/roof-repair',
  },
  {
    icon: Wind,
    title: 'Hurricane-Rated Attachment',
    description:
      'Eagle ELITE foam-set and screw-and-clip systems rated to 150+ MPH for Lake Norman waterfront and ridge-line tile installations.',
    href: '/services/storm-damage',
  },
  {
    icon: Shield,
    title: 'HOA & Estate Compliance',
    description:
      'Full HOA submittal packages for The Peninsula, Trump National, The Point, and River Run with manufacturer cut sheets and color samples.',
    href: '/contact',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Tile Roofing Specialists',
    description:
      'Trained on Eagle ELITE, Boral Pro, and Ludowici installation systems — not a shingle crew dabbling in tile.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Lake Norman homeowners across Cornelius, Davidson, and Mooresville.`,
  },
  {
    icon: Shield,
    title: 'Manufacturer Certified',
    description:
      'Certified installers for Boral / Westlake Royal Roofing and Eagle Roofing Products — warranty-backed installations.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description:
      'Fully licensed NC roofing contractor with comprehensive liability and workers\' compensation coverage for tile work.',
  },
  {
    icon: Users,
    title: 'Lake Norman Estate Experience',
    description:
      'Tile installations across Trump National Golf Club Charlotte, The Peninsula, The Point, Davidson Pointe, and Antiquity.',
  },
  {
    icon: Clock,
    title: '50-100+ Year Lifespan',
    description:
      'Properly installed clay and concrete tile roofs outlast the structure they protect — often the last roof your Lake Norman home will need.',
  },
];

const tileBenefits = [
  {
    title: 'Wind Performance',
    description:
      'Eagle ELITE foam-set and Boral hurricane clip systems are tested to 150+ MPH wind uplift — ideal for Lake Norman ridge and waterfront exposures.',
    stat: '150+ MPH',
    label: 'Wind Rating',
  },
  {
    title: 'Lifespan',
    description:
      'Clay tile from Ludowici can exceed 100 years; concrete tile from Boral and Eagle carries 50-year transferable warranties.',
    stat: '50-100+',
    label: 'Year Lifespan',
  },
  {
    title: 'Fire Rating',
    description:
      'Both clay and concrete tile carry a Class A fire rating — the highest available — protecting Lake Norman homes from ember and surface flame spread.',
    stat: 'Class A',
    label: 'Fire Rating',
  },
  {
    title: 'Energy Efficiency',
    description:
      'Tile thermal mass plus a ventilated batten installation cuts attic temperatures and trims summer cooling loads on Lake Norman homes.',
    stat: 'Up to 22%',
    label: 'Cooling Savings',
  },
];

const lakeNormanAreas = [
  { name: 'Cornelius', href: '/roofing-cornelius-nc' },
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Huntersville', href: '/roofing-huntersville-nc' },
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Sherrills Ford', href: '/roofing-contractor-charlotte-nc' },
  { name: 'The Peninsula', href: '/roofing-cornelius-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

const tileBrands = [
  {
    name: 'Boral / Westlake Royal Roofing',
    products: 'Saxony Slate, Cedarlite, Slatestyle, Madera 900, Villa 900',
    description:
      'Westlake (formerly Boral) makes the broadest line of concrete tile profiles available in Lake Norman. Slatestyle and Cedarlite mimic slate and cedar shake at concrete tile pricing — a popular pick for Davidson and Cornelius HOAs that restrict barrel profiles.',
  },
  {
    name: 'Eagle Roofing Products',
    products: 'Bel Air, Capistrano, Malibu, Ponderosa, Golden Eagle',
    description:
      'Eagle is the preferred concrete tile brand for Lake Norman estate work thanks to the Eagle ELITE installation system — a foam-set adhesive method rated to 150+ MPH and approved for high-velocity hurricane zones. Capistrano (Spanish S) and Malibu (Mediterranean) are the most-specified profiles around Trump National.',
  },
  {
    name: 'Ludowici',
    products: 'Spanish, French, Closed Shingle, Provincial, Williamsburg',
    description:
      'Ludowici clay tile is the historic standard — every tile is hand-finished in Ohio with a 75-year warranty, and many roofs from the 1880s are still in service. The premium choice for Lake Norman custom estate, Italianate, and Tuscan-revival projects.',
  },
  {
    name: 'Crown Tile',
    products: 'Mission, Spanish S, Flat Shake',
    description:
      'A lower-cost clay alternative made in the southwestern US. Crown is a strong value pick for Lake Norman renovations when matching an existing barrel-tile roof on a Mediterranean-style home.',
  },
];

const faqs = [
  {
    question: 'How much does a tile roof cost in Lake Norman NC?',
    answer:
      'Tile roofing at Lake Norman typically costs $7-$15 per square foot installed for concrete tile (Boral / Westlake, Eagle) and $10-$20 per square foot for clay tile (Ludowici, Crown). For a typical 2,500 sq ft Lake Norman home, expect $17,500-$50,000 total. Estate homes in Trump National Golf Club Charlotte and The Peninsula with steep pitches, complex hips and valleys, and clay tile commonly land at $40,000-$75,000+.',
  },
  {
    question: 'How long does a tile roof last on a Lake Norman home?',
    answer:
      'Concrete tile from Boral / Westlake or Eagle is engineered for a 50+ year service life and carries a 50-year transferable warranty. Clay tile from Ludowici routinely lasts 75-100+ years — many original 19th-century Ludowici roofs are still in service. The underlayment beneath the tile is the limiting factor on Lake Norman homes (typically 30-50 years) and can be replaced without removing the tile.',
  },
  {
    question: 'Clay vs concrete tile — which is better for Lake Norman?',
    answer:
      'Clay tile is lighter (600-900 lbs/sq), more color-stable (the color is fired into the surface glaze), and lasts longer (75-100+ years) but costs more. Concrete tile is heavier (900-1,200 lbs/sq), offers a wider profile range including flat slate-look (Boral Slatestyle, Eagle Bel Air), and costs less but the color sits in the body of the tile and can soften over decades. For most Lake Norman homes outside the high-end estate market, concrete tile from Eagle or Westlake delivers the best value.',
  },
  {
    question: 'Can my Lake Norman home support a tile roof without reinforcement?',
    answer:
      'Most Lake Norman homes built before 2010 with conventional 2x6 or 2x8 rafter framing were designed for a 4-6 lb/sq ft asphalt shingle load — tile adds 6-12 lbs/sq ft (concrete) or 4-8 lbs/sq ft (clay). A structural framing review is required before any Lake Norman tile installation. Our in-house engineering team inspects rafters, ridges, and load-bearing walls and provides a sealed letter; framing reinforcement, when needed, typically adds $2,500-$8,000 to the project.',
  },
  {
    question: 'Do Lake Norman HOAs allow tile roofs?',
    answer:
      'Most Lake Norman HOAs allow tile roofing with architectural review, but the rules vary by community. Trump National Golf Club Charlotte and the custom-villa neighborhoods around Mooresville generally welcome Spanish and Mediterranean barrel tile. The Peninsula, The Point, River Run, Davidson Pointe, and Antiquity typically require flat or low-profile concrete tile such as Boral Slatestyle, Eagle Bel Air, or Westlake Cedarlite that mimics slate or cedar shake. We prepare the full HOA submittal package — manufacturer cut sheets, color samples, and elevation renderings — before any work begins.',
  },
  {
    question: 'Are tile roofs good in Lake Norman storms and high winds?',
    answer:
      'Yes — properly installed tile is one of the most wind-resistant roof systems available. Eagle ELITE foam-set adhesive and Boral hurricane-clip systems are tested to 150+ MPH wind uplift. The mass of each tile (8-12 lbs apiece) plus mechanical attachment makes them far more resistant to lift than asphalt shingles during the straight-line wind events and severe thunderstorms common at Lake Norman. Tile is also Class A fire-rated, helpful for the wooded ridge lots in Denver and Sherrills Ford.',
  },
  {
    question: 'Which tile roofing brand is best for Lake Norman homes?',
    answer:
      'For concrete tile, Eagle Roofing Products (Capistrano, Malibu, Bel Air) is the most commonly specified brand for Lake Norman estate homes thanks to the Eagle ELITE installation system. Boral / Westlake Royal Roofing (Saxony, Cedarlite, Slatestyle) is the broadest profile line and is widely accepted by Lake Norman HOAs. For high-end clay tile on custom Cornelius or Davidson estates, Ludowici is the gold standard with a 75-year warranty.',
  },
  {
    question: 'Are tile roofs energy efficient in North Carolina?',
    answer:
      'Tile roofs are exceptionally energy-efficient in the North Carolina climate. The thermal mass of clay and concrete tile slows heat transfer, and a ventilated batten installation creates an air gap that lets heat escape before it reaches the attic. Lake Norman homeowners typically see 15-22% lower summer cooling costs versus a comparable asphalt shingle roof. Light-color concrete tile from Boral / Westlake further increases solar reflectance.',
  },
  {
    question: 'How long does tile roof installation take on a Lake Norman home?',
    answer:
      'A typical Lake Norman tile roof installation takes 7-14 days. Concrete tile installs faster than clay; complex estate roofs in Trump National or The Peninsula with multiple pitches, dormers, and valleys can take 3-4 weeks. We coordinate framing review, material delivery (tile is heavy and ships in 1.5-ton pallets), and crew scheduling so your project flows efficiently from tear-off to final ridge cap.',
  },
  {
    question: 'Tile vs slate vs synthetic slate — what\'s right for Lake Norman?',
    answer:
      'Natural slate is the highest-end roof (100+ years, $20-$40/sqft) but is heavier than tile and locked to a single look. Clay tile is similarly long-lived but offers the Mediterranean / Spanish / Italianate aesthetic that suits Lake Norman estate architecture. Concrete tile is the value sweet spot ($7-$15/sqft, 50+ years). Synthetic slate (DaVinci, Brava) is lighter and cheaper than real slate but has a shorter lifespan than clay or stone-coated concrete tile. For a deeper comparison, see our Lake Norman roofing guide.',
  },
];

export default function TileRoofingLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Tile Roofing Lake Norman NC', url: `${SITE_CONFIG.url}/tile-roofing-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/tile-roofing-lake-norman-nc`}
        pageName="Tile Roofing Lake Norman NC"
        city="Cornelius"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/tile-roofing-lake-norman-nc`} city={"Lake Norman"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero1}
            alt="Tile roofing Lake Norman NC - clay and concrete tile estate homes"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4 text-amber-300" />
              <span className="text-sm font-semibold text-amber-200">Clay &amp; Concrete Tile Roofing</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Tile Roofing <br className="hidden md:block" />
              <span className="text-amber-300">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Mediterranean, Spanish &amp; Slate-Look Tile for Lake Norman Estate Homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now installs clay and concrete tile roofs for Lake Norman&apos;s most
              distinctive homes. From Boral / Westlake Slatestyle in The Peninsula to Eagle Capistrano
              barrel tile at Trump National Golf Club Charlotte and Ludowici clay on custom Davidson
              estates — built to last 50-100+ years.
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
                className="border-white text-white hover:bg-white hover:text-stone-900"
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
                <Wind className="w-5 h-5 text-amber-300" />
                150+ MPH Wind Rated
              </span>
              <span className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-300" />
                Class A Fire Rated
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #1 — Why Estate Homes Choose Tile */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Lake Norman Estate Homes Are Choosing Tile Roofing
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Tile roofing is the long-term answer for Lake Norman&apos;s growing inventory of
                custom estate homes. While asphalt shingles dominate the broader Charlotte market,
                the Lake Norman luxury segment — particularly around Trump National Golf Club
                Charlotte in Mooresville, the gated villa enclaves of The Point, and the
                architecturally curated Davidson Pointe — is moving toward tile because it lasts
                three to five times longer than any shingle product, carries a Class A fire rating,
                and delivers the Mediterranean, Spanish Colonial, Tuscan, and Italianate aesthetics
                that increasingly define new Lake Norman builds.
              </p>
              <p>
                Tile is uniquely suited to the North Carolina climate. The hot, humid summers that
                shorten asphalt shingle lifespans on Lake Norman homes have almost no effect on
                fired clay or pressure-cured concrete. Tile resists algae and moss, sheds water
                through interlocking channels rather than relying on adhesive seal strips, and
                can be installed over a ventilated batten system that creates an air gap above the
                roof deck — cutting summer attic temperatures and trimming HVAC bills by 15-22%.
              </p>
              <p>
                Resale matters too. A tile roof is a generational asset on a Lake Norman estate
                home — the kind of feature that gets called out in the listing photo caption.
                Appraisers in Cornelius, Davidson, and Mooresville routinely value tile-roofed
                homes at a premium versus comparable shingle properties because the buyer is
                effectively buying a roof that will not need replacement on their watch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #2 — Clay vs Concrete Comparison */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Clay vs Concrete Tile: Which Works for Your Lake Norman Home?
            </h2>
            <p className="text-gray text-lg mb-10 text-center max-w-3xl mx-auto">
              Both clay and concrete tile last decades and look stunning on Lake Norman homes —
              but they differ in weight, cost, color stability, and the architectural styles
              they best suit. Here is a side-by-side comparison.
            </p>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="p-4 font-bold text-primary">Factor</th>
                      <th className="p-4 font-bold text-primary">Clay Tile</th>
                      <th className="p-4 font-bold text-primary">Concrete Tile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-dark">Cost installed</td>
                      <td className="p-4 text-gray">$10-$20 / sqft</td>
                      <td className="p-4 text-gray">$7-$15 / sqft</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-dark">Weight</td>
                      <td className="p-4 text-gray">600-900 lbs / square</td>
                      <td className="p-4 text-gray">900-1,200 lbs / square</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-dark">Lifespan</td>
                      <td className="p-4 text-gray">75-100+ years</td>
                      <td className="p-4 text-gray">50+ years</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-dark">Color method</td>
                      <td className="p-4 text-gray">Fired glaze surface (very fade-resistant)</td>
                      <td className="p-4 text-gray">Through-body color (gradual mellowing over decades)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-dark">Profile range</td>
                      <td className="p-4 text-gray">Spanish S, Mission barrel, French, flat shingle</td>
                      <td className="p-4 text-gray">Flat slate-look, low-profile, S, barrel, shake</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-dark">Best Lake Norman fit</td>
                      <td className="p-4 text-gray">Custom estates, Trump National villas, Mediterranean builds</td>
                      <td className="p-4 text-gray">The Peninsula, The Point, Davidson Pointe (HOA-friendly profiles)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-dark">Top brands</td>
                      <td className="p-4 text-gray">Ludowici, Crown Tile</td>
                      <td className="p-4 text-gray">Boral / Westlake Royal, Eagle Roofing Products</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #3 — Cost */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              How Much Does a Tile Roof Cost in Lake Norman?
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Tile roofing at Lake Norman runs <strong>$7-$15 per square foot installed for
                concrete tile</strong> and <strong>$10-$20 per square foot for clay tile</strong>.
                A typical 2,500 sq ft Lake Norman home lands between <strong>$17,500 and
                $50,000</strong>. Custom estates in Trump National Golf Club Charlotte, The
                Peninsula, and on the Cornelius waterfront with steep pitches, multiple dormers,
                and Ludowici clay tile commonly run <strong>$40,000-$75,000+</strong>.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-light rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-3 text-lg">Concrete tile pricing</h3>
                <ul className="space-y-2 text-gray">
                  <li><strong>2,000 sqft:</strong> $14,000 - $30,000</li>
                  <li><strong>2,500 sqft:</strong> $17,500 - $37,500</li>
                  <li><strong>3,500 sqft:</strong> $24,500 - $52,500</li>
                  <li><strong>5,000 sqft:</strong> $35,000 - $75,000</li>
                </ul>
                <p className="text-sm text-gray mt-3">
                  Typical Lake Norman brands: Boral / Westlake Cedarlite &amp; Slatestyle,
                  Eagle Bel Air, Malibu, Capistrano.
                </p>
              </div>
              <div className="bg-light rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-3 text-lg">Clay tile pricing</h3>
                <ul className="space-y-2 text-gray">
                  <li><strong>2,000 sqft:</strong> $20,000 - $40,000</li>
                  <li><strong>2,500 sqft:</strong> $25,000 - $50,000</li>
                  <li><strong>3,500 sqft:</strong> $35,000 - $70,000</li>
                  <li><strong>5,000 sqft:</strong> $50,000 - $100,000+</li>
                </ul>
                <p className="text-sm text-gray mt-3">
                  Typical Lake Norman brands: Ludowici (premium estate work),
                  Crown Tile (renovation matching).
                </p>
              </div>
            </div>
            <p className="text-gray mt-6 text-sm italic">
              Pricing also depends on roof pitch, valley count, framing reinforcement requirements,
              tear-off depth, and HOA-required color matching. Every Lake Norman estimate from
              Best Roofing Now is itemized line-by-line.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tile Roofing Performance for Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Why tile is the highest-performing roof system available for Lake Norman estate homes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tileBenefits.map((benefit) => (
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

      {/* H2 #4 — Top Brands */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Top Tile Roofing Brands for Lake Norman Homes
            </h2>
            <p className="text-gray text-lg mb-10 text-center max-w-3xl mx-auto">
              We install only manufacturer-certified tile systems on Lake Norman homes. These four
              brands cover 95% of what gets specified across Cornelius, Davidson, Mooresville,
              Huntersville, and Denver.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {tileBrands.map((brand) => (
                <div key={brand.name} className="bg-light rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-dark text-lg">{brand.name}</h3>
                  </div>
                  <p className="text-sm text-primary font-semibold mb-2">
                    Profiles: {brand.products}
                  </p>
                  <p className="text-gray text-sm">{brand.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tile Roofing Services for Lake Norman
            </h2>
            <p className="text-gray text-lg">
              End-to-end tile roof installation, repair, and HOA submittal services for Lake Norman
              estate and custom homes.
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

      {/* H2 #5 — Wind / Fire / Storm */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Wind, Fire, and Storm Performance of Tile in Lake Norman
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Lake Norman gets hit with severe thunderstorms, straight-line winds, and the
                occasional remnant tropical system pushed in from the Atlantic. Tile is engineered
                for exactly this environment. The Eagle ELITE foam-set adhesive system used on
                Eagle Capistrano and Malibu profiles is rated to <strong>150+ MPH</strong> and is
                approved for Florida high-velocity hurricane zones — well beyond what Lake Norman
                will ever see. Boral / Westlake hurricane clip and screw-and-clip attachments
                deliver equivalent uplift performance on Saxony, Slatestyle, and Cedarlite tile.
              </p>
              <p>
                Each individual tile weighs 8-12 pounds, and on a typical Lake Norman home that
                works out to 900-1,200 pounds per 100 sq ft of roof. That mass alone makes tile
                far more resistant to wind lift than asphalt shingles, which rely on a thin
                self-seal adhesive strip that degrades over time. When a storm rolls across Lake
                Norman, your tile roof simply doesn&apos;t move.
              </p>
              <p>
                Both clay and concrete tile carry a <strong>Class A fire rating</strong> — the
                highest available. That matters on the wooded ridge lots in Denver, Sherrills Ford,
                and the back coves of Mooresville where ember spread from a brush or
                outbuilding fire is a real risk. Tile won&apos;t ignite, melt, or contribute fuel.
              </p>
              <p>
                Hail performance is excellent on concrete tile and very good on clay. Most
                mid-grade Lake Norman hail events leave tile roofs untouched while neighboring
                shingle roofs get filed for insurance replacement. Severe hail (1.75&quot;+) can
                crack individual tiles — these are replaced one at a time without disturbing the
                surrounding field, a major advantage over shingle roofs that often require full
                replacement after a major hail claim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #6 — Architectural Styles */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Lake Norman Architectural Styles That Pair with Tile Roofing
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Tile is a style-defining roof material — the right profile makes a Lake Norman home,
                and the wrong one looks out of place. Here are the pairings we see work most often
                across the Lake Norman estate market.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-2 text-lg">Mediterranean &amp; Tuscan Revival</h3>
                <p className="text-gray text-sm mb-2">
                  <strong>Recommended:</strong> Eagle Capistrano (Spanish S), Ludowici Spanish,
                  Boral Madera 900 in terracotta, sienna, or blended earth tones.
                </p>
                <p className="text-gray text-sm">
                  Common across the custom-villa enclaves around Trump National Golf Club Charlotte
                  and the higher-elevation lots in Davidson and Cornelius.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-2 text-lg">Spanish Colonial</h3>
                <p className="text-gray text-sm mb-2">
                  <strong>Recommended:</strong> Crown Mission barrel, Ludowici Spanish, Eagle
                  Capistrano in classic terracotta.
                </p>
                <p className="text-gray text-sm">
                  A growing aesthetic in the southern Lake Norman waterfront market and on
                  custom Mooresville estates.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-2 text-lg">Italianate &amp; Villa</h3>
                <p className="text-gray text-sm mb-2">
                  <strong>Recommended:</strong> Ludowici French, Boral Villa 900, Eagle Malibu
                  in muted clay tones.
                </p>
                <p className="text-gray text-sm">
                  Featured prominently on the high-end ridge homes of The Point and the Lake
                  Norman waterfront.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-2 text-lg">Slate-Look Transitional</h3>
                <p className="text-gray text-sm mb-2">
                  <strong>Recommended:</strong> Boral / Westlake Slatestyle, Eagle Bel Air,
                  Westlake Cedarlite in slate gray or charcoal.
                </p>
                <p className="text-gray text-sm">
                  The HOA-safe choice for The Peninsula, River Run, Davidson Pointe, and
                  Antiquity where barrel profiles are restricted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #7 — Why Best Roofing Now */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Best Roofing Now for Tile Installation
              </h2>
              <p className="text-gray text-lg mb-8">
                Tile is unforgiving — a missed batten layer, an under-spec&apos;d framing assessment,
                or the wrong attachment system can shorten a 75-year roof to 15. Lake Norman
                homeowners choose Best Roofing Now because we treat tile as the specialty trade
                it is.
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
                alt="Tile roof installation at Lake Norman NC - clay and concrete tile - Best Roofing Now"
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

      {/* Sustainability Note */}
      <section className="bg-emerald-50 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-6">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Leaf className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">A Sustainable Roof Choice for Lake Norman</h2>
              <p className="text-gray">
                Both clay and concrete tile are made from natural, abundantly available
                materials — clay, sand, water, cement — and are 100% recyclable at end of life.
                Production has a meaningful carbon footprint, but a 75-100 year service life
                amortizes that footprint across multiple shingle replacement cycles. For
                environmentally conscious Lake Norman homeowners, tile is one of the lowest
                lifetime-impact roofing options available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-gradient-to-r from-amber-700 to-orange-800 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for a Tile Roof Built to Outlast the House?
              </h2>
              <p className="text-white/90">
                Get a free estimate and structural framing review for your Lake Norman home.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-800"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-orange-800 hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Lake Norman Roofing Pages */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Compare Tile to Other Lake Norman Premium Roof Systems
            </h2>
            <p className="text-gray text-lg mb-10 text-center max-w-3xl mx-auto">
              Tile is one of several long-lifespan roof systems we install across Lake Norman.
              Read our specialty pages to compare options for your home.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/slate-roofing-lake-norman-nc" className="block p-5 bg-light rounded-xl hover:shadow-md transition">
                <h3 className="font-bold text-dark mb-1">Slate Roofing Lake Norman</h3>
                <p className="text-sm text-gray">Natural stone slate, 100+ year lifespan.</p>
              </Link>
              <Link href="/synthetic-slate-roofing-lake-norman-nc" className="block p-5 bg-light rounded-xl hover:shadow-md transition">
                <h3 className="font-bold text-dark mb-1">Synthetic Slate Lake Norman</h3>
                <p className="text-sm text-gray">DaVinci, Brava — slate look at lower weight.</p>
              </Link>
              <Link href="/cedar-shake-roofing-lake-norman-nc" className="block p-5 bg-light rounded-xl hover:shadow-md transition">
                <h3 className="font-bold text-dark mb-1">Cedar Shake Lake Norman</h3>
                <p className="text-sm text-gray">Traditional cedar for craftsman estates.</p>
              </Link>
              <Link href="/standing-seam-metal-roof-lake-norman-nc" className="block p-5 bg-light rounded-xl hover:shadow-md transition">
                <h3 className="font-bold text-dark mb-1">Standing Seam Metal</h3>
                <p className="text-sm text-gray">Modern metal, 50-70 year lifespan.</p>
              </Link>
              <Link href="/luxury-roofing-lake-norman-nc" className="block p-5 bg-light rounded-xl hover:shadow-md transition">
                <h3 className="font-bold text-dark mb-1">Luxury Roofing Lake Norman</h3>
                <p className="text-sm text-gray">Premium roof systems for estate homes.</p>
              </Link>
              <Link href="/lake-norman-waterfront-roofing" className="block p-5 bg-light rounded-xl hover:shadow-md transition">
                <h3 className="font-bold text-dark mb-1">Waterfront Roofing</h3>
                <p className="text-sm text-gray">Roofing for Lake Norman lakefront homes.</p>
              </Link>
              <Link href="/roofers-lake-norman-nc" className="block p-5 bg-light rounded-xl hover:shadow-md transition">
                <h3 className="font-bold text-dark mb-1">Lake Norman Roofers</h3>
                <p className="text-sm text-gray">Top-rated roofers across Lake Norman.</p>
              </Link>
              <Link href="/services/roof-replacement" className="block p-5 bg-light rounded-xl hover:shadow-md transition">
                <h3 className="font-bold text-dark mb-1">Roof Replacement</h3>
                <p className="text-sm text-gray">Full roof replacement service overview.</p>
              </Link>
              <Link href="/contact" className="block p-5 bg-light rounded-xl hover:shadow-md transition">
                <h3 className="font-bold text-dark mb-1">Free Tile Estimate</h3>
                <p className="text-sm text-gray">Schedule your Lake Norman tile consultation.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #8 — Service Areas */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tile Roofing Across Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We install clay and concrete tile roofs throughout the Lake Norman region.
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
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Tile Roofing FAQs for Lake Norman Homeowners
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about clay and concrete tile roofing for Lake Norman homes.
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
        slug="tile-roofing-lake-norman-nc"
        count={4}
        title="Recent Tile & Estate Roofing Projects in Lake Norman"
        subtitle="Browse completed tile, slate, and luxury roofing projects from across the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/tile-roofing-lake-norman-nc`}
      />

      <CityGeoSection
        city="Cornelius"
        state="NC"
        citySlug="cornelius-nc"
        service="Tile Roofing"
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
        title="Ready for a Tile Roof That Will Outlast Your Mortgage?"
        subtitle="Get a free estimate and structural framing review from Lake Norman's clay and concrete tile specialists. We'll walk your roof, recommend the right Eagle, Boral / Westlake, or Ludowici profile for your home and HOA, and price the install line-by-line."
      />
    </>
  );
}
