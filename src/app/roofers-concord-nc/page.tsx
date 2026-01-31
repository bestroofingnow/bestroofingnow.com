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
  Zap,
  Trophy,
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
  title: 'Roofers Concord NC | 5-Star Rated | Best Roofing Now',
  description:
    'Looking for trusted roofers in Concord NC? Best Roofing Now is a 5-star rated, veteran-owned roofing company serving Cabarrus County. BBB A+ rated with 500+ roofs completed. Free estimates for all roofing services in the Charlotte Motor Speedway area.',
  keywords: [
    'roofers concord nc',
    'concord nc roofers',
    'concord roofers',
    'local roofers concord nc',
    'roofers in concord nc',
    'best roofers concord nc',
    'top roofers concord',
    'professional roofers concord nc',
    'licensed roofers concord',
    'experienced roofers concord nc',
    'affordable roofers concord',
    'roofers near me concord nc',
    'cabarrus county roofers',
    'roofing contractors concord nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofers-concord-nc`,
  },
  openGraph: {
    title: 'Roofers Concord NC | 5-Star Rated | Best Roofing Now',
    description:
      '5-star rated, veteran-owned roofers serving Concord NC and Cabarrus County. BBB A+ rated with 500+ roofs completed. Free estimates and 24/7 emergency service available.',
    url: `${SITE_CONFIG.url}/roofers-concord-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Professional roofers Concord NC - Best Roofing Now team at work',
      },
    ],
  },
};

// Services offered in Concord
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Concord homes including shingle, metal, and tile roofing.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, and commercial roof repairs for Concord businesses.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in Concord.',
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
    description: 'Free comprehensive inspections with detailed reports for Concord homeowners.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance in Cabarrus County.',
    href: '/services/storm-damage',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Star,
    title: '5-Star Rated',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Concord and Charlotte area homeowners.`,
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
    description: 'Fully licensed NC roofers with comprehensive liability insurance for your protection.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Concord homeowners need us most.',
  },
];

// Concord neighborhoods and areas served
const concordNeighborhoods = [
  'Downtown Concord',
  'Afton Village',
  'Poplar Tent',
  'Odell School',
  'Cox Mill',
  'Weddington Hills',
  'Highland Creek',
  'Skybrook',
  'Christenbury',
  'Gibson Village',
  'Moss Creek',
  'The Palisades',
  'Kannapolis',
  'Harrisburg',
  'Mount Pleasant',
  'Midland',
  'Locust',
  'Cabarrus County',
  'Coddle Creek',
  'Rocky River',
];

// Nearby cities served from Concord
const nearbyCities = [
  { name: 'Charlotte', href: '/roofers-charlotte-nc' },
  { name: 'Kannapolis', href: '/locations/kannapolis-nc' },
  { name: 'Harrisburg', href: '/locations/harrisburg-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Mount Pleasant', href: '/locations/mount-pleasant-nc' },
  { name: 'Midland', href: '/locations/midland-nc' },
  { name: 'Albemarle', href: '/locations/albemarle-nc' },
];

// FAQs about roofers in Concord
const faqs = [
  {
    question: 'Why should I choose Best Roofing Now over other roofers in Concord NC?',
    answer:
      'Best Roofing Now stands out among Concord roofers with our 5-star Google rating, BBB A+ accreditation, and veteran-owned values. We have completed over 500 roofs in the Charlotte metro area including Concord and Cabarrus County. Our certified roofers are trained by CertainTeed, GAF, and Owens Corning, offering premium warranty options. We provide transparent pricing, free estimates, and treat every Concord home like our own.',
  },
  {
    question: 'Are your roofers licensed and insured to work in Concord NC?',
    answer:
      'Yes, all our roofers are fully licensed in North Carolina and we carry comprehensive general liability and workers compensation insurance. This protects Concord homeowners from any liability during roofing projects. We are happy to provide proof of insurance and licensing upon request, and we comply with all Cabarrus County building codes and permit requirements.',
  },
  {
    question: 'How much do roofers in Concord NC typically charge?',
    answer:
      'Roofing costs in Concord vary based on the scope of work. Minor repairs typically range from $200-$1,500, while full roof replacements range from $8,000-$25,000 for most homes. Factors include roof size, pitch, material choice (asphalt shingles, metal, tile), and complexity. We provide free, detailed estimates with transparent pricing and no hidden fees. Concord homeowners often find our pricing competitive with other local roofers.',
  },
  {
    question: 'Do you offer free roof inspections and estimates in Concord?',
    answer:
      'Absolutely! Best Roofing Now provides completely free, no-obligation estimates for all roofing services in Concord and surrounding Cabarrus County areas. Our certified inspectors will thoroughly examine your roof using both visual inspection and drone technology, identify any issues, and provide a detailed written proposal. There is no pressure to hire us after receiving your estimate.',
  },
  {
    question: 'How quickly can your roofers respond to emergencies in Concord?',
    answer:
      'We offer 24/7 emergency roofing services in Concord with typical response times of 1-4 hours for urgent situations like active leaks or storm damage. Our emergency team is equipped to secure your property quickly, prevent further damage, and document everything for insurance purposes. Living in the Charlotte Motor Speedway area means weather can be unpredictable, and we are ready when you need us.',
  },
  {
    question: 'What areas near Concord do your roofers serve?',
    answer:
      'Our roofers serve all of Concord and Cabarrus County including Kannapolis, Harrisburg, Mount Pleasant, Midland, and Locust. We also serve the greater Charlotte metro area including Huntersville, Cornelius, Davidson, Mooresville, Matthews, Mint Hill, and all Charlotte neighborhoods. Whether you are near the Charlotte Motor Speedway or anywhere in Cabarrus County, we are your local roofers.',
  },
  {
    question: 'What types of roofing materials do your Concord roofers work with?',
    answer:
      'Our experienced roofers work with all types of roofing materials popular in Concord including architectural and 3-tab asphalt shingles, metal roofing (standing seam and ribbed panels), tile roofing, flat roof systems (TPO, EPDM, PVC), and synthetic slate. We help Concord homeowners choose the best material for their home style, budget, and the local climate conditions.',
  },
  {
    question: 'Do your roofers help with insurance claims for storm damage in Concord?',
    answer:
      'Yes! We have extensive experience helping Concord homeowners navigate insurance claims for storm damage. Cabarrus County experiences significant storms, hail, and wind damage throughout the year. Our roofers provide detailed documentation, meet with adjusters on your behalf, and advocate for fair settlements. Many Concord roofs qualify for insurance coverage after storm events, and we help maximize your claim.',
  },
];

// Concord-specific content
const concordContent = {
  intro: `Concord, the seat of Cabarrus County, is known for its rich motorsports heritage, historic downtown, and rapidly growing residential communities. From the excitement of the Charlotte Motor Speedway to the charming streets of downtown, Concord homes need roofing contractors who understand the unique demands of this thriving North Carolina city.`,
  climate: `The Concord area experiences a humid subtropical climate with hot summers, mild winters, and significant rainfall throughout the year. This weather pattern, combined with occasional severe storms, hail, and high winds near the speedway corridor, means roofs in Concord face unique challenges that require experienced local roofers.`,
  community: `As Concord continues to grow with new developments in areas like Afton Village, Highland Creek, and Skybrook, homeowners need trusted roofers who can handle everything from new construction to maintaining roofs on historic downtown buildings. Best Roofing Now has been serving Concord families with the same dedication we bring to every Charlotte metro community.`,
};

export default function RoofersConcordNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofers Concord NC', url: `${SITE_CONFIG.url}/roofers-concord-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Professional roofers Concord NC - Best Roofing Now crew installing a new roof in Cabarrus County"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">5-Star Rated | Veteran-Owned | Serving Cabarrus County</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofers <br className="hidden md:block" />
              <span className="text-accent-light">Concord NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Concord&apos;s most trusted roofers with {SITE_CONFIG.roofsInstalled}+ roofs completed in the Charlotte metro area
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides 5-star rated roofing services throughout Concord NC and Cabarrus County.
              From the Charlotte Motor Speedway area to historic downtown Concord, our certified roofers deliver
              exceptional quality backed by industry-leading warranties and our BBB A+ rating.
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

      {/* Concord Introduction Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Serving Concord & Cabarrus County</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Your Trusted Local Roofers in Concord NC
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray">
              <p>{concordContent.intro}</p>
              <p>{concordContent.climate}</p>
              <p>{concordContent.community}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roofing Services from Concord&apos;s Best Roofers
            </h2>
            <p className="text-gray text-lg">
              Our team of experienced Concord roofers handles all your roofing needs with expert
              craftsmanship and premium materials backed by manufacturer warranties.
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
                Why Concord Homeowners Trust Our Roofers
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need roofers in Concord NC, you want a team you can trust. Best Roofing
                Now has built our reputation on quality workmanship, honest assessments, and putting
                our customers first throughout Cabarrus County and the greater Charlotte area.
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
                alt="Best Roofing Now - Trusted roofers in Concord NC with completed roof project"
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

      {/* Concord-Specific Features */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Expertise for Concord&apos;s Unique Needs
            </h2>
            <p className="text-gray text-lg">
              From the NASCAR excitement to growing family neighborhoods, we understand what Concord roofs need.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Motorsports Community</h3>
              <p className="text-gray text-sm">
                Living near Charlotte Motor Speedway means unique exposure to noise, vibration, and heavy traffic.
                We understand the specific roofing needs of homes in the speedway corridor and surrounding
                entertainment districts.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Storm-Ready Roofing</h3>
              <p className="text-gray text-sm">
                Cabarrus County experiences severe weather including thunderstorms, hail, and occasional
                tornadoes. Our impact-resistant roofing solutions and 24/7 emergency service keep
                Concord homes protected year-round.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Growing Communities</h3>
              <p className="text-gray text-sm">
                With new developments in Afton Village, Highland Creek, and Skybrook, we provide
                roofing services for both new construction and established Concord neighborhoods,
                ensuring quality that lasts for decades.
              </p>
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
                Looking for Reliable Roofers in Concord?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Cabarrus County&apos;s most trusted roofing team.
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
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Concord Roofers Serving All of Cabarrus County
            </h2>
            <p className="text-gray text-lg">
              Our professional roofers serve homeowners and businesses throughout Concord, Cabarrus County,
              and the greater Charlotte region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Concord Neighborhoods */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Concord Areas & Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {concordNeighborhoods.map((neighborhood) => (
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

      {/* Certifications Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certified Concord Roofers You Can Trust
            </h2>
            <p className="text-gray text-lg">
              Our certifications from industry-leading manufacturers mean Concord homeowners get premium
              materials backed by extended warranty coverage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">CertainTeed SELECT ShingleMaster</h3>
              <p className="text-gray text-sm">
                Top-tier certification with access to premium warranties and specialized training for Concord installations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">GAF Factory-Certified</h3>
              <p className="text-gray text-sm">
                Authorized to offer GAF&apos;s Golden Pledge warranty - the best in the industry for Cabarrus County homeowners.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Owens Corning Preferred</h3>
              <p className="text-gray text-sm">
                Preferred Contractor status with Owens Corning for extended warranty options on Concord roofing projects.
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
              Recent Work by Our Concord Roofers
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects throughout Concord and Cabarrus County.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed residential roof by Concord roofers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation by Best Roofing Now roofers in Concord"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed roof project by Concord NC roofers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roofing work by roofers in Concord area"
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
        city="Concord"
        citySlug="concord-nc"
        title="Roofing Services in Concord NC"
        subtitle="Looking for a specific roofing service? Our Concord roofers offer comprehensive solutions for every roofing need in Cabarrus County."
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
                  Concord has become one of our favorite communities to serve. From the excitement of race
                  weekends at the speedway to the quiet neighborhoods of Afton Village, every Concord home
                  deserves a roof that protects what matters most. When you hire Best Roofing Now, you&apos;re
                  getting a family that treats your home like our own.
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
                Concord Roofers FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about hiring roofers in Concord NC and Cabarrus County.
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
        title="Ready to Work with Concord's Top-Rated Roofers?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your Concord home's needs and your budget."
      />
    </>
  );
}
