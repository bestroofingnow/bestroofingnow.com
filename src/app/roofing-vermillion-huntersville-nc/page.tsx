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
  Home,
  MapPin,
  Trees,
  Palette,
  Hammer,
  Building2,
  ScrollText,
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
  title: 'Roofing Vermillion Huntersville NC',
  description:
    'Vermillion Huntersville NC roofer serving the Verhoeff Drive TND. Architectural shingles, ARC color compliance, metal accents. BBB A+. Free estimates.',
  keywords: [
    'vermillion roofing',
    'vermillion huntersville roofer',
    'roof repair vermillion',
    'roof replacement vermillion',
    'vermillion huntersville nc roofing',
    'verhoeff drive roofing',
    'tnd roofing huntersville',
    'vermillion arc roof approval',
    'vermillion hoa roofing colors',
    '28078 roofing contractor',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-vermillion-huntersville-nc`,
  },
  openGraph: {
    title: 'Roofing Vermillion Huntersville NC | TND Specialists',
    description:
      'Roofing for Vermillion, the New Urbanist TND on Verhoeff Drive in Huntersville NC. Architectural shingles, copper and metal accents, ARC color compliance for craftsman, farmhouse, and low-country homes.',
    url: `${SITE_CONFIG.url}/roofing-vermillion-huntersville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roofing Vermillion Huntersville NC - Best Roofing Now TND neighborhood specialists',
      },
    ],
  },
};

// Roofing services tuned for Vermillion's TND architecture
const services = [
  {
    title: 'Architectural Shingle Replacement',
    description:
      'GAF Timberline HDZ and CertainTeed Landmark in Vermillion ARC-approved earth tones — weathered wood, driftwood, slate gray, and barkwood that match the TND palette on Verhoeff Drive.',
    benefits: ['ARC-approved colors', 'Lifetime warranty', '130 MPH wind rating'],
    href: '/roof-replacement-huntersville-nc',
  },
  {
    title: 'Metal Roof Accents & Porch Roofs',
    description:
      'Standing seam metal for Vermillion front-porch roofs, dormer caps, bay windows, and live-work shopfronts. Muted bronze, charcoal, and copper-look finishes preserve the New Urbanist street wall.',
    benefits: ['Porch & dormer specialty', 'Muted ARC tones', '40+ year lifespan'],
    href: '/metal-roofing-huntersville-nc',
  },
  {
    title: 'Storm & Hail Damage Repair',
    description:
      'Fast response for Vermillion homes after Lake Norman storms. We document hail strikes, work directly with your insurance carrier, and restore craftsman, farmhouse, and low-country roofs to spec.',
    benefits: ['24/7 emergency tarp', 'Insurance liaison', 'ARC re-submittal support'],
    href: '/storm-damage-roof-repair-huntersville-nc',
  },
  {
    title: 'Roof Repair & Leak Detection',
    description:
      'Targeted repairs for Vermillion shingle blow-offs, valley flashing leaks, alley-side garage roofs, and metal porch flashings. Most repairs completed in 1-2 visits.',
    benefits: ['1-2 visit repairs', 'Infrared leak scan', 'Alley garage access'],
    href: '/roof-repair-huntersville-nc',
  },
  {
    title: 'Townhome & Live-Work Roofing',
    description:
      'Coordinated roof replacement for Vermillion townhome rows and live-work units. We schedule shared-wall units together to minimize HOA disruption and protect all-attached neighbors.',
    benefits: ['Shared-wall coordination', 'HOA scheduling', 'Block-by-block plan'],
    href: '/roof-replacement-huntersville-nc',
  },
  {
    title: 'ARC Submittal & Compliance Packages',
    description:
      'We prepare the full Vermillion ARC submittal — material spec sheets, color samples, GAF/CertainTeed swatches, and elevation photos — so your roof project clears review on the first pass.',
    benefits: ['First-pass approval', 'Sample boards included', 'ARC liaison service'],
    href: '/contact',
  },
];

// Why choose us for Vermillion
const whyChooseUs = [
  {
    icon: ScrollText,
    title: 'Vermillion ARC Specialists',
    description:
      'We know Vermillion ARC color and material standards inside-out — restricted earth tones, weathered woods, muted slate looks. We submit complete packets that get approved fast.',
  },
  {
    icon: Building2,
    title: 'New Urbanist Architecture Experience',
    description:
      'Vermillion was designed by Cooper Carry & Associates as a true TND with craftsman, farmhouse, and low-country homes. Our crews respect varied facades, alley access, and rear-loaded garages.',
  },
  {
    icon: Award,
    title: 'GAF Master Elite Certified',
    description:
      'As a GAF Master Elite contractor (top 2% nationally), we install lifetime-warranted shingles in colors that match the Vermillion palette on Verhoeff Drive at Beatties Ford Rd.',
  },
  {
    icon: Trees,
    title: 'Lake Norman Roofing Knowledge',
    description:
      'Vermillion sits 5 minutes from Lake Norman. We engineer roof systems for lake-effect humidity, gusty afternoon storms, and pollen load from nearby Latta Plantation Nature Preserve.',
  },
  {
    icon: Shield,
    title: 'Workmanship + Manufacturer Warranty',
    description:
      'Manufacturer-backed warranties up to 50 years on materials, plus our written workmanship guarantee. We stand behind every Vermillion Huntersville roof we install.',
  },
  {
    icon: Hammer,
    title: 'Townhome & Detached Home Crews',
    description:
      'Separate crews trained for Vermillion townhomes, cottages, single-family, and live-work units. Each home type has its own playbook, materials list, and ARC submittal template.',
  },
];

// Hyper-local Vermillion FAQs (each opens with citable factual sentence)
const faqs = [
  {
    question: 'Who is the best roofer for Vermillion homes in Huntersville NC?',
    answer:
      'Best Roofing Now is a top-rated Vermillion Huntersville NC roofer with GAF Master Elite certification, BBB A+ rating, and direct experience with the Vermillion TND ARC review process on Verhoeff Drive. We have replaced and repaired roofs across Vermillion\'s craftsman, farmhouse, and low-country home types and submit ARC packages that meet the neighborhood\'s tight color and material standards.',
  },
  {
    question: 'How much does a roof replacement cost in Vermillion?',
    answer:
      'A typical Vermillion roof replacement in 2026 ranges from $9,500 to $22,000 for single-family homes (1,800-3,200 sq ft), $7,500 to $14,000 for cottages and townhomes, and $18,000-$35,000 for larger live-work units with metal porch accents. Final pricing depends on roof pitch, layers to tear off, and whether ARC requires premium shingle lines (GAF Timberline UHDZ, CertainTeed Landmark Pro). We provide a detailed written estimate after on-site measurement at your Vermillion home.',
  },
  {
    question: 'What roofing colors does Vermillion HOA approve?',
    answer:
      'Vermillion ARC approves a tight palette of muted earth tones — weathered wood, driftwood, barkwood, slate gray, charcoal, and aged-cedar looks — to preserve the New Urbanist TND aesthetic Cooper Carry designed in the early 2000s. Bright colors, terra cotta, blue, and green shingles are not approved. We carry physical samples of every Vermillion-approved GAF and CertainTeed color so you can see them on your home before committing.',
  },
  {
    question: 'Are metal roof accents allowed in Vermillion?',
    answer:
      'Yes, metal roof accents are allowed and even encouraged in Vermillion on front porches, dormers, bay windows, and live-work shopfronts — provided the finish is a muted ARC-approved tone such as bronze, charcoal, or weathered copper. Full metal main roofs require additional ARC review. We install standing seam metal accents that complement the TND craftsman and farmhouse architecture without breaking the streetscape.',
  },
  {
    question: 'How long do shingles last on Vermillion homes?',
    answer:
      'Architectural shingles on Vermillion Huntersville homes typically last 22-28 years thanks to moderate sun exposure, mature TND tree canopy, and Lake Norman\'s humid climate. Premium lines like GAF Timberline UHDZ carry lifetime limited warranties. Homes on the more exposed perimeter of Vermillion near Hambright Rd may see slightly faster wear, while sheltered cottages tucked along the alleys often exceed 25 years.',
  },
  {
    question: 'Can I install solar shingles in Vermillion?',
    answer:
      'Solar shingle installations in Vermillion require ARC review and approval before work begins because the TND aesthetic is strictly protected. GAF Timberline Solar and Tesla Solar Roof have been approved on a case-by-case basis when the panels match the surrounding roof color. We handle the ARC submittal, including renderings showing how the solar shingles look on your specific Vermillion elevation.',
  },
  {
    question: 'Will my insurance cover hail damage in Vermillion?',
    answer:
      'Most homeowner policies in Vermillion (28078 zip code) cover hail and wind damage to your roof, minus your deductible. Mecklenburg County hail events from Lake Norman thunderstorms are well-documented, which helps your claim. We meet your adjuster on-site, document every hail strike with photos, and supply the ARC-compliant materials list so insurance pays for the correct Vermillion-approved shingle, not a builder-grade substitute.',
  },
  {
    question: 'What is the ARC submittal process for a new roof in Vermillion?',
    answer:
      'The Vermillion ARC submittal for a new roof requires: (1) the architectural review form from the HOA, (2) shingle manufacturer and exact color name, (3) physical color samples or printed swatches, (4) elevation photos of your home, and (5) any metal accent specifications. We assemble the entire packet for you, hand-deliver it to the Vermillion ARC, and follow up until approval — usually within 2-3 weeks for standard color choices.',
  },
  {
    question: 'Does Best Roofing Now serve Vermillion townhomes and live-work units?',
    answer:
      'Yes, we roof every home type in Vermillion — single-family detached, attached townhomes, alley cottages, and the live-work units along the village center. Townhome rows are scheduled together so neighboring units finish on the same day, minimizing HOA disruption. Live-work units get extra attention to the shopfront metal accents and signage clearance.',
  },
  {
    question: 'How quickly can roof repairs be done in Vermillion?',
    answer:
      'Most Vermillion roof repairs — shingle blow-offs, valley flashing leaks, ridge cap replacements, alley garage roofs — are scheduled within 24-72 hours of your call. Emergency tarping after a Lake Norman storm is available the same day, often within 4 hours. Full roof replacements for Vermillion homes typically install in 1-2 days once materials and ARC approval are in place.',
  },
];

export default function RoofingVermillionHuntersvillePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Huntersville NC', url: `${SITE_CONFIG.url}/roofing-huntersville-nc` },
          { name: 'Roofing Vermillion Huntersville NC', url: `${SITE_CONFIG.url}/roofing-vermillion-huntersville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-vermillion-huntersville-nc`}
        pageName="Roofing Vermillion Huntersville NC"
        city="Huntersville"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/roofing-vermillion-huntersville-nc`} city={"Huntersville"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-stone-800 to-stone-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-700/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Home className="w-4 h-4 text-amber-300" />
              <span className="text-sm font-semibold">Vermillion TND Neighborhood Roofing Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Vermillion <br className="hidden md:block" />
              <span className="text-amber-300">Huntersville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Trusted roofer for Vermillion&apos;s New Urbanist homes on Verhoeff Drive
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Vermillion is Huntersville&apos;s premier traditional neighborhood development (TND) — roughly 700
              homes designed by Cooper Carry &amp; Associates at Verhoeff Drive, Beatties Ford Rd, and Hambright
              Rd. Best Roofing Now installs ARC-approved architectural shingles, metal porch accents, and
              copper details that preserve the craftsman, farmhouse, and low-country character of Vermillion
              while standing up to Lake Norman weather.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-amber-500 hover:bg-amber-400 text-white"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Free Vermillion Roof Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-stone-900"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <ScrollText className="w-5 h-5 text-amber-300" />
                ARC Submittal Included
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-300" />
                130 MPH Wind Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-300" />
                GAF Master Elite
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #1: Why Vermillion Homeowners Choose Best Roofing Now (answer-first) */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Vermillion Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-4">
                <strong>Vermillion homeowners choose Best Roofing Now because we understand the TND.</strong> We
                know the Vermillion ARC color palette, we&apos;ve roofed craftsman, farmhouse, and low-country
                homes across Verhoeff Drive, and we deliver the architectural detail New Urbanist communities
                in Huntersville require. Our crews have completed roof replacements throughout Vermillion and
                neighboring Huntersville TND-style streets for over a decade.
              </p>
              <p className="text-gray text-lg mb-6">
                Vermillion sits at the corner of Beatties Ford Rd and Hambright Rd in north Huntersville, just
                5 minutes from Lake Norman and a short drive to Birkdale Village. The 700-home TND mixes
                single-family homes ($525K-$850K), townhomes ($350K-$550K), alley cottages, and live-work
                units — every home type needs a roofer who respects the original Cooper Carry design intent
                and the Vermillion ARC standards that protect it.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">~700</p>
                  <p className="text-sm text-gray">Vermillion Homes</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">28078</p>
                  <p className="text-sm text-gray">Huntersville Zip</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">5 min</p>
                  <p className="text-sm text-gray">to Lake Norman</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">TND</p>
                  <p className="text-sm text-gray">New Urbanist Design</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.hero.hero1}
                alt="Roofing Vermillion Huntersville NC TND New Urbanist craftsman home"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-700 text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">ARC</p>
                <p className="text-sm text-white/90">Approval Included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="section bg-amber-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.googleRating}</p>
              <p className="text-sm text-gray">Google Rating</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Award className="w-8 h-8 text-amber-700 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">GAF Master Elite</p>
              <p className="text-sm text-gray">Top 2% of Contractors</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.bbbRating}</p>
              <p className="text-sm text-gray">BBB Rating</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Clock className="w-8 h-8 text-amber-700 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.yearsInBusiness}+ Years</p>
              <p className="text-sm text-gray">Serving Huntersville</p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #2: Roofing Services for Vermillion's New Urbanist Homes */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Services for Vermillion&apos;s New Urbanist Homes
            </h2>
            <p className="text-gray text-lg">
              Vermillion&apos;s TND mix — craftsman, farmhouse, low-country, cottages, townhomes, and live-work
              units — needs a roofer who understands varied facades, rear-loaded alley garages, and the tight
              ARC color rules that keep the streetscape consistent.
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
                      className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full"
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

      {/* H2 #3: How Much Does a Roof Cost in Vermillion Huntersville? */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              How Much Does a Roof Cost in Vermillion Huntersville?
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              <strong>A new roof in Vermillion typically costs between $7,500 and $35,000</strong>, depending on
              your home type, square footage, shingle line, and whether ARC-approved metal porch accents are
              part of the project.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Vermillion Cottages &amp; Townhomes</h3>
                <p className="text-2xl font-bold text-amber-700 mb-2">$7,500 - $14,000</p>
                <p className="text-gray text-sm">
                  1,200-1,800 sq ft. Architectural shingles in ARC-approved earth tones, full tear-off, ridge
                  vent, and standard underlayment. Includes ARC submittal package.
                </p>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Vermillion Single-Family</h3>
                <p className="text-2xl font-bold text-amber-700 mb-2">$9,500 - $22,000</p>
                <p className="text-gray text-sm">
                  1,800-3,200 sq ft craftsman, farmhouse, and low-country homes. GAF Timberline HDZ or
                  CertainTeed Landmark, synthetic underlayment, ice and water shield in valleys.
                </p>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Vermillion Live-Work &amp; Premium</h3>
                <p className="text-2xl font-bold text-amber-700 mb-2">$18,000 - $35,000</p>
                <p className="text-gray text-sm">
                  Larger homes with metal porch roofs, dormer caps, copper accents, and complex valleys.
                  Premium shingle lines (UHDZ, Landmark Pro) plus standing seam metal sections.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-dark text-lg mb-3">Cost Factors Specific to Vermillion</h3>
              <ul className="space-y-2 text-gray">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span><strong>ARC-approved shingle lines</strong> are required — no builder-grade 3-tab in Vermillion.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span><strong>Rear-loaded alley access</strong> can speed staging on some lots, slow it on others.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span><strong>Metal porch accents</strong> add $1,500-$4,500 depending on porch size and finish.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span><strong>Mature TND tree canopy</strong> may require extra debris protection over landscaping.</span>
                </li>
              </ul>
              <p className="text-sm text-gray mt-4">
                See our full <Link href="/lake-norman-roofing-costs-2026" className="text-primary font-medium">Lake Norman roofing costs guide for 2026</Link> for
                line-item pricing across the LKN market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-amber-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready to Replace Your Vermillion Roof?
              </h2>
              <p className="text-white/90">
                We&apos;ll measure your home, walk you through ARC-approved colors, and submit the packet for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-amber-700"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Book Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-amber-700 hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #4: Vermillion HOA Color & Material Requirements for Roofs */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Vermillion HOA Color &amp; Material Requirements for Roofs
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              <strong>Vermillion ARC enforces a tight palette of muted, weathered earth tones</strong> to preserve
              the New Urbanist TND aesthetic Cooper Carry designed in the early 2000s. Bright, saturated, or
              non-traditional colors are not approved.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="w-6 h-6 text-green-600" />
                  <h3 className="font-bold text-dark text-lg">Approved Colors</h3>
                </div>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Weathered Wood / Driftwood</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Barkwood / Aged Cedar</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Slate Gray / Pewter Gray</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Charcoal / Mission Brown</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Muted bronze metal accents</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Weathered copper porch roofs</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="w-6 h-6 text-red-600" />
                  <h3 className="font-bold text-dark text-lg">Not Approved in Vermillion</h3>
                </div>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 flex-shrink-0 mt-0.5">✕</span> Bright reds, blues, greens</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 flex-shrink-0 mt-0.5">✕</span> Terra cotta or saturated orange</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 flex-shrink-0 mt-0.5">✕</span> Builder-grade 3-tab shingles</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 flex-shrink-0 mt-0.5">✕</span> Glossy or polished metal finishes</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 flex-shrink-0 mt-0.5">✕</span> Non-architectural laminates</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 flex-shrink-0 mt-0.5">✕</span> Solar shingles without ARC review</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-amber-50 rounded-xl p-6">
              <h3 className="font-bold text-dark text-lg mb-3">How Best Roofing Now Handles Vermillion ARC</h3>
              <p className="text-gray mb-4">
                We bring the Vermillion ARC submittal packet to your kitchen table. Together we pick a shingle
                line and color, then we assemble the form, swatches, manufacturer spec sheet, and elevation
                photos. We hand-deliver to the Vermillion ARC and follow up until you have written approval —
                typically 2-3 weeks for standard color choices, longer if you select solar shingles or a
                non-standard material.
              </p>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
                Schedule Your Vermillion ARC Walkthrough
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #5: Roof Repair vs Replacement for Vermillion's TND Architecture */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Roof Repair vs Replacement for Vermillion&apos;s TND Architecture
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              <strong>Most Vermillion homes built between 2003 and 2012 are now hitting the 18-25 year mark</strong> on
              their original architectural shingles. That means the repair-vs-replace decision is showing up
              in a lot of Verhoeff Drive mailboxes right now.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Repair Makes Sense When...</h3>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" /> Roof is under 15 years old</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" /> Damage is localized (one slope, one valley)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" /> Matching shingle color is still available</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" /> No widespread granule loss</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" /> Decking is sound underneath</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Replacement Makes Sense When...</h3>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" /> Roof is 18+ years old (most original Vermillion roofs)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" /> Multiple leaks or widespread granule loss</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" /> Hail or wind damage covered by insurance</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" /> Shingle color discontinued by manufacturer</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" /> Selling within 2 years</li>
                </ul>
              </div>
            </div>
            <p className="text-gray text-center mt-8">
              Read more on <Link href="/roof-repair-huntersville-nc" className="text-primary font-medium">roof repair in Huntersville</Link> or <Link href="/roof-replacement-huntersville-nc" className="text-primary font-medium">roof replacement in Huntersville</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #6: Why Best Roofing Now Is Vermillion's Trusted Roofer */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Best Roofing Now Is Vermillion&apos;s Trusted Roofer
            </h2>
            <p className="text-gray text-lg">
              Roofing in a TND is different from roofing in a standard subdivision. Vermillion homes have
              alley-loaded garages, varied facades, and ARC standards that protect every elevation — we built
              our crews and our process around exactly that.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-amber-700" />
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

      {/* Vermillion Architecture Detail Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Roofing Every Vermillion Home Type
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              Cooper Carry &amp; Associates designed Vermillion as a true TND with intentional variety. Each
              home type has its own roof shape, pitch, and detail set.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Craftsman Single-Family</h3>
                <p className="text-gray text-sm">
                  Front porches with exposed rafter tails, wide eaves, and low-pitch porch roofs that often
                  get metal accents. We use ARC-approved earth-tone architectural shingles on the main roof
                  and standing seam metal on the porch — a Vermillion craftsman signature.
                </p>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Farmhouse &amp; Low-Country</h3>
                <p className="text-gray text-sm">
                  Steeper main roofs, deep wraparound porches, and dormers facing Verhoeff Drive. These homes
                  benefit from premium shingle lines for the long sight-lines from the street and from
                  copper-look standing seam on the wraparound porch.
                </p>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Alley Cottages &amp; Townhomes</h3>
                <p className="text-gray text-sm">
                  Smaller footprints, often with rear-loaded garages off the alleys. We coordinate townhome
                  rows so neighboring units finish on the same day, and we route debris through alley access
                  to protect the front-facing TND streetscape.
                </p>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Live-Work Units</h3>
                <p className="text-gray text-sm">
                  Vermillion&apos;s live-work units along the village core have ground-floor commercial space
                  and residential above. We schedule re-roofs for off-business hours where possible and
                  treat shopfront metal accents as architectural features, not afterthoughts.
                </p>
              </div>
            </div>
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
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Vermillion Huntersville Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Hyper-local answers for Vermillion homeowners on Verhoeff Drive and beyond.
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

      {/* H2 #7: Service Areas / Related Links */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Service Areas Near Vermillion
            </h2>
            <p className="text-gray text-lg">
              We serve every Huntersville and Lake Norman neighborhood from our local crews — Vermillion,
              Birkdale, Skybrook, Wynfield, Northstone, and the entire 28078 zip code.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/roofing-huntersville-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <MapPin className="w-6 h-6 text-amber-700 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Huntersville NC</h3>
              <p className="text-gray text-sm mb-3">Full Huntersville roofing services across every neighborhood</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-birkdale-huntersville-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <MapPin className="w-6 h-6 text-amber-700 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Birkdale Huntersville</h3>
              <p className="text-gray text-sm mb-3">Roofing for Birkdale Village and surrounding neighborhoods</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-lake-norman-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <MapPin className="w-6 h-6 text-amber-700 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Lake Norman NC</h3>
              <p className="text-gray text-sm mb-3">Full roofing across the entire Lake Norman region</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roof-repair-huntersville-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Hammer className="w-6 h-6 text-amber-700 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roof Repair Huntersville</h3>
              <p className="text-gray text-sm mb-3">Targeted repairs and leak detection for Vermillion homes</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/metal-roofing-huntersville-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Building2 className="w-6 h-6 text-amber-700 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Metal Roofing Huntersville</h3>
              <p className="text-gray text-sm mb-3">Standing seam metal accents for Vermillion porches &amp; dormers</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/lake-norman-roofing-guide" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <ScrollText className="w-6 h-6 text-amber-700 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Lake Norman Roofing Guide</h3>
              <p className="text-gray text-sm mb-3">The full LKN homeowner roofing reference, 50 FAQs included</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="location" city="Huntersville" slug="roofing-vermillion-huntersville-nc" />

      <CityGeoSection
        city="Huntersville"
        state="NC"
        citySlug="huntersville-nc"
        service="Roofing"
      />

      <LKNNeighborhoodGrid currentCity="Huntersville" currentSlug="roofing-vermillion-huntersville-nc" />
      <LKNPartnershipsBlock city={"Huntersville"} />
      <LKNDataCitations city={"Huntersville"} />
      <CTASection
        title="Get Your Free Vermillion Roof Estimate"
        subtitle="Schedule a no-obligation roof inspection at your Vermillion home on Verhoeff Drive. We'll measure your roof, walk through ARC-approved color options, prepare your submittal packet, and give you a detailed written estimate — usually within 24 hours."
      />
    </>
  );
}
