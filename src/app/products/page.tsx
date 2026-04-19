import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, Shield, Wind, DollarSign, CheckCircle, HelpCircle, Award, Layers } from 'lucide-react';
import { SITE_CONFIG, SHINGLE_PRODUCTS } from '@/lib/constants';
import {
  BreadcrumbSchema,
  CollectionPageSchema,
  WebPageSchema,
  FAQSchema,
  SpeakableContentBlocks,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'Roofing Shingle Products | GAF, CertainTeed, Owens Corning',
  description:
    'Compare shingle products from GAF, CertainTeed, Owens Corning, Malarkey, and Atlas. Wind ratings, warranties, Class 4 impact options, and 2026 price ranges for Charlotte roofs.',
  keywords: [
    'roofing shingle products charlotte',
    'gaf timberline shingles',
    'certainteed landmark shingles',
    'owens corning duration shingles',
    'malarkey vista shingles',
    'class 4 impact resistant shingles nc',
    'architectural shingles charlotte',
    'designer shingles charlotte',
    'shingle comparison chart',
    'best shingles lake norman',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/products`,
  },
  openGraph: {
    title: 'Roofing Shingle Products | GAF, CertainTeed, Owens Corning | Best Roofing Now',
    description: 'Compare shingle products by brand, wind rating, warranty, and 2026 price range. Architectural, designer, and Class 4 impact-resistant options for Charlotte NC.',
    url: `${SITE_CONFIG.url}/products`,
    type: 'website',
  },
};

const whatYoullFind = [
  'Wind rating, warranty length, and 2026 price range per product (per-square)',
  'Manufacturer certifications held by Best Roofing Now (GAF Master Elite, CertainTeed SELECT, Owens Corning Platinum)',
  'Class 4 impact-resistant options that may qualify for insurance premium discounts',
  'Designer/luxury lines for custom Charlotte and Lake Norman builds',
  'Algae resistance, granule technology, and warranty transferability on sale',
  'Cross-links to matching Charlotte installer pages and cost guides',
];

const decisionTiers = [
  {
    icon: Shield,
    tier: 'Good — Standard Architectural',
    priceBand: '$100–$130 per square',
    description: 'Entry to mid-tier architectural shingles with 130 MPH wind rating and 50-year limited lifetime warranties. The default choice for most Charlotte homes.',
    examples: ['GAF Timberline HDZ', 'CertainTeed Landmark', 'Owens Corning TruDefinition Duration'],
  },
  {
    icon: Award,
    tier: 'Better — Enhanced Architectural',
    priceBand: '$120–$170 per square',
    description: 'Enhanced aesthetics, thicker profile, or improved algae protection. Best value for most Lake Norman homes balancing curb appeal and budget.',
    examples: ['GAF Timberline Ultra HD', 'CertainTeed Landmark Pro', 'Owens Corning Duration Designer'],
  },
  {
    icon: Wind,
    tier: 'Best — Class 4 Impact-Resistant',
    priceBand: '$150–$220 per square',
    description: 'Class 4 (UL 2218) impact-rated — withstands 2" hail in testing. May qualify for 10–30% homeowner insurance premium discounts in NC.',
    examples: ['GAF Armor Shield II', 'CertainTeed NorthGate', 'Malarkey Vista', 'Atlas StormMaster'],
  },
  {
    icon: Layers,
    tier: 'Luxury — Designer/Sculpted',
    priceBand: '$200–$400 per square',
    description: 'Sculpted profiles, heavier weight, unique color blends, and wood-shake or slate-mimicking aesthetics for premium custom homes.',
    examples: ['GAF Camelot II', 'CertainTeed Grand Manor', 'CertainTeed Presidential Shake'],
  },
];

const faqs = [
  { question: 'Which shingle brand is best for Charlotte NC?', answer: 'There is no single "best" brand — GAF, CertainTeed, and Owens Corning all produce excellent architectural shingles proven in the Piedmont climate. The right choice depends on aesthetic preference (color palette, profile), warranty terms, your insurance carrier&apos;s Class 4 discount eligibility, and whether you need the extra hail/wind rating of an impact-resistant line. We hold top-tier installer certifications (GAF Master Elite, CertainTeed SELECT ShingleMaster, Owens Corning Platinum) and will match the product to your specific roof and budget.' },
  { question: 'What is the difference between a 30-year, 50-year, and lifetime shingle?', answer: 'Older 3-tab shingles carried a true 20–30 year warranty. Today most architectural shingles carry a "lifetime limited" warranty — which in NC practice is treated as 50 years for the original homeowner, then pro-rated. The real service life of a quality architectural shingle in the Charlotte climate is typically 20–28 years. Warranty length matters less than warranty structure — full-system warranties (GAF Golden Pledge, CertainTeed SureStart Plus) provide far stronger coverage than standard manufacturer warranties.' },
  { question: 'Are Class 4 impact-resistant shingles worth the cost in Charlotte?', answer: 'For most Charlotte and Lake Norman homeowners: yes. Class 4 shingles cost $30–$90 more per square ($900–$2,700 on a typical home) but commonly unlock 10–30% homeowner insurance premium discounts in NC — which can pay back the upgrade within 5–7 years. They also reduce deductible exposure in a hail claim and extend the roof&apos;s usable lifespan. We recommend Class 4 on any re-roof in the Piedmont hail belt unless cost is the absolute driver.' },
  { question: 'What wind rating do I need on a Charlotte roof?', answer: '110 MPH is the NC building code minimum for most of the Charlotte metro. 130 MPH rated shingles (GAF HDZ, CertainTeed Landmark, Owens Corning Duration) exceed code and are the standard specification. For lakefront Lake Norman homes facing long wind fetch across open water, or Class 4 requirements in hurricane-adjacent areas, we upgrade to 150 MPH products or add 6-nail patterns and enhanced starter-strip spec.' },
  { question: 'How do I choose a shingle color for my Charlotte home?', answer: 'Consider three factors: (1) home architectural style — Charlotte Craftsman and bungalows often look best in Weathered Wood, Charcoal, or Pewter Gray; Colonial and traditional homes pair well with Barkwood, Slate, or Hunter Green; (2) HOA specifications — many Matthews, Davidson, and Waxhaw HOAs restrict palette, so we confirm before ordering; (3) heat performance — dark colors absorb more summer heat. We provide full-size physical samples on every roof and can overlay brand swatches on your home in 3D before you commit.' },
  { question: 'Do you install impact-resistant, designer, or specialty shingles in Charlotte?', answer: 'Yes — we install across the full range from standard architectural to Class 4 impact-resistant to luxury designer sculpted profiles (Camelot II, Grand Manor, Presidential Shake). Custom Charlotte and Lake Norman builds often specify designer shingles for curb appeal, and we have matching underlayment, starter, and ridge cap products to complete the system-warranty requirement.' },
  { question: 'How does shingle product choice affect my total roof replacement cost?', answer: 'Shingle material typically accounts for 20–30% of total installed cost. For a 30-square (3,000 sq ft) Charlotte home: standard architectural adds $3,000–$3,900 to cost; enhanced architectural adds $3,600–$5,100; Class 4 impact-resistant adds $4,500–$6,600; luxury designer adds $6,000–$12,000. Labor, tear-off, underlayment, flashing, ventilation, and decking repairs drive the other 70–80%.' },
  { question: 'Does Best Roofing Now carry manufacturer certifications?', answer: 'Yes. Our top-tier installer certifications include GAF Master Elite (top 2% of US contractors), CertainTeed SELECT ShingleMaster, and Owens Corning Platinum Preferred Contractor. These certifications unlock enhanced full-system warranties (GAF Golden Pledge, CertainTeed 5-Star, Owens Corning Platinum Protection) that cover labor for 25–50 years — significantly stronger than standard manufacturer product warranties.' },
];

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
        description="Compare popular shingle products and specs including wind ratings, warranties, Class 4 impact options, and 2026 price ranges for Charlotte NC and Lake Norman."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Products', url: pageUrl },
        ]}
      />
      <CollectionPageSchema
        name="Roofing Shingle Products"
        description="Product pages for popular shingle lines from leading manufacturers (GAF, CertainTeed, Owens Corning, Malarkey, Atlas)."
        url={pageUrl}
        items={items}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Products', url: pageUrl },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Roofing Shingle Products" />
      <VoiceSearchActionSchema />

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
            <p className="speakable-intro text-xl text-white/90 mb-8">
              Compare architectural, designer, and Class 4 impact-resistant shingle lines from GAF, CertainTeed, Owens Corning, Malarkey, and Atlas — the five manufacturers we are certified to install. Every product card shows wind rating, warranty, and 2026 per-square pricing so you can compare apples to apples before scheduling an estimate.
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

      {/* Intro + What You'll Find */}
      <section className="section bg-white">
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

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">What You&apos;ll Find on These Product Pages</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {whatYoullFind.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-light rounded-lg p-4 border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decision Tiers */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Shingle Decision Tiers</h2>
            <p className="text-gray text-lg">Pick the tier that matches your goals — then drill into specific products below.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {decisionTiers.map((tier) => (
              <div key={tier.tier} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <tier.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-lg">{tier.tier}</h3>
                    <p className="text-xs text-primary font-semibold">{tier.priceBand}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-3">{tier.description}</p>
                <p className="text-xs text-gray-600">
                  <span className="font-semibold text-dark">Representative SKUs:</span> {tier.examples.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products by Brand */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">All Products by Brand</h2>
            <p className="text-gray text-lg">Full product lineup grouped by manufacturer. Each card shows warranty, wind rating, and 2026 price-per-square.</p>
          </div>
          <div className="space-y-10">
            {brandNames.map((brandName) => {
              const products = byBrand[brandName] || [];
              return (
                <section key={brandName}>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {brandName} Shingles
                    <span className="text-sm font-normal text-gray ml-3">({products.length} {products.length === 1 ? 'product' : 'products'})</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {products.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/products/${p.slug}`}
                        className="block bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 border border-gray-100 group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <h4 className="text-lg font-bold text-dark group-hover:text-primary transition">
                              {p.name}
                            </h4>
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

      {/* FAQs */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Choosing the Right Shingle</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Shingle Product FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
