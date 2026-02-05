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
  Home,
  Droplets,
  TreePine,
  CloudRain,
  CloudHail,
  Star,
  Snowflake,
  Wrench,
  Eye,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { FAQ } from '@/components/sections/FAQ';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'Charlotte Storm Season Roof Protection Guide | Before, During & After',
  description:
    'Complete Charlotte NC storm season roof protection guide. Pre-storm preparation checklist, during-storm safety, post-storm action plan, insurance claim tips, and damage repair by type. Free storm damage inspections.',
  keywords: [
    'Charlotte NC storm season roof protection',
    'storm season roof guide Charlotte',
    'Charlotte storm damage prevention',
    'roof storm preparation Charlotte NC',
    'hail damage prevention Charlotte',
    'wind damage roof Charlotte NC',
    'hurricane roof protection Charlotte',
    'Charlotte storm roof inspection',
    'storm damage insurance claim Charlotte',
    'Charlotte roofing storm guide',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/charlotte-storm-season-roof-guide`,
  },
  openGraph: {
    title: 'Charlotte Storm Season Roof Protection Guide | Before, During & After',
    description:
      'The definitive storm season guide for Charlotte homeowners. Prepare your roof before storms, stay safe during, and recover fast after. Covers hail, wind, hurricane, tree, and ice damage.',
    url: `${SITE_CONFIG.url}/charlotte-storm-season-roof-guide`,
    type: 'article',
    images: [
      {
        url: IMAGES.services.stormDamage,
        width: 1200,
        height: 630,
        alt: 'Charlotte NC storm season roof protection guide',
      },
    ],
  },
};

const stormGuideFAQs = [
  {
    question: 'When is storm season in Charlotte NC?',
    answer:
      'Charlotte\'s primary storm season runs from April through September, with severe thunderstorms, hail, and high winds most frequent during this window. Hurricane and tropical storm remnants typically affect the area from June through November, with peak activity in August and September. Winter ice storms can occur from December through February. Charlotte averages 45-50 thunderstorm days per year.',
  },
  {
    question: 'How do I prepare my roof for storm season in Charlotte?',
    answer:
      'Start with a professional roof inspection in early spring to identify vulnerable areas like loose shingles, compromised flashing, and worn sealant around penetrations. Clean your gutters and install gutter guards. Trim tree branches within 10 feet of your roof. Check your attic ventilation and ensure ridge vents are secure. Document your roof\'s current condition with dated photographs for insurance purposes. Keep a roofing contractor\'s emergency number saved in your phone.',
  },
  {
    question: 'What should I do if my roof is damaged during a storm?',
    answer:
      'First, ensure everyone in your home is safe. Do not go on the roof during or immediately after a storm. Assess damage from ground level only and photograph everything before making any temporary repairs. If there is an active leak, place buckets to catch water and move valuables away from affected areas. Contact a licensed roofing contractor for emergency tarping if the roof deck is exposed. File your insurance claim within 48 hours and never sign a contract with a storm chaser who knocks on your door.',
  },
  {
    question: 'Does homeowners insurance cover storm damage to my roof?',
    answer:
      'Yes, standard homeowners insurance in Charlotte covers storm damage including hail, wind, fallen trees, and hurricane damage. These are classified as "Act of God" events. Most NC policies have a standard deductible ($500-$2,500), though some have separate wind/hurricane deductibles of 1-5% of dwelling coverage. File your claim promptly, provide thorough documentation, and have your roofing contractor present when the adjuster inspects your roof.',
  },
  {
    question: 'How much hail does Charlotte NC get each year?',
    answer:
      'Charlotte typically experiences 3-5 significant hail events per year, primarily between March and June. The Mecklenburg County area sits in a moderate hail risk zone. Hail stones of one inch or larger cause the most roof damage and almost always warrant an insurance claim. Even smaller hailstones can cause cumulative damage to aging shingles by knocking off granules and cracking the underlying asphalt.',
  },
  {
    question: 'How can I tell if my roof has storm damage I cannot see from the ground?',
    answer:
      'Many types of storm damage are invisible from ground level. Hail bruising on shingles, hairline cracks, broken seal strips, and loosened nails all require close inspection. After any significant storm event, schedule a free professional inspection with a licensed contractor. They will check for granule displacement, soft spots, dented metal components, and compromised flashing that you would not see without climbing on the roof.',
  },
  {
    question: 'Should I get a roof inspection after every storm in Charlotte?',
    answer:
      'You do not need an inspection after every light rain, but you should schedule one after any storm that brings hail of any size, sustained winds over 50 mph, significant tree debris, or heavy ice accumulation. Also inspect after tropical storm or hurricane remnants pass through. Best Roofing Now offers free post-storm inspections for Charlotte homeowners, and early detection prevents small damage from becoming expensive problems.',
  },
  {
    question: 'How do I avoid storm chaser roofing scams in Charlotte?',
    answer:
      'Never sign a contract with a roofer who goes door-to-door after a storm or pressures you to sign immediately. Verify that any contractor has a permanent local address, a North Carolina general contractor license, proper liability and workers compensation insurance, and verifiable local references. Check their BBB rating and Google reviews. A trustworthy contractor will never ask you to sign an Assignment of Benefits (AOB) or demand large upfront deposits before work begins.',
  },
];

const pageUrl = `${SITE_CONFIG.url}/charlotte-storm-season-roof-guide`;

export default function CharlotteStormSeasonRoofGuidePage() {
  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Charlotte Storm Season Roof Protection Guide | Before, During & After"
        description="Complete storm season roof protection guide for Charlotte NC homeowners. Pre-storm preparation, during-storm safety, post-storm recovery, insurance claims, and damage repair by type."
        url={pageUrl}
        primaryImage={IMAGES.services.stormDamage}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Guides', url: `${SITE_CONFIG.url}/charlotte-storm-season-roof-guide` },
          { name: 'Storm Season Guide', url: pageUrl },
        ]}
      />
      <FAQSchema faqs={stormGuideFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Guides', url: `${SITE_CONFIG.url}/charlotte-storm-season-roof-guide` },
          { name: 'Storm Season Guide', url: pageUrl },
        ]}
      />
      <LocalBusinessSchema includeRating={false} />
      <AISearchOptimizationBundle
        pageUrl={pageUrl}
        pageName="Charlotte Storm Season Roof Protection Guide"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How do I protect my roof during Charlotte storm season?',
            answer:
              'Protect your Charlotte roof during storm season by scheduling a professional inspection in early spring, repairing damaged flashing and loose shingles, cleaning gutters, trimming overhanging tree branches, and reviewing your insurance policy. Best Roofing Now offers free pre-season roof inspections for Charlotte homeowners. Call 704-605-6047 to schedule.',
            speakableAnswer:
              'Protect your roof by getting a spring inspection, repairing damage, cleaning gutters, and trimming trees. Best Roofing Now offers free pre-season inspections. Call 704-605-6047.',
          },
          {
            question: 'What types of storm damage affect Charlotte roofs?',
            answer:
              'Charlotte roofs face hail damage (3-5 events per year), wind damage from 45-50 annual thunderstorms, hurricane and tropical storm remnants from June through November, fallen tree damage from Charlotte\'s dense canopy, and winter ice storms. Best Roofing Now repairs all storm damage types and handles insurance claims from start to finish.',
            speakableAnswer:
              'Charlotte roofs face hail, wind, hurricane remnants, fallen trees, and ice storms. Best Roofing Now repairs all types and handles insurance claims.',
          },
          {
            question: 'What should I do after a storm damages my Charlotte roof?',
            answer:
              'After storm damage, stay safe and assess from ground level only. Photograph all damage before temporary repairs. File your insurance claim within 48 hours. Call Best Roofing Now at 704-605-6047 for emergency tarping and a free damage inspection. We meet with your insurance adjuster and handle the entire claim process.',
            speakableAnswer:
              'After storm damage, stay safe, photograph everything, and file your insurance claim within 48 hours. Call Best Roofing Now at 704-605-6047 for emergency help.',
          },
          {
            question: 'Who handles storm damage roof insurance claims in Charlotte NC?',
            answer:
              'Best Roofing Now is Charlotte\'s trusted storm damage and insurance claim specialist. We provide free storm damage inspections, detailed documentation for your claim, meet with insurance adjusters on your behalf, and handle the entire process. Over 500 Charlotte homes restored. BBB A+ rated with a perfect 5.0 Google rating.',
            speakableAnswer:
              'Best Roofing Now handles storm damage insurance claims in Charlotte. We inspect, document, meet with adjusters, and manage the entire process. Call 704-605-6047.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Guides' },
              { name: 'Storm Season Guide' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.services.stormDamage}
            alt="Storm season roof protection in Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Complete Storm Season Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Charlotte NC Storm Season Roof Protection Guide: Before, During & After
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Charlotte sees 45-50 thunderstorm days, 3-5 major hail events, and hurricane remnants
              every year. This comprehensive guide walks you through protecting your roof before storms
              arrive, keeping your family safe during severe weather, and recovering quickly after damage
              occurs. Whether you are facing hail, wind, fallen trees, or ice, we cover it all.
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
                {SITE_CONFIG.googleRating} Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB {SITE_CONFIG.bbbRating} Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                {SITE_CONFIG.customerCount}+ Roofs Completed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte's Storm Profile */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Charlotte&apos;s Storm Profile — What Your Roof Faces Each Year
            </h2>
            <div className="text-gray text-lg space-y-4 mb-10">
              <p>
                Charlotte sits in one of the most active severe weather corridors in the Southeast,
                and your roof bears the brunt of every storm that rolls through Mecklenburg County.
                The Charlotte metro area averages 45-50 thunderstorm days per year, with 3-5 of those
                producing significant hail large enough to damage shingles, gutters, and metal roof
                components. Annual rainfall totals around 43 inches, and much of it arrives during
                intense downpours that test every seam, flashing detail, and shingle overlap on your
                roof. Peak storm season stretches from April through September, when the combination
                of heat, humidity, and unstable air masses produces severe thunderstorms capable of
                generating damaging straight-line winds, large hail, and occasional tornadoes.
              </p>
              <p>
                Hurricane and tropical storm remnants affect the Charlotte area from June through
                November, with the most dangerous period in August and September. While Charlotte is
                approximately 200 miles inland from the coast, weakened hurricanes and tropical systems
                still deliver sustained winds of 40-70 mph, flooding rains, and widespread tree falls
                that cause catastrophic roof damage. Hurricane Hugo in 1989 and Hurricane Florence in
                2018 both demonstrated that Charlotte is far from immune to tropical destruction. Winter
                brings its own challenges with periodic ice storms that load tree limbs and roof
                structures with heavy ice, create ice dams at eaves, and cause gutters to pull away
                from fascia boards. Understanding this annual storm cycle is the foundation of protecting
                your home and your investment.
              </p>
            </div>

            {/* Storm Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-light rounded-2xl p-6 text-center">
                <CloudRain className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">45-50</div>
                <p className="text-gray text-sm">Thunderstorm Days Per Year</p>
              </div>
              <div className="bg-light rounded-2xl p-6 text-center">
                <CloudHail className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">3-5</div>
                <p className="text-gray text-sm">Major Hail Events Per Year</p>
              </div>
              <div className="bg-light rounded-2xl p-6 text-center">
                <Droplets className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">43&quot;</div>
                <p className="text-gray text-sm">Annual Rainfall</p>
              </div>
              <div className="bg-light rounded-2xl p-6 text-center">
                <Wind className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">Jun-Nov</div>
                <p className="text-gray text-sm">Hurricane Season</p>
              </div>
              <div className="bg-light rounded-2xl p-6 text-center">
                <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">Apr-Sep</div>
                <p className="text-gray text-sm">Peak Storm Season</p>
              </div>
              <div className="bg-light rounded-2xl p-6 text-center">
                <Snowflake className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">Dec-Feb</div>
                <p className="text-gray text-sm">Ice Storm Risk</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/spring-roof-inspection-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Spring Roofing Guide <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/summer-roof-maintenance-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Summer Roofing Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before the Storm — Preparation Checklist */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Before the Storm — Your Preparation Checklist
            </h2>
            <div className="text-gray text-lg space-y-4 mb-10">
              <p>
                The single most important thing you can do to protect your roof during Charlotte&apos;s
                storm season is to prepare before the first thunderstorm cell forms. A pre-season roof
                inspection by a licensed contractor identifies the weak points that turn into failures
                during severe weather: loose shingles, cracked flashing around chimneys and plumbing
                vents, deteriorated sealant at roof penetrations, worn ridge caps, and damaged valley
                metal. These issues are inexpensive to repair in calm weather but become urgent and
                costly emergencies during a storm. Your inspector should also check for signs of
                previous unrepaired damage, as cumulative wear from past storms weakens your roof&apos;s
                ability to withstand the next event.
              </p>
              <p>
                Beyond the roof itself, your preparation checklist should include cleaning all gutters
                and downspouts to ensure water drains freely during heavy downpours, as clogged gutters
                cause water to back up under shingles and into your fascia and soffit. Consider
                installing{' '}
                <Link href="/gutter-guards-charlotte-nc" className="text-primary font-semibold hover:text-accent">
                  gutter guards
                </Link>{' '}
                to reduce future maintenance. Trim all tree branches that hang within 10 feet of your
                roof, and have dead trees evaluated by an arborist before they become projectiles. Build
                an emergency contact list that includes your insurance agent&apos;s number, a trusted
                local roofing contractor, and your policy number. Keep this list accessible along with
                dated photographs of your roof&apos;s current condition, which will be invaluable if you
                need to file an insurance claim.
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-4">
              {[
                {
                  icon: Eye,
                  title: 'Schedule a Professional Roof Inspection',
                  description:
                    'Have a licensed roofer inspect for loose shingles, damaged flashing, worn sealant, and signs of previous unrepaired damage.',
                  priority: 'Essential',
                  link: '/spring-roof-inspection-charlotte-nc',
                  linkText: 'Schedule Inspection',
                },
                {
                  icon: Droplets,
                  title: 'Clean Gutters and Downspouts',
                  description:
                    'Clear all debris to ensure proper drainage during heavy rainfall. Backed-up gutters cause water intrusion under shingles.',
                  priority: 'Essential',
                  link: '/gutter-services',
                  linkText: 'Gutter Services',
                },
                {
                  icon: Shield,
                  title: 'Install Gutter Guards',
                  description:
                    'Reduce ongoing maintenance and prevent storm debris from clogging your drainage system during severe weather.',
                  priority: 'Recommended',
                  link: '/gutter-guards-charlotte-nc',
                  linkText: 'Gutter Guards',
                },
                {
                  icon: TreePine,
                  title: 'Trim Trees and Remove Dead Branches',
                  description:
                    'Cut branches within 10 feet of your roof. Dead trees should be evaluated by a certified arborist and removed before storm season.',
                  priority: 'Essential',
                },
                {
                  icon: Wrench,
                  title: 'Repair Vulnerable Areas',
                  description:
                    'Fix loose flashing, replace missing shingles, reseal cracked caulk around vents and pipes, and secure ridge caps.',
                  priority: 'Essential',
                  link: '/roof-maintenance-charlotte-nc',
                  linkText: 'Roof Maintenance',
                },
                {
                  icon: FileText,
                  title: 'Review Insurance Policy and Document Your Roof',
                  description:
                    'Understand your deductible and coverage limits. Take dated photos of your roof condition for insurance records.',
                  priority: 'Essential',
                },
                {
                  icon: Snowflake,
                  title: 'Prepare for Winter Ice Events',
                  description:
                    'Ensure proper attic insulation and ventilation to prevent ice dams. Check that heat cables are functional if installed.',
                  priority: 'Recommended',
                  link: '/ice-dam-prevention-charlotte-nc',
                  linkText: 'Ice Dam Prevention',
                },
                {
                  icon: Phone,
                  title: 'Build Your Emergency Contact List',
                  description:
                    'Save your insurance agent, policy number, and a trusted local roofing contractor in your phone before you need them.',
                  priority: 'Essential',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 rounded-xl p-5 ${
                    item.priority === 'Essential'
                      ? 'bg-white border-2 border-primary/20 shadow-sm'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.priority === 'Essential'
                        ? 'bg-primary text-white'
                        : 'bg-primary/10 text-primary'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-dark">{item.title}</h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          item.priority === 'Essential'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {item.priority}
                      </span>
                    </div>
                    <p className="text-gray text-sm">{item.description}</p>
                    {item.link && (
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-1 text-sm text-primary font-semibold hover:text-accent mt-2 transition-colors"
                      >
                        {item.linkText} <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/hurricane-roof-preparation-guide-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Full Hurricane Preparation Guide <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/roof-maintenance-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Year-Round Roof Maintenance <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* During the Storm */}
      <section className="section bg-dark text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                During the Storm — Protecting Your Home and Family
              </h2>
            </div>
            <div className="text-lg text-white/80 space-y-4 mb-10">
              <p>
                When severe weather strikes Charlotte, your primary concern must be the safety of
                everyone inside your home, not your roof. Move to an interior room on the lowest floor,
                away from windows and exterior walls. If you live in a manufactured home or feel your
                structure is at risk, evacuate to a designated shelter before the storm arrives. Keep
                battery-powered radios or a charged phone tuned to local emergency alerts from the
                National Weather Service. Charlotte-area tornado warnings require immediate action:
                move to a basement or the most interior ground-floor room and cover yourself with
                blankets or mattresses.
              </p>
              <p>
                Under no circumstances should you go on your roof during a storm, even during a lull
                or what appears to be the passing of the worst weather. Wind gusts can return suddenly,
                wet roof surfaces are dangerously slippery, and lightning remains a lethal threat until
                30 minutes after the last thunder. If you hear the sound of your roof failing — cracking,
                ripping, or see water entering from above — move everyone away from that area
                immediately and place buckets or containers to catch water. Do not attempt temporary
                repairs until the storm has completely passed and conditions are safe. If a tree falls
                through your roof creating an open hole, move to the opposite side of the home and call
                911 if anyone is in danger, then call a roofing emergency line for{' '}
                <Link href="/emergency-tarp-service-charlotte-nc" className="text-accent font-semibold hover:text-white underline">
                  emergency tarp service
                </Link>{' '}
                once conditions allow.
              </p>
            </div>

            {/* Safety Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Do During a Storm
                </h3>
                <ul className="space-y-3">
                  {[
                    'Move to an interior room away from windows',
                    'Keep phones charged and listen to weather alerts',
                    'Place buckets under any active leaks',
                    'Move valuables away from affected areas',
                    'Stay on the lowest floor of your home',
                    'Keep emergency supplies accessible',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-white/80">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Never Do During a Storm
                </h3>
                <ul className="space-y-3">
                  {[
                    'Go on the roof for any reason',
                    'Go outside during a lull in the storm',
                    'Touch downed power lines or flooded areas',
                    'Attempt permanent repairs in active weather',
                    'Open windows (this does not help equalize pressure)',
                    'Ignore tornado warnings — take immediate shelter',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-white/80">
                      <AlertTriangle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                size="lg"
                className="bg-accent hover:bg-accent-dark"
                icon={<Phone className="w-5 h-5" />}
              >
                24/7 Emergency Line: {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* After the Storm — Step-by-Step Action Plan */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              After the Storm — Your Step-by-Step Action Plan
            </h2>
            <div className="text-gray text-lg space-y-4 mb-10">
              <p>
                The hours and days after a storm are critical for protecting both your home and your
                insurance claim. Your first priority is confirming that all family members and neighbors
                are safe. Do not go outside until local authorities give the all-clear, and watch for
                downed power lines, broken glass, and unstable tree limbs when you do venture out. Assess
                your roof damage from ground level only, using binoculars if available. Look for obvious
                signs: missing shingles on the ground, visible holes or exposed decking, damaged gutters
                hanging loose, and debris scattered on the roof surface. Photograph everything you see
                before touching, moving, or cleaning anything, as this documentation is critical for your
                insurance claim.
              </p>
              <p>
                Do not make permanent repairs yet. Your insurance company needs to see the damage as the
                storm left it. You are, however, required by your policy to prevent further damage, which
                means emergency tarping of any exposed areas and removing water from inside your home. File
                your insurance claim within 48 hours for the strongest position, and keep all receipts for
                emergency mitigation expenses, as these are typically reimbursable. Avoid signing any
                contract with door-to-door storm chasers who appear in your neighborhood after a storm.
                Instead, contact a reputable, locally established roofing contractor with verifiable
                credentials and a permanent Charlotte address. The right contractor will provide a free
                inspection, attend your insurance adjuster meeting, and advocate for a fair settlement on
                your behalf.
              </p>
            </div>

            {/* Step-by-Step Process */}
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: 'Ensure Safety First',
                  description:
                    'Wait for the all-clear from authorities. Watch for downed power lines and unstable trees. Check on family members and neighbors before assessing property.',
                  icon: Shield,
                },
                {
                  step: 2,
                  title: 'Assess Damage from Ground Level',
                  description:
                    'Use binoculars to inspect your roof from the ground. Look for missing shingles, exposed decking, damaged gutters, and debris. Never climb on a wet or damaged roof.',
                  icon: Eye,
                },
                {
                  step: 3,
                  title: 'Photograph All Damage',
                  description:
                    'Take wide-angle and close-up photos of every area of damage before any cleanup. Document interior water damage, fallen debris, and damage to gutters and siding.',
                  icon: FileText,
                },
                {
                  step: 4,
                  title: 'Prevent Further Damage',
                  description:
                    'If safe, tarp exposed areas to prevent water intrusion. Place buckets under leaks. Your insurance policy requires you to mitigate further damage. Keep all receipts.',
                  icon: Home,
                },
                {
                  step: 5,
                  title: 'File Your Insurance Claim Within 48 Hours',
                  description:
                    'Contact your insurer promptly. Provide your documentation and get a claim number. Ask about separate wind or hurricane deductibles that may apply.',
                  icon: FileText,
                },
                {
                  step: 6,
                  title: 'Call a Trusted Local Roofing Contractor',
                  description:
                    'Schedule a free professional inspection with a licensed, locally established contractor. Avoid storm chasers. Your contractor should attend the adjuster meeting.',
                  icon: Phone,
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start bg-light rounded-xl p-5">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-gray">Step {item.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-dark mb-1">{item.title}</h3>
                    <p className="text-gray">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/hail-damage-roof-repair-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                What to Do After Hail Damage <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/tree-damage-roof-repair-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Tree Falls on Roof Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Storm Damage by Type */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Storm Damage by Type
            </h2>
            <p className="text-gray text-lg text-center mb-12">
              Different storm events cause different types of roof damage, each with unique repair
              requirements and insurance considerations. Understanding what to look for helps you
              respond effectively and get the repair coverage you deserve.
            </p>

            {/* Hail Damage */}
            <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <CloudHail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-dark">Hail Damage</h3>
              </div>
              <p className="text-gray mb-4">
                Hail is the most common cause of storm-related insurance claims in the Charlotte metro
                area, with 3-5 significant events per year producing hailstones large enough to damage
                roofing materials. Hail damage to asphalt shingles manifests as circular dents or
                bruises, cracked shingle surfaces, knocked-off granules that expose the underlying
                asphalt, and broken seal strips that allow wind to lift shingles. Metal components like
                roof vents, flashing, and gutters show visible dents and deformation. The challenge with
                hail damage is that much of it is not visible from the ground. Shingle bruising, for
                example, can only be detected by pressing on the shingle surface and feeling for soft
                spots where the fiberglass mat has been fractured. This is why a professional inspection
                after any hail event is essential. Insurance companies generally cover full roof
                replacement when hail damage is widespread, as partial repairs on a hail-damaged roof
                often fail prematurely.
              </p>
              <Link
                href="/hail-damage-roof-repair-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Hail Damage Roof Repair in Charlotte <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Wind Damage */}
            <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Wind className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-dark">Wind Damage</h3>
              </div>
              <p className="text-gray mb-4">
                Charlotte&apos;s severe thunderstorms regularly produce straight-line winds exceeding
                60 mph, and these events cause some of the most visible roof damage in the region.
                High winds attack your roof&apos;s most vulnerable points first: ridge caps, hip shingles,
                rake edges, and any area where shingles were improperly nailed or have deteriorated seal
                strips. When wind gets under a shingle tab, it can peel entire sections off in seconds,
                exposing the underlayment or bare decking to rain. Wind damage often creates a cascading
                effect, where missing shingles allow water infiltration that damages the decking, which
                then weakens the attachment of surrounding shingles. Even if shingles are not completely
                torn off, high winds break the adhesive seal strips that hold shingle tabs flat, and once
                broken, those shingles become permanently vulnerable to future wind events. Post-wind
                inspection should check every ridge cap, hip line, and roof edge, along with flashing
                around chimneys and walls.
              </p>
              <Link
                href="/wind-damage-roof-repair-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Wind Damage Roof Repair in Charlotte <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hurricane & Tropical Storm */}
            <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <CloudRain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-dark">Hurricane & Tropical Storm Damage</h3>
              </div>
              <p className="text-gray mb-4">
                When hurricane or tropical storm remnants reach Charlotte, they combine sustained high
                winds with prolonged heavy rainfall, creating a double threat that overwhelms roofing
                systems in ways that ordinary thunderstorms do not. Sustained winds of 40-70 mph over
                several hours fatigue shingle adhesion far more than brief gusts, while continuous
                rainfall at rates exceeding 2-3 inches per hour finds every vulnerability in your
                roof&apos;s defense. Saturated soil also destabilizes Charlotte&apos;s mature hardwoods,
                causing widespread tree falls that are the leading cause of catastrophic roof damage
                during tropical events. Hurricane Hugo (1989) produced 80+ mph gusts in Charlotte and
                caused billions in damage. Florence (2018) brought flooding rains that tested every
                roof in Mecklenburg County. Your best preparation involves a professional inspection
                before hurricane season, securing loose components, and having emergency tarp materials
                on hand. After a tropical event, document all damage immediately as insurers experience
                high claim volumes and early documentation strengthens your position.
              </p>
              <Link
                href="/hurricane-damage-roof-repair-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Hurricane Damage Roof Repair in Charlotte <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Fallen Tree Damage */}
            <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <TreePine className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-dark">Fallen Tree & Debris Damage</h3>
              </div>
              <p className="text-gray mb-4">
                Charlotte&apos;s reputation as the &quot;City of Trees&quot; comes with a significant
                liability during storm season. Mature oaks, pines, and poplars throughout Mecklenburg
                County become hazardous when high winds combine with saturated soil, and a single
                large limb can cause tens of thousands of dollars in structural roof damage. Tree
                strikes often compromise not just the roofing material but the underlying decking and
                even the roof trusses or rafters, requiring structural engineering assessment before
                repairs can begin. Emergency response is critical because an open hole in your roof
                allows water to pour directly into your living space, damaging ceilings, insulation,
                electrical systems, and personal property. If a tree falls on your roof, evacuate the
                affected area immediately, call 911 if the structure feels unstable, and contact a
                roofer for emergency tarping as soon as conditions are safe. Insurance typically covers
                tree damage plus the cost of tree removal from the structure.
              </p>
              <Link
                href="/tree-damage-roof-repair-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Tree Damage Roof Repair in Charlotte <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Ice Storm Damage */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Snowflake className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-dark">Ice Storm Damage</h3>
              </div>
              <p className="text-gray mb-4">
                While Charlotte&apos;s winters are generally mild, the region experiences periodic ice
                storms that create unique and often underestimated roof damage. Ice accumulation of
                even a quarter inch adds substantial weight to your roof structure, and heavier
                accumulations can stress trusses and cause sagging. Ice dams form when heat escaping
                from poorly insulated attics melts snow on the upper roof, which then refreezes at the
                colder eaves, creating a barrier that forces water back up under shingles. This
                water intrusion damages sheathing, insulation, and ceiling materials without any
                visible exterior damage. Ice also loads tree limbs to the breaking point, causing falls
                that damage roofs, gutters, and satellite dishes. The January 2026 ice storm
                demonstrated Charlotte&apos;s vulnerability, with widespread gutter damage, ice dam
                formations, and tree-related roof damage across the metro area. Proper attic
                insulation, adequate ventilation, and pre-winter gutter cleaning are your primary
                defenses against ice storm damage.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/ice-storm-damage-charlotte-nc"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                >
                  Ice Storm Damage Charlotte <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/ice-storm-damage-lake-norman-nc"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                >
                  Ice Storm Damage Lake Norman <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigating Your Insurance Claim */}
      <section className="section bg-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Navigating Your Insurance Claim After Storm Damage
            </h2>
            <div className="text-gray text-lg space-y-4 mb-10">
              <p>
                Filing a storm damage insurance claim can feel overwhelming, especially when you are
                also dealing with a damaged home and disrupted daily life. The process, however, is
                straightforward when you understand the steps and have the right contractor supporting
                you. Start by contacting your insurance company as soon as possible after documenting
                your damage, ideally within 48 hours of the storm event. Provide your claim number to
                your roofing contractor so they can coordinate directly with your adjuster. The most
                important step in the entire process is the on-site adjuster meeting, and having your
                roofing contractor present during this inspection is critical. A trained roofer can
                identify damage patterns that adjusters sometimes miss, particularly hail bruising,
                compromised seal strips, and damage to less visible components like valley metal and
                pipe boot flashings.
              </p>
              <p>
                Understanding what your policy covers prevents surprises. Standard homeowners
                insurance covers storm damage including hail, wind, fallen trees, and hurricane damage
                as &quot;Act of God&quot; events. Your standard deductible applies, though some North
                Carolina policies carry separate wind or hurricane deductibles of 1-5% of your dwelling
                coverage amount. Cosmetic damage exclusions are becoming more common in NC policies,
                so review your policy language carefully. If your claim is denied or underpaid, your
                contractor can supplement with additional documentation, and you have the right to
                request re-inspection or hire a public adjuster. Best Roofing Now has helped hundreds
                of Charlotte homeowners navigate the insurance process, and many clients who were
                initially offered partial repairs ultimately received full roof replacements when proper
                documentation was provided.
              </p>
            </div>

            {/* Insurance Process Steps */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-4 text-lg">What Insurance Typically Covers</h3>
                <ul className="space-y-3">
                  {[
                    'Hail damage to shingles, vents, and gutters',
                    'Wind damage including missing shingles',
                    'Fallen tree damage and tree removal from structure',
                    'Hurricane and tropical storm damage',
                    'Emergency tarping and mitigation costs',
                    'Interior water damage from roof failures',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-4 text-lg">What May Not Be Covered</h3>
                <ul className="space-y-3">
                  {[
                    'Wear and tear or maintenance neglect',
                    'Damage from lack of upkeep (clogged gutters)',
                    'Cosmetic-only damage (policy dependent)',
                    'Pre-existing damage from prior storms',
                    'Flood damage (requires separate flood policy)',
                    'Damage reported after filing deadline',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/insurance-claim-roofing-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Insurance Claim Roofing Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Storm Damage Repair by City */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Storm Damage Repair Across the Charlotte Metro
            </h2>
            <p className="text-gray text-lg text-center mb-10">
              Best Roofing Now provides storm damage roof repair and insurance claim assistance
              throughout the Charlotte metro area. Whether you live in the heart of Charlotte, the
              Lake Norman corridor, or the surrounding suburbs, our crews respond quickly with the
              same high-quality workmanship and insurance expertise. Storms do not respect city
              boundaries, and neither does our service area. Every location benefits from our free
              storm damage inspections, on-site adjuster meetings, and comprehensive repair services
              backed by manufacturer warranties.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  city: 'Charlotte',
                  href: '/storm-damage-roof-repair-charlotte-nc',
                },
                {
                  city: 'Huntersville',
                  href: '/storm-damage-roof-repair-huntersville-nc',
                },
                {
                  city: 'Mooresville',
                  href: '/storm-damage-roof-repair-mooresville-nc',
                },
                {
                  city: 'Cornelius',
                  href: '/storm-damage-roof-repair-cornelius-nc',
                },
                {
                  city: 'Denver',
                  href: '/storm-damage-roof-repair-denver-nc',
                },
              ].map((location, index) => (
                <Link
                  key={index}
                  href={location.href}
                  className="group bg-light rounded-xl p-5 hover:bg-primary/5 transition-colors flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CloudRain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark group-hover:text-primary transition-colors">
                      Storm Damage Repair {location.city}
                    </h3>
                    <p className="text-sm text-gray">NC</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray ml-auto group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Best Roofing Now */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Why Charlotte Homeowners Trust Best Roofing Now for Storm Damage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">24/7 Emergency Response</h3>
              <p className="text-gray text-sm">
                We respond within hours, day or night, to tarp your roof and prevent additional water damage to your home.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Insurance Claim Experts</h3>
              <p className="text-gray text-sm">
                We handle your entire claim process, meet with adjusters, and fight for fair settlements on your behalf.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">5.0 Google Rating</h3>
              <p className="text-gray text-sm">
                {SITE_CONFIG.googleReviewCount}+ five-star reviews. BBB {SITE_CONFIG.bbbRating} rated. Veteran-owned and family-operated since {SITE_CONFIG.founded}.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Certified Installers</h3>
              <p className="text-gray text-sm">
                CertainTeed, GAF, and Owens Corning certified. Premium materials with manufacturer-backed warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={stormGuideFAQs}
        title="Charlotte Storm Season Roof Protection FAQ"
        subtitle="Common questions about storm preparation, damage assessment, insurance claims, and roof repair in Charlotte NC."
      />

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
              Storm Damage Experts | Licensed & Insured | BBB A+ Rated
            </p>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="guide"
        city="Charlotte"
        slug="charlotte-storm-season-roof-guide"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/charlotte-storm-season-roof-guide`}
      />

      {/* CTA */}
      <CTASection
        title="Storm Season is Here — Is Your Roof Ready?"
        subtitle="Schedule a free pre-season inspection or get emergency storm damage help. Fast response, expert assessment, and complete insurance claim support."
      />
    </>
  );
}
