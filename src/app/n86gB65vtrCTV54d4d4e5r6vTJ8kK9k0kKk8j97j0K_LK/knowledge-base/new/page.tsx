'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { adminFetch } from '@/lib/admin-fetch';

const CATEGORIES = ['costs', 'materials', 'storm-damage', 'insurance', 'maintenance', 'commercial', 'process', 'locations', 'general', 'voice-search'];
const INTENTS = ['informational', 'commercial', 'transactional', 'navigational'];

export default function NewKBEntryPage() {
  const router = useRouter();
  const adminBase = '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK';

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    question: '',
    answer: '',
    shortAnswer: '',
    category: 'general',
    intent: 'informational',
    triggerKeywords: '',
    speakableAnswer: '',
    voiceOptimized: true,
    published: false,
  });

  function updateForm(field: string, value: string | boolean) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.question.trim() || !form.answer.trim()) {
      setError('Question and answer are required');
      return;
    }

    setSaving(true);
    setError('');
    try {
      const res = await adminFetch('/api/admin/knowledge-base', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          triggerKeywords: form.triggerKeywords.split(',').map(k => k.trim()).filter(Boolean),
        }),
      });
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      router.push(`${adminBase}/knowledge-base`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-4">
        <Link href={`${adminBase}/knowledge-base`} className="text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">New Knowledge Base Entry</h1>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Question *</label>
          <input
            type="text"
            value={form.question}
            onChange={(e) => updateForm('question', e.target.value)}
            placeholder="How much does a roof replacement cost in Charlotte NC?"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Answer * (crawlable page content)</label>
          <textarea
            value={form.answer}
            onChange={(e) => updateForm('answer', e.target.value)}
            rows={6}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Short Answer (40-60 words, for featured snippets)</label>
          <textarea
            value={form.shortAnswer}
            onChange={(e) => updateForm('shortAnswer', e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={form.category}
              onChange={(e) => updateForm('category', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            >
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Intent</label>
            <select
              value={form.intent}
              onChange={(e) => updateForm('intent', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            >
              {INTENTS.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Trigger Keywords (comma-separated)</label>
          <input
            type="text"
            value={form.triggerKeywords}
            onChange={(e) => updateForm('triggerKeywords', e.target.value)}
            placeholder="roof cost charlotte, new roof price, roof replacement cost nc"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Speakable Answer (for voice assistants)</label>
          <textarea
            value={form.speakableAnswer}
            onChange={(e) => updateForm('speakableAnswer', e.target.value)}
            rows={2}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>

        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={form.voiceOptimized}
              onChange={(e) => updateForm('voiceOptimized', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">Voice optimized</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) => updateForm('published', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">Publish immediately</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Save Entry
        </button>
      </form>
    </div>
  );
}
