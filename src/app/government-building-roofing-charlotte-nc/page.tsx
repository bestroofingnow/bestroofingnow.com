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
  Building2,
  MapPin,
  Wrench,
  Factory,
  DollarSign,
  Ruler,
  Zap,
  Thermometer,
  Layers,
  Calculator,
  Landmark,
  FileText,
  Scale,
  BookOpen,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import EstimateButton from '@/components/estimate/EstimateButton';
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

export const metadata: Metadata = {
  title: 'Government Building Roofing Charlotte NC | Municipal & Federal Facilities | Best Roofing Now',
  description:
    'Expert government building roofing contractors in Charlotte NC serving Mecklenburg County facilities, City of Charlotte buildings, federal complexes & public works. Procurement compliant. Licensed & insured. Free estimates.',
  keywords: [
    'government building roofing charlotte nc',
    'municipal roofing charlotte nc',
    'city building roofing charlotte',
    'federal building roofing charlotte nc',
    'public works roofing charlotte',
    'government roof repair charlotte nc',
    'courthouse roofing charlotte',
    'fire station roofing charlotte nc',
    'government roofing contractors charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/government-building-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Government Building Roofing Charlotte NC | Municipal & Federal Facilities | Best Roofing Now',
    description:
      'Expert government building roofing contractors in Charlotte NC serving Mecklenburg County facilities, City of Charlotte buildings & federal complexes. Procurement compliant with free estimates.',
    url: `${SITE_CONFIG.url}/government-building-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.office,
        width: 1200,
        height: 630,
        alt: 'Government building roofing Charlotte NC - Best Roofing Now municipal roofing project',
      },
    ],
  },
};

// Government roofing systems
const governmentRoofingSystems = [
  {
    icon: Building2,
    title: 'TPO Roofing Systems',
    description: 'Energy-efficient single-ply membrane ideal for government office buildings and municipal facilities. Meets federal energy mandates and reduces operational costs.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Factory,
    title: 'EPDM Rubber Roofing',
    description: 'Durable synthetic rubber membrane with 30+ year lifespan, perfect for fire stations, police precincts, and public works buildings requiring minimal maintenance.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Metal Roofing Systems',
    description: 'Standing seam and structural metal roofing for government facilities requiring long-term durability, wind resistance, and low lifecycle costs.',
    href: '/services/metal-roofing',
  },
  {
    icon: Shield,
    title: 'Built-Up Roofing (BUR)',
    description: 'Multi-layer roofing systems providing proven protection for courthouses, libraries, and large government complexes with decades of reliable performance.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Landmark,
    title: 'Slate Roofing (Historic Buildings)',
    description: 'Authentic slate roofing for historic government buildings requiring preservation-compliant materials that maintain architectural integrity and meet Secretary of the Interior standards.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Clock,
    title: 'Roof Coatings & Restoration',
    description: 'Reflective coatings that extend existing roof life, reduce energy costs, and allow government facilities to defer full replacement within tight budget cycles.',
    href: '/services/commercial-roofing',
  },
];

// Types of government buildings served
const governmentBuildingTypes = [
  {
    icon: Landmark,
    title: 'City & County Government Centers',
    description: 'Roofing for the Charlotte-Mecklenburg Government Center, county administration buildings, and municipal office complexes throughout Mecklenburg County.',
  },
  {
    icon: Building2,
    title: 'Federal Buildings & Offices',
    description: 'GSA-compliant roofing services for the Charles R. Jonas Federal Building, federal courthouses, and other federal facilities in the Charlotte region.',
  },
  {
    icon: Zap,
    title: 'Fire Stations',
    description: 'Specialized roofing for Charlotte Fire Department stations across all divisions, designed to withstand heavy apparatus vibration and 24/7 operational demands.',
  },
  {
    icon: Shield,
    title: 'Police Stations & Detention Centers',
    description: 'Security-conscious roofing solutions for CMPD divisions, the Mecklenburg County Detention Center, and law enforcement facilities with restricted access requirements.',
  },
  {
    icon: Scale,
    title: 'Courthouses & Justice Centers',
    description: 'Roofing for the Mecklenburg County Courthouse, district courthouses, and justice facilities, including historic preservation for older structures.',
  },
  {
    icon: BookOpen,
    title: 'Public Libraries & Community Centers',
    description: 'Roofing solutions for Charlotte Mecklenburg Library branches, recreation centers, and community buildings serving neighborhoods across the county.',
  },
];

// Why choose us for government projects
const whyChooseUs = [
  {
    icon: FileText,
    title: 'Procurement Compliant',
    description: 'Experienced with government procurement processes including RFPs, IFBs, competitive bidding, and compliance with NC General Statutes for public construction.',
  },
  {
    icon: DollarSign,
    title: 'Prevailing Wage Certified',
    description: 'Fully compliant with Davis-Bacon Act prevailing wage requirements for federally funded projects and NC prevailing wage standards for state and local work.',
  },
  {
    icon: Shield,
    title: 'Security Clearance Ready',
    description: 'Our crews undergo background checks and security screening required for work on law enforcement, detention, and sensitive government facilities.',
  },
  {
    icon: Landmark,
    title: 'Historic Preservation Expertise',
    description: 'Experienced working within historic preservation guidelines for older government buildings listed on the National Register of Historic Places.',
  },
  {
    icon: Award,
    title: 'Bonded & Fully Insured',
    description: 'Performance and payment bonds available for all government projects. We carry the liability coverage levels required by municipal and federal contracts.',
  },
  {
    icon: Users,
    title: 'Dedicated Project Management',
    description: 'Single point of contact with detailed reporting, progress documentation, and communication protocols that meet government transparency requirements.',
  },
];

// Charlotte government facility areas
const governmentAreas = [
  'Uptown Charlotte (Government Center)',
  'Charlotte-Mecklenburg County Campus',
  'Federal Complex / W. Trade St.',
  'North Tryon Municipal Corridor',
  'East Charlotte Division Stations',
  'South Charlotte Community Facilities',
  'University City Municipal Buildings',
  'Steele Creek / Airport Area Facilities',
  'Huntersville Municipal Buildings',
  'Matthews Town Facilities',
  'Mint Hill Government Buildings',
  'Pineville Municipal Complex',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mount Holly', href: '/locations/mount-holly-nc' },
];

// FAQs about government building roofing
const faqs = [
  {
    question: 'What procurement process do you follow for government roofing projects in Charlotte?',
    answer:
      'We are experienced with all standard government procurement methods used by the City of Charlotte and Mecklenburg County, including Invitation for Bids (IFB), Request for Proposals (RFP), and informal bidding for projects under statutory thresholds. We comply with NC General Statutes Chapter 143, Article 8 requirements for public construction, maintain proper licensing, and can provide performance and payment bonds. Our team handles the documentation, insurance certificates, and compliance paperwork that government projects require.',
  },
  {
    question: 'Are you compliant with prevailing wage requirements for government roofing work?',
    answer:
      'Yes, we are fully compliant with both the federal Davis-Bacon Act for federally funded projects and North Carolina prevailing wage standards for state and local government work. We maintain certified payroll records, submit weekly wage reports as required, and ensure all workers on government projects are compensated according to applicable wage determinations for Mecklenburg County.',
  },
  {
    question: 'Can your crews pass security background checks for sensitive government buildings?',
    answer:
      'Absolutely. Our crews routinely work on law enforcement facilities, detention centers, and other sensitive government buildings in the Charlotte area. We coordinate with facility security managers, provide employee identification and background check documentation, and follow all access protocols including badge requirements, tool inventories, and supervised entry procedures for restricted areas.',
  },
  {
    question: 'Do you have experience with historic preservation roofing for government buildings?',
    answer:
      'Yes, we have experience working within historic preservation guidelines established by the Secretary of the Interior and the Charlotte-Mecklenburg Historic Landmarks Commission. For government buildings listed on or eligible for the National Register of Historic Places, we use period-appropriate materials like natural slate, standing seam copper, and historically accurate flashing details while meeting modern building codes and waterproofing standards.',
  },
  {
    question: 'How do you handle government budget cycles and fiscal year constraints?',
    answer:
      'We understand that government projects often operate within strict fiscal year budgets and capital improvement plan timelines. We can phase projects across budget cycles, provide detailed estimates well in advance of budget planning periods (typically January-March for City of Charlotte), and structure work to align with your available funding. We also help identify opportunities for roof coatings and repairs that can extend roof life when full replacement funding is not yet available.',
  },
  {
    question: 'What warranties do you offer on government roofing projects?',
    answer:
      'We provide manufacturer warranties ranging from 15 to 30 years depending on the roofing system selected. As certified installers for major manufacturers, we can provide NDL (No Dollar Limit) warranties on larger government projects. Our workmanship warranty covers installation quality. We also offer extended maintenance agreements designed specifically for government facilities, providing scheduled inspections and priority response for warranty service.',
  },
  {
    question: 'Can you work around the operating hours of public buildings like libraries and community centers?',
    answer:
      'Yes, we regularly schedule work around the operating hours of public-facing government facilities. For libraries, community centers, and courthouses, we can perform the noisiest work before or after public hours, on weekends, or during scheduled closures. We coordinate closely with facility managers to ensure minimal disruption to public services and maintain safe conditions for building occupants at all times.',
  },
  {
    question: 'Do you meet ADA compliance requirements during roofing projects on government buildings?',
    answer:
      'All of our work on government buildings maintains full ADA compliance throughout the project. We ensure accessible routes are maintained or clearly marked detours are provided, temporary barriers meet ADA standards, and any roof-related work affecting building access (such as scaffolding or material staging) does not impede accessibility. Our project plans include ADA compliance as a standard requirement for all government facility work.',
  },
];

export default function GovernmentBuildingRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Government Building Roofing Charlotte NC', url: `${SITE_CONFIG.url}/government-building-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/government-building-roofing-charlotte-nc`}
        pageName="Government Building Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.office}
            alt="Government building roofing Charlotte NC - Best Roofing Now municipal roofing project"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Landmark className="w-4 h-4" />
              <span className="text-sm font-semibold">Government Buildings | Municipal Facilities | Public Works</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Government Building Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Procurement-Compliant Roofing for Municipal, County & Federal Facilities
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now serves Charlotte&apos;s government buildings with roofing solutions that meet strict
              procurement requirements, prevailing wage standards, and security protocols. From the Mecklenburg County
              Government Center to neighborhood fire stations, we deliver on-budget, on-schedule results that protect
              public investments.
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
                <FileText className="w-5 h-5 text-accent-light" />
                Procurement Compliant
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                Bonded & Insured
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Prevailing Wage Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Government Building Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Government Facilities We Serve
            </h2>
            <p className="text-gray text-lg">
              From the Charlotte-Mecklenburg Government Center to neighborhood fire stations and libraries, we provide
              roofing solutions tailored to the unique requirements of public buildings.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governmentBuildingTypes.map((type) => (
              <div
                key={type.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">
                  {type.title}
                </h3>
                <p className="text-gray text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roofing Systems Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Government Building Roofing Systems
            </h2>
            <p className="text-gray text-lg">
              We install and maintain all major roofing systems approved for government facilities, selecting the
              optimal solution based on your building&apos;s requirements, historic significance, and budget constraints.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governmentRoofingSystems.map((system) => (
              <Link
                key={system.title}
                href={system.href}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <system.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {system.title}
                </h3>
                <p className="text-gray text-sm mb-3">{system.description}</p>
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
                Why Charlotte&apos;s Government Facilities Trust Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Government roofing projects demand contractors who understand procurement compliance, prevailing wage
                requirements, security protocols, and the accountability standards that public projects require.
                We deliver on every front.
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
                src={IMAGES.commercial.office}
                alt="Government building roofing project in Charlotte NC - municipal facility roof installation"
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
                    <p className="font-bold text-dark">Government Specialists</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.roofsInstalled}+ Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Instant Estimate Section */}
      <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-bold">CHARLOTTE&apos;S FIRST</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Government Building Roof Instant Estimate
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Get an instant price range for your government facility roofing project — no waiting, no hassle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Membrane Replacement</h3>
              <p className="text-3xl font-bold text-accent mb-2">$900 - $1,800</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">TPO, EPDM, PVC, Modified Bitumen</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Roof Coatings</h3>
              <p className="text-3xl font-bold text-accent mb-2">$700 - $1,000</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Silicone, Acrylic, Elastomeric</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Landmark className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Slate / Historic Roofing</h3>
              <p className="text-3xl font-bold text-accent mb-2">$2,000 - $4,500</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Natural Slate, Standing Seam Copper</p>
            </div>
          </div>

          <div className="text-center">
            <EstimateButton variant="white" size="lg" className="text-lg px-10" estimateType="commercial">
              Get Your Instant Government Estimate
            </EstimateButton>
            <p className="text-white/60 text-sm mt-4">
              No obligation &bull; Instant results &bull; 100% free
            </p>
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
              Government Roofing Across the Charlotte Region
            </h2>
            <p className="text-gray text-lg">
              We serve government facilities throughout Mecklenburg County, surrounding municipalities, and the Greater Charlotte region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Government Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Government Facility Locations</h3>
              <div className="flex flex-wrap gap-2">
                {governmentAreas.map((area) => (
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
                Government Building Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about government building roofing services in Charlotte NC.
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

      {/* Related Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Related Commercial Roofing Services
            </h2>
            <p className="text-gray">
              Explore our full range of commercial and institutional roofing solutions in Charlotte NC.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/commercial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/industrial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Industrial Roofing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/church-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Church Roofing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/flat-roof-contractors-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Flat Roof Contractors
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/slate-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Slate Roofing Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/metal-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Metal Roofing Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Discuss Your Government Building Roofing Project?"
        subtitle="Get a free, no-obligation estimate for your municipal, county, or federal facility. Our team understands government procurement requirements and will provide transparent pricing, compliance documentation, and a project plan tailored to your budget cycle."
      />
    </>
  );
}
