import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Droplets,
  CheckCircle,
  Phone,
  Calendar,
  AlertTriangle,
  Search,
  Wrench,
  Shield,
  Star,
  Clock,
  ArrowRight,
  HelpCircle,
  Home,
  ThermometerSun,
  CloudRain,
  Eye,
  Zap,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import YouTubeShort from '@/components/sections/YouTubeShort';
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Leak Repair Charlotte NC | Fast Leak Detection | Best Roofing Now',
  description:
    'Expert roof leak repair in Charlotte NC. Fast leak detection, emergency repairs 24/7, and permanent solutions for leaking roofs. Free inspections. BBB A+ rated. Call (704) 605-6047.',
  keywords: [
    'roof leak repair charlotte nc',
    'leaking roof repair charlotte',
    'roof leak detection charlotte',
    'emergency leak repair charlotte nc',
    'fix roof leak charlotte',
    'roof leak specialist charlotte',
    'stop roof leak charlotte nc',
    'roof water damage repair charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-leak-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Leak Repair Charlotte NC | Fast Leak Detection | Best Roofing Now',
    description:
      'Expert roof leak repair in Charlotte NC. Fast leak detection, emergency repairs 24/7, and permanent solutions. Free inspections from BBB A+ rated contractor.',
    url: `${SITE_CONFIG.url}/roof-leak-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roof leak repair Charlotte NC - professional leak detection and repair',
      },
    ],
  },
};

// Common causes of roof leaks in Charlotte
const leakCauses = [
  {
    icon: CloudRain,
    title: 'Storm Damage',
    description: 'Charlotte averages 25+ severe storms per year. High winds, hail, and heavy rain can damage shingles, create gaps, and allow water intrusion.',
    severity: 'High Risk',
  },
  {
    icon: Clock,
    title: 'Aging Roof Materials',
    description: 'Roofs over 15-20 years old experience shingle deterioration, cracked flashing, and worn seals around vents and pipes.',
    severity: 'Moderate Risk',
  },
  {
    icon: Wrench,
    title: 'Poor Installation',
    description: 'Improperly installed shingles, inadequate underlayment, or incorrect flashing can cause leaks within years of installation.',
    severity: 'High Risk',
  },
  {
    icon: ThermometerSun,
    title: 'Thermal Expansion',
    description: 'Charlotte\'s hot summers (90°F+) and cool winters cause materials to expand and contract, loosening seals over time.',
    severity: 'Moderate Risk',
  },
];

// Signs you have a roof leak
const leakSigns = [
  {
    sign: 'Water Stains on Ceilings',
    description: 'Brown or yellow spots on ceilings, especially after rain, indicate water penetrating through your roof.',
    urgency: 'Act within 24-48 hours',
  },
  {
    sign: 'Mold or Mildew Growth',
    description: 'Musty odors or visible mold in the attic or upper floors signals ongoing moisture problems.',
    urgency: 'Immediate attention needed',
  },
  {
    sign: 'Unexplained High Water Bills',
    description: 'If water is pooling in your attic or walls, it may affect your home\'s humidity and HVAC efficiency.',
    urgency: 'Schedule inspection',
  },
  {
    sign: 'Damaged or Missing Shingles',
    description: 'Visible shingle damage, curling, or missing pieces often precede or accompany roof leaks.',
    urgency: 'Repair before next storm',
  },
  {
    sign: 'Peeling Paint or Wallpaper',
    description: 'Moisture behind walls causes paint to bubble, peel, or wallpaper to separate.',
    urgency: 'Investigate source promptly',
  },
  {
    sign: 'Sagging Roof Deck',
    description: 'A sagging roofline indicates prolonged water damage and potential structural issues.',
    urgency: 'Emergency - call immediately',
  },
];

// Leak repair process
const repairProcess = [
  {
    step: 1,
    title: 'Free Leak Inspection',
    description: 'Our expert technicians thoroughly inspect your roof, attic, and interior to locate the exact source of the leak.',
    icon: Search,
  },
  {
    step: 2,
    title: 'Advanced Leak Detection',
    description: 'We use moisture meters, thermal imaging, and water testing to pinpoint hidden leaks that visual inspection might miss.',
    icon: Eye,
  },
  {
    step: 3,
    title: 'Professional Repair',
    description: 'Using premium materials and proven techniques, we permanently fix the leak - not just patch it temporarily.',
    icon: Wrench,
  },
  {
    step: 4,
    title: 'Quality Verification',
    description: 'We perform water testing and thorough inspection to ensure the repair is complete and your roof is watertight.',
    icon: CheckCircle,
  },
];

// Types of leak repairs
const repairTypes = [
  {
    type: 'Flashing Repair',
    description: 'Repair or replace deteriorated flashing around chimneys, vents, skylights, and roof intersections.',
    commonAreas: 'Chimneys, skylights, valleys, walls',
    priceRange: '$150 - $500',
  },
  {
    type: 'Shingle Repair',
    description: 'Replace damaged, missing, or deteriorated shingles that are allowing water penetration.',
    commonAreas: 'General roof surface, edges, ridges',
    priceRange: '$200 - $600',
  },
  {
    type: 'Vent Pipe Boot Repair',
    description: 'Replace cracked or worn rubber boots around plumbing vent pipes - a very common leak source.',
    commonAreas: 'Bathroom, kitchen, and laundry vents',
    priceRange: '$150 - $300',
  },
  {
    type: 'Chimney Leak Repair',
    description: 'Comprehensive chimney leak solutions including flashing, cap, crown, and waterproofing.',
    commonAreas: 'Chimney base, cap, mortar joints',
    priceRange: '$300 - $1,200',
  },
  {
    type: 'Valley Repair',
    description: 'Fix or replace valley flashing and shingles where two roof planes meet - a high-leak-risk area.',
    commonAreas: 'Roof valleys and intersections',
    priceRange: '$400 - $800',
  },
  {
    type: 'Flat Roof Leak Repair',
    description: 'Specialized repairs for TPO, EPDM, and modified bitumen flat roofing systems.',
    commonAreas: 'Commercial and low-slope roofs',
    priceRange: '$300 - $1,500',
  },
];

// FAQs
const faqs = [
  {
    question: 'How much does roof leak repair cost in Charlotte NC?',
    answer:
      'Roof leak repair in Charlotte typically costs between $150 and $1,500 depending on the leak source and severity. Simple repairs like vent boot replacement run $150-$300, while complex chimney or valley repairs can cost $500-$1,200. We provide free inspections and upfront pricing with no hidden fees. Emergency and after-hours repairs may incur additional service fees.',
  },
  {
    question: 'How quickly can you respond to a roof leak emergency in Charlotte?',
    answer:
      'Best Roofing Now offers 24/7 emergency roof leak response in Charlotte and surrounding areas. For active leaks during business hours, we typically arrive within 1-4 hours. After-hours emergencies are handled as quickly as possible, often the same night. Call (704) 605-6047 immediately if you have an active leak causing interior damage.',
  },
  {
    question: 'Why does my roof leak only during heavy rain?',
    answer:
      'Leaks that only appear during heavy rain often indicate wind-driven rain issues, overwhelmed drainage, or small gaps that only allow water entry when volume is high. Common culprits include damaged flashing, clogged gutters backing water under shingles, or deteriorated seals around roof penetrations. These leaks require professional detection to locate the exact entry point.',
  },
  {
    question: 'Can I just patch my leaking roof instead of replacing it?',
    answer:
      'Many roof leaks can be permanently repaired without full replacement, especially if your roof is under 15-20 years old. However, if you have multiple leak points, widespread shingle deterioration, or storm damage exceeding 30% of the roof surface, replacement may be more cost-effective long-term. We provide honest assessments and never push replacement unless truly needed.',
  },
  {
    question: 'Will my homeowners insurance cover roof leak repair in Charlotte?',
    answer:
      'Insurance typically covers roof leak repairs if the damage was caused by a covered event like storms, hail, wind, or fallen trees. However, leaks from age, wear, or lack of maintenance are generally not covered. We work with all major insurance companies and can help document damage for your claim. Contact us for a free inspection to assess whether your leak may be covered.',
  },
  {
    question: 'How do I find where my roof is leaking?',
    answer:
      'Finding a roof leak can be tricky because water often travels along rafters or sheathing before dripping down, making the entry point far from the visible damage. Start by checking the attic during daylight for light penetration or water stains. Common leak sources include around chimneys, vent pipes, skylights, and in valleys. For elusive leaks, professional leak detection with moisture meters and water testing is recommended.',
  },
  {
    question: 'What should I do immediately when I discover a roof leak?',
    answer:
      'When you discover an active roof leak: 1) Place buckets to catch dripping water, 2) Move valuables and furniture away from the affected area, 3) If safe, place a tarp in the attic to redirect water toward a bucket, 4) Take photos for insurance documentation, 5) Call Best Roofing Now at (704) 605-6047 for emergency response. Do not attempt to go on your roof during rain or wet conditions.',
  },
  {
    question: 'How long does roof leak repair take?',
    answer:
      'Most roof leak repairs in Charlotte are completed in 1-4 hours once our crew arrives. Simple repairs like vent boot replacement or small shingle patches take about 1 hour. More complex repairs involving flashing, multiple leak points, or chimney work may take a full day. We schedule repairs promptly and work efficiently to restore your roof\'s protection as quickly as possible.',
  },
];

// ServiceSchema for roof leak repair
function LeakRepairServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Roof Leak Repair Charlotte NC',
    description:
      'Professional roof leak repair services in Charlotte NC. Expert leak detection, emergency repairs 24/7, and permanent solutions for all types of roof leaks. Free inspections available.',
    provider: {
      '@type': 'RoofingContractor',
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.address.street,
        addressLocality: SITE_CONFIG.address.city,
        addressRegion: SITE_CONFIG.address.state,
        postalCode: SITE_CONFIG.address.zip,
        addressCountry: 'US',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: SITE_CONFIG.googleRating,
        reviewCount: SITE_CONFIG.googleReviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Charlotte, NC',
    },
    serviceType: 'Roof Leak Repair',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roof Leak Repair Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Emergency Roof Leak Repair',
          description: '24/7 emergency response for active roof leaks',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '200',
            maxPrice: '1500',
            unitText: 'per repair',
          },
        },
        {
          '@type': 'Offer',
          name: 'Roof Leak Detection',
          description: 'Professional leak detection using moisture meters and thermal imaging',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '0',
            maxPrice: '150',
            unitText: 'inspection fee (often waived with repair)',
          },
        },
        {
          '@type': 'Offer',
          name: 'Free Roof Leak Inspection',
          description: 'Complimentary inspection to identify leak source and provide repair estimate',
          price: '0',
          priceCurrency: 'USD',
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RoofLeakRepairCharlottePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Leak Repair Charlotte NC', url: `${SITE_CONFIG.url}/roof-leak-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LeakRepairServiceSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Roof leak repair in Charlotte NC - professional leak detection and repair services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* Emergency Badge */}
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4 animate-pulse">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 Emergency Leak Repair Available</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Leak Repair <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast leak detection and permanent repairs by Charlotte&apos;s trusted roofing experts
            </p>

            {/* Key Benefits */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-accent-light flex-shrink-0" />
                  <span>1-4 Hour Emergency Response</span>
                </li>
                <li className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-accent-light flex-shrink-0" />
                  <span>Advanced Leak Detection</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-light flex-shrink-0" />
                  <span>Permanent Repairs - Not Patches</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-light flex-shrink-0" />
                  <span>Free Inspections &amp; Estimates</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                size="lg"
                className="bg-accent hover:bg-accent-dark"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Emergency: {SITE_CONFIG.phone}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Inspection
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
                <Clock className="w-5 h-5 text-green-400" />
                24/7 Emergency Service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Common Causes of Roof Leaks */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Common Causes of Roof Leaks in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Charlotte&apos;s climate presents unique challenges for roofing. Understanding these common leak causes helps you protect your home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leakCauses.map((cause) => (
              <div
                key={cause.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <cause.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{cause.title}</h3>
                <p className="text-gray text-sm mb-3">{cause.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  cause.severity === 'High Risk'
                    ? 'bg-accent/10 text-accent'
                    : 'bg-primary/10 text-primary'
                }`}>
                  {cause.severity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Have a Roof Leak */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Signs You Have a Roof Leak
            </h2>
            <p className="text-gray text-lg">
              Catching a roof leak early can save thousands in repairs. Watch for these warning signs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leakSigns.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">{item.sign}</h3>
                    <p className="text-gray text-sm mb-3">{item.description}</p>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                      {item.urgency}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-lg text-dark mb-4">
              Noticing any of these signs? Don&apos;t wait for more damage.
            </p>
            <Button
              href={`tel:${SITE_CONFIG.phoneClean}`}
              variant="primary"
              size="lg"
              icon={<Phone className="w-5 h-5" aria-hidden="true" />}
            >
              Call for Free Inspection: {SITE_CONFIG.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* Our Leak Repair Process */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Leak Repair Process
            </h2>
            <p className="text-gray text-lg">
              We don&apos;t just patch leaks - we find the source and fix it permanently.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairProcess.map((step) => (
              <div key={step.step} className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-gray text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <YouTubeShort
        videoId="CXaG6atl-nE"
        title="The $10,000 Gutter Mistake"
        heading="Watch: The $10,000 Gutter Mistake"
        description="Damaged gutters are a leading cause of roof leaks. Learn the 3 warning signs to watch for."
      />

      {/* Emergency CTA Banner */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-1 text-white">
                  Active Roof Leak? We&apos;re Available 24/7
                </h2>
                <p className="text-white/90">
                  Don&apos;t let water damage spread. Our emergency team responds within hours.
                </p>
              </div>
            </div>
            <Button
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="bg-white !text-accent hover:bg-white/90 whitespace-nowrap"
              size="lg"
              icon={<Phone className="w-5 h-5" aria-hidden="true" />}
            >
              {SITE_CONFIG.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* Types of Leak Repairs */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Types of Roof Leak Repairs
            </h2>
            <p className="text-gray text-lg">
              We repair all types of roof leaks. Here&apos;s what Charlotte homeowners commonly need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairTypes.map((repair, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border-2 border-transparent hover:border-primary transition"
              >
                <h3 className="text-xl font-bold text-dark mb-3">{repair.type}</h3>
                <p className="text-gray text-sm mb-4">{repair.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray">Common areas:</span>
                    <span className="text-dark font-medium">{repair.commonAreas}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray">Typical cost:</span>
                    <span className="text-accent font-semibold">{repair.priceRange}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Transparent Leak Repair Pricing
              </h2>
              <p className="text-gray text-lg mb-6">
                We believe in upfront, honest pricing. No hidden fees, no surprise charges.
                Here&apos;s what to expect for common leak repairs in Charlotte.
              </p>
              <div className="bg-light rounded-xl p-6 mb-6">
                <h3 className="font-bold text-dark mb-4">Typical Repair Costs:</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray">Vent Pipe Boot Replacement</span>
                    <span className="font-semibold text-dark">$150 - $300</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray">Shingle Repair (per area)</span>
                    <span className="font-semibold text-dark">$200 - $600</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray">Flashing Repair</span>
                    <span className="font-semibold text-dark">$150 - $500</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray">Valley Repair</span>
                    <span className="font-semibold text-dark">$400 - $800</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray">Chimney Leak Repair</span>
                    <span className="font-semibold text-dark">$300 - $1,200</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray">Free inspections</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray">Written estimates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray">No obligation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Professional roof leak repair in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Same-Day Service</p>
                    <p className="text-sm text-gray">Available for most repairs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Homeowners Trust Us for Leak Repairs
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-dark mb-2">Fast Emergency Response</h3>
              <p className="text-gray text-sm">
                24/7 availability with 1-4 hour response times for active leaks. We understand that every hour counts when water is entering your home.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <Search className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-dark mb-2">Expert Leak Detection</h3>
              <p className="text-gray text-sm">
                We use advanced moisture meters and thermal imaging to find leaks that visual inspections miss. No guesswork, just accurate diagnosis.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-dark mb-2">Permanent Solutions</h3>
              <p className="text-gray text-sm">
                We fix the root cause, not just the symptom. Our repairs come with a workmanship warranty so you can trust the leak is truly fixed.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <Home className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-dark mb-2">Insurance Assistance</h3>
              <p className="text-gray text-sm">
                We document damage thoroughly and work with insurance adjusters to help you get fair coverage for storm-related leak repairs.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <Star className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-dark mb-2">5-Star Reputation</h3>
              <p className="text-gray text-sm">
                BBB A+ rated with a perfect 5.0 Google rating. Read what {SITE_CONFIG.googleReviewCount}+ Charlotte homeowners say about our service.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <Wrench className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-dark mb-2">Certified Experts</h3>
              <p className="text-gray text-sm">
                CertainTeed, GAF, and Owens Corning certified installers. We know roofing inside and out and use only premium materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roof Leak Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions about roof leak repair in Charlotte NC.
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

      {/* Related Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Related Roofing Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/emergency-roofing" className="block p-6 bg-white rounded-xl hover:shadow-lg transition group">
              <AlertTriangle className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">Emergency Roofing</h3>
              <p className="text-gray text-sm mb-4">24/7 emergency response for all roofing emergencies including active leaks, storm damage, and fallen trees.</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/services/storm-damage" className="block p-6 bg-white rounded-xl hover:shadow-lg transition group">
              <CloudRain className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">Storm Damage Repair</h3>
              <p className="text-gray text-sm mb-4">Expert storm damage assessment and repair with full insurance claim assistance. We fight for fair settlements.</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/services/roof-inspection" className="block p-6 bg-white rounded-xl hover:shadow-lg transition group">
              <Search className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">Free Roof Inspection</h3>
              <p className="text-gray text-sm mb-4">Comprehensive roof inspections to catch problems before they become costly leaks. No obligation, no pressure.</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Stop Your Roof Leak Today"
        subtitle="Don't let a small leak become a big problem. Get a free inspection and honest assessment from Charlotte's most trusted roofing company. We're available 24/7 for emergencies."
      />
    </>
  );
}
