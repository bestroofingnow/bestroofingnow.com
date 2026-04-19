import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, Sun, Leaf, Snowflake, Flower, CheckCircle, HelpCircle, CloudRain, AlertTriangle } from 'lucide-react';
import { SITE_CONFIG, SEASONAL_ROOFING } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import {
  BreadcrumbSchema,
  WebPageSchema,
  CollectionPageSchema,
  FAQSchema,
  SpeakableContentBlocks,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Seasonal Roofing Services | Charlotte NC Year-Round',
  description:
    'Spring hail/storm inspections, summer re-roof and heat prep, fall gutter/winter prep, winter ice and emergency service for Charlotte NC and Lake Norman. Free estimates.',
  keywords: [
    'seasonal roofing charlotte nc',
    'spring roof inspection charlotte',
    'summer roof replacement nc',
    'fall roof maintenance lake norman',
    'winter roof repair charlotte',
    'hail season roofing nc',
    'hurricane season roof prep',
    'ice storm roof damage charlotte',
    'piedmont nc roof weather',
    'pre-winter roof inspection',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/seasonal`,
  },
  openGraph: {
    title: 'Seasonal Roofing Services | Charlotte NC | Best Roofing Now',
    description: 'Year-round roofing services keyed to Piedmont NC weather patterns — hail season, hurricane remnants, winter freeze-thaw, summer heat.',
    url: `${SITE_CONFIG.url}/seasonal`,
    type: 'website',
  },
};

const seasonIcons = {
  Spring: Flower,
  Summer: Sun,
  Fall: Leaf,
  Winter: Snowflake,
};

const seasonColors = {
  Spring: 'bg-green-50 text-green-600',
  Summer: 'bg-yellow-50 text-yellow-600',
  Fall: 'bg-orange-50 text-orange-600',
  Winter: 'bg-blue-50 text-blue-600',
};

const whatYoullFind = [
  'Season-specific checklists keyed to Piedmont NC weather patterns',
  'Hail-belt months (Apr–Aug) and tropical-remnant window (Aug–Oct)',
  'Re-roofing scheduling guidance (temperature, adhesive cure)',
  'DIY pre-storm and post-storm inspection steps',
  'Emergency response coverage 24/7 across all seasons',
  'Winter freeze-thaw and ice-dam prevention for our rare-but-severe cold snaps',
];

interface SeasonCallout {
  icon: typeof CloudRain;
  title: string;
  context: string;
  priority: string;
}

const pieldmontWeatherCallouts: SeasonCallout[] = [
  {
    icon: CloudRain,
    title: 'Hail Belt Peak (May–June)',
    context: 'NOAA records 3–5 hail days per year for Mecklenburg County, with severe events most common in May and June. Stones occasionally exceed 2" — undetectable from the ground.',
    priority: 'Spring inspections before Apr 1; post-storm inspections within 48 hours.',
  },
  {
    icon: AlertTriangle,
    title: 'Tropical Remnants (Aug–Oct)',
    context: 'Atlantic hurricane remnants (Florence 2018, Isaias 2020, Helene 2024) routinely bring 40–60 MPH sustained winds and 4"+ rainfall across the Charlotte metro. Lakefront Lake Norman faces longer wind fetch.',
    priority: 'Fall pre-hurricane prep by Aug 1. Emergency dispatch stays on-call through Oct 31.',
  },
  {
    icon: Sun,
    title: 'Summer Heat (Jun–Sep)',
    context: 'Charlotte sees 30+ days above 90°F. Dark asphalt shingles can reach 160°F surface temperature, accelerating granule loss and oxidation. White TPO, reflective coatings, and Energy Star shingles meaningfully reduce HVAC load.',
    priority: 'Ventilation audits; consider upgrading to reflective materials on re-roofs.',
  },
  {
    icon: Snowflake,
    title: 'Winter Freeze-Thaw (Dec–Feb)',
    context: 'Charlotte winters are mostly mild, but severe ice events occur every 3–5 years (the 2002, 2014, and 2026 ice storms caused widespread damage). Freeze-thaw cycling cracks sealants and loosens flashings.',
    priority: 'Pre-winter inspection by Dec 1; ice-dam monitoring during sustained freezes.',
  },
];

const faqs = [
  { question: 'What is the best time of year to replace a roof in Charlotte NC?', answer: 'Spring (Apr–early Jun) and fall (Sep–Nov) are optimal. Temperatures between 50°F and 85°F allow asphalt shingle adhesive strips to seal properly and reduce crew fatigue. Summer installs are fine with experienced crews but run earlier/hotter starts. Winter is possible on mild weeks — but requires hand-sealing every shingle if sustained temperatures fall below 40°F, adding labor cost. We schedule Charlotte and Lake Norman re-roofs year-round; the question is scheduling lead time (3–5 weeks in spring/fall peak, 1–2 weeks in winter off-season).' },
  { question: 'When should I schedule my seasonal roof inspection?', answer: 'Two inspections per year is the gold standard: (1) spring post-winter inspection in March or early April — catches freeze-thaw flashing damage and sets baseline before hail season; (2) fall pre-winter inspection in October or early November — gutter cleanout, ventilation check, pre-ice storm prep. Additional inspections after any significant storm event (hail 1"+, sustained wind 50+ MPH, fallen trees within 500 ft). Inspections are free for Charlotte and Lake Norman homeowners.' },
  { question: 'What seasonal roof damage is most common in Charlotte and Lake Norman?', answer: 'By season: (1) Spring: hail impact damage, wind-lifted shingles from late-season squall lines, post-winter flashing separation. (2) Summer: thunderstorm wind damage, tree limbs down, granule scatter from heavy downpours. (3) Fall: clogged gutters from leaf debris, tropical remnant wind damage (Aug–Oct peak), pre-winter seal degradation. (4) Winter: ice damming (rare but severe in Charlotte), freeze-thaw cracking at sealants, ice-storm shingle breakage, emergency leaks after melt events.' },
  { question: 'Do you install roofs in winter in Charlotte NC?', answer: 'Yes — but with modifications. Below 40°F sustained, asphalt self-seal strips will not activate naturally, so we hand-seal every shingle with roofing mastic. This adds 10–20% to labor cost but maintains manufacturer warranty compliance. We prefer to scope winter installs only when weather windows allow daytime highs above 45°F. For truly cold weeks, we typically schedule emergency-only work and hold replacements until the next warm window. Metal and flat-roof systems have different cold-weather constraints handled per manufacturer spec.' },
  { question: 'What should I do to prepare my roof for hurricane season?', answer: 'By August 1 for Charlotte and Lake Norman: (1) Schedule a pre-hurricane inspection — check flashings, sealants, missing or lifted shingles; (2) Clean gutters and downspouts of spring/summer debris so they drain 4"+ per hour; (3) Trim tree limbs within 10 ft of the roofline; (4) Document current roof condition with photos for potential insurance claims; (5) Know your wind/hail deductible — waterfront Lake Norman policies sometimes carry separate percentage-based deductibles for named storms. We offer pre-hurricane inspections at no cost through July 31 each year.' },
  { question: 'Do you offer emergency roof repair in winter ice storms?', answer: 'Yes. Our 24/7 emergency dispatch runs year-round across Charlotte, Lake Norman, and surrounding counties. Winter ice events require specific response protocols — we do not walk icy roofs for cosmetic repairs, but we will tarp active leaks from ground-level lifts, mitigate interior water damage, and document damage for insurance. Full repairs wait for thaw and safe access. Our typical response for active interior leaks is under 4 hours even during ice events.' },
  { question: 'How does weather affect my roof repair scheduling with Best Roofing Now?', answer: 'Typical scheduling lead times by season for non-emergency work: spring (Mar–May) 3–5 weeks due to post-winter demand and hail season; summer (Jun–Aug) 2–4 weeks; fall (Sep–Nov) 3–6 weeks due to tropical remnants and pre-winter rush; winter (Dec–Feb) 1–2 weeks off-peak. Emergency and tarping service is same-day to 72-hour year-round. We prioritize active leaks, storm damage, and insurance claim work within 24 hours regardless of season.' },
  { question: 'Are there seasonal discounts on roofing work in Charlotte?', answer: 'We do not offer aggressive season-based discounts — pricing is driven by labor, materials, and warranty tier, not time of year. However, winter off-season (Jan–Feb) typically has better crew availability and we can sometimes share a small efficiency gain when bundling multiple projects in the same neighborhood. The biggest price protection is locking in a signed contract before manufacturer price increases, which tend to land in March and September each year.' },
];

export default function SeasonalPage() {
  const pageUrl = `${SITE_CONFIG.url}/seasonal`;

  const items = SEASONAL_ROOFING.map((s) => ({
    name: `${s.season} Roofing`,
    url: `${SITE_CONFIG.url}/seasonal/${s.slug}`,
    description: s.description,
  }));

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Seasonal Roofing', url: pageUrl },
        ]}
      />
      <WebPageSchema
        name="Seasonal Roofing Services | Charlotte NC Year-Round"
        description="Spring hail/storm inspections, summer re-roof and heat prep, fall gutter/winter prep, winter ice and emergency service for Charlotte NC and Lake Norman."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Seasonal Roofing', url: pageUrl },
        ]}
      />
      <CollectionPageSchema
        name="Seasonal Roofing Services"
        description="Year-round roofing services keyed to Piedmont NC weather patterns — spring, summer, fall, winter — with seasonal checklists and emergency coverage."
        url={pageUrl}
        items={items}
      />
      <FAQSchema faqs={faqs} />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Seasonal Roofing Services" />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Seasonal Roofing' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Seasonal Roofing Services
            </h1>
            <p className="speakable-intro text-xl text-white/90 mb-8">
              Spring hail inspections (peak May–June), summer heat and thunderstorm prep, fall gutter cleanout and hurricane-remnant response (Aug–Oct), winter ice and emergency repair — our year-round service is keyed to actual Piedmont NC weather patterns, not generic maintenance advice. 24/7 emergency dispatch across Charlotte, Lake Norman, and surrounding counties, every season.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Schedule Seasonal Service
            </a>
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What You&apos;ll Find on Every Seasonal Page</h2>
              <p className="text-gray text-lg">Six recurring pillars we cover for each season — grounded in Piedmont NC weather data, not generic advice.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {whatYoullFind.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-light rounded-lg p-4 border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasons Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Seasonal Service Pages</h2>
            <p className="text-gray text-lg">Each season gets a dedicated page with checklists, pricing, scheduling, and emergency coverage details.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {SEASONAL_ROOFING.map((season) => {
              const Icon = seasonIcons[season.season as keyof typeof seasonIcons];
              const colorClass = seasonColors[season.season as keyof typeof seasonColors];
              return (
                <Link
                  key={season.slug}
                  href={`/seasonal/${season.slug}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 border border-gray-100"
                >
                  <div className={`w-14 h-14 ${colorClass} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition">
                    {season.season} Roofing
                  </h3>
                  <p className="text-gray mb-4">
                    {season.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Piedmont NC Weather Callouts */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Piedmont NC Weather Patterns That Shape Our Seasonal Service</h2>
            <p className="text-gray text-lg">Four recurring Charlotte metro weather patterns and how we prepare for each.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pieldmontWeatherCallouts.map((callout) => (
              <div key={callout.title} className="bg-light rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <callout.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-dark text-lg">{callout.title}</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">{callout.context}</p>
                <p className="text-xs text-primary font-medium">
                  {callout.priority}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year-Round Service */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Year-Round Roofing Protection
            </h2>
            <p className="text-gray mb-8">
              Your roof works 24/7/365 to protect your home. That&apos;s why we offer
              services tailored to each season&apos;s unique demands.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <Flower className="w-10 h-10 text-green-500 mx-auto mb-3" aria-hidden="true" />
                <h3 className="font-bold text-primary mb-2">Spring</h3>
                <p className="text-gray text-sm">Post-winter inspections &amp; hail-season prep</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <Sun className="w-10 h-10 text-yellow-500 mx-auto mb-3" aria-hidden="true" />
                <h3 className="font-bold text-primary mb-2">Summer</h3>
                <p className="text-gray text-sm">Replacements &amp; reflective-material upgrades</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <Leaf className="w-10 h-10 text-orange-500 mx-auto mb-3" aria-hidden="true" />
                <h3 className="font-bold text-primary mb-2">Fall</h3>
                <p className="text-gray text-sm">Hurricane-remnant prep &amp; gutter cleaning</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <Snowflake className="w-10 h-10 text-blue-500 mx-auto mb-3" aria-hidden="true" />
                <h3 className="font-bold text-primary mb-2">Winter</h3>
                <p className="text-gray text-sm">Emergency repairs &amp; ice-dam response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Roof */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              When is the Best Time for Roof Work?
            </h2>

            <div className="bg-primary/5 rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-primary mb-2">For Roof Replacement:</h3>
                  <p className="text-gray">
                    <strong>Spring and Fall</strong> offer the best conditions — mild temperatures
                    allow shingles to seal properly, and you avoid summer heat and winter cold.
                    Lead time is 3–6 weeks peak season.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-primary mb-2">For Inspections:</h3>
                  <p className="text-gray">
                    <strong>Spring (post-winter, Mar–Apr)</strong> and <strong>Fall (pre-winter, Oct–Nov)</strong>
                    {' '}are ideal times to catch damage before it worsens. Inspections are free across our service area.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-primary mb-2">For Emergency Repairs:</h3>
                  <p className="text-gray">
                    <strong>Any time!</strong> We provide 24/7 emergency services year-round.
                    Don&apos;t wait — water damage gets worse every day. Typical response for tarping is under 3 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Scheduling &amp; Seasonal Prep</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Seasonal Roofing FAQs</h2>
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

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Seasonal Roof Care?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need a spring inspection, summer replacement, or winter
            emergency repair, we&apos;re here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-accent hover:bg-light text-lg px-8"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
