import { Metadata } from 'next';
import { Phone, Building2 } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-gambrel-roof-charlotte-nc`;
const QUESTION = 'What is a gambrel roof and where do I see them in Charlotte NC?';
const ANSWER = "A gambrel roof is a two-sided symmetrical roof with two distinct slopes on each side — a steep lower slope and a shallower upper slope, creating the classic barn-style silhouette. In Charlotte NC, you'll spot gambrel roofs on Dutch Colonial homes throughout Myers Park, Eastover, and historic Dilworth, plus on barns and outbuildings in equestrian properties around Waxhaw and Weddington. Gambrel roofs maximize second-floor living space (roughly 40% more usable square footage than gable roofs at the same footprint), cost $9,500-$18,000 to replace on a 2,000 sq ft home, but require careful waterproofing at the slope transition where leaks commonly develop in Charlotte's humid climate.";

const followUpFAQs = [
  { question: 'How much does a gambrel roof cost in Charlotte NC?', answer: "Gambrel roof replacement in Charlotte runs $9,500-$18,000 for a 2,000 sq ft home with architectural shingles ($5.50-$8.50 per sq ft installed) — about 25-30% more than a standard gable roof. The added cost reflects complex framing at the slope transition, custom flashing requirements, and longer labor time. Cedar shake gambrels (popular on historic Dilworth Dutch Colonials) range $14,000-$28,000. Metal gambrels are rare in Charlotte but cost $20,000-$35,000. Permits through Mecklenburg County add $100-$300 due to the structural complexity." },
  { question: 'Where can I see gambrel roofs in Charlotte neighborhoods?', answer: "Gambrel roofs appear in several distinct Charlotte areas. Dutch Colonial homes from the 1920s-1940s line streets in Myers Park, Eastover, and historic Dilworth — these are the textbook urban gambrels. Plaza Midwood has a handful of restored Dutch Colonials with full gambrel rooflines. Outside the urban core, equestrian properties around Waxhaw, Weddington, and Mint Hill feature true gambrel barns. Lake Norman areas (Cornelius, Davidson) occasionally use gambrel-style carriage houses on larger waterfront lots. New construction rarely uses gambrels due to higher framing costs." },
  { question: 'What are the pros and cons of gambrel roofs in Charlotte?', answer: "Pros: gambrel roofs add 40% more usable second-floor space than gables (great for finished attics or master suites), give homes distinctive Dutch Colonial character, and allow large dormer windows. Cons: weak performance in heavy snow (rare in Charlotte but problematic during 2014/2018 winter storms), prone to leaks at the slope-change point if flashing isn't perfect, and limited wind resistance — only about half that of hip roofs. The extended lower slope catches wind during Charlotte thunderstorms, requiring extra hurricane strapping per NC IRC code." },
  { question: 'Why do gambrel roofs leak in Charlotte humidity?', answer: "Gambrel roofs leak primarily at the transition between the steep lower slope and the shallower upper slope, where water can pool and back up under shingles during Charlotte's heavy summer rains (averaging 4+ inches per month June-August). Improper step flashing or inadequate ice-and-water shield at this transition causes 80% of gambrel leaks. Charlotte's high humidity (70%+ summer) accelerates wood rot once water penetrates. The fix: GAF StormGuard or CertainTeed WinterGuard membrane extending 24 inches above and below the transition, plus high-temp metal flashing." },
  { question: 'Can I convert my Charlotte gable roof to a gambrel?', answer: "Technically yes, but it's rarely cost-effective in Charlotte. A gable-to-gambrel conversion requires complete removal of existing rafters, new structural engineering, permit through Mecklenburg County (approximately $300-$600), and full reframing — total cost typically $35,000-$75,000 for a 2,000 sq ft home. The benefit: roughly 600-800 additional square feet of finished second-floor space. Most homeowners instead build a shed dormer ($8,000-$18,000) on existing gable roofs, which adds similar usable space at one-quarter the cost." },
];

export const metadata: Metadata = {
  title: 'Gambrel Roof Guide for Charlotte NC',
  description: "What is a gambrel roof? Learn about Dutch Colonial styles, costs ($9,500-$18,000), and where to find gambrel roofs in Charlotte NC.",
  keywords: ['gambrel roof Charlotte NC', 'Dutch Colonial Charlotte', 'gambrel roof cost', 'barn roof Charlotte', 'gambrel vs gable', 'Charlotte historic homes', 'gambrel roof leaks', 'Myers Park Dutch Colonial'],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Gambrel Roof Guide for Charlotte NC',
    description: 'Learn what a gambrel roof is, where to spot them in Charlotte, and what they cost to maintain.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function GambrelRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Gambrel Roof Guide', url: PAGE_URL }]} />
      <WebPageSchema name="Gambrel Roof Guide for Charlotte NC" description="Complete guide to gambrel roofs for Charlotte NC homeowners — Dutch Colonial styles, costs, leak prevention, and historic neighborhoods." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Gambrel Roof Guide', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Gambrel Roof Guide Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Two-sided roof with two slopes per side — barn-style silhouette',
          'Common on Dutch Colonial homes in Myers Park, Eastover, Dilworth',
          'Found on equestrian properties in Waxhaw, Weddington, Mint Hill',
          'Replacement cost: $9,500-$18,000 for 2,000 sq ft Charlotte home',
          '40% more usable second-floor space than equivalent gable roof',
          'Prone to leaks at slope transition without proper flashing',
          'Requires extra hurricane strapping per NC IRC code',
          'Conversion from gable costs $35,000-$75,000 — rarely cost-effective',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Gambrel Roof Guide' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Style Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What is a gambrel roof and where do I see them in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Free Gambrel Roof Estimate</Button>
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

      <CTASection title="Own a Charlotte Dutch Colonial?" subtitle="Free gambrel roof inspection — we specialize in historic Myers Park, Eastover, and Dilworth roofing." />
    </>
  );
}
