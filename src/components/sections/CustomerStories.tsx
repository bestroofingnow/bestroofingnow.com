'use client';

import { MapPin, Calendar, Home, CheckCircle2, Star } from 'lucide-react';
import Link from 'next/link';
import {
  CustomerStory,
  generateStoryHeadline,
  generateStoryDescription,
} from '@/lib/customer-stories';

interface CustomerStoriesProps {
  stories: CustomerStory[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  maxItems?: number;
  variant?: 'grid' | 'list' | 'compact';
}

export function CustomerStories({
  stories,
  title = 'Recent Projects in Your Area',
  subtitle = 'See what we\'ve done for your neighbors',
  showViewAll = true,
  maxItems = 6,
  variant = 'grid',
}: CustomerStoriesProps) {
  const displayStories = stories.slice(0, maxItems);

  if (displayStories.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {variant === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        )}

        {variant === 'list' && (
          <div className="space-y-4 max-w-4xl mx-auto">
            {displayStories.map((story) => (
              <StoryListItem key={story.id} story={story} />
            ))}
          </div>
        )}

        {variant === 'compact' && (
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {displayStories.map((story) => (
              <StoryCompactItem key={story.id} story={story} />
            ))}
          </div>
        )}

        {showViewAll && stories.length > maxItems && (
          <div className="text-center mt-10">
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              View All {stories.length} Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function StoryCard({ story }: { story: CustomerStory }) {
  const headline = generateStoryHeadline(story);

  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
      {/* Header with location */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2 text-primary">
          <MapPin className="w-5 h-5" aria-hidden="true" />
          <span className="font-semibold">{story.street}</span>
        </div>
        <div className="flex items-center gap-1 text-yellow-500">
          <Star className="w-4 h-4 fill-yellow-500" aria-hidden="true" />
          <span className="text-sm font-medium text-gray-600">5.0</span>
        </div>
      </div>

      {/* Customer name and date */}
      <h3 className="text-lg font-bold text-dark mb-2">
        {story.name}&apos;s Roof
      </h3>

      {/* Location details */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span className="flex items-center gap-1">
          <Home className="w-4 h-4" aria-hidden="true" />
          {story.city}, {story.state}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" aria-hidden="true" />
          {story.serviceDate}
        </span>
      </div>

      {/* Service details */}
      <div className="space-y-2 mb-4">
        {story.product && (
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />
            <span className="text-gray-700">
              {story.product}
              {story.productColor && ` - ${story.productColor}`}
            </span>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />
          <span className="text-gray-700">{story.serviceType}</span>
        </div>
      </div>

      {/* Zip code badge */}
      <div className="pt-4 border-t border-gray-100">
        <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
          ZIP: {story.zip}
        </span>
      </div>
    </article>
  );
}

function StoryListItem({ story }: { story: CustomerStory }) {
  return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex items-center gap-4">
      <div className="bg-primary/10 p-3 rounded-full">
        <Home className="w-6 h-6 text-primary" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-dark">
            {story.name}&apos;s Roof on {story.street}
          </h3>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
            Completed
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{story.city}, {story.state} {story.zip}</span>
          <span>{story.serviceDate}</span>
          {story.product && <span>{story.product}</span>}
        </div>
      </div>
      <div className="flex items-center gap-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-500" aria-hidden="true" />
        ))}
      </div>
    </article>
  );
}

function StoryCompactItem({ story }: { story: CustomerStory }) {
  return (
    <article className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-3">
      <MapPin className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
      <div className="flex-1 min-w-0">
        <p className="font-medium text-dark truncate">
          {story.street}, {story.city}
        </p>
        <p className="text-sm text-gray-500">
          {story.serviceDate} {story.product && `• ${story.product}`}
        </p>
      </div>
    </article>
  );
}

// Schema markup component for customer stories
export function CustomerStoriesSchema({ stories }: { stories: CustomerStory[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Recent Roofing Projects by Best Roofing Now',
    description: 'Completed roofing projects in Charlotte NC and surrounding areas',
    numberOfItems: stories.length,
    itemListElement: stories.map((story, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: generateStoryHeadline(story),
        description: generateStoryDescription(story),
        provider: {
          '@type': 'RoofingContractor',
          name: 'Best Roofing Now',
        },
        areaServed: {
          '@type': 'City',
          name: story.city,
          containedInPlace: {
            '@type': 'State',
            name: story.state === 'NC' ? 'North Carolina' : 'South Carolina',
          },
        },
        serviceOutput: {
          '@type': 'Product',
          name: story.product || 'Professional Roofing Service',
        },
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
