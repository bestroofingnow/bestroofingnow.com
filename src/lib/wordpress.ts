// WordPress API integration for headless CMS
//
// MIGRATION SETUP:
// Before migration: Leave WORDPRESS_API_URL unset (uses bestroofingnow.com)
// After migration:  Set WORDPRESS_API_URL=https://cms.bestroofingnow.com/wp-json/wp/v2
//                   in your Vercel environment variables

const WP_API_URL = process.env.WORDPRESS_API_URL || 'https://bestroofingnow.com/wp-json/wp/v2';

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  featured_media: number;
  categories: number[];
  tags: number[];
  yoast_head_json?: {
    title: string;
    description: string;
    og_image?: { url: string }[];
  };
  _embedded?: {
    'wp:featuredmedia'?: { source_url: string; alt_text: string }[];
    author?: { name: string }[];
  };
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  title: { rendered: string };
  media_details: {
    width: number;
    height: number;
    sizes: Record<string, { source_url: string; width: number; height: number }>;
  };
}

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  yoast_head_json?: {
    title: string;
    description: string;
  };
}

// Fetch functions with caching
export async function getPosts(options: {
  perPage?: number;
  page?: number;
  categories?: number[];
  orderBy?: string;
  order?: 'asc' | 'desc';
} = {}): Promise<WPPost[]> {
  const { perPage = 10, page = 1, categories, orderBy = 'date', order = 'desc' } = options;

  const params = new URLSearchParams({
    per_page: perPage.toString(),
    page: page.toString(),
    orderby: orderBy,
    order: order,
    _embed: 'true',
  });

  if (categories?.length) {
    params.append('categories', categories.join(','));
  }

  try {
    const res = await fetch(`${WP_API_URL}/posts?${params}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      console.error('Failed to fetch posts:', res.status, res.statusText);
      return [];
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed=true`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return null;
    }

    const posts = await res.json();
    return posts[0] || null;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts: WPPost[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const res = await fetch(`${WP_API_URL}/posts?per_page=100&page=${page}&_fields=slug`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) break;

    const batch = await res.json();
    if (batch.length === 0) {
      hasMore = false;
    } else {
      posts.push(...batch);
      page++;
    }
  }

  return posts.map((post) => post.slug);
}

export async function getMedia(id: number): Promise<WPMedia | null> {
  const res = await fetch(`${WP_API_URL}/media/${id}`, {
    next: { revalidate: 86400 }, // Cache for 24 hours
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export async function getPage(slug: string): Promise<WPPage | null> {
  const res = await fetch(`${WP_API_URL}/pages?slug=${slug}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return null;
  }

  const pages = await res.json();
  return pages[0] || null;
}

export async function searchPosts(query: string, perPage = 10): Promise<WPPost[]> {
  if (!query.trim()) return [];

  try {
    const res = await fetch(
      `${WP_API_URL}/posts?search=${encodeURIComponent(query)}&per_page=${perPage}&_embed=true`,
      { next: { revalidate: 300 } } // 5 min cache for search
    );

    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch (error) {
    console.error('Error searching posts:', error);
    return [];
  }
}

export async function getPostsWithTotal(options: {
  perPage?: number;
  page?: number;
  categories?: number[];
  orderBy?: string;
  order?: 'asc' | 'desc';
} = {}): Promise<{ posts: WPPost[]; total: number; totalPages: number }> {
  const { perPage = 10, page = 1, categories, orderBy = 'date', order = 'desc' } = options;

  const params = new URLSearchParams({
    per_page: perPage.toString(),
    page: page.toString(),
    orderby: orderBy,
    order: order,
    _embed: 'true',
  });

  if (categories?.length) {
    params.append('categories', categories.join(','));
  }

  try {
    const res = await fetch(`${WP_API_URL}/posts?${params}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return { posts: [], total: 0, totalPages: 0 };
    }

    const posts = await res.json();
    const total = parseInt(res.headers.get('X-WP-Total') || '0', 10);
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '0', 10);

    return { posts, total, totalPages };
  } catch (error) {
    console.error('Error fetching posts with total:', error);
    return { posts: [], total: 0, totalPages: 0 };
  }
}

// Helper to strip HTML tags
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

// Helper to get excerpt
export function getExcerpt(content: string, maxLength = 160): string {
  const text = stripHtml(content);
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}
