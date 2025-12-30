// Strapi configuration
export const STRAPI_CONFIG = {
  // Strapi URLs - update the production URL when you deploy
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://your-production-strapi.herokuapp.com/api'  // TODO: Replace with your production URL
    : 'http://localhost:1337/api',  // Local development URL
  
  // Strapi API endpoints
  endpoints: {
    posts: '/posts',
    pages: '/pages',
    upload: '/upload',
    auth: '/auth/local',
  },
  
  // Default query parameters for Strapi
  defaultParams: {
    populate: '*',  // Populate all relations by default
  }
};

export default STRAPI_CONFIG;