import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight, Phone, FileText, DollarSign, Wrench, Shield, Users, CheckCircle, HelpCircle, Calendar, Target } from 'lucide-react';
import { SITE_CONFIG, ROOFING_GUIDES } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import {
  BreadcrumbSchema,
  WebPageSchema,
  CollectionPageSchema,
  FAQSchema,
  SpeakableContentBlocks,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Roofing Guides & Resources | Charlotte NC & Lake Norman',
  description:
    'Long-form roofing guides for Charlotte homeowners — 2026 cost ranges, replacement signs, lifespan by material, maintenance checklists, insurance claim roadmap, contractor selection.',
  keywords: [
    'roofing guide charlotte',
    'roof replacement guide nc',
    'roof cost guide 2026',
    'signs you need new roof',
    'roof lifespan by material',
    'roof maintenance checklist',
    'insurance claim guide roof',
    'how to choose roofing contractor',
    'roofing resources charlotte',
    'lake norman roofing guide',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/guides`,
  },
  openGraph: {
    title: 'Roofing Guides & Resources | Best Roofing Now',
    description: 'Long-form educational guides for Charlotte and Lake Norman homeowners — cost, lifespan, maintenance, insurance claims, and contractor selection.',
    url: `${SITE_CONFIG.url}/guides`,
    type: 'website',
  },
};

const guideIcons: Record<string, typeof BookOpen> = {
  'roof-replacement-cost': DollarSign,
  'signs-you-need-new-roof': FileText,
  'how-long-does-roof-last': BookOpen,
  'roof-maintenance-tips': Wrench,
  'insurance-claim-guide': Shield,
  'choosing-roofing-contractor': Users,
};

const whatYoullFind = [
  'Specific 2026 dollar figures for the Charlotte and Lake Norman market',
  'Step-by-step checklists you can use before calling any contractor',
  'Insurance carrier expectations and documentation requirements for NC',
  'Material-specific lifespan data calibrated to Piedmont humid subtropical climate',
  'Red flags to avoid when selecting a roofer (storm chasers, out-of-state fly-bys)',
  'Cross-links to matching service pages, material detail pages, and blog posts',
];

interface IntentBucket {
  icon: typeof Target;
  intent: string;
  description: string;
  primaryGuide: { href: string; label: string };
  supportingLinks: { href: string; label: string }[];
}

const intentBuckets: IntentBucket[] = [
  {
    icon: DollarSign,
    intent: 'Cost Research & Budgeting',
    description: 'You are starting to plan and want to understand what a new roof actually costs in 2026.',
    primaryGuide: { href: '/guides/roof-replacement-cost', label: 'Roof Replacement Cost Guide 2026' },
    supportingLinks: [
      { href: '/materials', label: 'Material cost comparison' },
      { href: '/blog/roof-shingle-cost-per-square-foot', label: 'Shingle cost per square foot' },
    ],
  },
  {
    intent: 'Replacement Decision',
    icon: FileText,
    description: 'Your roof is aging or damaged and you need to decide whether to repair or replace now.',
    primaryGuide: { href: '/guides/signs-you-need-new-roof', label: '10 Signs You Need a New Roof' },
    supportingLinks: [
      { href: '/guides/how-long-does-roof-last', label: 'How Long Does a Roof Last?' },
      { href: '/blog/roof-replacement-vs-roof-repair-which-is-better-for-your-charlotte-home', label: 'Repair vs Replace' },
    ],
  },
  {
    intent: 'Maintenance & Prevention',
    icon: Wrench,
    description: 'You want to maximize the life of your current roof and avoid premature failure.',
    primaryGuide: { href: '/guides/roof-maintenance-tips', label: 'Essential Roof Maintenance Tips' },
    supportingLinks: [
      { href: '/blog/diy-roof-inspection-checklist-for-homeowners-what-to-look-for-before-calling-the-pros', label: 'DIY inspection checklist' },
      { href: '/seasonal', label: 'Seasonal maintenance calendar' },
    ],
  },
  {
    intent: 'Insurance Claim & Storm Damage',
    icon: Shield,
    description: 'You are dealing with hail, wind, or tropical-remnant damage and need to navigate the claims process.',
    primaryGuide: { href: '/guides/insurance-claim-guide', label: 'Roof Insurance Claim Guide' },
    supportingLinks: [
      { href: '/blog/the-insurance-claim-roadmap-a-step-by-step-guide-to-filing-a-claim-without-the-headache', label: 'Claim roadmap' },
      { href: '/blog/the-48-hour-rule-why-the-first-two-days-after-a-storm-are-the-most-critical-for-your-insurance-claim', label: 'The 48-hour rule' },
    ],
  },
  {
    intent: 'Contractor Selection',
    icon: Users,
    description: 'You are collecting quotes and need to separate reputable contractors from storm chasers.',
    primaryGuide: { href: '/guides/choosing-roofing-contractor', label: 'How to Choose a Roofing Contractor' },
    supportingLinks: [
      { href: '/brands', label: 'Brand certifications we hold' },
      { href: '/blog/the-ultimate-checklist-for-choosing-a-charlotte-roof-replacement-contractor', label: 'Contractor selection checklist' },
    ],
  },
  {
    intent: 'Storm Prep & Seasonal',
    icon: Calendar,
    description: 'You want to prepare your roof for the next Charlotte hail, hurricane remnant, or ice event.',
    primaryGuide: { href: '/seasonal', label: 'Seasonal Roofing Services Hub' },
    supportingLinks: [
      { href: '/blog/winter-storm-roof-preparation-guide-for-charlotte-lake-norman-homeowners-2026', label: 'Winter storm prep 2026' },
      { href: '/blog/wind-vs-hail-a-visual-guide-to-help-you-identify-what-actually-hit-your-roof', label: 'Wind vs hail visual guide' },
    ],
  },
];

const faqs = [
  { question: 'How are the guides different from the blog posts?', answer: 'Guides are long-form, evergreen, canonical resources (3,000–8,000 words each) covering a major decision area end-to-end — cost, signs, lifespan, maintenance, insurance, contractor selection. Blog posts are shorter (800–2,500 words), more topical, and include rapid-response content after weather events or industry changes. Think of guides as the "textbook" for Charlotte roofing decisions and the blog as the "news feed" — they cross-link frequently.' },
  { question: 'Who writes the roofing guides?', answer: 'Guides are written and maintained by the Best Roofing Now project management team — our field project managers, estimators, and insurance claims specialist — based on real Charlotte and Lake Norman jobs we have completed. They are reviewed annually at minimum by our operations lead to refresh 2026 pricing, carrier information, and regulatory details. We cite manufacturer specs, NC building code references, and NOAA weather data where relevant.' },
  { question: 'How often are the guides updated?', answer: 'Each guide is reviewed at least annually — typically every January to refresh cost figures to current-year dollars and update insurance carrier or manufacturer information. Major guides (cost, insurance, contractor selection) receive mid-year refreshes when market conditions change (manufacturer price increases, NC regulatory updates, new storm events). Last-updated dates appear on each individual guide page.' },
  { question: 'Are these guides useful for homeowners outside Charlotte NC?', answer: 'Partially. Technical content — material lifespan, how to identify storm damage, manufacturer warranty structure, decision frameworks — applies across the US. Pricing, insurance carrier references, and regulatory details are specific to NC and the Charlotte/Lake Norman market. Readers in other regions should adjust pricing expectations for local labor markets and check local building code for specific requirements.' },
  { question: 'Can I use a guide as preparation before getting a roofing quote?', answer: 'Yes — that is the intended use. Our cost guide, lifespan guide, and contractor selection guide are designed specifically to help homeowners compare competing quotes intelligently. Many readers use the cost guide to sanity-check a quote, the contractor selection guide to evaluate who they are working with, and the insurance claim guide to understand what their adjuster should document. Reading the guides does not obligate you to use our services.' },
  { question: 'Do the guides cover commercial roofing topics?', answer: 'Partially. The core guides are residential-focused. Commercial roofing content (TPO, EPDM, PVC, modified bitumen, NDL warranties, property-management scheduling) lives on our commercial service and city pages, and in dedicated blog posts on flat roof systems. If you manage a commercial property and need a comparable long-form resource, contact us and we can share recent project case studies and portfolio-level maintenance planning.' },
];

export default function GuidesPage() {
  const pageUrl = `${SITE_CONFIG.url}/guides`;

  const items = ROOFING_GUIDES.map((g) => ({
    name: g.title,
    url: `${SITE_CONFIG.url}/guides/${g.slug}`,
    description: g.description,
  }));

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Guides', url: pageUrl },
        ]}
      />
      <WebPageSchema
        name="Roofing Guides & Resources | Charlotte NC & Lake Norman"
        description="Long-form roofing guides for Charlotte homeowners — 2026 cost ranges, replacement signs, lifespan by material, maintenance checklists, insurance claim roadmap, contractor selection."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Guides', url: pageUrl },
        ]}
      />
      <CollectionPageSchema
        name="Roofing Guides & Resources"
        description="Comprehensive long-form roofing guides maintained by Best Roofing Now for Charlotte NC and Lake Norman homeowners."
        url={pageUrl}
        items={items}
      />
      <FAQSchema faqs={faqs} />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Roofing Guides and Resources" />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Roofing Guides' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Roofing Guides &amp; Resources
            </h1>
            <p className="speakable-intro text-xl text-white/90 mb-8">
              Long-form educational guides for Charlotte NC and Lake Norman homeowners — 2026 replacement cost, 10 signs you need a new roof, expected roof lifespan by material, maintenance checklists, insurance claim step-by-step, and how to choose a roofing contractor. Written and updated annually by our project managers, estimators, and insurance claims specialist.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Talk to an Expert
              </a>
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-light"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What You&apos;ll Find in These Guides</h2>
              <p className="text-gray text-lg">Six pillars that shape every guide we publish and maintain.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {whatYoullFind.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-light rounded-lg p-4 border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intent-based Decision Guide */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Browse by Intent</h2>
            <p className="text-gray text-lg">Six decision intents — pick what you&apos;re trying to accomplish and we&apos;ll point you to the right resource.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intentBuckets.map((bucket) => (
              <div key={bucket.intent} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <bucket.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-dark text-lg">{bucket.intent}</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">{bucket.description}</p>
                <Link href={bucket.primaryGuide.href} className="block text-primary font-semibold text-sm mb-3 hover:underline">
                  → {bucket.primaryGuide.label}
                </Link>
                <ul className="space-y-1 text-xs">
                  {bucket.supportingLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gray-600 hover:text-primary">
                        Also: {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">All Roofing Guides</h2>
            <p className="text-gray text-lg">The full guide library — long-form, evergreen, updated annually.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOFING_GUIDES.map((guide) => {
              const Icon = guideIcons[guide.slug] || BookOpen;
              return (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="card bg-white hover:shadow-xl transition group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition">
                    {guide.title}
                  </h3>
                  <p className="text-gray mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:text-accent transition">
                    Read Guide
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Quick Roofing Tips
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-accent mb-2">1</div>
              <h3 className="font-bold text-dark mb-2">Inspect Twice Yearly</h3>
              <p className="text-gray text-sm">
                Check your roof every spring and fall for damage, missing shingles, or debris.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-accent mb-2">2</div>
              <h3 className="font-bold text-dark mb-2">Clean Your Gutters</h3>
              <p className="text-gray text-sm">
                Clogged gutters cause water damage. Clean them at least twice a year.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-accent mb-2">3</div>
              <h3 className="font-bold text-dark mb-2">Trim Nearby Trees</h3>
              <p className="text-gray text-sm">
                Overhanging branches can damage shingles and deposit debris on your roof.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-accent mb-2">4</div>
              <h3 className="font-bold text-dark mb-2">Act on Storm Damage</h3>
              <p className="text-gray text-sm">
                After severe weather, get a professional inspection to catch damage early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            More Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/materials" className="card bg-light hover:shadow-xl transition group text-center">
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent">
                Roofing Materials
              </h3>
              <p className="text-gray text-sm">
                Compare asphalt, metal, tile, slate, and more to find the right material for your home.
              </p>
            </Link>
            <Link href="/services" className="card bg-light hover:shadow-xl transition group text-center">
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent">
                Our Services
              </h3>
              <p className="text-gray text-sm">
                From repairs to full replacements, explore our comprehensive roofing services.
              </p>
            </Link>
            <Link href="/faq" className="card bg-light hover:shadow-xl transition group text-center">
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent">
                FAQ
              </h3>
              <p className="text-gray text-sm">
                Get answers to the most common questions about roofing in Charlotte.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">About the Guides</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Guides FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have Questions? We&apos;re Here to Help
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our roofing experts are ready to answer your questions and provide
            personalized guidance for your roofing project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-accent hover:bg-light text-lg px-8"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
