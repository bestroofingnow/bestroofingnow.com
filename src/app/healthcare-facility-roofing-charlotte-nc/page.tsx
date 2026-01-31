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
  title: 'Healthcare Facility Roofing Charlotte NC | Hospital & Medical Office Roofs | Best Roofing Now',
  description:
    'Expert healthcare facility roofing contractors in Charlotte NC. Specializing in hospitals, medical offices, clinics & assisted living facilities. Infection control compliant, zero-disruption installation. Free estimates.',
  keywords: [
    'healthcare facility roofing charlotte nc',
    'hospital roofing charlotte nc',
    'medical office roofing charlotte',
    'clinic roofing charlotte nc',
    'assisted living roofing charlotte',
    'healthcare roof repair charlotte',
    'medical building roofing charlotte nc',
    'Atrium Health roofing contractor',
    'Novant Health roofing contractor charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/healthcare-facility-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Healthcare Facility Roofing Charlotte NC | Hospital & Medical Office Roofs | Best Roofing Now',
    description:
      'Expert healthcare facility roofing contractors in Charlotte NC. Specializing in hospitals, medical offices, clinics & assisted living facilities. Infection control compliant. Free estimates.',
    url: `${SITE_CONFIG.url}/healthcare-facility-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.healthcare,
        width: 1200,
        height: 630,
        alt: 'Healthcare facility roofing Charlotte NC - Best Roofing Now medical building roofing project',
      },
    ],
  },
};

// Healthcare roofing systems
const roofingSystems = [
  {
    icon: Building2,
    title: 'TPO Roofing Systems',
    description: 'Energy-efficient single-ply membrane ideal for medical office buildings and clinics. Reflective surface reduces HVAC load on temperature-sensitive healthcare spaces.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'PVC Roofing (Chemical Resistant)',
    description: 'Superior chemical resistance makes PVC ideal for hospitals and labs where exhaust fumes, medical gases, and chemical exposure can degrade other membrane types.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Factory,
    title: 'EPDM Rubber Roofing',
    description: 'Proven durability for large healthcare campuses. EPDM handles the complex penetrations from HVAC units, exhaust fans, and medical gas systems common on hospital roofs.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Metal Roofing Systems',
    description: 'Standing seam metal roofing for healthcare facilities requiring 40+ year lifespans, aesthetic appeal, and the ability to support heavy rooftop medical equipment.',
    href: '/services/metal-roofing',
  },
  {
    icon: Layers,
    title: 'Modified Bitumen Roofing',
    description: 'Multi-layer protection for healthcare facilities with high foot traffic on the roof from HVAC technicians, medical equipment installers, and maintenance crews.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Clock,
    title: 'Roof Coatings & Restoration',
    description: 'Extend your healthcare facility roof life by 10-15 years with reflective coatings — a budget-friendly alternative that avoids the disruption of full replacement.',
    href: '/services/commercial-roofing',
  },
];

// Types of healthcare buildings served
const buildingTypes = [
  {
    icon: Building2,
    title: 'Hospitals & Medical Centers',
    description: 'Full-service roofing for large hospital campuses like Atrium Health and Novant Health facilities, managing complex HVAC and medical equipment penetrations.',
  },
  {
    icon: Shield,
    title: 'Medical Office Buildings',
    description: 'Professional roofing for multi-tenant medical office buildings where tenant coordination, minimal noise, and clean work environments are essential.',
  },
  {
    icon: Zap,
    title: 'Urgent Care Centers',
    description: 'Fast, efficient roofing for freestanding urgent care facilities that cannot afford extended closures or disruption to patient flow.',
  },
  {
    icon: Users,
    title: 'Dental & Specialty Clinics',
    description: 'Specialized roofing for dental practices, imaging centers, surgery centers, and specialty clinics with sensitive equipment and strict cleanliness requirements.',
  },
  {
    icon: Clock,
    title: 'Assisted Living & Nursing Facilities',
    description: 'Quiet, safe roofing installations for senior care facilities where resident comfort, safety, and minimal disruption are the top priorities.',
  },
  {
    icon: Wrench,
    title: 'Rehabilitation Centers',
    description: 'Roofing for inpatient and outpatient rehabilitation facilities, coordinating around patient schedules and therapy sessions to minimize impact on care.',
  },
];

// Why choose us for healthcare projects
const whyChooseUs = [
  {
    icon: Shield,
    title: 'Infection Control Compliant',
    description: 'Our crews follow healthcare facility infection control protocols, including dust containment, debris management, and ICRA standards during construction.',
  },
  {
    icon: Clock,
    title: 'Zero Patient Disruption',
    description: 'We schedule work to minimize noise during patient care hours and coordinate with your facilities team to avoid disrupting critical operations.',
  },
  {
    icon: Wrench,
    title: 'HVAC Integration Expertise',
    description: 'Healthcare roofs have more penetrations per square foot than any other building type. We expertly seal around every RTU, exhaust fan, and medical gas vent.',
  },
  {
    icon: Award,
    title: 'Manufacturer Certified',
    description: 'Factory-certified installers for GAF, Carlisle, Firestone, and Johns Manville, providing warranty coverage that meets healthcare facility standards.',
  },
  {
    icon: DollarSign,
    title: 'Budget-Conscious Solutions',
    description: 'We offer phased installation plans and coating alternatives that let healthcare organizations manage capital expenditures over time.',
  },
  {
    icon: Users,
    title: 'Dedicated Healthcare PM',
    description: 'Your project gets a dedicated manager experienced with healthcare facility protocols, regulatory requirements, and multi-stakeholder coordination.',
  },
];

// Charlotte healthcare areas served
const serviceAreas = [
  'Atrium Health Main/Medical Center',
  'Novant Health Presbyterian Area',
  'SouthPark Medical District',
  'University City Medical Corridor',
  'Huntersville/Lake Norman Medical',
  'Pineville Medical Offices',
  'Ballantyne Medical Campus',
  'NorthPark/I-77 Medical',
  'Matthews/Mint Hill Medical',
  'Uptown Charlotte Medical',
  'Steele Creek Medical',
  'Concord/Kannapolis Medical',
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

// FAQs about healthcare facility roofing
const faqs = [
  {
    question: 'How do you handle infection control requirements during hospital roofing projects?',
    answer:
      'We follow strict Infection Control Risk Assessment (ICRA) protocols on all healthcare roofing projects. This includes dust containment barriers, negative air pressure in work zones where applicable, sealed penetrations before end of each work day, and HEPA-filtered debris removal. Our crews are trained on healthcare-specific safety protocols, and we coordinate directly with your infection control team before work begins to develop a site-specific plan.',
  },
  {
    question: 'How much does healthcare facility roof replacement cost in Charlotte?',
    answer:
      'Healthcare facility roof replacement in Charlotte typically costs $5 to $12 per square foot for membrane systems and $10 to $18 per square foot for metal roofing. Hospital roofs tend to be on the higher end due to complex penetrations, infection control requirements, and work-hour restrictions. A 50,000 sq ft medical office building might cost $250,000-$600,000 depending on the system and site complexity. We provide free detailed estimates.',
  },
  {
    question: 'Can you work on our medical facility without disrupting patient care?',
    answer:
      'Yes, minimizing patient disruption is our specialty on healthcare projects. We schedule noisy work like tear-off and fastening during off-peak hours or weekends. We use vibration-dampening techniques, coordinate with your OR and imaging schedules, and maintain clear emergency access routes at all times. Our phased approach means only small sections are open at any time, protecting patients, staff, and equipment below.',
  },
  {
    question: 'What roofing system is best for hospitals with heavy HVAC equipment?',
    answer:
      'Hospitals typically have 3-5 times more rooftop equipment than standard commercial buildings. We recommend PVC or TPO membranes with reinforced penetration detailing for hospitals with extensive HVAC systems. PVC is particularly well-suited because of its chemical resistance to medical exhaust and its ability to be heat-welded around complex curbs and equipment supports. We also install walkway pads to protect the membrane from maintenance foot traffic.',
  },
  {
    question: 'Do you handle roofing for medical office buildings with multiple tenants?',
    answer:
      'Yes, we regularly work on multi-tenant medical office buildings throughout Charlotte. We coordinate with property management and individual tenant practices to schedule work around patient appointments, surgical schedules, and business hours. Our team provides advance notice to all tenants, manages parking lot access during material deliveries, and maintains a clean, professional job site that reflects the image of your medical facility.',
  },
  {
    question: 'What about noise concerns for assisted living and nursing facilities?',
    answer:
      'Resident comfort is a top priority on assisted living and nursing facility projects. We limit noisy operations to specific hours agreed upon with your administration, typically mid-morning to mid-afternoon. We use low-vibration fastening methods when possible, employ sound-dampening barriers, and keep our crew footprint minimal. Our project managers check in daily with your staff to address any resident concerns immediately.',
  },
  {
    question: 'Can healthcare roofs support rooftop helipads and heavy equipment?',
    answer:
      'Yes, we have experience with reinforced roofing systems designed to support helipads, MRI equipment, generators, and other heavy medical equipment. We work with structural engineers to ensure proper load distribution and install roofing systems with enhanced puncture resistance and fireproofing in helipad zones. Our team understands FAA and NFPA requirements for helipad roofing.',
  },
  {
    question: 'Do you offer emergency roof repair for healthcare facilities?',
    answer:
      'Yes, we provide 24/7 emergency roof repair services for healthcare facilities in the Charlotte area. A roof leak in a hospital or medical office can compromise patient safety, damage expensive equipment, and create compliance issues. Our emergency response team can typically be on-site within hours to provide temporary repairs, followed by a permanent solution scheduled around your facility operations.',
  },
];

export default function HealthcareFacilityRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Healthcare Facility Roofing Charlotte NC', url: `${SITE_CONFIG.url}/healthcare-facility-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/healthcare-facility-roofing-charlotte-nc`}
        pageName="Healthcare Facility Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.healthcare}
            alt="Healthcare facility roofing Charlotte NC - Best Roofing Now medical building roofing project"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Hospitals | Medical Offices | Clinics</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Healthcare Facility Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Specialized Roofing for Hospitals, Medical Offices & Healthcare Campuses
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Charlotte is home to two of the nation&apos;s largest health systems — Atrium Health (Advocate Health)
              and Novant Health — plus hundreds of medical offices and clinics. Best Roofing Now delivers
              infection-control-compliant roofing with zero disruption to patient care.
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
                <Shield className="w-5 h-5 text-accent-light" />
                Infection Control Compliant
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-light" />
                Zero Patient Disruption
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Manufacturer Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Building Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Healthcare Facilities We Serve
            </h2>
            <p className="text-gray text-lg">
              From large hospital campuses to neighborhood clinics, we understand the unique roofing challenges
              healthcare buildings present — and we solve them without compromising patient care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildingTypes.map((type) => (
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
              Healthcare Roofing Systems
            </h2>
            <p className="text-gray text-lg">
              We install roofing systems specifically suited for healthcare environments — addressing chemical
              resistance, HVAC complexity, and the need for long-term reliability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roofingSystems.map((system) => (
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
                Why Charlotte&apos;s Healthcare Facilities Trust Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Healthcare roofing is not standard commercial roofing. It requires infection control awareness,
                patient-first scheduling, complex HVAC integration, and crews who understand that their work directly
                impacts people&apos;s health and safety.
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
                src={IMAGES.commercial.healthcare}
                alt="Healthcare facility roofing project in Charlotte NC - medical building roof installation"
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
                    <p className="font-bold text-dark">Healthcare Roofing Experts</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.roofsInstalled}+ Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Estimate Section */}
      <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-bold">CHARLOTTE&apos;S FIRST</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Healthcare Facility Roof Instant Estimate
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Get an instant price range for your healthcare facility roofing project — no waiting, no hassle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Membrane Replacement</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,100 - $2,400</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">TPO, PVC, EPDM Systems</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Roof Coatings</h3>
              <p className="text-3xl font-bold text-accent mb-2">$800 - $1,100</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Silicone, Acrylic, Elastomeric</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Metal Roofing</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,200 - $1,800</p>
              <p className="text-white/80 text-sm">per roofing square (100 sq ft)</p>
              <p className="text-white/60 text-xs mt-2">Standing Seam, Architectural Metal</p>
            </div>
          </div>

          <div className="text-center">
            <EstimateButton variant="white" size="lg" className="text-lg px-10" estimateType="commercial">
              Get Your Instant Healthcare Facility Estimate
            </EstimateButton>
            <p className="text-white/60 text-sm mt-4">
              No obligation • Instant results • 100% free
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
              Healthcare Facility Roofing Across the Charlotte Region
            </h2>
            <p className="text-gray text-lg">
              We serve hospitals, medical offices, and healthcare facilities throughout the Greater Charlotte
              metro area and surrounding communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Healthcare Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Medical Districts & Areas</h3>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
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
                Healthcare Facility Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about healthcare facility roofing services in Charlotte NC.
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
              href="/office-building-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Office Building Roofing
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
              href="/industrial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Industrial Roofing Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Discuss Your Healthcare Facility Roofing Project?"
        subtitle="Get a free, no-obligation estimate for your hospital, medical office, or healthcare campus. Our team will assess your building and provide honest recommendations that prioritize patient safety and operational continuity."
      />
    </>
  );
}
