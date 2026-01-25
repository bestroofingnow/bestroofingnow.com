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
  Search,
  MapPin,
  Waves,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { MeetTheFamily } from '@/components/sections/MeetTheFamily';
import { TURNER_NOTES } from '@/lib/turner-family';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofers Huntersville NC | 5-Star Rated | Best Roofing Now',
  description:
    'Looking for trusted roofers in Huntersville NC? Best Roofing Now is a 5-star rated, veteran-owned roofing company serving the Lake Norman area. BBB A+ rated. Free estimates for all roofing services.',
  keywords: [
    'roofers huntersville nc',
    'huntersville roofers',
    'local roofers huntersville',
    'roofers in huntersville nc',
    'huntersville nc roofers',
    'best roofers huntersville nc',
    'top roofers huntersville',
    'professional roofers huntersville nc',
    'licensed roofers huntersville',
    'experienced roofers huntersville nc',
    'affordable roofers huntersville',
    'roofers near me huntersville nc',
    'lake norman roofers',
    'roofing company huntersville',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofers-huntersville-nc`,
  },
  openGraph: {
    title: 'Roofers Huntersville NC | 5-Star Rated | Best Roofing Now',
    description:
      '5-star rated, veteran-owned roofers serving Huntersville NC and the Lake Norman area. BBB A+ rated with 500+ roofs completed. Free estimates and 24/7 emergency service available.',
    url: `${SITE_CONFIG.url}/roofers-huntersville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional roofers Huntersville NC - Best Roofing Now team at work',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Huntersville homes including shingle, metal, and tile roofing.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, and commercial roof repairs for Huntersville businesses.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in Huntersville.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials and extended warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections with detailed reports and photos for Huntersville properties.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for Lake Norman area homes.',
    href: '/services/storm-damage',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Star,
    title: '5-Star Rated',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Lake Norman area homeowners.`,
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofers with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Huntersville homeowners need us most.',
  },
];

// Huntersville neighborhoods and communities served
const huntersvilleNeighborhoods = [
  'Birkdale Village',
  'Skybrook',
  'Rosedale',
  'Northstone',
  'Vermillion',
  'Cedarfield',
  'Gilead Ridge',
  'Beckett',
  'Magnolia Estates',
  'The Palisades',
  'Mirabella',
  'Bryton',
  'The Hamptons',
  'Monteith Park',
  'Old Stone',
  'Summers Walk',
  'Bradford',
  'Torrence Landing',
  'Lake Forest',
  'Wynfield',
];

// Nearby cities served from Huntersville
const nearbyCities = [
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Charlotte', href: '/roofers-charlotte-nc' },
  { name: 'Denver', href: '/locations/denver-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Harrisburg', href: '/locations/harrisburg-nc' },
  { name: 'Kannapolis', href: '/locations/kannapolis-nc' },
  { name: 'Mount Holly', href: '/locations/mount-holly-nc' },
  { name: 'Stanley', href: '/locations/stanley-nc' },
  { name: 'Sherrills Ford', href: '/locations/sherrills-ford-nc' },
  { name: 'Terrell', href: '/locations/terrell-nc' },
];

// FAQs about roofers in Huntersville
const faqs = [
  {
    question: 'Why should I choose Best Roofing Now over other roofers in Huntersville NC?',
    answer:
      'Best Roofing Now stands out among Huntersville roofers with our 5-star Google rating, BBB A+ accreditation, and veteran-owned values. We have completed over 500 roofs in the Lake Norman area and are certified by CertainTeed, GAF, and Owens Corning. Our deep understanding of Huntersville\'s unique roofing needs, transparent pricing, and industry-leading warranties make us the top choice for local homeowners.',
  },
  {
    question: 'Are your roofers licensed and insured in Huntersville NC?',
    answer:
      'Yes, all our roofers are fully licensed in North Carolina and we carry comprehensive general liability and workers compensation insurance. This protects Huntersville homeowners from any liability during roofing projects. We are happy to provide proof of insurance and licensing upon request before starting any work.',
  },
  {
    question: 'How much do roofers in Huntersville NC typically charge?',
    answer:
      'Roofing costs in Huntersville vary based on the scope of work. Minor repairs typically range from $200-$1,500, while full roof replacements range from $8,000-$25,000 for most homes. Factors include roof size, pitch, material choice, and complexity. Many Lake Norman area homes have larger footprints, which can affect pricing. We provide free, detailed estimates with transparent pricing and no hidden fees.',
  },
  {
    question: 'Do you offer free estimates for roofing work in Huntersville?',
    answer:
      'Absolutely! Best Roofing Now provides completely free, no-obligation estimates for all roofing services in Huntersville and the Lake Norman area. Our certified inspectors will thoroughly examine your roof, identify any issues, and provide a detailed written proposal. There is no pressure to hire us after receiving your estimate.',
  },
  {
    question: 'How quickly can your roofers respond to emergencies in Huntersville?',
    answer:
      'We offer 24/7 emergency roofing services in Huntersville with typical response times of 1-4 hours for urgent situations like active leaks or storm damage. The Lake Norman area experiences significant storms, especially during spring and summer, and our emergency team is equipped to secure your property quickly, prevent further damage, and document everything for insurance purposes.',
  },
  {
    question: 'What areas near Huntersville do your roofers serve?',
    answer:
      'Our roofers serve all of Huntersville and the greater Lake Norman region including Birkdale Village, Skybrook, Rosedale, Northstone, Vermillion, and more. We also serve nearby cities like Cornelius, Davidson, Mooresville, Charlotte, Denver, Concord, and areas throughout Mecklenburg and Iredell counties.',
  },
  {
    question: 'What roofing materials work best for Lake Norman area homes?',
    answer:
      'Huntersville and Lake Norman area homes benefit from materials that withstand our humid subtropical climate. We recommend high-quality architectural shingles (CertainTeed, GAF, Owens Corning), metal roofing for durability and energy efficiency, and impact-resistant options for storm protection. Our experts can help you choose the best material for your specific home and budget.',
  },
  {
    question: 'Do your Huntersville roofers help with insurance claims?',
    answer:
      'Yes! We have extensive experience helping Huntersville homeowners navigate insurance claims for storm damage. Lake Norman area homes frequently experience hail and wind damage, and our roofers provide detailed documentation, meet with adjusters on your behalf, and advocate for fair settlements. Many Huntersville roofs qualify for insurance coverage after storm events.',
  },
];

export default function RoofersHuntersvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofers Huntersville NC', url: `${SITE_CONFIG.url}/roofers-huntersville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Professional roofers Huntersville NC - Best Roofing Now crew installing a new roof"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">5-Star Rated | Veteran-Owned | Lake Norman Area</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofers <br className="hidden md:block" />
              <span className="text-accent-light">Huntersville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Huntersville&apos;s most trusted roofers with {SITE_CONFIG.roofsInstalled}+ roofs completed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides 5-star rated roofing services throughout Huntersville NC and the Lake Norman
              region. From repairs to complete replacements, our certified roofers deliver exceptional quality
              backed by industry-leading warranties and our BBB A+ rating.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Estimate
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
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Lake Norman Introduction Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Waves className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Lake Norman Area Experts</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Huntersville&apos;s Premier Roofing Company
              </h2>
              <p className="text-gray text-lg mb-6">
                Huntersville has grown from a small town into one of the most desirable communities in the Charlotte
                metro area. Located on the southern shores of Lake Norman, homes here range from historic properties
                to modern luxury estates in communities like Birkdale Village, Skybrook, and The Palisades.
              </p>
              <p className="text-gray text-lg mb-6">
                Our roofers understand the unique challenges Lake Norman area homes face - from high humidity and
                intense summer heat to severe thunderstorms and occasional hail. We use materials and techniques
                specifically suited to protect your Huntersville home for decades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
                >
                  Schedule Free Inspection
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Huntersville NC roofing project completed by Best Roofing Now"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-dark">Serving Huntersville</p>
                    <p className="text-sm text-gray">Lake Norman&apos;s Trusted Roofers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roofing Services for Huntersville Homeowners
            </h2>
            <p className="text-gray text-lg">
              Our team of experienced Huntersville roofers handles all your roofing needs with expert
              craftsmanship and premium materials designed for the Lake Norman climate.
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
                Why Huntersville Homeowners Trust Our Roofers
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need roofers in Huntersville NC, you want a team you can trust. Best Roofing
                Now has built our reputation on quality workmanship, honest assessments, and putting
                our Lake Norman area customers first.
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
                alt="Best Roofing Now - Trusted roofers in Huntersville NC with completed roof project"
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
                Looking for Reliable Roofers in Huntersville?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from the Lake Norman area&apos;s most trusted roofing team.
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
              Huntersville Roofers Serving All Lake Norman Communities
            </h2>
            <p className="text-gray text-lg">
              Our professional roofers serve homeowners and businesses throughout Huntersville and the greater
              Lake Norman region.
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

      {/* Certifications Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certified Huntersville Roofers You Can Trust
            </h2>
            <p className="text-gray text-lg">
              Our certifications from industry-leading manufacturers mean you get premium materials backed by
              extended warranty coverage for your Huntersville home.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">CertainTeed SELECT ShingleMaster</h3>
              <p className="text-gray text-sm">
                Top-tier certification with access to premium warranties and specialized training for Huntersville installations.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">GAF Factory-Certified</h3>
              <p className="text-gray text-sm">
                Authorized to offer GAF&apos;s Golden Pledge warranty - the best protection for your Lake Norman home.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Owens Corning Preferred</h3>
              <p className="text-gray text-sm">
                Preferred Contractor status with Owens Corning for extended warranty options on Huntersville roofs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lake Norman Specific Content */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Roofing Expertise for Lake Norman Living
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray text-lg mb-6">
                Living in Huntersville means enjoying the best of Lake Norman lifestyle - but it also means your
                roof faces unique challenges. The combination of hot, humid summers, occasional severe thunderstorms,
                and proximity to the lake creates specific roofing needs that generic contractors may overlook.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-3 text-lg">Climate Considerations</h3>
                  <ul className="space-y-2 text-gray">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>High humidity resistance to prevent algae and moss growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Impact-resistant options for hail protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Proper ventilation for hot summer attic temperatures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Wind-rated materials for severe storm protection</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-3 text-lg">Lake Norman Home Styles</h3>
                  <ul className="space-y-2 text-gray">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Luxury lakefront homes with complex roof designs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Modern suburban homes in planned communities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Townhomes and condos throughout Huntersville</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Historic properties requiring specialized care</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray text-lg">
                Our roofers have extensive experience with all types of Huntersville homes, from the upscale
                neighborhoods of Skybrook and The Palisades to the vibrant Birkdale Village area. We understand
                HOA requirements, local building codes, and what it takes to protect your investment in the
                Lake Norman area.
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
              Recent Work by Our Huntersville Roofers
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects throughout Huntersville and the Lake Norman area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed residential roof by Huntersville roofers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation by Best Roofing Now roofers in Huntersville"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed roof project by Huntersville NC roofers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roofing work by roofers in Huntersville area"
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

      {/* Meet the Turner Family */}
      <MeetTheFamily variant="full" />

      {/* Service City Links */}
      <ServiceCityLinks
        city="Huntersville"
        citySlug="huntersville-nc"
        title="Roofing Services in Huntersville NC"
        subtitle="Looking for a specific roofing service? Our Huntersville roofers offer comprehensive solutions for every roofing need in the Lake Norman area."
      />

      {/* Personal Note from James */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-primary/5 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-primary">JT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">A Note from James Turner, Owner</h3>
                <p className="text-gray italic mb-4">
                  &ldquo;{TURNER_NOTES.james.onCommunity}&rdquo;
                </p>
                <p className="text-gray">
                  Huntersville and the Lake Norman area hold a special place in our hearts. We&apos;ve watched this
                  community grow and thrive, and we take pride in protecting the homes that make it so special.
                  When you hire Best Roofing Now, you&apos;re getting a family that understands what your home
                  means to you - because we feel the same way about ours.
                </p>
                <p className="text-primary font-semibold mt-4">
                  Call us today at {SITE_CONFIG.phone} - I&apos;d love to hear from you.
                </p>
              </div>
            </div>
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
                Huntersville Roofers FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about hiring roofers in Huntersville NC and the Lake Norman area.
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
        title="Ready to Work with Huntersville's Top-Rated Roofers?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your Lake Norman home's needs and budget."
      />
    </>
  );
}
