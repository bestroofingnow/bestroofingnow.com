import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  TreePine,
  Camera,
  Shield,
  Clock,
  FileText,
  XCircle,
  Home,
  Zap,
  Droplets,
  Users,
  Wrench,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ArticleSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'What to Do When a Tree Falls on Your Roof Charlotte NC | Emergency Guide',
  description:
    'Tree fell on your Charlotte home? Step-by-step emergency guide: stay safe, document damage, file insurance claims, and get repairs. 24/7 emergency service available.',
  keywords: [
    'tree fell on roof Charlotte NC',
    'tree damage roof Charlotte',
    'emergency tree damage Charlotte',
    'tree on house Charlotte NC',
    'storm tree damage roof Charlotte',
    'tree removal roof Charlotte',
    'tree damage insurance claim Charlotte',
    'emergency roof repair Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/what-to-do-tree-falls-on-roof-charlotte-nc`,
  },
  openGraph: {
    title: 'What to Do When a Tree Falls on Your Roof | Charlotte NC Emergency Guide',
    description:
      'Emergency guide for Charlotte homeowners with tree damage. Safety first, then documentation, insurance, and repairs.',
    url: `${SITE_CONFIG.url}/what-to-do-tree-falls-on-roof-charlotte-nc`,
    type: 'article',
  },
};

const treeFAQs = [
  {
    question: 'What should I do immediately when a tree falls on my roof?',
    answer:
      'First, ensure everyone is safe and evacuate if there\'s structural concern. Call 911 if there are injuries, gas leaks, or downed power lines. Do NOT approach downed power lines. Once safe, call your insurance company to report the damage, then contact a roofing contractor for emergency tarping.',
  },
  {
    question: 'Does homeowners insurance cover tree damage to my roof?',
    answer:
      'Yes, homeowners insurance typically covers tree damage from storms, wind, and other sudden events. Your policy covers roof repairs, structural damage, and often interior damage from water intrusion. Tree removal from the structure is usually covered; removal from your yard may have limited coverage.',
  },
  {
    question: 'How long can I leave a tree on my roof?',
    answer:
      'Get the tree removed as soon as safely possible - ideally within 24-48 hours. A tree on your roof causes ongoing damage: water infiltration, structural stress, and potential collapse. Your insurance may deny additional damage claims if you unreasonably delay removal and repairs.',
  },
  {
    question: 'Who removes the tree - roofers or tree service?',
    answer:
      'Usually a tree service removes the tree, then roofers handle repairs. Some roofing companies coordinate both. The key is careful removal to prevent additional damage. Never let anyone cut a tree without proper equipment and insurance - improper removal can cause more damage than the tree itself.',
  },
  {
    question: 'Can I stay in my house if a tree fell on the roof?',
    answer:
      'It depends on the damage severity. Small branches may be safe. Large trees causing structural damage, ceiling sagging, or utility line issues mean you should evacuate. When in doubt, stay out. Your insurance typically covers temporary housing (Additional Living Expense coverage) if your home is uninhabitable.',
  },
];

const immediateSteps = [
  {
    step: 1,
    title: 'Ensure Everyone is Safe',
    icon: Users,
    description:
      'Account for all family members and pets. If anyone is trapped or injured, call 911 immediately. Do not re-enter the home if you hear cracking or see structural shifting.',
    urgent: true,
  },
  {
    step: 2,
    title: 'Check for Downed Power Lines',
    icon: Zap,
    description:
      'Stay at least 35 feet away from any downed lines. Call Duke Energy (800-769-3766) to report. Assume all downed lines are live and deadly. Do not touch anything in contact with power lines.',
    urgent: true,
  },
  {
    step: 3,
    title: 'Check for Gas Leaks',
    icon: AlertTriangle,
    description:
      'If you smell gas or hear hissing, leave immediately. Don\'t flip light switches or use phones inside. Call Piedmont Natural Gas (800-752-7504) from outside. Don\'t return until cleared.',
    urgent: true,
  },
  {
    step: 4,
    title: 'Turn Off Main Water',
    icon: Droplets,
    description:
      'If there\'s ceiling damage, shut off water at the main valve to prevent additional damage from burst pipes. This also prevents flooding if plumbing was damaged.',
    urgent: false,
  },
  {
    step: 5,
    title: 'Document Everything',
    icon: Camera,
    description:
      'Take photos and videos from multiple angles - outside and inside. Photograph all damage before any cleanup. This documentation is critical for insurance claims.',
    urgent: false,
  },
  {
    step: 6,
    title: 'Call Your Insurance Company',
    icon: FileText,
    description:
      'Report the claim immediately. Most insurers have 24/7 claim lines. Ask about coverage for emergency tarping, tree removal, and temporary housing if needed.',
    urgent: false,
  },
  {
    step: 7,
    title: 'Get Emergency Tarping',
    icon: Home,
    description:
      'Call a roofing company for emergency tarp service to prevent water damage. Don\'t wait for the tree to be removed - tarps can often be installed around it.',
    urgent: false,
  },
];

const dosDonts = {
  dos: [
    'Stay away from the damaged area',
    'Document everything with photos/video',
    'Call insurance immediately',
    'Get emergency tarping ASAP',
    'Save all receipts for expenses',
    'Get written estimates before work',
    'Ask contractors for proof of insurance',
  ],
  donts: [
    'Touch downed power lines or anything near them',
    'Go on the damaged roof',
    'Let anyone remove the tree without proper insurance',
    'Sign a contract under pressure',
    'Pay large deposits upfront (10-15% max)',
    'Delay reporting to insurance',
    'Clean up before documenting damage',
  ],
};

const insuranceTips = [
  {
    tip: 'Report Immediately',
    description:
      'Call your insurance company\'s 24/7 claim line right away. Delayed reporting can complicate claims.',
  },
  {
    tip: 'Document Before Cleanup',
    description:
      'Take extensive photos and videos before anything is moved or cleaned. Adjusters need to see original damage.',
  },
  {
    tip: 'Get Emergency Work Pre-Approved',
    description:
      'Ask your insurer about coverage for emergency tarping before authorizing work. Get approval in writing if possible.',
  },
  {
    tip: 'Save All Receipts',
    description:
      'Keep receipts for temporary housing, meals, emergency repairs, and any other storm-related expenses.',
  },
  {
    tip: 'Get Your Own Estimate',
    description:
      'Don\'t rely solely on the insurance adjuster\'s estimate. Get a detailed estimate from a licensed roofer.',
  },
  {
    tip: 'Know Your Coverage',
    description:
      'Review your policy for tree removal limits, ALE (Additional Living Expense) coverage, and deductible amount.',
  },
];

const stormSeasons = [
  {
    season: 'Hurricane Season (June-November)',
    risk: 'High wind events can topple large trees, especially saturated soil conditions.',
    preparation: 'Have dead trees removed, keep insurance current, know your evacuation routes.',
  },
  {
    season: 'Winter Storms (December-February)',
    risk: 'Ice accumulation adds tremendous weight to branches. Frozen ground prevents root flex.',
    preparation: 'Trim branches over roof, remove dead limbs, have tarps on hand.',
  },
  {
    season: 'Spring Storms (March-May)',
    risk: 'Severe thunderstorms with straight-line winds and microbursts.',
    preparation: 'Post-winter tree inspection, clear dead wood, check insurance deductible.',
  },
  {
    season: 'Summer Storms (June-August)',
    risk: 'Isolated severe thunderstorms, saturated soil from heavy rain.',
    preparation: 'Monitor weather, have emergency contacts ready, document tree health.',
  },
];

const emergencyContacts = [
  { name: 'Emergency Services', number: '911', when: 'Injuries, fire, immediate danger' },
  {
    name: 'Duke Energy',
    number: '800-769-3766',
    when: 'Downed power lines, outages',
  },
  {
    name: 'Piedmont Natural Gas',
    number: '800-752-7504',
    when: 'Gas leaks or smell',
  },
  {
    name: SITE_CONFIG.name,
    number: SITE_CONFIG.phone,
    when: 'Emergency tarping & roof repair',
  },
];

const breadcrumbsSchema = [
  { name: 'Home', url: `${SITE_CONFIG.url}/` },
  { name: 'Storm Damage', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-charlotte-nc` },
  { name: 'Tree Damage Guide', url: `${SITE_CONFIG.url}/what-to-do-tree-falls-on-roof-charlotte-nc` },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Storm Damage', href: '/storm-damage-roof-repair-charlotte-nc' },
  { label: 'Tree Damage Guide' },
];

export default function WhatToDoTreeFallsOnRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbsSchema} />
      <FAQSchema
        faqs={treeFAQs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))}
      />
      <WebPageSchema
        name="What to Do When a Tree Falls on Your Roof Charlotte NC"
        description="Emergency guide for Charlotte homeowners dealing with tree damage. Safety steps, insurance claims, and getting repairs."
        url={`${SITE_CONFIG.url}/what-to-do-tree-falls-on-roof-charlotte-nc`}
      />
      <ArticleSchema
        post={{
          title: 'What to Do When a Tree Falls on Your Roof: Charlotte NC Emergency Guide',
          description: 'Step-by-step emergency guide when a tree damages your Charlotte home. Safety, documentation, insurance claims, and repairs.',
          slug: 'what-to-do-tree-falls-on-roof-charlotte-nc',
          datePublished: '2025-01-31',
          dateModified: '2025-01-31',
        }}
      />

      <section className="pt-8 pb-12 bg-gradient-to-b from-red-900 via-red-800 to-slate-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/30 text-red-200 rounded-full text-sm font-medium mb-6 animate-pulse">
              <AlertTriangle className="h-4 w-4" />
              <span>Emergency Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tree Fell on Your Roof?
              <span className="block text-red-300 mt-2">Here&apos;s What to Do Now</span>
            </h1>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Stay calm. Follow these steps to stay safe, protect your home, and navigate the
              insurance process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-red-600 hover:bg-red-500 text-white rounded-lg font-bold text-lg transition-colors"
              >
                <Phone className="h-6 w-6" />
                Call Now: {SITE_CONFIG.phone}
              </a>
              <EstimateButton
                size="lg"
                className="bg-white text-red-900 hover:bg-red-50 font-semibold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning Banner */}
      <section className="py-4 bg-yellow-500 text-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <Zap className="h-8 w-8 flex-shrink-0" />
            <p className="font-bold text-lg">
              If you see downed power lines, stay 35+ feet away and call Duke Energy at 800-769-3766.
              Assume all downed lines are LIVE.
            </p>
          </div>
        </div>
      </section>

      {/* Immediate Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Immediate Steps to Take
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Follow these steps in order. Safety first, then documentation and recovery.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {immediateSteps.map((step, index) => (
              <div
                key={index}
                className={`flex gap-4 items-start rounded-xl p-5 ${
                  step.urgent
                    ? 'bg-red-50 border-2 border-red-200'
                    : 'bg-slate-50 border border-slate-200'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    step.urgent ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'
                  }`}
                >
                  <step.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-slate-500">Step {step.step}</span>
                    {step.urgent && (
                      <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full">
                        Critical
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-10 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Emergency Contacts
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-4 text-center">
                <h3 className="font-bold text-white mb-1">{contact.name}</h3>
                <a
                  href={`tel:${contact.number.replace(/[^0-9]/g, '')}`}
                  className="text-xl font-bold text-yellow-400 hover:text-yellow-300 block mb-2"
                >
                  {contact.number}
                </a>
                <p className="text-xs text-slate-400">{contact.when}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dos and Don'ts */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Do&apos;s and Don&apos;ts After Tree Damage
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Do's */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">DO</h3>
              </div>
              <ul className="space-y-3">
                {dosDonts.dos.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don'ts */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="h-8 w-8 text-red-600" />
                <h3 className="text-xl font-bold text-red-900">DON&apos;T</h3>
              </div>
              <ul className="space-y-3">
                {dosDonts.donts.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-red-800">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Insurance Claim Tips
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Maximize your claim and avoid common mistakes that delay or reduce payouts.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {insuranceTips.map((tip, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-slate-900">{tip.tip}</h3>
                </div>
                <p className="text-slate-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-yellow-100 border border-yellow-300 rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-yellow-700 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-yellow-900 mb-2">Beware of Storm Chasers</h3>
                <p className="text-yellow-800">
                  After storms, unscrupulous contractors go door-to-door offering &quot;free&quot; inspections
                  and pushing immediate contracts. Legitimate companies don&apos;t pressure you.
                  Always verify licensing, read reviews, and get multiple estimates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte Storm Seasons */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Charlotte Storm Seasons & Tree Risk
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Understanding when tree damage is most likely helps you prepare.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {stormSeasons.map((season, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{season.season}</h3>
                <p className="text-red-700 text-sm mb-3">
                  <strong>Risk:</strong> {season.risk}
                </p>
                <p className="text-green-700 text-sm">
                  <strong>Preparation:</strong> {season.preparation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Typical Recovery Timeline
          </h2>
          <p className="text-center text-blue-200 mb-12 max-w-2xl mx-auto">
            What to expect after a tree falls on your Charlotte home.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-700"></div>

              {/* Timeline items */}
              <div className="space-y-8">
                <div className="flex gap-6 relative">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-10 flex-shrink-0">
                    <Clock className="h-8 w-8" />
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="font-bold text-lg">Day 1: Emergency Response</h3>
                    <p className="text-blue-200">
                      Safety secured, utilities assessed, emergency tarping installed, insurance notified.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 relative">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-10 flex-shrink-0">
                    <TreePine className="h-8 w-8" />
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="font-bold text-lg">Days 2-5: Tree Removal</h3>
                    <p className="text-blue-200">
                      Professional tree service removes tree carefully to prevent additional damage. Debris cleared.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 relative">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-10 flex-shrink-0">
                    <FileText className="h-8 w-8" />
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="font-bold text-lg">Days 3-10: Insurance Assessment</h3>
                    <p className="text-blue-200">
                      Adjuster inspects damage, reviews documentation, and determines coverage. Get contractor estimates.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 relative">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-10 flex-shrink-0">
                    <Wrench className="h-8 w-8" />
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="font-bold text-lg">Weeks 2-6: Permanent Repairs</h3>
                    <p className="text-blue-200">
                      Once claim approved, permanent roof repairs begin. Interior repairs may follow if water damage occurred.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 relative">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center z-10 flex-shrink-0">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="font-bold text-lg">Completion</h3>
                    <p className="text-blue-200">
                      Final inspection, warranty documentation provided, and final insurance payment processed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {treeFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              href="/storm-damage-roof-repair-charlotte-nc"
              className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
            >
              <AlertTriangle className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Storm Damage Repair
              </h3>
              <p className="text-slate-600 text-sm">
                Complete storm damage repairs for Charlotte homes.
              </p>
            </Link>
            <Link
              href="/tree-damage-roof-repair-charlotte-nc"
              className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
            >
              <TreePine className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Tree Damage Repair
              </h3>
              <p className="text-slate-600 text-sm">
                Professional repair for tree-damaged roofs in Charlotte.
              </p>
            </Link>
            <Link
              href="/emergency-tarp-service-charlotte-nc"
              className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
            >
              <Home className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Emergency Tarping
              </h3>
              <p className="text-slate-600 text-sm">
                24/7 emergency tarp service to protect your home from water damage.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Emergency Help Now?"
        subtitle="24/7 emergency response for tree damage in Charlotte. Call now or request a callback."
        variant="primary"
      />
    </>
  );
}
