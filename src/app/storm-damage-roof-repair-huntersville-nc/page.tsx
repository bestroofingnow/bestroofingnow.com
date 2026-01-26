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

export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair Huntersville NC | Insurance Help | Best Roofing Now',
  description:
    'Storm damage roof repair in Huntersville NC. Expert hail damage, wind damage, and emergency repairs. We work with your insurance company to get your roof restored. Free inspections!',
  keywords: [
    'storm damage roof repair Huntersville NC',
    'hail damage roof repair Huntersville',
    'wind damage roof Huntersville NC',
    'storm damage roofer Huntersville',
    'roof insurance claim Huntersville',
    'emergency storm repair Huntersville',
    'hail damage roofer near me',
    'storm damage roofing company',
    'Huntersville storm damage contractor',
    'roof repair after storm Huntersville',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/storm-damage-roof-repair-huntersville-nc`,
  },
  openGraph: {
    title: 'Storm Damage Roof Repair Huntersville NC | Insurance Help | Best Roofing Now',
    description:
      'Expert storm damage roof repair in Huntersville NC. Hail, wind, and emergency repairs. Insurance claim assistance. Free storm damage inspections!',
    url: `${SITE_CONFIG.url}/storm-damage-roof-repair-huntersville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero7,
        width: 1200,
        height: 630,
        alt: 'Storm damage roof repair services in Huntersville NC - Best Roofing Now',
      },
    ],
  },
};

// Storm damage services offered
const stormServices = [
  {
    icon: CloudLightning,
    title: 'Hail Damage Repair',
    description: 'Expert assessment and repair of hail damage including shingle dents, cracks, and granule loss.',
    href: '/services/storm-damage',
  },
  {
    icon: CloudRain,
    title: 'Wind Damage Repair',
    description: 'Repair of wind-lifted, torn, or missing shingles and damaged flashing from high winds.',
    href: '/services/storm-damage',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Tarping',
    description: '24/7 emergency tarping service to prevent further water damage after severe storms.',
    href: '/services/emergency-roofing',
  },
  {
    icon: FileText,
    title: 'Insurance Claims Help',
    description: 'Complete insurance claim assistance including documentation, adjuster meetings, and advocacy.',
    href: '/services/insurance-claims',
  },
  {
    icon: Umbrella,
    title: 'Water Damage Prevention',
    description: 'Fast response to prevent water intrusion and secondary damage to your home interior.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Shield,
    title: 'Free Storm Inspection',
    description: 'Complimentary post-storm inspection with detailed damage assessment and photo documentation.',
    href: '/services/roof-inspection',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: FileText,
    title: 'Insurance Experts',
    description: 'Extensive experience working with all major insurance companies to maximize your claim.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description: 'Round-the-clock emergency service when storms strike unexpectedly.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and proven track record.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star reviews from homeowners we've helped after storms.`,
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with comprehensive insurance coverage.',
  },
  {
    icon: Users,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned with military values of integrity and service.',
  },
];

// Huntersville neighborhoods/areas
const huntersvilleAreas = [
  'Birkdale Village',
  'Rosedale',
  'Skybrook',
  'The Farms',
  'Vermillion',
  'Magnolia Estates',
  'Cedarfield',
  'Northstone Club',
  'Highland Creek',
  'Gilead Ridge',
  'Wynfield',
  'Beckett',
];

// Nearby cities
const nearbyCities = [
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Denver', href: '/locations/denver-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
];

// FAQs specific to storm damage in Huntersville
const faqs = [
  {
    question: 'How do I know if my Huntersville home has storm damage?',
    answer:
      'After a storm, look for obvious signs like missing shingles, debris on the roof, dented gutters, or water stains inside. However, much storm damage is not visible from the ground - hail damage often appears as small dents or bruises on shingles, and wind damage may loosen shingles without removing them. We offer free post-storm inspections in Huntersville to identify all damage, including hidden issues that could lead to leaks later.',
  },
  {
    question: 'Will my insurance cover storm damage repairs in Huntersville?',
    answer:
      'Most homeowners insurance policies in North Carolina cover storm damage including wind, hail, and fallen trees. Your coverage depends on your specific policy and deductible. We work directly with insurance companies every day and can help you understand your coverage. Our free inspection includes detailed documentation that supports your claim.',
  },
  {
    question: 'How soon after a storm should I get my roof inspected?',
    answer:
      'We recommend getting your roof inspected within 1-2 weeks after any significant storm in Huntersville. North Carolina insurance policies typically have time limits for filing claims, and delaying inspection can allow small damage to become bigger problems. Our team responds quickly after storms and can usually inspect your roof within 24-48 hours.',
  },
  {
    question: 'Do you work with my insurance company?',
    answer:
      'Yes! Best Roofing Now has extensive experience working with all major insurance companies including State Farm, Allstate, Nationwide, Liberty Mutual, USAA, and others. We handle the entire claims process - from documenting damage with photos and measurements, to meeting with adjusters, to advocating for fair settlements. We make the process as stress-free as possible.',
  },
  {
    question: 'What if my insurance claim is denied or underpaid?',
    answer:
      'If your claim is denied or underpaid, we can help. We frequently supplement underpaid claims with additional documentation that insurance companies may have missed. If needed, we can request re-inspection by a different adjuster. Our goal is to ensure you receive fair compensation for legitimate storm damage.',
  },
  {
    question: 'How long does storm damage repair take in Huntersville?',
    answer:
      'The timeline depends on the extent of damage and insurance approval process. Minor repairs can be completed within days of approval. Full roof replacements due to storm damage typically take 1-3 days once materials arrive. The insurance claim process usually takes 1-4 weeks. We keep you informed throughout and work efficiently once approved.',
  },
  {
    question: 'Do I need to pay anything upfront for storm damage repair?',
    answer:
      'For insurance claims, you typically only pay your deductible. We do not require large upfront payments before work begins on approved insurance claims. We bill your insurance company directly for covered work. During your free inspection, we will explain exactly what costs to expect based on your policy.',
  },
  {
    question: 'What should I do immediately after a storm damages my roof?',
    answer:
      'First, ensure your family is safe and document any visible damage with photos. If you have an active leak, place buckets to catch water and move valuables away from the affected area. Call us at (704) 605-6047 for emergency tarping if needed. Do not make permanent repairs before your insurance inspection, as this can complicate your claim. We can guide you through the entire process.',
  },
];

export default function StormDamageRoofRepairHuntersvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Damage Roof Repair Huntersville NC', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-huntersville-nc` },
        ]}
      />
      <WebPageSchema
        name="Storm Damage Roof Repair Huntersville NC | Insurance Help"
        description="Expert storm damage roof repair in Huntersville NC. Hail and wind damage specialists with insurance claim assistance."
        url={`${SITE_CONFIG.url}/storm-damage-roof-repair-huntersville-nc`}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Damage Roof Repair Huntersville NC', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-huntersville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocationSchema
        location={{
          city: 'Huntersville',
          state: 'NC',
          slug: 'huntersville-nc',
          county: 'Mecklenburg',
        }}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair-huntersville-nc`}
        pageName="Storm Damage Roof Repair Huntersville NC"
        city="Huntersville"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'Who repairs storm damaged roofs in Huntersville NC?',
            answer: 'Best Roofing Now provides expert storm damage roof repair in Huntersville NC with 24/7 emergency response. We specialize in hail damage, wind damage, and insurance claim assistance. We serve Birkdale Village, Rosedale, Skybrook, and all Huntersville neighborhoods. Call 704-605-6047 for a free storm damage inspection.',
            speakableAnswer: 'Best Roofing Now repairs storm damaged roofs in Huntersville with 24/7 emergency response. We handle hail and wind damage plus insurance claims. Call 704-605-6047.',
          },
          {
            question: 'Does insurance cover storm damage roof repair in Huntersville?',
            answer: 'Yes, most homeowners insurance policies in North Carolina cover storm damage including hail, wind, and fallen trees. Best Roofing Now works directly with all major insurance companies, meets with adjusters, and helps maximize your claim settlement. You typically pay only your deductible.',
            speakableAnswer: 'Yes, most NC homeowners insurance covers storm damage to roofs. We work with all insurers and help maximize your claim. You typically pay only your deductible.',
          },
          {
            question: 'How quickly can you respond to storm damage in Huntersville?',
            answer: 'Best Roofing Now offers 24/7 emergency storm damage response in Huntersville. We can typically have a crew on-site within hours for emergency tarping. Full inspections are usually scheduled within 24-48 hours after you call.',
            speakableAnswer: 'We offer 24/7 emergency response in Huntersville. Emergency tarping within hours, full inspections within 24 to 48 hours.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero7}
            alt="Storm damage roof repair services in Huntersville NC"
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
              <span className="text-accent-light">Huntersville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert hail and wind damage repairs with full insurance claim assistance
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When severe weather strikes Huntersville, Best Roofing Now is here to help. We specialize in storm damage
              assessment, emergency repairs, and working with insurance companies to restore your roof. Free inspections
              for all storm damage claims.
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
              Storm Damage Services in Huntersville NC
            </h2>
            <p className="text-gray text-lg">
              From emergency tarping to complete storm restoration, we handle all aspects of storm damage
              repair and insurance claims for Huntersville homeowners.
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
                Our Storm Damage Insurance Claims Process
              </h2>
              <p className="text-gray text-lg">
                We make the insurance claims process simple and stress-free for Huntersville homeowners.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-dark mb-2">Free Inspection</h3>
                <p className="text-gray text-sm">
                  We thoroughly inspect your roof and document all storm damage with photos.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-dark mb-2">File Claim</h3>
                <p className="text-gray text-sm">
                  We help you file your insurance claim with complete documentation.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-dark mb-2">Meet Adjuster</h3>
                <p className="text-gray text-sm">
                  We meet with your insurance adjuster to ensure all damage is properly assessed.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-dark mb-2">Restore Roof</h3>
                <p className="text-gray text-sm">
                  Once approved, we complete repairs quickly and professionally.
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
                alt="Storm damage assessment in Huntersville NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-dark">Insurance Experts</p>
                    <p className="text-sm text-gray">We handle the entire claim process</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Huntersville Homeowners Trust Us After Storms
              </h2>
              <p className="text-gray text-lg mb-8">
                When your home is damaged by a storm, you need a roofing company that responds fast, documents
                thoroughly, and fights for fair insurance settlements. We have helped thousands of homeowners
                navigate the claims process.
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
                Storm Damage in Huntersville?
              </h2>
              <p className="text-white/90">
                Get a free inspection and let us handle your insurance claim. We fight for fair settlements.
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
              Storm Damage Response Throughout Huntersville
            </h2>
            <p className="text-gray text-lg">
              We provide rapid storm damage response throughout Huntersville and surrounding Lake Norman communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Huntersville Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Huntersville Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {huntersvilleAreas.map((area) => (
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
                Storm Damage FAQs - Huntersville NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about storm damage and insurance claims in Huntersville.
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

      {/* Final CTA */}
      <CTASection
        title="Need Storm Damage Help in Huntersville?"
        subtitle="Contact us today for a free storm damage inspection. We'll document all damage, help file your insurance claim, and restore your roof to pre-storm condition."
      />
    </>
  );
}
