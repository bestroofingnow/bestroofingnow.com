import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CloudRain,
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  FileText,
  Clock,
  AlertTriangle,
  TreePine,
  Wind,
  CloudHail,
  Star,
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { FAQ } from '@/components/sections/FAQ';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ServiceSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair Charlotte NC | Insurance Claim Experts',
  description:
    'Charlotte storm damage roof repair specialists. Expert hail, wind, and fallen tree damage repair. Insurance claim assistance, 24/7 emergency response. Free inspection. Call (704) 605-6047.',
  keywords: [
    'storm damage roof repair charlotte',
    'hail damage roof repair charlotte nc',
    'wind damage roof repair',
    'roof storm damage insurance claim',
    'storm damage roofing contractor charlotte',
    'emergency roof repair charlotte nc',
    'hail damage roofer charlotte',
    'roof repair after storm charlotte',
    'insurance claim roof repair charlotte',
    'wind damage shingles charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/storm-damage-roof-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Storm Damage Roof Repair Charlotte NC | Insurance Claim Experts',
    description:
      'Charlotte storm damage roof repair specialists. Expert hail, wind, and tree damage repair. We handle insurance claims. 24/7 emergency response.',
    url: `${SITE_CONFIG.url}/storm-damage-roof-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.stormDamage,
        width: 1200,
        height: 630,
        alt: 'Storm damage roof repair in Charlotte NC',
      },
    ],
  },
};

// Storm damage FAQs - insurance-focused
const stormFAQs = [
  {
    question: 'How do I know if my roof has storm damage in Charlotte?',
    answer:
      'Common signs of storm damage in Charlotte include: missing or cracked shingles, dents in metal vents or gutters, granules accumulated in gutters or downspouts, soft spots or bruising on shingles (from hail), damaged flashing around chimneys and vents, fallen tree limbs on the roof, and visible daylight through the attic. After any significant storm in Charlotte, we recommend a free professional inspection since much damage is not visible from the ground.',
  },
  {
    question: 'Will my homeowners insurance cover storm damage roof repair in Charlotte?',
    answer:
      'Yes, most homeowners insurance policies in Charlotte cover storm damage including hail, wind, and fallen trees. Storm damage is typically classified as an "Act of God" and covered under your dwelling protection. Your policy will have a deductible (usually $500-$2,500). Best Roofing Now works directly with all major insurance companies and helps maximize your claim settlement.',
  },
  {
    question: 'How soon after a storm should I get my roof inspected?',
    answer:
      'We recommend scheduling a roof inspection within 48 hours of a major storm in Charlotte. Early inspection serves two purposes: it documents damage before it worsens, and most insurance policies require timely reporting (typically within 30 days). After severe storms in Charlotte, we prioritize emergency tarping to prevent further damage, then schedule detailed inspections.',
  },
  {
    question: 'Will filing a storm damage claim raise my insurance premiums?',
    answer:
      'Storm damage claims are generally considered "no-fault" claims since you cannot prevent hail or wind. In most cases, a single storm damage claim will not significantly impact your premiums. However, multiple claims in a short period might. The value of a new roof (often $10,000-$25,000) typically far outweighs any potential premium increase. We provide honest assessments and only recommend filing claims when the damage warrants it.',
  },
  {
    question: 'What is the storm damage roof repair process with insurance?',
    answer:
      'Our Charlotte storm damage repair process includes: 1) Free inspection and damage documentation with photos and measurements, 2) We help you file your claim with complete documentation, 3) We meet with your insurance adjuster on-site to review damage together, 4) Once approved, we complete repairs using premium materials, 5) You pay only your deductible - we collect the rest from insurance. The entire process typically takes 2-4 weeks from inspection to completion.',
  },
  {
    question: 'Can you repair just the damaged section of my roof?',
    answer:
      'Sometimes partial repairs make sense for localized damage. However, if hail or wind damage is widespread across your roof, insurance typically covers full replacement since shingles are damaged uniformly. Partial repairs on extensively damaged roofs often fail because surrounding damaged shingles continue deteriorating. We provide honest assessments and only recommend what is truly needed.',
  },
  {
    question: 'What if my insurance claim is denied or underpaid?',
    answer:
      'Insurance claim denials and underpayments are common in Charlotte. Best Roofing Now helps appeal denied claims by providing additional documentation, photos, and damage evidence. We can also work with public adjusters if needed. Our thorough initial documentation often helps overturn denials. Many homeowners who were initially denied have had claims approved after we supplemented their evidence.',
  },
  {
    question: 'How quickly can you respond to storm damage emergencies in Charlotte?',
    answer:
      'Our emergency storm damage team responds within 1-4 hours depending on conditions and demand after major Charlotte storms. We prioritize active leaks and exposed roof decking to prevent water damage to your home. Emergency tarping and temporary repairs protect your property while permanent repairs are scheduled. Call our 24/7 emergency line: (704) 605-6047.',
  },
];

// Charlotte weather data for content
const charlotteStormStats = {
  hailDaysPerYear: '3-5',
  thunderstormDays: '45-50',
  tornadoRisk: 'Moderate',
  hurricaneRemnants: '1-2 per year',
  avgAnnualRainfall: '43 inches',
  peakStormSeason: 'April through September',
};

// Storm damage service object for schema
const stormDamageService = {
  slug: 'storm-damage-roof-repair-charlotte-nc',
  title: 'Storm Damage Roof Repair Charlotte NC',
  description:
    'Expert storm damage roof repair in Charlotte NC. Hail damage, wind damage, and fallen tree repair. Insurance claim specialists with 24/7 emergency response.',
  keywords: [
    'storm damage roof repair charlotte',
    'hail damage roof repair charlotte nc',
    'wind damage roof repair',
  ],
  priceRange: 'Often covered by insurance',
};

// Before/After showcase data
const projectShowcase = [
  {
    title: 'Hail Damage Replacement - South Charlotte',
    description:
      'Complete roof replacement after golf ball sized hail damaged over 200 shingles. Insurance covered full replacement.',
    image: IMAGES.realProjects.project1,
  },
  {
    title: 'Wind Damage Repair - Huntersville',
    description:
      'High winds lifted ridge caps and edge shingles. Quick repair prevented water intrusion.',
    image: IMAGES.realProjects.drone1,
  },
  {
    title: 'Fallen Tree Damage - Matthews',
    description:
      'Emergency tarping followed by full section replacement. Structural repairs included.',
    image: IMAGES.services.stormDamage,
  },
];

export default function StormDamageRoofRepairCharlottePage() {
  const pageUrl = `${SITE_CONFIG.url}/storm-damage-roof-repair-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Storm Damage Roof Repair Charlotte NC | Insurance Claim Experts"
        description="Expert storm damage roof repair in Charlotte NC. Hail, wind, and tree damage specialists. Insurance claim assistance and 24/7 emergency response."
        url={pageUrl}
        primaryImage={IMAGES.services.stormDamage}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Damage Roof Repair Charlotte', url: pageUrl },
        ]}
      />
      <ServiceSchema service={stormDamageService} />
      <FAQSchema faqs={stormFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Damage Roof Repair Charlotte', url: pageUrl },
        ]}
      />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[
              {
                name: 'Storm Damage Roof Repair Charlotte',
                href: '/storm-damage-roof-repair-charlotte-nc',
              },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.services.stormDamage}
            alt="Storm damage roof repair in Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <AlertTriangle className="w-4 h-4" />
              24/7 Emergency Storm Response
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Storm Damage Roof Repair Charlotte NC
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Charlotte&apos;s trusted storm damage roof repair specialists. Whether hail dented
              your shingles, wind tore off sections, or a tree fell on your roof, we respond fast
              and handle your insurance claim from start to finish. Over 500 Charlotte homes
              restored after storm damage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                className="bg-accent hover:bg-accent-dark"
                icon={<Phone className="w-5 h-5" />}
              >
                Emergency: {SITE_CONFIG.phone}
              </Button>
              <EstimateButton
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Free Storm Damage Inspection
              </EstimateButton>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Insurance Claim Experts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert Banner */}
      <section className="bg-red-600 text-white py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 flex-shrink-0" />
              <span className="font-semibold">
                Recent storm damage? Call our 24/7 emergency line:{' '}
                <a href={`tel:${SITE_CONFIG.phoneClean}`} className="underline">
                  {SITE_CONFIG.phone}
                </a>
              </span>
            </div>
            <Button
              href="/contact"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600"
            >
              Schedule Emergency Repair
            </Button>
          </div>
        </div>
      </section>

      {/* Types of Storm Damage Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Types of Storm Damage We Repair in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Charlotte experiences diverse severe weather including hailstorms, high winds, and
              tropical storm remnants. We specialize in repairing all types of storm damage to
              Charlotte roofs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hail Damage */}
            <div className="bg-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <CloudHail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">
                Hail Damage Roof Repair Charlotte NC
              </h3>
              <p className="text-gray mb-4">
                Charlotte experiences {charlotteStormStats.hailDaysPerYear} significant hail events
                per year. Hail creates dents, cracks, and bruises in shingles that compromise your
                roof&apos;s protection and lead to premature failure.
              </p>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Dented metal vents and flashing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Cracked or bruised shingles
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Granule loss exposing asphalt
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Damaged gutters and downspouts
                </li>
              </ul>
            </div>

            {/* Wind Damage */}
            <div className="bg-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Wind className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Wind Damage Roof Repair</h3>
              <p className="text-gray mb-4">
                Severe thunderstorms bring damaging straight-line winds and occasional tornadoes to
                Charlotte. High winds lift shingles, break seals, and expose your roof deck to water
                infiltration.
              </p>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Missing or blown-off shingles
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Lifted edges and broken seals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Damaged ridge caps and hip shingles
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Exposed underlayment or decking
                </li>
              </ul>
            </div>

            {/* Fallen Trees/Debris */}
            <div className="bg-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <TreePine className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Fallen Tree & Debris Damage</h3>
              <p className="text-gray mb-4">
                Charlotte&apos;s mature tree canopy becomes hazardous during storms. Fallen trees
                and branches cause catastrophic damage requiring emergency response and structural
                repairs.
              </p>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Emergency tarping and board-up
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Structural damage assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Roof decking replacement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Complete restoration services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Claims Process Section */}
      <section className="section bg-primary/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                We Handle Your Insurance Claim from Start to Finish
              </h2>
              <p className="text-gray text-lg mb-8">
                Navigating insurance claims after storm damage can be overwhelming. Best Roofing Now
                has helped hundreds of Charlotte homeowners get fair settlements. We handle the
                entire process so you can focus on your family.
              </p>
              <ol className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Free Storm Damage Inspection',
                    desc: 'We thoroughly document all roof damage with photos, measurements, and detailed reports that insurance companies need.',
                  },
                  {
                    step: 2,
                    title: 'Claim Filing Assistance',
                    desc: 'We help you file your claim correctly with complete documentation for maximum coverage.',
                  },
                  {
                    step: 3,
                    title: 'Insurance Adjuster Meeting',
                    desc: 'We meet with your adjuster on-site to walk through all damage and ensure nothing is missed.',
                  },
                  {
                    step: 4,
                    title: 'Settlement Advocacy',
                    desc: 'If your claim is underpaid or denied, we supplement with additional evidence and fight for fair compensation.',
                  },
                  {
                    step: 5,
                    title: 'Quality Roof Repair',
                    desc: 'Once approved, we complete repairs with premium materials. You pay only your deductible.',
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">{item.title}</h4>
                      <p className="text-gray text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-6">
                What We Document for Your Claim
              </h3>
              <ul className="space-y-4">
                {[
                  'Date-stamped photos of all damage',
                  'Precise measurements of affected areas',
                  'Material identification and specifications',
                  'Detailed written damage assessment',
                  'Repair cost estimates using industry standards',
                  'Evidence correlating damage to storm date',
                  'Supplemental documentation if initially denied',
                  'Comparison photos showing damage patterns',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-accent/5 rounded-lg border border-accent/20">
                <p className="text-sm text-gray">
                  <strong className="text-primary">Insurance Tip:</strong> Charlotte homeowners
                  often leave money on the table by not filing claims. Our thorough documentation
                  has helped many clients get full roof replacements covered when they expected only
                  partial repairs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Emergency Response Section */}
      <section className="section bg-dark text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              24/7 Emergency Storm Damage Response
            </h2>
            <p className="text-xl text-white/80 mb-8">
              When a storm damages your Charlotte roof, every hour counts. Water intrusion can cause
              thousands in additional damage to your ceilings, walls, insulation, and belongings.
              Our emergency team responds day or night to protect your home.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-10">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">1-4 hrs</div>
                <p className="text-white/70">Response Time</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <p className="text-white/70">Emergency Line</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <p className="text-white/70">Homes Restored</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">FREE</div>
                <p className="text-white/70">Inspection</p>
              </div>
            </div>
            <Button
              href={`tel:${SITE_CONFIG.phoneClean}`}
              variant="primary"
              size="lg"
              className="bg-accent hover:bg-accent-dark"
              icon={<Phone className="w-5 h-5" />}
            >
              Call 24/7 Emergency Line: {SITE_CONFIG.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Storm Damage Roof Repairs in Charlotte
            </h2>
            <p className="text-gray text-lg">
              See examples of storm damage repairs we have completed throughout the Charlotte
              metro area. Every project includes insurance claim assistance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projectShowcase.map((project, index) => (
              <div
                key={index}
                className="bg-light rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-dark mb-2">{project.title}</h3>
                  <p className="text-gray text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Charlotte Storm Patterns Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Charlotte Storm Patterns & Roof Damage Risks
            </h2>
            <p className="text-lg text-gray text-center mb-10">
              Understanding Charlotte&apos;s unique weather helps you protect your home and know
              when to schedule roof inspections.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <CloudHail className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-dark mb-2">Hail Season</h3>
                <p className="text-gray text-sm">
                  Charlotte typically sees {charlotteStormStats.hailDaysPerYear} significant
                  hailstorms annually, primarily from March through June. Large hail (1&quot; or
                  greater) causes the most damage and almost always warrants an insurance claim.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <CloudRain className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-dark mb-2">Severe Thunderstorms</h3>
                <p className="text-gray text-sm">
                  The Charlotte metro experiences {charlotteStormStats.thunderstormDays}{' '}
                  thunderstorm days per year. Severe storms bring damaging winds often exceeding 60
                  mph, capable of tearing off shingles and lifting ridge caps.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Wind className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-dark mb-2">Hurricane Season</h3>
                <p className="text-gray text-sm">
                  Hurricane remnants reach Charlotte {charlotteStormStats.hurricaneRemnants},
                  typically August through October. Even weakened systems bring sustained winds and
                  heavy rain that stress aging roofs.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Calendar className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-dark mb-2">Peak Storm Season</h3>
                <p className="text-gray text-sm">
                  {charlotteStormStats.peakStormSeason} brings the highest risk for roof damage in
                  Charlotte. We recommend scheduling a preventive inspection each spring and after
                  any significant storm event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Why Charlotte Homeowners Trust Best Roofing Now for Storm Damage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">24/7 Emergency Response</h3>
              <p className="text-gray text-sm">
                We respond within hours, day or night, to prevent additional damage to your home.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Insurance Experts</h3>
              <p className="text-gray text-sm">
                We handle your entire claim process, meeting with adjusters and fighting for fair
                settlements.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">BBB A+ Rated</h3>
              <p className="text-gray text-sm">
                5.0 Google rating with {SITE_CONFIG.googleReviewCount}+ reviews. Veteran-owned and
                family-operated.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Premium Materials</h3>
              <p className="text-gray text-sm">
                CertainTeed, GAF, and Owens Corning certified installer with manufacturer
                warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={stormFAQs}
        title="Storm Damage Roof Repair FAQ"
        subtitle="Common questions about storm damage repair and insurance claims in Charlotte NC"
      />

      {/* Related Services */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/services/emergency-roofing"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <AlertTriangle className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">
                Emergency Roofing
              </h3>
              <p className="text-gray text-sm">
                24/7 emergency response for active leaks and urgent repairs.
              </p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link
              href="/services/insurance-claims"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <FileText className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">
                Insurance Claims
              </h3>
              <p className="text-gray text-sm">
                Expert assistance with all insurance claim documentation and advocacy.
              </p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link
              href="/services/roof-replacement"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <CloudRain className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Replacement</h3>
              <p className="text-gray text-sm">
                Full roof replacement with premium materials when repair is not enough.
              </p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <DirectoryCitations
              pageType="service"
              maxLinks={3}
              variant="inline"
              title="Verified Business"
            />
            <p className="text-sm text-gray-500">
              Insurance Claim Specialists | Licensed & Insured | BBB A+ Rated
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Storm Damage? Get Your Free Roof Inspection Today"
        subtitle="Fast response, expert assessment, and complete insurance claim support. Most Charlotte homeowners pay only their deductible."
      />
    </>
  );
}
