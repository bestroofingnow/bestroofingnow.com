'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, Plus, Loader2, Eye, EyeOff, Trash2, Database } from 'lucide-react';
import { adminFetch } from '@/lib/admin-fetch';

interface KBEntry {
  id: string;
  slug: string;
  question: string;
  category: string;
  published: boolean;
  searchVolume: number | null;
  createdAt: string;
}

export default function KnowledgeBasePage() {
  const [entries, setEntries] = useState<KBEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [filter, setFilter] = useState('all');

  const adminBase = '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK';

  useEffect(() => { fetchEntries(); }, []);

  async function fetchEntries() {
    setLoading(true);
    try {
      const res = await adminFetch('/api/admin/knowledge-base');
      const json = await res.json();
      setEntries(json.data || []);
    } catch { /* ignore */ }
    finally { setLoading(false); }
  }

  async function seedFaqs() {
    setSeeding(true);
    try {
      const res = await adminFetch('/api/admin/knowledge-base/seed', { method: 'POST' });
      const json = await res.json();
      alert(json.message || 'Seed complete');
      await fetchEntries();
    } catch (err) {
      alert('Seed failed');
    } finally {
      setSeeding(false);
    }
  }

  async function togglePublish(id: string, published: boolean) {
    try {
      await adminFetch(`/api/admin/knowledge-base/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: published ? 'unpublish' : 'publish' }),
      });
      await fetchEntries();
    } catch { /* ignore */ }
  }

  async function deleteEntry(id: string) {
    if (!confirm('Delete this entry?')) return;
    try {
      await adminFetch(`/api/admin/knowledge-base/${id}`, { method: 'DELETE' });
      await fetchEntries();
    } catch { /* ignore */ }
  }

  const categories = [...new Set(entries.map(e => e.category))];
  const filtered = filter === 'all' ? entries :
    filter === 'published' ? entries.filter(e => e.published) :
    filter === 'draft' ? entries.filter(e => !e.published) :
    entries.filter(e => e.category === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Knowledge Base</h1>
          <p className="text-gray-600 text-sm">{entries.length} entries ({entries.filter(e => e.published).length} published)</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={seedFaqs}
            disabled={seeding}
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2 text-sm"
          >
            {seeding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Database className="w-4 h-4" />}
            Seed from FAQs
          </button>
          <Link
            href={`${adminBase}/knowledge-base/new`}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark flex items-center gap-2 text-sm"
          >
            <Plus className="w-4 h-4" /> New Entry
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {['all', 'published', 'draft', ...categories].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-full text-sm ${
              filter === f ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Entries Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
          </div>
        ) : filtered.length === 0 ? (
          <p className="px-6 py-12 text-gray-500 text-center">
            No entries found. Click &quot;Seed from FAQs&quot; to import existing FAQ content, or add entries manually.
          </p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Question</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Category</th>
                <th className="px-4 py-3 text-center font-medium text-gray-600">Status</th>
                <th className="px-4 py-3 text-right font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filtered.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <Link href={`${adminBase}/knowledge-base/${entry.id}`} className="text-primary hover:underline font-medium">
                      {entry.question}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">{entry.category}</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                      entry.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {entry.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => togglePublish(entry.id, entry.published)}
                        className="text-gray-400 hover:text-gray-600 p-1"
                        title={entry.published ? 'Unpublish' : 'Publish'}
                      >
                        {entry.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => deleteEntry(entry.id)}
                        className="text-gray-400 hover:text-red-600 p-1"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
