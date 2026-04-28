import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';

/**
 * Internal linking map for the 10 priority money pages from the
 * `reports/full-site-seo-ai-ranking-plan-2026-04-26.md` plan.
 *
 * Drop into long-tail city/service/neighborhood/blog pages to route
 * authority to the highest-revenue Charlotte commercial terms with
 * exact-match natural anchors.
 *
 * Anchors are written to match the actual top-ranking SERP intent;
 * do not edit casually — they are coordinated with title tags.
 */

interface LinkEntry {
  href: string;
  anchor: string;
  description: string;
  /** Tier for visual emphasis. 1 = primary money pages, 2 = cost pages, 3 = nearby cities. */
  tier: 1 | 2 | 3;
  /** Page categories so callers can scope which links to surface. */
  categories: ReadonlyArray<
    'core' | 'cost' | 'city' | 'commercial' | 'gutter' | 'metal'
  >;
}

const MONEY_PAGES: ReadonlyArray<LinkEntry> = [
  {
    href: '/roof-repair-charlotte-nc',
    anchor: 'Roof Repair Charlotte NC',
    description: 'Same-day repair, leak fixes, storm damage. From $200.',
    tier: 1,
    categories: ['core', 'city'],
  },
  {
    href: '/roof-replacement-charlotte-nc',
    anchor: 'Roof Replacement Charlotte NC',
    description: 'Full tear-off, GAF & Owens Corning certified. From $8,000.',
    tier: 1,
    categories: ['core', 'city'],
  },
  {
    href: '/commercial-roofing-charlotte-nc',
    anchor: 'Commercial Roofing Charlotte NC',
    description: 'TPO, EPDM, PVC, modified bitumen. NDL warranties.',
    tier: 1,
    categories: ['core', 'commercial'],
  },
  {
    href: '/gutter-repair-charlotte-nc',
    anchor: 'Gutter Repair Charlotte NC',
    description: 'Section repair, leak fixes, fascia damage. Same week.',
    tier: 1,
    categories: ['core', 'gutter'],
  },
  {
    href: '/gutter-installation-charlotte-nc',
    anchor: 'Gutter Installation Charlotte NC',
    description: '6-inch seamless aluminum, copper, downspouts. Free quote.',
    tier: 1,
    categories: ['core', 'gutter'],
  },
  {
    href: '/metal-roofing-charlotte-nc',
    anchor: 'Metal Roofing Charlotte NC',
    description: 'Standing seam, metal shingle, stone-coated. 50+ yr lifespan.',
    tier: 1,
    categories: ['core', 'metal'],
  },
  {
    href: '/roof-leak-repair-charlotte-nc',
    anchor: 'Roof Leak Repair Charlotte NC',
    description: '24/7 emergency leak repair. 1–4 hour response.',
    tier: 1,
    categories: ['core', 'city'],
  },
  {
    href: '/roofing-huntersville-nc',
    anchor: 'Roofing Huntersville NC',
    description: 'Lake Norman roofing & gutter services.',
    tier: 3,
    categories: ['city'],
  },
  {
    href: '/roofing-mooresville-nc',
    anchor: 'Roofing Mooresville NC',
    description: 'Iredell County roofing & storm response.',
    tier: 3,
    categories: ['city'],
  },
  {
    href: '/roofing-cornelius-nc',
    anchor: 'Roofing Cornelius NC',
    description: 'North Mecklenburg roofing & lake home repair.',
    tier: 3,
    categories: ['city'],
  },
  {
    href: '/roof-repair-lake-norman-nc',
    anchor: 'Roof Repair Lake Norman NC',
    description: 'Waterfront and lake-area roof repair specialists.',
    tier: 3,
    categories: ['city'],
  },
  {
    href: '/metal-roof-cost',
    anchor: 'Metal Roof Cost (2026)',
    description: 'Per-sqft pricing by type, house size, ROI.',
    tier: 2,
    categories: ['cost', 'metal'],
  },
  {
    href: '/gutter-guard-cost',
    anchor: 'Gutter Guard Cost (2026)',
    description: 'LeafFilter vs MasterShield vs Gutter Helmet pricing.',
    tier: 2,
    categories: ['cost', 'gutter'],
  },
  {
    href: '/roof-replacement-cost-charlotte-nc',
    anchor: 'Roof Replacement Cost Charlotte NC',
    description: '2026 Charlotte-area pricing by material & home size.',
    tier: 2,
    categories: ['cost', 'core'],
  },
  {
    href: '/roof-repair-cost-charlotte-nc',
    anchor: 'Roof Repair Cost Charlotte NC',
    description: 'Repair pricing by problem type, insurance guidance.',
    tier: 2,
    categories: ['cost', 'core'],
  },
];

interface MoneyPagesLinkBlockProps {
  /** Don't link back to the page rendering this block. */
  excludeHrefs?: ReadonlyArray<string>;
  /** Limit to N links (default: all). */
  maxLinks?: number;
  /** Filter to specific categories. Default: all. */
  categories?: ReadonlyArray<LinkEntry['categories'][number]>;
  /** Section title. */
  title?: string;
  /** Section subtitle. */
  subtitle?: string;
  className?: string;
}

export function MoneyPagesLinkBlock({
  excludeHrefs = [],
  maxLinks,
  categories,
  title = 'Related Charlotte NC Roofing Services',
  subtitle = 'Browse our most-requested Charlotte roofing services and 2026 cost guides.',
  className = '',
}: MoneyPagesLinkBlockProps) {
  let pages = MONEY_PAGES.filter(
    (p) => !excludeHrefs.some((excluded) => p.href === excluded)
  );

  if (categories && categories.length > 0) {
    pages = pages.filter((p) =>
      p.categories.some((c) => categories.includes(c))
    );
  }

  // Always lead with tier 1 + 2 (commercial intent), then tier 3 cities.
  pages = [...pages].sort((a, b) => a.tier - b.tier);

  if (maxLinks && maxLinks > 0) {
    pages = pages.slice(0, maxLinks);
  }

  if (pages.length === 0) return null;

  return (
    <section
      className={`section bg-white ${className}`}
      aria-labelledby="money-pages-heading"
    >
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-3">
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Explore Our Charlotte Services
              </span>
            </div>
            <h2
              id="money-pages-heading"
              className="text-2xl md:text-3xl font-bold text-primary"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0">
            {pages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="group block bg-slate-50 hover:bg-primary hover:text-white rounded-xl p-4 border border-slate-200 hover:border-primary transition-all h-full"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-primary group-hover:text-white text-sm md:text-base">
                      {page.anchor}
                    </span>
                    <ArrowRight
                      className="w-4 h-4 text-primary group-hover:text-white flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 group-hover:text-white/90 mt-1">
                    {page.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
