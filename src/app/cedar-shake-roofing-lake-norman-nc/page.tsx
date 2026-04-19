import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import Link from 'next/link';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  ArrowRight,
  HelpCircle,
  Award,
  Users,
  Clock,
  Home,
  Wrench,
  TreePine,
  MapPin,
  Flame,
  Waves,
  Leaf,
  Paintbrush,
  Landmark,
  Sparkles,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
import { LKNHowToBundle } from '@/components/seo/LKNHowToSchemas';
export const metadata: Metadata = {
  title: 'Cedar Shake Roofing Lake Norman NC',
  description:
    'Premium handsplit cedar shake roofing for Lake Norman NC homes. Class A fire-treated Western Red Cedar at $7-$12/sqft installed. 30-50yr lifespan.',
  keywords: [
    'cedar shake roofing lake norman nc',
    'cedar shake roof lake norman',
    'wood shake roof cornelius nc',
    'cedar shingle roofing davidson nc',
    'lake norman cedar roof contractor',
    'fire treated cedar shake mooresville',
    'western red cedar roofing huntersville',
    'lakefront cedar shake roof denver nc',
    'synthetic cedar shake lake norman',
    'cedarbreather underlayment lake norman',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/cedar-shake-roofing-lake-norman-nc`,
  },
  openGraph: {
    title: 'Cedar Shake Roofing Lake Norman NC | Premium Wood Shake | Best Roofing Now',
    description:
      'Lake Norman cedar shake specialists. Handsplit Western Red Cedar, Class A fire-treated. Perfect for craftsman & lakefront cottages. Free estimates.',
    url: `${SITE_CONFIG.url}/cedar-shake-roofing-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Cedar shake roofing Lake Norman NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: TreePine,
    title: 'Handsplit Cedar Shake Installation',
    description:
      'Authentic handsplit Western Red Cedar and Alaskan Yellow Cedar shake installation for Lake Norman lakefront cottages and craftsman homes.',
    href: '/services/roof-replacement',
  },
  {
    icon: Flame,
    title: 'Class A Fire-Treated Cedar',
    description:
      'FireFree-treated and FRT (fire-retardant treated) cedar shakes meeting NC HOA fire code for woodland-adjacent Lake Norman properties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Waves,
    title: 'Waterfront Cedar Roofing',
    description:
      'Pressure-treated cedar engineered for lakefront humidity, with copper flashings and CedarBreather underlayment for ventilation under the shakes.',
    href: '/lake-norman-waterfront-roofing',
  },
  {
    icon: Wrench,
    title: 'Cedar Shake Repair & Individual Replacement',
    description:
      'Spot replacement of split, curled, or rotted cedar shakes without a full reroof. Common 5-10 year touch-up service for Lake Norman homes.',
    href: '/services/roof-repair',
  },
  {
    icon: Sparkles,
    title: 'Cedar Cleaning & Treatment',
    description:
      'Soft-wash moss and algae removal plus oil/preservative treatment every 5-7 years to extend cedar lifespan in the LKN climate.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Synthetic Cedar Shake (DaVinci & Brava)',
    description:
      'DaVinci Multi-Width Shake and Brava Cedar Shake — the low-maintenance synthetic cedar increasingly preferred by Lake Norman lake homes.',
    href: '/synthetic-slate-roofing-lake-norman-nc',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Certified Cedar Installers',
    description:
      'Trained per Cedar Shake & Shingle Bureau (CSSB) standards including proper exposure, keyway spacing, and starter course detailing.',
  },
  {
    icon: Star,
    title: '5-Star Lake Norman Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from homeowners across Cornelius, Davidson, Mooresville, and Huntersville.`,
  },
  {
    icon: Shield,
    title: 'HOA Submission Specialists',
    description:
      'We prepare ARC packets and material samples for The Peninsula, Trump National, River Run, and other Lake Norman HOAs.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured NC Contractor',
    description:
      'Fully licensed North Carolina roofing contractor with comprehensive liability and workers\' compensation coverage.',
  },
  {
    icon: Users,
    title: 'Lakefront Property Experience',
    description:
      'Decade-plus experience installing cedar on Lake Norman waterfront, where humidity, sun exposure, and dock access shape every install.',
  },
  {
    icon: Clock,
    title: '30-50 Year Cedar Lifespan',
    description:
      'Properly installed and maintained cedar shake delivers 30-50 years of service — premium FRT cedar can exceed 50 years on Lake Norman homes.',
  },
];

const cedarBenefits = [
  {
    title: 'Cedar Lifespan',
    description:
      'Western Red Cedar handsplit shake delivers 30-50 years on Lake Norman homes with routine cleaning and treatment every 5-7 years.',
    stat: '30-50',
    label: 'Year Lifespan',
  },
  {
    title: 'Installed Cost',
    description:
      'Cedar shake at Lake Norman runs $7-$12 per square foot installed. A 2,500 sqft LKN home: $17,500-$30,000 turnkey.',
    stat: '$7-$12',
    label: 'Per SqFt',
  },
  {
    title: 'Fire Rating',
    description:
      'Pressure-treated FireFree and FRT cedar achieves Class A fire rating — required by most Lake Norman HOAs in woodland-adjacent communities.',
    stat: 'Class A',
    label: 'Fire Rated',
  },
  {
    title: 'Natural Insulation',
    description:
      'Cedar offers an R-value roughly 2x that of asphalt shingles, helping reduce summer cooling load on lakefront and ridge-top homes.',
    stat: '2x R-Value',
    label: 'vs Asphalt',
  },
];

const lakeNormanAreas = [
  { name: 'Cornelius', href: '/roofing-cornelius-nc' },
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Huntersville', href: '/roofing-huntersville-nc' },
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Sherrills Ford', href: '/roofing-contractor-charlotte-nc' },
  { name: 'The Peninsula', href: '/roofing-cornelius-nc' },
  { name: 'Antiquity', href: '/roofing-cornelius-nc' },
];

const cedarVsSynthetic = [
  {
    feature: 'Authentic Wood Look',
    natural: 'Yes — handsplit grain, silver-gray patina',
    synthetic: 'Very close — molded from real cedar shakes',
  },
  {
    feature: 'Lifespan',
    natural: '30-50 years (with maintenance)',
    synthetic: '50-year limited warranty (DaVinci, Brava)',
  },
  {
    feature: 'Class A Fire Rating',
    natural: 'Only with FRT / FireFree treatment',
    synthetic: 'Class A standard out of the box',
  },
  {
    feature: 'Maintenance Cycle',
    natural: 'Clean & treat every 5-7 years',
    synthetic: 'Essentially zero maintenance',
  },
  {
    feature: 'Cost Per SqFt (Installed)',
    natural: '$7-$12',
    synthetic: '$10-$16',
  },
  {
    feature: 'HOA Acceptance at LKN',
    natural: 'Mixed — confirm with ARC',
    synthetic: 'Widely accepted (looks like cedar)',
  },
];

const faqs = [
  {
    question: 'How much does a cedar shake roof cost at Lake Norman, NC?',
    answer:
      'A natural cedar shake roof at Lake Norman typically costs $7-$12 per square foot installed. For a 2,500 sqft Lake Norman home, expect $17,500-$30,000 turnkey, including handsplit Western Red Cedar shakes, CedarBreather underlayment, copper or stainless flashings, and disposal of the existing roof. Premium Alaskan Yellow Cedar or Class A FRT-treated cedar runs at the upper end of that range.',
  },
  {
    question: 'How long does a cedar shake roof last on a Lake Norman home?',
    answer:
      'A properly installed cedar shake roof on a Lake Norman home lasts 30-50 years. Lifespan depends on cedar grade (#1 Blue Label is the standard), exposure (south-facing slopes age faster), ventilation under the shakes, and maintenance. Owners who clean and re-treat every 5-7 years routinely hit the 40-50 year mark; lake-adjacent humidity makes ventilation and CedarBreather mesh underlayment critical.',
  },
  {
    question: 'Do Lake Norman HOAs allow cedar shake roofing?',
    answer:
      'It depends on the community. Some Lake Norman HOAs — including parts of The Peninsula, Trump National, and River Run — restrict natural cedar or require Class A fire-treated cedar only. More permissive areas include non-HOA waterfront in Sherrills Ford, Denver, and Mooresville, plus rural Davidson. We submit cedar samples and Class A fire test documentation to your ARC before any work begins.',
  },
  {
    question: 'Is cedar shake roofing a fire risk near Lake Norman woodlands?',
    answer:
      'Untreated cedar is combustible, but pressure-treated FireFree and FRT cedar shakes meet Class A fire rating — the same rating as asphalt shingles or metal roofing. Most Lake Norman HOAs in woodland-adjacent neighborhoods now require Class A treated cedar specifically. We install only Class A or Class B treated cedar on properties near the Mountain Island Lake watershed and the wooded ridges around Cornelius and Davidson.',
  },
  {
    question: 'What style of Lake Norman home looks best with cedar shake?',
    answer:
      'Cedar shake is the iconic match for craftsman bungalows, lakefront cottages, Adirondack-style lodges, Cape Cod homes, and Shingle-style architecture popular along Lake Norman. Older custom homes in Antiquity, Jetton Cove, and the wooded lots of Davidson commonly feature cedar. Newer transitional and modern lakefront builds tend toward standing seam metal or synthetic cedar shake instead.',
  },
  {
    question: 'How often does a cedar shake roof need maintenance at Lake Norman?',
    answer:
      'Plan on professional cleaning and oil/preservative treatment every 5-7 years on a Lake Norman cedar roof. Lakefront humidity accelerates moss, mildew, and algae growth, especially on north-facing slopes shaded by hardwoods. Annual visual inspection, gutter clearing, and removal of leaf debris trapped in keyways will substantially extend the life of the shakes.',
  },
  {
    question: 'Cedar shake vs. synthetic cedar — which is better for a Lake Norman lake house?',
    answer:
      'For a low-maintenance lake house, synthetic cedar shake (DaVinci Multi-Width Shake, Brava Cedar Shake) is increasingly the preferred choice on Lake Norman. Synthetic cedar carries a 50-year warranty, ships Class A fire rated standard, and requires essentially no maintenance — a major win for second-home owners. Natural cedar still wins on authentic look, R-value, and historic character for craftsman and Adirondack-style homes.',
  },
  {
    question: 'Can you replace just a few damaged cedar shakes on my Lake Norman roof?',
    answer:
      'Yes — individual cedar shake replacement is one of our most common Lake Norman repair calls. We pull cracked, curled, or rotted shakes and weave in matching #1 Blue Label cedar, color-matched to the existing patina. Most Lake Norman cedar roofs benefit from spot repairs at the 10-15 year mark long before a full reroof is needed.',
  },
  {
    question: 'What underlayment goes under a cedar shake roof at Lake Norman?',
    answer:
      'We install CedarBreather mesh underlayment beneath every Lake Norman cedar shake roof. CedarBreather creates a 1/4-inch ventilation gap between the shake and the deck, allowing the shake to dry from both sides — essential in the lake\'s humid summers. We pair it with a synthetic underlayment over the deck and copper or stainless valley flashings rated for cedar tannin runoff.',
  },
  {
    question: 'Which cedar grade should I specify for a Lake Norman roof?',
    answer:
      'Always specify #1 Blue Label cedar — it is the highest grade per the Cedar Shake & Shingle Bureau, 100% edge grain, 100% heartwood, 100% clear. For Lake Norman waterfront we recommend Certi-Sawn Western Red Cedar in #1 Blue Label or, for ultimate longevity, Alaskan Yellow Cedar. Avoid #3 Black Label and undertreated cedar — both fail prematurely in Lake Norman\'s humid climate.',
  },
];

export default function CedarShakeRoofingLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Norman Roofing Guide', url: `${SITE_CONFIG.url}/lake-norman-roofing-guide` },
          {
            name: 'Cedar Shake Roofing Lake Norman NC',
            url: `${SITE_CONFIG.url}/cedar-shake-roofing-lake-norman-nc`,
          },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/cedar-shake-roofing-lake-norman-nc`}
        pageName="Cedar Shake Roofing Lake Norman NC"
        city="Cornelius"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/cedar-shake-roofing-lake-norman-nc`} city={"Lake Norman"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero1}
            alt="Cedar shake roofing Lake Norman NC - handsplit Western Red Cedar lakefront cottage"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 rounded-full px-4 py-2 mb-4">
              <TreePine className="w-4 h-4 text-amber-200" aria-hidden="true" />
              <span className="text-sm font-semibold text-amber-100">
                Premium Handsplit Cedar Shake
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Cedar Shake Roofing <br className="hidden md:block" />
              <span className="text-amber-200">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Handsplit Western Red Cedar for Lake Norman Lakefront Cottages &amp; Craftsman Homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now installs premium handsplit cedar shake and Class A fire-treated cedar
              roofing across Lake Norman — Cornelius, Davidson, Mooresville, Huntersville, and Denver.
              Authentic Western Red Cedar and Alaskan Yellow Cedar at $7-$12 per square foot installed,
              with 30-50 year lifespans for craftsman, Adirondack, and lakefront cottage architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-amber-400 hover:bg-amber-300 text-amber-950"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Cedar Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-amber-900"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-200 fill-amber-200" aria-hidden="true" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-200" aria-hidden="true" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-200" aria-hidden="true" />
                Class A Fire-Treated Cedar
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-200" aria-hidden="true" />
                CSSB Certified Installers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cedar Shake Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Lake Norman Homeowners Choose Natural Cedar Shake Roofing
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Cedar shake is the signature roof of Lake Norman&apos;s lakefront cottages, craftsman
                bungalows, and Adirondack-style lodges. From the wooded peninsulas of Cornelius and
                Davidson to the older custom homes in Antiquity and Jetton Cove, handsplit cedar
                delivers a textured, character-rich look that no other roofing material can match.
                The natural silver-gray patina that Western Red Cedar develops over its first 5-10
                years is one of the defining aesthetics of the Lake Norman waterfront.
              </p>
              <p>
                Beyond the look, cedar performs. It carries an R-value roughly twice that of asphalt
                shingles, helping cut summer cooling load on the south-facing ridges around Mooresville
                and Huntersville. Premium #1 Blue Label Western Red Cedar shake delivers 30-50 years
                of service with proper installation and maintenance, and Alaskan Yellow Cedar can push
                that envelope further on the most exposed Lake Norman waterfront sites.
              </p>
              <p>
                Cedar at Lake Norman does come with two real considerations: humidity and fire code.
                Lake-adjacent humidity demands proper ventilation under the shakes (we use CedarBreather
                mesh underlayment on every install) and maintenance cleaning every 5-7 years. And many
                Lake Norman HOAs in woodland-adjacent communities now require Class A fire-treated
                cedar — pressure-impregnated FireFree or FRT cedar that meets the same Class A rating
                as asphalt or metal. Both factors are solvable with the right specification, and we
                handle them on every Lake Norman cedar project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Stats Section */}
      <section className="section bg-amber-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How Much Does a Cedar Shake Roof Cost in Lake Norman?
            </h2>
            <p className="text-gray text-lg">
              The numbers behind a Lake Norman cedar shake roof — cost, lifespan, fire rating, and
              insulation value at a glance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cedarBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-amber-700 mb-1">{benefit.stat}</div>
                <div className="text-sm text-gray mb-4">{benefit.label}</div>
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-10 prose prose-lg text-gray">
            <p>
              The bottom line: a typical 2,500 square foot Lake Norman home will land between
              <strong> $17,500 and $30,000 </strong>
              for a complete handsplit cedar shake reroof. Larger lakefront homes in The Peninsula
              or Trump National with 4,000-6,000 sqft of roof area run $28,000-$72,000. Pricing
              swings on cedar grade (#1 Blue Label vs Alaskan Yellow Cedar), Class A fire treatment,
              copper vs stainless valley flashings, and roof complexity (lots of dormers, valleys,
              and steep pitches push pricing toward the upper end).
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Cedar Roofing Services for Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Full-scope cedar shake roofing for Lake Norman waterfront, ridge-top, and woodland
              properties — from new installs to spot repairs and synthetic alternatives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-amber-50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <service.icon className="w-6 h-6 text-amber-700" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray text-sm mb-3">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-amber-700 font-semibold text-sm">
                  Learn More
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LKN Neighborhoods Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Lake Norman Neighborhoods Where Cedar Shakes Fit Best
            </h2>
            <div className="prose prose-lg max-w-none text-gray mb-8">
              <p>
                Cedar shake works in some Lake Norman neighborhoods better than others — both
                aesthetically and contractually under HOA rules. Here is what we see across Lake
                Norman:
              </p>
              <ul>
                <li>
                  <strong>The Peninsula (Cornelius)</strong> — ARC has tightened on natural cedar in
                  recent years. Class A fire-treated cedar or synthetic cedar (DaVinci, Brava) is
                  the typical approval path. We submit ARC packets here regularly.
                </li>
                <li>
                  <strong>Trump National Golf Club Charlotte (Mooresville)</strong> — Custom estate
                  homes; cedar generally permitted with Class A treatment and ARC review. Excellent
                  fit for the Lowcountry and Shingle-style architecture in the community.
                </li>
                <li>
                  <strong>River Run Country Club (Davidson)</strong> — Mixed; many River Run homes
                  carry shake or shake-look roofing. Class A FRT cedar or synthetic cedar both
                  approved per ARC review.
                </li>
                <li>
                  <strong>Antiquity (Cornelius)</strong> — Traditional neighborhood design with
                  many craftsman and bungalow homes. Cedar look strongly aligned with the
                  neighborhood&apos;s architectural standard.
                </li>
                <li>
                  <strong>Jetton Cove (Cornelius)</strong> — Lakefront custom homes, many original
                  builds with natural cedar. Great fit for Adirondack and lakefront cottage
                  remodels.
                </li>
                <li>
                  <strong>Davidson (non-HOA pockets) and Mooresville rural</strong> — Most
                  permissive for natural untreated or lightly treated cedar. The wooded lots and
                  craftsman architecture make cedar a natural choice.
                </li>
                <li>
                  <strong>Sherrills Ford and Denver waterfront</strong> — Many non-HOA waterfront
                  properties. Class A treatment still recommended for proximity to the
                  Lake Norman State Park woodlands.
                </li>
                <li>
                  <strong>Huntersville and Cornelius newer subdivisions</strong> — Generally
                  steered toward synthetic cedar (DaVinci Multi-Width Shake) for HOA acceptance and
                  low maintenance.
                </li>
              </ul>
              <p>
                Before any cedar project we pull your covenants and HOA architectural guidelines and,
                where required, prepare a full ARC submittal with cedar samples, fire rating
                certifications, and reference photos from prior Lake Norman installs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cedar vs Synthetic Comparison Table */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Cedar Shake vs Synthetic Cedar: What&apos;s Right for Your Lake Norman Home?
            </h2>
            <p className="text-gray text-lg">
              For lake houses and second homes, synthetic cedar shake is increasingly preferred. For
              authentic craftsman and Adirondack architecture, natural cedar still wins.
            </p>
          </div>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-amber-50 rounded-xl shadow-md text-left">
              <thead>
                <tr className="bg-amber-700 text-white">
                  <th className="p-4 font-bold">Feature</th>
                  <th className="p-4 font-bold">Natural Cedar Shake</th>
                  <th className="p-4 font-bold">Synthetic Cedar (DaVinci / Brava)</th>
                </tr>
              </thead>
              <tbody>
                {cedarVsSynthetic.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-amber-50'}
                  >
                    <td className="p-4 font-semibold text-dark">{row.feature}</td>
                    <td className="p-4 text-gray">{row.natural}</td>
                    <td className="p-4 text-gray">{row.synthetic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <p className="text-gray text-lg">
              Want a side-by-side spec quote? We can price both natural Western Red Cedar and
              DaVinci Multi-Width Shake on the same Lake Norman roof so you see the real-world
              tradeoff.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Link
                href="/synthetic-slate-roofing-lake-norman-nc"
                className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-900 transition-colors"
              >
                Compare Synthetic Slate &amp; Shake Options
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/luxury-roofing-lake-norman-nc"
                className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-900 transition-colors"
              >
                See All Lake Norman Luxury Roofing Options
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fire & HOA Section */}
      <section className="section bg-stone-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Fire Code &amp; HOA Requirements for Cedar Roofs in Lake Norman
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                North Carolina building code allows cedar shake on residential roofing, but most
                Lake Norman HOAs in woodland-adjacent communities now require <strong>Class A fire
                rating</strong> on any new cedar install. The two ways to get there:
              </p>
              <ol>
                <li>
                  <strong>Pressure-impregnated FRT (Fire-Retardant Treated) cedar</strong> — The
                  most common spec at Lake Norman. Cedar shakes are pressure-treated with fire
                  retardant chemicals at the mill, achieving Class A or Class B rating. Treatment
                  also enhances rot and fungal resistance, important in our humid lake climate.
                </li>
                <li>
                  <strong>FireFree-treated cedar</strong> — A premium fire treatment with a longer
                  warranty. Used on higher-end Lake Norman estate homes where the HOA explicitly
                  calls out FireFree branded cedar.
                </li>
              </ol>
              <p>
                On the HOA front, every Lake Norman cedar install we do begins with an ARC
                (Architectural Review Committee) submittal. We provide:
              </p>
              <ul>
                <li>Physical cedar shake samples in the proposed grade and treatment</li>
                <li>Cedar Shake &amp; Shingle Bureau (CSSB) certification documentation</li>
                <li>Class A or Class B fire test reports per ASTM E108 / UL 790</li>
                <li>Reference photos from completed cedar installs at comparable Lake Norman homes</li>
                <li>Color/patina expectation statement (cedar weathers — your ARC needs to know)</li>
              </ul>
              <p>
                Lead time on ARC approval typically runs 2-6 weeks at Lake Norman HOAs. Build it
                into your project schedule. We have working relationships with property management
                across the major LKN communities, which usually keeps approvals on the shorter end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Cedar Shake Maintenance for Lake Norman Waterfront Homes
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Cedar is a maintained roof — that is the honest truth. The good news: with the right
                maintenance cycle a Lake Norman cedar roof will hit 40-50 years easily. Here is the
                maintenance rhythm we recommend for waterfront and lakefront cedar:
              </p>
              <ul>
                <li>
                  <strong>Annual visual inspection</strong> — Look for cracked, curled, or missing
                  shakes; check for moss growth on north-facing slopes shaded by hardwoods (very
                  common on the wooded peninsulas of Cornelius and Davidson).
                </li>
                <li>
                  <strong>Annual gutter and keyway clearing</strong> — Lake Norman&apos;s mature
                  oaks and pines drop a lot of debris. Leaves and pine needles trapped in keyways
                  hold moisture against the cedar and accelerate rot.
                </li>
                <li>
                  <strong>Soft-wash cleaning every 3-5 years</strong> — Low-pressure soft wash with
                  a cedar-safe cleaner removes moss, mildew, and algae without damaging the wood.
                  Never pressure-wash cedar — it strips the surface and shortens the lifespan
                  dramatically.
                </li>
                <li>
                  <strong>Oil/preservative re-treatment every 5-7 years</strong> — A breathable,
                  penetrating cedar treatment restores natural oils and reinforces water-shedding.
                  This is the single biggest factor in Lake Norman cedar lifespan.
                </li>
                <li>
                  <strong>Spot shake replacement at year 10-15</strong> — Expect to replace 2-5% of
                  the shakes by the 15-year mark, especially on south-facing slopes and the most
                  weather-exposed peaks. Easy job — no need for a full reroof.
                </li>
              </ul>
              <p>
                We offer Lake Norman cedar maintenance plans that bundle the annual inspection,
                cleaning, and treatment cycle into a single recurring engagement. It is the cleanest
                way to hit the upper end of your cedar roof&apos;s lifespan.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/lake-norman-waterfront-roofing"
                className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-900 transition-colors"
              >
                Lake Norman Waterfront Roofing Guide
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services/roof-repair"
                className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-900 transition-colors"
              >
                Cedar Repair &amp; Maintenance
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Best Roofing Now */}
      <section className="section bg-amber-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Best Roofing Now for Cedar Shake Installation
              </h2>
              <p className="text-gray text-lg mb-8">
                Cedar shake is not a commodity install — it rewards crews with deep cedar-specific
                training and punishes generalists. We have built a Lake Norman cedar specialty
                practice around CSSB-certified installers, copper-flashing fabrication in-house,
                and full HOA submittal support.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-amber-700" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                      <p className="text-gray text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <SEOImage
                src={IMAGES.hero.hero1}
                alt="Cedar shake roof installation Lake Norman NC - Best Roofing Now CSSB certified"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-dark">5.0 Rating</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-800 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for a Cedar Shake Roof at Lake Norman?
              </h2>
              <p className="text-white/90">
                Free on-site estimate plus full HOA submittal support for Cornelius, Davidson,
                Mooresville, and Huntersville cedar projects.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-amber-800"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-amber-800 hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Cedar Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Cedar Shake Roofing Across Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We install and maintain cedar shake roofing throughout the Lake Norman region,
              including The Peninsula, Antiquity, Jetton Cove, River Run, and Trump National.
            </p>
          </div>
          <div className="bg-amber-50 rounded-xl p-6 shadow-md max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-3">
              {lakeNormanAreas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="flex items-center gap-2 text-gray hover:text-amber-700 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  <span>{area.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/roofers-lake-norman-nc"
              className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-900 transition-colors"
            >
              See All Lake Norman Roofing Services
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Cedar Shake Roofing FAQs — Lake Norman
              </h2>
              <p className="text-gray text-lg">
                Voice-search-friendly answers to the most common cedar shake roofing questions from
                Lake Norman homeowners.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Lake Norman Roofing Pages */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Related Lake Norman Roofing Resources
            </h2>
            <p className="text-gray text-lg">
              Compare cedar shake to other premium Lake Norman roofing options.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/standing-seam-metal-roof-lake-norman-nc"
              className="group bg-amber-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
                <Landmark className="w-5 h-5 text-amber-700" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-dark mb-2 group-hover:text-amber-700 transition-colors">
                Standing Seam Metal Lake Norman
              </h3>
              <p className="text-gray text-sm mb-3">
                The leading low-maintenance lakefront alternative to cedar — 50-70 year lifespan.
              </p>
              <span className="inline-flex items-center text-amber-700 font-medium text-sm">
                Compare Metal <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </Link>
            <Link
              href="/synthetic-slate-roofing-lake-norman-nc"
              className="group bg-amber-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
                <Leaf className="w-5 h-5 text-amber-700" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-dark mb-2 group-hover:text-amber-700 transition-colors">
                Synthetic Slate &amp; Cedar (DaVinci)
              </h3>
              <p className="text-gray text-sm mb-3">
                DaVinci Multi-Width Shake and synthetic slate — Class A standard, 50-year warranty.
              </p>
              <span className="inline-flex items-center text-amber-700 font-medium text-sm">
                Explore Synthetic <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </Link>
            <Link
              href="/slate-roofing-lake-norman-nc"
              className="group bg-amber-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
                <Paintbrush className="w-5 h-5 text-amber-700" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-dark mb-2 group-hover:text-amber-700 transition-colors">
                Natural Slate Lake Norman
              </h3>
              <p className="text-gray text-sm mb-3">
                Quarried slate roofing for the most authentic and longest-lasting Lake Norman estate roofs.
              </p>
              <span className="inline-flex items-center text-amber-700 font-medium text-sm">
                Compare Slate <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Cornelius"
        slug="cedar-shake-roofing-lake-norman-nc"
        count={4}
        title="Recent Roofing Projects in the Lake Norman Area"
        subtitle="Browse completed roofing projects from the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/cedar-shake-roofing-lake-norman-nc`}
      />

      <CityGeoSection
        city="Cornelius"
        state="NC"
        citySlug="cornelius-nc"
        service="Cedar Shake Roofing"
      />

      {/* Lake Norman Guide Cross-Link */}
      <section className="py-8 bg-amber-100/40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray mb-4">
              Want everything about roofing on Lake Norman in one place?
            </p>
            <Link
              href="/lake-norman-roofing-guide"
              className="inline-flex items-center gap-2 text-amber-800 font-semibold hover:text-amber-900 transition-colors text-lg"
            >
              Read The Complete Lake Norman Roofing Guide (2026){' '}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <LKNPartnershipsBlock city={'Lake Norman'} />
      <LKNDataCitations city={'Lake Norman'} />
      <CTASection
        title="Get Your Lake Norman Cedar Shake Estimate"
        subtitle="Free on-site estimate from Lake Norman's CSSB-certified cedar shake specialists. We handle ARC submittals for The Peninsula, Trump National, River Run, Antiquity, and Jetton Cove — plus deliver an installation built to last 30-50+ years."
      />
    </>
  );
}
