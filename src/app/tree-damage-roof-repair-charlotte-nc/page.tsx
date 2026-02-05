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
  TreePine,
  AlertTriangle,
  FileText,
  Hammer,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Tree Damage Roof Repair Charlotte NC | Storm Cleanup | Best Roofing Now',
  description:
    'Expert tree damage roof repair in Charlotte NC. Fast emergency response when a tree falls on your roof. Insurance claim assistance, full restoration. Call Best Roofing Now 24/7!',
  keywords: [
    'tree damage roof repair charlotte nc',
    'tree fell on roof charlotte',
    'storm tree damage roof charlotte',
    'tree on house repair charlotte nc',
    'tree limb roof damage charlotte',
    'fallen tree roof repair charlotte',
    'emergency tree damage charlotte nc',
    'roof repair after tree fell charlotte',
    'tree damage insurance claim charlotte',
    'storm cleanup roof charlotte nc',
    'tree removal roof repair charlotte',
    'tree crashed on roof charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tree-damage-roof-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Tree Damage Roof Repair Charlotte NC | Storm Cleanup | Best Roofing Now',
    description:
      'Fast emergency response for tree damage roof repair in Charlotte NC. Insurance claim assistance and full restoration. BBB A+ rated, veteran-owned.',
    url: `${SITE_CONFIG.url}/tree-damage-roof-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.stormDamage,
        width: 1200,
        height: 630,
        alt: 'Tree damage roof repair service in Charlotte NC - Best Roofing Now storm cleanup',
      },
    ],
  },
};

// Types of tree damage we repair
const treeDamageTypes = [
  {
    icon: TreePine,
    title: 'Fallen Trees',
    description: 'Complete tree falls on roof requiring emergency response, tree removal, and full roof restoration.',
  },
  {
    icon: AlertTriangle,
    title: 'Large Branch Damage',
    description: 'Heavy limbs that puncture or crush roofing materials, causing structural damage.',
  },
  {
    icon: Hammer,
    title: 'Structural Damage',
    description: 'Rafters, trusses, or decking damaged by tree impact requiring structural repair.',
  },
  {
    icon: FileText,
    title: 'Insurance Claims',
    description: 'Full documentation and assistance with your insurance claim for covered damage.',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description: 'Immediate response to secure your property and prevent further damage from exposure.',
  },
  {
    icon: Shield,
    title: 'Insurance Experts',
    description: 'Extensive experience working with insurance companies to ensure fair claim settlements.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Users,
    title: 'Full-Service Restoration',
    description: 'From tree removal to final repairs, we handle everything so you don\'t have to.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with comprehensive liability and workers comp coverage.',
  },
  {
    icon: Star,
    title: 'Quality Guaranteed',
    description: 'All repairs backed by our workmanship warranty and manufacturer warranties.',
  },
];

// Repair process
const repairProcess = [
  {
    step: '1',
    title: 'Emergency Response',
    description: 'We respond 24/7 to secure your property. Emergency tarping prevents additional water damage while we plan repairs.',
  },
  {
    step: '2',
    title: 'Tree Removal Coordination',
    description: 'We coordinate with tree removal professionals to safely remove the tree while protecting your roof from further damage.',
  },
  {
    step: '3',
    title: 'Damage Assessment',
    description: 'Comprehensive inspection of all damage - roof, structure, interior - with detailed documentation for insurance.',
  },
  {
    step: '4',
    title: 'Insurance Assistance',
    description: 'We prepare detailed estimates and documentation, meet with adjusters, and advocate for fair claim settlements.',
  },
  {
    step: '5',
    title: 'Complete Restoration',
    description: 'Full repair of all damage including structural components, roofing materials, and interior finishes if needed.',
  },
];

// FAQs
const faqs = [
  {
    question: 'A tree just fell on my roof - what should I do first?',
    answer:
      'First, ensure everyone is safe and evacuate if there\'s structural danger. Call 911 if there are injuries or immediate safety hazards. Then call us at (704) 605-6047 for emergency response. We\'ll dispatch a crew to secure your property with emergency tarping. Do NOT try to remove the tree yourself - this requires professional equipment and expertise.',
  },
  {
    question: 'Does homeowners insurance cover tree damage to my roof?',
    answer:
      'Yes, most homeowners insurance policies cover damage caused by fallen trees, whether from your property or a neighbor\'s. This typically includes the roof repair, tree removal from the structure, and any interior water damage. We specialize in insurance claims and will document all damage thoroughly to support your claim.',
  },
  {
    question: 'How much does tree damage roof repair cost in Charlotte?',
    answer:
      'Tree damage repairs vary widely based on the extent of damage - from $1,000 for minor branch damage to $15,000+ for major structural repairs. Most tree damage is covered by insurance, so your out-of-pocket cost may only be your deductible. We provide free detailed estimates and work directly with your insurance company.',
  },
  {
    question: 'How long does it take to repair a roof after tree damage?',
    answer:
      'Timeline depends on damage severity. Emergency tarping is same-day. Minor repairs may take 1-2 days. Major structural repairs can take 1-2 weeks. Insurance processing adds additional time. We work efficiently while ensuring quality repairs, and we keep you informed throughout the process.',
  },
  {
    question: 'Do you handle tree removal or just the roof repair?',
    answer:
      'We coordinate the entire restoration process for you. While we partner with licensed arborists for tree removal, we manage the project from start to finish. This ensures the tree is removed safely without causing additional roof damage, and repairs begin immediately after.',
  },
  {
    question: 'What if the tree also damaged the inside of my house?',
    answer:
      'We handle complete restoration including interior damage. Water damage, ceiling repairs, drywall, painting - our network of trusted contractors can repair everything. This gives you a single point of contact for your entire claim rather than juggling multiple contractors.',
  },
  {
    question: 'Will you work with my insurance company?',
    answer:
      'Absolutely. We have extensive experience with all major insurance carriers. We document all damage thoroughly with photos and detailed estimates, meet with insurance adjusters on-site, and advocate for fair claim settlements. Our detailed documentation helps ensure nothing is missed in your claim.',
  },
  {
    question: 'What if my neighbor\'s tree fell on my roof?',
    answer:
      'Your homeowners insurance typically covers damage from a neighbor\'s tree falling on your property. However, if the tree was dead or obviously hazardous and the neighbor was negligent, your insurance may pursue recovery from their policy. We focus on getting your roof fixed quickly regardless of where the tree came from.',
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
  'Wesley Heights',
  'Fourth Ward',
  'Cherry',
  'Madison Park',
  'Montford',
  'Chantilly',
  'Commonwealth',
  'Sedgefield',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Pineville', href: '/locations/pineville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
  { name: 'Indian Trail', href: '/locations/indian-trail-nc' },
];

export default function TreeDamageRoofRepairCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Tree Damage Roof Repair Charlotte NC', url: `${SITE_CONFIG.url}/tree-damage-roof-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.stormDamage}
            alt="Tree damage roof repair Charlotte NC - Best Roofing Now storm cleanup services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4">
              <TreePine className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 Emergency Storm Response</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Tree Damage Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Tree Fell on Your Roof? We Handle Everything - Emergency to Restoration
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Charlotte storms can bring down trees without warning. When a tree damages your roof,
              Best Roofing Now provides complete restoration from emergency tarping to final repairs.
              We work directly with your insurance to make the process stress-free.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Emergency: {SITE_CONFIG.phone}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Emergency Service
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-light" />
                24/7 Emergency Response
              </span>
              <span className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-yellow-400" />
                Insurance Claim Experts
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Full Restoration Service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Damage Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tree Damage Repair Services
            </h2>
            <p className="text-gray text-lg">
              From minor branch impacts to catastrophic tree falls, we have the expertise and
              resources to restore your roof completely.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treeDamageTypes.map((type) => (
              <div
                key={type.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{type.title}</h3>
                <p className="text-gray text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Tree Damage Restoration Process
            </h2>
            <p className="text-gray text-lg">
              We manage every step from emergency response through complete restoration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {repairProcess.map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md h-full">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
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
                Why Charlotte Trusts Us for Tree Damage Repair
              </h2>
              <p className="text-gray text-lg mb-8">
                Tree damage is stressful enough without dealing with multiple contractors and
                complicated insurance claims. Best Roofing Now handles everything for you,
                from securing your property to final restoration.
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
                alt="Best Roofing Now - Professional tree damage roof repair in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Insurance Experts</p>
                    <p className="text-sm text-gray">We Handle Your Claim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Tree Fell on Your Roof? Get Help Now
              </h2>
              <p className="text-white/90">
                24/7 emergency response. We secure your property and handle everything from there.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
              <Button
                href="/contact"
                className="bg-white !text-accent hover:bg-white/90"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Emergency Help
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
              Tree Damage Repair Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We respond to tree damage emergencies across the Greater Charlotte metro area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
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
                Tree Damage Roof Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about tree damage repair and insurance claims in Charlotte.
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
        slug="tree-damage-roof-repair-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/tree-damage-roof-repair-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Complete Tree Damage Restoration"
        subtitle="From emergency response to final repairs, we handle everything. Insurance claim assistance included. Get your free assessment today."
      />
    </>
  );
}
