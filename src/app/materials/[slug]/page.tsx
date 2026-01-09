import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, Phone, Clock, DollarSign, Home, ArrowRight, Star, Award, Shield, Wind } from 'lucide-react';
import { SITE_CONFIG, ROOFING_MATERIALS, ROOFING_BRANDS, SHINGLE_PRODUCTS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQ } from '@/components/sections/FAQ';
import { EstimateButton } from '@/components/estimate';

interface MaterialPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ROOFING_MATERIALS.map((material) => ({
    slug: material.slug,
  }));
}

export async function generateMetadata({ params }: MaterialPageProps): Promise<Metadata> {
  const { slug } = await params;
  const material = ROOFING_MATERIALS.find((m) => m.slug === slug);

  if (!material) {
    return { title: 'Material Not Found' };
  }

  return {
    title: `${material.name} | Roofing Materials Charlotte NC | Best Roofing Now`,
    description: `${material.description} Learn about costs, benefits, and installation of ${material.name.toLowerCase()} in Charlotte NC. Free estimates available.`,
    keywords: material.keywords,
    openGraph: {
      title: `${material.name} | Best Roofing Now Charlotte`,
      description: material.description,
      url: `${SITE_CONFIG.url}/materials/${slug}`,
      type: 'article',
    },
  };
}

// Generate FAQs for each material
function getMaterialFAQs(material: typeof ROOFING_MATERIALS[0]) {
  return [
    {
      question: `How much does ${material.name.toLowerCase()} cost in Charlotte?`,
      answer: `${material.name} typically costs ${material.costRange} in the Charlotte area. The exact price depends on your roof size, complexity, and any additional work needed. Contact us for a free, detailed estimate.`,
    },
    {
      question: `How long does ${material.name.toLowerCase()} last?`,
      answer: `${material.name} has an expected lifespan of ${material.lifespan} when properly installed and maintained. Charlotte's climate can affect longevity, which is why professional installation is crucial.`,
    },
    {
      question: `Is ${material.name.toLowerCase()} a good choice for Charlotte homes?`,
      answer: `${material.name} is ${material.bestFor.toLowerCase()}. Charlotte's humid subtropical climate with occasional severe storms makes quality roofing essential. We can help determine if this material is right for your specific situation.`,
    },
    {
      question: `Do you offer financing for ${material.name.toLowerCase()} installation?`,
      answer: `Yes! We offer flexible financing options for all roofing materials, including ${material.name.toLowerCase()}. Get the roof you want with affordable monthly payments. Ask about our 0% interest options.`,
    },
    {
      question: `What warranty comes with ${material.name.toLowerCase()}?`,
      answer: `Warranty coverage varies by manufacturer and product line. Most ${material.name.toLowerCase()} products come with manufacturer warranties of 25-50 years, plus our workmanship warranty. We'll explain all warranty options during your consultation.`,
    },
  ];
}

export default async function MaterialPage({ params }: MaterialPageProps) {
  const { slug } = await params;
  const material = ROOFING_MATERIALS.find((m) => m.slug === slug);

  if (!material) {
    notFound();
  }

  const faqs = getMaterialFAQs(material);
  const otherMaterials = ROOFING_MATERIALS.filter((m) => m.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Materials', href: '/materials' },
              { label: material.shortName },
            ]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {material.name}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {material.description}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" aria-hidden="true" />
                <span><strong>Lifespan:</strong> {material.lifespan}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" aria-hidden="true" />
                <span><strong>Cost:</strong> {material.costRange}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <EstimateButton
                variant="accent"
                className="btn"
              >
                Get Free Instant Estimate
              </EstimateButton>
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

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Benefits of {material.name}
              </h2>
              <ul className="space-y-4">
                {material.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-lg text-dark">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-light rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Home className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span className="font-bold text-primary">Best For:</span>
                </div>
                <p className="text-gray">{material.bestFor}</p>
              </div>
            </div>

            <div className="bg-light rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Quick Facts
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray uppercase tracking-wide mb-1">Expected Lifespan</div>
                  <div className="text-2xl font-bold text-dark">{material.lifespan}</div>
                </div>
                <div>
                  <div className="text-sm text-gray uppercase tracking-wide mb-1">Cost Range (Installed)</div>
                  <div className="text-2xl font-bold text-dark">{material.costRange}</div>
                </div>
                <div>
                  <div className="text-sm text-gray uppercase tracking-wide mb-1">Our Rating</div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray mb-4">
                  Ready to learn more about {material.name.toLowerCase()} for your home?
                </p>
                <a
                  href={`tel:${SITE_CONFIG.phoneClean}`}
                  className="btn btn-primary w-full"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call for Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Why Choose Best Roofing Now for Your {material.shortName} Roof?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Expert Installation</h3>
              <p className="text-gray">
                Our certified installers have years of experience with {material.name.toLowerCase()},
                ensuring your roof is installed correctly the first time.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Quality Materials</h3>
              <p className="text-gray">
                We source only premium materials from trusted manufacturers,
                backed by industry-leading warranties.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Transparent Pricing</h3>
              <p className="text-gray">
                Get a detailed, written estimate with no hidden fees.
                We offer flexible financing to fit your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturers Section - For Asphalt Shingles */}
      {material.slug === 'asphalt-shingles' && (
        <section className="section">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              Top Asphalt Shingle Manufacturers
            </h2>
            <p className="text-lg text-gray text-center mb-12 max-w-3xl mx-auto">
              We install premium shingles from America&apos;s most trusted manufacturers.
              As a certified contractor for multiple brands, we can help you choose the perfect shingle for your home.
            </p>

            <div className="space-y-12">
              {ROOFING_BRANDS.map((brand) => {
                const brandProducts = SHINGLE_PRODUCTS.filter(p => p.brand === brand.slug);
                return (
                  <div key={brand.slug} className="bg-light rounded-2xl p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-primary">{brand.name}</h3>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                            {brand.certificationLevel}
                          </span>
                        </div>
                        <p className="text-accent font-medium mb-3">{brand.tagline}</p>
                        <p className="text-gray">{brand.description}</p>
                      </div>
                      <div className="lg:text-right">
                        <Link
                          href={`/brands/${brand.slug}`}
                          className="btn btn-outline inline-flex"
                        >
                          <Award className="w-4 h-4" aria-hidden="true" />
                          View {brand.name} Page
                        </Link>
                      </div>
                    </div>

                    <h4 className="font-bold text-dark mb-4">Popular {brand.name} Products:</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {brandProducts.map((product) => (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition group"
                        >
                          <h5 className="font-bold text-primary group-hover:text-accent transition mb-2">
                            {product.name}
                          </h5>
                          <p className="text-sm text-gray mb-3">{product.tagline}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                              <Shield className="w-3 h-3" aria-hidden="true" />
                              {product.warranty}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              <Wind className="w-3 h-3" aria-hidden="true" />
                              {product.windRating}
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-primary font-medium group-hover:text-accent">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" aria-hidden="true" />
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h5 className="font-bold text-dark mb-3">Warranty Options:</h5>
                      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {brand.warranties.map((warranty, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            {warranty}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray mb-4">Not sure which shingle is right for your home?</p>
              <Link href="/contact" className="btn btn-primary">
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <FAQ
        faqs={faqs}
        title={`${material.name} FAQs`}
        subtitle={`Common questions about ${material.name.toLowerCase()} in Charlotte`}
      />

      {/* Other Materials */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Explore Other Roofing Materials
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherMaterials.map((m) => (
              <Link
                key={m.slug}
                href={`/materials/${m.slug}`}
                className="card hover:shadow-xl transition group"
              >
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                  {m.name}
                </h3>
                <p className="text-gray text-sm mb-4">{m.description.slice(0, 100)}...</p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/materials" className="btn btn-outline">
              View All Materials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a New {material.shortName} Roof?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for {material.name.toLowerCase()} installation.
            Our experts are ready to help you choose the perfect solution for your home.
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
