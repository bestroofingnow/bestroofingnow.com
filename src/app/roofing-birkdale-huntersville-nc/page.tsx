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
  Clock,
  Home,
  MapPin,
  TreePine,
  Hammer,
  Palette,
  Building2,
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
  title: 'Roofing Birkdale Huntersville NC',
  description:
    'Top-rated Birkdale roofer in Huntersville NC 28078. Roof repair, replacement & metal roofing for Birkdale Village & Arnold Palmer golf homes. Free estimates.',
  keywords: [
    'birkdale roofing',
    'birkdale roofer',
    'roof repair birkdale huntersville',
    'roof replacement birkdale',
    'birkdale village roofing',
    'birkdale golf club roofing',
    'roofing huntersville nc 28078',
    'birkdale hoa roofing',
    'metal roofing birkdale huntersville',
    'storm damage roof repair birkdale',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-birkdale-huntersville-nc`,
  },
  openGraph: {
    title: 'Roofing Birkdale Huntersville NC | Birkdale Village & Golf Club',
    description:
      'Birkdale\'s trusted roofer for Birkdale Village townhomes, the Arnold Palmer-designed Birkdale Golf Club community, and single-family homes across 28078. HOA/ARC-approved installs, hail repair, and architectural shingle replacements.',
    url: `${SITE_CONFIG.url}/roofing-birkdale-huntersville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roofing Birkdale Huntersville NC - Best Roofing Now serving Birkdale Village and Birkdale Golf Club',
      },
    ],
  },
};

// Roofing services for Birkdale homes
const services = [
  {
    title: 'Architectural Shingle Replacement',
    description:
      'GAF Timberline HDZ and CertainTeed Landmark architectural shingles are the dominant roof type across Birkdale Golf Club and the surrounding Huntersville 28078 neighborhoods. Color-matched to Birkdale ARC-approved palettes.',
    benefits: ['ARC-approved colors', '50-year warranty', 'Wind-rated 130 MPH'],
    href: '/roof-replacement-huntersville-nc',
  },
  {
    title: 'Standing Seam Metal Roofing',
    description:
      'A growing share of Birkdale homes use standing seam metal accents on porches, dormers, and bay windows to complement craftsman and transitional architecture. Full metal roofs available where HOA-approved.',
    benefits: ['140 MPH wind rating', '50+ year lifespan', 'Energy efficient'],
    href: '/metal-roofing-huntersville-nc',
  },
  {
    title: 'Roof Repair & Leak Detection',
    description:
      'Same-day roof repair across Birkdale Village, Birkdale Commons, and the Birkdale Golf Club community off Sam Furr Road. We diagnose flashing failures, ridge vent leaks, and storm-driven shingle blow-offs common in Lake Norman wind exposure.',
    benefits: ['Same-day response', 'Free leak diagnosis', 'Flashing specialists'],
    href: '/roof-repair-huntersville-nc',
  },
  {
    title: 'Hail & Storm Damage Restoration',
    description:
      'Birkdale sits in a recognized North Mecklenburg hail corridor. We handle insurance claims end-to-end, document damage with drone imagery, and meet your adjuster on-site at your Birkdale home.',
    benefits: ['Insurance liaison', 'Drone documentation', '24/7 emergency tarping'],
    href: '/storm-damage-roof-repair-huntersville-nc',
  },
  {
    title: 'Synthetic Slate & Designer Shingles',
    description:
      'For larger Birkdale Golf Club estates seeking elevated curb appeal, DaVinci synthetic slate and GAF Grand Sequoia designer shingles deliver luxury aesthetics while remaining within Birkdale ARC guidelines.',
    benefits: ['Class 4 impact rated', 'Lifetime warranty', 'HOA-approved'],
    href: '/designer-shingles-charlotte-nc',
  },
  {
    title: 'Townhome & Condo Roofing',
    description:
      'Birkdale Village townhomes and the surrounding mixed-use condo buildings require coordinated multi-unit roofing. We work directly with HOA boards and property managers across the New Urbanist development.',
    benefits: ['Multi-unit coordination', 'HOA board liaison', 'Tenant-friendly scheduling'],
    href: '/roofing-huntersville-nc',
  },
];

// Why Birkdale homeowners choose Best Roofing Now
const whyChooseUs = [
  {
    icon: MapPin,
    title: 'Local 28078 Expertise',
    description:
      'We work in Birkdale every week, from the Sam Furr Road retail corridor to the back nine of Birkdale Golf Club. We know the architectural patterns, the HOA, and the streets.',
  },
  {
    icon: Palette,
    title: 'Birkdale ARC Color Specialists',
    description:
      'We maintain current swatch books for Birkdale\'s pre-approved shingle color palette, including the most-used Weathered Wood, Charcoal, and Driftwood blends.',
  },
  {
    icon: Award,
    title: 'GAF Master Elite Certified',
    description:
      'Our Master Elite status places us in the top 2% of US roofing contractors, qualifying Birkdale homeowners for GAF\'s strongest non-prorated warranties.',
  },
  {
    icon: Shield,
    title: 'A+ BBB & Insurance Trusted',
    description:
      'A+ Better Business Bureau rating and direct working relationships with the major homeowners insurers writing policies in Mecklenburg County 28078.',
  },
  {
    icon: Hammer,
    title: 'In-House Crews, Not Subs',
    description:
      'Every Birkdale roof we install is built by our own W-2 crews — no day-labor subcontractors, no surprise faces showing up at your gate.',
  },
  {
    icon: TreePine,
    title: 'Lake Norman Wind & Moisture Pros',
    description:
      'Birkdale sits five minutes from Lake Norman. We engineer every roof for the lake-effect wind, summer pop-up storms, and hurricane remnants the area sees each year.',
  },
];

// Decision matrix: repair vs replacement for Birkdale homes
const repairVsReplace = [
  {
    factor: 'Roof Age',
    repair: '0-15 years old',
    replace: '18+ years old (most original Birkdale Golf Club roofs from 1996-2010 are now due)',
  },
  {
    factor: 'Damage Scope',
    repair: 'Isolated leak, single area, < 25% of roof',
    replace: 'Multiple leaks, widespread granule loss, or > 30% of roof affected',
  },
  {
    factor: 'Hail Damage',
    repair: 'Cosmetic only, < 8 hits per square',
    replace: 'Functional hail bruising — typically a full insurance-covered replacement',
  },
  {
    factor: 'Selling Soon',
    repair: 'Roof has 5+ years of life left',
    replace: 'Roof age will appear on the inspection report and reduce Birkdale resale value',
  },
];

// FAQs for Birkdale Huntersville NC
const faqs = [
  {
    question: 'Who is the best roofer in Birkdale Huntersville NC?',
    answer:
      'Best Roofing Now is the top-rated roofer serving Birkdale in Huntersville NC 28078, with 4.9-star reviews, GAF Master Elite certification, and an A+ BBB rating. We have completed hundreds of roof replacements and repairs across Birkdale Village, the Birkdale Golf Club community, and the surrounding Sam Furr Road / Hwy 73 corridor. Our crews are based in the Lake Norman area, fully insured, and familiar with the Birkdale HOA architectural review process.',
  },
  {
    question: 'How much does a roof replacement cost in Birkdale?',
    answer:
      'A roof replacement in Birkdale Huntersville typically runs $14,000 to $28,000 for a 2,400-3,800 sq ft single-family home with architectural shingles, $22,000 to $38,000 for a larger Birkdale Golf Club estate, and $9,000 to $16,000 for a Birkdale Village townhome. Standing seam metal roofs run $32,000 to $60,000+. Final pricing depends on roof pitch, layers being torn off, decking condition, and material selection. We provide free, fixed-price estimates after an on-site Birkdale inspection.',
  },
  {
    question: 'How long do roofs last in Birkdale Huntersville?',
    answer:
      'In Birkdale Huntersville, builder-grade 3-tab shingles last 15-20 years, mid-grade architectural shingles last 22-30 years, premium architectural shingles (GAF Timberline HDZ, CertainTeed Landmark Pro) last 28-35 years, standing seam metal lasts 50+ years, and synthetic slate lasts 50+ years. Most original Birkdale Golf Club roofs were built between 1996 and 2010, meaning many homes are now in the prime replacement window.',
  },
  {
    question: 'Does Birkdale require HOA approval for a new roof?',
    answer:
      'Yes. The Birkdale HOA Architectural Review Committee (ARC) requires written approval before any roof replacement, color change, or material change in the Birkdale Golf Club community. Approval is typically granted within 14-30 days when the submission includes a manufacturer spec sheet, color sample, contractor proof of insurance, and project timeline. Best Roofing Now prepares the entire ARC submission package for our Birkdale homeowners at no extra cost.',
  },
  {
    question: 'What roofing materials work best for Birkdale homes?',
    answer:
      'The best roofing materials for Birkdale Huntersville homes are: (1) GAF Timberline HDZ and CertainTeed Landmark architectural shingles — the dominant roof on the Arnold Palmer-designed Birkdale Golf Club community; (2) standing seam metal roofing for craftsman accents and porches; (3) DaVinci synthetic slate for upscale estates; and (4) Class 4 impact-resistant shingles, which qualify for Mecklenburg County hail insurance discounts.',
  },
  {
    question: 'How quickly can roof repairs be done in Birkdale?',
    answer:
      'Most Birkdale roof repairs can be completed within 24-72 hours of your initial call. Active leaks get same-day emergency tarping. Because we are based in the Lake Norman area, our trucks are typically less than 15 minutes from any address inside the 28078 zip code, including Birkdale Village townhomes and the Birkdale Golf Club community off Sam Furr Road.',
  },
  {
    question: 'Will my homeowners insurance cover hail damage in Birkdale?',
    answer:
      'Yes — North Mecklenburg County, including Birkdale Huntersville, sits in a recognized hail corridor, and standard NC homeowners policies cover sudden hail and wind damage. Best Roofing Now performs free inspections, documents damage with drone imagery, files the claim language with your carrier, and meets the adjuster on-site at your Birkdale home. Most Birkdale claims for storm-damaged roofs are settled within 30-60 days.',
  },
  {
    question: 'Are metal roofs allowed in Birkdale Golf Club?',
    answer:
      'Standing seam metal accents on porches, dormers, and bay windows are routinely approved by the Birkdale Architectural Review Committee. Full metal roof replacements are evaluated case-by-case and typically require a darker matte finish (charcoal, bronze, or weathered green) to match the existing Birkdale Golf Club aesthetic. We have successfully submitted multiple full-metal roof ARC packages in Birkdale.',
  },
  {
    question: 'What\'s the best roofing color for Birkdale Huntersville HOA?',
    answer:
      'The most commonly approved Birkdale HOA shingle colors are Weathered Wood, Charcoal, Driftwood, Hickory, and Pewter Gray — all available in the GAF Timberline HDZ and CertainTeed Landmark lines. The Birkdale ARC favors muted earth tones that complement the Arnold Palmer-designed golf course landscape and the brick-and-Hardie exteriors of the surrounding 28078 homes. We bring physical color samples to every Birkdale consultation.',
  },
  {
    question: 'Does Best Roofing Now serve Birkdale Village townhomes and condos?',
    answer:
      'Yes. We routinely service Birkdale Village townhomes, the residential apartments above the retail at the Sam Furr Road / Hwy 73 mixed-use development, and the surrounding Birkdale Commons condos. We coordinate directly with Birkdale Village property management and HOA boards, schedule around tenant access requirements, and use containment systems that keep the retail walkways and parking areas clean throughout the project.',
  },
];

export default function RoofingBirkdaleHuntersvillePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Huntersville NC', url: `${SITE_CONFIG.url}/roofing-huntersville-nc` },
          { name: 'Roofing Birkdale Huntersville NC', url: `${SITE_CONFIG.url}/roofing-birkdale-huntersville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-birkdale-huntersville-nc`}
        pageName="Roofing Birkdale Huntersville NC"
        city="Huntersville"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/roofing-birkdale-huntersville-nc`} city={"Huntersville"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4 text-emerald-300" />
              <span className="text-sm font-semibold">Birkdale Village & Golf Club Roofers</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Birkdale <br className="hidden md:block" />
              <span className="text-emerald-300">Huntersville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Birkdale&apos;s trusted local roofer for the 28078 zip code
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is the top-rated roofing contractor serving Birkdale in Huntersville NC. From the
              New Urbanist Birkdale Village on Sam Furr Road to the Arnold Palmer-designed Birkdale Golf Club
              community, we install architectural shingles, standing seam metal, and synthetic slate that meet
              every Birkdale ARC color guideline. GAF Master Elite, A+ BBB, free same-week inspections.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-400 text-white"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Free Birkdale Roof Inspection
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-emerald-900"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-300" />
                GAF Master Elite
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-300" />
                A+ BBB Rated
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-emerald-300" />
                4.9-Star Local Reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #1 — Why Birkdale Homeowners Choose Best Roofing Now (answer-first) */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Birkdale Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-4">
                <strong>The short answer:</strong> Best Roofing Now is the top-rated roofer in Birkdale
                Huntersville NC because we are local to the 28078 zip code, certified GAF Master Elite,
                A+ rated by the BBB, and we have completed hundreds of Birkdale roof projects — from Birkdale
                Village townhomes to the largest custom estates inside the Arnold Palmer-designed Birkdale
                Golf Club community.
              </p>
              <p className="text-gray text-lg mb-6">
                Birkdale was developed beginning in 1996 around an 18-hole semi-private golf course designed by
                the Arnold Palmer firm. The mixed-use Birkdale Village, anchoring north Huntersville on Sam Furr
                Road / Hwy 73, opened in 2003 and added apartments and townhomes above retail, restaurants, and
                a movie theater. Most single-family roofs in Birkdale Golf Club were originally installed
                between 1996 and 2010, putting many of them in the prime 18-30 year replacement window today.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">28078</p>
                  <p className="text-sm text-gray">Birkdale Zip Code</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">600+</p>
                  <p className="text-sm text-gray">Homes in Birkdale Golf Club</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">$650K-$1.1M</p>
                  <p className="text-sm text-gray">Single-Family Median</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">5 min</p>
                  <p className="text-sm text-gray">to Lake Norman</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <SEOImage
                src={IMAGES.hero.hero1}
                alt="Roofing Birkdale Huntersville NC - architectural shingle replacement on Birkdale Golf Club home"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-700 text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">130+</p>
                <p className="text-sm text-white/90">MPH Wind Rated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="section bg-emerald-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.googleRating}</p>
              <p className="text-sm text-gray">Google Rating</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Award className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">GAF Master Elite</p>
              <p className="text-sm text-gray">Top 2% of Contractors</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.bbbRating}</p>
              <p className="text-sm text-gray">BBB Rating</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Clock className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.yearsInBusiness}+ Years</p>
              <p className="text-sm text-gray">Serving Lake Norman</p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #2 — Roofing Services for Birkdale Village & Golf Community Homes */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Services for Birkdale Village &amp; Golf Community Homes
            </h2>
            <p className="text-gray text-lg">
              From Birkdale Village townhomes on Sam Furr Road to single-family estates lining the Arnold
              Palmer-designed Birkdale Golf Club fairways, we install every roofing system common across the
              Huntersville 28078 zip code.
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
                      className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full"
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

      {/* H2 #3 — How Much Does a Roof Cost in Birkdale Huntersville? */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              How Much Does a Roof Cost in Birkdale Huntersville?
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              <strong>Quick answer:</strong> A typical roof replacement in Birkdale Huntersville NC costs
              $14,000 to $28,000 for an architectural shingle install on a 2,400-3,800 sq ft single-family
              home. Pricing varies by material, pitch, decking condition, and home size.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl shadow-md overflow-hidden">
                <thead className="bg-emerald-700 text-white">
                  <tr>
                    <th className="p-4 text-left">Roofing Material</th>
                    <th className="p-4 text-left">Birkdale Single-Family</th>
                    <th className="p-4 text-left">Birkdale Golf Club Estate</th>
                    <th className="p-4 text-left">Birkdale Village Townhome</th>
                  </tr>
                </thead>
                <tbody className="text-gray">
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-semibold text-dark">3-Tab Shingles (basic)</td>
                    <td className="p-4">$10,000 - $16,000</td>
                    <td className="p-4">$16,000 - $24,000</td>
                    <td className="p-4">$7,000 - $11,000</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-emerald-50/50">
                    <td className="p-4 font-semibold text-dark">Architectural Shingles</td>
                    <td className="p-4">$14,000 - $28,000</td>
                    <td className="p-4">$22,000 - $38,000</td>
                    <td className="p-4">$9,000 - $16,000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-semibold text-dark">Class 4 Impact-Resistant</td>
                    <td className="p-4">$18,000 - $34,000</td>
                    <td className="p-4">$28,000 - $46,000</td>
                    <td className="p-4">$12,000 - $20,000</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-emerald-50/50">
                    <td className="p-4 font-semibold text-dark">Standing Seam Metal</td>
                    <td className="p-4">$32,000 - $60,000</td>
                    <td className="p-4">$48,000 - $90,000</td>
                    <td className="p-4">$22,000 - $36,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-dark">DaVinci Synthetic Slate</td>
                    <td className="p-4">$36,000 - $68,000</td>
                    <td className="p-4">$55,000 - $110,000</td>
                    <td className="p-4">$24,000 - $40,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray mt-4 text-center italic">
              Pricing is for full tear-off and replacement in the Birkdale 28078 zip code. Final estimate
              requires on-site measurement of your specific Birkdale home.
            </p>
            <div className="text-center mt-8">
              <Link
                href="/lake-norman-roofing-costs-2026"
                className="inline-flex items-center text-emerald-700 font-semibold hover:underline"
              >
                See full Lake Norman roofing cost guide for 2026 <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-emerald-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Need a Roof Inspection in Birkdale?
              </h2>
              <p className="text-white/90">
                Free, no-pressure on-site assessment for any Birkdale home — we&apos;re typically there within 48 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-emerald-700"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Inspection
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-emerald-700 hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #4 — Birkdale HOA & ARC Approval */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Birkdale HOA &amp; ARC Approval for Roofing Projects
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              <strong>Yes — the Birkdale HOA Architectural Review Committee (ARC) requires written approval
              before any roof replacement, color change, or material change inside the Birkdale Golf Club
              community.</strong> Best Roofing Now handles the entire submission package for you at no extra cost.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-lg mb-3">What the Birkdale ARC Reviews</h3>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Shingle color (must match Birkdale pre-approved palette)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Material type (architectural shingle, metal, synthetic slate)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Manufacturer specification sheet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Contractor proof of insurance &amp; NC license</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Project start &amp; completion dates</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-lg mb-3">Most-Approved Birkdale Shingle Colors</h3>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2">
                    <Palette className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Weathered Wood</strong> — most common Birkdale color</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Palette className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Charcoal</strong> — popular on transitional new-construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Palette className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Driftwood</strong> — ideal for craftsman-accent Birkdale homes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Palette className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Hickory</strong> — warm tone for brick exteriors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Palette className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Pewter Gray</strong> — classic Birkdale Golf Club look</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-emerald-100 rounded-xl p-6 mt-8 text-center">
              <p className="text-emerald-900 font-medium">
                Typical Birkdale ARC turnaround: <strong>14-30 days</strong>. We submit on your behalf and
                track the application through approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #5 — Roof Repair vs Replacement Decision Matrix */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Roof Repair vs Replacement for Birkdale Homes
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              <strong>Quick answer:</strong> Repair if your roof is under 15 years old with isolated damage.
              Replace if your roof is 18+ years old (most original Birkdale Golf Club roofs from 1996-2010 are
              now in this window) or has widespread storm damage.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl shadow-md overflow-hidden">
                <thead className="bg-emerald-700 text-white">
                  <tr>
                    <th className="p-4 text-left">Decision Factor</th>
                    <th className="p-4 text-left">Repair</th>
                    <th className="p-4 text-left">Replace</th>
                  </tr>
                </thead>
                <tbody className="text-gray">
                  {repairVsReplace.map((row, i) => (
                    <tr
                      key={row.factor}
                      className={`border-b border-gray-100 ${i % 2 === 1 ? 'bg-emerald-50/50' : ''}`}
                    >
                      <td className="p-4 font-semibold text-dark">{row.factor}</td>
                      <td className="p-4 text-sm">{row.repair}</td>
                      <td className="p-4 text-sm">{row.replace}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <Link
                href="/roof-repair-huntersville-nc"
                className="bg-emerald-50 rounded-xl p-6 hover:bg-emerald-100 transition-colors"
              >
                <h3 className="font-bold text-dark text-lg mb-2">Birkdale Roof Repair</h3>
                <p className="text-gray text-sm">Same-day response, free leak diagnosis, flashing &amp; vent specialists.</p>
                <span className="inline-flex items-center text-emerald-700 font-medium text-sm mt-3">
                  Learn about repair <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              <Link
                href="/roof-replacement-huntersville-nc"
                className="bg-emerald-50 rounded-xl p-6 hover:bg-emerald-100 transition-colors"
              >
                <h3 className="font-bold text-dark text-lg mb-2">Birkdale Roof Replacement</h3>
                <p className="text-gray text-sm">Full tear-off, ARC submission, 50-year warranty options.</p>
                <span className="inline-flex items-center text-emerald-700 font-medium text-sm mt-3">
                  Learn about replacement <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #6 — Why Best Roofing Now Is Birkdale's Trusted Roofer (E-E-A-T) */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Best Roofing Now Is Birkdale&apos;s Trusted Roofer
            </h2>
            <p className="text-gray text-lg">
              Real local experience with the Birkdale HOA, the Arnold Palmer golf community, and the Sam Furr
              Road / Hwy 73 corridor — backed by manufacturer certifications and an A+ BBB record.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-emerald-700" />
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

      {/* What Makes Birkdale Roofing Unique */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              What Makes Birkdale Roofing Unique
            </h2>
            <p className="text-gray text-center mb-8">
              Birkdale sits inside the 28078 zip code in northern Mecklenburg County, anchored by Sam Furr Road
              (Hwy 73), zoned for Birkdale Elementary, Bailey Middle, and Hopewell High, and just minutes from
              the Huntersville Family Fitness &amp; Aquatics Center and Lake Norman.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Mixed Architectural Styles</h3>
                <p className="text-gray text-sm">
                  Birkdale homes mix traditional brick colonials, transitional new-construction, and craftsman
                  accents. Single-family homes built between 1996 and 2010 dominate the Birkdale Golf Club
                  community, while Birkdale Village contributes contemporary townhomes and apartments above
                  retail. Each style demands different roofing aesthetics — and we install all of them.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Arnold Palmer Golf Course Backdrop</h3>
                <p className="text-gray text-sm">
                  The Arnold Palmer-designed Birkdale Golf Club is semi-private and weaves through the
                  community. Roofs along the fairways are visible from elevated tee boxes and clubhouse
                  views — meaning material color and ridge detail matter for both HOA approval and
                  long-term Birkdale property value.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Lake Norman Wind &amp; Storm Exposure</h3>
                <p className="text-gray text-sm">
                  Birkdale sits five minutes from Lake Norman. The lake-effect winds, summer pop-up
                  thunderstorms, and remnants of Atlantic hurricanes routinely lift loose ridge caps and
                  expose nail-line failures. We engineer every Birkdale roof for 130+ MPH wind and use
                  upgraded ring-shank nails on the field shingles.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Birkdale Village Mixed-Use Coordination</h3>
                <p className="text-gray text-sm">
                  Birkdale Village, opened in 2003 on Sam Furr Road, is a New Urbanist mixed-use
                  development with apartments and townhomes above retail, restaurants, and a cinema. Roof
                  work above active retail requires specialized scheduling, full pedestrian containment,
                  and direct coordination with Birkdale Village property management — all standard for
                  our crews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #7 — Service Areas Grid (LKN cities) */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Lake Norman Service Areas Beyond Birkdale
            </h2>
            <p className="text-gray text-lg">
              We serve every Lake Norman community surrounding Birkdale Huntersville.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Roofing Huntersville NC', href: '/roofing-huntersville-nc' },
              { name: 'Roofing Lake Norman NC', href: '/roofing-lake-norman-nc' },
              { name: 'Roofing Cornelius NC', href: '/roofing-cornelius-nc' },
              { name: 'Roofing The Peninsula Cornelius', href: '/roofing-the-peninsula-cornelius-nc' },
              { name: 'Roofing Mooresville NC', href: '/roofing-mooresville-nc' },
              { name: 'Roofing Davidson NC', href: '/roofing-davidson-nc' },
              { name: 'Roofing Denver NC', href: '/roofing-denver-nc' },
              { name: 'Roof Repair Huntersville', href: '/roof-repair-huntersville-nc' },
              { name: 'Storm Damage Huntersville', href: '/storm-damage-roof-repair-huntersville-nc' },
            ].map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex items-center justify-between"
              >
                <span className="font-medium text-dark group-hover:text-emerald-700 transition-colors">
                  {area.name}
                </span>
                <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* H2 #8 — FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Birkdale Roofing FAQs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Birkdale Huntersville Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                The most common roofing questions we hear from Birkdale homeowners in the 28078 zip code.
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
              Explore Related Birkdale &amp; Lake Norman Resources
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/lake-norman-roofing-guide"
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <Building2 className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Lake Norman Roofing Guide
              </h3>
              <p className="text-gray text-sm mb-3">
                The complete 20K-word guide to roofing every Lake Norman community, including Birkdale.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Read Guide <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/lake-norman-roofing-costs-2026"
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <Home className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Lake Norman Roofing Costs 2026
              </h3>
              <p className="text-gray text-sm mb-3">
                2026 roof replacement &amp; repair pricing across Birkdale, Huntersville, and surrounding LKN.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                See Pricing <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/services/roof-replacement"
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <Hammer className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Roof Replacement Service
              </h3>
              <p className="text-gray text-sm mb-3">
                Our complete roof replacement process — used on hundreds of Birkdale Huntersville homes.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="location"
        city="Huntersville"
        slug="roofing-birkdale-huntersville-nc"
      />

      <CityGeoSection city="Huntersville" state="NC" citySlug="huntersville-nc" service="Roofing" />

      <LKNNeighborhoodGrid currentCity="Huntersville" currentSlug="roofing-birkdale-huntersville-nc" />
      <LKNPartnershipsBlock city={'Huntersville'} />
      <LKNDataCitations city={'Huntersville'} />

      <CTASection
        title="Get Your Free Birkdale Roof Estimate Today"
        subtitle="Whether you're in a Birkdale Village townhome on Sam Furr Road or a single-family home inside the Arnold Palmer-designed Birkdale Golf Club community, we'll inspect, document, and price your roof with full Birkdale ARC compliance — typically within 48 hours."
      />
    </>
  );
}
