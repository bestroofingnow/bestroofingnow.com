'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Save, Eye, ArrowLeft, Loader2 } from 'lucide-react';

const CATEGORIES = [
  'Roof Repair',
  'Roof Replacement',
  'Storm Damage',
  'Insurance Claims',
  'Maintenance Tips',
  'Roofing Materials',
  'Energy Efficiency',
  'Commercial Roofing',
  'Gutters',
  'Ventilation',
];

interface BlogFormProps {
  initialData?: {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string | null;
    featuredImage: string | null;
    featuredImageAlt: string | null;
    category: string | null;
    tags: string[];
    metaTitle: string | null;
    metaDescription: string | null;
    focusKeyword: string | null;
    author: string | null;
    published: boolean;
  };
  isEditing?: boolean;
}

export default function BlogForm({ initialData, isEditing }: BlogFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    content: initialData?.content || '',
    excerpt: initialData?.excerpt || '',
    featuredImage: initialData?.featuredImage || '',
    featuredImageAlt: initialData?.featuredImageAlt || '',
    category: initialData?.category || '',
    tags: (initialData?.tags || []).join(', '),
    metaTitle: initialData?.metaTitle || '',
    metaDescription: initialData?.metaDescription || '',
    focusKeyword: initialData?.focusKeyword || '',
    author: initialData?.author || 'Best Roofing Now',
    published: initialData?.published || false,
  });

  const updateField = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    // Auto-generate slug from title
    if (field === 'title' && !isEditing) {
      const slug = (value as string)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .slice(0, 80);
      setForm((prev) => ({ ...prev, slug }));
    }
  };

  const handleSubmit = async (publish?: boolean) => {
    setError('');
    setSaving(true);

    try {
      const payload = {
        ...form,
        tags: form.tags
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean),
        published: publish !== undefined ? publish : form.published,
      };

      const url = isEditing
        ? `/api/admin/blogs/${initialData!.id}`
        : '/api/admin/blogs';

      const response = await fetch(url, {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to save blog post');
      }

      router.push('/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/blogs');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">{error}</div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => updateField('title', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-lg"
              placeholder="Enter blog post title..."
            />

            <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">
              Slug
            </label>
            <div className="flex items-center">
              <span className="text-gray-500 text-sm mr-1">/blog/</span>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => updateField('slug', e.target.value)}
                className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              />
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content * (HTML supported)
            </label>
            <textarea
              value={form.content}
              onChange={(e) => updateField('content', e.target.value)}
              rows={20}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary font-mono text-sm"
              placeholder="Write your blog post content here... HTML is supported."
            />
          </div>

          {/* Excerpt */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Excerpt
            </label>
            <textarea
              value={form.excerpt}
              onChange={(e) => updateField('excerpt', e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Short summary of the post (auto-generated from content if left blank)"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Publish</h3>
            <div className="space-y-3">
              <button
                onClick={() => handleSubmit(false)}
                disabled={saving}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Save as Draft
              </button>
              <button
                onClick={() => handleSubmit(true)}
                disabled={saving}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Eye className="w-4 h-4" />}
                {isEditing && form.published ? 'Update & Publish' : 'Publish'}
              </button>
            </div>
          </div>

          {/* Category */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Category</h3>
            <select
              value={form.category}
              onChange={(e) => updateField('category', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white"
            >
              <option value="">Select category...</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              value={form.tags}
              onChange={(e) => updateField('tags', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="roof repair, charlotte, nc"
            />
          </div>

          {/* Featured Image */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Featured Image</h3>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              value={form.featuredImage}
              onChange={(e) => updateField('featuredImage', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="https://..."
            />
            <label className="block text-sm font-medium text-gray-700 mt-3 mb-1">
              Alt Text
            </label>
            <input
              type="text"
              value={form.featuredImageAlt}
              onChange={(e) => updateField('featuredImageAlt', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Describe the image..."
            />
          </div>

          {/* SEO */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">SEO</h3>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Meta Title
            </label>
            <input
              type="text"
              value={form.metaTitle}
              onChange={(e) => updateField('metaTitle', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Custom title for search engines"
            />
            <p className="text-xs text-gray-500 mt-1">
              {form.metaTitle.length}/60 characters
            </p>

            <label className="block text-sm font-medium text-gray-700 mt-3 mb-1">
              Meta Description
            </label>
            <textarea
              value={form.metaDescription}
              onChange={(e) => updateField('metaDescription', e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Description for search engine results"
            />
            <p className="text-xs text-gray-500 mt-1">
              {form.metaDescription.length}/160 characters
            </p>

            <label className="block text-sm font-medium text-gray-700 mt-3 mb-1">
              Focus Keyword
            </label>
            <input
              type="text"
              value={form.focusKeyword}
              onChange={(e) => updateField('focusKeyword', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Primary keyword for this post"
            />
          </div>

          {/* Author */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Author</h3>
            <input
              type="text"
              value={form.author}
              onChange={(e) => updateField('author', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
