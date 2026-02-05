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
  Users,
  Clock,
  Wrench,
  Home,
  Building2,
  CloudRain,
  MapPin,
  Layers,
  PlusCircle,
  AlertTriangle,
  DollarSign,
  Hammer,
  FileCheck,
  Truck,
  Sparkles,
  ThermometerSun,
  Droplets,
  Wind,
  Ruler,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { MeetTheFamily } from '@/components/sections/MeetTheFamily';
import { TURNER_NOTES } from '@/lib/turner-family';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'New Roof Install Charlotte NC',
  description:
    'New roof installation in Charlotte NC for first-time builds and new construction. Complete roofing system installation from the decking up. Shingle, metal, and tile options. BBB A+ rated, veteran-owned. Free estimates!',
  keywords: [
    'new roof installation charlotte nc',
    'new roof installation charlotte',
    'new roof charlotte nc',
    'new roof installation near me charlotte',
    'complete roof installation charlotte nc',
    'first time roof installation charlotte',
    'new construction roof charlotte nc',
    'new roof cost charlotte nc',
    'new shingle roof installation charlotte',
    'new metal roof installation charlotte nc',
    'professional roof installation charlotte',
    'best new roof installation charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/new-roof-installation-charlotte-nc`,
  },
  openGraph: {
    title: 'New Roof Installation Charlotte NC | First-Time Roof & New Construction | Best Roofing Now',
    description:
      'New roof installation in Charlotte NC for first-time builds, new construction, and complete roofing system installations with premium materials and industry-leading warranties.',
    url: `${SITE_CONFIG.url}/new-roof-installation-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero5,
        width: 1200,
        height: 630,
        alt: 'New roof installation Charlotte NC - Best Roofing Now expert installers',
      },
    ],
  },
};

// What makes new roof installation different
const newInstallationDifferences = [
  {
    icon: PlusCircle,
    title: 'Complete System Installation',
    description:
      'Unlike repairs that patch existing issues, a new roof installation involves installing an entirely new roofing system from the decking up - including underlayment, flashing, ventilation, and roofing materials.',
  },
  {
    icon: Layers,
    title: 'Full Tear-Off Included',
    description:
      'New installations typically include complete removal of all existing roofing materials down to the bare decking, allowing for thorough inspection and any necessary deck repairs before the new system goes on.',
  },
  {
    icon: FileCheck,
    title: 'Code Compliance',
    description:
      'New roof installations must meet current Charlotte and Mecklenburg County building codes, which may be more stringent than when your original roof was installed. We ensure full compliance.',
  },
  {
    icon: Shield,
    title: 'Maximum Warranty Protection',
    description:
      'New installations qualify for the best manufacturer warranties - up to 50 years on materials plus extended workmanship coverage. Repairs and overlays typically have limited warranty options.',
  },
];

// Signs you need a completely new roof
const signsYouNeedNewRoof = [
  {
    icon: Clock,
    title: 'Roof Age Over 20 Years',
    description:
      'If your roof is approaching or exceeding 20-25 years old (the typical lifespan of asphalt shingles), a new installation is usually more cost-effective than continued repairs.',
  },
  {
    icon: Droplets,
    title: 'Multiple Leak Points',
    description:
      'When leaks appear in multiple locations, it indicates widespread underlayment failure. Patching individual leaks becomes a losing battle when the entire system is compromised.',
  },
  {
    icon: Layers,
    title: 'Widespread Shingle Damage',
    description:
      'Curling, cracking, or missing shingles across 25% or more of your roof signals that the materials have reached end of life and need complete replacement.',
  },
  {
    icon: AlertTriangle,
    title: 'Sagging Roof Deck',
    description:
      'A visibly sagging roofline indicates structural damage from prolonged water infiltration. This requires a full tear-off to assess and repair the underlying structure.',
  },
  {
    icon: ThermometerSun,
    title: 'Excessive Granule Loss',
    description:
      'Finding large amounts of granules in your gutters means shingles have lost their protective coating. Without granules, shingles deteriorate rapidly from UV exposure.',
  },
  {
    icon: Wind,
    title: 'Storm Damage Beyond Repair',
    description:
      'Major storm events like hurricanes or severe hail can cause damage so extensive that insurance typically covers a complete new roof installation rather than piecemeal repairs.',
  },
];

// New roof installation process
const installationProcess = [
  {
    step: 1,
    title: 'Free Comprehensive Inspection',
    description:
      'Our certified inspector examines your current roof, attic space, ventilation, and structural components. We provide a detailed written assessment with photos documenting all findings.',
  },
  {
    step: 2,
    title: 'Material Selection Consultation',
    description:
      'We help you choose the perfect roofing material for your home, budget, and aesthetic preferences. We carry premium products from CertainTeed, GAF, and Owens Corning with various style and color options.',
  },
  {
    step: 3,
    title: 'Permit & Scheduling',
    description:
      'We handle all permit applications with Mecklenburg County and schedule your installation for optimal weather conditions. Most projects begin within 1-2 weeks of contract signing.',
  },
  {
    step: 4,
    title: 'Complete Tear-Off',
    description:
      'Our crew removes all existing roofing materials down to the bare decking. Tarps protect your landscaping and we use magnetic sweepers to collect every nail.',
  },
  {
    step: 5,
    title: 'Deck Inspection & Repair',
    description:
      'Every board is inspected for rot, water damage, and structural integrity. Any compromised sections are replaced with new plywood before installation begins.',
  },
  {
    step: 6,
    title: 'Ice & Water Shield Installation',
    description:
      'We install ice and water shield membrane in vulnerable areas - valleys, around penetrations, and along eaves - providing an extra layer of protection against water infiltration.',
  },
  {
    step: 7,
    title: 'Synthetic Underlayment',
    description:
      'Premium synthetic underlayment covers the entire roof deck, providing superior moisture protection compared to traditional felt paper and better durability during installation.',
  },
  {
    step: 8,
    title: 'Flashing & Drip Edge',
    description:
      'New metal flashing is installed around all penetrations (vents, pipes, chimneys) and drip edge protects the fascia. Proper flashing prevents the most common leak points.',
  },
  {
    step: 9,
    title: 'Roofing Material Installation',
    description:
      'Starter strips, field shingles (or chosen material), and ridge caps are installed according to manufacturer specifications, ensuring your warranty remains valid.',
  },
  {
    step: 10,
    title: 'Ventilation System',
    description:
      'Proper attic ventilation is critical for roof longevity. We install ridge vents, soffit vents, or powered ventilators as needed to maintain optimal airflow.',
  },
  {
    step: 11,
    title: 'Final Inspection & Cleanup',
    description:
      'Our project manager performs a thorough quality inspection. We clean all debris, run magnetic sweeps for stray nails, and ensure your property looks better than when we arrived.',
  },
  {
    step: 12,
    title: 'Warranty Registration',
    description:
      'We complete all manufacturer warranty registration and provide you with documentation for your new roof, including maintenance recommendations to maximize its lifespan.',
  },
];

// Material options for new roof installation
const materialOptions = [
  {
    icon: Layers,
    title: 'Architectural Asphalt Shingles',
    description:
      'The most popular choice for Charlotte homes. These dimensional shingles offer excellent durability, wind resistance up to 130 MPH, and beautiful curb appeal. Multiple color options and styles available from CertainTeed, GAF, and Owens Corning.',
    priceRange: '$8,000 - $15,000',
    lifespan: '30-50 years',
    features: ['Wind resistant to 130 MPH', 'Algae-resistant options', 'Wide color selection', 'Best value'],
    popular: true,
  },
  {
    icon: Shield,
    title: 'Luxury Designer Shingles',
    description:
      'Premium shingles that replicate the look of natural slate or cedar shake without the maintenance or weight concerns. Ideal for upscale homes in Myers Park, Dilworth, and Eastover where aesthetics are paramount.',
    priceRange: '$15,000 - $28,000',
    lifespan: '50+ years',
    features: ['Slate/shake appearance', 'Lifetime warranties', 'Superior impact resistance', 'Premium aesthetics'],
    popular: false,
  },
  {
    icon: Sparkles,
    title: 'Standing Seam Metal',
    description:
      'Modern, sleek appearance with exceptional longevity. Standing seam metal roofs are growing in popularity for Charlotte homes, offering superior energy efficiency and virtually maintenance-free performance.',
    priceRange: '$18,000 - $35,000',
    lifespan: '50-70 years',
    features: ['Energy efficient', 'Fire resistant', 'Minimal maintenance', 'Modern appearance'],
    popular: false,
  },
  {
    icon: Home,
    title: 'Metal Shingles',
    description:
      'Combines the traditional shingle appearance with metal durability. Metal shingles look like conventional roofing but offer dramatically longer lifespan and better storm protection.',
    priceRange: '$14,000 - $25,000',
    lifespan: '40-60 years',
    features: ['Traditional appearance', 'Metal durability', 'Lightweight', 'Storm resistant'],
    popular: false,
  },
  {
    icon: Building2,
    title: 'Concrete & Clay Tile',
    description:
      'For Mediterranean, Spanish, or Southwestern style homes, tile roofing provides unmatched elegance and longevity. Requires additional structural support but offers lifetime performance.',
    priceRange: '$25,000 - $50,000',
    lifespan: '75-100 years',
    features: ['Distinctive style', 'Extreme longevity', 'Fire resistant', 'Zero maintenance'],
    popular: false,
  },
  {
    icon: Ruler,
    title: 'Synthetic Slate & Shake',
    description:
      'Get the high-end look of natural slate or cedar shake without the weight, cost, or maintenance. Synthetic options are made from recycled materials and offer excellent durability.',
    priceRange: '$12,000 - $22,000',
    lifespan: '40-50 years',
    features: ['Authentic appearance', 'Lightweight', 'Eco-friendly materials', 'Lower cost than natural'],
    popular: false,
  },
];

// Timeline expectations
const timelineExpectations = [
  {
    size: 'Small Home (Under 1,500 sq ft)',
    duration: '1-2 days',
    description: 'Smaller ranch homes and townhouses can typically be completed in a single day, weather permitting.',
  },
  {
    size: 'Average Home (1,500-2,500 sq ft)',
    duration: '1-2 days',
    description: 'Most Charlotte homes fall in this range. We typically complete tear-off and installation within two days.',
  },
  {
    size: 'Large Home (2,500-4,000 sq ft)',
    duration: '2-3 days',
    description: 'Larger homes with more complex roof designs require additional time for proper installation.',
  },
  {
    size: 'Estate/Custom Home (4,000+ sq ft)',
    duration: '3-5 days',
    description: 'Large custom homes with multiple roof sections, steep pitches, and architectural features need more time.',
  },
];

// Cost factors for new roof installation
const costFactors = [
  {
    icon: Ruler,
    title: 'Roof Size (Square Footage)',
    description:
      'Roof size is measured in "squares" (100 sq ft each). The average Charlotte home has 20-30 squares. Larger roofs require more materials and labor.',
  },
  {
    icon: Layers,
    title: 'Roof Pitch & Complexity',
    description:
      'Steeper roofs require additional safety equipment and more time. Complex designs with multiple valleys, dormers, and angles increase labor costs.',
  },
  {
    icon: Truck,
    title: 'Material Selection',
    description:
      'Your choice of roofing material has the biggest impact on price. Architectural shingles are most affordable, while metal and tile cost significantly more.',
  },
  {
    icon: Hammer,
    title: 'Deck Repairs',
    description:
      'Rotted or damaged decking discovered during tear-off must be replaced. Most roofs need some repairs, typically adding $500-$2,500 to the project.',
  },
  {
    icon: Wind,
    title: 'Ventilation Upgrades',
    description:
      'Proper attic ventilation extends roof life and improves energy efficiency. Adding or upgrading ventilation may add $500-$1,500 but is a worthwhile investment.',
  },
  {
    icon: FileCheck,
    title: 'Permits & Inspections',
    description:
      'Charlotte requires roofing permits for new installations. Permit costs typically range from $150-$400 and are included in our estimates.',
  },
];

// Warranty information
const warrantyInfo = [
  {
    title: 'Manufacturer Material Warranty',
    duration: '25-50 years',
    description:
      'Covers defects in roofing materials. Premium products like GAF HDZ or CertainTeed Landmark Pro include 50-year limited lifetime coverage.',
  },
  {
    title: 'Wind Warranty',
    duration: 'Up to 130 MPH',
    description:
      'Architectural shingles installed by certified contractors include wind warranties covering speeds up to 130 MPH - critical for Charlotte storm season.',
  },
  {
    title: 'Workmanship Warranty',
    duration: '10-25 years',
    description:
      'Our workmanship warranty covers installation defects. As certified installers, we can offer extended workmanship coverage up to 25 years.',
  },
  {
    title: 'Enhanced System Warranties',
    duration: 'Lifetime',
    description:
      'Programs like GAF Golden Pledge and CertainTeed SureStart PLUS provide comprehensive coverage combining materials and workmanship in one package.',
  },
];

// Why choose us for new installation
const whyChooseUs = [
  {
    icon: Award,
    title: 'Triple Certified',
    description: 'CertainTeed SELECT, GAF Factory-Certified, and Owens Corning Preferred Contractor status.',
  },
  {
    icon: Star,
    title: '5-Star Rated',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte homeowners.`,
  },
  {
    icon: Shield,
    title: 'BBB A+ Rated',
    description: 'Better Business Bureau accredited with A+ rating and zero complaints filed.',
  },
  {
    icon: Users,
    title: 'Experienced Crews',
    description: 'Our installation teams have years of experience with all roofing materials and styles.',
  },
  {
    icon: Clock,
    title: 'On-Time Completion',
    description: 'We respect your schedule and complete most installations in 1-3 days as promised.',
  },
  {
    icon: CheckCircle,
    title: 'Complete Cleanup',
    description: 'Thorough site cleanup with magnetic nail sweeps. Your property will look better than we found it.',
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
  'Steele Creek',
  'Providence',
  'Arboretum',
  'Stonecrest',
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

// Comprehensive FAQs about new roof installation
const faqs = [
  {
    question: 'How much does a new roof installation cost in Charlotte NC?',
    answer:
      'New roof installation in Charlotte typically costs between $8,000 and $25,000 for most residential homes. The exact cost depends on roof size (measured in squares - 100 sq ft each), material selection, roof complexity, and any necessary deck repairs. Architectural shingles are the most cost-effective option at $8,000-$15,000, while metal roofing runs $18,000-$35,000 and tile can exceed $40,000. We provide free, detailed estimates with transparent pricing so you know exactly what to expect.',
  },
  {
    question: 'How long does a new roof installation take in Charlotte?',
    answer:
      'Most new roof installations in Charlotte are completed in 1-3 days for average-sized homes (1,500-2,500 square feet). Smaller homes may be completed in a single day, while larger custom homes with complex roof designs may take 3-5 days. Weather is the biggest variable - we avoid installing during rain or extreme conditions to ensure proper material adhesion and worker safety. We provide accurate timelines during your estimate and communicate any changes promptly.',
  },
  {
    question: 'What is the difference between a new roof installation and roof replacement?',
    answer:
      'In most contexts, "new roof installation" and "roof replacement" are used interchangeably to describe complete tear-off and installation of a new roofing system. However, "new roof installation" may also refer to installing a roof on new construction where no previous roof exists. Both involve installing a complete roofing system including underlayment, flashing, ventilation, and roofing materials. The key distinction from "roof repair" is that new installation replaces the entire system rather than fixing specific problem areas.',
  },
  {
    question: 'What roofing material is best for Charlotte NC weather?',
    answer:
      'For Charlotte\'s climate with hot humid summers, occasional severe storms, and mild winters, architectural asphalt shingles remain the best overall choice for most homes. They handle temperature extremes well, provide excellent wind resistance (up to 130 MPH), and offer the best value. Metal roofing is gaining popularity for its superior longevity and energy efficiency. For premium homes, designer shingles or synthetic slate provide exceptional aesthetics with excellent performance. We help each customer choose based on their specific priorities.',
  },
  {
    question: 'Do I need to be home during the new roof installation?',
    answer:
      'No, you do not need to be home during your new roof installation. We just need access to your property and exterior electrical outlets if possible. Many homeowners prefer to be away due to the noise from tear-off and installation (typically 7 AM - 6 PM). We will contact you before starting work, keep you updated via text or phone throughout the process, and schedule a walkthrough when the job is complete.',
  },
  {
    question: 'What warranties come with a new roof installation from Best Roofing Now?',
    answer:
      'Your new roof includes comprehensive warranty protection. Manufacturer material warranties range from 25-50 years depending on the product selected, with premium options like GAF HDZ and CertainTeed Landmark Pro offering 50-year limited lifetime coverage. As certified installers for major manufacturers, we can offer extended warranties including GAF Golden Pledge (50-year non-prorated materials plus 25-year workmanship) and CertainTeed SureStart PLUS. Our standard workmanship warranty covers installation for 10 years.',
  },
  {
    question: 'How do I know if I need a completely new roof vs. repairs?',
    answer:
      'Generally, repairs make sense if your roof is under 15 years old with isolated damage affecting less than 25% of the surface. You likely need a new roof if: your roof is over 20 years old, you have multiple leaks in different areas, there is widespread shingle deterioration (curling, cracking, granule loss), you see daylight through the attic, or your roof deck is sagging. Our free inspection includes an honest assessment - we will never recommend replacement when repairs will suffice.',
  },
  {
    question: 'Will my insurance cover a new roof installation?',
    answer:
      'Insurance typically covers new roof installation if the damage was caused by a covered peril such as hail, wind, fallen trees, or fire. Standard wear and aging are generally not covered. After storm damage, we provide detailed documentation and photos, work directly with your insurance adjuster, and advocate for fair settlements. Many Charlotte homes qualify for insurance-covered roof replacement after severe storms - we offer free storm damage inspections to assess your situation.',
  },
  {
    question: 'Do you handle permits for new roof installation in Charlotte?',
    answer:
      'Yes, we handle all permit requirements for new roof installation in Charlotte and Mecklenburg County. Roof replacement requires a building permit to ensure work meets current codes. The permit fee (typically $150-$400) is included in our estimate. We submit the permit application, coordinate required inspections, and ensure your new roof meets all local building codes. You do not need to deal with any permitting paperwork.',
  },
  {
    question: 'Can you install a new roof in winter in Charlotte NC?',
    answer:
      'Yes, we install new roofs year-round in Charlotte. While we prefer temperatures above 40 degrees for optimal shingle adhesion (the sealant strips activate with heat), Charlotte\'s relatively mild winters allow for installation most days. Our experienced crews know how to work safely in cooler weather and we use hand-sealing techniques when needed. We may need to reschedule around rain or the occasional ice/snow event, but these are rare in Charlotte.',
  },
];

export default function NewRoofInstallationCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'New Roof Installation Charlotte NC', url: `${SITE_CONFIG.url}/new-roof-installation-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero5}
            alt="New roof installation Charlotte NC - Best Roofing Now expert installation team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <PlusCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">New Roof Experts | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              New Roof Installation <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Complete new roof installation with {SITE_CONFIG.roofsInstalled}+ roofs completed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in professional new roof installation throughout Charlotte NC.
              Whether you are building a new home, replacing an aging roof, or need a complete tear-off
              after storm damage, our certified installers deliver exceptional quality with premium
              materials and industry-leading warranties.
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
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Certified Installers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes New Installation Different */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Makes New Roof Installation Different?
            </h2>
            <p className="text-gray text-lg">
              A new roof installation is more than just putting shingles on your home. It is a complete
              roofing system designed to protect your property for decades. Here is what sets new
              installation apart from repairs or overlays.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {newInstallationDifferences.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark text-lg mb-2">{item.title}</h3>
                <p className="text-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Need a New Roof */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Signs You Need a Completely New Roof
            </h2>
            <p className="text-gray text-lg">
              Not sure if you need a new roof or just repairs? Here are the telltale signs that indicate
              your Charlotte home needs a complete new roof installation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signsYouNeedNewRoof.map((sign) => (
              <div
                key={sign.title}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
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
            <p className="text-gray mb-4">Not sure about your roof&apos;s condition?</p>
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

      {/* Installation Process */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our New Roof Installation Process
            </h2>
            <p className="text-gray text-lg">
              We follow a comprehensive 12-step process to ensure every new roof installation meets our
              exacting standards and provides lasting protection for your home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {installationProcess.map((item) => (
              <div
                key={item.step}
                className="bg-light rounded-xl p-5 relative hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="font-bold text-dark mb-2 mt-2 text-sm">{item.title}</h3>
                <p className="text-gray text-xs leading-relaxed">{item.description}</p>
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
              New Roof Material Options
            </h2>
            <p className="text-gray text-lg">
              Choose from premium roofing materials suited to Charlotte&apos;s climate. All options include
              professional installation and manufacturer warranties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materialOptions.map((material) => (
              <div
                key={material.title}
                className={`p-6 rounded-xl border-2 ${material.popular ? 'border-accent bg-white shadow-lg' : 'border-gray-200 bg-white'}`}
              >
                {material.popular && (
                  <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Most Popular in Charlotte
                  </span>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${material.popular ? 'bg-accent/20' : 'bg-primary/10'}`}>
                    <material.icon className={`w-6 h-6 ${material.popular ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">{material.title}</h3>
                    <div className="flex gap-4 text-xs mt-1">
                      <span className="text-accent font-semibold">{material.priceRange}</span>
                      <span className="text-gray">{material.lifespan}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray text-sm mb-4">{material.description}</p>
                <ul className="space-y-2">
                  {material.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-primary/5 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="font-bold text-dark mb-2">Not Sure Which Material Is Right for You?</h3>
                <p className="text-gray text-sm">
                  Our experts will help you choose the best roofing material based on your home&apos;s style,
                  your budget, and your long-term goals. Schedule a free consultation to explore your options.
                </p>
              </div>
              <Button
                href="/contact"
                variant="primary"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Expectations */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                New Roof Installation Timeline
              </h2>
              <p className="text-gray text-lg mb-8">
                We understand you want your new roof completed quickly without sacrificing quality.
                Here are typical timelines based on home size and complexity.
              </p>
              <div className="space-y-4">
                {timelineExpectations.map((item) => (
                  <div key={item.size} className="flex items-start gap-4 bg-light p-4 rounded-lg">
                    <div className="w-16 text-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary mx-auto mb-1" />
                      <span className="text-sm font-bold text-accent">{item.duration}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.size}</h3>
                      <p className="text-gray text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Completed new roof installation Charlotte NC - aerial view"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-dark">Fast Installation</p>
                    <p className="text-sm text-gray">Most roofs completed in 1-3 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Affects New Roof Installation Cost?
            </h2>
            <p className="text-gray text-lg">
              Several factors determine the final cost of your new roof installation. We provide
              transparent, itemized estimates so you understand exactly what you are paying for.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costFactors.map((factor) => (
              <div key={factor.title} className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
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
          <div className="mt-8 bg-accent/5 border-2 border-accent/20 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <DollarSign className="w-12 h-12 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-dark mb-2">Flexible Financing Available</h3>
                <p className="text-gray">
                  Do not let budget concerns delay your new roof. We offer flexible financing options
                  including 0% interest promotional periods and low monthly payments. Most homeowners
                  qualify, and approval takes just minutes.
                </p>
              </div>
              <Button
                href="/financing"
                variant="primary"
              >
                View Financing Options
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
                Ready for Your New Roof Installation?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte&apos;s certified roof installation experts.
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

      {/* Warranty Information */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              New Roof Warranty Protection
            </h2>
            <p className="text-gray text-lg">
              Your new roof installation comes with comprehensive warranty protection. As certified
              installers for major manufacturers, we offer enhanced warranties you will not find elsewhere.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {warrantyInfo.map((warranty) => (
              <div key={warranty.title} className="bg-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{warranty.title}</h3>
                <p className="text-accent font-semibold text-lg mb-2">{warranty.duration}</p>
                <p className="text-gray text-sm">{warranty.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-2" />
              <p className="font-bold text-dark">CertainTeed</p>
              <p className="text-sm text-gray">SELECT ShingleMaster</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-2" />
              <p className="font-bold text-dark">GAF</p>
              <p className="text-sm text-gray">Factory-Certified</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-2" />
              <p className="font-bold text-dark">Owens Corning</p>
              <p className="text-sm text-gray">Preferred Contractor</p>
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
                Why Charlotte Homeowners Choose Us for New Roof Installation
              </h2>
              <p className="text-gray text-lg mb-8">
                A new roof is one of the biggest investments you will make in your home. Trust
                Charlotte&apos;s most experienced installation team to do it right the first time with
                quality materials and expert craftsmanship.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                      <p className="text-gray text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="New roof installation in Charlotte NC - CertainTeed shingles installed by Best Roofing Now"
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
                    <p className="font-bold text-dark">5.0 Rating</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Turner Family */}
      <MeetTheFamily variant="compact" />

      {/* Service City Links */}
      <ServiceCityLinks
        city="Charlotte"
        citySlug="charlotte-nc"
        title="Roofing Services in Charlotte NC"
        subtitle="Looking for a specific roofing service? We offer comprehensive roofing solutions throughout Charlotte."
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
                  When you trust Best Roofing Now with your new roof installation, you are getting more
                  than just a contractor - you are getting a neighbor who will stand behind every nail,
                  every shingle, and every promise. We have installed {SITE_CONFIG.roofsInstalled}+ roofs
                  in the Charlotte area, and every single one was built to the same standard: good enough
                  for my own family.
                </p>
                <p className="text-primary font-semibold mt-4">
                  Call us today at {SITE_CONFIG.phone} for your free new roof estimate.
                </p>
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
              New Roof Installation Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our installation crews serve all of Charlotte and surrounding communities with expert
              new roof installation services.
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
              Recent New Roof Installations in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed new roof installation projects throughout the Charlotte area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="New roof installation Charlotte NC - completed project"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle new roof installation Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of new roof installation Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional new roof installation in Charlotte area"
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
                New Roof Installation FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about new roof installation in Charlotte NC.
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

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="new-roof-installation-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/new-roof-installation-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="New Roof Installation"

      />

      <CTASection
        title="Ready for Your New Roof Installation in Charlotte?"
        subtitle="Get a free, no-obligation estimate from our certified installation team. We'll assess your needs and provide honest recommendations with transparent pricing. Over 500 Charlotte homeowners have trusted us with their new roof - you can too."
      />
    </>
  );
}
