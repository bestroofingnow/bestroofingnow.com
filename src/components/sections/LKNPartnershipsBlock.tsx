import { Award, Users, Heart, Home } from 'lucide-react';

interface LKNPartnershipsBlockProps {
  city?: string;
  className?: string;
}

const PARTNERS = [
  {
    icon: Award,
    name: 'Lake Norman Chamber of Commerce',
    description:
      'Active member supporting local business growth and community development across all Lake Norman municipalities.',
    href: 'https://business.lakenormanchamber.org/directory/details/best-roofing-now-4317292',
    cta: 'View Our Chamber Profile',
  },
  {
    icon: Users,
    name: 'LKN Small Business Network',
    description:
      'Member of lknsbn.com — a trusted network of Lake Norman small businesses committed to serving the local community with excellence.',
    href: 'https://lknsbn.com',
    cta: 'Visit LKN SBN',
  },
  {
    icon: Heart,
    name: 'LKN Connect Community',
    description:
      'Active participant in the LKN Connect Community, connecting with homeowners and businesses across the Lake Norman region.',
    href: 'https://lknconnect.com',
    cta: 'Find Us on LKN Connect',
  },
  {
    icon: Home,
    name: 'Keller Williams Lake Norman',
    description:
      'Preferred roofing contractor for Keller Williams Lake Norman real estate agents, trusted for pre-listing inspections and buyer-requested roof work.',
    href: null,
    cta: null,
  },
] as const;

export function LKNPartnershipsBlock({ city = 'Lake Norman', className = '' }: LKNPartnershipsBlockProps) {
  return (
    <section className={`section bg-light ${className}`}>
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Deeply Rooted in the {city} Community
            </h2>
            <p className="text-gray text-lg max-w-3xl mx-auto">
              Best Roofing Now is not just another Charlotte company that services {city}. We are formal members
              of the Lake Norman business community, with active partnerships that reflect our commitment to this area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PARTNERS.map((partner) => {
              const Icon = partner.icon;
              return (
                <div key={partner.name} className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
                  <Icon className="w-10 h-10 text-primary flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-dark">{partner.name}</h3>
                    <p className="text-gray text-sm mt-1">{partner.description}</p>
                    {partner.href && partner.cta && (
                      <a
                        href={partner.href}
                        target="_blank"
                        rel="noopener"
                        className="text-primary text-sm font-semibold hover:text-accent mt-2 inline-block"
                      >
                        {partner.cta}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
