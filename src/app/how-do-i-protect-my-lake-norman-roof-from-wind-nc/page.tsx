import { Metadata } from 'next';
import { Phone, Wind } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-do-i-protect-my-lake-norman-roof-from-wind-nc`;
const QUESTION = 'How do I protect my Lake Norman NC roof from wind damage?';
const ANSWER =
  "Protect your Lake Norman NC roof from wind damage with these 7 strategies tailored to lake-effect wind exposure: (1) install Class 4 impact-resistant + 6-nail-pattern shingles rated for 150+ MPH wind (NC code minimum 110 MPH inadequate for lakefront wind-fetch); (2) upgrade to standing-seam aluminum metal roofing for ultimate wind performance (mechanically-seamed locks survive 150+ MPH); (3) install ice-and-water shield 6 ft from eaves at all roof edges (Lake Norman wind-driven rain finds marginal flashing); (4) reinforce ridge cap with 6-nail pattern and high-wind ridge cap shingles (most blow-off failures start at the ridge); (5) install Air Vent ShingleVent II or equivalent external-baffle ridge vent (rated 110+ MPH wind-driven rain protection vs lower-grade ridge vents that leak in wind); (6) trim trees within 20 feet of roof to reduce branch impact damage during storms; (7) annual professional inspection focused on flashing, sealant, and ridge cap integrity. Lake Norman experiences higher wind exposure than inland Charlotte due to wind-fetch across open water — the prevailing southwest wind builds energy across 33-mile lake length and impacts north-shore properties especially hard during summer thunderstorms and August-October tropical remnants.";

const followUpFAQs = [
  {
    question: 'What wind speeds are typical at Lake Norman?',
    answer:
      "Lake Norman experiences elevated wind speeds vs inland Charlotte due to wind-fetch across open water. Typical readings: average wind 8-12 MPH (vs 6-8 MPH inland), gusts during summer thunderstorms 40-60 MPH, August-October tropical remnant peaks 60-90 MPH (Florence 2018, Idalia 2023, Helene 2024 patterns), severe storm events 100+ MPH possible at exposed waterfront positions. Houses on the north and west sides of Lake Norman face the most wind exposure due to prevailing southwest wind direction. NC code minimum 110 MPH wind-rated shingles are inadequate for these positions — 130+ MPH (architectural) or 150+ MPH (Class 4 or metal) is standard for lakefront.",
  },
  {
    question: 'Do Class 4 shingles really make a difference at Lake Norman?',
    answer:
      "Yes — significantly. Class 4 shingles are rated 150 MPH wind vs 130 MPH for standard architectural and 60 MPH for 3-tab. The 6-nail pattern (Class 4 standard) provides 50% more uplift resistance than 4-nail (standard architectural). Real-world performance: Class 4 roofs survive Florence 2018 and Helene 2024 wind events with minimal damage; standard architectural roofs commonly lose 5-20% of shingles in the same events. Plus Class 4 unlocks the NC IBHS Fortified discount (10-30% off homeowner insurance). Recommended for ALL Lake Norman lakefront positions.",
  },
  {
    question: 'How does wind cause roof leaks at Lake Norman?',
    answer:
      "Wind causes Lake Norman roof leaks through 4 mechanisms: (1) shingle blow-off — sealant strip breaks under wind uplift, water enters through gaps; (2) wind-driven rain — even intact shingles can let water through if seams are marginal (flashing, ridge, valleys); (3) flashing failures — wind exceeds the design tolerance of step flashing or chimney reglet; (4) gutter overflow — clogged gutters back-up under shingles during heavy wind-driven rain. Best Roofing Now's lakefront install includes ice-and-water shield 6 ft from eaves (vs 3 ft inland standard) specifically to handle Lake Norman wind-driven rain.",
  },
  {
    question: 'Should I upgrade ventilation for Lake Norman wind protection?',
    answer:
      "Yes — high-wind ridge vent installation is critical for Lake Norman waterfront. Standard residential ridge vents (basic continuous shingle-over) can leak under wind-driven rain at lakefront positions. Upgrade to: Air Vent ShingleVent II (rated 110+ MPH wind-driven rain), GAF Cobra with external-baffle option, or Owens Corning VentSure Strip with weather-baffled design. These 'high-wind' ridge vents have external baffles or labyrinth designs that prevent rain intrusion under wind uplift. Cost premium $200-$500 over standard ridge vent on a typical reroof.",
  },
  {
    question: 'What about wind-driven rain on cantilevered or over-water structures?',
    answer:
      "Cantilevered and over-water structures (decks, docks, boathouses, pier-supported additions) face the most wind-driven rain exposure at Lake Norman. Best Roofing Now's protocol: (1) extended ice-and-water shield (8-10 ft from eaves on cantilevered sections); (2) double-flashing at all transitions to vertical surfaces; (3) PVDF Kynar standing-seam metal preferred over asphalt for cantilevered roofs (better wind-driven-rain performance); (4) custom drip edge with extended return for water shedding; (5) annual inspection and sealant refresh on all penetrations. Cantilevered roofing typically costs 15-25% more than standard slopes due to access and detailing complexity.",
  },
];

export const metadata: Metadata = {
  title: 'How Do I Protect My Lake Norman NC Roof from Wind Damage?',
  description:
    "Protect Lake Norman NC roof from wind: Class 4 impact-resistant 150+ MPH shingles, standing-seam aluminum, 6 ft ice-and-water shield, high-wind ridge vent, tree trimming.",
  keywords: [
    'protect Lake Norman roof from wind',
    'Lake Norman wind damage roof',
    'lakefront wind protection roof',
    '150 mph wind roof Lake Norman',
    'high-wind ridge vent',
    'Class 4 impact resistant Lake Norman',
    'wind-driven rain roof',
    'lake norman storm damage prevention',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Do I Protect My Lake Norman NC Roof from Wind Damage?',
    description: '7 wind-protection strategies for Lake Norman lakefront homes.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowProtectLakeNormanRoofFromWindPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Protect LKN Roof from Wind?', url: PAGE_URL }]} />
      <WebPageSchema name="How Do I Protect My Lake Norman NC Roof from Wind Damage?" description="Wind protection strategies for Lake Norman NC lakefront roofs." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'LKN Wind Protection?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Do I Protect Lake Norman Roof From Wind NC" city="Cornelius" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Cornelius" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Class 4 impact-resistant + 6-nail pattern shingles rated 150+ MPH',
          'Standing-seam aluminum metal roofing — ultimate wind performance',
          'Ice-and-water shield 6 ft from eaves (vs 3 ft inland) at all roof edges',
          'Reinforced ridge cap with 6-nail pattern and high-wind shingles',
          'Air Vent ShingleVent II or equivalent external-baffle ridge vent',
          'Trim trees within 20 feet of roof to reduce branch impact',
          'Annual professional inspection focused on flashing/sealant/ridge integrity',
          'Wind-fetch across 33-mile lake makes north/west shore most exposed',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'LKN Wind Protection?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Wind className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Lake Norman NC Wind Protection Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Do I Protect My Lake Norman NC Roof from Wind Damage?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Lakefront Wind-Resistant Quote</Button>
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

      <CTASection title="Lake Norman Wind-Resistant Roofing" subtitle="Class 4 impact-resistant shingles. Standing-seam aluminum. High-wind ridge vents. Battle-tested through Florence 2018, Idalia 2023, Helene 2024." />
    </>
  );
}
