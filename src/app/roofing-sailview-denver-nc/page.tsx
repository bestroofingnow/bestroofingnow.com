import { Metadata } from 'next';
import Image from 'next/image';
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
  Clock,
  Wind,
  Home,
  Waves,
  MapPin,
  Anchor,
  Sailboat,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
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
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
import { LKNNeighborhoodGrid } from '@/components/sections/LKNNeighborhoodGrid';
import { LKNHowToBundle } from '@/components/seo/LKNHowToSchemas';
export const metadata: Metadata = {
  title: 'Roofing Sailview Denver NC',
  description:
    'Wind-rated roofing for Sailview waterfront and lake-access homes in Denver NC. Standing-seam metal, Class 4 shingles, storm repairs. BBB A+ rated. Free estimates.',
  keywords: [
    'sailview roofing',
    'sailview denver nc roofer',
    'roof replacement sailview',
    'sailview waterfront roofing',
    'sailview lake norman roofing',
    'metal roofing sailview denver nc',
    'standing seam metal sailview',
    'wind resistant roof sailview',
    'storm damage roof sailview denver nc',
    'sailview hoa roof replacement',
    'lake norman western shore roofing',
    '28037 roofing contractor',
    'lincoln county roofer denver nc',
    'sailview marina roof',
    'lake norman waterfront roofing denver',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-sailview-denver-nc`,
  },
  openGraph: {
    title: 'Roofing Sailview Denver NC | Western Shore Lake Norman',
    description:
      'Wind-rated roof replacement and repair for Sailview waterfront, lake-access, and interior homes in Denver NC. Standing-seam metal, Class 4 shingles, synthetic slate, and storm response on Lake Norman\'s western shore.',
    url: `${SITE_CONFIG.url}/roofing-sailview-denver-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roofing Sailview Denver NC - Best Roofing Now Lake Norman western shore specialists',
      },
    ],
  },
};

// Roofing services for Sailview
const services = [
  {
    title: 'Standing Seam Metal Roofing',
    description: 'Wind-rated to 140-180 MPH and ideal for Sailview\'s western-shore exposure on Lake Norman. Standing-seam metal pairs perfectly with Sailview lake cottages and contemporary lake homes.',
    benefits: ['140+ MPH wind rated', '50+ year lifespan', 'Lake aesthetic'],
    href: '/standing-seam-metal-roof-lake-norman-nc',
  },
  {
    title: 'Class 4 Impact Shingles',
    description: 'Class 4 impact-rated architectural shingles deliver wind, hail, and storm protection for Sailview homes — and often qualify for North Carolina insurance premium discounts.',
    benefits: ['Class 4 impact rated', 'Insurance discount', 'Lifetime warranty'],
    href: '/metal-roofing-denver-nc',
  },
  {
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement for Sailview homes whose 1980s-2000s asphalt roofs are aging out. We re-deck, upgrade underlayment, and install ice/water shield where needed.',
    benefits: ['Full tear-off', 'Upgraded underlayment', 'Manufacturer warranty'],
    href: '/roof-replacement-denver-nc',
  },
  {
    title: 'Roof Repair',
    description: 'Fast, lasting repairs for missing shingles, flashing failures, ridge venting, and leaks on Sailview homes — same-week service in 28037 zip code whenever weather allows.',
    benefits: ['Same-week service', 'Lasting fixes', 'Local crews'],
    href: '/roof-repair-denver-nc',
  },
  {
    title: 'Storm & Wind Damage',
    description: 'Rapid storm response for Sailview after Lake Norman summer thunderstorms and prevailing westerly wind events. We document damage and coordinate the entire insurance claim.',
    benefits: ['24/7 emergency tarp', 'Insurance liaison', 'Full documentation'],
    href: '/storm-damage-roof-repair-denver-nc',
  },
  {
    title: 'Synthetic Slate & Designer Shingles',
    description: 'Synthetic slate and designer shingles for high-end Sailview waterfront homes that want curb appeal without the weight or cost of natural slate. HOA-friendly profiles available.',
    benefits: ['Lightweight', 'Class 4 options', 'Lake-home aesthetic'],
    href: '/services/roof-replacement',
  },
];

// Why choose us for Sailview
const whyChooseUs = [
  {
    icon: Wind,
    title: 'Western Shore Wind Specialists',
    description: 'Sailview sits on Lake Norman\'s western shore, taking the brunt of prevailing westerly wind and storm fronts. We engineer roof systems for that exposure — every job, every time.',
  },
  {
    icon: Waves,
    title: 'Lake Norman Waterfront Expertise',
    description: 'From true Sailview waterfront homes on the lake to interior lots with deeded lake access, we understand what waterfront moisture, wind, and sun do to a roof in Denver NC.',
  },
  {
    icon: Home,
    title: 'Sailview HOA Coordination',
    description: 'Sailview HOA permits architectural variety but still has guidelines for materials and colors. We handle the submission, color samples, and approvals for every roof replacement.',
  },
  {
    icon: Award,
    title: 'GAF Master Elite & Manufacturer Certified',
    description: 'GAF Master Elite is held by only the top 2% of roofers in North America. That certification means longer warranties for Sailview homeowners on premium shingle systems.',
  },
  {
    icon: Shield,
    title: 'Insurance Claim Specialists',
    description: 'Wind and hail events on the western shore of Lake Norman drive most Sailview insurance claims. We meet the adjuster, document damage, and fight for full scope of repair.',
  },
  {
    icon: Sailboat,
    title: 'Marina & Dock Awareness',
    description: 'The Sailview community marina and many private docks sit just below your roof line. We tarp, scaffold, and contain debris so nothing lands on a boat or in the water.',
  },
];

// FAQs for Sailview
const faqs = [
  {
    question: 'Who is the best roofer at Sailview in Denver NC?',
    answer:
      'Best Roofing Now is a top-rated roofing contractor for Sailview in Denver NC, with deep experience on Lake Norman\'s western shore in 28037. We are GAF Master Elite certified, BBB A+ rated, and specialize in wind-resistant standing-seam metal, Class 4 impact shingles, synthetic slate, and storm damage repair for Sailview waterfront, lake-access, and interior homes throughout Lincoln County.',
  },
  {
    question: 'How much does a roof replacement cost at Sailview?',
    answer:
      'Roof replacement at Sailview in Denver NC typically ranges from $14,000 to $32,000 for architectural shingles on interior lots, $22,000 to $55,000 for Class 4 impact or designer shingles on lake-view homes, and $40,000 to $120,000+ for standing-seam metal or synthetic slate on Sailview waterfront homes. Final pricing depends on roof size, pitch, decking condition, and material choice. Best Roofing Now provides free, detailed on-site estimates for every Sailview homeowner.',
  },
  {
    question: 'Are metal roofs the best choice for Sailview waterfront homes?',
    answer:
      'Standing-seam metal is one of the strongest roofing choices for Sailview waterfront homes in Denver NC. Metal roofs handle Lake Norman\'s western shore wind exposure, resist corrosion, last 50+ years, and pair beautifully with the lake-cottage and contemporary lake-home architecture common throughout Sailview. Many Sailview homeowners are switching from aging 1980s-2000s asphalt to standing-seam metal during their first replacement.',
  },
  {
    question: 'What wind ratings do I need for a Sailview Lake Norman roof?',
    answer:
      'For Sailview homes on Lake Norman\'s western shore, we recommend a minimum 130 MPH wind rating, with 140-180 MPH ratings on true waterfront homes that face open lake fetch. The western shore takes the brunt of prevailing westerly wind, summer thunderstorms, and remnants of tropical systems crossing the Carolinas. Higher wind ratings also help qualify for North Carolina homeowners insurance premium discounts.',
  },
  {
    question: 'Does Sailview HOA require approval for roof replacement?',
    answer:
      'Yes — Sailview HOA in Denver NC has architectural guidelines for roofing materials and colors, even though the community permits more architectural variety than many gated Lake Norman neighborhoods. Best Roofing Now handles the entire HOA submission for Sailview homeowners: material spec sheets, color samples, contractor information, and any required architectural review forms. Approvals typically take 1-3 weeks before work begins.',
  },
  {
    question: 'How long do roofs last at Sailview Denver NC?',
    answer:
      'At Sailview in Denver NC, 3-tab asphalt shingles from the 1980s and 1990s typically last 18-22 years before needing replacement, architectural shingles last 25-30 years, Class 4 impact shingles last 30+ years, and standing-seam metal roofs last 50-70+ years. Lake Norman\'s western shore wind, sun exposure, and lake-effect humidity tend to age asphalt roofs slightly faster than inland Lincoln County, which is why many Sailview homeowners upgrade to metal during replacement.',
  },
  {
    question: 'Will my insurance cover storm damage at Sailview?',
    answer:
      'Most North Carolina homeowners policies cover wind and hail damage to Sailview roofs, including damage from Lake Norman summer thunderstorms and remnants of tropical systems. Best Roofing Now meets your adjuster on-site at your Sailview home, provides full photo documentation, writes a detailed scope of work, and negotiates for the full repair or replacement you are entitled to under your policy. We work with every major North Carolina insurer.',
  },
  {
    question: 'What\'s the best roofing color for Sailview lake homes?',
    answer:
      'For Sailview lake homes in Denver NC, the most popular roofing colors are weathered wood, driftwood, charcoal, and slate gray for shingles, and matte black, charcoal, dark bronze, and forest green for standing-seam metal. These colors complement the lake-cottage and contemporary architecture across Sailview, hold up well under Lake Norman sun exposure, and stay within Sailview HOA guidelines. We bring full color samples on every estimate.',
  },
  {
    question: 'How quickly can roof repairs be done at Sailview?',
    answer:
      'Best Roofing Now typically responds to Sailview roof repair calls in Denver NC within 24-48 hours, with same-week scheduling for most non-emergency repairs in the 28037 zip code. For storm damage with active leaks, we provide same-day emergency tarping to protect your Sailview home, then return to complete permanent repairs once the weather window opens and any insurance documentation is complete.',
  },
  {
    question: 'Does Best Roofing Now serve Sailview waterfront and lake-access homes?',
    answer:
      'Yes — Best Roofing Now serves every home in Sailview in Denver NC, from true waterfront homes on Lake Norman to lake-view and deeded lake-access interior lots. We are a full-service Lake Norman roofing contractor covering all of Lincoln County, the western shore of Lake Norman, and the surrounding Denver NC, Catawba Springs, and East Lincoln communities in 28037.',
  },
];

export default function RoofingSailviewDenverPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Denver NC', url: `${SITE_CONFIG.url}/roofing-denver-nc` },
          { name: 'Roofing Sailview Denver NC', url: `${SITE_CONFIG.url}/roofing-sailview-denver-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-sailview-denver-nc`}
        pageName="Roofing Sailview Denver NC"
        city="Denver"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/roofing-sailview-denver-nc`} city={"Denver"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Sailboat className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold">Sailview Lake Norman Western Shore Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Sailview <br className="hidden md:block" />
              <span className="text-blue-300">Denver NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Wind-rated roofing for Sailview waterfront and lake-access homes on Lake Norman&apos;s western shore
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Sailview is one of the largest established lakefront and lake-access communities on the western shore
              of Lake Norman in Denver NC. With more than 700 homes ranging from 1980s lake cottages to modern
              contemporary lake homes, Sailview demands roofing built for serious wind exposure, lake-effect moisture,
              and the architectural variety this 28037 community is known for.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-blue-500 hover:bg-blue-400 text-white"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Sailview Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Wind className="w-5 h-5 text-blue-300" />
                140+ MPH Wind Rated
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-300" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-300" />
                GAF Master Elite
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Sailview */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Sailview Lake Norman Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-4">
                Sailview is a large, established lakefront and lake-access community on Lake Norman&apos;s western
                shore in Denver NC. Built mostly from the 1980s through the 2000s, Sailview is home to roughly
                700+ properties — a mix of true waterfront estates, lake-view homes, and interior lots — all sharing
                community amenities including the Sailview marina and boat ramp, pool, tennis courts, walking trails,
                and a lakeside pavilion.
              </p>
              <p className="text-gray text-lg mb-6">
                That mix is exactly why Sailview homeowners trust Best Roofing Now. Our crews are equally comfortable
                installing standing-seam metal on a Sailview waterfront home that takes the brunt of westerly wind,
                replacing aging 1980s asphalt on an interior Sailview cottage in 28037, or coordinating Sailview HOA
                approvals for a Class 4 impact shingle upgrade on a contemporary lake home in Lincoln County.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">700+</p>
                  <p className="text-sm text-gray">Homes in Sailview</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">28037</p>
                  <p className="text-sm text-gray">Denver NC ZIP</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">Western Shore</p>
                  <p className="text-sm text-gray">Lake Norman</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">Marina + Pool</p>
                  <p className="text-sm text-gray">Community Amenities</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.hero.hero1}
                alt="Roofing Sailview Denver NC waterfront home on Lake Norman western shore"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">140+</p>
                <p className="text-sm text-white/90">MPH Wind Rated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="section bg-blue-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.googleRating}</p>
              <p className="text-sm text-gray">Google Rating</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">GAF Master Elite</p>
              <p className="text-sm text-gray">Top 2% of Contractors</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.bbbRating}</p>
              <p className="text-sm text-gray">BBB Rating</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.yearsInBusiness}+ Years</p>
              <p className="text-sm text-gray">Serving Lake Norman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Services for Sailview Waterfront &amp; Lake-Access Homes
            </h2>
            <p className="text-gray text-lg">
              Every roof we install at Sailview in Denver NC is engineered for Lake Norman&apos;s western shore wind
              exposure, lake-effect moisture, and the architectural variety of this 28037 lake community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-dark text-xl mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {benefit}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center text-primary font-medium text-sm mt-4">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              How Much Does a Roof Cost at Sailview Denver NC?
            </h2>
            <p className="text-gray text-lg mb-8 text-center max-w-3xl mx-auto">
              Roof costs at Sailview in Denver NC vary by home type and material. Sailview waterfront homes
              ($850K-$2.5M+) tend to call for premium wind-rated systems, while lake-view ($525K-$850K) and interior
              homes ($375K-$575K) often choose Class 4 impact shingles or architectural shingles. Below are typical
              ranges for Sailview roof replacement in Lincoln County.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Architectural Shingles</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$14K-$32K</p>
                <p className="text-gray text-sm">
                  Best fit for Sailview interior lots and starter lake-access homes. 25-30 year lifespan and good
                  wind ratings for the western shore of Lake Norman.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Class 4 / Designer Shingles</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$22K-$55K</p>
                <p className="text-gray text-sm">
                  Class 4 impact and designer shingles for Sailview lake-view homes. Lifetime warranty, 130+ MPH
                  wind rating, and often a North Carolina insurance discount.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Standing-Seam Metal &amp; Slate</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$40K-$120K+</p>
                <p className="text-gray text-sm">
                  Standing-seam metal and synthetic slate for Sailview waterfront homes. 50+ year lifespan,
                  140-180 MPH wind rating, and the lake-home aesthetic Sailview is known for.
                </p>
              </div>
            </div>
            <p className="text-gray text-sm mt-6 text-center">
              These ranges are averages for Sailview in Denver NC and depend on roof size, pitch, deck condition,
              and material grade. Best Roofing Now provides a free, fully detailed on-site estimate for every
              Sailview homeowner. See our complete{' '}
              <Link href="/lake-norman-roofing-costs-2026" className="text-blue-700 underline hover:text-blue-900">
                Lake Norman roofing costs guide for 2026
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready to Replace Your Sailview Roof?
              </h2>
              <p className="text-white/90">
                Get a free, no-pressure on-site estimate for your Sailview home in Denver NC.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-700"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-blue-700 hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wind Resistance Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Why Wind-Resistant Roofing Matters at Sailview
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              Sailview sits on the western shore of Lake Norman — the side that absorbs prevailing westerly weather,
              summer thunderstorm fronts crossing North Carolina, and the long lake fetch that builds wind speed
              before it hits your roof. Here is what that means for Sailview homeowners in Denver NC.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-dark text-lg mb-3">Prevailing Westerly Wind</h3>
                <p className="text-gray text-sm">
                  Most Lake Norman storm fronts move west to east, hitting Sailview&apos;s western-shore homes first.
                  That makes Sailview waterfront roofs more wind-loaded than equivalent eastern-shore homes — and
                  drives our minimum 130 MPH wind rating recommendation for any Sailview roof replacement.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-dark text-lg mb-3">Lake Norman Open Fetch</h3>
                <p className="text-gray text-sm">
                  Sailview waterfront homes face open lake fetch across Lake Norman. With nothing to break the wind
                  before it reaches your roof line, gusts can be significantly higher than the surrounding inland
                  Lincoln County area. Standing-seam metal and Class 4 shingles handle that load best.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-dark text-lg mb-3">Summer Thunderstorm Bursts</h3>
                <p className="text-gray text-sm">
                  Lake Norman summer thunderstorms produce some of the strongest wind events of the year for the
                  Sailview community. Microbursts of 60-90 MPH are common and account for most of the wind-damage
                  insurance claims we file for Sailview homeowners in 28037.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-dark text-lg mb-3">Tropical Remnants</h3>
                <p className="text-gray text-sm">
                  Hurricane remnants crossing the Carolinas regularly bring sustained 40-60 MPH wind to Lake Norman&apos;s
                  western shore. A properly engineered Sailview roof — wind-rated underlayment, sealed deck, ring-shank
                  nails, and high-uplift shingles — keeps damage minor when these systems pass through.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Best Roofing Materials for Lake Norman Western Shore
            </h2>
            <p className="text-gray text-lg">
              For Sailview homes in Denver NC, the best roofing materials combine wind resistance, longevity, and the
              lake-home aesthetic that fits Sailview&apos;s architectural variety. Here are our top recommendations
              for the western shore of Lake Norman.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/standing-seam-metal-roof-lake-norman-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Standing-Seam Metal</h3>
              <p className="text-gray text-sm mb-3">
                The gold standard for Sailview waterfront homes — 50+ year lifespan, 140-180 MPH wind rating, and a
                clean lake-home look.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/metal-roofing-denver-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Class 4 Impact Shingles</h3>
              <p className="text-gray text-sm mb-3">
                Class 4 impact-rated architectural shingles deliver maximum hail and wind protection — and qualify
                for North Carolina insurance discounts.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/roof-replacement" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Synthetic Slate</h3>
              <p className="text-gray text-sm mb-3">
                Lightweight synthetic slate gives high-end Sailview homes the slate look without the structural
                load — great for contemporary lake homes.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Best Roofing Now Is Sailview&apos;s Trusted Roofer
            </h2>
            <p className="text-gray text-lg">
              Sailview homes deserve a roofer who understands Lake Norman&apos;s western shore — not a generalist
              squad making the drive out to Denver NC for the first time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sailview Community Detail Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Inside Sailview: Lake Norman&apos;s Western-Shore Community
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Sailview Marina &amp; Boat Ramp</h3>
                <p className="text-gray text-sm">
                  The Sailview community marina and boat ramp put Lake Norman directly at your back door. When we
                  re-roof a Sailview waterfront home, our crews coordinate around the marina, tarp the dock and
                  surrounding shoreline, and contain every nail and shingle so nothing ends up in the water.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Schools: East Lincoln Zone</h3>
                <p className="text-gray text-sm">
                  Sailview is zoned for Catawba Springs Elementary, East Lincoln Middle, and East Lincoln High in
                  Lincoln County — one of the strongest school zones in Denver NC. Many Sailview homes are bought by
                  families specifically for the East Lincoln High district.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Architectural Variety</h3>
                <p className="text-gray text-sm">
                  Sailview is known for its architectural variety — 1980s-era lake cottages, traditional brick homes,
                  and modern contemporary lake homes all share the same Lake Norman waterfront. We match each
                  Sailview home with the right roof system for its architecture and HOA color palette.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Lake-Access Lifestyle</h3>
                <p className="text-gray text-sm">
                  Even Sailview interior lots enjoy deeded lake access, the community marina, pool, tennis courts,
                  walking trails, and pavilion. That makes roofing decisions on Sailview interior homes just as
                  important as on the waterfront — your home value depends on Sailview&apos;s overall standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Sailview Service Areas
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              Best Roofing Now serves every section of Sailview in Denver NC and the surrounding western shore of
              Lake Norman in Lincoln County.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-dark">Sailview Waterfront</p>
                <p className="text-gray text-xs">True Lake Norman lakefront</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-dark">Sailview Lake-View</p>
                <p className="text-gray text-xs">Western shore views</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-dark">Sailview Interior</p>
                <p className="text-gray text-xs">Lake-access deeded lots</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-dark">Sailview Marina</p>
                <p className="text-gray text-xs">Adjacent to community marina</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-dark">Catawba Springs</p>
                <p className="text-gray text-xs">East Lincoln zone</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-dark">Denver NC 28037</p>
                <p className="text-gray text-xs">Full Lincoln County</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-dark">East Lincoln</p>
                <p className="text-gray text-xs">High school district</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-dark">Western Shore LKN</p>
                <p className="text-gray text-xs">Full lake coverage</p>
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
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Sailview Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions about roofing for Sailview homes in Denver NC on Lake Norman&apos;s western shore.
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

      {/* Related Links */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Explore Our Lake Norman &amp; Denver NC Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/roofing-denver-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <MapPin className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Denver NC</h3>
              <p className="text-gray text-sm mb-3">Full roofing services across Denver NC and Lincoln County</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-lake-norman-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Waves className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Lake Norman NC</h3>
              <p className="text-gray text-sm mb-3">Region-wide roofing for the entire Lake Norman area</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/lake-norman-waterfront-roofing" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Anchor className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Waterfront Roofing</h3>
              <p className="text-gray text-sm mb-3">Specialty roofing for every Lake Norman waterfront home</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/lake-norman-roofing-guide" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Shield className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Lake Norman Roofing Guide</h3>
              <p className="text-gray text-sm mb-3">Complete homeowner guide to roofing on Lake Norman</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Read Guide <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roof-repair-denver-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <CheckCircle className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roof Repair Denver NC</h3>
              <p className="text-gray text-sm mb-3">Same-week roof repairs across Denver NC and 28037</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roof-replacement-denver-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Home className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roof Replacement Denver NC</h3>
              <p className="text-gray text-sm mb-3">Full tear-off and replacement for Denver NC homes</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/standing-seam-metal-roof-lake-norman-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Wind className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Standing-Seam Metal LKN</h3>
              <p className="text-gray text-sm mb-3">Wind-rated standing-seam metal for Lake Norman</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/storm-damage-roof-repair-denver-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Sailboat className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Storm Damage Repair</h3>
              <p className="text-gray text-sm mb-3">Rapid storm response across Denver NC and Sailview</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/lake-norman-roofing-costs-2026" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Star className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">LKN Roofing Costs 2026</h3>
              <p className="text-gray text-sm mb-3">Complete 2026 pricing for Lake Norman roof replacement</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Read Guide <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="location" city="Denver" slug="roofing-sailview-denver-nc" />

      <CityGeoSection
        city="Denver"
        state="NC"
        citySlug="denver-nc"
        service="Roofing"
      />

      <LKNNeighborhoodGrid currentCity="Denver" currentSlug="roofing-sailview-denver-nc" />
      <LKNPartnershipsBlock city={"Denver"} />
      <LKNDataCitations city={"Denver"} />
      <CTASection
        title="Protect Your Sailview Home on Lake Norman"
        subtitle="Request a free, on-site Sailview roof estimate. We'll engineer a wind-rated roof system built for Lake Norman's western shore — and handle Sailview HOA approvals, insurance documentation, and everything in between."
      />
    </>
  );
}
