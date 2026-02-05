import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Droplets,
  Leaf,
  Calendar,
  Shield,
  Clock,
  Wrench,
  XCircle,
  ThermometerSun,
  Quote,
  Lightbulb,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import YouTubeShort from '@/components/sections/YouTubeShort';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ArticleSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';
import { JamesTip } from '@/components/sections/PersonalTouch';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'DIY Gutter Cleaning Guide Charlotte NC | Safe Cleaning Tips',
  description:
    'Step-by-step guide to safely clean your gutters in Charlotte NC. Learn when to DIY vs hire pros, essential tools, safety tips, and seasonal cleaning schedules.',
  keywords: [
    'gutter cleaning Charlotte NC',
    'DIY gutter cleaning Charlotte',
    'how to clean gutters Charlotte',
    'cleaning gutters safely',
    'how to clean gutters safely',
    'safe gutter cleaning tips',
    'gutter cleaning tips Charlotte NC',
    'gutter cleaning safety Charlotte',
    'when to clean gutters Charlotte',
    'gutter cleaning tools Charlotte',
    'gutter maintenance Charlotte NC',
    'gutter cleaning near me',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-cleaning-diy-guide-charlotte-nc`,
  },
  openGraph: {
    title: 'DIY Gutter Cleaning Guide for Charlotte NC Homeowners',
    description:
      'Safe, step-by-step gutter cleaning instructions. Tools, timing, safety tips, and when to call the pros.',
    url: `${SITE_CONFIG.url}/gutter-cleaning-diy-guide-charlotte-nc`,
    type: 'article',
  },
};

const gutterFAQs = [
  {
    question: 'How often should I clean my gutters in Charlotte NC?',
    answer:
      'Most Charlotte homes need gutter cleaning twice yearly: once in late fall after leaves drop (November-December) and once in late spring after pollen season (May-June). Homes with many trees nearby may need 3-4 cleanings. Pine trees are especially problematic with year-round needle drop.',
  },
  {
    question: 'Can I clean gutters myself or should I hire a professional?',
    answer:
      'Single-story homes with easy access can often be DIY projects if you\'re comfortable on ladders. Two-story homes, steep roofs, or homes with difficult access should hire professionals. The $150-300 cost of professional cleaning is worth avoiding a fall injury. If you have any health issues affecting balance, always hire a pro.',
  },
  {
    question: 'What tools do I need to clean my gutters?',
    answer:
      'Essential tools: sturdy extension ladder, work gloves, gutter scoop or garden trowel, 5-gallon bucket with hook, garden hose with spray nozzle, and safety glasses. Optional but helpful: ladder stabilizer, gutter cleaning wand attachment, and a leaf blower for dry debris.',
  },
  {
    question: 'Is gutter cleaning dangerous?',
    answer:
      'Falls from ladders cause over 500,000 injuries annually in the US. Proper safety precautions are essential: use a ladder stabilizer, never overreach, have someone spot you, wear non-slip shoes, and avoid working in wet conditions. If uncomfortable at any point, stop and call a professional.',
  },
  {
    question: 'What happens if I don\'t clean my gutters?',
    answer:
      'Clogged gutters cause: water overflow damaging fascia boards and siding, foundation damage from improper drainage, ice dams in winter, mosquito breeding grounds in standing water, and roof leaks from backed-up water. Repairs from neglected gutters often cost $500-5,000.',
  },
];

const essentialTools = [
  {
    name: 'Extension Ladder',
    description: 'Must extend 3 feet above gutter line. Ensure 300+ lb capacity.',
    required: true,
  },
  {
    name: 'Work Gloves',
    description: 'Thick rubber-coated gloves protect from debris, sharp edges, and bugs.',
    required: true,
  },
  {
    name: 'Gutter Scoop',
    description: 'Plastic scoop designed to fit gutter profile. $5-10 at hardware stores.',
    required: true,
  },
  {
    name: 'Bucket with Hook',
    description: 'S-hook attaches 5-gallon bucket to ladder for debris collection.',
    required: true,
  },
  {
    name: 'Garden Hose',
    description: 'With spray nozzle to flush remaining debris and test flow.',
    required: true,
  },
  {
    name: 'Safety Glasses',
    description: 'Debris, insects, and splashing water make eye protection essential.',
    required: true,
  },
  {
    name: 'Ladder Stabilizer',
    description: 'Spreads ladder weight and keeps it off gutters. Highly recommended.',
    required: false,
  },
  {
    name: 'Gutter Cleaning Wand',
    description: 'Curved attachment for garden hose to clean from ground level.',
    required: false,
  },
];

const safetyRules = [
  {
    rule: 'Never work alone',
    reason: 'Have someone spot the ladder and call for help if needed.',
  },
  {
    rule: 'Check the weather',
    reason: 'Never clean gutters in rain, high winds, or when frost is possible.',
  },
  {
    rule: 'Inspect your ladder',
    reason: 'Check for loose rungs, cracks, or damage before every use.',
  },
  {
    rule: 'Set ladder on firm, level ground',
    reason: 'Use leg levelers on slopes. Never place on soft soil or uneven surfaces.',
  },
  {
    rule: 'Maintain 3 points of contact',
    reason: 'Two hands and one foot, or two feet and one hand on ladder at all times.',
  },
  {
    rule: 'Never overreach',
    reason: 'Keep your belt buckle between ladder rails. Climb down and move ladder instead.',
  },
  {
    rule: 'Face the ladder',
    reason: 'Always face the ladder when climbing up or down. Never turn around.',
  },
  {
    rule: 'Avoid power lines',
    reason: 'Keep ladder and tools at least 10 feet from any power lines.',
  },
];

const cleaningSteps = [
  {
    step: 1,
    title: 'Prepare Your Work Area',
    description:
      'Lay a tarp below where you\'ll be working to catch debris. Position your ladder securely with stabilizer attached. Have all tools ready in your bucket.',
    duration: '5-10 minutes',
  },
  {
    step: 2,
    title: 'Remove Large Debris by Hand',
    description:
      'Start at the downspout and work away from it. Scoop leaves, twigs, and debris into your bucket. Don\'t push debris into the downspout.',
    duration: '15-30 minutes per section',
  },
  {
    step: 3,
    title: 'Scrape Stuck-On Debris',
    description:
      'Use your gutter scoop to remove compacted debris and mud buildup along the bottom. Work methodically along the entire gutter length.',
    duration: '10-20 minutes per section',
  },
  {
    step: 4,
    title: 'Flush with Water',
    description:
      'Starting at the far end from the downspout, flush the gutter with your hose. Watch for proper water flow toward downspout.',
    duration: '5-10 minutes per section',
  },
  {
    step: 5,
    title: 'Clear Downspouts',
    description:
      'Insert hose into downspout and turn on full pressure. If clogged, use a plumber\'s snake or disassemble the downspout to clear blockage.',
    duration: '5-15 minutes each',
  },
  {
    step: 6,
    title: 'Inspect and Test',
    description:
      'Check for proper drainage, loose hangers, holes, or damage. Run water through entire system to verify flow. Note any repairs needed.',
    duration: '10-15 minutes',
  },
];

const seasonalSchedule = [
  {
    season: 'Spring (May-June)',
    task: 'Post-Pollen Cleaning',
    reason:
      'Charlotte\'s intense pollen season leaves yellow-green buildup that hardens into blockages. Clean after pollen subsides.',
    icon: ThermometerSun,
  },
  {
    season: 'Summer (July-August)',
    task: 'Quick Inspection',
    reason:
      'Summer storms can blow debris into gutters. Do a visual check and clear any visible blockages. Full cleaning usually not needed.',
    icon: Droplets,
  },
  {
    season: 'Fall (November-December)',
    task: 'Major Cleaning',
    reason:
      'Most important cleaning of the year. Wait until most leaves have fallen. Critical before winter to prevent ice dams.',
    icon: Leaf,
  },
  {
    season: 'Winter (January-February)',
    task: 'Emergency Checks Only',
    reason:
      'Don\'t clean in cold weather (slippery conditions). Only address urgent clogs causing ice dams. Consider professional help.',
    icon: AlertTriangle,
  },
];

const whenToCallPros = [
  'Two-story or higher homes',
  'Steep roof pitch (7/12 or greater)',
  'Limited ladder access',
  'Uncomfortable with heights',
  'Physical limitations affecting balance',
  'Gutters show damage needing repair',
  'Severe clogs requiring special equipment',
  'Presence of wasp nests or bee hives',
];

const breadcrumbsSchema = [
  { name: 'Home', url: `${SITE_CONFIG.url}/` },
  { name: 'Gutter Services', url: `${SITE_CONFIG.url}/gutter-installation-charlotte-nc` },
  { name: 'DIY Gutter Cleaning Guide', url: `${SITE_CONFIG.url}/gutter-cleaning-diy-guide-charlotte-nc` },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Gutter Services', href: '/gutter-installation-charlotte-nc' },
  { label: 'DIY Gutter Cleaning Guide' },
];

export default function GutterCleaningDIYGuidePage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbsSchema} />
      <FAQSchema
        faqs={gutterFAQs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))}
      />
      <WebPageSchema
        name="DIY Gutter Cleaning Guide Charlotte NC"
        description="Complete guide to safely cleaning your gutters in Charlotte NC. Step-by-step instructions, safety tips, and seasonal schedule."
        url={`${SITE_CONFIG.url}/gutter-cleaning-diy-guide-charlotte-nc`}
      />
      <ArticleSchema
        post={{
          title: 'DIY Gutter Cleaning Guide for Charlotte NC Homeowners',
          description: 'Step-by-step guide to safely clean your gutters. Tools, safety tips, seasonal schedule, and when to hire professionals.',
          slug: 'gutter-cleaning-diy-guide-charlotte-nc',
          datePublished: '2025-01-30',
          dateModified: '2026-01-29',
        }}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/gutter-cleaning-diy-guide-charlotte-nc`}
        pageName="DIY Gutter Cleaning Guide Charlotte NC"
        faqs={gutterFAQs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
          speakableAnswer: faq.answer.split('.').slice(0, 2).join('.') + '.',
        }))}
        includeVoiceActions={true}
        city="Charlotte"
        skipFAQ={true}
      />

      <section className="pt-8 pb-12 bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              <span>Safety First DIY Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              DIY Gutter Cleaning Guide
              <span className="block text-yellow-400 mt-2">For Charlotte NC Homeowners</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Step-by-step instructions for safely cleaning your gutters, plus tips on when
              DIY makes sense and when to call the professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EstimateButton
                size="lg"
                className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold"
              />
              <Link
                href="/gutter-installation-charlotte-nc"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors"
              >
                <Wrench className="h-5 w-5" />
                Professional Gutter Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Warning Banner */}
      <section className="py-4 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-center">
            <AlertTriangle className="h-6 w-6 flex-shrink-0" />
            <p className="font-semibold">
              Important: Ladder falls cause serious injuries. If you&apos;re uncomfortable with heights
              or lack proper equipment, please hire a professional.
            </p>
          </div>
        </div>
      </section>

      {/* Should You DIY? */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Should You Clean Your Own Gutters?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* DIY is OK */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">DIY May Work If...</h3>
              </div>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Single-story home with easy ladder access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You&apos;re comfortable working on ladders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You have proper safety equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>No physical conditions affecting balance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Gutters just need routine cleaning (not repairs)</span>
                </li>
              </ul>
            </div>

            {/* Call a Pro */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="h-8 w-8 text-red-600" />
                <h3 className="text-xl font-bold text-red-900">Call a Pro If...</h3>
              </div>
              <ul className="space-y-3 text-red-800">
                {whenToCallPros.map((reason, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">
              Professional gutter cleaning in Charlotte typically costs{' '}
              <strong>$150-$300</strong> for most homes.
            </p>
            <Link
              href="/gutter-installation-charlotte-nc"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
            >
              Get a professional quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Essential Tools */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Tools You&apos;ll Need
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Don&apos;t start without proper equipment. Missing tools lead to incomplete jobs or unsafe shortcuts.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {essentialTools.map((tool, index) => (
              <div
                key={index}
                className={`rounded-xl p-5 ${
                  tool.required
                    ? 'bg-white border-2 border-blue-200'
                    : 'bg-white border border-slate-200'
                }`}
              >
                <div className="flex items-start gap-2 mb-2">
                  <h3 className="font-bold text-slate-900">{tool.name}</h3>
                  {tool.required ? (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                      Required
                    </span>
                  ) : (
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                      Optional
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Rules */}
      <section className="py-16 bg-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-yellow-400" />
            <h2 className="text-3xl font-bold">Critical Safety Rules</h2>
          </div>
          <p className="text-center text-red-100 mb-12 max-w-2xl mx-auto">
            Ladder accidents send over 500,000 Americans to the ER every year. Follow these rules without exception.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {safetyRules.map((item, index) => (
              <div key={index} className="bg-red-800/50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 bg-yellow-500 text-red-900 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-white">{item.rule}</h3>
                </div>
                <p className="text-red-100 text-sm">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Instructions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Step-by-Step Cleaning Process
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            For a typical Charlotte home, expect the full process to take 2-4 hours depending on gutter length and debris level.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {cleaningSteps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 items-start bg-slate-50 rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                      <Clock className="h-4 w-4" />
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* James's Gutter Story & Safety Advice */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
              A Word from James Turner on Gutter Safety
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              After 15 years of roofing and gutter work in Charlotte, here&apos;s what I&apos;ve
              learned about cleaning gutters safely.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Owner's Story */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white rounded-xl p-6 border border-blue-100">
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="h-8 w-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        The Gutter That Saved a Foundation
                      </h3>
                      <p className="text-sm text-slate-500">From James Turner, Owner</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    &ldquo;A couple in Mint Hill called about water pooling around their foundation.
                    They were getting quotes for $12,000 in foundation work. I went out and looked at
                    the gutters first &mdash; completely clogged with pine needles, downspouts
                    disconnected. We cleaned everything out and extended the downspouts for $250.
                    The water problem disappeared.&rdquo;
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    &ldquo;Their foundation contractor called me afterward and said, &lsquo;You just
                    saved them twelve grand.&rsquo; That&apos;s why I always tell people: check the
                    gutters first. Nine times out of ten, the problem starts at the roofline, not
                    the foundation.&rdquo;
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-yellow-100">
                  <div className="flex items-start gap-3 mb-4">
                    <Lightbulb className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-bold text-slate-900">
                      What I Tell Every Homeowner About Gutter Cleaning
                    </h3>
                  </div>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Start from the ground.</strong> Before you even touch a ladder,
                        walk around your house and look at the gutters from below. Sagging sections,
                        plant growth, or overflow stains tell you where the worst spots are.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Don&apos;t skip the downspouts.</strong> Most people scoop the gutters
                        and call it done. If your downspouts are clogged, it doesn&apos;t matter how
                        clean the gutters are &mdash; the water has nowhere to go.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Charlotte pollen is real.</strong> People think fall is the only
                        gutter season. In Charlotte, the spring pollen turns to cement in your
                        gutters if you leave it. That May cleanup is just as important as November.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Know when to call it.</strong> If you get up there and anything
                        feels off &mdash; the ladder wobbles, you&apos;re dizzy, the roof is steeper
                        than you thought &mdash; come down. No gutter cleaning is worth a trip to
                        the ER. I mean that.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* JamesTip Sidebar */}
              <div className="space-y-6">
                <JamesTip tipId="gutter-safety" />
                <JamesTip tipId="fall-prep" />

                {/* Quick Stats */}
                <div className="bg-blue-900 text-white rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">Gutter Facts</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold text-yellow-400">$250</p>
                      <p className="text-blue-200 text-sm">Average gutter cleaning cost</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-yellow-400">$5,000+</p>
                      <p className="text-blue-200 text-sm">Average water damage repair</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-yellow-400">2x/year</p>
                      <p className="text-blue-200 text-sm">Recommended cleaning frequency</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-yellow-400">500K+</p>
                      <p className="text-blue-200 text-sm">Ladder injuries per year in US</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <YouTubeShort
        videoId="CXaG6atl-nE"
        title="The $10,000 Gutter Mistake"
        heading="Watch: The $10,000 Gutter Mistake"
        description="Learn the 3 red flags that mean your gutters need attention right now."
      />

      {/* Charlotte Seasonal Schedule */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Charlotte Seasonal Gutter Schedule
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Charlotte&apos;s climate means specific timing matters. Here&apos;s when and why to clean throughout the year.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {seasonalSchedule.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <item.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-1">{item.season}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-3">{item.task}</p>
                <p className="text-slate-600 text-sm">{item.reason}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-100 border border-yellow-300 rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <Leaf className="h-8 w-8 text-yellow-700 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-yellow-900 mb-2">Charlotte Tree Tip</h3>
                <p className="text-yellow-800">
                  If your home has many pine trees, expect to clean gutters 3-4 times yearly.
                  Pine needles fall year-round and create dense clogs that compact quickly.
                  Consider <Link href="/gutter-guards-charlotte-nc" className="underline font-semibold">gutter guards</Link> to reduce maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gutter Guard Option */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12">
            <div className="md:flex items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Tired of Cleaning Gutters?
                </h2>
                <p className="text-slate-300 mb-6">
                  Gutter guards can reduce cleaning frequency by 80-90%. One investment means fewer dangerous trips up the ladder and more time enjoying your weekend.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Keep leaves and debris out</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Prevent ice dam formation</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Professional installation available</span>
                  </div>
                </div>
                <Link
                  href="/gutter-guards-charlotte-nc"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition-colors"
                >
                  Learn About Gutter Guards
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="mt-8 md:mt-0">
                <div className="relative aspect-square w-48 mx-auto">
                  <Image
                    src={IMAGES.services.gutters}
                    alt="Gutter guard installation in Charlotte NC"
                    fill
                    className="object-cover rounded-xl"
                  />
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
            {gutterFAQs.map((faq, index) => (
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
              href="/gutter-installation-charlotte-nc"
              className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
            >
              <Droplets className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Gutter Installation
              </h3>
              <p className="text-slate-600 text-sm">
                New seamless gutters professionally installed with proper pitch and drainage.
              </p>
            </Link>
            <Link
              href="/gutter-guards-charlotte-nc"
              className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
            >
              <Shield className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Gutter Guards
              </h3>
              <p className="text-slate-600 text-sm">
                Stop cleaning gutters forever with professionally installed gutter protection.
              </p>
            </Link>
            <Link
              href="/gutter-repair-charlotte-nc"
              className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
            >
              <Wrench className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Gutter Repair
              </h3>
              <p className="text-slate-600 text-sm">
                Fix sagging gutters, leaking seams, and damaged sections.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="gutter-cleaning-diy-guide-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/gutter-cleaning-diy-guide-charlotte-nc`}
      />


      <CityGeoSection


        city="Charlotte"


        state="NC"


        citySlug="charlotte-nc"


        service="Gutter Cleaning Diy Guide"


      />


      <CTASection
        title="Need Professional Gutter Help?"
        subtitle="Free inspections and estimates for gutter cleaning, repair, and installation in Charlotte NC."
        variant="primary"
      />
    </>
  );
}
