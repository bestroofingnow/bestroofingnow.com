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
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Replacement Charlotte NC | New Roof Installation | Best Roofing Now',
  description:
    'Complete roof replacement services in Charlotte NC. Full tear-off and new roof installation with premium materials. GAF, CertainTeed & Owens Corning certified. Financing available. Free estimates!',
  keywords: [
    'roof replacement charlotte nc',
    'new roof charlotte nc',
    'roof replacement cost charlotte',
    'full roof replacement charlotte nc',
    'complete roof replacement charlotte',
    'roof replacement company charlotte',
    'affordable roof replacement charlotte nc',
    'quality roof replacement charlotte',
    'roof replacement services charlotte nc',
    'professional roof replacement charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-replacement-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Replacement Charlotte NC | New Roof Installation | Best Roofing Now',
    description:
      'Complete roof replacement with full tear-off and premium new roof installation in Charlotte NC. Certified installers, industry-leading warranties, and flexible financing options.',
    url: `${SITE_CONFIG.url}/roof-replacement-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero4,
        width: 1200,
        height: 630,
        alt: 'Professional roof replacement Charlotte NC - Best Roofing Now crew installing a new roof',
      },
    ],
  },
};

// Signs you need a roof replacement
const replacementSigns = [
  {
    icon: Clock,
    title: 'Age of Your Roof',
    description: 'Most asphalt shingle roofs last 20-25 years. If your roof is approaching or past this age, replacement is often more cost-effective than repeated repairs.',
  },
  {
    icon: Droplets,
    title: 'Multiple Leaks',
    description: 'Recurring leaks in different areas indicate systemic failure. When the underlayment and decking are compromised, a full replacement is the only lasting solution.',
  },
  {
    icon: Layers,
    title: 'Curling or Missing Shingles',
    description: 'Widespread shingle damage, curling, buckling, or granule loss across large areas signals the end of your roof\'s protective life.',
  },
  {
    icon: ThermometerSun,
    title: 'High Energy Bills',
    description: 'A failing roof allows conditioned air to escape. If your energy bills have increased significantly, your roof\'s insulation value may be compromised.',
  },
  {
    icon: AlertTriangle,
    title: 'Sagging Roof Deck',
    description: 'A sagging roofline indicates structural damage from prolonged moisture infiltration. This requires immediate attention and full replacement.',
  },
  {
    icon: Home,
    title: 'Daylight Through Roof Boards',
    description: 'If you see light coming through your attic, your roof deck has holes or gaps that compromise your entire roofing system.',
  },
];

// Roof replacement process steps
const replacementProcess = [
  {
    step: 1,
    title: 'Free Inspection & Estimate',
    description: 'Our certified inspector thoroughly examines your current roof, attic, and ventilation. We provide a detailed written estimate with material options and transparent pricing.',
  },
  {
    step: 2,
    title: 'Material Selection',
    description: 'Choose from premium shingles, metal roofing, or specialty materials. We help you select the best option for your home\'s style, budget, and Charlotte\'s climate.',
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
    description: 'We perform a thorough final inspection, run magnetic sweeps for nails, and leave your property cleaner than we found it. Your warranty documentation is provided.',
  },
];

// Roofing material options
const materialOptions = [
  {
    icon: Layers,
    title: 'Architectural Shingles',
    description: 'Premium dimensional shingles offering enhanced durability, wind resistance up to 130 MPH, and beautiful curb appeal. 30-50 year warranties available.',
    priceRange: '$8,000 - $15,000',
    lifespan: '30-50 years',
    popular: true,
  },
  {
    icon: Shield,
    title: 'Luxury/Designer Shingles',
    description: 'Premium shingles that replicate the look of slate or cedar shake. Superior protection with stunning aesthetics and lifetime warranties.',
    priceRange: '$15,000 - $25,000',
    lifespan: '50+ years',
    popular: false,
  },
  {
    icon: Sparkles,
    title: 'Metal Roofing',
    description: 'Standing seam and metal shingle options. Exceptional longevity, energy efficiency, and modern aesthetics. Ideal for Charlotte\'s climate.',
    priceRange: '$18,000 - $35,000',
    lifespan: '50-70 years',
    popular: false,
  },
  {
    icon: Home,
    title: '3-Tab Shingles',
    description: 'Budget-friendly option that still provides solid protection. Best suited for rental properties, sheds, or budget-conscious projects.',
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
    description: 'Measured in roofing squares (100 sq ft). Multiple levels, steep slopes, and complex designs increase labor time and materials.',
  },
  {
    icon: Truck,
    title: 'Material Choice',
    description: 'Architectural shingles, designer shingles, and metal roofing each have different price points. Premium materials offer longer warranties.',
  },
  {
    icon: Hammer,
    title: 'Deck Repairs',
    description: 'Rotted or damaged decking must be replaced. Most roofs need some repairs, which adds to the total project cost.',
  },
  {
    icon: FileCheck,
    title: 'Permits & Codes',
    description: 'Charlotte requires roofing permits. We handle all permitting and ensure your new roof meets current building codes.',
  },
];

// Charlotte neighborhoods served
const charlotteNeighborhoods = [
  'Myers Park',
  'Dilworth',
  'South End',
  'NoDa',
  'Plaza Midwood',
  'Ballantyne',
  'University City',
  'Cotswold',
  'Elizabeth',
  'Eastover',
  'SouthPark',
  'Uptown Charlotte',
  'Wesley Heights',
  'Fourth Ward',
  'Cherry',
  'Madison Park',
  'Montford',
  'Chantilly',
  'Commonwealth',
  'Sedgefield',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Pineville', href: '/locations/pineville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
  { name: 'Indian Trail', href: '/locations/indian-trail-nc' },
];

// FAQs about roof replacement
const faqs = [
  {
    question: 'How much does a roof replacement cost in Charlotte NC?',
    answer:
      'Roof replacement costs in Charlotte typically range from $8,000 to $25,000 for most residential homes, depending on roof size, material choice, and complexity. The average Charlotte home (1,500-2,500 sq ft roof) costs between $10,000 and $18,000 for architectural shingles. We provide free, detailed estimates with no hidden fees.',
  },
  {
    question: 'How long does a complete roof replacement take?',
    answer:
      'Most residential roof replacements in Charlotte are completed in 1-3 days. Larger homes, complex roof designs, or unexpected deck repairs may extend the timeline to 4-5 days. We work efficiently while maintaining our quality standards and always communicate the expected timeline upfront.',
  },
  {
    question: 'Do I need to be home during the roof replacement?',
    answer:
      'No, you do not need to be home during your roof replacement. We just need access to your property and electrical outlets. Many homeowners prefer to be away due to the noise. We will contact you before starting, keep you updated throughout, and walk you through the completed work.',
  },
  {
    question: 'What warranties come with a new roof from Best Roofing Now?',
    answer:
      'Your new roof includes both manufacturer material warranties (25-50 years depending on product) and our workmanship warranty. As certified installers for CertainTeed, GAF, and Owens Corning, we can offer extended warranties including GAF Golden Pledge (50-year non-prorated) and CertainTeed SureStart PLUS coverage.',
  },
  {
    question: 'Can I stay in my home during roof replacement?',
    answer:
      'Yes, you can stay in your home during roof replacement. The work happens outside, so your daily routine is mostly unaffected. Expect some noise during tear-off and installation (typically 7 AM - 6 PM). We recommend removing wall decorations near the ceiling and expect some vibration. Pets may be more comfortable in an interior room or away for the day.',
  },
  {
    question: 'Will my insurance cover roof replacement?',
    answer:
      'Insurance typically covers roof replacement if the damage was caused by a covered peril like hail, wind, or fallen trees. Normal wear and aging are generally not covered. We provide detailed damage documentation and work directly with insurance adjusters to help maximize your claim. We offer free storm damage inspections.',
  },
  {
    question: 'How do I know if I need replacement vs. repair?',
    answer:
      'Generally, if your roof is under 15 years old with isolated damage, repairs make sense. If your roof is 20+ years old, has multiple problem areas, widespread shingle deterioration, or has had repeated repairs, replacement is usually more cost-effective long-term. Our free inspection includes an honest assessment of the best option for your situation.',
  },
  {
    question: 'Do you offer financing for roof replacement?',
    answer:
      'Yes! We offer flexible financing options to make roof replacement affordable. Options include 0% interest promotional periods, low monthly payments, and terms up to 144 months. Most homeowners qualify, and approval takes just minutes. We can discuss financing during your free estimate.',
  },
];

export default function RoofReplacementCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Replacement Charlotte NC', url: `${SITE_CONFIG.url}/roof-replacement-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-replacement-charlotte-nc`}
        pageName="Roof Replacement Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does a new roof cost in Charlotte NC?',
            answer: 'A new roof in Charlotte NC costs $8,000-$25,000 for most homes, with the average being $12,000-$18,000 for architectural shingles on a typical 2,000 sq ft home. Metal roofing costs $18,000-$35,000. Best Roofing Now offers financing options with payments as low as $99/month. Call (704) 605-6047 for a free estimate.',
            speakableAnswer: 'A new roof in Charlotte costs $8,000 to $25,000 on average. Best Roofing Now offers financing from $99 per month. Call 704-605-6047 for a free estimate.',
          },
          {
            question: 'Who is the best roofing company for roof replacement in Charlotte NC?',
            answer: 'Best Roofing Now is the top-rated roof replacement company in Charlotte NC with 5-star Google reviews, BBB A+ accreditation, and CertainTeed, GAF, and Owens Corning certifications. This veteran-owned company offers up to 50-year warranties and has completed 500+ roof replacements in Charlotte.',
            speakableAnswer: 'Best Roofing Now is Charlotte\'s top-rated roof replacement company. 5-star rated, veteran-owned, with 50-year warranties available. Call 704-605-6047.',
          },
          {
            question: 'How long does a roof replacement take in Charlotte?',
            answer: 'Most roof replacements in Charlotte take 1-3 days to complete. Larger homes or complex roof designs may take 4-5 days. Best Roofing Now uses experienced crews to work efficiently while maintaining quality standards. Weather delays are communicated promptly.',
            speakableAnswer: 'Roof replacement in Charlotte takes 1 to 3 days for most homes. Best Roofing Now completes work efficiently with minimal disruption.',
          },
          {
            question: 'Does insurance cover roof replacement in Charlotte NC?',
            answer: 'Insurance covers roof replacement in Charlotte if damage was caused by storms, hail, wind, or fallen trees. Best Roofing Now provides free storm damage inspections, helps document damage, and works directly with insurance adjusters to maximize your claim. You typically pay only your deductible.',
            speakableAnswer: 'Yes, insurance covers storm-related roof replacement in Charlotte. Best Roofing Now helps with claims. You typically pay only your deductible.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero4}
            alt="Professional roof replacement Charlotte NC - Best Roofing Now crew installing a new roof"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">Certified Installers | Financing Available</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Replacement <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Complete tear-off and new roof installation by certified professionals
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When repairs are no longer enough, trust Best Roofing Now for your complete roof replacement in Charlotte.
              We use premium materials from CertainTeed, GAF, and Owens Corning, backed by industry-leading warranties
              and our expert installation.
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

      {/* When You Need Replacement Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              When Do You Need a Roof Replacement?
            </h2>
            <p className="text-gray text-lg">
              Sometimes repairs just are not enough. Here are the signs that indicate your Charlotte home
              needs a complete roof replacement rather than another patch job.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {replacementSigns.map((sign) => (
              <div
                key={sign.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow"
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
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Roof Replacement Process
            </h2>
            <p className="text-gray text-lg">
              From initial inspection to final cleanup, here is what to expect when Best Roofing Now
              replaces your roof in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {replacementProcess.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl p-6 shadow-md relative"
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
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Material Options
            </h2>
            <p className="text-gray text-lg">
              Choose from premium roofing materials suited to Charlotte&apos;s climate. All options include
              professional installation and manufacturer warranties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {materialOptions.map((material) => (
              <div
                key={material.title}
                className={`p-6 rounded-xl border-2 ${material.popular ? 'border-accent bg-accent/5' : 'border-gray-200 bg-light'}`}
              >
                {material.popular && (
                  <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Most Popular
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
                  As CertainTeed SELECT ShingleMaster, GAF Factory-Certified, and Owens Corning Preferred
                  contractors, we can offer enhanced warranties that cover both materials and workmanship
                  for maximum protection.
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
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Cost Factors */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What Affects Roof Replacement Cost?
              </h2>
              <p className="text-gray text-lg mb-8">
                Several factors determine the final cost of your new roof. We provide transparent,
                itemized estimates so you know exactly what you are paying for.
              </p>
              <div className="space-y-4">
                {costFactors.map((factor) => (
                  <div key={factor.title} className="flex items-start gap-4 bg-white p-4 rounded-lg">
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
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
                <DollarSign className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Flexible Financing</span>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">
                Affordable Payment Options
              </h3>
              <p className="text-gray mb-6">
                Do not let budget concerns delay your roof replacement. We offer flexible financing
                options to fit your needs.
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
                Ready for a New Roof in Charlotte?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from our certified roof replacement team.
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
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Homeowners Choose Us for Roof Replacement
              </h2>
              <p className="text-gray text-lg mb-8">
                When investing in a new roof, you want a company you can trust. Best Roofing Now has
                earned our reputation through quality work and honest service.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">5-Star Rated</h3>
                    <p className="text-gray text-sm">{SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Charlotte homeowners.</p>
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
                    <p className="text-gray text-sm">Military values of integrity, discipline, and excellence.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">{SITE_CONFIG.roofsInstalled}+ Roofs</h3>
                    <p className="text-gray text-sm">Extensive experience with all roof types and materials.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Completed roof replacement in Charlotte NC by Best Roofing Now"
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
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Replacement Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We provide professional roof replacement services across the Greater Charlotte region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-white rounded-xl p-6">
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

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Recent Roof Replacements in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roof replacement projects throughout the Charlotte area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed roof replacement project in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle roof replacement in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of new roof installation in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roof replacement work in Charlotte area"
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
                Roof Replacement FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof replacement in Charlotte NC.
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

      {/* Service City Links */}
      <ServiceCityLinks
        city="Charlotte"
        citySlug="charlotte-nc"
        title="Complete Roofing Services in Charlotte NC"
        subtitle="Explore all our roofing solutions for Charlotte homes and businesses."
      />

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Charlotte"
        service="Roof Replacement"
        serviceSlug="roof-replacement"
        title="Roof Replacement in Nearby Cities"
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for Your New Roof?"
        subtitle="Get a free, no-obligation estimate for your roof replacement. Our certified team will assess your roof and provide honest recommendations with transparent pricing."
      />
    </>
  );
}
