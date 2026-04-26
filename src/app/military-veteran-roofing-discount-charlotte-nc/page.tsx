import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  Award,
  HelpCircle,
  ArrowRight,
  Medal,
  Users,
  DollarSign,
  Clock,
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
  title: 'Military & Veteran Roofing Discount Charlotte NC',
  description:
    "Military and veteran roofing discount in Charlotte NC. 5-10% off for active duty, retirees, dependents, Gold Star families. VA loan and FHA/VA refinance roof certifications. Veteran-owned by Best Roofing Now.",
  keywords: [
    'military veteran roofing discount Charlotte NC',
    'veteran roofing discount Charlotte',
    'military discount roofing',
    'VA loan roof certification Charlotte',
    'FHA VA roof certification',
    'active duty military roofing Charlotte NC',
    'Gold Star family roofing',
    'veteran owned roofer Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/military-veteran-roofing-discount-charlotte-nc`,
  },
  openGraph: {
    title: 'Military & Veteran Roofing Discount Charlotte NC | Best Roofing Now',
    description:
      'Military and veteran roofing discount in Charlotte NC. 5-10% off, VA/FHA roof certifications, veteran-owned company.',
    url: `${SITE_CONFIG.url}/military-veteran-roofing-discount-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.team.jamesAndFred,
        width: 1200,
        height: 630,
        alt: 'Veteran-owned roofing company Charlotte NC',
      },
    ],
  },
};

const faqs = [
  {
    question: 'How much is the military and veteran roofing discount in Charlotte NC?',
    answer:
      'Best Roofing Now offers a 5-10% discount off labor and materials for active duty military, retirees, military dependents (spouses and children of active or retired service members), Gold Star families (immediate family of fallen service members), and qualified members of all 6 branches: Army, Navy, Air Force, Marines, Coast Guard, and Space Force. Discount applies to residential roofing projects $5,000 or more; cannot be combined with other promotional discounts but stacks with insurance claim work.',
  },
  {
    question: 'How do I prove eligibility for the military discount?',
    answer:
      "We accept any of these as eligibility proof: military ID (CAC, DD Form 2, USID), VA card, DD Form 214 (discharge document), retired military ID, dependent ID, Gold Star family certification, or VHIC card. We never copy or store your ID — we verify in person and apply the discount on the estimate. Spouse coverage extends to surviving spouses of fallen service members.",
  },
  {
    question: 'Does Best Roofing Now provide VA loan roof certifications?',
    answer:
      'Yes. We perform VA loan and FHA/VA refinance roof certifications across Charlotte and the surrounding region — required by VA-backed lenders to confirm the roof has at least 2-3 years of remaining lifespan. Pricing $200-$450 for residential, with 24-48 hour turnaround (same-day rush available for tight closings). HAAG-credentialed inspector — court-admissible forensic standard, accepted by all VA-approved lenders.',
  },
  {
    question: 'Why is veteran ownership important when choosing a roofer?',
    answer:
      "Best Roofing Now was founded by Fred Turner, a proud military veteran, and his son James. Veteran ownership brings 4 measurable advantages to your roof project: (1) mission-driven discipline carried from military service into project execution; (2) detail-oriented documentation and after-action review; (3) chain-of-command coordination useful for multi-crew projects; (4) familiarity with PCS timelines, VA loan requirements, and military relocation deadlines.",
  },
  {
    question: 'Do you accept GI Bill housing benefits or VA disability compensation as payment?',
    answer:
      "GI Bill and VA disability compensation are direct deposits to you and can be used for any home expense including roofing. We don't directly bill the VA for roof work (the VA Specially Adapted Housing grant is the rare exception for service-connected disabled veterans needing accessibility modifications). For most veterans, your VA benefits cover the project through your normal payment method — and our 5-10% military discount stacks on top.",
  },
  {
    question: 'Can military families on PCS timelines get expedited service?',
    answer:
      "Yes. We routinely accommodate PCS (Permanent Change of Station) timelines: pre-listing roof certifications for outgoing families, expedited estimates for incoming families needing repairs before move-in, coordination with VA-approved real estate agents and home inspectors, and weekend or evening estimate scheduling for active duty. Just mention 'PCS timeline' when scheduling and we'll prioritize.",
  },
  {
    question: 'What Charlotte-area military bases and installations do you serve?',
    answer:
      'While Charlotte does not host an active military installation, we serve veterans, retirees, and active duty assigned to: Charlotte VA Health Care System (Salisbury VA Medical Center clinics), recruiting commands, ROTC instructors at UNCC and Davidson College, Reserve and National Guard units, and military families relocating from Fort Bragg / Pope AFB area. Charlotte has a growing veteran population with multiple active VFW posts (5108, 9856, 7570) and American Legion posts.',
  },
  {
    question: 'Do you offer first responder, teacher, or healthcare worker discounts too?',
    answer:
      "Yes — we offer the same 5-10% discount to current first responders (police, fire, EMS), K-12 teachers, and healthcare workers (nurses, doctors, EMTs) with valid current employment ID. We believe in supporting the people who serve and protect Charlotte. Discount terms are the same as the military discount — applies to projects $5,000+, doesn't combine with other promos but stacks with insurance work.",
  },
];

export default function MilitaryVeteranRoofingDiscountCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Military & Veteran Roofing Discount Charlotte NC', url: `${SITE_CONFIG.url}/military-veteran-roofing-discount-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/military-veteran-roofing-discount-charlotte-nc`}
        pageName="Military & Veteran Roofing Discount Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <WebPageSchema
        name="Military & Veteran Roofing Discount Charlotte NC | Best Roofing Now"
        url={`${SITE_CONFIG.url}/military-veteran-roofing-discount-charlotte-nc`}
        description="Military and veteran roofing discount in Charlotte NC. 5-10% off for active duty, retirees, dependents, Gold Star families. VA loan and FHA/VA refinance roof certifications. Veteran-owned."
        primaryImage={IMAGES.team.jamesAndFred}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Military & Veteran Roofing Discount Charlotte NC', url: `${SITE_CONFIG.url}/military-veteran-roofing-discount-charlotte-nc` },
        ]}
      />
      <FeaturedSnippetListAnswerSchema
        question="What does the military and veteran roofing discount include in Charlotte NC?"
        directAnswer="Best Roofing Now's military and veteran roofing discount in Charlotte NC offers 5-10% off labor and materials for 6 eligibility groups: (1) active duty military across all 6 branches (Army, Navy, Air Force, Marines, Coast Guard, Space Force); (2) military retirees; (3) military dependents (spouses, children); (4) Gold Star families; (5) Reserve and National Guard members; (6) surviving spouses of fallen service members. Plus first responders (police, fire, EMS), K-12 teachers, and healthcare workers receive the same discount. Eligibility verified by military ID, VA card, DD Form 214, dependent ID, or current employment ID. Discount applies to residential projects $5,000+; stacks with insurance claim work; cannot combine with other promotional discounts. Best Roofing Now is veteran-owned (Fred Turner, founder) and provides VA loan / FHA-VA refinance roof certifications HAAG-credentialed at $200-$450 with 24-48 hour turnaround."
        items={[
          'Active duty military all 6 branches — Army, Navy, Air Force, Marines, Coast Guard, Space Force',
          'Military retirees with retired ID',
          'Military dependents — spouses, children of active or retired service members',
          'Gold Star families — immediate family of fallen service members',
          'Reserve and National Guard members',
          'First responders (police, fire, EMS), K-12 teachers, healthcare workers',
          '5-10% off labor and materials on projects $5,000+; stacks with insurance work',
          'VA loan / FHA-VA refinance roof certification $200-450 with 24-48 hour turnaround',
        ]}
        pageUrl={`${SITE_CONFIG.url}/military-veteran-roofing-discount-charlotte-nc`}
      />
      <FreeInspectionOfferSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.team.jamesAndFred} alt="Military & veteran roofing discount Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Medal className="w-4 h-4" />
              <span className="text-sm font-semibold">Veteran-Owned | 5-10% Military Discount</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Military & Veteran Roofing Discount <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              5-10% off. Veteran-owned. VA loan & FHA roof certifications.
            </p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now was founded by Fred Turner, a proud military veteran, and his son
              James. We honor your service with a 5-10% discount on residential roofing projects
              $5,000+ for active duty, retirees, military dependents, Gold Star families, Reserve
              and National Guard members, and surviving spouses across all 6 branches. Same
              discount also extends to first responders, K-12 teachers, and healthcare workers.
              Plus: HAAG-credentialed VA loan and FHA/VA refinance roof certifications across
              Charlotte and the Lake Norman region. BBB A+, GAF Master Elite (top 2%), CertainTeed
              SELECT ShingleMaster credentialed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>
                Schedule with Discount
              </Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>
                Call {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Who Qualifies for the Discount</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Medal, title: 'Active Duty', desc: 'All 6 branches: Army, Navy, Air Force, Marines, Coast Guard, Space Force' },
              { icon: Award, title: 'Retirees & Dependents', desc: 'Military retirees, spouses, children of active or retired service members' },
              { icon: Users, title: 'Gold Star Families', desc: 'Immediate family of fallen service members and surviving spouses' },
              { icon: Shield, title: 'First Responders', desc: 'Police, fire, EMS, K-12 teachers, healthcare workers — same 5-10% discount' },
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

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="military-veteran-roofing-discount-charlotte-nc" />

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Military Discount Questions</h2>
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

      <CityGeoSection city="Charlotte" state="NC" citySlug="charlotte-nc" service="military-veteran-roofing-discount" />

      <CTASection title="Thank You for Your Service" subtitle="Mention your eligibility when you schedule. We'll apply the 5-10% discount to your free estimate — no haggling, no hidden conditions." />
    </>
  );
}
