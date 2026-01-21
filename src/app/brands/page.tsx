import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, Award, Shield, CheckCircle } from 'lucide-react';
import { SITE_CONFIG, ROOFING_BRANDS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Roofing Brands We Install | GAF, CertainTeed, Owens Corning | Charlotte NC',
  description: 'We install top roofing brands including GAF, CertainTeed, and Owens Corning. Certified installer with enhanced warranty options in Charlotte NC.',
  keywords: [
    'GAF roofing Charlotte',
    'CertainTeed contractor',
    'Owens Corning installer',
    'certified roofing contractor',
    'best shingle brands',
  ],
  openGraph: {
    title: 'Roofing Brands We Install | Best Roofing Now',
    description: 'Premium roofing products from America\'s top manufacturers.',
    url: `${SITE_CONFIG.url}/brands`,
    type: 'website',
  },
};

export default function BrandsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Brands We Install', url: `${SITE_CONFIG.url}/brands` },
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Brands We Install' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-10 h-10" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Roofing Brands
            </h1>
            <p className="text-xl text-white/90 mb-8">
              We partner with America&apos;s most trusted roofing manufacturers to bring
              you superior products backed by industry-leading warranties. As a
              certified installer, we offer enhanced coverage options.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Get Brand Recommendations
            </a>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {ROOFING_BRANDS.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 border border-gray-100"
              >
                <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition">
                  {brand.name}
                </div>
                <p className="text-sm text-accent font-semibold mb-4">{brand.tagline}</p>
                <p className="text-gray mb-4">
                  {brand.description.slice(0, 120)}...
                </p>
                <div className="flex items-center gap-2 text-sm text-primary/80 mb-4">
                  <Shield className="w-4 h-4" aria-hidden="true" />
                  <span>{brand.certificationLevel}</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  View Products & Warranties
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Brand Matters */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Why Roofing Brand Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary text-lg mb-3">Quality Assurance</h3>
                <p className="text-gray text-sm">
                  Top manufacturers invest heavily in R&D, testing, and quality control.
                  Their products consistently outperform generic alternatives in
                  durability, weather resistance, and longevity.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary text-lg mb-3">Warranty Protection</h3>
                <p className="text-gray text-sm">
                  Premium brands offer comprehensive warranties that cover both
                  materials and labor. Cheap alternatives often have limited or
                  pro-rated coverage that leaves you exposed.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary text-lg mb-3">Certified Installers</h3>
                <p className="text-gray text-sm">
                  Brand certifications require ongoing training and quality standards.
                  This means better installation practices and access to enhanced
                  warranty options not available to uncertified contractors.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary text-lg mb-3">Home Value</h3>
                <p className="text-gray text-sm">
                  Recognized brand names add value when selling your home. Buyers
                  and inspectors recognize quality materials, and transferable
                  warranties are a selling point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Certifications */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our Manufacturer Certifications
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {ROOFING_BRANDS.map((brand) => (
                <div key={brand.slug} className="bg-light rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{brand.name}</h3>
                      <p className="text-accent font-semibold">{brand.certificationLevel}</p>
                    </div>
                    <Link
                      href={`/brands/${brand.slug}`}
                      className="btn btn-outline btn-sm"
                    >
                      Learn More
                    </Link>
                  </div>
                  <ul className="space-y-2">
                    {brand.warranties.slice(0, 2).map((warranty, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {warranty}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Which Brand is Right for You?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Each brand offers unique advantages. Let our experts help you choose
            the best product for your home, budget, and style preferences.
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
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
