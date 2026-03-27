'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  BarChart3, Loader2, FileText, TrendingUp, TrendingDown,
  ArrowUpRight, ArrowDownRight, Minus, AlertCircle, Play,
} from 'lucide-react';
import { adminFetch } from '@/lib/admin-fetch';

interface KeyMetrics {
  totalKeywords: number;
  avgPosition: number;
  topTenKeywords: number;
  strikingDistance: number;
  totalVolume: number;
  positionGains: number;
  positionLosses: number;
  newKeywords: number;
  lostKeywords: number;
}

interface Mover {
  keyword: string;
  url: string;
  change: number;
  position: number;
}

interface Recommendation {
  priority: string;
  action: string;
  url?: string;
}

interface Report {
  id: string;
  scanId: string;
  weekOf: string;
  summary: string;
  keyMetrics: KeyMetrics;
  topGainers: Mover[];
  topLosers: Mover[];
  recommendations: Recommendation[];
  createdAt: string;
}

interface ScanRecord {
  id: string;
  status: string;
  createdAt: string;
}

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [scans, setScans] = useState<ScanRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const fetchReports = useCallback(async () => {
    try {
      const res = await adminFetch('/api/admin/seo-reports');
      const { data } = await res.json();
      const reportList = data || [];
      setReports(reportList);
      if (reportList.length > 0) setSelectedReport(reportList[0]);
    } catch (error) {
      console.error('Failed to fetch reports:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchScans = useCallback(async () => {
    try {
      const res = await adminFetch('/api/admin/seo-scans');
      const { data } = await res.json();
      setScans((data || []).filter((s: ScanRecord) => s.status === 'completed'));
    } catch (error) {
      console.error('Failed to fetch scans:', error);
    }
  }, []);

  useEffect(() => { fetchReports(); fetchScans(); }, [fetchReports, fetchScans]);

  async function handleGenerate(scanId: string) {
    setGenerating(true);
    setMessage(null);
    try {
      const res = await adminFetch('/api/admin/seo-reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scanId }),
      });
      const { data, error } = await res.json();
      if (error) {
        setMessage(`Error: ${error}`);
      } else {
        setMessage('Report generated successfully.');
        fetchReports();
      }
    } catch {
      setMessage('Report generation failed.');
    } finally {
      setGenerating(false);
    }
  }

  // Find scans without reports
  const scansWithoutReports = scans.filter(
    s => !reports.some(r => r.scanId === s.id)
  );

  const r = selectedReport;
  const m = r?.keyMetrics;

  // Get previous report for comparison
  const currentIdx = reports.findIndex(rp => rp.id === r?.id);
  const prevReport = currentIdx >= 0 && currentIdx < reports.length - 1 ? reports[currentIdx + 1] : null;
  const pm = prevReport?.keyMetrics;

  const delta = (current: number, prev: number | undefined) => {
    if (prev == null) return null;
    return current - prev;
  };

  const deltaDisplay = (d: number | null, inverted = false) => {
    if (d == null) return <Minus className="w-3 h-3 text-gray-400 inline" />;
    const isGood = inverted ? d < 0 : d > 0;
    if (d === 0) return <Minus className="w-3 h-3 text-gray-400 inline" />;
    return (
      <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${isGood ? 'text-green-700' : 'text-red-700'}`}>
        {isGood ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
        {Math.abs(d)}
      </span>
    );
  };

  const priorityColor = (p: string) => {
    switch (p) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  if (loading) {
    return <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-gray-400" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-600" /> Weekly Reports
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            AI-generated weekly SEO summaries with trends and recommendations.
          </p>
        </div>
        {scansWithoutReports.length > 0 && (
          <div className="flex items-center gap-2">
            <select
              id="scan-select"
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
              defaultValue={scansWithoutReports[0]?.id}
            >
              {scansWithoutReports.map(s => (
                <option key={s.id} value={s.id}>
                  Scan: {new Date(s.createdAt).toLocaleDateString()}
                </option>
              ))}
            </select>
            <button
              onClick={() => {
                const sel = (document.getElementById('scan-select') as HTMLSelectElement)?.value;
                if (sel) handleGenerate(sel);
              }}
              disabled={generating}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2 font-medium"
            >
              {generating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
              Generate Report
            </button>
          </div>
        )}
      </div>

      {message && (
        <div className={`p-4 rounded-lg text-sm ${
          message.startsWith('Error') ? 'bg-red-50 text-red-800 border border-red-200' : 'bg-green-50 text-green-800 border border-green-200'
        }`}>
          {message}
        </div>
      )}

      {reports.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border p-8 text-center text-gray-500">
          No reports yet. Run a scan and generate a report.
        </div>
      ) : (
        <>
          {/* Report selector */}
          {reports.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {reports.map((rp) => (
                <button
                  key={rp.id}
                  onClick={() => setSelectedReport(rp)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedReport?.id === rp.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Week of {new Date(rp.weekOf).toLocaleDateString()}
                </button>
              ))}
            </div>
          )}

          {r && m && (
            <>
              {/* Summary */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h2 className="font-semibold text-gray-900 mb-2">Executive Summary</h2>
                    <p className="text-gray-700 leading-relaxed">{r.summary}</p>
                  </div>
                </div>
              </div>

              {/* Key metrics grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-white rounded-xl shadow-sm border p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Keywords</p>
                  <div className="flex items-end gap-2 mt-1">
                    <p className="text-2xl font-bold">{m.totalKeywords.toLocaleString()}</p>
                    {deltaDisplay(delta(m.totalKeywords, pm?.totalKeywords))}
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Avg Position</p>
                  <div className="flex items-end gap-2 mt-1">
                    <p className="text-2xl font-bold">{m.avgPosition}</p>
                    {deltaDisplay(delta(m.avgPosition, pm?.avgPosition), true)}
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Top 10</p>
                  <div className="flex items-end gap-2 mt-1">
                    <p className="text-2xl font-bold text-green-700">{m.topTenKeywords}</p>
                    {deltaDisplay(delta(m.topTenKeywords, pm?.topTenKeywords))}
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Striking Dist</p>
                  <div className="flex items-end gap-2 mt-1">
                    <p className="text-2xl font-bold text-yellow-700">{m.strikingDistance}</p>
                    {deltaDisplay(delta(m.strikingDistance, pm?.strikingDistance))}
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Total Volume</p>
                  <div className="flex items-end gap-2 mt-1">
                    <p className="text-2xl font-bold">{m.totalVolume.toLocaleString()}</p>
                    {deltaDisplay(delta(m.totalVolume, pm?.totalVolume))}
                  </div>
                </div>
              </div>

              {/* Movement stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <p className="text-xl font-bold text-green-800">{m.positionGains}</p>
                  <p className="text-xs text-green-600 font-medium">Position Gains</p>
                </div>
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <p className="text-xl font-bold text-red-800">{m.positionLosses}</p>
                  <p className="text-xs text-red-600 font-medium">Position Losses</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-xl font-bold text-blue-800">{m.newKeywords}</p>
                  <p className="text-xs text-blue-600 font-medium">New Keywords</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <p className="text-xl font-bold text-gray-800">{m.lostKeywords}</p>
                  <p className="text-xs text-gray-600 font-medium">Lost Keywords</p>
                </div>
              </div>

              {/* Gainers & Losers */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="px-5 py-3 border-b bg-green-50">
                    <h3 className="font-semibold text-green-800 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" /> Top Gainers
                    </h3>
                  </div>
                  {r.topGainers.length === 0 ? (
                    <p className="p-5 text-gray-500 text-sm text-center">No gainers this week</p>
                  ) : (
                    <div className="divide-y">
                      {r.topGainers.map((g, i) => (
                        <div key={i} className="px-5 py-3 flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">{g.keyword}</p>
                            <p className="text-xs text-gray-400">{g.url}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-green-700 font-semibold">+{g.change}</p>
                            <p className="text-xs text-gray-500">#{g.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="px-5 py-3 border-b bg-red-50">
                    <h3 className="font-semibold text-red-800 flex items-center gap-2">
                      <TrendingDown className="w-4 h-4" /> Top Losers
                    </h3>
                  </div>
                  {r.topLosers.length === 0 ? (
                    <p className="p-5 text-gray-500 text-sm text-center">No losers this week</p>
                  ) : (
                    <div className="divide-y">
                      {r.topLosers.map((l, i) => (
                        <div key={i} className="px-5 py-3 flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">{l.keyword}</p>
                            <p className="text-xs text-gray-400">{l.url}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-red-700 font-semibold">{l.change}</p>
                            <p className="text-xs text-gray-500">#{l.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Recommendations */}
              {r.recommendations.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="px-5 py-3 border-b">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600" /> Recommendations
                    </h3>
                  </div>
                  <div className="divide-y">
                    {r.recommendations.map((rec, i) => (
                      <div key={i} className="px-5 py-3 flex items-start gap-3">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium shrink-0 mt-0.5 ${priorityColor(rec.priority)}`}>
                          {rec.priority}
                        </span>
                        <div>
                          <p className="text-sm text-gray-800">{rec.action}</p>
                          {rec.url && (
                            <p className="text-xs text-blue-600 mt-0.5">{rec.url}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
