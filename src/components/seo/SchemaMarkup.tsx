import { SITE_CONFIG, SERVICES, LOCATIONS } from '@/lib/constants';

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
    },
    areaServed: LOCATIONS.map((loc) => ({
      '@type': 'City',
      name: `${loc.city}, ${loc.state}`,
    })),
    serviceType: service.title,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Location Schema for location pages
interface LocationSchemaProps {
  location: {
    city: string;
    state: string;
    slug: string;
  };
}

export function LocationSchema({ location }: LocationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/locations/${location.slug}/#localbusiness`,
    name: `${SITE_CONFIG.name} - ${location.city}, ${location.state}`,
    description: `Professional roofing services in ${location.city}, ${location.state}. Roof repair, replacement, and installation by ${SITE_CONFIG.name}.`,
    url: `${SITE_CONFIG.url}/locations/${location.slug}`,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: 'US',
    },
    parentOrganization: {
      '@type': 'RoofingContractor',
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    areaServed: {
      '@type': 'City',
      name: `${location.city}, ${location.state}`,
    },
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
