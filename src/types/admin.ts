
import type { Database } from "@/integrations/supabase/types";

// Define derived types from the Supabase schema
export type PageRow = Database['public']['Tables']['pages']['Row'];
export type PageInsert = Database['public']['Tables']['pages']['Insert'];
export type PageUpdate = Database['public']['Tables']['pages']['Update'];

export type PostRow = Database['public']['Tables']['posts']['Row'];
export type PostInsert = Database['public']['Tables']['posts']['Insert'];
export type PostUpdate = Database['public']['Tables']['posts']['Update'];

export type ProfileRow = Database['public']['Tables']['profiles']['Row'];
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert'];
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update'];

// Define UI-specific types
export type PageWithAuthor = PageRow & {
  author?: ProfileRow | null;
};

export type PostWithAuthor = PostRow & {
  author?: ProfileRow | null;
};

export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';
