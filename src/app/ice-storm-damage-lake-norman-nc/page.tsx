import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  AlertTriangle,
  Heart,
  Home,
  Droplets,
  Wind,
  ThermometerSnowflake,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'January 2026 Ice Storm Damage Lake Norman NC | Emergency Gutter & Roof Repair',
  description:
    'Lake Norman ice storm damage help. Gutters falling off? Roof leaking as ice thaws? Best Roofing Now is here for our Lake Norman neighbors. Free emergency inspections for Mooresville, Cornelius, Davidson, Huntersville. Call 704-605-6047.',
  keywords: [
    'ice storm damage Lake Norman',
    'ice storm damage Mooresville NC',
    'gutters falling off ice Lake Norman',
    'roof leak ice storm Lake Norman',
    'ice storm roof damage Cornelius',
    'ice storm damage Davidson NC',
    'January 2026 ice storm Lake Norman',
    'emergency roof repair Lake Norman',
    'ice damage gutters Huntersville',
    'winter storm damage Lake Norman NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/ice-storm-damage-lake-norman-nc`,
  },
  openGraph: {
    title: 'January 2026 Ice Storm Damage Lake Norman NC | We Are Here to Help',
    description:
      'Lake Norman neighbors - we are here to help after the January 2026 ice storm. Free emergency inspections for gutter and roof damage. Stay safe!',
    url: `${SITE_CONFIG.url}/ice-storm-damage-lake-norman-nc`,
    type: 'article',
  },
};

// Ice storm FAQs
const iceStormFAQs = [
  {
    question: 'My gutters fell off during the ice storm. Can you help?',
    answer:
      'Yes, we are helping Lake Norman homeowners with gutter damage from the January 2026 ice storm. Heavy ice accumulation (up to 0.75 inches in some areas) caused gutters to pull away from fascia boards across Mooresville, Cornelius, Davidson, and Huntersville. We offer free emergency inspections and can often complete gutter repairs or replacement within days. Call 704-605-6047 for immediate assistance.',
  },
  {
    question: 'My roof is leaking now that the ice is melting. What should I do?',
    answer:
      'Ice dam leaks are common as temperatures rise after ice storms. First, place buckets under active leaks and move valuables away from the area. Do not go on your roof. Call Best Roofing Now at 704-605-6047 for emergency tarping and repair. We respond within 1-4 hours to prevent further water damage to your home.',
  },
  {
    question: 'Will my insurance cover ice storm damage in Lake Norman?',
    answer:
      'Yes, most homeowners insurance policies cover ice storm damage including fallen gutters, roof damage, and water damage from ice dams. The January 2026 ice storm qualifies as a covered weather event. Best Roofing Now helps Lake Norman homeowners with insurance claims - we document damage, meet with adjusters, and help maximize your settlement.',
  },
  {
    question: 'How do I know if my roof has ice damage?',
    answer:
      'Signs of ice storm roof damage include: gutters pulling away or falling, water stains on ceilings or walls, icicles forming inside gutters (ice dams), missing or damaged shingles, dented vents or flashing, and sagging gutters full of ice. Many signs are not visible from the ground. We offer free post-storm inspections throughout Lake Norman.',
  },
  {
    question: 'How quickly can you respond to ice storm damage in Lake Norman?',
    answer:
      'We are prioritizing ice storm damage calls across Lake Norman right now. For active leaks and emergency situations, we respond within 1-4 hours for tarping and temporary repairs. Full inspections and permanent repairs are being scheduled as quickly as possible. Our entire team is focused on helping our Lake Norman neighbors recover.',
  },
  {
    question: 'Should I remove ice from my gutters myself?',
    answer:
      'We strongly recommend against climbing on ladders or roofs during or after ice storms - conditions are extremely dangerous. Ice-covered surfaces are slippery, and falling ice can cause serious injury. Let professionals handle ice removal. If you have ice dams causing interior leaks, call us for safe emergency response.',
  },
];

// Safety tips
const safetyTips = [
  {
    icon: AlertTriangle,
    title: 'Stay Off Roofs & Ladders',
    description: 'Ice-covered surfaces are extremely dangerous. Let professionals assess damage safely.',
  },
  {
    icon: Droplets,
    title: 'Watch for Ice Dams',
    description: 'Icicles and ice buildup at roof edges can cause water to back up under shingles and leak inside.',
  },
  {
    icon: Home,
    title: 'Document Everything',
    description: 'Take photos of damage from the ground for insurance claims before any repairs are made.',
  },
  {
    icon: ThermometerSnowflake,
    title: 'Monitor for Leaks',
    description: 'As ice melts over the coming days, check ceilings and walls for new water stains.',
  },
];

// Lake Norman communities
const lakeNormanCommunities = [
  'Mooresville',
  'Cornelius',
  'Davidson',
  'Huntersville',
  'Denver',
  'Sherrills Ford',
  'Troutman',
  'Statesville',
];

export default function IceStormDamageLakeNormanPage() {
  const pageUrl = `${SITE_CONFIG.url}/ice-storm-damage-lake-norman-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="January 2026 Ice Storm Damage Lake Norman NC | Emergency Repair Help"
        description="Lake Norman ice storm damage help. Gutters falling off? Roof leaking? Best Roofing Now is here for our Lake Norman neighbors."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Ice Storm Damage Lake Norman NC', url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Ice Storm Damage Lake Norman NC', url: pageUrl },
        ]}
      />
      <FAQSchema faqs={iceStormFAQs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={pageUrl}
        pageName="Ice Storm Damage Lake Norman NC"
        city="Lake Norman"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'Who repairs ice storm damage in Lake Norman NC?',
            answer: 'Best Roofing Now is helping Lake Norman homeowners with ice storm damage from the January 2026 storm. We repair fallen gutters, fix roof leaks from ice dams, and handle insurance claims. We serve Mooresville, Cornelius, Davidson, Huntersville and all Lake Norman communities. Call 704-605-6047 for free emergency inspection.',
            speakableAnswer: 'Best Roofing Now repairs ice storm damage in Lake Norman. We fix fallen gutters and roof leaks from the January 2026 ice storm. Call 704-605-6047 for free emergency inspection.',
          },
          {
            question: 'What should I do if my gutters fell off during the ice storm?',
            answer: 'If your gutters fell off during the Lake Norman ice storm, first document the damage with photos for insurance. Do not attempt repairs yourself in icy conditions. Call Best Roofing Now at 704-605-6047 for free emergency inspection. We can often repair or replace gutters within days and help with your insurance claim.',
            speakableAnswer: 'Document the damage with photos, then call Best Roofing Now at 704-605-6047. Do not attempt repairs yourself in icy conditions. We offer free emergency inspections.',
          },
          {
            question: 'Does insurance cover ice storm damage to gutters and roofs?',
            answer: 'Yes, most homeowners insurance covers ice storm damage including fallen gutters, roof damage, and water damage from ice dams. The January 2026 Lake Norman ice storm is a covered weather event. Best Roofing Now helps with insurance claims and documentation.',
            speakableAnswer: 'Yes, most homeowners insurance covers ice storm damage. The January 2026 ice storm is a covered event. We help with insurance claims.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[{ name: 'Ice Storm Damage Lake Norman NC', href: '/ice-storm-damage-lake-norman-nc' }]}
          />
        </div>
      </div>

      {/* Hero Section - Community Focused */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.services.stormDamage}
            alt="Ice storm damage Lake Norman NC - January 2026 winter storm"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* Community Message */}
            <div className="inline-flex items-center gap-2 bg-accent/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart className="w-4 h-4" />
              To Our Lake Norman Neighbors
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              January 2026 Ice Storm Damage<br />
              <span className="text-accent-light">Lake Norman NC</span>
            </h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <p className="text-xl text-white/95 mb-4">
                <strong>Lake Norman neighbors</strong> - we hope you and your families are safe after this weekend&apos;s
                historic ice storm. With up to 0.75 inches of ice accumulation across Mooresville, Cornelius, Davidson,
                and Huntersville, many homes are now dealing with <strong>gutters pulling away</strong> from the weight
                and <strong>roof leaks</strong> as the ice begins to thaw.
              </p>
              <p className="text-lg text-white/90">
                <strong>We are here to help.</strong> Our entire team is focused on helping our Lake Norman community
                recover. Free emergency inspections. Insurance claim assistance. We&apos;re in this together.
              </p>
            </div>

            {/* Emergency CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                size="lg"
                className="bg-accent hover:bg-accent-dark"
                icon={<Phone className="w-5 h-5" />}
              >
                Emergency: {SITE_CONFIG.phone}
              </Button>
              <EstimateButton
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Free Storm Damage Inspection
              </EstimateButton>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-light" />
                1-4 Hour Emergency Response
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                Insurance Claim Help
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Rating ({SITE_CONFIG.googleReviewCount}+ Reviews)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Update Banner */}
      <section className="bg-blue-900 text-white py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ThermometerSnowflake className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="font-semibold">January 25-26, 2026 Ice Storm Update</p>
                <p className="text-sm text-white/80">
                  0.5-0.75&quot; ice accumulation reported across Lake Norman. Over 42,000 Duke Energy customers lost power.
                  Temperatures rising - watch for ice dam leaks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Ice Storm Damage Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ice Storm Damage We&apos;re Seeing Across Lake Norman
            </h2>
            <p className="text-gray text-lg">
              The weight of ice accumulation has caused significant damage to gutters and roofs throughout our community.
              Here&apos;s what we&apos;re helping homeowners with right now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Gutter Damage */}
            <div className="bg-light rounded-2xl p-8">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Gutters Falling Off or Sagging</h3>
              <p className="text-gray mb-4">
                Heavy ice (over 0.5 inches) adds tremendous weight to gutters - often hundreds of pounds per section.
                We&apos;re seeing gutters pulled completely off homes, sagging gutters, and damaged fascia boards
                across Mooresville, Cornelius, and Davidson.
              </p>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Gutters pulled away from fascia
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Downspouts disconnected or damaged
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Fascia board damage from weight
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Gutter hangers ripped out
                </li>
              </ul>
            </div>

            {/* Roof Leaks */}
            <div className="bg-light rounded-2xl p-8">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Roof Leaks from Ice Dams</h3>
              <p className="text-gray mb-4">
                As temperatures rise and ice melts, water can back up under shingles and leak into your home.
                Ice dams form when heat escapes through the roof, melting snow that refreezes at the cold roof edge.
                We&apos;re getting calls about interior water damage throughout Lake Norman.
              </p>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Water stains on ceilings and walls
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Active dripping during thaw
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Ice buildup at roof edges
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Icicles inside gutters (ice dam sign)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold">Safety First</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ice Storm Safety Tips for Lake Norman Homeowners
              </h2>
              <p className="text-gray text-lg">
                Your safety is the priority. Here&apos;s what we recommend while dealing with ice storm damage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {safetyTips.map((tip) => (
                <div key={tip.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <tip.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-2">{tip.title}</h3>
                      <p className="text-gray text-sm">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Important Safety Warning</h3>
                  <p className="text-red-700">
                    <strong>Do not attempt to climb on your roof or use ladders</strong> during or immediately after
                    ice storms. Ice-covered surfaces are extremely slippery, and falling ice and debris pose serious
                    hazards. If you have an active leak, place buckets to catch water and call us immediately at{' '}
                    <a href={`tel:${SITE_CONFIG.phoneClean}`} className="underline font-semibold">
                      {SITE_CONFIG.phone}
                    </a>
                    . We have the equipment and training to work safely in these conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How We&apos;re Helping Lake Norman Recover
            </h2>
            <p className="text-gray text-lg">
              Our entire team is focused on helping our Lake Norman neighbors get back to normal after this storm.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bold text-dark mb-2">Free Emergency Inspection</h3>
              <p className="text-gray text-sm">
                We assess all ice storm damage and document everything with photos for your insurance claim.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bold text-dark mb-2">Emergency Tarping</h3>
              <p className="text-gray text-sm">
                For active leaks, we provide immediate tarping to prevent further water damage to your home.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bold text-dark mb-2">Insurance Claim Help</h3>
              <p className="text-gray text-sm">
                We help file your claim, meet with adjusters, and fight for fair settlements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-bold text-dark mb-2">Quality Repairs</h3>
              <p className="text-gray text-sm">
                We repair or replace gutters and fix roof damage with premium materials and warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Served */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Serving All Lake Norman Communities
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We&apos;re responding to ice storm damage calls throughout the Lake Norman area.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {lakeNormanCommunities.map((community) => (
                <span
                  key={community}
                  className="bg-white/20 px-4 py-2 rounded-full text-white font-medium"
                >
                  {community}
                </span>
              ))}
            </div>
            <Button
              href={`tel:${SITE_CONFIG.phoneClean}`}
              variant="primary"
              size="lg"
              className="bg-accent hover:bg-accent-dark"
              icon={<Phone className="w-5 h-5" />}
            >
              Call Now: {SITE_CONFIG.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ice Storm Damage FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions Lake Norman homeowners are asking after the January 2026 ice storm.
              </p>
            </div>
            <div className="space-y-4">
              {iceStormFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
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
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Ice Storm Damage Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/gutter-services"
              className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <Droplets className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Gutter Repair & Replacement</h3>
              <p className="text-gray text-sm">
                Fast gutter repairs for ice storm damage. We fix fallen, sagging, and damaged gutters.
              </p>
              <span className="inline-flex items-center mt-4 text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            <Link
              href="/services/emergency-roofing"
              className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <AlertTriangle className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Emergency Roof Repair</h3>
              <p className="text-gray text-sm">
                24/7 emergency response for active leaks, ice dam damage, and urgent repairs.
              </p>
              <span className="inline-flex items-center mt-4 text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            <Link
              href="/services/insurance-claims"
              className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <Shield className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Insurance Claims Help</h3>
              <p className="text-gray text-sm">
                We handle your ice storm damage insurance claim from documentation to settlement.
              </p>
              <span className="inline-flex items-center mt-4 text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Charlotte Link */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray">
              <strong>Charlotte neighbors:</strong> We&apos;re also helping South Charlotte, Ballantyne, Matthews &amp; all of Mecklenburg County.
            </p>
            <Link
              href="/ice-storm-damage-charlotte-nc"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent"
            >
              Charlotte Ice Storm Help
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="location" city="Lake Norman" slug="ice-storm-damage-lake-norman-nc" />

      {/* Final CTA */}

      <CityGeoSection

        city="Lake Norman"

        state="NC"

        citySlug="lake-norman"

        service="Ice Storm Damage"

      />

      <CTASection
        title="Ice Storm Damage? We're Here to Help."
        subtitle="Lake Norman neighbors - call us today for a free emergency inspection. We'll document your damage, help with insurance, and get your home back to normal. Stay safe out there."
      />
    </>
  );
}
