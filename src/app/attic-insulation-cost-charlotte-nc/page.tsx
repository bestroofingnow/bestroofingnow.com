import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Thermometer,
  ThermometerSun,
  Home,
  Shield,
  Gauge,
  Zap,
  Layers,
  Wind,
  Droplets,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ArticleSchema,
  ServiceSchema,
  AISearchOptimizationBundle,
} from '@/components/seo/SchemaMarkup';
import { CitationSection } from '@/components/seo/CitationBlock';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Attic Insulation Cost Charlotte NC | $1.50-$7/sqft (2026 Prices)',
  description:
    'How much does attic insulation cost in Charlotte NC? Blown-in $1.50-3.50/sqft, batt $1-2.50/sqft, spray foam $3-7/sqft. R-38 minimum code requirement. Save 15-25% on energy bills. Free estimates from Best Roofing Now.',
  keywords: [
    'attic insulation cost',
    'attic insulation charlotte nc',
    'insulation cost per square foot',
    'blown-in insulation cost charlotte',
    'spray foam insulation charlotte nc',
    'batt insulation cost',
    'attic insulation R-value charlotte',
    'insulation installation charlotte nc',
    'home insulation cost charlotte',
    'attic insulation upgrade charlotte',
    'energy efficient insulation charlotte nc',
    'insulation contractor charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/attic-insulation-cost-charlotte-nc`,
  },
  openGraph: {
    title: 'Attic Insulation Cost Charlotte NC | Complete 2026 Pricing Guide',
    description:
      'Blown-in $1.50-3.50/sqft, batt $1-2.50/sqft, spray foam $3-7/sqft. Charlotte homes need R-38 minimum. Save 15-25% on heating and cooling. Free insulation estimates.',
    url: `${SITE_CONFIG.url}/attic-insulation-cost-charlotte-nc`,
    type: 'article',
  },
};

// Insulation type cost data
const insulationTypes = [
  {
    name: 'Blown-In (Loose-Fill)',
    icon: Wind,
    material: 'Fiberglass or cellulose',
    costRange: '$1.50 - $3.50',
    rValue: 'R-2.2 to R-3.8 per inch',
    depthNeeded: '10-16 inches for R-38',
    bestFor: 'Existing attics, irregular joist spacing, topping off old insulation',
    pros: [
      'Most cost-effective option for existing attics',
      'Fills gaps and irregular spaces evenly',
      'Quick installation (1,500 sqft in 2-4 hours)',
      'No vapor barrier needed with proper ventilation',
    ],
    cons: [
      'Settles 10-15% over time, reducing R-value',
      'Can shift with air movement if not dense-packed',
      'Less effective in extreme heat than spray foam',
    ],
    typicalProject: '$1,800 - $4,200',
  },
  {
    name: 'Batt (Rolls)',
    icon: Layers,
    material: 'Fiberglass or mineral wool',
    costRange: '$1.00 - $2.50',
    rValue: 'R-3.0 to R-3.7 per inch',
    depthNeeded: '10-13 inches for R-38',
    bestFor: 'New construction, open attics with standard joist spacing',
    pros: [
      'Lowest material cost per square foot',
      'DIY-friendly for accessible attics',
      'Consistent R-value when properly installed',
      'Available in pre-cut widths for standard framing',
    ],
    cons: [
      'Gaps around obstacles reduce effectiveness 25-40%',
      'Requires precise cutting around wiring and pipes',
      'Compressed batts lose R-value significantly',
    ],
    typicalProject: '$1,200 - $3,000',
  },
  {
    name: 'Spray Foam (Open-Cell)',
    icon: Shield,
    material: 'Polyurethane foam',
    costRange: '$3.00 - $5.00',
    rValue: 'R-3.5 to R-3.7 per inch',
    depthNeeded: '10-11 inches for R-38',
    bestFor: 'Air sealing + insulation in one step, cathedral ceilings',
    pros: [
      'Excellent air sealing eliminates drafts',
      'Does not settle or lose R-value over time',
      'Doubles as vapor retarder',
      'Ideal for hard-to-reach areas',
    ],
    cons: [
      'Higher upfront cost than blown-in or batt',
      'Requires professional installation',
      'Must be covered with thermal barrier in living spaces',
    ],
    typicalProject: '$3,600 - $6,000',
  },
  {
    name: 'Spray Foam (Closed-Cell)',
    icon: Shield,
    material: 'High-density polyurethane foam',
    costRange: '$5.00 - $7.00',
    rValue: 'R-6.0 to R-7.0 per inch',
    depthNeeded: '5.5-6.5 inches for R-38',
    bestFor: 'Maximum performance, limited space, moisture-prone attics',
    pros: [
      'Highest R-value per inch of any insulation',
      'Complete air and moisture barrier',
      'Adds structural rigidity to roof deck',
      'Best long-term energy savings',
    ],
    cons: [
      'Most expensive option upfront',
      'Requires professional installation with specialized equipment',
      'Off-gassing during curing requires vacating home 24-48 hours',
    ],
    typicalProject: '$6,000 - $8,400',
  },
];

// Signs you need new insulation
const warningSignsData = [
  {
    icon: ThermometerSun,
    title: 'Uneven Temperatures',
    description: 'Some rooms are significantly hotter or colder than others, especially upstairs.',
  },
  {
    icon: DollarSign,
    title: 'Rising Energy Bills',
    description: 'Heating and cooling costs climbing 10-20% year over year without rate increases.',
  },
  {
    icon: Droplets,
    title: 'Ice Dams in Winter',
    description: 'Ice forming at roof edges indicates heat escaping through poor attic insulation.',
  },
  {
    icon: Gauge,
    title: 'Attic Over 130F in Summer',
    description: 'Charlotte attics should stay below 120F with proper insulation and ventilation.',
  },
  {
    icon: Home,
    title: 'Home Built Before 2000',
    description: 'Older Charlotte homes often have R-19 or less, well below current R-38 code minimum.',
  },
  {
    icon: AlertTriangle,
    title: 'Visible Deterioration',
    description: 'Insulation that is compressed, wet, moldy, or has pest damage loses most of its R-value.',
  },
];

// R-value requirements
const rValueData = [
  { label: 'NC Building Code Minimum', value: 'R-38', note: 'Required for all new construction and major renovations' },
  { label: 'ENERGY STAR Recommended', value: 'R-49', note: 'Optimal for Charlotte\'s climate zone (Zone 4)' },
  { label: 'Typical Pre-2000 Charlotte Home', value: 'R-11 to R-19', note: 'Significantly below current standards' },
  { label: 'Department of Energy Target', value: 'R-38 to R-60', note: 'For maximum energy efficiency in Zone 4' },
];

// FAQs
const insulationFAQs = [
  {
    question: 'How much does attic insulation cost in Charlotte NC?',
    answer:
      'Attic insulation in Charlotte NC costs $1.00-$7.00 per square foot depending on the type. Blown-in fiberglass or cellulose costs $1.50-$3.50/sqft, fiberglass batt runs $1.00-$2.50/sqft, open-cell spray foam costs $3.00-$5.00/sqft, and closed-cell spray foam is $5.00-$7.00/sqft. For a typical 1,200 square foot Charlotte attic, total project costs range from $1,200 for basic batt installation to $8,400 for closed-cell spray foam.',
  },
  {
    question: 'What R-value insulation do I need in Charlotte NC?',
    answer:
      'Charlotte NC is in Climate Zone 4, which requires a minimum of R-38 attic insulation per the North Carolina building code. The Department of Energy and ENERGY STAR recommend R-49 for optimal energy efficiency. Most Charlotte homes built before 2000 have only R-11 to R-19, meaning they need significant upgrades. Achieving R-38 requires approximately 10-16 inches of blown-in insulation or 10-13 inches of fiberglass batts.',
  },
  {
    question: 'How much can I save on energy bills with new attic insulation?',
    answer:
      'Upgrading attic insulation in a Charlotte home typically saves 15-25% on annual heating and cooling costs. For the average Charlotte homeowner spending $2,400/year on energy, that translates to $360-$600 in annual savings. Homes upgrading from R-11 to R-49 see the highest savings. Most insulation upgrades pay for themselves within 3-5 years through reduced energy bills.',
  },
  {
    question: 'Is blown-in or spray foam insulation better for Charlotte attics?',
    answer:
      'Both work well in Charlotte\'s humid subtropical climate, but they serve different needs. Blown-in insulation is the best value for most Charlotte attics, costing 50-70% less than spray foam while providing adequate R-value. Spray foam is better when you need air sealing and insulation combined, have moisture problems, or have limited space. For most Charlotte homeowners, blown-in cellulose or fiberglass at R-49 provides the best return on investment.',
  },
  {
    question: 'Does attic insulation affect my roof\'s lifespan?',
    answer:
      'Yes, proper attic insulation significantly impacts roof longevity. In Charlotte\'s climate, inadequate insulation causes heat buildup that degrades shingles from underneath, potentially reducing roof life by 5-10 years. In winter, poor insulation allows warm air to heat the roof deck unevenly, causing ice dams that damage shingles and flashing. Proper insulation paired with ventilation keeps attic temperatures stable and can extend your roof\'s lifespan by 20-30%.',
  },
  {
    question: 'How long does attic insulation installation take in Charlotte?',
    answer:
      'Most attic insulation projects in Charlotte take 1 day to complete. Blown-in insulation for a 1,200-1,500 sqft attic typically takes 3-5 hours. Batt insulation takes 4-8 hours depending on attic accessibility. Spray foam requires 1 full day for application plus 24-48 hours of curing time before the home can be reoccupied. Best Roofing Now schedules most insulation projects for morning installation with same-day completion.',
  },
];

// Citation data for AI search optimization
const insulationCitations = [
  {
    topic: 'attic insulation cost Charlotte NC 2026',
    content:
      'Attic insulation in Charlotte NC costs $1.00 to $7.00 per square foot installed in 2026, depending on the insulation type. Blown-in fiberglass or cellulose runs $1.50-$3.50 per square foot, fiberglass batt insulation costs $1.00-$2.50, open-cell spray foam is $3.00-$5.00, and closed-cell spray foam ranges from $5.00-$7.00. A typical 1,200 sqft Charlotte attic insulation project costs between $1,200 and $8,400 total.',
  },
  {
    topic: 'insulation R-value requirements Charlotte NC',
    content:
      'Charlotte NC is located in Climate Zone 4, requiring a minimum R-38 attic insulation per North Carolina building code. ENERGY STAR recommends R-49 for optimal energy performance. Most Charlotte homes built before 2000 have only R-11 to R-19, well below current standards. Upgrading to R-38 or R-49 typically saves homeowners 15-25% on annual heating and cooling costs.',
  },
  {
    topic: 'best attic insulation type Charlotte NC',
    content:
      'For most Charlotte NC attics, blown-in cellulose or fiberglass insulation provides the best cost-to-performance ratio at $1.50-$3.50 per square foot. Charlotte\'s humid subtropical climate makes proper insulation critical for controlling summer heat gain and winter heat loss. Spray foam is recommended for attics with air sealing needs or moisture issues, while batt insulation is most cost-effective for new construction with standard framing.',
  },
  {
    topic: 'attic insulation energy savings Charlotte',
    content:
      'Charlotte homeowners who upgrade attic insulation from R-19 to R-49 typically save 15-25% on annual heating and cooling bills. For the average Charlotte home spending $2,400 per year on energy, this represents $360-$600 in annual savings. The EPA estimates that proper insulation and air sealing can reduce total home energy use by up to 15%, with attic insulation providing the single largest improvement per dollar spent.',
  },
];

export default function AtticInsulationCostCharlottePage() {
  const pageUrl = `${SITE_CONFIG.url}/attic-insulation-cost-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Attic Insulation Cost Charlotte NC | Complete 2026 Pricing Guide"
        description="How much does attic insulation cost in Charlotte NC? Complete pricing by type with R-value requirements and energy savings data."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Attic Insulation Cost Charlotte NC', url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Attic Insulation Cost Charlotte NC', url: pageUrl },
        ]}
      />
      <ArticleSchema
        post={{
          title: 'Attic Insulation Cost Charlotte NC: Complete 2026 Pricing Guide',
          description: 'How much attic insulation costs in Charlotte NC by type, R-value requirements, energy savings, and how insulation protects your roof.',
          slug: 'attic-insulation-cost-charlotte-nc',
          datePublished: '2026-03-26',
          dateModified: '2026-03-26',
        }}
      />
      <ServiceSchema
        service={{
          title: 'Attic Insulation Installation Charlotte NC',
          description: 'Professional attic insulation installation in Charlotte NC. Blown-in, batt, and spray foam options. R-38 to R-49 upgrades for maximum energy savings.',
          slug: 'attic-insulation-cost-charlotte-nc',
        }}
      />
      <FAQSchema faqs={insulationFAQs} />
      <AISearchOptimizationBundle
        pageUrl={pageUrl}
        pageName="Attic Insulation Cost Charlotte NC"
        faqs={insulationFAQs}
        includeVoiceActions={true}
        city="Charlotte"
        skipFAQ={true}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={IMAGES.hero.hero8}
            alt="Charlotte attic insulation installation by roofing professional"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[{ label: 'Attic Insulation Cost Charlotte NC' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Thermometer className="w-4 h-4" />
              <span>2026 Charlotte Pricing Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Attic Insulation Cost in Charlotte NC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              $1.00 - $7.00 Per Square Foot | Save 15-25% on Energy Bills
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Charlotte&apos;s humid subtropical climate demands proper attic insulation.
              Whether you need blown-in, batt, or spray foam, here&apos;s exactly what
              it costs and which type delivers the best ROI for your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                Free Insulation Estimate
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
              <p className="text-3xl font-bold text-primary">$1-$7</p>
              <p className="text-gray text-sm">Cost Per Square Foot</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">R-38</p>
              <p className="text-gray text-sm">NC Code Minimum</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">15-25%</p>
              <p className="text-gray text-sm">Energy Bill Savings</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">3-5 yr</p>
              <p className="text-gray text-sm">Typical ROI Payback</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              How Much Does Attic Insulation Cost in Charlotte NC?
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Attic insulation is the single most cost-effective energy upgrade for Charlotte
                homeowners. With summer temperatures regularly exceeding 95&deg;F and winter lows
                dipping into the 20s, your attic insulation is the primary barrier between
                comfortable indoor temperatures and extreme outdoor conditions.
              </p>
              <p>
                The cost of attic insulation in Charlotte NC ranges from <strong>$1.00 to $7.00
                per square foot</strong> depending on the insulation type, with most homeowners
                spending <strong>$1,500 to $5,000</strong> for a complete attic insulation
                project. The right choice depends on your existing insulation level, attic
                accessibility, moisture conditions, and budget.
              </p>
              <p>
                Charlotte sits in <strong>Climate Zone 4</strong>, which requires a minimum of
                R-38 attic insulation per the North Carolina building code. However, the Department
                of Energy recommends <strong>R-49 for optimal energy efficiency</strong> in this
                zone. Most Charlotte homes built before 2000 have only R-11 to R-19 &mdash;
                less than half what current codes require.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insulation Type Cost Breakdown */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Attic Insulation Cost by Type
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Compare pricing, R-values, and best applications for each insulation type
              available in Charlotte NC.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {insulationTypes.map((type, index) => (
              <div key={index} className="card hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <type.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark">{type.name}</h3>
                    <p className="text-sm text-gray">{type.material}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-primary/5 rounded-lg p-3">
                    <p className="text-xs text-gray uppercase tracking-wide">Cost Per Sqft</p>
                    <p className="text-lg font-bold text-primary">{type.costRange}</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-3">
                    <p className="text-xs text-gray uppercase tracking-wide">Typical Project</p>
                    <p className="text-lg font-bold text-primary">{type.typicalProject}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray">
                    <strong>R-Value:</strong> {type.rValue}
                  </p>
                  <p className="text-sm text-gray">
                    <strong>Depth for R-38:</strong> {type.depthNeeded}
                  </p>
                  <p className="text-sm text-gray">
                    <strong>Best For:</strong> {type.bestFor}
                  </p>
                </div>

                <div className="space-y-2 mb-3">
                  {type.pros.map((pro, proIndex) => (
                    <div key={proIndex} className="flex items-start gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {type.cons.map((con, conIndex) => (
                    <div key={conIndex} className="flex items-start gap-2 text-sm text-gray">
                      <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray mb-4">Not sure which insulation type is right for your Charlotte home?</p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn btn-primary"
            >
              <Phone className="w-5 h-5" />
              Get Free Insulation Assessment
            </a>
          </div>
        </div>
      </section>

      {/* R-Value Requirements */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              R-Value Requirements for Charlotte NC (Climate Zone 4)
            </h2>
            <p className="text-gray text-lg text-center mb-8 max-w-2xl mx-auto">
              R-value measures insulation&apos;s resistance to heat flow. Higher numbers mean
              better insulation performance.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {rValueData.map((item, index) => (
                <div key={index} className="card hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">{item.value}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.label}</h3>
                      <p className="text-gray text-sm">{item.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-primary/5 rounded-xl p-8">
              <h3 className="text-xl font-bold text-primary mb-4">What This Means for Charlotte Homeowners</h3>
              <p className="text-gray mb-4">
                Charlotte&apos;s position in <strong>Climate Zone 4</strong> means your attic faces
                both extreme summer heat (attic temperatures can reach 150&deg;F) and significant
                winter heat loss. The R-38 minimum is a floor, not a target &mdash; upgrading to
                R-49 typically costs only 15-25% more but delivers substantially better performance.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <Thermometer className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-bold text-dark">Summer</p>
                  <p className="text-sm text-gray">Attics reach 150&deg;F without proper insulation</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-bold text-dark">Energy Impact</p>
                  <p className="text-sm text-gray">40% of home energy loss occurs through the attic</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-bold text-dark">Savings</p>
                  <p className="text-sm text-gray">R-49 saves $360-$600/year vs. R-19</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Savings Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Energy Savings &amp; ROI for Charlotte Homeowners
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <Zap className="w-8 h-8 mx-auto mb-3 text-accent" />
                <p className="text-2xl font-bold mb-2">15-25%</p>
                <p className="text-white/80 text-sm">Annual Energy Bill Savings</p>
                <p className="text-white/60 text-xs mt-2">$360-$600/year for avg Charlotte home</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-3 text-accent" />
                <p className="text-2xl font-bold mb-2">3-5 Years</p>
                <p className="text-white/80 text-sm">Typical Payback Period</p>
                <p className="text-white/60 text-xs mt-2">Blown-in pays back fastest</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <Home className="w-8 h-8 mx-auto mb-3 text-accent" />
                <p className="text-2xl font-bold mb-2">$2,500+</p>
                <p className="text-white/80 text-sm">Added Home Value</p>
                <p className="text-white/60 text-xs mt-2">Energy-efficient homes sell faster</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-bold mb-4 text-center">Charlotte-Specific Savings Breakdown</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Summer Cooling Savings</h4>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>Charlotte averages 90+ days above 85&deg;F</li>
                    <li>Poor insulation forces AC to run 30-40% longer</li>
                    <li>Proper insulation reduces cooling load by 20-30%</li>
                    <li>Typical summer savings: $200-$350/season</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Winter Heating Savings</h4>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>Charlotte has 3,200 heating degree days annually</li>
                    <li>40% of heat loss occurs through the attic</li>
                    <li>R-49 reduces heat loss by 60% vs. R-19</li>
                    <li>Typical winter savings: $150-$250/season</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insulation & Roofing Connection */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              How Attic Insulation Protects Your Roof
            </h2>
            <div className="prose prose-lg max-w-none text-gray mb-8">
              <p>
                Attic insulation and roofing performance are directly connected. Proper insulation
                does not just save energy &mdash; it extends your roof&apos;s lifespan and prevents
                expensive damage that many Charlotte homeowners overlook.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ThermometerSun className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">Prevents Shingle Overheating</h3>
                    <p className="text-gray text-sm">
                      Without adequate insulation, heat radiates through the roof deck, baking
                      shingles from both sides. This accelerates granule loss and can reduce shingle
                      life by 5-10 years in Charlotte&apos;s hot summers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">Stops Ice Dam Formation</h3>
                    <p className="text-gray text-sm">
                      Poor insulation allows heat to escape, warming the roof deck unevenly. During
                      Charlotte&apos;s occasional freezing weather, this causes snow melt that
                      refreezes at the eaves, creating damaging ice dams.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wind className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">Supports Proper Ventilation</h3>
                    <p className="text-gray text-sm">
                      Insulation works with your roof&apos;s ventilation system. Properly installed
                      insulation maintains baffles at the soffit vents, ensuring continuous airflow
                      that removes moisture and regulates attic temperature.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">Extends Roof Lifespan 20-30%</h3>
                    <p className="text-gray text-sm">
                      A properly insulated attic keeps roof deck temperatures stable, reducing
                      thermal cycling that causes materials to expand and contract. This can add
                      5-8 years to your roof&apos;s effective lifespan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              6 Signs Your Charlotte Home Needs New Attic Insulation
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              If you notice any of these warning signs, your attic insulation may be
              underperforming or deteriorated.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSignsData.map((sign, index) => (
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
              Get Free Attic Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <CitationSection
              heading="Attic Insulation Facts for Charlotte NC Homeowners"
              citations={insulationCitations}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Frequently Asked Questions About Attic Insulation Cost in Charlotte
            </h2>
            <div className="space-y-4">
              {insulationFAQs.map((faq, index) => (
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
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Related Resources for Charlotte Homeowners
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/attic-moisture-control-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Attic Moisture Control Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  How proper ventilation and insulation work together to prevent mold and ice dams.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/ice-dam-prevention-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Ice Dam Prevention Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  How insulation upgrades prevent costly ice dam damage during Charlotte winters.
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
                  Professional roof repair services including damage caused by inadequate insulation.
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
                  Comprehensive inspection includes attic insulation assessment and R-value testing.
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
        slug="attic-insulation-cost-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/attic-insulation-cost-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Attic Insulation"
      />

      <CTASection
        title="Ready to Upgrade Your Charlotte Home's Attic Insulation?"
        subtitle="Get a free insulation assessment from Best Roofing Now. We'll measure your current R-value, recommend the right insulation type, and provide an honest quote - no pressure, no obligation."
      />
    </>
  );
}
