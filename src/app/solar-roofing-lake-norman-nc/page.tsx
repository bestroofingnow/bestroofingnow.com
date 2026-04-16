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
  Sun,
  Home,
  Zap,
  MapPin,
  Search,
  Leaf,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema, ServiceAreaPageSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Solar Roofing Lake Norman NC',
  description:
    'Solar roofing for Lake Norman waterfront and lakefront homes. GAF Timberline Solar shingles, solar panel integration for Cornelius, Davidson, Mooresville, Huntersville. Federal 30% ITC eligible. Veteran-owned, BBB A+. Free estimates!',
  keywords: [
    'solar roofing lake norman nc',
    'solar shingles lake norman',
    'GAF timberline solar lake norman',
    'solar roof installation lake norman',
    'solar panel roofing lake norman nc',
    'lakefront solar roofing',
    'lake norman green energy roofing',
    'solar roofing cornelius nc',
    'solar roofing mooresville nc',
    'waterfront solar roofing lake norman',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/solar-roofing-lake-norman-nc`,
  },
  openGraph: {
    title: 'Solar Roofing Lake Norman NC | Lakefront Solar Shingles | Best Roofing Now',
    description:
      'GAF certified solar roofing for Lake Norman waterfront homes. Solar shingles and panel integration for Cornelius, Davidson, Mooresville. Federal 30% ITC eligible. Free estimates!',
    url: `${SITE_CONFIG.url}/solar-roofing-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero10,
        width: 1200,
        height: 630,
        alt: 'Solar roofing installation in Lake Norman NC - Best Roofing Now',
      },
    ],
  },
};

// Lake Norman cities for gallery strip
const LAKE_NORMAN_CITIES = ['Cornelius', 'Davidson', 'Mooresville', 'Huntersville', 'Denver', 'Sherrills Ford'];

// Solar roofing services offered
const solarServices = [
  {
    icon: Sun,
    title: 'Solar Shingle Installation',
    description: 'GAF Timberline Solar shingles designed for Lake Norman lakefront homes, combining energy production with premium weather protection.',
    href: '/services/residential-roofing',
  },
  {
    icon: Zap,
    title: 'Solar Panel Integration',
    description: 'Expert solar panel installation on Lake Norman homes with waterproof flashing and mounting systems built to handle lakeside conditions.',
    href: '/services/residential-roofing',
  },
  {
    icon: Home,
    title: 'GAF Timberline Solar',
    description: 'The industry-leading nailable solar shingle system - looks like a traditional roof while generating clean electricity for your lakefront home.',
    href: '/services/residential-roofing',
  },
  {
    icon: Shield,
    title: 'Tesla Solar Roof',
    description: 'Premium Tesla Solar Roof installation for Lake Norman luxury and waterfront homes seeking the ultimate in solar roofing technology.',
    href: '/services/residential-roofing',
  },
  {
    icon: Search,
    title: 'Solar Roof Inspection',
    description: 'Comprehensive assessment of your Lake Norman home\'s solar potential including sun exposure analysis, roof condition, and energy production estimates.',
    href: '/services/roof-inspection',
  },
  {
    icon: Leaf,
    title: 'Green Energy Consultation',
    description: 'Expert guidance on solar options, tax incentives, energy savings, and financing for Lake Norman homeowners transitioning to clean energy.',
    href: '/contact',
  },
];

// Why choose solar roofing for Lake Norman
const solarBenefits = [
  {
    icon: Sun,
    title: 'Unobstructed Sun Exposure',
    description: 'Lake Norman waterfront homes enjoy excellent solar potential with unobstructed southern sun exposure across open water - ideal for maximum energy production.',
  },
  {
    icon: Zap,
    title: 'Significant Energy Savings',
    description: 'Lake Norman homeowners can save $1,500-$3,000+ per year on electricity, especially on larger lakefront homes with higher energy demands.',
  },
  {
    icon: Shield,
    title: '25-Year Solar Warranty',
    description: 'GAF Timberline Solar shingles carry a 25-year power output warranty, providing decades of reliable energy for your Lake Norman home.',
  },
  {
    icon: Leaf,
    title: 'Federal 30% Tax Credit',
    description: 'The federal Investment Tax Credit (ITC) covers 30% of solar installation costs through 2032, making it the ideal time to go solar on Lake Norman.',
  },
  {
    icon: Home,
    title: 'Boosts Lakefront Home Value',
    description: 'Solar roofing adds an average of 4.1% to home values - a significant increase on high-value Lake Norman waterfront properties.',
  },
  {
    icon: Star,
    title: 'HOA-Friendly Design',
    description: 'GAF Timberline Solar shingles blend seamlessly with traditional roofing, meeting the architectural standards of Lake Norman\'s prestigious communities.',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Award,
    title: 'GAF Certified Installers',
    description: 'Factory-certified for GAF Timberline Solar installation with training specific to lakefront and waterfront roofing conditions.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from homeowners across the Lake Norman region.`,
  },
  {
    icon: Shield,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and trusted throughout Lake Norman.',
  },
  {
    icon: Users,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned with military values of integrity and precision in every solar installation.',
  },
  {
    icon: CheckCircle,
    title: '25-Year Solar Warranty',
    description: 'Full GAF manufacturer warranty coverage plus our workmanship guarantee for Lake Norman solar installations.',
  },
  {
    icon: Clock,
    title: 'Financing Available',
    description: 'Flexible solar financing with payments often lower than your current Duke Energy bill for Lake Norman homes.',
  },
];

// Lake Norman waterfront communities
const lakeNormanAreas = [
  'Lake Norman Waterfront',
  'The Peninsula (Cornelius)',
  'Jetton Cove (Cornelius)',
  'River Run (Davidson)',
  'Westmoreland (Davidson)',
  'The Point (Mooresville)',
  'Harborside (Mooresville)',
  'Northcross (Huntersville)',
  'Birkdale Village Area',
  'Westport (Denver)',
  'Pinnacle Shores (Denver)',
  'Sherrills Ford',
];

// Nearby cities
const nearbyCities = [
  { name: 'Charlotte', href: '/solar-roofing-charlotte-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Denver', href: '/roofing-denver-nc' },
];

// FAQs specific to solar roofing in Lake Norman
const faqs = [
  {
    question: 'How much does solar roofing cost in Lake Norman NC?',
    answer:
      'Solar roofing in Lake Norman typically costs $30,000-$75,000 depending on roof size, system type, and energy needs. Larger lakefront homes generally require bigger systems. GAF Timberline Solar shingles cost approximately $4-$6 per watt installed. After the federal 30% Investment Tax Credit (ITC), a $50,000 system drops to approximately $35,000. We provide free, detailed estimates with projected savings for every Lake Norman home.',
  },
  {
    question: 'Are Lake Norman waterfront homes good for solar roofing?',
    answer:
      'Lake Norman waterfront homes are excellent candidates for solar roofing. Lakefront properties often have unobstructed southern sun exposure across open water, with fewer trees blocking sunlight from the lake side. The open views that make waterfront living desirable also maximize solar energy production. Combined with typically higher energy usage in larger lakefront homes, solar roofing delivers outstanding returns for Lake Norman waterfront homeowners.',
  },
  {
    question: 'What solar roofing options work best for Lake Norman homes?',
    answer:
      'For Lake Norman homes, we recommend GAF Timberline Solar shingles for their seamless integration with traditional roofing aesthetics - important for HOA compliance in communities like The Peninsula, River Run, and The Point. These nailable solar shingles look like premium architectural shingles while generating electricity. For homeowners wanting maximum energy production, traditional solar panel integration is also available with waterproof mounting systems rated for lakeside wind exposure.',
  },
  {
    question: 'How much can I save with solar on my Lake Norman home?',
    answer:
      'Lake Norman homeowners typically save $1,500-$3,000+ per year on electricity with solar roofing. Larger waterfront homes with higher energy consumption often see even greater savings. Over the 25-year warranty period, that totals $37,500-$75,000+ in energy savings. Combined with the federal 30% ITC tax credit and an average 4.1% increase in home value, solar roofing is an exceptional investment for Lake Norman properties.',
  },
  {
    question: 'Will solar shingles meet Lake Norman HOA requirements?',
    answer:
      'Yes! GAF Timberline Solar shingles are specifically designed to meet strict HOA architectural guidelines. They lay flat on the roof and look virtually identical to premium architectural shingles from the ground. This is one of the primary reasons we recommend Timberline Solar for Lake Norman communities with architectural review committees. We work with your HOA to ensure full compliance before installation begins.',
  },
  {
    question: 'Do you install solar roofing in Cornelius, Davidson, and Mooresville?',
    answer:
      'Yes! Best Roofing Now installs solar roofing throughout the entire Lake Norman region including Cornelius, Davidson, Mooresville, Huntersville, Denver, and Sherrills Ford. We are fully licensed in both Mecklenburg County and Iredell County. Our team understands the unique building codes, HOA requirements, and waterfront conditions across all Lake Norman communities.',
  },
  {
    question: 'Can I combine a roof replacement with solar installation on Lake Norman?',
    answer:
      'Absolutely, and we highly recommend it! Combining a roof replacement with solar shingle installation is the most cost-effective approach. GAF Timberline Solar shingles are installed as part of the roofing system, eliminating the need for separate mounting hardware. This integrated approach provides a cleaner look, better waterproofing, and lower total cost compared to adding solar panels to an existing roof later.',
  },
  {
    question: 'What financing is available for solar roofing in Lake Norman?',
    answer:
      'Best Roofing Now offers multiple financing options for Lake Norman solar roofing projects. Many homeowners find that monthly loan payments are lower than their previous Duke Energy bills, making solar cash-flow positive from day one. Combined with the federal 30% ITC tax credit (which can be applied to reduce your tax liability), solar roofing is more affordable than most Lake Norman homeowners expect. Contact us for a personalized financing consultation.',
  },
];

export default function SolarRoofingLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Norman Roofing', url: `${SITE_CONFIG.url}/roofing-lake-norman-nc` },
          { name: 'Solar Roofing Lake Norman NC', url: `${SITE_CONFIG.url}/solar-roofing-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/solar-roofing-lake-norman-nc`}
        pageName="Solar Roofing Lake Norman NC"
        city="Lake Norman"
      />
      <VoiceSearchActionSchema />
      <ServiceAreaPageSchema
        city="Lake Norman"
        state="NC"
        slug="solar-roofing-lake-norman-nc"
        distance={25}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero10}
            alt="Solar roofing for Lake Norman waterfront homes - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Sun className="w-4 h-4" />
              <span className="text-sm font-semibold">Lake Norman Solar Roofing Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Solar Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Harness lakefront sun exposure with GAF Timberline Solar shingles for Lake Norman homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now brings GAF certified solar roofing expertise to Lake Norman&apos;s waterfront and
              lakeside communities. From Cornelius to Mooresville, our solar shingle systems maximize the
              unobstructed sun exposure that makes lakefront living ideal for solar energy production.
              Federal 30% ITC tax credit eligible.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Solar Estimate
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
                <Sun className="w-5 h-5 text-accent-light" />
                GAF Certified
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                30% Federal Tax Credit
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
              Solar Roofing Options for Lake Norman NC
            </h2>
            <p className="text-gray text-lg">
              Complete solar roofing solutions designed for Lake Norman waterfront and lakeside homes,
              from GAF Timberline Solar shingles to solar panel integration and energy consultation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solarServices.map((service) => (
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

      {/* Benefits Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Lake Norman Homeowners Choose Solar Roofing
              </h2>
              <p className="text-gray text-lg mb-8">
                Lake Norman&apos;s waterfront homes offer ideal conditions for solar energy - unobstructed southern
                exposure, high property values, and the federal 30% tax credit make solar roofing an exceptional
                investment for lakefront living.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {solarBenefits.map((item) => (
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
              <Image
                src={IMAGES.hero.hero10}
                alt="Solar roofing on a Lake Norman waterfront home"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <Sun className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-dark">25-Year</p>
                    <p className="text-sm text-gray">Solar Warranty</p>
                  </div>
                </div>
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
              Why Choose Best Roofing Now for Solar Roofing
            </h2>
            <p className="text-gray text-lg">
              Solar roofing on Lake Norman requires expertise in both solar technology and waterfront roofing
              conditions. Our GAF certified team delivers peak-performance solar installations across the region.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-light rounded-xl p-6">
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

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for Solar Roofing on Lake Norman?
              </h2>
              <p className="text-white/90">
                Get a free estimate and discover how lakefront sun exposure maximizes your solar energy savings.
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
                Get Free Estimate
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

      {/* Local Area Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Solar Roofing for Lake Norman Waterfront Homes
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Lake Norman is one of the most promising areas in North Carolina for residential solar energy.
                Waterfront homes along the lake enjoy unobstructed southern sun exposure across open water,
                with fewer trees and structures blocking sunlight from the lake side. This makes Lake Norman
                properties ideal candidates for solar roofing systems that maximize energy production year-round.
              </p>
              <p>
                Best Roofing Now specializes in GAF Timberline Solar shingles for Lake Norman communities
                including Cornelius, Davidson, Mooresville, Huntersville, Denver, and Sherrills Ford. These
                nailable solar shingles are designed to meet the architectural standards required by prestigious
                Lake Norman communities like The Peninsula, River Run, The Point, and Harborside. Unlike bulky
                rack-mounted panels, Timberline Solar shingles lay flat and look like premium architectural
                shingles from the ground.
              </p>
              <p>
                The federal 30% Investment Tax Credit (ITC) makes 2026 an ideal time for Lake Norman homeowners
                to invest in solar. With higher-than-average home values on Lake Norman, the 4.1% increase in
                property value from solar represents a significant dollar amount. Combined with annual energy
                savings of $1,500-$3,000+ and Duke Energy net metering credits, Lake Norman solar roofing
                typically pays for itself within 7-10 years on waterfront properties.
              </p>
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
              Solar Roofing Throughout Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We install solar roofing systems throughout the greater Lake Norman region, including waterfront communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Lake Norman Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Norman Communities We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {lakeNormanAreas.map((area) => (
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
              <h3 className="text-xl font-bold text-dark mb-4">Lake Norman Cities We Serve</h3>
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
              href="/roofing-lake-norman-nc"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Lake Norman Roofing Services
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
                Solar Roofing FAQs - Lake Norman NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about solar roofing for Lake Norman homes.
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
        pageType="service"
        city="Cornelius"
        slug="solar-roofing-lake-norman-nc"
        count={4}
        title="Recent Roofing Projects in Lake Norman, NC"
        subtitle="Browse completed roofing projects from the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/solar-roofing-lake-norman-nc`}
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Solar Roofing"
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

      <CTASection
        title="Get Your Free Solar Roofing Estimate on Lake Norman"
        subtitle="Contact us today for a free solar consultation. We'll assess your lakefront home's solar potential, calculate energy savings, and explain all available tax credits. Serving Cornelius, Davidson, Mooresville, Huntersville & Denver."
      />
    </>
  );
}
