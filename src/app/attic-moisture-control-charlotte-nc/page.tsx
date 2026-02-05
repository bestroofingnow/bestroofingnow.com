import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Droplets,
  Wind,
  ThermometerSun,
  Home,
  Shield,
  Gauge,
  Calendar,
  DollarSign,
  Thermometer,
  CloudRain,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ArticleSchema,
  AISearchOptimizationBundle,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'Attic Moisture Control Charlotte NC | Prevent Mold',
  description:
    'How to control attic moisture in Charlotte NC homes. Prevent mold growth, ice dams, and roof damage caused by humidity. Expert ventilation solutions from Best Roofing Now. Free inspections.',
  keywords: [
    'attic moisture control Charlotte NC',
    'Charlotte attic humidity problems',
    'prevent mold in attic Charlotte',
    'attic ventilation Charlotte NC',
    'ice dam prevention Charlotte',
    'Charlotte humidity roof damage',
    'attic condensation Charlotte homes',
    'ridge vent installation Charlotte',
    'soffit vent repair Charlotte NC',
    'attic moisture inspection Charlotte',
    'mold prevention Charlotte roofing',
    'Charlotte subtropical climate roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/attic-moisture-control-charlotte-nc`,
  },
  openGraph: {
    title: 'Attic Moisture Control Charlotte NC | Stop Mold & Ice Dams Before They Start',
    description:
      'Charlotte\'s humid climate creates unique attic moisture challenges. Learn how proper ventilation prevents summer mold AND winter ice dams. Free attic inspections.',
    url: `${SITE_CONFIG.url}/attic-moisture-control-charlotte-nc`,
    type: 'article',
  },
};

// Moisture control FAQs
const moistureFAQs = [
  {
    question: 'Why do Charlotte homes have attic moisture problems?',
    answer:
      'Charlotte\'s subtropical climate averages 60-75% humidity year-round. This moisture enters attics through bathroom vents, cooking, and natural air infiltration. Without proper ventilation, moisture gets trapped, leading to condensation on roof decking in winter and mold growth in summer. Charlotte homes built before 2000 often have inadequate ventilation by today\'s standards.',
  },
  {
    question: 'How does attic moisture cause ice dams in Charlotte?',
    answer:
      'When warm, moist air from your living space rises into a poorly ventilated attic, it heats the roof deck unevenly. During Charlotte\'s occasional freezing weather, this melts snow on warmer sections while it refreezes at the colder eaves, creating ice dams. Proper attic ventilation keeps the roof temperature uniform, preventing this cycle.',
  },
  {
    question: 'What humidity level should my Charlotte attic maintain?',
    answer:
      'Your attic humidity should stay below 50% relative humidity year-round. In Charlotte\'s humid climate, achieving this requires balanced ventilation with adequate soffit intake and ridge exhaust. A properly ventilated Charlotte attic will have 1 square foot of ventilation for every 150 square feet of attic floor space.',
  },
  {
    question: 'How do I know if my Charlotte home has attic moisture problems?',
    answer:
      'Signs include: musty odors when entering the attic, visible condensation or frost on roof sheathing in winter, dark staining on rafters or decking, peeling paint on exterior soffits, unusually high summer cooling bills (10-15% higher than neighbors), and mold spots on attic insulation or wood surfaces.',
  },
  {
    question: 'Can attic moisture damage my roof in Charlotte?',
    answer:
      'Yes, chronic moisture causes serious roof damage. It rots roof decking and rafters, promotes mold growth that affects indoor air quality, causes shingles to fail prematurely from underneath, and leads to expensive repairs. Charlotte\'s combination of humidity and temperature swings makes this damage progress faster than in drier climates.',
  },
  {
    question: 'How much does attic ventilation improvement cost in Charlotte?',
    answer:
      'Basic ventilation improvements (adding soffit or ridge vents) typically cost $500-$1,500 in Charlotte. Comprehensive solutions including powered ventilation, vapor barriers, and insulation upgrades range from $2,000-$5,000. However, these investments typically reduce cooling costs 10-15% annually and prevent thousands in moisture damage repairs.',
  },
];

// Warning signs
const warningSigns = [
  {
    icon: Droplets,
    title: 'Visible Condensation',
    description: 'Water droplets or frost on roof sheathing, especially in winter mornings.',
  },
  {
    icon: Wind,
    title: 'Musty Odors',
    description: 'Mold or mildew smell when entering the attic, particularly in humid summer months.',
  },
  {
    icon: ThermometerSun,
    title: 'High Cooling Bills',
    description: 'Summer energy costs 10-15% higher than similar Charlotte homes nearby.',
  },
  {
    icon: Home,
    title: 'Peeling Paint',
    description: 'Exterior paint peeling near soffits or roofline indicates moisture escaping.',
  },
  {
    icon: AlertTriangle,
    title: 'Dark Staining',
    description: 'Black or dark spots on rafters, decking, or insulation from mold growth.',
  },
  {
    icon: Gauge,
    title: 'Soft Roof Spots',
    description: 'Spongy feeling when walking on roof - indicates rotting decking underneath.',
  },
];

// Ventilation solutions
const ventilationSolutions = [
  {
    title: 'Ridge Vent Installation',
    description: 'Continuous ventilation along the roof peak allows hot, moist air to escape naturally.',
    benefit: 'Most effective exhaust method for Charlotte homes',
  },
  {
    title: 'Soffit Vent Repair/Addition',
    description: 'Intake vents under the eaves draw fresh air into the attic, creating airflow.',
    benefit: 'Critical for balanced ventilation system',
  },
  {
    title: 'Powered Attic Ventilators',
    description: 'Solar or electric fans actively remove hot, humid air during peak conditions.',
    benefit: 'Ideal for Charlotte\'s extreme summer humidity',
  },
  {
    title: 'Vapor Barrier Installation',
    description: 'Prevents moisture from living spaces from entering the attic.',
    benefit: 'Reduces moisture load by up to 70%',
  },
  {
    title: 'Insulation Upgrades',
    description: 'Proper insulation keeps conditioned air in living spaces, reducing attic moisture.',
    benefit: 'Improves energy efficiency and moisture control',
  },
  {
    title: 'Bathroom Vent Correction',
    description: 'Ensures bathroom exhaust vents terminate outside, not into the attic.',
    benefit: 'Eliminates major moisture source',
  },
];

// Seasonal calendar
const seasonalCalendar = [
  {
    season: 'Spring',
    icon: CloudRain,
    tasks: [
      'Inspect for winter moisture damage',
      'Check for mold growth as temperatures rise',
      'Clear debris from soffit vents',
      'Test attic humidity levels',
    ],
  },
  {
    season: 'Summer',
    icon: ThermometerSun,
    tasks: [
      'Monitor attic temperature (should be <120F)',
      'Check for mold in humid conditions',
      'Ensure powered vents are functioning',
      'Verify bathroom vents terminate outside',
    ],
  },
  {
    season: 'Fall',
    icon: Wind,
    tasks: [
      'Clear leaves from soffit vents',
      'Inspect ridge vents for blockages',
      'Check insulation depth and condition',
      'Prepare for winter condensation',
    ],
  },
  {
    season: 'Winter',
    icon: Thermometer,
    tasks: [
      'Watch for frost on roof sheathing',
      'Check for ice dam formation',
      'Monitor for condensation drips',
      'Ensure attic stays cold (prevents ice dams)',
    ],
  },
];

// Charlotte neighborhoods prone to moisture issues
const charlotteNeighborhoods = [
  'Myers Park',
  'Dilworth',
  'Plaza Midwood',
  'NoDa',
  'Eastover',
  'Cotswold',
  'South Charlotte',
  'Ballantyne',
  'Matthews',
  'Mint Hill',
  'Lake Norman area',
  'University City',
];

export default function AtticMoistureControlCharlottePage() {
  const pageUrl = `${SITE_CONFIG.url}/attic-moisture-control-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Attic Moisture Control Charlotte NC | Expert Guide to Prevent Mold & Ice Dams"
        description="How to control attic moisture in Charlotte NC. Prevent mold, ice dams, and roof damage from humidity."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Attic Moisture Control Charlotte NC', url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Attic Moisture Control Charlotte NC', url: pageUrl },
        ]}
      />
      <ArticleSchema
        post={{
          title: 'Attic Moisture Control Charlotte NC: Stop Mold & Ice Dams Before They Start',
          description: 'Complete guide to controlling attic moisture in Charlotte\'s humid subtropical climate.',
          slug: 'attic-moisture-control-charlotte-nc',
          datePublished: '2026-01-27',
          dateModified: '2026-01-27',
        }}
      />
      <FAQSchema faqs={moistureFAQs} />
      <AISearchOptimizationBundle
        pageUrl={pageUrl}
        pageName="Attic Moisture Control Charlotte NC"
        faqs={moistureFAQs}
        includeVoiceActions={true}
        city="Charlotte"
        skipFAQ={true}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={IMAGES.hero.hero25}
            alt="Charlotte roofing professional inspecting attic ventilation"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[{ label: 'Attic Moisture Control Charlotte NC' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Droplets className="w-4 h-4" />
              <span>Charlotte Climate Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Attic Moisture Control in Charlotte NC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              How to Prevent Mold &amp; Ice Dams Before They Start
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Charlotte&apos;s humid subtropical climate creates unique challenges for your attic.
              Learn how proper ventilation prevents summer mold growth AND winter ice dams -
              protecting your roof, your home, and your family&apos;s health.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                Free Attic Inspection
              </a>
              <EstimateButton
                className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-light py-8 border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">60-75%</p>
              <p className="text-gray text-sm">Charlotte Avg. Humidity</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">&lt;50%</p>
              <p className="text-gray text-sm">Target Attic Humidity</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">10-15%</p>
              <p className="text-gray text-sm">Energy Bill Savings</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">1:150</p>
              <p className="text-gray text-sm">Ventilation Ratio Needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why Charlotte Homes Face Unique Attic Moisture Challenges
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Charlotte&apos;s humid subtropical climate puts your attic under year-round moisture stress.
                With average humidity levels between 60-75%, moisture constantly enters your attic through
                normal activities like cooking, showering, and even breathing. Without proper ventilation,
                this moisture becomes trapped.
              </p>
              <p>
                <strong>In summer</strong>, trapped humidity creates ideal conditions for mold growth on rafters,
                sheathing, and insulation. Many Charlotte homeowners discover mold problems only after noticing
                musty odors or respiratory issues.
              </p>
              <p>
                <strong>In winter</strong>, the same moisture problem causes different damage. Warm, humid air
                from your living space rises into the attic and condenses on cold roof sheathing. When Charlotte
                experiences freezing temperatures, this moisture contributes to ice dam formation at roof edges -
                a problem that was widespread during the{' '}
                <Link href="/ice-storm-damage-charlotte-nc" className="text-primary hover:text-accent">
                  January 2026 ice storm
                </Link>.
              </p>
              <p>
                The good news: <strong>both problems have the same solution</strong> - proper attic ventilation.
                A well-ventilated attic stays dry in summer and cold in winter, preventing both mold and ice dams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              6 Warning Signs Your Charlotte Attic Has Moisture Problems
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Catch these problems early before they cause expensive damage to your roof and home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((sign, index) => (
              <div key={index} className="card hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <sign.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">{sign.title}</h3>
                    <p className="text-gray text-sm">{sign.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray mb-4">Noticing any of these signs?</p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn btn-primary"
            >
              <Phone className="w-5 h-5" />
              Get Free Attic Inspection
            </a>
          </div>
        </div>
      </section>

      {/* How Ventilation Works */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              How Proper Ventilation Protects Your Charlotte Home
            </h2>
            <div className="bg-primary/5 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">The Science of Attic Ventilation</h3>
              <p className="text-gray mb-4">
                Effective attic ventilation works on a simple principle: <strong>intake at the bottom, exhaust
                at the top</strong>. Cool, dry air enters through soffit vents under the eaves, rises as it
                warms, and carries moisture out through ridge vents at the peak.
              </p>
              <p className="text-gray mb-4">
                For Charlotte homes, the International Residential Code recommends a minimum of{' '}
                <strong>1 square foot of net free ventilation area for every 150 square feet of attic floor</strong>.
                This should be balanced 50/50 between intake (soffit) and exhaust (ridge) vents.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-dark mb-2">Summer Benefits</h4>
                  <ul className="space-y-2 text-sm text-gray">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Removes hot, humid air (up to 150F in Charlotte summers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Reduces cooling costs 10-15%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Prevents mold growth on wood surfaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Extends shingle life by reducing heat stress</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-dark mb-2">Winter Benefits</h4>
                  <ul className="space-y-2 text-sm text-gray">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Keeps attic cold (prevents uneven roof warming)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Prevents ice dam formation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Eliminates condensation on sheathing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Protects insulation effectiveness</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventilation Solutions */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Ventilation Solutions for Charlotte Homes
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Multiple options to address attic moisture, from simple fixes to comprehensive upgrades.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventilationSolutions.map((solution, index) => (
              <div key={index} className="card hover:shadow-lg transition">
                <h3 className="font-bold text-primary mb-2">{solution.title}</h3>
                <p className="text-gray text-sm mb-4">{solution.description}</p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>{solution.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Maintenance Calendar */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Year-Round Attic Maintenance Calendar for Charlotte
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Follow this seasonal schedule to keep your attic dry and protected all year.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalCalendar.map((item, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-primary">{item.season}</h3>
                </div>
                <ul className="space-y-2">
                  {item.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost & ROI Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Investment &amp; Savings: Attic Ventilation ROI
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-3 text-accent" />
                <p className="text-2xl font-bold mb-2">$500 - $1,500</p>
                <p className="text-white/80 text-sm">Basic Ventilation Improvements</p>
                <p className="text-white/60 text-xs mt-2">Soffit or ridge vent additions</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-3 text-accent" />
                <p className="text-2xl font-bold mb-2">$2,000 - $5,000</p>
                <p className="text-white/80 text-sm">Comprehensive Solutions</p>
                <p className="text-white/60 text-xs mt-2">Full ventilation + insulation upgrade</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-3 text-accent" />
                <p className="text-2xl font-bold mb-2">$15,000+</p>
                <p className="text-white/80 text-sm">Prevented Damage Costs</p>
                <p className="text-white/60 text-xs mt-2">Roof replacement, mold remediation</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-bold mb-4 text-center">10-Year Return on Investment</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Annual Savings</h4>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>Energy savings (10-15%): $200-$400/year</li>
                    <li>Extended roof life: $500+/year amortized</li>
                    <li>Avoided repairs: Variable</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Prevented Problems</h4>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>Mold remediation: $3,000-$10,000</li>
                    <li>Roof deck replacement: $5,000-$15,000</li>
                    <li>Ice dam damage: $2,000-$8,000</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte Neighborhoods */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Charlotte Neighborhoods We Serve
            </h2>
            <p className="text-gray mb-8">
              We provide attic moisture inspections and ventilation solutions throughout Charlotte
              and Mecklenburg County. Tree-heavy neighborhoods like Myers Park and Dilworth often
              experience higher moisture issues due to increased shade and humidity.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {charlotteNeighborhoods.map((neighborhood, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-gray text-sm border"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Frequently Asked Questions About Attic Moisture in Charlotte
            </h2>
            <div className="space-y-4">
              {moistureFAQs.map((faq, index) => (
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

      {/* Related Content Links */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Related Resources for Charlotte Homeowners
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/ice-storm-damage-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Ice Storm Damage Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  How the January 2026 ice storm affected Charlotte roofs and what to do about ice dams.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/roof-repair-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Roof Repair Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  Professional roof repair services including moisture damage repairs and emergency service.
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
                  Roof Maintenance Tips Guide
                </h3>
                <p className="text-gray text-sm">
                  Complete guide to maintaining your Charlotte roof including seasonal inspection tips.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/services/roof-inspection"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Professional Roof Inspection
                </h3>
                <p className="text-gray text-sm">
                  Our comprehensive inspection includes attic ventilation assessment and moisture detection.
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
        slug="attic-moisture-control-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/attic-moisture-control-charlotte-nc`}
      />

      {/* CTA Section */}
      <CTASection
        title="Concerned About Attic Moisture in Your Charlotte Home?"
        subtitle="Get a free attic inspection from Best Roofing Now. We'll assess your ventilation, check for moisture damage, and provide honest recommendations - no pressure, no obligation."
      />
    </>
  );
}
