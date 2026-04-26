import { Metadata } from 'next';
import { Phone, Trash2 } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-do-i-clean-my-gutters-charlotte-nc`;
const QUESTION = 'How do I clean my gutters in Charlotte NC?';
const ANSWER =
  "Clean Charlotte NC gutters using this 6-step process: (1) inspect from ground first — check for sagging, separations, or water staining on siding (signals impending failure); (2) set up a stable extension ladder with stand-off arms (NEVER lean ladder against gutter — bends/collapses gutter); (3) remove debris by hand wearing thick gloves (oak leaves, pine needles, helicopter seeds, twigs) — use plastic gutter scoop for compacted debris; (4) flush gutters with garden hose at full flow from highest point downward — verify all downspouts drain freely (slow drainage = downspout clog); (5) inspect for damage — sagging spikes, separated joints, rust holes, ice-dam damage; (6) photograph any concerns and document. Cost: DIY $0 (your labor 2-4 hours per service), professional cleaning $125-$300 (single-story), $200-$450 (two-story), $350-$650 (three-story or complex roofline). Frequency in Charlotte NC: 2x per year minimum (April-May post-pollen + October-November post-leaf-drop), 3-4x in heavy-canopy neighborhoods (Plaza Midwood, Dilworth, Myers Park, Eastover, Cotswold, Beverly Woods, lakefront LKN). Best Roofing Now offers gutter cleaning + free roof inspection bundled service.";

const followUpFAQs = [
  {
    question: 'How often should I clean my gutters in Charlotte NC?',
    answer:
      "Charlotte NC gutter cleaning frequency: 2x per year minimum (April-May post-pollen, October-November post-leaf-drop) for typical suburban Charlotte; 3x per year for moderate canopy (1-2 large trees within 30 ft); 4x per year for heavy canopy neighborhoods (Plaza Midwood, Dilworth, Myers Park, Eastover, Cotswold, Beverly Woods, Wesley Heights, Belmont, lakefront LKN). Add extra cleaning after major storms (3+ inch rain or windstorm) when debris accumulates. Skipping cleaning leads to overflow, fascia/soffit rot ($800-$2,500 repair), foundation water damage, and ice-dam buildup in winter cold snaps.",
  },
  {
    question: 'Is gutter cleaning dangerous in Charlotte NC?',
    answer:
      "Yes — gutter cleaning is one of the most dangerous DIY home maintenance tasks. CDC data: 247,000+ ladder-fall ER visits annually in U.S., 25% from gutter/roof activities. Specific Charlotte risks: (1) wet leaves on roof/ladder (slick); (2) hidden hornets/wasps in gutters (especially May-September); (3) ladder slipping on uneven Charlotte terrain; (4) overreach/over-extension causing balance loss. Professional cleaning ($125-$300 typical home) eliminates all these risks plus includes inspection. If DIY: use ladder stabilizer arms, work with a spotter, never reach more than 1 ladder rung sideways, never on rainy/wet days, never alone.",
  },
  {
    question: 'What\'s the cost of gutter guards vs annual cleaning in Charlotte NC?',
    answer:
      "Gutter guard install (one-time): micro-mesh $7-$15/linear ft installed ($1,400-$3,000 typical Charlotte home, 50+ year lifespan, premium); reverse-curve $5-$10/linear ft ($1,000-$2,000); foam inserts $2-$5/linear ft ($400-$1,000, lower quality, replace every 3-5 yr); screen $1-$3/linear ft ($200-$600, lowest cost but high failure rate). Annual cleaning cost: $125-$650 per service x 2-4 services = $250-$2,600/year. Payback math for micro-mesh: $1,400 install ÷ $400 annual cleaning savings = 3.5 years. Best ROI: micro-mesh in heavy canopy areas, no guards in low-tree open neighborhoods.",
  },
  {
    question: 'Can clogged gutters cause roof damage in Charlotte NC?',
    answer:
      "Yes — clogged gutters cause 6 types of damage: (1) overflow water rotting fascia and soffit boards ($800-$2,500 repair); (2) water backflow under roof edge causing ice-dam-style decking rot; (3) foundation water saturation and basement leaks; (4) landscape erosion and mulch washout; (5) frozen-water expansion cracking gutter joints in winter; (6) mosquito breeding habitat in stagnant pools. The cumulative cost of NEGLECTED gutters typically reaches $3,000-$10,000 in repairs over 5-10 years vs $250-$2,600/year for proper cleaning. Charlotte's heavy August-October rain season makes clean gutters especially critical.",
  },
  {
    question: 'Should I clean my gutters from the ground or a ladder in Charlotte?',
    answer:
      "Both have place: GROUND-BASED tools (telescoping gutter wand, leaf blower attachment, gutter cleaning vacuum) work for single-story homes with low gutters and light debris ($30-$150 tool cost). LADDER-BASED is required for: (1) two-story or three-story homes; (2) packed/compacted debris removal; (3) flushing and inspection; (4) any joint/sagging issues that need close inspection. Best practice: ground-based for monthly light maintenance, ladder-based 2-4x per year for thorough cleaning. Professional service handles all heights/conditions safely with $1M+ liability insurance.",
  },
];

export const metadata: Metadata = {
  title: 'How Do I Clean My Gutters in Charlotte NC?',
  description:
    "Charlotte NC gutter cleaning: 6-step process, 2-4x per year, DIY $0 or pro $125-$650. Heavy canopy areas (Plaza Midwood, Dilworth, Myers Park) need 3-4x. Bundled with inspection.",
  keywords: [
    'how to clean gutters Charlotte NC',
    'gutter cleaning Charlotte',
    'DIY gutter cleaning',
    'professional gutter cleaning cost',
    'gutter cleaning frequency NC',
    'gutter cleaning safety',
    'clogged gutters damage',
    'gutter cleaning bundled inspection',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Do I Clean My Gutters in Charlotte NC?',
    description: '6-step process. 2-4x per year. DIY or pro $125-$650.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowToCleanGuttersPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How to Clean Gutters?', url: PAGE_URL }]} />
      <WebPageSchema name="How Do I Clean My Gutters in Charlotte NC?" description="Gutter cleaning guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Clean Gutters?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Do I Clean My Gutters Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Step 1 — inspect from ground for sagging, separation, water staining',
          'Step 2 — set up extension ladder with stand-off arms (never lean on gutter)',
          'Step 3 — remove debris by hand wearing thick gloves + plastic scoop',
          'Step 4 — flush with garden hose from highest point downward',
          'Step 5 — inspect for damage (sagging spikes, separated joints, rust)',
          'Step 6 — photograph concerns for professional follow-up',
          'Frequency — 2x per year minimum, 3-4x in heavy-canopy Charlotte areas',
          'Pro cleaning cost — $125-$300 single-story, $200-$650 multi-story',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Clean Gutters?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Trash2 className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Gutter Cleaning Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Do I Clean My Gutters in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Gutter Cleaning Quote</Button>
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

      <CTASection title="Skip the Ladder. Bundle Cleaning + Inspection." subtitle="Gutter cleaning $125-$650 + free roof inspection. $1M+ liability insurance. Documented before/after photos. Heavy-canopy Charlotte specialty." />
    </>
  );
}
