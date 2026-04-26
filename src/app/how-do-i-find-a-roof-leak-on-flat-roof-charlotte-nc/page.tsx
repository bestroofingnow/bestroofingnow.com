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

const PAGE_URL = `${SITE_CONFIG.url}/how-do-i-find-a-roof-leak-on-flat-roof-charlotte-nc`;
const QUESTION = 'How do I find a roof leak on a flat commercial roof in Charlotte NC?';
const ANSWER =
  "Finding a leak on a Charlotte NC flat commercial roof requires systematic diagnosis since water travels significant distances along the membrane and decking before showing inside. Best Roofing Now's 6-step diagnostic: (1) infrared moisture survey — thermal camera identifies saturated insulation showing where water is entering and pooling under the membrane (most accurate method, $350-$900 cost); (2) ponding water inspection — every ponding area is a potential failure point; (3) seam walk — inspect every linear foot of seam, especially T-joints and patches; (4) flashing inspection at all penetrations (HVAC curbs, drains, scuppers, pipe boots, parapet walls); (5) core-cut sampling at suspect areas to verify deck condition and existing layers; (6) water test if needed — controlled water introduction at suspect areas to confirm leak path. DIY leak detection is unreliable on flat roofs because the entry point is often 10-30+ feet from the interior drip location. Professional infrared survey identifies hidden problems before they cause major water damage. 1-4 hour emergency tarp dispatch available 24/7 by zone.";

const followUpFAQs = [
  {
    question: 'Why is finding a flat-roof leak harder than a sloped-roof leak?',
    answer:
      "Flat roofs have 4 unique characteristics that complicate leak detection: (1) water travels horizontally along the membrane and saturates insulation before finding a path through the deck; (2) entry points are often 10-30+ feet from interior drip locations as water follows the path of least resistance; (3) seams and flashing transitions are the most common failure points (not membrane field); (4) saturated insulation hides under intact membrane — visible inspection misses it. Infrared moisture surveys solve this by detecting temperature differences between wet and dry insulation through the membrane.",
  },
  {
    question: 'How much does an infrared moisture survey cost in Charlotte?',
    answer:
      "Infrared moisture surveys for commercial flat roofs in Charlotte typically cost $350-$900 standalone for buildings under 50,000 sq ft, scaling up by sq ft beyond that. The survey is bundled with comprehensive commercial roof inspection: 30+ thermal images, marked-up satellite or roof drawing showing wet areas, written report with repair recommendations, Xactimate-format pricing for repair vs replacement options. Best Roofing Now applies the inspection cost as a credit toward the project if you proceed with repairs or replacement.",
  },
  {
    question: 'Can I do a water test on my own flat roof?',
    answer:
      "Limited DIY water test is possible but rarely reliable. Process: (1) plug nearest roof drain to contain water; (2) introduce water with a garden hose at suspect area; (3) have someone inside watch for drip location to start; (4) move water area until drip starts; (5) the entry point is upstream from where the drip starts. Limitations: (a) requires 2 people; (b) entry can take 10-30 minutes per area to manifest; (c) easy to miss multiple entry points; (d) flat-roof access requires safety equipment. Best left to professional roofers with proper safety gear and experience.",
  },
  {
    question: 'What are the most common flat-roof leak sources in Charlotte commercial buildings?',
    answer:
      "Top 5 flat-roof leak sources: (1) seam failures — TPO/EPDM seams pull apart over time; (2) flashing failures at HVAC curbs (most common — large penetrations with constant thermal cycling); (3) pitch-pocket failures around conduit and pipe penetrations (sealant cracks, shrinks, or pulls away); (4) parapet wall coping cracks (water enters at the top, channels behind the wall); (5) drain-pan failures or clogged drains causing localized ponding water that exceeds membrane design tolerance. Most of these are visible during a professional walk-through with experienced eye.",
  },
  {
    question: 'Should I repair leaks myself or hire a commercial roofer?',
    answer:
      "Hire a commercial roofer for flat-roof leaks. DIY repair on commercial flat roofs has 4 critical risks: (1) wrong sealant can degrade the membrane (silicone on TPO, for example, prevents future welded patching); (2) DIY repair voids manufacturer NDL warranty if done by non-authorized installer; (3) safety risk on flat-roof edges without proper fall protection; (4) failure to identify root cause means repeated leaks. Professional repair from Best Roofing Now is typically $500-$3,500 depending on scope vs $25,000-$50,000+ in interior water damage from a missed leak.",
  },
];

export const metadata: Metadata = {
  title: 'How Do I Find a Roof Leak on a Flat Commercial Roof in Charlotte NC?',
  description:
    "Finding flat-roof leaks in Charlotte NC: infrared moisture survey ($350-900), seam inspection, flashing check, water test. Water travels 10-30+ ft from entry to drip location.",
  keywords: [
    'how to find flat roof leak Charlotte NC',
    'commercial roof leak detection',
    'infrared moisture survey roof',
    'flat roof leak diagnosis',
    'TPO leak repair Charlotte',
    'EPDM leak detection',
    'commercial roof inspection',
    'flat roof leak source',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Do I Find a Roof Leak on a Flat Commercial Roof in Charlotte NC?',
    description: '6-step diagnostic with infrared moisture survey identifies hidden flat-roof leaks.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowToFindFlatRoofLeakPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How to Find Flat Roof Leak?', url: PAGE_URL }]} />
      <WebPageSchema name="How Do I Find a Roof Leak on a Flat Commercial Roof in Charlotte NC?" description="Flat-roof leak detection guide for Charlotte NC commercial buildings." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Flat Roof Leak?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Do I Find a Flat Roof Leak Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Infrared moisture survey — thermal camera detects saturated insulation under intact membrane',
          'Ponding water inspection — every ponding area is potential failure point',
          'Seam walk — inspect every linear foot, especially T-joints and patches',
          'Flashing inspection at all HVAC curbs, drains, scuppers, pipe boots, parapet walls',
          'Core-cut sampling — verify deck condition and existing layers at suspect areas',
          'Controlled water test if needed — confirms leak path',
          'Water travels 10-30+ ft from entry point to interior drip',
          '1-4 hour emergency tarp dispatch available 24/7 by zone',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Find Flat Roof Leak?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Search className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Commercial Leak Diagnosis</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Do I Find a Roof Leak on a Flat Commercial Roof in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Schedule Infrared Survey</Button>
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

      <CTASection title="Find the Leak Source. Stop the Damage." subtitle="Infrared moisture survey identifies hidden saturated insulation. 1-4 hour emergency tarp dispatch by zone. Inspection cost credited to project if you proceed." />
    </>
  );
}
