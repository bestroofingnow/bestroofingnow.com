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
  title: 'Solar Roofing Charlotte NC',
  description:
    'Solar roofing installation in Charlotte NC by GAF certified installers. GAF Timberline Solar shingles, solar panel integration, and Tesla Solar Roof options. Federal 30% ITC tax credit eligible. Veteran-owned, BBB A+ rated. Free estimates!',
  keywords: [
    'solar roofing charlotte nc',
    'solar shingles charlotte',
    'GAF timberline solar charlotte',
    'solar roof installation charlotte nc',
    'solar panel roofing charlotte',
    'tesla solar roof charlotte nc',
    'solar roofing cost charlotte',
    'green roofing charlotte nc',
    'solar energy roofing charlotte',
    'solar shingle installation charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/solar-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Solar Roofing Charlotte NC | GAF Timberline Solar | Best Roofing Now',
    description:
      'GAF certified solar roofing installation in Charlotte NC. Solar shingles, panel integration, and green energy roofing. Federal 30% ITC eligible. Free estimates!',
    url: `${SITE_CONFIG.url}/solar-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero6,
        width: 1200,
        height: 630,
        alt: 'Solar roofing installation in Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Solar roofing services offered
const solarServices = [
  {
    icon: Sun,
    title: 'Solar Shingle Installation',
    description: 'GAF Timberline Solar shingles that integrate seamlessly with your existing roof design while generating clean energy for your Charlotte home.',
    href: '/services/residential-roofing',
  },
  {
    icon: Zap,
    title: 'Solar Panel Integration',
    description: 'Expert installation of solar panels on new or existing roofs with proper flashing and waterproofing to protect your Charlotte home.',
    href: '/services/residential-roofing',
  },
  {
    icon: Home,
    title: 'GAF Timberline Solar',
    description: 'As GAF certified installers, we offer the industry-leading Timberline Solar system that looks like a traditional roof while producing electricity.',
    href: '/services/residential-roofing',
  },
  {
    icon: Shield,
    title: 'Tesla Solar Roof',
    description: 'Full Tesla Solar Roof installation and consultation for Charlotte homeowners seeking the premium all-in-one solar roofing solution.',
    href: '/services/residential-roofing',
  },
  {
    icon: Search,
    title: 'Solar Roof Inspection',
    description: 'Comprehensive roof assessment to determine solar readiness, optimal panel placement, and estimated energy production for your property.',
    href: '/services/roof-inspection',
  },
  {
    icon: Leaf,
    title: 'Green Energy Consultation',
    description: 'Expert guidance on solar options, tax credits, energy savings calculations, and financing for Charlotte homeowners going green.',
    href: '/contact',
  },
];

// Why choose solar roofing for Charlotte
const solarBenefits = [
  {
    icon: Sun,
    title: '215+ Sunny Days Per Year',
    description: 'Charlotte averages over 215 sunny days annually, making it an ideal location for solar roofing with excellent energy production potential.',
  },
  {
    icon: Zap,
    title: 'Significant Energy Savings',
    description: 'Charlotte homeowners can save $1,000-$2,500+ per year on electricity bills with a properly sized solar roofing system.',
  },
  {
    icon: Shield,
    title: '25-Year Solar Warranty',
    description: 'GAF Timberline Solar shingles come with a 25-year power output warranty, ensuring decades of reliable energy production.',
  },
  {
    icon: Leaf,
    title: 'Federal 30% Tax Credit',
    description: 'The federal Investment Tax Credit (ITC) covers 30% of your solar roofing installation cost, significantly reducing your investment.',
  },
  {
    icon: Home,
    title: 'Increases Home Value',
    description: 'Solar roofing adds an average of 4.1% to home values according to Zillow, making it a smart investment for Charlotte homeowners.',
  },
  {
    icon: Star,
    title: 'Seamless Roof Integration',
    description: 'Modern solar shingles blend with traditional roofing for a clean, attractive appearance that meets HOA requirements.',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Award,
    title: 'GAF Certified Installers',
    description: 'Factory-certified GAF installers trained in Timberline Solar shingle installation for optimal performance and warranty coverage.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Charlotte homeowners who trust our expertise.`,
  },
  {
    icon: Shield,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and a commitment to customer satisfaction.',
  },
  {
    icon: Users,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned with military values of integrity, precision, and accountability in every installation.',
  },
  {
    icon: CheckCircle,
    title: '25-Year Solar Warranty',
    description: 'Backed by GAF manufacturer warranties plus our workmanship guarantee for complete peace of mind.',
  },
  {
    icon: Clock,
    title: 'Financing Available',
    description: 'Flexible financing options to make solar roofing affordable, with payments often lower than your current electric bill.',
  },
];

// Charlotte area communities
const charlotteAreas = [
  'South Charlotte',
  'Ballantyne',
  'Myers Park',
  'Dilworth',
  'South End',
  'NoDa',
  'Plaza Midwood',
  'Eastover',
  'Providence Plantation',
  'Steele Creek',
  'University City',
  'Uptown Charlotte',
];

// Nearby cities
const nearbyCities = [
  { name: 'Lake Norman', href: '/solar-roofing-lake-norman-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
];

// FAQs specific to solar roofing in Charlotte
const faqs = [
  {
    question: 'How much does solar roofing cost in Charlotte NC?',
    answer:
      'Solar roofing in Charlotte typically costs $25,000-$65,000 depending on roof size, system type, and energy needs. GAF Timberline Solar shingles generally cost $4-$6 per watt installed. After the federal 30% Investment Tax Credit (ITC), your net cost can drop significantly. For example, a $40,000 system would cost approximately $28,000 after the federal tax credit. We provide free, detailed estimates with projected savings for every Charlotte home.',
  },
  {
    question: 'What are GAF Timberline Solar shingles?',
    answer:
      'GAF Timberline Solar shingles are nailable solar shingles that integrate directly into a standard GAF roofing system. Unlike bulky rack-mounted panels, these solar shingles lay flat and look like a traditional architectural shingle roof. They generate electricity while providing the same weather protection as conventional shingles. As GAF certified installers, Best Roofing Now is trained to install these systems for maximum performance and full warranty coverage.',
  },
  {
    question: 'How much can I save with solar roofing in Charlotte?',
    answer:
      'Charlotte homeowners typically save $1,000-$2,500+ per year on electricity with solar roofing, depending on system size and energy usage. Over a 25-year warranty period, that adds up to $25,000-$60,000+ in energy savings. Combined with the federal 30% ITC tax credit and increased home value (averaging 4.1% according to Zillow), solar roofing provides an excellent return on investment for Charlotte homes.',
  },
  {
    question: 'Does NC offer solar tax credits?',
    answer:
      'North Carolina previously offered a 35% state tax credit for solar installations, but that program has expired. However, the federal Investment Tax Credit (ITC) still provides a substantial 30% tax credit on your total solar roofing installation cost through 2032. NC also offers net metering through Duke Energy, allowing you to sell excess solar electricity back to the grid for credits on your bill. We help Charlotte homeowners maximize all available incentives.',
  },
  {
    question: 'How long do solar shingles last?',
    answer:
      'GAF Timberline Solar shingles are designed to last 25-30+ years, matching or exceeding the lifespan of traditional architectural shingles. They come with a 25-year power output warranty guaranteeing at least 80% of rated power output at year 25. The roofing components carry standard GAF warranty coverage. This means your solar roof will protect your home and generate electricity for decades with minimal maintenance.',
  },
  {
    question: 'Can I add solar to my existing roof in Charlotte?',
    answer:
      'Yes, in many cases solar panels can be added to an existing roof. However, if your roof is more than 10-15 years old or needs repairs, we recommend combining a roof replacement with solar installation for the best value and longest lifespan. GAF Timberline Solar shingles are installed as part of a new roof system. We offer free inspections to assess your current roof condition and recommend the best solar integration approach.',
  },
  {
    question: 'Is my Charlotte home suitable for solar roofing?',
    answer:
      'Most Charlotte homes are excellent candidates for solar roofing thanks to the area\'s 215+ sunny days per year. The ideal roof has south-facing slopes with minimal shade from trees or nearby structures. East and west-facing roofs also work well. During our free consultation, we evaluate your roof orientation, pitch, shading, structural condition, and energy usage to determine the optimal solar system size and projected savings for your specific home.',
  },
  {
    question: 'Do you offer financing for solar roofing in Charlotte?',
    answer:
      'Yes! Best Roofing Now offers flexible financing options for solar roofing installations in Charlotte. Many homeowners find that their monthly loan payments are lower than their previous electricity bills, making solar roofing cash-flow positive from day one. We work with multiple lending partners to find the best rates and terms for your situation. Combined with the 30% federal tax credit, solar roofing is more affordable than most Charlotte homeowners expect.',
  },
];

export default function SolarRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Charlotte Roofing', url: `${SITE_CONFIG.url}/roofing-contractor-charlotte-nc` },
          { name: 'Solar Roofing Charlotte NC', url: `${SITE_CONFIG.url}/solar-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/solar-roofing-charlotte-nc`}
        pageName="Solar Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <ServiceAreaPageSchema
        city="Charlotte"
        state="NC"
        slug="solar-roofing-charlotte-nc"
        distance={25}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero6}
            alt="Solar roofing installation in Charlotte NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Sun className="w-4 h-4" />
              <span className="text-sm font-semibold">GAF Certified Solar Installers</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Solar Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Power your Charlotte home with GAF Timberline Solar shingles - save thousands on energy costs
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is Charlotte&apos;s trusted GAF certified installer for solar roofing. From Timberline Solar
              shingles to solar panel integration, we help Charlotte homeowners harness 215+ sunny days per year to reduce
              energy bills and increase home value. Federal 30% ITC tax credit eligible.
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
              Solar Roofing Services in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              We offer complete solar roofing solutions for Charlotte homeowners, from GAF Timberline Solar shingles
              to solar panel integration and green energy consultation.
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
                Why Charlotte Homeowners Choose Solar Roofing
              </h2>
              <p className="text-gray text-lg mb-8">
                Charlotte&apos;s abundant sunshine, strong home values, and the federal 30% tax credit make solar
                roofing an exceptional investment for homeowners across Mecklenburg County.
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
                src={IMAGES.hero.hero6}
                alt="Solar roofing installation on a Charlotte NC home"
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
              Solar roofing requires specialized certification and precise installation. Our GAF certified team
              ensures your solar roof performs at peak efficiency for decades in Charlotte&apos;s climate.
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
                Ready for Solar Roofing in Charlotte?
              </h2>
              <p className="text-white/90">
                Get a free estimate and see how much you can save with solar roofing and the 30% federal tax credit.
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
              Solar Roofing for Charlotte & Mecklenburg County
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Charlotte, North Carolina is one of the best cities in the Southeast for solar energy. With over
                215 sunny days per year and strong Duke Energy net metering policies, Charlotte homeowners can
                generate significant electricity from solar roofing systems. Best Roofing Now brings GAF certified
                solar installation expertise to every Charlotte neighborhood.
              </p>
              <p>
                As GAF certified installers, we specialize in the Timberline Solar shingle system - the only
                nailable solar shingle on the market. Unlike traditional rack-mounted panels, Timberline Solar
                shingles integrate directly into your roof for a clean, low-profile appearance that satisfies
                even the strictest HOA requirements. Each shingle generates electricity while providing the same
                weather protection as premium architectural shingles.
              </p>
              <p>
                The federal 30% Investment Tax Credit (ITC) makes 2026 an excellent time to invest in solar
                roofing. Combined with Duke Energy net metering credits and increased home values, Charlotte
                homeowners typically see a full return on their solar investment within 8-12 years - with 15+
                years of additional savings after that. Mecklenburg County permits for solar installations are
                straightforward, and our team handles the entire permitting process.
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
              Solar Roofing Throughout Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              We install solar roofing systems throughout Charlotte and the greater Mecklenburg County area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteAreas.map((area) => (
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
              href="/roofing-contractor-charlotte-nc"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Charlotte Roofing Services
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
                Solar Roofing FAQs - Charlotte NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about solar roofing in the Charlotte area.
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
        city="Charlotte"
        slug="solar-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/solar-roofing-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Solar Roofing"
      />

      <CTASection
        title="Get Your Free Solar Roofing Estimate in Charlotte"
        subtitle="Contact us today for a free solar consultation. We'll assess your roof, calculate your energy savings, and explain all available tax credits. GAF certified installers serving all Charlotte neighborhoods."
      />
    </>
  );
}
