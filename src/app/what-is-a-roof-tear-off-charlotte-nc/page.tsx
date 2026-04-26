import { Metadata } from 'next';
import { Phone, Wrench } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-roof-tear-off-charlotte-nc`;
const QUESTION = 'What is a roof tear-off and why is it better than overlay in Charlotte NC?';
const ANSWER =
  "A roof tear-off is the process of removing ALL existing roofing material (shingles, underlayment, flashing) down to bare decking before installing the new roof. The alternative is OVERLAY (also called 'roof-over' or 'second layer'), where new shingles are installed directly over existing shingles. NC IRC §R908.3 limits buildings to a maximum of 2 layers of asphalt shingles total — so overlay is only legal once. For Charlotte NC homeowners, tear-off is almost always the better choice over overlay because: (1) DECKING INSPECTION — tear-off allows visual inspection of all decking for rot/damage (impossible with overlay); (2) UNDERLAYMENT UPGRADE — synthetic underlayment + ice-and-water shield can only be installed during tear-off; (3) FLASHING REPLACEMENT — old flashing should be replaced (impossible during overlay); (4) WARRANTY — most manufacturer warranties (GAF, CertainTeed, OC top-tier) are VOID on overlay install; (5) INSURANCE COVERAGE — many NC carriers refuse claims on overlay roofs; (6) HOME RESALE — buyer/lender typically requires single-layer roof; (7) WEIGHT — overlay adds 250+ lb per square doubling roof load (structural concern on older homes). Tear-off cost: $50-$150 per square (included in standard reroof estimate). Process: 1-day for typical 30-square Charlotte home. Best Roofing Now performs ONLY tear-off reroofs (no overlay) for warranty and quality reasons.";

const followUpFAQs = [
  {
    question: 'How much does a roof tear-off cost in Charlotte NC?',
    answer:
      "Charlotte NC tear-off pricing (typically included in reroof estimate): TEAR-OFF LABOR — $50-$100/square ($1,500-$3,000 on typical 30-square home); DUMPSTER/DISPOSAL — $25-$50/square ($750-$1,500); TOTAL TEAR-OFF cost — $75-$150/square ($2,250-$4,500). Cost variations: SECOND-LAYER tear-off (when removing 2 layers) — adds $25-$50/square; STEEP PITCH tear-off (8/12+) — adds 15-25% for safety equipment; DECKING REPAIR during tear-off — $80-$200 per 4x8 sheet additional (typical 5-15% of sheets need replacement); LANDSCAPING PROTECTION — $100-$300 for tarp coverage of plants and AC unit. Tear-off is included in EVERY proper reroof estimate as separate line item — Best Roofing Now's transparent estimate breaks down each component.",
  },
  {
    question: 'Can I save money with overlay instead of tear-off in Charlotte NC?',
    answer:
      "Conditional yes — overlay saves $2,250-$4,500 upfront but costs $5,000-$25,000 in long-term value loss. Overlay LOSSES: (1) MANUFACTURER WARRANTY VOID — lose 25+ years of GAF/CertainTeed/OC coverage worth $5,000-$15,000 protection value; (2) PREMATURE FAILURE — overlay roofs fail 5-10 years sooner than tear-off due to trapped heat ($3,000-$10,000 early replacement cost); (3) HIDDEN DECKING DAMAGE — rotting decking continues under overlay, eventually requires full tear-off-and-replace; (4) HOME SALE PROBLEMS — most buyers refuse overlay roofs, lenders may require remediation; (5) INSURANCE REFUSAL — many NC carriers won't insure overlay roofs. Math: $2,500-$4,500 overlay savings vs $5,000-$25,000 long-term losses = NET LOSS of $2,500-$20,500. Always choose tear-off.",
  },
  {
    question: 'How long does roof tear-off take in Charlotte NC?',
    answer:
      "Charlotte NC tear-off duration by roof complexity: TYPICAL 30-square single-story — 4-6 hours (1 morning); LARGER 40-square two-story — 6-10 hours (1 day); COMPLEX multi-slope or steep pitch — 8-16 hours (1-2 days); SECOND-LAYER tear-off — adds 25-50% time. Tear-off is the FASTEST phase of reroof — total reroof timeline: tear-off 1 day + decking repairs 0.5-1 day + underlayment install 0.5 day + shingle install 1-2 days + cleanup 0.5 day = 3-5 days total for typical Charlotte home. Same-day tear-off-AND-shingle is typical (roof never left exposed overnight when weather is favorable — emergency tarp ready if rain forecast).",
  },
  {
    question: 'What happens to all the old shingle waste after a Charlotte NC tear-off?',
    answer:
      "Charlotte NC tear-off waste disposal: (1) DUMPSTER ON-SITE — 30-yard roll-off dumpster typical for 30-square home (rented from Republic Services, Waste Industries, or Waste Pro); (2) MATERIAL HAULED — to Mecklenburg County Speedway Solid Waste Disposal Facility (or similar transfer station for outlying counties); (3) RECYCLING OPTIONS — some Charlotte recyclers accept asphalt shingles for road paving aggregate (Asphalt Reclaiming Services); (4) DISPOSAL FEE — $25-$50/square typical (included in tear-off line item). Environmental impact: typical 30-square reroof generates 6,000-7,500 lb of shingle waste. Best Roofing Now uses certified disposal facilities and offers shingle recycling option (when available) at no additional cost.",
  },
  {
    question: 'Will the tear-off damage my Charlotte NC home or landscaping?',
    answer:
      "Risk minimized with proper precautions. Standard protection during Charlotte tear-off: (1) LANDSCAPING TARPS covering shrubs, flower beds, AC unit ($100-$300 included in proper estimate); (2) MAGNETIC NAIL SWEEP after tear-off (collects fallen nails from yard — typical 50-200 nails); (3) ATTIC PROTECTION — homeowner advised to remove valuables from attic (vibration during tear-off can knock items down); (4) SATELLITE DISH coverage if attached to roof; (5) SOLAR PANEL coordination if present; (6) DRIVEWAY PROTECTION for dumpster placement (plywood under wheels). Common issues to expect: minor lawn divots from dumpster, occasional missed nail (sweep again post-cleanup), mild interior dust if attic is unfinished. Best Roofing Now uses double-magnetic-sweep cleanup standard.",
  },
];

export const metadata: Metadata = {
  title: 'What Is a Roof Tear-Off and Why Is It Better Than Overlay in Charlotte NC?',
  description:
    "Roof tear-off = remove all existing roofing to bare decking. NC IRC §R908.3 limits 2 layers max. Tear-off cost $75-$150/sq. Overlay loses warranty + 5-10 yr lifespan. Always tear-off.",
  keywords: [
    'what is a roof tear-off Charlotte NC',
    'roof tear off vs overlay',
    'NC IRC R908.3 layers',
    'reroof tear off cost',
    'overlay roof Charlotte',
    'roof second layer',
    'shingle disposal Charlotte',
    'roof waste recycling',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is a Roof Tear-Off and Why Is It Better Than Overlay in Charlotte NC?',
    description: 'NC IRC §R908.3 limits 2 layers max. Always choose tear-off.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsRoofTearOffPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is a Roof Tear-Off?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is a Roof Tear-Off and Why Is It Better Than Overlay in Charlotte NC?" description="Roof tear-off guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Tear-Off?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is a Roof Tear-Off Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Roof tear-off — removal of all existing roofing material to bare decking',
          'Overlay alternative — installing new shingles over existing (NC max 2 layers)',
          'NC IRC §R908.3 limits to 2 layers maximum',
          'Tear-off cost — $75-$150/square ($2,250-$4,500 typical 30-sq home)',
          'Overlay voids GAF/CertainTeed/OC top-tier manufacturer warranties',
          'Overlay loses 5-10 years lifespan vs proper tear-off install',
          'Tear-off duration — 4-10 hours typical Charlotte home',
          'Disposal — Mecklenburg County certified facilities + optional recycling',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Tear-Off?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Wrench className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Tear-Off Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is a Roof Tear-Off and Why Is It Better Than Overlay in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Tear-Off Reroof Quote</Button>
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

      <CTASection title="Tear-Off Reroofs Only — No Overlay" subtitle="Best Roofing Now performs only tear-off reroofs to preserve manufacturer warranty and ensure decking inspection. Magnetic nail sweep + landscape protection standard." />
    </>
  );
}
