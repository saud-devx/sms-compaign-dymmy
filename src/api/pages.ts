
import { supabase } from '@/integrations/supabase/client';
import { PageInsert, PageRow, PageUpdate } from '@/types/admin';
import { hybridPagesApi } from './hybrid';

// Export hybrid API functions for backwards compatibility
export const fetchPages = hybridPagesApi.fetchPages;
export const fetchPageBySlug = hybridPagesApi.fetchPageBySlug;
export const fetchPageById = hybridPagesApi.fetchPageById;
export const createPage = hybridPagesApi.createPage;
export const updatePage = hybridPagesApi.updatePage;
export const deletePage = hybridPagesApi.deletePage;

// Original Supabase functions (kept for direct access if needed)
export const supabaseFetchPages = async (): Promise<PageRow[]> => {
  const { data, error } = await supabase
    .from('pages')
    .select(`
      *,
      author:author_id(id, username, full_name, avatar_url)
    `)
    .order('title', { ascending: true });

  if (error) {
    console.error('Error fetching pages:', error);
    throw error;
  }

  return data || [];
};

export const supabaseFetchPageBySlug = async (slug: string): Promise<PageRow | null> => {
  const { data, error } = await supabase
    .from('pages')
    .select(`
      *,
      author:author_id(id, username, full_name, avatar_url)
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') { // PGRST116 is the error code for no rows returned
      console.error('Error fetching page by slug:', error);
    }
    return null;
  }

  return data;
};

export const supabaseFetchPageById = async (id: string): Promise<PageRow | null> => {
  const { data, error } = await supabase
    .from('pages')
    .select(`
      *,
      author:author_id(id, username, full_name, avatar_url)
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching page by id:', error);
    return null;
  }

  return data;
};

export const supabaseCreatePage = async (page: PageInsert): Promise<PageRow> => {
  const { data, error } = await supabase
    .from('pages')
    .insert([{
      ...page,
      author_id: (await supabase.auth.getUser()).data.user?.id
    }])
    .select()
    .single();

  if (error) {
    console.error('Error creating page:', error);
    throw error;
  }

  return data;
};

export const supabaseUpdatePage = async (id: string, page: PageUpdate): Promise<PageRow> => {
  const { data, error } = await supabase
    .from('pages')
    .update(page)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating page:', error);
    throw error;
  }

  return data;
};

export const supabaseDeletePage = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from('pages')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting page:', error);
    throw error;
  }
};
