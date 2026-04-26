import { Metadata } from 'next';
import { Phone, Bird } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-do-i-keep-birds-off-my-roof-charlotte-nc`;
const QUESTION = 'How do I keep birds off my Charlotte NC roof?';
const ANSWER =
  "Keep birds off your Charlotte NC roof using this 5-tier deterrent strategy: (1) BIRD SPIKES — stainless steel or polycarbonate spikes installed on ridge caps, gable peaks, and gutter edges where birds perch ($8-$15/linear ft installed, 15+ year lifespan, most effective for pigeons/crows); (2) BIRD WIRE/NETTING — fine wire or 0.75-inch nylon mesh stretched over architectural details, dormers, soffits ($5-$12/linear ft, hides easily, prevents nesting); (3) ULTRASONIC/VISUAL DETERRENTS — solar-powered devices emitting frequencies birds dislike + reflective tape/decoy hawks ($30-$200, less reliable, birds adapt over weeks); (4) GEL DETERRENT — non-toxic sticky gel applied to favorite perching spots ($50-$150 per home, 2-4 yr life, requires reapplication); (5) PROPER ROOF CONSTRUCTION — seal all gaps under eaves and ridge cap (the actual entry points to attic), close off open soffit openings, install gutter guards (eliminates standing water that attracts birds). Common Charlotte bird problems: pigeons (downtown, urban areas), starlings (suburbs, agricultural areas), woodpeckers (especially North Davidson, Plaza Midwood mature canopy), crows (lake areas, larger lots). Damage from birds: shingle granule loss from acidic droppings ($800-$3,000 cleanup), attic infestation ($1,500-$5,000 remediation + repair), woodpecker holes in cedar siding ($300-$2,000 patch). Best Roofing Now's free inspection identifies entry points and recommends humane deterrent combination.";

const followUpFAQs = [
  {
    question: 'Are bird spikes effective for Charlotte NC roofs?',
    answer:
      "Yes — bird spikes are the #1 most effective long-term deterrent for ledge-dwelling birds (pigeons, crows, starlings) on Charlotte NC roofs. Effectiveness: 95%+ deterrent rate when properly installed on all perching surfaces. Materials: stainless steel ($10-$15/linear ft, 25+ yr lifespan, premium); UV-resistant polycarbonate ($8-$12/linear ft, 15+ yr lifespan, less visible); plastic ($5-$8/linear ft, 5-10 yr lifespan, may fail in NC sun). Best installation locations: ridge cap, gable end peaks, parapet walls, chimney caps, gutter edges, HVAC equipment ledges. NOT effective for: woodpeckers (need hole-prevention strategies), small songbirds (slip past spikes), nesting in soffit gaps (need gap sealing).",
  },
  {
    question: 'How do I keep woodpeckers off my Charlotte cedar siding/roof?',
    answer:
      "Woodpeckers (Northern Flicker, Pileated, Downy common in Charlotte) are protected by Migratory Bird Treaty Act — cannot be killed or harmed. Effective deterrents: (1) reflective metal stripes/Mylar tape near affected area ($20-$50, visual deterrent works for 3-12 months); (2) hawk decoy on roof peak ($30-$100, rotate position monthly); (3) bird netting over affected siding section ($100-$400, most effective for cedar siding); (4) replace cedar with fiber-cement siding (woodpecker-proof, $8-$15/sq ft installed); (5) install woodpecker-friendly suet feeder away from house (redirects activity). Charlotte woodpecker problems peak April-May (mating season) and October-November (territory establishment). Best Roofing Now provides written deterrent strategy with free inspection.",
  },
  {
    question: 'Can birds nest in my attic or roof in Charlotte NC?',
    answer:
      "Yes — Charlotte NC homes commonly experience bird nesting in 5 vulnerable spots: (1) gable vent screens with holes (most common, 60% of cases); (2) damaged or missing soffit panels; (3) ridge vent end cap gaps; (4) eaves with worn/missing fascia; (5) chimney top without cap. Bird species commonly nesting: house sparrows, European starlings, chimney swifts (federally protected — DO NOT remove during nesting season May-August), bats (also protected). Damage from attic-nesting birds: insulation contamination ($800-$2,500 replacement), parasites (mites, lice transferring to house), structural wood damage from pecking, fire risk from nest material near electrical. Schedule inspection if you hear scratching, see birds entering/exiting roof, or find droppings in attic.",
  },
  {
    question: 'Why are birds attracted to my Charlotte NC roof?',
    answer:
      "Charlotte NC roof bird attractors: (1) STANDING WATER in clogged gutters (drinking source — most common attractor, address with gutter cleaning + guards); (2) heated air escaping from poor-sealed roof penetrations (warm winter perching); (3) open ridge cap or gable vents (nesting opportunity); (4) easy ledges (gutters, peaks) for perching/lookout; (5) bird feeders nearby (attract overflow to roof); (6) acorns/seeds stored by squirrels in attic spaces (food source); (7) HVAC equipment providing warmth and shelter; (8) southwest-facing roof slopes warmer in winter. Eliminating attractors is more effective than just adding deterrents — Best Roofing Now's inspection identifies your home's specific bird attractors.",
  },
  {
    question: 'Is bird damage covered by Charlotte NC home insurance?',
    answer:
      "Conditional yes — bird damage insurance coverage in NC: covered (typically): sudden damage from bird strike on window/skylight, single-event bird damage to roof penetrations. NOT covered (typically): cumulative droppings damage to shingles or siding, ongoing nest damage in attic, woodpecker holes accumulated over time, gradual infestation damage. NC home insurance defines bird damage as 'pest/animal' which is usually excluded for ongoing/maintenance issues. Solution: prevent damage with deterrents BEFORE it accumulates ($300-$2,000 deterrent install) — much cheaper than $1,500-$5,000+ remediation that won't be covered. Best Roofing Now provides free written prevention plan during inspection.",
  },
];

export const metadata: Metadata = {
  title: 'How Do I Keep Birds Off My Charlotte NC Roof?',
  description:
    "Charlotte NC bird deterrents: spikes $8-15/ft, netting $5-12/ft, ultrasonic $30-200, gel $50-150, gap sealing. Pigeons, starlings, woodpeckers, crows. Free inspection.",
  keywords: [
    'how to keep birds off roof Charlotte NC',
    'bird spikes Charlotte',
    'woodpecker deterrent NC',
    'pigeon prevention roof',
    'bird netting install',
    'attic bird infestation',
    'roof bird damage',
    'humane bird deterrent',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Do I Keep Birds Off My Charlotte NC Roof?',
    description: '5-tier deterrent: spikes, netting, ultrasonic, gel, gap sealing.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function KeepBirdsOffRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How to Keep Birds Off Roof?', url: PAGE_URL }]} />
      <WebPageSchema name="How Do I Keep Birds Off My Charlotte NC Roof?" description="Bird deterrent guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Birds Off Roof?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Do I Keep Birds Off My Roof Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Bird spikes — stainless steel or polycarbonate $8-$15/linear ft (95%+ effective)',
          'Bird wire/netting — fine wire or 0.75-inch mesh $5-$12/linear ft',
          'Ultrasonic + visual deterrents (decoy hawks, reflective tape) $30-$200',
          'Non-toxic sticky gel applied to perching spots $50-$150',
          'Seal gaps under eaves, ridge cap, soffits — eliminates entry points',
          'Common Charlotte bird problems — pigeons, starlings, woodpeckers, crows',
          'Damage costs — granule loss $800-$3K, attic infestation $1.5-$5K',
          'Woodpeckers protected by Migratory Bird Treaty Act — humane deterrents only',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Birds Off Roof?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Bird className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Bird Deterrent Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Do I Keep Birds Off My Charlotte NC Roof?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Bird Deterrent Plan</Button>
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

      <CTASection title="Humane, Code-Compliant Bird Deterrents" subtitle="Free deterrent strategy plan with entry-point identification. Spikes, netting, ultrasonic, and gap-sealing options. Migratory Bird Treaty Act compliant." />
    </>
  );
}
