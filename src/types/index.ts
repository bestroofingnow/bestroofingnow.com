// Type definitions for the site

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  keywords: string[];
  content?: string;
  features?: string[];
  benefits?: string[];
  faqs?: FAQ[];
}

export interface Location {
  slug: string;
  city: string;
  state: string;
  isPrimary: boolean;
  county: string;
  description?: string;
  neighborhoods?: string[];
  landmarks?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location?: string;
  rating: number;
  text: string;
  date?: string;
  service?: string;
  avatar?: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  service: string;
  description: string;
  beforeImage?: string;
  afterImage: string;
  date: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: string;
  date: string;
  modifiedDate?: string;
  categories: string[];
  tags: string[];
  readingTime: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address?: string;
  service: string;
  message: string;
  preferredContact?: 'phone' | 'email';
  timeframe?: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface TrustBadge {
  name: string;
  image: string;
  url?: string;
}

// Schema.org types for SEO
export interface LocalBusinessSchema {
  '@context': 'https://schema.org';
  '@type': 'RoofingContractor';
  '@id': string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    '@type': 'GeoCoordinates';
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification';
    dayOfWeek: string[];
    opens: string;
    closes: string;
  };
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
  areaServed: {
    '@type': 'GeoCircle' | 'City' | 'State';
    name?: string;
    geoMidpoint?: {
      '@type': 'GeoCoordinates';
      latitude: number;
      longitude: number;
    };
    geoRadius?: string;
  }[];
  priceRange: string;
  paymentAccepted: string[];
  currenciesAccepted: string;
  hasOfferCatalog?: {
    '@type': 'OfferCatalog';
    name: string;
    itemListElement: {
      '@type': 'Offer';
      itemOffered: {
        '@type': 'Service';
        name: string;
        description: string;
      };
    }[];
  };
  sameAs: string[];
  image: string[];
  logo: string;
  slogan?: string;
  foundingDate?: string;
  founder?: {
    '@type': 'Person';
    name: string;
  };
  numberOfEmployees?: {
    '@type': 'QuantitativeValue';
    value: number;
  };
  knowsAbout?: string[];
  isAccreditedBy?: {
    '@type': 'Organization';
    name: string;
  }[];
}
