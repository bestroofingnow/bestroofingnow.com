'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { hasServiceCityPage, type ServiceSlug } from '@/lib/service-city-pages';

interface ServiceLink {
  title: string;
  href: string;
  description?: string;
}

interface ServiceCityLinksProps {
  city: string;
  citySlug: string;
  title?: string;
  subtitle?: string;
  variant?: 'grid' | 'inline' | 'compact';
}

// Templates for all 10 service-city page patterns.
// `getServiceLinks` filters these against the SERVICE_CITY_PAGES registry so we
// never emit a link to a page that hasn't been built — that was the root cause
// of the 563 4XX errors flagged by Ahrefs Site Audit on 2026-05-11.
interface ServiceTemplate {
  service: ServiceSlug;
  title: (city: string) => string;
  description: string;
}

const SERVICE_TEMPLATES: ServiceTemplate[] = [
  { service: 'roofing',                  title: (c) => `Roofing ${c}`,                  description: 'Complete roofing services' },
  { service: 'roofers',                  title: (c) => `Roofers ${c}`,                  description: 'Local trusted roofers' },
  { service: 'roof-repair',              title: (c) => `Roof Repair ${c}`,              description: 'Fast, reliable roof repairs' },
  { service: 'roof-replacement',         title: (c) => `Roof Replacement ${c}`,         description: 'Complete roof replacement' },
  { service: 'roof-inspection',          title: (c) => `Roof Inspection ${c}`,          description: 'Free comprehensive inspections' },
  { service: 'emergency-roof-repair',    title: (c) => `Emergency Roof Repair ${c}`,    description: '24/7 emergency service' },
  { service: 'storm-damage-roof-repair', title: (c) => `Storm Damage Repair ${c}`,      description: 'Insurance claim assistance' },
  { service: 'commercial-roofing',       title: (c) => `Commercial Roofing ${c}`,       description: 'TPO, EPDM & flat roofs' },
  { service: 'metal-roofing',            title: (c) => `Metal Roofing ${c}`,            description: 'Standing seam & metal panels' },
  { service: 'gutter-installation',      title: (c) => `Gutter Installation ${c}`,      description: 'Seamless gutter systems' },
];

const getServiceLinks = (citySlug: string, cityName: string): ServiceLink[] => {
  return SERVICE_TEMPLATES
    .filter((t) => hasServiceCityPage(t.service, citySlug))
    .map((t) => ({
      title: t.title(cityName),
      href: `/${t.service}-${citySlug}`,
      description: t.description,
    }));
};

export function ServiceCityLinks({
  city,
  citySlug,
  title,
  subtitle,
  variant = 'grid',
}: ServiceCityLinksProps) {
  const services = getServiceLinks(citySlug, city);

  if (variant === 'compact') {
    return (
      <div className="bg-light rounded-xl p-6">
        <h3 className="text-lg font-bold text-dark mb-4">
          {title || `Our Services in ${city}`}
        </h3>
        <div className="flex flex-wrap gap-2">
          {services.slice(0, 6).map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="inline-flex items-center gap-1 bg-white px-3 py-1.5 rounded-full text-sm text-gray hover:text-primary hover:shadow-md transition-all border border-gray-200"
            >
              {service.title}
              <ArrowRight className="w-3 h-3" />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="py-4">
        <p className="text-sm text-gray mb-3">
          {title || `Looking for specific roofing services in ${city}?`}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="text-primary hover:text-accent text-sm font-medium inline-flex items-center gap-1"
            >
              {service.title}
              <ArrowRight className="w-3 h-3" />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Default grid variant
  return (
    <section className="py-12 bg-light">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            {title || `Roofing Services in ${city}`}
          </h2>
          {subtitle && <p className="text-gray">{subtitle}</p>}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group bg-white rounded-lg p-4 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
            >
              <h3 className="font-semibold text-dark group-hover:text-primary transition-colors mb-1">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-sm text-gray mb-2">{service.description}</p>
              )}
              <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                Learn More
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Export for use in generating sitemap entries
export { getServiceLinks };
