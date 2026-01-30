import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG, SERVICES, LOCATIONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sitemap | Best Roofing Now',
  description:
    'Browse the full sitemap of Best Roofing Now. Find links to all our roofing services, service areas, resources, and more.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/sitemap`,
  },
};

export default function SitemapPage() {
  return (
    <main className="bg-white py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
        <p className="text-gray-600 mb-12">
          Browse all pages on the Best Roofing Now website. Find the information you need about our
          roofing services, service areas, and helpful resources.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Main Pages */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Main Pages
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-700 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-700 hover:underline">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-blue-700 hover:underline">
                  All Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-700 hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-blue-700 hover:underline">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-blue-700 hover:underline">
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-blue-700 hover:underline">
                  Warranty Information
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-blue-700 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-blue-700 hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Services
            </h2>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-blue-700 hover:underline"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Locations */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Service Areas
            </h2>
            <ul className="space-y-2">
              {LOCATIONS.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="text-blue-700 hover:underline"
                  >
                    {location.city}, {location.state}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Commercial & Industrial Building Types */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Commercial & Industrial
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/commercial-roofing-services" className="text-blue-700 hover:underline">
                  Commercial Roofing Services
                </Link>
              </li>
              <li>
                <Link href="/industrial-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Industrial Roofing
                </Link>
              </li>
              <li>
                <Link href="/warehouse-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Warehouse Roofing
                </Link>
              </li>
              <li>
                <Link href="/distribution-center-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Distribution Center Roofing
                </Link>
              </li>
              <li>
                <Link href="/healthcare-facility-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Healthcare Facility Roofing
                </Link>
              </li>
              <li>
                <Link href="/office-building-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Office Building Roofing
                </Link>
              </li>
              <li>
                <Link href="/retail-shopping-center-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Retail & Shopping Center Roofing
                </Link>
              </li>
              <li>
                <Link href="/hotel-hospitality-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Hotel & Hospitality Roofing
                </Link>
              </li>
              <li>
                <Link href="/school-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  School & University Roofing
                </Link>
              </li>
              <li>
                <Link href="/manufacturing-plant-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Manufacturing Plant Roofing
                </Link>
              </li>
              <li>
                <Link href="/government-building-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Government Building Roofing
                </Link>
              </li>
              <li>
                <Link href="/data-center-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Data Center Roofing
                </Link>
              </li>
              <li>
                <Link href="/auto-dealership-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Auto Dealership Roofing
                </Link>
              </li>
              <li>
                <Link href="/church-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Church Roofing
                </Link>
              </li>
              <li>
                <Link href="/flat-roof-coating-charlotte-nc" className="text-blue-700 hover:underline">
                  Flat Roof Coating
                </Link>
              </li>
              <li>
                <Link href="/apartment-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Apartment Roofing
                </Link>
              </li>
              <li>
                <Link href="/condo-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Condo Roofing
                </Link>
              </li>
              <li>
                <Link href="/townhouse-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Townhouse Roofing
                </Link>
              </li>
            </ul>
          </section>

          {/* Resources */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Resources
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-blue-700 hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-blue-700 hover:underline">
                  Roofing Guides
                </Link>
              </li>
              <li>
                <Link href="/nc-roofing-guide" className="text-blue-700 hover:underline">
                  NC Roofing Guide
                </Link>
              </li>
              <li>
                <Link href="/materials" className="text-blue-700 hover:underline">
                  Roofing Materials
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-blue-700 hover:underline">
                  Brands We Carry
                </Link>
              </li>
              <li>
                <Link href="/roof-types" className="text-blue-700 hover:underline">
                  Roof Types
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-blue-700 hover:underline">
                  Compare Roofing Options
                </Link>
              </li>
              <li>
                <Link href="/roof-repair-cost-charlotte-nc" className="text-blue-700 hover:underline">
                  Roof Repair Cost Guide
                </Link>
              </li>
              <li>
                <Link href="/commercial-roof-repair-cost-charlotte-nc" className="text-blue-700 hover:underline">
                  Commercial Roof Repair Cost Guide
                </Link>
              </li>
              <li>
                <Link href="/problems" className="text-blue-700 hover:underline">
                  Common Roof Problems
                </Link>
              </li>
              <li>
                <Link href="/ventilation" className="text-blue-700 hover:underline">
                  Roof Ventilation
                </Link>
              </li>
              <li>
                <Link href="/seasonal" className="text-blue-700 hover:underline">
                  Seasonal Roofing Tips
                </Link>
              </li>
            </ul>
          </section>

          {/* Specialty Pages */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Specialty Services
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-blue-700 hover:underline">
                  Roofing Services Overview
                </Link>
              </li>
              <li>
                <Link href="/storm-damage-roof-repair-charlotte-nc" className="text-blue-700 hover:underline">
                  Storm Restoration
                </Link>
              </li>
              <li>
                <Link href="/commercial-systems" className="text-blue-700 hover:underline">
                  Commercial Roofing Systems
                </Link>
              </li>
              <li>
                <Link href="/siding-services" className="text-blue-700 hover:underline">
                  Siding Services
                </Link>
              </li>
              <li>
                <Link href="/solar-services" className="text-blue-700 hover:underline">
                  Solar Services
                </Link>
              </li>
              <li>
                <Link href="/specialty-services" className="text-blue-700 hover:underline">
                  Specialty Services
                </Link>
              </li>
              <li>
                <Link href="/roof-financing-charlotte-nc" className="text-blue-700 hover:underline">
                  Roof Financing
                </Link>
              </li>
            </ul>
          </section>

          {/* Popular Local Pages */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Popular Local Pages
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Roofing Charlotte NC
                </Link>
              </li>
              <li>
                <Link href="/roofers-charlotte-nc" className="text-blue-700 hover:underline">
                  Roofers Charlotte NC
                </Link>
              </li>
              <li>
                <Link href="/roof-repair-charlotte-nc" className="text-blue-700 hover:underline">
                  Roof Repair Charlotte NC
                </Link>
              </li>
              <li>
                <Link href="/roof-replacement-charlotte-nc" className="text-blue-700 hover:underline">
                  Roof Replacement Charlotte NC
                </Link>
              </li>
              <li>
                <Link href="/roof-inspection-charlotte-nc" className="text-blue-700 hover:underline">
                  Roof Inspection Charlotte NC
                </Link>
              </li>
              <li>
                <Link href="/residential-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Residential Roofing Charlotte NC
                </Link>
              </li>
              <li>
                <Link href="/roofing-contractor-charlotte-nc" className="text-blue-700 hover:underline">
                  Roofing Contractor Charlotte NC
                </Link>
              </li>
              <li>
                <Link href="/affordable-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Affordable Roofing Charlotte NC
                </Link>
              </li>
              <li>
                <Link href="/insurance-claim-roofing-charlotte-nc" className="text-blue-700 hover:underline">
                  Insurance Claim Roofing Charlotte NC
                </Link>
              </li>
              <li>
                <Link href="/emergency-roof-repair-huntersville-nc" className="text-blue-700 hover:underline">
                  Emergency Roof Repair Huntersville NC
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
