'use client';

import { useState, useEffect, useCallback } from 'react';
import { Shield, Loader2, AlertTriangle, CheckCircle, XCircle, Info, Play } from 'lucide-react';
import { adminFetch } from '@/lib/admin-fetch';

interface ScanRecord {
  id: string;
  status: string;
  createdAt: string;
}

interface AuditResult {
  id: string;
  url: string;
  statusCode: number;
  title: string | null;
  titleLength: number;
  metaDescription: string | null;
  metaDescriptionLength: number;
  h1Count: number;
  h2Count: number;
  wordCount: number;
  imageCount: number;
  imagesWithoutAlt: number;
  internalLinks: number;
  externalLinks: number;
  hasSchemaMarkup: boolean;
  hasFaqSchema: boolean;
  score: number;
  issues: { severity: string; message: string; element?: string }[];
}

export default function AuditsPage() {
  const [scans, setScans] = useState<ScanRecord[]>([]);
  const [selectedScan, setSelectedScan] = useState<string | null>(null);
  const [audits, setAudits] = useState<AuditResult[]>([]);
  const [expandedUrl, setExpandedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [auditing, setAuditing] = useState(false);
  const [auditSummary, setAuditSummary] = useState<string | null>(null);

  const fetchScans = useCallback(async () => {
    try {
      const res = await adminFetch('/api/admin/seo-scans');
      const { data } = await res.json();
      const completed = (data || []).filter((s: ScanRecord) => s.status === 'completed');
      setScans(completed);
      if (completed.length > 0) setSelectedScan(completed[0].id);
    } catch (error) {
      console.error('Failed to fetch scans:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchAudits = useCallback(async (scanId: string) => {
    try {
      const res = await adminFetch(`/api/admin/seo-scans/${scanId}/audits?sort=score`);
      const { data } = await res.json();
      setAudits(data || []);
    } catch (error) {
      console.error('Failed to fetch audits:', error);
    }
  }, []);

  useEffect(() => { fetchScans(); }, [fetchScans]);
  useEffect(() => { if (selectedScan) fetchAudits(selectedScan); }, [selectedScan, fetchAudits]);

  async function handleRunAudit() {
    if (!selectedScan) return;
    setAuditing(true);
    setAuditSummary(null);
    try {
      const res = await adminFetch(`/api/admin/seo-scans/${selectedScan}/audits`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ maxPages: 200 }),
      });
      const { data, error } = await res.json();
      if (error) {
        setAuditSummary(`Error: ${error}`);
      } else {
        setAuditSummary(
          `Audited ${data.pagesAudited} pages. Avg score: ${data.avgScore}/100. ` +
          `Critical: ${data.criticalIssues}, High: ${data.highIssues}`,
        );
        fetchAudits(selectedScan);
      }
    } catch {
      setAuditSummary('Audit failed. Check console.');
    } finally {
      setAuditing(false);
    }
  }

  const scoreColor = (score: number) => {
    if (score >= 80) return 'text-green-700 bg-green-100';
    if (score >= 60) return 'text-yellow-700 bg-yellow-100';
    if (score >= 40) return 'text-orange-700 bg-orange-100';
    return 'text-red-700 bg-red-100';
  };

  const severityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <XCircle className="w-3.5 h-3.5 text-red-600 shrink-0" />;
      case 'high': return <AlertTriangle className="w-3.5 h-3.5 text-orange-600 shrink-0" />;
      case 'medium': return <AlertTriangle className="w-3.5 h-3.5 text-yellow-600 shrink-0" />;
      case 'low': return <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />;
      default: return <Info className="w-3.5 h-3.5 text-gray-400 shrink-0" />;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Shield className="w-6 h-6 text-rose-600" /> Page Audits
          </h1>
          <p className="text-gray-600 text-sm mt-1">On-page SEO analysis: meta, headings, content, schema, links.</p>
        </div>
        <div className="flex items-center gap-3">
          {scans.length > 0 && (
            <select
              value={selectedScan ?? ''}
              onChange={(e) => setSelectedScan(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
            >
              {scans.map((s) => (
                <option key={s.id} value={s.id}>
                  Scan: {new Date(s.createdAt).toLocaleDateString()}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleRunAudit}
            disabled={auditing || !selectedScan}
            className="bg-rose-600 text-white px-5 py-2.5 rounded-lg hover:bg-rose-700 transition-colors disabled:opacity-50 flex items-center gap-2 font-medium"
          >
            {auditing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
            {auditing ? 'Auditing...' : 'Run Audit'}
          </button>
        </div>
      </div>

      {auditSummary && (
        <div className={`p-4 rounded-lg text-sm ${
          auditSummary.startsWith('Error') ? 'bg-red-50 text-red-800 border border-red-200' : 'bg-green-50 text-green-800 border border-green-200'
        }`}>
          {auditSummary}
        </div>
      )}

      {scans.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border p-8 text-center text-gray-500">
          Run a site scan first, then come back to audit pages.
        </div>
      ) : audits.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border p-8 text-center text-gray-500">
          No audits yet for this scan. Click "Run Audit" to analyze all pages.
        </div>
      ) : (
        <>
          {/* Score distribution */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Excellent (80+)', count: audits.filter(a => a.score >= 80).length, color: 'bg-green-100 text-green-800' },
              { label: 'Good (60-79)', count: audits.filter(a => a.score >= 60 && a.score < 80).length, color: 'bg-yellow-100 text-yellow-800' },
              { label: 'Needs Work (40-59)', count: audits.filter(a => a.score >= 40 && a.score < 60).length, color: 'bg-orange-100 text-orange-800' },
              { label: 'Poor (<40)', count: audits.filter(a => a.score < 40).length, color: 'bg-red-100 text-red-800' },
            ].map((bucket) => (
              <div key={bucket.label} className={`rounded-xl p-4 ${bucket.color}`}>
                <p className="text-2xl font-bold">{bucket.count}</p>
                <p className="text-xs font-medium mt-1">{bucket.label}</p>
              </div>
            ))}
          </div>

          {/* Audit results table */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Score</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">URL</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600">Words</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600">H1</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600">H2s</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600">Images</th>
                  <th className="px-4 py-3 text-center font-medium text-gray-600">Schema</th>
                  <th className="px-4 py-3 text-center font-medium text-gray-600">FAQ</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600">Issues</th>
                </tr>
              </thead>
              <tbody>
                {audits.map((audit) => (
                  <>
                    <tr
                      key={audit.id}
                      className="border-t hover:bg-gray-50 cursor-pointer"
                      onClick={() => setExpandedUrl(expandedUrl === audit.url ? null : audit.url)}
                    >
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${scoreColor(audit.score)}`}>
                          {audit.score}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium truncate max-w-[250px]">{audit.url}</td>
                      <td className="px-4 py-3 text-right">{audit.wordCount.toLocaleString()}</td>
                      <td className="px-4 py-3 text-right">{audit.h1Count}</td>
                      <td className="px-4 py-3 text-right">{audit.h2Count}</td>
                      <td className="px-4 py-3 text-right">
                        {audit.imageCount}
                        {audit.imagesWithoutAlt > 0 && (
                          <span className="text-red-500 ml-1">(-{audit.imagesWithoutAlt})</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {audit.hasSchemaMarkup ? <CheckCircle className="w-4 h-4 text-green-600 inline" /> : <XCircle className="w-4 h-4 text-red-400 inline" />}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {audit.hasFaqSchema ? <CheckCircle className="w-4 h-4 text-green-600 inline" /> : <XCircle className="w-4 h-4 text-gray-300 inline" />}
                      </td>
                      <td className="px-4 py-3 text-right">{audit.issues.length}</td>
                    </tr>
                    {expandedUrl === audit.url && audit.issues.length > 0 && (
                      <tr key={`${audit.id}-issues`} className="bg-gray-50">
                        <td colSpan={9} className="px-6 py-3">
                          <div className="space-y-1.5">
                            {audit.issues.map((issue, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm">
                                {severityIcon(issue.severity)}
                                <span className="text-gray-700">{issue.message}</span>
                                {issue.element && (
                                  <code className="text-xs bg-gray-200 px-1.5 py-0.5 rounded ml-1 truncate max-w-[300px]">
                                    {issue.element}
                                  </code>
                                )}
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
