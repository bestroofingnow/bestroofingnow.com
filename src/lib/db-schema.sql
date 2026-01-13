-- Supabase SQL Schema for Blog Optimization
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor)

-- Optimized blog content cache
CREATE TABLE IF NOT EXISTS optimized_blogs (
  id SERIAL PRIMARY KEY,
  wp_post_id INTEGER UNIQUE NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  original_title TEXT,
  optimized_title TEXT,
  original_content TEXT,
  optimized_content TEXT,
  meta_description VARCHAR(300),
  focus_keywords TEXT[] DEFAULT '{}',
  internal_links JSONB DEFAULT '[]',
  schema_markup JSONB DEFAULT '{}',
  optimization_score INTEGER DEFAULT 0,
  last_optimized TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Internal linking reference table
CREATE TABLE IF NOT EXISTS linkable_pages (
  id SERIAL PRIMARY KEY,
  url VARCHAR(500) UNIQUE NOT NULL,
  title VARCHAR(255),
  keywords TEXT[] DEFAULT '{}',
  page_type VARCHAR(50),
  priority INTEGER DEFAULT 5
);

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_optimized_blogs_slug ON optimized_blogs(slug);
CREATE INDEX IF NOT EXISTS idx_optimized_blogs_wp_post_id ON optimized_blogs(wp_post_id);
CREATE INDEX IF NOT EXISTS idx_linkable_pages_url ON linkable_pages(url);
CREATE INDEX IF NOT EXISTS idx_linkable_pages_page_type ON linkable_pages(page_type);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE optimized_blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE linkable_pages ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (adjust as needed)
CREATE POLICY "Allow public read access to optimized_blogs" ON optimized_blogs
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to linkable_pages" ON linkable_pages
  FOR SELECT USING (true);

-- Create policies for service role to insert/update
CREATE POLICY "Allow service role full access to optimized_blogs" ON optimized_blogs
  FOR ALL USING (true);

CREATE POLICY "Allow service role full access to linkable_pages" ON linkable_pages
  FOR ALL USING (true);
