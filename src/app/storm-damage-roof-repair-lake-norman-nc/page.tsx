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
  CloudRain,
  MapPin,
  Wind,
  AlertTriangle,
  FileText,
  Umbrella,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair Lake Norman NC | Insurance Claims | Best Roofing Now',
  description:
    'Storm damage roof repair across Lake Norman NC. Hail, wind, and tree damage restoration with full insurance claim assistance. Emergency response for Mooresville, Cornelius, Davidson & Denver.',
  keywords: [
    'storm damage roof repair lake norman',
    'hail damage lake norman nc',
    'wind damage roofing lake norman',
    'roof insurance claim lake norman',
    'storm damage roofer mooresville nc',
    'hail damage roof cornelius nc',
    'wind damage roof repair davidson nc',
    'lake norman storm damage restoration',
    'roof insurance claim assistance lake norman',
    'tree damage roof repair lake norman',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/storm-damage-roof-repair-lake-norman-nc`,
  },
  openGraph: {
    title: 'Storm Damage Roof Repair Lake Norman NC | Insurance Claims | Best Roofing Now',
    description:
      'Expert storm damage roof repair across Lake Norman NC. Hail, wind, and tree damage with full insurance claim assistance. Serving Mooresville, Cornelius, Davidson, Denver & Huntersville.',
    url: `${SITE_CONFIG.url}/storm-damage-roof-repair-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.realProjects.project23,
        width: 1200,
        height: 630,
        alt: 'Storm damage roof repair in the Lake Norman NC area - Best Roofing Now',
      },
    ],
  },
};

const stormDamageTypes = [
  {
    icon: CloudRain,
    title: 'Hail Damage',
    description: 'Lake Norman sits in a hail-prone corridor. We identify and repair dented, cracked, and bruised shingles after hailstorms.',
  },
  {
    icon: Wind,
    title: 'Wind Damage',
    description: 'High winds sweeping across the lake lift, crack, and tear shingles. We restore wind-damaged roofs quickly to prevent leaks.',
  },
  {
    icon: AlertTriangle,
    title: 'Tree & Debris Damage',
    description: 'Fallen limbs and storm debris cause punctures and structural damage. We remove debris and repair or replace affected sections.',
  },
  {
    icon: Umbrella,
    title: 'Heavy Rain & Water Damage',
    description: 'Torrential downpours exploit weakened areas. We fix storm-related leaks, damaged flashing, and compromised drainage.',
  },
];

const insuranceProcess = [
  {
    step: '1',
    title: 'Free Storm Damage Inspection',
    description: 'Our team performs a thorough inspection of your Lake Norman roof, documenting every instance of storm damage with detailed photos and measurements.',
  },
  {
    step: '2',
    title: 'Insurance Claim Filing',
    description: 'We help you file your claim with comprehensive documentation that insurance adjusters need to process your storm damage claim efficiently.',
  },
  {
    step: '3',
    title: 'Adjuster Meeting',
    description: 'We meet your insurance adjuster on-site to walk through every damage point, ensuring nothing is missed and your claim receives fair evaluation.',
  },
  {
    step: '4',
    title: 'Repair or Replacement',
    description: 'Once your claim is approved, we complete the repair or replacement using premium materials with manufacturer-backed warranties.',
  },
];

const lknStormFacts = [
  'Lake Norman receives an average of 43 thunderstorm days per year',
  'The I-77 corridor acts as a funnel for severe storm cells moving northeast',
  'LKN waterfront homes face 15-20% higher wind exposure than inland properties',
  'Hailstorms in the Charlotte metro area have caused over $1 billion in insured losses since 2018',
  'Severe weather season peaks March through August around Lake Norman',
  'Lake-effect microbursts can produce localized winds exceeding 80 mph',
];

const lknCommunities = [
  { name: 'Mooresville', href: '/roof-repair-mooresville-nc' },
  { name: 'Cornelius', href: '/roof-repair-cornelius-nc' },
  { name: 'Davidson', href: '/roof-repair-davidson-nc' },
  { name: 'Denver', href: '/roof-repair-denver-nc' },
  { name: 'Huntersville', href: '/roof-repair-huntersville-nc' },
  { name: 'Sherrills Ford', href: '/locations/sherrills-ford-nc' },
  { name: 'Troutman', href: '/locations/troutman-nc' },
  { name: 'Terrell', href: '/locations/terrell-nc' },
];

const faqs = [
  {
    question: 'How do I know if my Lake Norman roof has storm damage?',
    answer:
      'Common signs of storm damage include dented or missing shingles, granule accumulation in gutters, cracked flashing, dented gutters or downspouts, and water stains on interior ceilings. After any significant storm around Lake Norman, we recommend a professional inspection. Many forms of hail damage are not visible from the ground. Call (704) 605-6047 for a free inspection.',
  },
  {
    question: 'Will my insurance cover storm damage roof repair in Lake Norman?',
    answer:
      'Most homeowners insurance policies cover storm damage from hail, wind, and fallen trees, minus your deductible. We assist Lake Norman homeowners with the entire claims process, from initial documentation to adjuster meetings and supplemental claims. Many LKN roofs have qualified for full replacement coverage after significant storm events.',
  },
  {
    question: 'How quickly can you respond after a storm in Lake Norman?',
    answer:
      'Our emergency crews can typically reach any Lake Norman community within 1-4 hours after a storm. We prioritize emergency tarping to prevent further water damage, then schedule full repairs once conditions allow. For emergencies, call us 24/7 at (704) 605-6047.',
  },
  {
    question: 'Should I file an insurance claim for storm damage to my Lake Norman roof?',
    answer:
      'If you suspect storm damage, we recommend getting a free professional inspection first. Our team will honestly assess whether the damage warrants a claim. Filing unnecessary claims can raise your premiums, so we only recommend filing when damage is significant enough to justify it. We never pressure homeowners into claims.',
  },
  {
    question: 'What happens if my insurance claim is denied?',
    answer:
      'If your initial claim is denied, we can help you file a supplemental claim with additional documentation. Our detailed inspection reports, photos, and measurements have helped many Lake Norman homeowners overturn initial denials. We know exactly what adjusters look for and how to present your case effectively.',
  },
  {
    question: 'How do Lake Norman storms differ from other areas?',
    answer:
      'Lake Norman creates unique weather patterns. The large body of water generates lake-effect microbursts with localized high winds, and the I-77 corridor channels severe storm cells through the region. Waterfront properties face higher wind exposure, while the elevation changes around the lake create variable hail patterns. Our team understands these local conditions.',
  },
];

export default function StormDamageRoofRepairLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Damage Roof Repair Lake Norman NC', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair-lake-norman-nc`}
        pageName="Storm Damage Roof Repair Lake Norman NC"
        city="Lake Norman"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'Who handles storm damage roof repair in Lake Norman NC?',
            answer: 'Best Roofing Now provides storm damage roof repair across Lake Norman NC with full insurance claim assistance. They have a 5-star Google rating and BBB A+ accreditation, serving Mooresville, Cornelius, Davidson, Denver, and Huntersville.',
            speakableAnswer: 'Best Roofing Now handles storm damage roof repair across Lake Norman with insurance claim help. Call 704-605-6047.',
          },
          {
            question: 'Does insurance cover storm damage to my Lake Norman roof?',
            answer: 'Most homeowners insurance covers storm damage from hail, wind, and fallen trees minus your deductible. Best Roofing Now assists Lake Norman homeowners with the entire claims process from documentation to adjuster meetings.',
            speakableAnswer: 'Most insurance covers storm damage. Best Roofing Now helps with claims. Call 704-605-6047.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.realProjects.project23}
            alt="Storm damage roof repair across the Lake Norman NC area"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <CloudRain className="w-4 h-4" />
              <span className="text-sm font-semibold">Full Insurance Claim Assistance</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Storm Damage Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Hail, wind, and tree damage restoration with insurance claim expertise
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Lake Norman&apos;s position along the I-77 corridor makes it vulnerable to severe storms that can
              devastate roofs in minutes. Best Roofing Now provides rapid storm damage assessment, emergency
              tarping, complete restoration, and full insurance claim assistance for homeowners across
              Mooresville, Cornelius, Davidson, Denver, and Huntersville.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Free Storm Damage Inspection
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
                <FileText className="w-5 h-5 text-green-400" />
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

      {/* Storm Damage Types */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Types of Storm Damage We Repair
            </h2>
            <p className="text-gray text-lg">
              Lake Norman storms deliver a range of damaging conditions. Our team is equipped to handle
              every type of storm-related roof damage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stormDamageTypes.map((type) => (
              <div
                key={type.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{type.title}</h3>
                <p className="text-gray text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Claims Process */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Insurance Claim Process
            </h2>
            <p className="text-gray text-lg">
              We guide Lake Norman homeowners through every step of the insurance claim process to ensure
              maximum coverage for storm damage repairs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insuranceProcess.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-6 shadow-md relative">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-gray text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lake Norman Storm Patterns */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Lake Norman Storm Patterns
              </h2>
              <p className="text-gray text-lg mb-8">
                Understanding Lake Norman&apos;s unique storm patterns helps homeowners prepare and respond
                effectively when severe weather strikes.
              </p>
              <div className="space-y-4">
                {lknStormFacts.map((fact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-gray">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.project23}
                alt="Storm damage repair project near Lake Norman NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-dark">Insurance Experts</p>
                    <p className="text-sm text-gray">Full Claim Assistance</p>
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
                Storm Damage to Your Lake Norman Roof?
              </h2>
              <p className="text-white/90">
                Get a free storm damage inspection and insurance claim assistance today.
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

      {/* LKN Communities */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Lake Norman Communities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Storm Damage Repair Across Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We respond to storm damage calls in every community around the lake.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {lknCommunities.map((community) => (
              <Link
                key={community.name}
                href={community.href}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-semibold text-dark">{community.name}</span>
                <ArrowRight className="w-4 h-4 text-gray ml-auto" />
              </Link>
            ))}
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
                Storm Damage FAQs for Lake Norman NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about storm damage roof repair and insurance claims in the Lake Norman area.
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

      <GeoProjectGalleryStrip
        pageType="location"
        city="Mooresville"
        slug="storm-damage-roof-repair-lake-norman-nc"
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Storm Damage Roof Repair"
      />

      {/* Lake Norman Guide Cross-Link */}
      <section className="py-8 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray mb-4">Want to learn everything about roofing on Lake Norman?</p>
            <Link href="/lake-norman-roofing-guide" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-lg">
              Read The Complete Lake Norman Roofing Guide (2026) <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>


      <LKNPartnershipsBlock city={"Lake Norman"} />
      <LKNDataCitations city={"Lake Norman"} />
      <CTASection
        title="Storm Damage? We're Here to Help."
        subtitle="Get a free storm damage inspection and insurance claim assistance from Lake Norman's most trusted roofing company. We'll document the damage, guide you through the claims process, and restore your roof."
      />
    </>
  );
}
