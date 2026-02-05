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
  Anchor,
  Waves,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { MeetTheFamily } from '@/components/sections/MeetTheFamily';
import { TURNER_NOTES } from '@/lib/turner-family';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofers Mooresville NC | 5-Star Rated',
  description:
    'Looking for trusted roofers in Mooresville NC? Best Roofing Now is a 5-star rated, veteran-owned roofing company serving the Lake Norman area. BBB A+ rated. Free estimates for all roofing services.',
  keywords: [
    'roofers mooresville nc',
    'mooresville roofers',
    'local roofers mooresville',
    'roofers in mooresville nc',
    'mooresville nc roofers',
    'best roofers mooresville nc',
    'top roofers mooresville',
    'professional roofers mooresville nc',
    'licensed roofers mooresville',
    'experienced roofers mooresville nc',
    'affordable roofers mooresville',
    'roofers near me mooresville nc',
    'lake norman roofers',
    'roofing company mooresville',
    'roof repair mooresville nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofers-mooresville-nc`,
  },
  openGraph: {
    title: 'Roofers Mooresville NC | 5-Star Rated | Best Roofing Now',
    description:
      '5-star rated, veteran-owned roofers serving Mooresville NC and Lake Norman. BBB A+ rated with 500+ roofs completed. Free estimates and 24/7 emergency service available.',
    url: `${SITE_CONFIG.url}/roofers-mooresville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional roofers Mooresville NC - Best Roofing Now team at work',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Lake Norman homes including shingle, metal, and tile roofing.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, and commercial roof repairs for Mooresville businesses.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in the Lake Norman area.',
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
    description: 'Free comprehensive inspections with detailed reports and photos for Mooresville homeowners.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for Lake Norman residents.',
    href: '/services/storm-damage',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Star,
    title: '5-Star Rated',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Lake Norman homeowners.`,
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
    description: 'Round-the-clock emergency roofing services for Lake Norman area homes.',
  },
];

// Mooresville and Lake Norman neighborhoods/areas served
const mooresvilleAreas = [
  'Downtown Mooresville',
  'Lake Norman',
  'Langtree',
  'Morrison Plantation',
  'Brawley School',
  'Curtis Pond',
  'The Point',
  'Westport',
  'Talbert Village',
  'Magnolia Estates',
  'Foxwood',
  'Rolling Hills',
  'Kings Point',
  'Williamson Road',
  'Coddle Creek',
  'Lake Norman Shores',
  'Stutts Road',
  'Race City',
  'Exit 36 Area',
  'Birkdale Landing',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Charlotte', href: '/roofers-charlotte-nc' },
  { name: 'Statesville', href: '/locations/statesville-nc' },
  { name: 'Troutman', href: '/locations/troutman-nc' },
  { name: 'Denver', href: '/roofers-denver-nc' },
  { name: 'Sherrills Ford', href: '/locations/sherrills-ford-nc' },
  { name: 'Terrell', href: '/locations/terrell-nc' },
  { name: 'Mount Mourne', href: '/locations/mount-mourne-nc' },
  { name: 'Lake Norman', href: '/locations/lake-norman-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
];

// FAQs about roofers in Mooresville
const faqs = [
  {
    question: 'Why should I choose Best Roofing Now over other roofers in Mooresville NC?',
    answer:
      'Best Roofing Now stands out among Mooresville roofers with our 5-star Google rating, BBB A+ accreditation, and veteran-owned values. We have completed over 500 roofs in the Lake Norman area and are certified by CertainTeed, GAF, and Owens Corning. We are active members of the Lake Norman Chamber of Commerce and deeply committed to serving our neighbors in Mooresville. Our transparent pricing, free estimates, and industry-leading warranties make us the top choice for Lake Norman homeowners.',
  },
  {
    question: 'Are your roofers licensed and insured in Mooresville NC?',
    answer:
      'Yes, all our roofers are fully licensed in North Carolina and we carry comprehensive general liability and workers compensation insurance. This protects you from any liability during your roofing project. We serve Mooresville and the entire Lake Norman region with the same professional standards. We are happy to provide proof of insurance and licensing upon request.',
  },
  {
    question: 'How much do roofers in Mooresville NC typically charge?',
    answer:
      'Roofing costs in Mooresville vary based on the scope of work and the unique characteristics of Lake Norman homes. Minor repairs typically range from $200-$1,500, while full roof replacements range from $8,000-$25,000 for most homes. Lakefront properties may have different considerations due to moisture exposure. Factors include roof size, pitch, material choice, and complexity. We provide free, detailed estimates with transparent pricing and no hidden fees.',
  },
  {
    question: 'Do you offer free estimates for roofing work in Mooresville?',
    answer:
      'Absolutely! Best Roofing Now provides completely free, no-obligation estimates for all roofing services in Mooresville and the surrounding Lake Norman area. Our certified inspectors will thoroughly examine your roof, identify any issues, and provide a detailed written proposal. There is no pressure to hire us after receiving your estimate.',
  },
  {
    question: 'How quickly can your roofers respond to emergencies in Mooresville?',
    answer:
      'We offer 24/7 emergency roofing services with typical response times of 1-4 hours for urgent situations like active leaks or storm damage. Our team is strategically positioned to serve the Lake Norman corridor from Huntersville to Statesville, ensuring fast response times for Mooresville residents. Our emergency team is equipped to secure your property quickly, prevent further damage, and document everything for insurance purposes.',
  },
  {
    question: 'What areas do your Mooresville roofers serve?',
    answer:
      'Our roofers serve all of Mooresville and the greater Lake Norman region including Downtown Mooresville, Morrison Plantation, Langtree, The Point, Lake Norman Shores, and all lakefront communities. We also serve nearby cities like Huntersville, Cornelius, Davidson, Statesville, Troutman, Denver, and Sherrills Ford. Whether your home is on the lake or inland, we provide the same excellent service.',
  },
  {
    question: 'What types of roofing materials work best for Lake Norman area homes?',
    answer:
      'Our experienced roofers work with all types of roofing materials, but we often recommend specific options for Lake Norman homes based on moisture exposure and local weather patterns. Popular choices include architectural asphalt shingles, metal roofing (which performs excellently in humid lake environments), and tile roofing. We can help you choose the best material for your home, budget, and the unique conditions of living near Lake Norman.',
  },
  {
    question: 'Do your roofers help with insurance claims in Mooresville?',
    answer:
      'Yes! We have extensive experience helping Mooresville and Lake Norman homeowners navigate insurance claims for storm damage. Our roofers provide detailed documentation, meet with adjusters on your behalf, and advocate for fair settlements. The Lake Norman area frequently experiences severe thunderstorms, and many roofs qualify for insurance coverage after these events. We help maximize your claim while handling the paperwork stress for you.',
  },
];

export default function RoofersMoresville() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofers Mooresville NC', url: `${SITE_CONFIG.url}/roofers-mooresville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofers-mooresville-nc`}
        pageName="Roofers Mooresville NC"
        city="Mooresville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Professional roofers Mooresville NC - Best Roofing Now crew installing a new roof"
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
              <span className="text-accent-light">Mooresville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Lake Norman&apos;s most trusted roofers with {SITE_CONFIG.roofsInstalled}+ roofs completed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides 5-star rated roofing services throughout Mooresville NC and the
              Lake Norman area. From repairs to complete replacements, our certified roofers deliver
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
                <Anchor className="w-5 h-5 text-accent-light" />
                Lake Norman Chamber Member
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Lake Norman Introduction */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Waves className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Proudly Serving Lake Norman</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Your Trusted Roofers in Mooresville &amp; Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Mooresville, known as &ldquo;Race City USA&rdquo; and the heart of the Lake Norman region, deserves
              roofers who understand the unique challenges of lakefront and waterside living. From the humidity
              and moisture exposure near the lake to the severe thunderstorms that roll through the region, your
              roof needs expert care. Best Roofing Now has proudly served Mooresville homeowners for years, and
              we&apos;re active members of the Lake Norman Chamber of Commerce. When you choose us, you&apos;re
              choosing neighbors who care about this community as much as you do.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roofing Services from Mooresville&apos;s Best Roofers
            </h2>
            <p className="text-gray text-lg">
              Our team of experienced Mooresville roofers handles all your roofing needs with expert
              craftsmanship and premium materials designed to protect Lake Norman homes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
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
                Why Lake Norman Homeowners Trust Our Roofers
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need roofers in Mooresville NC, you want a team you can trust. Best Roofing
                Now has built our reputation on quality workmanship, honest assessments, and putting
                our customers first. As proud members of the Lake Norman Chamber of Commerce, we&apos;re
                committed to serving this community with excellence.
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
                alt="Best Roofing Now - Trusted roofers in Mooresville NC with completed roof project"
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

      {/* Lake Norman Specific Roofing Considerations */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Anchor className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Lake Norman Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roofing Considerations for Lake Norman Homes
              </h2>
              <p className="text-gray text-lg">
                Living near Lake Norman comes with unique roofing challenges that our experienced team
                understands and addresses with every project.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-light rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Waves className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">Humidity &amp; Moisture Control</h3>
                <p className="text-gray text-sm">
                  Lake Norman homes face higher humidity levels year-round. We select materials and install
                  proper ventilation systems to prevent moisture buildup, mold growth, and premature roof
                  deterioration that lakefront properties are prone to.
                </p>
              </div>
              <div className="bg-light rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CloudRain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">Storm Damage Protection</h3>
                <p className="text-gray text-sm">
                  The Lake Norman region experiences severe thunderstorms, especially in spring and summer.
                  We use impact-resistant materials and proper installation techniques to protect your home
                  from wind, hail, and heavy rain.
                </p>
              </div>
              <div className="bg-light rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">Aesthetic Excellence</h3>
                <p className="text-gray text-sm">
                  Mooresville and Lake Norman homeowners take pride in their properties. We offer premium
                  roofing materials that enhance curb appeal while meeting HOA requirements common in
                  communities like Morrison Plantation and The Point.
                </p>
              </div>
              <div className="bg-light rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">Long-Term Warranties</h3>
                <p className="text-gray text-sm">
                  Our manufacturer certifications allow us to offer industry-leading warranties on all
                  Lake Norman roofing projects. Your investment is protected for decades, giving you
                  peace of mind whether you&apos;re on the lake or nearby.
                </p>
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
                Looking for Reliable Roofers in Mooresville?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Lake Norman&apos;s most trusted roofing team.
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
              Mooresville Roofers Serving All Lake Norman Areas
            </h2>
            <p className="text-gray text-lg">
              Our professional roofers serve homeowners and businesses throughout Mooresville and
              the greater Lake Norman region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mooresville Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Mooresville &amp; Lake Norman Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {mooresvilleAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
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
              Certified Mooresville Roofers You Can Trust
            </h2>
            <p className="text-gray text-lg">
              Our certifications from industry-leading manufacturers mean you get premium materials backed by
              extended warranty coverage for your Lake Norman home.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">CertainTeed SELECT ShingleMaster</h3>
              <p className="text-gray text-sm">
                Top-tier certification with access to premium warranties and specialized training.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">GAF Factory-Certified</h3>
              <p className="text-gray text-sm">
                Authorized to offer GAF&apos;s Golden Pledge warranty - the best in the industry.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Owens Corning Preferred</h3>
              <p className="text-gray text-sm">
                Preferred Contractor status with Owens Corning for extended warranty options.
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
              Recent Work by Our Mooresville Roofers
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects throughout the Mooresville and Lake Norman area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed residential roof by Mooresville roofers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation by Best Roofing Now roofers in Mooresville"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed roof project by Mooresville NC roofers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roofing work by roofers in Lake Norman area"
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
        city="Mooresville"
        citySlug="mooresville-nc"
        title="Roofing Services in Mooresville NC"
        subtitle="Looking for a specific roofing service? Our Mooresville roofers offer comprehensive solutions for every roofing need in the Lake Norman area."
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
                <p className="text-gray mb-4">
                  The Lake Norman area has become like a second home to us. When I first started working in
                  Mooresville, I fell in love with the community, the lake, and the people. There&apos;s
                  something special about this area - the way neighbors look out for each other, the pride
                  homeowners take in their properties, and the small-town feel even as the region grows.
                </p>
                <p className="text-gray mb-4">
                  That&apos;s why we joined the Lake Norman Chamber of Commerce and committed to being more
                  than just roofers who show up, do a job, and leave. We want to be the roofing company that
                  Mooresville families trust for generations - the one you recommend to your neighbors and
                  friends without hesitation.
                </p>
                <p className="text-gray">
                  When you hire Best Roofing Now, you&apos;re not just getting roofers - you&apos;re getting a family
                  that cares about Lake Norman as much as you do. We treat every roof like it&apos;s protecting
                  our own family, because in a way, this whole community feels like family to us.
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
                Mooresville Roofers FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about hiring roofers in Mooresville NC and the Lake Norman area.
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

      <GeoProjectGalleryStrip pageType="location" city="Mooresville" slug="roofers-mooresville-nc" />

      {/* Final CTA */}

      <CityGeoSection

        city="Mooresville"

        state="NC"

        citySlug="mooresville-nc"

        service="Roofers"

      />

      <CTASection
        title="Ready to Work with Lake Norman's Top-Rated Roofers?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your needs and budget."
      />
    </>
  );
}
