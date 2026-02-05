import { Metadata } from 'next';
import Image from 'next/image';
import {
  Star,
  Shield,
  Award,
  CheckCircle,
  Phone,
  Satellite,
  CloudLightning,
  Calculator,
  ClipboardCheck,
  Search,
  Calendar,
  Users,
  Heart,
  MapPin,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  FreeInspectionOfferSchema,
  HowToGetRoofEstimateSchema,
} from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import LandingForm from './LandingForm';

export const metadata: Metadata = {
  title: 'Free Roof Inspection & Instant Estimate | Charlotte NC',
  description:
    'Get a free roof inspection and instant satellite estimate in Charlotte NC. Storm damage check, cost analysis, and expert assessment. Veteran-owned, BBB A+ rated.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/free-roof-inspection`,
  },
  openGraph: {
    title: 'Free Roof Inspection & Instant Estimate | Best Roofing Now',
    description:
      'Get a free roof inspection and instant satellite estimate. Storm damage check, cost analysis, and expert assessment from Charlotte\'s top-rated roofing company.',
    url: `${SITE_CONFIG.url}/free-roof-inspection`,
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Is the roof inspection really free?',
    answer:
      'Yes, 100% free with no obligation. We provide a complete roof inspection, satellite analysis, and written report at no cost. There is no pressure to buy — we believe honest assessments earn trust and referrals.',
  },
  {
    question: 'How accurate is the satellite roof estimate?',
    answer:
      'Our satellite analysis measures your roof within 5-10% accuracy using the same technology insurance companies use. During the in-person inspection, we verify the satellite data and provide a final, exact quote.',
  },
  {
    question: 'Do I need to be home for the inspection?',
    answer:
      'Not necessarily. Our certified inspectors can assess most roofs from the exterior using drone technology and satellite data. However, we recommend being present so we can walk you through our findings and answer questions.',
  },
  {
    question: 'Will you help with my insurance claim?',
    answer:
      'Absolutely. We handle insurance claims daily and will meet with your adjuster, document all damage with photos and reports, and advocate for full coverage. We have a proven track record of getting claims approved.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve the entire Charlotte metro area including Huntersville, Cornelius, Davidson, Denver, Mooresville, Matthews, Mint Hill, Pineville, Fort Mill, Indian Trail, Gastonia, Concord, and surrounding Lake Norman communities.',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Charlotte, NC',
    text: 'They helped me navigate my insurance claim after a hail storm. Got a whole new roof and the process was incredibly smooth. James personally oversaw the entire project.',
    service: 'Insurance Claim + Roof Replacement',
  },
  {
    name: 'Mike T.',
    location: 'Huntersville, NC',
    text: 'Honest and professional from start to finish. They actually told me my roof had more life left and didn\'t need replacement yet. That kind of honesty is rare. When I do need a new roof, I know who to call.',
    service: 'Roof Inspection',
  },
  {
    name: 'Jennifer L.',
    location: 'Concord, NC',
    text: 'After a bad storm, I had three roofers come out. Best Roofing Now was the only one who didn\'t try to upsell me on things I didn\'t need. Their estimate was fair and the work was top quality.',
    service: 'Storm Damage Repair',
  },
  {
    name: 'David R.',
    location: 'Davidson, NC',
    text: 'Asked them to inspect a roof on a house I was buying. They found issues the home inspector missed and saved me from a costly mistake. Truly looking out for the customer.',
    service: 'Pre-Purchase Inspection',
  },
];

export default function FreeRoofInspectionPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema includeRating={true} />
      <FreeInspectionOfferSchema />
      <HowToGetRoofEstimateSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Free Roof Inspection', url: `${SITE_CONFIG.url}/free-roof-inspection` },
        ]}
      />
      <FAQSchema faqs={faqs} />

      {/* ============================================ */}
      {/* HERO SECTION — Above the Fold                */}
      {/* ============================================ */}
      <section className="relative bg-primary overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero.hero1}
            alt="Professional roof inspection in Charlotte NC"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left — Headline + Value Props */}
            <div className="text-white">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">{SITE_CONFIG.googleRating} Rating &middot; {SITE_CONFIG.googleReviewCount}+ Reviews</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Get Your Free Roof Inspection &amp; Instant Estimate
              </h1>

              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Charlotte&apos;s most trusted roofing company uses satellite technology to analyze
                your roof, check for storm damage, and provide an accurate cost estimate —
                <strong> completely free</strong>.
              </p>

              {/* Value props */}
              <div className="space-y-4 mb-8">
                {[
                  'Satellite roof measurement & storm damage analysis',
                  'Detailed report with repair or replacement cost ranges',
                  'Free in-person inspection by a certified roofing specialist',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              {/* Trust badges row */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Shield, label: 'BBB A+ Rated' },
                  { icon: Award, label: 'Veteran-Owned' },
                  { icon: Users, label: `${SITE_CONFIG.roofsInstalled}+ Roofs` },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <Icon className="w-4 h-4 text-white/80" />
                    <span className="text-sm font-medium text-white/90">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Inline Form */}
            <div className="md:mt-0 mt-4">
              <LandingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHAT YOU'LL RECEIVE                          */}
      {/* ============================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-3">What You&apos;ll Receive — Completely Free</h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Every homeowner who requests an inspection gets a comprehensive roof report including:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Satellite,
                title: 'Satellite Roof Analysis',
                description:
                  'We measure your roof using satellite imagery — the same technology insurance companies use. Get accurate square footage, pitch, and complexity data.',
              },
              {
                icon: CloudLightning,
                title: 'Storm Damage Assessment',
                description:
                  'Our certified inspectors check for hail impact, wind uplift, and weather damage. We document everything with photos for your insurance claim.',
              },
              {
                icon: Calculator,
                title: 'Instant Cost Estimate',
                description:
                  'Receive transparent pricing for multiple material options — from architectural shingles to standing seam metal. No hidden fees, no surprises.',
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center p-8 rounded-xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
                <p className="text-gray leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY CHARLOTTE TRUSTS US                      */}
      {/* ============================================ */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-3">Why Charlotte Trusts Best Roofing Now</h2>
            <p className="text-gray text-lg">
              We&apos;re not storm chasers. We&apos;re your neighbors — and we have the credentials to prove it.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: '5.0', label: 'Google Rating', sublabel: `${SITE_CONFIG.googleReviewCount}+ reviews` },
              { value: 'A+', label: 'BBB Rating', sublabel: 'Accredited Business' },
              { value: `${SITE_CONFIG.roofsInstalled}+`, label: 'Roofs Completed', sublabel: 'Charlotte metro' },
              { value: 'Veteran', label: 'Owned & Operated', sublabel: 'Family business' },
            ].map(({ value, label, sublabel }) => (
              <div key={label} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">{value}</div>
                <div className="text-sm font-semibold text-dark">{label}</div>
                <div className="text-xs text-gray mt-1">{sublabel}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-center text-sm font-semibold text-gray uppercase tracking-wider mb-6">
              Manufacturer Certified
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {SITE_CONFIG.certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3 justify-center">
                  <Award className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-medium text-dark text-sm">{cert}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-100">
              <span className="flex items-center gap-2 text-sm text-gray">
                <Award className="w-5 h-5 text-accent" /> Angi Super Service Award
              </span>
              <span className="flex items-center gap-2 text-sm text-gray">
                <Users className="w-5 h-5 text-primary" /> Lake Norman Chamber Member
              </span>
              <span className="flex items-center gap-2 text-sm text-gray">
                <Heart className="w-5 h-5 text-accent" /> Nextdoor Recommended
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALS                                 */}
      {/* ============================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h2 className="text-3xl font-bold text-dark mb-3">What Our Customers Say</h2>
            <p className="text-gray">
              {SITE_CONFIG.googleRating} stars from {SITE_CONFIG.googleReviewCount}+ verified Google reviews
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-light rounded-xl p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-dark leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-dark">{t.name}</div>
                    <div className="text-sm text-gray">{t.location}</div>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary font-medium px-3 py-1 rounded-full">
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={`https://www.google.com/search?q=Best+Roofing+Now+Charlotte+NC+reviews`}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              See all {SITE_CONFIG.googleReviewCount}+ Google reviews
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HOW IT WORKS                                 */}
      {/* ============================================ */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-3">How It Works — 3 Simple Steps</h2>
            <p className="text-gray text-lg">From request to report in as little as 24 hours</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                icon: ClipboardCheck,
                title: 'Enter Your Address',
                description:
                  'Fill out the form above with your property address. We immediately begin analyzing your roof using satellite imagery.',
              },
              {
                step: '2',
                icon: Search,
                title: 'Get Your Free Report',
                description:
                  'Receive a detailed report with roof measurements, condition assessment, storm damage findings, and transparent cost estimates.',
              },
              {
                step: '3',
                icon: Calendar,
                title: 'Schedule Your Inspection',
                description:
                  'A certified roofing specialist comes to your home at YOUR convenience to verify findings and answer all your questions.',
              },
            ].map(({ step, icon: Icon, title, description }) => (
              <div key={step} className="relative">
                <div className="bg-white rounded-xl p-8 text-center shadow-sm h-full">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {step}
                  </div>
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-dark mb-3">{title}</h3>
                  <p className="text-gray text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* MEET THE FAMILY                              */}
      {/* ============================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-3">We&apos;re Not a Faceless Corporation</h2>
          <p className="text-gray text-lg mb-10">
            Best Roofing Now is a veteran-owned, family-operated roofing company. When you call us, you talk to us — not a call center.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* James */}
            <div className="bg-light rounded-xl p-6">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                JT
              </div>
              <h3 className="font-bold text-dark text-lg">James Turner</h3>
              <p className="text-sm text-primary font-medium mb-3">Founder &amp; Owner</p>
              <p className="text-sm text-gray leading-relaxed italic">
                &ldquo;I started Best Roofing Now because I saw too many homeowners getting taken advantage of by
                out-of-town storm chasers. We treat every roof like it&apos;s our own family&apos;s home.&rdquo;
              </p>
            </div>

            {/* Fred */}
            <div className="bg-light rounded-xl p-6">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                FT
              </div>
              <h3 className="font-bold text-dark text-lg">Fred Turner</h3>
              <p className="text-sm text-primary font-medium mb-3">Operations Manager</p>
              <p className="text-sm text-gray leading-relaxed italic">
                &ldquo;In Alabama, a man&apos;s word is his bond. That&apos;s how I raised my son, and that&apos;s
                how we run this company. We show up, do what we say, and stand behind our work.&rdquo;
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Originally from Alabama
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" /> Veteran-Owned
            </span>
            <span className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-accent" /> Serving Charlotte Since 2020
            </span>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ                                          */}
      {/* ============================================ */}
      <section className="py-16 bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-3">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="flex items-start gap-3 text-lg font-semibold text-dark mb-3">
                  <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-gray leading-relaxed pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA                                    */}
      {/* ============================================ */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Protect Your Home?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Don&apos;t wait until a small issue becomes a costly repair. Get your free roof inspection today
            and know exactly where your roof stands.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#main-content"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get My Free Roof Report
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-lg text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              {SITE_CONFIG.phone}
            </a>
          </div>

          <p className="text-white/60 text-sm">
            No pressure. No obligation. Just honest advice from a family that cares about your home.
          </p>
        </div>
      </section>
    </>
  );
}
