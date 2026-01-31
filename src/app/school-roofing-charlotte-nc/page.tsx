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
  DollarSign,
  Ruler,
  Zap,
  Thermometer,
  Layers,
  GraduationCap,
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
  title: 'School Roofing Charlotte NC | K-12, Universities & Educational Facilities | Best Roofing Now',
  description:
    'Expert school and educational facility roofing contractors in Charlotte NC. Serving CMS schools, universities, private schools & colleges. Summer scheduling, student safety focused. Licensed & insured. Free estimates.',
  keywords: [
    'school roofing charlotte nc',
    'school roof repair charlotte',
    'educational facility roofing charlotte nc',
    'university roofing charlotte',
    'CMS school roofing charlotte nc',
    'school roof replacement charlotte nc',
    'K-12 school roofing charlotte',
    'college roofing charlotte nc',
    'school roofing contractors charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/school-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'School Roofing Charlotte NC | K-12, Universities & Educational Facilities | Best Roofing Now',
    description:
      'Expert school and educational facility roofing contractors in Charlotte NC. Summer scheduling, student safety focused. Licensed & insured with free estimates.',
    url: `${SITE_CONFIG.url}/school-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.education,
        width: 1200,
        height: 630,
        alt: 'School roofing Charlotte NC - Best Roofing Now educational facility roofing project',
      },
    ],
  },
};

// School roofing systems
const schoolRoofingSystems = [
  {
    icon: Building2,
    title: 'TPO Roofing Systems',
    description: 'Energy-efficient single-ply membrane ideal for school buildings. Reflective surface helps reduce HVAC costs, keeping classrooms comfortable year-round.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'EPDM Rubber Roofing',
    description: 'Durable synthetic rubber membrane with proven 30+ year lifespan. Low maintenance requirements make it ideal for school district budget planning.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Metal Roofing Systems',
    description: 'Long-lasting standing seam metal roofing for school buildings. Excellent durability for athletic facilities, gymnasiums, and administration buildings.',
    href: '/services/metal-roofing',
  },
  {
    icon: Layers,
    title: 'Built-Up Roofing (BUR)',
    description: 'Multi-layer roofing system providing exceptional waterproofing for large-footprint school buildings, cafeterias, and auditoriums.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Thermometer,
    title: 'Shingle Roofing',
    description: 'Architectural shingles for smaller school buildings, portable classrooms, and administration offices. Cost-effective with excellent aesthetics.',
    href: '/services/residential-roofing',
  },
  {
    icon: Clock,
    title: 'Roof Coatings & Restoration',
    description: 'Extend the life of existing school roofs by 10-15 years. A budget-friendly alternative to full replacement that can be completed during shorter breaks.',
    href: '/services/commercial-roofing',
  },
];

// Types of educational buildings served
const schoolBuildingTypes = [
  {
    icon: BookOpen,
    title: 'K-12 Schools',
    description: 'Comprehensive roofing for elementary, middle, and high schools across the Charlotte-Mecklenburg Schools (CMS) district and surrounding counties.',
  },
  {
    icon: GraduationCap,
    title: 'Universities & Colleges',
    description: 'Campus-wide roofing solutions for UNC Charlotte, Queens University, Johnson C. Smith, and other higher education institutions in the Charlotte area.',
  },
  {
    icon: Building2,
    title: 'Community Colleges',
    description: 'Roofing for Central Piedmont Community College (CPCC) campuses and other community college facilities throughout the region.',
  },
  {
    icon: Star,
    title: 'Private & Charter Schools',
    description: 'Specialized roofing for Charlotte&apos;s many private, parochial, and charter schools including Providence Day, Charlotte Latin, and Charlotte Country Day.',
  },
  {
    icon: Users,
    title: 'Administration Buildings',
    description: 'Roofing for school district offices, maintenance facilities, bus depots, and support buildings that keep the educational system running.',
  },
  {
    icon: Shield,
    title: 'Athletic Facilities',
    description: 'Metal and membrane roofing for gymnasiums, field houses, natatoriums, press boxes, and other athletic buildings on school and university campuses.',
  },
];

// Why choose us for school projects
const whyChooseUs = [
  {
    icon: Clock,
    title: 'Summer Scheduling Expertise',
    description: 'We understand the June-August work window. Our crews are scaled for fast completion during summer breaks, and we hit deadlines before students return.',
  },
  {
    icon: Shield,
    title: 'Student Safety First',
    description: 'Enhanced safety protocols for work near children. Secured staging areas, background-checked crews, and coordination with school administrators at every step.',
  },
  {
    icon: DollarSign,
    title: 'Budget & Procurement Ready',
    description: 'Experienced with school district bidding processes, state procurement rules, and bond-funded projects. We provide the documentation your board requires.',
  },
  {
    icon: Award,
    title: 'NC Building Code Compliant',
    description: 'All installations meet or exceed North Carolina building codes for educational facilities, including fire ratings, wind uplift, and energy efficiency standards.',
  },
  {
    icon: Ruler,
    title: 'Long-Term Warranty Programs',
    description: 'We offer 20-30 year NDL warranties ideal for school districts. Extended coverage means fewer budget surprises and predictable maintenance costs.',
  },
  {
    icon: Users,
    title: 'Dedicated Project Managers',
    description: 'A single point of contact who works with your facilities director, principal, and district leadership. Clear communication and daily progress updates.',
  },
];

// Charlotte school areas served
const schoolAreas = [
  'CMS District-Wide',
  'University City / UNCC',
  'Myers Park / Queens University',
  'West Charlotte',
  'North Charlotte',
  'South Charlotte / Ballantyne',
  'East Charlotte / Independence',
  'Uptown Charlotte / Johnson C. Smith',
  'Steele Creek',
  'Mountain Island / Mount Holly',
  'Mint Hill / Matthews',
  'Pineville',
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
  { name: 'Davidson', href: '/locations/davidson-nc' },
];

// FAQs about school roofing
const faqs = [
  {
    question: 'Can you complete a school roof replacement during summer break?',
    answer:
      'Yes, summer break scheduling is our specialty for school projects. Charlotte-Mecklenburg Schools typically release students in early June, giving us an 8-10 week window before classes resume in late August. For a typical school building (30,000-60,000 sq ft), we can complete a full roof replacement in 4-6 weeks. We pre-order materials in spring, mobilize crews on the first available day, and run extended shifts to ensure completion well before the first day of school. For larger campuses requiring multi-building work, we create phased plans spanning multiple summers if needed.',
  },
  {
    question: 'What safety protocols do you follow when working on occupied school buildings?',
    answer:
      'When work must occur during the school year (such as emergency repairs), we implement strict safety protocols: all workers undergo background checks, work areas are fully barricaded and separated from student areas, materials are delivered and staged during non-school hours, and a safety coordinator communicates daily with school administrators. We carry additional liability insurance for educational facility work. All debris is cleaned up before students arrive each morning, and we coordinate with maintenance staff on building access and HVAC impacts.',
  },
  {
    question: 'How does school district procurement and bidding work for roofing projects?',
    answer:
      'We are experienced with North Carolina public school procurement requirements. For CMS and surrounding districts, projects over $30,000 typically require formal bidding. We can participate in sealed bid processes, provide prevailing wage documentation, meet HUB (Historically Underutilized Business) requirements, and supply all required bonds and insurance certificates. We also work with school districts on capital improvement bond projects and can provide multi-year project proposals for districts planning campus-wide upgrades. For private schools, the process is typically simpler with direct proposals and negotiated contracts.',
  },
  {
    question: 'What warranties do you offer for school roofing projects?',
    answer:
      'For school district projects, we typically provide manufacturer NDL (No Dollar Limit) warranties ranging from 20 to 30 years, which cover both materials and labor at no additional cost to the school. This is critical for districts managing long-term budgets. Our workmanship warranty covers the quality of our installation. We can also set up preventive maintenance programs with bi-annual inspections to maintain warranty compliance and extend roof life. Extended warranty options are available, and we provide all documentation needed for district facility records.',
  },
  {
    question: 'How much does school roof replacement cost in Charlotte NC?',
    answer:
      'School roof replacement costs in Charlotte depend on building size, roofing system, and condition. TPO and EPDM membrane systems typically range from $5 to $10 per square foot. Metal roofing ranges from $8 to $15 per square foot. A typical CMS elementary school (40,000 sq ft roof) might cost $200,000-$400,000. University buildings with more complex architecture can be higher. We provide detailed estimates broken down by building section, and we work within school district budget cycles. Bond-funded and capital improvement projects may qualify for volume pricing.',
  },
  {
    question: 'Can you help schools improve energy efficiency with a new roof?',
    answer:
      'Absolutely. A new reflective roof (white TPO or cool-roof coated metal) can reduce a school&apos;s cooling costs by 20-30%, which is significant for buildings running AC from April through October in Charlotte. We also install additional insulation during re-roofing to meet or exceed current NC energy code. Some systems may qualify for utility rebates through Duke Energy&apos;s commercial programs. For districts pursuing LEED or Green Globes certification, we can specify materials and systems that earn points toward those programs.',
  },
  {
    question: 'Do you work with school districts on emergency roof repairs?',
    answer:
      'Yes, we provide emergency roof repair services for schools with priority response times. A leaking school roof can damage equipment, books, and technology, and can force classroom closures. We maintain emergency response agreements with several school districts that guarantee response within 4 hours during business days. Our crews can perform temporary weatherproofing immediately and schedule permanent repairs for the next available break period. We also provide detailed damage documentation for insurance claims and FEMA reimbursement if applicable.',
  },
  {
    question: 'What roofing system is best for school gymnasiums and athletic facilities?',
    answer:
      'For gymnasiums and athletic facilities, we typically recommend standing seam metal roofing for its superior durability, minimal maintenance, and ability to handle long spans without interior columns. For natatoriums (pools), PVC membrane is ideal due to its resistance to chlorine and moisture. Field houses and press boxes often do well with TPO or modified bitumen. We consider factors like acoustics (metal roofs can amplify rain noise in a gym), condensation control, and the higher ventilation demands of athletic spaces when making our recommendations.',
  },
];

export default function SchoolRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'School Roofing Charlotte NC', url: `${SITE_CONFIG.url}/school-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/school-roofing-charlotte-nc`}
        pageName="School Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.education}
            alt="School roofing Charlotte NC - Best Roofing Now educational facility roofing project"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm font-semibold">Schools | Universities | Educational Facilities</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              School Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert Roofing for K-12 Schools, Universities &amp; Educational Facilities
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Charlotte-Mecklenburg Schools is one of the largest school districts in the United States, and the
              Charlotte metro is home to UNC Charlotte, Queens University, Johnson C. Smith, CPCC, and dozens of
              private schools. Best Roofing Now specializes in educational facility roofing with summer scheduling,
              student safety protocols, and budget-conscious solutions.
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
                <Clock className="w-5 h-5 text-accent-light" />
                Summer Break Scheduling
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                Student Safety Protocols
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed &amp; Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Manufacturer Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* School Building Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Educational Facilities We Serve
            </h2>
            <p className="text-gray text-lg">
              From CMS elementary schools to UNC Charlotte campus buildings, we have the expertise to handle
              the unique roofing requirements of every educational facility in the Charlotte region.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolBuildingTypes.map((type) => (
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
              School Roofing Systems
            </h2>
            <p className="text-gray text-lg">
              We install and maintain all major roofing systems for educational facilities, selecting the optimal
              solution based on your building&apos;s requirements, district budget, and long-term maintenance goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolRoofingSystems.map((system) => (
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
                Why Charlotte&apos;s Schools Trust Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                School roofing is unlike any other commercial project. Tight summer timelines, student safety requirements,
                public procurement processes, and long-term budget planning all demand a contractor who truly understands
                educational facilities. We deliver on every front.
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
                src={IMAGES.commercial.education}
                alt="School roofing project in Charlotte NC - educational facility roof installation"
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
                    <p className="font-bold text-dark">School Roofing Specialists</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.roofsInstalled}+ Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Instant Estimate Section */}
      <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-bold">CHARLOTTE&apos;S FIRST</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              School Roof Instant Estimate
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Get an instant price range for your educational facility roofing project — no waiting, no hassle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Membrane Replacement</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,000 - $2,000</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">TPO, EPDM, BUR Systems</p>
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
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Metal Roofing</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,000 - $1,600</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Standing Seam, Exposed Fastener</p>
            </div>
          </div>

          <div className="text-center">
            <EstimateButton variant="white" size="lg" className="text-lg px-10" estimateType="commercial">
              Get Your Instant School Roofing Estimate
            </EstimateButton>
            <p className="text-white/60 text-sm mt-4">
              No obligation * Instant results * 100% free
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
              School Roofing Across the Charlotte Region
            </h2>
            <p className="text-gray text-lg">
              We serve schools and educational institutions throughout the CMS district and surrounding counties.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte School Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte School Districts &amp; Areas</h3>
              <div className="flex flex-wrap gap-2">
                {schoolAreas.map((area) => (
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
                School Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about school and educational facility roofing in Charlotte NC.
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
              Explore our full range of commercial and specialty roofing solutions in Charlotte NC.
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
              href="/flat-roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Flat Roof Repair
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/commercial-roofing-contractors-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing Contractors
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
        title="Ready to Discuss Your School Roofing Project?"
        subtitle="Get a free, no-obligation estimate for your school, university, or educational facility. Our team will assess your building and provide honest recommendations tailored to your district&apos;s timeline, safety requirements, and budget."
      />
    </>
  );
}
