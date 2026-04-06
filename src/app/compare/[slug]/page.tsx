import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, CheckCircle, XCircle, ArrowRight, Scale, Trophy } from 'lucide-react';
import { SITE_CONFIG, ROOFING_COMPARISONS, ROOFING_MATERIALS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { EstimateButton } from '@/components/estimate';
import { BreadcrumbSchema, WebPageSchema } from '@/components/seo/SchemaMarkup';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

interface ComparePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ROOFING_COMPARISONS.map((comparison) => ({
    slug: comparison.slug,
  }));
}

export async function generateMetadata({ params }: ComparePageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = ROOFING_COMPARISONS.find((c) => c.slug === slug);

  if (!comparison) {
    return { title: 'Comparison Not Found' };
  }

  const ogImage = 'https://www.bestroofingnow.com/images/logo.jpg';

  // Canonical overrides for comparison slugs that have dedicated static pages
  const comparisonCanonicals: Record<string, string> = {
    'gaf-vs-certainteed': '/gaf-vs-certainteed-shingles-charlotte-nc',
    'tile-vs-shingles': '/tile-roof-vs-shingles-charlotte-nc',
  };

  return {
    title: `${comparison.title}`,
  description: comparison.description,
  keywords: comparison.keywords,
  alternates: {
      canonical: comparisonCanonicals[slug]
        ? `${SITE_CONFIG.url}${comparisonCanonicals[slug]}`
        : `${SITE_CONFIG.url}/compare/${slug}`,
    },
  openGraph: {
      title: `${comparison.title} | Best Roofing Now Charlotte`,
  description: comparison.description,
  url: `${SITE_CONFIG.url}/compare/${slug}`,
  type: 'article',
  images: [
        {
          url: ogImage,
  width: 1200,
  height: 630,
  alt: `${comparison.title} - Best Roofing Now Charlotte NC`,
        },
      ],
    },
  twitter: {
      card: 'summary_large_image',
  title: `${comparison.title} | Best Roofing Now Charlotte`,
  description: comparison.description,
  images: [ogImage],
    },
  };
}

// Detailed comparison data for each slug
const comparisonDetails: Record<string, {
  winner?: string;
  intro: string;
  categories: {
    name: string;
    material1: { score: number; notes: string };
    material2: { score: number; notes: string };
    winner: 1 | 2 | 'tie';
  }[];
  verdict: string;
  bestFor1: string[];
  bestFor2: string[];
}> = {
  'metal-vs-shingles': {
    winner: 'Depends on your priorities',
  intro: 'Metal roofing and asphalt shingles represent two of the most popular roofing choices for Charlotte homeowners. While asphalt remains the affordable classic, metal roofing has surged in popularity due to its durability and energy efficiency. Here\'s how they compare.',
  categories: [
      {
        name: 'Initial Cost',
  material1: { score: 3, notes: '$7-$14 per sq ft installed. Higher upfront investment but better long-term value.' },
  material2: { score: 5, notes: '$3.50-$5.50 per sq ft installed. Most affordable option for immediate budget.' },
  winner: 2,
      },
      {
        name: 'Lifespan',
  material1: { score: 5, notes: '40-70 years with minimal maintenance. Many metal roofs come with 50-year warranties.' },
  material2: { score: 3, notes: '20-30 years. May need replacement 2-3 times during metal roof\'s lifespan.' },
  winner: 1,
      },
      {
        name: 'Energy Efficiency',
  material1: { score: 5, notes: 'Reflects solar heat, reducing cooling costs by 10-25%. Excellent for Charlotte summers.' },
  material2: { score: 3, notes: 'Absorbs more heat. Cool roof shingles available but less effective than metal.' },
  winner: 1,
      },
      {
        name: 'Durability',
  material1: { score: 5, notes: 'Withstands 140+ mph winds, hail, fire. Ideal for NC severe weather.' },
  material2: { score: 4, notes: 'Impact-resistant options available. Can suffer damage in severe hailstorms.' },
  winner: 1,
      },
      {
        name: 'Appearance Options',
  material1: { score: 4, notes: 'Many colors and styles including standing seam, metal shingles, and tile profiles.' },
  material2: { score: 5, notes: 'Widest variety of colors, textures, and styles. Matches any home design.' },
  winner: 2,
      },
      {
        name: 'Maintenance',
  material1: { score: 5, notes: 'Virtually maintenance-free. Occasional inspections recommended.' },
  material2: { score: 3, notes: 'Requires periodic inspections, moss removal, and potential repairs.' },
  winner: 1,
      },
    ],
  verdict: 'For Charlotte homeowners planning to stay in their home long-term, metal roofing offers superior value through longevity and energy savings. However, asphalt shingles remain excellent for budget-conscious buyers or those planning to sell within 10-15 years.',
  bestFor1: ['Long-term homeowners (10+ years)', 'Energy-conscious households', 'Homes in storm-prone areas', 'Those seeking minimal maintenance'],
  bestFor2: ['Budget-conscious buyers', 'Homes being prepared for sale', 'Traditional architectural styles', 'Those wanting maximum style options'],
  },
  'tile-vs-shingles': {
    winner: 'Tile for luxury, Shingles for value',
  intro: 'Tile roofing and asphalt shingles sit at opposite ends of the roofing spectrum. Tile offers unmatched longevity of 50 to 75 years and Mediterranean elegance at $15 to $30 per square foot, while asphalt shingles deliver reliable 25- to 30-year protection at just $4.50 to $7 per square foot. For Charlotte homeowners choosing between these two materials, the right answer depends on your budget, your home\'s structural capacity, and how long you plan to stay. Here is a detailed head-to-head breakdown based on real Charlotte-area pricing and conditions.',
  categories: [
      {
        name: 'Initial Cost',
  material1: { score: 2, notes: '$15-$30 per sq ft installed in Charlotte. Clay tile runs $15-$25/sqft; concrete tile $10-$18/sqft. A 2,000 sqft roof costs $30,000-$60,000. Premium pricing but a once-in-a-lifetime investment.' },
  material2: { score: 5, notes: '$4.50-$7 per sq ft installed in Charlotte. Architectural shingles average $5-$7/sqft. A 2,000 sqft roof costs $9,000-$14,000. 60-75% less upfront than tile.' },
  winner: 2,
      },
      {
        name: 'Lifespan & Long-Term Value',
  material1: { score: 5, notes: '50-75 years typical, up to 100 years for premium clay. One tile roof outlasts 2-3 asphalt roofs. Cost per year of service: $0.40-$0.80/sqft, making tile cheaper long-term for homeowners staying 30+ years.' },
  material2: { score: 3, notes: '25-30 years for architectural shingles, 15-20 for 3-tab. You will need 2-3 replacements during one tile roof\'s lifespan. Cost per year: $0.18-$0.28/sqft — cheaper short-term but adds up over decades.' },
  winner: 1,
      },
      {
        name: 'Charlotte Climate Suitability',
  material1: { score: 4, notes: 'Excellent heat resistance for Charlotte\'s 90°F+ summers. Natural thermal mass keeps attics cooler. Handles heavy rain well but individual tiles can crack in severe hail events, which Charlotte averages 2-4 per year. Freeze-thaw cycles (Charlotte gets 40+ frost days) can stress concrete tiles over time.' },
  material2: { score: 5, notes: 'Purpose-built for temperate climates like Charlotte. Impact-resistant Class 4 options handle hail well. Flexible enough to expand and contract through Charlotte\'s temperature swings (20°F to 100°F). Performs reliably in 45+ annual thunderstorms and 48 inches of annual rainfall.' },
  winner: 2,
      },
      {
        name: 'Weight & Structural Requirements',
  material1: { score: 2, notes: 'Very heavy at 9-12 lbs/sqft (clay) or 7-10 lbs/sqft (concrete). Most Charlotte homes built after 1970 need structural reinforcement costing $2,000-$8,000 before tile installation. A structural engineer assessment ($300-$500) is required first.' },
  material2: { score: 5, notes: 'Lightweight at 2-4 lbs/sqft. Works with any standard roof framing. No structural upgrades needed. Can be installed over one existing layer in some cases, saving on tear-off costs ($1,000-$2,000).' },
  winner: 2,
      },
      {
        name: 'Maintenance',
  material1: { score: 4, notes: 'Low maintenance overall but not zero. Individual cracked tiles need replacement ($8-$15 per tile plus labor). Underlayment beneath tiles degrades every 20-30 years and requires costly access. Annual inspections recommended. Moss and algae growth in Charlotte\'s humid summers requires periodic cleaning.' },
  material2: { score: 3, notes: 'Requires periodic inspections and maintenance. Granule loss accelerates after year 15. Moss and algae common in Charlotte humidity — algae-resistant shingles recommended. Minor repairs are inexpensive ($200-$500) and any roofer can handle them.' },
  winner: 1,
      },
      {
        name: 'Curb Appeal & Resale Value',
  material1: { score: 5, notes: 'Distinctive Mediterranean, Spanish, or Mission style. Major wow factor that commands attention. Adds 5-10% to home value in Charlotte\'s luxury neighborhoods like Myers Park, Eastover, and SouthPark. Highly desirable for homes valued over $500,000.' },
  material2: { score: 4, notes: 'Wide variety of colors and profiles (architectural, designer). Familiar and attractive but common appearance. Adds 3-5% to home value. Preferred by most Charlotte buyers because it signals lower future maintenance costs.' },
  winner: 1,
      },
      {
        name: 'Weather & Storm Resistance',
  material1: { score: 4, notes: 'Class A fire rating. Excellent resistance to rot, insects, and UV degradation. Wind resistant to 125+ mph when properly installed. Weakness: individual tiles can crack or shatter in severe hailstorms, and Charlotte sees regular spring and summer hail events.' },
  material2: { score: 4, notes: 'Impact-resistant Class 4 shingles handle hail well and can earn insurance discounts of 10-28% in NC. Wind ratings up to 130 mph for premium products. More flexible than tile in hail, absorbing impact rather than cracking. Charlotte storm performance: excellent.' },
  winner: 'tie',
      },
      {
        name: 'Installation Complexity',
  material1: { score: 2, notes: 'Complex, specialized installation taking 1-2 weeks. Requires experienced tile roofing crews — fewer available in Charlotte compared to shingle installers. Improper installation voids warranties and causes leaks. Factor in 30-50% higher labor costs.' },
  material2: { score: 5, notes: 'Straightforward 1-3 day installation for most Charlotte homes. Hundreds of qualified contractors in the Charlotte metro. Easier to quality-control and inspect. Lower labor costs and faster project completion.' },
  winner: 2,
      },
      {
        name: 'Energy Efficiency',
  material1: { score: 5, notes: 'Natural thermal mass and air gap between tile and deck provide excellent insulation. Can reduce cooling costs 10-20% in Charlotte summers. Clay and concrete tiles do not absorb heat the way dark shingles do. Ideal for south-facing roofs.' },
  material2: { score: 3, notes: 'Standard shingles absorb significant heat. Cool-roof reflective shingles available but cost 15-20% more. Radiant barrier underlayment can help. Without upgrades, expect higher cooling costs in Charlotte\'s June through September heat.' },
  winner: 1,
      },
      {
        name: 'Insurance Impact',
  material1: { score: 3, notes: 'Some insurers charge higher premiums due to expensive tile replacement costs after storms. Hail damage claims involve replacing individual tiles at $8-$15 each plus specialized labor. Check with your Charlotte insurer before committing.' },
  material2: { score: 5, notes: 'Impact-resistant (IR) shingles qualify for insurance discounts in North Carolina — typically 10-28% off premiums. Lower replacement costs mean lower claim payouts. Most Charlotte insurance companies prefer asphalt for straightforward claims processing.' },
  winner: 2,
      },
    ],
  verdict: 'For most Charlotte homeowners, asphalt shingles remain the practical winner — they cost 60-75% less upfront, perform excellently in our climate, and any local roofer can install and maintain them. Tile roofing is the right choice for luxury and custom homes valued over $500,000 where the homeowner plans to stay 20+ years and the structure can support the weight. If longevity and Mediterranean aesthetics are non-negotiable priorities and budget is not the primary concern, tile delivers exceptional lifetime value. For everyone else, high-quality architectural shingles from GAF or CertainTeed provide reliable 25-30 year protection at a fraction of the cost.',
  bestFor1: ['Luxury homes valued over $500,000', 'Mediterranean, Spanish, or Tuscan architecture', 'Homeowners staying 20+ years who want a forever roof', 'Properties where curb appeal and resale premium are paramount', 'Homes with confirmed structural capacity for heavy roofing', 'South-facing roofs where energy efficiency matters most'],
  bestFor2: ['Most Charlotte residential applications', 'Budget-conscious homeowners seeking reliable protection', 'Homes without structural reinforcement for heavy materials', 'Homeowners planning to sell within 10-15 years', 'Storm-prone areas where impact-resistant shingles earn insurance discounts', 'Rental properties and investment homes where ROI matters'],
  },
  'metal-vs-tile': {
    winner: 'Metal for performance, Tile for elegance',
  intro: 'When comparing premium roofing options, metal and tile both offer exceptional longevity. This guide helps Charlotte homeowners choose between these two excellent long-term investments.',
  categories: [
      {
        name: 'Initial Cost',
  material1: { score: 4, notes: '$7-$14 per sq ft. Premium but reasonable for the quality.' },
  material2: { score: 3, notes: '$10-$18 per sq ft. Higher entry point for quality tile.' },
  winner: 1,
      },
      {
        name: 'Lifespan',
  material1: { score: 4, notes: '40-70 years. Excellent longevity with proper installation.' },
  material2: { score: 5, notes: '50-100 years. Potential to last a century.' },
  winner: 2,
      },
      {
        name: 'Weight',
  material1: { score: 5, notes: 'Very lightweight (1-3 lbs/sq ft). No structural concerns.' },
  material2: { score: 2, notes: 'Heavy (9-12 lbs/sq ft). Often requires structural assessment.' },
  winner: 1,
      },
      {
        name: 'Energy Efficiency',
  material1: { score: 5, notes: 'Excellent heat reflection. Can reduce cooling costs 10-25%.' },
  material2: { score: 4, notes: 'Good thermal mass. Naturally insulating properties.' },
  winner: 1,
      },
      {
        name: 'Aesthetics',
  material1: { score: 4, notes: 'Modern, sleek appearance. Multiple styles available.' },
  material2: { score: 5, notes: 'Classic, timeless beauty. Unmatched Mediterranean elegance.' },
  winner: 2,
      },
      {
        name: 'Storm Performance',
  material1: { score: 5, notes: 'Exceptional wind resistance (140+ mph). Hail resistant.' },
  material2: { score: 3, notes: 'Good overall but individual tiles can crack from impact.' },
  winner: 1,
      },
    ],
  verdict: 'Both are excellent premium choices. Metal wins for practical performance, energy efficiency, and storm resistance. Tile wins for aesthetic elegance and maximum lifespan. Consider your home\'s architecture and your priorities.',
  bestFor1: ['Modern and contemporary homes', 'Energy-conscious homeowners', 'Storm-prone locations', 'Homeowners wanting low maintenance'],
  bestFor2: ['Mediterranean and Spanish architecture', 'Historic home restorations', 'Maximum longevity seekers', 'Those prioritizing classic elegance'],
  },
  'gaf-vs-certainteed': {
    winner: 'Both are excellent choices',
  intro: 'GAF and CertainTeed are North America\'s two largest shingle manufacturers, both offering premium products. GAF Timberline HDZ costs $90-$110 per square while CertainTeed Landmark costs $85-$105 per square. For a detailed price-per-product breakdown, see our comprehensive GAF vs CertainTeed price comparison.',
  categories: [
      {
        name: 'Price Per Square',
  material1: { score: 4, notes: 'Timberline HDZ: $90-$110/sq. HDZ RS: $110-$135/sq. Camelot II: $160-$210/sq.' },
  material2: { score: 5, notes: 'Landmark: $85-$105/sq. Landmark PRO: $105-$130/sq. Presidential: $170-$225/sq.' },
  winner: 2,
      },
      {
        name: 'Warranty Options',
  material1: { score: 5, notes: 'Golden Pledge: 50-yr non-prorated material + 25-yr workmanship backed by GAF.' },
  material2: { score: 5, notes: '5-Star SureStart PLUS: 50-yr limited material + workmanship via ShingleMaster.' },
  winner: 'tie',
      },
      {
        name: 'Wind Resistance',
  material1: { score: 5, notes: '130 MPH standard with LayerLock technology on all Timberline HDZ.' },
  material2: { score: 4, notes: '110 MPH base (Landmark). 130 MPH on Landmark PRO with NailTrak.' },
  winner: 1,
      },
      {
        name: 'Impact Resistance',
  material1: { score: 5, notes: 'Class 4 via ArmorShield II and Timberline HDZ RS (UL 2218 rated).' },
  material2: { score: 5, notes: 'Class 4 via Landmark PRO IR designation (UL 2218 rated).' },
  winner: 'tie',
      },
      {
        name: 'Algae Protection',
  material1: { score: 5, notes: 'StainGuard Plus: 25-year algae warranty. Copper-release technology.' },
  material2: { score: 4, notes: 'StreakFighter: 10-15 year algae protection depending on product line.' },
  winner: 1,
      },
      {
        name: 'Color Options',
  material1: { score: 5, notes: '20+ colors across Timberline lines. Widest HDZ color selection.' },
  material2: { score: 5, notes: '18+ colors. NaturalWood palette popular for Southern home styles.' },
  winner: 'tie',
      },
    ],
  verdict: 'Both GAF and CertainTeed produce exceptional shingles. GAF wins on wind resistance (130 MPH standard) and algae protection (25-yr). CertainTeed wins on entry-level pricing ($5-10/sq less). For a full pricing breakdown including installed costs for Charlotte homes, see our detailed GAF vs CertainTeed price comparison page.',
  bestFor1: ['Maximum wind protection (130 MPH standard)', 'Longest algae protection (25-yr StainGuard Plus)', 'Golden Pledge warranty with 25-yr workmanship', 'America\'s #1 selling shingle brand'],
  bestFor2: ['Budget-conscious projects ($5-10/sq savings)', 'NaturalWood color palette for Southern homes', 'Landmark PRO Class 4 impact resistance', 'Presidential Shake cedar-shake appearance'],
  },
};

// Get display names for comparison materials
function getMaterialName(materialSlug: string): string {
  // Check ROOFING_MATERIALS first
  const material = ROOFING_MATERIALS.find((m) => m.slug === materialSlug);
  if (material) return material.name;

  // Special cases for brand comparisons
  if (materialSlug === 'gaf') return 'GAF Shingles';
  if (materialSlug === 'certainteed') return 'CertainTeed Shingles';

  return materialSlug;
}

function getMaterialShortName(materialSlug: string): string {
  const material = ROOFING_MATERIALS.find((m) => m.slug === materialSlug);
  if (material) return material.shortName;

  if (materialSlug === 'gaf') return 'GAF';
  if (materialSlug === 'certainteed') return 'CertainTeed';

  return materialSlug;
}

function ScoreDisplay({ score }: { score: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className={`w-3 h-3 rounded-full ${
            star <= score ? 'bg-accent' : 'bg-gray-200'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default async function ComparePage({ params }: ComparePageProps) {
  const { slug } = await params;
  const comparison = ROOFING_COMPARISONS.find((c) => c.slug === slug);

  if (!comparison) {
    notFound();
  }

  const details = comparisonDetails[slug];
  const material1Name = getMaterialName(comparison.material1);
  const material2Name = getMaterialName(comparison.material2);
  const material1Short = getMaterialShortName(comparison.material1);
  const material2Short = getMaterialShortName(comparison.material2);

  const otherComparisons = ROOFING_COMPARISONS.filter((c) => c.slug !== slug);

  // Count wins
  let material1Wins = 0;
  let material2Wins = 0;
  details?.categories.forEach((cat) => {
    if (cat.winner === 1) material1Wins++;
    if (cat.winner === 2) material2Wins++;
  });

  const pageUrl = `${SITE_CONFIG.url}/compare/${slug}`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name={`${comparison.title} | Roofing Comparison Charlotte NC`}
        description={comparison.description}
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Compare', url: `${SITE_CONFIG.url}/compare` },
          { name: comparison.title, url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Compare', url: `${SITE_CONFIG.url}/compare` },
          { name: comparison.title, url: pageUrl },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Compare', href: '/compare' },
              { label: comparison.title },
            ]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-10 h-10" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {comparison.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {comparison.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Talk to an Expert
              </a>
              <EstimateButton
                variant="white"
                className="btn"
              >
                Get Free Instant Estimate
              </EstimateButton>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray leading-relaxed mb-8">
              {details?.intro}
            </p>

            {/* Quick Summary */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-light rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{material1Wins}</div>
                <div className="text-gray">{material1Short} Wins</div>
              </div>
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {details?.categories.filter((c) => c.winner === 'tie').length || 0}
                </div>
                <div className="text-gray">Ties</div>
              </div>
              <div className="bg-light rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{material2Wins}</div>
                <div className="text-gray">{material2Short} Wins</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Comparisons */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Head-to-Head Comparison
          </h2>

          <div className="max-w-5xl mx-auto space-y-6">
            {details?.categories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">{category.name}</h3>
                  <div className="flex items-center gap-2">
                    {category.winner === 1 && (
                      <>
                        <Trophy className="w-5 h-5 text-yellow-500" aria-hidden="true" />
                        <span className="text-sm font-semibold text-gray">{material1Short} wins</span>
                      </>
                    )}
                    {category.winner === 2 && (
                      <>
                        <Trophy className="w-5 h-5 text-yellow-500" aria-hidden="true" />
                        <span className="text-sm font-semibold text-gray">{material2Short} wins</span>
                      </>
                    )}
                    {category.winner === 'tie' && (
                      <span className="text-sm font-semibold text-gray">Tie</span>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className={`p-4 rounded-lg ${category.winner === 1 ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-primary">{material1Short}</span>
                      <ScoreDisplay score={category.material1.score} />
                    </div>
                    <p className="text-sm text-gray">{category.material1.notes}</p>
                  </div>

                  <div className={`p-4 rounded-lg ${category.winner === 2 ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-primary">{material2Short}</span>
                      <ScoreDisplay score={category.material2.score} />
                    </div>
                    <p className="text-sm text-gray">{category.material2.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Our Verdict
            </h2>
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-8 mb-12">
              <p className="text-lg text-dark leading-relaxed">{details?.verdict}</p>
              {slug === 'tile-vs-shingles' && (
                <Link
                  href="/tile-roof-vs-shingles-charlotte-nc"
                  className="inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:text-accent transition-colors"
                >
                  View Full Tile vs Shingles Comparison with Cost Tables and Climate Analysis
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              )}
              {slug === 'gaf-vs-certainteed' && (
                <Link
                  href="/gaf-vs-certainteed-shingles-charlotte-nc"
                  className="inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:text-accent transition-colors"
                >
                  View Full Price Comparison with Detailed Product Breakdown
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              )}
            </div>

            {/* Best For Lists */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Choose {material1Name} If:
                </h3>
                <ul className="space-y-3">
                  {details?.bestFor1.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-dark">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Choose {material2Name} If:
                </h3>
                <ul className="space-y-3">
                  {details?.bestFor2.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-dark">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Material Pages */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Learn More About These Materials
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {ROOFING_MATERIALS.filter((m) =>
              m.slug === comparison.material1 || m.slug === comparison.material2
            ).map((material) => (
              <Link
                key={material.slug}
                href={`/materials/${material.slug}`}
                className="card hover:shadow-xl transition group"
              >
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                  {material.name}
                </h3>
                <p className="text-gray text-sm mb-4">{material.description.slice(0, 100)}...</p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Comparisons */}
      {otherComparisons.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              More Comparisons
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherComparisons.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/compare/${comp.slug}`}
                  className="card hover:shadow-xl transition group"
                >
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                    {comp.title}
                  </h3>
                  <p className="text-gray text-sm mb-4">{comp.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Compare
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Gallery Strip */}
      <GeoProjectGalleryStrip pageType="other" city="Charlotte" slug={slug} />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roofing Materials"
      />

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Choose Your New Roof?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our roofing experts can help you decide between {material1Short} and {material2Short}
            based on your specific needs and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-accent hover:bg-light text-lg px-8"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <EstimateButton
              variant="accent"
              size="lg"
              className="px-8"
            >
              Get Free Instant Estimate
            </EstimateButton>
          </div>
        </div>
      </section>

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <DirectoryCitations pageType="default" maxLinks={3} variant="inline" title="Expert Advice From" />
          </div>
        </div>
      </section>
    </>
  );
}
