import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, CheckCircle, XCircle, ArrowRight, Scale, Trophy } from 'lucide-react';
import { SITE_CONFIG, ROOFING_COMPARISONS, ROOFING_MATERIALS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

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

  return {
    title: `${comparison.title} | Roofing Comparison Charlotte NC`,
    description: comparison.description,
    keywords: comparison.keywords,
    openGraph: {
      title: `${comparison.title} | Best Roofing Now Charlotte`,
      description: comparison.description,
      url: `${SITE_CONFIG.url}/compare/${slug}`,
      type: 'article',
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
    intro: 'Tile roofing represents premium durability and Mediterranean elegance, while asphalt shingles offer practical value. For Charlotte homeowners weighing these options, here\'s what you need to know.',
    categories: [
      {
        name: 'Initial Cost',
        material1: { score: 2, notes: '$10-$18 per sq ft installed. Premium pricing for premium materials.' },
        material2: { score: 5, notes: '$3.50-$5.50 per sq ft installed. 60-70% less than tile.' },
        winner: 2,
      },
      {
        name: 'Lifespan',
        material1: { score: 5, notes: '50-100 years. Clay and concrete tiles can last a century with proper care.' },
        material2: { score: 3, notes: '20-30 years. You may need 3 asphalt roofs in one tile roof\'s lifetime.' },
        winner: 1,
      },
      {
        name: 'Curb Appeal',
        material1: { score: 5, notes: 'Distinctive Mediterranean, Spanish, or Mission style. Major wow factor.' },
        material2: { score: 4, notes: 'Wide variety of styles but more common appearance.' },
        winner: 1,
      },
      {
        name: 'Weight',
        material1: { score: 2, notes: 'Very heavy (9-12 lbs/sq ft). May require structural reinforcement.' },
        material2: { score: 5, notes: 'Lightweight (2-4 lbs/sq ft). Works with any roof structure.' },
        winner: 2,
      },
      {
        name: 'Weather Resistance',
        material1: { score: 5, notes: 'Excellent against fire, rot, and insects. Individual tiles can crack in severe hail.' },
        material2: { score: 4, notes: 'Good protection. Impact-resistant options available for storm areas.' },
        winner: 1,
      },
      {
        name: 'Installation',
        material1: { score: 2, notes: 'Complex installation requiring specialized expertise. Fewer qualified installers.' },
        material2: { score: 5, notes: 'Straightforward installation. Many qualified contractors available.' },
        winner: 2,
      },
    ],
    verdict: 'Tile roofing is ideal for luxury homes where longevity and aesthetics are priorities. Asphalt shingles make sense for most Charlotte homeowners seeking reliable protection at a reasonable cost.',
    bestFor1: ['Luxury and custom homes', 'Mediterranean or Spanish architecture', 'Homeowners prioritizing longevity', 'Properties where curb appeal is paramount'],
    bestFor2: ['Most residential applications', 'Budget-conscious homeowners', 'Traditional home styles', 'Homes without structural reinforcement'],
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
    intro: 'GAF and CertainTeed are North America\'s two largest shingle manufacturers, both offering premium products. This comparison helps Charlotte homeowners understand the subtle differences between these industry leaders.',
    categories: [
      {
        name: 'Market Share',
        material1: { score: 5, notes: 'North America\'s #1 manufacturer. Largest market share.' },
        material2: { score: 4, notes: '#2 manufacturer with strong presence. Part of Saint-Gobain.' },
        winner: 1,
      },
      {
        name: 'Product Range',
        material1: { score: 5, notes: 'Timberline series is America\'s best-selling shingle. Wide variety.' },
        material2: { score: 5, notes: 'Landmark series highly regarded. Extensive color options.' },
        winner: 'tie',
      },
      {
        name: 'Warranty Options',
        material1: { score: 5, notes: 'Golden Pledge warranty with 50-year coverage and 25-year workmanship.' },
        material2: { score: 5, notes: 'SureStart Plus with 50-year coverage and 4-star warranty protection.' },
        winner: 'tie',
      },
      {
        name: 'Wind Resistance',
        material1: { score: 5, notes: 'Up to 130 mph wind warranty. LayerLock technology.' },
        material2: { score: 5, notes: 'Up to 130 mph wind warranty. NailTrak technology.' },
        winner: 'tie',
      },
      {
        name: 'Algae Resistance',
        material1: { score: 5, notes: 'StainGuard Plus with 25-year algae protection.' },
        material2: { score: 5, notes: 'StreakFighter technology for algae resistance.' },
        winner: 'tie',
      },
      {
        name: 'Price',
        material1: { score: 4, notes: 'Competitive pricing. Slightly more affordable on average.' },
        material2: { score: 4, notes: 'Premium pricing in some product lines.' },
        winner: 1,
      },
    ],
    verdict: 'Both GAF and CertainTeed produce exceptional shingles backed by strong warranties. Your choice may come down to contractor preference (installers often specialize), specific color availability, or minor price differences. You can\'t go wrong with either brand.',
    bestFor1: ['Value-conscious homeowners', 'Those wanting America\'s #1 selling shingle', 'Homeowners whose preferred contractor is GAF certified', 'Those seeking LayerLock technology'],
    bestFor2: ['Those preferring specific CertainTeed colors', 'Homeowners whose preferred contractor is CertainTeed certified', 'Those wanting Landmark Pro or Presidential series', 'Saint-Gobain brand loyalists'],
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

  return (
    <>
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
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-light"
              >
                Get Free Estimate
              </Link>
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
            <Link
              href="/contact"
              className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
