import { Metadata } from 'next';
import { Phone, AlertTriangle } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-causes-roof-leaks-charlotte-nc`;
const QUESTION = 'What causes roof leaks in Charlotte NC?';
const ANSWER =
  "Charlotte NC roof leaks have 8 primary causes ranked by frequency: (1) FAILED PIPE BOOTS — 60% of all leaks (rubber gaskets crack from UV exposure after 8-12 yr); (2) VALLEY FLASHING FAILURE — 12% (open-cut valleys without proper ice-and-water shield, or aged metal); (3) CHIMNEY FLASHING — 10% (counterflashing rust, step flashing failure, missing chimney cricket on >30-inch chimneys per NC IRC §R1003.20); (4) SKYLIGHT PERIMETER — 6% (sealant failure, improper flashing, glass-frame separation); (5) MISSING/LIFTED SHINGLES — 4% (wind damage from August-October tropical remnants and severe thunderstorms); (6) RIDGE CAP FAILURES — 3% (ventilation install seam separation, cracked sealant); (7) ICE DAM DAMAGE — 3% (rare in Charlotte but happens during January-February cold snaps, especially north Mecklenburg/Davidson/Cornelius/Huntersville/Lake Norman); (8) OTHER (HVAC penetrations, satellite mounts, wall flashing, dormer joints) — 2%. Underlying contributors: inadequate underlayment (60-70% of failures involve underlayment-level water intrusion), age (most leaks emerge in 15-25 yr roofs), poor original install (corner-cutting on flashing details), tree damage (overhanging branches scraping shingles, falling limbs). Best Roofing Now's free leak inspection identifies your specific cause with infrared moisture imaging in 30-60 minutes.";

const followUpFAQs = [
  {
    question: 'Why do pipe boots fail so often in Charlotte NC?',
    answer:
      "Charlotte NC accelerates pipe boot failure beyond national average due to: (1) intense UV exposure (NC's high UV index degrades EPDM rubber 30-50% faster than northern climates); (2) extreme summer attic temperatures (140-170°F surface temps during July-August bake the rubber); (3) freeze-thaw cycles in winter (rare but rubber expansion/contraction worsens cracks); (4) tree pollen and acidic rain (chemical degradation); (5) wildlife (squirrels and birds occasionally chew exposed rubber). Standard rubber boots last only 8-12 years in Charlotte vs 15-25 years nationally. Lead boots ($250-$500 install) are immune to all failure modes — recommended upgrade during reroof.",
  },
  {
    question: 'How does Charlotte\'s climate cause roof leaks?',
    answer:
      "Five Charlotte NC climate stressors causing roof leaks: (1) HEAVY RAIN — 4-8 inch rainfall events during August-October tropical remnants overload poorly designed valleys and gutters; (2) WIND-DRIVEN RAIN — May-July severe thunderstorms with 60-80 MPH gusts force water under shingles and around penetrations; (3) UV INTENSITY — degrades pipe boots 30-50% faster than northern climates; (4) HUMIDITY — accelerates flashing corrosion and fastener degradation, especially galvanized steel; (5) TEMPERATURE EXTREMES — summer 95-100°F + winter occasional 15-25°F cold snaps create thermal cycling stress on all roof materials. Best protection: synthetic underlayment + ice-and-water shield + lead pipe boots + 50-yr wind-rated shingles (Class 4 impact).",
  },
  {
    question: 'Can I prevent Charlotte NC roof leaks?',
    answer:
      "Yes — 5-step prevention protocol: (1) ANNUAL professional inspection (free with Best Roofing Now) catches small issues before they become leaks; (2) GUTTER cleaning 2-4x per year prevents overflow water intrusion at fascia/eaves; (3) PROACTIVE pipe boot replacement at 8-10 yr (before failure, not after); (4) STORM cleanup after major events (debris removal, lifted shingle inspection, granule loss check); (5) UPGRADE during next reroof — synthetic underlayment, ice-and-water shield in valleys/eaves/penetrations, lead boots, code-compliant chimney cricket. Total prevention cost over 25-year roof lifespan: $3,000-$8,000 (well under cost of one major leak repair $5,000-$30,000).",
  },
  {
    question: 'How quickly should I fix a Charlotte NC roof leak?',
    answer:
      "Don't wait — repair urgency tiers: (1) ACTIVE drip during/after rain = same-day emergency response (mold begins growth in 24-48 hours); (2) ceiling stain that grows after rain = within 1-2 weeks (water is regularly intruding, structural decking damage progressing); (3) old/dry stain with no recent growth = within 1-3 months (leak may have been temporarily sealed but underlying flashing failure will return). Best Roofing Now offers same-day emergency tarp service ($250-$650) and within-week permanent repair ($350-$2,500 typical) to prevent damage cascade. Insurance carriers may refuse claims if homeowner waited too long after first noticing damage.",
  },
  {
    question: 'Are roof leaks covered by Charlotte NC home insurance?',
    answer:
      "Conditional yes — covered (typically): sudden damage from named storms, tree fall, hail, wind damage, fire. NOT covered (typically): gradual wear, age-related failure, lack of maintenance, improper installation. Document everything: photos of damage, contractor estimate, weather data showing storm event. Claim deadline: NC Gen. Stat. §58-3-100 allows 12 months from date of loss for filing. Tips: (1) file claim WITHIN 30 days of damage to maximize approval; (2) get independent contractor estimate (Best Roofing Now provides Xactimate-compatible scoping); (3) NEVER accept first insurance offer without contractor review; (4) NC §58-24-10 prohibits deductible-rebating — be wary of contractors offering this.",
  },
];

export const metadata: Metadata = {
  title: 'What Causes Roof Leaks in Charlotte NC?',
  description:
    "Charlotte NC roof leak causes ranked: pipe boots 60%, valley 12%, chimney 10%, skylight 6%, missing shingles 4%, ridge 3%, ice dams 3%. Free infrared inspection in 30-60 min.",
  keywords: [
    'what causes roof leaks Charlotte NC',
    'common roof leak sources',
    'pipe boot leak',
    'valley flashing leak',
    'chimney leak Charlotte',
    'skylight leak',
    'roof leak prevention',
    'Charlotte climate roof damage',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Causes Roof Leaks in Charlotte NC?',
    description: '8 primary causes ranked by frequency. Pipe boots = 60% of all leaks.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatCausesRoofLeaksPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Causes Roof Leaks?', url: PAGE_URL }]} />
      <WebPageSchema name="What Causes Roof Leaks in Charlotte NC?" description="Roof leak causes guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Leak Causes?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Causes Roof Leaks Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Failed pipe boots — 60% of all Charlotte leaks (rubber gaskets crack 8-12 yr)',
          'Valley flashing failure — 12% (especially open-cut without ice-and-water shield)',
          'Chimney flashing — 10% (rust counterflashing, missing cricket on >30-in chimneys)',
          'Skylight perimeter — 6% (sealant failure, improper flashing)',
          'Missing/lifted shingles — 4% (wind damage from storms)',
          'Ridge cap failures — 3% (ventilation install seams)',
          'Ice dam damage — 3% (rare but happens, mostly north Mecklenburg/LKN)',
          'Other (HVAC, satellite, wall flashing) — 2%',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Leak Causes?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Leak Causes Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Causes Roof Leaks in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Leak Cause Inspection</Button>
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

      <CTASection title="Identify Your Specific Leak Cause" subtitle="Free infrared moisture imaging inspection finds entry point and root cause in 30-60 min. Same-day emergency tarp $250-$650. Permanent repair $350-$2,500." />
    </>
  );
}
