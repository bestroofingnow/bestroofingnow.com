'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FolderOpen, FileText, Megaphone, LogOut, Menu, X, Search, BookOpen, MessageSquare } from 'lucide-react';

// Password verified server-side via /api/admin/auth
// The ADMIN_PASSWORD env var must be set (no NEXT_PUBLIC_ prefix — server-only)

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if already authenticated
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        const { token } = await res.json();
        sessionStorage.setItem('admin_auth', 'true');
        sessionStorage.setItem('admin_token', token);
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('Invalid password');
      }
    } catch {
      setError('Login failed. Please try again.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter admin password"
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const navItems = [
    { href: '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/projects', icon: FolderOpen, label: 'Projects' },
    { href: '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/blogs', icon: FileText, label: 'Blog Posts' },
    { href: '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/cta-banners', icon: Megaphone, label: 'CTA Banners' },
    { href: '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/seo-tools', icon: Search, label: 'SEO Tools' },
    { href: '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/knowledge-base', icon: BookOpen, label: 'Knowledge Base' },
    { href: '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/chat-analytics', icon: MessageSquare, label: 'Chat Analytics' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm p-4 flex items-center justify-between">
        <h1 className="font-bold text-lg">Admin Panel</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2">
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transition-transform duration-300`}
        >
          <div className="p-6">
            <h1 className="text-xl font-bold">Admin Panel</h1>
            <p className="text-gray-400 text-sm">Project Management</p>
          </div>

          <nav className="px-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 w-full text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8 min-h-screen">{children}</main>
      </div>
    </div>
  );
}
