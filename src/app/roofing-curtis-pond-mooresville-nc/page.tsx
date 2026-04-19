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
  Waves,
  MapPin,
  Anchor,
  TreePine,
  Hammer,
  Cloud,
  DollarSign,
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
  title: 'Roofing Curtis Pond Mooresville NC',
  description:
    'Expert roofing for Curtis Pond in Mooresville NC. Class 4 impact-resistant shingles, synthetic slate, and HOA-approved replacements. BBB A+ rated. Free quotes.',
  keywords: [
    'curtis pond roofing',
    'curtis pond mooresville roofer',
    'roof replacement curtis pond',
    'curtis pond mooresville nc roofing',
    'class 4 shingles curtis pond',
    'impact resistant roof mooresville',
    'synthetic slate curtis pond',
    'curtis pond hoa roof approval',
    'roofing contractor curtis pond mooresville',
    'roof repair curtis pond nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-curtis-pond-mooresville-nc`,
  },
  openGraph: {
    title: 'Roofing Curtis Pond Mooresville NC | HOA-Approved Specialists',
    description:
      'Premium roofing for Curtis Pond, a high-end Mooresville NC community off Williamson Rd and Brawley School Rd. Class 4 impact-resistant shingles, synthetic slate, and full HOA/ARC coordination for homes valued $625K-$1.1M.',
    url: `${SITE_CONFIG.url}/roofing-curtis-pond-mooresville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roofing Curtis Pond Mooresville NC - Best Roofing Now Lake Norman specialists',
      },
    ],
  },
};

// Roofing services for Curtis Pond Mooresville
const services = [
  {
    title: 'Architectural Shingle Replacement',
    description:
      'GAF Timberline HDZ and CertainTeed Landmark architectural shingles in Curtis Pond HOA-approved color palettes. Lifetime limited warranty with Mooresville-trained crews.',
    benefits: ['Lifetime warranty', 'HOA color match', '50+ year option'],
    href: '/roof-replacement-mooresville-nc',
  },
  {
    title: 'Class 4 Impact-Resistant Shingles',
    description:
      'UL 2218 Class 4 impact-rated shingles like GAF Armor Shield II for Curtis Pond homes. Qualifies most Iredell County homeowners for an annual insurance premium discount.',
    benefits: ['Hail rated', 'Insurance discount', '130 MPH wind'],
    href: '/roof-replacement-mooresville-nc',
  },
  {
    title: 'Synthetic Slate & Designer Roofing',
    description:
      'DaVinci, Brava, and CertainTeed synthetic slate for Curtis Pond estates that want the slate look without the slate weight or cost. ARC-friendly profiles available.',
    benefits: ['50-year warranty', 'Class 4 rated', 'Lightweight'],
    href: '/synthetic-slate-roofing-lake-norman-nc',
  },
  {
    title: 'Storm & Hail Damage Repair',
    description:
      'Rapid response across Curtis Pond, Williamson Rd, and Brawley School Rd after Lake Norman storms. We document damage, file with your insurance, and restore the roof fast.',
    benefits: ['24/7 emergency', 'Insurance liaison', 'Same-day tarp'],
    href: '/storm-damage-roof-repair-mooresville-nc',
  },
  {
    title: 'Standing Seam Metal Roofing',
    description:
      'Premium standing seam metal accents and full roofs for transitional Curtis Pond homes. Wind-rated for Lake Norman gust patterns and finished in HOA-compatible colors.',
    benefits: ['140 MPH wind', '50-year paint', 'Energy efficient'],
    href: '/metal-roofing-mooresville-nc',
  },
  {
    title: 'Roof Repair & Maintenance',
    description:
      'Targeted leak repairs, flashing replacement, ridge vent service, and annual inspections for Curtis Pond homes built between 2005 and 2020 nearing their first re-roof window.',
    benefits: ['Free inspection', 'Workmanship guarantee', 'Photo report'],
    href: '/roof-repair-mooresville-nc',
  },
];

// Why Curtis Pond homeowners choose us
const whyChooseUs = [
  {
    icon: Home,
    title: 'Curtis Pond HOA & ARC Experts',
    description:
      'We prepare complete Curtis Pond ARC submission packages with material spec sheets, color samples, and shingle profiles so your roof project gets approved on the first review.',
  },
  {
    icon: Shield,
    title: 'Class 4 Impact-Rated Specialists',
    description:
      'Certified installers for UL 2218 Class 4 shingles and synthetic slate -- the materials that protect Curtis Pond homes and unlock insurance premium credits in Iredell County.',
  },
  {
    icon: Award,
    title: 'GAF Master Elite & CertainTeed Certified',
    description:
      'Top 2% national contractor status with manufacturer-backed warranties up to 50 years. Trusted by Mooresville Graded School District families for over a decade.',
  },
  {
    icon: TreePine,
    title: 'High-Pitch Roofline Crews',
    description:
      'Many Curtis Pond homes feature 8/12 to 12/12 pitches. Our crews carry the harness, scaffold, and walkboard equipment required to safely re-roof steep Curtis Pond rooflines.',
  },
  {
    icon: Hammer,
    title: 'Local Mooresville Roofer',
    description:
      'Best Roofing Now is based in the Lake Norman region. Our trucks are minutes from Williamson Rd, Brawley School Rd, and the 28115 / 28117 zip codes that surround Curtis Pond.',
  },
  {
    icon: Cloud,
    title: 'Storm & Hail Insurance Advocates',
    description:
      'When hail or wind hits Curtis Pond, we meet adjusters on-site, photo-document every slope, and translate the supplement language so your claim is paid in full.',
  },
];

// Hyper-local FAQs for Curtis Pond
const faqs = [
  {
    question: 'Who is the best roofer at Curtis Pond Mooresville NC?',
    answer:
      'Best Roofing Now is a top-rated, GAF Master Elite and BBB A+ accredited roofing contractor serving Curtis Pond in Mooresville, NC. We specialize in Class 4 impact-resistant shingles, synthetic slate, and full Curtis Pond HOA / ARC coordination. With hundreds of Lake Norman roof replacements, free on-site inspections, and same-day emergency tarping for the Williamson Rd and Brawley School Rd corridor, we are the go-to roofer for Curtis Pond homeowners in the 28115 and 28117 zip codes.',
  },
  {
    question: 'How much does a roof replacement cost at Curtis Pond?',
    answer:
      'Most Curtis Pond roof replacements run between $14,000 and $32,000 for architectural shingles on a 2,800-4,500 square foot home. Class 4 impact-resistant shingles add roughly 15-25% over standard architectural shingles, while synthetic slate ranges from $38,000 to $85,000+ depending on roof size, pitch, and tear-off complexity. Final pricing depends on the roof pitch (many Curtis Pond homes are 8/12 to 12/12), number of stories, decking condition, and HOA-approved material selection. We provide detailed written quotes after a free Curtis Pond inspection.',
  },
  {
    question: 'Does Curtis Pond HOA require ARC approval for a new roof?',
    answer:
      'Yes. Curtis Pond, like most Mooresville master-planned communities, requires Architectural Review Committee (ARC) approval before any exterior change including a roof replacement. The ARC reviews the shingle manufacturer, line, color, and ridge profile to keep the neighborhood cohesive. Best Roofing Now handles the full Curtis Pond ARC submission for our customers -- we provide signed manufacturer spec sheets, physical color samples, and the contractor information sheet so your project is approved before tear-off begins.',
  },
  {
    question: 'What are Class 4 impact-resistant shingles?',
    answer:
      'Class 4 impact-resistant shingles are asphalt shingles that pass the UL 2218 standard, which simulates hail strikes by dropping a two-inch steel ball onto the shingle. They use a stronger SBS-modified asphalt and reinforced fiberglass mat to resist cracking from Lake Norman hail and wind-driven debris. Popular Curtis Pond options include GAF Armor Shield II, CertainTeed NorthGate, and Owens Corning Duration Storm. Most NC home insurance carriers offer a 5-30% premium discount for installing a Class 4 roof in Iredell County.',
  },
  {
    question: 'Are synthetic slate roofs allowed at Curtis Pond?',
    answer:
      'In most cases, yes -- synthetic slate from manufacturers like DaVinci Roofscapes, Brava, and CertainTeed Symphony is allowed at Curtis Pond after ARC approval. Synthetic slate gives Curtis Pond estates the high-end slate or shake aesthetic without the structural weight of natural slate, which most 2005-2020 framed homes cannot support without reinforcement. We submit the synthetic slate sample, color, and ridge profile to the Curtis Pond ARC on your behalf and have a strong approval track record.',
  },
  {
    question: 'How long do roofs last at Curtis Pond Mooresville?',
    answer:
      'Standard 3-tab shingles last 18-22 years in the Lake Norman climate. Architectural shingles installed on Curtis Pond homes typically last 22-28 years, Class 4 impact-resistant shingles last 25-30 years, synthetic slate carries 50-year warranties, and standing seam metal lasts 50+ years. Because Curtis Pond was largely built between 2005 and 2020, many original-builder roofs are now in their first replacement window, especially homes hit by 2017-2024 hail events.',
  },
  {
    question: 'Can I qualify for an insurance discount with a Class 4 roof at Curtis Pond?',
    answer:
      'Yes. Most major North Carolina homeowners insurance carriers -- including State Farm, Allstate, Nationwide, Erie, Travelers, and NC Farm Bureau -- offer a Class 4 impact-resistant roof discount of 5-30% on the wind/hail portion of your premium. After we install your Class 4 roof at Curtis Pond, we provide the manufacturer certificate and photo documentation you need to submit to your insurance agent for the credit.',
  },
  {
    question: 'What is the cost difference between regular shingles and Class 4 at Curtis Pond?',
    answer:
      'On a typical 30-square Curtis Pond roof, upgrading from a standard architectural shingle to a Class 4 impact-resistant shingle adds roughly $1,800-$4,500. The annual insurance premium savings (often $300-$900/year in Iredell County) and the avoided deductible on the next hail claim usually pays the upgrade back in 4-6 years -- which is why most Curtis Pond homeowners we quote choose Class 4.',
  },
  {
    question: 'Will my insurance cover hail damage at Curtis Pond?',
    answer:
      'Yes -- if your Curtis Pond roof was damaged by a covered wind or hail event, your North Carolina homeowners policy almost always covers a roof replacement (minus your wind/hail deductible). Best Roofing Now performs a free hail damage inspection on Curtis Pond homes after every Lake Norman storm, documents granule loss and impact bruising with date-stamped photos, and meets your insurance adjuster on the roof to make sure nothing is missed.',
  },
  {
    question: 'How quickly can roof repairs be done at Curtis Pond?',
    answer:
      'Curtis Pond is in our daily Mooresville and Lake Norman service area, so we can typically have a technician on-site within 24-48 hours for non-emergency repairs and same-day for active leaks. Emergency tarping is available 24/7 after storms. Most small Curtis Pond repairs (flashing, pipe boots, missing shingles, ridge vent) are completed in a single visit lasting 1-3 hours.',
  },
];

export default function RoofingCurtisPondMooresvillePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Mooresville NC', url: `${SITE_CONFIG.url}/roofing-mooresville-nc` },
          { name: 'Roofing Curtis Pond Mooresville NC', url: `${SITE_CONFIG.url}/roofing-curtis-pond-mooresville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-curtis-pond-mooresville-nc`}
        pageName="Roofing Curtis Pond Mooresville NC"
        city="Mooresville"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/roofing-curtis-pond-mooresville-nc`} city={"Mooresville"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold">Curtis Pond Mooresville NC Roofing Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Curtis Pond <br className="hidden md:block" />
              <span className="text-blue-300">Mooresville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              HOA-approved roofing for Curtis Pond&apos;s high-end Lake Norman homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Curtis Pond is one of Mooresville&apos;s premier residential communities, tucked off Williamson Rd
              and Brawley School Rd in Iredell County. Best Roofing Now installs architectural shingles, Class 4
              impact-resistant shingles, and synthetic slate on Curtis Pond homes -- with full Curtis Pond HOA
              and ARC coordination, free inspections, and same-day storm response.
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
                Free Curtis Pond Roof Quote
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
                <Shield className="w-5 h-5 text-blue-300" />
                Class 4 Hail Rated
              </span>
              <span className="flex items-center gap-2">
                <Home className="w-5 h-5 text-blue-300" />
                HOA &amp; ARC Approved
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-300" />
                GAF Master Elite
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Curtis Pond Mooresville */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Curtis Pond Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-4">
                Curtis Pond is a 400+ home master-planned community in Mooresville, NC, built primarily between
                2005 and 2020 along the Williamson Rd / Brawley School Rd corridor. Curtis Pond homes feature a
                mix of traditional and transitional new-construction architecture -- brick and Hardie board
                exteriors, hip and gable rooflines, and steep 8/12 to 12/12 pitches that demand experienced
                Lake Norman crews.
              </p>
              <p className="text-gray text-lg mb-6">
                With Curtis Pond home values typically ranging from $625K to $1.1M, the roof is one of the most
                visible and valuable components of the home. Best Roofing Now is the local Mooresville roofer
                Curtis Pond families trust for HOA-approved architectural shingles, Class 4 impact-resistant
                shingles, synthetic slate, and storm-damage insurance work in the 28115 and 28117 zip codes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">$625K-$1.1M</p>
                  <p className="text-sm text-gray">Home Values</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">400+</p>
                  <p className="text-sm text-gray">Single-Family Homes</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">2005-2020</p>
                  <p className="text-sm text-gray">Build Years</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">28115 / 28117</p>
                  <p className="text-sm text-gray">Mooresville Zip Codes</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <SEOImage
                src={IMAGES.hero.hero1}
                alt="Roofing Curtis Pond Mooresville NC - architectural shingle replacement on a Lake Norman home"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">Class 4</p>
                <p className="text-sm text-white/90">Impact-Resistant</p>
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
              <p className="text-sm text-gray">Serving Mooresville &amp; Lake Norman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Services for Curtis Pond Mooresville Homes
            </h2>
            <p className="text-gray text-lg">
              From architectural shingles to Class 4 impact-resistant systems and synthetic slate, our crews
              install every major roofing material on Curtis Pond homes -- with full HOA approval support.
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
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
                <DollarSign className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Curtis Pond Pricing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How Much Does a Roof Cost at Curtis Pond?
              </h2>
              <p className="text-gray text-lg">
                Honest, written pricing for Curtis Pond roof replacements in Mooresville, NC. Final cost depends
                on roof size, pitch, decking, and the material your Curtis Pond ARC approves.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Architectural Shingles</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$14,000 - $24,000</p>
                <p className="text-gray text-sm">
                  GAF Timberline HDZ or CertainTeed Landmark on a typical 2,800-3,800 sq ft Curtis Pond home.
                  Lifetime limited warranty, HOA-approved color palettes.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Class 4 Impact-Resistant</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$17,000 - $30,000</p>
                <p className="text-gray text-sm">
                  GAF Armor Shield II, CertainTeed NorthGate, or Owens Corning Duration Storm. Qualifies most
                  Curtis Pond homes for an Iredell County insurance discount.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Synthetic Slate (DaVinci, Brava)</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$38,000 - $85,000+</p>
                <p className="text-gray text-sm">
                  Premium synthetic slate for Curtis Pond estates. Class 4 impact-rated, lightweight, and
                  available in slate, shake, and tile profiles -- all ARC-friendly.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Standing Seam Metal</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$28,000 - $60,000</p>
                <p className="text-gray text-sm">
                  Premium 24-gauge standing seam metal accents or full roofs for transitional Curtis Pond homes.
                  Wind-rated to 140 MPH with 50-year paint warranties.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/roofing-cost-mooresville-nc"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                See full Mooresville roofing cost guide
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOA Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Curtis Pond HOA &amp; ARC Approval for Roofing Projects
            </h2>
            <p className="text-gray text-lg mb-8 text-center max-w-3xl mx-auto">
              Like every master-planned community in Mooresville, Curtis Pond requires Architectural Review
              Committee (ARC) approval before exterior changes. Best Roofing Now handles the entire submission
              for Curtis Pond homeowners, so you do not have to track down samples or spec sheets.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-dark text-lg mb-3">What the Curtis Pond ARC Reviews</h3>
                <ul className="text-gray text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Shingle manufacturer, line, and color
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Ridge cap profile and ventilation visibility
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Drip edge and flashing color
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Synthetic slate or metal accent submissions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Licensed and insured contractor verification
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-dark text-lg mb-3">How We Handle Your Submission</h3>
                <ul className="text-gray text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Provide signed manufacturer spec sheets
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Deliver physical color samples to your home
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Submit the Curtis Pond ARC modification form
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Coordinate work hours with HOA quiet times
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Daily site cleanup with magnetic nail sweep
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Best Roofing Now Is Curtis Pond&apos;s Trusted Roofer
            </h2>
            <p className="text-gray text-lg">
              Working on Curtis Pond homes requires more than tools and a ladder -- it demands HOA fluency,
              Class 4 expertise, and the local presence to respond fast when Lake Norman storms hit.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
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

      {/* Mid-Page CTA */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for Your Curtis Pond Roof Quote?
              </h2>
              <p className="text-white/90">
                Free on-site inspection, written estimate, and Curtis Pond HOA / ARC submission included.
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
                Schedule Inspection
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

      {/* Premium Materials Detail Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Premium Roofing Options for Curtis Pond Estates
            </h2>
            <p className="text-gray text-lg">
              Higher-end Curtis Pond homes often upgrade to Class 4 impact-resistant or synthetic slate -- the
              two profiles that protect Lake Norman roofs from hail while elevating curb appeal.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Link
              href="/synthetic-slate-roofing-lake-norman-nc"
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Synthetic Slate</h3>
              <p className="text-gray text-sm mb-3">
                DaVinci and Brava synthetic slate for Curtis Pond estates -- 50-year warranty, Class 4 rated.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/roof-replacement-mooresville-nc"
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Class 4 Shingles</h3>
              <p className="text-gray text-sm mb-3">
                UL 2218 Class 4 impact-resistant shingles. Insurance discount eligible in Iredell County.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/metal-roofing-mooresville-nc"
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Standing Seam Metal</h3>
              <p className="text-gray text-sm mb-3">
                24-gauge standing seam for Curtis Pond accents or full roofs. 140 MPH wind rated.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/services/roof-replacement"
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Architectural Shingles</h3>
              <p className="text-gray text-sm mb-3">
                GAF Timberline HDZ and CertainTeed Landmark in Curtis Pond HOA-approved colors.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Curtis Pond Roofing Expertise Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              What Makes Curtis Pond Roofing Unique
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Steep Pitches &amp; Custom Rooflines</h3>
                <p className="text-gray text-sm">
                  Many Curtis Pond homes feature 8/12 to 12/12 hip-and-gable rooflines with multiple dormers and
                  return cornices. Our crews carry the harness, walkboard, and roof-jack systems required to
                  safely install premium shingles on these steep Curtis Pond profiles.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Brick &amp; Hardie Board Architecture</h3>
                <p className="text-gray text-sm">
                  Curtis Pond homes are typically brick on the lower elevations with Hardie board or fiber-cement
                  siding above. We coordinate shingle color with the brick palette and Hardie board so the new
                  roof complements the existing exterior -- a key Curtis Pond ARC criteria.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">First Replacement Window (2005-2020 Builds)</h3>
                <p className="text-gray text-sm">
                  Because Curtis Pond was built primarily between 2005 and 2020, many original-builder roofs are
                  now in the 18-22 year first-replacement window. We replace the deck nails, upgrade to synthetic
                  underlayment, and add ice/water shield in valleys -- the details builders skipped.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Lake Norman Storm &amp; Hail Exposure</h3>
                <p className="text-gray text-sm">
                  Curtis Pond sits in the storm corridor that runs across Lake Norman through Mooresville. Hail
                  events in 2017, 2020, and 2023 produced widespread Curtis Pond claims -- which is why we
                  recommend Class 4 impact-resistant shingles on every Curtis Pond replacement we quote.
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
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Curtis Pond Mooresville Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Hyper-local answers about Curtis Pond roofing, Class 4 shingles, HOA / ARC approvals, and
                insurance claims in Mooresville, NC.
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

      {/* Service Areas / Related Links */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Service Areas Around Curtis Pond
            </h2>
            <p className="text-gray text-lg">
              Best Roofing Now serves Curtis Pond and every Mooresville and Lake Norman neighborhood within the
              28115, 28117, and surrounding Iredell County zip codes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/roofing-mooresville-nc"
              className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <MapPin className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Roofing Mooresville NC
              </h3>
              <p className="text-gray text-sm mb-3">
                Complete Mooresville roofing services across the Mooresville Graded School District.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/roofing-lake-norman-nc"
              className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <Waves className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Roofing Lake Norman NC
              </h3>
              <p className="text-gray text-sm mb-3">
                Lake-wide roofing for every community along Lake Norman, NC.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/lake-norman-roofing-guide"
              className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <Anchor className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Lake Norman Roofing Guide
              </h3>
              <p className="text-gray text-sm mb-3">
                The complete Lake Norman homeowner&apos;s roofing guide -- 20K words, 50 FAQs.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/roof-repair-mooresville-nc"
              className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <Hammer className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Roof Repair Mooresville NC
              </h3>
              <p className="text-gray text-sm mb-3">
                Same-day Mooresville roof repair for Curtis Pond and surrounding neighborhoods.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/storm-damage-roof-repair-mooresville-nc"
              className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <Cloud className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Storm Damage Mooresville
              </h3>
              <p className="text-gray text-sm mb-3">
                Hail and wind damage response for Curtis Pond and the Lake Norman storm corridor.
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/lake-norman-roofing-costs-2026"
              className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <DollarSign className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Lake Norman Roofing Costs 2026
              </h3>
              <p className="text-gray text-sm mb-3">
                Up-to-date Lake Norman and Mooresville roof pricing for every material.
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
        city="Mooresville"
        slug="roofing-curtis-pond-mooresville-nc"
      />

      <CityGeoSection
        city="Mooresville"
        state="NC"
        citySlug="mooresville-nc"
        service="Roofing"
      />

      <LKNNeighborhoodGrid currentCity="Mooresville" currentSlug="roofing-curtis-pond-mooresville-nc" />
      <LKNPartnershipsBlock city={'Mooresville'} />
      <LKNDataCitations city={'Mooresville'} />
      <CTASection
        title="Get Your Free Curtis Pond Roof Quote"
        subtitle="Schedule a free on-site inspection at your Curtis Pond home in Mooresville, NC. We'll help you choose between architectural shingles, Class 4 impact-resistant shingles, and synthetic slate -- and we'll handle the Curtis Pond HOA and ARC submission for you."
      />
    </>
  );
}
