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
  Gem,
  Home,
  Waves,
  MapPin,
  Anchor,
  Wind,
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
  title: 'Roofing Cove Creek Mooresville NC',
  description:
    'Cove Creek Mooresville NC roofing experts for waterfront and lake-view homes off Brawley School Rd. Wind-rated installs, HOA/ARC approval, free estimates.',
  keywords: [
    'cove creek roofing',
    'cove creek mooresville roofer',
    'roof replacement cove creek',
    'cove creek mooresville nc roofing',
    'cove creek lake norman roofing',
    'brawley school rd roofing',
    'waterfront roofing cove creek',
    'cove creek hoa roofing',
    'standing seam metal cove creek',
    'wind rated roofing 28117',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-cove-creek-mooresville-nc`,
  },
  openGraph: {
    title: 'Roofing Cove Creek Mooresville NC | Lake Norman Waterfront',
    description:
      'Premium roofing for Cove Creek in Mooresville NC. Waterfront and lake-view homes off Brawley School Rd. Wind-rated, HOA-approved installs by Best Roofing Now.',
    url: `${SITE_CONFIG.url}/roofing-cove-creek-mooresville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roofing Cove Creek Mooresville NC - Best Roofing Now Lake Norman waterfront specialists',
      },
    ],
  },
};

// Cove Creek roofing services
const services = [
  {
    title: 'Roof Replacement for Cove Creek Estates',
    description:
      'Full tear-off and replacement for Cove Creek waterfront and lake-view homes. We handle complex high-pitched rooflines, dormers, and turret details common across this Brawley School Rd community.',
    benefits: ['Complex rooflines', 'Lifetime warranty', '130-150 MPH wind'],
    href: '/roof-replacement-mooresville-nc',
  },
  {
    title: 'Standing Seam Metal Accents & Roofs',
    description:
      'Standing seam metal panels are a fast-growing pick at Cove Creek -- perfect for porch roofs, dormers, and full estate installs that need to shrug off Lake Norman wind.',
    benefits: ['140+ MPH wind rated', '50-year finish', 'Modern look'],
    href: '/standing-seam-metal-roof-lake-norman-nc',
  },
  {
    title: 'Synthetic Slate Roofing',
    description:
      'Class 4 impact-rated synthetic slate gives Cove Creek estates the look of natural slate at a fraction of the weight, ideal for retrofitting traditional brick and transitional homes.',
    benefits: ['Class 4 impact', '50-year warranty', 'Slate appearance'],
    href: '/synthetic-slate-roofing-lake-norman-nc',
  },
  {
    title: 'Designer Architectural Shingles',
    description:
      'GAF Grand Sequoia, CertainTeed Grand Manor, and Owens Corning Berkshire shingles approved by the Cove Creek HOA for premium curb appeal on lake-view homes.',
    benefits: ['HOA approved', 'Lifetime warranty', 'Algae resistant'],
    href: '/designer-shingles-charlotte-nc',
  },
  {
    title: 'Storm & Wind Damage Repair',
    description:
      'Rapid response after Lake Norman storms hit Cove Creek. We document damage, work directly with insurance, and protect docks, boat slips, and waterfront landscaping during repairs.',
    benefits: ['24/7 emergency', 'Insurance liaison', 'Dock-safe debris plan'],
    href: '/roof-repair-mooresville-nc',
  },
  {
    title: 'Roof Inspections for Cove Creek Sales',
    description:
      'Pre-listing and pre-purchase roof inspections for Cove Creek homes in 28117. Detailed reports cover wind exposure wear, flashing, ventilation, and remaining roof life.',
    benefits: ['Drone documentation', 'Same-day report', 'Realtor friendly'],
    href: '/contact',
  },
];

// Why choose us for Cove Creek
const whyChooseUs = [
  {
    icon: Waves,
    title: 'Lake Norman Waterfront Specialists',
    description:
      'Cove Creek sits on Lake Norman with significant wind exposure. We specify high-wind systems engineered for the open-water gusts that hit Brawley School Rd properties.',
  },
  {
    icon: Award,
    title: 'GAF Master Elite & CertainTeed Certified',
    description:
      'Top 2% of contractors nationally -- the certification level Cove Creek homeowners expect for high-end shingles, synthetic slate, and standing seam metal installations.',
  },
  {
    icon: Home,
    title: 'Cove Creek HOA & ARC Experience',
    description:
      'We prepare full ARC submission packages for the Cove Creek HOA: material spec sheets, color samples, manufacturer warranty documentation, and installation details.',
  },
  {
    icon: Wind,
    title: 'High-Wind Roofing Systems',
    description:
      'Open lake fetch across Lake Norman drives wind speeds higher at Cove Creek than inland Mooresville. Our installs meet 130-150 MPH ratings with reinforced edge metal.',
  },
  {
    icon: Shield,
    title: 'Enhanced Manufacturer Warranties',
    description:
      'GAF Golden Pledge, CertainTeed SureStart Plus, and DaVinci 50-year warranties backed by our own workmanship guarantee for true lakefront peace of mind.',
  },
  {
    icon: Gem,
    title: 'Premium Home Project Discipline',
    description:
      'Cove Creek estates routinely exceed $1M and waterfront homes push past $3M. Our crews protect landscaping, boat slips, irrigation, and stamped concrete throughout the project.',
  },
];

// FAQs for Cove Creek
const faqs = [
  {
    question: 'How much does a roof replacement cost in Cove Creek Mooresville NC?',
    answer:
      'A roof replacement at Cove Creek in Mooresville NC typically costs between $18,000 and $85,000 in 2026. Lake-view homes (3,000-5,000 sq ft) using designer architectural shingles run $18,000-$32,000. Larger Cove Creek waterfront estates (5,000-9,000 sq ft) using synthetic slate or standing seam metal commonly land in the $45,000-$85,000+ range. We provide a fully itemized estimate after a drone-assisted inspection of your home off Brawley School Rd.',
  },
  {
    question: 'Does Cove Creek have an HOA that approves roofing materials?',
    answer:
      'Yes. The Cove Creek HOA in Mooresville maintains an Architectural Review Committee (ARC) that pre-approves roofing material types, colors, and manufacturers. Best Roofing Now prepares the full ARC submission for you -- material data sheets, color chips, warranty paperwork, and installation specs -- so the Cove Creek HOA approval moves quickly and your project starts on schedule.',
  },
  {
    question: 'What wind rating do you recommend for Cove Creek waterfront roofs?',
    answer:
      'For Cove Creek waterfront homes on Lake Norman, we recommend a minimum 130 MPH wind-rated system, and 140-150 MPH for the most exposed lakefront points and high-pitched rooflines. Open lake fetch dramatically increases wind loads on Cove Creek roofs compared to interior Mooresville neighborhoods. Higher wind ratings also commonly qualify for North Carolina homeowners insurance discounts.',
  },
  {
    question: 'Are you familiar with Cove Creek and Brawley School Rd in Mooresville?',
    answer:
      'Yes -- Cove Creek sits in southwest Mooresville off Brawley School Rd in the 28117 zip, served by Lake Norman Elementary, Brawley Middle, and Lake Norman High. We have roofed in Cove Creek and surrounding Brawley School Rd communities including The Farms, Curtis Pond, and The Point, so we know the streets, the HOA expectations, and the wind exposure patterns of this part of Lake Norman.',
  },
  {
    question: 'Can you protect my boat slip and dock during the Cove Creek roof tear-off?',
    answer:
      'Absolutely. Cove Creek owners with community boat slips or private docks get a customized debris-protection plan: lakeside catch tarps, magnetic nail sweeps along the waterfront, daily cleanup before sundown, and scheduled tear-off windows that avoid weekend lake traffic. Our project manager walks the dock and waterfront with you before work begins so nothing is left to chance.',
  },
  {
    question: 'What roofing materials work best on Cove Creek estates?',
    answer:
      'Cove Creek estates do best with three material families: high-end architectural shingles (GAF Grand Sequoia, CertainTeed Grand Manor) for traditional brick homes, standing seam metal for transitional and contemporary designs, and synthetic slate (DaVinci, Brava) for owners who want slate aesthetics without the structural load. All three meet Cove Creek HOA standards and stand up to Lake Norman wind.',
  },
  {
    question: 'How long does a Cove Creek roof replacement take?',
    answer:
      'Most Cove Creek roof replacements take 3 to 8 working days. A 3,000-4,000 sq ft lake-view shingle roof is usually complete in 3-4 days. Larger Cove Creek waterfront estates with complex high-pitched rooflines, multiple dormers, and standing seam or synthetic slate can run 5-8 days. We share a written daily schedule and protect your home, dock, and landscaping each evening.',
  },
  {
    question: 'Do you install standing seam metal roofs at Cove Creek?',
    answer:
      'Yes, standing seam metal is one of the fastest-growing requests at Cove Creek. We install 24-gauge Galvalume standing seam panels in HOA-approved colors -- often as full estate roofs or as accent panels over porches, bay windows, and dormers. Standing seam carries 140+ MPH wind ratings and a 50-year finish warranty, ideal for the open lake exposure at Cove Creek.',
  },
  {
    question: 'Will my Cove Creek roof qualify for an insurance discount?',
    answer:
      'Often yes. North Carolina insurance carriers commonly offer premium discounts for Class 4 impact-rated roofs and for high-wind installations -- both common on Cove Creek homes. After your install, we provide manufacturer certification documents and an installation affidavit you can submit to your insurer for review.',
  },
  {
    question: 'Do you offer financing for Cove Creek roof projects?',
    answer:
      'Yes. We offer financing options for Cove Creek homeowners through PowerPay, including no-interest promotional periods and longer-term fixed-rate plans. Financing is a popular path for Cove Creek owners pairing a roof replacement with gutters, skylights, or attic ventilation upgrades on the same project.',
  },
];

export default function RoofingCoveCreekMooresvillePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Mooresville NC', url: `${SITE_CONFIG.url}/roofing-mooresville-nc` },
          { name: 'Roofing Cove Creek Mooresville NC', url: `${SITE_CONFIG.url}/roofing-cove-creek-mooresville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-cove-creek-mooresville-nc`}
        pageName="Roofing Cove Creek Mooresville NC"
        city="Mooresville"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/roofing-cove-creek-mooresville-nc`} city={"Mooresville"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Sailboat className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold">Cove Creek Lake Norman Waterfront Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Cove Creek <br className="hidden md:block" />
              <span className="text-blue-300">Mooresville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium roofing for Cove Creek waterfront and lake-view homes off Brawley School Rd
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Cove Creek is one of southwest Mooresville&apos;s most desirable Lake Norman communities --
              250+ custom homes mixing waterfront estates and lake-view properties along Brawley School Rd
              in the 28117 zip. Best Roofing Now delivers wind-rated installations, HOA/ARC approval support,
              and the meticulous protection these high-end Cove Creek properties demand.
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
                Request Cove Creek Estimate
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
                Cove Creek HOA Approved
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-300" />
                GAF Master Elite
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cove Creek Homeowners Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Cove Creek Lake Norman Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-4">
                Cove Creek in Mooresville NC sits in a unique pocket of Lake Norman -- 250+ custom homes
                built largely between 2000 and 2018 along the southwest shoreline off Brawley School Rd.
                Owners here split between true waterfront estates valued $1.1M-$3M+ and lake-view homes
                in the $725K-$1.2M range. Both deserve roofing that respects the architecture, the HOA, and
                the wind exposure that defines lakefront living.
              </p>
              <p className="text-gray text-lg mb-6">
                Best Roofing Now has roofed across Cove Creek and the neighboring Brawley School Rd
                communities including The Farms, Curtis Pond, and The Point. We bring GAF Master Elite
                certification, deep familiarity with the Cove Creek HOA Architectural Review Committee, and
                project crews trained to treat your boat slip, dock, and Lake Norman waterfront landscaping
                with the same care as the roof itself.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">$725K-$3M+</p>
                  <p className="text-sm text-gray">Cove Creek Home Values</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">250+</p>
                  <p className="text-sm text-gray">Cove Creek Homes</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">28117</p>
                  <p className="text-sm text-gray">Mooresville Zip</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">Lake Norman</p>
                  <p className="text-sm text-gray">Waterfront Access</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <SEOImage
                src={IMAGES.hero.hero1}
                alt="Roofing Cove Creek Mooresville NC waterfront Lake Norman home"
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
              Roofing Services for Cove Creek Waterfront &amp; Estate Homes
            </h2>
            <p className="text-gray text-lg">
              Engineered for Cove Creek&apos;s mix of waterfront estates and lake-view custom homes off
              Brawley School Rd in Mooresville. Every install is tuned to Lake Norman wind exposure and
              Cove Creek HOA architectural standards.
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

      {/* How Much Does a Roof Cost at Cove Creek */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              How Much Does a Roof Cost at Cove Creek Mooresville?
            </h2>
            <p className="text-gray text-lg mb-6 text-center">
              2026 pricing for Cove Creek homes in the 28117 zip, based on home size, material, and Lake
              Norman wind exposure. All quotes include tear-off, synthetic underlayment, ice-and-water
              shield, ridge ventilation, and full HOA-compliant cleanup.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Lake-View Cove Creek Home</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$18K - $32K</p>
                <p className="text-gray text-sm">
                  Architectural or designer shingles on 3,000-5,000 sq ft Cove Creek lake-view homes.
                  130 MPH wind-rated install with HOA-approved color palette.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Cove Creek Waterfront Estate</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$45K - $85K</p>
                <p className="text-gray text-sm">
                  Synthetic slate, designer shingles, or standing seam metal accents on 5,000-9,000 sq ft
                  Cove Creek waterfront estates with complex high-pitched rooflines.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Full Standing Seam Metal</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$60K - $140K+</p>
                <p className="text-gray text-sm">
                  24-gauge Galvalume standing seam across an entire Cove Creek estate. 140+ MPH wind
                  rated, 50-year finish warranty, ideal for waterfront Lake Norman exposure.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/lake-norman-roofing-costs-2026"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                See full Lake Norman 2026 roofing cost breakdown
                <ArrowRight className="w-4 h-4 ml-1" />
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
              Why Best Roofing Now Is Cove Creek&apos;s Trusted Roofer
            </h2>
            <p className="text-gray text-lg">
              Working on Cove Creek waterfront and lake-view estates means certifications, HOA fluency,
              wind expertise, and the discipline to protect a high-end home from the first dump trailer
              to the final magnetic sweep.
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
                Ready to Roof Your Cove Creek Home?
              </h2>
              <p className="text-white/90">
                Free on-site estimate, drone inspection, and Cove Creek HOA submission package included.
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
                Schedule Estimate
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

      {/* Cove Creek HOA & ARC Approval */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Cove Creek HOA &amp; ARC Approval for Premium Roofing
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              The Cove Creek HOA in Mooresville NC enforces an Architectural Review Committee process
              for any exterior change -- including roofing material, color, and trim. We handle the
              entire ARC submission for Cove Creek owners, so the project moves cleanly from contract to
              completion.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Pre-Approved Material Palette</h3>
                <p className="text-gray text-sm">
                  We work from the Cove Creek HOA&apos;s pre-approved material list -- designer
                  architectural shingles, synthetic slate, and standing seam metal in HOA-approved
                  earth-tone palettes. We bring physical color samples to your Cove Creek home for
                  side-by-side comparison with brick, siding, and trim.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Complete ARC Submission Package</h3>
                <p className="text-gray text-sm">
                  Each Cove Creek project gets a full ARC packet: manufacturer spec sheets, written
                  scope, shingle/panel color chips, ridge and valley details, and warranty documentation.
                  We submit on your behalf and respond to any ARC follow-up questions before work begins.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Construction Hours &amp; Site Rules</h3>
                <p className="text-gray text-sm">
                  We follow Cove Creek HOA construction hour rules, weekend restrictions, and dumpster
                  placement guidelines. Our project managers coordinate with the Cove Creek HOA office on
                  any special access or scheduling issues -- you don&apos;t lift a finger.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Final Inspection &amp; Closeout</h3>
                <p className="text-gray text-sm">
                  After install, we provide closeout documentation: manufacturer registration,
                  workmanship warranty, photo records, and an ARC-ready completion letter. Cove Creek
                  owners file once and have a clean record on the home for resale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wind-Resistant Roofing for Cove Creek */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Wind-Resistant Roofing for Cove Creek Lake Norman Waterfront
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              Cove Creek&apos;s waterfront position on Lake Norman means open lake fetch -- the
              uninterrupted distance wind travels across water -- regularly drives wind speeds higher
              than what inland Mooresville neighborhoods experience. Roofing here has to be specified
              accordingly.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Wind className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-dark text-lg mb-2">130-150 MPH Wind Ratings</h3>
                <p className="text-gray text-sm">
                  We default to a minimum 130 MPH wind-rated system on every Cove Creek install, and
                  upgrade exposed waterfront homes to 140-150 MPH systems. Standing seam metal at Cove
                  Creek easily clears 140 MPH with proper clip spacing.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Shield className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-dark text-lg mb-2">Reinforced Edge Metal</h3>
                <p className="text-gray text-sm">
                  Eaves and rakes carry the highest wind uplift on Cove Creek waterfront roofs. We use
                  heavier-gauge drip edge, extra fastener density, and starter strips bonded with
                  asphaltic adhesive to lock down the perimeter against Lake Norman gusts.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-dark text-lg mb-2">Class 4 Impact-Rated Shingles</h3>
                <p className="text-gray text-sm">
                  Hail and wind-borne debris are real threats during Lake Norman storms. Class 4
                  impact-rated shingles and synthetic slate from DaVinci or Brava resist denting and
                  often qualify Cove Creek owners for a homeowners insurance discount.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Award className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-dark text-lg mb-2">Manufacturer-Backed Wind Warranty</h3>
                <p className="text-gray text-sm">
                  GAF Golden Pledge and CertainTeed SureStart Plus warranties on Cove Creek installs
                  carry wind coverage at the install&apos;s rated speed -- transferable to the next owner
                  if you sell, which matters in the active 28117 Lake Norman market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cove Creek Roofing Expertise Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              What Makes Cove Creek Roofing Unique
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Community Boat Slips &amp; Pool Area</h3>
                <p className="text-gray text-sm">
                  Cove Creek includes community boat slips, a pool, and walking trails near the
                  waterfront. We schedule deliveries and crew movements to avoid blocking access to these
                  amenities and use lakeside debris containment to keep boat slips and the pool deck
                  pristine throughout the project.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Complex Estate Rooflines</h3>
                <p className="text-gray text-sm">
                  Many Cove Creek homes feature high-pitched 10/12 to 14/12 rooflines with multiple
                  dormers, gables, and chimney saddles. Our crews are trained for steep-slope installs
                  with proper safety anchorage, and we price the complexity transparently so there are
                  no surprises mid-project.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">School-Zone Schedule Awareness</h3>
                <p className="text-gray text-sm">
                  Cove Creek feeds Lake Norman Elementary, Brawley Middle, and Lake Norman High. We
                  schedule loud roofing operations to respect school start/end traffic on Brawley School
                  Rd and avoid blocking neighbor driveways during pickup and dismissal windows.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Lake-Effect Moisture &amp; Ventilation</h3>
                <p className="text-gray text-sm">
                  Cove Creek waterfront homes deal with elevated humidity year-round. We size attic
                  ventilation to current code with balanced intake/exhaust and upgrade ridge vent and
                  soffit hardware to extend roof life and prevent moisture damage common at Lake Norman
                  lakefront properties.
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
                Cove Creek Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions from Cove Creek homeowners in Mooresville NC about roofing, HOA
                approval, wind exposure, and Lake Norman waterfront protection.
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
              Service Areas Near Cove Creek
            </h2>
            <p className="text-gray text-lg">
              We serve Cove Creek alongside the surrounding Brawley School Rd communities and the wider
              Lake Norman waterfront.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/roofing-mooresville-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <MapPin className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Mooresville NC</h3>
              <p className="text-gray text-sm mb-3">Citywide Mooresville roofing across all Lake Norman neighborhoods</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-the-farms-mooresville-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Home className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing The Farms Mooresville</h3>
              <p className="text-gray text-sm mb-3">Brawley School Rd executive community next door to Cove Creek</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-curtis-pond-mooresville-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Home className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Curtis Pond Mooresville</h3>
              <p className="text-gray text-sm mb-3">Neighboring Brawley School Rd community in 28117</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-the-point-mooresville-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Anchor className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing The Point Mooresville</h3>
              <p className="text-gray text-sm mb-3">Premier gated Lake Norman waterfront community in Mooresville</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-lake-norman-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Waves className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Lake Norman NC</h3>
              <p className="text-gray text-sm mb-3">Roofing services across the entire Lake Norman region</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/lake-norman-waterfront-roofing" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Sailboat className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Lake Norman Waterfront Roofing</h3>
              <p className="text-gray text-sm mb-3">Wind-rated waterfront roofing systems built for Lake Norman</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Resource Cross-Links */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Cove Creek Roofing Resources
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/lake-norman-roofing-guide" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Lake Norman Roofing Guide</h3>
              <p className="text-gray text-sm mb-3">Complete homeowner guide to roofing on Lake Norman</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Read Guide <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/lake-norman-roofing-costs-2026" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">2026 Lake Norman Costs</h3>
              <p className="text-gray text-sm mb-3">Current roof replacement pricing across Lake Norman</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                See Pricing <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/standing-seam-metal-roof-lake-norman-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Standing Seam Metal</h3>
              <p className="text-gray text-sm mb-3">Wind-rated standing seam metal for Lake Norman</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/synthetic-slate-roofing-lake-norman-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Synthetic Slate Roofing</h3>
              <p className="text-gray text-sm mb-3">DaVinci and Brava synthetic slate for Lake Norman estates</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roof-replacement-mooresville-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roof Replacement Mooresville</h3>
              <p className="text-gray text-sm mb-3">Complete tear-off and replacement throughout Mooresville</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roof-repair-mooresville-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roof Repair Mooresville</h3>
              <p className="text-gray text-sm mb-3">Storm damage and leak repair across Mooresville</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/roof-replacement" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roof Replacement Service</h3>
              <p className="text-gray text-sm mb-3">Our full roof replacement service overview</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/contact" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Free Cove Creek Estimate</h3>
              <p className="text-gray text-sm mb-3">Schedule a free on-site Cove Creek roofing estimate</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Contact Us <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="location" city="Mooresville" slug="roofing-cove-creek-mooresville-nc" />

      <CityGeoSection
        city="Mooresville"
        state="NC"
        citySlug="mooresville-nc"
        service="Roofing"
      />

      <LKNNeighborhoodGrid currentCity="Mooresville" currentSlug="roofing-cove-creek-mooresville-nc" />
      <LKNPartnershipsBlock city={"Mooresville"} />
      <LKNDataCitations city={"Mooresville"} />
      <CTASection
        title="Get Your Free Cove Creek Roofing Estimate"
        subtitle="Best Roofing Now serves Cove Creek and the Brawley School Rd Lake Norman waterfront with wind-rated installs, full HOA/ARC submission support, and the meticulous protection your Mooresville home deserves. Call today or request your free on-site estimate."
      />
    </>
  );
}
