// Team member data for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
// Used for About page, schema markup, and trust signals throughout the site

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  shortBio: string;
  experience: string;
  certifications: string[];
  expertise: string[];
  image?: string;
  linkedIn?: string;
  isFounder: boolean;
  isVeteran: boolean;
}

export interface Certification {
  name: string;
  fullName: string;
  issuer: string;
  description: string;
  year: string;
  verificationUrl?: string;
  benefits: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'james-turner',
    name: 'James Turner',
    role: 'Co-Founder & CEO',
    title: 'Co-Founder & Chief Executive Officer',
    bio: 'James co-founded Best Roofing Now with his father Fred in 2019, bringing fresh business acumen and a commitment to honest service to the roofing industry. Growing up, James learned the values of hard work and integrity from his veteran father. After seeing too many homeowners taken advantage of by storm chasers and dishonest contractors, James and Fred decided to build something different—a roofing company that treats customers like family and tells the truth, even when it is not profitable. James oversees all business operations, customer relations, and ensures every project meets the company\'s high standards. His hands-on approach means customers often work directly with him from inspection to completion.',
    shortBio: 'Co-founded Best Roofing Now with his father Fred, bringing business expertise and a commitment to honest, family-focused service.',
    experience: '5+ years in roofing',
    certifications: [
      'CertainTeed SELECT ShingleMaster',
      'GAF Factory-Certified Contractor',
      'NC General Contractor License',
      'OSHA 30-Hour Safety Certification',
    ],
    expertise: [
      'Insurance claim negotiation',
      'Customer relations',
      'Project management',
      'Residential roofing',
      'Storm damage assessment',
    ],
    linkedIn: 'https://www.linkedin.com/in/bestroofingnow/',
    isFounder: true,
    isVeteran: false,
  },
  {
    id: 'fred-turner',
    name: 'Fred Turner',
    role: 'Co-Founder',
    title: 'Co-Founder',
    bio: 'Fred is a proud military veteran who brought the values of discipline, integrity, and service learned in uniform to Best Roofing Now. His military background instilled a commitment to doing things right the first time, never cutting corners, and always putting the mission—protecting your home—first. Fred\'s decades of experience and steady leadership provide the foundation for the company\'s operations. He personally trains crew members on proper installation techniques and ensures every roof meets military-grade standards of quality. Fred believes every homeowner deserves to be treated with respect and honesty, values he learned through his service to the country.',
    shortBio: 'Military veteran who brought discipline, integrity, and service values to Best Roofing Now. Ensures every project meets the highest quality standards.',
    experience: '20+ years in construction',
    certifications: [
      'Military Service Veteran',
      'CertainTeed Master Shingle Applicator',
      'OSHA Safety Certified',
    ],
    expertise: [
      'Quality control',
      'Crew training',
      'Installation oversight',
      'Safety protocols',
      'Commercial roofing',
    ],
    isFounder: true,
    isVeteran: true,
  },
  {
    id: 'banning-hill',
    name: 'Banning Hill',
    role: 'Project Manager',
    title: 'Senior Project Manager',
    bio: 'Banning manages roofing projects from initial inspection through final completion, ensuring every customer receives exceptional service. Known for his quick response times and thorough communication, Banning has become a favorite among Charlotte homeowners navigating insurance claims. He specializes in storm damage assessment and works directly with insurance adjusters to advocate for fair settlements. Banning\'s attention to detail and commitment to customer satisfaction have earned numerous five-star reviews and repeat referrals.',
    shortBio: 'Senior Project Manager known for exceptional communication and expertise in storm damage assessment and insurance claims.',
    experience: '7+ years in roofing',
    certifications: [
      'Haag Certified Roof Inspector',
      'CertainTeed Certified',
      'GAF Certified',
    ],
    expertise: [
      'Storm damage assessment',
      'Insurance adjuster relations',
      'Project coordination',
      'Customer communication',
      'Drone roof inspections',
    ],
    isFounder: false,
    isVeteran: false,
  },
];

export const COMPANY_CERTIFICATIONS: Certification[] = [
  {
    name: 'BBB A+ Accredited',
    fullName: 'Better Business Bureau A+ Accreditation',
    issuer: 'Better Business Bureau',
    description: 'BBB A+ rating reflects our commitment to resolving customer concerns and maintaining high standards of business ethics. We have maintained this rating since 2020.',
    year: '2020',
    verificationUrl: 'https://www.bbb.org/us/nc/charlotte/profile/roofing-contractors/best-roofing-now-0473-908763',
    benefits: [
      'Verified business practices',
      'Commitment to customer satisfaction',
      'Transparent complaint resolution',
      'Ethical business operations',
    ],
  },
  {
    name: 'CertainTeed SELECT ShingleMaster',
    fullName: 'CertainTeed SELECT ShingleMaster™',
    issuer: 'CertainTeed Corporation',
    description: 'SELECT ShingleMaster status represents the top tier of CertainTeed certification, achieved by demonstrating excellence in installation, business practices, and customer service. Only a small percentage of roofing contractors achieve this level.',
    year: '2022',
    verificationUrl: 'https://www.certainteed.com/profiles/bestroofingnowllc',
    benefits: [
      'Access to extended warranty options',
      'SureStart PLUS™ 4-Star and 5-Star protection',
      'Factory-trained installation crews',
      'Annual recertification requirements',
    ],
  },
  {
    name: 'GAF Factory-Certified',
    fullName: 'GAF Factory-Certified Contractor',
    issuer: 'GAF (North America\'s Largest Roofing Manufacturer)',
    description: 'GAF Factory-Certified status means we have been trained and certified by GAF on proper installation techniques, allowing us to offer enhanced warranty options on GAF products.',
    year: '2022',
    benefits: [
      'Golden Pledge® Limited Warranty eligibility',
      'Factory-trained on GAF systems',
      'Access to premium GAF products',
      'Annual certification renewal',
    ],
  },
  {
    name: 'Owens Corning Preferred Contractor',
    fullName: 'Owens Corning Roofing Preferred Contractor',
    issuer: 'Owens Corning',
    description: 'As an Owens Corning Preferred Contractor, we meet strict standards for professionalism, reliability, and installation quality. This allows us to offer Platinum Protection warranties.',
    year: '2023',
    benefits: [
      'Platinum Protection warranty eligibility',
      'Access to full Owens Corning product line',
      'Training on SureNail Technology',
      'Preferred contractor network benefits',
    ],
  },
  {
    name: 'Angi Super Service Award',
    fullName: 'Angi Super Service Award',
    issuer: 'Angi (formerly Angie\'s List)',
    description: 'The Super Service Award recognizes businesses that maintain superior service ratings and reviews from customers on the Angi platform.',
    year: '2023',
    benefits: [
      'Verified customer reviews',
      'Consistent high ratings',
      'Recognition for service excellence',
    ],
  },
  {
    name: 'NC Licensed General Contractor',
    fullName: 'North Carolina General Contractor License',
    issuer: 'North Carolina Licensing Board for General Contractors',
    description: 'Full licensing ensures we meet all state requirements for operating as a roofing contractor in North Carolina, including insurance, bonding, and examination requirements.',
    year: '2019',
    benefits: [
      'State-verified qualifications',
      'Required insurance coverage',
      'Bonding protection for customers',
      'Compliance with NC building codes',
    ],
  },
  {
    name: 'SC Licensed Contractor',
    fullName: 'South Carolina Residential Builder License',
    issuer: 'South Carolina Department of Labor, Licensing and Regulation',
    description: 'Licensed to perform roofing work in South Carolina, allowing us to serve Fort Mill, Rock Hill, Indian Land, and other SC communities.',
    year: '2021',
    benefits: [
      'Legal operation in South Carolina',
      'SC insurance and bonding compliance',
      'Understanding of SC building codes',
    ],
  },
];

// Company values for E-E-A-T signaling
export const COMPANY_VALUES = [
  {
    title: 'Integrity First',
    description: 'We tell the truth, even when it means losing a sale. If repairs will work, that is what we recommend. Your trust matters more than any contract.',
    icon: 'Shield',
  },
  {
    title: 'Service Before Self',
    description: 'A value learned in military service and applied to every roof. Your home is our mission. We do not rest until the job is done right.',
    icon: 'Heart',
  },
  {
    title: 'Excellence in All We Do',
    description: 'From the first phone call to the final inspection, we hold ourselves to the highest standards. Good enough is never good enough.',
    icon: 'Award',
  },
  {
    title: 'Family Values',
    description: 'We treat your home like it belongs to family. Because to us, every customer becomes family. That is how Dad raised us.',
    icon: 'Users',
  },
];

// Get team member by ID
export function getTeamMember(id: string): TeamMember | undefined {
  return TEAM_MEMBERS.find((member) => member.id === id);
}

// Get all founders
export function getFounders(): TeamMember[] {
  return TEAM_MEMBERS.filter((member) => member.isFounder);
}

// Get all veterans
export function getVeterans(): TeamMember[] {
  return TEAM_MEMBERS.filter((member) => member.isVeteran);
}
