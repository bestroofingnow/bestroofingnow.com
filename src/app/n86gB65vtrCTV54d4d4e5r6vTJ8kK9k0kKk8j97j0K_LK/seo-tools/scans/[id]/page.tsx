'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, TrendingDown, Minus, Loader2 } from 'lucide-react';
import { adminFetch } from '@/lib/admin-fetch';

interface PageSummary {
  url: string;
  totalKeywords: number;
  bestPosition: number | null;
  bestKeyword: string | null;
  totalVolume: number;
}

interface RankingRow {
  id: string;
  url: string;
  keyword: string;
  position: number | null;
  previousPosition: number | null;
  positionChange: number | null;
  searchVolume: number;
  cpc: number;
}

interface Movers {
  gainers: RankingRow[];
  losers: RankingRow[];
}

type Tab = 'pages' | 'movers' | 'keywords';

export default function ScanDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [tab, setTab] = useState<Tab>('pages');
  const [pages, setPages] = useState<PageSummary[]>([]);
  const [movers, setMovers] = useState<Movers | null>(null);
  const [rankings, setRankings] = useState<RankingRow[]>([]);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const adminBase = '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK';

  const fetchPages = useCallback(async () => {
    try {
      const res = await adminFetch(`/api/admin/seo-scans/${id}`);
      const { data } = await res.json();
      setPages(data || []);
    } catch (error) {
      console.error('Failed to fetch pages:', error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const fetchMovers = useCallback(async () => {
    try {
      const res = await adminFetch(`/api/admin/seo-scans/${id}/movers`);
      const { data } = await res.json();
      setMovers(data || null);
    } catch (error) {
      console.error('Failed to fetch movers:', error);
    }
  }, [id]);

  const fetchRankings = useCallback(async (url?: string) => {
    try {
      const query = url ? `?url=${encodeURIComponent(url)}` : '';
      const res = await adminFetch(`/api/admin/seo-scans/${id}/rankings${query}`);
      const { data } = await res.json();
      setRankings(data || []);
    } catch (error) {
      console.error('Failed to fetch rankings:', error);
    }
  }, [id]);

  useEffect(() => { fetchPages(); }, [fetchPages]);

  useEffect(() => {
    if (tab === 'movers' && !movers) fetchMovers();
    if (tab === 'keywords') fetchRankings(selectedUrl ?? undefined);
  }, [tab, selectedUrl, movers, fetchMovers, fetchRankings]);

  function handlePageClick(url: string) {
    setSelectedUrl(url);
    setTab('keywords');
  }

  const changeIcon = (change: number | null) => {
    if (change == null || change === 0) return <Minus className="w-3 h-3 text-gray-400" />;
    if (change > 0) return <TrendingUp className="w-3 h-3 text-green-600" />;
    return <TrendingDown className="w-3 h-3 text-red-600" />;
  };

  const changeColor = (change: number | null) => {
    if (change == null || change === 0) return 'text-gray-500';
    return change > 0 ? 'text-green-700' : 'text-red-700';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link href={`${adminBase}/seo-tools/scans`} className="text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Scan Details</h1>
          <p className="text-gray-500 text-sm">ID: {id}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 rounded-lg p-1 w-fit">
        {(['pages', 'movers', 'keywords'] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => { setTab(t); if (t === 'keywords') setSelectedUrl(null); }}
            className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
              tab === t ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
        </div>
      ) : (
        <>
          {/* Pages Tab */}
          {tab === 'pages' && (
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-gray-600">Page URL</th>
                    <th className="px-6 py-3 text-right font-medium text-gray-600">Keywords</th>
                    <th className="px-6 py-3 text-right font-medium text-gray-600">Best Position</th>
                    <th className="px-6 py-3 text-left font-medium text-gray-600">Best Keyword</th>
                    <th className="px-6 py-3 text-right font-medium text-gray-600">Total Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {pages.map((page) => (
                    <tr
                      key={page.url}
                      className="border-t hover:bg-gray-50 cursor-pointer"
                      onClick={() => handlePageClick(page.url)}
                    >
                      <td className="px-6 py-3 font-medium text-primary hover:underline">{page.url}</td>
                      <td className="px-6 py-3 text-right">{page.totalKeywords}</td>
                      <td className="px-6 py-3 text-right">
                        {page.bestPosition != null ? (
                          <span className={page.bestPosition <= 10 ? 'text-green-700 font-semibold' : page.bestPosition <= 30 ? 'text-yellow-700' : 'text-gray-600'}>
                            #{page.bestPosition}
                          </span>
                        ) : '—'}
                      </td>
                      <td className="px-6 py-3 text-gray-600 truncate max-w-[200px]">{page.bestKeyword ?? '—'}</td>
                      <td className="px-6 py-3 text-right">{page.totalVolume.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {pages.length === 0 && (
                <p className="p-8 text-center text-gray-500">No pages found in this scan.</p>
              )}
            </div>
          )}

          {/* Movers Tab */}
          {tab === 'movers' && movers && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="px-6 py-4 border-b bg-green-50">
                  <h3 className="font-semibold text-green-800 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> Top Gainers
                  </h3>
                </div>
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium text-gray-600">Keyword</th>
                      <th className="px-4 py-2 text-right font-medium text-gray-600">Pos</th>
                      <th className="px-4 py-2 text-right font-medium text-gray-600">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movers.gainers.map((r) => (
                      <tr key={r.id} className="border-t">
                        <td className="px-4 py-2">
                          <div className="font-medium">{r.keyword}</div>
                          <div className="text-xs text-gray-400">{r.url}</div>
                        </td>
                        <td className="px-4 py-2 text-right">#{r.position}</td>
                        <td className="px-4 py-2 text-right text-green-700 font-semibold">+{r.positionChange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {movers.gainers.length === 0 && (
                  <p className="p-6 text-center text-gray-500 text-sm">No gainers (first scan or no changes)</p>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="px-6 py-4 border-b bg-red-50">
                  <h3 className="font-semibold text-red-800 flex items-center gap-2">
                    <TrendingDown className="w-4 h-4" /> Top Losers
                  </h3>
                </div>
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium text-gray-600">Keyword</th>
                      <th className="px-4 py-2 text-right font-medium text-gray-600">Pos</th>
                      <th className="px-4 py-2 text-right font-medium text-gray-600">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movers.losers.map((r) => (
                      <tr key={r.id} className="border-t">
                        <td className="px-4 py-2">
                          <div className="font-medium">{r.keyword}</div>
                          <div className="text-xs text-gray-400">{r.url}</div>
                        </td>
                        <td className="px-4 py-2 text-right">#{r.position}</td>
                        <td className="px-4 py-2 text-right text-red-700 font-semibold">{r.positionChange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {movers.losers.length === 0 && (
                  <p className="p-6 text-center text-gray-500 text-sm">No losers (first scan or no changes)</p>
                )}
              </div>
            </div>
          )}

          {/* Keywords Tab */}
          {tab === 'keywords' && (
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              {selectedUrl && (
                <div className="px-6 py-3 border-b bg-blue-50 flex items-center justify-between">
                  <span className="text-sm text-blue-800">
                    Filtering: <strong>{selectedUrl}</strong>
                  </span>
                  <button
                    onClick={() => { setSelectedUrl(null); fetchRankings(); }}
                    className="text-xs text-blue-600 hover:underline"
                  >
                    Show all
                  </button>
                </div>
              )}
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-gray-600">Keyword</th>
                    <th className="px-6 py-3 text-left font-medium text-gray-600">URL</th>
                    <th className="px-6 py-3 text-right font-medium text-gray-600">Position</th>
                    <th className="px-6 py-3 text-right font-medium text-gray-600">Change</th>
                    <th className="px-6 py-3 text-right font-medium text-gray-600">Volume</th>
                    <th className="px-6 py-3 text-right font-medium text-gray-600">CPC</th>
                  </tr>
                </thead>
                <tbody>
                  {rankings.map((r) => (
                    <tr key={r.id} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-3 font-medium">{r.keyword}</td>
                      <td className="px-6 py-3 text-gray-500 truncate max-w-[200px]">{r.url}</td>
                      <td className="px-6 py-3 text-right">
                        {r.position != null ? (
                          <span className={r.position <= 10 ? 'text-green-700 font-semibold' : r.position <= 30 ? 'text-yellow-700' : ''}>
                            #{r.position}
                          </span>
                        ) : '—'}
                      </td>
                      <td className="px-6 py-3 text-right">
                        <span className={`flex items-center justify-end gap-1 ${changeColor(r.positionChange)}`}>
                          {changeIcon(r.positionChange)}
                          {r.positionChange != null && r.positionChange !== 0
                            ? (r.positionChange > 0 ? `+${r.positionChange}` : r.positionChange)
                            : '—'}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-right">{r.searchVolume.toLocaleString()}</td>
                      <td className="px-6 py-3 text-right">${r.cpc?.toFixed(2) ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {rankings.length === 0 && (
                <p className="p-8 text-center text-gray-500">No keyword data found.</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
