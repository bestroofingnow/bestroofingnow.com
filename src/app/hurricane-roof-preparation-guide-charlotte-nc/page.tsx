import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Wind,
  Calendar,
  Shield,
  Clock,
  FileText,
  XCircle,
  Home,
  Droplets,
  TreePine,
  Wrench,
  CloudRain,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
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
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Hurricane Roof Prep Guide Charlotte NC',
  description:
    'Prepare your Charlotte roof for hurricane season. Inspection checklist, reinforcement options, insurance tips, and what to do before, during, and after the storm.',
  keywords: [
    'hurricane roof preparation Charlotte NC',
    'hurricane season roof Charlotte',
    'prepare roof for hurricane Charlotte',
    'storm prep roof Charlotte NC',
    'hurricane roof inspection Charlotte',
    'wind resistant roofing Charlotte',
    'hurricane roof damage prevention Charlotte',
    'charlotte hurricane season preparation',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/hurricane-roof-preparation-guide-charlotte-nc`,
  },
  openGraph: {
    title: 'Hurricane Roof Preparation Guide | Charlotte NC',
    description:
      'Complete hurricane preparation guide for Charlotte homeowners. Protect your roof before storm season arrives.',
    url: `${SITE_CONFIG.url}/hurricane-roof-preparation-guide-charlotte-nc`,
    type: 'article',
  },
};

const hurricaneFAQs = [
  {
    question: 'When should I prepare my roof for hurricane season in Charlotte?',
    answer:
      'Start roof preparation in April or May, before the June 1 hurricane season start date. This gives time to schedule inspections, make repairs, and avoid the rush when storms are forecasted. By August-September (peak season), roofers are often booked solid with emergency repairs.',
  },
  {
    question: 'How do I know if my roof can withstand a hurricane?',
    answer:
      'Schedule a professional inspection. Key factors include: roof age (under 15 years is better), shingle condition (no lifting or missing tabs), flashing integrity, and proper installation of roof-to-wall connections. Homes built after 2005 in NC meet stricter wind codes.',
  },
  {
    question: 'What wind speed can a typical Charlotte roof handle?',
    answer:
      'Standard architectural shingles are rated for 110-130 mph winds when properly installed. However, poor installation, age, and pre-existing damage significantly reduce wind resistance. Roofs over 15 years old or with visible issues may fail at much lower wind speeds.',
  },
  {
    question: 'Should I have my roof inspected before hurricane season?',
    answer:
      'Yes. Pre-season inspections identify weak points that could fail during storms. Issues like loose shingles, compromised flashing, and damaged seals are easily fixed before a storm but become major failures during one. Inspection cost ($100-300) is minor compared to storm damage.',
  },
  {
    question: 'Will my insurance cover hurricane roof damage in Charlotte?',
    answer:
      'Yes, standard homeowners insurance covers hurricane damage in Charlotte. Note: Many NC policies have separate hurricane/wind deductibles (often 1-5% of dwelling coverage) that are higher than standard deductibles. Review your policy before storm season.',
  },
];

const preSeasonChecklist = [
  {
    task: 'Professional Roof Inspection',
    description: 'Have a licensed roofer inspect for loose shingles, damaged flashing, and weak points.',
    priority: 'Essential',
    timing: 'April-May',
  },
  {
    task: 'Clean Gutters and Downspouts',
    description: 'Clear debris to ensure proper water drainage. Clogged gutters cause water backup damage.',
    priority: 'Essential',
    timing: 'May',
  },
  {
    task: 'Trim Overhanging Branches',
    description: 'Cut branches within 10 feet of your roof. Dead branches should be completely removed.',
    priority: 'Essential',
    timing: 'April-May',
  },
  {
    task: 'Check and Seal Roof Penetrations',
    description: 'Inspect seals around vents, pipes, skylights, and chimney flashings. Reseal if cracked.',
    priority: 'High',
    timing: 'May',
  },
  {
    task: 'Secure Loose Shingles',
    description: 'Nail down any lifted or loose shingles. Replace missing shingles immediately.',
    priority: 'High',
    timing: 'Ongoing',
  },
  {
    task: 'Review Insurance Policy',
    description: 'Understand your hurricane deductible and coverage limits. Document home condition.',
    priority: 'Essential',
    timing: 'May',
  },
  {
    task: 'Photograph Your Roof',
    description: 'Take dated photos of your roof condition. Useful for insurance claims if damage occurs.',
    priority: 'High',
    timing: 'May-June',
  },
  {
    task: 'Stock Emergency Supplies',
    description: 'Have tarps, plywood, nails, and basic tools ready for emergency temporary repairs.',
    priority: 'Medium',
    timing: 'June',
  },
];

const stormApproaching = [
  {
    timing: '72 Hours Before',
    tasks: [
      'Monitor storm track and intensity forecasts',
      'Review evacuation routes if in evacuation zone',
      'Ensure you have tarps and emergency materials',
      'Document home condition with photos/video',
    ],
  },
  {
    timing: '48 Hours Before',
    tasks: [
      'Secure or bring in outdoor furniture and decorations',
      'Clear yard of potential projectiles (branches, toys, tools)',
      'Check that attic vents are secure',
      'Fill bathtubs with water for flushing toilets',
    ],
  },
  {
    timing: '24 Hours Before',
    tasks: [
      'Close all windows and exterior doors',
      'If you have storm shutters, install them now',
      'Move vehicles into garage if possible',
      'Charge all phones and battery backups',
    ],
  },
  {
    timing: 'During the Storm',
    tasks: [
      'Stay away from windows and exterior walls',
      'Do NOT go outside during calm (eye) periods',
      'Listen to emergency alerts on battery-powered radio',
      'If you hear roof damage, stay in interior room on lowest floor',
    ],
  },
];

const afterStormSteps = [
  {
    step: 1,
    title: 'Wait for All-Clear',
    description:
      'Don\'t go outside until authorities confirm the storm has passed. Secondary storms and downed power lines are dangerous.',
    icon: Clock,
  },
  {
    step: 2,
    title: 'Check for Injuries First',
    description:
      'Ensure all family members are safe. Call 911 for any injuries. Don\'t use phones for non-emergencies.',
    icon: Shield,
  },
  {
    step: 3,
    title: 'Assess Damage Safely',
    description:
      'Look for obvious roof damage from ground level only. Don\'t climb on the roof. Watch for downed power lines.',
    icon: Home,
  },
  {
    step: 4,
    title: 'Document Everything',
    description:
      'Photograph all damage before cleanup. Take wide shots and close-ups. This is critical for insurance claims.',
    icon: FileText,
  },
  {
    step: 5,
    title: 'Prevent Further Damage',
    description:
      'If safe, tarp any openings to prevent water damage. Insurance requires you to mitigate additional damage.',
    icon: Droplets,
  },
  {
    step: 6,
    title: 'Contact Insurance',
    description:
      'Report the claim as soon as possible. Be prepared for delays after major storms. Get a claim number.',
    icon: FileText,
  },
];

const roofReinforcements = [
  {
    name: 'Roof-to-Wall Connections',
    description:
      'Hurricane straps or clips connect your roof structure to wall framing. Essential for high-wind areas.',
    effectiveness: 'High',
    cost: '$1,000-$3,000',
  },
  {
    name: 'Impact-Resistant Shingles',
    description:
      'Class 3 or 4 impact-rated shingles resist wind and hail better than standard shingles. May qualify for insurance discounts.',
    effectiveness: 'High',
    cost: '$8,000-$15,000 (full roof)',
  },
  {
    name: 'Sealed Roof Deck',
    description:
      'Self-adhering underlayment creates a secondary water barrier if shingles blow off.',
    effectiveness: 'High',
    cost: '$500-$1,500',
  },
  {
    name: 'Gable End Bracing',
    description:
      'Braces reinforce gable walls which are vulnerable to wind pressure. Common failure point.',
    effectiveness: 'Medium',
    cost: '$500-$1,500',
  },
  {
    name: 'Soffit Reinforcement',
    description:
      'Strengthened soffits prevent wind from entering attic and lifting roof from inside.',
    effectiveness: 'Medium',
    cost: '$300-$800',
  },
];

const hurricaneSeasons = [
  { month: 'June', risk: 'Low', note: 'Season starts. Most activity later in summer.' },
  { month: 'July', risk: 'Low-Medium', note: 'Tropical storms possible but major hurricanes rare.' },
  { month: 'August', risk: 'High', note: 'Activity increases. Peak season begins.' },
  { month: 'September', risk: 'Highest', note: 'Peak hurricane month. Most major storms occur.' },
  { month: 'October', risk: 'High', note: 'Still very active. Late-season storms can be strong.' },
  { month: 'November', risk: 'Low', note: 'Season ends Nov 30. Occasional late storms.' },
];

const breadcrumbsSchema = [
  { name: 'Home', url: `${SITE_CONFIG.url}/` },
  { name: 'Storm Damage', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-charlotte-nc` },
  { name: 'Hurricane Preparation Guide', url: `${SITE_CONFIG.url}/hurricane-roof-preparation-guide-charlotte-nc` },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Storm Damage', href: '/storm-damage-roof-repair-charlotte-nc' },
  { label: 'Hurricane Preparation Guide' },
];

export default function HurricaneRoofPreparationGuidePage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbsSchema} />
      <FAQSchema
        faqs={hurricaneFAQs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))}
      />
      <WebPageSchema
        name="Hurricane Roof Preparation Guide Charlotte NC"
        description="Complete guide to preparing your Charlotte roof for hurricane season. Inspection checklist, reinforcement options, and storm response."
        url={`${SITE_CONFIG.url}/hurricane-roof-preparation-guide-charlotte-nc`}
      />
      <ArticleSchema
        post={{
          title: 'Hurricane Roof Preparation Guide for Charlotte NC Homeowners',
          description: 'Protect your Charlotte home from hurricane damage. Pre-season preparation, storm response, and post-storm recovery guide.',
          slug: 'hurricane-roof-preparation-guide-charlotte-nc',
          datePublished: '2025-02-01',
          dateModified: '2025-02-01',
        }}
      />

      <section className="pt-8 pb-12 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-6">
              <Wind className="h-4 w-4" />
              <span>Hurricane Season Preparation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hurricane Roof Preparation Guide
              <span className="block text-blue-400 mt-2">Charlotte NC Homeowners</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don&apos;t wait until a storm is forecasted. Prepare your roof now to minimize
              damage and recover faster when hurricanes threaten Charlotte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EstimateButton
                size="lg"
                className="bg-blue-500 text-white hover:bg-blue-400 font-semibold"
              />
              <Link
                href="/roof-inspection-charlotte-nc"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors"
              >
                <Shield className="h-5 w-5" />
                Schedule Pre-Season Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hurricane Season Timeline */}
      <section className="py-12 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Atlantic Hurricane Season Risk by Month
          </h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {hurricaneSeasons.map((item, index) => (
              <div
                key={index}
                className={`px-4 py-3 rounded-lg text-center ${
                  item.risk === 'Highest'
                    ? 'bg-red-600'
                    : item.risk === 'High'
                      ? 'bg-orange-600'
                      : item.risk === 'Low-Medium'
                        ? 'bg-yellow-600'
                        : 'bg-green-700'
                }`}
              >
                <p className="font-bold">{item.month}</p>
                <p className="text-xs opacity-90">{item.risk}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 mt-4 text-sm">
            Charlotte is ~200 miles inland but still experiences significant wind and rain from hurricanes.
            Prepare before August peak.
          </p>
        </div>
      </section>

      {/* Pre-Season Checklist */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Pre-Season Preparation Checklist
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Complete these tasks before June 1 to be ready for hurricane season.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {preSeasonChecklist.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 rounded-xl p-5 ${
                  item.priority === 'Essential'
                    ? 'bg-blue-50 border-2 border-blue-200'
                    : item.priority === 'High'
                      ? 'bg-slate-50 border border-slate-200'
                      : 'bg-slate-50 border border-slate-100'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.priority === 'Essential'
                      ? 'bg-blue-600 text-white'
                      : item.priority === 'High'
                        ? 'bg-slate-700 text-white'
                        : 'bg-slate-400 text-white'
                  }`}
                >
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-900">{item.task}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        item.priority === 'Essential'
                          ? 'bg-blue-100 text-blue-800'
                          : item.priority === 'High'
                            ? 'bg-slate-200 text-slate-700'
                            : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {item.priority}
                    </span>
                    <span className="text-xs text-slate-500">• {item.timing}</span>
                  </div>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <EstimateButton
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Schedule Pre-Season Inspection
            </EstimateButton>
          </div>
        </div>
      </section>

      {/* Roof Reinforcement Options */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Roof Reinforcement Options
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Consider these upgrades to strengthen your roof against hurricane-force winds.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {roofReinforcements.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-slate-900">{item.name}</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">{item.description}</p>
                <div className="flex justify-between text-sm">
                  <span
                    className={`px-2 py-1 rounded ${
                      item.effectiveness === 'High'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {item.effectiveness} effectiveness
                  </span>
                  <span className="text-slate-500">{item.cost}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-yellow-100 border border-yellow-300 rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-yellow-700 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-yellow-900 mb-2">Insurance Discounts Available</h3>
                <p className="text-yellow-800">
                  Many NC insurers offer premium discounts (5-15%) for wind mitigation upgrades like
                  hurricane straps and impact-resistant shingles. Ask your agent about available credits
                  before making upgrades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storm Approaching Timeline */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            When a Storm is Forecasted
          </h2>
          <p className="text-center text-blue-200 mb-12 max-w-2xl mx-auto">
            Follow this timeline when a hurricane or tropical storm threatens Charlotte.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {stormApproaching.map((period, index) => (
              <div key={index} className="bg-blue-800/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">{period.timing}</h3>
                <ul className="space-y-2">
                  {period.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2 text-blue-100">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After the Storm */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            After the Storm Passes
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Stay safe during recovery. Don&apos;t rush outside until authorities give the all-clear.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {afterStormSteps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start bg-slate-50 rounded-xl p-5">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <step.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-slate-500">Step {step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/what-to-do-after-hail-storm-charlotte-nc"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
            >
              Read our complete post-storm damage guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Charlotte-Specific Info */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Hurricane Impact on Charlotte
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            While Charlotte is inland, hurricanes still cause significant damage here.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Wind className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Wind Damage</h3>
              <p className="text-slate-600 text-sm">
                Hurricanes maintain damaging winds 200+ miles inland. Charlotte experienced
                50-70 mph gusts from Florence (2018) and Hugo (1989) brought 80+ mph winds.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <CloudRain className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Heavy Rainfall</h3>
              <p className="text-slate-600 text-sm">
                Stalled or slow-moving hurricanes can dump 10-20+ inches on Charlotte.
                Roof leaks that might go unnoticed become catastrophic with sustained heavy rain.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <TreePine className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tree Damage</h3>
              <p className="text-slate-600 text-sm">
                Charlotte&apos;s dense tree canopy becomes a liability in hurricanes. Saturated soil
                plus high winds causes widespread tree falls. Tree damage is the #1 cause of
                roof damage in Charlotte during hurricanes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {hurricaneFAQs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              href="/storm-damage-roof-repair-charlotte-nc"
              className="group bg-white rounded-xl p-6 hover:bg-slate-100 transition-colors"
            >
              <Wind className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Storm Damage Repair
              </h3>
              <p className="text-slate-600 text-sm">
                Expert storm damage repairs for Charlotte homes.
              </p>
            </Link>
            <Link
              href="/roof-inspection-charlotte-nc"
              className="group bg-white rounded-xl p-6 hover:bg-slate-100 transition-colors"
            >
              <Shield className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Roof Inspection
              </h3>
              <p className="text-slate-600 text-sm">
                Professional inspections to identify vulnerabilities before storms.
              </p>
            </Link>
            <Link
              href="/emergency-tarp-service-charlotte-nc"
              className="group bg-white rounded-xl p-6 hover:bg-slate-100 transition-colors"
            >
              <Home className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Emergency Tarping
              </h3>
              <p className="text-slate-600 text-sm">
                24/7 emergency tarp service to protect storm-damaged roofs.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="hurricane-roof-preparation-guide-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/hurricane-roof-preparation-guide-charlotte-nc`}
      />


      <CityGeoSection


        city="Charlotte"


        state="NC"


        citySlug="charlotte-nc"


        service="Hurricane Roof Preparation Guide"


      />


      <CTASection
        title="Prepare Your Roof Before Hurricane Season"
        subtitle="Schedule a pre-season inspection now. Don't wait until a storm is forecasted."
        variant="primary"
      />
    </>
  );
}
