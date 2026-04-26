import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ClipboardCheck, CheckCircle2, ArrowRight } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-to-prepare-for-roof-replacement-charlotte-nc`;
const QUESTION = 'How do I prepare for roof replacement in Charlotte NC?';
const ANSWER =
  "Prepare for a Charlotte NC roof replacement with this 10-step pre-install checklist (1-2 days before): (1) move cars out of driveway and away from house drip lines (we need driveway access for crew, dumpster, and material trailer); (2) cover attic items with plastic tarps (vibration shakes loose dust through ceiling); (3) remove wall art, mirrors, and ceiling-hung items in upper-floor rooms (vibration risk); (4) trim tree branches within 10 feet of roof if possible (we coordinate this with your landscaper if needed); (5) take down satellite dishes that need re-mount after install (or notify us so we can remove and reinstall); (6) notify neighbors of work dates and noise hours (typically 7am-6pm); (7) arrange pet care for crew working hours (loud noise unsettles most pets); (8) plan for HVAC schedule — your A/C may need extra cooling cycles due to roof vibration disturbing attic; (9) keep children indoors during tear-off and install (debris and nail-fall risk); (10) photograph your driveway, deck, and landscape pre-install for insurance baseline. Best Roofing Now provides this checklist to every customer 7 days before scheduled install.";

const followUpFAQs = [
  {
    question: 'Do I need to remove anything from my attic before roof replacement?',
    answer:
      "Cover items in your attic with plastic tarps or sheets — tear-off vibration loosens decades of accumulated dust and small debris that can rain down on stored items. Items to specifically protect: wedding dresses, photo albums, holiday decorations, sentimental items, and anything fabric. Items at low risk: plastic-bin storage, sealed boxes, attic-rated insulation. Most homeowners do this once, and it takes 30-60 minutes. We don't move attic items ourselves to avoid liability for damage.",
  },
  {
    question: 'Will roof replacement damage my landscaping or driveway?',
    answer:
      "We take 5 protective measures: (1) plywood walkways over root zones for crew foot traffic; (2) plant tarps over shrubs adjacent to drop zones; (3) magnetic nail sweep at end of every workday (multiple passes around full perimeter); (4) wheeled dump-trailer placement away from drip lines and lawn (NOT on grass); (5) post-work landscape walkthrough with photos and homeowner approval. Despite this, occasional minor turf compression from foot traffic and dump trailer wheels happens — we re-aerate or seed any visible damage at no cost.",
  },
  {
    question: 'How loud is roof replacement and what hours do you work?',
    answer:
      "Roof replacement is loud — comparable to a power lawnmower running continuously for 8-10 hours. Loudest phases: tear-off (4-6 hours of hammer claws and shingle scraping) and install (nail guns, hammer drops). Our standard work hours are 7am-6pm Monday-Saturday, with most projects completing in 1-2 days for typical 30-square Charlotte homes. We never start before 7am out of courtesy to neighbors. For HOA-restricted communities (Ballantyne, Providence, Quail Hollow), we coordinate with HOA work-hour restrictions.",
  },
  {
    question: 'What about my pets during roof replacement?',
    answer:
      "Pets — especially dogs sensitive to noise — should be kept indoors with white noise (TV or radio) or moved off-site for the work day. Many Charlotte homeowners use this as a planned dog-park or doggy-daycare day. Cats typically retreat to closets and quiet rooms — that's fine. Birds in cages should ideally move to a basement or interior bathroom. We've never had a pet injured but vibration and noise are genuinely stressful for animals.",
  },
  {
    question: 'Should I be home during roof replacement?',
    answer:
      "It's not required but is helpful — the project manager often has questions or wants to show you something during install (rotted decking, hidden damage, opportunity to upgrade flashing while it's exposed). Many homeowners use the install day to work from home or run errands. We never need access to the inside of your home during install (except in rare cases with attic access for ventilation balance verification). At project completion, we walk the homeowner through the finished roof and sign off on the warranty packet together.",
  },
];

export const metadata: Metadata = {
  title: 'How Do I Prepare for Roof Replacement in Charlotte NC?',
  description:
    "10-step pre-install checklist for roof replacement in Charlotte NC: cars, attic prep, wall art, trees, HVAC, pets, neighbors. Provided to every customer 7 days before install.",
  keywords: [
    'how to prepare for roof replacement Charlotte NC',
    'roof replacement preparation',
    'before roof replacement checklist',
    'pre-install roof prep',
    'what to do before roofers come',
    'protect attic during roofing',
    'roof replacement and pets',
    'roof install day prep',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Do I Prepare for Roof Replacement in Charlotte NC?',
    description: '10-step pre-install checklist for stress-free roof replacement.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowToPrepareForRoofReplacementPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How to Prepare for Roof Replacement?', url: PAGE_URL }]} />
      <WebPageSchema name="How Do I Prepare for Roof Replacement in Charlotte NC?" description="Pre-install preparation checklist for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How to Prepare?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How to Prepare for Roof Replacement Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Move cars out of driveway and away from house drip lines',
          'Cover attic items with plastic tarps (vibration loosens decades of dust)',
          'Remove wall art, mirrors, ceiling items in upper-floor rooms',
          'Trim tree branches within 10 ft of roof',
          'Take down satellite dishes (or notify us to handle)',
          'Notify neighbors of work dates and 7am-6pm hours',
          'Arrange pet care for crew hours (noise stresses most pets)',
          'Photograph driveway, deck, landscape pre-install for insurance baseline',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'How to Prepare for Roof Replacement?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <ClipboardCheck className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">10-Step Pre-Install Checklist</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Do I Prepare for Roof Replacement in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Schedule Free Estimate</Button>
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

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Why Pre-Install Prep Matters</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Vibration from tear-off shakes loose decades of attic dust onto stored items.',
                'Driveway access is critical for crew, dumpster, and material trailer placement.',
                'Pre-install photos protect you on the rare occasion of landscape or driveway damage.',
                'Tree branches within 10 ft of roof get trimmed for safety and crew access.',
                'Satellite dishes need pre-removal or coordinated remount to avoid wiring conflicts.',
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

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-slate-800 mb-3">
                <strong>Schedule your free estimate.</strong> Best Roofing Now provides this 10-step prep checklist 7 days before every install and a project manager who answers questions throughout the project.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                Schedule Free Estimate <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Stress-Free Roof Replacement" subtitle="Pre-install checklist 7 days ahead. Project manager for your questions. Magnetic nail sweep cleanup. Photo verification at completion." />
    </>
  );
}
