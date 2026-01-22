'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FolderOpen, Image, MapPin, Plus, Database, AlertCircle, CheckCircle } from 'lucide-react';

interface Stats {
  totalProjects: number;
  projectsWithPhotos: number;
  totalPhotos: number;
  topCities: { city: string; count: number }[];
  dbConfigured: boolean;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        // Load from PMI export for stats
        const response = await fetch('/api/projects/map');
        const data = await response.json();

        // Calculate stats from markers
        const cityStats: Record<string, number> = {};
        data.markers?.forEach((m: any) => {
          cityStats[m.city] = (cityStats[m.city] || 0) + 1;
        });

        const topCities = Object.entries(cityStats)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([city, count]) => ({ city, count }));

        setStats({
          totalProjects: data.markers?.length || 0,
          projectsWithPhotos: data.markers?.filter((m: any) => m.hasPhotos).length || 0,
          totalPhotos: data.markers?.reduce((sum: number, m: any) => sum + (m.photoCount || 0), 0) || 0,
          topCities,
          dbConfigured: data.source === 'database',
        });
      } catch (error) {
        console.error('Error loading stats:', error);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Manage your roofing project showcase</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Project
        </Link>
      </div>

      {/* Database Status */}
      <div className={`mb-8 p-4 rounded-lg flex items-center gap-3 ${
        stats?.dbConfigured ? 'bg-green-50 text-green-800' : 'bg-yellow-50 text-yellow-800'
      }`}>
        {stats?.dbConfigured ? (
          <>
            <CheckCircle className="w-5 h-5" />
            <span>Database connected - using Vercel Postgres</span>
          </>
        ) : (
          <>
            <AlertCircle className="w-5 h-5" />
            <span>Database not configured - using PMI export data (read-only mode)</span>
          </>
        )}
      </div>

      {/* Stats Cards */}
      {loading ? (
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <FolderOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">{stats?.totalProjects || 0}</p>
                <p className="text-gray-600">Total Projects</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Image className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">{stats?.totalPhotos || 0}</p>
                <p className="text-gray-600">Total Photos</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">{stats?.projectsWithPhotos || 0}</p>
                <p className="text-gray-600">Projects with Photos</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/admin/projects"
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <FolderOpen className="w-5 h-5 text-primary" />
              <span>View All Projects</span>
            </Link>
            <Link
              href="/admin/projects/new"
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <Plus className="w-5 h-5 text-primary" />
              <span>Add New Project</span>
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              target="_blank"
            >
              <MapPin className="w-5 h-5 text-primary" />
              <span>View Public Gallery</span>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Top Cities</h2>
          {stats?.topCities && stats.topCities.length > 0 ? (
            <div className="space-y-3">
              {stats.topCities.map(({ city, count }) => (
                <div key={city} className="flex items-center justify-between">
                  <span className="text-gray-700">{city}</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {count} projects
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No data available</p>
          )}
        </div>
      </div>

      {/* Setup Instructions */}
      {!stats?.dbConfigured && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Database className="w-5 h-5" />
            Database Setup Required
          </h2>
          <p className="text-gray-600 mb-4">
            To enable full functionality (adding/editing projects), you need to set up Vercel Postgres:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Go to your Vercel dashboard and add Postgres storage</li>
            <li>Run <code className="bg-gray-100 px-2 py-1 rounded">npm run db:push</code> to create tables</li>
            <li>Run <code className="bg-gray-100 px-2 py-1 rounded">npm run pmi:import</code> to import existing data</li>
            <li>Redeploy your application</li>
          </ol>
        </div>
      )}
    </div>
  );
}
