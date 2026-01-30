import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, Phone, Wind, Shield, DollarSign, ArrowRight, Star, Palette } from 'lucide-react';
import { SITE_CONFIG, SHINGLE_PRODUCTS, ROOFING_BRANDS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { FAQ } from '@/components/sections/FAQ';
import { BreadcrumbSchema, ProductSchema, WebPageSchema } from '@/components/seo/SchemaMarkup';
import { EstimateButton } from '@/components/estimate';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// Canonical URL mappings for product slugs that have competing static keyword pages
const productCanonicals: Record<string, string> = {
  'gaf-timberline-hdz': '/gaf-timberline-shingles-charlotte-nc',
  'gaf-timberline-ultra-hd': '/gaf-timberline-shingles-charlotte-nc',
};

export async function generateStaticParams() {
  return SHINGLE_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = SHINGLE_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  const ogImage = 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png';

  return {
    title: `${product.fullName} | ${product.brandName} Shingles Charlotte NC`,
    description: `${product.description} Get ${product.name} installed by certified ${product.brandName} contractors in Charlotte NC. ${product.warranty} warranty. Free estimates.`,
    keywords: product.keywords,
    alternates: {
      canonical: productCanonicals[slug]
        ? `${SITE_CONFIG.url}${productCanonicals[slug]}`
        : `${SITE_CONFIG.url}/products/${slug}`,
    },
    openGraph: {
      title: `${product.fullName} | Best Roofing Now Charlotte`,
      description: product.description,
      url: `${SITE_CONFIG.url}/products/${slug}`,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${product.fullName} in Charlotte NC - Best Roofing Now`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.fullName} | Best Roofing Now Charlotte`,
      description: product.description,
      images: [ogImage],
    },
  };
}

// Generate FAQs for each product
function getProductFAQs(product: typeof SHINGLE_PRODUCTS[0]) {
  return [
    {
      question: `How much does ${product.fullName} cost installed?`,
      answer: `${product.name} typically costs ${product.priceRange} installed in Charlotte. Final pricing depends on roof size, complexity, and any repairs needed. Contact us for a free, detailed estimate.`,
    },
    {
      question: `What warranty comes with ${product.name}?`,
      answer: `${product.name} includes a ${product.warranty} warranty from ${product.brandName}. As a certified contractor, we can offer enhanced warranty options. Our workmanship warranty is included with every installation.`,
    },
    {
      question: `What wind rating does ${product.name} have?`,
      answer: `${product.name} is rated for winds up to ${product.windRating}. This makes it an excellent choice for Charlotte's occasional severe weather, including thunderstorms and the remnants of tropical systems.`,
    },
    {
      question: `Is ${product.name} a good choice for Charlotte homes?`,
      answer: `${product.bestFor}. Charlotte's humid subtropical climate makes quality shingles essential, and ${product.name} is designed to perform well in these conditions.`,
    },
    {
      question: `What colors are available for ${product.name}?`,
      answer: `${product.name} is available in ${product.colors.length} colors including ${product.colors.slice(0, 3).join(', ')}, and more. We can show you color samples during your free consultation.`,
    },
  ];
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = SHINGLE_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const brand = ROOFING_BRANDS.find((b) => b.slug === product.brand);
  const faqs = getProductFAQs(product);
  const relatedProducts = SHINGLE_PRODUCTS.filter(
    (p) => p.brand === product.brand && p.slug !== product.slug
  ).slice(0, 3);
  const otherBrandProducts = SHINGLE_PRODUCTS.filter(
    (p) => p.brand !== product.brand
  ).slice(0, 3);

  const pageUrl = `${SITE_CONFIG.url}/products/${slug}`;

  return (
    <>
      <WebPageSchema
        name={`${product.fullName} | ${product.brandName} Shingles Charlotte NC`}
        description={product.description}
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Products', url: `${SITE_CONFIG.url}/products` },
          { name: product.brandName, url: `${SITE_CONFIG.url}/brands/${product.brand}` },
          { name: product.name, url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Products', url: `${SITE_CONFIG.url}/products` },
          { name: product.brandName, url: `${SITE_CONFIG.url}/brands/${product.brand}` },
          { name: product.name, url: pageUrl },
        ]}
      />
      <ProductSchema product={product} />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/materials/asphalt-shingles' },
              { label: product.brandName, href: `/brands/${product.brand}` },
              { label: product.name },
            ]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-accent/20 px-3 py-1 rounded-full text-sm font-semibold">
                {product.brandName}
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                {product.windRating} Wind Rating
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {product.fullName}
            </h1>
            <p className="text-xl text-accent font-semibold mb-4">{product.tagline}</p>
            <p className="text-xl text-white/90 mb-8">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <EstimateButton
                variant="accent"
                className="btn"
              >
                Get Free Instant Estimate
              </EstimateButton>
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-white text-primary hover:bg-light"
              >
                <Phone className="w-5 h-5" />
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Specs */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-sm text-gray uppercase tracking-wide mb-1">Warranty</div>
              <div className="text-xl font-bold text-dark">{product.warranty}</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Wind className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-sm text-gray uppercase tracking-wide mb-1">Wind Rating</div>
              <div className="text-xl font-bold text-dark">{product.windRating}</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <DollarSign className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-sm text-gray uppercase tracking-wide mb-1">Price Range</div>
              <div className="text-xl font-bold text-dark">{product.priceRange}</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Palette className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-sm text-gray uppercase tracking-wide mb-1">Colors</div>
              <div className="text-xl font-bold text-dark">{product.colors.length}+ Options</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                {product.name} Features
              </h2>
              <ul className="space-y-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-dark">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
                <h3 className="font-bold text-primary mb-2">Best For:</h3>
                <p className="text-gray">{product.bestFor}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Available Colors</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {product.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-dark"
                  >
                    {color}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray mb-6">
                Color availability may vary. We can bring samples to your home for accurate color matching.
              </p>
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn btn-primary w-full"
              >
                <Phone className="w-5 h-5" />
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About the Brand */}
      {brand && (
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">
                About {brand.name}
              </h2>
              <p className="text-gray text-lg mb-6">{brand.description}</p>
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-sm text-gray">Our Certification:</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {brand.certificationLevel}
                </span>
              </div>
              <Link
                href={`/brands/${product.brand}`}
                className="btn btn-outline"
              >
                Learn More About {brand.name}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Why Install {product.name} with Best Roofing Now?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Certified Installers</h3>
              <p className="text-gray">
                As a {brand?.certificationLevel}, our crews are factory-trained on proper
                {product.brandName} installation techniques.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Enhanced Warranties</h3>
              <p className="text-gray">
                Our certification unlocks enhanced warranty options not available through
                uncertified contractors.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">5-Star Service</h3>
              <p className="text-gray">
                Our 5-star Google rating reflects our commitment to quality installation
                and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={faqs}
        title={`${product.name} FAQs`}
        subtitle={`Common questions about ${product.fullName}`}
      />

      {/* Related Products from Same Brand */}
      {relatedProducts.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Other {product.brandName} Products
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedProducts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="card hover:shadow-xl transition group"
                >
                  <span className="text-xs text-accent font-semibold">{p.brandName}</span>
                  <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition">
                    {p.name}
                  </h3>
                  <p className="text-gray text-sm mb-3">{p.tagline}</p>
                  <div className="flex items-center gap-4 text-sm text-gray">
                    <span>{p.windRating}</span>
                    <span>{p.warranty}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold mt-3">
                    View Product
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compare Other Brands */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Compare Other Brands
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {otherBrandProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="card hover:shadow-xl transition group"
              >
                <span className="text-xs text-accent font-semibold">{p.brandName}</span>
                <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition">
                  {p.name}
                </h3>
                <p className="text-gray text-sm mb-3">{p.tagline}</p>
                <div className="text-sm font-semibold text-dark">{p.priceRange}</div>
                <div className="flex items-center gap-2 text-primary font-semibold mt-3">
                  View Product
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/materials/asphalt-shingles" className="btn btn-outline">
              View All Shingle Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a {product.name} Roof?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free quote for {product.fullName} installation from Charlotte&apos;s
            certified {product.brandName} contractors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-accent hover:bg-light text-lg px-8"
            >
              <Phone className="w-5 h-5" />
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

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <DirectoryCitations pageType="products" maxLinks={3} variant="inline" title="Certified Installer" />
          </div>
        </div>
      </section>
    </>
  );
}
