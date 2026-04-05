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
  CloudRain,
  MapPin,
  FileText,
  AlertTriangle,
  Camera,
  Umbrella,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
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
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Hail Damage Roof Repair Lake Norman NC',
  description:
    'Hail damage roof repair in Lake Norman NC. Expert storm damage restoration for lakefront homes. BBB A+ rated. Free inspections. Call (704) 605-6047.',
  keywords: [
    'hail damage roof repair lake norman',
    'hail damage roofer lake norman nc',
    'lake norman hail damage',
    'hail damage roof repair cornelius nc',
    'hail damage roof repair davidson nc',
    'hail storm roof damage lake norman',
    'lake norman hail damage roofer',
    'hail damage insurance claim lake norman',
    'lakefront roof hail damage repair',
    'waterfront hail damage roofing lake norman',
    'hail damage restoration lake norman nc',
    'storm damage roof repair lake norman',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/hail-damage-roof-repair-lake-norman-nc`,
  },
  openGraph: {
    title: 'Hail Damage Roof Repair Lake Norman NC | Storm Experts | Best Roofing Now',
    description:
      'Expert hail damage roof repair across Lake Norman. Free storm damage inspections for waterfront and lakefront homes. Insurance claim assistance. BBB A+ rated.',
    url: `${SITE_CONFIG.url}/hail-damage-roof-repair-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.projects.stormDamage1,
        width: 1200,
        height: 630,
        alt: 'Hail damage roof repair Lake Norman NC - Best Roofing Now storm damage experts',
      },
    ],
  },
};

// Hail damage services
const hailDamageServices = [
  {
    icon: Camera,
    title: 'Free Hail Damage Inspection',
    description: 'Comprehensive roof inspection after any hail storm with detailed photo documentation and written report for Lake Norman homes.',
    href: '/services/roof-inspection',
  },
  {
    icon: FileText,
    title: 'Insurance Claim Assistance',
    description: 'We work directly with your insurance company, meet with adjusters, and fight for fair settlements on your Lake Norman property.',
    href: '/services/insurance-claims',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Professional repair of all hail and storm damage including shingles, flashing, gutters, and siding for lakefront and inland homes.',
    href: '/services/storm-damage',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Tarping',
    description: 'Immediate tarping services to protect your Lake Norman home from further water damage after severe storms cross the lake.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Shield,
    title: 'Full Roof Replacement',
    description: 'When damage is extensive, we provide complete roof replacement with premium, impact-resistant materials built for lakefront exposure.',
    href: '/services/roof-replacement',
  },
  {
    icon: Umbrella,
    title: 'Preventive Upgrades',
    description: 'Upgrade to impact-resistant Class 4 shingles for better protection against future hail storms sweeping across Lake Norman.',
    href: '/services/residential-roofing',
  },
];

// Why choose us for hail damage
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Trusted by Lake Norman homeowners with an A+ Better Business Bureau rating.',
  },
  {
    icon: Star,
    title: 'Insurance Specialists',
    description: 'Thousands of successful insurance claims processed for Lake Norman area homeowners.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with comprehensive liability coverage.',
  },
  {
    icon: CheckCircle,
    title: 'Free Inspections',
    description: 'No-cost, no-obligation roof inspections after any hail storm across the Lake Norman region.',
  },
  {
    icon: Users,
    title: 'Adjuster Meetings',
    description: 'We meet with your insurance adjuster on-site to ensure nothing is missed.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description: 'Round-the-clock emergency services across all Lake Norman communities.',
  },
];

// Signs of hail damage
const hailDamageSigns = [
  'Dented or bruised shingles',
  'Missing granules (dark spots)',
  'Cracked or split shingles',
  'Dented gutters or downspouts',
  'Damaged roof vents',
  'Dents in metal flashing',
  'Damaged siding or window screens',
  'Soft spots when walking on roof',
];

// Lake Norman communities served
const lakeNormanCommunities = [
  'Cornelius',
  'Davidson',
  'Mooresville',
  'Huntersville',
  'Denver',
  'Sherrills Ford',
  'The Peninsula',
  'The Point',
  'Langtree',
  'Jetton Road',
];

// Lake Norman city pages
const lakeNormanCities = [
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Mooresville', href: '/roof-replacement-mooresville-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Denver', href: '/roof-replacement-denver-nc' },
  { name: 'Sherrills Ford', href: '/locations/sherrills-ford-nc' },
  { name: 'Charlotte', href: '/hail-damage-roof-repair-charlotte-nc' },
  { name: 'Statesville', href: '/locations/statesville-nc' },
];

// FAQs about hail damage roof repair in Lake Norman
const faqs = [
  {
    question: 'How does Lake Norman\'s location affect hail damage risk?',
    answer:
      'Lake Norman creates a unique microclimate that can intensify storms. As weather systems cross the open water, hail-producing thunderstorms can gain energy and produce larger hailstones. Waterfront and lakefront homes along the 520 miles of shoreline face increased exposure from storms approaching across the lake with no wind barriers. This makes regular inspections after storms especially important for Lake Norman homeowners.',
  },
  {
    question: 'How do I know if my Lake Norman home has hail damage?',
    answer:
      'Common signs of hail damage include dented or bruised shingles, missing granules appearing as dark spots, cracked shingles, dented gutters or downspouts, and damaged roof vents. Lakefront homes may also show wind-driven hail damage on sides facing the water. Many signs are not visible from the ground, so we recommend scheduling a free professional inspection after any hail storm in the Lake Norman area.',
  },
  {
    question: 'Should I file an insurance claim for hail damage to my Lake Norman home?',
    answer:
      'If your roof has significant hail damage, filing an insurance claim is usually recommended. Most homeowner policies cover hail damage minus your deductible. Lake Norman waterfront homes often carry higher-value policies that provide comprehensive storm coverage. We provide free inspections and help you determine if the damage warrants a claim before you file.',
  },
  {
    question: 'How long do I have to file a hail damage claim in North Carolina?',
    answer:
      'In North Carolina, you typically have 3 years from the date of the storm to file a property damage claim. However, we strongly recommend filing as soon as possible after discovering damage. Delays can result in further deterioration, especially in Lake Norman\'s humid lakeside environment, and make it harder to prove the damage was storm-related.',
  },
  {
    question: 'How much does hail damage roof repair cost in Lake Norman?',
    answer:
      'The cost depends on the extent of damage. Minor repairs may cost $200-$500, while significant damage may require partial or full roof replacement ranging from $8,000-$30,000 for larger Lake Norman homes. The good news is that most hail damage is covered by homeowner\'s insurance, so you\'d only pay your deductible. We provide free estimates and help maximize your insurance settlement.',
  },
  {
    question: 'Do you serve all Lake Norman communities?',
    answer:
      'Yes, we provide hail damage repair throughout the entire Lake Norman region including Cornelius, Davidson, Mooresville, Huntersville, Denver, and Sherrills Ford. We serve waterfront properties along the 520-mile shoreline as well as inland neighborhoods. Our team responds quickly after storms to inspect and document damage across all LKN communities.',
  },
  {
    question: 'What impact-resistant roofing do you recommend for Lake Norman homes?',
    answer:
      'For Lake Norman waterfront homes exposed to storms crossing the lake, we recommend Class 4 impact-resistant shingles such as CertainTeed NorthGate or GAF Armor Shield II. These shingles can withstand hail up to 2 inches in diameter and often qualify for insurance premium discounts of 10-28%. Metal roofing is another excellent option for lakefront properties.',
  },
  {
    question: 'How soon after a hail storm should I schedule an inspection?',
    answer:
      'Schedule an inspection as soon as safely possible after a hail storm. Lake Norman\'s humidity and proximity to water mean that exposed areas from hail damage can deteriorate faster than inland locations. We offer emergency response and can often inspect your roof within 24-48 hours of your call. Don\'t wait for visible leaks - hidden damage gets worse quickly near the lake.',
  },
];

export default function HailDamageRoofRepairLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Hail Damage Roof Repair Lake Norman NC', url: `${SITE_CONFIG.url}/hail-damage-roof-repair-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/hail-damage-roof-repair-lake-norman-nc`}
        pageName="Hail Damage Roof Repair Lake Norman NC"
        city="Lake Norman"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does hail damage roof repair cost in Lake Norman?',
            answer: 'Hail damage roof repair in Lake Norman typically costs $200-$500 for minor repairs, or $8,000-$30,000+ for full roof replacement on larger lakefront homes. Most hail damage is covered by homeowner insurance, so you typically only pay your deductible. Best Roofing Now provides free inspections across Cornelius, Davidson, Mooresville, Huntersville, Denver, and Sherrills Ford.',
            speakableAnswer: 'Minor hail repairs cost $200 to $500, while full replacement runs $8,000 to $30,000. Most hail damage is covered by insurance. Call 704-605-6047 for a free Lake Norman inspection.',
          },
          {
            question: 'Who repairs hail damage roofs in Lake Norman NC?',
            answer: 'Best Roofing Now is Lake Norman\'s trusted hail damage roof repair specialist serving Cornelius, Davidson, Mooresville, Huntersville, Denver, and Sherrills Ford. We provide free hail damage inspections, work with all insurance companies, and specialize in waterfront homes. Call 704-605-6047.',
            speakableAnswer: 'Best Roofing Now repairs hail damaged roofs across Lake Norman. We offer free inspections and handle insurance claims. Call 704-605-6047.',
          },
          {
            question: 'Does insurance cover hail damage to Lake Norman roofs?',
            answer: 'Yes, most homeowners insurance policies in North Carolina cover hail damage to roofs. Lake Norman waterfront homes often carry comprehensive policies with strong storm coverage. You pay your deductible and insurance covers the rest. File claims promptly as NC allows 3 years from the storm date.',
            speakableAnswer: 'Yes, most NC homeowners insurance covers hail damage. You pay your deductible and insurance covers the rest. File within 3 years of the storm.',
          },
          {
            question: 'Are Lake Norman homes more prone to hail damage?',
            answer: 'Lake Norman homes face increased hail exposure because storms can intensify as they cross the open water. Waterfront properties along the 520 miles of shoreline have no wind barriers, making them more vulnerable to wind-driven hail. Impact-resistant Class 4 shingles are recommended for lakefront homes.',
            speakableAnswer: 'Lake Norman homes face higher hail risk because storms intensify crossing the open water. Waterfront homes should use impact-resistant Class 4 shingles.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.projects.stormDamage1}
            alt="Hail damage roof repair Lake Norman NC - Best Roofing Now storm damage experts"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <CloudRain className="w-4 h-4" />
              <span className="text-sm font-semibold">Free Storm Damage Inspections | All LKN Communities</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Hail Damage Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Waterfront storm damage experts serving Cornelius, Davidson, Mooresville, Huntersville, Denver &amp; Sherrills Ford
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Hail storms crossing Lake Norman can produce devastating damage to waterfront and lakefront homes.
              Best Roofing Now provides free hail damage inspections, expert insurance claim assistance, and
              professional repairs throughout the Lake Norman region. We understand the unique challenges
              lakeside properties face and use impact-resistant materials built for the exposure.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Free Hail Damage Inspection
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
                Insurance Claim Experts
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-light" />
                24/7 Emergency Service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Hail Damage Restoration for Lake Norman Homes
            </h2>
            <p className="text-gray text-lg">
              From free inspections to insurance claim assistance and professional repairs, we handle
              every aspect of hail damage restoration for waterfront and inland Lake Norman properties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hailDamageServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray text-sm mb-3">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Signs of Hail Damage */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Signs Your Lake Norman Roof Has Hail Damage
              </h2>
              <p className="text-gray text-lg mb-8">
                Hail storms crossing Lake Norman can produce larger hailstones as they gain energy over
                the open water. Waterfront homes are especially vulnerable since there are no wind barriers
                to slow the storm. Even if your roof looks fine from the ground, it may have sustained
                significant damage that worsens quickly in the humid lakeside environment.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {hailDamageSigns.map((sign) => (
                  <div key={sign} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-dark">{sign}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
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
                src={IMAGES.services.stormDamage}
                alt="Signs of hail damage on Lake Norman roof"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-lg">Free Inspections</p>
                <p className="text-sm text-white/90">All Lake Norman communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Lake Norman Homeowners Trust Us With Hail Damage Claims
            </h2>
            <p className="text-gray text-lg">
              Navigating insurance claims after a hail storm can be stressful. Best Roofing Now has helped
              hundreds of Lake Norman homeowners get fair settlements for storm damage to their homes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Claims Process */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Insurance Claims Process
            </h2>
            <p className="text-white/80 text-lg">
              We make the hail damage insurance claim process simple and stress-free for Lake Norman homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-bold mb-2 text-white">Free Inspection</h3>
              <p className="text-white/80 text-sm">We inspect your Lake Norman home and document all damage with photos.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-bold mb-2 text-white">File Claim</h3>
              <p className="text-white/80 text-sm">We help you file your insurance claim with complete documentation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-bold mb-2 text-white">Meet Adjuster</h3>
              <p className="text-white/80 text-sm">We meet with your insurance adjuster to ensure all damage is covered.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="font-bold mb-2 text-white">Repair Roof</h3>
              <p className="text-white/80 text-sm">Once approved, we complete professional repairs with impact-resistant materials.</p>
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
                Recent Hail Storm in Lake Norman?
              </h2>
              <p className="text-white/90">
                Don&apos;t wait - schedule your free hail damage inspection today. Lakeside damage worsens faster in humid conditions.
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
                Free Inspection
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

      {/* Service Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Hail Damage Repair Across Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We respond quickly to hail storms throughout the entire Lake Norman region and surrounding communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Lake Norman Communities */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Norman Communities</h3>
              <div className="flex flex-wrap gap-2">
                {lakeNormanCommunities.map((community) => (
                  <span
                    key={community}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {community}
                  </span>
                ))}
              </div>
            </div>

            {/* City Pages */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Cities We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {lakeNormanCities.map((city) => (
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
                Lake Norman Hail Damage Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about hail damage roof repair and insurance claims in the Lake Norman area.
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
        city="Lake Norman"
        slug="hail-damage-roof-repair-lake-norman-nc"
        count={4}
        title="Recent Roofing Projects in the Lake Norman Area"
        subtitle="Browse completed roofing projects from the Lake Norman region by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/hail-damage-roof-repair-lake-norman-nc`}
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Hail Damage Roof Repair"
      />

      <CTASection
        title="Don't Let Hail Damage Go Unrepaired"
        subtitle="Schedule your free hail damage inspection today. Our team covers the entire Lake Norman region and will document all damage, help with your insurance claim, and ensure your lakefront or inland home is properly protected."
      />
    </>
  );
}
