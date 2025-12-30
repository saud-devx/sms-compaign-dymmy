// Strapi API response types
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: T;
  meta: {};
}

export interface StrapiAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

// Strapi Post Type
export interface StrapiPost extends StrapiAttributes {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featured_image?: StrapiMedia;
  meta_description?: string;
  meta_keywords?: string;
  published: boolean;
  author?: StrapiAuthor;
  category?: string;
  readTime?: string;
}

export interface StrapiPostData {
  id: number;
  attributes: StrapiPost;
}

// Strapi Page Type
export interface StrapiPage extends StrapiAttributes {
  title: string;
  slug: string;
  content: string;
  featured_image?: StrapiMedia;
  meta_description?: string;
  meta_keywords?: string;
  published: boolean;
  author?: StrapiAuthor;
}

export interface StrapiPageData {
  id: number;
  attributes: StrapiPage;
}

// Strapi Media Type
export interface StrapiMedia {
  data?: {
    id: number;
    attributes: {
      name: string;
      alternativeText?: string;
      caption?: string;
      width: number;
      height: number;
      formats?: any;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string;
      provider: string;
      provider_metadata?: any;
      createdAt: string;
      updatedAt: string;
    };
  };
}

// Strapi Author Type
export interface StrapiAuthor {
  data?: {
    id: number;
    attributes: {
      username: string;
      email: string;
      full_name?: string;
      avatar_url?: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}

// Transform functions to convert Strapi data to our app format
export const transformStrapiPost = (strapiPost: StrapiPostData) => ({
  id: strapiPost.id.toString(),
  title: strapiPost.attributes.title,
  slug: strapiPost.attributes.slug,
  content: strapiPost.attributes.content,
  excerpt: strapiPost.attributes.excerpt || '',
  featured_image: strapiPost.attributes.featured_image?.data?.attributes.url || null,
  meta_description: strapiPost.attributes.meta_description || null,
  meta_keywords: strapiPost.attributes.meta_keywords || null,
  published: strapiPost.attributes.published || false,
  created_at: strapiPost.attributes.createdAt,
  updated_at: strapiPost.attributes.updatedAt,
  author_id: strapiPost.attributes.author?.data?.id.toString() || null,
  author: strapiPost.attributes.author?.data ? {
    id: strapiPost.attributes.author.data.id.toString(),
    username: strapiPost.attributes.author.data.attributes.username,
    full_name: strapiPost.attributes.author.data.attributes.full_name || null,
    avatar_url: strapiPost.attributes.author.data.attributes.avatar_url || null,
  } : null,
  category: strapiPost.attributes.category || 'Général',
  readTime: strapiPost.attributes.readTime || '5 min',
  date: new Date(strapiPost.attributes.createdAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }),
  image: strapiPost.attributes.featured_image?.data?.attributes.url || 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1000'
});

export const transformStrapiPage = (strapiPage: StrapiPageData) => ({
  id: strapiPage.id.toString(),
  title: strapiPage.attributes.title,
  slug: strapiPage.attributes.slug,
  content: strapiPage.attributes.content,
  featured_image: strapiPage.attributes.featured_image?.data?.attributes.url || null,
  meta_description: strapiPage.attributes.meta_description || null,
  meta_keywords: strapiPage.attributes.meta_keywords || null,
  published: strapiPage.attributes.published || false,
  created_at: strapiPage.attributes.createdAt,
  updated_at: strapiPage.attributes.updatedAt,
  author_id: strapiPage.attributes.author?.data?.id.toString() || null,
  author: strapiPage.attributes.author?.data ? {
    id: strapiPage.attributes.author.data.id.toString(),
    username: strapiPage.attributes.author.data.attributes.username,
    full_name: strapiPage.attributes.author.data.attributes.full_name || null,
    avatar_url: strapiPage.attributes.author.data.attributes.avatar_url || null,
  } : null,
});