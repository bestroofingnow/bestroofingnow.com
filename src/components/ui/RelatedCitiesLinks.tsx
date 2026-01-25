'use client';

import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

interface CityLink {
  name: string;
  slug: string;
}

// Define related cities for each area
const CITY_REGIONS: Record<string, CityLink[]> = {
  'charlotte': [
    { name: 'Huntersville', slug: 'huntersville-nc' },
    { name: 'Cornelius', slug: 'cornelius-nc' },
    { name: 'Davidson', slug: 'davidson-nc' },
    { name: 'Mooresville', slug: 'mooresville-nc' },
    { name: 'Matthews', slug: 'matthews-nc' },
    { name: 'Mint Hill', slug: 'mint-hill-nc' },
    { name: 'Concord', slug: 'concord-nc' },
    { name: 'Gastonia', slug: 'gastonia-nc' },
    { name: 'Indian Trail', slug: 'indian-trail-nc' },
  ],
  'lake-norman': [
    { name: 'Huntersville', slug: 'huntersville-nc' },
    { name: 'Cornelius', slug: 'cornelius-nc' },
    { name: 'Davidson', slug: 'davidson-nc' },
    { name: 'Mooresville', slug: 'mooresville-nc' },
    { name: 'Charlotte', slug: 'charlotte-nc' },
  ],
  'huntersville': [
    { name: 'Cornelius', slug: 'cornelius-nc' },
    { name: 'Davidson', slug: 'davidson-nc' },
    { name: 'Mooresville', slug: 'mooresville-nc' },
    { name: 'Charlotte', slug: 'charlotte-nc' },
    { name: 'Concord', slug: 'concord-nc' },
  ],
  'mooresville': [
    { name: 'Huntersville', slug: 'huntersville-nc' },
    { name: 'Cornelius', slug: 'cornelius-nc' },
    { name: 'Davidson', slug: 'davidson-nc' },
    { name: 'Charlotte', slug: 'charlotte-nc' },
    { name: 'Statesville', slug: 'statesville-nc' },
  ],
  'cornelius': [
    { name: 'Huntersville', slug: 'huntersville-nc' },
    { name: 'Davidson', slug: 'davidson-nc' },
    { name: 'Mooresville', slug: 'mooresville-nc' },
    { name: 'Charlotte', slug: 'charlotte-nc' },
  ],
  'davidson': [
    { name: 'Huntersville', slug: 'huntersville-nc' },
    { name: 'Cornelius', slug: 'cornelius-nc' },
    { name: 'Mooresville', slug: 'mooresville-nc' },
    { name: 'Charlotte', slug: 'charlotte-nc' },
  ],
  'concord': [
    { name: 'Charlotte', slug: 'charlotte-nc' },
    { name: 'Huntersville', slug: 'huntersville-nc' },
    { name: 'Kannapolis', slug: 'kannapolis-nc' },
    { name: 'Harrisburg', slug: 'harrisburg-nc' },
    { name: 'Matthews', slug: 'matthews-nc' },
  ],
  'gastonia': [
    { name: 'Charlotte', slug: 'charlotte-nc' },
    { name: 'Belmont', slug: 'belmont-nc' },
    { name: 'Mount Holly', slug: 'mount-holly-nc' },
    { name: 'Cramerton', slug: 'cramerton-nc' },
  ],
  'matthews': [
    { name: 'Charlotte', slug: 'charlotte-nc' },
    { name: 'Mint Hill', slug: 'mint-hill-nc' },
    { name: 'Indian Trail', slug: 'indian-trail-nc' },
    { name: 'Stallings', slug: 'stallings-nc' },
    { name: 'Weddington', slug: 'weddington-nc' },
  ],
  'indian-trail': [
    { name: 'Charlotte', slug: 'charlotte-nc' },
    { name: 'Matthews', slug: 'matthews-nc' },
    { name: 'Monroe', slug: 'monroe-nc' },
    { name: 'Stallings', slug: 'stallings-nc' },
    { name: 'Weddington', slug: 'weddington-nc' },
  ],
  'mint-hill': [
    { name: 'Charlotte', slug: 'charlotte-nc' },
    { name: 'Matthews', slug: 'matthews-nc' },
    { name: 'Indian Trail', slug: 'indian-trail-nc' },
    { name: 'Stallings', slug: 'stallings-nc' },
  ],
};

interface RelatedCitiesLinksProps {
  currentCity: string;
  service?: string;
  serviceSlug?: string;
  title?: string;
  variant?: 'section' | 'compact' | 'inline';
}

export function RelatedCitiesLinks({
  currentCity,
  service,
  serviceSlug,
  title,
  variant = 'section',
}: RelatedCitiesLinksProps) {
  const cityKey = currentCity.toLowerCase().replace(/\s+/g, '-');
  const relatedCities = CITY_REGIONS[cityKey] || CITY_REGIONS['charlotte'];

  // Filter out the current city
  const filteredCities = relatedCities.filter(
    city => city.slug.replace('-nc', '').replace('-sc', '') !== cityKey
  );

  const getHref = (city: CityLink) => {
    if (serviceSlug) {
      return `/${serviceSlug}-${city.slug}`;
    }
    return `/roofing-${city.slug}`;
  };

  if (variant === 'inline') {
    return (
      <div className="py-4">
        <p className="text-sm text-gray mb-3">
          {title || `Also serving nearby cities:`}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {filteredCities.map((city) => (
            <Link
              key={city.slug}
              href={getHref(city)}
              className="text-primary hover:text-accent text-sm font-medium inline-flex items-center gap-1"
            >
              {service ? `${service} ${city.name}` : `Roofing ${city.name}`}
              <ArrowRight className="w-3 h-3" />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-light rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-bold text-dark">
            {title || `${service || 'Roofing'} in Nearby Cities`}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {filteredCities.map((city) => (
            <Link
              key={city.slug}
              href={getHref(city)}
              className="inline-flex items-center gap-1 bg-white px-3 py-1.5 rounded-full text-sm text-gray hover:text-primary hover:shadow-md transition-all border border-gray-200"
            >
              {city.name}
              <ArrowRight className="w-3 h-3" />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Default section variant
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container">
        <div className="flex items-center justify-center gap-2 mb-6">
          <MapPin className="w-5 h-5 text-primary" />
          <h2 className="text-xl md:text-2xl font-bold text-primary">
            {title || `${service || 'Roofing Services'} in Nearby Cities`}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {filteredCities.map((city) => (
            <Link
              key={city.slug}
              href={getHref(city)}
              className="group inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              <span className="font-medium">
                {service ? `${service} ${city.name}` : `Roofing ${city.name}`}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export { CITY_REGIONS };
