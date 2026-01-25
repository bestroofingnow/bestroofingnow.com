'use client';

import Image from 'next/image';
import { Quote, Heart, MapPin, Shield } from 'lucide-react';

interface FamilyMember {
  name: string;
  role: string;
  quote: string;
  background: string;
  image?: string;
}

const turnerFamily: FamilyMember[] = [
  {
    name: 'James Turner',
    role: 'Founder & Owner',
    quote:
      "I started Best Roofing Now because I saw too many homeowners getting taken advantage of by out-of-town storm chasers. After 15 years in Charlotte, this is my home. When I put my name on a roof, it means something. We treat every customer like family because that's how we were raised.",
    background:
      'Originally from Alabama, James has called Charlotte home for over 15 years. His military service taught him the value of integrity, precision, and never leaving a job half-done.',
  },
  {
    name: 'Fred Turner',
    role: 'Operations Manager',
    quote:
      "In Alabama, a man's word is his bond. That's how I raised my son, and that's how we run this company. When we tell you we'll be there at 8am, we're there at 7:45. When we say a repair will last, it lasts. No excuses, just results.",
    background:
      'Fred joined his son in Charlotte in 2022, bringing decades of hands-on experience and old-school work ethic to the team.',
  },
  {
    name: 'Shirley Turner',
    role: 'Customer Relations',
    quote:
      "I always tell our customers - if you wouldn't want it on your mama's house, don't put it on anyone else's. That's our standard. Every homeowner who calls us becomes part of our extended family, and we take care of family.",
    background:
      'Shirley moved to Charlotte with Fred in 2022 and ensures every customer feels heard, valued, and cared for throughout their roofing project.',
  },
];

interface MeetTheFamilyProps {
  variant?: 'full' | 'compact' | 'single';
  className?: string;
}

export function MeetTheFamily({ variant = 'full', className = '' }: MeetTheFamilyProps) {
  if (variant === 'single') {
    // Show just James's quote for compact sections
    const james = turnerFamily[0];
    return (
      <div className={`bg-primary/5 rounded-xl p-6 ${className}`}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Quote className="w-8 h-8 text-primary/30" />
          </div>
          <div>
            <p className="text-gray italic mb-4">&ldquo;{james.quote}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">JT</span>
              </div>
              <div>
                <p className="font-bold text-dark">{james.name}</p>
                <p className="text-sm text-gray">{james.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <section className={`py-12 bg-light ${className}`}>
        <div className="container">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-semibold">Family-Owned & Operated</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              A Family Business Built on Trust
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <Quote className="w-10 h-10 text-primary/20 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray italic mb-4">
                    &ldquo;We&apos;re not just roofers - we&apos;re your neighbors. When a storm hits Charlotte,
                    our family is out there helping our community recover. That&apos;s what Southern hospitality
                    is all about.&rdquo;
                  </p>
                  <p className="font-semibold text-dark">— The Turner Family</p>
                  <p className="text-sm text-gray">James, Fred & Shirley</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Full variant
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-semibold">Family-Owned & Operated</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Meet the Turner Family
          </h2>
          <p className="text-gray text-lg">
            Three generations of Southern values, now serving Charlotte. We believe in honest work,
            fair prices, and treating every customer like family.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {turnerFamily.map((member) => (
            <div
              key={member.name}
              className="bg-light rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />

              <div className="relative">
                {/* Avatar/Image */}
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-primary">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  )}
                </div>

                {/* Name & Role */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-dark">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>

                {/* Quote */}
                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-primary/20 absolute -top-2 -left-1" />
                  <p className="text-gray italic pl-6 text-sm leading-relaxed">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>

                {/* Background */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray">{member.background}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 text-sm text-gray">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Originally from Alabama
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Veteran-Owned
            </span>
            <span className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-accent" />
              Serving Charlotte Since 2020
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Re-export TURNER_NOTES from the lib file for backwards compatibility
export { TURNER_NOTES } from '@/lib/turner-family';
