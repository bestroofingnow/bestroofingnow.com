import { Metadata } from 'next';
import { Phone, Layers } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-drip-edge-charlotte-nc`;
const QUESTION = 'What is a drip edge and why does my Charlotte NC roof need one?';
const ANSWER =
  "A drip edge is an L-shaped or T-shaped metal flashing strip installed along the perimeter eaves and rake edges of your roof, designed to direct water away from fascia boards and into gutters. NC IRC §R905.2.8.5 REQUIRES drip edge on all asphalt-shingle roofs in North Carolina (mandatory code, no exceptions) — yet 30-40% of pre-2010 Charlotte homes were built without it (older code didn't require). Drip edge prevents 4 specific failures: (1) water wicking BACK under shingles via capillary action and rotting decking edges; (2) water saturating fascia boards causing rot ($800-$2,500 fascia repair); (3) water running behind gutters causing soffit damage and ice damming in winter cold snaps; (4) wind-driven rain blowing under shingles from below. Materials: aluminum (most common, $1.50-$3/linear ft installed), galvanized steel ($1-$2/linear ft, less corrosion-resistant), copper ($4-$8/linear ft, premium aesthetic), painted steel ($2-$4/linear ft). Profiles: Type C (L-shape, eave only), Type D (T-shape, modern preferred for both eave and rake), Type F (extended hemmed flange for older homes with no fascia coverage). Best Roofing Now installs code-compliant drip edge on every reroof and verifies presence on every free inspection.";

const followUpFAQs = [
  {
    question: 'Is drip edge required by code in Charlotte NC?',
    answer:
      "Yes — NC IRC §R905.2.8.5 requires drip edge on all asphalt-shingle roofs in North Carolina, with these specific requirements: (1) minimum 0.019-inch thick metal (corrosion-resistant); (2) extends a minimum 0.25-inch over fascia and a minimum 2 inches up the roof deck; (3) installed at all eaves and rake edges; (4) eave drip edge must be installed UNDERNEATH the underlayment; (5) rake drip edge must be installed OVER the underlayment; (6) sealed at corners and laps. The N.C. Mecklenburg County permit office enforces this on all reroof permits. Roofers who skip drip edge violate code and void manufacturer warranty (GAF, CertainTeed, OC all require code-compliant install).",
  },
  {
    question: 'How do I tell if my Charlotte NC roof has drip edge?',
    answer:
      "Three checks: (1) visual from ground — look at the roof edge where shingles meet fascia; you should see a thin metal strip (1-2 inches visible) between the shingle bottom edge and the fascia board top edge; if the shingle hangs directly over the fascia with no metal visible, drip edge is likely missing; (2) close inspection — look at the eaves where gutters attach; metal flashing should extend INTO the gutter top edge; (3) attic check — look at the underside of the roof decking at the eaves; with drip edge, decking edge is dry; without drip edge, decking edge often shows water staining. Most pre-2010 Charlotte homes lack drip edge.",
  },
  {
    question: 'Can I add drip edge to my existing Charlotte roof without reroofing?',
    answer:
      "Conditional yes — partial drip edge retrofit is possible but limited. Eave drip edge can sometimes be slid up under existing shingles ($800-$2,000 typical home) but: (1) requires lifting bottom row of shingles without breaking sealant strip (often impossible on aged shingles); (2) doesn't add ice-and-water shield underlayment (still leak risk); (3) shorter lifespan than full reroof drip edge install. Best practice: schedule full code-compliant drip edge install during your next reroof (no separate cost — included in proper Charlotte reroof). If your roof has 5+ years remaining, eave-only retrofit may extend life and reduce immediate damage.",
  },
  {
    question: 'What\'s the cost difference between drip edge profiles in Charlotte?',
    answer:
      "Charlotte NC drip edge installed cost by profile: Type C (L-shape, eave only) — $1.50-$2.50/linear ft, basic minimum-code option, suitable for newer homes with proper fascia; Type D (T-shape, both eave and rake) — $2-$3.50/linear ft, modern preferred, best for new reroofs and homes with deep gutter offsets; Type F (extended hemmed flange) — $2.50-$4/linear ft, retrofit for older homes with shallow fascia or unusual edge details, hides exposed decking edges. Material upgrade premiums: aluminum baseline; copper +$3-$6/linear ft; painted steel +$0.50-$1.50/linear ft. Total drip edge cost on typical Charlotte home (180-220 linear ft of perimeter): $300-$1,000 (included in reroof, no premium).",
  },
  {
    question: 'Does drip edge prevent ice dams in Charlotte NC?',
    answer:
      "Partially — drip edge prevents the WATER DAMAGE caused by ice dams (preventing water backup from rotting fascia/soffit) but doesn't prevent ice dam FORMATION. Ice dams form when warm attic air melts roof snow that refreezes at cold eaves. Charlotte sees ice dams 1-3 times per decade during cold snaps (typically January-February rare events, especially in Davidson, Cornelius, Huntersville, north Mecklenburg). Best ice dam prevention combo: (1) drip edge (NC code required); (2) ice-and-water shield self-adhered membrane extending 24+ inches up from eaves (Charlotte not technically required but highly recommended); (3) proper attic insulation R-49 + balanced ventilation. Bundled install during reroof costs $1,500-$3,500 and effectively eliminates ice dam damage risk.",
  },
];

export const metadata: Metadata = {
  title: 'What Is a Drip Edge and Why Does My Charlotte NC Roof Need One?',
  description:
    "Drip edge = L-shape metal flashing at eaves/rakes. NC IRC §R905.2.8.5 REQUIRED. Prevents fascia rot, decking water wicking, ice dam damage. Cost $1.50-$8/ft, no premium in reroof.",
  keywords: [
    'what is a drip edge Charlotte NC',
    'drip edge required NC',
    'NC IRC R905.2.8.5 drip edge',
    'roof drip edge cost',
    'drip edge profiles',
    'drip edge missing on my roof',
    'aluminum drip edge',
    'fascia rot prevention Charlotte',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is a Drip Edge and Why Does My Charlotte NC Roof Need One?',
    description: 'NC IRC §R905.2.8.5 REQUIRES drip edge on all asphalt-shingle roofs.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsDripEdgePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is a Drip Edge?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is a Drip Edge and Why Does My Charlotte NC Roof Need One?" description="Drip edge terminology and NC code requirements for Charlotte NC roofs." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Drip Edge?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is a Drip Edge Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Drip edge — L-shaped metal flashing at roof eaves and rake edges',
          'NC IRC §R905.2.8.5 REQUIRES drip edge on all asphalt-shingle roofs',
          '30-40% of pre-2010 Charlotte homes built WITHOUT drip edge',
          'Prevents water wicking back under shingles via capillary action',
          'Prevents fascia board rot ($800-$2,500 repair)',
          'Aluminum (most common) — $1.50-$3/linear ft installed',
          'Type C (L-shape eave), Type D (T-shape modern), Type F (hemmed for older homes)',
          'Total Charlotte home cost — $300-$1,000 (included in proper reroof)',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Drip Edge?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Drip Edge Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is a Drip Edge and Why Does My Charlotte NC Roof Need One?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Drip Edge Inspection</Button>
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

      <CTASection title="NC Code-Compliant Drip Edge Install" subtitle="NC IRC §R905.2.8.5 mandatory drip edge included in every Best Roofing Now reroof at no premium. Free inspection verifies presence on existing roof." />
    </>
  );
}
