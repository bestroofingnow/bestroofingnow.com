import { SITE_CONFIG, SERVICES, LOCATIONS, SHINGLE_PRODUCTS, SPEAKABLE_CONTENT, VOICE_SEARCH_FAQS } from '@/lib/constants';

// Local Business Schema for the main site
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    foundingDate: SITE_CONFIG.founded,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    image: [
      `${SITE_CONFIG.url}/images/logo.png`,
      `${SITE_CONFIG.url}/images/hero-roofing.jpg`,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${SITE_CONFIG.address.street} ${SITE_CONFIG.address.suite}`,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE_CONFIG.googleRating,
      reviewCount: SITE_CONFIG.googleReviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Check', 'Financing'],
    currenciesAccepted: 'USD',
    areaServed: LOCATIONS.map((loc) => ({
      '@type': 'City',
      name: `${loc.city}, ${loc.state}`,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing Services',
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
    sameAs: Object.values(SITE_CONFIG.social),
    slogan: SITE_CONFIG.tagline,
    knowsAbout: [
      'Roof Repair',
      'Roof Replacement',
      'Roof Installation',
      'Commercial Roofing',
      'Residential Roofing',
      'Storm Damage Repair',
      'Insurance Claims',
      'Gutter Installation',
      'Siding Installation',
    ],
    isAccreditedBy: [
      { '@type': 'Organization', name: 'Better Business Bureau' },
      { '@type': 'Organization', name: 'CertainTeed' },
      { '@type': 'Organization', name: 'GAF' },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service Schema for individual service pages
interface ServiceSchemaProps {
  service: {
    title: string;
    description: string;
    slug: string;
  };
}

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.url}/services/${service.slug}/#service`,
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'RoofingContractor',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
    },
    areaServed: LOCATIONS.map((loc) => ({
      '@type': 'City',
      name: `${loc.city}, ${loc.state}`,
    })),
    serviceType: service.title,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE_CONFIG.googleRating,
      reviewCount: SITE_CONFIG.googleReviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Services`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Free Inspection',
            description: `Free ${service.title.toLowerCase()} inspection and estimate`,
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Location Schema for location pages - Enhanced with ratings and business details
interface LocationSchemaProps {
  location: {
    city: string;
    state: string;
    slug: string;
    county?: string;
  };
}

export function LocationSchema({ location }: LocationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `${SITE_CONFIG.url}/locations/${location.slug}/#localbusiness`,
    name: `${SITE_CONFIG.name} - ${location.city}, ${location.state}`,
    description: `Professional roofing services in ${location.city}, ${location.state}. Expert roof repair, replacement, and installation. BBB A+ rated, 5-star reviews. Free inspections and estimates.`,
    url: `${SITE_CONFIG.url}/locations/${location.slug}`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${SITE_CONFIG.address.street} ${SITE_CONFIG.address.suite}`,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE_CONFIG.googleRating,
      reviewCount: SITE_CONFIG.googleReviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Check', 'Financing'],
    currenciesAccepted: 'USD',
    parentOrganization: {
      '@type': 'RoofingContractor',
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    areaServed: {
      '@type': 'City',
      name: `${location.city}, ${location.state}`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Roofing Services in ${location.city}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Repair',
            description: `Professional roof repair services in ${location.city}`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Replacement',
            description: `Complete roof replacement in ${location.city}`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Storm Damage Repair',
            description: `Emergency storm damage repair in ${location.city}`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Free Roof Inspection',
            description: `Complimentary roof inspections in ${location.city}`,
          },
        },
      ],
    },
    knowsAbout: [
      'Roof Repair',
      'Roof Replacement',
      'Storm Damage',
      'Insurance Claims',
      'Residential Roofing',
      'Commercial Roofing',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema
interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema
interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Blog Post Schema
interface ArticleSchemaProps {
  post: {
    title: string;
    description: string;
    slug: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
    image?: string;
    wordCount?: number;
    readingTime?: number;
  };
}

export function ArticleSchema({ post }: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/logo.png`,
      },
    },
    image: post.image || `${SITE_CONFIG.url}/images/blog-default.jpg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
    wordCount: post.wordCount || undefined,
    timeRequired: post.readingTime ? `PT${post.readingTime}M` : undefined,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    about: {
      '@type': 'Thing',
      name: 'Roofing',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// WebSite Schema for sitelinks search box (AEO enhancement)
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      '@type': 'RoofingContractor',
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// HowTo Schema for service process (AEO enhancement)
export function HowToGetRoofEstimateSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Get a Free Roof Inspection in Charlotte NC',
    description: 'Follow these simple steps to schedule your free roof inspection with Best Roofing Now, Charlotte\'s top-rated roofing company.',
    totalTime: 'PT5M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0',
    },
    supply: [],
    tool: [],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Contact Us',
        text: `Call us at ${SITE_CONFIG.phone} or fill out our online form to request your free inspection.`,
        url: `${SITE_CONFIG.url}/contact`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Schedule Your Inspection',
        text: 'Our team will contact you within 24 hours to schedule a convenient time for your free roof inspection.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Receive Expert Assessment',
        text: 'A certified roofing expert will inspect your roof and provide a detailed report with photos and recommendations.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Get Your Free Estimate',
        text: 'Receive a transparent, no-obligation estimate for any recommended repairs or replacement.',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Special Offer Schema for free inspections (AEO/Conversion enhancement)
export function FreeInspectionOfferSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    '@id': `${SITE_CONFIG.url}/#free-inspection-offer`,
    name: 'Free Roof Inspection',
    description: 'Get a comprehensive roof inspection at no cost. Our certified experts will assess your roof condition, identify any issues, and provide a detailed report with photos.',
    url: `${SITE_CONFIG.url}/contact`,
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    validFrom: '2025-01-01',
    priceValidUntil: '2026-12-31',
    itemOffered: {
      '@type': 'Service',
      name: 'Professional Roof Inspection',
      description: 'Complete roof assessment including shingle condition, flashing, gutters, ventilation, and structural integrity check.',
      provider: {
        '@type': 'RoofingContractor',
        '@id': `${SITE_CONFIG.url}/#organization`,
      },
    },
    offeredBy: {
      '@type': 'RoofingContractor',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
    },
    areaServed: {
      '@type': 'City',
      name: 'Charlotte, NC',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Review Schema for individual reviews (AEO enhancement)
export function ReviewsSchema() {
  const reviews = [
    {
      author: 'Sarah M.',
      rating: 5,
      text: 'We dealt with Banning and James both were quick to respond and extremely helpful. They were able to get the insurance company to cover all the repairs and a whole new roof.',
      date: '2024-10-15',
    },
    {
      author: 'Mike T.',
      rating: 5,
      text: 'Best Roofing Now is exactly what their name says - the best! James was honest about what we needed and did not try to upsell us.',
      date: '2024-09-22',
    },
    {
      author: 'Jennifer L.',
      rating: 5,
      text: 'After a bad storm damaged our roof, we called several companies. Best Roofing Now was the only one who did not try to scare us into buying more than we needed.',
      date: '2024-08-18',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.text,
      datePublished: review.date,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE_CONFIG.googleRating,
      reviewCount: SITE_CONFIG.googleReviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Professional Service Schema (AEO enhancement for voice search)
export function ProfessionalServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_CONFIG.url}/#professionalservice`,
    name: SITE_CONFIG.name,
    description: 'Professional roofing contractor serving Charlotte NC and surrounding areas. Specializing in residential and commercial roof repair, replacement, and installation.',
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${SITE_CONFIG.address.street} ${SITE_CONFIG.address.suite}`,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: SITE_CONFIG.geo.latitude,
        longitude: SITE_CONFIG.geo.longitude,
      },
      geoRadius: '80467', // 50 miles in meters
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE_CONFIG.googleRating,
      reviewCount: SITE_CONFIG.googleReviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'BBB A+ Accreditation',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Better Business Bureau',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'CertainTeed Certified Contractor',
        recognizedBy: {
          '@type': 'Organization',
          name: 'CertainTeed',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Warranty Schema for roofing products and services
interface WarrantySchemaProps {
  warrantyType: 'manufacturer' | 'workmanship' | 'extended';
  productName?: string;
}

export function WarrantySchema({ warrantyType, productName }: WarrantySchemaProps) {
  const warranties = {
    manufacturer: {
      name: 'Manufacturer Material Warranty',
      description: 'Premium roofing materials from CertainTeed, GAF, and Owens Corning include manufacturer warranties up to 50 years covering material defects.',
      duration: 'P50Y',
      warrantyScope: {
        '@type': 'WarrantyScope',
        warrantyScope: 'Material defects and premature wear',
      },
    },
    workmanship: {
      name: 'Best Roofing Now Workmanship Warranty',
      description: 'Our workmanship warranty covers installation quality and labor. We stand behind our work and will repair any issues resulting from installation.',
      duration: 'P10Y',
      warrantyScope: {
        '@type': 'WarrantyScope',
        warrantyScope: 'Installation quality and labor',
      },
    },
    extended: {
      name: 'Extended System Warranty',
      description: 'As certified contractors, we offer enhanced warranty options including GAF Golden Pledge (50 years + 25 years workmanship) and CertainTeed SureStart PLUS (5-Star protection).',
      duration: 'P50Y',
      warrantyScope: {
        '@type': 'WarrantyScope',
        warrantyScope: 'Complete roofing system including materials and labor',
      },
    },
  };

  const warranty = warranties[warrantyType];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WarrantyPromise',
    name: warranty.name,
    description: warranty.description,
    durationOfWarranty: warranty.duration,
    warrantyScope: warranty.warrantyScope,
    itemOffered: productName ? {
      '@type': 'Product',
      name: productName,
    } : {
      '@type': 'Service',
      name: 'Roofing Installation',
      provider: {
        '@type': 'RoofingContractor',
        '@id': `${SITE_CONFIG.url}/#organization`,
      },
    },
    seller: {
      '@type': 'RoofingContractor',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Combined Warranty Schema for warranty page
export function AllWarrantiesSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Roofing Warranties by Best Roofing Now',
    description: 'Comprehensive warranty options for roofing services including manufacturer, workmanship, and extended system warranties.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'WarrantyPromise',
          name: 'GAF Golden Pledge® Warranty',
          description: '50-year non-prorated material warranty plus 25-year workmanship coverage. The best warranty in the industry, available only through GAF Master Elite contractors.',
          durationOfWarranty: 'P50Y',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'WarrantyPromise',
          name: 'CertainTeed SureStart PLUS™ 5-Star',
          description: '50-year material warranty with 25-year SureStart protection and 20-year StreakFighter algae resistance warranty.',
          durationOfWarranty: 'P50Y',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'WarrantyPromise',
          name: 'Owens Corning Platinum Protection',
          description: 'Lifetime limited warranty on shingles plus lifetime workmanship coverage from Owens Corning Platinum Preferred Contractors.',
          durationOfWarranty: 'P50Y',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'WarrantyPromise',
          name: 'Best Roofing Now Workmanship Warranty',
          description: 'Our 10-year workmanship warranty covers all aspects of installation. We stand behind our work 100%.',
          durationOfWarranty: 'P10Y',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Person Schema for team members (E-E-A-T enhancement)
interface PersonSchemaProps {
  person: {
    name: string;
    role: string;
    description: string;
    expertise?: string[];
    certifications?: string[];
    linkedIn?: string;
    image?: string;
  };
}

export function PersonSchema({ person }: PersonSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.role,
    description: person.description,
    worksFor: {
      '@type': 'RoofingContractor',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
    },
    knowsAbout: person.expertise || [
      'Roofing',
      'Roof Repair',
      'Roof Replacement',
      'Storm Damage',
    ],
    hasCredential: person.certifications?.map(cert => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: cert,
    })),
    sameAs: person.linkedIn ? [person.linkedIn] : undefined,
    image: person.image,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Enhanced Organization Schema with E-E-A-T signals
export function EnhancedOrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    foundingDate: SITE_CONFIG.founded,
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Charlotte',
        addressRegion: 'NC',
        addressCountry: 'US',
      },
    },
    founder: [
      {
        '@type': 'Person',
        name: 'James Turner',
        jobTitle: 'Co-Founder & CEO',
      },
      {
        '@type': 'Person',
        name: 'Fred Turner',
        jobTitle: 'Co-Founder',
        description: 'Military veteran',
      },
    ],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 25,
    },
    slogan: 'We Tell People the Truth, Even When It Is Not a Sale',
    ethicsPolicy: `${SITE_CONFIG.url}/about`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE_CONFIG.googleRating,
      reviewCount: SITE_CONFIG.googleReviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'BBB A+ Accreditation',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Better Business Bureau',
          url: 'https://www.bbb.org',
        },
        dateCreated: '2020',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'CertainTeed SELECT ShingleMaster',
        recognizedBy: {
          '@type': 'Organization',
          name: 'CertainTeed Corporation',
          url: 'https://www.certainteed.com',
        },
        dateCreated: '2022',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'GAF Factory-Certified Contractor',
        recognizedBy: {
          '@type': 'Organization',
          name: 'GAF',
          url: 'https://www.gaf.com',
        },
        dateCreated: '2022',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Veteran-Owned Business',
        description: 'Founded by military veteran Fred Turner',
      },
    ],
    award: [
      'Angi Super Service Award 2023',
      'BBB A+ Rating',
    ],
    sameAs: Object.values(SITE_CONFIG.social),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Product Schema for shingle product pages
interface ProductSchemaProps {
  product: typeof SHINGLE_PRODUCTS[0];
}

export function ProductSchema({ product }: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.fullName,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: product.brandName,
    },
    manufacturer: {
      '@type': 'Organization',
      name: product.brandName,
    },
    category: 'Roofing Shingles',
    material: 'Asphalt',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: product.priceRange.match(/\$(\d+)/)?.[1] || '70',
      highPrice: product.priceRange.match(/\$\d+-\$(\d+)/)?.[1] || '300',
      offerCount: 1,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'RoofingContractor',
        '@id': `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.name,
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Wind Rating',
        value: product.windRating,
      },
      {
        '@type': 'PropertyValue',
        name: 'Warranty',
        value: product.warranty,
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================
// AEO (Answer Engine Optimization) Schema Types
// For voice search, featured snippets, and AI assistants
// ============================================

// Speakable Schema for voice assistants (Google Assistant, Alexa, Siri)
export function SpeakableSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_CONFIG.url}/#webpage`,
    name: `${SITE_CONFIG.name} - Charlotte's Trusted Roofing Company`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.speakable-intro', '.speakable-services', '.speakable-contact'],
      xpath: [
        '/html/head/meta[@name="description"]/@content',
      ],
    },
    mainEntity: {
      '@type': 'RoofingContractor',
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Voice Search FAQ Schema - Optimized for conversational queries
export function VoiceSearchFAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_CONFIG.url}/#voice-faq`,
    name: 'Frequently Asked Questions About Roofing in Charlotte NC',
    description: 'Common questions about roofing services, costs, and contractors in Charlotte, North Carolina. Answers optimized for voice search.',
    mainEntity: VOICE_SEARCH_FAQS.map((faq, index) => ({
      '@type': 'Question',
      '@id': `${SITE_CONFIG.url}/#faq-${index + 1}`,
      position: index + 1,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
        dateCreated: '2025-01-01',
        author: {
          '@type': 'Organization',
          '@id': `${SITE_CONFIG.url}/#organization`,
        },
      },
    })),
    author: {
      '@type': 'RoofingContractor',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// QAPage Schema for individual Q&A content (PAA optimization)
interface QAPageSchemaProps {
  question: string;
  answer: string;
  datePublished?: string;
}

export function QAPageSchema({ question, answer, datePublished }: QAPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: question,
      text: question,
      answerCount: 1,
      dateCreated: datePublished || '2025-01-01',
      author: {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.url}/#organization`,
      },
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
        dateCreated: datePublished || '2025-01-01',
        upvoteCount: 25,
        author: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
        },
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// HowTo Schema Generator for Featured Snippets
interface HowToSchemaProps {
  title: string;
  description: string;
  steps: string[];
  totalTime?: string;
  estimatedCost?: string;
}

export function HowToSchema({ title, description, steps, totalTime, estimatedCost }: HowToSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: description,
    totalTime: totalTime || 'PT30M',
    estimatedCost: estimatedCost ? {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: estimatedCost,
    } : undefined,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: `Step ${index + 1}`,
      text: step,
    })),
    tool: [],
    supply: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ItemList Schema for Featured Snippet Lists
interface ItemListSchemaProps {
  title: string;
  items: string[];
  description?: string;
}

export function ItemListSchema({ title, items, description }: ItemListSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    description: description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Definition Schema for Featured Snippet Definitions
interface DefinitionSchemaProps {
  term: string;
  definition: string;
}

export function DefinitionSchema({ term, definition }: DefinitionSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term,
    description: definition,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Roofing Terminology',
      publisher: {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.url}/#organization`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Location-specific FAQ Schema for city pages (AEO for local search)
interface LocationFAQSchemaProps {
  city: string;
  state: string;
  faqs: { question: string; answer: string }[];
}

export function LocationFAQSchema({ city, state, faqs }: LocationFAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: `Roofing FAQ for ${city}, ${state}`,
    description: `Common roofing questions answered for homeowners in ${city}, ${state}. Get expert answers about roof repair, replacement, and costs.`,
    mainEntity: faqs.map((faq, index) => ({
      '@type': 'Question',
      position: index + 1,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
    author: {
      '@type': 'RoofingContractor',
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    about: {
      '@type': 'City',
      name: `${city}, ${state}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service Area Schema with GeoShape for precise coverage
export function ServiceAreaSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.url}/#roofing-service`,
    name: 'Roofing Services',
    description: 'Professional roofing services including repair, replacement, inspection, and storm damage restoration.',
    provider: {
      '@type': 'RoofingContractor',
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: SITE_CONFIG.geo.latitude,
        longitude: SITE_CONFIG.geo.longitude,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Charlotte',
          addressRegion: 'NC',
          addressCountry: 'US',
        },
      },
      geoRadius: '80467', // 50 miles in meters
    },
    serviceArea: LOCATIONS.map(loc => ({
      '@type': 'City',
      name: loc.city,
      containedInPlace: {
        '@type': 'State',
        name: loc.state === 'NC' ? 'North Carolina' : 'South Carolina',
      },
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing Services Catalog',
      itemListElement: SERVICES.map((service, index) => ({
        '@type': 'OfferCatalogItem',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Speakable Content Component - Renders hidden speakable text for voice assistants
export function SpeakableContent() {
  return (
    <>
      <div className="sr-only speakable-intro" aria-hidden="true">
        {SPEAKABLE_CONTENT.companyIntro}
      </div>
      <div className="sr-only speakable-services" aria-hidden="true">
        {SPEAKABLE_CONTENT.servicesSummary}
      </div>
      <div className="sr-only speakable-contact" aria-hidden="true">
        {SPEAKABLE_CONTENT.contactInfo}
      </div>
    </>
  );
}
