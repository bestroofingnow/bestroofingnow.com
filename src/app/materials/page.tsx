import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, Clock, DollarSign, HelpCircle, Home, Layers, Zap, Building2 } from 'lucide-react';
import { SITE_CONFIG, ROOFING_MATERIALS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import {
  BreadcrumbSchema,
  WebPageSchema,
  CollectionPageSchema,
  FAQSchema,
  SpeakableContentBlocks,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Roofing Materials Guide | Charlotte NC & Lake Norman',
  description:
    'Compare asphalt, metal, tile, slate, cedar shake, synthetic, and flat-roof materials for Charlotte NC homes. Lifespan, cost per square foot, Piedmont climate suitability.',
  keywords: [
    'roofing materials charlotte nc',
    'types of roofing',
    'best roofing material nc',
    'roofing options charlotte',
    'asphalt shingles vs metal',
    'metal vs tile roof',
    'slate roofing charlotte',
    'cedar shake roof nc',
    'synthetic roofing materials',
    'commercial flat roof materials',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/materials`,
  },
  openGraph: {
    title: 'Roofing Materials Guide | Charlotte NC | Best Roofing Now',
    description: 'Compare roofing materials — asphalt, metal, tile, slate, cedar shake, synthetic, and flat-roof systems — with 2026 cost and lifespan data for Charlotte NC.',
    url: `${SITE_CONFIG.url}/materials`,
    type: 'website',
  },
};

const whatYoullFind = [
  'Installed cost per square foot in 2026 dollars (Charlotte market)',
  'Expected lifespan in the Piedmont humid subtropical climate',
  'Manufacturer warranty options and transferability on sale',
  'Fire rating, wind resistance, and impact (hail) performance',
  'Energy efficiency, reflectivity, and Duke Energy rebate eligibility',
  'HOA compatibility and architectural review board guidance',
];

interface UseCase {
  icon: typeof Home;
  title: string;
  primaryMaterial: string;
  rationale: string;
  href: string;
}

const useCaseGuide: UseCase[] = [
  {
    icon: Home,
    title: 'Budget-Friendly Family Home',
    primaryMaterial: 'Architectural Asphalt Shingle',
    rationale: 'Best cost-to-performance ratio: 20–30 year lifespan, $3.50–$5.50/sq ft installed, 130 MPH wind rating, widest color selection, easiest to repair. Covers ~80% of Charlotte residential roofs.',
    href: '/materials/asphalt-shingles',
  },
  {
    icon: Zap,
    title: 'Long-Term Energy Savings',
    primaryMaterial: 'Standing Seam Metal',
    rationale: '40–70 year lifespan, reflects up to 70% of solar energy, cuts cooling costs 20–25%, qualifies for Energy Star credits. Popular on Lake Norman lakefront and custom Charlotte builds.',
    href: '/materials/metal-roofing',
  },
  {
    icon: Layers,
    title: 'Historic or Luxury Home',
    primaryMaterial: 'Slate, Clay/Concrete Tile, or Cedar Shake',
    rationale: 'Authentic aesthetics for Historic Matthews, Historic Davidson, Myers Park, Dilworth, and custom lakefront homes. 50–100+ year lifespans with distinct period-correct profiles.',
    href: '/materials/slate-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Flat/Low-Slope',
    primaryMaterial: 'TPO, EPDM, PVC, or Modified Bitumen',
    rationale: 'NC energy-code compliant single-ply and multi-ply systems for Charlotte commercial, industrial, medical, and retail buildings. See dedicated commercial roofing pages for system-level detail.',
    href: '/services/commercial-roofing',
  },
];

const faqs = [
  { question: 'What is the most popular roofing material in Charlotte NC?', answer: 'Architectural (dimensional) asphalt shingles cover roughly 80% of Charlotte residential roofs. They balance cost ($3.50–$5.50/sq ft installed), curb appeal, 20–30 year lifespan, and wind resistance up to 130 MPH. Metal roofing has grown rapidly over the past decade — especially on Lake Norman lakefront and custom builds — thanks to 40–70 year service life and 20–25% cooling-cost savings in our hot summers.' },
  { question: 'Which roofing material lasts the longest?', answer: 'By expected service life in the Charlotte climate: slate 75–100+ years, clay/concrete tile 50–100 years, copper (standing seam metal) 70+ years, steel/aluminum metal 40–70 years, synthetic composite 40–50 years, cedar shake 25–40 years with maintenance, architectural asphalt 20–30 years. The longest-lasting material is not always the best choice — slate and tile require engineered structural support that many Charlotte homes lack without reinforcement.' },
  { question: 'How much do different roofing materials cost per square foot in Charlotte?', answer: '2026 installed cost ranges: asphalt 3-tab $2.50–$4/sq ft, architectural asphalt $3.50–$5.50/sq ft, impact-resistant Class 4 asphalt $5–$8/sq ft, metal (steel/aluminum) $7–$14/sq ft, standing seam metal $10–$17/sq ft, synthetic composite $9–$14/sq ft, cedar shake $9–$15/sq ft, clay/concrete tile $10–$18/sq ft, copper standing seam $18–$30/sq ft, slate $15–$30/sq ft. Commercial flat systems (TPO, EPDM, PVC) run $5–$13/sq ft.' },
  { question: 'Is metal roofing worth the extra cost over asphalt in Charlotte?', answer: 'Often yes, depending on how long you will own the home. On a 30-year hold: metal ($7–$14/sq ft, 50-year life) avoids one asphalt re-roof cycle, cuts summer cooling 20–25%, qualifies for insurance discounts, and typically returns 85–95% at resale (vs 60–70% for asphalt). On a 5-year hold: asphalt is almost always the better return. We help Lake Norman and Charlotte homeowners model the 10/20/30-year cost curves before deciding.' },
  { question: 'Which roofing materials perform best in Charlotte storms and hail?', answer: 'Class 4 impact-resistant asphalt shingles (UL 2218 rated) withstand 2" hail and are widely available. Steel and aluminum metal panels resist severe wind (140+ MPH on standing seam) but can dent in large hail — dent is cosmetic, not functional. Synthetic composite shingles (DaVinci, Brava) combine Class 4 rating with slate or shake aesthetics. Wood shake and standard asphalt are the most storm-vulnerable; avoid them in the Piedmont hail belt if you expect to file claims.' },
  { question: 'Will my HOA or architectural review board restrict material choice in Charlotte?', answer: 'Yes — most newer Charlotte and Lake Norman HOAs restrict material type and color. Common restrictions: asphalt only (no metal), approved color palette, prohibition on wood shake, and minimum shingle weight/profile. Historic districts (Historic Matthews, Historic Davidson, Dilworth, Fourth Ward) add architectural review requirements for any visible roof change. We confirm HOA specs and submit material samples before ordering.' },
  { question: 'Can I install a different material when replacing my roof?', answer: 'Yes in most cases, but structural engineering may be required. Switching from asphalt to slate or tile almost always requires reinforced framing — existing trusses designed for a 250-lb/square asphalt load cannot support 900–1,200-lb/square slate. Switching asphalt to metal, synthetic, or cedar is typically fine without reinforcement. We evaluate rafter spacing and sheathing condition during our estimate and flag any structural work needed.' },
  { question: 'Which materials qualify for insurance premium discounts in NC?', answer: 'Class 4 impact-resistant materials (UL 2218 rated) typically unlock 10–30% homeowner insurance premium discounts with NC carriers — State Farm, Allstate, USAA, Farm Bureau NC, and others. Qualifying materials include Class 4 asphalt (GAF Armor Shield II, CertainTeed NorthGate, Malarkey Vista, Atlas StormMaster), many steel/stone-coated metal products, synthetic composites, slate, and concrete tile. We provide manufacturer certificates for your agent.' },
];

export default function MaterialsPage() {
  const pageUrl = `${SITE_CONFIG.url}/materials`;

  const items = ROOFING_MATERIALS.map((m) => ({
    name: m.name,
    url: `${SITE_CONFIG.url}/materials/${m.slug}`,
    description: m.description,
  }));

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Materials', url: pageUrl },
        ]}
      />
      <WebPageSchema
        name="Roofing Materials Guide | Charlotte NC & Lake Norman"
        description="Compare asphalt, metal, tile, slate, cedar shake, synthetic, and flat-roof materials for Charlotte NC homes. Lifespan, cost, and Piedmont climate suitability."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Materials', url: pageUrl },
        ]}
      />
      <CollectionPageSchema
        name="Roofing Materials Guide"
        description="Full catalog of roofing materials installed by Best Roofing Now — asphalt, metal, tile, slate, cedar shake, synthetic composites, and commercial flat systems."
        url={pageUrl}
        items={items}
      />
      <FAQSchema faqs={faqs} />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Roofing Materials Guide" />
      <VoiceSearchActionSchema />

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
            <p className="speakable-intro text-xl text-white/90 mb-8">
              Compare every roofing material we install in Charlotte NC and Lake Norman — architectural and Class 4 asphalt, standing seam and stone-coated metal, clay/concrete tile, natural slate, cedar shake, synthetic composites, and commercial flat systems (TPO, EPDM, PVC, modified bitumen). Each material page covers 2026 cost per square foot, expected lifespan in our humid subtropical climate, warranty terms, fire and wind ratings, and energy efficiency.
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

      {/* Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                The roofing material you choose determines how long your roof lasts, how well it handles Charlotte&apos;s heat and storm seasons, and what your home looks like from the street. Architectural asphalt shingles remain the most popular residential option in the Charlotte area because they balance cost, durability, and curb appeal. Metal roofing has gained significant share over the past decade thanks to its 40-70 year lifespan and superior wind resistance. Premium options like slate, tile, and cedar shake serve homeowners who prioritize aesthetics and long-term value.
              </p>
              <p>
                Each material page below covers installed cost per square foot, expected lifespan in our local climate, warranty options, and the specific advantages and trade-offs you should consider. Our team installs all of these materials and can help you weigh the options during a free in-home consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What You&apos;ll Find on Every Material Page</h2>
              <p className="text-gray text-lg">Six data points we cover for every material so you can compare like-for-like.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {whatYoullFind.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use-case Decision Guide */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Material Decision Guide by Use Case</h2>
            <p className="text-gray text-lg">Start with the use case that fits your home — then drill into the specific material page for full detail.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {useCaseGuide.map((useCase) => (
              <Link
                key={useCase.title}
                href={useCase.href}
                className="bg-light rounded-xl p-6 border border-gray-100 hover:shadow-lg transition group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <useCase.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-lg group-hover:text-primary transition">{useCase.title}</h3>
                    <p className="text-xs text-primary font-semibold">Recommended: {useCase.primaryMaterial}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{useCase.rationale}</p>
                <p className="text-primary font-medium text-sm mt-4 group-hover:text-accent">
                  Explore this option →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Compare All Roofing Materials
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Each roofing material has unique advantages. Click any material below for full cost, lifespan, warranty, and Charlotte-specific detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOFING_MATERIALS.map((material) => (
              <Link
                key={material.slug}
                href={`/materials/${material.slug}`}
                className="card bg-white hover:shadow-xl transition group"
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
      <section className="section bg-white">
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

      {/* FAQs */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Choosing a Roofing Material</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Roofing Material FAQs</h2>
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
