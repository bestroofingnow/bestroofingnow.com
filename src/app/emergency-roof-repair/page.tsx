import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  Shield,
  Star,
  CheckCircle,
  AlertTriangle,
  Clock,
  FileText,
  Award,
  Zap,
  DollarSign,
  MapPin,
  HelpCircle,
  Wrench,
  Home,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  ServiceSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Near Me | Charlotte NC 24/7 | Call Now',
  description:
    'Emergency roof repair near me in Charlotte NC. 24/7 same-day service, 1-hour response. Leaks, shingles, storm damage. Licensed & insured. Call (704) 605-6047!',
  keywords: [
    'emergency roof repair near me',
    'emergency roof repair Charlotte NC',
    '24 hour roof repair near me',
    'urgent roof repair Charlotte',
    'same day roof repair near me',
    'emergency roof leak repair Charlotte NC',
    'emergency shingle repair near me',
    'roof repair near me today',
    'emergency roofing contractor near me',
    'fast roof repair Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/emergency-roof-repair`,
  },
  openGraph: {
    title: 'Emergency Roof Repair Near Me | Charlotte NC 24/7',
    description:
      'Emergency roof repair near me in Charlotte NC. 24/7 same-day service, 1-hour response. Leaks, shingles, storm damage. Licensed & insured.',
    url: `${SITE_CONFIG.url}/emergency-roof-repair`,
    type: 'website',
    images: [
      {
        url: IMAGES.stock.serviceStormDamage,
        width: 1200,
        height: 630,
        alt: 'Emergency roof repair near me in Charlotte NC',
      },
    ],
  },
};

const emergencyScenarios = [
  {
    icon: AlertTriangle,
    title: 'Active Roof Leak',
    description:
      'Water pouring through your ceiling demands immediate repair. We locate the source and patch it the same day to stop interior damage.',
  },
  {
    icon: Zap,
    title: 'Storm Damage',
    description:
      'High winds, hail, and fallen branches can compromise your roof in minutes. We deploy within 1 hour to assess and begin emergency repairs.',
  },
  {
    icon: Home,
    title: 'Missing or Blown-Off Shingles',
    description:
      'Exposed decking invites water infiltration and structural rot. We replace missing shingles and seal vulnerable areas fast.',
  },
  {
    icon: Wrench,
    title: 'Damaged Flashing',
    description:
      'Failed flashing around chimneys, vents, and skylights is a top cause of emergency leaks. We repair or replace flashing same-day.',
  },
  {
    icon: DollarSign,
    title: 'Insurance-Related Urgency',
    description:
      'Need documented repairs for an active insurance claim? We provide detailed reports, photos, and direct adjuster coordination.',
  },
  {
    icon: Shield,
    title: 'Structural Compromise',
    description:
      'Sagging decking, cracked rafters, or punctured roof sections need expert structural repair before further collapse occurs.',
  },
];

const repairProcess = [
  {
    step: 1,
    title: 'Call Our Emergency Line',
    description:
      'Reach a live dispatcher 24/7 at (704) 605-6047. Describe the damage and we dispatch a crew immediately.',
  },
  {
    step: 2,
    title: 'Rapid On-Site Assessment',
    description:
      'Our technician arrives within 1 hour, inspects the damage, documents everything with photos, and provides an upfront repair estimate.',
  },
  {
    step: 3,
    title: 'Same-Day Emergency Repair',
    description:
      'We execute the repair on the spot - patching leaks, replacing shingles, sealing flashing, or tarping large areas to prevent further damage.',
  },
  {
    step: 4,
    title: 'Insurance Documentation & Follow-Up',
    description:
      'We provide a detailed repair report with before/after photos for your insurance claim and schedule any permanent repairs needed.',
  },
];

const costBreakdown = [
  {
    service: 'Roof Leak Repair',
    priceRange: '$200 - $600',
    description: 'Locate and seal active leaks including pipe boots, valleys, and penetration points.',
  },
  {
    service: 'Shingle Replacement',
    priceRange: '$250 - $700',
    description: 'Replace missing, cracked, or wind-lifted shingles with matching materials.',
  },
  {
    service: 'Flashing Repair',
    priceRange: '$300 - $800',
    description: 'Repair or replace failed flashing around chimneys, skylights, walls, and vents.',
  },
  {
    service: 'Structural Roof Repair',
    priceRange: '$500 - $2,000+',
    description: 'Fix damaged decking, rafters, or trusses compromised by storms or rot.',
  },
  {
    service: 'Emergency Roof Tarping',
    priceRange: '$300 - $800',
    description: 'Heavy-duty tarp installation to waterproof large damaged areas until permanent repair.',
  },
  {
    service: 'Gutter & Drainage Repair',
    priceRange: '$150 - $500',
    description: 'Repair storm-damaged gutters causing water backup and fascia board damage.',
  },
];

const neighborhoodResponseTimes = [
  { name: 'University City', time: '15-30 min' },
  { name: 'NoDa', time: '25-40 min' },
  { name: 'Plaza Midwood', time: '30-45 min' },
  { name: 'Uptown Charlotte', time: '30-45 min' },
  { name: 'South End', time: '35-50 min' },
  { name: 'Dilworth', time: '35-50 min' },
  { name: 'Myers Park', time: '40-55 min' },
  { name: 'SouthPark', time: '40-55 min' },
  { name: 'Cotswold', time: '35-50 min' },
  { name: 'Elizabeth', time: '30-45 min' },
  { name: 'Ballantyne', time: '45-60 min' },
  { name: 'Steele Creek', time: '45-60 min' },
  { name: 'Prosperity Village', time: '20-35 min' },
  { name: 'Highland Creek', time: '15-30 min' },
  { name: 'Mallard Creek', time: '10-20 min' },
  { name: 'Derita', time: '15-25 min' },
];

const surroundingCities = [
  'Huntersville',
  'Cornelius',
  'Davidson',
  'Mooresville',
  'Matthews',
  'Mint Hill',
  'Indian Trail',
  'Pineville',
  'Concord',
  'Kannapolis',
  'Harrisburg',
  'Mount Holly',
  'Gastonia',
  'Fort Mill SC',
  'Rock Hill SC',
];

const trustSignals = [
  {
    icon: Clock,
    title: '1-Hour Response Time',
    description:
      'Our emergency crews are staged across the Charlotte metro. When you search "emergency roof repair near me," we are the closest certified roofer.',
  },
  {
    icon: Shield,
    title: 'Licensed & Fully Insured',
    description:
      'NC General Contractor license, $2M liability coverage, and workers comp on every job. Your property and our crew are protected.',
  },
  {
    icon: Star,
    title: '5.0 Stars - 62+ Reviews',
    description:
      'Perfect Google rating from Charlotte homeowners who trusted us with their emergency roof repairs. Read our verified reviews.',
  },
  {
    icon: FileText,
    title: 'Insurance Claim Experts',
    description:
      'We handle the paperwork, meet adjusters on-site, and ensure your emergency repair is fully documented for maximum claim coverage.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description:
      'Better Business Bureau A+ accredited with zero complaints. We stand behind every emergency repair with a written warranty.',
  },
  {
    icon: Wrench,
    title: 'Permanent Repairs, Not Band-Aids',
    description:
      'We go beyond temporary patches. Our emergency repairs use manufacturer-spec materials so you do not need a second visit.',
  },
];

const faqs = [
  {
    question: 'How fast can you get to me for emergency roof repair near me in Charlotte?',
    answer:
      'We maintain emergency crews across the Charlotte metro area and typically arrive within 1 hour of your call. From our University City headquarters, we reach most Charlotte neighborhoods in 15-45 minutes. Surrounding cities like Huntersville, Matthews, and Concord are within 30-60 minutes. Call (704) 605-6047 for immediate dispatch.',
  },
  {
    question: 'How much does emergency roof repair cost near me?',
    answer:
      'Emergency roof repair costs in Charlotte range from $200 to $2,000+ depending on the damage. Leak repairs run $200-$600, shingle replacement $250-$700, flashing repair $300-$800, and structural repairs $500-$2,000+. We provide a free on-site estimate before starting work, and many emergency repairs are covered by homeowners insurance.',
  },
  {
    question: 'Do you offer same-day roof repair near me?',
    answer:
      'Yes. Best Roofing Now provides same-day emergency roof repair throughout Charlotte NC and surrounding areas. Most emergency repairs - leak patches, shingle replacements, flashing fixes - are completed in a single visit. For larger structural damage, we complete emergency stabilization same-day and schedule permanent repair within 48-72 hours.',
  },
  {
    question: 'Will my homeowners insurance cover emergency roof repair?',
    answer:
      'Most homeowners insurance policies cover emergency roof repairs caused by sudden events like storms, hail, fallen trees, and wind damage. We document all damage with detailed photos, provide itemized repair reports, and work directly with your insurance adjuster to maximize your claim. We have helped hundreds of Charlotte homeowners navigate the claims process successfully.',
  },
  {
    question: 'What should I do while waiting for emergency roof repair near me?',
    answer:
      'First, stay safe - never climb on a damaged roof. Place buckets under active leaks, move furniture and valuables away from water, and take photos and video of all damage for insurance documentation. If water is near electrical fixtures, turn off power to that area. Call us at (704) 605-6047 and our dispatcher will guide you through additional steps specific to your situation.',
  },
  {
    question: 'Do you provide 24-hour roof repair near me on weekends and holidays?',
    answer:
      'Yes, our emergency roof repair service operates 24 hours a day, 7 days a week, 365 days a year - including weekends, holidays, and overnight. Roof emergencies do not follow a schedule, and neither do we. Call (704) 605-6047 any time and reach a live dispatcher who will send a crew to your location immediately.',
  },
  {
    question: 'What areas near Charlotte do you serve for emergency roof repair?',
    answer:
      'We provide emergency roof repair across the entire Charlotte metro including Huntersville, Cornelius, Davidson, Matthews, Mint Hill, Indian Trail, Pineville, Concord, Kannapolis, Harrisburg, Mount Holly, and Gastonia. We also serve Fort Mill and Rock Hill in South Carolina. Our response radius covers approximately 50 miles from Charlotte.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Emergency Services', url: `${SITE_CONFIG.url}/emergency` },
  { name: 'Emergency Roof Repair Near Me', url: `${SITE_CONFIG.url}/emergency-roof-repair` },
];

export default function EmergencyRoofRepairPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: 'Emergency Roof Repair Near Me',
          description:
            'Same-day emergency roof repair in Charlotte NC. 24/7 service with 1-hour response for leak repair, shingle replacement, flashing repair, and storm damage.',
          slug: 'emergency-roof-repair',
        }}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/emergency-roof-repair`}
        pageName="Emergency Roof Repair Near Me Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.stock.serviceStormDamage}
            alt="Emergency roof repair near me in Charlotte NC"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">24/7 EMERGENCY SERVICE</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Emergency Roof Repair
              <br className="hidden md:block" />
              <span className="text-red-200">Near Me &mdash; Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Same-day repairs &bull; 1-hour response &bull; Insurance claim help
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When your roof is leaking, damaged, or compromised, every minute counts. Best Roofing Now provides
              same-day emergency roof repair across Charlotte NC with crews dispatched within 1 hour of your call.
              We fix the problem on the spot &mdash; not just a tarp and a promise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-red-700 !bg-white/10"
                icon={<Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />}
              >
                CALL NOW: {SITE_CONFIG.phone}
              </Button>
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="!bg-white !text-red-700 hover:!bg-white/90"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Emergency Repair
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-200" />
                1-Hour Response Time
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-200" />
                Licensed &amp; Insured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Response Stats Bar */}
      <section className="py-8 bg-slate-900 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-red-400" aria-hidden="true" />
              <div>
                <div className="text-3xl font-bold">1 Hour</div>
                <div className="text-white/70 text-sm">Average Response</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-red-400" aria-hidden="true" />
              <div>
                <div className="text-3xl font-bold">Same Day</div>
                <div className="text-white/70 text-sm">Repairs Completed</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-red-400" aria-hidden="true" />
              <div>
                <div className="text-3xl font-bold">24/7/365</div>
                <div className="text-white/70 text-sm">Always Available</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-yellow-400" aria-hidden="true" />
              <div>
                <div className="text-3xl font-bold">5.0 Stars</div>
                <div className="text-white/70 text-sm">{SITE_CONFIG.googleReviewCount}+ Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need Emergency Roof Repair */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              When You Need Emergency Roof Repair Near Me
            </h2>
            <p className="text-gray text-lg">
              These situations require immediate professional roof repair &mdash; not a DIY fix or a
              &quot;we&apos;ll call you back Monday&quot; response.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyScenarios.map((scenario) => (
              <div key={scenario.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <scenario.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-dark mb-2">{scenario.title}</h3>
                <p className="text-gray text-sm">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Repair Process */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Emergency Roof Repair Process
              </h2>
              <p className="text-gray text-lg">
                From your first call to completed repair &mdash; here is exactly what happens when you need
                emergency roof repair near you in Charlotte.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {repairProcess.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Repair Cost Breakdown */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Transparent Pricing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Emergency Roof Repair Costs Near Me
            </h2>
            <p className="text-gray max-w-2xl mx-auto">
              Honest, upfront pricing for every type of emergency roof repair in Charlotte NC. No hidden
              fees, no surprise charges. Free on-site estimates before work begins.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {costBreakdown.map((item) => (
              <div
                key={item.service}
                className="bg-light rounded-xl p-5 border border-gray-100"
              >
                <h3 className="font-bold text-primary mb-1">{item.service}</h3>
                <div className="text-2xl font-bold text-red-600 mb-2">{item.priceRange}</div>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray text-sm mt-6">
            * Prices are estimates based on typical Charlotte-area repairs. Final pricing depends on roof
            size, damage extent, accessibility, and materials needed. Free estimates provided before work
            begins. Many repairs are covered by homeowners insurance.
          </p>
        </div>
      </section>

      {/* Emergency CTA Banner */}
      <section className="bg-red-600 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Roof Leaking Right Now?
              </h2>
              <p className="text-white/90">
                Do not wait for the damage to spread. Call for same-day emergency roof repair near you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-red-600 hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-red-600"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Repair
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area - Neighborhoods & Response Times */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Local Coverage</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Emergency Roof Repair Near Me &mdash; Charlotte Neighborhoods
            </h2>
            <p className="text-gray max-w-2xl mx-auto">
              Based from our University City headquarters at {SITE_CONFIG.address.street}, we provide
              emergency roof repair across every Charlotte neighborhood with the fastest response times
              in the metro.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="font-bold text-primary text-lg mb-4 text-center">
              Charlotte Neighborhood Response Times
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {neighborhoodResponseTimes.map((area) => (
                <div
                  key={area.name}
                  className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100"
                >
                  <h4 className="font-bold text-primary text-sm mb-1">{area.name}</h4>
                  <div className="text-lg font-bold text-red-600">{area.time}</div>
                  <p className="text-gray text-xs">response time</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="font-bold text-primary text-lg mb-4 text-center">
              Surrounding Cities We Serve
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {surroundingCities.map((city) => (
                <Link
                  key={city}
                  href={`/locations/${city.toLowerCase().replace(/\s+/g, '-').replace('-sc', '-sc')}-nc`}
                  className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {city}
                </Link>
              ))}
            </div>
            <p className="text-center text-gray text-sm mt-4">
              Our emergency response radius covers approximately 50 miles from Charlotte.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Emergency Repairs */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Homeowners Choose Us for Emergency Roof Repair
            </h2>
            <p className="text-gray text-lg">
              When you search &quot;emergency roof repair near me,&quot; you need a contractor who
              shows up fast, fixes it right, and handles the insurance headache for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustSignals.map((signal) => (
              <div key={signal.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <signal.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{signal.title}</h3>
                <p className="text-gray text-sm">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Integration Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Insurance Support</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Emergency Roof Repair + Insurance Claim Assistance
              </h2>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-gray text-lg mb-6">
                Most emergency roof repairs in Charlotte are covered by homeowners insurance. We make the
                claims process painless by handling every step:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray">
                    <strong className="text-dark">Detailed damage documentation</strong> &mdash; High-resolution
                    photos, measurements, and written assessment for your insurer.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray">
                    <strong className="text-dark">Direct adjuster coordination</strong> &mdash; We meet your
                    insurance adjuster on-site and walk them through every repair item.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray">
                    <strong className="text-dark">Itemized repair invoices</strong> &mdash; Line-item
                    breakdowns that align with insurance company requirements.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray">
                    <strong className="text-dark">Claim appeal support</strong> &mdash; If your claim is
                    denied or underpaid, we provide supplemental documentation for re-review.
                  </span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link
                  href="/guides/insurance-claim-guide"
                  className="text-primary font-semibold hover:underline"
                >
                  Read our full Insurance Claim Guide &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="service"
        city="Charlotte"
        slug="emergency-roof-repair"
        count={4}
        title="Emergency Roof Repairs"
        subtitle="Recent emergency repair projects completed across Charlotte NC."
        schemaPageUrl={`${SITE_CONFIG.url}/emergency-roof-repair`}
      />

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
                Emergency Roof Repair Near Me &mdash; FAQs
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            Related Emergency Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/storm-damage-roof-repair"
              className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-primary mb-2">Storm Damage Roof Repair</h3>
              <p className="text-gray text-sm">
                Free storm damage inspections and insurance claim assistance in Charlotte.
              </p>
            </Link>
            <Link
              href="/emergency-roof-tarping"
              className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-primary mb-2">Emergency Roof Tarping</h3>
              <p className="text-gray text-sm">
                Immediate tarp installation to protect your home from further water damage.
              </p>
            </Link>
            <Link
              href="/hail-damage-roof-repair"
              className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-primary mb-2">Hail Damage Repair</h3>
              <p className="text-gray text-sm">
                Expert hail damage assessment, repair, and insurance claim assistance.
              </p>
            </Link>
            <Link
              href="/roof-repair-cost-charlotte-nc"
              className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-primary mb-2">Roof Repair Costs 2026</h3>
              <p className="text-gray text-sm">
                How much emergency and standard roof repairs cost in Charlotte NC.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Emergency Roof Repair Near You?"
        subtitle="Call (704) 605-6047 now for same-day emergency roof repair in Charlotte NC. We respond within 1 hour."
      />
    </>
  );
}
