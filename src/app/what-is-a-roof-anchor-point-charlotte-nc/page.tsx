import { Metadata } from 'next';
import { Phone, Anchor } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-roof-anchor-point-charlotte-nc`;
const QUESTION = 'What is a roof anchor point and when do I need one for my Charlotte NC home?';
const ANSWER = "A roof anchor point is a permanent or temporary attachment device that secures a worker's fall-arrest harness and lanyard to the roof structure. OSHA 1926.501 requires fall protection any time work is performed at heights over 6 feet, which applies to virtually every Charlotte NC roof. Permanent anchors are typically galvanized or stainless steel D-rings bolted through the sheathing into rafters or trusses, rated for a 5,000 lb shock load. Installation runs $200-$600 per anchor, and most residential Charlotte homes only need them on tall two-story or three-story roofs, while almost all commercial buildings in Mecklenburg County require multiple permanent anchors for OSHA-compliant maintenance access.";

const followUpFAQs = [
  { question: 'Are roof anchors required by OSHA for Charlotte NC roofers?', answer: "Yes. OSHA 29 CFR 1926.501(b)(13) mandates fall protection for any residential roofing work above 6 feet, with no exceptions. Charlotte NC roofers must use either a personal fall arrest system (anchor + harness + lanyard), guardrails, or safety nets. Reputable Charlotte contractors install temporary screw-down anchors for each project and remove them on completion, which is why proper roofers cost more than fly-by-night crews who skip safety gear." },
  { question: 'What is the difference between permanent and temporary roof anchors?', answer: "Permanent anchors are stainless or galvanized steel D-rings bolted through the deck into structural framing, designed for repeat access (HVAC techs, chimney sweeps, future roofers). They cost $200-$600 each installed and are common on Charlotte commercial buildings, three-story homes, and Lake Norman lakefront estates. Temporary anchors are wood-screw plates installed for one project, then removed and the holes sealed with roofing cement and matching shingles. Most residential re-roofs in Charlotte use temporary anchors only." },
  { question: 'Do I need a roof anchor for solar panel installation in Charlotte?', answer: "Yes. NC building code and OSHA both require fall protection during solar PV installation, and most Charlotte solar installers (Renu Energy, Yes Solar, NC Solar Now) install one or more permanent anchor points for ongoing system maintenance. Cost is typically bundled into the solar quote at $300-$800 total, and the anchor lets the installer return safely for inverter service, panel cleaning, or repairs over the system's 25-year warranty period." },
  { question: 'Will a roof anchor leak or damage my Charlotte NC roof?', answer: "When properly installed by a licensed Charlotte roofer, no. Permanent anchors use through-bolts with butyl-rubber gaskets, EPDM washers, and a flashed base plate that integrates with the underlayment and shingles or metal panels. The anchor is sealed with roofing cement and counter-flashed to prevent any water intrusion. Bad installations (lag screws into sheathing only, no flashing, no sealant) can leak, which is why anchor installation should always be done by a roofing contractor, not a handyman or solar installer alone." },
  { question: 'How much does it cost to install a permanent roof anchor in Charlotte NC?', answer: "Permanent residential roof anchors run $200-$600 each installed in the Charlotte area, depending on the roof type and access difficulty. Stainless steel D-rings bolted into a 2x6 truss with full flashing on a shingle roof typically run $250-$400. Standing-seam metal roof anchors with custom seam-clamp brackets run $400-$600. Commercial parapet anchors on Charlotte office buildings or Mecklenburg County warehouses can run $500-$1,200 each due to membrane integration." },
];

export const metadata: Metadata = {
  title: 'Roof Anchor Points Charlotte NC',
  description: "What roof anchor points are and when Charlotte NC homes need them. OSHA 6-ft rule, permanent vs temporary, $200-$600 installation costs.",
  keywords: ['roof anchor point charlotte nc', 'fall protection charlotte', 'osha roof safety charlotte', 'permanent roof anchor', 'd-ring roof anchor charlotte', 'roof safety harness', 'solar panel anchor charlotte', 'commercial roof anchor mecklenburg'],
  alternates: { canonical: PAGE_URL },
  openGraph: { title: 'Roof Anchor Points Charlotte NC', description: 'OSHA-compliant roof anchor point guide for Charlotte NC homes and commercial buildings.', url: PAGE_URL, type: 'article' },
};

export default function RoofAnchorPointPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Anchor Points?', url: PAGE_URL }]} />
      <WebPageSchema name="Roof Anchor Points Charlotte NC" description="Charlotte NC guide to roof anchor points: OSHA fall protection rules, permanent vs temporary anchors, costs, and when residential homes need them." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Anchor Points?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Roof Anchor Points Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Permanent attachment for fall-arrest harness and lanyard',
          'OSHA 1926.501 requires fall protection above 6 feet',
          'Galvanized or stainless steel D-ring rated for 5,000 lb load',
          'Bolted through sheathing into rafters or trusses',
          'Cost $200-$600 per anchor installed in Charlotte NC',
          'Required for solar panel installation and HVAC maintenance',
          'Common on commercial buildings and tall residential roofs',
          'Always installed by licensed Charlotte roofer, not handyman',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Roof Anchor Points?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Anchor className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Safety Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What is a roof anchor point and when do I need one for my Charlotte NC home?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Request Roof Anchor Quote</Button>
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

      <CTASection title="Need Permanent Roof Anchors in Charlotte?" subtitle="OSHA-compliant anchor point installation for residential and commercial roofs across Mecklenburg County." />
    </>
  );
}
