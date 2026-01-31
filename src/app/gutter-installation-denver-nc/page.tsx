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
  Droplets,
  MapPin,
  Paintbrush,
  Ruler,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import YouTubeShort from '@/components/sections/YouTubeShort';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Gutter Installation Denver NC | Seamless Gutters | Best Roofing Now',
  description:
    'Professional gutter installation in Denver NC. Seamless aluminum gutters, gutter guards, and repairs for Lake Norman homes. BBB A+ rated. Free estimates!',
  keywords: [
    'gutter installation Denver NC',
    'gutters Denver NC',
    'seamless gutters Denver',
    'gutter company Denver NC',
    'gutter repair Denver NC',
    'gutter guards Denver',
    'aluminum gutters Denver NC',
    'gutter replacement Denver',
    'Lake Norman western shore gutters',
    'Denver NC gutter contractor',
    'downspout installation Denver NC',
    'gutter cleaning Denver NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-installation-denver-nc`,
  },
  openGraph: {
    title: 'Gutter Installation Denver NC | Seamless Gutters | Best Roofing Now',
    description:
      'BBB A+ rated gutter installation specialists serving Denver NC and Lake Norman western shore. Custom seamless gutters, gutter guards, and repair services. Free estimates.',
    url: `${SITE_CONFIG.url}/gutter-installation-denver-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.gutters,
        width: 1200,
        height: 630,
        alt: 'Gutter installation Denver NC - Best Roofing Now seamless gutter services',
      },
    ],
  },
};

// Gutter services offered
const services = [
  {
    icon: Droplets,
    title: 'Seamless Gutter Installation',
    description: 'Custom-fabricated seamless aluminum gutters made on-site for lakefront and hillside Denver homes.',
    href: '/services/gutter-installation',
  },
  {
    icon: Shield,
    title: 'Gutter Guard Installation',
    description: 'Heavy-duty gutter protection to handle leaf and pine needle debris near Lake Norman State Park.',
    href: '/services/gutter-guards',
  },
  {
    icon: Wrench,
    title: 'Gutter Repair & Maintenance',
    description: 'Fast repairs for storm-damaged, sagging, or leaking gutters on Denver NC properties.',
    href: '/services/gutter-repair',
  },
  {
    icon: Ruler,
    title: 'Downspout Installation',
    description: 'Oversized downspouts and extensions to manage heavy runoff on sloped lakefront lots.',
    href: '/services/gutter-installation',
  },
  {
    icon: Paintbrush,
    title: 'Custom Copper Gutters',
    description: 'Premium copper gutter systems for upscale Denver communities like Trilogy and Pinnacle Shores.',
    href: '/services/gutter-installation',
  },
  {
    icon: Home,
    title: 'Gutter Cleaning',
    description: 'Professional debris removal to keep gutters flowing properly through every season.',
    href: '/services/gutter-cleaning',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Lake Norman western shore homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'On-Site Fabrication',
    description: 'Seamless gutters custom-made at your Denver property with our mobile gutter machine.',
  },
  {
    icon: Users,
    title: 'Lakefront Specialists',
    description: 'Experienced with the unique drainage needs of Lake Norman waterfront and hillside homes.',
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Most Denver gutter installations and repairs completed in a single day.',
  },
];

// Denver neighborhoods and areas
const denverAreas = [
  'Trilogy at Lake Norman',
  'Sailview',
  'Westport',
  'Beatty\'s Ford',
  'East Lincoln',
  'Pinnacle Shores',
  'Magnolia Shores',
  'Island Point',
  'Coves of Lake Norman',
  'Lake Norman State Park Area',
  'Downtown Denver',
  'Highway 16 Corridor',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Mooresville', href: '/gutter-installation-mooresville-nc' },
  { name: 'Cornelius', href: '/gutter-installation-cornelius-nc' },
  { name: 'Huntersville', href: '/gutter-installation-huntersville-nc' },
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Charlotte', href: '/gutter-installation-charlotte-nc' },
  { name: 'Lake Norman', href: '/locations/lake-norman' },
];

// Gutter color options
const gutterColors = [
  'White',
  'Almond',
  'Clay',
  'Cream',
  'Pearl Gray',
  'Musket Brown',
  'Royal Brown',
  'Black',
  'Bronze',
  'Forest Green',
  'Colonial Gray',
  'Terratone',
];

// FAQs about gutter installation in Denver NC
const faqs = [
  {
    question: 'Why do Denver NC lakefront homes need upgraded gutter systems?',
    answer:
      'Denver sits on the western shore of Lake Norman, where properties face unique drainage challenges. Lakefront lots often slope toward the water, and heavy rainfall can cause erosion if not properly managed. Our oversized 6-inch seamless gutters with 3x4 downspouts handle the high-volume runoff common during Lake Norman thunderstorms, protecting both your foundation and the shoreline.',
  },
  {
    question: 'How much does gutter installation cost in Denver NC?',
    answer:
      'Gutter installation in Denver NC typically ranges from $4-12 per linear foot depending on material, size, and roof complexity. Most Denver homes require 150-200 linear feet of gutters. Lakefront properties in communities like Trilogy or Sailview may need larger 6-inch systems which cost more but provide essential capacity. We offer free on-site estimates with transparent pricing.',
  },
  {
    question: 'Do I need gutter guards in Denver NC?',
    answer:
      'Gutter guards are highly recommended for Denver homes, especially those near Lake Norman State Park or in wooded areas along Beatty\'s Ford Road. The heavy pine, oak, and hardwood canopy drops significant debris year-round. Without guards, gutters can clog quickly, causing water to overflow and damage fascia boards, foundations, and landscaping.',
  },
  {
    question: 'What gutter size do you recommend for Denver NC homes?',
    answer:
      'We recommend 5-inch seamless gutters for standard Denver homes and 6-inch gutters for homes with steep roof pitches, large roof areas, or lakefront exposure on the western shore. The 6-inch option handles 40% more water volume, which is critical during the intense summer thunderstorms that roll across Lake Norman.',
  },
  {
    question: 'How long does gutter installation take in Denver NC?',
    answer:
      'Most residential gutter installations in Denver are completed in one day. We bring our mobile fabrication equipment directly to your property to custom-cut each gutter run on-site. Larger lakefront homes in communities like Pinnacle Shores or Island Point may require a second day if the roofline is particularly complex.',
  },
  {
    question: 'Do you handle Lincoln County gutter permits for Denver NC?',
    answer:
      'While most standard gutter installations in Denver NC do not require a Lincoln County building permit, certain projects involving drainage modifications, grading changes near the shoreline, or work in flood zones may need approval. We handle all necessary permitting and ensure your installation complies with Lincoln County building codes.',
  },
  {
    question: 'What colors are available for seamless gutters in Denver?',
    answer:
      'We offer over 20 gutter colors to complement your Denver home\'s exterior. Popular choices in lakefront communities include white, bronze, musket brown, and clay. Our seamless aluminum gutters feature a baked enamel finish that resists fading, chipping, and peeling even in direct western shore sun exposure.',
  },
  {
    question: 'Can you replace gutters on older homes in Denver NC?',
    answer:
      'Absolutely. Many homes in established Denver neighborhoods along Beatty\'s Ford Road and Highway 16 have aging sectional gutters that leak at every seam. We remove old gutters, inspect and repair fascia boards as needed, then install new seamless gutters that provide decades of leak-free performance. We also handle proper disposal of old materials.',
  },
];

export default function GutterInstallationDenverNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gutter Installation Denver NC', url: `${SITE_CONFIG.url}/gutter-installation-denver-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/gutter-installation-denver-nc`}
        pageName="Gutter Installation Denver NC"
        city="Denver"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does gutter installation cost in Denver NC?',
            answer: 'Gutter installation in Denver NC costs $4-$12 per linear foot for seamless aluminum gutters, averaging $1,200-$3,000 for Lake Norman western shore homes. Best Roofing Now serves Denver with free estimates and quality warranties.',
            speakableAnswer: 'Gutter installation in Denver NC costs $4-12 per foot. Best Roofing Now offers free estimates. Call 704-605-6047.',
          },
          {
            question: 'Who installs gutters in Denver NC near Lake Norman?',
            answer: 'Best Roofing Now is the top-rated gutter installer serving Denver NC and the Lake Norman western shore. We install seamless aluminum gutters fabricated on-site, gutter guards, and copper gutters for communities like Trilogy, Sailview, and Westport.',
            speakableAnswer: 'Best Roofing Now installs gutters in Denver NC and Lake Norman western shore with 5-star ratings. Call 704-605-6047.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.gutters}
            alt="Gutter installation Denver NC - Best Roofing Now seamless gutter experts on Lake Norman western shore"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Droplets className="w-4 h-4" />
              <span className="text-sm font-semibold">Lake Norman Western Shore Gutter Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Installation <br className="hidden md:block" />
              <span className="text-accent-light">Denver NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Custom seamless gutters for Lake Norman western shore homes - fabricated on-site
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Denver NC homes face unique drainage demands with lakefront slopes, heavy tree canopy near
              Lake Norman State Park, and intense summer storms crossing the western shore. Best Roofing Now
              installs custom seamless gutter systems designed to handle it all, protecting your foundation,
              landscaping, and shoreline.
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

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Gutter Services in Denver NC
            </h2>
            <p className="text-gray text-lg">
              From seamless gutter installation to gutter guards and copper upgrades, we provide complete
              gutter solutions for Denver and the Lake Norman western shore.
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
                Why Denver NC Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Denver&apos;s western shore location on Lake Norman means your gutters work harder than most.
                Between lakefront runoff, dense tree coverage near the state park, and storms rolling in from
                the west, you need a gutter system installed by specialists who understand Lincoln County conditions.
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
                alt="Professional gutter installation completed in Denver NC near Lake Norman"
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

      {/* Gutter Colors Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Gutter Colors to Match Your Denver Home
            </h2>
            <p className="text-gray text-lg">
              Choose from a wide selection of colors to complement your Lake Norman western shore home&apos;s exterior.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {gutterColors.map((color) => (
              <span
                key={color}
                className="inline-block bg-light px-4 py-2 rounded-full text-sm text-dark font-medium border border-gray-200"
              >
                {color}
              </span>
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
                Ready for New Gutters in Denver NC?
              </h2>
              <p className="text-white/90">
                Get a free estimate for seamless gutter installation, repairs, or gutter guards for your Lake Norman home.
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
              Serving Denver NC & Lake Norman Western Shore
            </h2>
            <p className="text-gray text-lg">
              Our gutter installation team serves homeowners throughout Denver, Lincoln County, and the greater Lake Norman region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Denver Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Denver Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {denverAreas.map((area) => (
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
            <div className="bg-white rounded-xl p-6 shadow-md">
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

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Benefits of Seamless Gutters for Denver Lakefront Homes
            </h2>
            <p className="text-gray text-lg">
              Why Denver homeowners on the western shore are upgrading to seamless gutter systems.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">No Leak Points</h3>
              <p className="text-gray text-sm">
                Seamless construction eliminates joints along the gutter length - critical for managing heavy Lake Norman rainfall without dripping onto lakefront decks and walkways.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Custom Fit for Every Home</h3>
              <p className="text-gray text-sm">
                Fabricated on-site at your Denver property to match exact measurements, ensuring a clean look whether your home is in Trilogy or on Beatty&apos;s Ford Road.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Reduced Maintenance</h3>
              <p className="text-gray text-sm">
                Fewer seams means less debris accumulation, especially important with the pine needles and oak leaves dropping near Lake Norman State Park year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Work in Denver NC
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of gutter installations completed for Denver and Lake Norman western shore homeowners.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Seamless gutter installation completed in Denver NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Gutter and roof installation in Denver NC Lake Norman area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed gutter installation in Denver NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional gutter installation project near Lake Norman State Park"
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
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Gutter Installation FAQs - Denver NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about gutter installation in Denver NC and the Lake Norman western shore.
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

      {/* YouTube Short */}
      <YouTubeShort
        videoId="CXaG6atl-nE"
        title="The $10,000 Gutter Mistake"
        heading="Watch: The $10,000 Gutter Mistake"
        description="See why proper gutter installation is critical to protecting your Denver NC home's foundation."
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for Seamless Gutters in Denver NC?"
        subtitle="Get a free, no-obligation estimate for custom seamless gutters on the Lake Norman western shore. We'll measure your home, recommend the right size for lakefront drainage, and provide transparent pricing."
      />
    </>
  );
}
