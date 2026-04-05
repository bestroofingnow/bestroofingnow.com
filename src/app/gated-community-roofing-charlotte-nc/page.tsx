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
  Home,
  FileCheck,
  Lock,
  MapPin,
  ClipboardList,
  Palette,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Gated Community Roofing Charlotte NC',
  description:
    'HOA-compliant roofing for Charlotte\'s gated communities. We handle architectural review approvals, material matching, and community references. The Peninsula, Piper Glen, Quail Hollow specialists. Free estimates.',
  keywords: [
    'gated community roofing charlotte nc',
    'HOA roof replacement charlotte nc',
    'HOA compliant roofing charlotte',
    'gated community roofer charlotte nc',
    'HOA approved roofing contractor charlotte',
    'architectural review roofing charlotte',
    'private community roofing charlotte nc',
    'HOA roofing approval charlotte',
    'gated neighborhood roofer charlotte',
    'charlotte HOA roofing contractor',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gated-community-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Gated Community Roofing Charlotte NC | HOA Compliant | Best Roofing Now',
    description:
      'Charlotte\'s gated community roofing specialists. HOA approval expertise, architectural review compliance, and premium material matching for exclusive neighborhoods.',
    url: `${SITE_CONFIG.url}/gated-community-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Gated community roofing Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: FileCheck,
    title: 'HOA Approval Management',
    description: 'We handle the entire HOA approval process including material submissions, color samples, and architectural review documentation.',
    href: '/services/roof-replacement',
  },
  {
    icon: Palette,
    title: 'Material Matching',
    description: 'Expert color and material matching to ensure your new roof meets community standards and complements neighboring homes.',
    href: '/services/residential-roofing',
  },
  {
    icon: Home,
    title: 'Premium Roof Replacement',
    description: 'Full roof replacements using HOA-approved materials with manufacturer-certified installation techniques.',
    href: '/services/roof-replacement',
  },
  {
    icon: Shield,
    title: 'Storm Damage Restoration',
    description: 'Insurance claim assistance and storm damage repair that restores your roof to community-compliant standards.',
    href: '/services/storm-damage',
  },
  {
    icon: ClipboardList,
    title: 'Roof Inspections',
    description: 'Comprehensive inspections with detailed reports for HOA compliance, real estate transactions, and maintenance planning.',
    href: '/services/roof-inspection',
  },
  {
    icon: Lock,
    title: 'Gate Access Coordination',
    description: 'We coordinate gate access, parking, and crew logistics to minimize disruption to your gated community.',
    href: '/services/residential-roofing',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'HOA Expertise',
    description: 'Extensive experience navigating HOA approval processes in Charlotte\'s most exclusive gated communities.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from homeowners in gated communities across Charlotte.`,
  },
  {
    icon: Shield,
    title: 'Manufacturer Certified',
    description: 'GAF Factory-Certified and CertainTeed ShingleMaster ensuring the highest quality installations.',
  },
  {
    icon: CheckCircle,
    title: 'Community References',
    description: 'We can provide references from homeowners in your specific gated community who have used our services.',
  },
  {
    icon: Users,
    title: 'Professional Crews',
    description: 'Uniformed, background-checked crews who respect community rules, maintain clean job sites, and follow gate protocols.',
  },
  {
    icon: Clock,
    title: 'Efficient Timelines',
    description: 'We complete projects efficiently to minimize disruption to your community and neighbors.',
  },
];

const gatedCommunities = [
  { name: 'The Peninsula', area: 'Cornelius', value: '$1.5M-$8M+' },
  { name: 'Piper Glen', area: 'South Charlotte', value: '$1.2M-$5M+' },
  { name: 'Quail Hollow', area: 'South Charlotte', value: '$1.5M-$8M+' },
  { name: 'Ballantyne Country Club', area: 'Ballantyne', value: '$800K-$3M+' },
  { name: 'Providence Country Club', area: 'South Charlotte', value: '$700K-$2M+' },
  { name: 'Foxcroft', area: 'South Charlotte', value: '$800K-$3M+' },
  { name: 'Carmel Country Club', area: 'South Charlotte', value: '$600K-$2M+' },
  { name: 'Northstone Country Club', area: 'Huntersville', value: '$400K-$900K' },
  { name: 'Skyecroft', area: 'Huntersville', value: '$500K-$1.2M' },
  { name: 'The Point on Norman', area: 'Mooresville', value: '$1M-$5M+' },
  { name: 'Trump National Charlotte', area: 'Mooresville', value: '$1M-$4M+' },
  { name: 'River Run', area: 'Davidson', value: '$600K-$1.5M' },
];

const hoaProcess = [
  {
    step: '1',
    title: 'Initial Assessment',
    description: 'We inspect your roof and review your HOA\'s architectural guidelines to identify approved materials and colors.',
  },
  {
    step: '2',
    title: 'Material Selection',
    description: 'We help you select materials that meet HOA requirements while maximizing value, aesthetics, and performance.',
  },
  {
    step: '3',
    title: 'HOA Submission',
    description: 'We prepare and submit all required documentation including material samples, color selections, and contractor credentials.',
  },
  {
    step: '4',
    title: 'Approved Installation',
    description: 'Once approved, we schedule and complete the installation with full community protocol compliance.',
  },
];

const nearbyAreas = [
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Lake Norman', href: '/roofing-cornelius-nc' },
  { name: 'Huntersville', href: '/roofing-huntersville-nc' },
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Waxhaw', href: '/roofing-waxhaw-nc' },
];

const faqs = [
  {
    question: 'Do you handle the HOA approval process for roof replacements?',
    answer:
      'Yes, we manage the entire HOA approval process from start to finish. This includes reviewing your community\'s architectural guidelines, selecting compliant materials, preparing submission packages with color samples and specifications, and working directly with your HOA\'s architectural review board. Most approvals are obtained within 2-4 weeks.',
  },
  {
    question: 'Which gated communities in Charlotte do you serve?',
    answer:
      'We serve all gated communities in the Charlotte metro area including The Peninsula, Piper Glen, Quail Hollow, Ballantyne Country Club, Providence Country Club, Foxcroft, Carmel Country Club, Northstone, Skyecroft, The Point on Norman, Trump National Charlotte, River Run, and many more. We have completed projects in most major gated communities in the region.',
  },
  {
    question: 'How do you ensure your work meets HOA standards?',
    answer:
      'We begin every project by reviewing your community\'s specific architectural guidelines and approved material lists. We select materials that match or exceed community standards, coordinate colors with neighboring homes, and provide documentation of compliance. Our crews follow all community rules regarding gate access, parking, noise, and cleanup.',
  },
  {
    question: 'Can you match roofing materials to neighboring homes in my community?',
    answer:
      'Absolutely. Material and color matching is one of our specialties for gated community projects. We assess the existing roofing palette in your neighborhood and select materials that complement surrounding homes while meeting HOA requirements. We bring physical samples for comparison before any work begins.',
  },
  {
    question: 'How do your crews handle gate access and community protocols?',
    answer:
      'We coordinate all gate access in advance with your HOA or property management company. Our crews arrive in marked company vehicles, wear professional uniforms, and follow all community rules regarding parking, noise hours, and access routes. We assign a dedicated project manager as the single point of contact for any community concerns.',
  },
  {
    question: 'What if my HOA requires a specific roofing material or brand?',
    answer:
      'We work with all major roofing manufacturers and can source any specific material or brand required by your HOA. As certified installers for GAF, CertainTeed, and other premium brands, we have access to their full product lines including designer collections. If your HOA has a pre-approved material list, we will select from those options.',
  },
  {
    question: 'Do you provide references from homeowners in my community?',
    answer:
      'Yes, we can often provide references from homeowners in your specific gated community or nearby neighborhoods. We have completed numerous projects in Charlotte\'s most exclusive communities and maintain strong relationships with satisfied homeowners who are happy to share their experience.',
  },
  {
    question: 'How long does a roof replacement take in a gated community?',
    answer:
      'Most gated community roof replacements are completed in 2-5 days depending on home size and material type. We schedule work during approved community hours and coordinate with your HOA on any restrictions. Our goal is to complete the project efficiently while minimizing disruption to you and your neighbors.',
  },
];

export default function GatedCommunityRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gated Community Roofing Charlotte NC', url: `${SITE_CONFIG.url}/gated-community-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/gated-community-roofing-charlotte-nc`}
        pageName="Gated Community Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Gated community roofing Charlotte NC - HOA compliant roof replacement"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-semibold">HOA Compliant Roofing Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gated Community Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              HOA-Compliant Roofing for Charlotte&apos;s Exclusive Communities
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in roofing for Charlotte&apos;s gated communities and HOA
              neighborhoods. We handle the entire approval process, from material selection to
              architectural review submission, ensuring your new roof meets every community standard.
            </p>

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
                <FileCheck className="w-5 h-5 text-green-400" />
                HOA Approval Experts
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Expert Roofing for Charlotte&apos;s Gated Communities
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Charlotte&apos;s gated communities represent some of the finest neighborhoods in the
                Southeast, with strict architectural standards that maintain property values and
                community aesthetics. At Best Roofing Now, we understand that roofing in these
                exclusive communities requires more than technical expertise; it demands knowledge of
                HOA processes, material compliance, and a professional approach that respects
                community protocols.
              </p>
              <p>
                From The Peninsula on Lake Norman to Quail Hollow in South Charlotte, we have
                extensive experience working within the architectural guidelines of Charlotte&apos;s
                most prestigious gated neighborhoods. Our team handles every aspect of HOA compliance
                so you can focus on choosing the perfect roof for your home.
              </p>
              <p>
                We maintain strong relationships with HOA boards and property management companies
                across the Charlotte area, which helps expedite approvals and ensures smooth project
                execution from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOA Process Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our HOA Approval Process
            </h2>
            <p className="text-gray text-lg">
              We make the HOA approval process simple and stress-free, handling all documentation
              and communication with your architectural review board.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hoaProcess.map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Gated Community Roofing Services
            </h2>
            <p className="text-gray text-lg">
              Comprehensive roofing services designed specifically for the unique requirements
              of Charlotte&apos;s gated and HOA communities.
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

      {/* Communities We Serve */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Communities We Serve</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Charlotte&apos;s Premier Gated Communities
            </h2>
            <p className="text-gray text-lg">
              We have completed projects in Charlotte&apos;s most exclusive gated neighborhoods
              and understand each community&apos;s unique requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {gatedCommunities.map((community) => (
              <div
                key={community.name}
                className="bg-white rounded-xl p-4 shadow-sm"
              >
                <h3 className="font-bold text-dark">{community.name}</h3>
                <p className="text-sm text-gray">{community.area} &middot; {community.value}</p>
              </div>
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
                Why Gated Community Homeowners Choose Us
              </h2>
              <p className="text-gray text-lg mb-8">
                Homeowners in Charlotte&apos;s gated communities choose Best Roofing Now because we
                understand the unique requirements and expectations of exclusive neighborhood living.
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
                src={IMAGES.hero.hero1}
                alt="HOA-compliant roofing in Charlotte NC gated community - Best Roofing Now"
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
                Need HOA-Compliant Roofing in Your Gated Community?
              </h2>
              <p className="text-white/90">
                Get a free estimate and let us handle the HOA approval process for you.
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

      {/* Nearby Areas */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nearby Areas We Serve
            </h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-3">
              {nearbyAreas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>{area.name}</span>
                </Link>
              ))}
            </div>
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
                Gated Community Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about HOA-compliant roofing in Charlotte&apos;s gated communities.
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
        pageType="other"
        city="Charlotte"
        slug="gated-community-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/gated-community-roofing-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Gated Community Roofing"
      />

      <CTASection
        title="Ready for HOA-Compliant Roofing?"
        subtitle="Get a free estimate from Charlotte's gated community roofing specialists. We'll handle the HOA approval process, select compliant materials, and deliver a roof that enhances your home and community."
      />
    </>
  );
}
