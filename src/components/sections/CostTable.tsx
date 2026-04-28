import { DollarSign, TrendingUp } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export interface CostRow {
  label: string;
  unit?: string;
  low: number;
  high: number;
  notes?: string;
  /** Total project price for ~2,000 sqft (or representative size) — optional. */
  typicalProject?: { low: number; high: number };
}

interface CostTableProps {
  title: string;
  subtitle?: string;
  rows: CostRow[];
  /** Description used in JSON-LD AggregateOffer & visible footer. */
  description: string;
  /** Page URL for schema @id. */
  pageUrl: string;
  /** Service or product type — used as the JSON-LD itemOffered name. */
  itemName: string;
  city?: string;
  /** "as of" date string. Defaults to current month/year. */
  effectiveDate?: string;
  /** Footer note shown under the table. */
  footnote?: string;
}

const USD = (n: number): string =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

function buildOfferSchema(props: CostTableProps): string {
  const { rows, description, pageUrl, itemName } = props;
  const lows = rows.map((r) => r.low);
  const highs = rows.map((r) => r.high);
  const lowPrice = Math.min(...lows);
  const highPrice = Math.max(...highs);

  const offers = rows.map((row) => ({
    '@type': 'Offer',
    name: row.label,
    description: row.notes ?? `${row.label} pricing in ${props.city ?? 'Charlotte NC'}`,
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: row.low,
      maxPrice: row.high,
      priceCurrency: 'USD',
      unitText: row.unit ?? 'per project',
    },
    seller: {
      '@type': 'RoofingContractor',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.legalName,
      telephone: SITE_CONFIG.phone,
      url: SITE_CONFIG.url,
    },
    areaServed: {
      '@type': 'City',
      name: `${props.city ?? 'Charlotte'}, NC`,
    },
    availability: 'https://schema.org/InStock',
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AggregateOffer',
    '@id': `${pageUrl}#aggregateoffer`,
    name: props.title,
    description,
    priceCurrency: 'USD',
    lowPrice,
    highPrice,
    offerCount: rows.length,
    offers,
    itemOffered: {
      '@type': 'Service',
      name: itemName,
      provider: {
        '@type': 'RoofingContractor',
        '@id': `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.legalName,
        telephone: SITE_CONFIG.phone,
        url: SITE_CONFIG.url,
      },
      areaServed: props.city ?? 'Charlotte, NC',
    },
  };

  return JSON.stringify(schema);
}

export function CostTable(props: CostTableProps) {
  const {
    title,
    subtitle,
    rows,
    city,
    effectiveDate,
    footnote,
  } = props;

  const dateLabel =
    effectiveDate ??
    new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <section className="section bg-white" aria-labelledby="cost-table-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildOfferSchema(props) }}
      />
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-4 py-2 mb-3">
              <DollarSign className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                {city ? `${city} Pricing` : 'Pricing'} · {dateLabel}
              </span>
            </div>
            <h2
              id="cost-table-heading"
              className="text-2xl md:text-3xl font-bold text-primary"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <caption className="sr-only">{title}</caption>
              <thead className="bg-slate-50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 md:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-700"
                  >
                    Option / Type
                  </th>
                  <th
                    scope="col"
                    className="px-4 md:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-700"
                  >
                    Price Range
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-4 md:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-700"
                  >
                    Typical Project
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-4 md:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-700"
                  >
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {rows.map((row) => (
                  <tr key={row.label} className="hover:bg-slate-50/60">
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base font-semibold text-slate-900">
                      {row.label}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base text-slate-700 whitespace-nowrap">
                      <span className="font-medium text-primary">
                        {USD(row.low)} – {USD(row.high)}
                      </span>
                      {row.unit && (
                        <span className="ml-1 text-xs text-slate-500">{row.unit}</span>
                      )}
                      {row.notes && (
                        <p className="md:hidden mt-1 text-xs text-slate-600">{row.notes}</p>
                      )}
                    </td>
                    <td className="hidden md:table-cell px-4 md:px-6 py-4 text-sm text-slate-700 whitespace-nowrap">
                      {row.typicalProject
                        ? `${USD(row.typicalProject.low)} – ${USD(row.typicalProject.high)}`
                        : '—'}
                    </td>
                    <td className="hidden md:table-cell px-4 md:px-6 py-4 text-sm text-slate-600">
                      {row.notes ?? ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {footnote && (
            <p className="text-xs text-slate-500 mt-3 flex items-start gap-2">
              <TrendingUp className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>{footnote}</span>
            </p>
          )}

          <p className="text-xs text-slate-500 mt-2">
            Pricing reflects current {city ?? 'Charlotte NC'} market rates as of {dateLabel}.
            Final cost depends on roof size, pitch, accessibility, material selection, decking
            condition, and code-required upgrades. Free, no-obligation written estimates from{' '}
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="text-primary hover:underline">
              {SITE_CONFIG.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
