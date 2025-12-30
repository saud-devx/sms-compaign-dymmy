import axios, { AxiosResponse } from 'axios';
import { STRAPI_CONFIG } from '@/config/strapi';
import { 
  StrapiResponse, 
  StrapiSingleResponse, 
  StrapiPostData, 
  StrapiPageData,
  transformStrapiPost,
  transformStrapiPage
} from '@/types/strapi';

// Create axios instance for Strapi
const strapiApi = axios.create({
  baseURL: STRAPI_CONFIG.baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add response interceptor for error handling
strapiApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Strapi API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Posts API
export const strapiPostsApi = {
  // Fetch all posts
  fetchPosts: async () => {
    try {
      const response: AxiosResponse<StrapiResponse<StrapiPostData[]>> = await strapiApi.get(
        STRAPI_CONFIG.endpoints.posts,
        {
          params: {
            ...STRAPI_CONFIG.defaultParams,
            'filters[published][$eq]': true,
            'sort': 'createdAt:desc',
          }
        }
      );
      
      return response.data.data.map(transformStrapiPost);
    } catch (error) {
      console.error('Error fetching posts from Strapi:', error);
      // Fallback to empty array if Strapi is not available
      return [];
    }
  },

  // Fetch post by slug
  fetchPostBySlug: async (slug: string) => {
    try {
      const response: AxiosResponse<StrapiResponse<StrapiPostData[]>> = await strapiApi.get(
        STRAPI_CONFIG.endpoints.posts,
        {
          params: {
            ...STRAPI_CONFIG.defaultParams,
            'filters[slug][$eq]': slug,
            'filters[published][$eq]': true,
          }
        }
      );
      
      if (response.data.data.length === 0) {
        return null;
      }
      
      return transformStrapiPost(response.data.data[0]);
    } catch (error) {
      console.error('Error fetching post by slug from Strapi:', error);
      return null;
    }
  },

  // Fetch post by ID
  fetchPostById: async (id: string) => {
    try {
      const response: AxiosResponse<StrapiSingleResponse<StrapiPostData>> = await strapiApi.get(
        `${STRAPI_CONFIG.endpoints.posts}/${id}`,
        {
          params: STRAPI_CONFIG.defaultParams
        }
      );
      
      return transformStrapiPost(response.data.data);
    } catch (error) {
      console.error('Error fetching post by ID from Strapi:', error);
      return null;
    }
  },

  // Create new post
  createPost: async (postData: any) => {
    try {
      const response: AxiosResponse<StrapiSingleResponse<StrapiPostData>> = await strapiApi.post(
        STRAPI_CONFIG.endpoints.posts,
        {
          data: postData
        }
      );
      
      return transformStrapiPost(response.data.data);
    } catch (error) {
      console.error('Error creating post in Strapi:', error);
      throw error;
    }
  },

  // Update post
  updatePost: async (id: string, postData: any) => {
    try {
      const response: AxiosResponse<StrapiSingleResponse<StrapiPostData>> = await strapiApi.put(
        `${STRAPI_CONFIG.endpoints.posts}/${id}`,
        {
          data: postData
        }
      );
      
      return transformStrapiPost(response.data.data);
    } catch (error) {
      console.error('Error updating post in Strapi:', error);
      throw error;
    }
  },

  // Delete post
  deletePost: async (id: string) => {
    try {
      await strapiApi.delete(`${STRAPI_CONFIG.endpoints.posts}/${id}`);
    } catch (error) {
      console.error('Error deleting post in Strapi:', error);
      throw error;
    }
  }
};

// Pages API
export const strapiPagesApi = {
  // Fetch all pages
  fetchPages: async () => {
    try {
      const response: AxiosResponse<StrapiResponse<StrapiPageData[]>> = await strapiApi.get(
        STRAPI_CONFIG.endpoints.pages,
        {
          params: {
            ...STRAPI_CONFIG.defaultParams,
            'filters[published][$eq]': true,
            'sort': 'title:asc',
          }
        }
      );
      
      return response.data.data.map(transformStrapiPage);
    } catch (error) {
      console.error('Error fetching pages from Strapi:', error);
      return [];
    }
  },

  // Fetch page by slug
  fetchPageBySlug: async (slug: string) => {
    try {
      const response: AxiosResponse<StrapiResponse<StrapiPageData[]>> = await strapiApi.get(
        STRAPI_CONFIG.endpoints.pages,
        {
          params: {
            ...STRAPI_CONFIG.defaultParams,
            'filters[slug][$eq]': slug,
            'filters[published][$eq]': true,
          }
        }
      );
      
      if (response.data.data.length === 0) {
        return null;
      }
      
      return transformStrapiPage(response.data.data[0]);
    } catch (error) {
      console.error('Error fetching page by slug from Strapi:', error);
      return null;
    }
  },

  // Fetch page by ID
  fetchPageById: async (id: string) => {
    try {
      const response: AxiosResponse<StrapiSingleResponse<StrapiPageData>> = await strapiApi.get(
        `${STRAPI_CONFIG.endpoints.pages}/${id}`,
        {
          params: STRAPI_CONFIG.defaultParams
        }
      );
      
      return transformStrapiPage(response.data.data);
    } catch (error) {
      console.error('Error fetching page by ID from Strapi:', error);
      return null;
    }
  },

  // Create new page
  createPage: async (pageData: any) => {
    try {
      const response: AxiosResponse<StrapiSingleResponse<StrapiPageData>> = await strapiApi.post(
        STRAPI_CONFIG.endpoints.pages,
        {
          data: pageData
        }
      );
      
      return transformStrapiPage(response.data.data);
    } catch (error) {
      console.error('Error creating page in Strapi:', error);
      throw error;
    }
  },

  // Update page
  updatePage: async (id: string, pageData: any) => {
    try {
      const response: AxiosResponse<StrapiSingleResponse<StrapiPageData>> = await strapiApi.put(
        `${STRAPI_CONFIG.endpoints.pages}/${id}`,
        {
          data: pageData
        }
      );
      
      return transformStrapiPage(response.data.data);
    } catch (error) {
      console.error('Error updating page in Strapi:', error);
      throw error;
    }
  },

  // Delete page
  deletePage: async (id: string) => {
    try {
      await strapiApi.delete(`${STRAPI_CONFIG.endpoints.pages}/${id}`);
    } catch (error) {
      console.error('Error deleting page in Strapi:', error);
      throw error;
    }
  }
};

export default strapiApi;