import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  HelpCircle,
  Award,
  CloudHail,
  FileText,
  Clock,
  Camera,
  AlertTriangle,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Hail Damage Roof Repair Charlotte NC',
  description:
    'Expert hail damage roof repair in Charlotte NC. Free inspections, insurance claim assistance, and professional repairs. Don\'t let hidden hail damage destroy your roof. Call now!',
  keywords: [
    'hail damage roof repair Charlotte NC',
    'hail damage roofing Charlotte',
    'roof hail damage inspection Charlotte',
    'hail damage insurance claim Charlotte NC',
    'storm damage roof repair Charlotte',
    'hail damaged shingles Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/hail-damage-roof-repair`,
  },
  openGraph: {
    title: 'Hail Damage Roof Repair Charlotte NC | Insurance Claims | Best Roofing Now',
    description: 'Expert hail damage roof repair and insurance claim assistance in Charlotte NC.',
    url: `${SITE_CONFIG.url}/hail-damage-roof-repair`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Hail damage roof repair in Charlotte NC' }],
  },
};

const hailServices = [
  { icon: Camera, title: 'Free Hail Inspection', description: 'Comprehensive inspection with photos documenting all hail damage.' },
  { icon: FileText, title: 'Insurance Claim Help', description: 'We handle paperwork, meet with adjusters, and maximize your claim.' },
  { icon: Shield, title: 'Full Roof Replacement', description: 'Complete roof replacement when hail damage is extensive.' },
  { icon: CloudHail, title: 'Shingle Repair', description: 'Replace only damaged shingles when damage is limited.' },
  { icon: Clock, title: 'Fast Repairs', description: 'Quick turnaround once your claim is approved.' },
  { icon: Award, title: 'Quality Materials', description: 'Class 4 impact-resistant shingles available for future protection.' },
];

const hailDamageSigns = [
  'Dents or bruises on shingles (may look like dark spots)',
  'Missing granules exposing black asphalt',
  'Cracked or split shingles',
  'Dents on metal vents, flashing, or gutters',
  'Damaged or dented downspouts',
  'Dings on AC unit or outdoor furniture',
  'Damage to car hoods or outdoor surfaces',
  'Soft spots when walking on roof',
];

const insuranceProcess = [
  { step: 1, title: 'Free Inspection', description: 'We inspect your roof and document all hail damage with detailed photos.' },
  { step: 2, title: 'File Claim', description: 'We help you file your insurance claim with proper documentation.' },
  { step: 3, title: 'Meet Adjuster', description: 'We meet with your insurance adjuster to ensure fair assessment.' },
  { step: 4, title: 'Approval & Repair', description: 'Once approved, we complete repairs quickly and professionally.' },
];

const faqs = [
  { question: 'How do I know if my roof has hail damage?', answer: 'Hail damage isn\'t always visible from the ground. Look for dents on gutters, vents, or AC units. We offer free inspections to identify hidden damage that can lead to leaks if left unrepaired.' },
  { question: 'Will insurance cover hail damage to my roof?', answer: 'Yes! Most homeowner policies cover hail damage. We work with all insurance companies and help maximize your claim. Many Charlotte homeowners get full roof replacements covered.' },
  { question: 'How long do I have to file a hail damage claim?', answer: 'Most NC policies allow 1-3 years to file, but don\'t wait. Damage can worsen, and some insurers require prompt reporting. File as soon as you suspect damage.' },
  { question: 'Do I have to pay anything out of pocket?', answer: 'You\'ll pay your insurance deductible. We work within your insurance approval amount for the rest. Never pay a contractor to "cover" your deductible - that\'s insurance fraud.' },
  { question: 'Can I choose my own roofing contractor?', answer: 'Absolutely! You have the right to choose your contractor. Don\'t let insurance companies push you toward their "preferred" vendors. Choose a local, reputable company like Best Roofing Now.' },
  { question: 'What if insurance denies my claim?', answer: 'We can help you appeal. Sometimes adjusters miss damage or underestimate repairs. We\'ll provide additional documentation and request re-inspection if needed.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Storm Damage', url: `${SITE_CONFIG.url}/services/storm-damage-roof-siding` },
  { name: 'Hail Damage Repair', url: `${SITE_CONFIG.url}/hail-damage-roof-repair` },
];

export default function HailDamageRoofRepairPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Hail Damage Roof Repair",
          description: "Expert hail damage roof repair and insurance claim assistance in Charlotte NC.",
          slug: "hail-damage-roof-repair",
        }}
      />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/hail-damage-roof-repair`} pageName="Hail Damage Roof Repair Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Hail damage roof repair in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/80 rounded-full px-4 py-2 mb-4">
              <CloudHail className="w-4 h-4" />
              <span className="text-sm font-semibold">Free Hail Damage Inspections</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Hail Damage Roof Repair
              <br className="hidden md:block" />
              <span className="text-blue-300">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Insurance claim experts + quality repairs</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Charlotte sees significant hail storms every year. Best Roofing Now provides free hail damage inspections and handles your entire insurance claim process so you can get your roof repaired stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Hail Inspection</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-800" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-blue-300" />Insurance Claim Experts</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-blue-300" />BBB A+ Rated</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Hail Damage Services</h2>
            <p className="text-gray text-lg">Complete hail damage repair and insurance claim assistance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hailServices.map((service) => (
              <div key={service.title} className="p-6 bg-light rounded-xl">
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

      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Signs of Hail Damage</h2>
              <p className="text-gray text-lg mb-6">Hail damage isn&apos;t always obvious. Look for these signs:</p>
              <ul className="space-y-3">
                {hailDamageSigns.map((sign, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image src={IMAGES.realProjects.drone2} alt="Hail damage inspection" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Our Insurance Claim Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {insuranceProcess.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{item.step}</div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-800 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Recent Hail Storm?</h2>
              <p className="text-white/90">Get a free inspection before hidden damage becomes a major problem.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-800" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Inspection</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-slate-800 hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="hail-damage-roof-repair" count={4} title="Hail Damage Repairs" subtitle="Browse completed hail damage repairs." schemaPageUrl={`${SITE_CONFIG.url}/hail-damage-roof-repair`} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Hail Damage FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Related Storm Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/storm-damage-roof-siding" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Storm Damage Repair</h3>
              <p className="text-gray text-sm">Complete storm damage restoration services.</p>
            </Link>
            <Link href="/emergency-roof-tarping" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Emergency Tarping</h3>
              <p className="text-gray text-sm">24/7 emergency roof protection.</p>
            </Link>
            <Link href="/emergency" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Emergency Roofing</h3>
              <p className="text-gray text-sm">Full emergency roofing services.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Don't Wait on Hail Damage" subtitle="Get a free inspection and insurance claim assistance today." />
    </>
  );
}
