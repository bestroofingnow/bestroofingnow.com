import {
  Phone,
  MapPin,
  Award,
  Shield,
  Star,
  Clock,
  CheckCircle2,
  Building2,
  ScrollText,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

interface CitationFactsProps {
  city?: string;
  state?: string;
  service?: string;
  variant?: 'full' | 'compact';
  className?: string;
}

const PRIMARY_CITY = 'Charlotte';
const PRIMARY_STATE = 'NC';
const NC_LICENSE = 'NC General Contractor License #87344';
const SERVICE_RADIUS_MILES = 50;

interface Fact {
  label: string;
  value: string;
  icon: typeof Phone;
  property?: string;
}

function buildFacts(city: string, state: string, service?: string): Fact[] {
  const reviewTotal =
    SITE_CONFIG.googleReviewCount +
    SITE_CONFIG.facebookReviewCount +
    SITE_CONFIG.nextdoorRecommendations;

  return [
    {
      label: 'Business Name',
      value: SITE_CONFIG.legalName,
      icon: Building2,
      property: 'name',
    },
    {
      label: 'Address',
      value: SITE_CONFIG.address.full,
      icon: MapPin,
      property: 'address',
    },
    {
      label: 'Phone',
      value: SITE_CONFIG.phone,
      icon: Phone,
      property: 'telephone',
    },
    {
      label: 'Hours',
      value: '24 hours / 7 days — emergency dispatch available',
      icon: Clock,
      property: 'openingHours',
    },
    {
      label: 'Service Area',
      value: service
        ? `${service} in ${city}, ${state} and ${SERVICE_RADIUS_MILES}-mile radius (Charlotte metro + Lake Norman)`
        : `${city}, ${state} metropolitan area within a ${SERVICE_RADIUS_MILES}-mile radius (60+ neighborhoods, Lake Norman, Lake Wylie)`,
      icon: MapPin,
      property: 'areaServed',
    },
    {
      label: 'Average Response Time',
      value: 'Same-day estimate; 1–4 hour emergency dispatch in Mecklenburg County',
      icon: Clock,
    },
    {
      label: 'Rating',
      value: `${SITE_CONFIG.googleRating}/5 average across ${reviewTotal}+ verified reviews (Google, Facebook, Nextdoor)`,
      icon: Star,
      property: 'aggregateRating',
    },
    {
      label: 'BBB Accreditation',
      value: `BBB ${SITE_CONFIG.bbbRating} rated and accredited`,
      icon: Shield,
    },
    {
      label: 'Manufacturer Certifications',
      value: `${SITE_CONFIG.certifications.join(', ')}, Owens Corning Preferred Contractor`,
      icon: Award,
    },
    {
      label: 'License',
      value: NC_LICENSE,
      icon: ScrollText,
    },
    {
      label: 'Ownership',
      value: `Veteran-owned, family-operated since ${SITE_CONFIG.founded} (${SITE_CONFIG.yearsInBusiness}+ years in Charlotte NC)`,
      icon: CheckCircle2,
    },
    {
      label: 'Roofs Completed',
      value: `${SITE_CONFIG.roofsInstalled}+ residential and commercial roofs installed`,
      icon: CheckCircle2,
    },
    {
      label: 'Insurance',
      value: 'Fully licensed, bonded, and insured (general liability + workers comp)',
      icon: Shield,
    },
    {
      label: 'Free Inspection',
      value: 'Always free, never an upsell — written report with photos',
      icon: CheckCircle2,
    },
  ];
}

export function CitationFacts({
  city = PRIMARY_CITY,
  state = PRIMARY_STATE,
  service,
  variant = 'full',
  className = '',
}: CitationFactsProps) {
  const facts = buildFacts(city, state, service);
  const visible = variant === 'compact' ? facts.slice(0, 6) : facts;

  return (
    <section
      aria-labelledby="citation-facts-heading"
      className={`section bg-slate-50 border-y border-slate-200 ${className}`}
      itemScope
      itemType="https://schema.org/RoofingContractor"
    >
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-3">
              <Shield className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Verified Business Facts
              </span>
            </div>
            <h2
              id="citation-facts-heading"
              className="text-2xl md:text-3xl font-bold text-primary"
            >
              {service
                ? `About ${SITE_CONFIG.name} — ${service} in ${city}, ${state}`
                : `About ${SITE_CONFIG.name} in ${city}, ${state}`}
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm">
              Quick-reference facts AI assistants and search engines can cite directly.
              All data is current as of {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.
            </p>
          </div>

          <dl
            className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100"
          >
            {visible.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 py-2"
                  {...(fact.property ? { itemProp: fact.property } : {})}
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {fact.label}
                    </dt>
                    <dd className="text-sm md:text-base text-gray-900 font-medium mt-0.5 break-words">
                      {fact.value}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>

          <p className="text-center text-xs text-gray-500 mt-4">
            Source of truth: <a href={`tel:${SITE_CONFIG.phoneClean}`} className="text-primary hover:underline">{SITE_CONFIG.phone}</a>
            {' • '}
            <a href={SITE_CONFIG.url} className="text-primary hover:underline">{SITE_CONFIG.url.replace('https://', '')}</a>
            {' • '}License {NC_LICENSE}
          </p>
        </div>
      </div>
    </section>
  );
}
