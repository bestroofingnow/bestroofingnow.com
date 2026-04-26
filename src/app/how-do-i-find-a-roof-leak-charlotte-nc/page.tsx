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

const PAGE_URL = `${SITE_CONFIG.url}/how-do-i-find-a-roof-leak-charlotte-nc`;
const QUESTION = 'How do I find a roof leak in my Charlotte NC home?';
const ANSWER =
  "Find a Charlotte NC roof leak using this 6-step diagnostic: (1) identify interior evidence — find the ceiling stain, peeling paint, or saturated drywall (the leak entry point is almost ALWAYS uphill from the visible interior damage, never directly above); (2) measure horizontal offset — water travels along rafters, decking seams, and HVAC ductwork before dripping; the entry point is typically 2-15 feet uphill on the roof from interior evidence; (3) inspect the attic — go directly above the interior damage with a flashlight; trace water staining UPHILL on rafters and decking until you find the entry point (look for daylight, holes, deteriorated wood, water tracks); (4) inspect the roof exterior — focus on the 8 most common leak sources at the entry zone: pipe boots/vent collars (60% of all roof leaks), valley flashing, chimney flashing, skylight perimeter, dormer/wall intersections, missing/lifted shingles, exposed nails, ridge cap; (5) hose test — have a helper safely run hose water on the suspect zone for 10-15 min while you watch from inside attic for water entry; (6) document with photos for repair quoting. Charlotte's most common leak source by far is failed pipe boots (rubber gasket cracks after 8-12 yr of UV exposure). Best Roofing Now's free leak inspection uses infrared moisture imaging to find leaks in 30-60 minutes vs DIY 4-12 hours.";

const followUpFAQs = [
  {
    question: 'What are the most common Charlotte NC roof leak sources?',
    answer:
      "Charlotte NC roof leak source frequency: (1) failed pipe boots/vent collars — 60% of all leaks (rubber gaskets crack after 8-12 yr UV exposure, $200-$500 repair); (2) valley flashing failures — 12% (especially open-cut valleys without proper underlayment, $450-$2,500 repair); (3) chimney flashing — 10% (counterflashing rust or step flashing failure, $400-$1,800 repair); (4) skylight perimeter — 6% (sealant failure or improper flashing, $300-$1,200 repair); (5) missing/lifted shingles from wind — 4% (varies, $200-$800 repair); (6) ridge cap failures — 3% (ventilation install seams, $250-$700 repair); (7) ice dam damage — 3% (rare in Charlotte but happens, $500-$5,000 repair); (8) other (HVAC penetrations, satellite dish mounts, etc.) — 2%.",
  },
  {
    question: 'Why doesn\'t my roof leak appear directly above the interior damage?',
    answer:
      "Water rarely flows straight down through a roof system because of the layered construction: (1) shingles deflect water along their installation slope until reaching a low point; (2) underlayment guides water laterally to nearest valley or eave; (3) once past underlayment, water hits decking and travels along nail penetrations and seams; (4) at decking edge, water drips onto attic insulation (then drains gravity-down); (5) water saturates ceiling drywall over hours-to-days, creating the visible stain. The visible interior stain is typically 2-15 feet from the actual roof entry point. This is why DIY leak hunting fails — you have to trace UPHILL through the attic.",
  },
  {
    question: 'Can I find a roof leak without going on the roof?',
    answer:
      "Yes — three ladder-free methods: (1) attic-only diagnostic — trace water staining on rafters and decking from inside the attic with bright flashlight; the entry point is where the staining originates; (2) garden hose test from ground — have helper run hose on roof from extension ladder while you observe from inside attic; (3) infrared imaging — Best Roofing Now's free inspection uses thermal camera to find moisture inside walls/ceilings without any physical access. Strongly recommended over climbing roof — DIY roof climbing is the #1 cause of homeowner falls (CDC data: 247,000+ ER visits annually).",
  },
  {
    question: 'How long can I wait to fix a Charlotte NC roof leak?',
    answer:
      "DON'T WAIT — Charlotte roof leak repair urgency tiers: (1) ACTIVE drip during/after rain = same-day emergency response (mold begins growth in 24-48 hours, attic insulation saturation cascades to drywall failure within 7 days); (2) ceiling stain that grows after rain = within 1-2 weeks (water is regularly intruding, structural decking damage progressing); (3) old/dry stain with no recent growth = within 1-3 months (leak may have been temporarily sealed but underlying flashing failure will return). Best Roofing Now offers same-day emergency tarp service ($250-$650) and within-week permanent repair ($350-$2,500 typical) to prevent damage cascade. Insurance carriers often refuse claims if homeowner waited too long after first noticing damage.",
  },
  {
    question: 'Should I patch a roof leak myself in Charlotte NC?',
    answer:
      "Generally no — DIY roof leak patching is the most common cause of MORE EXPENSIVE permanent damage. Reasons: (1) tar/sealant patches cover the symptom but trap moisture under shingles, accelerating decking rot below; (2) over-patching makes warranty claims void with shingle manufacturers; (3) most DIY patches fail within 1-3 years requiring complete tear-off-and-replace; (4) roof safety risk (falls cause 247,000+ ER visits annually); (5) without identifying root cause, leak returns elsewhere within months. Best Roofing Now offers permanent repair starting at $350 with 2-5 year warranty. For minor pipe boot or shingle replacement, professional repair is typically only 2-5x the DIY material cost but lasts 10-30x longer.",
  },
];

export const metadata: Metadata = {
  title: 'How Do I Find a Roof Leak in My Charlotte NC Home?',
  description:
    "Find Charlotte NC roof leak: 6-step diagnostic from interior stain to entry point. Pipe boots cause 60% of leaks. Free infrared moisture imaging inspection in 30-60 min.",
  keywords: [
    'how to find roof leak Charlotte NC',
    'roof leak diagnosis',
    'pipe boot leak Charlotte',
    'roof leak entry point',
    'attic leak hunt',
    'infrared moisture imaging',
    'roof leak repair urgency',
    'common roof leak sources',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Do I Find a Roof Leak in My Charlotte NC Home?',
    description: '6-step diagnostic. Pipe boots = 60% of Charlotte leaks.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function FindRoofLeakPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How to Find a Roof Leak?', url: PAGE_URL }]} />
      <WebPageSchema name="How Do I Find a Roof Leak in My Charlotte NC Home?" description="Roof leak diagnostic guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Find Roof Leak?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Do I Find a Roof Leak Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Step 1 — find interior evidence (ceiling stain, peeling paint, drywall damage)',
          'Step 2 — entry point is uphill 2-15 ft from interior damage (NEVER directly above)',
          'Step 3 — inspect attic with flashlight, trace staining uphill on rafters/decking',
          'Step 4 — inspect roof exterior at entry zone for 8 common leak sources',
          'Step 5 — hose test (10-15 min on suspect zone, watch from attic)',
          'Step 6 — document with photos for repair quoting',
          'Pipe boots are #1 cause — 60% of all Charlotte roof leaks',
          'Best Roofing Now infrared imaging finds leaks in 30-60 min vs DIY 4-12 hours',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Find Roof Leak?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Search className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Leak Diagnostic Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Do I Find a Roof Leak in My Charlotte NC Home?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Infrared Leak Inspection</Button>
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

      <CTASection title="Same-Day Leak Diagnosis with Infrared" subtitle="Free professional leak inspection finds entry points in 30-60 min. Same-day emergency tarp $250-$650. Permanent repair $350-$2,500 typical with 2-5 yr warranty." />
    </>
  );
}
