import { Metadata } from 'next';
import { Phone, Search } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-do-i-check-my-roof-without-climbing-charlotte-nc`;
const QUESTION = 'How do I check my roof without climbing on it in Charlotte NC?';
const ANSWER =
  "Check your Charlotte NC roof safely without climbing using these 6 ground-level methods: (1) walk the perimeter and look up at every slope from 30-50 feet away (use binoculars for detail) — note missing shingles, lifted seams, dark spots, debris piles; (2) check from inside the attic with a flashlight — look for daylight visibility through decking (always bad), water stains on rafters/decking (active or past leaks), saturated insulation (recent leak), missing or compressed insulation; (3) check ceilings inside your home for water stains (the brown/yellow rings), peeling paint near corners, sagging drywall; (4) walk around looking for shingle granules in gutters and at downspout discharge points (sand-like accumulation indicates wear); (5) inspect gutters from a safe ladder position (don't climb on the roof) for sagging, separation, or backed-up water; (6) photograph from second-floor windows or upstairs balconies for closer view of upper slopes. NEVER walk on the roof yourself — fall fatalities are the #1 construction injury cause and DIY inspection isn't worth the safety risk. Best Roofing Now's free professional inspection is 100% safer and more thorough than DIY.";

const followUpFAQs = [
  {
    question: 'What can I see from the ground that indicates roof problems?',
    answer:
      "From ground level (30-50 ft away with binoculars): missing or lifted shingles, dark/discolored areas, sagging slopes (structural concern), curling or cupping shingle edges, exposed nails, lifted ridge cap, granule accumulation at gutter downspouts, debris collected in valleys. NOT visible from ground: pipe boot cracks, chimney flashing failures, valley flashing condition, decking soft spots. Ground inspection identifies major issues but misses subtle ones — that's why professional inspection (free with Best Roofing Now) is essential for accurate diagnosis.",
  },
  {
    question: 'What attic signs indicate roof damage in Charlotte NC?',
    answer:
      "Six attic warning signs: (1) daylight visibility through decking (always indicates failure or holes); (2) water stains on rafters or underside of decking (current or past leaks); (3) saturated insulation in any spot (active leak); (4) mold or mildew growth (humidity or active leak); (5) ice damming evidence on inside of roof slope (winter ventilation issue); (6) wet HVAC ductwork (could be roof leak, condensation, or duct failure). Best done with bright flashlight, work clothes you don't mind getting dirty, and 30-60 minutes. Avoid: knob-and-tube wiring areas, exposed insulation contact, walking on attic floor outside of designated joists.",
  },
  {
    question: 'Is using a drone safe for DIY roof inspection in Charlotte?',
    answer:
      "Drone inspection is safer than ladder/walking but has limits. Useful: provides aerial overview, photographs upper slopes invisible from ground, no fall risk. Limited: can't replace attic check, can't physically probe decking, can't reach under shingles to verify pipe boot or flashing condition, video quality often misses subtle granule loss patterns. Cost: rent a basic drone $50-$150/day, or hire a drone inspection service $200-$400 (less thorough than professional roof inspection). Best for spot-checking known concerns; not a replacement for full professional inspection.",
  },
  {
    question: 'When should I stop DIY checking and call a professional?',
    answer:
      "Call Best Roofing Now's free inspection in any of these 6 situations: (1) you see ANY warning signs from ground or attic; (2) the roof is over 15 years old (subtle wear is hard to identify without expert eye); (3) you're considering selling your home (pre-sale inspection identifies negotiable issues); (4) recent storm event in your area (hail, wind, fallen tree); (5) interior water damage of any kind (leak source isn't always obvious); (6) you're refinancing or buying with FHA/VA loan (certification required). Free inspection takes 30-60 minutes, includes 30+ photo documentation, and provides a written report with honest repair-vs-replace recommendation.",
  },
  {
    question: 'Can I use Google Earth to check my roof in Charlotte NC?',
    answer:
      "Limited usefulness — Google Earth/Maps satellite imagery is updated every 1-3 years for most Charlotte areas, so the image you see may be 6-30 months old (won't show recent storm damage). Useful for: rough roof shape and pitch identification, total square footage estimation, identifying obvious major missing sections. NOT useful for: shingle wear patterns, flashing condition, pipe boot age, recent storm damage, granule loss. Use Google Earth for orientation only — never for damage assessment. Best Roofing Now's professional inspection captures current condition with same-day-of photos.",
  },
];

export const metadata: Metadata = {
  title: 'How Do I Check My Roof Without Climbing on It in Charlotte NC?',
  description:
    "Safely check Charlotte NC roof without climbing: ground-level binoculars, attic flashlight inspection, ceiling stain check, gutter granule check, drone for spot-checks. Free pro inspection.",
  keywords: [
    'how to check roof without climbing Charlotte NC',
    'safe DIY roof inspection',
    'roof check from ground',
    'attic roof inspection',
    'binoculars roof check',
    'drone roof inspection',
    'ground level roof check',
    'roof inspection without ladder',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Do I Check My Roof Without Climbing on It in Charlotte NC?',
    description: '6 safe methods: binoculars, attic flashlight, ceiling stains, gutter granules, drone, second-floor view.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function CheckRoofWithoutClimbingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Check Roof Without Climbing?', url: PAGE_URL }]} />
      <WebPageSchema name="How Do I Check My Roof Without Climbing on It in Charlotte NC?" description="Safe DIY roof inspection guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Safe Roof Check?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Do I Check My Roof Without Climbing Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Walk perimeter 30-50 ft away with binoculars — note missing shingles, lifted seams, debris',
          'Attic flashlight check — daylight, water stains, saturated insulation, mold',
          'Interior ceiling check — water stains, peeling paint, sagging drywall',
          'Gutter granule check at downspouts — sand-like accumulation = shingle wear',
          'Gutter visual from safe ladder — sagging, separation, backed-up water',
          'Photograph from second-floor windows for upper slope detail',
          'Drone for spot-checking (rent $50-150/day or hire service $200-400)',
          'NEVER walk on the roof — fall fatalities are #1 construction injury cause',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Safe Roof Check?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Search className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Safe DIY Roof Check Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Do I Check My Roof Without Climbing on It in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Professional Inspection</Button>
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

      <CTASection title="Skip the Ladder. Get a Free Pro Inspection." subtitle="48-hour scheduling. 30+ photo documentation. Honest repair-vs-replace recommendation. Zero safety risk to you." />
    </>
  );
}
