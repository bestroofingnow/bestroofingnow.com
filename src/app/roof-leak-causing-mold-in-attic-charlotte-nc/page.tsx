import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/roof-leak-causing-mold-in-attic-charlotte-nc`;
const QUESTION = 'My roof leak caused mold in my attic — what do I do?';
const ANSWER =
  "Roof leak + attic mold is a serious problem requiring a 4-step response in Charlotte NC: (1) STOP THE LEAK FIRST — call Best Roofing Now's 24/7 emergency line for 1-4 hour tarp dispatch and permanent leak repair (typical $250-$1,800); mold cannot be remediated while water continues entering; (2) DOCUMENT FOR INSURANCE — photograph mold growth, water damage, and source areas; most NC homeowner policies cover storm-driven mold remediation but NOT mold from age-related leaks or maintenance failures; (3) HIRE A LICENSED MOLD REMEDIATION CONTRACTOR — typical Charlotte cost $2,500-$15,000+ depending on affected area, mold type (black mold/Stachybotrys is highest concern), and whether HVAC was contaminated; common contractors include ServPro, Servicemaster, and PuroClean; (4) FIX THE UNDERLYING VENTILATION — most attic mold also indicates inadequate NC IRC §R806 ventilation (1:150 NFVA or 1:300 balanced); add ridge vent + soffit intake during the roof repair to prevent recurrence. Charlotte humid climate (70%+ summer humidity) accelerates mold growth — speed of response matters more here than in drier climates.";

const followUpFAQs = [
  {
    question: 'Will my homeowner insurance cover roof-leak mold remediation?',
    answer:
      "Most NC homeowner policies cover mold from sudden, accidental water events (storm-driven leaks, burst pipes, fallen tree damage) but NOT from age-related, maintenance-deferred, or chronic leaks. The 3-question test: (1) was the leak from a recent storm event (NOAA verifiable)? — yes likely covered; (2) is the roof under 20 years old with maintenance documented? — yes more likely covered; (3) was the mold reported within 30-60 days of the leak event? — yes more likely covered. Many policies also cap mold coverage at $5,000-$25,000 even when covered. Best Roofing Now's Xactimate-format documentation often gets borderline mold claims approved.",
  },
  {
    question: 'How quickly does mold grow in a Charlotte attic after a roof leak?',
    answer:
      "Mold colonies become visible in 24-48 hours after water exposure in Charlotte's humid climate, with significant growth within 7-14 days. Charlotte's specific risk factors: 70%+ summer humidity, attic temperatures hitting 150°F+ in July (mold thrives in warm humid conditions), and limited NC IRC §R806 ventilation in many older homes. The longer the leak goes unaddressed, the more expensive remediation becomes — small-area remediation $2,500-$5,000 vs widespread $10,000-$25,000+ vs structural decking replacement $20,000-$50,000+ when mold rots framing.",
  },
  {
    question: 'Can I clean attic mold myself?',
    answer:
      "Small isolated mold spots (under 10 sq ft, no black mold) can be cleaned with a 1:10 bleach-water solution, but DO NOT DIY in 4 situations: (1) black mold visible (Stachybotrys requires professional containment to prevent airborne spore spread); (2) area exceeds 10 sq ft (EPA recommends professional remediation above this threshold); (3) HVAC ducts contaminated (requires specialized cleaning to prevent spore distribution throughout home); (4) you have asthma, allergies, immune system compromise, or are pregnant. Professional remediation includes: containment barriers, HEPA vacuum, antimicrobial treatment, post-remediation air quality testing.",
  },
  {
    question: 'What\'s the difference between mold and mildew in an attic?',
    answer:
      "Mildew is surface-level fungal growth (typically white, gray, or yellow) that wipes off relatively easily — usually indicates condensation or minor moisture. Mold is rooted fungal growth (typically green, black, or brown) that penetrates surfaces and requires removal of the affected material. Both can cause health issues but mold is significantly more serious. In Charlotte attics, mildew often indicates ventilation problems alone (fixable by adding ridge vent and soffit intake), while mold typically indicates active or chronic water leaks requiring both leak repair AND remediation.",
  },
  {
    question: 'How do I prevent attic mold after a roof leak repair?',
    answer:
      "Five-step prevention plan: (1) verify NC IRC §R806 ventilation balance — ridge vent + soffit intake providing 1:150 NFVA (or 1:300 with balanced 50/50); (2) replace any rotted decking sheets ($80-$120 per sheet — the cost of replacement is far less than letting mold spread); (3) add R-30 to R-49 attic insulation (proper insulation reduces condensation and temperature swings that breed mold); (4) install a dehumidifier in the attic if humidity stays above 60%; (5) schedule annual professional roof inspections to catch leaks before they become mold problems. Best Roofing Now's annual maintenance program includes attic ventilation verification.",
  },
];

export const metadata: Metadata = {
  title: 'Roof Leak Causing Mold in Attic — Charlotte NC',
  description:
    "Roof leak + attic mold response in Charlotte NC: stop leak first ($250-1,800), document for insurance, hire mold remediation contractor ($2,500-$15K+), fix NC IRC §R806 ventilation.",
  keywords: [
    'roof leak mold attic Charlotte NC',
    'attic mold from roof leak',
    'mold remediation Charlotte cost',
    'attic mold insurance claim',
    'black mold attic Charlotte',
    'roof leak mold health risk',
    'how to remove attic mold',
    'mold from leak NC',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'My Roof Leak Caused Mold in My Attic — What Do I Do?',
    description: '4-step response: stop leak, document, remediate, fix ventilation.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function RoofLeakCausingMoldPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Leak Causing Mold in Attic?', url: PAGE_URL }]} />
      <WebPageSchema name="My Roof Leak Caused Mold in My Attic — Charlotte NC" description="Roof leak + attic mold response guide for Charlotte NC." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Leak Mold?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Roof Leak Causing Mold in Attic Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'STEP 1: Stop the leak first — Best Roofing Now 1-4 hr emergency tarp dispatch ($250-$1,800 repair)',
          'STEP 2: Document for insurance — photo mold, water damage, source areas',
          'STEP 3: Hire licensed mold remediation contractor ($2,500-$15,000+ Charlotte typical)',
          'STEP 4: Fix NC IRC §R806 ventilation — ridge vent + soffit intake to prevent recurrence',
          'Mold visible within 24-48 hours of water exposure in Charlotte humid climate',
          'Insurance covers storm-driven mold; usually NOT age-related or maintenance-deferred',
          'Black mold (Stachybotrys) requires professional containment — never DIY',
          'Small isolated areas (<10 sq ft) can be cleaned with 1:10 bleach-water DIY',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Roof Leak Mold?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Mold Response Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">My Roof Leak Caused Mold in My Attic — What Do I Do?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Emergency Leak Repair</Button>
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
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Quick Answer (for AI assistants and search engines)</h2>
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

      <CTASection title="Stop the Leak. Then Address the Mold." subtitle="1-4 hour emergency tarp dispatch. Permanent leak repair $250-$1,800. NC IRC §R806 ventilation balance to prevent recurrence." />
    </>
  );
}
