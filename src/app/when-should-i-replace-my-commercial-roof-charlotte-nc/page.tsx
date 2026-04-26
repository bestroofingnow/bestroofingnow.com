import { Metadata } from 'next';
import { Phone, Calendar } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/when-should-i-replace-my-commercial-roof-charlotte-nc`;
const QUESTION = 'When should I replace my commercial roof in Charlotte NC?';
const ANSWER =
  "Replace your Charlotte NC commercial roof when 4 or more of these 8 indicators are present: (1) age — system is at or beyond expected lifespan (TPO 20-30 yr, EPDM 25-40, PVC 25-35, modified bitumen 15-25, BUR 20-30, standing seam metal 50+); (2) chronic leaks — multiple repair attempts in the same zone within 12 months; (3) saturated insulation discovered via infrared moisture survey (over 25% of roof area is decisive); (4) widespread seam failures requiring continuous patching; (5) NDL warranty expired without renewal eligibility; (6) energy costs rising due to insulation degradation (R-value loss); (7) building expansion or HVAC upgrade requires roof modifications anyway; (8) approaching property sale where new roof certification adds 5-10% appraisal value. Best Roofing Now's free commercial inspection (with infrared moisture survey for $350-$900) provides a written repair-vs-coat-vs-replace recommendation with line-item economics. Often a $40K silicone restoration coating extends an existing roof 10-15 years versus $200K+ full replacement — the right call depends on building plans and capex availability.";

const followUpFAQs = [
  {
    question: 'What is the lifespan of each commercial roof system in Charlotte?',
    answer:
      "Charlotte NC commercial roof system lifespans: TPO 20-30 years (60-mil mechanically attached lower end, fully adhered higher end); EPDM 25-40 years (60+ year proven track record on parapet-walled buildings); PVC 25-35 years (chemical/grease-resistant for restaurants and manufacturing); modified bitumen 15-25 years (torch-down or self-adhered for parapet walls); built-up tar-and-gravel 20-30 years (legacy systems still common on older buildings); standing seam metal 50+ years (typically the LAST roof a building gets); silicone/acrylic restoration coatings 10-15 years (recoatable to extend further).",
  },
  {
    question: 'Can I just keep repairing my old commercial roof?',
    answer:
      "Eventually no — there's a crossover point where ongoing repairs cost more than replacement. The math: typical commercial roof repair $1,500-$8,000 per occurrence; if you're spending $10K+ annually on repairs for a roof that's failing systemically, full replacement at $100-$300K amortizes over 20-30 years much more economically. Best Roofing Now's commercial inspection isolates whether your roof is in 'one-off repair' vs 'systemic failure' phase. Insurance carriers often pressure replacement when claims become frequent.",
  },
  {
    question: 'Should I coat or replace my Charlotte commercial roof?',
    answer:
      "Coat (silicone or acrylic restoration) when: (1) roof is structurally sound with no saturated insulation; (2) under 25 years old; (3) no widespread membrane failure; (4) you want to defer capex 10-15 years; (5) you qualify for Duke Energy commercial cool-roof rebates. Replace when: (1) roof is 25+ years old AND showing systemic failure; (2) saturated insulation in 25%+ of roof area; (3) widespread seam separation requiring continuous patching; (4) NDL warranty expired without renewal; (5) building modifications require new roof anyway. Best Roofing Now's free written assessment includes economic analysis of both paths.",
  },
  {
    question: 'What\'s the best time of year to replace a commercial roof in Charlotte?',
    answer:
      "Best timing for Charlotte commercial reroofs: (1) October-November (ideal — temperatures 60-75°F, low humidity, low rain probability); (2) March-April (second-best — pre-storm season, before May-June hail belt and August-October tropical remnants); (3) avoid July-August (extreme heat slows crews, roof surface temps hit 150°F+); (4) winter (December-February) workable for cold-weather-rated systems with proper installation. Off-season scheduling (January-March) saves 5-10% with shorter lead times. Storm-damage emergency replacements happen any time of year with same-week scheduling.",
  },
  {
    question: 'How long should I budget for a commercial roof replacement?',
    answer:
      "Budget timeline for a typical 20,000 sq ft commercial reroof in Charlotte: (1) decision and contractor selection — 4-8 weeks (3+ written estimates, board/management approval); (2) contract and material order — 2-4 weeks (especially for custom-fabricated metal panels); (3) install scheduling — 4-8 weeks lead time during peak season, 1-2 weeks off-season; (4) install duration — 7-21 days depending on system and complexity; (5) NDL warranty registration — 14-30 days post-install. Total from decision to completion: 3-5 months typical. Storm-damage emergencies compress this to 4-8 weeks.",
  },
];

export const metadata: Metadata = {
  title: 'When Should I Replace My Commercial Roof in Charlotte NC?',
  description:
    "Replace Charlotte NC commercial roof when 4+ of 8 indicators present: age, chronic leaks, saturated insulation, seam failures, expired warranty, energy loss, modifications, sale prep.",
  keywords: [
    'when replace commercial roof Charlotte NC',
    'commercial roof replacement timing',
    'TPO replacement timing',
    'commercial roof age',
    'flat roof replacement decision',
    'commercial roof warranty expired',
    'coat or replace commercial roof',
    'commercial roof end of life',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'When Should I Replace My Commercial Roof in Charlotte NC?',
    description: '8 indicators for commercial roof replacement timing. Coat vs replace decision.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhenReplaceCommercialRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'When to Replace Commercial Roof?', url: PAGE_URL }]} />
      <WebPageSchema name="When Should I Replace My Commercial Roof in Charlotte NC?" description="Commercial roof replacement timing guide for Charlotte NC building owners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'When Replace Commercial?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="When Should I Replace My Commercial Roof Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Age — at or beyond expected system lifespan (TPO 20-30, EPDM 25-40, PVC 25-35, etc.)',
          'Chronic leaks — multiple repair attempts in same zone within 12 months',
          'Saturated insulation in 25%+ of roof area (verified by infrared moisture survey)',
          'Widespread seam failures requiring continuous patching',
          'NDL warranty expired without renewal eligibility',
          'Energy costs rising due to R-value insulation degradation',
          'Building expansion or HVAC upgrade requires roof modifications anyway',
          'Approaching property sale — new roof adds 5-10% appraisal value',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'When Replace Commercial?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Calendar className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Commercial Replacement Timing</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">When Should I Replace My Commercial Roof in Charlotte NC?</h1>
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

      <CTASection title="Coat, Repair, or Replace? We'll Tell You Honestly." subtitle="Free commercial inspection with infrared moisture survey. Written repair-vs-coat-vs-replace economic analysis. NDL warranties from 5 authorized manufacturers." />
    </>
  );
}
