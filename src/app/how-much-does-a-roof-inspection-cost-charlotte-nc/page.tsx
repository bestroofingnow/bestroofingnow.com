import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-much-does-a-roof-inspection-cost-charlotte-nc`;
const QUESTION = 'How much does a roof inspection cost in Charlotte NC?';
const ANSWER =
  "Roof inspection costs in Charlotte NC vary by purpose: (1) FREE — Best Roofing Now's standard 48-hour estimate inspection (full exterior walk-around, attic check, decking probe, 30+ photos, written report) — always free, no obligation; (2) $200-$450 — FHA/VA loan or refinance roof certification (HAAG-credentialed inspector, 24-48 hr turnaround, accepted by all VA-approved lenders); (3) $350-$900 — commercial building roof certification (SBA 504/7(a) loans, larger commercial reroof estimates with infrared moisture survey and core-cut samples); (4) $250-$500 — pre-purchase home inspection roof component (typically bundled with full home inspection, not standalone); (5) $150-$400 — insurance baseline documentation (post-purchase or pre-storm season photo report). Free residential estimates are the standard — never pay for an estimate from a roofing contractor (red flag). Certifications and pre-purchase inspections cost money because they create a legal document with HAAG-credentialed signatures.";

const followUpFAQs = [
  {
    question: 'Why is Best Roofing Now\'s estimate inspection free?',
    answer:
      "Free estimates are standard for legitimate residential roofing contractors — the inspection cost is built into the contractor's overhead model. Best Roofing Now's free estimate includes: 48-hour scheduling, full exterior walk-around with ladder access, attic check (NC IRC §R806 ventilation, R-value, daylight verification), decking probe for soft spots, 30+ on-site photos, written estimate within 24-48 hours via email/text/printed, and Xactimate-format pricing. Any contractor charging for a residential roofing estimate is a red flag — they're either not licensed, lack proper insurance, or are testing whether you'll pay before negotiating.",
  },
  {
    question: 'When is a paid HAAG-credentialed roof certification worth it?',
    answer:
      "Paid roof certifications ($200-$450) are worth it when: (1) FHA or VA loan refinance — required by all VA-approved lenders to confirm 2-5+ years remaining roof lifespan; (2) home sale to skeptical buyer — proves roof condition with court-admissible HAAG-credentialed report; (3) insurance dispute — independent third-party documentation often resolves coverage disputes; (4) commercial property due diligence — required for SBA loans and many commercial property transactions. Best Roofing Now's HAAG-credentialed inspectors provide certifications accepted by all major NC lenders, insurance carriers, and courts.",
  },
  {
    question: 'Are commercial roof inspections more expensive?',
    answer:
      "Yes — commercial inspections cost $350-$900 standalone (or higher for industrial buildings) due to: (1) larger square footage requiring more time; (2) infrared moisture survey to detect saturated insulation under intact membrane; (3) core-cut samples to verify deck condition and existing layers; (4) more complex flashing details (parapet walls, HVAC penetrations, drains); (5) Xactimate-format estimating across 7 commercial systems (TPO, EPDM, PVC, modified bitumen, BUR, standing seam metal, coatings); (6) NDL warranty preservation requirements during repairs. For commercial reroof estimates, the inspection cost is typically credited toward the project if you proceed.",
  },
  {
    question: 'Should I pay extra for a drone roof inspection?',
    answer:
      "For most Charlotte residential roofs, drone inspection adds limited value over a traditional walk-around. Drones provide aerial overview shots useful for steep-slope safety (no ladder access risk) and large commercial roofs. However, drones can't substitute for: (1) attic check (only an interior walk reveals ventilation, decking, leak signs); (2) physical decking probe (drone visual can't detect soft spots or rot); (3) flashing reseat verification (requires hands-on inspection). Drone inspection is a marketing add-on more than a substantive improvement for residential. Best Roofing Now uses drones for documentation when needed but never substitutes drones for the full traditional inspection.",
  },
  {
    question: 'How long does a roof inspection take?',
    answer:
      "Standard residential roof inspections take 30-60 minutes on-site (full exterior walk-around, attic check, decking probe, photo documentation). Commercial inspections take 1-3 hours depending on building size (typically 1 hour per 5,000 sq ft of roof). Written report turnaround: 24-48 hours for residential estimates, 5-7 business days for HAAG-credentialed certifications, 7-14 days for commercial Xactimate estimates with infrared moisture survey. Same-day rush available for residential storm-damage emergencies and time-sensitive home sale FHA/VA certifications.",
  },
];

export const metadata: Metadata = {
  title: 'How Much Does a Roof Inspection Cost in Charlotte NC?',
  description:
    "Charlotte NC roof inspection cost: FREE for Best Roofing Now estimates, $200-450 for FHA/VA certifications, $350-900 commercial. Never pay for an estimate (red flag).",
  keywords: [
    'how much roof inspection cost Charlotte NC',
    'roof inspection cost',
    'free roof inspection Charlotte',
    'FHA VA roof certification cost',
    'commercial roof inspection',
    'HAAG inspector Charlotte',
    'home buyer roof inspection',
    'roof certification cost NC',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Much Does a Roof Inspection Cost in Charlotte NC?',
    description: 'FREE for estimates, $200-450 for HAAG certifications, $350-900 commercial.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowMuchRoofInspectionCostPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How Much Does a Roof Inspection Cost?', url: PAGE_URL }]} />
      <WebPageSchema name="How Much Does a Roof Inspection Cost in Charlotte NC?" description="Roof inspection cost guide for Charlotte NC." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Inspection Cost?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Much Does a Roof Inspection Cost Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'FREE — Best Roofing Now estimate inspection (48-hr scheduling, attic check, 30+ photos)',
          '$200-$450 — FHA/VA loan or refinance roof certification (HAAG-credentialed)',
          '$350-$900 — commercial building roof certification with infrared moisture survey',
          '$250-$500 — pre-purchase home inspection roof component (typically bundled)',
          '$150-$400 — insurance baseline documentation (pre-storm or post-purchase)',
          'Never pay for a residential roofing estimate — that\'s a red flag',
          'Standard residential inspection takes 30-60 minutes on-site',
          'Same-day rush available for storm-damage emergencies',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Roof Inspection Cost?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Inspection Pricing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Much Does a Roof Inspection Cost in Charlotte NC?</h1>
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

      <CTASection title="Free Residential Inspection. Always." subtitle="Never pay for a residential roofing estimate. HAAG-credentialed certifications when you need legal documentation." />
    </>
  );
}
