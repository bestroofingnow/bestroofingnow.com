import { Metadata } from 'next';
import { Phone, Home } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/should-i-get-a-roof-inspection-before-buying-a-house-charlotte-nc`;
const QUESTION = 'Should I get a roof inspection before buying a house in Charlotte NC?';
const ANSWER =
  "Yes — always get a dedicated roof inspection before buying a house in Charlotte NC, especially for homes 10+ years old. The standard home inspection (typically $400-$600) gives a quick visual check of the roof from the ground or a single ladder position — adequate for new construction or homes under 10 years old. For homes 10+ years old, an additional dedicated roof inspection ($200-$450 for HAAG-credentialed certification) provides: (1) full ladder/walk inspection with photo documentation; (2) attic check for leaks, ventilation, decking integrity; (3) FHA/VA loan certification if needed (required by VA-backed lenders for 2-5+ year remaining lifespan confirmation); (4) negotiation leverage if issues found (typical $5,000-$25,000 in price reduction or seller credit); (5) insurance underwriting documentation (older roofs may trigger ACV vs RCV coverage, affecting your future claim payouts). Best Roofing Now provides pre-purchase roof inspections within 24-48 hours typical, same-day rush for tight closing deadlines.";

const followUpFAQs = [
  {
    question: 'Doesn\'t the standard home inspection cover the roof?',
    answer:
      "Yes but typically only at a basic level. Standard home inspectors are generalists — they check 30+ home systems in a 2-4 hour visit. Roof check is typically 5-15 minutes via single-ladder visual inspection (often without walking the roof for safety/insurance reasons). They identify obvious issues (missing shingles, visible sagging) but miss subtle problems requiring expert eye: pipe boot condition, chimney flashing detail, ventilation balance, decking soft spots, granule loss patterns. For older homes ($300K+ purchase), the additional $200-$450 dedicated roof inspection is high-ROI insurance against $5,000-$25,000 surprise post-purchase repairs.",
  },
  {
    question: 'When in the home buying process should I order a roof inspection?',
    answer:
      "Order roof inspection during the due diligence period (typically 14-30 days after offer acceptance). Sequence: (1) Day 1 — offer accepted, due diligence period starts; (2) Day 1-3 — schedule both general home inspection AND dedicated roof inspection (both can happen the same day); (3) Day 5-10 — receive inspection reports; (4) Day 10-14 — negotiate repair credits or price reductions based on findings; (5) Day 14-30 — finalize negotiations and proceed to closing or walk away. Best Roofing Now schedules pre-purchase inspections within 48 hours of request to fit standard due diligence timelines.",
  },
  {
    question: 'What if the roof inspection finds problems?',
    answer:
      "Three negotiation paths if pre-purchase inspection finds issues: (1) request seller to repair before closing (most common for minor issues under $2,500); (2) request seller credit at closing for buyer to repair (most common for moderate issues $2,500-$15,000); (3) renegotiate purchase price downward (best for major issues over $15,000 or full roof replacement need). Best Roofing Now provides written estimates that real estate agents and sellers recognize for negotiation. Sometimes the inspection saves you the entire purchase if structural roof issues indicate the home is over-priced.",
  },
  {
    question: 'Do FHA or VA loans require a roof inspection?',
    answer:
      "Yes — FHA and VA loans require a roof certification confirming 2-5+ years of remaining lifespan. Standard home inspector reports do NOT satisfy this requirement. You need a HAAG-credentialed roof certification ($200-$450) from a licensed contractor. Best Roofing Now provides FHA/VA certifications with 24-48 hour turnaround (same-day rush for tight closings). The certification typically includes: photo documentation, lifespan estimate, and any issues that would affect the lender's collateral protection. About 30-40% of Charlotte home buyers use FHA or VA loans where this certification is mandatory.",
  },
  {
    question: 'Can I waive the roof inspection if I trust the seller?',
    answer:
      "Strongly discouraged. Sellers don't always know their own roof's condition (they don't walk it or look in the attic regularly). 'Trustworthy' sellers can have hidden issues: pipe boot cracks they can't see from the ground, chronic small leaks they thought they fixed, decking damage from leaks years ago that's still affecting the structure. The $200-$450 inspection is cheap insurance against $5,000-$25,000 surprise costs. Even if you trust the seller, the inspection protects YOU as the future owner. Most real estate agents recommend the dedicated roof inspection on every home 10+ years old.",
  },
];

export const metadata: Metadata = {
  title: 'Should I Get a Roof Inspection Before Buying a House in Charlotte NC?',
  description:
    "Yes — get pre-purchase roof inspection ($200-450) for homes 10+ yr old. Standard home inspection misses subtle issues. FHA/VA loans require HAAG-credentialed certification.",
  keywords: [
    'pre-purchase roof inspection Charlotte NC',
    'home buyer roof inspection',
    'FHA VA roof certification',
    'roof inspection before closing',
    'real estate roof inspection',
    'due diligence roof check',
    'home inspection roof component',
    'pre-sale roof inspection Charlotte',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Should I Get a Roof Inspection Before Buying a House in Charlotte NC?',
    description: 'Yes — $200-$450 dedicated roof inspection for homes 10+ years old.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function PrePurchaseRoofInspectionPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Pre-Purchase Roof Inspection?', url: PAGE_URL }]} />
      <WebPageSchema name="Should I Get a Roof Inspection Before Buying a House in Charlotte NC?" description="Pre-purchase roof inspection guide for Charlotte NC home buyers." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Pre-Purchase Inspection?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Should I Get a Roof Inspection Before Buying a House Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Yes — for homes 10+ years old, dedicated roof inspection beyond standard home inspection',
          'Standard home inspection ($400-$600) — basic visual roof check only',
          'Dedicated roof inspection ($200-$450) — full ladder/walk + attic + photo documentation',
          'FHA/VA loan certification ($200-$450) — required for VA-backed mortgages',
          'Negotiation leverage — typical $5,000-$25,000 in price reduction or seller credit if issues found',
          'Insurance underwriting documentation — older roofs may trigger ACV vs RCV coverage',
          'Schedule during due diligence period (typically 14-30 days)',
          'Best Roofing Now 24-48 hour turnaround, same-day rush for tight closings',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Pre-Purchase Inspection?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Home className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Home Buyer Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">Should I Get a Roof Inspection Before Buying a House in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Schedule Pre-Purchase Inspection</Button>
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

      <CTASection title="Pre-Purchase Roof Inspection — Worth Every Dollar" subtitle="$200-$450 inspection saves $5,000-$25,000 surprise costs. HAAG-credentialed for FHA/VA loan certification. 24-48 hour turnaround." />
    </>
  );
}
