import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

// All Lake Norman neighborhood landing pages, grouped by city.
// When a hub page renders this grid, neighborhoods of the matching city
// (if any) are surfaced first — natural local-relevance ordering.

type CityKey = 'Cornelius' | 'Davidson' | 'Mooresville' | 'Huntersville' | 'Denver';

interface Neighborhood {
  name: string;
  href: string;
  city: CityKey;
  blurb: string;
}

const NEIGHBORHOODS: readonly Neighborhood[] = [
  // Cornelius
  { name: 'The Peninsula', href: '/roofing-the-peninsula-cornelius-nc', city: 'Cornelius', blurb: 'Gated golf community, Rees Jones course' },
  { name: 'Antiquity', href: '/roofing-antiquity-cornelius-nc', city: 'Cornelius', blurb: 'Neo-traditional mixed-use community' },
  { name: 'Jetton Cove', href: '/roofing-jetton-cove-cornelius-nc', city: 'Cornelius', blurb: 'Lake Norman waterfront in Cornelius' },
  { name: 'The Peninsula (Metal Roofing)', href: '/metal-roofing-the-peninsula-cornelius-nc', city: 'Cornelius', blurb: 'Premium standing-seam metal specialists' },
  // Davidson
  { name: 'River Run Country Club', href: '/roofing-river-run-davidson-nc', city: 'Davidson', blurb: 'Gated John LaFoy golf community' },
  { name: 'Davidson Pointe', href: '/roofing-davidson-pointe-davidson-nc', city: 'Davidson', blurb: 'Established Davidson neighborhood' },
  // Mooresville
  { name: 'The Point', href: '/roofing-the-point-mooresville-nc', city: 'Mooresville', blurb: 'Trump National Charlotte luxury estates' },
  { name: 'The Point (Roof Replacement)', href: '/roof-replacement-the-point-mooresville-nc', city: 'Mooresville', blurb: 'Premium replacement at Trump National' },
  { name: 'The Farms', href: '/roofing-the-farms-mooresville-nc', city: 'Mooresville', blurb: 'Brawley Peninsula master-planned community' },
  { name: 'Curtis Pond', href: '/roofing-curtis-pond-mooresville-nc', city: 'Mooresville', blurb: 'Newer high-end Mooresville community' },
  { name: 'Cove Creek', href: '/roofing-cove-creek-mooresville-nc', city: 'Mooresville', blurb: 'Upscale Lake Norman waterfront with boat slips' },
  // Huntersville
  { name: 'Birkdale', href: '/roofing-birkdale-huntersville-nc', city: 'Huntersville', blurb: 'Birkdale Village + Arnold Palmer golf' },
  { name: 'Vermillion', href: '/roofing-vermillion-huntersville-nc', city: 'Huntersville', blurb: 'New Urbanist TND on Verhoeff Drive' },
  { name: 'Skybrook', href: '/roofing-skybrook-huntersville-nc', city: 'Huntersville', blurb: 'Skybrook Golf Club community' },
  { name: 'Northstone Country Club', href: '/roofing-northstone-huntersville-nc', city: 'Huntersville', blurb: 'Robert Trent Jones II gated golf' },
  // Denver
  { name: 'Sailview', href: '/roofing-sailview-denver-nc', city: 'Denver', blurb: 'Western shore Lake Norman waterfront' },
  { name: 'Governors Island', href: '/roofing-governors-island-denver-nc', city: 'Denver', blurb: 'Premium Denver Lake Norman community' },
] as const;

interface LKNNeighborhoodGridProps {
  currentCity?: CityKey;
  currentSlug?: string;
  className?: string;
  heading?: string;
  subheading?: string;
}

export function LKNNeighborhoodGrid({
  currentCity,
  currentSlug,
  className = '',
  heading = 'Lake Norman Neighborhood Roofing',
  subheading = 'We build, repair, and replace roofs across Lake Norman\'s most established communities. Find dedicated guidance for your neighborhood below.',
}: LKNNeighborhoodGridProps) {
  // Order: matching-city neighborhoods first, then everything else.
  // Always exclude the current page itself.
  const filtered = NEIGHBORHOODS.filter((n) => !currentSlug || !n.href.endsWith(`/${currentSlug}`));
  const ordered = currentCity
    ? [...filtered.filter((n) => n.city === currentCity), ...filtered.filter((n) => n.city !== currentCity)]
    : filtered;

  return (
    <section className={`section bg-light ${className}`}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-semibold">Lake Norman Neighborhoods</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{heading}</h2>
          <p className="text-gray text-lg">{subheading}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ordered.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="font-bold text-dark group-hover:text-primary transition-colors">{n.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{n.city}, NC</p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
              <p className="text-gray text-sm">{n.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
