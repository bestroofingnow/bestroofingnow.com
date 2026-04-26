import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import Link from 'next/link';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  Award,
  Clock,
  FileText,
  Camera,
  ClipboardCheck,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  SpeakableContentBlocks,
  WebPageSchema,
  FeaturedSnippetListAnswerSchema,
  FreeInspectionOfferSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Free Roof Estimate Charlotte NC',
  description:
    'Free, no-obligation roof estimate in Charlotte NC. 48-hour scheduling, 30+ photo documentation, attic check, decking probe, and detailed written estimate within 24-48 hours. BBB A+ rated.',
  keywords: [
    'free roof estimate Charlotte NC',
    'free roof inspection Charlotte',
    'no obligation roof quote Charlotte',
    'roof estimate near me',
    'free roofing quote Charlotte NC',
    'Charlotte roof estimate',
    'free roof assessment',
    'roof inspection cost Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/free-roof-estimate-charlotte-nc`,
  },
  openGraph: {
    title: 'Free Roof Estimate Charlotte NC | Best Roofing Now',
    description:
      'Free, no-obligation roof estimate in Charlotte NC. 48-hour scheduling, photo documentation, written estimate within 24-48 hours.',
    url: `${SITE_CONFIG.url}/free-roof-estimate-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Free roof estimate Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

const faqs = [
  {
    question: 'How long does a free roof estimate take in Charlotte NC?',
    answer:
      "Most free roof estimates take 30-60 minutes on-site, including a full exterior walk-around, ladder access for steep-slope roofs, attic check for ventilation and insulation, and decking probe for soft spots. We'll deliver the detailed written estimate within 24-48 hours via email, text, or printed copy at your preference.",
  },
  {
    question: 'Is the estimate truly free with no obligation?',
    answer:
      "Yes. Best Roofing Now's estimates are 100% free and obligation-free across Charlotte and the Lake Norman region. We never charge a trip fee, deposit, or assessment fee for residential estimates. You receive a full PDF report with photos and pricing, and you decide whether to move forward — no high-pressure sales calls, no follow-up spam.",
  },
  {
    question: 'What does the free estimate include?',
    answer:
      "Every Best Roofing Now estimate includes: 30+ on-site photos with annotations, attic check (insulation R-value, ventilation NC IRC §R806 NFVA balance, daylight visibility through deck, signs of leaks), decking probe for soft spots, gutter and downspout inspection, fascia/soffit condition check, chimney flashing assessment, pipe boot age check, ridge and valley inspection, and Xactimate-format line-item pricing with material and labor breakdowns.",
  },
  {
    question: 'How quickly can you schedule a free estimate?',
    answer:
      "We schedule most free estimates within 48 hours of your call across Charlotte, Ballantyne, SouthPark, Steele Creek, University City, and the Lake Norman towns of Huntersville, Cornelius, Davidson, and Mooresville. Storm-damage emergency assessments are typically scheduled same-day or next-day for active leaks and tree-damage situations.",
  },
  {
    question: 'Do I need to be home for the estimate?',
    answer:
      "No — we can complete the exterior estimate without anyone home as long as the property is accessible. However, if you'd like the attic check (which we strongly recommend, especially for older roofs and warranty compliance verification), we'll need someone to provide access. We're happy to schedule for evenings, weekends, or any time that works for your calendar.",
  },
  {
    question: 'Do you provide insurance claim estimates?',
    answer:
      "Yes. We provide Xactimate-format estimates that adjusters recognize, including supplemental line items for code upgrades (NC IRC §R806 ventilation, ice-and-water shield, drip edge, decking replacement), overhead and profit, and hidden damage. We can meet your insurance adjuster on-site for the inspection — improves claim outcomes 20-40% versus letting the adjuster work alone.",
  },
  {
    question: 'What materials and brands do you estimate?',
    answer:
      "We estimate the full range: GAF (Master Elite installer, top 2% nationwide — unlocks Golden Pledge 50-yr warranty), CertainTeed (SELECT ShingleMaster — unlocks 5-Star Plus warranty), Owens Corning (Platinum Preferred), Tamko Heritage, Atlas, Malarkey, IKO, plus standing-seam metal (steel, aluminum, zinc, copper), slate, tile, synthetic slate (DaVinci, Brava, CeDUR), and commercial systems (Carlisle, JM, Firestone-Holcim, Mule-Hide TPO/EPDM/PVC).",
  },
  {
    question: 'What if I just need a small repair, not a full roof?',
    answer:
      "Repair estimates are also free. We honestly assess whether a $400-$1,800 repair will solve your issue versus full replacement — sometimes a targeted pipe-boot reseat or chimney-flashing repair is the right call. We never push replacement when repair is the better economic choice for your situation.",
  },
];

export default function FreeRoofEstimateCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Free Roof Estimate Charlotte NC', url: `${SITE_CONFIG.url}/free-roof-estimate-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/free-roof-estimate-charlotte-nc`}
        pageName="Free Roof Estimate Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <WebPageSchema
        name="Free Roof Estimate Charlotte NC | Best Roofing Now"
        url={`${SITE_CONFIG.url}/free-roof-estimate-charlotte-nc`}
        description="Free, no-obligation roof estimate in Charlotte NC. 48-hour scheduling, 30+ photo documentation, attic check, decking probe, written estimate within 24-48 hours."
        primaryImage={IMAGES.hero.hero1}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Free Roof Estimate Charlotte NC', url: `${SITE_CONFIG.url}/free-roof-estimate-charlotte-nc` },
        ]}
      />
      <FeaturedSnippetListAnswerSchema
        question="What does a free roof estimate from Best Roofing Now Charlotte NC include?"
        directAnswer="A free roof estimate from Best Roofing Now in Charlotte NC includes 8 components: (1) full exterior walk-around with ladder access; (2) attic check for ventilation NC IRC §R806 NFVA balance, insulation R-value, daylight through deck, and leak signs; (3) decking probe for soft spots and rot; (4) 30+ on-site photos with annotations; (5) gutter, downspout, fascia, soffit, chimney flashing, pipe boot, and ridge/valley assessment; (6) Xactimate-format line-item pricing with material and labor breakdowns; (7) repair-vs-replace honest recommendation; (8) PDF report delivered within 24-48 hours via email, text, or printed copy. Always free, never any trip fee or pressure."
        items={[
          'Full exterior walk-around with ladder access for steep-slope roofs',
          'Attic check — NC IRC §R806 NFVA ventilation, R-value insulation, daylight through deck',
          'Decking probe for soft spots and hidden rot',
          '30+ on-site photos with annotations',
          'Gutter, fascia, soffit, chimney flashing, pipe boot, ridge/valley assessment',
          'Xactimate-format line-item pricing — material and labor breakdowns',
          'Honest repair-vs-replace recommendation — sometimes $400-$1,800 repair beats full replacement',
          'PDF report within 24-48 hours; insurance-claim ready',
        ]}
        pageUrl={`${SITE_CONFIG.url}/free-roof-estimate-charlotte-nc`}
      />
      <FreeInspectionOfferSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero1}
            alt="Free roof estimate Charlotte NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">100% Free | No Obligation | 48-Hour Scheduling</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Free Roof Estimate <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              30+ photo report. Attic check. Written estimate in 24-48 hours.
            </p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides truly free, no-obligation roof estimates across Charlotte
              and the surrounding communities of Ballantyne, SouthPark, Dilworth, Plaza Midwood,
              Myers Park, NoDa, Eastover, Foxcroft, Cotswold, Beverly Woods, Steele Creek,
              University City, and the Lake Norman towns of Huntersville, Cornelius, Davidson, and
              Mooresville. 48-hour scheduling, 30+ on-site photos, attic check, decking probe, and
              Xactimate-format written estimate within 24-48 hours. Veteran-owned, BBB A+, GAF
              Master Elite (top 2%), CertainTeed SELECT ShingleMaster credentialed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>
                Schedule Your Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Accredited
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What's Included in Every Free Estimate
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Every estimate is a full-roof inspection with photo documentation — not a 5-minute
              eyeball quote.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ClipboardCheck, title: 'Exterior Walk-Around', desc: 'Ladder access for steep-slope roofs; full perimeter check; chimney, vents, valleys, ridges' },
              { icon: Camera, title: '30+ Annotated Photos', desc: 'Every issue documented with location, severity, and recommended action' },
              { icon: FileText, title: 'Attic Inspection', desc: 'NC IRC §R806 ventilation NFVA, insulation R-value, deck integrity, daylight check' },
              { icon: Clock, title: 'Written Estimate 24-48 Hours', desc: 'Xactimate-format with material + labor line items, warranty options, financing' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How the Free Estimate Process Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { num: '1', title: 'Call or Schedule Online', desc: 'Phone us or submit the contact form. We typically schedule within 48 hours of your request.' },
              { num: '2', title: 'On-Site Inspection 30-60 min', desc: 'Full exterior walk-around, ladder access, attic check, decking probe, 30+ photos.' },
              { num: '3', title: 'Written Estimate 24-48 Hours', desc: 'PDF report with photos, line-item pricing, repair-vs-replace recommendation, warranty options.' },
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-gray">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="free-roof-estimate-charlotte-nc" />

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Free Estimate Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-light rounded-xl p-6 group">
                <summary className="flex items-start justify-between cursor-pointer font-semibold text-primary">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                    {faq.question}
                  </span>
                  <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-gray pl-8">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CityGeoSection city="Charlotte" state="NC" citySlug="charlotte-nc" service="free-roof-estimate" />

      <CTASection
        title="Ready for Your Free Roof Estimate?"
        subtitle="Schedule online or call us directly. Most appointments scheduled within 48 hours."
      />
    </>
  );
}
