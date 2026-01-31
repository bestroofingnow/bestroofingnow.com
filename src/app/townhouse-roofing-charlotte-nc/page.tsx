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
  Building2,
  FileCheck,
  Handshake,
  Ruler,
  PaintBucket,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Townhouse Roofing Charlotte NC | HOA Compliant | Best Roofing Now',
  description:
    'Expert townhouse roofing services in Charlotte NC. HOA compliant installations, shared roof specialists, and townhome roof repair. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'townhouse roofing Charlotte NC',
    'townhome roof repair Charlotte',
    'HOA roofing Charlotte NC',
    'townhouse roof replacement Charlotte',
    'shared roof repair Charlotte',
    'townhome roofing contractor Charlotte',
    'HOA approved roofer Charlotte NC',
    'townhouse roofers near me',
    'townhome roofing company Charlotte',
    'attached home roofing Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/townhouse-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Townhouse Roofing Charlotte NC | HOA Compliant | Best Roofing Now',
    description:
      'BBB A+ rated townhouse roofing experts in Charlotte NC. HOA compliant installations, shared roof specialists, and complete townhome roofing services. Free estimates.',
    url: `${SITE_CONFIG.url}/townhouse-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional townhouse roofing services in Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Townhouse-specific services
const townhouseServices = [
  {
    icon: Home,
    title: 'Townhome Roof Replacement',
    description: 'Complete roof replacement for townhouses with attention to shared walls and coordinated scheduling with neighbors.',
  },
  {
    icon: Building2,
    title: 'Shared Roof Systems',
    description: 'Expert handling of connected roofing systems shared between multiple townhouse units.',
  },
  {
    icon: FileCheck,
    title: 'HOA Compliance',
    description: 'We work directly with your HOA to ensure all materials and colors meet community guidelines.',
  },
  {
    icon: Handshake,
    title: 'Neighbor Coordination',
    description: 'We coordinate with adjacent unit owners when work affects shared roof sections.',
  },
  {
    icon: Ruler,
    title: 'Precise Matching',
    description: 'Expert color and style matching to maintain visual continuity with neighboring units.',
  },
  {
    icon: PaintBucket,
    title: 'HOA Color Matching',
    description: 'Access to all major HOA-approved shingle colors and styles in Charlotte communities.',
  },
];

// Why choose us for townhouses
const whyChooseUs = [
  {
    icon: Award,
    title: 'HOA Experience',
    description: "We've worked with 100+ HOAs across Charlotte and understand their requirements.",
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte townhouse owners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Military values of integrity and attention to detail in every townhouse project.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with liability coverage protecting your HOA and property.',
  },
  {
    icon: Users,
    title: 'Neighbor Friendly',
    description: 'We minimize disruption and maintain clean, safe job sites in townhouse communities.',
  },
  {
    icon: Clock,
    title: 'Efficient Scheduling',
    description: 'Coordinated timelines that respect HOA rules and neighbor schedules.',
  },
];

// Charlotte townhouse communities served
const townhouseCommunities = [
  'Ballantyne',
  'SouthPark',
  'Dilworth',
  'Plaza Midwood',
  'NoDa',
  'South End',
  'Myers Park',
  'Uptown',
  'University City',
  'Huntersville',
  'Cornelius',
  'Davidson',
  'Matthews',
  'Mint Hill',
  'Pineville',
  'Fort Mill',
];

// FAQs about townhouse roofing
const faqs = [
  {
    question: 'Do I need HOA approval before replacing my townhouse roof?',
    answer:
      "Most Charlotte HOAs require approval before any exterior modifications including roofing. We handle the approval process for you by submitting proper documentation, material specifications, and color samples to your HOA's architectural review committee. We're experienced with HOA requirements and can help expedite the approval process.",
  },
  {
    question: 'Who is responsible for a shared townhouse roof?',
    answer:
      "Responsibility for shared roofs varies by HOA. In some communities, the HOA handles all roof maintenance and replacement. In others, individual owners are responsible for their section. We can help you review your HOA documents to determine responsibility and coordinate with neighbors or the association as needed.",
  },
  {
    question: 'Can you match my roof to neighboring townhouse units?',
    answer:
      "Absolutely! Maintaining visual continuity is essential in townhouse communities. We carefully match shingle colors, styles, and installation patterns to blend seamlessly with adjacent units. We work with all major manufacturers' HOA-approved color palettes and can provide samples for comparison before work begins.",
  },
  {
    question: 'How do you handle roofing where townhouses are attached?',
    answer:
      "Shared walls and connected roof sections require special attention. We carefully flash and seal transition points between units, coordinate timing with neighbors when work affects shared areas, and ensure proper drainage across unit boundaries. Our experienced crews understand the unique challenges of attached housing.",
  },
  {
    question: 'How long does townhouse roof replacement take?',
    answer:
      "Most individual townhouse roofs can be completed in 1-2 days. However, if we're coordinating with neighbors on shared sections, timeline may extend slightly. We work efficiently to minimize disruption to your community and always clean up thoroughly at the end of each day.",
  },
  {
    question: 'Do you work directly with HOA management companies?',
    answer:
      "Yes, we regularly work with HOA management companies throughout Charlotte including FirstService Residential, CAMS, and Association Management Group. We can submit required documentation, attend meetings if needed, and ensure all work meets community standards.",
  },
  {
    question: 'What roofing materials do HOAs typically approve?',
    answer:
      "Most Charlotte HOAs approve architectural shingles from major manufacturers like CertainTeed, GAF, and Owens Corning in specific color palettes. Some communities require specific products or colors. As certified installers for all major brands, we can provide any HOA-approved materials and offer extended warranty options.",
  },
  {
    question: 'How much does townhouse roof replacement cost in Charlotte?',
    answer:
      "Townhouse roof replacement in Charlotte typically ranges from $6,000-$15,000 depending on size, pitch, and material choice. Townhouses generally cost less than single-family homes due to smaller roof areas. We provide free, detailed estimates and can work within HOA budget requirements for community-wide projects.",
  },
];

export default function TownhouseRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Townhouse Roofing Charlotte NC', url: `${SITE_CONFIG.url}/townhouse-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Professional townhouse roofing services in Charlotte NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">HOA Compliant | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Townhouse Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              HOA-compliant roofing specialists for Charlotte townhouse communities
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now understands the unique requirements of townhouse roofing. From HOA approvals
              to neighbor coordination and precise color matching, we handle every detail to protect your
              investment and maintain your community's appearance.
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
                100+ HOAs Served
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Townhouse-Specific Intro */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Charlotte's Trusted Townhouse Roofing Experts
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Townhouse roofing in Charlotte comes with unique challenges that require specialized expertise.
                Unlike single-family homes, townhouses share walls and often roof sections with neighbors.
                They're governed by HOA regulations that dictate everything from approved materials to
                acceptable shingle colors.
              </p>
              <p>
                At Best Roofing Now, we've successfully completed roofing projects in over 100 Charlotte-area
                HOA communities. We understand that your roof must not only protect your home but also comply
                with community standards and complement neighboring units.
              </p>
              <p>
                Whether you need a full roof replacement, repairs after storm damage, or are coordinating a
                community-wide roofing project with your HOA, our team handles all the complexities so you
                can focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Townhouse Roofing Services
            </h2>
            <p className="text-gray text-lg">
              Specialized roofing solutions designed for Charlotte's townhouse communities and HOA requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {townhouseServices.map((service) => (
              <div
                key={service.title}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-gray text-sm">{service.description}</p>
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
                Why Townhouse Owners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When it comes to townhouse roofing, experience with HOAs and attached housing makes all
                the difference. We've earned the trust of townhouse communities throughout Charlotte.
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
                alt="Townhouse roofing project completed by Best Roofing Now in Charlotte NC"
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
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOA Process Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our HOA Approval Process
            </h2>
            <p className="text-gray text-lg">
              We make HOA compliance simple with our proven approval process.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-dark mb-2">Free Inspection</h3>
              <p className="text-gray text-sm">We assess your roof and review HOA requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-dark mb-2">Document Prep</h3>
              <p className="text-gray text-sm">We prepare all required HOA submission documents</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-dark mb-2">HOA Approval</h3>
              <p className="text-gray text-sm">We submit and follow up on your approval</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold text-dark mb-2">Installation</h3>
              <p className="text-gray text-sm">HOA-compliant installation with full cleanup</p>
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
                Need Townhouse Roofing in Charlotte?
              </h2>
              <p className="text-white/90">
                Get a free estimate with HOA-compliant material recommendations.
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

      {/* Communities Served Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Townhouse Communities We Serve
            </h2>
            <p className="text-gray text-lg">
              We provide townhouse roofing services throughout the Charlotte metro area.
            </p>
          </div>
          <div className="bg-light rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {townhouseCommunities.map((community) => (
                <span
                  key={community}
                  className="inline-block bg-white px-4 py-2 rounded-full text-sm text-gray border border-gray-200"
                >
                  {community}
                </span>
              ))}
            </div>
            <p className="text-center text-gray mt-6 text-sm">
              Don't see your community? We serve all townhouse neighborhoods in the Charlotte area.
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Townhouse Roofing Projects
            </h2>
            <p className="text-gray text-lg">
              See examples of our townhouse roofing work in Charlotte communities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Townhouse roof replacement in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="HOA-compliant shingle installation on Charlotte townhouse"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of townhouse roofing project in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Completed townhouse roof in Charlotte community"
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
                Townhouse Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about townhouse roofing in Charlotte.
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

      {/* Final CTA */}
      <CTASection
        title="Ready for HOA-Compliant Townhouse Roofing?"
        subtitle="Get a free estimate from Charlotte's trusted townhouse roofing experts. We handle HOA approvals, neighbor coordination, and perfect color matching."
      />
    </>
  );
}
