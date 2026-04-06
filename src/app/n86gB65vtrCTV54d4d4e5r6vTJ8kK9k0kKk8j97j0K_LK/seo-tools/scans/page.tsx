'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Play, Loader2, CheckCircle, XCircle, Clock, TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';
import { adminFetch } from '@/lib/admin-fetch';

interface ScanRecord {
  id: string;
  status: string;
  trigger: string;
  pagesScanned: number;
  keywordsTracked: number;
  totalVolume: number;
  avgPosition: number | null;
  topTenCount: number;
  strikingDistanceCount: number;
  errorLog: string | null;
  startedAt: string | null;
  completedAt: string | null;
  createdAt: string;
}

export default function ScansPage() {
  const [scans, setScans] = useState<ScanRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);

  const adminBase = '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK';

  const fetchScans = useCallback(async () => {
    try {
      const res = await adminFetch('/api/admin/seo-scans');
      const { data } = await res.json();
      setScans(data || []);
    } catch (error) {
      console.error('Failed to fetch scans:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchScans(); }, [fetchScans]);

  async function handleRunScan() {
    setScanning(true);
    setScanResult(null);
    try {
      const res = await adminFetch('/api/admin/seo-scans', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trigger: 'manual' }),
      });
      const { data, error } = await res.json();
      if (error) {
        setScanResult(`Error: ${error}`);
      } else {
        setScanResult(
          `Scan complete! ${data.keywordsTracked} keywords across ${data.pagesScanned} pages. ` +
          `Top 10: ${data.topTenCount}, Striking distance: ${data.strikingDistanceCount}`,
        );
        fetchScans();
      }
    } catch (error) {
      setScanResult('Scan failed. Check console for details.');
    } finally {
      setScanning(false);
    }
  }

  function formatDate(dateStr: string | null): string {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: '2-digit',
    });
  }

  function formatDuration(start: string | null, end: string | null): string {
    if (!start || !end) return '—';
    const ms = new Date(end).getTime() - new Date(start).getTime();
    if (ms < 60000) return `${Math.round(ms / 1000)}s`;
    return `${Math.round(ms / 60000)}m ${Math.round((ms % 60000) / 1000)}s`;
  }

  const statusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'failed': return <XCircle className="w-4 h-4 text-red-600" />;
      case 'running': return <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Site Scans</h1>
          <p className="text-gray-600 text-sm mt-1">
            Track keyword rankings across all pages. Scans run weekly via cron or manually.
          </p>
        </div>
        <button
          onClick={handleRunScan}
          disabled={scanning}
          className="bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center gap-2 font-medium"
        >
          {scanning ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
          {scanning ? 'Scanning...' : 'Run Scan Now'}
        </button>
      </div>

      {scanResult && (
        <div className={`p-4 rounded-lg text-sm ${
          scanResult.startsWith('Error') ? 'bg-red-50 text-red-800 border border-red-200' : 'bg-green-50 text-green-800 border border-green-200'
        }`}>
          {scanResult}
        </div>
      )}

      {/* Latest scan summary cards */}
      {scans.length > 0 && scans[0].status === 'completed' && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Keywords Tracked</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{scans[0].keywordsTracked.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Avg Position</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{scans[0].avgPosition ?? '—'}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-green-600" /> Top 10
            </p>
            <p className="text-2xl font-bold text-green-700 mt-1">{scans[0].topTenCount}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide flex items-center gap-1">
              <TrendingDown className="w-3 h-3 text-yellow-600" /> Striking Distance
            </p>
            <p className="text-2xl font-bold text-yellow-700 mt-1">{scans[0].strikingDistanceCount}</p>
          </div>
        </div>
      )}

      {/* Scan history table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="font-semibold text-gray-900">Scan History</h2>
        </div>
        {loading ? (
          <div className="p-8 flex justify-center">
            <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
          </div>
        ) : scans.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No scans yet. Click "Run Scan Now" to start your first scan.
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-600">Status</th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">Trigger</th>
                <th className="px-6 py-3 text-right font-medium text-gray-600">Pages</th>
                <th className="px-6 py-3 text-right font-medium text-gray-600">Keywords</th>
                <th className="px-6 py-3 text-right font-medium text-gray-600">Avg Pos</th>
                <th className="px-6 py-3 text-right font-medium text-gray-600">Top 10</th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">Duration</th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">Date</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {scans.map((scan) => (
                <tr key={scan.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-3">
                    <span className="flex items-center gap-1.5 capitalize">
                      {statusIcon(scan.status)} {scan.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 capitalize text-gray-600">{scan.trigger}</td>
                  <td className="px-6 py-3 text-right">{scan.pagesScanned}</td>
                  <td className="px-6 py-3 text-right">{scan.keywordsTracked.toLocaleString()}</td>
                  <td className="px-6 py-3 text-right">{scan.avgPosition ?? '—'}</td>
                  <td className="px-6 py-3 text-right">{scan.topTenCount}</td>
                  <td className="px-6 py-3 text-gray-600">
                    {formatDuration(scan.startedAt, scan.completedAt)}
                  </td>
                  <td className="px-6 py-3 text-gray-600">{formatDate(scan.createdAt)}</td>
                  <td className="px-6 py-3">
                    {scan.status === 'completed' && (
                      <Link
                        href={`${adminBase}/seo-tools/scans/${scan.id}`}
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        View <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
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
