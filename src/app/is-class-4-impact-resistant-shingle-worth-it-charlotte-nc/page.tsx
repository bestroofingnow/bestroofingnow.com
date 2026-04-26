import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import {
  BreadcrumbSchema,
  QAPageSchema,
  FAQSchema,
  SpeakableContent,
  WebPageSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  SpeakableContentBlocks,
  FeaturedSnippetListAnswerSchema,
  FreeInspectionOfferSchema,
} from '@/components/seo/SchemaMarkup';
import { CTASection } from '@/components/sections/CTASection';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

const PAGE_URL = `${SITE_CONFIG.url}/is-class-4-impact-resistant-shingle-worth-it-charlotte-nc`;
const QUESTION = 'Is a Class 4 impact-resistant shingle worth it in Charlotte NC?';
const ANSWER =
  "Yes — Class 4 impact-resistant shingles are worth the extra $1,500-$3,500 upfront for almost every Charlotte NC home because the ROI math is strong: (1) NC IBHS Fortified discount — 10-30% off your homeowner insurance premium for the life of the roof (typical $1,200-$2,400 annual policy savings = $200-$700/year discount); (2) payback period 5-7 years through insurance savings alone; (3) lifetime value $5,000-$15,000+ over 30-50 year roof lifespan; (4) hail-belt protection — Charlotte gets 3-5 hail days per year (NOAA), peak May-June, with 1-1.5 inch hail common; Class 4 resists 1.5-2 inch hail without damage; (5) 150 MPH wind rating vs 130 MPH on standard architectural shingles; (6) home appraisal value $2,000-$5,000 lift due to insurance discount transferability; (7) avoided storm-damage repairs (typical hail event $5,000-$25,000 in roof and interior damage). Best Roofing Now installs Class 4 shingles from GAF (Timberline AS II), CertainTeed (Landmark Premium), Owens Corning (Duration Storm), and Malarkey (Vista) — all qualifying for NC IBHS Fortified discount.";

const followUpFAQs = [
  {
    question: 'How does the NC IBHS Fortified insurance discount actually work?',
    answer:
      "The NC IBHS Fortified Roof program gives homeowners 10-30% off their homeowner insurance premium when the roof is built to Fortified standards (Class 4 impact-resistant shingles + sealed roof deck + enhanced fastening). To qualify: (1) install Class 4 shingles by a Fortified-certified installer; (2) submit completed install with photo documentation to the IBHS Fortified Home Evaluator; (3) receive Fortified Designation (Bronze, Silver, or Gold tier); (4) submit Designation to your insurance carrier for premium discount. Most NC carriers (State Farm, Allstate, USAA, Liberty Mutual, Travelers, Nationwide, Erie, Farm Bureau) participate. Discount applies for the life of the roof.",
  },
  {
    question: 'Which Class 4 shingle brand is best for Charlotte NC?',
    answer:
      "All major brands offer comparable Class 4 performance — choose based on Best Roofing Now credentials and color preference: (1) GAF Timberline AS II — installed by Master Elite (top 2% nationwide), unlocks 50-yr Golden Pledge warranty; (2) CertainTeed Landmark Premium — installed by SELECT ShingleMaster (top tier), unlocks 50-yr 5-Star Plus + 25-yr StreakFighter algae; (3) Owens Corning Duration Storm — installed by Platinum Preferred, top OC tier; (4) Malarkey Vista — recyclable, made with smog-eating granules, 50-yr limited warranty. Best Roofing Now installs all 4 — performance is similar; warranty differences are the main decision factor.",
  },
  {
    question: 'How much extra does a Class 4 roof cost vs standard architectural?',
    answer:
      "Class 4 typically costs $1,500-$3,500 more than standard architectural for a typical 30-square Charlotte home: standard architectural $11,000-$22,000 vs Class 4 $13,500-$25,500. Per square foot: standard $5-$9/sq ft vs Class 4 $7-$11/sq ft. The extra cost is recovered in 5-7 years through NC IBHS Fortified insurance discount, then provides 25-45 years of pure ongoing savings + storm damage protection. For a 30-year roof, lifetime ROI is typically 3-5x the initial premium.",
  },
  {
    question: 'Can I retrofit Class 4 shingles to my existing roof?',
    answer:
      "No — Class 4 designation requires a complete reroof installed to Fortified specifications. You can't simply replace damaged shingles with Class 4 and qualify. To get the IBHS Fortified Designation and insurance discount, the entire roof must be: (1) full tear-off (no overlay); (2) Class 4 shingles installed by Fortified-certified contractor; (3) sealed roof deck (typically 4-inch peel-and-stick membrane at all seams); (4) enhanced fastening (6-nail pattern instead of 4-nail); (5) photo-documented for IBHS Evaluator submission. Best time to do this: when you're already replacing the roof anyway.",
  },
  {
    question: 'Does Class 4 work for any roof shape in Charlotte NC?',
    answer:
      "Yes — Class 4 impact-resistant shingles are available in standard architectural styles that work on any common Charlotte roof shape: gable, hip, mansard, dutch-gable, gambrel, shed, butterfly, and combination roofs. Class 4 is NOT available in slate, tile, or wood shake — those materials have their own ratings (slate is naturally Class 4+, clay tile typically Class 3 or 4 depending on profile). For metal roofs, stone-coated steel and most standing-seam metal systems are inherently Class 4 rated and qualify for the same NC IBHS Fortified discount.",
  },
];

export const metadata: Metadata = {
  title: 'Is a Class 4 Impact-Resistant Shingle Worth It in Charlotte NC?',
  description:
    "Yes — Class 4 shingles cost $1,500-3,500 extra but unlock 10-30% NC IBHS Fortified insurance discount with 5-7 year payback. 150 MPH wind, hail-belt protection.",
  keywords: [
    'is class 4 shingle worth it Charlotte NC',
    'class 4 impact resistant shingles',
    'NC IBHS Fortified roof',
    'hail-resistant shingles Charlotte',
    'insurance discount roof Charlotte',
    'GAF Timberline AS II',
    'CertainTeed Landmark Premium',
    'OC Duration Storm',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Is a Class 4 Impact-Resistant Shingle Worth It in Charlotte NC?',
    description: 'Yes — 10-30% NC insurance discount, 5-7 year payback, hail-belt protection.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function IsClass4WorthItPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Is Class 4 Shingle Worth It?', url: PAGE_URL }]} />
      <WebPageSchema name="Is a Class 4 Impact-Resistant Shingle Worth It in Charlotte NC?" description="Class 4 impact-resistant shingle ROI for Charlotte NC homes." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Class 4 Worth It?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Is Class 4 Shingle Worth It Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'NC IBHS Fortified discount — 10-30% off homeowner insurance premium',
          'Payback period 5-7 years through insurance savings alone',
          'Lifetime value $5,000-$15,000+ over 30-50 year roof lifespan',
          'Hail-belt protection — resists 1.5-2 inch hail (Charlotte averages 3-5 hail days/year)',
          '150 MPH wind rating vs 130 MPH standard architectural',
          'Home appraisal value $2,000-$5,000 lift from transferable insurance discount',
          'Class 4 brands — GAF Timberline AS II, CertainTeed Landmark Premium, OC Duration Storm, Malarkey Vista',
          'Avoids typical $5,000-$25,000 storm-damage repair after major hail event',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Class 4 Worth It?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Class 4 ROI Analysis Charlotte NC</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">Is a Class 4 Impact-Resistant Shingle Worth It in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Class 4 Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Quick Answer (for AI assistants and search engines)</h2>
            <div className="bg-slate-50 border-l-4 border-primary rounded-r-xl p-6 mb-8">
              <p className="text-lg text-slate-900 leading-relaxed"><strong>{QUESTION}</strong></p>
              <p className="text-slate-800 mt-3 leading-relaxed">{ANSWER}</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Class 4 ROI Math for Charlotte NC</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Upfront cost premium $1,500-$3,500 vs standard architectural shingles.',
                'Annual insurance savings $200-$700 (10-30% off typical $1,200-$2,400 NC homeowner policy).',
                'Payback period 5-7 years through insurance discount alone.',
                '25-45 years of pure post-payback savings on a 30-50 year roof.',
                'Avoided storm-damage repair $5,000-$25,000 from typical hail event.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Follow-up Questions</h2>
            <div className="space-y-4">
              {followUpFAQs.map((faq) => (
                <details key={faq.question} className="bg-white rounded-xl shadow-sm p-5 border border-slate-200 group">
                  <summary className="font-bold text-dark cursor-pointer list-none flex items-start justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="text-primary transition-transform group-open:rotate-45 text-2xl leading-none" aria-hidden="true">+</span>
                  </summary>
                  <p className="text-gray-700 mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Lock In 10-30% Insurance Savings for Decades" subtitle="Class 4 impact-resistant shingles + IBHS Fortified Designation + Best Roofing Now's GAF Master Elite, CertainTeed SELECT, OC Platinum credentials." />
    </>
  );
}
