'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FileText, Loader2, ArrowLeft, Plus } from 'lucide-react';
import Link from 'next/link';
import { adminFetch } from '@/lib/admin-fetch';

interface Brief {
  id: string;
  title: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  briefContent: string;
  suggestedHeadings: string[];
  suggestedFaqs: { question: string; answer: string }[];
  wordCountTarget: number;
  competitorUrls: string[];
  status: string;
  createdAt: string;
}

export default function BriefsPage() {
  const searchParams = useSearchParams();
  const [briefs, setBriefs] = useState<Brief[]>([]);
  const [selectedBrief, setSelectedBrief] = useState<Brief | null>(null);
  const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');
  const [secondaryInput, setSecondaryInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState('');

  const adminBase = '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK';

  useEffect(() => {
    fetchBriefs();
    const kw = searchParams.get('keyword');
    if (kw) setKeyword(kw);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchBriefs() {
    setLoading(true);
    try {
      const res = await adminFetch('/api/admin/dataforseo/content-brief');
      const json = await res.json();
      setBriefs(json.data || []);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }

  async function generateBrief(e: React.FormEvent) {
    e.preventDefault();
    if (!keyword.trim()) return;

    setGenerating(true);
    setError('');
    try {
      const secondaryKeywords = secondaryInput.split(',').map(s => s.trim()).filter(Boolean);
      const res = await adminFetch('/api/admin/dataforseo/content-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetKeyword: keyword.trim(), secondaryKeywords }),
      });
      const json = await res.json();
      if (json.error) throw new Error(json.error);

      setSelectedBrief(json.data);
      await fetchBriefs();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Generation failed');
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`${adminBase}/seo-tools`} className="text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Content Briefs</h1>
          <p className="text-gray-600 text-sm">AI-generated content briefs powered by real keyword data</p>
        </div>
      </div>

      {/* Generate New Brief */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Plus className="w-5 h-5" /> Generate New Brief
        </h2>
        <form onSubmit={generateBrief} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Target Keyword</label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g., roof replacement Charlotte NC"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Keywords (comma-separated, optional)</label>
            <input
              type="text"
              value={secondaryInput}
              onChange={(e) => setSecondaryInput(e.target.value)}
              placeholder="e.g., new roof cost, roof installation, shingle replacement"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            disabled={generating}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {generating ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
            {generating ? 'Generating (30-60s)...' : 'Generate Brief'}
          </button>
        </form>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>
      )}

      {/* Brief Detail View */}
      {selectedBrief && (
        <div className="bg-white rounded-xl shadow-sm border p-6 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{selectedBrief.title}</h2>
              <p className="text-sm text-gray-500 mt-1">Target: {selectedBrief.targetKeyword} | {selectedBrief.wordCountTarget} words</p>
            </div>
            <button onClick={() => setSelectedBrief(null)} className="text-gray-400 hover:text-gray-600 text-sm">
              Close
            </button>
          </div>

          {selectedBrief.secondaryKeywords.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Secondary Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {selectedBrief.secondaryKeywords.map((kw) => (
                  <span key={kw} className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs">{kw}</span>
                ))}
              </div>
            </div>
          )}

          {selectedBrief.suggestedHeadings.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Suggested Headings</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-800">
                {selectedBrief.suggestedHeadings.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ol>
            </div>
          )}

          {selectedBrief.suggestedFaqs.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Suggested FAQs</h3>
              <div className="space-y-3">
                {selectedBrief.suggestedFaqs.map((faq, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-sm">{faq.question}</p>
                    <p className="text-sm text-gray-600 mt-1">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Full Brief</h3>
            <div className="bg-gray-50 p-4 rounded-lg prose prose-sm max-w-none whitespace-pre-wrap text-sm">
              {selectedBrief.briefContent}
            </div>
          </div>
        </div>
      )}

      {/* Existing Briefs */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Saved Briefs ({briefs.length})</h3>
        </div>
        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
          </div>
        ) : briefs.length === 0 ? (
          <p className="px-6 py-8 text-gray-500 text-center">No briefs generated yet. Create your first one above.</p>
        ) : (
          <div className="divide-y">
            {briefs.map((brief) => (
              <button
                key={brief.id}
                onClick={() => setSelectedBrief(brief)}
                className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{brief.title}</p>
                    <p className="text-sm text-gray-500">
                      {brief.targetKeyword} | {brief.wordCountTarget} words | {new Date(brief.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                    brief.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                    brief.status === 'used' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {brief.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
