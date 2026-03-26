'use client';

import { useState } from 'react';
import { Search, Download, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { adminFetch } from '@/lib/admin-fetch';

interface KeywordResult {
  keyword: string;
  searchVolume: number;
  cpc: number;
  competition: number;
  difficulty: number;
  trends: number[];
}

export default function KeywordsPage() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<KeywordResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const adminBase = '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK';

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const keywords = input.split('\n').map(k => k.trim()).filter(Boolean);
    if (keywords.length === 0) return;

    setLoading(true);
    setError('');
    try {
      const res = await adminFetch('/api/admin/dataforseo/keywords', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keywords }),
      });
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      setResults(json.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
    } finally {
      setLoading(false);
    }
  }

  function exportCsv() {
    if (!results.length) return;
    const header = 'Keyword,Search Volume,CPC,Competition,Difficulty';
    const rows = results.map(r =>
      `"${r.keyword}",${r.searchVolume},${r.cpc.toFixed(2)},${(r.competition * 100).toFixed(0)}%,${r.difficulty}%`
    );
    const csv = [header, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `keyword-research-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // Mini sparkline renderer
  function Sparkline({ data }: { data: number[] }) {
    if (!data?.length) return <span className="text-gray-400">—</span>;
    const max = Math.max(...data, 1);
    const points = data.map((v, i) => `${(i / (data.length - 1)) * 60},${20 - (v / max) * 18}`).join(' ');
    return (
      <svg width="60" height="20" className="inline-block">
        <polyline points={points} fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`${adminBase}/seo-tools`} className="text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Keyword Research</h1>
          <p className="text-gray-600 text-sm">Bulk keyword analysis with DataForSEO</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter keywords (one per line, max 50)
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={6}
              placeholder={"roof replacement Charlotte NC\nroof repair near me\nhow much does a new roof cost\nstorm damage roof repair\nroofing contractor Charlotte"}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"
            />
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              Analyze Keywords
            </button>
            {results.length > 0 && (
              <button
                type="button"
                onClick={exportCsv}
                className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            )}
          </div>
        </form>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>
      )}

      {results.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Keyword</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600">Volume</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600">CPC</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600">Difficulty</th>
                  <th className="px-4 py-3 text-center font-medium text-gray-600">12mo Trend</th>
                  <th className="px-4 py-3 text-center font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {results.map((kw) => (
                  <tr key={kw.keyword} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{kw.keyword}</td>
                    <td className="px-4 py-3 text-right tabular-nums">{kw.searchVolume.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right tabular-nums">${kw.cpc.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                        kw.difficulty <= 30 ? 'bg-green-100 text-green-800' :
                        kw.difficulty <= 60 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {kw.difficulty}%
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Sparkline data={kw.trends} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Link
                        href={`${adminBase}/seo-tools/serp?keyword=${encodeURIComponent(kw.keyword)}`}
                        className="text-primary hover:underline text-xs"
                      >
                        SERP
                      </Link>
                      <span className="mx-1 text-gray-300">|</span>
                      <Link
                        href={`${adminBase}/seo-tools/briefs?keyword=${encodeURIComponent(kw.keyword)}`}
                        className="text-primary hover:underline text-xs"
                      >
                        Brief
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
