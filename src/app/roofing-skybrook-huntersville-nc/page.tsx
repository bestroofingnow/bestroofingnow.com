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
  Flag,
  Hammer,
  ClipboardCheck,
  TreePine,
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
  title: 'Roofing Skybrook Huntersville NC',
  description:
    'Trusted roofing for Skybrook in Huntersville NC 28078. Roof replacement, repair, and metal roofing for the Skybrook Golf community. BBB A+, free estimates.',
  keywords: [
    'skybrook roofing',
    'skybrook huntersville roofer',
    'roof replacement skybrook',
    'roof repair skybrook',
    'roofing skybrook huntersville nc',
    'skybrook golf community roofing',
    'roofing 28078',
    'huntersville nc roofer skybrook',
    'metal roofing skybrook',
    'storm damage roof repair skybrook huntersville',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-skybrook-huntersville-nc`,
  },
  openGraph: {
    title: 'Roofing Skybrook Huntersville NC | Skybrook Golf Community',
    description:
      'Local roofing for Skybrook homes in Huntersville NC 28078. Asphalt, designer shingles, and standing-seam metal for the Skybrook Golf Club community off Skybrook Pkwy and Hwy 16.',
    url: `${SITE_CONFIG.url}/roofing-skybrook-huntersville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roofing Skybrook Huntersville NC - Best Roofing Now serving the Skybrook Golf community',
      },
    ],
  },
};

// Roofing services tailored to Skybrook
const services = [
  {
    title: 'Skybrook Roof Replacement',
    description:
      'Full tear-off and re-roof for Skybrook homes built between 1998 and 2015 that are now reaching the end of their original 20-25 year shingle lifespan. Architectural and designer-grade shingles available.',
    benefits: ['Lifetime shingle options', 'HOA-approved colors', 'Synthetic underlayment'],
    href: '/roof-replacement-huntersville-nc',
  },
  {
    title: 'Skybrook Roof Repair',
    description:
      'Targeted leak repair, missing shingle replacement, flashing repair, and pipe-boot replacement for Skybrook homes off Skybrook Pkwy. Most repairs completed in a single visit.',
    benefits: ['Same-week service', 'Photo-documented work', 'Workmanship warranty'],
    href: '/roof-repair-huntersville-nc',
  },
  {
    title: 'Standing-Seam Metal Roofing',
    description:
      'Architectural standing-seam metal roofs and metal accents for Skybrook estate homes. Popular for porches, bay windows, and front-elevation accents on transitional and craftsman builds.',
    benefits: ['50+ year lifespan', 'Energy efficient', 'Class 4 impact rated'],
    href: '/metal-roofing-huntersville-nc',
  },
  {
    title: 'Storm & Hail Damage Repair',
    description:
      'Rapid response after Lake Norman thunderstorms, hail events, and high-wind days off Hwy 16. We document storm damage, work directly with your insurance carrier, and restore your Skybrook roof.',
    benefits: ['Insurance liaison', '24/7 emergency tarp', 'Free storm inspection'],
    href: '/storm-damage-roof-repair-huntersville-nc',
  },
  {
    title: 'Roof Inspections & Certifications',
    description:
      'Detailed roof inspections for Skybrook homes prior to listing, after a storm, or for end-of-life evaluation. Photo report, life-expectancy estimate, and HOA-ready documentation.',
    benefits: ['Drone photo report', 'Pre-listing certification', 'Free for residents'],
    href: '/roof-inspection-huntersville-nc',
  },
  {
    title: 'Gutters & Gutter Guards',
    description:
      'Seamless 6-inch aluminum gutters and leaf-guard systems sized for the wooded lots and mature pines common throughout Skybrook. Color-matched to HOA-approved trim palettes.',
    benefits: ['Seamless aluminum', 'HOA color match', 'Leaf-guard options'],
    href: '/gutter-installation-huntersville-nc',
  },
];

// Why Skybrook homeowners choose Best Roofing Now
const whyChooseUs = [
  {
    icon: Flag,
    title: 'Skybrook Golf Community Specialists',
    description:
      'We work in Skybrook every month and understand the layout off Skybrook Pkwy, the cul-de-sac streets along the Skybrook Golf Club fairways, and HOA expectations.',
  },
  {
    icon: Award,
    title: 'GAF Master Elite & CertainTeed Certified',
    description:
      'Top 2% of contractors nationally. Our manufacturer credentials let us offer extended system warranties on Skybrook re-roofs.',
  },
  {
    icon: ClipboardCheck,
    title: 'Skybrook HOA & ARC Experience',
    description:
      'We prepare complete Skybrook ARC submission packages with shingle samples, color chips, and product data sheets so your replacement is approved on the first review.',
  },
  {
    icon: TreePine,
    title: 'Wooded-Lot & Pine-Debris Expertise',
    description:
      'Skybrook lots back up to mature hardwoods and pines. We use lot-protection mats, magnetic nail sweeps, and full debris containment to leave landscaping untouched.',
  },
  {
    icon: Shield,
    title: 'Lake Norman Wind & Storm Rated Systems',
    description:
      'All systems we install on Skybrook homes are rated for the wind, hail, and pop-up thunderstorms common across the Lake Norman corridor.',
  },
  {
    icon: Hammer,
    title: 'Local Crews Based Near Lake Norman',
    description:
      'Our crews live and work around Huntersville and Lake Norman. We can usually be on a Skybrook roof within 24 hours for emergency calls.',
  },
];

// Hyper-local FAQs for Skybrook
const faqs = [
  {
    question: 'Do you work on roofs in the Skybrook community in Huntersville NC?',
    answer:
      'Yes, Best Roofing Now is an active roofing contractor in the Skybrook community in Huntersville NC 28078. We replace, repair, and inspect roofs throughout Skybrook, including homes along Skybrook Pkwy, the cul-de-sacs bordering the Skybrook Golf Club, and the estate sections off Hwy 16. We typically have a project manager in Skybrook every week.',
  },
  {
    question: 'How much does a roof replacement cost in Skybrook Huntersville?',
    answer:
      'Most Skybrook roof replacements in Huntersville fall between $14,000 and $32,000 for architectural asphalt shingles, depending on home size (2,800-5,200 sq ft is typical in Skybrook), pitch, and complexity. Designer shingles such as GAF Grand Sequoia run $18,000-$38,000 on Skybrook homes, and standing-seam metal accents on porches and bay windows typically add $4,000-$9,000. Estate homes in Skybrook can reach $40,000-$70,000+ for full designer or metal systems.',
  },
  {
    question: 'Why are so many Skybrook homes replacing their roofs right now?',
    answer:
      'Skybrook was largely built between 1998 and 2015, with the original phases closest to the Skybrook Golf Club going up between 1998 and 2005. The original 25-year architectural shingles installed on those homes are now at the end of their service life. Hundreds of Skybrook homes are entering the 20-25 year replacement window, which is why you are seeing roofing crews throughout the neighborhood off Skybrook Pkwy and Hwy 16.',
  },
  {
    question: 'Does the Skybrook HOA require approval before I replace my roof?',
    answer:
      'Yes. The Skybrook HOA Architectural Review Committee (ARC) requires homeowners to submit a roofing application before any roof replacement in Skybrook. The ARC reviews shingle manufacturer, product line, and color against the pre-approved Skybrook palette. We prepare the entire submission package for our Skybrook customers, including shingle samples, color chips, and the GAF or CertainTeed product data sheet. Most Skybrook ARC approvals come back within 1-2 weeks.',
  },
  {
    question: 'What roofing materials are approved by the Skybrook HOA?',
    answer:
      'The Skybrook HOA generally approves dimensional architectural asphalt shingles in earth-tone palettes (weathered wood, driftwood, charcoal, pewter gray, and barkwood are all common Skybrook approvals), as well as designer shingles such as GAF Grand Canyon and Grand Sequoia. Standing-seam metal is allowed as an accent on porches, dormers, and bay windows in pre-approved colors. We confirm current Skybrook color requirements with the ARC before every project.',
  },
  {
    question: 'How long does a roof replacement take on a Skybrook home?',
    answer:
      'A typical asphalt-shingle roof replacement on a Skybrook home in Huntersville takes 1-2 days. Larger Skybrook estate homes (4,500-5,500 sq ft) along the back nine of the Skybrook Golf Club can take 2-3 days. Designer-shingle and metal-accent installations typically take 3-5 days. We tarp the roof every night and complete a full magnetic nail sweep so the lot is safe for kids, pets, and golfers walking from the cart paths.',
  },
  {
    question: 'Do you handle insurance claims for storm damage in Skybrook?',
    answer:
      'Yes. Lake Norman thunderstorms, hail events, and high-wind days regularly damage Skybrook roofs. Best Roofing Now meets your insurance adjuster on-site at your Skybrook home, documents wind and hail damage with drone photos, and works directly with your carrier so you only pay your deductible. We have handled hundreds of Huntersville and Lake Norman insurance claims.',
  },
  {
    question: 'How quickly can you get to a roof leak in Skybrook?',
    answer:
      'For active leaks in Skybrook, we offer same-day or next-day emergency tarping in the 28078 zip code. Our crews are based around Huntersville and Lake Norman, so we can usually reach Skybrook off Skybrook Pkwy within 60-90 minutes during business hours. Permanent repair work is typically scheduled within 3-7 days.',
  },
  {
    question: 'What is the best roofing material for a Skybrook golf-course home?',
    answer:
      'For Skybrook homes that back up to the Skybrook Golf Club fairways, we usually recommend a Class 4 impact-rated architectural shingle (such as GAF Timberline AS II or CertainTeed NorthGate ClimateFlex) for hail resistance and an insurance discount, paired with standing-seam metal accents on porches and bay windows. This combination matches the transitional and craftsman architecture in Skybrook and holds up to errant golf balls and heavy thunderstorms.',
  },
  {
    question: 'Do you serve all Huntersville neighborhoods around Skybrook?',
    answer:
      'Yes. In addition to Skybrook, we serve every Huntersville neighborhood including Birkdale, Vermillion, Wynfield, Northstone, Gilead Ridge, and the rest of the 28078 zip code. We are also active throughout the Lake Norman region in Cornelius, Davidson, Mooresville, and Denver NC. See our full Huntersville service area below.',
  },
];

export default function RoofingSkybrookHuntersvillePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Huntersville NC', url: `${SITE_CONFIG.url}/roofing-huntersville-nc` },
          { name: 'Roofing Skybrook Huntersville NC', url: `${SITE_CONFIG.url}/roofing-skybrook-huntersville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-skybrook-huntersville-nc`}
        pageName="Roofing Skybrook Huntersville NC"
        city="Huntersville"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/roofing-skybrook-huntersville-nc`} city={"Huntersville"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Flag className="w-4 h-4 text-emerald-300" />
              <span className="text-sm font-semibold">Skybrook Golf Community Roofing Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Skybrook <br className="hidden md:block" />
              <span className="text-emerald-300">Huntersville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              The trusted roofer for Skybrook homes in 28078 Huntersville
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Skybrook is a master-planned golf community in northwest Huntersville NC, anchored by the
              Skybrook Golf Club -- a Don Charles-designed 18-hole course off Skybrook Pkwy and Hwy 16.
              With nearly 1,200 homes built between 1998 and 2015, hundreds of Skybrook roofs are now hitting
              the 20-25 year replacement window. Best Roofing Now is the local roofing contractor Skybrook
              homeowners trust for replacement, repair, HOA-approved color selection, and storm response.
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
                Free Skybrook Roof Estimate
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
                <MapPin className="w-5 h-5 text-emerald-300" />
                Skybrook Pkwy & Hwy 16
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-300" />
                Class 4 Impact Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-300" />
                GAF Master Elite
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Skybrook */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Skybrook Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-4">
                Skybrook is one of Huntersville&apos;s signature golf communities, tucked off Skybrook Pkwy
                and Hwy 16 in the 28078 zip code. The neighborhood wraps around the Skybrook Golf Club -- a
                semi-private 18-hole course designed by Don Charles that opened in 1998 -- and includes single-family
                detached homes, townhomes, and custom estate residences valued from roughly $525K to $1.4M+.
              </p>
              <p className="text-gray text-lg mb-6">
                Best Roofing Now has worked on Skybrook roofs for years. We understand the Skybrook HOA
                Architectural Review Committee (ARC) process, the pre-approved Skybrook shingle palette, the wooded
                lot conditions, and the unique challenges of working alongside an active Skybrook Golf Club.
                Whether your Skybrook home zones to Blythe Elementary, Francis Bradley Middle, or Hopewell High,
                we make roof replacement and repair simple and stress-free.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">~1,200</p>
                  <p className="text-sm text-gray">Skybrook Homes</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">1998-2015</p>
                  <p className="text-sm text-gray">Build Era</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">28078</p>
                  <p className="text-sm text-gray">Huntersville Zip</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">18-Hole</p>
                  <p className="text-sm text-gray">Skybrook Golf Club</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.hero.hero1}
                alt="Roofing Skybrook Huntersville NC home near Skybrook Golf Club"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-700 text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">20-25 yr</p>
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
              Roofing Services for Skybrook Golf Community Homes
            </h2>
            <p className="text-gray text-lg">
              From single-family homes off Skybrook Pkwy to estate homes along the Skybrook Golf Club fairways,
              we deliver every roofing service Skybrook homeowners need.
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              How Much Does a Roof Cost in Skybrook Huntersville?
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              Skybrook home sizes range from roughly 2,400 sq ft townhomes near the Skybrook front entrance to
              5,500+ sq ft estate homes overlooking the Skybrook Golf Club. Here is a current 2026 cost range
              for roof replacements in Skybrook Huntersville NC.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-emerald-50 rounded-xl p-6 text-center">
                <h3 className="font-bold text-dark text-lg mb-2">Architectural Shingles</h3>
                <p className="text-3xl font-bold text-emerald-700 mb-1">$14K - $32K</p>
                <p className="text-sm text-gray">GAF Timberline HDZ, CertainTeed Landmark - the most common choice for Skybrook homes built in the original 1998-2005 phases.</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6 text-center">
                <h3 className="font-bold text-dark text-lg mb-2">Designer Shingles</h3>
                <p className="text-3xl font-bold text-emerald-700 mb-1">$18K - $38K</p>
                <p className="text-sm text-gray">GAF Grand Sequoia and Grand Canyon - upgrade option popular on Skybrook estate homes off Hwy 16.</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6 text-center">
                <h3 className="font-bold text-dark text-lg mb-2">Metal Roof / Accents</h3>
                <p className="text-3xl font-bold text-emerald-700 mb-1">$24K - $70K+</p>
                <p className="text-sm text-gray">Standing-seam metal, full or accent. Complements transitional and craftsman Skybrook architecture.</p>
              </div>
            </div>
            <p className="text-gray text-sm text-center">
              Detailed Skybrook estimate prepared on-site within 24 hours.{' '}
              <Link href="/lake-norman-roofing-costs-2026" className="text-emerald-700 font-semibold hover:underline">
                See full 2026 Lake Norman roofing cost guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Best Roofing Now Is Skybrook&apos;s Trusted Roofer
            </h2>
            <p className="text-gray text-lg">
              Local crews, manufacturer-certified installers, and deep Skybrook HOA experience -- all in
              one Huntersville roofing contractor.
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
                Ready for a Free Skybrook Roof Estimate?
              </h2>
              <p className="text-white/90">
                A Best Roofing Now project manager will inspect your Skybrook home and prepare an itemized
                estimate within 24 hours.
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

      {/* HOA / ARC Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Skybrook HOA &amp; ARC Approval for Roofing
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              The Skybrook HOA Architectural Review Committee (ARC) reviews every roof replacement in
              the Skybrook community. Best Roofing Now handles the entire submission for you.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Pre-Approved Skybrook Shingle Palette</h3>
                <p className="text-gray text-sm mb-3">
                  The Skybrook HOA maintains a pre-approved color palette for asphalt shingles on
                  Skybrook homes. Common approvals include weathered wood, driftwood, charcoal, pewter
                  gray, barkwood, and burnt sienna in GAF Timberline HDZ and CertainTeed Landmark.
                </p>
                <p className="text-gray text-sm">
                  We bring physical Skybrook color samples to your home so you can compare them to your
                  brick, siding, and trim before submitting to the ARC.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Complete Skybrook ARC Submission</h3>
                <p className="text-gray text-sm mb-3">
                  We prepare every Skybrook ARC application for you: shingle manufacturer, product line,
                  exact color name, manufacturer data sheet, and a contractor-of-record letter from
                  Best Roofing Now.
                </p>
                <p className="text-gray text-sm">
                  Our typical Skybrook ARC turnaround is 1-2 weeks. We do not start roofing work in
                  Skybrook until written ARC approval is in hand.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Metal Accent &amp; Standing-Seam Approval</h3>
                <p className="text-gray text-sm">
                  Standing-seam metal on porches, dormers, and bay windows is allowed in Skybrook in
                  pre-approved finishes. We submit metal panel profile, gauge, finish color (matte
                  black, weathered copper, charcoal, and bronze are common Skybrook approvals), and
                  installation details for the ARC.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Construction Hours &amp; Lot Protection</h3>
                <p className="text-gray text-sm">
                  We follow Skybrook construction hours, park crew vehicles where the HOA requires,
                  use lot-protection mats on landscaping, run a magnetic nail sweep at the end of every
                  day, and never block the Skybrook Golf Club cart paths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Cohort / 20-25 Year Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Why Many Skybrook Homes Are Replacing Roofs Now
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              Skybrook is in the middle of a major roof replacement cohort. Here is why your neighbors
              off Skybrook Pkwy are calling Best Roofing Now.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-lg mb-3">Original Phase (1998-2005)</h3>
                <p className="text-gray text-sm">
                  The first Skybrook homes were built around the Skybrook Golf Club opening in 1998.
                  Those original 25-year architectural shingles are now 20-27 years old -- well into the
                  end-of-life window. Granule loss, curling, and bald spots are common signs we are
                  finding on inspections in the original Skybrook phases.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-lg mb-3">Mid-Phase (2005-2010)</h3>
                <p className="text-gray text-sm">
                  Skybrook homes built in the mid-2000s are now 16-21 years old. Many were hit by hail
                  and high-wind events over the past 15 years that shortened original shingle life.
                  We are doing a lot of insurance-funded replacements in this Skybrook cohort.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-lg mb-3">Late Phase (2010-2015)</h3>
                <p className="text-gray text-sm">
                  Newer Skybrook homes are typically not yet at end of life, but storm damage and
                  isolated leaks are common. Most Skybrook homes from this era benefit from a free
                  inspection, sealant refresh on flashings, and pipe-boot replacement at year 10-15.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-lg mb-3">Estate &amp; Custom Homes</h3>
                <p className="text-gray text-sm">
                  Larger Skybrook estate homes -- especially those facing the Skybrook Golf Club back
                  nine -- often warrant designer shingles and standing-seam metal accents at replacement
                  time. We help Skybrook estate owners pick a system that fits the architecture and
                  the long-term resale value of homes valued $850K-$1.4M.
                </p>
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
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Skybrook Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions from Skybrook homeowners in Huntersville NC 28078.
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

      {/* Service Area / Related Links */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Skybrook &amp; Huntersville Roofing Service Areas
            </h2>
            <p className="text-gray text-lg">
              We serve Skybrook and every Huntersville neighborhood in the 28078 zip code, plus
              communities throughout the Lake Norman region.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/roofing-huntersville-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <MapPin className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Huntersville NC</h3>
              <p className="text-gray text-sm mb-3">Complete roofing services for all Huntersville neighborhoods in 28078.</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-birkdale-huntersville-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Home className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Birkdale Huntersville</h3>
              <p className="text-gray text-sm mb-3">Specialized roofing for the Birkdale Village community in Huntersville.</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-vermillion-huntersville-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Home className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Vermillion Huntersville</h3>
              <p className="text-gray text-sm mb-3">Local roofing for the Vermillion neighborhood off Beatties Ford Rd.</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roof-replacement-huntersville-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Hammer className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roof Replacement Huntersville</h3>
              <p className="text-gray text-sm mb-3">Full roof replacement across Huntersville and the 28078 zip code.</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roof-repair-huntersville-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <ClipboardCheck className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roof Repair Huntersville</h3>
              <p className="text-gray text-sm mb-3">Same-week leak repair and emergency roofing service in Huntersville NC.</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/metal-roofing-huntersville-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Shield className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Metal Roofing Huntersville</h3>
              <p className="text-gray text-sm mb-3">Standing-seam metal roofs and metal accents for Huntersville homes.</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/storm-damage-roof-repair-huntersville-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Shield className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Storm Damage Repair Huntersville</h3>
              <p className="text-gray text-sm mb-3">Storm and hail damage roof repair for Huntersville neighborhoods.</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-lake-norman-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <MapPin className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Lake Norman NC</h3>
              <p className="text-gray text-sm mb-3">Full roofing services across the Lake Norman region.</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/lake-norman-roofing-guide" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <ClipboardCheck className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Lake Norman Roofing Guide</h3>
              <p className="text-gray text-sm mb-3">The complete homeowner&apos;s guide to roofing around Lake Norman.</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
          <div className="mt-10 text-center text-sm text-gray">
            <p>
              Also serving Skybrook homeowners moving locally:{' '}
              <Link href="/services/roof-replacement" className="text-emerald-700 font-semibold hover:underline">
                Roof Replacement
              </Link>{' '}
              service overview &middot;{' '}
              <Link href="/contact" className="text-emerald-700 font-semibold hover:underline">
                Contact Best Roofing Now
              </Link>{' '}
              for a free Skybrook estimate.
            </p>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="location" city="Huntersville" slug="roofing-skybrook-huntersville-nc" />

      <CityGeoSection
        city="Huntersville"
        state="NC"
        citySlug="huntersville-nc"
        service="Roofing"
      />

      <LKNNeighborhoodGrid currentCity="Huntersville" currentSlug="roofing-skybrook-huntersville-nc" />
      <LKNPartnershipsBlock city={"Huntersville"} />
      <LKNDataCitations city={"Huntersville"} />

      <CTASection
        title="Get Your Free Skybrook Roof Estimate"
        subtitle="Best Roofing Now is the local roofing contractor Skybrook homeowners trust in Huntersville NC 28078. From the original 1998 phases near the Skybrook Golf Club to estate homes off Hwy 16, we deliver HOA-approved roof replacement, repair, and storm response throughout the Skybrook community and the Lake Norman region."
      />
    </>
  );
}
