import { Metadata } from 'next';
import Image from 'next/image';
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
  Zap,
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
  title: 'Signs You Need a New Roof',
  description:
    'How to tell if you need a new roof in Charlotte NC. 10 warning signs including curling shingles, granule loss, sagging, leaks, and age. Free roof inspections from BBB A+ rated, veteran-owned roofers.',
  keywords: [
    'signs you need a new roof charlotte nc',
    'when to replace roof charlotte',
    'how to tell if roof needs replacing',
    'roof replacement signs',
    'aging roof signs charlotte nc',
    'damaged roof indicators',
    'roof lifespan charlotte nc',
    'do i need a new roof',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/signs-you-need-new-roof-charlotte-nc`,
  },
  openGraph: {
    title: 'Signs You Need a New Roof | Charlotte NC Guide | Best Roofing Now',
    description:
      '10 warning signs your Charlotte NC roof needs replacing. Expert guide from certified local roofers. Free inspections available.',
    url: `${SITE_CONFIG.url}/signs-you-need-new-roof-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero5,
        width: 1200,
        height: 630,
        alt: 'Signs you need a new roof - Charlotte NC guide by Best Roofing Now',
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
      'Most asphalt shingle roofs in Charlotte last 20-25 years. If your roof is approaching or past this age, it is likely nearing the end of its useful life, even if it looks fine from the ground.',
    action:
      'Schedule a professional inspection to assess remaining life. Our certified inspectors can determine exactly how much time your roof has left.',
  },
  {
    number: 2,
    icon: Layers,
    title: 'Curling or Buckling Shingles',
    description:
      'Shingles that curl at the edges or buckle in the middle indicate weathering and moisture damage. Charlotte\'s humidity accelerates this process, making shingles lose their seal and become vulnerable to wind uplift.',
    action:
      'Do not wait. Curling shingles can blow off in Charlotte\'s frequent thunderstorms, exposing your deck to water damage.',
  },
  {
    number: 3,
    icon: Wind,
    title: 'Missing Shingles',
    description:
      'Gaps in your shingle coverage leave your roof deck exposed to rain, UV rays, and pests. Even a few missing shingles compromise your entire roof system and can void manufacturer warranties.',
    action:
      'Replace missing shingles immediately as a temporary fix, but if shingles are blowing off regularly, a full replacement is likely needed.',
  },
  {
    number: 4,
    icon: Droplets,
    title: 'Granules in Your Gutters',
    description:
      'Finding dark, sand-like granules in your gutters or at the base of downspouts means your shingles are shedding their protective coating. Without granules, shingles deteriorate rapidly under Charlotte\'s intense UV exposure.',
    action:
      'Check your gutters after rain. A small amount of granule loss on new roofs is normal, but heavy shedding on older roofs signals replacement time.',
  },
  {
    number: 5,
    icon: Sun,
    title: 'Daylight Through Roof Boards',
    description:
      'If you can see light coming through your attic roof boards, water can get through too. This indicates gaps, holes, or deteriorated decking that require immediate attention.',
    action:
      'Go into your attic on a sunny day and look up. Any visible light means water is finding a way in. Call for an inspection right away.',
  },
  {
    number: 6,
    icon: AlertTriangle,
    title: 'Sagging Roof Deck',
    description:
      'A sagging roofline is one of the most serious warning signs. It indicates structural damage, often from prolonged moisture exposure that has rotted the decking or compromised the rafters.',
    action:
      'A sagging roof is an emergency. Contact a roofing contractor immediately, as structural failure can occur without warning.',
  },
  {
    number: 7,
    icon: CloudRain,
    title: 'Water Stains on Your Ceiling',
    description:
      'Brown or yellowish stains on interior ceilings or walls indicate active roof leaks. Charlotte\'s frequent rain events mean even small leaks cause significant damage over time, including mold growth.',
    action:
      'Document the stain locations and call for an inspection. Water travels along rafters, so the leak source may not be directly above the stain.',
  },
  {
    number: 8,
    icon: TrendingUp,
    title: 'Rising Energy Bills',
    description:
      'A sudden increase in heating or cooling costs can indicate poor roof ventilation or insulation failure. Damaged roofing allows conditioned air to escape and outside air to infiltrate your attic.',
    action:
      'Compare your energy bills year over year. If costs are climbing without usage changes, have your roof and attic ventilation inspected.',
  },
  {
    number: 9,
    icon: Droplets,
    title: 'Moss or Algae Growth',
    description:
      'Green moss or dark algae streaks are common on Charlotte roofs due to our humid climate. While algae is mostly cosmetic, moss traps moisture against shingles and accelerates decay.',
    action:
      'Light algae can be treated, but heavy moss growth often means moisture has compromised the shingles underneath. Get a professional assessment.',
  },
  {
    number: 10,
    icon: Home,
    title: 'Neighbors Are Replacing Their Roofs',
    description:
      'Homes built around the same time in Charlotte subdivisions typically need roof replacement within a few years of each other. If multiple neighbors are getting new roofs, yours is likely due as well.',
    action:
      'Use your neighbors\' replacements as a prompt to schedule your own inspection. Proactive replacement avoids emergency situations.',
  },
];

const materialLifespans = [
  { material: 'Asphalt (3-Tab)', lifespan: '15-20 years', notes: 'Most affordable option; shorter life in Charlotte heat' },
  { material: 'Architectural Shingles', lifespan: '20-30 years', notes: 'Best value for Charlotte homes; wind-resistant' },
  { material: 'Metal Roofing', lifespan: '40-70 years', notes: 'Excellent for Charlotte storms; energy-efficient' },
  { material: 'Slate Roofing', lifespan: '75-100 years', notes: 'Premium option; found on historic Charlotte homes' },
  { material: 'Tile Roofing', lifespan: '50-75 years', notes: 'Durable; popular for Mediterranean-style homes' },
  { material: 'TPO/EPDM (Flat)', lifespan: '20-30 years', notes: 'Commercial flat roofs; requires regular maintenance' },
];

const faqs = [
  {
    question: 'How long does a roof last in Charlotte NC?',
    answer:
      'In Charlotte NC, asphalt shingle roofs typically last 20-25 years, architectural shingles last 25-30 years, and metal roofs can last 40-70 years. Charlotte\'s hot summers, high humidity, and severe thunderstorms can reduce roof lifespan compared to milder climates. Regular maintenance and quality installation from a certified contractor help maximize your roof\'s lifespan.',
  },
  {
    question: 'What are the first signs of a failing roof?',
    answer:
      'The earliest signs of a failing roof include granules accumulating in gutters, shingles that appear darker or wet-looking in certain spots, and minor curling at shingle edges. You may also notice slightly higher energy bills or small water stains in your attic. These early warning signs often appear 2-5 years before major problems develop, giving you time to plan and budget for replacement.',
  },
  {
    question: 'Should I repair or replace my roof?',
    answer:
      'Repair is appropriate when damage is limited to a small area (less than 30% of the roof), your roof is less than 15 years old, and the underlying decking is sound. Replacement is recommended when your roof is over 20 years old, damage is widespread, you have recurring leaks, or repair costs exceed 50% of replacement cost. Our inspectors provide honest assessments to help you make the right decision.',
  },
  {
    question: 'How much does a new roof cost in Charlotte NC?',
    answer:
      'A new roof in Charlotte typically costs between $8,000 and $25,000 for most homes, depending on size, pitch, material, and complexity. Architectural shingles average $4.50-$7.00 per square foot installed, while metal roofing ranges from $8.00-$14.00 per square foot. Best Roofing Now provides free, detailed estimates with transparent pricing and flexible financing options.',
  },
  {
    question: 'Does insurance cover roof replacement in Charlotte?',
    answer:
      'Homeowners insurance typically covers roof replacement when damage is caused by a covered event such as hail, wind, fallen trees, or other storms. Normal wear and aging are generally not covered. Charlotte sees frequent severe weather, and many roofs qualify for insurance claims. Best Roofing Now helps with documentation, meets with adjusters, and advocates for fair settlements at no extra cost.',
  },
  {
    question: 'How long does a roof replacement take?',
    answer:
      'Most residential roof replacements in Charlotte take 1-3 days, depending on the size and complexity of your roof. Larger homes or those requiring decking repairs may take 3-5 days. Weather is the biggest variable. Our team works efficiently while maintaining quality standards, and we always clean up thoroughly at the end of each work day.',
  },
  {
    question: 'What is the best time of year to replace a roof in Charlotte?',
    answer:
      'The best times to replace a roof in Charlotte are spring (March-May) and fall (September-November) when temperatures are moderate and rain is less frequent. However, roofs can be replaced year-round in Charlotte\'s mild climate. Summer installations are common but require early morning starts to manage heat. Winter is least popular but often offers the shortest wait times and potential discounts.',
  },
  {
    question: 'Can I stay in my home during roof replacement?',
    answer:
      'Yes, you can stay in your home during roof replacement. The work is done entirely from the outside. Expect some noise during the tear-off and installation phases, typically from 7 AM to 6 PM. We recommend parking vehicles away from the house and securing any loose items in the attic. Pets may be more comfortable in a quieter part of the home or away during the loudest work.',
  },
];

export default function SignsYouNeedNewRoofCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Signs You Need a New Roof', url: `${SITE_CONFIG.url}/signs-you-need-new-roof-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <WebPageSchema
        name="Signs You Need a New Roof in Charlotte NC"
        description="10 warning signs your Charlotte NC roof needs replacing. Expert guide covering age, shingle damage, leaks, and more."
        url={`${SITE_CONFIG.url}/signs-you-need-new-roof-charlotte-nc`}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/signs-you-need-new-roof-charlotte-nc`}
        pageName="Signs You Need a New Roof Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Signs You Need a New Roof' },
        ]}
      />

      {/* Hero Section - Educational/Guide Style */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero5}
            alt="Signs you need a new roof in Charlotte NC - inspection guide"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-semibold">Homeowner Education Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Signs You Need a New Roof
              <br className="hidden md:block" />
              <span className="text-blue-200">Charlotte NC Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              10 warning signs every Charlotte homeowner should watch for
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Not sure if your roof needs replacing? This guide covers the telltale signs of a failing roof,
              how Charlotte&apos;s climate affects roof lifespan, and when to call a professional. From our
              team with {SITE_CONFIG.roofsInstalled}+ roofs installed across the Charlotte metro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/roof-inspection-charlotte-nc"
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
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Warning Signs Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Warning Signs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              10 Signs Your Charlotte Roof Needs Replacing
            </h2>
            <p className="text-gray text-lg">
              Catching these warning signs early can save you thousands in water damage, mold remediation,
              and emergency repairs. Here are the top indicators Charlotte roofers look for.
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

      {/* Charlotte Climate Impact Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <ThermometerSun className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Local Climate Factors</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How Charlotte&apos;s Climate Affects Your Roof
              </h2>
              <p className="text-gray text-lg">
                Charlotte&apos;s unique climate conditions create specific challenges that impact roof longevity
                more than many other regions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <ThermometerSun className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-dark mb-2">High Humidity & Heat</h3>
                <p className="text-gray text-sm">
                  Charlotte averages 70-80% humidity in summer with temperatures regularly exceeding 90 degrees F.
                  This combination causes thermal expansion and contraction that weakens shingle adhesive and
                  accelerates granule loss. Roofs here age faster than in drier climates.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CloudRain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-dark mb-2">Severe Thunderstorms</h3>
                <p className="text-gray text-sm">
                  Charlotte sees 40-50 thunderstorm days per year, primarily from May through September.
                  High winds, hail, and heavy rain are common. These storms can cause immediate damage or
                  create small vulnerabilities that worsen over time without visible signs.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-bold text-dark mb-2">Intense UV Exposure</h3>
                <p className="text-gray text-sm">
                  With over 210 sunny days per year, Charlotte roofs absorb significant UV radiation.
                  UV light breaks down the petroleum-based compounds in asphalt shingles, causing them
                  to become brittle and crack. South-facing roof slopes often age faster than north-facing ones.
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
                Get a free, no-obligation roof inspection from Charlotte&apos;s most trusted roofing company.
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

      {/* Material Lifespan Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Material Lifespans</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How Long Do Charlotte Roofs Last?
              </h2>
              <p className="text-gray text-lg">
                Roof lifespan depends on material, installation quality, and maintenance. Here is what to expect
                from common roofing materials in Charlotte&apos;s climate.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-light rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-4 px-6 font-semibold">Material</th>
                    <th className="text-left py-4 px-6 font-semibold">Expected Lifespan</th>
                    <th className="text-left py-4 px-6 font-semibold hidden md:table-cell">Charlotte Notes</th>
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
                  <p className="font-semibold text-dark mb-1">Pro Tip from Our Charlotte Roofers</p>
                  <p className="text-gray text-sm">
                    These lifespans assume proper installation and regular maintenance. Charlotte&apos;s climate
                    can reduce these estimates by 3-5 years without proper attic ventilation. Ask about our
                    ventilation assessment during your free inspection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair vs Replace Section */}
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
                Charlotte Roof Replacement FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions Charlotte homeowners ask about roof replacement.
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
                { title: 'Free Roof Inspection', href: '/roof-inspection-charlotte-nc', desc: 'Schedule a professional assessment' },
                { title: 'Roof Repair Services', href: '/services/roof-repair', desc: 'Fix damage before it spreads' },
                { title: 'Roof Replacement', href: '/services/roof-replacement', desc: 'Full replacement options and costs' },
                { title: 'Storm Damage', href: '/services/storm-damage', desc: 'Emergency repair and insurance help' },
                { title: 'Roofing Handbook', href: '/charlotte-roofing-handbook', desc: 'Complete homeowner guide' },
                { title: 'Maintenance Checklist', href: '/roof-maintenance-checklist-charlotte-nc', desc: 'Seasonal care tips' },
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
        slug="signs-you-need-new-roof-charlotte-nc"
        count={4}
        title="Recent Roof Replacements in Charlotte, NC"
        subtitle="Browse completed roof replacement projects by Best Roofing Now across the Charlotte metro area."
        schemaPageUrl={`${SITE_CONFIG.url}/signs-you-need-new-roof-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roof Replacement Guide"
      />

      <CTASection
        title="Ready for a Professional Roof Assessment?"
        subtitle="Our certified inspectors will evaluate your roof and give you an honest recommendation. Free inspections with detailed photo reports for all Charlotte area homeowners."
      />
    </>
  );
}
