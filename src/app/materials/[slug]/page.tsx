import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, XCircle, Phone, Clock, DollarSign, Home, ArrowRight, Star, Award, Shield, Wind, Zap, Wrench, Palette, MapPin, TrendingUp, Flame, Calendar } from 'lucide-react';
import { SITE_CONFIG, ROOFING_MATERIALS, ROOFING_BRANDS, SHINGLE_PRODUCTS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { FAQ } from '@/components/sections/FAQ';
import { EstimateButton } from '@/components/estimate';
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from '@/components/seo/SchemaMarkup';

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

  const ogImage = 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png';

  return {
    title: `${material.name} Charlotte NC | Cost, Pros & Cons, Installation | Best Roofing Now`,
    description: `${material.name} in Charlotte NC: ${material.costRange} installed. ${material.lifespan} lifespan. ${material.description} Get a free estimate today!`,
    keywords: [...material.keywords, `${material.shortName.toLowerCase()} roof Charlotte`, `${material.shortName.toLowerCase()} roofing contractor`],
    alternates: {
      canonical: `${SITE_CONFIG.url}/materials/${slug}`,
    },
    openGraph: {
      title: `${material.name} | Best Roofing Now Charlotte`,
      description: material.description,
      url: `${SITE_CONFIG.url}/materials/${slug}`,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${material.name} roofing in Charlotte NC - Best Roofing Now`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${material.name} | Best Roofing Now Charlotte`,
      description: material.description,
      images: [ogImage],
    },
  };
}

// Generate FAQs for each material - enhanced with more questions
function getMaterialFAQs(material: typeof ROOFING_MATERIALS[0]) {
  const baseFaqs = [
    {
      question: `How much does ${material.name.toLowerCase()} cost in Charlotte?`,
      answer: `${material.name} typically costs ${material.costRange} in the Charlotte area. For an average 2,000 sq ft roof, expect to pay ${material.avgCost2000sqft || 'varies based on specifics'}. The exact price depends on your roof size, complexity, pitch, and any additional work needed. Contact us for a free, detailed estimate.`,
    },
    {
      question: `How long does ${material.name.toLowerCase()} last?`,
      answer: `${material.name} has an expected lifespan of ${material.lifespan} when properly installed and maintained. Charlotte's humid subtropical climate with hot summers and occasional severe storms can affect longevity, which is why professional installation by certified contractors is crucial.`,
    },
    {
      question: `Is ${material.name.toLowerCase()} a good choice for Charlotte homes?`,
      answer: `${material.charlotteConsiderations || `${material.name} is ${material.bestFor.toLowerCase()}. Charlotte's climate with hot summers, heavy rainfall, and occasional severe storms makes quality roofing essential. We can help determine if this material is right for your specific situation.`}`,
    },
    {
      question: `What are the pros and cons of ${material.name.toLowerCase()}?`,
      answer: `Pros include: ${material.benefits.slice(0, 3).join(', ')}. ${material.cons ? `Considerations include: ${material.cons.slice(0, 2).join(', ')}.` : ''} Our experts can help you weigh these factors for your specific situation.`,
    },
    {
      question: `How long does ${material.name.toLowerCase()} installation take?`,
      answer: `${material.name} installation typically takes ${material.installationTime || '2-5 days for an average home'}. The exact timeline depends on roof size, complexity, weather conditions, and any necessary repairs to the underlying structure.`,
    },
    {
      question: `What maintenance does ${material.name.toLowerCase()} require?`,
      answer: `${material.maintenanceNeeds || `Regular maintenance includes annual inspections, debris removal, and addressing any issues promptly. Proper maintenance can significantly extend your roof's lifespan.`}`,
    },
    {
      question: `Do you offer financing for ${material.name.toLowerCase()} installation?`,
      answer: `Yes! We offer flexible financing options for all roofing materials, including ${material.name.toLowerCase()}. Get the roof you want with affordable monthly payments. Ask about our 0% interest options for qualified buyers.`,
    },
    {
      question: `What warranty comes with ${material.name.toLowerCase()}?`,
      answer: `${material.warrantyInfo || `Warranty coverage varies by manufacturer and product line. Most ${material.name.toLowerCase()} products come with manufacturer warranties, plus our workmanship warranty. We'll explain all warranty options during your consultation.`}`,
    },
  ];

  return baseFaqs;
}

export default async function MaterialPage({ params }: MaterialPageProps) {
  const { slug } = await params;
  const material = ROOFING_MATERIALS.find((m) => m.slug === slug);

  if (!material) {
    notFound();
  }

  const faqs = getMaterialFAQs(material);
  const otherMaterials = ROOFING_MATERIALS.filter((m) => m.slug !== slug).slice(0, 3);
  const pageUrl = `${SITE_CONFIG.url}/materials/${slug}`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name={`${material.name} Charlotte NC | Best Roofing Now`}
        description={material.description}
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Materials', url: `${SITE_CONFIG.url}/materials` },
          { name: material.shortName, url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Materials', url: `${SITE_CONFIG.url}/materials` },
          { name: material.shortName, url: pageUrl },
        ]}
      />
      <FAQSchema faqs={faqs} />

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
              {material.name} in Charlotte NC
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {material.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm text-white/70">Lifespan</span>
                </div>
                <div className="font-bold">{material.lifespan}</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm text-white/70">Cost/sq ft</span>
                </div>
                <div className="font-bold">{material.costRange.split(' ')[0]}</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Flame className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm text-white/70">Fire Rating</span>
                </div>
                <div className="font-bold">{material.fireRating?.split(' ')[0] || 'Class A'}</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Wind className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm text-white/70">Wind Rating</span>
                </div>
                <div className="font-bold">{material.windResistance?.split(' ').slice(0, 3).join(' ') || 'High'}</div>
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

      {/* About This Material - Long Description */}
      {material.longDescription && (
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">
                About {material.name}
              </h2>
              <p className="text-lg text-gray leading-relaxed">
                {material.longDescription}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Pros and Cons */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Pros & Cons of {material.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pros */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-green-600 mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" aria-hidden="true" />
                Advantages
              </h3>
              <ul className="space-y-4">
                {material.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-dark">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-orange-600 mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6" aria-hidden="true" />
                Considerations
              </h3>
              <ul className="space-y-4">
                {(material.cons || []).map((con, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-dark">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {material.name} Specifications & Details
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-light rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-dark">Lifespan</h3>
              </div>
              <p className="text-gray">{material.lifespan}</p>
            </div>

            <div className="bg-light rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-dark">Cost (Installed)</h3>
              </div>
              <p className="text-gray">{material.costRange}</p>
              {material.avgCost2000sqft && (
                <p className="text-sm text-gray mt-1">~{material.avgCost2000sqft} for 2,000 sq ft</p>
              )}
            </div>

            <div className="bg-light rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-dark">Installation Time</h3>
              </div>
              <p className="text-gray">{material.installationTime || '2-5 days typical'}</p>
            </div>

            <div className="bg-light rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-dark">Maintenance</h3>
              </div>
              <p className="text-gray text-sm">{material.maintenanceNeeds || 'Annual inspection recommended'}</p>
            </div>

            <div className="bg-light rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-dark">Energy Efficiency</h3>
              </div>
              <p className="text-gray text-sm">{material.energyEfficiency || 'Varies by color and product'}</p>
            </div>

            <div className="bg-light rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-dark">Warranty</h3>
              </div>
              <p className="text-gray text-sm">{material.warrantyInfo || 'Manufacturer + workmanship warranty'}</p>
            </div>

            <div className="bg-light rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Flame className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-dark">Fire Rating</h3>
              </div>
              <p className="text-gray">{material.fireRating || 'Class A available'}</p>
            </div>

            <div className="bg-light rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Wind className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-dark">Wind Resistance</h3>
              </div>
              <p className="text-gray">{material.windResistance || 'High wind rated options available'}</p>
            </div>

            <div className="bg-light rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-dark">ROI / Resale Value</h3>
              </div>
              <p className="text-gray">{material.roiValue || 'Increases home value'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Colors */}
      {material.popularColors && material.popularColors.length > 0 && (
        <section className="section bg-light">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center flex items-center justify-center gap-3">
                <Palette className="w-8 h-8" aria-hidden="true" />
                Popular {material.shortName} Colors
              </h2>
              <p className="text-gray text-center mb-8">
                Choose from a wide variety of colors to complement your home&apos;s exterior.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {material.popularColors.map((color, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white rounded-full shadow-sm text-dark font-medium"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Charlotte-Specific Section */}
      {material.charlotteConsiderations && (
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {material.name} in Charlotte, NC
                  </h2>
                  <p className="text-gray text-lg leading-relaxed">
                    {material.charlotteConsiderations}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Best For Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Best For
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Home className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <p className="text-xl text-dark">{material.bestFor}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Why Choose Best Roofing Now for Your {material.shortName} Roof?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light rounded-xl p-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Certified Experts</h3>
              <p className="text-gray">
                Our installers are certified by top manufacturers and have years of experience with {material.name.toLowerCase()},
                ensuring your roof is installed correctly the first time.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Premium Materials</h3>
              <p className="text-gray">
                We source only the highest quality {material.name.toLowerCase()} from trusted manufacturers,
                backed by industry-leading warranties.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Fair, Transparent Pricing</h3>
              <p className="text-gray">
                Get a detailed, written estimate with no hidden fees.
                We offer flexible financing options to fit your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturers Section - For Asphalt Shingles */}
      {material.slug === 'asphalt-shingles' && (
        <section className="section bg-light">
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
                  <div key={brand.slug} className="bg-white rounded-2xl p-8 shadow-md">
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
                          className="bg-light rounded-xl p-5 hover:shadow-lg transition group"
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
                <div className="flex gap-4 text-sm text-gray mb-3">
                  <span>{m.lifespan}</span>
                  <span>|</span>
                  <span>{m.costRange.split(' ')[0]}</span>
                </div>
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
            Get a free, no-obligation estimate for {material.name.toLowerCase()} installation in Charlotte.
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

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <DirectoryCitations pageType="default" maxLinks={3} variant="inline" title="Certified Installer" />
          </div>
        </div>
      </section>
    </>
  );
}
