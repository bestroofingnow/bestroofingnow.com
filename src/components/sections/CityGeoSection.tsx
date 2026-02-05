'use client';

import { MapPin, ExternalLink, Navigation } from 'lucide-react';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { getCityGeoData, getGoogleMapsEmbedUrl, getDirectionsUrl } from '@/lib/city-geo-data';
import { LAKE_NORMAN_LOCATIONS } from '@/lib/directory-links';

interface CityGeoSectionProps {
  city: string;
  state: string;
  citySlug: string;
  service?: string;
}

function getDirectoryPageType(citySlug: string): string {
  if (citySlug === 'charlotte-nc') return 'location-charlotte';
  const isLakeNorman = LAKE_NORMAN_LOCATIONS.some(ln =>
    citySlug.toLowerCase().includes(ln.replace('-nc', '').replace('-', ' ')) ||
    citySlug === ln
  );
  if (isLakeNorman) return 'location-lake-norman';
  return 'location';
}

export function CityGeoSection({ city, state, citySlug, service }: CityGeoSectionProps) {
  const geoData = getCityGeoData(citySlug);

  if (!geoData) return null;

  const embedUrl = getGoogleMapsEmbedUrl(geoData);
  const directionsUrl = getDirectionsUrl(geoData);
  const pageType = getDirectoryPageType(citySlug);
  const heading = service
    ? `${service} in ${city}, ${state}`
    : `Serving ${city}, ${state}`;

  return (
    <section className="py-12 bg-light">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              {heading}
            </h2>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-xl overflow-hidden shadow-md mb-6">
            <iframe
              src={embedUrl}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${city}, ${state} - Best Roofing Now service area`}
              className="w-full"
            />
          </div>

          {/* Authority Links */}
          <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
            <a
              href={geoData.wikipediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:text-accent transition-colors font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              About {city}, {state}
            </a>
            <span className="text-gray-300" aria-hidden="true">|</span>
            <a
              href={geoData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:text-accent transition-colors font-medium"
            >
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              View {city} on Google Maps
            </a>
            <span className="text-gray-300" aria-hidden="true">|</span>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:text-accent transition-colors font-medium"
            >
              <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
              Get Directions
            </a>
          </div>

          {/* Directory Citations */}
          <DirectoryCitations
            pageType={pageType}
            locationSlug={citySlug}
            maxLinks={3}
            variant="inline"
            title="Verified Business"
          />
        </div>
      </div>
    </section>
  );
}
