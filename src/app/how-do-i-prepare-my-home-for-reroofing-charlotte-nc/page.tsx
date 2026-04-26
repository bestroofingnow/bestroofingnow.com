import { Metadata } from 'next';
import { Phone, ClipboardCheck } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-do-i-prepare-my-home-for-reroofing-charlotte-nc`;
const QUESTION = 'How do I prepare my home for reroofing in Charlotte NC?';
const ANSWER =
  "Prepare your Charlotte NC home for reroofing using this 10-item checklist (1-2 days before crew arrival): (1) PARK VEHICLES away from house — leave 30+ ft clear for dumpster placement and crew movement; (2) CLEAR DRIVEWAY — dumpster will be placed there 1-3 days, plywood beneath wheels recommended; (3) MOVE PATIO FURNITURE/GRILLS away from house perimeter (10+ ft clearance); (4) COVER ATTIC ITEMS — remove valuables OR cover with plastic sheeting (vibration during tear-off can knock items off shelves); (5) REMOVE WALL HANGINGS in upper floor rooms (vibration can knock pictures off walls); (6) NOTIFY NEIGHBORS — courteous heads-up about 1-3 days of noise (typical 7am-5pm work hours); (7) SECURE PETS indoors during work hours (loud noise stresses animals, exterior workers may scare them); (8) TURN OFF AC during peak install (gypsum dust from interior work can clog filters — turn back on after work); (9) INSPECT VALUABLES — document any pre-existing wall cracks, ceiling stains with photos for reference (vibration can occasionally crack drywall); (10) WALK PROPERTY with foreman on day 1 — confirm dumpster placement, identify protected landscape, set work hours expectations. Most reroofs complete in 3-5 days with minimal disruption. Best Roofing Now provides written prep checklist 1 week before scheduled install.";

const followUpFAQs = [
  {
    question: 'Do I need to leave my Charlotte NC home during reroofing?',
    answer:
      "No — homeowners can stay during reroofing without significant disruption. Comfort considerations: (1) NOISE LEVELS reach 80-95 dB during tear-off and shingle install (similar to garbage disposal or hair dryer at close range) — work hours typically 7am-5pm Monday-Friday; (2) INTERIOR DUST minimal in homes with proper attic insulation (older homes with unfinished attics may experience some gypsum dust); (3) AC SHUTOFF recommended during peak install hours to prevent dust circulation; (4) WORK FROM HOME accommodation — schedule important calls outside 7am-5pm window or for non-tear-off days. WHO SHOULD LEAVE: families with infants, sound-sensitive household members, anyone with anxiety about workers on roof. Cost of hotel during 3-5 day reroof: $400-$1,500 — consider for premium comfort. Best Roofing Now provides daily start/end notifications.",
  },
  {
    question: 'What about my landscaping and gutters in a Charlotte NC reroof?',
    answer:
      "Standard protection during Charlotte reroof: (1) LANDSCAPE TARPS covering shrubs, flower beds, AC unit, decorative planters ($100-$300 included in proper estimate); (2) GUTTER PROTECTION from falling debris (gutters cleaned of fallen shingle granules during cleanup); (3) MAGNETIC NAIL SWEEP after tear-off and after final cleanup (collects fallen nails from yard — typical 50-200 nails per reroof); (4) EXTERIOR LIGHTING/DECOR coverage; (5) SATELLITE DISH coordination if attached to roof. Common minor issues: lawn divots from dumpster placement (1-2 areas), occasional missed nail (sweep again post-cleanup if you find any), bent landscape lighting if too close to work area. Best Roofing Now's standard protocol includes pre-job walkthrough identifying landscape concerns + post-job walkthrough for any cleanup misses.",
  },
  {
    question: 'What weather conditions stop reroofing work in Charlotte NC?',
    answer:
      "Charlotte NC weather restrictions: (1) RAIN — work stops at first sustained rain (15+ min); roof never left exposed overnight in rainy forecast; emergency tarps deployed if rain develops mid-shingle; (2) HIGH WIND — sustained 25+ MPH or gusts 35+ MPH stops shingle install (safety + adhesion concerns); (3) FREEZING TEMPS — cold-weather shingle install requires temps above 40°F for 4+ hours for proper sealing (problematic Dec-Feb mornings); (4) EXTREME HEAT — work pauses for crew safety when surface temp exceeds 165°F (typical July-August afternoons), shifts to early morning hours; (5) LIGHTNING — work stops immediately for 30+ minutes after last lightning strike. Schedule impact: Charlotte's average reroof faces 0-1 weather delays. Best Roofing Now monitors hourly forecasts and provides daily go/no-go updates.",
  },
  {
    question: 'How do I know if my Charlotte NC reroof is done correctly?',
    answer:
      "Final walkthrough checklist with foreman: (1) ALL SHINGLES properly aligned with no visible gaps or lifted edges; (2) RIDGE CAP installed evenly with consistent reveal; (3) PIPE BOOTS sealed with no visible gaps; (4) FLASHING properly integrated with shingles (chimney, valleys, dormers); (5) DRIP EDGE installed at all eaves and rakes; (6) GUTTER attachment intact and downspouts clear; (7) ALL DEBRIS removed from yard, gutters, and downspouts; (8) MAGNETIC NAIL SWEEP performed at least twice; (9) DUMPSTER removed within 24-48 hours of completion; (10) MANUFACTURER WARRANTY paperwork received (GAF Golden Pledge, CertainTeed 5-Star Integrity, OC Platinum Protection if applicable); (11) CITY/COUNTY PERMIT closed in records. Best Roofing Now provides written completion checklist + photo documentation + warranty registration filed within 30 days.",
  },
  {
    question: 'When can I walk on my new Charlotte NC roof after install?',
    answer:
      "Wait 30-90 days for shingle sealant to fully cure before walking on roof. Detailed timing: (1) FIRST 24 HOURS — shingles are mechanically attached but adhesive sealant strip is unactivated; (2) DAYS 1-7 — adhesive begins activating with first warm sunny day (Charlotte spring/summer typically activates within 3-7 days); (3) DAYS 7-30 — adhesive reaches 80% bond strength; (4) DAYS 30-90 — full curing complete (depending on UV exposure); (5) AFTER 90 DAYS — roof safe to walk on. EVEN AFTER 90 DAYS — best practice is to AVOID walking on roof unless absolutely necessary (granule loss from foot traffic accelerates aging). For inspections, repairs, or maintenance after 90 days, hire professional rather than DIY. Best Roofing Now's free annual inspection eliminates need for homeowner roof access.",
  },
];

export const metadata: Metadata = {
  title: 'How Do I Prepare My Home for Reroofing in Charlotte NC?',
  description:
    "Charlotte NC reroof prep checklist: 10 items (vehicles, dumpster, attic items, wall hangings, neighbors, pets, AC, landscape, walkthrough). 3-5 day project, minimal disruption.",
  keywords: [
    'how to prepare home for reroofing Charlotte NC',
    'reroof prep checklist',
    'roof install preparation',
    'do I leave home during reroof',
    'reroof landscape protection',
    'reroof noise levels',
    'reroof weather delays',
    'when can I walk on new roof',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Do I Prepare My Home for Reroofing in Charlotte NC?',
    description: '10-item checklist. 3-5 day project, minimal disruption.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowToPrepareForReroofingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How to Prepare for Reroofing?', url: PAGE_URL }]} />
      <WebPageSchema name="How Do I Prepare My Home for Reroofing in Charlotte NC?" description="Reroof preparation guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Reroof Prep?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Do I Prepare My Home for Reroofing Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Step 1 — park vehicles 30+ ft from house, clear driveway for dumpster',
          'Step 2 — move patio furniture and grills 10+ ft from perimeter',
          'Step 3 — remove or cover attic valuables, remove upper-floor wall hangings',
          'Step 4 — notify neighbors about 1-3 days of noise (7am-5pm typical)',
          'Step 5 — secure pets indoors during work hours',
          'Step 6 — turn off AC during peak install (prevent dust circulation)',
          'Step 7 — document existing wall cracks/ceiling stains with photos',
          'Step 8 — walk property with foreman day 1 to set expectations',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Reroof Prep?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <ClipboardCheck className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Reroof Prep Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Do I Prepare My Home for Reroofing in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Schedule Your Reroof</Button>
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

      <CTASection title="Smooth, Professional Reroof Process" subtitle="Best Roofing Now provides written prep checklist 1 week before install. Daily start/end notifications. Final walkthrough with photo documentation + warranty registration." />
    </>
  );
}
