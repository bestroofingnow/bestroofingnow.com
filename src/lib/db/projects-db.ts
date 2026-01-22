// Database connection using Drizzle ORM with Vercel Postgres (Neon)
// For project showcase functionality (replaces PMI)

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import * as schema from './schema';

// Create drizzle instance with schema (only if configured)
let dbInstance: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb() {
  if (!dbInstance && process.env.POSTGRES_URL) {
    dbInstance = drizzle(sql, { schema });
  }
  return dbInstance;
}

// Export db for convenience (may be null if not configured)
export const projectsDb = getDb();

// Re-export schema types
export * from './schema';

// Helper to check if database is configured
export function isDatabaseConfigured(): boolean {
  return !!process.env.POSTGRES_URL;
}
