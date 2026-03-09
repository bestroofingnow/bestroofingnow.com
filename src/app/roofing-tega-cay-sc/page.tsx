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
  Clock,
  Wrench,
  Home,
  Building2,
  CloudRain,
  MapPin,
  Waves,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Tega Cay SC | Waterfront Roofers | Best Roofing Now',
  description:
    'Tega Cay\'s trusted roofing company on the Lake Wylie peninsula. Waterfront roofing specialists in York County SC. Veteran-owned, BBB A+, 500+ roofs installed. FREE estimates! Call (704) 605-6047.',
  keywords: [
    'roofing tega cay sc',
    'roofers tega cay',
    'roof repair tega cay sc',
    'roof replacement tega cay',
    'tega cay roofing company',
    'waterfront roofing tega cay',
    'lake wylie roofers tega cay',
    'roofing contractor tega cay sc',
    'storm damage roofing tega cay',
    'best roofer tega cay sc',
    'tega cay roof replacement cost',
    'peninsula roofing tega cay',
    'york county roofers',
    'hail damage roof repair tega cay',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-tega-cay-sc`,
  },
  openGraph: {
    title: 'Roofing Tega Cay SC | Waterfront Peninsula Roofers | Best Roofing Now',
    description:
      'Tega Cay\'s #1 rated roofing company on the Lake Wylie peninsula. Waterfront home specialists serving York County SC. 500+ roofs, BBB A+, veteran-owned. Free estimates!',
    url: `${SITE_CONFIG.url}/roofing-tega-cay-sc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero14,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Tega Cay SC - Best Roofing Now',
      },
    ],
  },
};

// Tega Cay communities
const tegaCayCommunities = [
  {
    name: 'Tega Cay Proper',
    description: 'Original peninsula community, golf course homes, lakefront living',
    population: '5,000+',
    services: ['Residential Roofing', 'Waterfront', 'Storm Damage'],
  },
  {
    name: 'Reflection Pointe',
    description: 'Upscale gated community with Lake Wylie waterfront estates',
    population: '2,500+',
    services: ['Luxury Roofing', 'Wind-Resistant', 'Metal Roofing'],
  },
  {
    name: 'Camp Creek',
    description: 'Family-friendly neighborhood with newer construction homes',
    population: '2,000+',
    services: ['Residential', 'New Construction', 'Roof Repair'],
  },
  {
    name: 'Lake Wylie Waterfront',
    description: 'Peninsula shoreline properties with direct lake access',
    population: '1,500+',
    services: ['Waterfront Roofing', 'Impact-Rated', 'Emergency'],
  },
];

// Services
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roof replacement and repair for Tega Cay peninsula homes. GAF, CertainTeed, and Owens Corning certified installations with up to 50-year warranties.',
    href: '/residential-roofing-charlotte-nc',
  },
  {
    icon: Waves,
    title: 'Waterfront Roofing',
    description: 'Specialized roofing for Tega Cay lakefront properties. Wind-resistant, impact-rated materials engineered for peninsula exposure on Lake Wylie.',
    href: '/luxury-roofing-lake-norman-nc',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, storm damage, and general wear on Tega Cay homes. Same-day emergency service available 24/7.',
    href: '/roof-repair-lake-wylie-sc',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Restoration',
    description: 'Insurance claim experts for hail and wind damage. We handle the full claims process for Tega Cay homeowners from inspection to final repair.',
    href: '/storm-damage-roof-repair-lake-wylie-sc',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, and metal roofing for Tega Cay and York County businesses. Gold Hill Commons, Stonecrest, and local retail centers.',
    href: '/commercial-roofing-fort-mill-sc',
  },
  {
    icon: Shield,
    title: 'Roof Inspections',
    description: 'Comprehensive free inspections with drone technology and detailed reports. No-obligation assessments for Tega Cay homeowners considering replacement or repair.',
    href: '/roof-inspection-charlotte-nc',
  },
];

// FAQs
const faqs = [
  {
    question: 'How much does a roof replacement cost in Tega Cay SC?',
    answer: 'A roof replacement in Tega Cay typically costs between $8,500 and $22,000 for most homes in 2026. Standard asphalt shingle roofs for average-sized homes run $8,500-$14,000. Waterfront properties in Reflection Pointe or along the peninsula shoreline can range $15,000-$22,000+. Metal roofing costs $14,000-$28,000. Best Roofing Now provides free, no-obligation estimates with transparent pricing. Call (704) 605-6047 for your free estimate.',
  },
  {
    question: 'What roofing materials are best for Tega Cay waterfront homes?',
    answer: 'Tega Cay sits on a peninsula surrounded by Lake Wylie, so wind exposure is a primary concern. We recommend wind-resistant materials rated for 130+ MPH winds. Standing seam metal roofing is ideal for lakefront homes, offering 50+ year lifespans and Class 4 impact resistance. GAF HDZ architectural shingles with LayerLock technology provide excellent wind protection at a lower price point. Both options handle Tega Cay\'s unique peninsula weather patterns.',
  },
  {
    question: 'Are you licensed to do roofing work in Tega Cay SC?',
    answer: 'Yes, Best Roofing Now is fully licensed, bonded, and insured to perform roofing work in South Carolina, including Tega Cay and all of York County. We carry $2 million in general liability insurance and full workers\' compensation coverage. We handle all Tega Cay permits and York County inspections as part of our service.',
  },
  {
    question: 'How quickly can you respond to storm damage in Tega Cay?',
    answer: 'Best Roofing Now offers 24/7 emergency response for Tega Cay storm damage. We typically arrive within 2-4 hours for emergency tarping and provide full damage assessments within 24 hours. Tega Cay\'s peninsula location makes it especially vulnerable to wind-driven storms off Lake Wylie, and we keep emergency materials ready for rapid response. Call (704) 605-6047 anytime.',
  },
  {
    question: 'Does insurance cover roof damage in Tega Cay?',
    answer: 'Yes, South Carolina homeowners insurance typically covers roof replacement when damage is caused by storms, hail, wind, or fallen trees. Best Roofing Now handles the entire insurance claim process for Tega Cay homeowners - from thorough documentation and adjuster meetings to supplemental claims. We\'ve helped hundreds of homeowners get their roofs replaced through insurance at minimal out-of-pocket cost.',
  },
  {
    question: 'Why does Tega Cay need specialized roofing?',
    answer: 'Tega Cay is a peninsula almost entirely surrounded by Lake Wylie, which creates unique weather exposure. Winds accelerate across the open water and hit peninsula homes with greater force than inland properties. Moisture from the lake increases the risk of algae growth and underlayment deterioration. Our waterfront roofing approach uses enhanced underlayment, wind-resistant fastening patterns, and algae-resistant shingles specifically chosen for Tega Cay\'s lakeside conditions.',
  },
];

// Nearby cities
const nearbyCities = [
  { name: 'Lake Wylie', href: '/roofing-lake-wylie-sc' },
  { name: 'Fort Mill', href: '/roofing-fort-mill-sc' },
  { name: 'Rock Hill', href: '/roofing-rock-hill-sc' },
  { name: 'Charlotte', href: '/roofing-charlotte-nc' },
  { name: 'Pineville', href: '/roofing-pineville-nc' },
  { name: 'Steele Creek', href: '/roofing-steele-creek-charlotte-nc' },
  { name: 'Gastonia', href: '/roofing-gastonia-nc' },
  { name: 'Indian Trail', href: '/roofing-indian-trail-nc' },
];

export default function RoofingTegaCaySCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Tega Cay SC', url: `${SITE_CONFIG.url}/roofing-tega-cay-sc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-tega-cay-sc`}
        pageName="Roofing Tega Cay SC | Waterfront Roofers"
        city="Tega Cay"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero.hero14}
            alt="Tega Cay SC roofing - waterfront peninsula roofing experts on Lake Wylie"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Lake Wylie&apos;s Waterfront Roofing Experts</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Roofing Tega Cay SC<br />
              <span className="text-accent">Peninsula Roofing Specialists</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Trusted roofers for Tega Cay&apos;s waterfront peninsula on Lake Wylie.
              {SITE_CONFIG.roofsInstalled}+ roofs installed across York County with wind-resistant,
              impact-rated materials built for lakeside living.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span>{SITE_CONFIG.googleRating} Google Rating ({SITE_CONFIG.googleReviewCount} Reviews)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Award className="w-5 h-5 text-accent" />
                <span>{SITE_CONFIG.roofsInstalled}+ Roofs Installed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-accent" />
                <span>Veteran-Owned</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>BBB A+ Rated</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                <Calendar className="w-5 h-5" />
                Free Tega Cay Estimate
              </Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5" />
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tega Cay Roofing Services
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive roofing solutions designed for Tega Cay&apos;s peninsula homes and
              waterfront properties. From routine repairs to full replacements, we deliver results
              that withstand Lake Wylie weather.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-medium group-hover:text-accent transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Tega Cay Homeowners Choose Best Roofing Now
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Peninsula Waterfront Expertise</h3>
                    <p className="text-gray-600">
                      Tega Cay is nearly surrounded by Lake Wylie, creating wind patterns that demand
                      specialized roofing techniques. We use enhanced fastening, premium underlayment,
                      and materials rated for 130+ MPH winds.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">SC Licensed &amp; York County Compliant</h3>
                    <p className="text-gray-600">
                      Fully licensed for roofing in South Carolina with $2M liability coverage.
                      We pull all required York County permits and coordinate inspections for Tega Cay projects.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Wind-Resistant Materials</h3>
                    <p className="text-gray-600">
                      We install impact-rated shingles and standing seam metal roofing that can handle
                      the wind-driven rain and hail common to Tega Cay&apos;s exposed lakeside position.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Insurance Claims Specialists</h3>
                    <p className="text-gray-600">
                      We&apos;ve helped hundreds of York County homeowners navigate storm damage claims
                      with thorough documentation, adjuster coordination, and supplemental filing.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Manufacturer-Certified Installations</h3>
                    <p className="text-gray-600">
                      GAF Factory-Certified and CertainTeed ShingleMaster contractor offering
                      enhanced warranties up to 50 years on Tega Cay installations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.project17}
                alt="Tega Cay waterfront home roofing project on Lake Wylie"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">{SITE_CONFIG.roofsInstalled}+</div>
                <div className="text-sm text-white/80">Roofs Installed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Content */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Roofing for Tega Cay&apos;s Unique Peninsula Community
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Tega Cay is one of the most distinctive communities in the Charlotte metro area - a
                planned city built on a peninsula that juts into Lake Wylie in York County, South Carolina.
                With approximately 12,000 residents, Tega Cay combines the feel of a private resort with
                convenient access to Charlotte, Fort Mill, and Rock Hill. The city&apos;s 27-hole golf
                course, miles of shoreline, and family-oriented amenities make it one of the most desirable
                addresses in the region.
              </p>
              <p>
                But Tega Cay&apos;s peninsula geography creates real roofing challenges. Surrounded on
                three sides by Lake Wylie, homes here face stronger winds, more moisture exposure, and
                greater storm intensity than properties just a few miles inland. Wind accelerates across
                the open water and strikes peninsula homes with force that standard roofing installations
                are not always built to handle. That is why Tega Cay homeowners need a roofer who
                understands waterfront construction - not just general residential roofing.
              </p>
              <p>
                Best Roofing Now has completed numerous roofing projects throughout Tega Cay, from the
                original golf course homes to the newer construction in Camp Creek and the luxury estates
                in Reflection Pointe. We specify materials and installation methods specifically for
                Tega Cay&apos;s lakeside conditions: algae-resistant shingles to fight moisture-driven
                growth, enhanced ice and water shield underlayment, six-nail fastening patterns for
                superior wind resistance, and proper attic ventilation to manage the humidity that
                comes with lakefront living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tega Cay Communities We Serve
            </h2>
            <p className="text-gray-600 text-lg">
              From the original peninsula neighborhoods to the upscale gated communities along the
              shoreline, we provide expert roofing throughout Tega Cay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tegaCayCommunities.map((community) => (
              <div
                key={community.name}
                className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {community.name}
                    </h3>
                    <p className="text-sm text-gray-500">{community.population} residents</p>
                  </div>
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <p className="text-gray-600 mb-4">{community.description}</p>
                <div className="flex flex-wrap gap-2">
                  {community.services.map((service) => (
                    <span
                      key={service}
                      className="bg-white text-xs px-2 py-1 rounded-full text-gray-600 border border-gray-200"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Nearby Cities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving Tega Cay &amp; Surrounding Areas
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Cities We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {nearbyCities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Tega Cay Roofing FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions from Tega Cay homeowners about roofing services, costs, and
              waterfront materials.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="location"
        city="Fort Mill"
        slug="roofing-tega-cay-sc"
        count={4}
        title="Recent Roofing Projects Near Tega Cay"
        subtitle="Browse completed roofing projects from the Tega Cay and Lake Wylie area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-tega-cay-sc`}
      />

      <CityGeoSection
        city="Tega Cay"
        state="SC"
        citySlug="tega-cay-sc"
        service="Roofing"
      />

      <CTASection
        title="Ready for Your Tega Cay Roofing Project?"
        subtitle="Get a free estimate from Tega Cay's trusted waterfront roofing experts. We serve the entire Lake Wylie peninsula and York County."
      />
    </>
  );
}
