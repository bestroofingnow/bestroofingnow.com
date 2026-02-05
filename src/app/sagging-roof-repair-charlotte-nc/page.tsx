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
  AlertTriangle,
  Home,
  Droplets,
  Hammer,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Sagging Roof Repair Charlotte NC',
  description:
    'Expert sagging roof repair in Charlotte NC. Water damage, structural issues, age-related sag - we fix it all. Licensed structural roofing experts. BBB A+ rated, veteran-owned. Free inspections.',
  keywords: [
    'sagging roof repair Charlotte NC',
    'roof sagging fix Charlotte',
    'structural roof repair Charlotte NC',
    'roof dip repair Charlotte',
    'bowed roof Charlotte NC',
    'roof structural damage Charlotte',
    'fix sagging roof Charlotte',
    'roof deck repair Charlotte NC',
    'rafter repair Charlotte',
    'roof truss repair Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/sagging-roof-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Sagging Roof Repair Charlotte NC | Structural Experts | Best Roofing Now',
    description:
      'Expert sagging roof repair in Charlotte NC. Structural issues, water damage, aging roofs - we diagnose and fix the problem. BBB A+ rated. Free inspections.',
    url: `${SITE_CONFIG.url}/sagging-roof-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero4,
        width: 1200,
        height: 630,
        alt: 'Sagging roof repair service in Charlotte NC - Best Roofing Now structural experts',
      },
    ],
  },
};

// Common causes of sagging roofs
const causes = [
  {
    icon: Droplets,
    title: 'Water Damage',
    description:
      'Prolonged water infiltration weakens roof decking and rafters. Charlotte\'s 43+ inches of annual rainfall makes water damage a leading cause of roof sag.',
  },
  {
    icon: Clock,
    title: 'Age & Deterioration',
    description:
      'Over time, roofing materials break down and structural components weaken. Roofs over 20-25 years old are particularly susceptible to sagging.',
  },
  {
    icon: Home,
    title: 'Inadequate Support',
    description:
      'Original construction with undersized rafters, too-wide rafter spacing, or insufficient bracing can lead to gradual structural failure.',
  },
  {
    icon: AlertTriangle,
    title: 'Excessive Weight',
    description:
      'Multiple roofing layers, heavy materials, snow/ice accumulation, or HVAC equipment can overload the roof structure beyond its capacity.',
  },
];

// Warning signs
const warningSigns = [
  'Visible dip or depression in the roof line',
  'Wavy or uneven appearance from the ground',
  'Interior ceiling cracks or separations',
  'Doors and windows that stick or won\'t close properly',
  'Creaking or popping sounds from the attic',
  'Water stains on ceilings or walls',
  'Daylight visible through the roof boards',
  'Soft or spongy spots when walking on the roof',
];

// Our repair process
const repairProcess = [
  {
    step: '1',
    title: 'Structural Assessment',
    description:
      'Our experts thoroughly inspect the roof from inside and out, examining rafters, trusses, decking, and load distribution.',
  },
  {
    step: '2',
    title: 'Cause Identification',
    description:
      'We identify the root cause - whether water damage, structural inadequacy, or overloading - to ensure our repair addresses the actual problem.',
  },
  {
    step: '3',
    title: 'Repair Plan',
    description:
      'We develop a comprehensive repair plan with transparent pricing, covering structural reinforcement and any necessary roof work.',
  },
  {
    step: '4',
    title: 'Structural Repair',
    description:
      'Our team reinforces or replaces damaged rafters, trusses, and decking. We add proper bracing and support as needed.',
  },
  {
    step: '5',
    title: 'Roof Restoration',
    description:
      'Once the structure is sound, we repair or replace roofing materials and ensure proper waterproofing and ventilation.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: Hammer,
    title: 'Structural Expertise',
    description: 'Experienced in diagnosing and repairing complex structural roof issues.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: 'Prompt Response',
    description: 'We understand sagging roofs are urgent - we respond quickly to prevent further damage.',
  },
];

// FAQs
const faqs = [
  {
    question: 'How serious is a sagging roof?',
    answer:
      'A sagging roof is a serious structural issue that requires immediate attention. It indicates that the roof structure is failing and can no longer adequately support the weight above it. Left unaddressed, a sagging roof can lead to complete roof collapse, extensive water damage, mold growth, and compromised safety for your family. If you notice any sagging, contact a professional immediately.',
  },
  {
    question: 'What causes a roof to sag?',
    answer:
      'The most common causes of roof sagging in Charlotte are: prolonged water damage that weakens rafters and decking, aging materials that deteriorate over time, inadequate structural support from original construction, excessive weight from multiple roofing layers or heavy materials, and termite or pest damage to wooden structural components. Sometimes it\'s a combination of factors.',
  },
  {
    question: 'Can a sagging roof be repaired, or does it need to be replaced?',
    answer:
      'Many sagging roofs can be repaired rather than replaced, depending on the extent of damage. If the sag is localized and caught early, we can often reinforce or sister damaged rafters, replace affected decking, and add proper bracing. However, if the damage is extensive or the structure is severely compromised, a full roof replacement with new structural components may be necessary. We\'ll give you an honest assessment.',
  },
  {
    question: 'How much does sagging roof repair cost in Charlotte?',
    answer:
      'Sagging roof repair costs vary widely based on the cause and extent of damage. Minor structural repairs with localized reinforcement may cost $1,000-$3,000, while major repairs involving rafter replacement, extensive decking, and new roofing can range from $5,000-$15,000+. Complete structural rebuilds can exceed $20,000. We provide detailed, transparent estimates after our inspection.',
  },
  {
    question: 'Will my insurance cover sagging roof repair?',
    answer:
      'Insurance coverage depends on the cause of the sagging. If the sag resulted from a covered peril like a severe storm, fallen tree, or sudden water damage, your policy may cover repairs. However, sagging due to age, neglect, or deferred maintenance is typically not covered. We can help document damage for insurance claims and work with your adjuster.',
  },
  {
    question: 'How long does it take to repair a sagging roof?',
    answer:
      'Repair timelines depend on the scope of work needed. Minor structural reinforcement can be completed in 1-2 days. More extensive repairs involving multiple rafters, significant decking replacement, and new roofing typically take 3-7 days. Complex projects requiring major structural work may take 1-2 weeks. We\'ll provide a timeline with your estimate.',
  },
  {
    question: 'Is it safe to stay in my home with a sagging roof?',
    answer:
      'It depends on the severity of the sag. Minor, localized sagging that\'s been present for some time may not pose immediate danger, but should still be addressed promptly. Significant sagging, especially if it\'s worsening or accompanied by cracking sounds, may indicate imminent structural failure. In severe cases, temporary evacuation may be advisable until repairs are completed.',
  },
  {
    question: 'How can I prevent my roof from sagging?',
    answer:
      'Preventing roof sag involves: maintaining proper attic ventilation to prevent moisture buildup, addressing leaks immediately before water damage occurs, avoiding multiple roofing layers (we recommend tear-off with each replacement), ensuring gutters drain properly away from the home, scheduling regular roof inspections to catch problems early, and never adding heavy equipment without consulting a structural engineer.',
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
];

export default function SaggingRoofRepairCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Sagging Roof Repair Charlotte NC', url: `${SITE_CONFIG.url}/sagging-roof-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero4}
            alt="Sagging roof repair in Charlotte NC - Best Roofing Now structural experts"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-semibold">Structural Roofing Experts | Urgent Repairs</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Sagging Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert structural repairs to restore your roof's integrity and protect your home
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              A sagging roof is a serious structural issue that won't fix itself. Best Roofing Now specializes in
              diagnosing and repairing sagging roofs throughout Charlotte. From water damage to structural deficiencies,
              our experienced team gets to the root cause and delivers lasting solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Inspection
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
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Warning Signs of a Sagging Roof
              </h2>
              <p className="text-gray text-lg mb-6">
                Recognizing the signs of a sagging roof early can prevent catastrophic failure and save you
                thousands in repairs. Watch for these warning signs:
              </p>
              <ul className="space-y-3">
                {warningSigns.map((sign, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-accent/10 border-l-4 border-accent rounded-r-lg">
                <p className="text-dark font-semibold">
                  If you notice any of these signs, don't wait. Sagging roofs can deteriorate rapidly and
                  pose safety risks to your family.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.services.inspection}
                alt="Professional roof inspection for sagging roof in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Common Causes of Sagging Roofs in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Understanding the cause is essential for effective, lasting repairs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {causes.map((cause) => (
              <div key={cause.title} className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <cause.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{cause.title}</h3>
                <p className="text-gray text-sm">{cause.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Sagging Roof Repair Process
            </h2>
            <p className="text-gray text-lg">
              Comprehensive structural repairs that address the root cause, not just the symptoms.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {repairProcess.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-light p-6 rounded-xl h-full">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-dark mb-2">{step.title}</h3>
                  <p className="text-gray text-sm">{step.description}</p>
                </div>
                {index < repairProcess.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary z-10" />
                )}
              </div>
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
                Why Charlotte Homeowners Trust Us with Structural Repairs
              </h2>
              <p className="text-gray text-lg mb-8">
                Sagging roof repair requires experience and expertise. Trust Charlotte's most reliable
                roofing company to restore your roof's structural integrity.
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
                src={IMAGES.realProjects.project1}
                alt="Best Roofing Now - Experienced roofing team for structural repairs in Charlotte"
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
                Noticed a Sag in Your Roof? Act Now!
              </h2>
              <p className="text-white/90">
                Don't wait until it gets worse. Get a free structural inspection today.
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
                Schedule Free Inspection
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
              Structural Roof Repairs Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We repair sagging roofs for homeowners across Charlotte and surrounding areas.
            </p>
          </div>

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

      {/* Types of Structural Repairs Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Structural Repairs We Perform
              </h2>
              <p className="text-gray text-lg">
                Our experienced team handles all types of structural roof repairs.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Rafter Reinforcement</h3>
                    <p className="text-gray text-sm">
                      Sister new rafters to weakened ones for added support and load distribution.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Truss Repair</h3>
                    <p className="text-gray text-sm">
                      Repair or replace damaged truss components to restore structural integrity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Decking Replacement</h3>
                    <p className="text-gray text-sm">
                      Remove and replace water-damaged or rotted roof decking with new plywood or OSB.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Bracing Installation</h3>
                    <p className="text-gray text-sm">
                      Add collar ties, purlins, and bracing to strengthen the overall roof structure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Ridge Board Repair</h3>
                    <p className="text-gray text-sm">
                      Repair or replace compromised ridge boards that affect the entire roof line.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Load Redistribution</h3>
                    <p className="text-gray text-sm">
                      Add support beams or posts to redistribute weight in overloaded structures.
                    </p>
                  </div>
                </div>
              </div>
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
                Sagging Roof Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about sagging roof repair in Charlotte.
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
        slug="sagging-roof-repair-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/sagging-roof-repair-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Sagging Roof Repair"

      />

      <CTASection
        title="Get Expert Sagging Roof Repair Today"
        subtitle="Don't let a sagging roof put your home and family at risk. Contact Best Roofing Now for a free structural inspection and honest assessment of your repair options."
      />
    </>
  );
}
