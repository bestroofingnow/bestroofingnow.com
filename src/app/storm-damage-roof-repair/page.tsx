import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  Shield,
  Star,
  CheckCircle,
  AlertTriangle,
  Clock,
  FileText,
  Award,
  CloudRain,
  Wind,
  TreePine,
  Zap,
  DollarSign,
  MapPin,
  HelpCircle,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  ServiceSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair Charlotte NC | Free Inspections & Insurance Help',
  description:
    'Expert storm damage roof repair in Charlotte NC. Free inspections, insurance claim assistance, and 24/7 emergency response for hail, wind, fallen trees, and hurricane damage. Call now!',
  keywords: [
    'storm damage roof repair',
    'storm damage roof repair near me',
    'storm damage roofing Charlotte NC',
    'roof storm damage repair cost',
    'emergency storm roof repair Charlotte',
    'wind damage roof repair Charlotte NC',
    'storm damage insurance claim Charlotte',
    'fallen tree roof damage Charlotte',
    'hurricane roof damage repair Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/storm-damage-roof-repair`,
  },
  openGraph: {
    title: 'Storm Damage Roof Repair Charlotte NC | Free Inspections & Insurance Help',
    description:
      'Expert storm damage roof repair and insurance claim assistance in Charlotte NC. Hail, wind, fallen trees, and emergency response.',
    url: `${SITE_CONFIG.url}/storm-damage-roof-repair`,
    type: 'website',
    images: [
      {
        url: IMAGES.stock.serviceStormDamage,
        width: 1200,
        height: 630,
        alt: 'Storm damage roof repair in Charlotte NC',
      },
    ],
  },
};

const stormServices = [
  {
    icon: CloudRain,
    title: 'Hail Damage Repair',
    description:
      'Identify and repair hail damage including cracked shingles, dented flashing, and granule loss before leaks develop.',
  },
  {
    icon: Wind,
    title: 'Wind Damage Repair',
    description:
      'Fix lifted, curled, or blown-off shingles and compromised underlayment from high winds and severe thunderstorms.',
  },
  {
    icon: TreePine,
    title: 'Fallen Tree Removal',
    description:
      'Safe removal of fallen trees and branches from your roof with structural assessment and full restoration.',
  },
  {
    icon: Zap,
    title: 'Emergency Tarping',
    description:
      'Immediate emergency tarping to prevent further water damage while permanent repairs are planned.',
  },
  {
    icon: FileText,
    title: 'Insurance Claim Help',
    description:
      'We handle documentation, meet with adjusters, and advocate to maximize your storm damage insurance claim.',
  },
  {
    icon: Shield,
    title: 'Full Roof Replacement',
    description:
      'Complete roof replacement with impact-resistant materials when storm damage is too extensive to repair.',
  },
];

const stormDamageTypes = [
  {
    icon: CloudRain,
    title: 'Hail Storms',
    description:
      'Charlotte averages 3-5 significant hail events per year. Hailstones dent metal components, crack shingles, and strip protective granules. Even pea-sized hail causes cumulative damage that shortens roof life by years.',
  },
  {
    icon: Wind,
    title: 'Severe Wind',
    description:
      'Straight-line winds from thunderstorms regularly exceed 60 mph in the Charlotte metro. Wind lifts shingle edges, breaks seals, and exposes underlayment to water infiltration that leads to deck rot.',
  },
  {
    icon: TreePine,
    title: 'Fallen Trees & Debris',
    description:
      'Charlotte\'s mature tree canopy is a major storm risk. Falling limbs and trees puncture decking, crush structural supports, and create openings that allow water into your attic and living spaces.',
  },
  {
    icon: Zap,
    title: 'Hurricane & Tropical Remnants',
    description:
      'The Carolinas receive tropical storm remnants multiple times per season. Extended heavy rain combined with sustained winds overwhelms aging roofs and exposes hidden vulnerabilities.',
  },
  {
    icon: AlertTriangle,
    title: 'Tornado Damage',
    description:
      'Mecklenburg County sits in a secondary tornado corridor. Even EF0 and EF1 tornadoes create localized destruction that can tear off entire roof sections in seconds.',
  },
  {
    icon: Shield,
    title: 'Ice Storms & Freezing Rain',
    description:
      'Winter ice storms add tremendous weight to roofs, cause ice dam formation at eaves, and lead to water backup under shingles that causes interior ceiling and wall damage.',
  },
];

const insuranceProcess = [
  {
    step: 1,
    title: 'Free Storm Inspection',
    description:
      'We inspect your entire roof and document all storm damage with detailed photos, drone footage, and written assessment within 24-48 hours of your call.',
  },
  {
    step: 2,
    title: 'File Your Claim',
    description:
      'We prepare comprehensive documentation and help you file your insurance claim correctly the first time. Proper filing prevents delays and denials.',
  },
  {
    step: 3,
    title: 'Meet the Adjuster',
    description:
      'Our team meets with your insurance adjuster on-site to walk through every item of damage and ensure nothing is overlooked in the assessment.',
  },
  {
    step: 4,
    title: 'Repair or Replace',
    description:
      'Once approved, we complete repairs quickly with quality materials. Most storm damage repairs are finished within 1-3 days of approval.',
  },
];

const costRanges = [
  {
    service: 'Emergency Tarping',
    range: '$300 - $800',
    note: 'Prevents further water damage immediately',
  },
  {
    service: 'Minor Storm Repair (patching, shingle replacement)',
    range: '$500 - $2,500',
    note: 'Localized damage from wind or small debris',
  },
  {
    service: 'Moderate Repair (multiple sections)',
    range: '$2,500 - $7,500',
    note: 'Widespread hail or wind damage across roof',
  },
  {
    service: 'Major Repair / Partial Replacement',
    range: '$7,500 - $15,000',
    note: 'Structural damage, large tree impact, or extensive hail',
  },
  {
    service: 'Full Roof Replacement (storm total)',
    range: '$8,000 - $25,000+',
    note: 'Often fully covered by homeowner insurance',
  },
];

const faqs = [
  {
    question: 'How do I know if my roof has storm damage?',
    answer:
      'After any severe storm, look for visible signs like missing or curled shingles, dents on gutters and vents, granules in downspouts, and water stains on interior ceilings. However, many types of storm damage are invisible from the ground. We recommend a free professional inspection after every significant storm event in Charlotte. Our team uses drone technology and hands-on assessment to identify hidden damage that homeowners typically miss.',
  },
  {
    question: 'Will my insurance cover storm damage roof repair?',
    answer:
      'Yes, most homeowner insurance policies in North Carolina cover storm damage including hail, wind, fallen trees, and hurricane remnants. Your policy likely covers the full repair or replacement cost minus your deductible. We work directly with all major insurance companies in Charlotte and help maximize your claim. Many homeowners are surprised to learn their entire roof replacement is covered after a major storm.',
  },
  {
    question: 'How long do I have to file a storm damage insurance claim in NC?',
    answer:
      'Most North Carolina homeowner policies allow 1-3 years to file a storm damage claim, but you should file as soon as possible. Delayed claims face more scrutiny, and unrepaired damage worsens over time, potentially leading to denied coverage for secondary damage. We recommend scheduling a free inspection within 1-2 weeks of any storm and filing your claim immediately after receiving our damage report.',
  },
  {
    question: 'How much does storm damage roof repair cost in Charlotte NC?',
    answer:
      'Storm damage roof repair in Charlotte typically ranges from $500 for minor shingle replacement to $25,000+ for a full roof replacement after severe damage. Emergency tarping costs $300-$800. Most storm damage repairs fall in the $2,500-$7,500 range. The good news is that insurance usually covers the majority of storm damage repairs minus your deductible, which typically ranges from $500 to $2,500.',
  },
  {
    question: 'How quickly can you repair storm damage to my roof?',
    answer:
      'For emergencies like active leaks or fallen trees, we respond within 1-2 hours with emergency tarping to prevent further damage. For standard storm damage repairs, we typically complete the work within 1-3 days after insurance approval. During peak storm season (March through September), demand surges. Calling early gets you ahead of the backlog. We prioritize Charlotte homeowners who contact us within the first 48 hours after a storm.',
  },
  {
    question: 'Should I get my roof inspected even if I don\'t see obvious damage?',
    answer:
      'Absolutely. Many types of storm damage, especially hail damage, are nearly invisible from the ground but can reduce your roof\'s lifespan by 5-10 years. Cracked shingles, loosened granules, and compromised seals may not cause leaks for months until the damage progresses. A free professional inspection after a storm gives you documentation for insurance purposes and catches problems before they become expensive repairs.',
  },
  {
    question: 'What should I do immediately after a storm damages my roof?',
    answer:
      'First, ensure everyone is safe and stay away from any downed power lines. Document visible damage with photos from the ground. If water is actively entering your home, place buckets to catch water and call us for emergency tarping at (704) 605-6047. Do not attempt to climb on a storm-damaged roof yourself. Contact your insurance company to report the damage, then schedule a free professional inspection with Best Roofing Now within 48 hours.',
  },
  {
    question: 'Do you serve areas outside Charlotte for storm damage repair?',
    answer:
      'Yes. We provide storm damage roof repair throughout the greater Charlotte metro including Huntersville, Cornelius, Matthews, Mint Hill, Indian Trail, Concord, Gastonia, Rock Hill, Fort Mill, and Lake Norman. Our crews respond quickly across Mecklenburg, Cabarrus, Union, Gaston, Iredell, and York counties when storms impact the region.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Storm Damage', url: `${SITE_CONFIG.url}/services/storm-damage-roof-siding` },
  { name: 'Storm Damage Roof Repair', url: `${SITE_CONFIG.url}/storm-damage-roof-repair` },
];

export default function StormDamageRoofRepairPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: 'Storm Damage Roof Repair',
          description:
            'Expert storm damage roof repair and insurance claim assistance in Charlotte NC. Hail, wind, fallen trees, and emergency storm response.',
          slug: 'storm-damage-roof-repair',
        }}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair`}
        pageName="Storm Damage Roof Repair Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.stock.serviceStormDamage}
            alt="Storm damage roof repair in Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/80 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-semibold">Storm Damage Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Storm Damage Roof Repair
              <br className="hidden md:block" />
              <span className="text-blue-300">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Free inspections + insurance claim experts + 24/7 emergency response
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Charlotte&apos;s storm season runs March through September, bringing hail, high winds,
              fallen trees, and tropical remnants that damage hundreds of roofs every year. Best
              Roofing Now provides free storm damage inspections, handles your entire insurance claim
              process, and delivers fast, professional repairs so your home stays protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Free Storm Inspection
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-800"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-300" />
                Insurance Claim Experts
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-300" />
                24/7 Emergency Response
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Storm Damage Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Storm Damage Repair Services
            </h2>
            <p className="text-gray text-lg">
              Complete storm damage repair, emergency response, and insurance claim assistance for
              Charlotte homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stormServices.map((service) => (
              <div key={service.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-gray text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storm Types Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Types of Storm Damage We Repair
            </h2>
            <p className="text-gray text-lg">
              Charlotte&apos;s location in the Piedmont region of North Carolina exposes roofs to a
              wide range of severe weather events throughout the year.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stormDamageTypes.map((type) => (
              <div key={type.title} className="bg-white p-6 rounded-xl">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-dark mb-2">{type.title}</h3>
                <p className="text-gray text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Storm Season Matters Now */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Act Now: Charlotte Storm Season Is Here
              </h2>
              <p className="text-gray text-lg mb-6">
                Charlotte&apos;s peak storm season runs from <strong>March through September</strong>,
                and the trend is intensifying. Severe weather events in the Charlotte metro have
                increased over the past decade, with more frequent hail, stronger wind events, and
                tropical systems tracking further inland.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-dark">Spring thunderstorms (March-May)</span>
                    <p className="text-gray text-sm">
                      Severe cells produce large hail and damaging straight-line winds across Mecklenburg County.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-dark">Summer storms (June-August)</span>
                    <p className="text-gray text-sm">
                      Intense afternoon storms with high winds, heavy rain, and frequent lightning cause tree falls and shingle damage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-dark">Hurricane season (June-November)</span>
                    <p className="text-gray text-sm">
                      Tropical remnants bring sustained wind and prolonged heavy rainfall that overwhelms aging roof systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-dark">Winter ice storms (December-February)</span>
                    <p className="text-gray text-sm">
                      Ice accumulation causes structural stress, ice dams, and water backup under shingles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.stock.serviceStormDamage}
                alt="Storm damage roof inspection Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-6 py-3 rounded-xl shadow-lg">
                <p className="font-bold text-lg">179% search increase</p>
                <p className="text-sm text-white/90">Storm damage repairs trending now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Claim Process */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Our Storm Damage Insurance Claim Process
            </h2>
            <p className="text-gray text-lg text-center mb-8">
              We handle the entire insurance process so you can focus on your family, not paperwork.
              Most Charlotte homeowners pay only their deductible.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {insuranceProcess.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Banner */}
      <section className="bg-slate-800 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Storm Just Hit? We&apos;re On Call 24/7
              </h2>
              <p className="text-white/90">
                Emergency tarping and storm damage response within 1-2 hours across Charlotte.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-800"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Free Inspection
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-slate-800 hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cost / Pricing Transparency */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <DollarSign className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Pricing Transparency</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Storm Damage Roof Repair Cost in Charlotte NC
              </h2>
              <p className="text-gray text-lg">
                Honest pricing with no surprises. Most storm damage repairs are covered by homeowner
                insurance, and we help you maximize your claim.
              </p>
            </div>
            <div className="space-y-4">
              {costRanges.map((item) => (
                <div
                  key={item.service}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-2 bg-light p-5 rounded-xl"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-dark">{item.service}</h3>
                    <p className="text-gray text-sm">{item.note}</p>
                  </div>
                  <div className="text-primary font-bold text-lg md:text-right whitespace-nowrap">
                    {item.range}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark mb-1">Insurance Typically Covers Storm Damage</h3>
                  <p className="text-gray text-sm">
                    Most homeowner insurance policies cover storm damage roof repair in full minus
                    your deductible (typically $500-$2,500). We work with all major insurance
                    carriers in the Charlotte area and have helped hundreds of homeowners get full
                    roof replacements approved. Our team handles all documentation, adjuster
                    meetings, and supplemental claims at no extra cost to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte Neighborhoods */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Local Coverage</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Storm Damage Roof Repair Across Charlotte
              </h2>
              <p className="text-gray text-lg">
                We provide storm damage repair throughout the Charlotte metro and surrounding
                communities. When severe weather strikes, our crews deploy across the region.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-dark mb-3">Charlotte Neighborhoods</h3>
                <p className="text-gray text-sm">
                  South End, NoDa, Dilworth, Myers Park, Ballantyne, University City, Steele Creek,
                  Mallard Creek, Highland Creek, Prosperity Village, Plaza Midwood, Eastover,
                  Cotswold, SouthPark, Northlake, Quail Hollow, Piper Glen, Providence Plantation,
                  and Berewick.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-dark mb-3">Surrounding Cities</h3>
                <p className="text-gray text-sm">
                  Huntersville, Cornelius, Davidson, Matthews, Mint Hill, Indian Trail, Weddington,
                  Stallings, Concord, Kannapolis, Gastonia, Mount Holly, Belmont, Harrisburg,
                  Mooresville, Lake Norman, Fort Mill SC, Rock Hill SC, Tega Cay SC, and Indian Land SC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <GeoProjectGalleryStrip
        pageType="service"
        city="Charlotte"
        slug="storm-damage-roof-repair"
        count={4}
        title="Storm Damage Repairs"
        subtitle="Browse completed storm damage repair projects across Charlotte."
        schemaPageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair`}
      />

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Storm Damage Roof Repair FAQs
              </h2>
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

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            Related Storm Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/hail-damage-roof-repair"
              className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-primary mb-2">Hail Damage Repair</h3>
              <p className="text-gray text-sm">
                Specialized hail damage inspection and insurance claim assistance.
              </p>
            </Link>
            <Link
              href="/emergency-roof-tarping"
              className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-primary mb-2">Emergency Tarping</h3>
              <p className="text-gray text-sm">24/7 emergency roof protection and tarping.</p>
            </Link>
            <Link
              href="/emergency"
              className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-primary mb-2">Emergency Roofing</h3>
              <p className="text-gray text-sm">Full emergency roofing services Charlotte NC.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Don't Wait on Storm Damage"
        subtitle="Get a free storm damage inspection and insurance claim assistance today. Charlotte's storm season is here."
      />
    </>
  );
}
