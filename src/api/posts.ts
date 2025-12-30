
import { supabase } from '@/integrations/supabase/client';
import { PostInsert, PostRow, PostUpdate } from '@/types/admin';
import { hybridPostsApi } from './hybrid';

// Export hybrid API functions for backwards compatibility
export const fetchPosts = hybridPostsApi.fetchPosts;
export const fetchPostBySlug = hybridPostsApi.fetchPostBySlug;
export const fetchPostById = hybridPostsApi.fetchPostById;
export const createPost = hybridPostsApi.createPost;
export const updatePost = hybridPostsApi.updatePost;
export const deletePost = hybridPostsApi.deletePost;

// Original Supabase functions (kept for direct access if needed)
export const supabaseFetchPosts = async (): Promise<PostRow[]> => {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:author_id(id, username, full_name, avatar_url)
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }

  return data || [];
};

export const supabaseFetchPostBySlug = async (slug: string): Promise<PostRow | null> => {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:author_id(id, username, full_name, avatar_url)
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') { // PGRST116 is the error code for no rows returned
      console.error('Error fetching post by slug:', error);
    }
    return null;
  }

  return data;
};

export const supabaseFetchPostById = async (id: string): Promise<PostRow | null> => {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:author_id(id, username, full_name, avatar_url)
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching post by id:', error);
    return null;
  }

  return data;
};

export const supabaseCreatePost = async (post: PostInsert): Promise<PostRow> => {
  const { data, error } = await supabase
    .from('posts')
    .insert([{
      ...post,
      author_id: (await supabase.auth.getUser()).data.user?.id
    }])
    .select()
    .single();

  if (error) {
    console.error('Error creating post:', error);
    throw error;
  }

  return data;
};

export const supabaseUpdatePost = async (id: string, post: PostUpdate): Promise<PostRow> => {
  const { data, error } = await supabase
    .from('posts')
    .update(post)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating post:', error);
    throw error;
  }

  return data;
};

export const supabaseDeletePost = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};
