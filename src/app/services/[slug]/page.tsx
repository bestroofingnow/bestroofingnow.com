import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  CheckCircle,
  ArrowRight,
  Home,
  Building2,
  Wrench,
  RefreshCw,
  Search,
  AlertTriangle,
  CloudRain,
  Droplets,
  Layers,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG, SERVICES, LOCATIONS } from '@/lib/constants';
import { IMAGES, PAGE_IMAGES } from '@/lib/images';

// Map service slugs to their image sets
const serviceImages: Record<string, string[]> = {
  'residential-roofing': PAGE_IMAGES.services.residential,
  'commercial-roofing': PAGE_IMAGES.services.commercial,
  'roof-repair': PAGE_IMAGES.services.repairs,
  'roof-replacement': PAGE_IMAGES.services.replacement,
  'roof-inspection': PAGE_IMAGES.services.inspection,
  'emergency-roofing': PAGE_IMAGES.services.emergency,
  'storm-damage': PAGE_IMAGES.services.stormDamage,
  'gutters': PAGE_IMAGES.services.gutters,
  'siding': PAGE_IMAGES.services.siding,
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Wrench,
  RefreshCw,
  Search,
  AlertTriangle,
  CloudRain,
  Droplets,
  Layers,
};

// Service-specific content
const serviceContent: Record<
  string,
  {
    heroImage?: string;
    benefits: string[];
    process: { title: string; description: string }[];
    faqs: { question: string; answer: string }[];
  }
> = {
  'residential-roofing': {
    benefits: [
      'Free comprehensive roof inspections',
      'Premium materials from CertainTeed, GAF & Owens Corning',
      'Industry-leading warranties up to 50 years',
      'Licensed, bonded & insured contractors',
      'Clean job sites - we respect your property',
      'Financing options available',
    ],
    process: [
      { title: 'Free Inspection', description: 'We thoroughly assess your roof and provide a detailed report with photos.' },
      { title: 'Custom Quote', description: 'Receive a transparent, itemized quote with no hidden fees or surprises.' },
      { title: 'Material Selection', description: 'Choose from premium shingles, colors, and styles that match your home.' },
      { title: 'Professional Installation', description: 'Our certified crew installs your roof with precision and care.' },
      { title: 'Final Walkthrough', description: 'We inspect the completed work together and ensure your satisfaction.' },
    ],
    faqs: [
      { question: 'How long does a residential roof replacement take?', answer: 'Most residential roofs can be replaced in 1-3 days depending on size and complexity. We work efficiently while maintaining the highest quality standards.' },
      { question: 'What roofing materials do you recommend for Charlotte homes?', answer: 'We primarily recommend CertainTeed Landmark shingles for their durability, warranty, and value. For premium options, we offer GAF Timberline and architectural shingles.' },
      { question: 'Do you offer financing for residential roofing?', answer: 'Yes! We offer flexible financing options including 0% interest for qualified buyers. Ask about our payment plans during your free consultation.' },
    ],
  },
  'commercial-roofing': {
    benefits: [
      'Expertise with flat roofs, TPO, PVC & metal',
      'Minimal business disruption during installation',
      'Preventive maintenance programs',
      'Energy-efficient roofing solutions',
      'Commercial-grade warranties',
      'Emergency repair services 24/7',
    ],
    process: [
      { title: 'Site Assessment', description: 'Our commercial specialists evaluate your roof and business needs.' },
      { title: 'Detailed Proposal', description: 'Receive a comprehensive proposal with timeline and cost breakdown.' },
      { title: 'Project Planning', description: 'We coordinate with your schedule to minimize business disruption.' },
      { title: 'Expert Installation', description: 'Commercial-certified crews complete the work safely and efficiently.' },
      { title: 'Ongoing Support', description: 'Maintenance programs keep your roof protected year-round.' },
    ],
    faqs: [
      { question: 'What types of commercial roofing do you install?', answer: 'We specialize in TPO, PVC, modified bitumen, metal roofing, and built-up roofing systems. Each has advantages depending on your building and budget.' },
      { question: 'How do you minimize disruption to my business?', answer: 'We work around your schedule, often completing work in sections or during off-hours. Our crews are trained to maintain a safe, clean work environment.' },
      { question: 'Do you offer commercial roof maintenance contracts?', answer: 'Yes! Our maintenance programs include regular inspections, preventive repairs, and priority service. This extends your roof life and prevents costly emergency repairs.' },
    ],
  },
  'roof-repair': {
    benefits: [
      'Same-day emergency repairs available',
      'Fix leaks, storm damage & wear',
      'Honest assessment - we only fix what\'s needed',
      'Quality repairs that last',
      'Insurance claim assistance',
      'Written warranties on all repairs',
    ],
    process: [
      { title: 'Report the Issue', description: 'Call us or submit a request online - we respond quickly.' },
      { title: 'Rapid Assessment', description: 'We inspect the damage and identify the root cause.' },
      { title: 'Upfront Pricing', description: 'You receive a clear quote before any work begins.' },
      { title: 'Expert Repair', description: 'Our skilled technicians complete the repair right the first time.' },
      { title: 'Quality Check', description: 'We verify the repair and ensure your roof is fully protected.' },
    ],
    faqs: [
      { question: 'How quickly can you repair my roof?', answer: 'For emergencies, we offer same-day service. Standard repairs are typically scheduled within 1-3 business days depending on severity and weather.' },
      { question: 'Will you recommend a full replacement when I only need repairs?', answer: 'Never. We believe in honest assessments. If repairs can extend your roof life cost-effectively, that\'s what we\'ll recommend. We only suggest replacement when truly necessary.' },
      { question: 'Do you repair all types of roofs?', answer: 'Yes! We repair asphalt shingles, metal roofs, flat roofs, tile, slate, and more. Our team has experience with all residential and commercial roofing systems.' },
    ],
  },
  'roof-replacement': {
    benefits: [
      'Premium materials with manufacturer warranties',
      'Complete tear-off and disposal included',
      'New underlayment and ventilation',
      'Clean, efficient installation',
      'Financing available',
      'Increase your home value',
    ],
    process: [
      { title: 'Free Consultation', description: 'We assess your current roof and discuss your goals and budget.' },
      { title: 'Material Selection', description: 'Choose from our curated selection of premium roofing materials.' },
      { title: 'Preparation', description: 'We obtain permits and prepare your property for installation.' },
      { title: 'Installation', description: 'Complete tear-off, inspection of decking, and new roof installation.' },
      { title: 'Final Inspection', description: 'Thorough cleanup and walkthrough to ensure your satisfaction.' },
    ],
    faqs: [
      { question: 'How do I know if I need a roof replacement?', answer: 'Signs include age (15-25+ years), multiple leaks, widespread damage, curling/missing shingles, and granules in gutters. We provide free inspections to assess your roof honestly.' },
      { question: 'How much does a roof replacement cost in Charlotte?', answer: 'Costs typically range from $8,000 to $25,000+ depending on size, materials, and complexity. We provide detailed, transparent quotes with no hidden fees.' },
      { question: 'What happens to my old roof materials?', answer: 'We handle complete tear-off and disposal. Materials are taken to appropriate facilities, and recyclable components are processed responsibly.' },
    ],
  },
  'emergency-roofing': {
    benefits: [
      '24/7 emergency response',
      'Rapid tarping and temporary repairs',
      'Storm damage specialists',
      'Insurance claim documentation',
      'Priority scheduling',
      'Prevent further damage to your home',
    ],
    process: [
      { title: 'Emergency Call', description: 'Call our 24/7 line - we answer day or night, rain or shine.' },
      { title: 'Rapid Response', description: 'Our emergency team arrives quickly to assess the situation.' },
      { title: 'Immediate Protection', description: 'We tarp or temporarily repair to prevent further damage.' },
      { title: 'Damage Documentation', description: 'Thorough documentation for your insurance claim.' },
      { title: 'Permanent Solution', description: 'We schedule full repairs once the emergency is contained.' },
    ],
    faqs: [
      { question: 'What qualifies as a roofing emergency?', answer: 'Active leaks, storm damage with exposed areas, fallen trees, significant structural damage, or any situation where delay could cause additional damage to your home.' },
      { question: 'How fast can you respond to emergencies?', answer: 'We prioritize emergencies and typically respond within 1-4 hours depending on conditions. For active leaks during storms, we come as quickly as safely possible.' },
      { question: 'Do you help with insurance claims for storm damage?', answer: 'Absolutely. We document all damage thoroughly, work directly with adjusters, and advocate for fair claim settlements. Our team has extensive experience with insurance processes.' },
    ],
  },
  'storm-damage': {
    benefits: [
      'Free storm damage inspections',
      'Insurance claim experts',
      'Work with all insurance companies',
      'Document damage thoroughly',
      'Fight for fair settlements',
      'Handle the entire claims process',
    ],
    process: [
      { title: 'Free Inspection', description: 'We assess all storm damage to your roof, gutters, and siding.' },
      { title: 'Detailed Documentation', description: 'Photos, measurements, and reports ready for your insurance.' },
      { title: 'Insurance Coordination', description: 'We work directly with your adjuster and advocate for you.' },
      { title: 'Claim Approval', description: 'Once approved, we schedule repairs at your convenience.' },
      { title: 'Quality Restoration', description: 'Your roof is restored to pre-storm condition or better.' },
    ],
    faqs: [
      { question: 'Should I file an insurance claim for roof damage?', answer: 'If you have significant storm damage, usually yes. We provide free inspections and honest assessments. Sometimes damage appears minor but affects your roof\'s integrity - we\'ll advise you honestly.' },
      { question: 'Will filing a claim raise my insurance rates?', answer: 'Storm damage claims typically don\'t affect rates like at-fault claims do. Your policy protects you for events like this. We can discuss your specific situation during inspection.' },
      { question: 'What if my insurance denies my claim?', answer: 'We help appeal denials with additional documentation and can work with public adjusters if needed. Our thorough documentation often helps overturn initial denials.' },
    ],
  },
  'roof-inspection': {
    benefits: [
      'Completely free, no obligation',
      'Detailed written report with photos',
      'Honest assessment - no sales pressure',
      'Identify issues before they worsen',
      'Documentation for insurance or selling',
      'Expert recommendations',
    ],
    process: [
      { title: 'Schedule Inspection', description: 'Book online or call - we work around your schedule.' },
      { title: 'Thorough Assessment', description: 'We inspect every aspect of your roof inside and out.' },
      { title: 'Photo Documentation', description: 'Detailed photos of any issues or areas of concern.' },
      { title: 'Written Report', description: 'Receive a comprehensive report with our findings.' },
      { title: 'Expert Consultation', description: 'We review the report and answer all your questions.' },
    ],
    faqs: [
      { question: 'Is the roof inspection really free?', answer: 'Yes, 100% free with no obligation. We believe in educating homeowners about their roof\'s condition. There\'s no pressure to buy anything.' },
      { question: 'What do you look for during an inspection?', answer: 'We check shingles, flashing, vents, gutters, soffits, attic ventilation, signs of leaks, structural integrity, and overall wear. We also look for storm damage that may not be visible from the ground.' },
      { question: 'How often should I have my roof inspected?', answer: 'We recommend annual inspections, plus after any significant storm. Regular inspections catch small issues before they become expensive problems.' },
    ],
  },
  'gutters': {
    benefits: [
      'Seamless gutter installation',
      'Gutter guard options available',
      'Repair and cleaning services',
      'Color matching to your home',
      'Proper drainage solutions',
      'Prevent foundation damage',
    ],
    process: [
      { title: 'Assessment', description: 'We evaluate your current gutters and drainage needs.' },
      { title: 'Custom Solution', description: 'Recommendations tailored to your home and budget.' },
      { title: 'Professional Installation', description: 'Seamless gutters custom-fit to your home on-site.' },
      { title: 'Quality Check', description: 'We test flow and ensure proper drainage.' },
      { title: 'Maintenance Tips', description: 'Guidance on keeping your gutters functioning optimally.' },
    ],
    faqs: [
      { question: 'Why are seamless gutters better?', answer: 'Seamless gutters have no joints along their length, reducing leak points. They\'re custom-made on-site to fit your home perfectly and look cleaner than sectional gutters.' },
      { question: 'Do gutter guards really work?', answer: 'Quality gutter guards significantly reduce debris buildup and maintenance needs. We offer several options and can recommend the best choice for your trees and environment.' },
      { question: 'How often should gutters be cleaned?', answer: 'Without guards, twice yearly (spring and fall) is recommended. With quality guards, annual inspection is usually sufficient. We offer maintenance services if needed.' },
    ],
  },
  'siding': {
    benefits: [
      'Multiple material options',
      'Energy-efficient solutions',
      'Increase curb appeal',
      'Professional installation',
      'Color and style variety',
      'Low maintenance options',
    ],
    process: [
      { title: 'Consultation', description: 'Discuss your goals, preferences, and budget.' },
      { title: 'Material Selection', description: 'Choose from vinyl, fiber cement, wood, or other options.' },
      { title: 'Preparation', description: 'Protect landscaping and prepare your home.' },
      { title: 'Installation', description: 'Expert installation with attention to detail.' },
      { title: 'Final Walkthrough', description: 'Inspect the completed work and ensure satisfaction.' },
    ],
    faqs: [
      { question: 'What siding material do you recommend?', answer: 'It depends on your priorities. Vinyl offers low maintenance and affordability. Fiber cement provides durability and fire resistance. We\'ll help you choose based on your needs and budget.' },
      { question: 'Can you match my existing siding for repairs?', answer: 'In most cases, yes. We work to match colors and styles for seamless repairs. If exact matches aren\'t available, we\'ll discuss options with you.' },
      { question: 'Does new siding improve energy efficiency?', answer: 'Yes! Modern siding with proper insulation can significantly improve your home\'s energy efficiency, reducing heating and cooling costs.' },
    ],
  },
};

// Default content for services without specific content
const defaultContent = {
  benefits: [
    'Expert professional service',
    'Quality materials and workmanship',
    'Free estimates and consultations',
    'Licensed, bonded & insured',
    'Customer satisfaction guaranteed',
    'Competitive pricing',
  ],
  process: [
    { title: 'Consultation', description: 'Free assessment of your needs and requirements.' },
    { title: 'Custom Quote', description: 'Detailed, transparent pricing with no hidden fees.' },
    { title: 'Scheduling', description: 'Work scheduled at your convenience.' },
    { title: 'Professional Work', description: 'Expert execution by our trained team.' },
    { title: 'Quality Assurance', description: 'Final inspection and customer satisfaction check.' },
  ],
  faqs: [
    { question: 'Do you offer free estimates?', answer: 'Yes! All our consultations and estimates are completely free with no obligation.' },
    { question: 'Are you licensed and insured?', answer: 'Absolutely. We are fully licensed, bonded, and insured in North Carolina.' },
    { question: 'What areas do you serve?', answer: 'We serve Charlotte and all surrounding areas including Concord, Huntersville, Matthews, and more.' },
  ],
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} Charlotte NC | ${SITE_CONFIG.name}`,
    description: `${service.description} Serving Charlotte and surrounding areas. Free estimates, quality workmanship, and satisfaction guaranteed.`,
    keywords: service.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} in Charlotte NC`,
      description: service.description,
      url: `${SITE_CONFIG.url}/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const content = serviceContent[slug] || defaultContent;
  const Icon = iconMap[service.icon] || Home;
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <ServiceSchema service={service} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Services', url: `${SITE_CONFIG.url}/services` },
          { name: service.title, url: `${SITE_CONFIG.url}/services/${slug}` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title} in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90 mb-8">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                className="bg-accent hover:bg-accent-dark"
              >
                Get Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Why Choose Us for {service.title}
              </h2>
              <ul className="space-y-4">
                {content.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-dark">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact">Schedule Free Consultation</Button>
              </div>
            </div>
            <div className="bg-light rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Our Process</h3>
              <ol className="space-y-6">
                {content.process.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">{step.title}</h4>
                      <p className="text-gray text-sm mt-1">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Our {service.title} Work
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {(serviceImages[slug] || PAGE_IMAGES.services.residential).map((image, index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={image}
                  alt={`${service.title} project ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            {service.title} Service Areas
          </h2>
          <p className="text-center text-gray max-w-2xl mx-auto mb-8">
            We provide {service.title.toLowerCase()} services throughout the Charlotte
            metropolitan area, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-dark font-medium">{location.city}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        faqs={content.faqs}
        title={`${service.title} FAQ`}
        subtitle="Common questions about our services"
      />

      {/* Related Services */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Other Services You May Need
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((s) => {
              const ServiceIcon = iconMap[s.icon] || Home;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group"
                >
                  <ServiceIcon className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
                  <h3 className="font-bold text-dark group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray text-sm mt-2 line-clamp-2">
                    {s.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Ready for ${service.title}?`}
        subtitle="Contact us today for a free consultation and estimate. No pressure, just honest advice."
      />
    </>
  );
}
