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
  AlertTriangle,
  DollarSign,
  Hammer,
  Layers,
  FileCheck,
  Truck,
  Sparkles,
  ThermometerSun,
  Droplets,
  MapPin,
  Factory,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { MeetTheFamily } from '@/components/sections/MeetTheFamily';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { IMAGES } from '@/lib/images';
import { TURNER_NOTES } from '@/lib/turner-family';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Replacement Gastonia NC',
  description:
    'Professional roof replacement services in Gastonia NC. Full tear-off and new roof installation with premium materials. GAF, CertainTeed & Owens Corning certified. Financing available. Free estimates!',
  keywords: [
    'roof replacement gastonia nc',
    'new roof gastonia nc',
    'roof replacement cost gastonia',
    'full roof replacement gastonia nc',
    'complete roof replacement gastonia',
    'roof replacement company gastonia',
    'affordable roof replacement gastonia nc',
    'quality roof replacement gastonia',
    'roof replacement services gastonia nc',
    'professional roof replacement gastonia',
    'gastonia roofing contractor',
    'gaston county roof replacement',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-replacement-gastonia-nc`,
  },
  openGraph: {
    title: 'Roof Replacement Gastonia NC | Expert Installation | Best Roofing Now',
    description:
      'Complete roof replacement with full tear-off and premium new roof installation in Gastonia NC. Certified installers, industry-leading warranties, and flexible financing options.',
    url: `${SITE_CONFIG.url}/roof-replacement-gastonia-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero4,
        width: 1200,
        height: 630,
        alt: 'Professional roof replacement Gastonia NC - Best Roofing Now crew installing a new roof',
      },
    ],
  },
};

// Signs you need a roof replacement
const replacementSigns = [
  {
    icon: Clock,
    title: 'Age of Your Roof',
    description: 'Most asphalt shingle roofs last 20-25 years. If your Gastonia home has an aging roof approaching or past this timeframe, replacement is often more cost-effective than repeated repairs.',
  },
  {
    icon: Droplets,
    title: 'Multiple Leaks',
    description: 'Recurring leaks in different areas indicate systemic failure. When the underlayment and decking are compromised, a full replacement is the only lasting solution for your Gastonia home.',
  },
  {
    icon: Layers,
    title: 'Curling or Missing Shingles',
    description: 'Widespread shingle damage, curling, buckling, or granule loss across large areas signals the end of your roof\'s protective life - common in Gaston County\'s variable climate.',
  },
  {
    icon: ThermometerSun,
    title: 'High Energy Bills',
    description: 'A failing roof allows conditioned air to escape. If your energy bills have increased significantly, your roof\'s insulation value may be compromised by Gastonia\'s hot summers.',
  },
  {
    icon: AlertTriangle,
    title: 'Sagging Roof Deck',
    description: 'A sagging roofline indicates structural damage from prolonged moisture infiltration. This requires immediate attention and full replacement to protect your home.',
  },
  {
    icon: Home,
    title: 'Daylight Through Roof Boards',
    description: 'If you see light coming through your attic, your roof deck has holes or gaps that compromise your entire roofing system and require immediate replacement.',
  },
];

// Roof replacement process steps
const replacementProcess = [
  {
    step: 1,
    title: 'Free Inspection & Estimate',
    description: 'Our certified inspector thoroughly examines your current roof, attic, and ventilation. We provide a detailed written estimate with material options and transparent pricing for Gastonia homeowners.',
  },
  {
    step: 2,
    title: 'Material Selection',
    description: 'Choose from premium shingles, metal roofing, or specialty materials. We help you select the best option for your home\'s style, budget, and Gaston County\'s climate conditions.',
  },
  {
    step: 3,
    title: 'Complete Tear-Off',
    description: 'We remove all existing shingles, underlayment, and damaged decking down to the bare wood. This allows us to inspect and repair the entire roof structure.',
  },
  {
    step: 4,
    title: 'Deck Inspection & Repair',
    description: 'Every board is inspected for rot, water damage, and structural integrity. Damaged sections are replaced with new plywood before installation begins.',
  },
  {
    step: 5,
    title: 'Premium Installation',
    description: 'New ice and water shield, synthetic underlayment, starter strips, shingles, ridge vents, and flashing are installed to manufacturer specifications.',
  },
  {
    step: 6,
    title: 'Final Inspection & Cleanup',
    description: 'We perform a thorough final inspection, run magnetic sweeps for nails, and leave your Gastonia property cleaner than we found it. Your warranty documentation is provided.',
  },
];

// Roofing material options
const materialOptions = [
  {
    icon: Layers,
    title: 'Architectural Shingles',
    description: 'Premium dimensional shingles offering enhanced durability, wind resistance up to 130 MPH, and beautiful curb appeal. 30-50 year warranties available. Ideal for Gastonia homes.',
    priceRange: '$8,000 - $15,000',
    lifespan: '30-50 years',
    popular: true,
  },
  {
    icon: Shield,
    title: 'Luxury/Designer Shingles',
    description: 'Premium shingles that replicate the look of slate or cedar shake. Superior protection with stunning aesthetics and lifetime warranties for upscale Gaston County homes.',
    priceRange: '$15,000 - $25,000',
    lifespan: '50+ years',
    popular: false,
  },
  {
    icon: Sparkles,
    title: 'Metal Roofing',
    description: 'Standing seam and metal shingle options. Exceptional longevity, energy efficiency, and modern aesthetics. Excellent choice for Gastonia\'s hot summers and severe storms.',
    priceRange: '$18,000 - $35,000',
    lifespan: '50-70 years',
    popular: false,
  },
  {
    icon: Home,
    title: '3-Tab Shingles',
    description: 'Budget-friendly option that still provides solid protection. Best suited for rental properties, sheds, or budget-conscious Gastonia homeowners.',
    priceRange: '$6,000 - $10,000',
    lifespan: '15-20 years',
    popular: false,
  },
];

// Cost factors
const costFactors = [
  {
    icon: Layers,
    title: 'Roof Size & Complexity',
    description: 'Measured in roofing squares (100 sq ft). Multiple levels, steep slopes, and complex designs increase labor time and materials for your Gastonia home.',
  },
  {
    icon: Truck,
    title: 'Material Choice',
    description: 'Architectural shingles, designer shingles, and metal roofing each have different price points. Premium materials offer longer warranties.',
  },
  {
    icon: Hammer,
    title: 'Deck Repairs',
    description: 'Rotted or damaged decking must be replaced. Most Gastonia roofs need some repairs, which adds to the total project cost.',
  },
  {
    icon: FileCheck,
    title: 'Permits & Codes',
    description: 'Gastonia and Gaston County require roofing permits. We handle all permitting and ensure your new roof meets current building codes.',
  },
];

// Gastonia neighborhoods served
const gastoniaNeighborhoods = [
  'Downtown Gastonia',
  'South Gastonia',
  'West Gastonia',
  'East Gastonia',
  'North Gastonia',
  'Highland',
  'Firestone',
  'Myrtle School',
  'York Chester',
  'Parkwood',
  'Beaty Hills',
  'Gaston Mall Area',
  'Ranlo',
  'Lowell',
  'McAdenville',
  'Cramerton',
  'Spencer Mountain',
  'Dallas',
  'Stanley',
  'Bessemer City',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Charlotte', href: '/roof-replacement-charlotte-nc' },
  { name: 'Belmont', href: '/locations/belmont-nc' },
  { name: 'Mount Holly', href: '/locations/mount-holly-nc' },
  { name: 'Cramerton', href: '/locations/cramerton-nc' },
  { name: 'Dallas', href: '/locations/dallas-nc' },
  { name: 'Bessemer City', href: '/locations/bessemer-city-nc' },
  { name: 'Kings Mountain', href: '/locations/kings-mountain-nc' },
  { name: 'Cherryville', href: '/locations/cherryville-nc' },
  { name: 'Stanley', href: '/locations/stanley-nc' },
  { name: 'Lowell', href: '/locations/lowell-nc' },
  { name: 'McAdenville', href: '/locations/mcadenville-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
];

// FAQs about roof replacement in Gastonia
const faqs = [
  {
    question: 'How much does a roof replacement cost in Gastonia NC?',
    answer:
      'Roof replacement costs in Gastonia typically range from $8,000 to $25,000 for most residential homes, depending on roof size, material choice, and complexity. The average Gastonia home (1,500-2,500 sq ft roof) costs between $10,000 and $18,000 for architectural shingles. We provide free, detailed estimates with no hidden fees.',
  },
  {
    question: 'How long does a complete roof replacement take in Gastonia?',
    answer:
      'Most residential roof replacements in Gastonia are completed in 1-3 days. Larger homes, complex roof designs, or unexpected deck repairs may extend the timeline to 4-5 days. We work efficiently while maintaining our quality standards and always communicate the expected timeline upfront.',
  },
  {
    question: 'Do I need to be home during the roof replacement?',
    answer:
      'No, you do not need to be home during your roof replacement. We just need access to your property and electrical outlets. Many Gastonia homeowners prefer to be away due to the noise. We will contact you before starting, keep you updated throughout, and walk you through the completed work.',
  },
  {
    question: 'What warranties come with a new roof from Best Roofing Now in Gastonia?',
    answer:
      'Your new roof includes both manufacturer material warranties (25-50 years depending on product) and our workmanship warranty. As certified installers for CertainTeed, GAF, and Owens Corning, we can offer extended warranties including GAF Golden Pledge (50-year non-prorated) and CertainTeed SureStart PLUS coverage for Gastonia homeowners.',
  },
  {
    question: 'Can I stay in my home during roof replacement in Gastonia?',
    answer:
      'Yes, you can stay in your Gastonia home during roof replacement. The work happens outside, so your daily routine is mostly unaffected. Expect some noise during tear-off and installation (typically 7 AM - 6 PM). We recommend removing wall decorations near the ceiling and expect some vibration. Pets may be more comfortable in an interior room or away for the day.',
  },
  {
    question: 'Will my insurance cover roof replacement in Gaston County?',
    answer:
      'Insurance typically covers roof replacement if the damage was caused by a covered peril like hail, wind, or fallen trees. Gaston County experiences severe storms that often qualify for coverage. Normal wear and aging are generally not covered. We provide detailed damage documentation and work directly with insurance adjusters to help maximize your claim.',
  },
  {
    question: 'How do I know if I need replacement vs. repair in Gastonia?',
    answer:
      'Generally, if your Gastonia home\'s roof is under 15 years old with isolated damage, repairs make sense. If your roof is 20+ years old, has multiple problem areas, widespread shingle deterioration, or has had repeated repairs, replacement is usually more cost-effective long-term. Our free inspection includes an honest assessment of the best option for your situation.',
  },
  {
    question: 'Do you offer financing for roof replacement in Gastonia NC?',
    answer:
      'Yes! We offer flexible financing options to make roof replacement affordable for Gastonia homeowners. Options include 0% interest promotional periods, low monthly payments, and terms up to 144 months. Most homeowners qualify, and approval takes just minutes. We can discuss financing during your free estimate.',
  },
];

export default function RoofReplacementGastoniaNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Replacement Gastonia NC', url: `${SITE_CONFIG.url}/roof-replacement-gastonia-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero4}
            alt="Professional roof replacement Gastonia NC - Best Roofing Now crew installing a new roof"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">Certified Installers | Financing Available | Gaston County</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Replacement <br className="hidden md:block" />
              <span className="text-accent-light">Gastonia NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Complete tear-off and new roof installation by certified professionals in Gaston County
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When repairs are no longer enough, trust Best Roofing Now for your complete roof replacement in Gastonia.
              We use premium materials from CertainTeed, GAF, and Owens Corning, backed by industry-leading warranties
              and our expert installation - serving all of Gaston County and the greater Charlotte area.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                {SITE_CONFIG.roofsInstalled}+ Roofs Installed
              </span>
              <span className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-accent-light" />
                Financing Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gastonia Introduction Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Factory className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Gaston County Roofing Experts</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Gastonia&apos;s Premier Roof Replacement Company
              </h2>
              <p className="text-gray text-lg mb-6">
                Gastonia, the seat of Gaston County and one of the largest cities in the Charlotte metro area,
                has a rich industrial heritage and diverse housing stock. From historic downtown homes to modern
                subdivisions in West Gastonia, our roof replacement services protect the homes that make this
                community great.
              </p>
              <p className="text-gray text-lg mb-6">
                Located just 20 miles west of Charlotte, Gastonia homes face the same challenging Piedmont
                climate - hot, humid summers, severe thunderstorms, and occasional hail. Our certified installers
                use materials and techniques specifically chosen to withstand Gaston County&apos;s weather patterns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
                >
                  Schedule Free Inspection
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed roof replacement project in Gastonia NC by Best Roofing Now"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-dark">Serving Gastonia</p>
                    <p className="text-sm text-gray">Gaston County&apos;s Trusted Roofers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need Replacement Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              When Do You Need a Roof Replacement in Gastonia?
            </h2>
            <p className="text-gray text-lg">
              Sometimes repairs just are not enough. Here are the signs that indicate your Gastonia home
              needs a complete roof replacement rather than another patch job.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {replacementSigns.map((sign) => (
              <div
                key={sign.title}
                className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <sign.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-dark mb-2">{sign.title}</h3>
                <p className="text-gray text-sm">{sign.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray mb-4">Not sure if you need replacement or repair?</p>
            <Button
              href="/contact"
              variant="primary"
              icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
            >
              Schedule Free Inspection
            </Button>
          </div>
        </div>
      </section>

      {/* Roof Replacement Process */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Roof Replacement Process in Gastonia
            </h2>
            <p className="text-gray text-lg">
              From initial inspection to final cleanup, here is what to expect when Best Roofing Now
              replaces your roof in Gastonia and Gaston County.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {replacementProcess.map((item) => (
              <div
                key={item.step}
                className="bg-light rounded-xl p-6 shadow-md relative"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-bold text-dark mb-2 mt-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Material Options for Gastonia Homes
            </h2>
            <p className="text-gray text-lg">
              Choose from premium roofing materials suited to Gaston County&apos;s climate. All options include
              professional installation and manufacturer warranties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {materialOptions.map((material) => (
              <div
                key={material.title}
                className={`p-6 rounded-xl border-2 ${material.popular ? 'border-accent bg-accent/5' : 'border-gray-200 bg-white'}`}
              >
                {material.popular && (
                  <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Most Popular in Gastonia
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${material.popular ? 'bg-accent/20' : 'bg-primary/10'}`}>
                    <material.icon className={`w-6 h-6 ${material.popular ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-dark mb-2">{material.title}</h3>
                    <p className="text-gray text-sm mb-4">{material.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1 text-dark">
                        <DollarSign className="w-4 h-4 text-accent" />
                        {material.priceRange}
                      </span>
                      <span className="flex items-center gap-1 text-dark">
                        <Clock className="w-4 h-4 text-primary" />
                        {material.lifespan}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-primary/5 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="font-bold text-dark mb-2">Certified Installation Matters</h3>
                <p className="text-gray text-sm">
                  As CertainTeed ShingleMaster, GAF Factory-Certified                  contractors, we can offer enhanced warranties that cover both materials and workmanship
                  for maximum protection of your Gastonia home.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Factors & Financing */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Cost Factors */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What Affects Roof Replacement Cost in Gastonia?
              </h2>
              <p className="text-gray text-lg mb-8">
                Several factors determine the final cost of your new roof in Gaston County. We provide transparent,
                itemized estimates so you know exactly what you are paying for.
              </p>
              <div className="space-y-4">
                {costFactors.map((factor) => (
                  <div key={factor.title} className="flex items-start gap-4 bg-light p-4 rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <factor.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{factor.title}</h3>
                      <p className="text-gray text-sm">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financing */}
            <div className="bg-light rounded-xl shadow-lg p-8">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
                <DollarSign className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Flexible Financing</span>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">
                Affordable Payment Options for Gastonia Homeowners
              </h3>
              <p className="text-gray mb-6">
                Do not let budget concerns delay your roof replacement. We offer flexible financing
                options to fit the needs of Gastonia and Gaston County homeowners.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-dark">0% interest promotional periods available</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-dark">Low monthly payments starting at $99/mo</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-dark">Terms up to 144 months</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-dark">Quick approval - minutes, not days</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-dark">No prepayment penalties</span>
                </li>
              </ul>
              <Button
                href="/financing"
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                Learn About Financing Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for a New Roof in Gastonia?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from our certified roof replacement team serving Gaston County.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-accent hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Gastonia Homeowners Choose Us for Roof Replacement
              </h2>
              <p className="text-gray text-lg mb-8">
                When investing in a new roof, you want a company you can trust. Best Roofing Now has
                earned our reputation throughout Gaston County through quality work and honest service.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">5-Star Rated</h3>
                    <p className="text-gray text-sm">{SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied homeowners.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Triple Certified</h3>
                    <p className="text-gray text-sm">CertainTeed, GAF, and Owens Corning certified for premium warranties.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Veteran-Owned</h3>
                    <p className="text-gray text-sm">Military values of integrity, discipline, and excellence in every project.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">{SITE_CONFIG.roofsInstalled}+ Roofs</h3>
                    <p className="text-gray text-sm">Extensive experience with all roof types and materials in the region.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Completed roof replacement in Gastonia NC by Best Roofing Now"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-dark">BBB A+ Rated</p>
                    <p className="text-sm text-gray">Zero Complaints</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Replacement Throughout Gaston County
            </h2>
            <p className="text-gray text-lg">
              We provide professional roof replacement services across Gastonia and all of Gaston County.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Gastonia Neighborhoods */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Gastonia Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {gastoniaNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Cities We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {nearbyCities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gastonia Specific Content */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Roof Replacement Expertise for Gaston County Homes
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray text-lg mb-6">
                Gastonia&apos;s diverse housing stock - from historic mill village homes to modern developments -
                requires roofing expertise that understands local construction styles and climate challenges.
                Our team has extensive experience with every type of roof found throughout Gaston County.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-3 text-lg">Gaston County Climate Challenges</h3>
                  <ul className="space-y-2 text-gray">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Hot, humid summers that strain roofing materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Severe thunderstorms with damaging winds and hail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Heavy rainfall requiring proper drainage solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Occasional ice events in winter months</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-3 text-lg">Gastonia Home Styles We Serve</h3>
                  <ul className="space-y-2 text-gray">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Historic downtown and mill village homes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Ranch-style homes throughout established neighborhoods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Modern two-story homes in newer developments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Rural properties with larger roof spans</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray text-lg">
                Whether your home is in Downtown Gastonia, the established neighborhoods near Firestone,
                the growing communities in West Gastonia, or the surrounding towns like Belmont, Mount Holly,
                and Cramerton, our certified installers deliver the same exceptional quality and protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Recent Roof Replacements in Gaston County
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roof replacement projects throughout Gastonia and the surrounding area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed roof replacement project in Gastonia NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle roof replacement in Gaston County"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of new roof installation in Gastonia NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roof replacement work in Gastonia area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Turner Family */}
      <MeetTheFamily variant="full" />

      {/* Service City Links */}
      <ServiceCityLinks
        city="Gastonia"
        citySlug="gastonia-nc"
        title="Roofing Services in Gastonia NC"
        subtitle="Looking for a specific roofing service? Our Gastonia team offers comprehensive solutions for every roofing need in Gaston County."
      />

      {/* Personal Note from James */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-primary/5 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-primary">JT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">A Note from James Turner, Owner</h3>
                <p className="text-gray italic mb-4">
                  &ldquo;{TURNER_NOTES.james.onQuality}&rdquo;
                </p>
                <p className="text-gray">
                  Gastonia and Gaston County have been good to our family, and we take pride in serving this
                  community with the same dedication we bring to every project. When you need a new roof,
                  you deserve honest advice and quality work - not a high-pressure sales pitch. That&apos;s the
                  Best Roofing Now difference, and it&apos;s something we bring to every home we work on in Gastonia.
                </p>
                <p className="text-primary font-semibold mt-4">
                  Call us today at {SITE_CONFIG.phone} - I&apos;d love to hear from you.
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
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roof Replacement FAQs for Gastonia NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof replacement in Gastonia and Gaston County.
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

      {/* Project Gallery Strip */}
      <GeoProjectGalleryStrip
        pageType="location"
        city="Gastonia"
        slug="roof-replacement-gastonia-nc"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Gastonia"

        state="NC"

        citySlug="gastonia-nc"

        service="Roof Replacement"

      />

      <CTASection
        title="Ready for Your New Roof in Gastonia?"
        subtitle="Get a free, no-obligation estimate for your roof replacement. Our certified team will assess your Gaston County home and provide honest recommendations with transparent pricing."
      />
    </>
  );
}
