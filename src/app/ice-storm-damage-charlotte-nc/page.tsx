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
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
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
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'January 2026 Ice Storm Damage Charlotte NC | Emergency Gutter & Roof Repair',
  description:
    'Charlotte ice storm damage help. Gutters falling off? Roof leaking as ice thaws? Best Roofing Now is here for Charlotte and Mecklenburg County. Free emergency inspections. Call 704-605-6047.',
  keywords: [
    'ice storm damage Charlotte NC',
    'ice storm damage Mecklenburg County',
    'gutters falling off ice Charlotte',
    'roof leak ice storm Charlotte',
    'ice storm roof damage Charlotte NC',
    'January 2026 ice storm Charlotte',
    'emergency roof repair Charlotte NC',
    'ice damage gutters Charlotte',
    'winter storm damage Charlotte NC',
    'ice dam repair Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/ice-storm-damage-charlotte-nc`,
  },
  openGraph: {
    title: 'January 2026 Ice Storm Damage Charlotte NC | We Are Here to Help',
    description:
      'Charlotte neighbors - we are here to help after the January 2026 ice storm. Free emergency inspections for gutter and roof damage. Stay safe!',
    url: `${SITE_CONFIG.url}/ice-storm-damage-charlotte-nc`,
    type: 'article',
  },
};

// Ice storm FAQs for Charlotte
const iceStormFAQs = [
  {
    question: 'My gutters fell off during the ice storm in Charlotte. Can you help?',
    answer:
      'Yes, we are helping Charlotte homeowners with gutter damage from the January 2026 ice storm. Heavy ice accumulation caused gutters to pull away from fascia boards throughout Mecklenburg County. The weight of ice-filled gutters can exceed hundreds of pounds, overwhelming gutter hangers. We offer free emergency inspections and can often complete repairs within days. Call 704-605-6047.',
  },
  {
    question: 'My roof is leaking now that the ice is melting in Charlotte. What should I do?',
    answer:
      'Ice dam leaks are becoming common across Charlotte as temperatures rise above freezing. First, place containers under active leaks and move belongings away from affected areas. Do not attempt to go on your roof. Call Best Roofing Now at 704-605-6047 for emergency tarping - we respond within 1-4 hours to prevent further interior water damage.',
  },
  {
    question: 'Will my homeowners insurance cover ice storm damage in Charlotte?',
    answer:
      'Yes, most homeowners insurance policies cover ice storm damage including fallen gutters, roof damage, and water damage from ice dams. The January 2026 Charlotte ice storm is a covered weather event. North Carolina Governor declared a state of emergency. Best Roofing Now helps Charlotte homeowners document damage and file claims for maximum settlement.',
  },
  {
    question: 'How do I know if my Charlotte home has ice storm damage?',
    answer:
      'Signs of ice storm damage include: gutters sagging, pulling away, or fallen; water stains on interior ceilings or walls; icicles forming at roof edges or inside gutters (ice dam indicator); missing or damaged shingles; dented vents, flashing, or siding. Since Charlotte saw up to 0.5 inches of ice, damage may not be obvious. We offer free inspections.',
  },
  {
    question: 'How quickly can you respond to ice damage in Charlotte?',
    answer:
      'We are prioritizing ice storm damage calls across Charlotte and Mecklenburg County. For active leaks and emergencies, we respond within 1-4 hours for tarping and temporary repairs. Full inspections are being scheduled as quickly as possible - typically within 24-48 hours. Call 704-605-6047 for immediate assistance.',
  },
  {
    question: 'What areas of Charlotte are you helping with ice storm damage?',
    answer:
      'We are responding to ice storm damage throughout Charlotte and Mecklenburg County including South Charlotte, University City, NoDa, Plaza Midwood, Dilworth, Myers Park, Ballantyne, Matthews, Mint Hill, Pineville, and all surrounding areas. Our entire team is focused on helping our Charlotte community recover from this historic ice storm.',
  },
];

// Safety tips
const safetyTips = [
  {
    icon: AlertTriangle,
    title: 'Stay Off Roofs & Ladders',
    description: 'Ice-covered surfaces are extremely slippery. Multiple injuries have been reported. Let professionals handle it.',
  },
  {
    icon: Droplets,
    title: 'Watch for Ice Dam Leaks',
    description: 'As temperatures rise this week, ice dams may cause water to back up and leak into your home. Check ceilings daily.',
  },
  {
    icon: Home,
    title: 'Document All Damage',
    description: 'Take photos and videos of damage from ground level for insurance claims before any cleanup or repairs.',
  },
  {
    icon: Wind,
    title: 'Beware of Falling Ice',
    description: 'As ice melts, large chunks may fall from roofs and trees. Keep children and pets away from eaves.',
  },
];

// Charlotte neighborhoods
const charlotteNeighborhoods = [
  'South Charlotte',
  'University City',
  'Ballantyne',
  'Myers Park',
  'Dilworth',
  'NoDa',
  'Plaza Midwood',
  'Matthews',
  'Mint Hill',
  'Pineville',
  'Cotswold',
  'Eastover',
];

export default function IceStormDamageCharlottePage() {
  const pageUrl = `${SITE_CONFIG.url}/ice-storm-damage-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="January 2026 Ice Storm Damage Charlotte NC | Emergency Repair Help"
        description="Charlotte ice storm damage help. Gutters falling off? Roof leaking? Best Roofing Now is here for our Charlotte neighbors."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Ice Storm Damage Charlotte NC', url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Ice Storm Damage Charlotte NC', url: pageUrl },
        ]}
      />
      <FAQSchema faqs={iceStormFAQs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={pageUrl}
        pageName="Ice Storm Damage Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'Who repairs ice storm damage in Charlotte NC?',
            answer: 'Best Roofing Now is helping Charlotte homeowners with ice storm damage from the January 2026 storm. We repair fallen gutters, fix roof leaks from ice dams, and handle insurance claims. We serve all of Charlotte and Mecklenburg County with 24/7 emergency response. Call 704-605-6047 for free emergency inspection.',
            speakableAnswer: 'Best Roofing Now repairs ice storm damage in Charlotte. We fix fallen gutters and roof leaks from the January 2026 ice storm. Call 704-605-6047 for free emergency inspection.',
          },
          {
            question: 'What should I do if my gutters fell off during the Charlotte ice storm?',
            answer: 'If your gutters fell off during the Charlotte ice storm, first document the damage with photos for insurance. Do not attempt repairs yourself - icy conditions are dangerous. Call Best Roofing Now at 704-605-6047 for a free emergency inspection. We help with insurance claims and can often complete repairs within days.',
            speakableAnswer: 'Take photos for insurance, then call Best Roofing Now at 704-605-6047. Do not attempt repairs in icy conditions. We offer free emergency inspections.',
          },
          {
            question: 'Does insurance cover ice storm damage in Charlotte?',
            answer: 'Yes, most homeowners insurance covers ice storm damage including fallen gutters, roof damage, and water damage from ice dams. The January 2026 Charlotte ice storm is a covered weather event. North Carolina declared a state of emergency. Best Roofing Now helps with documentation and insurance claims.',
            speakableAnswer: 'Yes, most insurance covers ice storm damage. North Carolina declared a state of emergency for the January 2026 storm. We help with insurance claims.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[{ name: 'Ice Storm Damage Charlotte NC', href: '/ice-storm-damage-charlotte-nc' }]}
          />
        </div>
      </div>

      {/* Hero Section - Community Focused */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.services.stormDamage}
            alt="Ice storm damage Charlotte NC - January 2026 winter storm"
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
              To Our Charlotte Neighbors
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              January 2026 Ice Storm Damage<br />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <p className="text-xl text-white/95 mb-4">
                <strong>Charlotte neighbors</strong> - we hope you and your families stayed safe during this historic
                ice storm. With Charlotte-Mecklenburg Schools closed Monday, county offices shut down, and over 42,000
                Duke Energy customers losing power, this has been a challenging weekend for our community.
              </p>
              <p className="text-lg text-white/90 mb-4">
                Many Charlotte homes are now dealing with <strong>gutters pulling away</strong> from the weight of
                ice and <strong>roof leaks appearing</strong> as temperatures rise and ice begins to melt.
              </p>
              <p className="text-lg text-white/90">
                <strong>We are here to help.</strong> Our entire team is focused on helping Charlotte recover.
                Free emergency inspections. Insurance claim assistance. We&apos;re in this together.
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
                <p className="font-semibold">January 25-26, 2026 Charlotte Ice Storm Update</p>
                <p className="text-sm text-white/80">
                  Charlotte saw 0.25-0.5&quot; ice accumulation. Over 42,000 lost power. Schools closed Monday.
                  Charlotte Fire responded to 350+ calls. Warming shelters opened at Grady Cole Center.
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
              Ice Storm Damage We&apos;re Seeing Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              The weight of ice accumulation caused significant damage to gutters and roofs throughout Mecklenburg
              County. Here&apos;s what we&apos;re helping homeowners with right now.
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
                Ice-filled gutters can weigh hundreds of pounds per section, overwhelming even the strongest gutter
                hangers. We&apos;re receiving calls from across Charlotte about gutters pulled completely off homes,
                sagging gutters, and damaged fascia boards - especially in South Charlotte, Ballantyne, and University City.
              </p>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Gutters pulled away from fascia boards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Downspouts disconnected or crushed
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Fascia and soffit damage from weight
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Gutter sections lying on ground
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
                As Charlotte temperatures rise above freezing this week, ice dams are causing water to back up under
                shingles and leak into homes. We&apos;re getting calls about water stains on ceilings and active
                dripping throughout Mecklenburg County - particularly in older homes in Dilworth, Myers Park, and Plaza Midwood.
              </p>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  New water stains on ceilings
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Active dripping as ice melts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Ice buildup at roof edges (ice dams)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Wet insulation in attics
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
                Ice Storm Safety Tips for Charlotte Homeowners
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
                    <strong>Charlotte Fire has responded to 350+ calls</strong> since the storm hit. Do not attempt
                    to climb on your roof or use ladders to clear ice. Ice-covered surfaces are extremely dangerous,
                    and falling ice chunks pose serious hazards. If you have an active leak, place buckets to catch
                    water and call us immediately at{' '}
                    <a href={`tel:${SITE_CONFIG.phoneClean}`} className="underline font-semibold">
                      {SITE_CONFIG.phone}
                    </a>
                    . Let professionals handle it safely.
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
              How We&apos;re Helping Charlotte Recover
            </h2>
            <p className="text-gray text-lg">
              Our entire team is focused on helping our Charlotte neighbors get back to normal after this historic storm.
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

      {/* Charlotte Neighborhoods Served */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Serving All Charlotte &amp; Mecklenburg County
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We&apos;re responding to ice storm damage calls throughout Charlotte and surrounding areas.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {charlotteNeighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="bg-white/20 px-4 py-2 rounded-full text-white font-medium"
                >
                  {neighborhood}
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
                Ice Storm Damage FAQs - Charlotte NC
              </h2>
              <p className="text-gray text-lg">
                Common questions Charlotte homeowners are asking after the January 2026 ice storm.
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
            Ice Storm Damage Services in Charlotte
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/gutter-installation-charlotte-nc"
              className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <Droplets className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Gutter Repair Charlotte</h3>
              <p className="text-gray text-sm">
                Fast gutter repairs for ice storm damage throughout Charlotte and Mecklenburg County.
              </p>
              <span className="inline-flex items-center mt-4 text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            <Link
              href="/roof-repair-charlotte-nc#emergency"
              className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <AlertTriangle className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Emergency Roof Repair</h3>
              <p className="text-gray text-sm">
                24/7 emergency response for active leaks, ice dam damage, and urgent roof repairs.
              </p>
              <span className="inline-flex items-center mt-4 text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            <Link
              href="/storm-damage-roof-repair-charlotte-nc"
              className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <Shield className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Storm Damage &amp; Insurance</h3>
              <p className="text-gray text-sm">
                Complete storm damage restoration with insurance claim assistance and documentation.
              </p>
              <span className="inline-flex items-center mt-4 text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lake Norman Link */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray">
              <strong>Lake Norman neighbors:</strong> We&apos;re also helping Mooresville, Cornelius, Davidson &amp; Huntersville.
            </p>
            <Link
              href="/ice-storm-damage-lake-norman-nc"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent"
            >
              Lake Norman Ice Storm Help
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="ice-storm-damage-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/ice-storm-damage-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Ice Storm Damage"

      />

      <CTASection
        title="Ice Storm Damage? We're Here to Help Charlotte."
        subtitle="Charlotte neighbors - call us today for a free emergency inspection. We'll document your damage, help with insurance, and get your home back to normal. Stay safe out there."
      />
    </>
  );
}
