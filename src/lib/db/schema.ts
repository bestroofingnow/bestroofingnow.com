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
