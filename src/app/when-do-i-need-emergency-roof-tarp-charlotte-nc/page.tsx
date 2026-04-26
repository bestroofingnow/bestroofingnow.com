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

const PAGE_URL = `${SITE_CONFIG.url}/when-do-i-need-emergency-roof-tarp-charlotte-nc`;
const QUESTION = 'When do I need an emergency roof tarp in Charlotte NC?';
const ANSWER =
  "Call for an emergency roof tarp in Charlotte NC in these 8 situations: (1) active interior water leak — never wait, water damage compounds at $500-$3,000 per day across affected rooms; (2) tree limb on roof — tarp ASAP to stop secondary water entry; (3) wind-blown shingles missing exposing decking — water entry imminent during next rain; (4) hail damage with active leaks during the storm window; (5) structural sagging or partial collapse — evacuate area, call 911 if injured, then call us for tarp; (6) chimney brick fall or chimney damage exposing roof penetration; (7) commercial flat-roof ponding with active leak (insurance loss-mitigation requires you respond); (8) any roof issue threatening to disrupt a closing, wedding, or critical event. Best Roofing Now's 1-4 hour emergency tarp dispatch by zone: Mecklenburg County 1-2 hr, Lake Norman 2-4 hr, outer counties 3-6 hr. Tarp installation uses 12-mil reinforced material with 2x4 batten frame screwed (not nailed) to last 60-90 days while permanent repair is scheduled. After-hours surcharge $250-$500 (often reimbursable as insurance loss mitigation expense). 24/7 phone line: " + SITE_CONFIG.phone + ".";

const followUpFAQs = [
  {
    question: 'How much does emergency roof tarping cost in Charlotte NC?',
    answer:
      "Emergency roof tarp dispatch in Charlotte NC: standard 8x10 ft tarp $400-$700 installed with 2x4 batten frame; larger 12x16 ft tarp $600-$1,000; full slope tarp 20x30 ft $1,200-$2,500. After-hours surcharge $250-$500 (typically reimbursable as insurance loss-mitigation). Materials used: 12-mil reinforced commercial-grade tarp (not the lightweight blue tarps from Home Depot — those fail in 1-2 weeks), 2x4 wooden batten frame screwed (not nailed) to roof structure, peel-and-stick upper-edge seal to prevent wind-driven rain. Tarp lasts 60-90 days while permanent repair is scheduled.",
  },
  {
    question: 'Will my insurance cover emergency tarp dispatch?',
    answer:
      "Yes — most NC homeowner insurance policies cover emergency tarp as a 'loss mitigation' expense (the act of preventing further damage to the property). The carrier typically reimburses tarp costs, after-hours surcharge, and even your meals/lodging if you're displaced — even if you don't yet know if the underlying claim will be approved. Save all receipts. Best Roofing Now provides itemized invoices specifically formatted for insurance reimbursement, including the loss-mitigation rationale that adjusters recognize.",
  },
  {
    question: 'Can I tarp the roof myself in an emergency?',
    answer:
      "Strongly discouraged. Three critical risks: (1) safety — fall fatalities are the #1 construction injury cause, with steep-slope work especially dangerous; (2) ineffectiveness — homeowner-applied tarps using construction staples or thin tarps typically fail within 1-2 weeks, allowing more water damage; (3) insurance issues — DIY tarp damage to existing roof structure can complicate the underlying claim. Instead: place buckets and plastic sheeting under interior drips to protect floors and furniture, push a small hole in ceiling at wettest point to direct water flow into a single bucket (prevents widespread ceiling collapse), call Best Roofing Now's 24/7 emergency line for professional tarp dispatch.",
  },
  {
    question: 'How long can a roof tarp protect my home?',
    answer:
      "Best Roofing Now's professional 12-mil reinforced tarps with 2x4 batten frame typically last 60-90 days in Charlotte weather. Lifetime depends on: UV exposure (south-facing tarps degrade faster), wind events (multiple wind events stress the seal), seasonal conditions (summer heat accelerates degradation, winter cold slows it). After 60-90 days, tarps need replacement or the underlying roof must be permanently repaired. Most permanent repairs are scheduled within 1-3 weeks of the emergency tarp dispatch.",
  },
  {
    question: 'What happens between tarp dispatch and permanent roof repair?',
    answer:
      "Typical sequence: (1) emergency tarp dispatch (1-4 hr); (2) free written estimate within 24-48 hr (Xactimate-format for insurance); (3) insurance claim filing if storm-driven (we file with your carrier); (4) carrier inspection scheduled (we meet adjuster on-site); (5) approval and scope finalization; (6) permanent repair scheduling (typically 2-4 weeks from claim approval); (7) permanent repair install (1-2 days for typical residential, 3-21 days for commercial); (8) tarp removal happens during permanent repair install. The entire timeline is typically 4-8 weeks from emergency dispatch to permanent repair completion.",
  },
];

export const metadata: Metadata = {
  title: 'When Do I Need an Emergency Roof Tarp in Charlotte NC?',
  description:
    "Call for emergency roof tarp Charlotte NC: active leak, tree on roof, exposed decking, hail damage with leak, structural sag, chimney fall, commercial ponding, critical event protection.",
  keywords: [
    'when need emergency roof tarp Charlotte NC',
    'emergency roof tarp dispatch',
    '24/7 roof tarp Charlotte',
    'emergency tarp cost',
    'roof tarp insurance coverage',
    'storm damage tarp service',
    'commercial flat roof emergency',
    'tree on roof emergency',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'When Do I Need an Emergency Roof Tarp in Charlotte NC?',
    description: '8 emergency situations + 1-4 hour dispatch by zone, 12-mil reinforced tarps.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhenNeedEmergencyTarpPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'When Need Emergency Tarp?', url: PAGE_URL }]} />
      <WebPageSchema name="When Do I Need an Emergency Roof Tarp in Charlotte NC?" description="Emergency tarp dispatch trigger guide for Charlotte NC homeowners and businesses." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Emergency Tarp?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="When Do I Need Emergency Roof Tarp Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Active interior leak — never wait; damage compounds at $500-$3,000/day per affected room',
          'Tree limb on roof — tarp ASAP to stop secondary water entry',
          'Wind-blown shingles missing exposing decking',
          'Hail damage with active leaks during storm window',
          'Structural sagging or partial collapse (evacuate first)',
          'Chimney brick fall exposing roof penetration',
          'Commercial flat-roof ponding with active leak',
          'Any roof issue threatening closing, wedding, or critical event',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Emergency Tarp?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Emergency Tarp Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">When Do I Need an Emergency Roof Tarp in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="primary" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>
                Call 24/7: {SITE_CONFIG.phone}
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule Tarp Dispatch
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

      <CTASection title="24/7 Emergency Tarp Dispatch" subtitle="1-4 hour response by zone. 12-mil reinforced tarps with batten frame. Insurance loss-mitigation reimbursement support." />
    </>
  );
}
