import { createClient, SupabaseClient } from '@supabase/supabase-js';

const rawUrl = import.meta.env.VITE_SUPABASE_URL;
const rawKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check whether valid, non-placeholder credentials are provided
export const isSupabaseConfigured = Boolean(
  rawUrl &&
    typeof rawUrl === 'string' &&
    rawUrl.trim().length > 0 &&
    !rawUrl.includes('placeholder') &&
    rawKey &&
    typeof rawKey === 'string' &&
    rawKey.trim().length > 0 &&
    !rawKey.includes('placeholder')
);

// Fallback dummy credentials to prevent createClient from throwing an uncaught exception
// when deployed in environments (like Cloudflare Pages) where env vars are not yet configured.
const supabaseUrl = isSupabaseConfigured ? (rawUrl as string) : 'https://placeholder-project.supabase.co';
const supabaseAnonKey = isSupabaseConfigured ? (rawKey as string) : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder';

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
