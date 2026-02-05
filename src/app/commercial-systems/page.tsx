import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, Building2, CheckCircle, Clock } from 'lucide-react';
import { SITE_CONFIG, COMMERCIAL_SYSTEMS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Commercial Roofing Systems | TPO, EPDM, PVC, Metal | Charlotte NC',
  description: 'Expert installation of commercial roofing systems in Charlotte NC. TPO, EPDM, PVC, Built-Up, and Metal roofing for businesses and industrial facilities.',
  keywords: [
    'commercial roofing Charlotte',
    'TPO roofing',
    'EPDM rubber roofing',
    'PVC roofing',
    'flat roof commercial',
    'industrial roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-systems`,
  },
  openGraph: {
    title: 'Commercial Roofing Systems | Best Roofing Now Charlotte',
    description: 'Professional commercial roofing installation and repair.',
    url: `${SITE_CONFIG.url}/commercial-systems`,
    type: 'website',
  },
};

export default function CommercialSystemsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing Systems', url: `${SITE_CONFIG.url}/commercial-systems` },
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Commercial Roofing Systems' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-10 h-10" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Commercial Roofing Systems
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Protect your business investment with the right commercial roofing system.
              We install and service TPO, EPDM, PVC, Built-Up, and Metal roofing for
              Charlotte-area businesses.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Get Commercial Quote
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Commercial and industrial roofs face challenges that residential systems do not — standing water on flat surfaces, rooftop HVAC penetrations, foot traffic from maintenance crews, and strict energy-code requirements. Best Roofing Now installs single-ply membranes (TPO, EPDM, PVC), built-up roofing, and standing-seam metal systems for Charlotte-area businesses ranging from small retail spaces to large warehouse facilities.
              </p>
              <p>
                Each system below is suited to different building types, budgets, and performance goals. Our commercial team will inspect your existing roof, evaluate drainage and insulation, and recommend the system that delivers the longest service life at the best value for your property. All commercial projects include manufacturer warranty registration and an optional preventive maintenance plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMMERCIAL_SYSTEMS.map((system) => (
              <Link
                key={system.slug}
                href={`/commercial-systems/${system.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                  {system.name}
                </h2>
                <p className="text-gray text-sm mb-4">
                  {system.description.slice(0, 100)}...
                </p>
                <div className="flex items-center gap-2 text-sm text-primary/80 mb-4">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>Lifespan: {system.lifespan}</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Commercial Roofing Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">System</th>
                  <th className="px-4 py-3 text-left font-bold">Lifespan</th>
                  <th className="px-4 py-3 text-left font-bold">Best For</th>
                  <th className="px-4 py-3 text-left font-bold">Key Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-light transition">
                  <td className="px-4 py-3 font-semibold text-primary">TPO</td>
                  <td className="px-4 py-3 text-gray">20-30 years</td>
                  <td className="px-4 py-3 text-gray">Warehouses, retail</td>
                  <td className="px-4 py-3 text-gray">Energy efficiency</td>
                </tr>
                <tr className="hover:bg-light transition">
                  <td className="px-4 py-3 font-semibold text-primary">EPDM</td>
                  <td className="px-4 py-3 text-gray">25-30 years</td>
                  <td className="px-4 py-3 text-gray">Office buildings</td>
                  <td className="px-4 py-3 text-gray">Proven durability</td>
                </tr>
                <tr className="hover:bg-light transition">
                  <td className="px-4 py-3 font-semibold text-primary">PVC</td>
                  <td className="px-4 py-3 text-gray">20-30 years</td>
                  <td className="px-4 py-3 text-gray">Restaurants, labs</td>
                  <td className="px-4 py-3 text-gray">Chemical resistance</td>
                </tr>
                <tr className="hover:bg-light transition">
                  <td className="px-4 py-3 font-semibold text-primary">BUR</td>
                  <td className="px-4 py-3 text-gray">15-30 years</td>
                  <td className="px-4 py-3 text-gray">Large flat roofs</td>
                  <td className="px-4 py-3 text-gray">Multi-layer protection</td>
                </tr>
                <tr className="hover:bg-light transition">
                  <td className="px-4 py-3 font-semibold text-primary">Metal</td>
                  <td className="px-4 py-3 text-gray">40-70 years</td>
                  <td className="px-4 py-3 text-gray">All commercial</td>
                  <td className="px-4 py-3 text-gray">Longevity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Commercial Experience Matters */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Why Commercial Experience Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary text-lg mb-3">Minimal Business Disruption</h3>
                <p className="text-gray text-sm">
                  We understand that downtime costs money. Our commercial crews work
                  efficiently, often completing projects during off-hours to minimize
                  impact on your operations.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary text-lg mb-3">Safety Compliance</h3>
                <p className="text-gray text-sm">
                  Commercial projects require strict safety protocols. Our crews are
                  OSHA-trained and follow all safety regulations to protect your
                  employees and customers.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary text-lg mb-3">Proper Specifications</h3>
                <p className="text-gray text-sm">
                  Commercial roofs have unique requirements for insulation, drainage,
                  and equipment mounting. We ensure your system meets all building codes
                  and manufacturer specifications.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary text-lg mb-3">Preventive Maintenance</h3>
                <p className="text-gray text-sm">
                  We offer commercial maintenance programs to extend your roof&apos;s
                  lifespan and catch small issues before they become expensive problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              'Office Buildings',
              'Retail Centers',
              'Warehouses',
              'Manufacturing',
              'Restaurants',
              'Healthcare',
              'Schools',
              'Churches',
              'Hotels',
              'Auto Dealers',
              'Apartments',
              'Government',
            ].map((industry, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" aria-hidden="true" />
                <span className="text-sm font-medium text-dark">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Protect Your Business Investment
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free commercial roof assessment and quote. We&apos;ll recommend the
            best system for your building type and budget.
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
              Request Commercial Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
