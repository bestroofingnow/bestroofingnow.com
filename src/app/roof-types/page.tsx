import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, Home, Info } from 'lucide-react';
import { SITE_CONFIG, ROOF_TYPES } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'Roof Types & Styles',
  description: 'Learn about different roof types including gable, hip, flat, mansard, and more. Expert guidance on choosing the right roof style for your Charlotte home.',
  keywords: [
    'roof types',
    'roof styles',
    'gable roof',
    'hip roof',
    'flat roof',
    'Charlotte roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-types`,
  },
  openGraph: {
    title: 'Roof Types & Styles | Best Roofing Now',
    description: 'Complete guide to residential roof types and styles for Charlotte homeowners.',
    url: `${SITE_CONFIG.url}/roof-types`,
    type: 'website',
  },
};

export default function RoofTypesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Roof Types' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Roof Types & Styles
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Understanding different roof styles helps you make informed decisions
              about repairs, replacements, and new construction. Explore the most
              common roof types found in Charlotte homes.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Talk to a Roofing Expert
            </a>
          </div>
        </div>
      </section>

      {/* Roof Types Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOF_TYPES.map((roofType) => (
              <Link
                key={roofType.slug}
                href={`/roof-types/${roofType.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                  {roofType.name}
                </h2>
                <p className="text-gray text-sm mb-4">
                  {roofType.description.slice(0, 120)}...
                </p>
                <div className="text-sm text-primary/80 mb-4">
                  <strong>Best for:</strong> {roofType.bestFor.slice(0, 60)}...
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

      {/* Which Roof Type Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Which Roof Type is Right for You?
            </h2>
            <p className="text-gray mb-8">
              The best roof style depends on your home&apos;s architecture, local climate,
              budget, and personal preferences. Here are key factors to consider:
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary mb-3">Climate Considerations</h3>
                <ul className="text-gray text-sm space-y-2">
                  <li>• <strong>Heavy rain:</strong> Steeper slopes (gable, hip) shed water better</li>
                  <li>• <strong>High winds:</strong> Hip roofs offer superior wind resistance</li>
                  <li>• <strong>Hot summers:</strong> Light-colored or reflective materials help</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary mb-3">Architectural Style</h3>
                <ul className="text-gray text-sm space-y-2">
                  <li>• <strong>Colonial homes:</strong> Gable or gambrel roofs</li>
                  <li>• <strong>Ranch style:</strong> Hip or low-slope gable</li>
                  <li>• <strong>Modern design:</strong> Flat or shed roofs</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary mb-3">Budget & Maintenance</h3>
                <ul className="text-gray text-sm space-y-2">
                  <li>• <strong>Most affordable:</strong> Simple gable roofs</li>
                  <li>• <strong>Lowest maintenance:</strong> Hip roofs, metal materials</li>
                  <li>• <strong>Higher investment:</strong> Mansard, complex designs</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary mb-3">Space & Functionality</h3>
                <ul className="text-gray text-sm space-y-2">
                  <li>• <strong>Extra living space:</strong> Mansard or gambrel</li>
                  <li>• <strong>Rooftop use:</strong> Flat roofs</li>
                  <li>• <strong>Solar panels:</strong> South-facing shed roofs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Tip */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-8">
              <div className="flex items-start gap-4">
                <Info className="w-8 h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-primary text-xl mb-2">Expert Tip</h3>
                  <p className="text-gray">
                    Not sure which roof type you have or what style would work best for your
                    home? Our roofing experts can assess your property and provide recommendations
                    based on your specific needs and budget. Schedule a free consultation today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help with Your Roof?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need repairs, replacement, or a new roof for construction,
            our experts are ready to help with any roof type.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-accent hover:bg-light text-lg px-8"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <EstimateButton
              variant="accent"
              size="lg"
              className="px-8"
            >
              Get Free Instant Estimate
            </EstimateButton>
          </div>
        </div>
      </section>
    </>
  );
}
