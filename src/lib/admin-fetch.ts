/**
 * Authenticated fetch wrapper for admin API calls.
 * Reads the admin token from sessionStorage and attaches it as X-Admin-Token header.
 */
export function adminFetch(url: string, options: RequestInit = {}): Promise<Response> {
  const token = typeof window !== 'undefined' ? sessionStorage.getItem('admin_token') : null;

  const headers = new Headers(options.headers);
  if (token) {
    headers.set('X-Admin-Token', token);
  }

  return fetch(url, { ...options, headers });
}
