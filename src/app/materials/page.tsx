import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, Clock, DollarSign } from 'lucide-react';
import { SITE_CONFIG, ROOFING_MATERIALS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Roofing Materials Guide | Best Roofing Now Charlotte NC',
  description: 'Compare roofing materials: asphalt shingles, metal roofing, tile, slate, and more. Learn about costs, lifespans, and which material is best for your Charlotte home.',
  keywords: [
    'roofing materials Charlotte NC',
    'types of roofing',
    'best roofing material',
    'roofing options',
    'shingles vs metal',
  ],
  openGraph: {
    title: 'Roofing Materials Guide | Best Roofing Now',
    description: 'Compare roofing materials to find the best option for your Charlotte home. Expert guidance on asphalt, metal, tile, slate, and more.',
    url: `${SITE_CONFIG.url}/materials`,
    type: 'website',
  },
};

export default function MaterialsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Materials', url: `${SITE_CONFIG.url}/materials` },
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Roofing Materials' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Roofing Materials Guide
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Choosing the right roofing material is one of the most important decisions you&apos;ll make for your home.
              Compare options, costs, and lifespans to find the perfect fit for your Charlotte property.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Get Expert Advice
              </a>
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-light"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Compare Roofing Materials
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Each roofing material has unique advantages. Click on any material below to learn more
              about costs, benefits, and whether it&apos;s right for your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOFING_MATERIALS.map((material) => (
              <Link
                key={material.slug}
                href={`/materials/${material.slug}`}
                className="card hover:shadow-xl transition group"
              >
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition">
                  {material.name}
                </h3>
                <p className="text-gray mb-4 text-sm">
                  {material.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span className="font-semibold">Lifespan:</span>
                    <span className="text-gray">{material.lifespan}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span className="font-semibold">Cost:</span>
                    <span className="text-gray">{material.costRange}</span>
                  </div>
                </div>

                <ul className="space-y-1 mb-4">
                  {material.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-primary font-semibold group-hover:text-accent transition">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Quick Material Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left">Material</th>
                  <th className="px-4 py-3 text-left">Lifespan</th>
                  <th className="px-4 py-3 text-left">Cost Range</th>
                  <th className="px-4 py-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                {ROOFING_MATERIALS.map((material, idx) => (
                  <tr key={material.slug} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3">
                      <Link href={`/materials/${material.slug}`} className="text-primary font-semibold hover:text-accent">
                        {material.shortName}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-gray">{material.lifespan}</td>
                    <td className="px-4 py-3 text-gray">{material.costRange}</td>
                    <td className="px-4 py-3 text-gray text-sm">{material.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Material Is Right for You?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our roofing experts will assess your home, discuss your goals and budget,
            and recommend the best material for your specific needs.
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
