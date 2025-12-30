import { STRAPI_CONFIG } from '@/config/strapi';

// Utility to test Strapi connection
export const testStrapiConnection = async (): Promise<{
  isConnected: boolean;
  message: string;
  details?: any;
}> => {
  try {
    const response = await fetch(STRAPI_CONFIG.baseURL.replace('/api', '/_health'), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return {
        isConnected: true,
        message: '✅ Strapi is connected and running!',
        details: {
          status: response.status,
          url: STRAPI_CONFIG.baseURL,
        },
      };
    } else {
      return {
        isConnected: false,
        message: `❌ Strapi responded with status ${response.status}`,
        details: {
          status: response.status,
          url: STRAPI_CONFIG.baseURL,
        },
      };
    }
  } catch (error) {
    return {
      isConnected: false,
      message: '❌ Cannot connect to Strapi. Make sure it\'s running on http://localhost:1337',
      details: {
        error: error instanceof Error ? error.message : 'Unknown error',
        url: STRAPI_CONFIG.baseURL,
      },
    };
  }
};

// Test content types exist
export const testStrapiContentTypes = async () => {
  try {
    const postsResponse = await fetch(`${STRAPI_CONFIG.baseURL}/posts?pagination[limit]=1`);
    const pagesResponse = await fetch(`${STRAPI_CONFIG.baseURL}/pages?pagination[limit]=1`);

    return {
      posts: {
        exists: postsResponse.ok,
        status: postsResponse.status,
      },
      pages: {
        exists: pagesResponse.ok,
        status: pagesResponse.status,
      },
    };
  } catch (error) {
    return {
      posts: { exists: false, error: 'Connection failed' },
      pages: { exists: false, error: 'Connection failed' },
    };
  }
};