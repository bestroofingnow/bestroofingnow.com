import { Metadata } from 'next';
import { Phone, DollarSign } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-much-does-roof-flashing-repair-cost-charlotte-nc`;
const QUESTION = 'How much does roof flashing repair cost in Charlotte NC?';
const ANSWER =
  "Roof flashing repair costs in Charlotte NC range from $250 to $2,500 depending on flashing type and scope. Pricing breakdown: pipe boot reseal $250-$500 (#1 leak source in Charlotte, EPDM/neoprene fails at 8-12 yr); chimney step flashing repair $400-$1,200; chimney mortar reglet repointing $600-$1,500; valley flashing repair $600-$1,800; skylight flashing reseal $400-$1,400; roof-to-wall step flashing $500-$1,500; cricket installation behind chimney $800-$2,500 (NC IRC R1003.20 requires for chimneys 30+ inches wide). Material upgrades: aluminum flashing standard, lead flashing $50-$150 add for historic homes, copper flashing $100-$300 add for premium estates. Most flashing repairs complete in 1-4 hours same-day. Best Roofing Now's free inspection identifies all flashing issues with photo documentation; insurance commonly covers storm-driven flashing failures minus the deductible.";

const followUpFAQs = [
  {
    question: 'What types of flashing fail most often in Charlotte NC?',
    answer:
      "Pipe boots are the #1 flashing failure in Charlotte (EPDM/neoprene seals crack at 8-12 yr from UV exposure and thermal cycling). Other common failures: chimney step flashing pulls away from siding (especially after wind events), chimney mortar reglet cracks (Charlotte freeze-thaw cycles affect old mortar), valley flashing slides downhill on steep slopes, skylight flashing leaks at the seal between glass and curb. Bargain pipe boots (10-15 year warranty) typically last only 8-10 years in Charlotte heat — premium boots (Oatey, Lifetime Tool, IPS Roofing) last 12-20 years.",
  },
  {
    question: 'Can flashing be repaired or does it need replacement?',
    answer:
      "Most flashing failures need replacement, not repair. Sealants and mastic patches are temporary 60-90 day fixes at best — water always finds the path of least resistance through old aluminum or rusted steel flashing. Best Roofing Now replaces failed flashing with new aluminum (standard, 30+ year lifespan), lead (historic homes, 50+ year), or copper (premium estates, 60-100+ year). Replacement is cheaper long-term than repeated repair attempts.",
  },
  {
    question: 'Will my insurance cover roof flashing repair in Charlotte?',
    answer:
      "Storm-driven flashing damage (wind, hail, fallen tree, ice) is typically covered under most NC homeowner policies minus the deductible. Age-related or maintenance-deferred flashing failure is NOT covered (e.g., 15-year-old pipe boot that finally cracked). Best Roofing Now's Xactimate-format documentation supports insurance claims when storm-driven. The 4-question test: was there a recent storm? Is the roof under 20 years old? Has it been maintained? Is there interior water damage? Yes answers favor coverage.",
  },
  {
    question: 'How long does flashing repair take in Charlotte?',
    answer:
      "Most flashing repairs complete same-day in 1-4 hours: pipe boot replacement 30-60 min, chimney step flashing 1-3 hr, chimney mortar repointing 2-4 hr, valley flashing 2-4 hr (extends to 6+ hours if shingles need re-installation around the work area), skylight reseal 1-2 hr. Best Roofing Now schedules most flashing repairs within 48 hours of the free inspection. Emergency same-day dispatch available for active leaks ($250-$500 after-hours surcharge often reimbursable as insurance loss mitigation).",
  },
  {
    question: 'Does flashing repair require a permit in Charlotte NC?',
    answer:
      "Most spot flashing repairs do NOT require a Mecklenburg County permit (under 100 sq ft total work area). Larger flashing replacement combined with shingle repair (e.g., full chimney chase rebuild with surrounding shingles, full valley replacement) typically does require a permit ($100-$300, 1-3 day turnaround). Best Roofing Now pulls all required permits as part of the project — homeowners never deal with the permit office.",
  },
];

export const metadata: Metadata = {
  title: 'How Much Does Roof Flashing Repair Cost in Charlotte NC?',
  description:
    "Roof flashing repair Charlotte NC: pipe boot $250-500, chimney flashing $400-1,200, valley $600-1,800, skylight $400-1,400, cricket $800-2,500. Most repairs same-day.",
  keywords: [
    'roof flashing repair cost Charlotte NC',
    'pipe boot replacement cost',
    'chimney flashing repair cost',
    'valley flashing cost',
    'skylight flashing reseal',
    'roof flashing types',
    'flashing repair Charlotte',
    'flashing replacement cost',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Much Does Roof Flashing Repair Cost in Charlotte NC?',
    description: 'Pipe boot $250-500, chimney $400-1,200, valley $600-1,800. Most same-day.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowMuchFlashingRepairPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Flashing Repair Cost?', url: PAGE_URL }]} />
      <WebPageSchema name="How Much Does Roof Flashing Repair Cost in Charlotte NC?" description="Roof flashing repair cost guide for Charlotte NC." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Flashing Repair Cost?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Much Does Roof Flashing Repair Cost Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Pipe boot reseal — $250-$500 (#1 leak source, fails at 8-12 yr)',
          'Chimney step flashing repair — $400-$1,200',
          'Chimney mortar reglet repointing — $600-$1,500',
          'Valley flashing repair — $600-$1,800',
          'Skylight flashing reseal — $400-$1,400',
          'Roof-to-wall step flashing — $500-$1,500',
          'Cricket installation behind chimney — $800-$2,500 (NC IRC R1003.20 required 30+ inch chimneys)',
          'Most flashing repairs complete same-day in 1-4 hours',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Flashing Repair Cost?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Flashing Pricing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Much Does Roof Flashing Repair Cost in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Flashing Inspection</Button>
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

      <CTASection title="Same-Day Flashing Repair" subtitle="Free inspection identifies all flashing issues. Most repairs complete in 1-4 hours. Insurance documentation included." />
    </>
  );
}
