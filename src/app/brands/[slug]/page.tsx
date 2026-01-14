import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, CheckCircle, Award, Shield, ArrowRight, Star } from 'lucide-react';
import { SITE_CONFIG, ROOFING_BRANDS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { BreadcrumbSchema, WebPageSchema } from '@/components/seo/SchemaMarkup';

interface BrandPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ROOFING_BRANDS.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = ROOFING_BRANDS.find((b) => b.slug === slug);

  if (!brand) {
    return { title: 'Brand Not Found' };
  }

  const ogImage = 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png';

  return {
    title: `${brand.fullName} | Certified Installer Charlotte NC | Best Roofing Now`,
    description: `${brand.description} As a ${brand.certificationLevel}, we offer enhanced warranty options on ${brand.name} products.`,
    keywords: brand.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/brands/${slug}`,
    },
    openGraph: {
      title: `${brand.fullName} | Best Roofing Now Charlotte`,
      description: brand.description,
      url: `${SITE_CONFIG.url}/brands/${slug}`,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${brand.fullName} certified installer in Charlotte NC - Best Roofing Now`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${brand.fullName} | Best Roofing Now Charlotte`,
      description: brand.description,
      images: [ogImage],
    },
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = ROOFING_BRANDS.find((b) => b.slug === slug);

  if (!brand) {
    notFound();
  }

  const otherBrands = ROOFING_BRANDS.filter((b) => b.slug !== slug);

  const pageUrl = `${SITE_CONFIG.url}/brands/${slug}`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name={`${brand.fullName} | Certified Installer Charlotte NC`}
        description={brand.description}
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Brands', url: `${SITE_CONFIG.url}/brands` },
          { name: brand.name, url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Brands', url: `${SITE_CONFIG.url}/brands` },
          { name: brand.name, url: pageUrl },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Brands', href: '/brands' },
              { label: brand.name },
            ]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-10 h-10" aria-hidden="true" />
              <span className="bg-accent/20 px-3 py-1 rounded-full text-sm font-semibold">
                {brand.certificationLevel}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {brand.fullName}
            </h1>
            <p className="text-xl text-accent font-semibold mb-4">{brand.tagline}</p>
            <p className="text-xl text-white/90 mb-8">
              {brand.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Get {brand.name} Quote
              </a>
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-light"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {brand.name} Products We Install
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {brand.products.map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-primary">{product.name}</h3>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <p className="text-gray mb-3">{product.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-green-500" aria-hidden="true" />
                  <span className="font-semibold text-green-700">{product.warranty} Warranty</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Options */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {brand.name} Warranty Options
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray text-center mb-8">
              As a {brand.certificationLevel}, we can offer enhanced warranty
              options not available from uncertified contractors.
            </p>

            <div className="space-y-4">
              {brand.warranties.map((warranty, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark">{warranty}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/warranty" className="btn btn-outline">
                Learn More About Warranties
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Brand */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Why Choose {brand.name}?
            </h2>

            <div className="bg-primary/5 rounded-xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-dark">Industry-leading research and development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-dark">Rigorous quality control and testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-dark">Wide range of colors and styles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-dark">Strong warranty protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-dark">Proven performance in Charlotte&apos;s climate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Brands */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Other Brands We Install
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {otherBrands.map((b) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="card hover:shadow-xl transition group"
              >
                <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition">
                  {b.name}
                </h3>
                <p className="text-accent text-sm font-semibold mb-2">{b.tagline}</p>
                <p className="text-gray text-sm mb-4">{b.description.slice(0, 80)}...</p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a {brand.name} Roof?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free quote for {brand.name} installation with our certified team.
            We&apos;ll help you choose the perfect product for your home.
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
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <DirectoryCitations pageType="brands" maxLinks={3} variant="inline" title="Certified Contractor" />
          </div>
        </div>
      </section>
    </>
  );
}
