'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import BlogForm from '@/components/admin/BlogForm';

export default function NewBlogPostPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">New Blog Post</h1>
        <p className="text-gray-600">Create a new blog post</p>
      </div>

      <BlogForm />
    </div>
  );
}
