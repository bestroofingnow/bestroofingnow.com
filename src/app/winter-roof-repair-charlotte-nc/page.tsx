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
  Snowflake,
  Thermometer,
  AlertTriangle,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Winter Roof Repair Charlotte NC | Cold Weather Experts | Best Roofing Now',
  description:
    'Expert winter roof repair in Charlotte NC. Cold weather specialists handling ice dam prevention, frozen pipe damage, snow load issues, and emergency repairs. Available 24/7 during winter storms.',
  keywords: [
    'winter roof repair Charlotte NC',
    'roof repair winter Charlotte',
    'cold weather roof repair',
    'ice dam prevention Charlotte',
    'ice dam removal Charlotte NC',
    'winter roofing services',
    'emergency roof repair winter',
    'frozen roof repair Charlotte',
    'snow damage roof repair',
    'winter storm roof damage',
    'Charlotte winter roofer',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/winter-roof-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Winter Roof Repair Charlotte NC | Cold Weather Experts | Best Roofing Now',
    description:
      'Charlotte\'s trusted cold weather roofing experts. Ice dam prevention, winter storm damage repair, and 24/7 emergency services. BBB A+ rated.',
    url: `${SITE_CONFIG.url}/winter-roof-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Winter roof repair services in Charlotte NC - Best Roofing Now cold weather experts',
      },
    ],
  },
};

// Winter-specific services
const winterServices = [
  {
    icon: Snowflake,
    title: 'Ice Dam Prevention',
    description: 'Professional ice dam prevention and removal to protect your roof from winter damage.',
    href: '/services/roof-repair',
  },
  {
    icon: Thermometer,
    title: 'Cold Weather Repairs',
    description: 'Specialized repair techniques designed for freezing temperatures and winter conditions.',
    href: '/services/roof-repair',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Winter Service',
    description: '24/7 emergency response for winter storm damage, leaks, and ice-related issues.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Home,
    title: 'Attic Insulation',
    description: 'Proper insulation to prevent heat loss and ice dam formation on your roof.',
    href: '/services/roof-ventilation',
  },
  {
    icon: Wrench,
    title: 'Flashing Repairs',
    description: 'Critical flashing repairs to prevent leaks caused by freeze-thaw cycles.',
    href: '/services/roof-repair',
  },
  {
    icon: Shield,
    title: 'Winter Inspections',
    description: 'Comprehensive winter roof inspections to identify vulnerabilities before storms hit.',
    href: '/services/roof-inspection',
  },
];

// Why choose us points for winter
const whyChooseUs = [
  {
    icon: Award,
    title: 'Cold Weather Experts',
    description: 'Specialized training and equipment for safe, effective winter roof repairs.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned with military-grade attention to detail in every repair.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive winter coverage insurance.',
  },
  {
    icon: Users,
    title: 'Trained Crews',
    description: 'Safety-certified crews experienced in winter roofing conditions and hazards.',
  },
  {
    icon: Clock,
    title: '24/7 Winter Emergency',
    description: 'Round-the-clock emergency services when winter storms damage your roof.',
  },
];

// Charlotte neighborhoods served
const charlotteNeighborhoods = [
  'Myers Park',
  'Dilworth',
  'South End',
  'NoDa',
  'Plaza Midwood',
  'Ballantyne',
  'University City',
  'Cotswold',
  'Elizabeth',
  'Eastover',
  'SouthPark',
  'Uptown Charlotte',
  'Wesley Heights',
  'Fourth Ward',
  'Cherry',
  'Madison Park',
  'Montford',
  'Chantilly',
  'Commonwealth',
  'Sedgefield',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Pineville', href: '/locations/pineville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
  { name: 'Indian Trail', href: '/locations/indian-trail-nc' },
];

// FAQs about winter roof repair
const faqs = [
  {
    question: 'Can you repair a roof in winter in Charlotte NC?',
    answer:
      'Yes, Best Roofing Now performs roof repairs year-round in Charlotte, including during winter months. While Charlotte\'s winters are generally mild compared to northern states, we use specialized techniques and materials designed for cold weather application. Shingles can become brittle in freezing temperatures, so our crews take extra precautions and use cold-weather adhesives when needed. Emergency repairs are always possible regardless of temperature.',
  },
  {
    question: 'What causes ice dams on Charlotte roofs?',
    answer:
      'Ice dams form when heat escapes from your attic, melting snow on the roof. The water runs down to the colder eaves where it refreezes, creating a dam that traps water behind it. This trapped water can seep under shingles and cause significant interior damage. Prevention involves proper attic insulation and ventilation. While Charlotte doesn\'t see heavy snow often, ice dams can still occur during our occasional winter storms.',
  },
  {
    question: 'How do you prevent ice dam damage?',
    answer:
      'Ice dam prevention starts with proper attic insulation and ventilation to keep your roof deck cold and prevent snow from melting unevenly. We also recommend installing ice and water shield membrane along the eaves during roof replacement. For existing ice dams, we safely remove them using steam equipment rather than hacking at ice, which can damage shingles. We never recommend salt or chemicals on roofing materials.',
  },
  {
    question: 'What are signs of winter roof damage?',
    answer:
      'Signs of winter roof damage include water stains on ceilings or walls, icicles hanging from the eaves (a sign of potential ice damming), visible ice buildup along the roofline, missing or damaged shingles after winter storms, sagging areas that could indicate moisture saturation, and drafty areas indicating compromised insulation. If you notice any of these signs, call us for a free winter inspection.',
  },
  {
    question: 'Do you offer emergency winter roof repair?',
    answer:
      'Absolutely. Best Roofing Now provides 24/7 emergency roof repair services throughout Charlotte, including during winter storms. We understand that roof emergencies don\'t wait for good weather. Our crews are equipped and trained to work safely in winter conditions to stop active leaks and prevent further damage to your home. Call us anytime at (704) 605-6047.',
  },
  {
    question: 'How much does winter roof repair cost in Charlotte?',
    answer:
      'Winter roof repair costs in Charlotte are similar to other times of year, ranging from $200-$1,500 for most repairs. Emergency repairs during storms may have a premium due to urgency and hazardous conditions. Ice dam removal typically costs $400-$800 depending on severity. Many winter roof issues are covered by homeowner\'s insurance, and we\'re happy to help with the claims process.',
  },
  {
    question: 'Should I wait until spring to repair my roof?',
    answer:
      'No - delaying roof repairs through winter can allow small problems to become major damage. Water infiltration from damaged areas will continue through winter rains and any freeze-thaw cycles, potentially causing structural damage, mold growth, and ruined insulation. While some projects like full replacements may be better scheduled for warmer weather, most repairs should be addressed immediately.',
  },
  {
    question: 'How do I prepare my roof for Charlotte winters?',
    answer:
      'We recommend a fall inspection before winter to identify vulnerabilities, cleaning gutters to prevent ice dam formation, checking attic insulation and ventilation, trimming overhanging branches that could fall under ice weight, and addressing any existing damage. Best Roofing Now offers free pre-winter inspections to help Charlotte homeowners prepare for the cold season.',
  },
];

export default function WinterRoofRepairCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Winter Roof Repair Charlotte NC', url: `${SITE_CONFIG.url}/winter-roof-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Winter roof repair in Charlotte NC - Best Roofing Now cold weather experts"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Snowflake className="w-4 h-4" />
              <span className="text-sm font-semibold">Cold Weather Roofing Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Winter Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Cold weather specialists protecting Charlotte homes through winter
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Don't let winter damage compromise your home. Best Roofing Now provides expert cold weather roof repairs,
              ice dam prevention, and 24/7 emergency services throughout the Charlotte area. Our trained crews work
              safely in winter conditions to protect your home.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Winter Repair Quote
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
                <Clock className="w-5 h-5 text-green-400" />
                24/7 Emergency Service
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Winter Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Winter Roofing Services in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              Specialized cold weather services to protect your home from ice dams, winter storms, and freeze-thaw
              damage throughout the Charlotte area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {winterServices.map((service) => (
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
                Charlotte's Trusted Winter Roof Repair Experts
              </h2>
              <p className="text-gray text-lg mb-8">
                When winter weather damages your roof, you need a contractor who understands cold weather challenges.
                Best Roofing Now's crews are trained in winter safety protocols and use specialized techniques to deliver
                quality repairs even in freezing conditions.
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
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Best Roofing Now - Winter roof repair experts in Charlotte NC"
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
                Winter Roof Emergency? We're Here 24/7
              </h2>
              <p className="text-white/90">
                Don't wait for spring - winter roof damage gets worse. Call now for immediate assessment.
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
                Schedule Winter Inspection
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
              Winter Roof Repair Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our winter roofing crews serve homeowners throughout the Greater Charlotte metro area with cold weather
              expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
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

      {/* Winter Roofing Tips Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Winter Roof Care Tips for Charlotte Homeowners
            </h2>
            <p className="text-gray text-lg">
              Protect your home during Charlotte's winter months with these expert recommendations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2 text-center">Check Attic Insulation</h3>
              <p className="text-gray text-sm text-center">
                Proper insulation prevents heat loss that causes ice dams. Ensure R-38 to R-49 insulation in your attic.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Snowflake className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2 text-center">Clean Gutters Before Winter</h3>
              <p className="text-gray text-sm text-center">
                Clogged gutters contribute to ice dam formation. Clean gutters allow proper drainage during freeze-thaw.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2 text-center">Trim Overhanging Branches</h3>
              <p className="text-gray text-sm text-center">
                Ice-laden branches can fall and damage your roof. Trim branches within 10 feet of your roofline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Winter Roof Repairs Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed winter roofing projects throughout the Charlotte area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Winter roof repair completed in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation during winter in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of winter roof project in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional winter roofing work in Charlotte area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Projects
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
                Winter Roof Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about winter roof repair in Charlotte NC.
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
        pageType="other"
        city="Charlotte"
        slug="winter-roof-repair-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/winter-roof-repair-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Need Winter Roof Repair in Charlotte?"
        subtitle="Don't let cold weather damage escalate. Get a free inspection from Charlotte's trusted winter roofing experts. We're available 24/7 for emergencies."
      />
    </>
  );
}
