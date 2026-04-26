import { Metadata } from 'next';
import { Phone, Snowflake } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-do-i-prevent-ice-dams-on-my-roof-charlotte-nc`;
const QUESTION = 'How do I prevent ice dams on my roof in Charlotte NC?';
const ANSWER =
  "Prevent ice dams on Charlotte NC roofs with a 4-layer strategy: (1) air-sealing — caulk and foam attic air leaks at recessed lights, ductwork penetrations, attic hatch, and plumbing stacks ($300-$800 — stops warm air leaking into attic that melts roof snow); (2) attic insulation upgrade to R-38 (south Charlotte) or R-49 (north Mecklenburg / Lake Norman) — $1,200-$3,200 ($1,200-$3,200 — proper insulation keeps attic cold, prevents melt cycle); (3) NC IRC §R806 balanced ventilation — ridge vent + paired soffit intake at 1:150 NFVA (or 1:300 with balanced 50/50) for $400-$1,200 (cold attic air prevents snow melt at roof surface); (4) ice-and-water shield retrofit during reroof — Grace Ice & Water or GAF WeatherWatch peel-and-stick membrane 6 ft from eaves at risk areas (covers exposed decking against back-up if ice dam forms). Heat cables ($400-$1,400 installed) are emergency option for already-formed ice dams but don't fix the root cause. Charlotte gets 1-3 ice events per winter (notably 2002, 2014, 2026 storms), with north Mecklenburg / Lake Norman / Davidson / Cornelius / Huntersville highest risk. Total prevention package: $800-$3,500 typical for a Charlotte home.";

const followUpFAQs = [
  {
    question: 'How do ice dams actually form on Charlotte NC roofs?',
    answer:
      "Ice dams form through a 4-step process: (1) warm attic air (heated by air leaks from inside the home) heats the roof surface from below; (2) snow on the roof melts despite outside temperatures below freezing; (3) melted water flows down the roof slope toward the colder eave (which is not heated by the warm attic); (4) water refreezes at the cold eave, building up ice that 'dams' the next round of melted water. The dammed water has nowhere to go — it backs up under shingles and into the attic, causing leaks and decking rot. Charlotte's typical 25-32°F night cycles after warmer days are the perfect ice dam conditions.",
  },
  {
    question: 'Which Charlotte areas are most at risk for ice dams?',
    answer:
      "Highest ice dam risk in the Charlotte region: north Mecklenburg (north of I-485, including Huntersville areas), Lake Norman lakefront communities (lake-effect cooling), Davidson, Cornelius, Mooresville, Denver, Sherrills Ford. Lower risk: south Charlotte (Ballantyne, SouthPark, Steele Creek, Pineville). Charlotte gets 1-3 ice events per winter on average, with notable major storms in 2002 (1.5 inch ice accumulation), 2014 (4 inch+ ice in some areas), and 2026 (3 inch ice). Even south Charlotte homes can experience ice dams during severe events.",
  },
  {
    question: 'Are heat cables effective for ice dam prevention?',
    answer:
      "Heat cables (self-regulating WarmlyYours, Frost King) are an EMERGENCY OPTION for already-formed ice dams or homes with chronic problems — but they don't fix the root cause (warm attic, poor ventilation, missing ice-and-water shield). Heat cables: $400-$1,400 installed, $50-$200/year electricity, 8-15 year cable lifespan, only effective when actively powered (must be turned on before ice forms). Better long-term solution: fix the air-sealing, insulation, and ventilation issues that cause ice dams in the first place. Heat cables work as Band-Aid on top of fundamental fixes.",
  },
  {
    question: 'Will my insurance cover ice dam damage in Charlotte?',
    answer:
      "Most NC homeowner insurance policies cover ice dam water damage when the leak is sudden (storm-driven) and you've maintained the roof. Coverage typically includes: interior water damage (drywall, insulation, flooring, paint), mold remediation if applicable, sometimes the roof repair itself. NOT covered: chronic age-related leaks where ice dam damage is just the latest symptom of an old roof. Prevention investment ($800-$3,500) is far cheaper than typical ice dam damage claim ($5,000-$25,000 interior + roof repair).",
  },
  {
    question: 'Can I do ice dam prevention myself in Charlotte NC?',
    answer:
      "Limited DIY options: (1) attic air sealing — DIY-friendly with caulk and spray foam ($150-$300 materials); (2) blown-in attic insulation — DIY-possible with rented blower from Home Depot ($400-$1,000 materials), 4-8 hours of work; (3) heat cable installation — DIY install requires roof access (safety concern). NOT DIY: ridge vent installation (requires roof work and proper sequencing), ice-and-water shield install (requires partial reroof), structural ventilation modifications. Best Roofing Now's free inspection identifies which fixes are most needed and provides written estimates for the full prevention package.",
  },
];

export const metadata: Metadata = {
  title: 'How Do I Prevent Ice Dams on My Roof in Charlotte NC?',
  description:
    "Prevent Charlotte NC ice dams with 4-layer strategy: air-sealing $300-800, R-38/R-49 insulation $1,200-3,200, NC IRC §R806 ventilation $400-1,200, ice-and-water shield 6 ft eave retrofit.",
  keywords: [
    'how to prevent ice dams Charlotte NC',
    'ice dam prevention NC',
    'attic air sealing Charlotte',
    'attic insulation R-38 R-49',
    'ridge vent installation',
    'ice and water shield Charlotte',
    'heat cable roof installation',
    'north Mecklenburg ice dams',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Do I Prevent Ice Dams on My Roof in Charlotte NC?',
    description: '4-layer prevention strategy for Charlotte NC homes — $800-$3,500 total.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowToPreventIceDamsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How to Prevent Ice Dams?', url: PAGE_URL }]} />
      <WebPageSchema name="How Do I Prevent Ice Dams on My Roof in Charlotte NC?" description="Ice dam prevention guide for Charlotte NC homes." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Prevent Ice Dams?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How to Prevent Ice Dams on My Roof Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Layer 1 — air-sealing attic ($300-$800): caulk recessed cans, ductwork, hatch, plumbing stacks',
          'Layer 2 — insulation upgrade R-38 to R-49 ($1,200-$3,200) blown cellulose or fiberglass',
          'Layer 3 — NC IRC §R806 ventilation ($400-$1,200) ridge vent + paired soffit intake',
          'Layer 4 — ice-and-water shield 6 ft from eaves during reroof',
          'Heat cables ($400-$1,400) — emergency option only, not root-cause fix',
          'Highest-risk Charlotte areas — north Mecklenburg, Lake Norman, Davidson, Cornelius, Huntersville',
          'Charlotte gets 1-3 ice events per winter; 2002/2014/2026 major storms',
          'Total prevention package $800-$3,500 vs typical ice dam damage $5,000-$25,000',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Prevent Ice Dams?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Snowflake className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Ice Dam Prevention Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Do I Prevent Ice Dams on My Roof in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Ice Dam Risk Assessment</Button>
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

      <CTASection title="Stop Ice Dams Before They Start" subtitle="4-layer prevention package $800-$3,500 vs typical ice dam damage $5,000-$25,000. Battle-tested through 2002/2014/2026 ice storms." />
    </>
  );
}
