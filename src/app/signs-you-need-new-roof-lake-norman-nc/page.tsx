import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  CloudRain,
  Droplets,
  Eye,
  HelpCircle,
  Home,
  Layers,
  Phone,
  Shield,
  Star,
  Sun,
  ThermometerSun,
  TrendingUp,
  Wind,
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
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
import { LKNExpertiseSchema } from '@/components/seo/LKNExpertiseSchema';

export const metadata: Metadata = {
  title: 'Signs You Need a New Roof',
  description:
    'How to tell if you need a new roof in Lake Norman NC. 10 warning signs for LKN homeowners — curling shingles, granule loss, sagging, leaks, age, waterfront wind damage. Free inspections from veteran-owned LKN Chamber member roofers.',
  keywords: [
    'signs you need a new roof lake norman nc',
    'when to replace roof lake norman',
    'how to tell if roof needs replacing lake norman',
    'roof replacement signs cornelius nc',
    'roof replacement signs mooresville nc',
    'roof replacement signs davidson nc',
    'roof replacement signs huntersville nc',
    'roof lifespan lake norman nc',
    'do i need a new roof lake norman',
    'aging roof signs lkn',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/signs-you-need-new-roof-lake-norman-nc`,
  },
  openGraph: {
    title: 'Signs You Need a New Roof | Lake Norman NC Guide | Best Roofing Now',
    description:
      '10 warning signs your Lake Norman NC roof needs replacing. Expert guide from LKN Chamber member roofers serving Cornelius, Davidson, Mooresville, Huntersville, Denver.',
    url: `${SITE_CONFIG.url}/signs-you-need-new-roof-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero5,
        width: 1200,
        height: 630,
        alt: 'Signs you need a new roof - Lake Norman NC guide by Best Roofing Now',
      },
    ],
  },
};

const warningSigns = [
  {
    number: 1,
    icon: Clock,
    title: 'Your Roof Is 20+ Years Old',
    description:
      'Most asphalt shingle roofs at Lake Norman last 20-25 years; Class 4 impact-resistant shingles stretch to 25-30. If your LKN roof is approaching this age, it is nearing end-of-life even if it looks fine from the ground.',
    action:
      'Schedule a free professional inspection. Our certified LKN inspectors use drone aerial imagery to document remaining life, shingle granule loss, and seal-strip condition — none of which are visible from the ground.',
  },
  {
    number: 2,
    icon: Layers,
    title: 'Curling or Buckling Shingles',
    description:
      'Shingles curling at edges or buckling in the middle indicate weathering and thermal cycling. Lake Norman waterfront homes see even higher humidity than Charlotte, accelerating seal-strip failure and making shingles vulnerable to uplift from lake-effect wind gusts.',
    action:
      'Do not wait. Curling shingles blow off in the 60+ mph wind gusts common during Lake Norman summer storms, exposing the deck to direct water damage.',
  },
  {
    number: 3,
    icon: Wind,
    title: 'Missing Shingles After a Storm',
    description:
      'Waterfront and peninsula homes at Lake Norman take higher wind loads than inland homes — lake-effect gusts can clear tabs that otherwise would have held. Even a few missing shingles compromise the entire roof system and can void manufacturer warranties.',
    action:
      'Patch missing shingles temporarily, but if tabs are blowing off regularly, your seal strips have failed system-wide and a full replacement is the durable fix. This is also insurance-claim territory — document with dates and photos.',
  },
  {
    number: 4,
    icon: Droplets,
    title: 'Granules in Your Gutters',
    description:
      'Sandy, dark granules at the base of downspouts mean your shingles are shedding their UV-protective coating. Without granules, shingles deteriorate rapidly under Lake Norman\'s intense summer UV exposure and reflected-light from the lake itself.',
    action:
      'Check gutters after rain. A trace on new roofs is normal, but heavy shedding on 15+ year old LKN roofs signals the shingles are in the back half of their life — start budgeting for replacement.',
  },
  {
    number: 5,
    icon: Sun,
    title: 'Daylight Through Roof Boards',
    description:
      'If you see daylight through your attic sheathing, water gets through too. This indicates gaps, deck holes, or rotted OSB — often from prolonged leaks near valleys, flashing, or ice-dam points on shaded north-facing slopes common on wooded LKN lots.',
    action:
      'Inspect your attic on a sunny day. Any visible light means a penetration. Call for an inspection immediately — deck replacement is far cheaper than interior mold remediation.',
  },
  {
    number: 6,
    icon: AlertTriangle,
    title: 'Sagging Roof Deck',
    description:
      'A sagging roofline is a structural emergency. At Lake Norman it is often caused by prolonged moisture from pinhole leaks, ice-and-water shield failure at eaves, or — on older lakefront homes — undersized rafter spans that have creeped over decades of heavy shake or slate loads.',
    action:
      'A sagging roof can fail without warning. Contact a roofing contractor the same day. Best Roofing Now responds 24/7 across Cornelius, Davidson, Mooresville, Huntersville, and Denver.',
  },
  {
    number: 7,
    icon: CloudRain,
    title: 'Water Stains on Your Ceiling',
    description:
      'Brown or yellow ceiling stains mean active leaks. Lake Norman gets 44.4 inches of annual rainfall (NOAA KCLT Climate Normals), so even pinhole leaks compound quickly into drywall replacement and mold remediation.',
    action:
      'Photograph the stain locations with dates. Water travels along rafters, so the entry point may be several feet away from where it shows inside. A professional inspection traces the actual source.',
  },
  {
    number: 8,
    icon: TrendingUp,
    title: 'Rising Energy Bills',
    description:
      'A sudden HVAC bill climb can indicate failed attic ventilation or insulation. Lake Norman summers push attic temperatures to 150°F+, and without proper ridge + soffit venting the whole house cooling load grows while shingles bake from below.',
    action:
      'Compare year-over-year utility usage. If costs climbed without lifestyle changes, schedule a roof + attic ventilation assessment.',
  },
  {
    number: 9,
    icon: Droplets,
    title: 'Moss or Algae Growth',
    description:
      'Green moss and dark streaks (Gloeocapsa magma algae) thrive in Lake Norman\'s humid, tree-shaded lots — especially near Davidson, along the wooded lake shoreline, and in mature sections of The Peninsula, River Run, and Northstone. Algae is cosmetic; moss traps moisture and destroys shingles.',
    action:
      'Light algae can be treated with a soft-wash service. Heavy moss usually means the shingles underneath are already compromised — get a professional condition assessment, not just a cleaning quote.',
  },
  {
    number: 10,
    icon: Home,
    title: 'Neighbors Are Replacing Their Roofs',
    description:
      'Lake Norman neighborhoods are typically built in waves — The Peninsula (late 1990s-2000s), Birkdale (late 1990s-2010s), Northstone (1990s), The Point (2000s). If neighbors with the same-era builds are replacing roofs, yours is likely due as well.',
    action:
      'Use the neighborhood replacement wave as a prompt. Proactive replacement avoids emergency pricing during the busy spring/summer hail season and gives you time to work through HOA / ARC approvals in communities like The Peninsula and The Point.',
  },
];

const materialLifespans = [
  { material: 'Asphalt (3-Tab)', lifespan: '15-20 years', notes: 'Rarely used new on LKN homes; lowest tier' },
  { material: 'Architectural Shingles', lifespan: '20-30 years', notes: 'Workhorse material for LKN subdivisions' },
  { material: 'Class 4 Impact-Resistant', lifespan: '25-30 years', notes: 'Preferred for hail-prone LKN; insurance discount' },
  { material: 'Cedar Shake', lifespan: '25-40 years', notes: 'Common on older lakefront & craftsman homes' },
  { material: 'Synthetic Slate (DaVinci, Brava)', lifespan: '40-50+ years', notes: 'ARC-approved in The Peninsula, The Point, River Run' },
  { material: 'Standing Seam Metal', lifespan: '50-70 years', notes: 'Best for waterfront wind loads; Kynar 500 finish' },
  { material: 'Natural Slate', lifespan: '75-150+ years', notes: 'Premium estate homes; Buckingham, Vermont, North Country' },
  { material: 'Clay or Concrete Tile', lifespan: '50-100+ years', notes: 'Mediterranean estates; requires engineered rafters' },
];

const faqs = [
  {
    question: 'How long does a roof last at Lake Norman NC?',
    answer:
      'At Lake Norman, architectural asphalt shingle roofs typically last 20-25 years, Class 4 impact-resistant shingles 25-30 years, standing-seam metal 50-70 years, cedar shake 25-40 years, synthetic slate 40-50+ years, and natural slate 75-150+ years. Waterfront and peninsula homes see slightly shorter asphalt life due to higher wind exposure and reflected UV. The 44.4 inches of annual rainfall and 47 thunderstorm days per year at Charlotte/Lake Norman (NOAA KCLT Climate Normals) shorten roof life versus drier climates.',
  },
  {
    question: 'What are the earliest signs of a failing Lake Norman roof?',
    answer:
      'The earliest signs are granules accumulating in gutters, shingles looking darker or "wet" in spots, minor edge curling, and slightly higher energy bills. On lakefront homes, watch for seal-strip failure on windward-facing slopes — shingles that lift in normal wind but reseat when still often lose their bond for good after 2-3 cycles. These early indicators typically appear 2-5 years before major problems, giving time to plan and budget.',
  },
  {
    question: 'Should I repair or replace my Lake Norman roof?',
    answer:
      'Repair is appropriate when damage is limited to a small area (under 25-30%), your roof is under 15 years old, and the decking is sound. Replacement is recommended when your roof is 20+ years old, damage is widespread, you have recurring leaks, the deck shows sagging or rot, or repair costs exceed 50% of replacement cost. For HOA communities like The Peninsula, The Point, and River Run, we also factor in ARC approval timing — replacement windows around the ARC cycle can take 2-6 weeks.',
  },
  {
    question: 'How much does a new roof cost in Lake Norman?',
    answer:
      'A new Lake Norman roof typically runs $9,875-$15,000 for architectural shingles on a 2,500 sqft home, $12,500-$20,000 for Class 4 impact-resistant, $22,500-$45,000 for synthetic slate, $30,000-$55,000 for standing-seam metal, and $50,000-$125,000+ for natural slate. Luxury lake estates at The Peninsula, The Point, and River Run (4,500-10,000 sqft) typically run $40,000 to $300,000+ for full replacement. See our Lake Norman roofing costs guide for 2026 pricing by city.',
  },
  {
    question: 'Does insurance cover roof replacement at Lake Norman?',
    answer:
      'Yes — NC HO-3 homeowners policies cover sudden-and-accidental damage including hail, wind, tree fall, and storm events. Wear-and-tear is excluded. Lake Norman sees 3-5 reportable hail events per year (NOAA SPC) and 60+ mph wind gusts in severe storms (NWS). NC has a 3-year statute of limitations on storm-damage claims (NC Gen Stat §1-52). Best Roofing Now handles claim documentation, attends adjuster appointments, and advocates for supplementals at no extra cost.',
  },
  {
    question: 'How long does a Lake Norman roof replacement take?',
    answer:
      'Most residential Lake Norman roof replacements take 1-2 days for architectural shingles on a 2,500 sqft home. Metal roofs take 2-4 days. Tile, slate, and cedar shake take 3-7 days. Luxury lake estates over 6,000 sqft at The Peninsula, The Point, or River Run typically run 5-10+ days. Weather is the biggest variable, and HOA/ARC communities may require scheduling around approved construction windows.',
  },
  {
    question: 'What is the best time of year to replace a roof at Lake Norman?',
    answer:
      'October through early December is ideal — cool, dry, stable weather with shingle seal strips bonding well. Spring (March-May) is second best but carries hail-season risk. Summer works with early-morning starts, but mid-afternoon temperatures can make shingles harder to seat. Winter installation is possible on mild days; below 40°F requires hand-sealed shingles. The Lake Norman Chamber and KW Lake Norman agents often time pre-sale roof replacements for late summer listings — we book those windows 8-10 weeks ahead.',
  },
  {
    question: 'Can I stay in my Lake Norman home during roof replacement?',
    answer:
      'Yes, the work is done entirely from the outside. Expect noise during tear-off and install (typically 7 AM to 6 PM). We recommend parking vehicles away from the staging area, securing loose items in the attic, and keeping pets in a quiet part of the house or offsite during the loudest work. For lakefront homes, we coordinate dock access separately if the staging truck needs to approach from the water side.',
  },
];

export default function SignsYouNeedNewRoofLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Signs You Need a New Roof — Lake Norman', url: `${SITE_CONFIG.url}/signs-you-need-new-roof-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <WebPageSchema
        name="Signs You Need a New Roof — Lake Norman NC"
        description="10 warning signs your Lake Norman NC roof needs replacing — with LKN climate, neighborhood, and insurance context."
        url={`${SITE_CONFIG.url}/signs-you-need-new-roof-lake-norman-nc`}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/signs-you-need-new-roof-lake-norman-nc`}
        pageName="Signs You Need a New Roof Lake Norman NC"
        city="Lake Norman"
      />
      <VoiceSearchActionSchema />
      <LKNExpertiseSchema pageUrl={`${SITE_CONFIG.url}/signs-you-need-new-roof-lake-norman-nc`} />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Signs You Need a New Roof — Lake Norman' },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero5}
            alt="Signs you need a new roof in Lake Norman NC"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-semibold">Lake Norman Homeowner Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Signs You Need a New Roof
              <br className="hidden md:block" />
              <span className="text-blue-200">Lake Norman NC Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              10 warning signs every Lake Norman homeowner should watch for
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Not sure if your Lake Norman roof needs replacing? This guide covers the telltale signs of
              a failing roof, how lakefront wind + humidity affect lifespan, and when to call a professional.
              From a Lake Norman Chamber of Commerce member with {SITE_CONFIG.roofsInstalled}+ roofs installed
              across Cornelius, Davidson, Mooresville, Huntersville, and Denver.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/roof-inspection-lake-norman-nc"
                variant="primary"
                size="lg"
                className="bg-white !text-blue-800 hover:bg-blue-50"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Inspection
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-800"
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
                <Shield className="w-5 h-5 text-blue-200" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-200" />
                LKN Chamber Member
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Warning Signs */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Warning Signs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              10 Signs Your Lake Norman Roof Needs Replacing
            </h2>
            <p className="text-gray text-lg">
              Catching these early saves thousands in water damage, mold remediation, and emergency repairs.
              Here are the top indicators Lake Norman roofers look for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {warningSigns.map((sign) => (
              <div
                key={sign.number}
                className="bg-light rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <sign.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center justify-center w-7 h-7 bg-primary text-white text-sm font-bold rounded-full">
                        {sign.number}
                      </span>
                      <h3 className="font-bold text-dark">{sign.title}</h3>
                    </div>
                    <p className="text-gray text-sm mb-3">{sign.description}</p>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">What to do:</span> {sign.action}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LKN Climate Impact */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <ThermometerSun className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Lake Norman Climate Factors</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How Lake Norman&apos;s Climate Affects Your Roof
              </h2>
              <p className="text-gray text-lg">
                Waterfront and peninsula homes face higher wind loads, more reflected UV, and faster shingle
                aging than inland homes — here&apos;s why.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Wind className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-dark mb-2">Lake-Effect Wind Gusts</h3>
                <p className="text-gray text-sm">
                  Open water creates unobstructed fetch across Lake Norman — severe summer storms commonly
                  produce 60+ mph gusts at shoreline homes (NWS Greer). Seal-strip failure shows up here first,
                  especially on windward (typically west and south) slopes.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <ThermometerSun className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-dark mb-2">Humidity & Reflected UV</h3>
                <p className="text-gray text-sm">
                  Lake Norman summers hit 70-80% humidity with 90°F+ days. Lakefront homes also catch reflected
                  UV from the water itself, aging south-facing shingles 3-5 years faster than comparable inland
                  lots.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <CloudRain className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-bold text-dark mb-2">Hail + Thunderstorm Days</h3>
                <p className="text-gray text-sm">
                  Charlotte/Lake Norman averages 47 thunderstorm days per year (NOAA NCEI) and 3-5 reportable
                  hail events (NOAA SPC). IBHS recommends Class 4 impact-resistant shingles for Mecklenburg,
                  Iredell, Lincoln, and Catawba counties.
                </p>
              </div>
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
                Seeing These Warning Signs?
              </h2>
              <p className="text-white/90">
                Free no-obligation Lake Norman roof inspection — drone imagery + written report.
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
                Schedule Free Inspection
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

      {/* Material Lifespan */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Material Lifespans</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How Long Do Lake Norman Roofs Last?
              </h2>
              <p className="text-gray text-lg">
                Roof lifespan depends on material, installation quality, and exposure. Here is what to expect
                from common materials in the Lake Norman climate.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-light rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-4 px-6 font-semibold">Material</th>
                    <th className="text-left py-4 px-6 font-semibold">Expected Lifespan</th>
                    <th className="text-left py-4 px-6 font-semibold hidden md:table-cell">Lake Norman Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {materialLifespans.map((item, index) => (
                    <tr key={item.material} className={index % 2 === 0 ? 'bg-white' : 'bg-light'}>
                      <td className="py-4 px-6 font-semibold text-dark">{item.material}</td>
                      <td className="py-4 px-6 text-primary font-bold">{item.lifespan}</td>
                      <td className="py-4 px-6 text-gray text-sm hidden md:table-cell">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-blue-50 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-dark mb-1">Pro Tip from Our Lake Norman Roofers</p>
                  <p className="text-gray text-sm">
                    These lifespans assume proper installation and ridge+soffit attic ventilation. LKN waterfront
                    exposure can reduce asphalt lifespan by 3-5 years without adequate ventilation. Ask about our
                    free ventilation assessment during your inspection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair vs Replace */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Repair or Replace? A Quick Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-green-500">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Consider Repair When
                </h3>
                <ul className="space-y-3">
                  {[
                    'Damage is limited to a small area (under 30%)',
                    'Your roof is less than 15 years old',
                    'Only a few shingles are missing or damaged',
                    'Flashing around one vent or chimney needs resealing',
                    'The underlying decking is still solid',
                    'No HOA / ARC color or style issues on the existing roof',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray text-sm">
                      <ArrowRight className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-red-500">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  Consider Replacement When
                </h3>
                <ul className="space-y-3">
                  {[
                    'Your roof is over 20 years old',
                    'Damage covers more than 30% of the roof',
                    'You have recurring or multiple leaks',
                    'The roof deck is sagging or rotting',
                    'Repair costs exceed 50% of replacement cost',
                    'You\'re preparing to list with KW Lake Norman or a realtor',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray text-sm">
                      <ArrowRight className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Lake Norman Roof Replacement FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions Lake Norman homeowners ask.
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

      <LKNPartnershipsBlock city={"Lake Norman"} />
      <LKNDataCitations city={"Lake Norman"} />

      {/* Related */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Related Lake Norman Resources</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: 'Free Roof Inspection (LKN)', href: '/roof-inspection-lake-norman-nc', desc: 'Drone imagery + written report' },
                { title: 'Lake Norman Roofing Guide', href: '/lake-norman-roofing-guide', desc: '20,000-word pillar guide' },
                { title: 'Lake Norman Roofing Costs 2026', href: '/lake-norman-roofing-costs-2026', desc: 'Current pricing by material' },
                { title: 'Waterfront Roofing', href: '/lake-norman-waterfront-roofing', desc: 'Wind-resistant waterfront systems' },
                { title: 'Storm Damage Guide', href: '/lake-norman-storm-damage-guide', desc: 'Post-storm response playbook' },
                { title: 'Insurance Claim Help', href: '/insurance-claim-roofing-lake-norman-nc', desc: 'Claim adjuster advocacy' },
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
        pageType="location"
        city="Lake Norman"
        slug="signs-you-need-new-roof-lake-norman-nc"
        count={4}
        title="Recent Roof Replacements Across Lake Norman"
        subtitle="Browse completed roof replacement projects by Best Roofing Now across Cornelius, Davidson, Mooresville, Huntersville, and Denver."
        schemaPageUrl={`${SITE_CONFIG.url}/signs-you-need-new-roof-lake-norman-nc`}
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman-nc"
        service="Roof Replacement Guide"
      />

      <CTASection
        title="Ready for a Professional Lake Norman Roof Assessment?"
        subtitle="Certified inspectors, honest recommendations. Free drone + ground inspections for all Lake Norman homeowners — Cornelius, Davidson, Mooresville, Huntersville, Denver, Sherrills Ford."
      />
    </>
  );
}
