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
  CloudLightning,
  FileText,
  AlertTriangle,
  MapPin,
  Umbrella,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocationSchema,
  WebPageSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Storm Damage Repair Denver NC',
  description:
    'Storm damage roof repair in Denver NC. Expert hail, wind, and emergency repairs on Lake Norman western shore. Insurance claim help. Free inspections!',
  keywords: [
    'storm damage roof repair Denver NC',
    'hail damage roof repair Denver',
    'wind damage roof Denver NC',
    'storm damage roofer Denver',
    'roof insurance claim Denver NC',
    'emergency storm repair Denver NC',
    'Lake Norman western shore storm damage',
    'Denver NC storm damage contractor',
    'roof repair after storm Denver',
    'Lincoln County storm damage roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/storm-damage-roof-repair-denver-nc`,
  },
  openGraph: {
    title: 'Storm Damage Roof Repair Denver NC | Insurance Help | Best Roofing Now',
    description:
      'Expert storm damage roof repair in Denver NC on Lake Norman western shore. Hail, wind, and emergency repairs. Insurance claim assistance. Free storm damage inspections!',
    url: `${SITE_CONFIG.url}/storm-damage-roof-repair-denver-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero7,
        width: 1200,
        height: 630,
        alt: 'Storm damage roof repair services in Denver NC - Best Roofing Now',
      },
    ],
  },
};

// Storm damage services offered
const stormServices = [
  {
    icon: CloudLightning,
    title: 'Hail Damage Repair',
    description: 'Expert assessment and repair of hail damage including shingle bruising, cracking, and granule loss on western shore homes.',
    href: '/services/storm-damage',
  },
  {
    icon: CloudRain,
    title: 'Wind Damage Repair',
    description: 'Repair of wind-lifted, torn, or missing shingles caused by storms crossing Lake Norman from the west.',
    href: '/services/storm-damage',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Tarping',
    description: '24/7 emergency tarping service for Denver homes exposed to active leaks after severe storms.',
    href: '/services/emergency-roofing',
  },
  {
    icon: FileText,
    title: 'Insurance Claims Help',
    description: 'Complete insurance claim assistance from documentation through adjuster meetings to settlement advocacy.',
    href: '/services/insurance-claims',
  },
  {
    icon: Umbrella,
    title: 'Tree Damage Repair',
    description: 'Removal of fallen branches and tree limbs, plus structural repair from impact damage near wooded areas.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Shield,
    title: 'Water Damage Prevention',
    description: 'Fast response to prevent water intrusion and interior damage after roof breaches on lakefront properties.',
    href: '/services/emergency-roofing',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: FileText,
    title: 'Insurance Experts',
    description: 'Extensive experience working with all major insurance companies to maximize your storm damage claim.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description: 'Round-the-clock emergency service for Denver homes when severe Lake Norman storms strike.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and proven storm restoration track record.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star reviews from homeowners we've helped after storms.`,
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with comprehensive insurance covering Lincoln County operations.',
  },
  {
    icon: Users,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned with military discipline applied to every storm restoration project.',
  },
];

// Denver neighborhoods/areas
const denverAreas = [
  'Trilogy at Lake Norman',
  'Sailview',
  'Westport',
  'Beatty\'s Ford',
  'East Lincoln',
  'Pinnacle Shores',
  'Magnolia Shores',
  'Island Point',
  'Coves of Lake Norman',
  'Lake Norman State Park Area',
  'Downtown Denver',
  'Highway 16 Corridor',
];

// Nearby cities
const nearbyCities = [
  { name: 'Mooresville', href: '/storm-damage-roof-repair-mooresville-nc' },
  { name: 'Cornelius', href: '/storm-damage-roof-repair-cornelius-nc' },
  { name: 'Huntersville', href: '/storm-damage-roof-repair-huntersville-nc' },
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Charlotte', href: '/storm-damage-roof-repair-charlotte-nc' },
  { name: 'Lake Norman', href: '/locations/lake-norman' },
];

// FAQs specific to storm damage in Denver NC
const faqs = [
  {
    question: 'Why does Denver NC get hit harder by storms than other Lake Norman towns?',
    answer:
      'Denver sits on the western shore of Lake Norman, directly in the path of storm systems that move west-to-east across the Piedmont. Without the buffer of land mass to the west, storms carry full force across open water before striking Denver properties. This unique exposure means Denver homes in communities like Sailview and Pinnacle Shores often sustain more wind and hail damage than homes on the eastern shore.',
  },
  {
    question: 'Will my insurance cover storm damage repairs in Denver NC?',
    answer:
      'Most homeowners insurance policies in North Carolina cover storm damage from wind, hail, and fallen trees. Your specific coverage depends on your policy and deductible. We work directly with all major insurance companies and have extensive experience with Lincoln County storm claims. Our free inspection includes detailed photo documentation that strengthens your claim.',
  },
  {
    question: 'How soon after a storm should I get my Denver NC roof inspected?',
    answer:
      'We recommend scheduling an inspection within 1-2 weeks after any significant storm. North Carolina insurance policies have time limits for filing claims, and small damage can worsen quickly - especially on lakefront properties exposed to moisture and follow-up storms. Our Denver NC team can typically inspect your roof within 24-48 hours of your call.',
  },
  {
    question: 'Do you work with my insurance company on Denver NC storm claims?',
    answer:
      'Yes. Best Roofing Now has extensive experience working with State Farm, Allstate, Nationwide, Liberty Mutual, USAA, and every major insurer. We handle the complete claims process for Denver homeowners: documenting damage with detailed photos, meeting with adjusters at your property, supplementing underpaid claims, and advocating for fair settlements.',
  },
  {
    question: 'What should I do immediately after a storm damages my Denver home?',
    answer:
      'First, ensure your family is safe and stay away from any downed power lines or structural damage. Document visible damage with photos from the ground - do not climb on the roof. If you have active leaks, place buckets to catch water and move valuables. Call us at (704) 605-6047 for emergency tarping if needed. Do not make permanent repairs before your insurance inspection.',
  },
  {
    question: 'How long does storm damage repair take in Denver NC?',
    answer:
      'Timeline depends on damage extent and insurance processing. Emergency tarping happens within hours. Minor repairs can be completed within days of insurance approval. Full roof replacements take 1-3 days once materials arrive. The insurance claim process typically takes 2-4 weeks. We coordinate with Lincoln County for any required permits and keep you informed throughout.',
  },
  {
    question: 'Are there specific Lincoln County requirements for storm damage repairs?',
    answer:
      'Lincoln County requires building permits for roof replacements and significant structural repairs. Denver NC also falls under specific zoning and lake overlay regulations near the shoreline. Our team handles all Lincoln County permitting requirements, ensures work meets current building codes, and coordinates inspections so you don\'t have to worry about compliance.',
  },
  {
    question: 'Can storm damage be covered if my Denver roof was already aging?',
    answer:
      'Yes, insurance typically covers storm damage even on older roofs. The key is demonstrating that damage was caused by a specific weather event, not normal wear. Our inspectors are trained to distinguish between storm damage and pre-existing conditions, and we document findings in a way that clearly shows storm-related damage to support your claim.',
  },
];

export default function StormDamageRoofRepairDenverNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Damage Roof Repair Denver NC', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-denver-nc` },
        ]}
      />
      <WebPageSchema
        name="Storm Damage Roof Repair Denver NC | Insurance Help"
        description="Expert storm damage roof repair in Denver NC on Lake Norman western shore. Hail and wind damage specialists with insurance claim assistance."
        url={`${SITE_CONFIG.url}/storm-damage-roof-repair-denver-nc`}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Damage Roof Repair Denver NC', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-denver-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocationSchema
        location={{
          city: 'Denver',
          state: 'NC',
          slug: 'denver-nc',
          county: 'Lincoln',
        }}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair-denver-nc`}
        pageName="Storm Damage Roof Repair Denver NC"
        city="Denver"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'Who repairs storm damaged roofs in Denver NC?',
            answer: 'Best Roofing Now provides expert storm damage roof repair in Denver NC with 24/7 emergency response on the Lake Norman western shore. We specialize in hail damage, wind damage, and insurance claim assistance. We serve Trilogy, Sailview, Westport, and all Denver neighborhoods. Call 704-605-6047 for a free storm damage inspection.',
            speakableAnswer: 'Best Roofing Now repairs storm damaged roofs in Denver NC with 24/7 emergency response on Lake Norman western shore. Call 704-605-6047.',
          },
          {
            question: 'Does insurance cover storm damage roof repair in Denver NC?',
            answer: 'Yes, most homeowners insurance policies in North Carolina cover storm damage including hail, wind, and fallen trees. Best Roofing Now works directly with all major insurance companies, meets with adjusters, and helps maximize your claim settlement for Denver NC homeowners in Lincoln County.',
            speakableAnswer: 'Yes, most NC homeowners insurance covers storm damage. We help Denver NC homeowners maximize claims. Call 704-605-6047.',
          },
          {
            question: 'How quickly can you respond to storm damage in Denver NC?',
            answer: 'Best Roofing Now offers 24/7 emergency storm damage response in Denver NC and the Lake Norman western shore. Emergency tarping within hours, full inspections within 24-48 hours. We understand the unique storm exposure Denver faces on the western shore.',
            speakableAnswer: 'We offer 24/7 emergency response in Denver NC. Emergency tarping within hours, inspections within 24 to 48 hours.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero7}
            alt="Storm damage roof repair services in Denver NC on Lake Norman western shore"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <CloudLightning className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 Emergency Storm Response - Western Shore</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Storm Damage Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Denver NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert hail and wind damage repairs for Lake Norman&apos;s exposed western shore
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Denver NC sits directly in the path of storms crossing Lake Norman, making western shore homes
              especially vulnerable to hail and wind damage. Best Roofing Now provides rapid emergency response,
              thorough damage assessments, and expert insurance claim assistance to restore your roof after every storm.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Free Storm Inspection
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Emergency: {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-light" />
                24/7 Emergency Service
              </span>
              <span className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent-light" />
                Insurance Claim Experts
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Free Inspections
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
              Storm Damage Services in Denver NC
            </h2>
            <p className="text-gray text-lg">
              From emergency tarping to complete storm restoration, we handle all aspects of storm damage
              repair and insurance claims for Denver homeowners on the Lake Norman western shore.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stormServices.map((service) => (
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

      {/* Insurance Claims Process Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Denver NC Storm Damage Insurance Process
              </h2>
              <p className="text-gray text-lg">
                We simplify the insurance claims process for Denver homeowners dealing with storm damage in Lincoln County.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-dark mb-2">Free Inspection</h3>
                <p className="text-gray text-sm">
                  We inspect your Denver home and document all storm damage with detailed photos and measurements.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-dark mb-2">File Claim</h3>
                <p className="text-gray text-sm">
                  We help you file your insurance claim with comprehensive documentation that supports approval.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-dark mb-2">Meet Adjuster</h3>
                <p className="text-gray text-sm">
                  We meet with your insurance adjuster on-site to ensure all western shore storm damage is properly assessed.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-dark mb-2">Restore Roof</h3>
                <p className="text-gray text-sm">
                  Once approved, we complete repairs quickly with Lincoln County permits and professional craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={IMAGES.projects.stormDamage1}
                alt="Storm damage assessment on Denver NC Lake Norman western shore home"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-dark">Insurance Experts</p>
                    <p className="text-sm text-gray">Lincoln County storm claims</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Denver Homeowners Trust Us After Storms
              </h2>
              <p className="text-gray text-lg mb-8">
                Denver&apos;s position on the western shore of Lake Norman means storms hit your home with
                less warning and more force. You need a roofing company that understands this unique exposure,
                responds rapidly, and has the experience to navigate Lincoln County requirements and insurance
                claims efficiently.
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
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Storm Damage in Denver NC?
              </h2>
              <p className="text-white/90">
                Get a free inspection and let us handle your insurance claim. We fight for fair settlements for western shore homeowners.
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
                Free Storm Inspection
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
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Storm Damage Response Throughout Denver NC
            </h2>
            <p className="text-gray text-lg">
              We provide rapid storm damage response throughout Denver, Lincoln County, and the Lake Norman western shore.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Denver Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Denver Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {denverAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
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

      {/* Western Shore Storm Patterns Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Denver NC Western Shore Storm Exposure
            </h2>
            <p className="text-gray text-lg">
              Understanding why Denver homes face greater storm risk and what you can do to protect your property.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CloudLightning className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Direct Storm Path</h3>
              <p className="text-gray text-sm">
                Piedmont storms move west-to-east, hitting Denver&apos;s western shore first. Without upwind shelter, homes in Sailview, Westport, and Pinnacle Shores take the full brunt of approaching weather systems.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CloudRain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Lake-Enhanced Winds</h3>
              <p className="text-gray text-sm">
                Lake Norman&apos;s open water surface accelerates wind speeds. Gusts crossing the lake reach Denver waterfront homes at higher velocities, increasing the risk of shingle lift-off and debris impact.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Tree Hazard Zone</h3>
              <p className="text-gray text-sm">
                Dense tree coverage near Lake Norman State Park and along Beatty&apos;s Ford Road creates falling limb hazards during storms. Large hardwood branches can penetrate roofing materials and cause structural damage.
              </p>
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
                Storm Damage FAQs - Denver NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about storm damage and insurance claims in Denver NC and the Lake Norman western shore.
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

      <GeoProjectGalleryStrip pageType="location" city="Denver" slug="storm-damage-roof-repair-denver-nc" />

      {/* Final CTA */}

      <CityGeoSection

        city="Denver"

        state="NC"

        citySlug="denver-nc"

        service="Storm Damage Roof Repair"

      />

      <CTASection
        title="Need Storm Damage Help in Denver NC?"
        subtitle="Contact us today for a free storm damage inspection on the Lake Norman western shore. We'll document all damage, help file your insurance claim with Lincoln County expertise, and restore your roof to pre-storm condition."
      />
    </>
  );
}
