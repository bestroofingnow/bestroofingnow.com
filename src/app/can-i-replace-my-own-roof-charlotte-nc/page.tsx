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

const PAGE_URL = `${SITE_CONFIG.url}/can-i-replace-my-own-roof-charlotte-nc`;
const QUESTION = 'Can I replace my own roof in Charlotte NC?';
const ANSWER =
  'Technically yes — North Carolina law allows homeowners to perform work on their own primary residence without a contractor license, BUT replacing your own roof in Charlotte NC is almost always a bad idea for 7 reasons: (1) safety risk — fall fatalities are the #1 cause of construction deaths, with steep-slope work being particularly dangerous; (2) manufacturer warranties (GAF, CertainTeed, OC) require certified installer credentials and are voided by DIY work — you lose 50-yr non-prorated coverage; (3) homeowner insurance may deny future claims related to DIY-installed roofs; (4) you still need a Mecklenburg County permit, and inspectors are stricter on DIY work; (5) materials cost is typically only 30-40% of pro pricing — you save labor but inherit ALL the risk; (6) labor cost savings ($3,000-$8,000 for a typical 30-square Charlotte home) rarely offset the time investment (60-100+ hours for a homeowner) plus tool rental and dump fees; (7) mistakes (improper underlayment, missed flashing, wrong ventilation) cause leaks within 1-3 years that cost $5,000-$25,000 to remediate. Best Roofing Now provides honest written estimates so you can compare DIY total cost vs professional installation with full warranty.';

const followUpFAQs = [
  {
    question: 'How much can I actually save by DIY-roofing my home?',
    answer:
      "For a typical 30-square Charlotte home: materials run $3,500-$7,000 (architectural shingles, underlayment, drip edge, ridge vent, flashings, fasteners). Pro install adds $7,500-$15,000 in labor (the contractor's profit margin is typically only 15-25% of total cost). Realistic DIY savings: $4,000-$8,000. But you lose: 50-year non-prorated manufacturer warranty (worth $5,000-$15,000 in protection), expert craftsmanship, ladder/scaffold safety equipment, dump fees ($300-$800), permit pulling, code-compliance verification. Net financial benefit is often negative once you factor in risk and warranty value.",
  },
  {
    question: 'What roofing tasks are appropriate for DIY?',
    answer:
      "Safe DIY roof tasks: cleaning gutters from a ladder with proper safety; replacing a single missing shingle with sealant tube; small attic insulation top-up. Tasks requiring professionals: full reroof, slope-section replacement, flashing replacement, decking repair, ridge vent installation, anything requiring you to walk on the roof. Roof work has a 30-50x higher injury rate than gutter cleaning. The roof is one home project where the safety calculus genuinely favors hiring a pro.",
  },
  {
    question: 'Do I lose my homeowner\'s insurance if I install my own roof?',
    answer:
      "Most NC homeowner's insurance policies have a clause requiring 'professional installation' for major systems like roofs. DIY roofing typically doesn't void your existing policy directly, but it CAN cause claim denial if a future leak or storm damage is traced to DIY workmanship issues (improper nail patterns, missing ice-and-water shield, wrong underlayment). Some carriers will refuse to renew a policy if they discover un-permitted or DIY major systems during a routine inspection.",
  },
  {
    question: 'What is the most common DIY roofing mistake?',
    answer:
      "Top 5 DIY roof mistakes (in order of frequency): (1) improper nail placement — nails too high cause shingle blow-off in wind, nails too low cause leaks; (2) missing ice-and-water shield at eaves and valleys (NC code requires 3-6 ft from eave); (3) inadequate ventilation — DIYers commonly skip ridge vent or block soffit intake, voiding warranties; (4) drip edge installed wrong (must tuck under starter shingle and over gutter back); (5) wrong underlayment (felt #15 fails in Charlotte humidity — synthetic is required for warranty).",
  },
  {
    question: 'Should I get a professional estimate before deciding DIY?',
    answer:
      "Absolutely yes. Best Roofing Now's free written estimate gives you the real number to compare against — including manufacturer materials at trade pricing (you can't buy at the same price as a Master Elite contractor), labor breakdown, permit fees, dump fees, and warranty value. Many homeowners discover the actual savings is $2,000-$4,000 — not enough to justify the risk and warranty loss. The estimate is free, no obligation, and gives you real numbers to make the right call.",
  },
];

export const metadata: Metadata = {
  title: 'Can I Replace My Own Roof in Charlotte NC?',
  description:
    "Can I DIY roof replacement in Charlotte NC? Legally yes, but loses 50-year warranty + insurance coverage and saves only $2-4K. Honest analysis from Best Roofing Now.",
  keywords: [
    'can I replace my own roof Charlotte NC',
    'DIY roof replacement Charlotte',
    'replace own roof legally NC',
    'DIY roof cost savings',
    'homeowner roof replacement DIY',
    'is it worth DIYing my roof',
    'DIY roofing risks',
    'DIY vs hire roofer',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Can I Replace My Own Roof in Charlotte NC? | Best Roofing Now',
    description: 'Honest analysis of DIY roof replacement in Charlotte — savings vs warranty loss and safety risks.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function CanIReplaceMyOwnRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Can I Replace My Own Roof?', url: PAGE_URL }]} />
      <WebPageSchema name="Can I Replace My Own Roof in Charlotte NC?" description="Honest analysis of DIY roof replacement in Charlotte." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Can I Replace My Own Roof?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Can I Replace My Own Roof Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Legally yes — NC allows homeowner work on primary residence without a contractor license',
          'Safety risk — fall fatalities are #1 construction death cause; steep-slope is particularly dangerous',
          'Voids manufacturer warranty — GAF/CertainTeed/OC require certified installer credentials',
          'Insurance claim risk — DIY workmanship issues can cause future claim denial',
          'Permit still required — Mecklenburg County inspectors are stricter on DIY work',
          'Real savings $2-4K — labor savings minus tool rental, dump fees, time investment',
          'Common DIY mistakes — nail placement, missing ice-and-water shield, wrong ventilation, wrong underlayment',
          'Get a free written estimate first — compare real DIY total cost vs pro install with warranty',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Can I DIY My Roof?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Honest DIY Analysis</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">Can I Replace My Own Roof in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Free Pro Estimate to Compare</Button>
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

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Why DIY Roofing Usually Costs More in the Long Run</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Loss of 50-year non-prorated manufacturer warranty (worth $5,000-$15,000 in coverage value).',
                'DIY mistakes cause leaks within 1-3 years costing $5,000-$25,000 to remediate.',
                'Insurance claim denial risk on future storm damage if traced to DIY workmanship.',
                'Time investment 60-100+ hours for a typical 30-square home, including learning curve.',
                'Real labor savings only $2,000-$4,000 after tool rental, dump fees, and material trade-pricing gap.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

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

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-slate-800 mb-3">
                <strong>Get the real numbers before you decide.</strong> A free Best Roofing Now estimate shows you actual professional pricing with warranty value — most homeowners decide DIY isn&apos;t worth the savings.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                Schedule Free Estimate <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Get the Real Numbers First" subtitle="Free written estimate with line-item materials, labor, and warranty value — the only way to honestly compare DIY vs professional install." />
    </>
  );
}
