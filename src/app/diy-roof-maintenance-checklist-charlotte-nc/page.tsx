import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Eye,
  Calendar,
  Wrench,
  Shield,
  Home,
  Droplets,
  Wind,
  Leaf,
  Sun,
  Snowflake,
  Camera,
  XCircle,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import YouTubeShort from '@/components/sections/YouTubeShort';
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
  title: 'DIY Roof Maintenance Checklist Charlotte NC | Homeowner Guide',
  description:
    'Simple DIY roof maintenance checklist for Charlotte NC homeowners. Safe ground-level inspections, gutter cleaning tips, and when to call a professional roofer.',
  keywords: [
    'DIY roof maintenance Charlotte NC',
    'roof maintenance checklist Charlotte',
    'homeowner roof inspection Charlotte',
    'gutter cleaning Charlotte NC',
    'roof care tips Charlotte',
    'seasonal roof maintenance Charlotte',
    'roof inspection checklist NC',
    'how to maintain roof Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/diy-roof-maintenance-checklist-charlotte-nc`,
  },
  openGraph: {
    title: 'DIY Roof Maintenance Checklist for Charlotte NC Homeowners',
    description:
      'Keep your Charlotte roof in top condition with this easy DIY maintenance checklist. Safe tasks you can do yourself, plus when to call a pro.',
    url: `${SITE_CONFIG.url}/diy-roof-maintenance-checklist-charlotte-nc`,
    type: 'article',
  },
};

const maintenanceFAQs = [
  {
    question: 'How often should I inspect my roof in Charlotte NC?',
    answer:
      'Charlotte homeowners should visually inspect their roof from ground level at least twice a year - in spring after winter weather and in fall before winter. Additional inspections are recommended after any severe storm, including the frequent summer thunderstorms Charlotte experiences.',
  },
  {
    question: 'Can I walk on my roof to inspect it?',
    answer:
      'We strongly advise against walking on your roof. It\'s dangerous and can actually damage shingles, especially in Charlotte\'s hot summers when shingles become soft. Use binoculars from the ground or hire a professional for close-up inspections.',
  },
  {
    question: 'How often should I clean my gutters in Charlotte?',
    answer:
      'Clean gutters at least twice a year - late spring after pollen season and late fall after leaves drop. If you have many trees near your home (common in Charlotte neighborhoods like Myers Park or Dilworth), clean them quarterly.',
  },
  {
    question: 'What roof maintenance can I safely do myself?',
    answer:
      'Safe DIY tasks include: ground-level visual inspections with binoculars, gutter cleaning from a stable ladder, trimming tree branches away from the roof, checking attic for leaks or moisture, and documenting damage with photos. Leave anything requiring roof access to professionals.',
  },
  {
    question: 'When should I call a professional roofer instead of DIY?',
    answer:
      'Call a professional if you notice: missing or damaged shingles, sagging areas, active leaks, damaged flashing, moss/algae growth, granules in gutters (sign of shingle wear), or any structural concerns. Also call after storm damage for proper documentation.',
  },
];

const safetyRules = [
  {
    icon: XCircle,
    title: 'Never Walk on Your Roof',
    description: 'Falls from roofs cause thousands of injuries yearly. Even professionals use safety equipment.',
  },
  {
    icon: AlertTriangle,
    title: 'Use Proper Ladder Safety',
    description: 'Set ladders on level ground, maintain 3 points of contact, never overreach.',
  },
  {
    icon: Sun,
    title: 'Avoid Hot Days',
    description: 'Charlotte summer heat makes roofs dangerous. Inspect in morning or on cloudy days.',
  },
  {
    icon: Camera,
    title: 'Document Everything',
    description: 'Take photos of any concerns. This helps professionals and insurance claims.',
  },
];

const seasonalChecklist = [
  {
    season: 'Spring',
    icon: Droplets,
    color: 'green',
    tasks: [
      { task: 'Check for winter damage from ice, snow, or fallen branches', safe: true },
      { task: 'Clean gutters of spring pollen and debris', safe: true },
      { task: 'Inspect flashing around chimneys and vents from ground', safe: true },
      { task: 'Check attic for signs of water intrusion or mold', safe: true },
      { task: 'Look for missing or damaged shingles with binoculars', safe: true },
      { task: 'Schedule professional inspection if any concerns found', safe: false },
    ],
  },
  {
    season: 'Summer',
    icon: Sun,
    color: 'yellow',
    tasks: [
      { task: 'Check attic ventilation - should be hot but not wet', safe: true },
      { task: 'Trim tree branches hanging over roof (hire arborist for large trees)', safe: false },
      { task: 'Look for blistering, curling, or buckling shingles', safe: true },
      { task: 'Inspect gutters and downspouts for proper drainage', safe: true },
      { task: 'Check for wasp nests or pest damage in eaves', safe: true },
      { task: 'Document any storm damage after summer thunderstorms', safe: true },
    ],
  },
  {
    season: 'Fall',
    icon: Leaf,
    color: 'orange',
    tasks: [
      { task: 'Clean gutters thoroughly after leaves fall', safe: true },
      { task: 'Check that downspouts direct water away from foundation', safe: true },
      { task: 'Inspect for lifted or loose shingles before winter', safe: true },
      { task: 'Check attic insulation depth and condition', safe: true },
      { task: 'Ensure soffit and ridge vents are clear of debris', safe: true },
      { task: 'Schedule professional pre-winter inspection', safe: false },
    ],
  },
  {
    season: 'Winter',
    icon: Snowflake,
    color: 'blue',
    tasks: [
      { task: 'After storms, check for visible damage from ground', safe: true },
      { task: 'Watch for ice dam formation at roof edges', safe: true },
      { task: 'Check attic for condensation or frost on sheathing', safe: true },
      { task: 'Look for icicles forming (indicates heat loss or ice dams)', safe: true },
      { task: 'Keep gutters clear of ice and debris', safe: true },
      { task: 'Never attempt to remove ice or snow from roof yourself', safe: false },
    ],
  },
];

const groundLevelInspectionPoints = [
  {
    area: 'Shingles',
    lookFor: [
      'Missing or damaged shingles',
      'Curling, buckling, or blistering',
      'Dark streaks (algae) or green patches (moss)',
      'Excessive granule loss (bare spots)',
    ],
  },
  {
    area: 'Roof Structure',
    lookFor: [
      'Sagging or uneven roofline',
      'Damaged or missing ridge cap',
      'Debris accumulation in valleys',
      'Signs of animal damage or nesting',
    ],
  },
  {
    area: 'Flashing & Penetrations',
    lookFor: [
      'Rust or deterioration around chimneys',
      'Gaps around vent pipes',
      'Damaged boot covers on pipes',
      'Loose or missing caulking',
    ],
  },
  {
    area: 'Gutters & Drainage',
    lookFor: [
      'Sagging or pulling away from fascia',
      'Rust, holes, or separated joints',
      'Granules accumulating in gutters',
      'Water marks or mold on fascia boards',
    ],
  },
];

export default function DIYRoofMaintenanceChecklistPage() {
  const pageUrl = `${SITE_CONFIG.url}/diy-roof-maintenance-checklist-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="DIY Roof Maintenance Checklist Charlotte NC"
        description="Complete DIY roof maintenance checklist for Charlotte homeowners with safe inspection tasks."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'DIY Roof Maintenance Checklist', url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'DIY Roof Maintenance Checklist', url: pageUrl },
        ]}
      />
      <ArticleSchema
        post={{
          title: 'DIY Roof Maintenance Checklist for Charlotte NC Homeowners',
          description: 'Complete guide to safe DIY roof maintenance for Charlotte homes.',
          slug: 'diy-roof-maintenance-checklist-charlotte-nc',
          datePublished: '2026-01-27',
          dateModified: '2026-01-27',
        }}
      />
      <FAQSchema faqs={maintenanceFAQs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={IMAGES.hero.hero25}
            alt="Charlotte homeowner inspecting roof"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[{ label: 'DIY Roof Maintenance Checklist' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Wrench className="w-4 h-4" />
              <span>DIY Homeowner Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              DIY Roof Maintenance Checklist for Charlotte NC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              Simple, Safe Tasks to Keep Your Roof in Top Condition
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Learn what you can safely inspect and maintain yourself, and when it&apos;s time to call
              a professional. This guide helps Charlotte homeowners extend their roof&apos;s life
              while staying safe.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                Need Professional Help?
              </a>
              <EstimateButton
                className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety First Section */}
      <section className="section bg-red-50 border-y border-red-100">
        <div className="container">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-red-600 mb-4">
              <Shield className="w-6 h-6" />
              <span className="font-bold text-lg">SAFETY FIRST</span>
            </div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              Before You Start: Critical Safety Rules
            </h2>
            <p className="text-gray max-w-2xl mx-auto">
              Roof-related falls cause over 50 deaths and 50,000 injuries per year in the US.
              Follow these rules to protect yourself.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyRules.map((rule, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <rule.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-dark mb-2">{rule.title}</h3>
                <p className="text-gray text-sm">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ground-Level Inspection Guide */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              Ground-Level Inspection Checklist
            </h2>
            <p className="text-gray text-center mb-8">
              Use binoculars to inspect these areas from the ground. Walk around your entire home
              and document any concerns with photos.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {groundLevelInspectionPoints.map((point, index) => (
                <div key={index} className="card">
                  <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    {point.area}
                  </h3>
                  <ul className="space-y-2">
                    {point.lookFor.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Maintenance Calendar */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Seasonal Maintenance Calendar for Charlotte
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Charlotte&apos;s climate requires year-round attention. Follow this seasonal checklist
              to catch problems early.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {seasonalChecklist.map((season, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className={`p-4 bg-${season.color === 'green' ? 'green' : season.color === 'yellow' ? 'yellow' : season.color === 'orange' ? 'orange' : 'blue'}-100`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-${season.color === 'green' ? 'green' : season.color === 'yellow' ? 'yellow' : season.color === 'orange' ? 'orange' : 'blue'}-500 rounded-lg flex items-center justify-center`}>
                      <season.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-dark text-xl">{season.season}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {season.tasks.map((item, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-3">
                        {item.safe ? (
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        )}
                        <div>
                          <span className={`text-sm ${item.safe ? 'text-gray' : 'text-amber-700'}`}>
                            {item.task}
                          </span>
                          {!item.safe && (
                            <span className="text-xs text-amber-600 block mt-1">
                              (Professional recommended)
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <YouTubeShort
        videoId="CXaG6atl-nE"
        title="The $10,000 Gutter Mistake"
        heading="Watch: The $10,000 Gutter Mistake"
        description="Don't skip your gutters — see the 3 red flags that lead to expensive repairs."
      />

      {/* When to Call a Pro */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              When to Call a Professional Roofer
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-dark mb-4">Call a Professional If You Notice:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray">
                        <ArrowRight className="w-4 h-4 text-amber-600" />
                        Missing, cracked, or curling shingles
                      </li>
                      <li className="flex items-center gap-2 text-gray">
                        <ArrowRight className="w-4 h-4 text-amber-600" />
                        Active leaks or water stains inside
                      </li>
                      <li className="flex items-center gap-2 text-gray">
                        <ArrowRight className="w-4 h-4 text-amber-600" />
                        Sagging roofline or soft spots
                      </li>
                      <li className="flex items-center gap-2 text-gray">
                        <ArrowRight className="w-4 h-4 text-amber-600" />
                        Damaged flashing around chimneys/vents
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray">
                        <ArrowRight className="w-4 h-4 text-amber-600" />
                        Moss or algae growth on roof
                      </li>
                      <li className="flex items-center gap-2 text-gray">
                        <ArrowRight className="w-4 h-4 text-amber-600" />
                        Granules accumulating in gutters
                      </li>
                      <li className="flex items-center gap-2 text-gray">
                        <ArrowRight className="w-4 h-4 text-amber-600" />
                        Roof is over 20 years old
                      </li>
                      <li className="flex items-center gap-2 text-gray">
                        <ArrowRight className="w-4 h-4 text-amber-600" />
                        Any storm damage (for insurance documentation)
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href={`tel:${SITE_CONFIG.phoneClean}`}
                      className="btn btn-primary"
                    >
                      <Phone className="w-5 h-5" />
                      Call {SITE_CONFIG.phone}
                    </a>
                    <Link href="/contact" className="btn btn-outline">
                      Schedule Free Inspection
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {maintenanceFAQs.map((faq, index) => (
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

      {/* Related Guides */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Related Guides for Charlotte Homeowners
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/attic-moisture-control-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Attic Moisture Control Guide
                </h3>
                <p className="text-gray text-sm">
                  How to prevent mold and ice dams with proper ventilation.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/guides/roof-maintenance-tips"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Complete Roof Maintenance Guide
                </h3>
                <p className="text-gray text-sm">
                  Everything you need to know about maintaining your Charlotte roof.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="diy-roof-maintenance-checklist-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/diy-roof-maintenance-checklist-charlotte-nc`}
      />

      {/* CTA Section */}
      <CTASection
        title="Need a Professional Roof Inspection?"
        subtitle="Our trained professionals can safely inspect your entire roof and provide a detailed assessment. Free inspections for Charlotte homeowners."
      />
    </>
  );
}
