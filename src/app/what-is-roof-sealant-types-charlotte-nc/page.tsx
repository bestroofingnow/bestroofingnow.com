import { Metadata } from 'next';
import { Phone, Droplets } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-roof-sealant-types-charlotte-nc`;
const QUESTION = 'What are the different roof sealant types and which is best for Charlotte NC?';
const ANSWER = "There are five primary roof sealant types used in Charlotte NC: silicone, polyurethane, butyl rubber, asphalt-based, and acrylic. Silicone is the longest-lasting (15-25 years) with the best UV resistance, ideal for Charlotte's intense summer sun. Polyurethane offers the strongest adhesion and abrasion resistance, perfect for high-traffic flat roofs. Butyl rubber is the gold standard for sealing metal roof seams and standing-seam panels. Asphalt-based sealants are legacy products mostly used for asphalt shingle repairs. Acrylic is water-based and affordable but is best suited for indoor or non-UV-exposed applications. Costs range $5-$45 per tube depending on chemistry and brand.";

const followUpFAQs = [
  { question: 'Which roof sealant lasts longest in Charlotte NC weather?', answer: "Silicone roof sealant is by far the longest-lasting option in Charlotte's hot, humid, UV-intense climate, typically lasting 15-25 years before needing reapplication. Brands like GE SCS2000 SilPruf and Dow Corning 795 stay flexible from -40°F to 300°F and resist UV degradation that breaks down acrylic and asphalt sealants in 3-5 years. Silicone runs $12-$25 per 10 oz tube, but the lifespan justifies the premium for any exterior Charlotte roof application." },
  { question: 'Can I use roof sealant on a leaking shingle roof in Charlotte?', answer: "Yes, but only as a temporary repair until proper roofing work can be done. For asphalt shingle leaks, use plastic asphalt cement (Henry 208, Black Jack 6230) under the lifted shingle, costing $8-$15 per gallon. Silicone or polyurethane should never be used on shingle roofs because they prevent the area from being properly repaired later. Most Charlotte roofers will warranty a sealant patch for only 30-90 days and recommend a proper repair within 6 months." },
  { question: 'What sealant is best for a metal roof in Charlotte NC?', answer: "Butyl rubber tape and tripolymer caulk (Geocel 2300, NovaFlex Metal Roof) are the industry standard for metal roof seams, fasteners, and flashing in Charlotte. Butyl stays permanently flexible, bonds aggressively to galvalume and Kynar-coated steel, and handles thermal expansion of standing-seam panels (which can move 1/2 inch across a 40 ft run on Charlotte summer days). Costs run $15-$30 per tube, with full Mecklenburg County metal roof reseal jobs typically $400-$1,200." },
  { question: 'How much does it cost to seal a flat commercial roof in Charlotte?', answer: "Sealing a flat commercial roof in Charlotte runs $1.50-$5.00 per sq ft depending on the system. Silicone restoration coatings (GAF Unisil, Gaco S2000) on a 5,000 sq ft Charlotte warehouse roof typically run $12,000-$22,000 with a 10-15 year manufacturer warranty. Polyurethane elastomeric coatings run $1.80-$4.20 per sq ft. Both extend the useful life of an aging EPDM, TPO, or modified bitumen roof by 10-20 years and qualify for Section 179D tax deductions." },
  { question: 'Is roof sealant the same as roof coating?', answer: "Not exactly. Roof sealant is a tube-applied caulk used in joints, seams, fastener heads, and small leaks (typically 1-3 inch wide applications). Roof coatings are full-roof liquid-applied membranes (typically 20-40 mils thick) that cover the entire roof surface, like silicone or acrylic restoration systems. Sealant is for spot repairs, coating is for full re-coats. A typical Charlotte commercial flat roof needs both: sealant on seams and penetrations, then a full-roof coating overlay every 10-15 years." },
];

export const metadata: Metadata = {
  title: 'Roof Sealant Types Charlotte NC',
  description: "5 roof sealant types compared for Charlotte NC: silicone, polyurethane, butyl, asphalt, acrylic. Best uses, lifespan, and pricing.",
  keywords: ['roof sealant charlotte nc', 'silicone roof sealant', 'polyurethane roof sealant charlotte', 'butyl rubber metal roof', 'roof caulk charlotte', 'roof coating charlotte nc', 'flat roof sealant charlotte', 'shingle leak sealant'],
  alternates: { canonical: PAGE_URL },
  openGraph: { title: 'Roof Sealant Types Charlotte NC', description: '5 roof sealant types compared for Charlotte NC homes and commercial buildings.', url: PAGE_URL, type: 'article' },
};

export default function RoofSealantTypesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Sealant Types?', url: PAGE_URL }]} />
      <WebPageSchema name="Roof Sealant Types Charlotte NC" description="Comparison of 5 roof sealant types for Charlotte NC: silicone, polyurethane, butyl rubber, asphalt-based, acrylic — best uses and lifespans." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Sealant Types?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Roof Sealant Types Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Silicone — best UV resistance and longest lifespan (15-25 years)',
          'Polyurethane — best adhesion for high-traffic flat roofs',
          'Butyl rubber — gold standard for metal roof seams',
          'Asphalt-based — legacy product for shingle leak repairs',
          'Acrylic — water-based, affordable, indoor or low-UV use only',
          'Silicone tubes $12-$25, polyurethane $8-$18, butyl $15-$30',
          'Full silicone roof restoration $1.50-$5.00 per sq ft in Charlotte',
          'Charlotte UV and humidity demand silicone or polyurethane outdoors',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Roof Sealant Types?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Droplets className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Materials Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What are the different roof sealant types and which is best for Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Request Roof Sealant Quote</Button>
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

      <CTASection title="Need Roof Sealing in Charlotte NC?" subtitle="Silicone, polyurethane, and butyl roof sealing for residential and commercial roofs across Mecklenburg County." />
    </>
  );
}
