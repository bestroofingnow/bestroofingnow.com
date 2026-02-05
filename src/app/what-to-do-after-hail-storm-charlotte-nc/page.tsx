import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  CloudHail,
  Camera,
  Shield,
  Clock,
  FileText,
  XCircle,
  Car,
  Home,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ArticleSchema,
} from '@/components/seo/SchemaMarkup';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'What to Do After a Hail Storm Charlotte NC | Roof Damage Guide',
  description:
    'Hail storm hit Charlotte? Step-by-step guide for checking roof damage, filing insurance claims, and getting repairs. Free hail damage inspections available.',
  keywords: [
    'hail storm Charlotte NC',
    'hail damage roof Charlotte',
    'what to do after hail Charlotte',
    'hail damage inspection Charlotte',
    'hail damage insurance claim Charlotte NC',
    'roof hail damage Charlotte',
    'hail storm roof repair Charlotte',
    'check roof after hail Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/what-to-do-after-hail-storm-charlotte-nc`,
  },
  openGraph: {
    title: 'What to Do After a Hail Storm in Charlotte NC | Roof Damage Guide',
    description:
      'Step-by-step guide for Charlotte homeowners after hail. Check damage, document, file claims, get repairs.',
    url: `${SITE_CONFIG.url}/what-to-do-after-hail-storm-charlotte-nc`,
    type: 'article',
  },
};

const hailFAQs = [
  {
    question: 'How do I know if my roof has hail damage?',
    answer:
      'From the ground, look for: dents in gutters, downspouts, or AC units; damage to siding or window screens; dents on cars. Actual roof damage (bruised shingles, missing granules, cracked tiles) requires professional inspection. Don\'t go on your roof - call a roofer for a free inspection.',
  },
  {
    question: 'Should I file an insurance claim for hail damage?',
    answer:
      'If damage is confirmed by a professional inspection, yes. Hail is a covered peril on standard homeowner policies. Have a roofer document the damage first, then file the claim. Time limits apply - most policies require claims within 1-2 years of the storm.',
  },
  {
    question: 'How long do I have to file a hail damage claim in North Carolina?',
    answer:
      'North Carolina law allows up to 3 years to file property damage claims, but your insurance policy may have shorter deadlines (often 1-2 years). File as soon as damage is confirmed to avoid any issues. Don\'t wait.',
  },
  {
    question: 'Will my insurance rates go up if I file a hail claim?',
    answer:
      'Hail is considered an "act of God" and typically doesn\'t affect your rates as much as at-fault claims. However, if your area experiences frequent hail claims, insurers may raise rates area-wide. The cost of NOT repairing damage usually outweighs potential rate increases.',
  },
  {
    question: 'Can hail damage be repaired or do I need a new roof?',
    answer:
      'It depends on extent. Minor hail damage (a few impacted shingles) can be repaired. Widespread damage affecting 25%+ of the roof typically requires replacement. Your adjuster and roofer will assess. Insurance usually covers full replacement if damage is extensive.',
  },
];

const immediateSteps = [
  {
    step: 1,
    title: 'Stay Safe - Don\'t Go on Your Roof',
    icon: AlertTriangle,
    description: 'Wet roofs are slippery. Hail can weaken roof structure. Wait for professionals.',
  },
  {
    step: 2,
    title: 'Check for Obvious Damage from Ground',
    icon: Home,
    description: 'Look at gutters, siding, AC units, and cars. These indicate likely roof damage.',
  },
  {
    step: 3,
    title: 'Document Everything with Photos',
    icon: Camera,
    description: 'Photograph all visible damage including dates on newspaper for timestamp.',
  },
  {
    step: 4,
    title: 'Check Inside for Leaks',
    icon: Home,
    description: 'Inspect attic and ceilings for water intrusion. Address active leaks immediately.',
  },
  {
    step: 5,
    title: 'Call a Local Roofing Company',
    icon: Phone,
    description: 'Get a professional inspection before calling insurance. Document actual roof damage.',
  },
  {
    step: 6,
    title: 'File Insurance Claim',
    icon: FileText,
    description: 'With documentation in hand, file your claim. Have your roofer present for adjuster visit.',
  },
];

const groundLevelSigns = [
  {
    location: 'Gutters & Downspouts',
    signs: 'Dents, dings, or dislodged sections',
    indicates: 'Roof likely impacted by same hail',
  },
  {
    location: 'AC Unit',
    signs: 'Dented fins, damaged housing',
    indicates: 'Hail large enough to damage roof',
  },
  {
    location: 'Siding',
    signs: 'Chips, cracks, or dents in vinyl/aluminum',
    indicates: 'Significant hail event occurred',
  },
  {
    location: 'Windows & Screens',
    signs: 'Torn screens, chipped frames',
    indicates: 'High-velocity hail impact',
  },
  {
    location: 'Deck & Patio',
    signs: 'Dented railings, damaged furniture',
    indicates: 'Large hail hit property',
  },
  {
    location: 'Vehicles',
    signs: 'Dented hood, roof, trunk',
    indicates: 'Definite damaging hail occurred',
  },
];

const doNotList = [
  'Don\'t go on your roof to inspect',
  'Don\'t hire door-to-door storm chasers',
  'Don\'t sign anything before getting multiple opinions',
  'Don\'t make permanent repairs before adjuster visits',
  'Don\'t wait months to get inspection',
  'Don\'t ignore minor damage - it gets worse',
];

export default function WhatToDoAfterHailStormPage() {
  const pageUrl = `${SITE_CONFIG.url}/what-to-do-after-hail-storm-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="What to Do After a Hail Storm Charlotte NC"
        description="Step-by-step guide for Charlotte homeowners after hail storm damage."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'What to Do After Hail Storm', url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'What to Do After Hail Storm', url: pageUrl },
        ]}
      />
      <ArticleSchema
        post={{
          title: 'What to Do After a Hail Storm in Charlotte NC',
          description: 'Complete guide to handling hail damage for Charlotte homeowners.',
          slug: 'what-to-do-after-hail-storm-charlotte-nc',
          datePublished: '2026-01-29',
          dateModified: '2026-01-29',
        }}
      />
      <FAQSchema faqs={hailFAQs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={IMAGES.hero.hero25}
            alt="Hail storm damage Charlotte NC"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[{ label: 'What to Do After Hail Storm' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <CloudHail className="w-4 h-4" />
              <span>Storm Damage Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              What to Do After a Hail Storm in Charlotte NC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              Step-by-Step Guide to Protect Your Home &amp; File Your Claim
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Charlotte sees damaging hail storms every year. Here&apos;s exactly what to do
              in the hours and days after a hail event to protect your home and get your
              roof repaired.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                Free Hail Inspection
              </a>
              <EstimateButton
                className="btn bg-white text-slate-800 hover:bg-gray-100 text-lg px-8 py-4"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              6 Steps After a Hail Storm
            </h2>
            <div className="space-y-6">
              {immediateSteps.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full">
                        Step {item.step}
                      </span>
                      <h3 className="text-xl font-bold text-dark">{item.title}</h3>
                    </div>
                    <p className="text-gray">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ground Level Signs */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              How to Spot Hail Damage from the Ground
            </h2>
            <p className="text-gray text-center mb-8">
              These visible signs indicate your roof likely sustained damage too.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groundLevelSigns.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-5">
                  <h3 className="font-bold text-dark mb-2">{item.location}</h3>
                  <p className="text-sm text-gray mb-2">
                    <span className="font-medium">Look for:</span> {item.signs}
                  </p>
                  <p className="text-sm text-primary">
                    <span className="font-medium">This indicates:</span> {item.indicates}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What NOT to Do */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-red-600" />
                <h2 className="text-2xl font-bold text-dark">What NOT to Do After Hail</h2>
              </div>
              <ul className="space-y-3">
                {doNotList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Filing Your Hail Damage Insurance Claim</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4">Before You Call Insurance:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Get professional inspection first</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Document all visible damage with photos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Get written damage report from roofer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Know your deductible amount</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">During the Claim Process:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Have your roofer meet the adjuster</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Don&apos;t accept lowball estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Request re-inspection if needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Keep all documentation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white/10 rounded-xl p-6 text-center">
              <p className="text-white/90 mb-4">
                <strong>Best Roofing Now helps Charlotte homeowners with insurance claims.</strong>
                <br />We document damage, meet with adjusters, and fight for fair settlements.
              </p>
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-white text-primary hover:bg-gray-100"
              >
                <Phone className="w-5 h-5" />
                Get Help with Your Claim
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {hailFAQs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white border rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition">
                    <h3 className="font-bold text-dark pr-4">{faq.question}</h3>
                    <ArrowRight className="w-5 h-5 text-primary transform group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-gray">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Related Storm Damage Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/hail-damage-roof-repair-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Hail Damage Roof Repair Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  Professional hail damage repair services for Charlotte homes.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/guides/insurance-claim-guide"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Insurance Claim Guide
                </h3>
                <p className="text-gray text-sm">
                  Complete guide to filing roof insurance claims in Charlotte.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="what-to-do-after-hail-storm-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/what-to-do-after-hail-storm-charlotte-nc`}
      />

      {/* CTA Section */}
      <CTASection
        title="Need a Hail Damage Inspection?"
        subtitle="Best Roofing Now offers free hail damage inspections for Charlotte homeowners. We'll document any damage and help you navigate the insurance process."
      />
    </>
  );
}
