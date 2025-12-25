import { Metadata } from 'next';
import NextImage from 'next/image';
import Link from 'next/link';
import {
  Shield,
  Heart,
  Award,
  Users,
  Star,
  CheckCircle,
  Phone,
  ArrowRight
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES, PAGE_IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'About Us | Veteran-Owned Roofing Company Charlotte NC',
  description:
    'Best Roofing Now is a veteran-owned, family-operated roofing company in Charlotte NC. Founded by James and his dad Fred with military values of integrity and service.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

const values = [
  {
    icon: Shield,
    title: 'Integrity First',
    description:
      'We tell the truth, even when it means losing a sale. Your trust matters more than any contract.',
  },
  {
    icon: Heart,
    title: 'Service Before Self',
    description:
      'A value learned in the military and applied to every roof. Your home is our mission.',
  },
  {
    icon: Award,
    title: 'Excellence in All We Do',
    description:
      'From the first phone call to the final inspection, we hold ourselves to the highest standards.',
  },
  {
    icon: Users,
    title: 'Family Values',
    description:
      'We treat your home like it belongs to family. Because to us, every customer becomes family.',
  },
];

const milestones = [
  {
    year: '2019',
    title: 'Company Founded',
    description: 'James and his dad Fred started Best Roofing Now with one truck and a commitment to honest service.',
  },
  {
    year: '2020',
    title: 'BBB Accreditation',
    description: 'Earned BBB A+ rating within our first year, reflecting our commitment to customer satisfaction.',
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description: 'Grew our team to serve more Charlotte families while maintaining our quality standards.',
  },
  {
    year: '2022',
    title: 'CertainTeed & GAF Certified',
    description: 'Achieved manufacturer certifications to offer industry-leading warranties.',
  },
  {
    year: '2023',
    title: 'Angi Super Service Award',
    description: 'Recognized for exceptional service and customer satisfaction.',
  },
  {
    year: '2024',
    title: '5 Years Strong',
    description: 'Celebrated 5 years serving Charlotte with a ribbon cutting ceremony in Lake Norman.',
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'About Us', url: `${SITE_CONFIG.url}/about` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Veteran-Founded & Family Owned</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              We Tell People the Truth, Even When It Is Not a Sale
            </h1>
            <p className="text-xl text-white/90">
              That is not just a slogan. It is who we are. Best Roofing Now was built on
              military values and family principles.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story: From Military Service to Roofing Excellence
              </h2>
              <div className="space-y-4 text-gray">
                <p>
                  Best Roofing Now started the way many great businesses do: with a father
                  and son, a shared vision, and an unwavering commitment to doing things right.
                </p>
                <p>
                  Fred, a proud military veteran, brought the values of discipline, integrity, and
                  service he learned in uniform. His son James brought fresh energy, business know-how,
                  and a shared commitment to honest work.
                </p>
                <p>
                  Together, they saw something wrong with the roofing industry. Too many
                  contractors cutting corners. Too many storm chasers taking advantage of
                  homeowners. Too many companies focused on the sale instead of the solution.
                </p>
                <p className="font-semibold text-dark">
                  They decided to build something different: a roofing company that treats
                  customers like family and tells the truth, even when that truth is not profitable.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl relative z-10">
                <NextImage
                  src={IMAGES.hero.hero5}
                  alt="Best Roofing Now team at work"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/10 rounded-full -z-0" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* The Truth Story */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              The Story That Defines Us
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-8 h-8 text-accent fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-dark mb-6 italic">
                &quot;James came out and looked at my roof. Three other companies said I needed
                a full replacement. James told me I only needed a few repairs and showed me
                exactly why. He could have made thousands more, but he chose to be honest.
                I laughed, then I cried a little. That is the kind of company I want to work with.&quot;
              </blockquote>
              <p className="text-gray font-semibold">
                This is who we are. Every inspection. Every estimate. Every roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-gray text-lg">
              Values learned in military service, applied to every roof we touch.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{value.title}</h3>
                <p className="text-gray text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-gray text-lg">
              From our first roof to becoming Charlotte&apos;s trusted roofing company.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="text-sm text-accent font-semibold mb-1">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">{milestone.title}</h3>
                    <p className="text-gray">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certifications & Awards
            </h2>
            <p className="text-gray text-lg">
              Recognized for excellence by industry leaders and customer advocacy groups.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-md text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark mb-1">BBB A+ Rated</h3>
              <p className="text-sm text-gray">Better Business Bureau</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark mb-1">CertainTeed Certified</h3>
              <p className="text-sm text-gray">SELECT ShingleMaster</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark mb-1">GAF Certified</h3>
              <p className="text-sm text-gray">Factory-Certified Contractor</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark mb-1">Angi Super Service</h3>
              <p className="text-sm text-gray">Award Winner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Why Charlotte Homeowners Choose Us
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span>Veteran-founded by Fred, with military values of integrity and service</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span>Family business: when you call, you talk to real people who care</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span>We educate first, sell second: no high-pressure sales tactics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span>BBB A+ rated with 5-star Google reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span>Insurance claim experts who fight to maximize your claim</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span>24/7 emergency service for when storms do not wait</span>
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-left">
              <div className="bg-white/10 rounded-2xl p-8">
                <p className="text-2xl font-bold mb-4">Ready to Work with a Roofing Company You Can Trust?</p>
                <p className="text-white/80 mb-6">
                  Get a free, no-obligation roof inspection and honest assessment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href={`tel:${SITE_CONFIG.phoneClean}`}
                    className="btn bg-accent hover:bg-accent-dark text-white"
                  >
                    <Phone className="w-5 h-5" />
                    {SITE_CONFIG.phone}
                  </a>
                  <Link href="/contact" className="btn bg-white text-primary hover:bg-light">
                    Request Free Estimate
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
