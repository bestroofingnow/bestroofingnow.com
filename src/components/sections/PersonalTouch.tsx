'use client';

import { Lightbulb, Heart, MessageCircle, Users, Award, Quote } from 'lucide-react';
import Link from 'next/link';
import {
  JAMES_ROOFING_TIPS,
  COMMUNITY_INVOLVEMENT,
  TURNER_ANECDOTES,
} from '@/lib/turner-family';

interface TipCardProps {
  tip: (typeof JAMES_ROOFING_TIPS)[0];
}

function TipCard({ tip }: TipCardProps) {
  return (
    <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-primary" />
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
            Tip from James
          </p>
          <h4 className="font-bold text-dark mb-2">{tip.title}</h4>
          <p className="text-gray italic">&ldquo;{tip.tip}&rdquo;</p>
          <p className="text-sm text-primary font-medium mt-3">— James Turner, Founder</p>
        </div>
      </div>
    </div>
  );
}

interface CommunityCardProps {
  item: (typeof COMMUNITY_INVOLVEMENT)[0];
}

function CommunityCard({ item }: CommunityCardProps) {
  const icons = {
    nonprofit: Heart,
    networking: Users,
    accreditation: Award,
    community: MessageCircle,
  };
  const Icon = icons[item.type as keyof typeof icons] || Heart;

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6 text-accent" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-dark mb-2">{item.name}</h4>
          <p className="text-gray text-sm">&ldquo;{item.description}&rdquo;</p>
          {item.ongoing && (
            <span className="inline-block mt-3 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
              Active Partner
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

interface AnecdoteCardProps {
  anecdote: (typeof TURNER_ANECDOTES)[0];
}

function AnecdoteCard({ anecdote }: AnecdoteCardProps) {
  const authorNames = {
    james: 'James Turner',
    fred: 'Fred Turner',
    shirley: 'Shirley Turner',
  };

  return (
    <div className="bg-light rounded-xl p-6 relative">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
      <h4 className="font-bold text-dark mb-3">{anecdote.title}</h4>
      <p className="text-gray italic mb-4">&ldquo;{anecdote.story}&rdquo;</p>
      <p className="text-sm text-primary font-medium">
        — {authorNames[anecdote.author as keyof typeof authorNames]}
      </p>
    </div>
  );
}

// Single tip display - for use in sidebars or small sections
interface JamesTipProps {
  tipId?: string;
  season?: 'spring' | 'summer' | 'winter' | 'fall' | 'any';
  className?: string;
}

export function JamesTip({ tipId, season, className = '' }: JamesTipProps) {
  let tip;
  if (tipId) {
    tip = JAMES_ROOFING_TIPS.find((t) => t.id === tipId);
  } else if (season) {
    const seasonalTips = JAMES_ROOFING_TIPS.filter(
      (t) => t.season === season || t.season === 'any'
    );
    tip = seasonalTips[Math.floor(Math.random() * seasonalTips.length)];
  } else {
    tip = JAMES_ROOFING_TIPS[Math.floor(Math.random() * JAMES_ROOFING_TIPS.length)];
  }

  if (!tip) return null;

  return (
    <div className={className}>
      <TipCard tip={tip} />
    </div>
  );
}

// Multiple tips section
interface JamesTipsProps {
  count?: number;
  season?: 'spring' | 'summer' | 'winter' | 'fall' | 'any';
  className?: string;
}

export function JamesTips({ count = 3, season, className = '' }: JamesTipsProps) {
  let tips = [...JAMES_ROOFING_TIPS];
  if (season) {
    tips = tips.filter((t) => t.season === season || t.season === 'any');
  }
  const selectedTips = tips.slice(0, count);

  return (
    <section className={`py-12 bg-light ${className}`}>
      <div className="container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-semibold">Expert Advice</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Roofing Tips from James Turner
          </h2>
          <p className="text-gray mt-2">
            Honest advice from 15+ years of roofing experience in Charlotte
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {selectedTips.map((tip) => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Community involvement section
interface CommunityInvolvementProps {
  count?: number;
  className?: string;
}

export function CommunityInvolvementSection({
  count = 4,
  className = '',
}: CommunityInvolvementProps) {
  const items = COMMUNITY_INVOLVEMENT.slice(0, count);

  return (
    <section className={`py-12 bg-white ${className}`}>
      <div className="container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-semibold">Community First</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            More Than Just a Roofing Company
          </h2>
          <p className="text-gray mt-2 max-w-2xl mx-auto">
            We believe in giving back to the Charlotte community that has given us so much.
            Here&apos;s how we stay involved.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item) => (
            <CommunityCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Stories/Anecdotes section
interface TurnerStoriesProps {
  count?: number;
  author?: 'james' | 'fred' | 'shirley';
  className?: string;
}

export function TurnerStories({ count = 3, author, className = '' }: TurnerStoriesProps) {
  let stories = [...TURNER_ANECDOTES];
  if (author) {
    stories = stories.filter((s) => s.author === author);
  }
  const selectedStories = stories.slice(0, count);

  return (
    <section className={`py-12 bg-light ${className}`}>
      <div className="container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Story</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            The Turner Family Story
          </h2>
          <p className="text-gray mt-2">Real stories from our family to yours</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {selectedStories.map((story) => (
            <AnecdoteCard key={story.id} anecdote={story} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            Learn More About the Turner Family
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Compact inline tip for use in content areas
interface InlineTipProps {
  tipId?: string;
  className?: string;
}

export function InlineTip({ tipId, className = '' }: InlineTipProps) {
  const tip = tipId
    ? JAMES_ROOFING_TIPS.find((t) => t.id === tipId)
    : JAMES_ROOFING_TIPS[Math.floor(Math.random() * JAMES_ROOFING_TIPS.length)];

  if (!tip) return null;

  return (
    <div className={`bg-amber-50 border border-amber-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-amber-800 mb-1">
            Pro Tip from James:
          </p>
          <p className="text-sm text-amber-900">{tip.tip}</p>
        </div>
      </div>
    </div>
  );
}
