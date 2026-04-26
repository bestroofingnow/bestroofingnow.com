import { Metadata } from 'next';
import { Phone, FileCheck } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/lake-norman-hoa-roof-approval-process-nc`;
const QUESTION = 'What is the Lake Norman HOA roof approval process in NC?';
const ANSWER =
  "Lake Norman NC HOA roof approval follows a 7-step process: (1) free on-site material consultation with Best Roofing Now (we bring physical shingle and metal samples); (2) ARB packet preparation including color samples, manufacturer specs, NC license #87344, $2M+ insurance certificates, and HAAG-credentialed installer documentation; (3) submission to Lake Norman HOA management company (FirstService Residential, CAMS, AMG, RealManage, William Douglas Management, Henderson Properties); (4) typical 2-4 week ARB review (4-6 weeks for premier estate communities like The Peninsula, Skybrook, NorthBay); (5) ARB clarifications addressed at no additional charge if requested; (6) install scheduled after written ARB approval; (7) gated-community access pre-coordinated with HOA security, uniformed background-checked installers, weekday work hours respecting community rules. Best Roofing Now has a 99%+ first-pass approval rate on Lake Norman HOA submissions across Cornelius, Davidson, Huntersville, Mooresville, Denver, Sherrills Ford, and Troutman.";

const followUpFAQs = [
  {
    question: 'Which Lake Norman HOAs have the strictest roof approval?',
    answer:
      "Premier waterfront communities with the strictest ARB review: The Peninsula (Cornelius — gated luxury, custom estates, 4-6 week review typical), Skybrook (Huntersville — high-end golf community), NorthBay (Cornelius — luxury waterfront), Trump National Charlotte (Mooresville — extreme HOA standards), Sailview (Davidson — premium waterfront). These communities typically restrict materials to top-tier (Class 4 architectural, designer shingles, standing-seam metal, slate, tile) and pre-approved color palettes. Production neighborhoods (Birkdale Village, Riverpointe, Vermillion) have lighter ARB requirements with 2-3 week review.",
  },
  {
    question: 'What if my Lake Norman HOA rejects the initial ARB submission?',
    answer:
      "Best Roofing Now addresses ARB clarifications at no additional charge. Most rejections are minor specification issues that resolve within 3-7 days of resubmission: alternative color samples, adjusted material specs, supplemental installer documentation, or photos of similar approved homes in the community. We have a 99%+ first-pass approval rate. For premier estate communities (Peninsula, Skybrook, NorthBay), more elaborate ARB submissions sometimes require physical sample boards and 3D rendering — included in our service.",
  },
  {
    question: 'Do Lake Norman HOAs allow metal roofs?',
    answer:
      "Most Lake Norman HOAs allow standing-seam metal roofs in low-profile finishes (Cool Charcoal, Pewter, Slate Gray, Hunter Green, Terra Cotta), but restrict bright or unusual colors. Premium estate communities (The Peninsula, Skybrook, NorthBay) commonly allow standing-seam aluminum, copper, and zinc as premium upgrades. Production HOA neighborhoods sometimes restrict metal to specific approved finishes only. Stone-coated steel (which looks like asphalt or tile but performs as metal) is typically approved across all Lake Norman HOAs as a roofing upgrade.",
  },
  {
    question: 'Can I start work before HOA approval?',
    answer:
      "No — never start work before written ARB approval. Starting without approval risks: (1) HOA fines (typically $100-$1,000+); (2) legal action including stop-work orders; (3) forced removal and replacement at full cost; (4) damage to your reputation in the community. The 2-4 week review period exists to protect property values across the community. Best Roofing Now coordinates so you sign the install contract only AFTER written approval is in hand — no risk of locked-in pricing while waiting on review.",
  },
  {
    question: 'Does the HOA approval expire if I delay the install?',
    answer:
      "Most Lake Norman HOAs have ARB approval validity periods: typically 90-180 days from approval date. If install isn't completed within the validity period, you'll need to resubmit (often a simple expedited re-approval at no charge). Best Roofing Now schedules install dates within ARB validity windows to avoid resubmission delays. Storm-damage emergency situations are handled with expedited HOA submission (often 1-3 day approval) for active leak repairs.",
  },
];

export const metadata: Metadata = {
  title: 'What Is the Lake Norman HOA Roof Approval Process in NC?',
  description:
    "Lake Norman NC HOA roof approval: 7-step process including ARB packet, FirstService/CAMS/AMG/RealManage submission, 2-4 week review (4-6 weeks for premier estates).",
  keywords: [
    'Lake Norman HOA roof approval NC',
    'Cornelius HOA roof process',
    'Davidson HOA roof approval',
    'Huntersville HOA roofing',
    'The Peninsula HOA roof',
    'Skybrook HOA roof approval',
    'lake norman ARB roof submission',
    'lake norman roof permit HOA',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is the Lake Norman HOA Roof Approval Process in NC?',
    description: '7-step ARB submission with 99%+ first-pass approval rate.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function LakeNormanHOAApprovalPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Lake Norman HOA Roof Approval?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is the Lake Norman HOA Roof Approval Process in NC?" description="Lake Norman NC HOA architectural-review-board (ARB) roof approval process guide." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'LKN HOA Approval?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Lake Norman HOA Roof Approval Process NC" city="Cornelius" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Cornelius" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Step 1 — free on-site material consultation with physical shingle/metal samples',
          'Step 2 — ARB packet prep with color samples, specs, NC license, insurance, installer credentials',
          'Step 3 — submission to LKN HOA management (FirstService, CAMS, AMG, RealManage, William Douglas, Henderson)',
          'Step 4 — 2-4 week typical review (4-6 weeks for Peninsula/Skybrook/NorthBay/Trump National)',
          'Step 5 — Best Roofing Now addresses any ARB clarifications at no charge',
          'Step 6 — install scheduled only after written approval received',
          'Step 7 — gated-community access pre-coordinated; uniformed background-checked installers',
          '99%+ first-pass approval rate across all LKN HOAs',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'LKN HOA Approval?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <FileCheck className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Lake Norman NC HOA ARB Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is the Lake Norman HOA Roof Approval Process in NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Schedule LKN ARB Consultation</Button>
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

      <CTASection title="LKN HOA Approval — Done Right" subtitle="99%+ first-pass approval rate. ARB packet prep included. Gated-community access coordinated. Premier estate community experience." />
    </>
  );
}
