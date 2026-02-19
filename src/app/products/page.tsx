import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, Shield, Wind, DollarSign } from 'lucide-react';
import { SITE_CONFIG, SHINGLE_PRODUCTS } from '@/lib/constants';
import { BreadcrumbSchema, CollectionPageSchema, WebPageSchema } from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'Roofing Shingle Products',
  description:
    'Compare popular shingle products and specs. Wind ratings, warranties, and price ranges for Charlotte area roofs. Free estimates available.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/products`,
  },
  openGraph: {
    title: 'Roofing Shingle Products | Best Roofing Now',
    description:
      'Compare popular shingle products and specs. Wind ratings, warranties, and price ranges. Free estimates available.',
    url: `${SITE_CONFIG.url}/products`,
    type: 'website',
  },
};

export default function ProductsPage() {
  const pageUrl = `${SITE_CONFIG.url}/products`;

  type ShingleProduct = (typeof SHINGLE_PRODUCTS)[number];

  const items = SHINGLE_PRODUCTS.map((p) => ({
    name: p.fullName,
    url: `${SITE_CONFIG.url}/products/${p.slug}`,
    description: p.description,
  }));

  const byBrand = SHINGLE_PRODUCTS.reduce<Record<string, ShingleProduct[]>>((acc, p) => {
    const key = p.brandName;
    if (!acc[key]) acc[key] = [];
    acc[key].push(p);
    return acc;
  }, {});

  const brandNames = Object.keys(byBrand).sort((a, b) => a.localeCompare(b));

  return (
    <>
      <WebPageSchema
        name="Roofing Shingle Products | Best Roofing Now"
        description="Compare popular shingle products and specs including wind ratings, warranties, and typical price ranges."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Products', url: pageUrl },
        ]}
      />
      <CollectionPageSchema
        name="Roofing Shingle Products"
        description="Product pages for popular shingle lines from leading manufacturers."
        url={pageUrl}
        items={items}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Products', url: pageUrl },
        ]}
      />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Products', href: '/products' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Roofing Shingle Products
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Compare popular shingle options by brand. See key specs like wind rating, warranty,
              and typical price range, then request an estimate for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <EstimateButton
                variant="accent"
                className="bg-accent hover:bg-accent-dark text-white"
              >
                Get Free Instant Estimate
              </EstimateButton>
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-white text-primary hover:bg-light"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-10">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Choosing the right shingle is a balance of budget, curb appeal, and performance.
                In the Charlotte area, we pay close attention to wind resistance, algae protection,
                and warranty coverage. If you are not sure where to start, schedule a free
                inspection and we will recommend options that match your roof design and goals.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            {brandNames.map((brandName) => {
              const products = byBrand[brandName] || [];
              return (
                <section key={brandName}>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {brandName} Shingles
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {products.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/products/${p.slug}`}
                        className="block bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 border border-gray-100 group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <h3 className="text-lg font-bold text-dark group-hover:text-primary transition">
                              {p.name}
                            </h3>
                            <p className="text-sm text-gray mt-2 line-clamp-3">
                              {p.description}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:translate-x-1 transition" aria-hidden="true" />
                        </div>

                        <div className="grid grid-cols-3 gap-3 mt-5">
                          <div className="bg-light rounded-lg p-3">
                            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                              <Shield className="w-4 h-4 text-primary" aria-hidden="true" />
                              Warranty
                            </div>
                            <div className="text-sm font-semibold text-dark line-clamp-1">
                              {p.warranty}
                            </div>
                          </div>
                          <div className="bg-light rounded-lg p-3">
                            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                              <Wind className="w-4 h-4 text-primary" aria-hidden="true" />
                              Wind
                            </div>
                            <div className="text-sm font-semibold text-dark line-clamp-1">
                              {p.windRating}
                            </div>
                          </div>
                          <div className="bg-light rounded-lg p-3">
                            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                              <DollarSign className="w-4 h-4 text-primary" aria-hidden="true" />
                              Price
                            </div>
                            <div className="text-sm font-semibold text-dark line-clamp-1">
                              {p.priceRange}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
