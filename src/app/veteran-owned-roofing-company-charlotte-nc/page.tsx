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
  MapPin,
  Heart,
  Medal,
  Flag,
  HandHeart,
  BadgeCheck,
  Handshake,
  Target,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Veteran-Owned Roofing Company Charlotte NC | Best Roofing Now',
  description:
    'Best Roofing Now is a veteran-owned, family-operated roofing company in Charlotte NC. Founded on military values of integrity, discipline, and excellence. BBB A+ rated. Free estimates. Our Roofs for Veterans program gives back to those who served.',
  keywords: [
    'veteran owned roofing company charlotte nc',
    'veteran roofer charlotte',
    'military owned roofing charlotte',
    'veteran roofing contractor charlotte nc',
    'veteran owned business roofing',
    'military veteran roofer near me',
    'veteran roofing company near me',
    'veteran discount roofing charlotte',
    'patriot roofing charlotte nc',
    'veteran operated roofing charlotte',
    'family veteran owned roofer',
    'trusted veteran roofer charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/veteran-owned-roofing-company-charlotte-nc`,
  },
  openGraph: {
    title: 'Veteran-Owned Roofing Company Charlotte NC | Best Roofing Now',
    description:
      'Family-owned, veteran-operated roofing company in Charlotte NC. Built on military values of integrity and service. BBB A+ rated. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/veteran-owned-roofing-company-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.team.jamesAndFred,
        width: 1200,
        height: 630,
        alt: 'Veteran-owned roofing company Charlotte NC - Best Roofing Now team',
      },
    ],
  },
};

// Military values that drive our business
const militaryValues = [
  {
    icon: Shield,
    title: 'Integrity First',
    description: 'We tell the truth, even when it means losing a sale. Military service taught us that honor and honesty are non-negotiable. If repairs will work, we recommend repairs - not a full replacement.',
    militaryConnection: 'A core Air Force value that guides every interaction with our customers.',
  },
  {
    icon: Target,
    title: 'Mission Excellence',
    description: 'Every roof is a mission, and we do not leave until the mission is complete. We approach every project with the precision and dedication learned in military service.',
    militaryConnection: 'Attention to detail and commitment to excellence that defines military operations.',
  },
  {
    icon: Heart,
    title: 'Service Before Self',
    description: 'Your home and family come first. We prioritize your needs over profits, ensuring you get exactly what your roof requires - nothing more, nothing less.',
    militaryConnection: 'The military principle of putting duty and others before personal gain.',
  },
  {
    icon: Users,
    title: 'Brotherhood & Family',
    description: 'We treat every customer like family and every team member like a brother or sister in arms. This creates a culture of mutual respect and exceptional service.',
    militaryConnection: 'The bonds formed in military service translate to how we treat our customers.',
  },
  {
    icon: Flag,
    title: 'Duty & Accountability',
    description: 'When we make a commitment, we honor it. Period. No excuses, no shortcuts. We stand behind our work with the same dedication we brought to military service.',
    militaryConnection: 'Accountability and responsibility are non-negotiable in our operations.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Standards',
    description: 'Military-grade quality in every installation. We inspect, reinspect, and ensure every detail meets our exacting standards before the job is complete.',
    militaryConnection: 'The rigorous inspection standards of military equipment maintenance.',
  },
];

// Roofs for Veterans Program Details
const roofsForVeteransProgram = [
  {
    title: 'Free Roof Inspections for Veterans',
    description: 'Any veteran can receive a complimentary comprehensive roof inspection with a detailed written report.',
    icon: Home,
  },
  {
    title: 'Veteran Discount Program',
    description: 'Active duty military, veterans, and military families receive special pricing on all roofing services.',
    icon: Medal,
  },
  {
    title: 'Annual Free Roof Giveaway',
    description: 'Each year, we donate a complete roof replacement to a deserving veteran family in the Charlotte area.',
    icon: HandHeart,
  },
  {
    title: 'Priority Emergency Service',
    description: 'Veterans receive priority scheduling for emergency roof repairs - because those who served deserve the best.',
    icon: Clock,
  },
];

// Why support veteran-owned businesses
const whySupportVeterans = [
  {
    title: 'Proven Leadership',
    description: 'Veterans bring leadership skills honed through real-world challenges and high-stakes decisions.',
  },
  {
    title: 'Strong Work Ethic',
    description: 'Military training instills discipline, punctuality, and commitment to completing the mission.',
  },
  {
    title: 'Team-First Mentality',
    description: 'Veterans understand the importance of teamwork and supporting every member of the crew.',
  },
  {
    title: 'Integrity Under Pressure',
    description: 'Military service teaches the importance of doing the right thing, especially when it is difficult.',
  },
  {
    title: 'Commitment to Quality',
    description: 'Attention to detail and refusal to accept mediocrity - standards learned in service.',
  },
  {
    title: 'Community Investment',
    description: 'Veterans have already proven their commitment to serving others and their community.',
  },
];

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete home roofing solutions with premium materials and military-grade quality.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Expert commercial roofing including TPO, EPDM, and flat roof systems.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, damage, and general wear.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with industry-leading warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency restoration and insurance claim assistance.',
    href: '/services/storm-damage',
  },
  {
    icon: Medal,
    title: 'Veteran Services',
    description: 'Special programs and pricing for our fellow veterans.',
    href: '/contact',
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
  'Steele Creek',
  'Lake Norman',
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

// FAQs about veteran-owned roofing company
const faqs = [
  {
    question: 'Is Best Roofing Now really a veteran-owned business?',
    answer:
      'Yes, Best Roofing Now is a verified veteran-owned family business. Fred Turner, our co-founder, is a proud military veteran who brought the values of discipline, integrity, and service learned in uniform to our roofing company. Fred and his son James founded Best Roofing Now in 2019, building the company on the foundation of military values and family principles. We operate with the same commitment to excellence and honor that Fred learned during his military service.',
  },
  {
    question: 'Do you offer discounts for veterans and military families?',
    answer:
      'Absolutely! We are proud to offer special discounts for active duty military, veterans, and military families. Our Roofs for Veterans program provides reduced pricing on all roofing services, free comprehensive roof inspections, and priority scheduling for emergency repairs. We believe in giving back to those who have served our country. Contact us to learn more about our veteran discount program and how we can help protect your home.',
  },
  {
    question: 'What is the Roofs for Veterans program?',
    answer:
      'The Roofs for Veterans program is our way of giving back to the military community that shaped who we are. The program includes: free roof inspections for all veterans, special pricing on roofing services for military families, priority emergency service scheduling, and an annual free roof giveaway to a deserving veteran family in the Charlotte area. We created this program because we understand the sacrifices veterans and their families make, and we want to help protect their homes.',
  },
  {
    question: 'How do military values translate to roofing quality?',
    answer:
      'Military values directly translate to exceptional roofing work in several ways: Integrity means we give honest assessments and never recommend unnecessary work. Discipline means we follow proper procedures and never cut corners. Attention to detail means every shingle, flashing, and seal is inspected and installed correctly. Accountability means we stand behind our work with comprehensive warranties. Service before self means we prioritize your needs over profits. These values are not just words - they are how we operate every day.',
  },
  {
    question: 'Why should I choose a veteran-owned roofing company?',
    answer:
      'Choosing a veteran-owned roofing company means working with professionals who have demonstrated proven integrity, leadership, and commitment to service. Veterans bring unique qualities to business: unwavering work ethic, ability to perform under pressure, team-first mentality, attention to detail, and a deep sense of accountability. When you hire Best Roofing Now, you are supporting a business that gives back to the community and operates with the same values that protect our nation.',
  },
  {
    question: 'Are you locally owned and operated in Charlotte?',
    answer:
      'Yes! Best Roofing Now is 100% locally owned and operated in Charlotte, NC. We are not a franchise or a national chain - we are your neighbors. Fred and James Turner live in the Charlotte area and are invested in this community. We employ local workers, support local suppliers, and reinvest in Charlotte. When you hire us, you are supporting a true local, veteran-owned family business.',
  },
  {
    question: 'What certifications does Best Roofing Now have?',
    answer:
      'Best Roofing Now holds multiple industry certifications including: CertainTeed SELECT ShingleMaster (top tier certification), GAF Factory-Certified Contractor, Owens Corning Preferred Contractor, BBB A+ Accreditation, NC and SC Licensed Contractor, and Angi Super Service Award winner. These certifications mean we can offer industry-leading warranties and have been trained and verified by the top roofing manufacturers in North America.',
  },
  {
    question: 'How can I verify that you are a legitimate veteran-owned business?',
    answer:
      'We welcome verification of our veteran-owned status! You can: visit our About page to learn about Fred Turner\'s military service, check our BBB profile which notes our veteran-owned status, read our Google reviews where many customers mention our military values, contact us directly to speak with Fred or James, or visit our office to see our military memorabilia and certificates. We are proud of our veteran heritage and happy to discuss it with anyone.',
  },
];

export default function VeteranOwnedRoofingCompanyCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Veteran-Owned Roofing Company Charlotte NC', url: `${SITE_CONFIG.url}/veteran-owned-roofing-company-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.team.jamesAndFred}
            alt="Veteran-owned roofing company Charlotte NC - James and Fred Turner, Best Roofing Now founders"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Medal className="w-4 h-4" />
              <span className="text-sm font-semibold">Veteran-Owned & Family Operated Since 2019</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Veteran-Owned Roofing Company <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Built on Military Values. Committed to Excellence.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now was founded by Fred Turner, a proud military veteran, and his son James.
              We brought the values of integrity, discipline, and service learned in uniform to protect
              Charlotte homes. When you work with us, you work with a family that puts honor above profit.
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
                <Medal className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed & Insured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section - Fred's Military Background */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl relative z-10">
                <Image
                  src={IMAGES.team.jamesAndFred}
                  alt="Fred and James Turner - veteran-owned family roofing business Charlotte NC"
                  width={600}
                  height={700}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/10 rounded-full -z-0" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-0" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Flag className="w-4 h-4" />
                <span className="text-sm font-semibold">Our Founder&apos;s Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                From Military Service to Roofing Excellence
              </h2>
              <div className="space-y-4 text-gray">
                <p>
                  Fred Turner is a proud military veteran who served his country with distinction.
                  During his time in service, Fred learned values that would shape the rest of his
                  life: integrity, discipline, attention to detail, and the unwavering commitment
                  to completing the mission.
                </p>
                <p>
                  When Fred transitioned to civilian life, he brought these military values with him.
                  After years in the construction industry, Fred saw something troubling - too many
                  roofing contractors cutting corners, too many storm chasers taking advantage of
                  homeowners, and too many companies focused on the sale instead of the solution.
                </p>
                <p>
                  In 2019, Fred and his son James decided to build something different. They founded
                  Best Roofing Now on a simple principle: <strong className="text-dark">treat every
                  homeowner with the same integrity and respect that Fred learned in military service.</strong>
                </p>
                <p>
                  Today, Fred ensures every crew member understands military-grade quality standards.
                  His wife Shirley brings warmth and care to every customer interaction, and James
                  leads day-to-day operations with the same commitment to honesty and excellence.
                </p>
              </div>
              <div className="mt-6 p-4 bg-light rounded-lg border-l-4 border-accent">
                <p className="text-dark font-semibold italic">
                  &quot;We tell people the truth, even when it is not a sale. That is not just a
                  slogan - it is who we are. It is what military service taught me.&quot;
                </p>
                <p className="text-sm text-gray mt-2">- Fred Turner, Co-Founder & Military Veteran</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Military Values Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Our Core Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Military Values That Shape Our Business
            </h2>
            <p className="text-gray text-lg">
              The principles learned in military service guide every decision we make and every
              roof we install. These are not just marketing words - they are how we operate.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {militaryValues.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-white rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{value.title}</h3>
                <p className="text-gray text-sm mb-3">{value.description}</p>
                <p className="text-xs text-accent italic">{value.militaryConnection}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roofs for Veterans Program */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <HandHeart className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Community Program</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Roofs for Veterans Program
            </h2>
            <p className="text-white/80 text-lg">
              Our commitment to fellow veterans goes beyond business. Through the Roofs for
              Veterans program, we give back to those who have served our country.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roofsForVeteransProgram.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-xl text-center"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-white/90 mb-6 text-lg">
              Are you a veteran or military family member? Contact us to learn about your special benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Veteran Discount
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-accent hover:bg-accent-dark text-white"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Support Veteran-Owned Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Handshake className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Support Local Veterans</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose a Veteran-Owned Business?
              </h2>
              <p className="text-gray text-lg mb-6">
                When you hire a veteran-owned business, you are not just getting a service -
                you are supporting families who have already demonstrated their commitment to
                our community and country.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {whySupportVeterans.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-dark">{item.title}</h4>
                      <p className="text-sm text-gray">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Veteran-owned roofing company Charlotte NC - completed project"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">{SITE_CONFIG.roofsInstalled}+</p>
                  <p className="text-sm text-gray">Roofs Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family-Owned Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Users className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Family Business</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Family-Owned, Veteran-Operated
              </h2>
              <p className="text-gray text-lg">
                Best Roofing Now is not just veteran-owned - we are a true family business
                dedicated to serving Charlotte.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Medal className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-dark mb-2">Fred Turner</h3>
                  <p className="text-accent font-semibold text-sm mb-2">Co-Founder & Military Veteran</p>
                  <p className="text-gray text-sm">
                    Proud veteran who brought military values of discipline and integrity to our company.
                    Ensures every roof meets military-grade quality standards.
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-dark mb-2">James Turner</h3>
                  <p className="text-accent font-semibold text-sm mb-2">Co-Founder & CEO</p>
                  <p className="text-gray text-sm">
                    Leads daily operations with the same values his father learned in service.
                    Committed to honest assessments and exceptional customer service.
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-dark mb-2">Shirley Turner</h3>
                  <p className="text-accent font-semibold text-sm mb-2">The Heart of Our Business</p>
                  <p className="text-gray text-sm">
                    Ensures every customer is treated like family. Brings warmth and care
                    to every interaction with our customers.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-dark font-semibold italic text-lg mb-2">
                  &quot;When you call Best Roofing Now, you talk to family - not a call center.
                  That is how we have always done it, and that is how it will always be.&quot;
                </p>
                <p className="text-sm text-gray">- The Turner Family</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roofing Services with Military Precision
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to complete replacements, our veteran-led team handles all your
              roofing needs with the quality and attention to detail you deserve.
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

      {/* Charlotte Community Commitment */}
      <section className="section bg-accent text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our Commitment to Charlotte
              </h2>
              <div className="space-y-4 text-white/90">
                <p>
                  Charlotte is not just where we work - it is our home. As a veteran-owned local
                  business, we are deeply invested in this community. We hire local workers, support
                  local suppliers, and give back through programs like Roofs for Veterans.
                </p>
                <p>
                  We are members of the Lake Norman Chamber of Commerce and active participants in
                  community events throughout the Charlotte metro area. When you hire Best Roofing Now,
                  you are keeping your dollars local and supporting a family that gives back.
                </p>
                <p>
                  Our commitment extends beyond business. We believe in the Charlotte community the
                  same way we believed in our country during military service. We are here to protect
                  Charlotte homes with the same dedication and integrity.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="btn bg-white !text-accent hover:bg-white/90"
                >
                  Learn Our Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/projects"
                  className="btn bg-white/10 text-white hover:bg-white/20 border border-white/30"
                >
                  View Our Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/10 rounded-xl text-center">
                <p className="text-4xl font-bold text-white">{SITE_CONFIG.yearsInBusiness}+</p>
                <p className="text-sm text-white/80">Years Serving Charlotte</p>
              </div>
              <div className="p-6 bg-white/10 rounded-xl text-center">
                <p className="text-4xl font-bold text-white">{SITE_CONFIG.roofsInstalled}+</p>
                <p className="text-sm text-white/80">Roofs Completed</p>
              </div>
              <div className="p-6 bg-white/10 rounded-xl text-center">
                <p className="text-4xl font-bold text-white">{SITE_CONFIG.googleReviewCount}+</p>
                <p className="text-sm text-white/80">5-Star Reviews</p>
              </div>
              <div className="p-6 bg-white/10 rounded-xl text-center">
                <p className="text-4xl font-bold text-white">A+</p>
                <p className="text-sm text-white/80">BBB Rating</p>
              </div>
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
              Serving All of Charlotte & Surrounding Areas
            </h2>
            <p className="text-gray text-lg">
              Our veteran-owned roofing company proudly serves homeowners throughout the Greater Charlotte metro.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-white rounded-xl p-6">
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

      {/* ServiceCityLinks Component */}
      <ServiceCityLinks
        city="Charlotte"
        citySlug="charlotte-nc"
        title="Roofing Services from Our Veteran-Owned Team"
        subtitle="Quality roofing services delivered with military precision and family values."
      />

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Work Speaks for Itself
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects - each completed with veteran attention to detail.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Veteran-owned roofing company Charlotte - completed residential project"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Military precision roofing Charlotte - CertainTeed installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Veteran roofer Charlotte NC - quality workmanship"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project5}
                alt="Family veteran-owned roofer Charlotte - completed project"
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

      {/* Testimonial Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              What Our Customers Say
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-8 h-8 text-accent fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-dark mb-6 italic">
                &quot;I specifically chose Best Roofing Now because they are veteran-owned.
                As a veteran myself, I trust the values that military service instills.
                Fred and James did not disappoint. They were honest about what my roof
                needed, showed up on time, and delivered exceptional work. This is how
                business should be done.&quot;
              </blockquote>
              <p className="text-gray font-semibold">
                - Michael R., Charlotte Homeowner & U.S. Army Veteran
              </p>
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
                Veteran-Owned Roofing Company FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about working with our veteran-owned roofing company.
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

      {/* Final CTA */}
      <CTASection
        title="Ready to Work with a Veteran-Owned Roofing Company?"
        subtitle="Experience the difference of working with a team built on military values. Get a free, no-obligation estimate from our veteran-owned family business."
      />
    </>
  );
}
