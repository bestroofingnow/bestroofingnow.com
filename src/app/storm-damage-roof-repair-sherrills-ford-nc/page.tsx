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
  Users,
  Clock,
  Wrench,
  Home,
  Search,
  MapPin,
  CloudRain,
  Wind,
  AlertTriangle,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair Sherrills Ford',
  description:
    'Storm damage roof repair in Sherrills Ford NC. Best Roofing Now restores wind, hail, and storm-damaged roofs for Lake Norman homes. Insurance claim experts. BBB A+ rated, veteran-owned. Free storm damage inspections!',
  keywords: [
    'storm damage roof repair sherrills ford nc',
    'storm damage roofer sherrills ford',
    'hail damage roof repair sherrills ford',
    'wind damage roof sherrills ford nc',
    'lake norman storm damage roofing',
    'catawba county storm roof repair',
    'roof insurance claim sherrills ford',
    'storm damage restoration sherrills ford nc',
    'roof damage sherrills ford',
    'hurricane damage roof repair sherrills ford',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/storm-damage-roof-repair-sherrills-ford-nc`,
  },
  openGraph: {
    title: 'Storm Damage Roof Repair Sherrills Ford NC | Insurance Claims | Best Roofing Now',
    description:
      'Expert storm damage roof repair in Sherrills Ford NC. Wind, hail, and severe weather restoration for Lake Norman homes. Insurance claim assistance. Free inspections!',
    url: `${SITE_CONFIG.url}/storm-damage-roof-repair-sherrills-ford-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.stormDamage,
        width: 1200,
        height: 630,
        alt: 'Storm damage roof repair in Sherrills Ford NC - Best Roofing Now',
      },
    ],
  },
};

// Storm damage services
const stormServices = [
  {
    icon: Wind,
    title: 'Wind Damage Repair',
    description: 'Repair missing shingles, lifted flashing, and structural damage caused by high winds off Lake Norman.',
    href: '/services/storm-damage',
  },
  {
    icon: CloudRain,
    title: 'Hail Damage Repair',
    description: 'Identify and repair hail damage including dented shingles, cracked tiles, and bruised materials.',
    href: '/services/storm-damage',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Tarping',
    description: 'Immediate tarping and board-up services to prevent further water intrusion after storms.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Home,
    title: 'Full Restoration',
    description: 'Complete storm damage restoration from initial assessment through final insurance-approved repairs.',
    href: '/services/storm-damage',
  },
  {
    icon: Shield,
    title: 'Insurance Claims Help',
    description: 'We manage your claim from documentation through adjuster meetings and settlement negotiations.',
    href: '/services/storm-damage',
  },
  {
    icon: Search,
    title: 'Free Storm Inspection',
    description: 'Comprehensive post-storm inspections to document all damage for your insurance claim.',
    href: '/services/roof-inspection',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from homeowners across the Lake Norman region.`,
  },
  {
    icon: Shield,
    title: 'Insurance Experts',
    description: 'Extensive experience navigating storm damage insurance claims for Lake Norman homeowners.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with comprehensive insurance for storm damage restoration.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Rapid post-storm response to assess damage and begin the claims process quickly.',
  },
  {
    icon: Users,
    title: 'Veteran-Owned',
    description: 'Military integrity means we advocate for you, not upsell services you don\'t need.',
  },
];

// Sherrills Ford area communities
const localAreas = [
  'Sherrills Ford',
  'Lake Norman Waterfront',
  'Catawba County',
  'Terrell',
  'Claremont',
  'Maiden',
  'Conover',
  'Newton',
  'Hickory',
  'Denver',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Hickory', href: '/locations/hickory-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs
const faqs = [
  {
    question: 'How do I know if my Sherrills Ford roof has storm damage?',
    answer:
      'Common signs include missing or damaged shingles, granules in gutters, dented flashing or vents, water stains on ceilings, and visible dents on metal components. After any significant storm in the Lake Norman area, we recommend a free professional inspection. Some damage is invisible from the ground but can lead to serious problems if left unrepaired.',
  },
  {
    question: 'Will my insurance cover storm damage roof repair in Sherrills Ford?',
    answer:
      'Most homeowner\'s insurance policies cover storm damage including wind, hail, fallen trees, and lightning. Your policy typically covers the cost of repair or replacement minus your deductible. We provide thorough documentation, meet with adjusters, and advocate for fair settlements to maximize your coverage.',
  },
  {
    question: 'How does the storm damage insurance claim process work?',
    answer:
      'The process starts with a free inspection where we document all damage. You then file a claim with your insurance company. An adjuster is assigned to assess the damage. We meet with the adjuster to ensure nothing is missed. Once approved, we complete the repairs. We handle the paperwork and communication throughout the entire process.',
  },
  {
    question: 'How quickly should I get storm damage repaired in Sherrills Ford?',
    answer:
      'You should schedule a storm damage inspection as soon as possible after a storm. Insurance companies have time limits for filing claims, and unrepaired damage can worsen quickly - especially with the humidity and rainfall near Lake Norman. Delaying can also void your insurance coverage for secondary damage.',
  },
  {
    question: 'Why are Lake Norman homes more vulnerable to storm damage?',
    answer:
      'Lake Norman\'s open water creates a wind corridor that amplifies storm intensity, particularly for homes on the western shore in Sherrills Ford. Waterfront properties face higher wind speeds, wind-driven rain from multiple angles, and increased exposure to hail. Quality materials and proper installation are critical for lakefront homes.',
  },
  {
    question: 'Do you offer free storm damage inspections in Sherrills Ford?',
    answer:
      'Yes, we provide completely free storm damage inspections for Sherrills Ford and Lake Norman homeowners. Our certified inspectors document all damage with photos and detailed notes that support your insurance claim. There is no obligation to hire us - we want you to make an informed decision.',
  },
  {
    question: 'What if my insurance company denies my storm damage claim?',
    answer:
      'Claim denials happen, but they are often reversible. We can help by providing additional documentation, requesting a re-inspection, or recommending a public adjuster. Our thorough initial documentation often prevents denials. If your claim is underpaid, we advocate for a fair supplemental settlement.',
  },
  {
    question: 'How much does storm damage repair cost without insurance in Sherrills Ford?',
    answer:
      'Without insurance, storm damage repair costs vary widely from $500 for minor repairs to $15,000+ for extensive damage requiring partial or full replacement. We provide transparent estimates and offer financing options. However, most storm damage qualifies for insurance coverage, so we always recommend filing a claim first.',
  },
];

export default function StormDamageRoofRepairSherrillsFordNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Damage Roof Repair Sherrills Ford NC', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-sherrills-ford-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair-sherrills-ford-nc`}
        pageName="Storm Damage Roof Repair Sherrills Ford NC"
        city="Sherrills Ford"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.services.stormDamage}
            alt="Storm damage roof repair in Sherrills Ford NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <CloudRain className="w-4 h-4" />
              <span className="text-sm font-semibold">Storm Damage Restoration Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Storm Damage Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Sherrills Ford NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Wind, hail, and storm damage restoration for Lake Norman homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Did a recent storm damage your Sherrills Ford roof? Best Roofing Now specializes in storm damage
              restoration for Lake Norman waterfront homes and Catawba County properties. We handle everything from
              free damage inspections to insurance claims and complete repairs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Storm Inspection
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
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
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
              Storm Damage Services in Sherrills Ford NC
            </h2>
            <p className="text-gray text-lg">
              From emergency tarping to full restoration, we handle every aspect of storm damage repair
              for Lake Norman homes and Catawba County properties.
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

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Sherrills Ford Trusts Us for Storm Damage Repair
              </h2>
              <p className="text-gray text-lg mb-8">
                After a storm, you need a roofing company that moves fast, documents thoroughly, and advocates
                for fair insurance settlements. Our veteran-owned team delivers on all three with honesty and
                integrity Lake Norman homeowners can count on.
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
              <SEOImage
                src={IMAGES.realProjects.drone1}
                alt="Best Roofing Now - Storm damage repair experts in Sherrills Ford NC"
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

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Storm Damage Your Sherrills Ford Roof?
              </h2>
              <p className="text-white/90">
                Get a free storm damage inspection and let us handle your insurance claim.
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
                Schedule Free Inspection
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
              Storm Damage Repair Across Sherrills Ford & Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We restore storm-damaged roofs throughout Sherrills Ford, Catawba County, and the Lake Norman region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Sherrills Ford Area Communities</h3>
              <div className="flex flex-wrap gap-2">
                {localAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

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
                Storm Damage FAQs for Sherrills Ford
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about storm damage roof repair in Sherrills Ford NC.
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
        pageType="location"
        city="Denver"
        slug="storm-damage-roof-repair-sherrills-ford-nc"
      />

      <CityGeoSection
        city="Sherrills Ford"
        state="NC"
        citySlug="sherrills-ford-nc"
        service="Storm Damage Roof Repair"
      />


      <LKNPartnershipsBlock city={"Sherrills Ford"} />
      <LKNDataCitations city={"Sherrills Ford"} />
      <CTASection
        title="Storm Damage? Get Your Free Sherrills Ford Inspection"
        subtitle="Don't wait to file your insurance claim. Get a free storm damage inspection from our certified team and let us advocate for your Lake Norman home."
      />
    </>
  );
}
