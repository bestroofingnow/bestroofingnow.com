import { Metadata } from 'next';
import Link from 'next/link';
import {
  Award,
  CheckCircle,
  Phone,
  ArrowRight,
  DollarSign,
  Shield,
  TrendingUp,
} from 'lucide-react';
import { SEOImage } from '@/components/ui/SEOImage';
import { CTASection } from '@/components/sections/CTASection';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  SpeakableContentBlocks,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  FeaturedSnippetListAnswerSchema,
  FreeInspectionOfferSchema,
} from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

const PAGE_URL = `${SITE_CONFIG.url}/asphalt-shingle-cost-by-brand-charlotte-nc`;

export const metadata: Metadata = {
  // New 2026-05-16 — May 11 priority #10 supporting article. The pillar
  // /asphalt-shingle-roof-cost covers cost-by-size and cost-by-type but doesn't
  // compare brands. Existing brand pages (/gaf-roofing-charlotte-nc, etc.) cover
  // features per brand, not a side-by-side cost comparison across brands. This
  // page fills the "asphalt shingle cost by brand" search-intent gap without
  // cannibalizing the pillar or the brand pages.
  title: 'Asphalt Shingle Cost by Brand Charlotte NC (2026)',
  description:
    'GAF vs CertainTeed vs Owens Corning vs Atlas vs Malarkey asphalt shingle cost in Charlotte NC (2026).',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Asphalt Shingle Cost by Brand Charlotte NC (2026)',
    description:
      'Side-by-side 2026 pricing for the five major asphalt shingle brands in Charlotte NC — material cost, installed cost, and warranty.',
    url: PAGE_URL,
    type: 'article',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Asphalt shingle brands in Charlotte NC' }],
  },
};

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Asphalt Shingle Cost by Brand', url: PAGE_URL },
];

const SUMMARY_QUESTION = 'How much does asphalt shingle roofing cost by brand in Charlotte NC?';
const SUMMARY_ANSWER =
  "2026 installed asphalt shingle cost in Charlotte NC by brand (2,000 sq ft home, architectural-grade): GAF Timberline HDZ $9,800–$13,500; CertainTeed Landmark $10,200–$14,000; Owens Corning Duration $9,500–$13,200; Atlas Pinnacle Pristine $9,200–$12,800; Malarkey Vista AR $9,800–$13,400. Material cost ranges $1.20–$1.85 per square foot before labor. All five brands carry 25–50 year limited warranties and 110–130 MPH wind ratings. Best Roofing Now is certified for installation of GAF (Master Elite), CertainTeed (SELECT ShingleMaster), and Owens Corning (Platinum Preferred) in Charlotte NC.";

interface BrandRow {
  brand: string;
  product: string;
  materialCostPerSqFt: string;
  installed2000: string;
  warranty: string;
  windRating: string;
  certification: string;
  href: string;
  notes: string;
}

const brandComparison: BrandRow[] = [
  {
    brand: 'GAF',
    product: 'Timberline HDZ',
    materialCostPerSqFt: '$1.30–$1.75',
    installed2000: '$9,800–$13,500',
    warranty: 'Lifetime Limited (50 yr)',
    windRating: '130 MPH (LayerLock)',
    certification: 'Master Elite (top 3% of US installers)',
    href: '/gaf-timberline-shingles-charlotte-nc',
    notes: 'Best-selling architectural shingle in the US. WindProven Limited Wind Warranty has no maximum wind speed cap.',
  },
  {
    brand: 'CertainTeed',
    product: 'Landmark',
    materialCostPerSqFt: '$1.40–$1.85',
    installed2000: '$10,200–$14,000',
    warranty: 'Lifetime Limited (transferable)',
    windRating: '110 MPH (130 with starter + ridge)',
    certification: 'SELECT ShingleMaster (top 1% of US installers)',
    href: '/certainteed-shingles-charlotte-nc',
    notes: 'StreakFighter algae resistance is standard. Premium pricing offset by transferable warranty (helps resale).',
  },
  {
    brand: 'Owens Corning',
    product: 'Duration / Duration FLEX',
    materialCostPerSqFt: '$1.25–$1.70',
    installed2000: '$9,500–$13,200',
    warranty: 'Lifetime Limited (50 yr)',
    windRating: '130 MPH (SureNail Technology)',
    certification: 'Platinum Preferred (top 1% of US installers)',
    href: '/owens-corning-roofing-charlotte-nc',
    notes: 'SureNail nailing zone is the industry\'s most reliable for high-wind installs. Duration FLEX adds Class 4 impact for hail.',
  },
  {
    brand: 'Atlas',
    product: 'Pinnacle Pristine',
    materialCostPerSqFt: '$1.20–$1.65',
    installed2000: '$9,200–$12,800',
    warranty: 'Lifetime Limited (50 yr)',
    windRating: '130 MPH',
    certification: 'Atlas Pro Plus',
    href: '/asphalt-shingle-roofing-charlotte-nc',
    notes: '3M Scotchgard algae resistance built into granules. Strong value pricing — typically 5–8% below GAF/CertainTeed.',
  },
  {
    brand: 'Malarkey',
    product: 'Vista AR / Legacy',
    materialCostPerSqFt: '$1.35–$1.80',
    installed2000: '$9,800–$13,400',
    warranty: 'Lifetime Limited',
    windRating: '110 MPH (Vista) / 130 MPH (Legacy)',
    certification: 'Emerald Pro',
    href: '/asphalt-shingle-roofing-charlotte-nc',
    notes: 'NEX polymer-modified asphalt — superior to standard styrene-butadiene. Class 4 impact-resistant options available.',
  },
];

const followUpFAQs = [
  {
    question: 'Which asphalt shingle brand is the most affordable in Charlotte NC?',
    answer:
      'Atlas Pinnacle Pristine is typically the most affordable major architectural shingle in Charlotte NC at $1.20–$1.65/sq ft material cost ($9,200–$12,800 installed on a 2,000 sq ft home). Owens Corning Duration is close behind at $1.25–$1.70/sq ft. Atlas pricing is generally 5–8% below GAF and CertainTeed for comparable Lifetime Limited / 130 MPH wind warranty performance.',
  },
  {
    question: 'Is the price difference between GAF and CertainTeed worth it in Charlotte?',
    answer:
      'For most Charlotte NC homeowners, GAF Timberline HDZ and CertainTeed Landmark perform similarly — both are Lifetime Limited / 130 MPH-rated architectural shingles. CertainTeed costs about 4–7% more (~$300–$500 on a 2,000 sq ft roof). The premium can be worth it for: (1) transferable warranty (helps resale), (2) StreakFighter algae resistance is standard rather than upgrade, (3) SELECT ShingleMaster installer certification is held by only the top 1% of US contractors. For pure budget value, GAF Master Elite-installed Timberline HDZ is the better choice in Charlotte.',
  },
  {
    question: 'Does Best Roofing Now install all five brands in Charlotte NC?',
    answer:
      'Yes — Best Roofing Now installs GAF, CertainTeed, Owens Corning, Atlas, and Malarkey asphalt shingles across Charlotte NC and the Lake Norman region. We hold three top-tier manufacturer certifications: GAF Master Elite (top 3% of US installers), CertainTeed SELECT ShingleMaster (top 1%), and Owens Corning Platinum Preferred (top 1%). Holding the top certification for all three premium brands means we can quote any brand without bias and recommend based on your home and budget.',
  },
  {
    question: 'Which brand has the best warranty for Charlotte NC homes?',
    answer:
      'GAF and CertainTeed lead on warranty in Charlotte NC. GAF Golden Pledge (Master Elite installer + System Plus) gives 25-year non-prorated coverage with 25-year workmanship guarantee. CertainTeed SureStart Plus (SELECT ShingleMaster installer + Integrity Roof System) is comparable. Both are transferable. Owens Corning Platinum Protection requires Platinum Preferred installer (Best Roofing Now qualifies) and similarly extends manufacturer coverage. For pure warranty resale value, CertainTeed has the edge with fully transferable Lifetime Limited.',
  },
  {
    question: 'Are premium designer asphalt shingles worth the extra cost over architectural?',
    answer:
      'Designer asphalt shingles (GAF Grand Sequoia/Glenwood, CertainTeed Presidential/Grand Manor, OC Berkshire/Woodmoor) cost $7–$12/sq ft installed — roughly 40–80% more than standard architectural. They\'re worth it in: (1) high-end Charlotte neighborhoods (Myers Park, Eastover, SouthPark, Dilworth) where curb appeal directly affects resale; (2) historic homes where slate or shake aesthetic is required by HOA; (3) homes where slate or shake is desired but weight or budget rules out the real thing. For most homes, standard architectural delivers 85%+ of the visual impact at 50–60% of the cost.',
  },
  {
    question: 'How does Charlotte NC pricing compare to national averages by brand?',
    answer:
      'Charlotte NC asphalt shingle pricing tracks national averages closely — within 3–5% in either direction. Local factors that affect pricing: (1) tear-off pricing is competitive due to a large pool of licensed roofers; (2) Mecklenburg County permit fees add $150–$400 to total project; (3) labor rates are slightly below the national average; (4) hail and storm season demand (April–August) can push pricing 5–10% higher than off-season. Off-season (November–February) is the cheapest time to schedule a reroof in Charlotte NC for any brand.',
  },
];

export default function AsphaltShingleCostByBrandPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema
        name="Asphalt Shingle Cost by Brand Charlotte NC (2026)"
        description="Side-by-side 2026 pricing for the five major asphalt shingle brands in Charlotte NC."
        url={PAGE_URL}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FAQSchema faqs={followUpFAQs} />
      <FeaturedSnippetListAnswerSchema
        question={SUMMARY_QUESTION}
        directAnswer={SUMMARY_ANSWER}
        items={brandComparison.map((b) => `${b.brand} ${b.product}: ${b.installed2000} installed on a 2,000 sq ft Charlotte NC home`)}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />
      <SpeakableContentBlocks city="Charlotte" includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Asphalt Shingle Cost by Brand Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Asphalt shingle brand comparison for Charlotte NC homes" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/80 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">GAF Master Elite · CT SELECT · OC Platinum</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Asphalt Shingle Cost by Brand
              <br className="hidden md:block" />
              <span className="text-amber-200">Charlotte NC · 2026</span>
            </h1>
            <p className="speakable-intro text-xl md:text-2xl text-white/90 mb-6">
              GAF vs CertainTeed vs Owens Corning vs Atlas vs Malarkey — side-by-side 2026 pricing.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Material cost per square foot, installed total on a 2,000 sq ft Charlotte home,
              warranty terms, wind rating, and installer certification — for the five major
              asphalt shingle brands. For overall cost-by-size and shingle-type pricing, see the
              {' '}
              <Link href="/asphalt-shingle-roof-cost" className="underline">asphalt shingle cost pillar</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<CheckCircle className="w-5 h-5" aria-hidden="true" />}>
                Free Multi-Brand Quote
              </Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Direct-Answer Summary */}
      <section className="bg-light py-12 border-b border-gray-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-2">Direct Answer</p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{SUMMARY_QUESTION}</h2>
            <p className="speakable-answer text-gray text-lg leading-relaxed">{SUMMARY_ANSWER}</p>
          </div>
        </div>
      </section>

      {/* Brand Comparison Table */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">5-Brand Cost & Spec Comparison</h2>
              <p className="text-gray text-lg">2026 Charlotte NC pricing. All figures are typical installed cost on a 2,000 sq ft home.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-light rounded-xl overflow-hidden border border-gray-200">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Brand</th>
                    <th className="px-4 py-3 text-left font-semibold">Flagship Product</th>
                    <th className="px-4 py-3 text-left font-semibold">Material $/sq ft</th>
                    <th className="px-4 py-3 text-left font-semibold">Installed 2,000 sq ft</th>
                    <th className="px-4 py-3 text-left font-semibold">Warranty</th>
                    <th className="px-4 py-3 text-left font-semibold">Wind Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {brandComparison.map((b, i) => (
                    <tr key={b.brand} className={i % 2 === 0 ? 'bg-white' : ''}>
                      <td className="px-4 py-3 font-bold text-primary">
                        <Link href={b.href} className="hover:underline">{b.brand}</Link>
                      </td>
                      <td className="px-4 py-3 text-dark">{b.product}</td>
                      <td className="px-4 py-3 text-dark">{b.materialCostPerSqFt}</td>
                      <td className="px-4 py-3 font-semibold text-emerald-700">{b.installed2000}</td>
                      <td className="px-4 py-3 text-gray text-sm">{b.warranty}</td>
                      <td className="px-4 py-3 text-gray text-sm">{b.windRating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray text-sm mt-4 text-center">All five brands carry 25–50 year limited warranties. Pricing reflects 2026 Charlotte NC market with Best Roofing Now manufacturer certifications applied.</p>
          </div>
        </div>
      </section>

      {/* Per-Brand Deep Dive */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Per-Brand Cost & Strategy</h2>
              <p className="text-gray text-lg">Where each brand wins and where it doesn&apos;t.</p>
            </div>
            <div className="space-y-6">
              {brandComparison.map((b) => (
                <article key={b.brand} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-1">{b.brand} — {b.product}</h3>
                      <p className="text-sm text-gray">{b.certification}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-emerald-700">{b.installed2000}</p>
                      <p className="text-xs text-gray">installed · 2,000 sq ft Charlotte NC</p>
                    </div>
                  </div>
                  <p className="text-gray leading-relaxed mb-3">{b.notes}</p>
                  <div className="grid sm:grid-cols-3 gap-3 text-sm mt-4 pt-4 border-t border-gray-100">
                    <div><span className="font-semibold text-dark">Material:</span> <span className="text-gray">{b.materialCostPerSqFt}/sq ft</span></div>
                    <div><span className="font-semibold text-dark">Warranty:</span> <span className="text-gray">{b.warranty}</span></div>
                    <div><span className="font-semibold text-dark">Wind:</span> <span className="text-gray">{b.windRating}</span></div>
                  </div>
                  <Link href={b.href} className="inline-flex items-center gap-1 text-primary font-semibold hover:underline mt-4">
                    See full {b.brand} brand page <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Related Cost Guides</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/asphalt-shingle-roof-cost" className="bg-light rounded-xl p-5 border border-gray-100 hover:border-primary transition-colors">
                <DollarSign className="w-6 h-6 text-primary mb-2" aria-hidden="true" />
                <h3 className="font-bold text-primary mb-1">Asphalt Shingle Cost Pillar</h3>
                <p className="text-gray text-sm">Cost per sq ft, by home size, and by shingle type (3-tab vs architectural vs designer).</p>
              </Link>
              <Link href="/architectural-vs-3-tab-shingles-charlotte-nc" className="bg-light rounded-xl p-5 border border-gray-100 hover:border-primary transition-colors">
                <Shield className="w-6 h-6 text-primary mb-2" aria-hidden="true" />
                <h3 className="font-bold text-primary mb-1">3-Tab vs Architectural</h3>
                <p className="text-gray text-sm">Feature and lifespan comparison between the two main asphalt shingle types.</p>
              </Link>
              <Link href="/shingle-vs-metal-roof-cost" className="bg-light rounded-xl p-5 border border-gray-100 hover:border-primary transition-colors">
                <TrendingUp className="w-6 h-6 text-primary mb-2" aria-hidden="true" />
                <h3 className="font-bold text-primary mb-1">Shingle vs Metal Cost</h3>
                <p className="text-gray text-sm">Lifetime cost comparison between asphalt shingles and metal roofing.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Asphalt Shingle Brand Cost FAQs</h2>
            </div>
            <div className="space-y-4">
              {followUpFAQs.map((faq) => (
                <details key={faq.question} className="bg-white rounded-xl p-6 border border-gray-100 group">
                  <summary className="font-bold text-primary cursor-pointer flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <ArrowRight className="w-5 h-5 flex-shrink-0 group-open:rotate-90 transition-transform" aria-hidden="true" />
                  </summary>
                  <p className="text-gray text-sm leading-relaxed mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Free Multi-Brand Asphalt Shingle Quote"
        subtitle="One inspection, side-by-side pricing for GAF, CertainTeed, Owens Corning, Atlas, and Malarkey — with our top-tier manufacturer certifications applied."
        placement="shingle-brand-comparison"
      />
    </>
  );
}
