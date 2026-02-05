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
  Building,
  FileCheck,
  Handshake,
  Layers,
  Droplets,
  ClipboardCheck,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Condo Roofing Charlotte NC | Association Approved | Best Roofing Now',
  description:
    'Expert condo roofing services in Charlotte NC. Association approved installations, flat and low-slope roof specialists, condominium roof repair. BBB A+ rated. Free estimates.',
  keywords: [
    'condo roofing Charlotte NC',
    'condominium roof repair Charlotte',
    'condo association roofing Charlotte',
    'flat roof condo Charlotte NC',
    'low slope roofing Charlotte',
    'condo roof replacement Charlotte',
    'condominium roofing contractor Charlotte',
    'condo HOA roofer Charlotte NC',
    'condo complex roofing Charlotte',
    'association approved roofing Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/condo-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Condo Roofing Charlotte NC | Association Approved | Best Roofing Now',
    description:
      'BBB A+ rated condo roofing experts in Charlotte NC. Association approved, flat and low-slope specialists, complete condominium roofing services. Free estimates.',
    url: `${SITE_CONFIG.url}/condo-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Professional condo roofing services in Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Condo-specific services
const condoServices = [
  {
    icon: Building,
    title: 'Condo Roof Replacement',
    description: 'Complete roof replacement for condominiums with minimal disruption to residents and common areas.',
  },
  {
    icon: Layers,
    title: 'Flat & Low-Slope Roofing',
    description: 'Specialized TPO, EPDM, and modified bitumen systems for condo buildings with flat or low-slope roofs.',
  },
  {
    icon: FileCheck,
    title: 'Association Compliance',
    description: 'We work directly with condo associations to meet all requirements and approval processes.',
  },
  {
    icon: Droplets,
    title: 'Leak Detection & Repair',
    description: 'Advanced leak detection for multi-unit buildings to identify and fix problems quickly.',
  },
  {
    icon: Handshake,
    title: 'Board Presentations',
    description: 'We present to condo boards with detailed proposals, timelines, and budget options.',
  },
  {
    icon: ClipboardCheck,
    title: 'Reserve Study Support',
    description: 'Detailed roof assessments to help associations plan for future capital expenditures.',
  },
];

// Why choose us for condos
const whyChooseUs = [
  {
    icon: Award,
    title: 'Condo Experience',
    description: "We've completed roofing projects for 50+ condo associations across Charlotte.",
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Charlotte property owners.`,
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Comprehensive liability and workers comp coverage for condo association peace of mind.',
  },
  {
    icon: CheckCircle,
    title: 'NC Licensed',
    description: 'Fully licensed commercial roofing contractor meeting all NC requirements.',
  },
  {
    icon: Users,
    title: 'Resident Friendly',
    description: 'We coordinate with residents and minimize disruption during roofing projects.',
  },
  {
    icon: Clock,
    title: 'Project Management',
    description: 'Dedicated project managers for seamless communication with boards and managers.',
  },
];

// Charlotte condo communities served
const condoCommunities = [
  'Uptown Charlotte',
  'South End',
  'Dilworth',
  'Elizabeth',
  'NoDa',
  'Plaza Midwood',
  'SouthPark',
  'Ballantyne',
  'Myers Park',
  'Fourth Ward',
  'Third Ward',
  'Midtown',
  'University City',
  'Lake Norman',
  'Huntersville',
  'Matthews',
];

// FAQs about condo roofing
const faqs = [
  {
    question: 'Who is responsible for condo roof repairs - the owner or the association?',
    answer:
      "In most Charlotte condominiums, the association is responsible for the roof as it's considered a common element. However, this varies by condo documents. We can work with your association's property manager or board to coordinate the project, handle insurance claims, and ensure all work meets association requirements.",
  },
  {
    question: 'What type of roofing is best for condo buildings?',
    answer:
      "Many Charlotte condo buildings have flat or low-slope roofs that require specialized systems. We commonly install TPO (thermoplastic polyolefin), EPDM rubber roofing, and modified bitumen. For pitched roofs, we use architectural shingles that meet HOA specifications. We'll recommend the best system based on your building's design and budget.",
  },
  {
    question: 'How do you minimize disruption to condo residents during roofing?',
    answer:
      "We understand condo residents need to continue their daily lives during roofing projects. We provide advance notice to all units, coordinate parking restrictions, maintain clear access to entrances, and clean up daily. For larger projects, we can work in phases to minimize noise and debris in occupied areas.",
  },
  {
    question: 'Can you present to our condo board?',
    answer:
      "Absolutely. We regularly present to condo association boards and can attend meetings to explain our proposal, answer questions, and discuss timeline and budget options. We provide professional presentations with material samples, warranty information, and detailed cost breakdowns to help boards make informed decisions.",
  },
  {
    question: 'How much does condo roof replacement cost?',
    answer:
      "Condo roofing costs vary significantly based on building size, roof type, accessibility, and material choice. Flat roof systems typically range from $4-$12 per square foot. We provide detailed proposals with multiple options and can work with associations to phase projects over multiple budget years if needed.",
  },
  {
    question: 'Do you handle insurance claims for condo roof damage?',
    answer:
      "Yes, we have extensive experience with commercial property insurance claims. We document all damage thoroughly, prepare detailed scope reports, meet with insurance adjusters, and advocate for fair settlements. Many condo associations have found our insurance expertise invaluable after storm events.",
  },
  {
    question: 'What warranties do you offer for condo roofing?',
    answer:
      "We offer comprehensive warranty packages for condo roofing. Flat roof systems typically include manufacturer warranties of 15-30 years plus our workmanship warranty. As certified installers for major manufacturers, we can offer extended warranty options. All warranty terms are clearly documented in our proposals.",
  },
  {
    question: 'Can you provide roof assessments for our reserve study?',
    answer:
      "Yes, we provide detailed roof condition assessments to help condo associations plan for future capital expenditures. Our reports include current condition, expected remaining lifespan, estimated replacement costs, and recommended maintenance to maximize roof life. This information is essential for accurate reserve fund planning.",
  },
];

export default function CondoRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Condo Roofing Charlotte NC', url: `${SITE_CONFIG.url}/condo-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Professional condo roofing services in Charlotte NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Association Approved | BBB A+ Rated</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Condo Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Association-approved roofing for Charlotte condominium communities
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in condominium roofing projects. From flat roof systems to
              pitched shingle roofs, we work closely with condo associations, property managers, and
              boards to deliver quality roofing with minimal resident disruption.
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
                50+ Condos Served
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Licensed & Insured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Condo-Specific Intro */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Charlotte's Condominium Roofing Specialists
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Condominium roofing requires a different approach than single-family homes. Condo associations
                must balance the needs of multiple owners, navigate complex approval processes, and manage
                significant capital expenditures while minimizing disruption to residents.
              </p>
              <p>
                Best Roofing Now has completed roofing projects for over 50 condominium associations throughout
                Charlotte. We understand the unique dynamics of condo governance and bring the professionalism
                and expertise that boards and property managers expect.
              </p>
              <p>
                Whether your condo has a flat commercial roof requiring TPO or EPDM, or a pitched roof with
                architectural shingles, we have the experience and certifications to deliver a quality project
                that protects your building for decades.
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
              Condo Roofing Services
            </h2>
            <p className="text-gray text-lg">
              Comprehensive roofing solutions for Charlotte condominium associations and property managers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {condoServices.map((service) => (
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

      {/* Flat Roof Systems Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={IMAGES.commercial.flatRoof}
                alt="Flat roof installation on Charlotte condo building - Best Roofing Now"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Flat & Low-Slope Roofing Experts
              </h2>
              <p className="text-gray text-lg mb-6">
                Many Charlotte condos feature flat or low-slope roofs that require specialized membrane
                systems. We're experts in all major flat roofing technologies.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">TPO Roofing</h3>
                    <p className="text-gray text-sm">Energy-efficient white membrane, excellent for Charlotte's hot summers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">EPDM Rubber Roofing</h3>
                    <p className="text-gray text-sm">Durable, time-tested rubber membrane with 30+ year lifespan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Modified Bitumen</h3>
                    <p className="text-gray text-sm">Multi-layer protection ideal for complex roof areas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Built-Up Roofing (BUR)</h3>
                    <p className="text-gray text-sm">Traditional multi-ply systems for maximum durability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Condo Associations Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Condo boards need a roofing contractor they can trust with significant capital expenditures.
                Our professional approach and transparent communication make us the preferred choice.
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
                src={IMAGES.realProjects.drone2}
                alt="Condo roofing project completed by Best Roofing Now in Charlotte NC"
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

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Need Condo Roofing in Charlotte?
              </h2>
              <p className="text-white/90">
                Schedule a free roof assessment for your condominium building.
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
                Schedule Free Assessment
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

      {/* Association Process Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Condo Association Process
            </h2>
            <p className="text-gray text-lg">
              We make condo roofing projects smooth and stress-free for boards and property managers.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <h3 className="font-bold text-dark mb-2 text-sm">Assessment</h3>
              <p className="text-gray text-xs">Free comprehensive roof evaluation</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <h3 className="font-bold text-dark mb-2 text-sm">Proposal</h3>
              <p className="text-gray text-xs">Detailed scope, timeline & budget options</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <h3 className="font-bold text-dark mb-2 text-sm">Board Meeting</h3>
              <p className="text-gray text-xs">Present to board, answer questions</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                4
              </div>
              <h3 className="font-bold text-dark mb-2 text-sm">Installation</h3>
              <p className="text-gray text-xs">Professional work, daily cleanup</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                5
              </div>
              <h3 className="font-bold text-dark mb-2 text-sm">Warranty</h3>
              <p className="text-gray text-xs">Comprehensive coverage & support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Served Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Condo Communities We Serve
            </h2>
            <p className="text-gray text-lg">
              We provide condominium roofing services throughout the Charlotte metro area.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {condoCommunities.map((community) => (
                <span
                  key={community}
                  className="inline-block bg-light px-4 py-2 rounded-full text-sm text-gray border border-gray-200"
                >
                  {community}
                </span>
              ))}
            </div>
            <p className="text-center text-gray mt-6 text-sm">
              Don't see your community? We serve all condominium associations in the Charlotte area.
            </p>
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
                Condo Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about condominium roofing in Charlotte.
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
        slug="condo-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/condo-roofing-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for Professional Condo Roofing?"
        subtitle="Get a free assessment from Charlotte's trusted condominium roofing experts. We work with boards, property managers, and associations to deliver quality results."
      />
    </>
  );
}
