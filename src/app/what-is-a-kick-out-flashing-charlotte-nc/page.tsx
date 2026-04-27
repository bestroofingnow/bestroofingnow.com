import { Metadata } from 'next';
import { Phone, Wrench } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-kick-out-flashing-charlotte-nc`;
const QUESTION = 'What is a kick-out flashing and why does my Charlotte NC home need one?';
const ANSWER =
  "A kick-out flashing (also called a diverter flashing) is a small angled metal piece installed at the bottom termination of a roof-to-wall intersection that diverts rainwater AWAY from siding and INTO the gutter. NC IRC §R903.2.1 requires step flashing at all roof-to-wall junctions, and modern code best practice (and most manufacturer warranties) requires kick-outs where the wall continues past the eave. Missing kick-out flashings are the #1 cause of hidden wall rot in Charlotte NC homes — water sheets down the wall behind siding, saturating sheathing, framing, and drywall for years before stains appear inside. Typical Charlotte repair after kick-out failure: $4,500-$18,000 for sheathing replacement, framing, insulation, drywall, and siding remediation. The kick-out itself costs $35-$95 installed during reroof. Common in Plaza Midwood bungalows, Dilworth two-stories, and Myers Park homes with brick veneer where any sloped roof meets a continuing wall (porch roof against second story, garage roof against house, dormer cheek walls).";

const followUpFAQs = [
  {
    question: 'How do I know if my Charlotte NC home is missing a kick-out flashing?',
    answer:
      "Three diagnostic signs: (1) visual — at the bottom of any roof-to-wall intersection, look for a small angled metal piece (typically 4-6 inches) that 'kicks' water out into the gutter; if the step flashing just ends and water can run down the wall behind siding or brick, kick-out is missing; (2) interior staining — water marks, paint bubbling, or musty smell on the interior wall directly below where a roof meets a wall (often a 2nd-floor wall above a 1st-floor porch roof); (3) exterior staining — vertical streaking or moss/algae growth on siding directly below a roof termination. Common Charlotte hot spots: Myers Park dormer cheeks, Dilworth porch-to-house junctions, Ballantyne 2-story foyers above garage roofs.",
  },
  {
    question: 'How much does it cost to add kick-out flashing to my Charlotte NC roof?',
    answer:
      "Charlotte NC kick-out flashing pricing: (1) installed during a full reroof — $35-$95 per location, included in proper reroof scope (no premium); (2) retrofit on existing roof — $250-$650 per location because requires lifting siding/brick, removing first courses of shingles, installing new step + kick-out, then reinstalling siding; (3) full repair if hidden wall rot already exists — $4,500-$18,000 (sheathing, framing, insulation, drywall, paint, siding repair). Pre-formed aluminum kick-outs (DryFlekt, EagleView) cost $8-$25 per piece; copper kick-outs $35-$75 per piece. Best Roofing Now installs code-compliant kick-outs at every roof-to-wall termination on every reroof.",
  },
  {
    question: 'Is kick-out flashing required by code in North Carolina?',
    answer:
      "Step flashing at roof-to-wall intersections IS required by NC IRC §R903.2.1 and §R905.2.8.3, and the 2018 IRC §R903.2.1 explicitly requires kick-out diverters at the lower termination of step flashing where the wall extends past the eave. Mecklenburg County and City of Charlotte permit inspections enforce this on reroof permits issued after 2018. Manufacturer warranties (GAF Golden Pledge, CertainTeed SureStart, Owens Corning Platinum) all require kick-outs at every roof-to-wall termination — installing without kick-outs voids the system warranty. Roofers who skip kick-outs to save 5 minutes of install time create $5,000-$18,000 future damage claims.",
  },
  {
    question: 'What materials are kick-out flashings made from in Charlotte?',
    answer:
      "Kick-out flashing material options in Charlotte NC: (1) aluminum pre-formed (DryFlekt, EagleView, Quick Flash) — most common, $8-$25 per piece, paint-matchable, 30-50 yr life; (2) galvanized steel — $5-$15 per piece, less corrosion-resistant in coastal-influenced Charlotte humidity, 15-25 yr life; (3) copper pre-formed — $35-$75 per piece, premium aesthetic on Myers Park and Eastover homes, 75+ yr life; (4) field-bent aluminum coil stock — $10-$20 per piece labor, custom-fit, requires skilled roofer (most Charlotte storm-chasers cannot bend properly). Avoid plastic kick-outs (UV failure 5-10 yr) and caulk-only 'kick-out substitutes' (fail in 2-5 yr).",
  },
  {
    question: 'Can a missing kick-out flashing cause Charlotte NC mold problems?',
    answer:
      "Yes — missing kick-out flashings are the leading hidden cause of interior wall mold in Charlotte NC two-story homes with porches, dormers, or garage-bay walls. Pattern: water sheets down behind siding for 2-7 years before any visible interior sign, saturating OSB sheathing, fiberglass insulation (which holds moisture), and drywall paper backing. Charlotte's high humidity (avg 70%+ summer dewpoints) accelerates mold growth in saturated cavities. Common species: Stachybotrys (toxic black mold), Aspergillus, Penicillium. Remediation costs $2,500-$15,000 (mold abatement) plus $3,000-$12,000 (structural repair). Annual roof inspections catch missing/damaged kick-outs before hidden damage starts — Best Roofing Now offers free Charlotte inspections.",
  },
];

export const metadata: Metadata = {
  title: 'What Is a Kick-Out Flashing? Charlotte NC Guide',
  description:
    "Kick-out flashing diverts roof water into gutters away from siding. Missing one = $4,500-$18,000 hidden wall rot. NC code required. Charlotte NC install $35-$95.",
  keywords: [
    'what is a kick-out flashing Charlotte NC',
    'kick-out diverter flashing',
    'roof to wall flashing Charlotte',
    'hidden wall rot Charlotte',
    'NC IRC R903 step flashing',
    'missing kick-out flashing',
    'DryFlekt kick-out',
    'porch roof to wall leak',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is a Kick-Out Flashing? Charlotte NC Guide',
    description: 'Diverter flashing that prevents hidden wall rot at roof-to-wall junctions.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsKickOutFlashingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is a Kick-Out Flashing?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is a Kick-Out Flashing? Charlotte NC Guide" description="Kick-out diverter flashing terminology and NC code requirements for Charlotte NC homes." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Kick-Out Flashing?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is a Kick-Out Flashing Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Kick-out flashing — angled metal diverter at bottom of roof-to-wall intersections',
          'Diverts rainwater AWAY from siding and INTO the gutter',
          'NC IRC §R903.2.1 requires step flashing; 2018 IRC requires kick-outs',
          'Missing kick-out is #1 cause of hidden wall rot in Charlotte homes',
          'Hidden damage repair — $4,500-$18,000 (sheathing, framing, drywall, siding)',
          'Install during reroof — $35-$95 per location (no premium)',
          'Common locations — Myers Park dormers, Dilworth porches, Ballantyne foyers',
          'Manufacturer warranties (GAF, CertainTeed, OC) REQUIRE kick-outs to remain valid',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Kick-Out Flashing?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Wrench className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Flashing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is a Kick-Out Flashing and Why Does My Charlotte NC Home Need One?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Kick-Out Inspection</Button>
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

      <CTASection title="Stop Hidden Wall Rot Before It Starts" subtitle="Free Charlotte NC kick-out flashing inspection. We check every roof-to-wall termination and install code-compliant diverters on every reroof at no premium." />
    </>
  );
}
