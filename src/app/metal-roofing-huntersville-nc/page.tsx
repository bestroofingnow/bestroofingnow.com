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
  Building2,
  CloudRain,
  MapPin,
  Zap,
  Thermometer,
  DollarSign,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Metal Roofing Huntersville NC | Standing Seam Experts | Best Roofing Now',
  description:
    'Looking for metal roofing in Huntersville NC? Best Roofing Now specializes in standing seam metal roofs, metal shingles, and metal roof repairs. BBB A+ rated, veteran-owned. Free estimates!',
  keywords: [
    'metal roofing Huntersville NC',
    'metal roof Huntersville',
    'standing seam metal roof Huntersville NC',
    'metal roof installation Huntersville',
    'metal roofing contractors Huntersville',
    'metal roof repair Huntersville NC',
    'aluminum roofing Huntersville',
    'steel roofing Huntersville NC',
    'metal shingle roof Huntersville',
    'energy efficient roofing Huntersville',
    'metal roof cost Huntersville NC',
    'best metal roofer Huntersville',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/metal-roofing-huntersville-nc`,
  },
  openGraph: {
    title: 'Metal Roofing Huntersville NC | Standing Seam Experts | Best Roofing Now',
    description:
      'BBB A+ rated metal roofing experts serving Huntersville NC. Standing seam, metal shingles, and more. Veteran-owned with 50+ year warranty options. Free estimates!',
    url: `${SITE_CONFIG.url}/metal-roofing-huntersville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.metalRoof,
        width: 1200,
        height: 630,
        alt: 'Metal roofing installation in Huntersville NC by Best Roofing Now',
      },
    ],
  },
};

// Metal roofing services offered
const services = [
  {
    icon: Home,
    title: 'Standing Seam Metal Roofing',
    description: 'Premium standing seam panels with concealed fasteners for maximum durability and sleek aesthetics.',
    href: '/services/metal-roofing',
  },
  {
    icon: Building2,
    title: 'Metal Shingle Roofing',
    description: 'Metal shingles that replicate the look of traditional shingles with superior longevity.',
    href: '/services/metal-roofing',
  },
  {
    icon: Wrench,
    title: 'Metal Roof Repair',
    description: 'Expert repairs for existing metal roofs including leak fixes, panel replacement, and fastener work.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Metal Roof Replacement',
    description: 'Complete metal roof replacement with premium materials and expert installation.',
    href: '/services/roof-replacement',
  },
  {
    icon: Building2,
    title: 'Commercial Metal Roofing',
    description: 'Industrial and commercial metal roofing systems for businesses in Huntersville.',
    href: '/services/commercial-roofing',
  },
  {
    icon: CloudRain,
    title: 'Storm-Resistant Metal Roofing',
    description: 'Impact-resistant metal roofing designed to withstand severe weather conditions.',
    href: '/services/storm-damage',
  },
];

// Why choose metal roofing points
const whyChooseMetal = [
  {
    icon: Clock,
    title: '50+ Year Lifespan',
    description: 'Metal roofs last 2-3 times longer than traditional asphalt shingles, often exceeding 50 years.',
  },
  {
    icon: Thermometer,
    title: 'Energy Efficient',
    description: 'Reflective metal roofing can reduce cooling costs by 10-25% in Huntersville\'s hot summers.',
  },
  {
    icon: Shield,
    title: 'Storm Resistant',
    description: 'Metal roofs withstand winds up to 140 mph and are Class 4 impact resistant for hail.',
  },
  {
    icon: Zap,
    title: 'Fire Resistant',
    description: 'Metal roofing is non-combustible with a Class A fire rating for maximum protection.',
  },
  {
    icon: DollarSign,
    title: 'Increases Home Value',
    description: 'Metal roofs recoup up to 85% of installation costs and boost curb appeal.',
  },
  {
    icon: Award,
    title: 'Eco-Friendly',
    description: 'Made from recycled materials and 100% recyclable at end of life. Sustainable choice.',
  },
];

// Why choose Best Roofing Now
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Huntersville homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Metal Roof Specialists',
    description: 'Factory-trained installers certified in standing seam and metal shingle systems.',
  },
  {
    icon: Clock,
    title: 'Local to Huntersville',
    description: 'Serving Huntersville and Lake Norman area with fast response times.',
  },
];

// Huntersville neighborhoods served
const huntersvilleNeighborhoods = [
  'Birkdale Village',
  'Vermillion',
  'Skybrook',
  'Rosedale',
  'Northstone',
  'The Palisades',
  'Stillwater',
  'Magnolia Estates',
  'Cedarfield',
  'Bradford',
  'Wynfield Creek',
  'Gilead Ridge',
  'Beckett',
  'Bryton',
  'Hamptons',
  'Old Stone Crossing',
  'Monteith Park',
  'Asbury',
  'Nims Village',
  'Ranson Estates',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Denver', href: '/metal-roofing-denver-nc' },
  { name: 'Lake Norman', href: '/locations/lake-norman' },
];

// FAQs about metal roofing in Huntersville
const faqs = [
  {
    question: 'How much does metal roofing cost in Huntersville NC?',
    answer:
      'Metal roofing in Huntersville typically costs between $8-$16 per square foot installed, depending on the type of metal and style chosen. Standing seam metal roofing ranges from $12-$18 per sq ft, while metal shingles range from $8-$14 per sq ft. While the initial cost is higher than asphalt, the 50+ year lifespan makes metal roofing a better long-term investment.',
  },
  {
    question: 'Is metal roofing good for North Carolina weather?',
    answer:
      'Metal roofing is excellent for North Carolina\'s climate. It withstands our hot summers by reflecting solar heat (reducing cooling costs 10-25%), handles heavy rain without deteriorating, resists high winds up to 140 mph, and provides Class 4 hail resistance. Metal roofs also shed snow and ice better than other materials.',
  },
  {
    question: 'What types of metal roofing do you install in Huntersville?',
    answer:
      'Best Roofing Now installs all types of metal roofing in Huntersville including standing seam (our most popular), metal shingles, corrugated metal, and stone-coated steel. We work with premium materials from manufacturers like Drexel Metals, McElroy Metal, and DECRA. Each system offers different aesthetics and price points to match your home and budget.',
  },
  {
    question: 'How long does metal roof installation take?',
    answer:
      'Most residential metal roof installations in Huntersville take 2-5 days depending on the size and complexity of your roof. Standing seam systems take slightly longer due to custom panel fabrication. We minimize disruption to your daily routine and always clean up thoroughly when the job is complete.',
  },
  {
    question: 'Will a metal roof make my house hotter?',
    answer:
      'Actually, the opposite is true! Metal roofs reflect solar radiant heat rather than absorbing it like asphalt shingles. Quality metal roofing with proper ventilation and cool-roof coatings can reduce cooling costs by 10-25% in Huntersville\'s hot summers. Many homeowners notice a significant difference in upstairs comfort.',
  },
  {
    question: 'Do metal roofs attract lightning?',
    answer:
      'No, metal roofs do not attract lightning. Lightning seeks the path of least resistance to ground, and metal roofs are no more likely to be struck than other roofing materials. In fact, if lightning does strike, metal roofs are safer because they\'re non-combustible and will dissipate the energy rather than catching fire.',
  },
  {
    question: 'What warranty comes with metal roofing?',
    answer:
      'Metal roofing offers the best warranties in the industry. Paint finishes typically carry 25-40 year warranties against fading and chalking. Substrate warranties cover the metal panels for 20-50 years. Best Roofing Now provides additional workmanship warranties on our installation. Many metal roofs last 50-70 years with proper maintenance.',
  },
  {
    question: 'Can you install metal roofing over existing shingles?',
    answer:
      'In some cases, yes. Installing metal over existing shingles can save on tear-off costs and is environmentally friendly. However, we need to inspect your current roof deck, evaluate ventilation, and ensure local codes allow it. We\'ll provide an honest assessment of whether overlay or full tear-off is best for your specific situation.',
  },
];

export default function MetalRoofingHuntersvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Metal Roofing Huntersville NC', url: `${SITE_CONFIG.url}/metal-roofing-huntersville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/metal-roofing-huntersville-nc`}
        pageName="Metal Roofing Huntersville NC"
        city="Huntersville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.metalRoof}
            alt="Metal roofing installation in Huntersville NC - Best Roofing Now standing seam experts"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Standing Seam Experts | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Metal Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Huntersville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium metal roofing with 50+ year warranty protection
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is Huntersville's trusted metal roofing specialist. From standing seam to metal shingles,
              our factory-trained installers deliver energy-efficient, storm-resistant roofing that lasts a lifetime.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Metal Roof Estimate
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
                50+ Year Warranties
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Metal Roofing Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Huntersville Homeowners Choose Metal Roofing
            </h2>
            <p className="text-gray text-lg">
              Metal roofing offers unmatched durability, energy efficiency, and long-term value for your home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseMetal.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
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

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Metal Roofing Services in Huntersville NC
            </h2>
            <p className="text-gray text-lg">
              Complete metal roofing solutions from installation to repair, backed by industry-leading warranties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
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
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Huntersville Chooses Best Roofing Now for Metal Roofing
              </h2>
              <p className="text-gray text-lg mb-8">
                When you invest in metal roofing, you want installers who specialize in metal systems. Best Roofing
                Now's factory-trained team delivers precision installation that maximizes the lifespan and performance
                of your metal roof.
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
                src={IMAGES.hero.metalRoof}
                alt="Best Roofing Now - Metal roofing experts in Huntersville NC"
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
                Ready for a Metal Roof in Huntersville?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Huntersville's metal roofing specialists.
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
                Schedule Free Estimate
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
              Metal Roofing Throughout Huntersville & Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Our metal roofing experts serve all Huntersville neighborhoods and the greater Lake Norman area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Huntersville Neighborhoods */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Huntersville Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {huntersvilleNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
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

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Metal Roofing Projects in the Huntersville Area
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of metal roofing installations throughout Huntersville and Lake Norman.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Metal roof installation in Huntersville NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.hero.metalRoof}
                alt="Standing seam metal roof by Best Roofing Now in Huntersville"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of metal roofing project in Huntersville area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Metal roofing contractor work in Huntersville NC"
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
                Metal Roofing FAQs for Huntersville
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about metal roofing in Huntersville NC.
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

      {/* Final CTA */}
      <CTASection
        title="Ready for Premium Metal Roofing in Huntersville?"
        subtitle="Get a free, no-obligation estimate from Huntersville's metal roofing experts. We'll help you choose the perfect metal roofing system for your home and budget."
      />
    </>
  );
}
