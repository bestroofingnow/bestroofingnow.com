CREATE TABLE "linkable_pages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"url" text NOT NULL,
	"title" text NOT NULL,
	"keywords" jsonb DEFAULT '[]'::jsonb,
	"page_type" text NOT NULL,
	"priority" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "linkable_pages_url_unique" UNIQUE("url")
);
--> statement-breakpoint
CREATE TABLE "optimized_blogs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"wp_post_id" integer NOT NULL,
	"slug" text NOT NULL,
	"original_title" text NOT NULL,
	"original_content" text NOT NULL,
	"optimized_title" text NOT NULL,
	"optimized_content" text NOT NULL,
	"meta_description" text,
	"focus_keywords" jsonb DEFAULT '[]'::jsonb,
	"internal_links" jsonb DEFAULT '[]'::jsonb,
	"schema_markup" jsonb,
	"optimization_score" integer DEFAULT 0,
	"last_optimized" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "optimized_blogs_wp_post_id_unique" UNIQUE("wp_post_id"),
	CONSTRAINT "optimized_blogs_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "photos" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"pmi_id" text,
	"project_id" uuid NOT NULL,
	"url" text NOT NULL,
	"thumbnail_url" text,
	"caption" text,
	"alt_text" text,
	"order" integer DEFAULT 0,
	"storage_provider" text DEFAULT 'vercel-blob',
	"storage_path" text,
	"width" integer,
	"height" integer,
	"file_size" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "photos_pmi_id_unique" UNIQUE("pmi_id")
);
--> statement-breakpoint
CREATE TABLE "project_categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"parent_id" uuid,
	"description" text,
	"order" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "project_categories_name_unique" UNIQUE("name"),
	CONSTRAINT "project_categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"pmi_id" text,
	"name" text NOT NULL,
	"description" text,
	"street" text,
	"city" text NOT NULL,
	"state" text DEFAULT 'NC' NOT NULL,
	"zip" text,
	"county" text,
	"latitude" real,
	"longitude" real,
	"service_type" text,
	"product" text,
	"product_color" text,
	"categories" jsonb DEFAULT '[]'::jsonb,
	"completed_date" timestamp,
	"featured" boolean DEFAULT false,
	"published" boolean DEFAULT true,
	"photo_count" integer DEFAULT 0,
	"slug" text,
	"meta_title" text,
	"meta_description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "projects_pmi_id_unique" UNIQUE("pmi_id"),
	CONSTRAINT "projects_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "photos" ADD CONSTRAINT "photos_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;