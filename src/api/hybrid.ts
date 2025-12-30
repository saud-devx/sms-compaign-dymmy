// Hybrid API service that can use either Strapi or Supabase
import { strapiPostsApi, strapiPagesApi } from './strapi';
import * as supabaseApi from './posts';
import * as supabasePagesApi from './pages';
import { PostRow, PageRow } from '@/types/admin';

// Configuration to choose the content source
export const CONTENT_SOURCE = {
  // Set to 'strapi' to use Strapi CMS, 'supabase' to use Supabase, 'mock' for mock data
  posts: 'strapi' as 'strapi' | 'supabase' | 'mock',  // Changed to use Strapi
  pages: 'strapi' as 'strapi' | 'supabase' | 'mock',  // Changed to use Strapi
};

// Mock data fallback (from the original blogPosts.ts)
const mockPosts = [
  {
    id: '1',
    slug: 'campagnes-sms-marketing-efficaces',
    title: 'Comment Créer des Campagnes SMS Marketing Efficaces',
    excerpt: 'Découvrez les meilleures pratiques pour créer des campagnes SMS marketing qui génèrent des résultats concrets.',
    content: `<p class="mb-4">Les campagnes SMS marketing restent l'un des canaux de communication les plus efficaces avec un taux d'ouverture de près de 98%. Dans cet article, nous allons explorer comment créer des campagnes SMS marketing efficaces qui génèrent des résultats concrets pour votre entreprise.</p>`,
    created_at: '2023-05-12T00:00:00Z',
    updated_at: '2023-05-12T00:00:00Z',
    published: true,
    featured_image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1000',
    meta_description: 'Apprenez à créer des campagnes SMS marketing efficaces',
    meta_keywords: 'sms marketing, campagne sms, marketing mobile',
    author_id: '1',
    author: {
      id: '1',
      username: 'admin',
      full_name: 'Admin User',
      avatar_url: null,
    },
    category: 'Marketing',
    readTime: '5 min',
    date: '12 Mai 2023',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1000'
  } as any,
  // Add more mock posts as needed...
];

// Hybrid Posts API
export const hybridPostsApi = {
  fetchPosts: async (): Promise<PostRow[]> => {
    switch (CONTENT_SOURCE.posts) {
      case 'strapi':
        return await strapiPostsApi.fetchPosts();
      case 'supabase':
        return await supabaseApi.fetchPosts();
      case 'mock':
        return mockPosts;
      default:
        return mockPosts;
    }
  },

  fetchPostBySlug: async (slug: string) => {
    switch (CONTENT_SOURCE.posts) {
      case 'strapi':
        return await strapiPostsApi.fetchPostBySlug(slug);
      case 'supabase':
        return await supabaseApi.fetchPostBySlug(slug);
      case 'mock':
        return mockPosts.find(post => post.slug === slug) || null;
      default:
        return mockPosts.find(post => post.slug === slug) || null;
    }
  },

  fetchPostById: async (id: string) => {
    switch (CONTENT_SOURCE.posts) {
      case 'strapi':
        return await strapiPostsApi.fetchPostById(id);
      case 'supabase':
        return await supabaseApi.fetchPostById(id);
      case 'mock':
        return mockPosts.find(post => post.id === id) || null;
      default:
        return mockPosts.find(post => post.id === id) || null;
    }
  },

  createPost: async (postData: any) => {
    switch (CONTENT_SOURCE.posts) {
      case 'strapi':
        return await strapiPostsApi.createPost(postData);
      case 'supabase':
        return await supabaseApi.createPost(postData);
      case 'mock':
        throw new Error('Cannot create posts in mock mode');
      default:
        throw new Error('Cannot create posts in mock mode');
    }
  },

  updatePost: async (id: string, postData: any) => {
    switch (CONTENT_SOURCE.posts) {
      case 'strapi':
        return await strapiPostsApi.updatePost(id, postData);
      case 'supabase':
        return await supabaseApi.updatePost(id, postData);
      case 'mock':
        throw new Error('Cannot update posts in mock mode');
      default:
        throw new Error('Cannot update posts in mock mode');
    }
  },

  deletePost: async (id: string) => {
    switch (CONTENT_SOURCE.posts) {
      case 'strapi':
        return await strapiPostsApi.deletePost(id);
      case 'supabase':
        return await supabaseApi.deletePost(id);
      case 'mock':
        throw new Error('Cannot delete posts in mock mode');
      default:
        throw new Error('Cannot delete posts in mock mode');
    }
  }
};

// Hybrid Pages API
export const hybridPagesApi = {
  fetchPages: async (): Promise<PageRow[]> => {
    switch (CONTENT_SOURCE.pages) {
      case 'strapi':
        return await strapiPagesApi.fetchPages();
      case 'supabase':
        return await supabasePagesApi.fetchPages();
      case 'mock':
        return [];
      default:
        return [];
    }
  },

  fetchPageBySlug: async (slug: string) => {
    switch (CONTENT_SOURCE.pages) {
      case 'strapi':
        return await strapiPagesApi.fetchPageBySlug(slug);
      case 'supabase':
        return await supabasePagesApi.fetchPageBySlug(slug);
      case 'mock':
        return null;
      default:
        return null;
    }
  },

  fetchPageById: async (id: string) => {
    switch (CONTENT_SOURCE.pages) {
      case 'strapi':
        return await strapiPagesApi.fetchPageById(id);
      case 'supabase':
        return await supabasePagesApi.fetchPageById(id);
      case 'mock':
        return null;
      default:
        return null;
    }
  },

  createPage: async (pageData: any) => {
    switch (CONTENT_SOURCE.pages) {
      case 'strapi':
        return await strapiPagesApi.createPage(pageData);
      case 'supabase':
        return await supabasePagesApi.createPage(pageData);
      case 'mock':
        throw new Error('Cannot create pages in mock mode');
      default:
        throw new Error('Cannot create pages in mock mode');
    }
  },

  updatePage: async (id: string, pageData: any) => {
    switch (CONTENT_SOURCE.pages) {
      case 'strapi':
        return await strapiPagesApi.updatePage(id, pageData);
      case 'supabase':
        return await supabasePagesApi.updatePage(id, pageData);
      case 'mock':
        throw new Error('Cannot update pages in mock mode');
      default:
        throw new Error('Cannot update pages in mock mode');
    }
  },

  deletePage: async (id: string) => {
    switch (CONTENT_SOURCE.pages) {
      case 'strapi':
        return await strapiPagesApi.deletePage(id);
      case 'supabase':
        return await supabasePagesApi.deletePage(id);
      case 'mock':
        throw new Error('Cannot delete pages in mock mode');
      default:
        throw new Error('Cannot delete pages in mock mode');
    }
  }
};