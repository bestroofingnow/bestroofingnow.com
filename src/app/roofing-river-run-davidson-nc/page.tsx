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
  Gem,
  Home,
  MapPin,
  Trees,
  Lock,
  Flag,
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
  title: 'Roofing River Run Davidson NC',
  description:
    'Expert roofing for River Run Country Club in Davidson NC. Synthetic slate, standing-seam metal, and ARC-approved replacements for 25-30 yr aging roofs.',
  keywords: [
    'river run roofing',
    'river run davidson roofer',
    'roof replacement river run',
    'roof repair river run',
    'river run country club roofing',
    'roofing river run davidson nc',
    'davidson nc roofing contractor',
    'gated community roofing davidson',
    'synthetic slate roofing river run',
    'standing seam metal roofing davidson nc',
    'river run hoa roofing',
    'arc approved roofing davidson',
    'luxury roofing davidson nc',
    'davidson 28036 roofer',
    'lake norman roofing river run',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-river-run-davidson-nc`,
  },
  openGraph: {
    title: 'Roofing River Run Davidson NC | Country Club Specialists',
    description:
      'Premium roofing for River Run Country Club in Davidson NC. Synthetic slate, copper, and standing-seam metal for the LaFoy-designed gated golf community along Davidson-Concord Rd.',
    url: `${SITE_CONFIG.url}/roofing-river-run-davidson-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roofing River Run Davidson NC - Best Roofing Now country club specialists',
      },
    ],
  },
};

// Premium roofing services for River Run estate homes
const services = [
  {
    title: 'Roof Replacement',
    description:
      'Full tear-off and premium re-roof for River Run homes hitting the 25-30 year replacement window. Pre-approved DaVinci synthetic slate, designer architectural shingles, and copper or metal accents.',
    benefits: ['ARC compliant', '50-yr warranties', 'Course-front protection'],
    href: '/roof-replacement-davidson-nc',
  },
  {
    title: 'Synthetic Slate (DaVinci)',
    description:
      'Class-4 impact-rated DaVinci synthetic slate is one of the most popular ARC-approved upgrades on Whitlock, Lochmere Cv, and the streets framing the River Run golf course.',
    benefits: ['Class 4 hail rated', 'HOA approved', '50-year lifespan'],
    href: '/synthetic-slate-roofing-lake-norman-nc',
  },
  {
    title: 'Standing-Seam Metal Accents',
    description:
      'Pre-finished standing-seam metal for porches, dormers, bay windows, and turret roofs on River Run estates. A favorite ARC accent paired with architectural shingle field roofs.',
    benefits: ['Wind 140+ MPH', 'Kynar 500 finish', 'Course-view ready'],
    href: '/metal-roofing-davidson-nc',
  },
  {
    title: 'Roof Repair',
    description:
      'Same-week leak repair, ridge cap replacement, pipe boot fixes, and storm patches for River Run homes. We coordinate with the River Run HOA office for ARC notifications when required.',
    benefits: ['Same-week service', 'Photo-documented', 'HOA notified'],
    href: '/roof-repair-davidson-nc',
  },
  {
    title: 'Storm & Hail Damage',
    description:
      'Free hail and wind inspections for River Run homes after summer storms blow across Lake Norman. We document damage, file claims with your carrier, and meet adjusters on-site in 28036.',
    benefits: ['Insurance liaison', 'Free inspection', '24/7 emergency'],
    href: '/storm-damage-roof-repair-davidson-nc',
  },
  {
    title: 'Luxury Designer Shingles',
    description:
      'GAF Grand Sequoia, CertainTeed Grand Manor, and Owens Corning Berkshire designer shingles. Heavy weight and shadow lines complement River Run brick, French Country, and low-country architecture.',
    benefits: ['Lifetime warranty', 'ARC palette match', 'Premium curb appeal'],
    href: '/luxury-roofing-lake-norman-nc',
  },
];

// Why River Run owners choose Best Roofing Now
const whyChooseUs = [
  {
    icon: Lock,
    title: 'Gated Country Club Experience',
    description:
      'We pre-register every crew member with the River Run guard house, keep work hours within HOA windows, and respect the privacy expectations of the gated community along Davidson-Concord Rd.',
  },
  {
    icon: Award,
    title: 'ARC Submittal Specialists',
    description:
      'We assemble River Run ARC packets the way the architectural review committee wants them: material samples, manufacturer specs, color chips, and elevation photos -- ready for sign-off before our trucks arrive.',
  },
  {
    icon: Home,
    title: 'Estate Home Protection',
    description:
      'Mature landscaping, brick walkways, irrigation heads, and stamped concrete -- our crews protect every River Run estate detail with magnetic sweep, plywood pads, and tarped staging.',
  },
  {
    icon: Flag,
    title: 'Course-Front Awareness',
    description:
      'Many River Run lots back the John LaFoy-designed championship course. We schedule deliveries around tee times, contain debris on fairway-facing roof slopes, and protect cart paths.',
  },
  {
    icon: Shield,
    title: 'Manufacturer-Backed Warranties',
    description:
      'GAF Master Elite, CertainTeed ShingleMaster, and DaVinci Masterpiece Contractor status unlock 50-year non-prorated warranties on River Run replacements -- transferable to future buyers.',
  },
  {
    icon: Gem,
    title: 'Premium Material Expertise',
    description:
      'Synthetic slate, copper bay-window roofs, hand-soldered standing-seam panels, and heavy designer shingles -- the materials River Run estates require, installed to manufacturer specs every time.',
  },
];

// Hyper-local FAQs for River Run Country Club
const faqs = [
  {
    question: 'Who is the best roofer for River Run Country Club homes in Davidson NC?',
    answer:
      'Best Roofing Now is the most trusted roofer for River Run Country Club in Davidson NC. We hold GAF Master Elite, CertainTeed ShingleMaster, and DaVinci Masterpiece Contractor certifications, carry an A+ BBB rating, and have replaced and repaired roofs throughout River Run -- including homes along the John LaFoy-designed golf course and the streets off Davidson-Concord Rd. We know the River Run ARC process, the pre-approved material palette, and the gate access protocols. Call (704) 605-6047 to schedule a free River Run inspection.',
  },
  {
    question: 'How much does a roof replacement cost at River Run?',
    answer:
      'A typical River Run roof replacement runs $22,000-$45,000 for premium architectural shingles on a 3,500-5,500 sq ft home, $40,000-$85,000 for DaVinci synthetic slate, $55,000-$110,000 for standing-seam metal, and $60,000-$140,000 for natural slate or cedar shake. Course-front estates over 6,000 sq ft can run $80,000-$200,000+ depending on material, pitch, dormers, and copper accents. Every estimate is line-item itemized so River Run homeowners can see exactly what their investment buys.',
  },
  {
    question: 'Does the River Run HOA approve synthetic slate roofs?',
    answer:
      'Yes. The River Run ARC has approved DaVinci synthetic slate (Bellaforte and Multi-Width Slate profiles) on numerous homes in the community over the last several years. Synthetic slate offers a 50-year warranty, Class 4 impact rating, and the visual character of natural slate at a much lower roof load -- which is why it has become one of the most-approved River Run upgrades. We submit the exact DaVinci color blend and profile to the ARC for written approval before installation.',
  },
  {
    question: 'Are standing-seam metal accents allowed at River Run?',
    answer:
      'Yes -- the River Run ARC routinely approves standing-seam metal as accent roofing on porches, bay windows, dormers, turrets, and entry overhangs. Pre-finished Kynar 500 panels in dark bronze, copper penny, charcoal, and matte black are common selections that pair with the community\'s traditional brick, French Country, and low-country architecture. Full standing-seam field roofs are reviewed case-by-case; accent applications are typically straightforward.',
  },
  {
    question: 'How long do roofs last on River Run estate homes?',
    answer:
      'Most original River Run roofs were installed in the mid-to-late 1990s and early 2000s using 25-30 year architectural shingles. Davidson summer heat, UV exposure, and Lake Norman storm cycles mean those roofs are now at -- or past -- the end of their service life. We are seeing widespread granule loss, cracked ridge caps, exposed nail heads, and pipe boot failures across the community. This is why so many River Run owners are upgrading right now to 50-year synthetic slate, designer shingles, or standing-seam metal.',
  },
  {
    question: 'What is the ARC submittal process for a River Run roof project?',
    answer:
      'For a River Run ARC roof submittal you typically need: a completed architectural change request form, the manufacturer name and product line, color chip and material sample, scope description (full replacement vs accent), contractor information and insurance certificates, and a target start date. Best Roofing Now prepares the entire packet for River Run homeowners and submits it directly to the HOA office on your behalf. Approval generally takes 2-4 weeks, and we will not break ground until we have written ARC sign-off.',
  },
  {
    question: 'Can I install solar shingles at River Run?',
    answer:
      'Solar shingles (such as GAF Energy Timberline Solar) are a newer category and are reviewed individually by the River Run ARC. They are most likely to be approved when installed on rear-facing roof slopes that are not visible from the fairway or from the street, and when paired with a matching architectural shingle field that conforms to the River Run color palette. We can prepare an ARC submittal that includes elevation drawings, panel layout, and visibility analysis from the John LaFoy course.',
  },
  {
    question: 'Will my insurance cover hail damage at River Run?',
    answer:
      'In most cases, yes. Davidson and the broader 28036 zip code regularly take hail and wind damage from summer storms moving across Lake Norman. If your River Run roof has hail bruising, wind-lifted shingles, or storm-related leaks, we will perform a free inspection, document damage with photos and measurements, and meet your carrier\'s adjuster on-site. Our team has worked claims with State Farm, Allstate, USAA, Travelers, Erie, Liberty Mutual, and Nationwide for River Run homeowners.',
  },
  {
    question: 'How quickly can roof repairs be done at River Run?',
    answer:
      'For active leaks, missing shingles, or storm damage at River Run we can typically have a tarp on the roof within 24-48 hours and a permanent repair completed within the same week. For non-emergency repairs (pipe boots, flashing, ridge cap, valley work) we usually schedule within 5-10 business days. River Run is one of our priority service areas because we have crews based throughout Davidson, Cornelius, and Huntersville every day.',
  },
  {
    question: 'Does Best Roofing Now serve River Run Country Club homes?',
    answer:
      'Yes -- River Run Country Club is one of our core service neighborhoods in Davidson NC. We have completed roof replacements, repairs, and storm restoration for homes throughout the community, from the entrance off Davidson-Concord Rd to the back streets bordering the John LaFoy golf course. We also serve the surrounding Davidson 28036 area including Davidson College, downtown Davidson, River Lake, St. Albans, and the Davidson Elementary, Bailey Middle, and William Amos Hough High school zones.',
  },
];

export default function RoofingRiverRunDavidsonPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Davidson NC', url: `${SITE_CONFIG.url}/roofing-davidson-nc` },
          { name: 'Roofing River Run Davidson NC', url: `${SITE_CONFIG.url}/roofing-river-run-davidson-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-river-run-davidson-nc`}
        pageName="Roofing River Run Davidson NC"
        city="Davidson"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/roofing-river-run-davidson-nc`} city={"Davidson"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Flag className="w-4 h-4 text-emerald-300" />
              <span className="text-sm font-semibold">River Run Country Club Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing River Run <br className="hidden md:block" />
              <span className="text-emerald-300">Davidson NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium roofing for the gated country club community along Davidson-Concord Rd
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              River Run is Davidson&apos;s premier gated golf community -- about 700 single-family homes wrapped
              around the John LaFoy-designed championship course. With most original roofs now 25-30 years old,
              River Run owners are upgrading to ARC-approved DaVinci synthetic slate, standing-seam metal accents,
              and heavy designer shingles. Best Roofing Now handles every step -- ARC submittal, gate coordination,
              and white-glove installation.
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
                Request River Run Consultation
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
                <Lock className="w-5 h-5 text-emerald-300" />
                Gated Community Access
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-300" />
                ARC Submittal Pros
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-300" />
                GAF Master Elite
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About River Run */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why River Run Country Club Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-4">
                River Run Country Club is one of the signature neighborhoods of Davidson NC -- a gated, golf-course
                community on the east side of I-77 along Davidson-Concord Rd in the 28036 zip code. About 700
                single-family homes ring an 18-hole championship course designed by golf architect John LaFoy and
                opened in the mid-1990s. Architecture across River Run leans established traditional brick,
                transitional, French Country, and low-country -- all framed by mature hardwoods, manicured lawns,
                and the rolling fairways of the LaFoy course.
              </p>
              <p className="text-gray text-lg mb-6">
                Best Roofing Now is the trusted River Run roofing partner because we understand what these homes
                need: ARC-compliant materials, gate-house coordination, mature-landscape protection, and the
                craftsmanship that estates valued $725K to $2.5M+ deserve. From a quick repair on a course-front
                home to a full DaVinci synthetic slate replacement on a Davidson-Concord Rd estate, we treat every
                River Run roof like it is the only one we are working on.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">~700</p>
                  <p className="text-sm text-gray">Single-Family Homes</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">$725K-$2.5M+</p>
                  <p className="text-sm text-gray">Home Values</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">18 Holes</p>
                  <p className="text-sm text-gray">John LaFoy Course</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">28036</p>
                  <p className="text-sm text-gray">Davidson Zip</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.hero.hero1}
                alt="Roofing River Run Country Club Davidson NC estate home with mature landscaping"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-700 text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">25-30 yr</p>
                <p className="text-sm text-white/90">Original Roof Age</p>
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

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Services for River Run Estate Homes
            </h2>
            <p className="text-gray text-lg">
              We specialize in ARC-approved premium roofing systems engineered for River Run&apos;s estate
              architecture, course-front exposure, and the Davidson NC climate.
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

      {/* Cost Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How Much Does a Roof Cost in River Run Davidson?
              </h2>
              <p className="text-gray text-lg">
                Real 2026 pricing ranges for River Run estate homes in the 28036 zip code.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-emerald-100 rounded-xl p-6 bg-emerald-50/40">
                <h3 className="font-bold text-dark text-lg mb-2">Premium Architectural Shingles</h3>
                <p className="text-2xl font-bold text-emerald-700 mb-2">$22,000 - $45,000</p>
                <p className="text-gray text-sm">
                  GAF Timberline HDZ, CertainTeed Landmark Pro, or Owens Corning Duration on a 3,500-5,500 sq ft
                  River Run home. Includes tear-off, deck inspection, synthetic underlayment, ice-and-water shield,
                  and 50-year non-prorated warranty.
                </p>
              </div>
              <div className="border border-emerald-100 rounded-xl p-6 bg-emerald-50/40">
                <h3 className="font-bold text-dark text-lg mb-2">DaVinci Synthetic Slate</h3>
                <p className="text-2xl font-bold text-emerald-700 mb-2">$40,000 - $85,000</p>
                <p className="text-gray text-sm">
                  Class 4 impact-rated DaVinci Bellaforte or Multi-Width Slate -- the most popular ARC-approved
                  upgrade in River Run. Lighter than natural slate, 50-year warranty, and the visual depth that
                  course-front estates demand.
                </p>
              </div>
              <div className="border border-emerald-100 rounded-xl p-6 bg-emerald-50/40">
                <h3 className="font-bold text-dark text-lg mb-2">Designer Heavy Shingles</h3>
                <p className="text-2xl font-bold text-emerald-700 mb-2">$32,000 - $60,000</p>
                <p className="text-gray text-sm">
                  CertainTeed Grand Manor, GAF Grand Sequoia, or Owens Corning Berkshire on a typical River Run
                  estate. Heavy weight, deep shadow lines, and the visual upgrade many ARC color palettes prefer
                  over standard architectural shingles.
                </p>
              </div>
              <div className="border border-emerald-100 rounded-xl p-6 bg-emerald-50/40">
                <h3 className="font-bold text-dark text-lg mb-2">Standing-Seam Metal (Full Roof)</h3>
                <p className="text-2xl font-bold text-emerald-700 mb-2">$55,000 - $110,000</p>
                <p className="text-gray text-sm">
                  Pre-finished Kynar 500 standing-seam metal -- 24 gauge, mechanically seamed, 140+ MPH wind
                  rated. Reviewed case-by-case by the River Run ARC for full-roof applications; commonly approved
                  as accent roofing.
                </p>
              </div>
              <div className="border border-emerald-100 rounded-xl p-6 bg-emerald-50/40">
                <h3 className="font-bold text-dark text-lg mb-2">Natural Slate or Cedar Shake</h3>
                <p className="text-2xl font-bold text-emerald-700 mb-2">$60,000 - $140,000+</p>
                <p className="text-gray text-sm">
                  Heirloom-grade natural slate or fire-treated hand-split cedar shake on larger River Run estates.
                  100+ year material life on slate; 30-50 years on premium cedar. Requires reinforced framing
                  consultation and full ARC review.
                </p>
              </div>
              <div className="border border-emerald-100 rounded-xl p-6 bg-emerald-50/40">
                <h3 className="font-bold text-dark text-lg mb-2">Course-Front Estate (6,000+ sq ft)</h3>
                <p className="text-2xl font-bold text-emerald-700 mb-2">$80,000 - $200,000+</p>
                <p className="text-gray text-sm">
                  Larger River Run course-front and Davidson-Concord Rd estates with multiple roof planes, copper
                  bay-window roofs, dormers, and turrets. Final pricing depends on material selection and
                  architectural complexity.
                </p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-emerald-50 rounded-xl text-center">
              <p className="text-gray text-sm mb-3">
                Every River Run estimate is line-item itemized and ARC-ready. See our full Lake Norman pricing guide:
              </p>
              <Link
                href="/lake-norman-roofing-costs-2026"
                className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800"
              >
                Lake Norman Roofing Costs 2026 <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Best Roofing Now Is River Run&apos;s Trusted Roofer
            </h2>
            <p className="text-gray text-lg">
              Working in a gated country club community along the John LaFoy course requires more than roofing
              skill -- it demands ARC fluency, gate-house coordination, and respect for every detail of a River
              Run estate.
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

      {/* Mid-Page CTA */}
      <section className="bg-emerald-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready to Replace Your River Run Roof?
              </h2>
              <p className="text-white/90">
                Schedule a private River Run consultation -- ARC packet included with every estimate.
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
                Schedule Consultation
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

      {/* HOA / ARC Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              River Run HOA &amp; ARC Approval for Premium Roofing
            </h2>
            <p className="text-gray text-lg text-center mb-10 max-w-3xl mx-auto">
              The River Run Architectural Review Committee maintains a strict pre-approved palette of roofing
              materials and colors. We handle the ARC submittal, sample drop-off, and approval timeline so you
              never have to chase paperwork.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Pre-Approved Materials</h3>
                <p className="text-gray text-sm">
                  River Run ARC routinely approves DaVinci synthetic slate (Bellaforte, Multi-Width Slate),
                  designer architectural shingles (CertainTeed Grand Manor, GAF Grand Sequoia, Owens Corning
                  Berkshire), and standing-seam metal in approved Kynar 500 colors as accent roofing on porches,
                  dormers, bay windows, and turrets.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Color Palette Compliance</h3>
                <p className="text-gray text-sm">
                  River Run color requirements lean to dark, earth-toned blends -- weathered wood, charcoal,
                  driftwood, hickory, and slate variants. We bring physical color chips and full shingle samples
                  on every River Run consultation so you can see the material in your home&apos;s actual light.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">ARC Packet Preparation</h3>
                <p className="text-gray text-sm">
                  We assemble the full River Run ARC submittal: architectural change request form, manufacturer
                  product data sheets, color chip, contractor license and insurance certificates, scope letter,
                  and target start date. Submitted directly to the HOA office; we track it to written approval.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Gate Access &amp; Work Hours</h3>
                <p className="text-gray text-sm">
                  We pre-register every crew vehicle with the River Run guard house, schedule deliveries within
                  HOA-approved work windows, and use specialized debris containment to protect the John LaFoy
                  course, cart paths, and neighbors&apos; landscaping along Davidson-Concord Rd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Replacing Now Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Why So Many River Run Homes Are Replacing Their Roofs Now
            </h2>
            <p className="text-gray text-lg mb-8 text-center max-w-3xl mx-auto">
              River Run opened in the mid-1990s. The community built out rapidly through the late 1990s and early
              2000s using 25-30 year architectural shingles. That entire cohort of original roofs is now hitting
              the end of its service life at almost the same time -- which is why our calendar is full of River
              Run projects.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="font-bold text-dark mb-2">25-30 Year Cohort</h3>
                <p className="text-gray text-sm">
                  Most River Run roofs were installed 1995-2003. Original 25-year shingles are now 23-31 years
                  old -- past their warranted life and visibly degraded.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                  <Trees className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="font-bold text-dark mb-2">Davidson Climate</h3>
                <p className="text-gray text-sm">
                  Davidson NC summers, UV exposure, hardwood debris, and hail-bearing storms moving across Lake
                  Norman accelerate granule loss and shingle aging on the 28036 zip code.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                  <Gem className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="font-bold text-dark mb-2">Premium Upgrade Window</h3>
                <p className="text-gray text-sm">
                  River Run owners are using this replacement cycle to upgrade to 50-year DaVinci synthetic slate,
                  designer heavy shingles, and standing-seam metal accents -- a generational improvement.
                </p>
              </div>
            </div>
            <div className="mt-10 bg-white rounded-xl p-6 border border-emerald-100">
              <h3 className="font-bold text-dark text-lg mb-3">Common Failure Signs We&apos;re Seeing in River Run</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Heavy granule loss in gutters and downspouts</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Cracked, curled, or lifted ridge caps</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Exposed nail heads on field shingles</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Failed pipe boots and rusted vents</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Soft spots and sagging at valleys</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Active leaks at chimney and skylight flashing</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Algae streaking and biological growth</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Hail bruising from Lake Norman summer storms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Davidson NC Service Areas
            </h2>
            <p className="text-gray text-lg text-center mb-10 max-w-3xl mx-auto">
              River Run sits in the 28036 zip code on the east side of I-77 along Davidson-Concord Rd, served by
              Davidson Elementary, Bailey Middle, and William Amos Hough High. We also serve every surrounding
              Davidson neighborhood and the broader Lake Norman area, with crews based in Davidson, Cornelius,
              and Huntersville every day.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/roofing-davidson-nc" className="group bg-emerald-50 rounded-xl p-4 hover:shadow-md transition-all">
                <MapPin className="w-5 h-5 text-emerald-700 mb-2" />
                <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Roofing Davidson NC</h3>
                <p className="text-gray text-sm">Full Davidson NC roofing services</p>
              </Link>
              <Link href="/roof-replacement-davidson-nc" className="group bg-emerald-50 rounded-xl p-4 hover:shadow-md transition-all">
                <MapPin className="w-5 h-5 text-emerald-700 mb-2" />
                <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Roof Replacement Davidson</h3>
                <p className="text-gray text-sm">Full tear-off and re-roof in 28036</p>
              </Link>
              <Link href="/roof-repair-davidson-nc" className="group bg-emerald-50 rounded-xl p-4 hover:shadow-md transition-all">
                <MapPin className="w-5 h-5 text-emerald-700 mb-2" />
                <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Roof Repair Davidson</h3>
                <p className="text-gray text-sm">Same-week repair across Davidson</p>
              </Link>
              <Link href="/metal-roofing-davidson-nc" className="group bg-emerald-50 rounded-xl p-4 hover:shadow-md transition-all">
                <MapPin className="w-5 h-5 text-emerald-700 mb-2" />
                <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Metal Roofing Davidson</h3>
                <p className="text-gray text-sm">Standing-seam metal accents &amp; full roofs</p>
              </Link>
              <Link href="/storm-damage-roof-repair-davidson-nc" className="group bg-emerald-50 rounded-xl p-4 hover:shadow-md transition-all">
                <MapPin className="w-5 h-5 text-emerald-700 mb-2" />
                <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Storm Damage Davidson</h3>
                <p className="text-gray text-sm">Hail &amp; wind damage in 28036</p>
              </Link>
              <Link href="/synthetic-slate-roofing-lake-norman-nc" className="group bg-emerald-50 rounded-xl p-4 hover:shadow-md transition-all">
                <MapPin className="w-5 h-5 text-emerald-700 mb-2" />
                <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Synthetic Slate Lake Norman</h3>
                <p className="text-gray text-sm">DaVinci synthetic slate specialists</p>
              </Link>
              <Link href="/slate-roofing-lake-norman-nc" className="group bg-emerald-50 rounded-xl p-4 hover:shadow-md transition-all">
                <MapPin className="w-5 h-5 text-emerald-700 mb-2" />
                <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Slate Roofing Lake Norman</h3>
                <p className="text-gray text-sm">Natural slate for estate homes</p>
              </Link>
              <Link href="/luxury-roofing-lake-norman-nc" className="group bg-emerald-50 rounded-xl p-4 hover:shadow-md transition-all">
                <MapPin className="w-5 h-5 text-emerald-700 mb-2" />
                <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Luxury Roofing Lake Norman</h3>
                <p className="text-gray text-sm">Premium materials for estate homes</p>
              </Link>
              <Link href="/roofing-lake-norman-nc" className="group bg-emerald-50 rounded-xl p-4 hover:shadow-md transition-all">
                <MapPin className="w-5 h-5 text-emerald-700 mb-2" />
                <h3 className="font-bold text-dark group-hover:text-primary transition-colors">Roofing Lake Norman NC</h3>
                <p className="text-gray text-sm">Full Lake Norman regional service</p>
              </Link>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/lake-norman-roofing-guide"
                className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800"
              >
                Read our complete Lake Norman Roofing Guide <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                River Run Davidson Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Hyper-local answers for River Run Country Club homeowners in Davidson NC 28036.
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

      {/* Related Links */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Explore More River Run &amp; Davidson Resources
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lake-norman-roofing-guide" className="group bg-emerald-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
              <Trees className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Lake Norman Roofing Guide</h3>
              <p className="text-gray text-sm mb-3">The complete 20K-word guide to roofing the Lake Norman area</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Read Guide <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/lake-norman-roofing-costs-2026" className="group bg-emerald-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
              <Gem className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Lake Norman Costs 2026</h3>
              <p className="text-gray text-sm mb-3">Real 2026 pricing for every roofing material in Davidson and Lake Norman</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                See Pricing <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/roof-replacement" className="group bg-emerald-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
              <Home className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roof Replacement Service</h3>
              <p className="text-gray text-sm mb-3">Our full roof replacement process from inspection to final walk-through</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="location" city="Davidson" slug="roofing-river-run-davidson-nc" />

      <CityGeoSection
        city="Davidson"
        state="NC"
        citySlug="davidson-nc"
        service="Roofing"
      />

      <LKNNeighborhoodGrid currentCity="Davidson" currentSlug="roofing-river-run-davidson-nc" />
      <LKNPartnershipsBlock city={"Davidson"} />
      <LKNDataCitations city={"Davidson"} />

      <CTASection
        title="Replace Your River Run Roof With Confidence"
        subtitle="Schedule a private consultation with Best Roofing Now -- River Run Country Club's trusted Davidson NC roofer. We handle the ARC submittal, gate-house coordination, and white-glove installation so your only decision is which premium material best fits your estate."
      />
    </>
  );
}
