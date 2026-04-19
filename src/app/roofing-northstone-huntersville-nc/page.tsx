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
  title: 'Roofing Northstone Huntersville NC',
  description:
    'Trusted Northstone roofer in Huntersville NC 28078. Roof replacement, synthetic slate, Class 4 shingles & metal roofing for Northstone Country Club homes. ARC-ready.',
  keywords: [
    'northstone roofing',
    'northstone country club roofing',
    'northstone huntersville roofer',
    'roof replacement northstone',
    'roofing northstone huntersville nc',
    'northstone hoa roofing',
    'synthetic slate roofing northstone',
    'class 4 shingles huntersville 28078',
    'metal roofing northstone country club',
    'roof inspection northstone huntersville',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-northstone-huntersville-nc`,
  },
  openGraph: {
    title: 'Roofing Northstone Huntersville NC | Country Club Specialists',
    description:
      'Premium roofing for Northstone Country Club homes in Huntersville NC. Synthetic slate, Class 4 impact-rated shingles, standing seam accents, and full HOA/ARC approval support for 28078 estates.',
    url: `${SITE_CONFIG.url}/roofing-northstone-huntersville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero11,
        width: 1200,
        height: 630,
        alt: 'Roofing Northstone Huntersville NC - Best Roofing Now Northstone Country Club specialists',
      },
    ],
  },
};

// Roofing services for Northstone homes
const services = [
  {
    title: 'Roof Replacement (Asphalt to Premium)',
    description:
      'Most original Northstone roofs are 25-30 years old and ready for upgrade. We replace aging 3-tab and architectural shingles with Class 4 impact-rated, designer, or premium systems engineered for Lake Norman exposure.',
    benefits: ['25-30yr replacement window', 'Lifetime warranties', 'Insurance discounts'],
    href: '/roof-replacement-huntersville-nc',
  },
  {
    title: 'DaVinci Synthetic Slate',
    description:
      'A growing number of Northstone Country Club homes are choosing DaVinci synthetic slate for the look of natural slate at a fraction of the structural load. ARC-friendly profiles and color blends approved at Northstone.',
    benefits: ['50-year warranty', 'Class 4 impact', 'ARC approved profiles'],
    href: '/synthetic-slate-roofing-lake-norman-nc',
  },
  {
    title: 'Standing Seam Metal Accents',
    description:
      'Standing seam metal on bay windows, dormers, porches, and turret sections is a popular Northstone upgrade that adds curb appeal on the course-facing elevations of Robert Trent Jones II hole frontages.',
    benefits: ['140+ MPH wind rated', '50-year finish', 'HOA-approved colors'],
    href: '/metal-roofing-huntersville-nc',
  },
  {
    title: 'Class 4 Impact-Resistant Shingles',
    description:
      'Class 4 IR shingles from GAF, CertainTeed, and Owens Corning resist Lake Norman hail and wind, often qualifying Northstone homeowners for North Carolina insurance premium discounts of 20-35%.',
    benefits: ['Hail resistant', 'Premium discounts', '50-yr warranties'],
    href: '/roof-replacement-huntersville-nc',
  },
  {
    title: 'Roof Repair & Maintenance',
    description:
      'Targeted repairs for aging Northstone roofs: ridge replacements, flashing rebuilds around chimneys and skylights, valley resealing, and pipe boot upgrades on traditional brick estates.',
    benefits: ['Same-week service', 'Photo reports', 'Warranty work'],
    href: '/roof-repair-huntersville-nc',
  },
  {
    title: 'Storm & Hail Damage Restoration',
    description:
      'Rapid response after Lake Norman storms hit Northstone. We document damage, work directly with your insurer, coordinate with the Northstone HOA, and restore your roof to pre-storm condition.',
    benefits: ['Insurance liaison', '24/7 tarping', 'HOA coordination'],
    href: '/storm-damage-roof-repair-huntersville-nc',
  },
];

// Why choose us for Northstone
const whyChooseUs = [
  {
    icon: Flag,
    title: 'Country Club Community Experience',
    description:
      'We understand Northstone Country Club access protocols, the daily golf cart traffic on the Robert Trent Jones II course, and the privacy expectations of established Northstone residents.',
  },
  {
    icon: Award,
    title: 'GAF Master Elite & DaVinci Trained',
    description:
      'GAF Master Elite (top 2% of US contractors), CertainTeed ShingleMaster, and DaVinci Roofscapes-trained installers — the credentials Northstone homeowners and the ARC require for premium installs.',
  },
  {
    icon: Home,
    title: 'Northstone HOA & ARC Specialists',
    description:
      'Full experience with the Northstone Country Club HOA architectural review process. We prepare ARC submittals, color/profile samples, and material specs that get approved on the first pass.',
  },
  {
    icon: TreePine,
    title: 'Mature Landscape Protection',
    description:
      'Northstone\'s mature hardwoods and landscaped lots demand careful staging. We tarp gardens, protect mature trees, and use magnetic nail sweeps daily to keep your lot pristine.',
  },
  {
    icon: Shield,
    title: '25-Year Workmanship Warranty',
    description:
      'Manufacturer-backed material warranties up to 50 years, paired with our 25-year workmanship guarantee — the long-term protection a Northstone estate deserves.',
  },
  {
    icon: Hammer,
    title: 'Premium Estate Expertise',
    description:
      'Our crews are trained for $625K-$2.2M Northstone homes including 4,000-7,000+ sq ft course-front estates. Brick, transitional, French country, and Craftsman elevations all handled.',
  },
];

// FAQs for Northstone (voice-search friendly)
const faqs = [
  {
    question: 'Who is the best roofer for Northstone in Huntersville NC?',
    answer:
      'Best Roofing Now is the trusted roofer for Northstone Country Club homes in Huntersville NC 28078. We are GAF Master Elite, BBB A+ rated, and have completed dozens of Northstone roof replacements including DaVinci synthetic slate, Class 4 impact-rated shingles, and standing seam metal accents. We handle the Northstone HOA architectural review process directly so your project moves quickly from inspection to install.',
  },
  {
    question: 'How much does a roof replacement cost in Northstone?',
    answer:
      'Roof replacement at Northstone in Huntersville typically ranges from $18,000 to $90,000+ depending on home size and material. Most Northstone homes are 3,200-7,000 sq ft. Architectural asphalt shingles run $18,000-$32,000, Class 4 impact-rated shingles $24,000-$42,000, standing seam metal $38,000-$75,000, and DaVinci synthetic slate $55,000-$110,000. Course-front estates on the Robert Trent Jones II frontage trend higher due to roof complexity.',
  },
  {
    question: 'Does the Northstone HOA require ARC approval for a new roof?',
    answer:
      'Yes. The Northstone Country Club HOA requires Architectural Review Committee (ARC) approval before any exterior roofing work in Northstone. The ARC reviews material type, profile, color blend, and manufacturer. Best Roofing Now prepares the entire ARC submittal package including manufacturer specs, color samples, and installation drawings, and we coordinate directly with the Northstone ARC so Huntersville homeowners do not have to manage paperwork.',
  },
  {
    question: 'Why are so many Northstone homes replacing their roofs right now?',
    answer:
      'Northstone was built primarily between 1995 and 2010, which means a large cohort of original 25-30 year asphalt roofs in Huntersville are reaching the end of their service life right now. Combined with several recent Lake Norman hail events and Class 4 insurance discounts, homeowners across Northstone are upgrading. Many are choosing DaVinci synthetic slate or standing seam metal as a "last roof" investment for their 28078 estate.',
  },
  {
    question: 'What roofing materials are approved at Northstone Country Club?',
    answer:
      'The Northstone Country Club HOA typically approves architectural asphalt shingles in earth-tone color blends, designer shingles like GAF Camelot II and CertainTeed Grand Manor, DaVinci synthetic slate, standing seam metal in approved muted colors (charcoal, bronze, slate gray), and copper accents. Bright reflective metal and bold colors are not approved. We bring physical samples to your Northstone home so you can see them on your elevation before submitting to the ARC.',
  },
  {
    question: 'Do you install synthetic slate and Class 4 shingles in Northstone?',
    answer:
      'Yes — synthetic slate and Class 4 impact-rated shingles are two of our most-installed Northstone roofing systems. DaVinci Slate Bellaforte and Multi-Width profiles are popular on Northstone Country Club estates because they replicate natural slate without the structural reinforcement. Class 4 shingles from GAF, CertainTeed, and Owens Corning qualify Northstone homeowners for North Carolina insurance discounts and are highly recommended given Lake Norman hail exposure.',
  },
  {
    question: 'Which Huntersville schools serve Northstone homes?',
    answer:
      'Northstone in Huntersville is served by Charlotte-Mecklenburg Schools: Blythe Elementary, Francis Bradley Middle, and Hopewell High. The school zone is one of the reasons Northstone home values have stayed strong. Many of our Northstone clients schedule roof replacements during summer break to keep noise and trucks away from school routes.',
  },
  {
    question: 'How long does a roof replacement take at a Northstone estate?',
    answer:
      'Most Northstone roof replacements in Huntersville take 2-5 days for asphalt and Class 4 shingles, 4-7 days for standing seam metal, and 5-10 days for DaVinci synthetic slate. Larger 5,000+ sq ft course-front estates near the Robert Trent Jones II fairways take longer due to multiple roof planes, dormers, and turrets. We provide a written timeline before the project begins.',
  },
  {
    question: 'Do you protect the Northstone Country Club golf course during work?',
    answer:
      'Absolutely. For Northstone homes that back to the Robert Trent Jones II course, we coordinate staging on the street side, install course-side ground tarps and nail sweeps daily, and schedule deliveries outside of peak tee times. We have a zero-debris policy on the fairway and bunker edges and carry full liability insurance covering course property.',
  },
  {
    question: 'Do you offer financing for roof replacements in Northstone?',
    answer:
      'Yes. Best Roofing Now offers PowerPay financing on Northstone roof replacements, with options including 0% same-as-cash plans and long-term fixed-rate financing up to 15 years. Many Huntersville 28078 homeowners use financing to upgrade to DaVinci synthetic slate or standing seam metal without disrupting cash flow.',
  },
];

export default function RoofingNorthstoneHuntersvillePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Huntersville NC', url: `${SITE_CONFIG.url}/roofing-huntersville-nc` },
          { name: 'Roofing Northstone Huntersville NC', url: `${SITE_CONFIG.url}/roofing-northstone-huntersville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-northstone-huntersville-nc`}
        pageName="Roofing Northstone Huntersville NC"
        city="Huntersville"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/roofing-northstone-huntersville-nc`} city={"Huntersville"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Flag className="w-4 h-4 text-emerald-300" />
              <span className="text-sm font-semibold">Northstone Country Club Roofing Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Northstone <br className="hidden md:block" />
              <span className="text-emerald-300">Huntersville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium roof replacement, synthetic slate, and metal roofing for Northstone Country Club estates
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Northstone is one of northwest Huntersville&apos;s most established gated golf communities,
              built around the 18-hole Northstone Country Club course designed by Robert Trent Jones II.
              With ~700 single-family homes mostly built between 1995 and 2010, many original 25-30 year
              roofs in 28078 are now ready for replacement. Best Roofing Now is the trusted Northstone
              roofer for Huntersville homeowners — from Class 4 shingles to DaVinci synthetic slate, with
              full Northstone HOA and ARC approval support.
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
                Request Northstone Inspection
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
                <Flag className="w-5 h-5 text-emerald-300" />
                Northstone HOA Approved
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-300" />
                Class 4 Hail Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-300" />
                GAF Master Elite
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Northstone */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Northstone Country Club Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-4">
                Northstone in Huntersville is a gated, established country club community in the
                northwest corner of 28078, built around an 18-hole Robert Trent Jones II championship
                golf course that opened in the mid-1990s. The community contains approximately 700
                single-family homes — primarily traditional brick, transitional, French country, and
                Craftsman elevations — sitting on mature, landscaped lots that have grown into the
                fairways over three decades.
              </p>
              <p className="text-gray text-lg mb-6">
                Northstone homes need a roofer who understands the architectural standards of an
                established Huntersville country club community, the Northstone HOA architectural
                review process, and the premium materials (DaVinci synthetic slate, Class 4 shingles,
                standing seam metal) that Northstone homeowners are increasingly choosing as the
                original 25-30 year asphalt roofs reach replacement age.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">$625K-$2.2M</p>
                  <p className="text-sm text-gray">Northstone Home Values</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">~700 Homes</p>
                  <p className="text-sm text-gray">In Northstone</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">1995-2010</p>
                  <p className="text-sm text-gray">Build Era</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">28078</p>
                  <p className="text-sm text-gray">Huntersville Zip</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <SEOImage
                src={IMAGES.hero.hero11}
                alt="Roofing Northstone Huntersville NC - Northstone Country Club estate roof replacement"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-700 text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">25-30 yr</p>
                <p className="text-sm text-white/90">Replacement Window</p>
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
              Roofing Services for Northstone Estate Homes
            </h2>
            <p className="text-gray text-lg">
              From original-asphalt replacement to premium DaVinci synthetic slate and standing seam
              metal accents, every Northstone roofing system we install is engineered for Lake Norman
              weather and approved by the Northstone Country Club ARC.
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How Much Does a Roof Cost at Northstone Huntersville?
              </h2>
              <p className="text-gray text-lg">
                Real 2026 pricing for Northstone roof replacement in Huntersville NC 28078, by material.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Architectural Asphalt Shingles</h3>
                <p className="text-2xl font-bold text-emerald-700 mb-2">$18,000 - $32,000</p>
                <p className="text-gray text-sm">
                  Standard upgrade for original Northstone roofs. 30-year warranty, HOA-approved earth
                  tone color blends, qualifies for some Huntersville insurance discounts.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Class 4 Impact-Rated Shingles</h3>
                <p className="text-2xl font-bold text-emerald-700 mb-2">$24,000 - $42,000</p>
                <p className="text-gray text-sm">
                  GAF Armorshield, CertainTeed Landmark IR, Owens Corning Duration Storm. Qualifies
                  Northstone homeowners for 20-35% NC insurance premium discounts.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Standing Seam Metal</h3>
                <p className="text-2xl font-bold text-emerald-700 mb-2">$38,000 - $75,000</p>
                <p className="text-gray text-sm">
                  Full standing seam or accent applications on dormers, bays, and porches. 50-year
                  Kynar finish, 140+ MPH wind rated, ARC-approved muted colors only.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">DaVinci Synthetic Slate</h3>
                <p className="text-2xl font-bold text-emerald-700 mb-2">$55,000 - $110,000</p>
                <p className="text-gray text-sm">
                  Bellaforte and Multi-Width Slate profiles. The fastest-growing premium roof in
                  Northstone — Class 4 impact, 50-year warranty, no structural reinforcement needed.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-emerald-700 text-white rounded-xl p-6 text-center">
              <p className="text-lg mb-3">
                <strong>Free, no-obligation Northstone roof inspection</strong> — receive a written
                estimate within 24 hours, ARC-ready submittal package included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/contact"
                  className="bg-white !text-emerald-700 hover:bg-white/90"
                  icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
                >
                  Schedule Inspection
                </Button>
                <Button
                  href="/lake-norman-roofing-costs-2026"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-700"
                >
                  See Full 2026 Cost Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Best Roofing Now Is Northstone&apos;s Trusted Roofer
            </h2>
            <p className="text-gray text-lg">
              Working on Northstone Country Club homes in Huntersville requires more than roofing
              skill — it demands ARC fluency, mature-landscape protection, and the credentials a
              $625K-$2.2M Lake Norman estate deserves.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
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
                Ready to Upgrade Your Northstone Roof?
              </h2>
              <p className="text-white/90">
                Schedule a private inspection with our Northstone Country Club roofing specialists.
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

      {/* HOA & ARC Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Northstone HOA &amp; ARC Approval for Premium Roofing
            </h2>
            <p className="text-gray text-lg text-center mb-10">
              The Northstone Country Club HOA Architectural Review Committee (ARC) reviews every
              exterior change. Best Roofing Now handles the entire submittal process for Northstone
              Huntersville homeowners — material specs, color samples, and installation drawings.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 rounded-xl p-6">
                <Palette className="w-8 h-8 text-emerald-700 mb-3" />
                <h3 className="font-bold text-dark text-lg mb-3">Approved Color Palettes</h3>
                <p className="text-gray text-sm">
                  Northstone ARC approves earth tones — weathered wood, charcoal, hickory, slate gray,
                  driftwood, and storm cloud blends. Bright or reflective colors are not approved. We
                  bring physical color samples and full-size shingle boards to your Northstone home so
                  you can compare against your brick and trim before submitting to the ARC.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <Building2 className="w-8 h-8 text-emerald-700 mb-3" />
                <h3 className="font-bold text-dark text-lg mb-3">Approved Profiles &amp; Materials</h3>
                <p className="text-gray text-sm">
                  Architectural and designer asphalt (GAF Camelot II, CertainTeed Grand Manor),
                  DaVinci synthetic slate (Bellaforte and Multi-Width), standing seam metal in muted
                  finishes, and copper accents are routinely approved at Northstone Country Club.
                  3-tab shingles, exposed-fastener metal, and bright finishes are typically declined.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <Hammer className="w-8 h-8 text-emerald-700 mb-3" />
                <h3 className="font-bold text-dark text-lg mb-3">ARC Submittal Package</h3>
                <p className="text-gray text-sm">
                  We prepare a complete ARC submittal for every Northstone roofing project including
                  manufacturer specs, color/profile samples, installation diagrams, contractor
                  insurance certificates, and project schedule. First-pass approval rate at Northstone:
                  98%+. Average ARC turnaround at Northstone: 2-3 weeks.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <TreePine className="w-8 h-8 text-emerald-700 mb-3" />
                <h3 className="font-bold text-dark text-lg mb-3">Site Protection Standards</h3>
                <p className="text-gray text-sm">
                  Northstone&apos;s mature landscaping demands extra care. We tarp gardens and beds,
                  protect mature trees with plywood barriers, run magnetic nail sweeps daily, and
                  stage materials on the street side rather than the Robert Trent Jones II course
                  side whenever possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 25-30yr Cohort Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Why Many Northstone Homes Are Replacing Roofs Now
            </h2>
            <p className="text-gray text-lg mb-8">
              Northstone in Huntersville was built primarily between 1995 and 2010, with the heaviest
              build-out in the late 1990s and early 2000s. That means a large cohort of original
              25-30 year architectural asphalt roofs across Northstone are reaching the end of their
              service life right now in 2026. Combined with a string of Lake Norman hail and wind
              events over the past three years, more Northstone Country Club homeowners are
              upgrading roofs in 2026 than in any previous year.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-3xl font-bold text-emerald-700 mb-2">25-30 yr</p>
                <h3 className="font-bold text-dark mb-2">Asphalt Service Life</h3>
                <p className="text-gray text-sm">
                  Most original 1995-2000 Northstone roofs are at or past their warranty period. Granule
                  loss, cracked tabs, and lifted edges are common — even on premium asphalt brands.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-3xl font-bold text-emerald-700 mb-2">Lake Norman Hail</p>
                <h3 className="font-bold text-dark mb-2">Insurance Trigger</h3>
                <p className="text-gray text-sm">
                  Recent hail events across Lake Norman have prompted many Northstone insurance carriers
                  to require Class 4 impact-rated shingles or non-renew older roofs. Class 4 unlocks
                  20-35% premium discounts.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-3xl font-bold text-emerald-700 mb-2">&quot;Last Roof&quot; Investment</p>
                <h3 className="font-bold text-dark mb-2">Premium Upgrades</h3>
                <p className="text-gray text-sm">
                  Many Northstone homeowners — particularly those with kids in the Hopewell High
                  zone planning to stay long-term — are choosing DaVinci synthetic slate or standing
                  seam metal as their final roof. 50-year systems that match the long-term hold
                  horizon of a Huntersville 28078 estate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Materials Detail Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Premium Roofing Materials for Northstone
            </h2>
            <p className="text-gray text-lg">
              Explore the premium roofing systems we install on Northstone Country Club homes.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/synthetic-slate-roofing-lake-norman-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">DaVinci Synthetic Slate</h3>
              <p className="text-gray text-sm mb-3">50-year warranty, Class 4 impact, ARC approved at Northstone</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/metal-roofing-huntersville-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Standing Seam Metal</h3>
              <p className="text-gray text-sm mb-3">140+ MPH wind rated, 50-year Kynar finish</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roof-replacement-huntersville-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Class 4 Shingles</h3>
              <p className="text-gray text-sm mb-3">Hail resistant, 20-35% NC insurance discounts</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/roof-replacement" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Full Replacement</h3>
              <p className="text-gray text-sm mb-3">Complete tear-off, decking inspection, premium underlayment</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
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
                Northstone Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Voice-search answers about premium roofing for Northstone Country Club homes in
                Huntersville NC 28078.
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
              Service Areas Around Northstone &amp; Huntersville
            </h2>
            <p className="text-gray text-lg">
              We serve Northstone and every neighboring Lake Norman community in Huntersville NC 28078.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/roofing-huntersville-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <MapPin className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Huntersville NC</h3>
              <p className="text-gray text-sm mb-3">Full roofing services across all Huntersville 28078 neighborhoods</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-birkdale-huntersville-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Flag className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Birkdale Huntersville</h3>
              <p className="text-gray text-sm mb-3">Birkdale Village &amp; Arnold Palmer golf community</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-skybrook-huntersville-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Flag className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Skybrook Huntersville</h3>
              <p className="text-gray text-sm mb-3">Skybrook golf community in northwest Huntersville</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-vermillion-huntersville-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Home className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Vermillion Huntersville</h3>
              <p className="text-gray text-sm mb-3">Traditional Neighborhood Development in Huntersville 28078</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-lake-norman-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <MapPin className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Lake Norman NC</h3>
              <p className="text-gray text-sm mb-3">Full roofing services across the entire Lake Norman region</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/lake-norman-roofing-guide" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <HelpCircle className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Lake Norman Roofing Guide</h3>
              <p className="text-gray text-sm mb-3">Complete 20K-word guide to roofing on Lake Norman</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="location" city="Huntersville" slug="roofing-northstone-huntersville-nc" />

      <CityGeoSection
        city="Huntersville"
        state="NC"
        citySlug="huntersville-nc"
        service="Roofing"
      />

      <LKNNeighborhoodGrid currentCity="Huntersville" currentSlug="roofing-northstone-huntersville-nc" />
      <LKNPartnershipsBlock city={"Huntersville"} />
      <LKNDataCitations city={"Huntersville"} />
      <CTASection
        title="Upgrade Your Northstone Roof in 2026"
        subtitle="Request a free Northstone roof inspection from Best Roofing Now. We'll deliver a written estimate within 24 hours, an ARC-ready submittal package, and clear material recommendations for your Northstone Country Club home in Huntersville NC 28078."
      />
    </>
  );
}
