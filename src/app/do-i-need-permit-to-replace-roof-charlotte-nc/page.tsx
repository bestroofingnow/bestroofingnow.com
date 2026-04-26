import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/do-i-need-permit-to-replace-roof-charlotte-nc`;
const QUESTION = 'Do I need a permit to replace my roof in Charlotte NC?';
const ANSWER =
  'Yes — replacing a roof in Charlotte NC almost always requires a building permit pulled from Mecklenburg County Code Enforcement (or the relevant municipality if outside Mecklenburg). The permit costs typically $100-$300, requires submission of contractor license and insurance, and triggers a final inspection by the county. Per NC Residential Code, any roof replacement involving structural changes, decking replacement, or full tear-off requires a permit. Spot repairs covering less than one square (100 sq ft) and minor flashing repairs typically do not require a permit. CRITICAL: the contractor must pull the permit, not the homeowner — if a contractor asks you to pull the permit yourself, that is a major red flag indicating the contractor may not be properly licensed or insured. Best Roofing Now pulls all required permits as part of every reroof project.';

const followUpFAQs = [
  {
    question: 'How long does it take to get a Charlotte roofing permit?',
    answer:
      "Standard residential roofing permits in Mecklenburg County are typically issued within 1-3 business days of submission. Same-day permits are available for emergency storm-damage replacements. Larger commercial reroofs requiring engineering review can take 5-10 business days. Best Roofing Now pulls all permits and handles the submission — homeowners never need to deal with the permit office directly.",
  },
  {
    question: 'What happens if I replace my roof without a permit?',
    answer:
      "Replacing a roof without a permit in Charlotte NC creates 4 serious problems: (1) the work fails code inspection if discovered, requiring tear-off and re-do at full cost; (2) homeowner's insurance may deny future claims related to the un-permitted work; (3) selling the home requires permit history disclosure — un-permitted work can kill a sale or force a buyer credit; (4) the unlicensed/unpermitted contractor likely lacks proper liability insurance, leaving you legally responsible if a worker is injured. Always verify your contractor pulls the permit.",
  },
  {
    question: 'Does Charlotte require a permit for roof repairs?',
    answer:
      "Minor repairs typically don't require a permit: replacing a few missing shingles, resealing flashings, repairing a single pipe boot, or patching a small area under 100 sq ft (one square). Larger repairs DO require a permit: replacing more than one slope, replacing decking sheets, structural repairs to rafters or trusses, or any work crossing the 25% damage threshold (NC IRC §R908.3). When in doubt, Best Roofing Now pulls a permit to protect your insurance coverage and code compliance.",
  },
  {
    question: 'Are HOA approvals required separate from city permits?',
    answer:
      "Yes — HOA architectural-review-board (ARB) approval is completely separate from the Mecklenburg County building permit. ARB approval covers aesthetic factors (color, style, material match) while the city permit covers structural and code compliance. Most Charlotte HOAs (Ballantyne, Providence, Quail Hollow, Foxcroft, etc.) require ARB approval before work begins. Best Roofing Now coordinates both processes simultaneously to avoid project delays.",
  },
  {
    question: 'Can I get a permit retroactively for un-permitted roof work?',
    answer:
      "Yes, but it's expensive and may require partial tear-off for inspection. Mecklenburg County allows retroactive permits with: (1) double the standard permit fee as a penalty; (2) full structural inspection of the existing work (sometimes requiring removal of shingles to verify decking and underlayment); (3) re-installation per current code if any deficiencies are found. Costs typically run $1,500-$5,000+ to retroactively permit a residential reroof. Far cheaper to do it right the first time.",
  },
];

export const metadata: Metadata = {
  title: 'Do I Need a Permit to Replace My Roof in Charlotte NC?',
  description:
    "Do I need a roof permit in Charlotte NC? Yes — Mecklenburg County requires permits for all reroofs ($100-$300, 1-3 day turnaround). Contractor pulls the permit, never the homeowner. Best Roofing Now handles all permits.",
  keywords: [
    'do I need permit to replace roof Charlotte NC',
    'roof permit Charlotte',
    'Mecklenburg County roof permit',
    'roofing permit cost Charlotte',
    'permit required for roof replacement',
    'NC roofing permit requirements',
    'Charlotte building permit roof',
    'roof permit application Charlotte',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Do I Need a Permit to Replace My Roof in Charlotte NC?',
    description: 'Yes — Mecklenburg County requires permits for all reroofs. Best Roofing Now handles all permits.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function DoINeedPermitToReplaceRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Do I Need a Permit to Replace My Roof?', url: PAGE_URL }]} />
      <WebPageSchema name="Do I Need a Permit to Replace My Roof in Charlotte NC?" description="Mecklenburg County roofing permit requirements explained." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Do I Need a Permit?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Do I Need a Permit to Replace My Roof Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Yes — Mecklenburg County requires permits for nearly all roof replacements',
          'Permit cost — typically $100-$300 for residential reroofs',
          'Permit turnaround — 1-3 business days standard; same-day for storm emergencies',
          'CRITICAL — contractor pulls the permit, NOT the homeowner (red flag if asked)',
          'Required for — full tear-off, decking replacement, structural changes, 25%+ damage replacement',
          'Not required for — small repairs under 100 sq ft, minor flashing reseal, single pipe boot',
          'HOA approval is separate — required before AND in addition to the city permit',
          'No permit = code inspection fail, insurance denial risk, sale disclosure issue',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Do I Need a Roof Permit?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <FileCheck className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Mecklenburg County Permits Explained</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">Do I Need a Permit to Replace My Roof in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Schedule Free Inspection</Button>
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

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Why Permits Matter for Charlotte Homeowners</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Permit ensures the work meets NC Residential Code (IRC), including ventilation, ice-and-water shield, drip edge, and decking thickness.',
                'Permit creates a legal record of the work that protects future home sales and refinances.',
                'Permit triggers a county final inspection that catches contractor errors before they cause problems.',
                'Insurance carriers typically require permitted work for coverage on future storm claims.',
                'Manufacturer warranties (GAF, CertainTeed, OC) require code-compliant installation — permits prove compliance.',
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
                <strong>Hiring a roofer who pulls the permit is non-negotiable.</strong> Best Roofing Now is a NC-licensed contractor (#87344) and pulls all required permits as part of every reroof — homeowners never deal with the permit office.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                Schedule Free Inspection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Permits Handled. Always." subtitle="Best Roofing Now pulls all required Mecklenburg County and HOA permits as part of every project." />
    </>
  );
}
