import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Sun, CheckCircle2, ArrowRight } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/can-i-put-solar-panels-on-my-new-roof-charlotte-nc`;
const QUESTION = 'Can I put solar panels on my new roof in Charlotte NC?';
const ANSWER =
  "Yes — but the timing and mounting method matter critically. Best Roofing Now's 4 rules for solar + roof in Charlotte NC: (1) install the new roof FIRST if your existing roof is over 10 years old (don't waste $20K of solar install only to remove and reinstall it for a roof in 5-8 years); (2) for standing-seam metal roofs, use S-5! non-penetrating clamp-mount — preserves manufacturer warranty (this is the gold standard for metal+solar); (3) for asphalt shingle roofs, use flashed mounts (QuickMount PV, IronRidge) with proper EPDM gaskets — penetrates the roof but maintains warranty when installed correctly; (4) for premium roofs, consider integrated solar shingles (GAF DecoTech, CertainTeed Apollo II) — they replace shingles rather than mount over them, eliminating warranty concerns. Federal tax credit is 30% through 2032 (Residential Clean Energy Credit), Duke Energy net metering credits at retail rates, and NC property tax exemption applies to the system value. Best Roofing Now coordinates with vetted local solar partners.";

const followUpFAQs = [
  {
    question: 'Should I get a new roof before installing solar panels?',
    answer:
      "Strongly yes — if your existing roof is 10+ years old, replace it BEFORE solar install. Solar removal/reinstall when you eventually need a roof costs $3,000-$8,000 in addition to the roof project itself. Solar panels also block roof access for repairs, making any roof maintenance under the array significantly more expensive. The right sequence: (1) inspect roof remaining lifespan; (2) if under 15 years remaining, replace roof first; (3) install solar within 6-12 months of new roof for warranty alignment.",
  },
  {
    question: 'Do solar panels void my roof warranty?',
    answer:
      "It depends on mount type. Voids warranty: through-bolt mounting on standing-seam metal (penetrates seams), or improper flashing on asphalt shingles. Preserves warranty: S-5! non-penetrating clamp-mount on standing-seam metal (gold standard), GAF/CertainTeed manufacturer-approved flashed mounts on asphalt with proper EPDM gaskets, or integrated solar shingles. Always have your roofing contractor and solar installer coordinate the mounting method BEFORE work begins. Best Roofing Now reviews all proposed mounts before approving warranty alignment.",
  },
  {
    question: 'Can I get the federal solar tax credit on Charlotte NC roofs?',
    answer:
      "The federal Residential Clean Energy Credit (30% through 2032) covers the solar system AND any roof work directly required to support solar — typically structural reinforcement under panel arrays, electrical service upgrades, and integrated solar shingles. It does NOT cover routine roof replacement done before solar install. The credit also drops to 26% in 2033 and 22% in 2034 before expiring in 2035. Charlotte homeowners also qualify for: Duke Energy net metering at retail rates, $0.04/kWh state corporate solar credit (limited eligibility), and NC property tax exemption on system value.",
  },
  {
    question: 'How much do solar panels cost in Charlotte NC?',
    answer:
      "Charlotte residential solar systems: $15,000-$45,000 installed (before tax credits). Typical 6-10 kW system covers 70-100% of average household electricity. With 30% federal tax credit: net cost $10,500-$31,500. Payback period: 7-12 years through Duke Energy net metering and avoided electricity costs. Smaller solar attic fan: $700-$1,400 installed, qualifies for the same 30% credit, payback 4-6 years through summer cooling savings. Best Roofing Now coordinates with vetted Charlotte solar installers — we don't sell solar directly but work with the right install methods to preserve roof warranties.",
  },
  {
    question: 'What about integrated solar shingles vs traditional panels?',
    answer:
      "Integrated solar shingles (GAF DecoTech, CertainTeed Apollo II) replace asphalt shingles entirely on the south-facing slopes — they ARE the roof, not mounted on top. Pros: no warranty conflict, cleaner aesthetic (look like dark shingles), no penetrations through roofing membrane. Cons: 20-30% more expensive than panel-on-shingle ($25,000-$55,000 installed), lower efficiency than premium solar panels (typically 12-15% vs 20%+), limited to manufacturer-approved roofing combinations. Best for: HOA-restricted homes, premium aesthetic priority, single-source warranty (one contractor, one warranty packet).",
  },
];

export const metadata: Metadata = {
  title: 'Can I Put Solar Panels on My New Roof in Charlotte NC?',
  description:
    "Yes — but timing matters. Roof first if 10+ yr old, S-5! clamp-mount on metal, flashed mounts on asphalt, or integrated solar shingles. 30% federal tax credit through 2032.",
  keywords: [
    'can I put solar on new roof Charlotte NC',
    'solar panels new roof',
    'roof and solar Charlotte',
    'solar panel mounting roof warranty',
    'S-5 solar clamp mount',
    'integrated solar shingles',
    'GAF DecoTech Charlotte',
    'CertainTeed Apollo solar',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Can I Put Solar Panels on My New Roof in Charlotte NC?',
    description: 'Yes — with proper timing and warranty-preserving mounting methods.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function CanIPutSolarOnNewRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Can I Put Solar on My New Roof?', url: PAGE_URL }]} />
      <WebPageSchema name="Can I Put Solar Panels on My New Roof in Charlotte NC?" description="Solar + roof timing, mounting, and tax credit guide for Charlotte NC." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Solar on New Roof?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Can I Put Solar Panels on My New Roof Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Install new roof FIRST if existing roof is 10+ years old',
          'S-5! non-penetrating clamp-mount on standing-seam metal — gold standard',
          'Flashed mounts (QuickMount PV, IronRidge) on asphalt with EPDM gaskets',
          'Integrated solar shingles (GAF DecoTech, CertainTeed Apollo II) for premium homes',
          '30% federal Residential Clean Energy Credit through 2032 (drops 2033+)',
          'Duke Energy net metering at retail rates',
          'NC property tax exemption on system value',
          'Solar attic fans $700-1,400 also qualify for 30% credit (4-6 yr payback)',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Solar on New Roof?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Sun className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Solar + Roof Coordination Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">Can I Put Solar Panels on My New Roof in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Roof+Solar Coordination</Button>
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

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Why Coordination Matters</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Wrong mounting method voids 50-yr manufacturer roof warranty.',
                'Solar over old roof requires $3,000-$8,000 removal and reinstall when roof eventually replaces.',
                'Right sequence saves $5,000-$15,000 over wrong sequence.',
                'Federal 30% tax credit covers solar AND solar-required structural reinforcement.',
                'Best Roofing Now coordinates roof + solar partners to preserve warranties.',
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
          </div>
        </div>
      </section>

      <CTASection title="Roof and Solar Done Right" subtitle="Coordinated roof + solar planning. Warranty-preserving mounts. Federal tax credit guidance. Vetted local solar partners." />
    </>
  );
}
