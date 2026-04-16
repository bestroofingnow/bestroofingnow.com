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
  MapPin,
  Waves,
  Wind,
  Droplets,
  Sun,
  Home,
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

const LAKE_NORMAN_CITIES = ['Mooresville', 'Cornelius', 'Davidson', 'Huntersville', 'Denver', 'Sherrills Ford'];

export const metadata: Metadata = {
  title: 'Lake Norman Waterfront Roofing',
  description:
    'Waterfront roofing for Lake Norman lakefront homes. Wind-resistant, impact-rated materials for lake exposure. BBB A+ rated. Call (704) 605-6047.',
  keywords: [
    'waterfront roofing lake norman',
    'lakefront home roofer',
    'lake house roofing lake norman nc',
    'waterfront roof replacement lake norman',
    'lakefront roofing contractor',
    'wind resistant roofing lake norman',
    'lake norman waterfront home roofer',
    'impact resistant shingles lake norman',
    'standing seam metal roof lake norman',
    'lake house roof repair',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/lake-norman-waterfront-roofing`,
  },
  openGraph: {
    title: 'Lake Norman Waterfront Roofing | Lakefront Home Specialists',
    description:
      'Waterfront roofing specialists for Lake Norman lakefront homes. Wind-resistant, impact-rated materials designed for lakeside exposure.',
    url: `${SITE_CONFIG.url}/lake-norman-waterfront-roofing`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.modern1,
        width: 1200,
        height: 630,
        alt: 'Lake Norman waterfront home roofing - lakefront specialists',
      },
    ],
  },
};

// Waterfront roofing challenges
const waterfrontChallenges = [
  {
    icon: Wind,
    title: 'Wind Exposure Over Open Water',
    description:
      'Lake Norman spans over 32,000 acres. Homes on the shoreline face sustained winds 20-40% stronger than inland properties, with gusts channeled across the open water surface that can exceed 80 MPH during storms.',
  },
  {
    icon: Droplets,
    title: 'Moisture & Humidity Effects',
    description:
      'Lakefront homes experience elevated humidity year-round. Persistent moisture accelerates shingle degradation, promotes algae and moss growth, and can compromise underlayment integrity if not properly addressed.',
  },
  {
    icon: Sun,
    title: 'High-UV Lake Reflection',
    description:
      'Water surfaces reflect UV radiation onto lakefront roofs, increasing UV exposure by up to 25%. This accelerates shingle granule loss and color fading, reducing the effective lifespan of standard roofing materials.',
  },
  {
    icon: Waves,
    title: 'Wind-Driven Rain & Ice Dams',
    description:
      'Horizontal rain driven by lake winds penetrates standard installations. In winter, temperature differentials between the lake and shore create ice dam conditions that standard roofing systems cannot withstand.',
  },
];

// Recommended materials
const waterfrontMaterials = [
  {
    name: 'Standing Seam Metal Roofing',
    rating: 'Best Overall',
    windRating: '140+ MPH',
    lifespan: '50-70 years',
    description:
      'The gold standard for Lake Norman waterfront homes. Concealed fastener panels resist wind uplift, shed water instantly, and reflect UV radiation. Zero maintenance and exceptional longevity in lakeside conditions.',
    priceRange: '$18-$28 per sq ft installed',
  },
  {
    name: 'Class 4 Impact-Resistant Shingles',
    rating: 'Best Value',
    windRating: '130+ MPH',
    lifespan: '30-50 years',
    description:
      'GAF HDZ and CertainTeed Landmark Pro shingles with SBS-modified asphalt withstand hail, wind-driven debris, and UV degradation. Insurance discounts of 10-28% available for Class 4 rated installations.',
    priceRange: '$10-$16 per sq ft installed',
  },
  {
    name: 'Natural Slate Roofing',
    rating: 'Premium Choice',
    windRating: '110+ MPH',
    lifespan: '75-150 years',
    description:
      'Natural slate is virtually impervious to moisture, UV, and biological growth. Ideal for luxury Lake Norman waterfront estates where aesthetics and century-long durability justify the investment.',
    priceRange: '$25-$45 per sq ft installed',
  },
  {
    name: 'Synthetic Slate & Composite',
    rating: 'Smart Alternative',
    windRating: '130+ MPH',
    lifespan: '40-60 years',
    description:
      'DaVinci and Brava synthetic slate tiles deliver the look of natural slate at 40% less weight and cost. Impact-rated, wind-resistant, and engineered for high-moisture environments.',
    priceRange: '$14-$22 per sq ft installed',
  },
];

// Lake Norman waterfront communities
const waterfrontCommunities = [
  {
    name: 'Cornelius',
    slug: 'cornelius-nc',
    neighborhoods: 'The Peninsula, Jetton Road, Robbins Park',
    waterfrontNote: 'Highest concentration of waterfront estates on LKN',
  },
  {
    name: 'Davidson',
    slug: 'davidson-nc',
    neighborhoods: 'River Run, Westmoreland, Lake Davidson',
    waterfrontNote: 'Historic lakefront homes with unique roofing requirements',
  },
  {
    name: 'Mooresville',
    slug: 'mooresville-nc',
    neighborhoods: 'The Point, Langtree, Harbor Watch',
    waterfrontNote: 'Largest lakefront footprint with diverse home styles',
  },
  {
    name: 'Huntersville',
    slug: 'huntersville-nc',
    neighborhoods: 'Northcross, Skybrook, Birkdale',
    waterfrontNote: 'Lake-adjacent communities with partial lake exposure',
  },
  {
    name: 'Denver',
    slug: 'denver-nc',
    neighborhoods: 'Westport, Island Point, Pinnacle Shores',
    waterfrontNote: 'Western shore with maximum open-water wind exposure',
  },
  {
    name: 'Sherrills Ford',
    slug: 'sherrills-ford-nc',
    neighborhoods: 'South shore lakefront communities',
    waterfrontNote: 'Southern lake exposure with storm-prone positioning',
  },
];

// FAQs
const waterfrontFAQs = [
  {
    question: 'Why do Lake Norman waterfront homes need specialized roofing?',
    answer:
      'Waterfront homes on Lake Norman face 20-40% stronger winds than inland properties, elevated humidity, UV reflection off the water surface, and wind-driven rain. Standard roofing installations fail prematurely in these conditions. Specialized waterfront roofing uses enhanced underlayment, wind-resistant fastening patterns, and materials rated for 130+ MPH to withstand lake exposure.',
  },
  {
    question: 'What is the best roofing material for a Lake Norman lakefront home?',
    answer:
      'Standing seam metal roofing is the top choice for Lake Norman waterfront homes due to its 140+ MPH wind rating, zero-maintenance profile, and 50-70 year lifespan. For homeowners preferring shingles, Class 4 impact-resistant options like GAF HDZ or CertainTeed Landmark Pro with 130+ MPH wind ratings are excellent alternatives at a lower price point.',
  },
  {
    question: 'How much more does waterfront roofing cost compared to a standard roof?',
    answer:
      'Waterfront roofing on Lake Norman typically costs 15-30% more than standard inland installations. The premium covers enhanced underlayment systems, wind-resistant fastening (6-nail pattern vs 4-nail), higher-grade materials, and additional waterproofing at penetrations and edges. However, the longer lifespan and reduced repair frequency make it more cost-effective over time.',
  },
  {
    question: 'Do wind-resistant shingles really make a difference on Lake Norman?',
    answer:
      'Absolutely. Standard 3-tab shingles rated for 60-70 MPH frequently fail on Lake Norman waterfront homes during storms. Wind-resistant architectural shingles rated for 130+ MPH use wider nailing zones, stronger adhesive strips, and heavier construction. After Hurricane Helene remnants hit LKN, homes with 130+ MPH rated shingles experienced 90% fewer failures than those with standard shingles.',
  },
  {
    question: 'How often should a Lake Norman waterfront roof be inspected?',
    answer:
      'We recommend twice-yearly inspections for Lake Norman waterfront roofs: once in spring after winter storms and again in fall before winter weather. Lakefront roofs accumulate more wear from wind, moisture, and UV exposure. Early detection of granule loss, lifted shingles, or sealant deterioration prevents costly damage. Best Roofing Now offers free annual inspections for waterfront clients.',
  },
  {
    question: 'Can I get an insurance discount for impact-resistant roofing on my lake house?',
    answer:
      'Yes. North Carolina insurers offer discounts of 10-28% on homeowner premiums for Class 4 impact-resistant roofing. On a Lake Norman waterfront home with higher-than-average premiums, this can save $500-$2,000+ annually. We provide all documentation needed for your insurance company, including manufacturer impact-rating certificates and installation compliance photos.',
  },
  {
    question: 'What causes ice dams on Lake Norman waterfront homes?',
    answer:
      'Lake Norman rarely freezes, creating a temperature differential between the warmer lake air and cold roof surfaces during winter. This differential, combined with wind-driven moisture, creates ice dam conditions along eaves and valleys. Proper ice and water shield membrane extending 3+ feet from eaves, combined with adequate attic ventilation, prevents ice dam damage on lakefront homes.',
  },
  {
    question: 'Do you handle waterfront HOA roofing requirements on Lake Norman?',
    answer:
      'Yes. Many Lake Norman waterfront communities like The Peninsula, The Point, and River Run have strict HOA architectural guidelines for roofing materials, colors, and styles. We work directly with HOA architectural review boards to ensure material selections comply with community standards while still providing maximum wind and weather protection for lakefront exposure.',
  },
];

export default function LakeNormanWaterfrontRoofingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Norman Roofing', url: `${SITE_CONFIG.url}/roofing-lake-norman-nc` },
          { name: 'Waterfront Roofing', url: `${SITE_CONFIG.url}/lake-norman-waterfront-roofing` },
        ]}
      />
      <LocalBusinessSchema includeRating={true} />
      <FAQSchema faqs={waterfrontFAQs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/lake-norman-waterfront-roofing`}
        pageName="Lake Norman Waterfront Roofing | Lakefront Home Specialists"
        city="Lake Norman"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.houses.modern1}
            alt="Lake Norman waterfront home roofing - lakefront specialists"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Lakefront Roofing Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Lake Norman Waterfront Roofing<br />
              <span className="text-accent">Lakefront Home Specialists</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Purpose-built roofing solutions for Lake Norman&apos;s waterfront homes.
              Wind-resistant materials rated for 130+ MPH, engineered underlayment systems,
              and decades of lakeside installation experience.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span>{SITE_CONFIG.googleRating} Google Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Wind className="w-5 h-5 text-accent" />
                <span>130+ MPH Rated</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-accent" />
                <span>Veteran-Owned</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                <Calendar className="w-5 h-5" />
                Free Waterfront Estimate
              </Button>
              <Button href={`tel:${SITE_CONFIG.phone}`} variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5" />
                (704) 605-6047
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Waterfront Challenges Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Waterfront Roofing Is Different
            </h2>
            <p className="text-gray-600 text-lg">
              Lake Norman&apos;s 520 miles of shoreline create a unique microclimate that
              standard roofing installations are not engineered to handle. Understanding
              these challenges is the first step to protecting your lakefront investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {waterfrontChallenges.map((challenge) => (
              <div
                key={challenge.title}
                className="bg-light rounded-xl p-8"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <challenge.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{challenge.title}</h3>
                <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Comparison Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Best Roofing Materials for Lakefront Homes
            </h2>
            <p className="text-gray-600 text-lg">
              Not every roofing material can withstand Lake Norman&apos;s waterfront conditions.
              We recommend these proven options based on hundreds of lakefront installations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {waterfrontMaterials.map((material) => (
              <div
                key={material.name}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">{material.name}</h3>
                  <span className="bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-4">
                    {material.rating}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{material.description}</p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Wind Rating</p>
                    <p className="font-bold text-primary">{material.windRating}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Lifespan</p>
                    <p className="font-bold text-primary">{material.lifespan}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Price</p>
                    <p className="font-bold text-primary text-sm">{material.priceRange}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Waterfront Approach */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Waterfront Roofing Approach
              </h2>
              <p className="text-gray-600 mb-8">
                Every lakefront roof we install follows our enhanced waterfront protocol,
                developed from years of experience on Lake Norman&apos;s shoreline properties.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Enhanced Underlayment System</h3>
                    <p className="text-gray-600">
                      Synthetic underlayment with ice and water shield extended 6+ feet from
                      eaves, valleys, and all penetrations for maximum wind-driven rain protection.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">6-Nail High-Wind Fastening</h3>
                    <p className="text-gray-600">
                      Every shingle secured with 6 nails instead of the standard 4, following
                      manufacturer high-wind specifications for 130+ MPH warranty coverage.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Reinforced Ridge & Edge Details</h3>
                    <p className="text-gray-600">
                      Hip and ridge caps, drip edges, and starter strips all upgraded to
                      high-wind components that resist uplift from lake-driven wind gusts.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Ventilation Optimization</h3>
                    <p className="text-gray-600">
                      Balanced attic ventilation sized for lakefront humidity levels, preventing
                      moisture buildup, ice dams, and premature decking deterioration.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Algae & UV Protection</h3>
                    <p className="text-gray-600">
                      Copper-infused granules and UV-stabilized materials resist algae growth
                      and color fading from reflected lake UV radiation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.houses.house1}
                alt="Lake Norman waterfront home with new roof installation"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">130+</div>
                <div className="text-sm text-white/80">MPH Wind Rated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Lake Norman Waterfront Communities We Serve
            </h2>
            <p className="text-gray-600 text-lg">
              From The Peninsula in Cornelius to Westport in Denver, we protect
              lakefront homes across every shore of Lake Norman.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterfrontCommunities.map((community) => (
              <Link
                key={community.slug}
                href={`/roofing-${community.slug}`}
                className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {community.name}
                  </h3>
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <p className="text-sm text-gray-500 mb-2">{community.neighborhoods}</p>
                <p className="text-gray-600 text-sm">{community.waterfrontNote}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Waterfront Roofing FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions from Lake Norman waterfront homeowners about roofing materials,
              wind resistance, and lakefront-specific challenges.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {waterfrontFAQs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related LKN Pages */}
      <section className="py-16 bg-light">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            More Lake Norman Roofing Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/roofing-lake-norman-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Lake Norman Roofing</h3>
              <p className="text-sm text-gray-600">Complete LKN roofing hub</p>
            </Link>
            <Link href="/luxury-roofing-lake-norman-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Luxury Roofing LKN</h3>
              <p className="text-sm text-gray-600">Premium waterfront estates</p>
            </Link>
            <Link href="/roofing-cornelius-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Cornelius NC</h3>
              <p className="text-sm text-gray-600">The Peninsula &amp; Jetton Rd</p>
            </Link>
            <Link href="/roofing-davidson-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Davidson NC</h3>
              <p className="text-sm text-gray-600">Historic lakefront homes</p>
            </Link>
            <Link href="/roofing-mooresville-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Mooresville NC</h3>
              <p className="text-sm text-gray-600">The Point &amp; Langtree</p>
            </Link>
            <Link href="/roofing-denver-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Denver NC</h3>
              <p className="text-sm text-gray-600">Western shore lakefront</p>
            </Link>
            <Link href="/metal-roofing-mooresville-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Metal Roofing LKN</h3>
              <p className="text-sm text-gray-600">Standing seam for waterfront</p>
            </Link>
            <Link href="/roofing-sherrills-ford-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Sherrills Ford</h3>
              <p className="text-sm text-gray-600">South shore communities</p>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="location"
        city="Cornelius"
        slug="lake-norman-waterfront-roofing"
        count={4}
        title="Recent Waterfront Roofing Projects on Lake Norman"
        subtitle="Browse completed lakefront roofing projects from the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/lake-norman-waterfront-roofing`}
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Waterfront Roofing"
      />

      {/* Lake Norman Guide Cross-Link */}
      <section className="py-8 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray mb-4">Want to learn everything about roofing on Lake Norman?</p>
            <Link href="/lake-norman-roofing-guide" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-lg">
              Read The Complete Lake Norman Roofing Guide (2026) <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Protect Your Lakefront Investment"
        subtitle="Get a free waterfront roofing assessment from Lake Norman's lakefront home specialists. Wind-resistant, impact-rated solutions for every shore of LKN."
      />
    </>
  );
}
