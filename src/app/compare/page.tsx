import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Scale, Phone } from 'lucide-react';
import { SITE_CONFIG, ROOFING_COMPARISONS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Roofing Material Comparisons | Best Roofing Now Charlotte NC',
  description: 'Compare roofing materials side-by-side. Metal vs shingles, tile vs asphalt, GAF vs CertainTeed. Make an informed decision for your Charlotte home.',
  keywords: [
    'roofing material comparison',
    'metal vs shingles',
    'best roof type',
    'roof material guide',
    'Charlotte roofing options',
  ],
  openGraph: {
    title: 'Roofing Material Comparisons | Best Roofing Now',
    description: 'Compare roofing materials side-by-side to make the best choice for your home.',
    url: `${SITE_CONFIG.url}/compare`,
    type: 'website',
  },
};

export default function ComparePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Compare Roofing Materials' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Compare Roofing Materials
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Choosing the right roofing material is one of the most important decisions
              for your home. Compare options side-by-side to find the perfect fit for
              your budget, style, and long-term goals.
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

      {/* Comparisons Grid */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Popular Roofing Comparisons
            </h2>
            <p className="text-gray max-w-2xl mx-auto">
              Explore detailed comparisons of the most popular roofing materials.
              Each guide includes cost analysis, durability ratings, and expert recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ROOFING_COMPARISONS.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/compare/${comparison.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Scale className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                      {comparison.title}
                    </h3>
                    <p className="text-gray mb-4">
                      {comparison.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      View Comparison
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Compare Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Why Compare Before You Buy?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">$</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Save Money</h3>
                <p className="text-gray text-sm">
                  Understanding the true cost of each material—including long-term
                  maintenance—helps you make a smart investment.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">✓</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Right Fit</h3>
                <p className="text-gray text-sm">
                  Different materials suit different home styles, climates,
                  and personal preferences. Find your perfect match.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">★</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">No Regrets</h3>
                <p className="text-gray text-sm">
                  A roof is a 20-50 year commitment. Make sure you&apos;re confident
                  in your choice before installation day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            At-a-Glance Material Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Material</th>
                  <th className="px-6 py-4 text-left font-bold">Cost Range</th>
                  <th className="px-6 py-4 text-left font-bold">Lifespan</th>
                  <th className="px-6 py-4 text-left font-bold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-light transition">
                  <td className="px-6 py-4 font-semibold text-primary">Asphalt Shingles</td>
                  <td className="px-6 py-4 text-gray">$3.50-$5.50/sq ft</td>
                  <td className="px-6 py-4 text-gray">20-30 years</td>
                  <td className="px-6 py-4 text-gray">Budget-conscious homeowners</td>
                </tr>
                <tr className="hover:bg-light transition">
                  <td className="px-6 py-4 font-semibold text-primary">Metal Roofing</td>
                  <td className="px-6 py-4 text-gray">$7-$14/sq ft</td>
                  <td className="px-6 py-4 text-gray">40-70 years</td>
                  <td className="px-6 py-4 text-gray">Long-term value seekers</td>
                </tr>
                <tr className="hover:bg-light transition">
                  <td className="px-6 py-4 font-semibold text-primary">Tile Roofing</td>
                  <td className="px-6 py-4 text-gray">$10-$18/sq ft</td>
                  <td className="px-6 py-4 text-gray">50-100 years</td>
                  <td className="px-6 py-4 text-gray">Luxury & Mediterranean homes</td>
                </tr>
                <tr className="hover:bg-light transition">
                  <td className="px-6 py-4 font-semibold text-primary">Slate Roofing</td>
                  <td className="px-6 py-4 text-gray">$15-$30/sq ft</td>
                  <td className="px-6 py-4 text-gray">75-200 years</td>
                  <td className="px-6 py-4 text-gray">Historic & luxury properties</td>
                </tr>
                <tr className="hover:bg-light transition">
                  <td className="px-6 py-4 font-semibold text-primary">Cedar Shake</td>
                  <td className="px-6 py-4 text-gray">$8-$14/sq ft</td>
                  <td className="px-6 py-4 text-gray">30-40 years</td>
                  <td className="px-6 py-4 text-gray">Craftsman & rustic homes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray text-sm mt-4">
            *Prices are estimates for Charlotte, NC area. Actual costs may vary based on roof size and complexity.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Not Sure Which Material is Right?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our roofing experts can assess your home and recommend the best
            material for your specific needs, budget, and style preferences.
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
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
