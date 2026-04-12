import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  CloudRain,
  Droplets,
  Eye,
  HelpCircle,
  Leaf,
  Phone,
  Shield,
  Snowflake,
  Star,
  Sun,
  ThermometerSun,
  TreePine,
  Users,
  Wind,
  Wrench,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Maintenance Checklist',
  description:
    'Seasonal roof maintenance checklist for Charlotte NC homeowners. Spring, summer, fall, and winter tasks to extend your roof life. DIY tips and professional inspection guidance from BBB A+ rated roofers.',
  keywords: [
    'roof maintenance checklist charlotte nc',
    'roof maintenance tips',
    'annual roof maintenance charlotte',
    'how to maintain your roof',
    'roof care guide charlotte nc',
    'preventive roof maintenance',
    'seasonal roof checklist',
    'roof upkeep charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-maintenance-checklist-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Maintenance Checklist | Charlotte NC Seasonal Guide | Best Roofing Now',
    description:
      'Complete seasonal roof maintenance checklist for Charlotte NC. Keep your roof in top condition year-round with expert tips from certified local roofers.',
    url: `${SITE_CONFIG.url}/roof-maintenance-checklist-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Roof maintenance checklist for Charlotte NC homeowners - Best Roofing Now',
      },
    ],
  },
};

const springTasks = [
  { task: 'Inspect for winter storm damage', detail: 'Check for missing, cracked, or displaced shingles from winter winds and ice events.' },
  { task: 'Check for ice dam damage', detail: 'Look for lifted shingles or damaged gutters along eaves where ice may have formed.' },
  { task: 'Clean gutters and downspouts', detail: 'Remove leaves, pine needles, and debris that accumulated over winter to restore drainage.' },
  { task: 'Inspect flashing around penetrations', detail: 'Check seals around vents, chimneys, and skylights for cracks or gaps from winter contraction.' },
  { task: 'Look for moss or algae growth', detail: 'Charlotte\'s humid springs promote algae. Treat early before it damages shingles.' },
  { task: 'Check attic for water stains', detail: 'Go into your attic and look for any new water marks on decking or insulation from winter leaks.' },
];

const summerTasks = [
  { task: 'Check attic ventilation', detail: 'Ensure soffit and ridge vents are clear. Poor ventilation in Charlotte\'s heat can reach 150 degrees F in attics.' },
  { task: 'Inspect for UV damage', detail: 'Look for shingles that appear lighter, curled, or brittle from intense summer sun exposure.' },
  { task: 'Inspect flashing and sealants', detail: 'Heat causes caulk and sealant to dry out and crack. Reseal any compromised areas.' },
  { task: 'Check for granule loss', detail: 'Inspect gutters and downspout outlets for accumulated granules, which indicates accelerated shingle wear.' },
  { task: 'Inspect after severe storms', detail: 'Charlotte sees peak thunderstorm activity May-September. Inspect after any hail or high wind event.' },
  { task: 'Trim overhanging branches', detail: 'Keep branches 6-10 feet from your roof to prevent damage and reduce debris accumulation.' },
];

const fallTasks = [
  { task: 'Clean gutters and downspouts thoroughly', detail: 'Fall leaves are the biggest clog risk. Clean gutters at least twice during autumn leaf drop.' },
  { task: 'Trim tree branches near roof', detail: 'Cut back branches before winter storms. Ice-laden branches can break and damage your roof.' },
  { task: 'Check and reseal around chimneys', detail: 'Apply fresh sealant around chimney flashing before winter rains and temperature drops.' },
  { task: 'Inspect and repair damaged shingles', detail: 'Fix any issues found before winter weather makes repairs more difficult and costly.' },
  { task: 'Check attic insulation', detail: 'Proper insulation prevents heat loss and ice dams. Charlotte homes need R-38 to R-60 in attics.' },
  { task: 'Test sump pump and drainage', detail: 'Ensure all drainage systems work properly before winter rain and potential ice events.' },
];

const winterTasks = [
  { task: 'Watch for ice dams', detail: 'Though rare in Charlotte, ice dams can form during cold snaps. Look for icicles at eave edges.' },
  { task: 'Check attic temperature', detail: 'Attic should be close to outside temperature. Warm attics cause ice dams and accelerate shingle aging.' },
  { task: 'Monitor for active leaks', detail: 'After rain or ice events, check ceilings and attic for any signs of water intrusion.' },
  { task: 'Keep gutters clear', detail: 'Even in winter, debris can block gutters. Blocked gutters during rain cause water to back up under shingles.' },
  { task: 'Remove heavy snow or ice', detail: 'Rare in Charlotte, but if heavy accumulation occurs, use a roof rake from the ground to reduce weight.' },
  { task: 'Document roof condition', detail: 'Take photos from the ground for comparison year over year. Note any changes in appearance.' },
];

const diyVsPro = [
  {
    category: 'DIY Safe',
    items: [
      'Visual inspection from the ground with binoculars',
      'Cleaning gutters (single-story homes with stable ladder)',
      'Checking attic for water stains or daylight',
      'Monitoring energy bills for changes',
      'Trimming small tree branches away from roof',
      'Documenting roof condition with photos',
    ],
  },
  {
    category: 'Call a Professional',
    items: [
      'Walking on the roof for close inspection',
      'Repairing or replacing shingles',
      'Resealing flashing around chimneys and vents',
      'Addressing moss or algae with treatments',
      'Evaluating structural concerns like sagging',
      'Any work on steep or multi-story roofs',
    ],
  },
];

const faqs = [
  {
    question: 'How often should I have my roof professionally inspected in Charlotte?',
    answer:
      'We recommend a professional roof inspection at least once per year, ideally in spring after winter weather has passed. Additionally, schedule an inspection after any significant storm event (hail, high winds, or heavy debris). Homes with roofs over 15 years old benefit from twice-yearly inspections. Professional inspections catch issues invisible from the ground and can save thousands in preventable damage.',
  },
  {
    question: 'How much does roof maintenance cost in Charlotte NC?',
    answer:
      'Basic roof maintenance in Charlotte typically costs $150-$400 per visit, depending on the scope of work. This usually includes inspection, minor repairs, gutter cleaning, and a condition report. Annual maintenance programs that include two visits per year typically cost $250-$500. This investment typically prevents $2,000-$10,000 in avoidable repairs over a roof\'s lifetime.',
  },
  {
    question: 'Is it safe to walk on my roof for maintenance?',
    answer:
      'We strongly advise homeowners not to walk on their roofs. Falls from residential roofs are a leading cause of home injury. Additionally, walking on shingles can cause damage, especially on hot days when asphalt softens or on aged shingles that have become brittle. Use binoculars from the ground or hire a professional with proper safety equipment and insurance.',
  },
  {
    question: 'What are the benefits of professional roof inspections?',
    answer:
      'Professional inspections identify issues invisible from the ground: hairline cracks in flashing, early granule loss patterns, minor lifting at shingle edges, and subtle moisture intrusion in attics. Our certified inspectors use systematic evaluation methods and provide detailed photo reports. Early detection of problems typically costs 5-10 times less to fix than waiting until damage is visible from the ground.',
  },
  {
    question: 'How can I extend the life of my Charlotte roof?',
    answer:
      'The three most impactful steps are: (1) ensure proper attic ventilation, which prevents heat buildup and ice dams; (2) keep gutters clean to prevent water backup under shingles; and (3) schedule annual professional inspections to catch small issues early. Additionally, trimming trees, treating algae promptly, and addressing minor repairs immediately all contribute to maximizing your roof\'s lifespan.',
  },
  {
    question: 'What are the most common roof problems in Charlotte NC?',
    answer:
      'The most common roof issues in Charlotte are: algae and moss growth due to high humidity, wind damage from thunderstorms (May-September), granule loss from UV exposure, flashing failures around chimneys and vents, and clogged gutters from pine needles and deciduous trees. Charlotte\'s combination of heat, humidity, and storms creates a more demanding environment for roofs than many other regions.',
  },
  {
    question: 'How often should I clean my gutters in Charlotte?',
    answer:
      'Charlotte homeowners should clean gutters at least 3-4 times per year: after spring pollen season, mid-summer after storms, during fall leaf drop (often twice in October-November), and after winter. Homes surrounded by pine trees may need monthly cleaning due to constant needle drop. Clogged gutters are the number one preventable cause of roof and fascia damage in the Charlotte area.',
  },
  {
    question: 'Does proper attic ventilation really matter for roof health?',
    answer:
      'Attic ventilation is critical for roof health in Charlotte. In summer, an unventilated attic can reach 150 degrees F or more, cooking shingles from below and reducing their lifespan by 5-8 years. In winter, warm attic air causes moisture condensation on the underside of the roof deck, promoting mold and wood rot. Proper ventilation maintains balanced airflow and can add years to your roof\'s life.',
  },
];

export default function RoofMaintenanceChecklistCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Maintenance Checklist', url: `${SITE_CONFIG.url}/roof-maintenance-checklist-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <WebPageSchema
        name="Roof Maintenance Checklist for Charlotte NC Homeowners"
        description="Seasonal roof maintenance checklist with spring, summer, fall, and winter tasks for Charlotte NC homeowners."
        url={`${SITE_CONFIG.url}/roof-maintenance-checklist-charlotte-nc`}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-maintenance-checklist-charlotte-nc`}
        pageName="Roof Maintenance Checklist Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Roof Maintenance Checklist' },
        ]}
      />

      {/* Hero Section - Educational/Guide Style */}
      <section className="relative bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Roof maintenance checklist for Charlotte NC homeowners"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Homeowner Maintenance Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Maintenance Checklist
              <br className="hidden md:block" />
              <span className="text-emerald-200">Charlotte NC Seasonal Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Keep your Charlotte roof in top condition year-round with this seasonal checklist
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Regular maintenance is the most cost-effective way to extend your roof&apos;s life and prevent
              expensive repairs. This guide covers what to check each season, what you can do yourself,
              and when to call a professional. From our team with {SITE_CONFIG.roofsInstalled}+ roofs installed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/roof-inspection-charlotte-nc"
                variant="primary"
                size="lg"
                className="bg-white !text-emerald-800 hover:bg-emerald-50"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Professional Inspection
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-emerald-800"
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
                <Shield className="w-5 h-5 text-emerald-200" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-200" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Spring Checklist */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                <Leaf className="w-7 h-7 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Spring Maintenance</h2>
                <p className="text-gray">March - May</p>
              </div>
            </div>
            <p className="text-gray text-lg mb-6">
              Spring is the most important season for roof maintenance in Charlotte. Winter storms may have
              caused hidden damage, and rising humidity creates ideal conditions for algae growth. Address
              issues now before summer heat and storms arrive.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {springTasks.map((item) => (
                <div key={item.task} className="bg-green-50 rounded-xl p-5 border border-green-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.task}</h3>
                      <p className="text-gray text-sm">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summer Checklist */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Sun className="w-7 h-7 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Summer Maintenance</h2>
                <p className="text-gray">June - August</p>
              </div>
            </div>
            <p className="text-gray text-lg mb-6">
              Charlotte summers bring intense heat, UV exposure, and severe thunderstorms. Focus on
              ventilation, storm damage response, and preventing heat-related deterioration. Attic
              temperatures can exceed 150 degrees F without proper ventilation.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {summerTasks.map((item) => (
                <div key={item.task} className="bg-yellow-50 rounded-xl p-5 border border-yellow-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.task}</h3>
                      <p className="text-gray text-sm">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fall Checklist */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                <TreePine className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Fall Maintenance</h2>
                <p className="text-gray">September - November</p>
              </div>
            </div>
            <p className="text-gray text-lg mb-6">
              Fall is your last chance to prepare your roof for winter. Charlotte&apos;s abundant tree
              canopy means heavy leaf drop that clogs gutters and traps moisture. Complete repairs and
              sealing before cold weather makes outdoor work difficult.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {fallTasks.map((item) => (
                <div key={item.task} className="bg-orange-50 rounded-xl p-5 border border-orange-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.task}</h3>
                      <p className="text-gray text-sm">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Winter Checklist */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                <Snowflake className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Winter Maintenance</h2>
                <p className="text-gray">December - February</p>
              </div>
            </div>
            <p className="text-gray text-lg mb-6">
              Charlotte winters are generally mild, but occasional ice storms and cold snaps can cause
              damage. Focus on monitoring and documentation during winter months, and address any issues
              as soon as weather permits.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {winterTasks.map((item) => (
                <div key={item.task} className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.task}</h3>
                      <p className="text-gray text-sm">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Want a Professional to Handle Your Roof Maintenance?
              </h2>
              <p className="text-white/90">
                Our certified team provides thorough inspections and maintenance for Charlotte homeowners.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Maintenance
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-accent hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DIY vs Professional */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Wrench className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Safety Guide</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                DIY vs. Professional Maintenance
              </h2>
              <p className="text-gray text-lg">
                Some maintenance tasks are safe for homeowners, while others require professional
                training, safety equipment, and insurance. Here is how to know the difference.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {diyVsPro.map((section) => (
                <div
                  key={section.category}
                  className={`rounded-xl p-6 shadow-md border-t-4 ${
                    section.category === 'DIY Safe'
                      ? 'bg-green-50 border-green-500'
                      : 'bg-blue-50 border-blue-500'
                  }`}
                >
                  <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                    {section.category === 'DIY Safe' ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <Users className="w-6 h-6 text-blue-500" />
                    )}
                    {section.category}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray text-sm">
                        <ArrowRight
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            section.category === 'DIY Safe' ? 'text-green-500' : 'text-blue-500'
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-dark mb-1">Safety Warning</p>
                  <p className="text-gray text-sm">
                    Falls from residential roofs cause thousands of injuries each year. Never walk on a wet,
                    icy, or steep roof. Do not use a ladder in windy conditions. When in doubt, call a
                    licensed, insured professional. Your safety is worth more than any repair.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte Climate Considerations */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <ThermometerSun className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Local Climate Factors</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Charlotte Climate Considerations
              </h2>
              <p className="text-gray text-lg">
                Charlotte&apos;s climate creates specific maintenance demands that differ from other regions.
                Understanding these factors helps you prioritize your maintenance efforts.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-dark mb-2">High Humidity (Year-Round)</h3>
                <p className="text-gray text-sm">
                  Charlotte averages 70-80% humidity, promoting algae, moss, and mold growth on roofs.
                  North-facing slopes are especially vulnerable. Regular inspection and treatment prevent
                  moisture-related damage from shortening your roof&apos;s lifespan.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <CloudRain className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-dark mb-2">Severe Storms (May - Sept)</h3>
                <p className="text-gray text-sm">
                  Charlotte experiences 40-50 thunderstorm days per year with high winds, hail, and
                  heavy rain. Post-storm inspections are essential. Even small hail can create damage
                  that leads to leaks months later if not addressed.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Wind className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-dark mb-2">Ice Storms (Dec - Feb)</h3>
                <p className="text-gray text-sm">
                  While less common than in northern states, Charlotte experiences occasional ice storms
                  that can damage shingles, break branches onto roofs, and create ice dams at eaves.
                  Proper attic insulation is your best defense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roof Maintenance FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions Charlotte homeowners ask about roof maintenance.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Related Resources</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: 'Free Roof Inspection', href: '/roof-inspection-charlotte-nc', desc: 'Professional assessment with photo report' },
                { title: 'Signs You Need a New Roof', href: '/signs-you-need-new-roof-charlotte-nc', desc: '10 warning signs to watch for' },
                { title: 'Roof Repair Services', href: '/services/roof-repair', desc: 'Fix damage before it spreads' },
                { title: 'Storm Damage', href: '/services/storm-damage', desc: 'Emergency repair and insurance help' },
                { title: 'Roofing Handbook', href: '/charlotte-roofing-handbook', desc: 'Complete homeowner guide' },
                { title: 'Spring Inspection', href: '/spring-roof-inspection-charlotte-nc', desc: 'Post-winter checkup guide' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-dark group-hover:text-primary transition-colors mb-1">
                    {link.title}
                  </h3>
                  <p className="text-gray text-sm">{link.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="service"
        city="Charlotte"
        slug="roof-maintenance-checklist-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects by Best Roofing Now across the Charlotte metro area."
        schemaPageUrl={`${SITE_CONFIG.url}/roof-maintenance-checklist-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roof Maintenance"
      />

      <CTASection
        title="Ready for a Professional Roof Maintenance Check?"
        subtitle="Our certified inspectors provide thorough evaluations with detailed photo reports. Keep your Charlotte roof in peak condition with regular professional maintenance."
      />
    </>
  );
}
