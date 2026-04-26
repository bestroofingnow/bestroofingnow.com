import { Metadata } from 'next';
import { Phone, DollarSign } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-do-i-budget-for-a-new-roof-charlotte-nc`;
const QUESTION = 'How do I budget for a new roof in Charlotte NC?';
const ANSWER =
  "Budget for a Charlotte NC reroof using this 4-step financial planning framework: (1) ESTIMATE COST RANGE — typical 30-square Charlotte home: standard architectural shingle $11,250-$15,750 (25-yr); premium architectural $14,250-$19,500 (30-50 yr); designer/Class 4 impact $18,750-$21,000 (with hail discount); aluminum standing-seam $39,000-$51,000 (50+ yr lifecycle); luxury slate-look or specialty $30,000-$60,000+; (2) ADD CONTINGENCY — budget extra 15-20% for unexpected items: decking replacement ($400-$1,500 typical), code upgrades (drip edge, ice-and-water shield, ventilation), permit ($150-$400), unforeseen flashing/cricket replacement; (3) IDENTIFY FUNDING SOURCE — cash savings (best, no interest), home equity loan/HELOC ($150-$300/month payment for $20K reroof at 7-9% APR), 0% promotional financing (PowerPay, GreenSky — 6-18 month payback to avoid interest); insurance claim if storm damage (deductible $500-$2,500 typical); FHA Title I home improvement loan up to $25,000 (federal program, 7-12% APR, no equity required); (4) TIMING STRATEGY — schedule reroof during off-season (December-March) for 5-10% savings + faster scheduling; avoid peak season (April-November) for cost premium. Best Roofing Now offers free written estimate with line-item pricing breakdown plus financing options through PowerPay (instant approval, 0% promotional periods).";

const followUpFAQs = [
  {
    question: 'How much should I save before reroofing my Charlotte NC home?',
    answer:
      "Charlotte NC reroof savings target: STANDARD architectural shingle 30-square home — save $13,000-$18,000 ($11,250-$15,750 reroof + $1,500-$2,500 contingency); PREMIUM 30-square — save $17,000-$22,000; DESIGNER/Class 4 — save $21,000-$24,000; ALUMINUM standing-seam — save $44,000-$58,000. Recommended monthly savings to fund 25-yr roof replacement cycle: $50-$100/month minimum, $150-$200/month for premium materials. Most Charlotte homeowners use combination of cash + financing — start saving now if your roof is over 15 years old. Best Roofing Now's free inspection provides written estimate so you know exact savings target.",
  },
  {
    question: 'What financing options are available for Charlotte NC roofing?',
    answer:
      "Five Charlotte NC roofing financing options: (1) HOME EQUITY LOAN/HELOC — 5-9% APR (variable), $150-$300/month for $20K, requires home equity, tax-deductible interest; (2) PERSONAL LOAN — 6-15% APR (fixed), $200-$450/month for $20K, no equity required, faster approval; (3) 0% PROMOTIONAL FINANCING (PowerPay, GreenSky, Synchrony) — 0% interest for 6-18 months IF paid in full by promotional end date, otherwise 18-26% deferred interest applies retroactively; (4) FHA TITLE I HOME IMPROVEMENT LOAN — up to $25,000, 7-12% APR, no equity required, federal program; (5) MANUFACTURER FINANCING — GAF, CertainTeed, OC sometimes offer special promotional rates 5-7% through partner lenders. Best Roofing Now provides PowerPay financing application during free estimate.",
  },
  {
    question: 'Will my Charlotte NC home insurance cover a new roof?',
    answer:
      "Conditional yes — covered scenarios: (1) STORM DAMAGE — wind, hail, fallen tree, lightning damage typically covered (you pay deductible $500-$2,500, insurance pays the rest); (2) NAMED PEROL — fire, vandalism, sudden burst water pipe damage; (3) WIND POLICY upgrade — if hurricane-rated coverage in effect. NOT covered scenarios: (1) AGE/WEAR — gradual wear, age-related failure, lack of maintenance; (2) HOMEOWNER NEGLIGENCE — failure to maintain, ignored issues; (3) PRE-EXISTING DAMAGE — issues that existed before policy effective date. Best practice: file claim WITHIN 30 days of damage, get independent contractor estimate (Best Roofing Now provides Xactimate-compatible scoping), don't accept first insurance offer without contractor review.",
  },
  {
    question: 'Are there tax credits for a new roof in Charlotte NC?',
    answer:
      "Limited tax credits for residential reroofing: (1) ENERGY STAR cool-roof shingles — federal 25C residential energy credit covers 30% (up to $1,200 lifetime cap) for ENERGY STAR-rated shingles meeting solar reflectance requirements (CertainTeed Landmark Solaris, GAF Timberline Cool Series, OC Duration Premium COOL); (2) SOLAR-INTEGRATED ROOFING (Tesla Solar Roof, GAF DecoTech) — 30% federal solar Investment Tax Credit (ITC) extended through 2032 with no cap, plus accelerated depreciation for solar; (3) NC STATE rebates — currently no state-level roofing rebates active (check NCEnergyStar.org for current programs); (4) DUKE ENERGY — occasional cool-roof rebates ($100-$300, check duke-energy.com/rebates). Best Roofing Now provides Manufacturer's Certification Statements for tax credit documentation.",
  },
  {
    question: 'When is the cheapest time to reroof in Charlotte NC?',
    answer:
      "Charlotte NC reroof seasonal pricing: BEST PRICES (5-15% off peak) — December-March (off-season, slower for contractors, faster scheduling, no rain delays); GOOD PRICES — November and April (shoulder seasons, weather workable); STANDARD PRICES — May-July (peak season, 30-45 day lead time); PREMIUM PRICES — August-October (storm season, post-event surge demand can push 10-20% above off-season). Off-season scheduling savings: $1,000-$2,500 on typical 30-square Charlotte reroof. Off-season tradeoffs: occasional cold weather delays (cold-weather shingle installation requires temps above 40°F for proper sealing), reduced daylight hours. Best Roofing Now's January-March scheduling delivers best combination of price + faster turnaround.",
  },
];

export const metadata: Metadata = {
  title: 'How Do I Budget for a New Roof in Charlotte NC?',
  description:
    "Charlotte NC reroof budget: typical 30-sq home $11K-$60K. 4-step plan: estimate range, 15-20% contingency, identify funding (cash/HELOC/PowerPay/FHA), off-season timing.",
  keywords: [
    'how to budget new roof Charlotte NC',
    'Charlotte roof financing',
    'PowerPay roof financing',
    'roof savings target',
    'roofing tax credit',
    'cool roof tax credit 25C',
    'roofing season pricing Charlotte',
    'home equity loan roof',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Do I Budget for a New Roof in Charlotte NC?',
    description: '4-step plan: estimate, contingency, financing, timing.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowToBudgetNewRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How to Budget for New Roof?', url: PAGE_URL }]} />
      <WebPageSchema name="How Do I Budget for a New Roof in Charlotte NC?" description="Roof budgeting guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Budget?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Do I Budget for a New Roof Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Step 1 — estimate cost range (typical 30-sq home $11K-$60K by material)',
          'Step 2 — add 15-20% contingency for decking, code upgrades, permits',
          'Step 3 — identify funding (cash, HELOC, PowerPay 0%, FHA Title I)',
          'Step 4 — schedule off-season (December-March) for 5-10% savings',
          'Standard architectural — $11,250-$15,750 (25 yr)',
          'Premium architectural — $14,250-$19,500 (30-50 yr)',
          'Designer/Class 4 impact — $18,750-$21,000 (with hail discount)',
          'Aluminum standing-seam — $39,000-$51,000 (50+ yr lifecycle)',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Roof Budget?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Budget Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Do I Budget for a New Roof in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Estimate + Financing</Button>
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
            <div className="bg-slate-50 border-l-4 border-primary rounded-r-xl p-6 mb-8">
              <p className="text-lg text-slate-900 leading-relaxed"><strong>{QUESTION}</strong></p>
              <p className="text-slate-800 mt-3 leading-relaxed">{ANSWER}</p>
            </div>
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

      <CTASection title="Free Estimate + PowerPay Financing" subtitle="Line-item pricing breakdown. PowerPay 0% promotional financing approval in minutes. Off-season scheduling for 5-10% savings. Insurance claim Xactimate-compatible." />
    </>
  );
}
