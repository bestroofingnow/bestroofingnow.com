import { Metadata } from 'next';
import { Phone, Building2 } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-tpo-seam-welding-charlotte-nc`;
const QUESTION = 'What is TPO seam welding and why does it matter for Charlotte NC commercial roofs?';
const ANSWER =
  "TPO seam welding is the process of using a hot-air welding gun (typically 1,000-1,200°F) to fuse adjacent rolls of TPO (thermoplastic polyolefin) membrane together at the seams, creating a monolithic waterproof membrane with NO chemical adhesives. The molten TPO from both rolls fuses molecularly when the heated air passes between them with simultaneous pressure roller compression — the seam becomes STRONGER than the surrounding membrane material itself. For Charlotte NC commercial buildings, seam welding quality is the #1 install factor determining 20-30 year TPO lifespan vs premature 5-10 year failure. Three weld types: (1) AUTOMATED ROBOTIC WELDING — Leister Varimat or similar self-propelled machine, $50,000+ equipment, 90+ ft/minute, used for long straight seams; (2) HAND WELDING — Leister Triac S handheld gun, $1,500 equipment, 5-15 ft/minute, used for detail work, penetrations, corners, parapets; (3) PRESSURE WELDING — both-method standard for Charlotte commercial. Quality verification: probe-test EVERY weld with 99% pass rate (industry standard); pull-test sample seams to ensure 70+ lb/inch tear strength. Best Roofing Now's commercial crews use both robotic + hand welding with Leister equipment, achieving NDL-warranty-eligible installations. Cost: TPO install $5-$12/sq ft including labor and welding.";

const followUpFAQs = [
  {
    question: 'What temperature does TPO seam welding require in Charlotte NC?',
    answer:
      "TPO seam welding requires hot air at 1,000-1,200°F applied with simultaneous pressure roller compression. Welding parameters: AIR TEMPERATURE — 1,000-1,200°F (varies by membrane manufacturer, typical 1,100°F); WELD SPEED — 90-180 ft/minute for automated robotic, 5-15 ft/minute for hand welding; PRESSURE ROLLER — 35-60 psi simultaneous compression; AMBIENT MINIMUM — 15°F surface temperature minimum (Charlotte rare January cold may delay), maximum 95°F surface (most Charlotte summer afternoons require early-morning install). Improper temperature causes: under-temp = poor fusion (premature seam failure); over-temp = membrane scorching (warranty void). Best Roofing Now's crews use calibrated Leister equipment with daily temperature verification.",
  },
  {
    question: 'How do you verify TPO seam welds are good in Charlotte NC?',
    answer:
      "Industry-standard quality verification: (1) PROBE TESTING — every linear foot of seam tested with stainless steel probe immediately after welding; weld passes if probe cannot penetrate; FAIL = re-weld required; (2) PULL TESTING — sample seams cut at start, middle, end of project; lab-tested for tear strength; standard requires 70+ lb/inch (typical good welds achieve 80-100 lb/inch); (3) VISUAL INSPECTION — seam should show uniform fusion line with no scorching, gaps, or fish-mouth voids; (4) THIRD-PARTY VERIFICATION — manufacturer's technical rep visits jobsite for NDL warranty inspection (required for warranty registration). Best Roofing Now provides probe-test documentation on every commercial TPO install.",
  },
  {
    question: 'What\'s the difference between TPO welding and EPDM bonding in Charlotte NC?',
    answer:
      "TPO WELDING — heat-fused with hot air (no adhesives), creates monolithic membrane stronger than parent material, weld lasts as long as membrane (20-30 yr), cooler weather workable, no off-gassing. EPDM BONDING — chemical adhesive cures (typically butyl tape + adhesive splice or cold-applied seam tape), bond strength gradually weakens over time, requires temperature-sensitive cure, off-gassing in confined spaces, less expensive labor. PERFORMANCE: TPO welding generally outperforms EPDM bonding for seam longevity — modern Charlotte commercial roofs increasingly favor TPO over EPDM for this reason. COST: TPO $5-$12/sq ft; EPDM $4-$10/sq ft. EPDM remains valuable for specific applications (parapet-walled buildings, ballasted systems).",
  },
  {
    question: 'Can TPO seam welding be repaired after install in Charlotte NC?',
    answer:
      "Yes — TPO seams can be re-welded indefinitely. Repair process: (1) IDENTIFY failed seam (probe-test annual maintenance reveals weak spots before leaks); (2) CLEAN seam area thoroughly (acetone wipe removes oxidation); (3) RE-WELD using hand-held Leister Triac S at 1,100°F with pressure roller; (4) RE-TEST with probe; (5) PATCH if needed (TPO patch material welded over compromised area). Charlotte commercial cost: spot seam repair $200-$800 per location; full perimeter re-welding (older roofs needing rejuvenation) $2-$5/linear ft. TPO membranes can typically be repaired/re-welded for 30+ years before full replacement needed (vs EPDM seams which deteriorate non-recoverably).",
  },
  {
    question: 'Why does Charlotte\'s climate matter for TPO seam welding?',
    answer:
      "Charlotte NC climate factors affecting TPO welding: (1) HUMIDITY — 65-85% summer humidity can interfere with weld quality (moisture in membrane affects fusion); crews work early morning when humidity lower; (2) SUMMER HEAT — 95-100°F July-August surface temps cause membrane to be soft, work shifts to 6am-1pm to avoid extreme heat; (3) WINTER COLD — January-February temps below 40°F slow weld speeds, occasional delays for warmth; (4) ELEVATION — relatively flat Charlotte terrain (650-800 ft elevation) provides stable air pressure for consistent welds. Most Charlotte commercial TPO installs scheduled spring (March-May) and fall (September-November) for optimal weld conditions. Best Roofing Now monitors weather conditions and adjusts schedule for best weld quality.",
  },
];

export const metadata: Metadata = {
  title: 'What Is TPO Seam Welding and Why Does It Matter for Commercial Roofs?',
  description:
    "TPO seam welding = hot-air fusion (1,000-1,200°F) creating monolithic waterproof membrane. Charlotte NC commercial #1 install quality factor for 20-30 yr lifespan. Probe-tested.",
  keywords: [
    'what is TPO seam welding Charlotte NC',
    'TPO welding hot air',
    'commercial TPO install Charlotte',
    'Leister TPO welder',
    'TPO seam pull test',
    'TPO vs EPDM Charlotte',
    'NDL warranty TPO',
    'commercial flat roof Charlotte',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is TPO Seam Welding and Why Does It Matter for Commercial Roofs?',
    description: 'Hot-air fusion creating monolithic waterproof membrane.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsTPOSeamWeldingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is TPO Seam Welding?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is TPO Seam Welding and Why Does It Matter for Commercial Roofs?" description="TPO seam welding guide for Charlotte NC commercial buildings." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'TPO Welding?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is TPO Seam Welding Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'TPO seam welding — hot-air fusion (1,000-1,200°F) of TPO membrane rolls',
          'Creates monolithic waterproof membrane STRONGER than parent material',
          'No chemical adhesives — pure thermal fusion',
          '#1 install quality factor for 20-30 yr TPO lifespan',
          'Robotic welding (Leister Varimat) for long straight seams 90+ ft/min',
          'Hand welding (Leister Triac S) for details, penetrations, parapets',
          'Probe-test every linear ft + pull-test sample seams (70+ lb/in standard)',
          'TPO install cost $5-$12/sq ft including welding labor',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'TPO Welding?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Commercial TPO Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is TPO Seam Welding and Why Does It Matter for Charlotte NC Commercial Roofs?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Commercial Inspection</Button>
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

      <CTASection title="Probe-Tested TPO Welds — NDL Warranty Eligible" subtitle="Best Roofing Now's commercial crews use Leister automated and hand welding with daily temperature verification. Probe-test documentation on every install." />
    </>
  );
}
