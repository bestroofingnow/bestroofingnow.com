import { Metadata } from 'next';
import { Phone, Shield } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-do-i-prevent-squirrel-damage-roof-charlotte-nc`;
const QUESTION = 'How do I prevent squirrel damage to my Charlotte NC roof?';
const ANSWER =
  "Prevent squirrel damage to your Charlotte NC roof using this 6-step exclusion strategy: (1) TRIM TREE BRANCHES — cut all branches within 8-10 feet of roof edge (squirrels jump 8 ft horizontally easily); (2) SEAL ENTRY POINTS — inspect and close all gaps in soffits, fascia, ridge cap, gable vents, and roof-wall intersections (squirrels enter through 2-inch openings, gnaw 1.5-inch openings into 4-inch entries); (3) INSTALL HEAVY-GAUGE STEEL HARDWARE CLOTH — replace any chewed soffit panels with 1/4-inch galvanized hardware cloth backing (squirrel-proof, $4-$8/sq ft); (4) CHIMNEY CAP — install metal chimney cap with 1/4-inch screen ($150-$400, eliminates #2 squirrel entry point); (5) TREE GUARDS — install 24-inch metal collar around tree trunks within 15 ft of house ($30-$80 each, prevents climbing); (6) PROFESSIONAL EXCLUSION — call wildlife removal AND roofing contractor to identify and seal all entry points after first squirrel sighting (DIY often misses 30-50% of entry points). Common Charlotte squirrel damage: chewed wood fascia ($800-$2,500 replacement), gnawed pipe boots ($200-$500 each), shredded attic insulation ($1,500-$5,000 remediation), chewed electrical wiring ($500-$3,000 + fire risk), nest material in gutters and downspouts ($300-$800 cleanup). Best Roofing Now's free inspection identifies all entry points and provides written exclusion plan.";

const followUpFAQs = [
  {
    question: 'How do squirrels get on my Charlotte NC roof in the first place?',
    answer:
      "Squirrels reach Charlotte NC roofs via 5 routes: (1) overhanging tree branches (#1 method — squirrels jump 8 ft horizontally and 4 ft vertically easily); (2) climbing brick or stucco wall surfaces (rough texture provides grip); (3) climbing downspouts (use as vertical highways from ground to roof); (4) jumping from neighboring structures (sheds, fences, garages); (5) climbing trellises or vines attached to home. Charlotte squirrel populations (eastern gray and southern flying squirrels) are dense in mature canopy neighborhoods (Plaza Midwood, Dilworth, Myers Park, Eastover, Cotswold, Beverly Woods, Wesley Heights, Belmont). Prevention focus: tree branch trim 8-10 ft from roof + seal all entry points.",
  },
  {
    question: 'What damage do squirrels cause to Charlotte NC roofs?',
    answer:
      "Squirrel damage by frequency: (1) chewed soffit/fascia entry holes — most common, $300-$1,500 repair per opening; (2) gnawed pipe boots and roof penetrations — $200-$500 each; (3) shredded attic insulation for nesting — $1,500-$5,000 remediation; (4) chewed electrical wiring (FIRE RISK) — $500-$3,000 + insurance claim; (5) damaged AC ductwork in attic — $1,200-$4,000 repair; (6) chewed cedar siding/shingles — $800-$3,000; (7) nest material clogging gutters and downspouts — $300-$800 cleanup; (8) staining and odor in attic — $1,000-$3,000 deep clean. Total average damage from 1 squirrel infestation: $3,000-$15,000. Prevention cost: $500-$2,500 (much cheaper).",
  },
  {
    question: 'Will squirrel guards on chimney work in Charlotte NC?',
    answer:
      "Yes — proper chimney caps with 1/4-inch galvanized steel screen are 95%+ effective at preventing squirrel entry through chimney (one of top 3 entry points). Cost: basic black steel cap $80-$200 install, premium stainless steel cap $200-$500 install. Benefits: also prevents bird nesting (chimney swifts protected by federal law — DO NOT remove during May-August nesting season, install cap before March), prevents rain entry, prevents debris accumulation. Avoid: cheap aluminum caps (squirrels can chew/bend), simple wire mesh without solid cap (rain enters), DIY cardboard or plastic temporary covers (last only weeks). Best Roofing Now installs proper chimney caps as part of inspection service.",
  },
  {
    question: 'What if squirrels are already in my Charlotte NC attic?',
    answer:
      "Two-phase removal protocol: PHASE 1 — humane wildlife removal: (1) call licensed NC wildlife removal service (Critter Control, Trutech, local options) — $300-$800 per service; (2) NEVER seal entry points while squirrels are inside (trapped animals chew through walls, die in inaccessible spots); (3) wait for one-way exit door installation OR live-trap-and-release; (4) verify ALL animals removed (nights of camera surveillance). PHASE 2 — exclusion and remediation: (1) Best Roofing Now seals all entry points with hardware cloth + new soffit/fascia ($500-$2,500); (2) attic remediation contractor cleans waste, replaces contaminated insulation ($1,500-$5,000); (3) electrical inspection if any wire damage suspected ($300-$800). Total: $2,500-$10,000 typical infestation cleanup.",
  },
  {
    question: 'When is squirrel activity highest in Charlotte NC?',
    answer:
      "Charlotte NC squirrel activity peaks: (1) AUTUMN (September-November) — nut gathering and winter nest preparation, highest attic intrusion attempts; (2) LATE WINTER (January-February) — mating season, increased territory expansion; (3) SPRING (March-May) — second mating + young squirrels seeking new territory, females seeking nest sites for litters. Lower activity periods: summer (June-August, established nests) and deep winter (December, hibernation-like behavior). Best schedule for prevention work: late summer (August) — before autumn intrusion peak. Best Roofing Now's autumn pre-season inspection identifies entry points before squirrel population pressure increases.",
  },
];

export const metadata: Metadata = {
  title: 'How Do I Prevent Squirrel Damage to My Charlotte NC Roof?',
  description:
    "Prevent Charlotte NC squirrel roof damage: trim branches 8-10 ft, seal entry points, hardware cloth backing, chimney cap $150-$400, tree guards. Damage $3K-$15K vs prevention $500-$2,500.",
  keywords: [
    'how to prevent squirrel roof damage Charlotte NC',
    'squirrel exclusion roof',
    'attic squirrel removal',
    'chimney cap squirrel',
    'tree branch trim roof',
    'squirrel entry points',
    'Charlotte squirrel pest',
    'rodent proof roof',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Do I Prevent Squirrel Damage to My Charlotte NC Roof?',
    description: '6-step exclusion: branch trim, seal entry, hardware cloth, chimney cap.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function PreventSquirrelDamagePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How to Prevent Squirrel Damage?', url: PAGE_URL }]} />
      <WebPageSchema name="How Do I Prevent Squirrel Damage to My Charlotte NC Roof?" description="Squirrel exclusion guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Squirrel Prevention?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Do I Prevent Squirrel Damage Roof Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Trim tree branches 8-10 ft from roof edge (squirrels jump 8 ft easily)',
          'Seal entry points in soffits, fascia, ridge cap, gable vents',
          'Install 1/4-inch galvanized hardware cloth backing on soffit panels',
          'Install metal chimney cap with 1/4-inch screen ($150-$400)',
          'Install 24-inch metal tree guards on trunks within 15 ft of house',
          'Professional exclusion combines wildlife removal + roofing contractor',
          'Damage from 1 infestation — $3,000-$15,000 typical',
          'Prevention cost — $500-$2,500 (5-30x cheaper than damage)',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Squirrel Prevention?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Squirrel Exclusion Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Do I Prevent Squirrel Damage to My Charlotte NC Roof?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Squirrel Exclusion Plan</Button>
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

      <CTASection title="Stop Squirrels Before They Cost You $15K" subtitle="Free entry-point identification and written exclusion plan. Hardware cloth, chimney cap, soffit/fascia repair. Prevention $500-$2,500 vs damage $3,000-$15,000." />
    </>
  );
}
