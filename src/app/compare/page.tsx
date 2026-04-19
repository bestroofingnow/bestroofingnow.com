import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Scale, Phone, CheckCircle, HelpCircle, DollarSign, Clock, Shield, Home } from 'lucide-react';
import { SITE_CONFIG, ROOFING_COMPARISONS } from '@/lib/constants';
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
  title: 'Roofing Material Comparisons | Side-by-Side | Charlotte NC',
  description:
    'Head-to-head roofing comparisons for Charlotte NC homes — metal vs asphalt, tile vs slate, GAF vs CertainTeed, Class 4 vs standard shingles. Cost, lifespan, and climate fit.',
  keywords: [
    'roofing material comparison charlotte',
    'metal vs shingles',
    'tile vs slate roofing',
    'gaf vs certainteed',
    'asphalt vs metal roof',
    'best roof type nc',
    'roof material side by side',
    'class 4 vs standard shingles',
    'charlotte roofing options',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/compare`,
  },
  openGraph: {
    title: 'Roofing Material Comparisons | Side-by-Side | Best Roofing Now',
    description: 'Head-to-head comparisons of roofing materials, brands, and systems for Charlotte NC and Lake Norman.',
    url: `${SITE_CONFIG.url}/compare`,
    type: 'website',
  },
};

const whatYoullFind = [
  '2026 installed cost ranges per square foot for each side',
  'Expected service life in the Charlotte Piedmont climate',
  'Wind, hail, fire, and energy-efficiency ratings side-by-side',
  'Maintenance demands and frequency per material',
  'Resale value and insurance-discount implications',
  'When the difference matters — and when it is noise',
];

interface ComparisonBucket {
  icon: typeof DollarSign;
  intent: string;
  description: string;
  usefulFor: string;
}

const intentBuckets: ComparisonBucket[] = [
  {
    icon: DollarSign,
    intent: 'Budget-Driven Decisions',
    description: 'Comparisons that surface clear cost deltas between options — where dollars drive the choice more than aesthetics or performance.',
    usefulFor: 'Asphalt vs metal, standard vs Class 4, architectural vs designer, repair vs replace.',
  },
  {
    icon: Clock,
    intent: 'Long-Term Value Decisions',
    description: 'Comparisons where the 20–50 year cost curve matters more than the upfront price — energy savings, replacement cycles, and warranty structure.',
    usefulFor: 'Metal vs asphalt on 30-year hold, slate vs tile lifetime, system-warranty vs product-only warranty.',
  },
  {
    icon: Shield,
    intent: 'Performance & Storm Resistance',
    description: 'Head-to-head on wind resistance, hail impact (UL 2218), and hurricane-remnant performance specific to Piedmont NC exposure.',
    usefulFor: 'Class 4 vs standard shingles, hip vs gable wind, impact-rated metal vs synthetic.',
  },
  {
    icon: Home,
    intent: 'Aesthetic & Architectural Match',
    description: 'Comparisons where style, profile, and HOA compatibility drive the choice — often for historic districts and custom builds.',
    usefulFor: 'Slate vs synthetic slate, cedar shake vs architectural asphalt, standing seam metal vs stone-coated.',
  },
];

const faqs = [
  { question: 'How should I interpret these roofing comparisons?', answer: 'Every comparison has an objective layer (cost, lifespan, wind rating, warranty terms, energy performance) and a subjective layer (aesthetics, HOA compatibility, neighborhood norms). We separate the two explicitly. The objective layer answers "is this choice defensible financially and technically?" The subjective layer answers "is this the right choice for your specific home and situation?" Start by filtering on objective constraints, then let aesthetics and architectural fit decide between the finalists.' },
  { question: 'When does the difference between two materials actually matter?', answer: 'It matters when: (1) the cost delta exceeds 15–20% and impacts your financing; (2) the roof will outlive your ownership of the home (cheaper material may be the right call for a 5-year hold); (3) your insurance carrier offers a meaningful premium discount for the upgrade (Class 4 typically 10–30%); (4) your HOA restricts material type; (5) the roof faces heavy storm exposure (lakefront Lake Norman, tree-canopy-shaded north-facing slopes). It does NOT matter when the cost delta is under $1/sq ft and both options are proven performers in NC.' },
  { question: 'How accurate are the cost figures in these comparisons?', answer: 'Costs are 2026 installed ranges for the Charlotte metro and Lake Norman market — labor, materials, underlayment, flashing, and standard accessories included. Tear-off, decking replacement, and structural work are quoted separately. Ranges reflect typical single-family homes (2,000–3,200 sq ft); lakefront and custom Davidson/Cornelius properties with complex geometries can run 15–25% higher. We refresh these ranges annually. The only way to get a number specific to your home is a free on-site inspection.' },
  { question: 'Can I combine multiple comparisons for a full decision?', answer: 'Yes — that is how most homeowners use this section. Common sequence: (1) metal vs asphalt to decide material family; (2) within asphalt: architectural vs Class 4 to decide tier; (3) within Class 4: GAF vs CertainTeed vs Malarkey for brand; (4) add a warranty comparison (product-only vs full-system) to confirm installation type. Each step narrows your decision by one axis. We can walk through the stack during your free inspection.' },
  { question: 'What criteria are subjective and should not drive cost decisions?', answer: 'Color preference, warranty marketing language ("lifetime" vs "50-year" often mean the same in practice), brand-name prestige beyond certification tier, and perceived neighborhood norms that are not actually HOA-enforced. These are real considerations — but they should not override objective decision criteria. If two options are within 5% on cost, lifespan, and performance, choose the one you will look at happily for 25 years.' },
  { question: 'Do these comparisons apply to commercial roofing decisions?', answer: 'Partially. The decision frameworks transfer — cost vs lifespan, storm performance, warranty structure — but the specific comparisons on this page are residential-focused. For commercial flat and low-slope decisions (TPO vs EPDM vs PVC vs modified bitumen), see our commercial service pages or contact us for a commercial-specific comparison. Commercial decisions add factors like NC energy code compliance, LEED/rebate eligibility, and NDL warranty tier access.' },
  { question: 'Which comparison should I read first?', answer: 'Start with what you already know about your situation. If budget is the primary driver: asphalt vs metal first. If you are in the Piedmont hail belt or filing insurance claims: Class 4 vs standard. If you own a historic or luxury home: slate vs synthetic or cedar vs architectural. If you are re-roofing and not sure where to start at all: read the material-family comparisons on /materials first, then come back here for head-to-head detail on the finalists.' },
];

export default function ComparePage() {
  const pageUrl = `${SITE_CONFIG.url}/compare`;

  const items = ROOFING_COMPARISONS.map((c) => ({
    name: c.title,
    url: `${SITE_CONFIG.url}/compare/${c.slug}`,
    description: c.description,
  }));

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Compare Roofing', url: pageUrl },
        ]}
      />
      <WebPageSchema
        name="Roofing Material Comparisons | Side-by-Side | Charlotte NC"
        description="Head-to-head roofing comparisons for Charlotte NC homes — metal vs asphalt, tile vs slate, GAF vs CertainTeed, Class 4 vs standard shingles."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Compare Roofing', url: pageUrl },
        ]}
      />
      <CollectionPageSchema
        name="Roofing Material Comparisons"
        description="All head-to-head roofing comparisons maintained by Best Roofing Now — materials, brands, tiers, and systems side-by-side with Charlotte NC cost and performance data."
        url={pageUrl}
        items={items}
      />
      <FAQSchema faqs={faqs} />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Roofing Material Comparisons" />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Compare Roofing Materials' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Compare Roofing Materials
            </h1>
            <p className="speakable-intro text-xl text-white/90 mb-8">
              Head-to-head comparisons calibrated for the Charlotte NC and Lake Norman market — metal vs asphalt, tile vs slate, GAF vs CertainTeed, Class 4 vs standard shingles, architectural vs designer. Every comparison shows 2026 installed cost, expected Piedmont-climate lifespan, wind and hail ratings, and when the difference actually matters for your decision.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Talk to a Roofing Expert
            </a>
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Each Comparison Covers</h2>
              <p className="text-gray text-lg">Six criteria we cover on every head-to-head comparison page.</p>
            </div>
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

      {/* Intent Decision Guide */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Start Here by Decision Type</h2>
            <p className="text-gray text-lg">Four decision intents — pick what matters most and we&apos;ll point you to the right comparisons.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {intentBuckets.map((bucket) => (
              <div key={bucket.intent} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <bucket.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-dark text-lg">{bucket.intent}</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">{bucket.description}</p>
                <p className="text-xs text-gray-600">
                  <span className="font-semibold text-primary">Most useful for:</span> {bucket.usefulFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              All Roofing Comparisons
            </h2>
            <p className="text-gray max-w-2xl mx-auto">
              Explore detailed comparisons of the most popular roofing materials.
              Each guide includes cost analysis, durability ratings, and expert recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ROOFING_COMPARISONS.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/compare/${comparison.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Scale className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                      {comparison.title}
                    </h3>
                    <p className="text-gray mb-4">
                      {comparison.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      View Comparison
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Compare Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Why Compare Before You Buy?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">$</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Save Money</h3>
                <p className="text-gray text-sm">
                  Understanding the true cost of each material — including long-term
                  maintenance — helps you make a smart investment.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">✓</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Right Fit</h3>
                <p className="text-gray text-sm">
                  Different materials suit different home styles, climates,
                  and personal preferences. Find your perfect match.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">★</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">No Regrets</h3>
                <p className="text-gray text-sm">
                  A roof is a 20-50 year commitment. Make sure you&apos;re confident
                  in your choice before installation day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            At-a-Glance Material Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Material</th>
                  <th className="px-6 py-4 text-left font-bold">Cost Range</th>
                  <th className="px-6 py-4 text-left font-bold">Lifespan</th>
                  <th className="px-6 py-4 text-left font-bold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-light transition">
                  <td className="px-6 py-4 font-semibold text-primary">Asphalt Shingles</td>
                  <td className="px-6 py-4 text-gray">$3.50-$5.50/sq ft</td>
                  <td className="px-6 py-4 text-gray">20-30 years</td>
                  <td className="px-6 py-4 text-gray">Budget-conscious homeowners</td>
                </tr>
                <tr className="hover:bg-light transition">
                  <td className="px-6 py-4 font-semibold text-primary">Metal Roofing</td>
                  <td className="px-6 py-4 text-gray">$7-$14/sq ft</td>
                  <td className="px-6 py-4 text-gray">40-70 years</td>
                  <td className="px-6 py-4 text-gray">Long-term value seekers</td>
                </tr>
                <tr className="hover:bg-light transition">
                  <td className="px-6 py-4 font-semibold text-primary">Tile Roofing</td>
                  <td className="px-6 py-4 text-gray">$10-$18/sq ft</td>
                  <td className="px-6 py-4 text-gray">50-100 years</td>
                  <td className="px-6 py-4 text-gray">Luxury &amp; Mediterranean homes</td>
                </tr>
                <tr className="hover:bg-light transition">
                  <td className="px-6 py-4 font-semibold text-primary">Slate Roofing</td>
                  <td className="px-6 py-4 text-gray">$15-$30/sq ft</td>
                  <td className="px-6 py-4 text-gray">75-200 years</td>
                  <td className="px-6 py-4 text-gray">Historic &amp; luxury properties</td>
                </tr>
                <tr className="hover:bg-light transition">
                  <td className="px-6 py-4 font-semibold text-primary">Cedar Shake</td>
                  <td className="px-6 py-4 text-gray">$8-$14/sq ft</td>
                  <td className="px-6 py-4 text-gray">30-40 years</td>
                  <td className="px-6 py-4 text-gray">Craftsman &amp; rustic homes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray text-sm mt-4">
            *Prices are 2026 estimates for the Charlotte NC and Lake Norman area. Actual costs vary based on roof size, pitch, and complexity.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">How to Use These Comparisons</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Comparison FAQs</h2>
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
            Still Not Sure Which Material is Right?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our roofing experts can assess your home and recommend the best
            material for your specific needs, budget, and style preferences.
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
