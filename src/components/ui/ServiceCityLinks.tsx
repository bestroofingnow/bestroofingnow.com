'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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

// Service-city page mappings
const getServiceLinks = (citySlug: string, cityName: string): ServiceLink[] => {
  const baseSlug = citySlug.replace('-nc', '').replace('-sc', '');
  const state = citySlug.includes('-sc') ? 'SC' : 'NC';

  return [
    {
      title: `Roofing ${cityName}`,
      href: `/roofing-${baseSlug}-${state.toLowerCase()}`,
      description: 'Complete roofing services',
    },
    {
      title: `Roofers ${cityName}`,
      href: `/roofers-${baseSlug}-${state.toLowerCase()}`,
      description: 'Local trusted roofers',
    },
    {
      title: `Roof Repair ${cityName}`,
      href: `/roof-repair-${baseSlug}-${state.toLowerCase()}`,
      description: 'Fast, reliable roof repairs',
    },
    {
      title: `Roof Replacement ${cityName}`,
      href: `/roof-replacement-${baseSlug}-${state.toLowerCase()}`,
      description: 'Complete roof replacement',
    },
    {
      title: `Roof Inspection ${cityName}`,
      href: `/roof-inspection-${baseSlug}-${state.toLowerCase()}`,
      description: 'Free comprehensive inspections',
    },
    {
      title: `Emergency Roof Repair ${cityName}`,
      href: `/emergency-roof-repair-${baseSlug}-${state.toLowerCase()}`,
      description: '24/7 emergency service',
    },
    {
      title: `Storm Damage Repair ${cityName}`,
      href: `/storm-damage-roof-repair-${baseSlug}-${state.toLowerCase()}`,
      description: 'Insurance claim assistance',
    },
    {
      title: `Commercial Roofing ${cityName}`,
      href: `/commercial-roofing-${baseSlug}-${state.toLowerCase()}`,
      description: 'TPO, EPDM & flat roofs',
    },
    {
      title: `Metal Roofing ${cityName}`,
      href: `/metal-roofing-${baseSlug}-${state.toLowerCase()}`,
      description: 'Standing seam & metal panels',
    },
    {
      title: `Gutter Installation ${cityName}`,
      href: `/gutter-installation-${baseSlug}-${state.toLowerCase()}`,
      description: 'Seamless gutter systems',
    },
  ];
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
