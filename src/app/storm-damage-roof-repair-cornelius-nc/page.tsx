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
  title: 'Storm Damage Roof Repair Cornelius NC | Insurance Help',
  description:
    'Storm damage roof repair in Cornelius NC. Expert hail, wind, and emergency repairs near Lake Norman. Insurance claim assistance. Free storm inspections!',
  keywords: [
    'storm damage roof repair Cornelius NC',
    'hail damage roof repair Cornelius',
    'wind damage roof Cornelius NC',
    'storm damage roofer Cornelius',
    'roof insurance claim Cornelius',
    'emergency storm repair Cornelius',
    'hail damage roofer Lake Norman',
    'storm damage roofing Cornelius NC',
    'Cornelius storm damage contractor',
    'roof repair after storm Cornelius',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/storm-damage-roof-repair-cornelius-nc`,
  },
  openGraph: {
    title: 'Storm Damage Roof Repair Cornelius NC | Insurance Help',
    description:
      'Expert storm damage roof repair in Cornelius NC near Lake Norman. Hail, wind, and emergency repairs with full insurance claim assistance. Free storm inspections!',
    url: `${SITE_CONFIG.url}/storm-damage-roof-repair-cornelius-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero7,
        width: 1200,
        height: 630,
        alt: 'Storm damage roof repair services in Cornelius NC - Best Roofing Now',
      },
    ],
  },
};

// Storm damage services offered in Cornelius
const stormServices = [
  {
    icon: CloudLightning,
    title: 'Hail Damage Repair',
    description: 'Thorough assessment and repair of hail impacts including dented shingles, cracked tiles, and granule loss.',
    href: '/services/storm-damage',
  },
  {
    icon: CloudRain,
    title: 'Wind Damage Repair',
    description: 'Restoration of wind-lifted, torn, or missing shingles and ridge caps on Cornelius homes.',
    href: '/services/storm-damage',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Tarping',
    description: '24/7 emergency tarping to prevent water intrusion while permanent repairs are arranged.',
    href: '/services/emergency-roofing',
  },
  {
    icon: FileText,
    title: 'Insurance Claims Assistance',
    description: 'End-to-end insurance claim support with documentation, adjuster meetings, and settlement advocacy.',
    href: '/services/insurance-claims',
  },
  {
    icon: Umbrella,
    title: 'Tree Damage Repair',
    description: 'Safe removal of fallen limbs and structural repair of roof decking and shingles damaged by trees.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Shield,
    title: 'Water Damage Repair',
    description: 'Quick response to stop active leaks and restore water-damaged decking, insulation, and interior ceilings.',
    href: '/services/roof-repair',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: FileText,
    title: 'Insurance Specialists',
    description: 'Deep experience working with all major carriers to maximize your Cornelius storm damage claim.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description: 'Round-the-clock emergency service for Cornelius homeowners when storms strike without warning.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Better Business Bureau accredited with an A+ rating and a proven record of honest storm work.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star reviews from Lake Norman homeowners we have helped after storms.`,
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed North Carolina roofing contractor with comprehensive liability and workers comp coverage.',
  },
  {
    icon: Users,
    title: 'Veteran-Owned',
    description: 'A veteran-owned business built on integrity, discipline, and service to our Lake Norman neighbors.',
  },
];

// Cornelius neighborhoods/areas
const corneliusAreas = [
  'Downtown Cornelius',
  'Antiquity',
  'Bailey\'s Glen',
  'The Peninsula',
  'Jetton Road',
  'Sailview',
  'Smithville',
  'Westmoreland',
  'The Farms',
  'Oakhurst',
  'Magnolia Estates',
  'Norman Shores',
  'Harbor Cove',
  'Torrence Chapel',
  'West Catawba',
  'Lake Norman Waterfront',
];

// Nearby cities
const nearbyCities = [
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Denver', href: '/storm-damage-roof-repair-denver-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Lake Norman Area', href: '/locations/lake-norman' },
];

// FAQs specific to storm damage in Cornelius
const faqs = [
  {
    question: 'How do I know if my Cornelius home has storm damage?',
    answer:
      'After a storm, check for obvious signs like missing shingles, dented gutters, broken siding, or water stains on ceilings. However, much hail and wind damage is invisible from the ground. Hail often leaves subtle dents or bruises on shingles that only trained inspectors can identify. We provide free post-storm inspections throughout Cornelius, including waterfront properties along The Peninsula and Sailview, where wind exposure is highest.',
  },
  {
    question: 'Will my insurance cover storm damage repairs in Cornelius NC?',
    answer:
      'Most North Carolina homeowners insurance policies cover storm damage from wind, hail, and fallen trees. Coverage depends on your specific policy, deductible, and the type of damage. Many Cornelius HOA communities like Antiquity and Bailey\'s Glen have specific requirements that we understand well. We work directly with insurance companies every day and provide thorough documentation to support your claim.',
  },
  {
    question: 'How soon after a storm should I schedule a roof inspection?',
    answer:
      'We recommend scheduling an inspection within 1-2 weeks of any significant storm event in Cornelius. North Carolina insurers have filing deadlines, and waiting too long can allow minor damage to develop into costly problems. Our team is available for rapid post-storm inspections and can typically be on your roof within 24-48 hours of your call.',
  },
  {
    question: 'Do you work with my insurance company on Cornelius claims?',
    answer:
      'Yes. Best Roofing Now has extensive experience with all major insurance carriers serving Cornelius, including State Farm, Allstate, Nationwide, Liberty Mutual, USAA, and others. We handle the entire claims process: photographing and measuring damage, preparing detailed scope documents, meeting with your adjuster on your roof, and advocating for fair payment. Our goal is to take the stress off your shoulders.',
  },
  {
    question: 'Are Cornelius waterfront homes at greater storm risk?',
    answer:
      'Cornelius properties along Lake Norman, especially in The Peninsula, Sailview, and Norman Shores, are exposed to stronger wind gusts that sweep across the open water. These homes often sustain more shingle lift-off, ridge cap damage, and soffit impact than inland properties. We recommend annual inspections for waterfront homeowners and proactive upgrades like impact-resistant shingles when it is time to reroof.',
  },
  {
    question: 'What if my insurance claim is denied or underpaid?',
    answer:
      'We can help. Many initial claim assessments undercount legitimate damage, especially hail strikes that are difficult to spot. We frequently supplement underpaid claims with additional documentation, close-up photos, and detailed measurements that the adjuster may have missed. If necessary, we can request a re-inspection by a different adjuster to ensure fair compensation.',
  },
  {
    question: 'How long does storm damage repair take in Cornelius?',
    answer:
      'The timeline depends on the severity of damage and the insurance approval process. Emergency tarping is typically completed within hours. Minor repairs are done within days of approval. Full roof replacements due to storm damage usually take 1-3 working days once materials arrive. The insurance claim process itself generally takes 2-4 weeks. We keep you informed at every step.',
  },
  {
    question: 'What should I do immediately after storm damage in Cornelius?',
    answer:
      'First, make sure everyone is safe. Document visible damage with photos or video from ground level. If you have an active leak, place containers to catch water and move furniture away from the affected area. Call us at (704) 605-6047 for emergency tarping if needed. Avoid making permanent repairs before your insurance adjuster inspects the roof, as premature repairs can complicate your claim.',
  },
];

export default function StormDamageRoofRepairCorneliusNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Damage Roof Repair Cornelius NC', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-cornelius-nc` },
        ]}
      />
      <WebPageSchema
        name="Storm Damage Roof Repair Cornelius NC | Insurance Help"
        description="Expert storm damage roof repair in Cornelius NC near Lake Norman. Hail and wind damage specialists with insurance claim assistance."
        url={`${SITE_CONFIG.url}/storm-damage-roof-repair-cornelius-nc`}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Damage Roof Repair Cornelius NC', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-cornelius-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocationSchema
        location={{
          city: 'Cornelius',
          state: 'NC',
          slug: 'cornelius-nc',
          county: 'Mecklenburg',
        }}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair-cornelius-nc`}
        pageName="Storm Damage Roof Repair Cornelius NC"
        city="Cornelius"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'Who repairs storm damaged roofs in Cornelius NC?',
            answer: 'Best Roofing Now provides expert storm damage roof repair in Cornelius NC with 24/7 emergency response. We specialize in hail damage, wind damage, and insurance claim assistance for Lake Norman waterfront and inland homes. We serve Antiquity, The Peninsula, Sailview, Jetton Road, and all Cornelius neighborhoods. Call 704-605-6047 for a free storm inspection.',
            speakableAnswer: 'Best Roofing Now repairs storm damaged roofs in Cornelius with 24/7 emergency response. We handle hail and wind damage plus insurance claims. Call 704-605-6047.',
          },
          {
            question: 'Does insurance cover storm damage roof repair in Cornelius?',
            answer: 'Yes, most homeowners insurance policies in North Carolina cover storm damage including hail, wind, and fallen trees. Best Roofing Now works directly with all major insurance companies in Cornelius, meets with adjusters on your roof, and helps maximize your claim settlement. You typically pay only your deductible.',
            speakableAnswer: 'Yes, most NC homeowners insurance covers storm damage to roofs. We work with all insurers and help maximize your claim. You typically pay only your deductible.',
          },
          {
            question: 'How quickly can you respond to storm damage in Cornelius NC?',
            answer: 'Best Roofing Now offers 24/7 emergency storm damage response across Cornelius and Lake Norman. We can typically dispatch a crew for emergency tarping within hours. Full inspections are scheduled within 24-48 hours of your call.',
            speakableAnswer: 'We offer 24/7 emergency response in Cornelius. Emergency tarping within hours, full inspections within 24 to 48 hours.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero7}
            alt="Storm damage roof repair services in Cornelius NC near Lake Norman"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <CloudLightning className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 Emergency Storm Response</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Storm Damage Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Cornelius NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert hail and wind damage repairs with full insurance claim support
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When severe weather hits Cornelius and the Lake Norman shoreline, Best Roofing Now responds
              fast. We specialize in storm damage assessment, emergency tarping, and working with your
              insurance company to restore your roof. Free inspections for every Cornelius homeowner after
              storm events.
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
              Storm Damage Services in Cornelius NC
            </h2>
            <p className="text-gray text-lg">
              From emergency tarping to complete storm restoration and insurance claims, we handle every
              aspect of storm damage recovery for Cornelius and Lake Norman homeowners.
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
                Our Cornelius Storm Damage Insurance Process
              </h2>
              <p className="text-gray text-lg">
                We make the insurance claims process simple and stress-free for Cornelius homeowners,
                including those in HOA communities with additional requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-dark mb-2">Free Inspection</h3>
                <p className="text-gray text-sm">
                  We inspect your Cornelius roof and document every hail strike, wind lift, and damaged area with photos.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-dark mb-2">File Your Claim</h3>
                <p className="text-gray text-sm">
                  We help you file with complete documentation, including scope of work and material specifications.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-dark mb-2">Meet Adjuster</h3>
                <p className="text-gray text-sm">
                  We meet your insurance adjuster on your roof to ensure every item of damage is properly identified.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-dark mb-2">Restore Your Roof</h3>
                <p className="text-gray text-sm">
                  Once approved, we complete repairs efficiently, meeting any HOA architectural guidelines in Cornelius.
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
                alt="Storm damage assessment on a Cornelius NC roof near Lake Norman"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-dark">Insurance Experts</p>
                    <p className="text-sm text-gray">Full claim management for Cornelius</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Cornelius Homeowners Trust Us After Storms
              </h2>
              <p className="text-gray text-lg mb-8">
                Lake Norman waterfront properties and Cornelius HOA communities have unique needs after
                storm events. We understand the architectural guidelines in Antiquity, The Peninsula,
                and Bailey&apos;s Glen, and we navigate insurance claims to ensure you receive fair
                compensation for every dollar of legitimate damage.
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
                Storm Damage in Cornelius?
              </h2>
              <p className="text-white/90">
                Get a free inspection and let us handle your insurance claim from start to finish.
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

      {/* Cornelius Storm Risk Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Cornelius Homes Are Vulnerable to Storm Damage
            </h2>
            <p className="text-gray text-lg">
              Cornelius sits at the heart of Lake Norman, and its location creates specific weather
              risks that every homeowner should understand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Lake-Effect Wind Exposure</h3>
              <p className="text-gray text-sm">
                Waterfront neighborhoods like The Peninsula, Sailview, and Norman Shores face stronger
                wind gusts that accelerate across the open lake surface, causing more shingle lift-off
                and ridge cap damage than inland areas.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Hail Corridor Storms</h3>
              <p className="text-gray text-sm">
                Mecklenburg County lies within a regional hail corridor. Cornelius frequently experiences
                hailstones large enough to crack shingles, dent flashing, and damage gutters during
                spring and summer storm cells.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Mature Tree Canopy</h3>
              <p className="text-gray text-sm">
                Established Cornelius neighborhoods like Antiquity, Westmoreland, and The Farms are
                surrounded by tall hardwoods and pines. High winds snap branches that puncture roofing
                materials, damage decking, and clog gutters.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Tropical Storm Remnants</h3>
              <p className="text-gray text-sm">
                Cornelius occasionally receives sustained heavy rainfall and gusty winds from tropical
                systems that track inland. These extended events test flashing, valleys, and drainage
                systems beyond typical storm scenarios.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">HOA Compliance Needs</h3>
              <p className="text-gray text-sm">
                Many Cornelius communities have strict architectural guidelines for roofing materials
                and colors. After storm damage, repairs must meet HOA standards. We ensure every
                replacement matches approved specifications.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Ice and Winter Storms</h3>
              <p className="text-gray text-sm">
                Winter ice events in the Lake Norman area add weight to roof surfaces and create
                ice dams at eaves. We repair damaged gutters, cracked shingles, and water-damaged
                soffit caused by freeze-thaw cycles.
              </p>
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
              Storm Damage Response Throughout Cornelius
            </h2>
            <p className="text-gray text-lg">
              We provide rapid storm damage response across every Cornelius neighborhood and the
              surrounding Lake Norman communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Cornelius Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Cornelius Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {corneliusAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
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
                Storm Damage FAQs - Cornelius NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about storm damage repairs and insurance claims in Cornelius.
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

      <GeoProjectGalleryStrip pageType="location" city="Cornelius" slug="storm-damage-roof-repair-cornelius-nc" />

      {/* Final CTA */}

      <CityGeoSection

        city="Cornelius"

        state="NC"

        citySlug="cornelius-nc"

        service="Storm Damage Roof Repair"

      />

      <CTASection
        title="Need Storm Damage Help in Cornelius?"
        subtitle="Contact us today for a free storm damage inspection. We'll document all damage, guide you through the insurance process, and restore your Lake Norman home to pre-storm condition."
      />
    </>
  );
}
