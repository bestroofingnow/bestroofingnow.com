'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';
import BlogForm from '@/components/admin/BlogForm';

export default function EditBlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await fetch(`/api/admin/blogs/${params.id}`);
        if (!response.ok) {
          setError('Blog post not found');
          return;
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      loadPost();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4">{error || 'Blog post not found'}</p>
        <Link href="/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/blogs" className="text-primary hover:underline">
          Back to Blog Posts
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/blogs"
          className="inline-flex items-center text-gray-600 hover:text-primary mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Blog Posts
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Edit Blog Post</h1>
        <p className="text-gray-600">{post.title}</p>
      </div>

      <BlogForm initialData={post} isEditing />
    </div>
  );
}
