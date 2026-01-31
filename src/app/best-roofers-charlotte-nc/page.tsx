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
  Wrench,
  Home,
  Building2,
  CloudRain,
  Search,
  MapPin,
  ThumbsUp,
  BadgeCheck,
  Trophy,
  Heart,
  Quote,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { MeetTheFamily } from '@/components/sections/MeetTheFamily';
import { TURNER_NOTES } from '@/lib/turner-family';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Best Roofers Charlotte NC | 500+ Five-Star Reviews',
  description:
    'See why Charlotte homeowners rate us 5 stars! Read 500+ verified reviews and testimonials from real customers. Best Roofers Charlotte NC with proven track record of excellence.',
  keywords: [
    'best roofers charlotte nc reviews',
    'charlotte roofers reviews',
    'best rated roofers charlotte nc',
    '5 star roofers charlotte',
    'roofer reviews charlotte nc',
    'top reviewed roofers charlotte',
    'roofer testimonials charlotte nc',
    'highly reviewed roofers charlotte',
    'trusted roofer reviews charlotte',
    'best roofers near me reviews',
    'charlotte roofer ratings',
    'verified roofer reviews charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/best-roofers-charlotte-nc`,
  },
  openGraph: {
    title: 'Best Roofers Charlotte NC | #1 Rated | Best Roofing Now',
    description:
      'Charlotte\'s #1 rated roofers! BBB A+ accredited, 5-star Google reviews, 500+ roofs completed. Veteran-owned with manufacturer certifications. Free estimates available.',
    url: `${SITE_CONFIG.url}/best-roofers-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Best Roofers Charlotte NC - Best Roofing Now #1 rated roofing team',
      },
    ],
  },
};

// Why we're the BEST - comprehensive credentials
const whyWereTheBest = [
  {
    icon: Trophy,
    title: '#1 Rated in Charlotte',
    description: 'Consistently ranked as Charlotte\'s top roofing company based on customer reviews, quality of work, and customer satisfaction scores.',
  },
  {
    icon: Star,
    title: '5-Star Google Rating',
    description: `${SITE_CONFIG.googleReviewCount}+ verified 5-star Google reviews from real Charlotte homeowners. Our reputation speaks for itself.`,
  },
  {
    icon: Award,
    title: 'BBB A+ Accreditation',
    description: 'Better Business Bureau A+ rated with ZERO complaints. We maintain the highest standards of business ethics and customer service.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned Values',
    description: 'Founded by a military veteran with values of integrity, discipline, precision, and commitment to excellence in every project.',
  },
  {
    icon: ThumbsUp,
    title: '500+ Roofs Completed',
    description: 'Over 500 successful roofing projects throughout Charlotte and surrounding areas. Proven track record of excellence.',
  },
  {
    icon: BadgeCheck,
    title: 'Manufacturer Certified',
    description: 'CertainTeed SELECT ShingleMaster, GAF Factory-Certified, and Owens Corning Preferred Contractor for premium warranty options.',
  },
  {
    icon: Heart,
    title: 'Customer Satisfaction Guarantee',
    description: 'We stand behind our work with a 100% satisfaction guarantee. If you\'re not happy, we\'ll make it right - period.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services with typical response times of 1-4 hours when Charlotte needs us most.',
  },
];

// Our comprehensive services
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete home roofing solutions with premium architectural shingles, metal, tile, and slate options.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Expert commercial roofing including TPO, EPDM, PVC, and flat roof systems for businesses.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, storm damage, missing shingles, and general wear.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Complete tear-off and replacement with industry-leading materials and warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Free Roof Inspections',
    description: 'Comprehensive inspections with detailed reports and honest recommendations - always free.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration with full insurance claim assistance and advocacy.',
    href: '/services/storm-damage',
  },
];

// Manufacturer certifications with details
const certifications = [
  {
    name: 'CertainTeed SELECT ShingleMaster',
    description: 'The highest level of CertainTeed certification, requiring extensive training and proven expertise. Allows us to offer the most comprehensive warranty options available.',
    warrantyBenefit: 'Up to 50-year SureStart Plus warranty with 4-Star coverage',
  },
  {
    name: 'GAF Factory-Certified Contractor',
    description: 'One of only 3% of roofers nationwide to achieve GAF Factory Certification. Demonstrates our commitment to quality installation and ongoing education.',
    warrantyBenefit: 'Golden Pledge warranty - 50 years material + 25 years workmanship',
  },
  {
    name: 'Owens Corning Preferred Contractor',
    description: 'Part of the Owens Corning Roofing Contractor Network, meeting strict standards for professionalism, workmanship, and customer service.',
    warrantyBenefit: 'Platinum Protection warranty with lifetime coverage',
  },
];

// Customer testimonials
const testimonials = [
  {
    name: 'Michael S.',
    location: 'Myers Park, Charlotte',
    rating: 5,
    text: 'Best Roofing Now truly lives up to their name. James and his team replaced our entire roof in just two days. The attention to detail was incredible, and they left our property cleaner than they found it. Best roofers we\'ve ever worked with!',
    project: 'Full Roof Replacement',
  },
  {
    name: 'Jennifer T.',
    location: 'Ballantyne, Charlotte',
    rating: 5,
    text: 'After getting quotes from five different companies, we chose Best Roofing Now. Their price was fair, but what really sold us was James\'s honesty. He actually talked us out of unnecessary repairs. That kind of integrity is rare. Highly recommend!',
    project: 'Roof Inspection & Repairs',
  },
  {
    name: 'Robert & Lisa M.',
    location: 'Huntersville, NC',
    rating: 5,
    text: 'We had storm damage and were worried about dealing with insurance. James handled everything - met with the adjuster, documented all the damage, and got us a fair settlement. The new roof looks amazing. These are the best roofers near Charlotte!',
    project: 'Storm Damage Replacement',
  },
  {
    name: 'David K.',
    location: 'SouthPark, Charlotte',
    rating: 5,
    text: 'Emergency repair on a Sunday - they were here within 2 hours. Professional, efficient, and fairly priced. When we need a full replacement, there\'s no question who we\'ll call. Best Roofing Now has earned a customer for life.',
    project: 'Emergency Leak Repair',
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
  'Providence',
  'Barclay Downs',
  'Quail Hollow',
  'Steele Creek',
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

// Comprehensive FAQs about choosing the best roofers
const faqs = [
  {
    question: 'What makes Best Roofing Now the best roofers in Charlotte NC?',
    answer:
      'Best Roofing Now has earned our #1 ranking through consistent excellence: BBB A+ rating with zero complaints, 5-star Google reviews from 60+ verified customers, veteran-owned values, 500+ successful projects, and certifications from CertainTeed, GAF, and Owens Corning. We combine exceptional craftsmanship with transparent pricing and outstanding customer service. Our commitment to quality over quantity sets us apart from larger, impersonal roofing companies.',
  },
  {
    question: 'How do I find the best roofers near me in Charlotte?',
    answer:
      'When searching for the best roofers near you in Charlotte, look for these key indicators: BBB accreditation with an A+ rating, verified Google reviews (not just star count, but actual detailed feedback), proper NC licensing and insurance, manufacturer certifications (CertainTeed, GAF, Owens Corning), years in business with local roots, transparent pricing with written estimates, and a physical business address. Avoid storm chasers and companies that demand large upfront payments.',
  },
  {
    question: 'What certifications should the best roofers have?',
    answer:
      'The best roofers should hold manufacturer certifications from major shingle brands. Best Roofing Now is a CertainTeed SELECT ShingleMaster, GAF Factory-Certified Contractor, and Owens Corning Preferred Contractor. These certifications require extensive training, proven expertise, and ongoing education. They also unlock the best warranty options for homeowners - including workmanship coverage that non-certified contractors cannot offer.',
  },
  {
    question: 'Why is it important to hire veteran-owned roofers?',
    answer:
      'Veteran-owned businesses bring military values to their work: integrity, discipline, attention to detail, and commitment to completing the mission. At Best Roofing Now, our founder\'s military service instilled values of precision, accountability, and never leaving a job half-done. We approach every roofing project with the same dedication we brought to serving our country. This translates to superior workmanship and customer service.',
  },
  {
    question: 'How much do the best roofers in Charlotte charge?',
    answer:
      'Quality roofing is an investment, and the best roofers provide competitive pricing for superior work. In Charlotte, minor repairs typically range from $200-$1,500, while full roof replacements range from $8,000-$25,000 for most homes depending on size, pitch, and materials. Best Roofing Now provides detailed written estimates with transparent pricing and no hidden fees. Being the "best" doesn\'t mean most expensive - it means best value for quality work.',
  },
  {
    question: 'What warranties do the best roofers offer?',
    answer:
      'The best roofers offer comprehensive warranties backed by manufacturer certifications. Best Roofing Now can offer: CertainTeed SureStart Plus warranty (up to 50 years with 4-Star coverage), GAF Golden Pledge warranty (50 years material + 25 years workmanship), and Owens Corning Platinum Protection (lifetime coverage). These enhanced warranties are only available through certified contractors and provide significantly more protection than standard warranties.',
  },
  {
    question: 'Do the best roofers help with insurance claims?',
    answer:
      'Yes! The best roofers have extensive experience with insurance claims and advocate for fair settlements on your behalf. Best Roofing Now provides thorough documentation of all damage, meets with insurance adjusters, and helps navigate the claims process. We work directly with your insurance company to ensure you receive fair compensation. Many Charlotte homeowners don\'t realize their roof damage may be covered - we help maximize your claim while maintaining complete honesty.',
  },
  {
    question: 'How long does it take the best roofers to complete a project?',
    answer:
      'The best roofers complete projects efficiently without sacrificing quality. Most residential roof replacements are completed in 1-3 days by our experienced crews. Repairs are often same-day or next-day. We provide accurate timelines during your estimate and communicate throughout the project. Unlike some companies that drag out projects, we value your time and minimize disruption to your daily life.',
  },
  {
    question: 'What should I expect during a free roof inspection?',
    answer:
      'During our free comprehensive roof inspection, one of our certified inspectors will examine your entire roofing system including shingles, flashing, vents, gutters, and attic ventilation. We take photos of any issues found and provide a detailed written report. There\'s no pressure to commit - we provide honest assessments even if that means telling you your roof is fine and doesn\'t need work. This transparent approach is why we\'re rated as the best roofers in Charlotte.',
  },
  {
    question: 'Why should I avoid storm chasers and choose local roofers?',
    answer:
      'Storm chasers are out-of-town contractors who flood Charlotte after major weather events. They often offer low prices, collect insurance payments, do substandard work, and disappear. Local roofers like Best Roofing Now have permanent roots in Charlotte - we\'ve been here 15+ years and we\'re not going anywhere. If an issue arises months after installation, we\'re here to fix it. Our reputation depends on the quality of every roof we install, which is why Charlotte trusts us as their best roofers.',
  },
];

export default function BestRoofersCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Best Roofers Charlotte NC', url: `${SITE_CONFIG.url}/best-roofers-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Best Roofers Charlotte NC - Best Roofing Now professional team installing quality roof"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-accent/90 rounded-full px-4 py-2 mb-4">
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-semibold">#1 Rated Roofers in Charlotte | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Best Roofers <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Charlotte&apos;s #1 Rated Roofing Company | {SITE_CONFIG.roofsInstalled}+ Roofs Completed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Looking for the <strong>best roofers near me</strong> in Charlotte? Best Roofing Now is the
              top-rated, veteran-owned roofing company Charlotte trusts. With our BBB A+ rating, 5-star
              Google reviews, and manufacturer certifications, we deliver exceptional quality on every project.
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
                <Trophy className="w-5 h-5 text-accent-light" />
                #1 Rated Roofers
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're the Best Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Trophy className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Why We&apos;re #1</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Chooses Us as Their Best Roofers
            </h2>
            <p className="text-gray text-lg">
              Being called the &ldquo;best roofers in Charlotte&rdquo; isn&apos;t just a title - it&apos;s a commitment we
              prove with every project. Here&apos;s what makes Best Roofing Now the top choice for Charlotte homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWereTheBest.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-light mb-2">500+</div>
              <div className="text-white/80">Roofs Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-light mb-2">5.0</div>
              <div className="text-white/80">Google Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-light mb-2">A+</div>
              <div className="text-white/80">BBB Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-light mb-2">15+</div>
              <div className="text-white/80">Years in Charlotte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <BadgeCheck className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Manufacturer Certified</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certifications That Make Us the Best
            </h2>
            <p className="text-gray text-lg">
              Our manufacturer certifications unlock the best warranty options in the industry -
              protections that non-certified contractors simply cannot offer.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-dark text-center mb-3">{cert.name}</h3>
                <p className="text-gray text-sm mb-4">{cert.description}</p>
                <div className="bg-accent/10 rounded-lg p-3">
                  <p className="text-sm font-semibold text-accent text-center">
                    <Sparkles className="w-4 h-4 inline mr-1" />
                    {cert.warrantyBenefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roofing Services from Charlotte&apos;s Best
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to complete replacements, our expert team handles all your roofing needs
              with the quality and care that has made us the best roofers in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray text-sm mb-3">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Customer Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Charlotte Says About Their Best Roofers
            </h2>
            <p className="text-gray text-lg">
              Don&apos;t just take our word for it - hear from Charlotte homeowners who chose us as their best roofers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <p className="font-bold text-dark">{testimonial.name}</p>
                    <p className="text-sm text-gray">{testimonial.location}</p>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {testimonial.project}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Read More Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready to Work with Charlotte&apos;s Best Roofers?
              </h2>
              <p className="text-white/90">
                Experience the difference of working with the #1 rated roofing company in Charlotte.
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

      {/* Social Proof Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Best roofers Charlotte NC - aerial view of completed quality roof project"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
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
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Proven Excellence Makes Us Charlotte&apos;s Best
              </h2>
              <p className="text-gray text-lg mb-6">
                Being Charlotte&apos;s best roofers isn&apos;t just a claim - it&apos;s a commitment we
                prove with every project. Our track record speaks for itself with hundreds of satisfied
                customers, perfect ratings, and industry recognition.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-light rounded-lg">
                  <Award className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark">BBB A+ Accredited Business</h4>
                    <p className="text-sm text-gray">Zero complaints, highest rating possible since 2020</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-light rounded-lg">
                  <Star className="w-10 h-10 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark">5-Star Google Rating</h4>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ verified reviews from real Charlotte customers</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-light rounded-lg">
                  <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark">Veteran-Owned Business</h4>
                    <p className="text-sm text-gray">Military values of integrity and excellence in every project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Turner Family */}
      <MeetTheFamily variant="full" />

      {/* Personal Note from James */}
      <section className="py-12 bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 hidden md:block">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">JT</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Quote className="w-8 h-8 text-primary/30" />
                    <h3 className="text-2xl font-bold text-primary">A Personal Note on Quality</h3>
                  </div>
                  <p className="text-lg text-gray italic mb-4">
                    &ldquo;{TURNER_NOTES.james.onQuality}&rdquo;
                  </p>
                  <p className="text-gray mb-4">
                    When you search for the &ldquo;best roofers near me&rdquo; in Charlotte, you&apos;re not just looking
                    for someone to put shingles on your roof. You&apos;re looking for a partner who will protect
                    your most valuable investment - your home. That&apos;s exactly how we approach every project.
                  </p>
                  <p className="text-gray mb-4">
                    Being called the best roofers in Charlotte is an honor we take seriously. It means showing
                    up on time, communicating clearly, using the best materials, and standing behind our work
                    long after the last nail is driven. It means treating your home like it&apos;s our own, because
                    to us, every roof we install is a reflection of our family&apos;s reputation.
                  </p>
                  <p className="text-gray mb-6">
                    If you&apos;re looking for the best roofers in Charlotte NC, I&apos;d be honored to earn your business.
                    Give us a call, let us inspect your roof for free, and see for yourself why Charlotte trusts
                    Best Roofing Now with their homes.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="md:hidden w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">JT</span>
                    </div>
                    <div>
                      <p className="font-bold text-primary text-lg">James Turner</p>
                      <p className="text-gray">Founder & Owner, Best Roofing Now</p>
                      <p className="text-primary font-semibold mt-2">
                        Call me directly at {SITE_CONFIG.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
              Best Roofers Serving All of Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our professional roofing team serves homeowners and businesses throughout the Greater Charlotte metro area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
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

            {/* Nearby Cities */}
            <div className="bg-light rounded-xl p-6">
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

      {/* Service City Links */}
      <ServiceCityLinks
        city="Charlotte"
        citySlug="charlotte-nc"
        title="Best Roofing Services in Charlotte NC"
        subtitle="Looking for specific roofing services from Charlotte's best roofers? Explore our comprehensive solutions."
      />

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Charlotte"
        service="Best Roofers"
        serviceSlug="roofers"
        title="Top-Rated Roofers in Nearby Cities"
      />

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Best Work Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects that showcase why we&apos;re the best roofers in Charlotte.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Best roofers Charlotte - quality residential roof project"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Top rated Charlotte roofers - CertainTeed shingle installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Best roofers near me Charlotte - aerial view of completed project"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Charlotte's best roofers - professional workmanship"
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
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                FAQs About Choosing the Best Roofers
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about finding and hiring the best roofers in Charlotte NC.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
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
        title="Ready to Hire Charlotte's Best Roofers?"
        subtitle="Get a free, no-obligation estimate from our certified team. Discover why 500+ Charlotte homeowners have chosen Best Roofing Now as their trusted roofing partner."
      />
    </>
  );
}
