// Database Schema for Project Showcase
// Using Drizzle ORM with Vercel Postgres (Neon)

import { pgTable, text, timestamp, boolean, integer, real, jsonb, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Projects table - main table for roofing jobs
export const projects = pgTable('projects', {
  id: uuid('id').defaultRandom().primaryKey(),

  // PMI legacy ID (for migration tracking)
  pmiId: text('pmi_id').unique(),

  // Basic info
  name: text('name').notNull(), // Customer first name or project name
  description: text('description'),

  // Location
  street: text('street'),
  city: text('city').notNull(),
  state: text('state').notNull().default('NC'),
  zip: text('zip'),
  county: text('county'),

  // Geo coordinates for map
  latitude: real('latitude'),
  longitude: real('longitude'),

  // Categorization
  serviceType: text('service_type'), // 'replacement', 'repair', 'commercial', etc.
  product: text('product'), // 'CertainTeed Landmark', 'GAF Timberline', etc.
  productColor: text('product_color'),
  categories: jsonb('categories').$type<string[]>().default([]),

  // Metadata
  completedDate: timestamp('completed_date'),
  featured: boolean('featured').default(false),
  published: boolean('published').default(true),

  // Stats
  photoCount: integer('photo_count').default(0),

  // SEO
  slug: text('slug').unique(),
  metaTitle: text('meta_title'),
  metaDescription: text('meta_description'),

  // Timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Photos table - project images
export const photos = pgTable('photos', {
  id: uuid('id').defaultRandom().primaryKey(),

  // PMI legacy ID
  pmiId: text('pmi_id').unique(),

  // Relationship
  projectId: uuid('project_id').notNull().references(() => projects.id, { onDelete: 'cascade' }),

  // Image URLs
  url: text('url').notNull(), // Full size image
  thumbnailUrl: text('thumbnail_url'), // Thumbnail version

  // Metadata
  caption: text('caption'),
  altText: text('alt_text'),
  order: integer('order').default(0),

  // Storage info
  storageProvider: text('storage_provider').default('vercel-blob'), // 'vercel-blob', 'wordpress', 's3'
  storagePath: text('storage_path'), // Path in storage

  // Image dimensions (for responsive loading)
  width: integer('width'),
  height: integer('height'),
  fileSize: integer('file_size'),

  // Timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Categories table - for organizing projects
export const projectCategories = pgTable('project_categories', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull().unique(),
  slug: text('slug').notNull().unique(),
  parentId: uuid('parent_id'),
  description: text('description'),
  order: integer('order').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Relations
export const projectsRelations = relations(projects, ({ many }) => ({
  photos: many(photos),
}));

export const photosRelations = relations(photos, ({ one }) => ({
  project: one(projects, {
    fields: [photos.projectId],
    references: [projects.id],
  }),
}));

export const categoriesRelations = relations(projectCategories, ({ one }) => ({
  parent: one(projectCategories, {
    fields: [projectCategories.parentId],
    references: [projectCategories.id],
  }),
}));

// Types for TypeScript
export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type Photo = typeof photos.$inferSelect;
export type NewPhoto = typeof photos.$inferInsert;
export type ProjectCategory = typeof projectCategories.$inferSelect;
export type NewProjectCategory = typeof projectCategories.$inferInsert;

// Project with photos type
export type ProjectWithPhotos = Project & {
  photos: Photo[];
};

// ============================================
// Blog Optimization Tables
// ============================================

// Optimized blogs table - stores AI-optimized blog content
export const optimizedBlogs = pgTable('optimized_blogs', {
  id: uuid('id').defaultRandom().primaryKey(),

  // WordPress reference
  wpPostId: integer('wp_post_id').notNull().unique(),
  slug: text('slug').notNull().unique(),

  // Original content
  originalTitle: text('original_title').notNull(),
  originalContent: text('original_content').notNull(),

  // Optimized content
  optimizedTitle: text('optimized_title').notNull(),
  optimizedContent: text('optimized_content').notNull(),
  metaDescription: text('meta_description'),

  // SEO data
  focusKeywords: jsonb('focus_keywords').$type<string[]>().default([]),
  internalLinks: jsonb('internal_links').$type<{ url: string; anchor: string; keyword: string }[]>().default([]),
  schemaMarkup: jsonb('schema_markup').$type<Record<string, unknown>>(),

  // Score and tracking
  optimizationScore: integer('optimization_score').default(0),
  lastOptimized: timestamp('last_optimized'),

  // Timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Linkable pages table - for auto-linking functionality
export const linkablePages = pgTable('linkable_pages', {
  id: uuid('id').defaultRandom().primaryKey(),

  url: text('url').notNull().unique(),
  title: text('title').notNull(),
  keywords: jsonb('keywords').$type<string[]>().default([]),
  pageType: text('page_type').notNull(), // 'service', 'location', 'blog', 'landing'
  priority: integer('priority').default(0),

  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Types for blog optimization
export type OptimizedBlog = typeof optimizedBlogs.$inferSelect;
export type NewOptimizedBlog = typeof optimizedBlogs.$inferInsert;
export type LinkablePage = typeof linkablePages.$inferSelect;
export type NewLinkablePage = typeof linkablePages.$inferInsert;

// ============================================
// Blog Posts Table (native CMS)
// ============================================

export const blogPosts = pgTable('blog_posts', {
  id: uuid('id').defaultRandom().primaryKey(),

  // Content
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  content: text('content').notNull(),
  excerpt: text('excerpt'),
  featuredImage: text('featured_image'),
  featuredImageAlt: text('featured_image_alt'),

  // Categorization
  category: text('category'), // 'roof-repair', 'maintenance', 'storm-damage', etc.
  tags: jsonb('tags').$type<string[]>().default([]),

  // SEO
  metaTitle: text('meta_title'),
  metaDescription: text('meta_description'),
  focusKeyword: text('focus_keyword'),

  // Author
  author: text('author').default('Best Roofing Now'),

  // Publishing
  published: boolean('published').default(false),
  publishedAt: timestamp('published_at'),

  // Timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type BlogPost = typeof blogPosts.$inferSelect;
export type NewBlogPost = typeof blogPosts.$inferInsert;

// ============================================
// CTA Banners Table (admin-changeable)
// ============================================

export const ctaBanners = pgTable('cta_banners', {
  id: uuid('id').defaultRandom().primaryKey(),

  // Content
  name: text('name').notNull(), // Internal name for admin reference
  title: text('title').notNull(),
  subtitle: text('subtitle'),
  buttonText: text('button_text').notNull().default('Schedule Free Inspection'),
  buttonUrl: text('button_url').notNull().default('/contact'),
  secondaryButtonText: text('secondary_button_text'),
  secondaryButtonUrl: text('secondary_button_url'),
  footnote: text('footnote'),

  // Appearance
  variant: text('variant').notNull().default('accent'), // 'primary' | 'accent'

  // Placement and status
  placement: text('placement').notNull().default('global'), // 'global', 'blog', 'services', 'homepage'
  active: boolean('active').default(false),
  order: integer('order').default(0),

  // Timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type CTABanner = typeof ctaBanners.$inferSelect;
export type NewCTABanner = typeof ctaBanners.$inferInsert;

// ============================================
// DataForSEO / SEO Tools Tables (Phase 1)
// ============================================

// Cached keyword research results from DataForSEO
export const keywordResearch = pgTable('keyword_research', {
  id: uuid('id').defaultRandom().primaryKey(),
  keyword: text('keyword').notNull(),
  searchVolume: integer('search_volume'),
  cpc: real('cpc'),
  competition: real('competition'),
  difficulty: integer('difficulty'),
  trends: jsonb('trends').$type<number[]>(),
  serpFeatures: jsonb('serp_features').$type<string[]>(),
  location: text('location').default('United States'),
  fetchedAt: timestamp('fetched_at').defaultNow().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type KeywordResearch = typeof keywordResearch.$inferSelect;
export type NewKeywordResearch = typeof keywordResearch.$inferInsert;

// SERP analysis snapshots per keyword
export const serpAnalyses = pgTable('serp_analyses', {
  id: uuid('id').defaultRandom().primaryKey(),
  keyword: text('keyword').notNull(),
  serpResults: jsonb('serp_results').$type<{
    position: number;
    title: string;
    url: string;
    description: string;
  }[]>(),
  featuredSnippet: jsonb('featured_snippet').$type<{
    title: string;
    description: string;
    url: string;
  } | null>(),
  peopleAlsoAsk: jsonb('people_also_ask').$type<string[]>(),
  localPack: jsonb('local_pack').$type<{
    title: string;
    rating: number;
    reviews: number;
  }[] | null>(),
  aiOverview: boolean('ai_overview').default(false),
  fetchedAt: timestamp('fetched_at').defaultNow().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type SerpAnalysis = typeof serpAnalyses.$inferSelect;
export type NewSerpAnalysis = typeof serpAnalyses.$inferInsert;

// AI-generated content briefs
export const contentBriefs = pgTable('content_briefs', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  targetKeyword: text('target_keyword').notNull(),
  secondaryKeywords: jsonb('secondary_keywords').$type<string[]>().default([]),
  briefContent: text('brief_content').notNull(),
  serpData: jsonb('serp_data').$type<Record<string, unknown>>(),
  competitorUrls: jsonb('competitor_urls').$type<string[]>().default([]),
  suggestedHeadings: jsonb('suggested_headings').$type<string[]>().default([]),
  suggestedFaqs: jsonb('suggested_faqs').$type<{ question: string; answer: string }[]>().default([]),
  wordCountTarget: integer('word_count_target').default(1500),
  status: text('status').default('draft'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type ContentBrief = typeof contentBriefs.$inferSelect;
export type NewContentBrief = typeof contentBriefs.$inferInsert;

// ============================================
// Knowledge Base Table (Phase 2)
// ============================================

export const knowledgeBase = pgTable('knowledge_base', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: text('slug').notNull().unique(),
  question: text('question').notNull(),
  answer: text('answer').notNull(),
  shortAnswer: text('short_answer'),
  category: text('category').notNull(),
  subcategory: text('subcategory'),
  triggerKeywords: jsonb('trigger_keywords').$type<string[]>().default([]),
  intent: text('intent').default('informational'),
  voiceOptimized: boolean('voice_optimized').default(true),
  speakableAnswer: text('speakable_answer'),
  sourceCitations: jsonb('source_citations').$type<{ title: string; url: string }[]>().default([]),
  relatedSlugs: jsonb('related_slugs').$type<string[]>().default([]),
  searchVolume: integer('search_volume'),
  published: boolean('published').default(false),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type KnowledgeBaseEntry = typeof knowledgeBase.$inferSelect;
export type NewKnowledgeBaseEntry = typeof knowledgeBase.$inferInsert;

// ============================================
// Chat Sessions Table (Phase 3)
// ============================================

export const chatSessions = pgTable('chat_sessions', {
  id: uuid('id').defaultRandom().primaryKey(),
  sessionId: text('session_id').notNull().unique(),
  leadCaptured: boolean('lead_captured').default(false),
  leadName: text('lead_name'),
  leadEmail: text('lead_email'),
  leadPhone: text('lead_phone'),
  messageCount: integer('message_count').default(0),
  firstMessage: text('first_message'),
  lastMessage: text('last_message'),
  leadForwardedToGhl: boolean('lead_forwarded_to_ghl').default(false),
  leadForwardedToAi: boolean('lead_forwarded_to_ai').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type ChatSession = typeof chatSessions.$inferSelect;
export type NewChatSession = typeof chatSessions.$inferInsert;

// ============================================
// SEO Scan Tables (Phase 1–5)
// ============================================

// Weekly site scan jobs — each run produces one row
export const seoScans = pgTable('seo_scans', {
  id: uuid('id').defaultRandom().primaryKey(),
  status: text('status').notNull().default('pending'), // pending | running | completed | failed
  trigger: text('trigger').notNull().default('manual'), // manual | cron | api
  pagesScanned: integer('pages_scanned').default(0),
  keywordsTracked: integer('keywords_tracked').default(0),
  totalVolume: integer('total_volume').default(0),
  avgPosition: real('avg_position'),
  topTenCount: integer('top_ten_count').default(0),
  strikingDistanceCount: integer('striking_distance_count').default(0),
  errorLog: text('error_log'),
  startedAt: timestamp('started_at'),
  completedAt: timestamp('completed_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type SeoScan = typeof seoScans.$inferSelect;
export type NewSeoScan = typeof seoScans.$inferInsert;

// Per-page ranking snapshot captured during each scan
export const pageRankings = pgTable('page_rankings', {
  id: uuid('id').defaultRandom().primaryKey(),
  scanId: uuid('scan_id').notNull().references(() => seoScans.id, { onDelete: 'cascade' }),
  url: text('url').notNull(), // e.g. /roofing-charlotte-nc
  keyword: text('keyword').notNull(),
  position: integer('position'), // SERP rank (null = not ranking)
  previousPosition: integer('previous_position'), // from prior scan
  positionChange: integer('position_change'), // positive = improved
  searchVolume: integer('search_volume').default(0),
  cpc: real('cpc'),
  featuredSnippet: boolean('featured_snippet').default(false),
  aiOverview: boolean('ai_overview').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type PageRanking = typeof pageRankings.$inferSelect;
export type NewPageRanking = typeof pageRankings.$inferInsert;

// Page-level SEO audit results (Phase 2)
export const pageAudits = pgTable('page_audits', {
  id: uuid('id').defaultRandom().primaryKey(),
  scanId: uuid('scan_id').notNull().references(() => seoScans.id, { onDelete: 'cascade' }),
  url: text('url').notNull(),
  statusCode: integer('status_code'),
  title: text('title'),
  titleLength: integer('title_length'),
  metaDescription: text('meta_description'),
  metaDescriptionLength: integer('meta_description_length'),
  h1Count: integer('h1_count').default(0),
  h2Count: integer('h2_count').default(0),
  wordCount: integer('word_count').default(0),
  imageCount: integer('image_count').default(0),
  imagesWithoutAlt: integer('images_without_alt').default(0),
  internalLinks: integer('internal_links').default(0),
  externalLinks: integer('external_links').default(0),
  brokenLinks: jsonb('broken_links').$type<string[]>().default([]),
  hasSchemaMarkup: boolean('has_schema_markup').default(false),
  schemaTypes: jsonb('schema_types').$type<string[]>().default([]),
  hasFaqSchema: boolean('has_faq_schema').default(false),
  pageSpeedScore: integer('page_speed_score'),
  issues: jsonb('issues').$type<{ severity: string; message: string; element?: string }[]>().default([]),
  score: integer('score').default(0), // 0-100 overall SEO score
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type PageAudit = typeof pageAudits.$inferSelect;
export type NewPageAudit = typeof pageAudits.$inferInsert;

// AI-generated page optimizations (Phase 3)
export const pageOptimizations = pgTable('page_optimizations', {
  id: uuid('id').defaultRandom().primaryKey(),
  scanId: uuid('scan_id').references(() => seoScans.id, { onDelete: 'set null' }),
  url: text('url').notNull(),
  optimizationType: text('optimization_type').notNull(), // meta | headings | content | schema | aeo
  currentValue: text('current_value'),
  suggestedValue: text('suggested_value').notNull(),
  reasoning: text('reasoning'),
  impact: text('impact').notNull().default('medium'), // low | medium | high | critical
  status: text('status').notNull().default('pending'), // pending | approved | applied | rejected
  appliedAt: timestamp('applied_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type PageOptimization = typeof pageOptimizations.$inferSelect;
export type NewPageOptimization = typeof pageOptimizations.$inferInsert;

// Weekly SEO report summaries (Phase 5)
export const seoReports = pgTable('seo_reports', {
  id: uuid('id').defaultRandom().primaryKey(),
  scanId: uuid('scan_id').notNull().references(() => seoScans.id, { onDelete: 'cascade' }),
  weekOf: timestamp('week_of').notNull(),
  summary: text('summary').notNull(), // AI-generated summary
  keyMetrics: jsonb('key_metrics').$type<{
    totalKeywords: number;
    avgPosition: number;
    topTenKeywords: number;
    strikingDistance: number;
    totalVolume: number;
    positionGains: number;
    positionLosses: number;
    newKeywords: number;
    lostKeywords: number;
  }>(),
  topGainers: jsonb('top_gainers').$type<{ keyword: string; url: string; change: number; position: number }[]>().default([]),
  topLosers: jsonb('top_losers').$type<{ keyword: string; url: string; change: number; position: number }[]>().default([]),
  recommendations: jsonb('recommendations').$type<{ priority: string; action: string; url?: string }[]>().default([]),
  emailSent: boolean('email_sent').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type SeoReport = typeof seoReports.$inferSelect;
export type NewSeoReport = typeof seoReports.$inferInsert;
