
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOMetadata from '../components/SEOMetadata';
import SchemaData from '../components/SchemaData';
import { Skeleton } from '@/components/ui/skeleton';
import BlogPostHeader from '../components/blog/BlogPostHeader';
import BlogPostContent from '../components/blog/BlogPostContent';
import ShareSection from '../components/blog/ShareSection';
import RelatedPosts from '../components/blog/RelatedPosts';
import BlogSidebar from '../components/blog/BlogSidebar';
import { ScrollProgress } from '@/components/enhanced-ui/ScrollProgress';
import { toast } from '@/components/ui/use-toast';

// Import mock data
import blogPosts from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Reset post state and show loading when slug changes
    setPost(null);
    setLoading(true);
    
    console.log(`Attempting to fetch post with slug: ${slug}`);
    
    // In a real app, this would be an API call
    const fetchPost = () => {
      setTimeout(() => {
        if (!slug) {
          console.error("Slug is undefined");
          setLoading(false);
          return;
        }
        
        // Make sure to search for the exact slug
        const foundPost = blogPosts.find(post => post.slug === slug);
        
        if (foundPost) {
          console.log(`Found post with slug: ${slug}`, foundPost);
          setPost(foundPost);
        } else {
          console.log(`No post found with slug: ${slug}`, "Available slugs:", blogPosts.map(p => p.slug));
          toast({
            title: "Article non trouvé",
            description: "L'article que vous recherchez n'est pas disponible.",
            variant: "destructive",
          });
        }
        setLoading(false);
      }, 300);
    };
    
    fetchPost();
  }, [slug]); // Re-run when slug changes

  if (loading) {
    return (
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <Skeleton className="h-[400px] w-full rounded-xl mb-10" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2">
            <Skeleton className="h-10 w-3/4 mb-4" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-5/6 mb-8" />
            
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-4/5 mb-2" />
          </div>
          <div className="col-span-1">
            <Skeleton className="h-64 w-full rounded-xl mb-6" />
            <Skeleton className="h-40 w-full rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
          <p className="text-gray-600 dark:text-gray-400">
            L'article que vous recherchez n'est pas disponible.
          </p>
        </div>
      </div>
    );
  }

  // Page metadata
  const pageTitle = `${post.title} | Campagne SMS`;
  const pageDescription = post.excerpt;
  
  // Create blogPosting schema
  const blogPostingSchema = {
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Campagne SMS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://campagnesms.com/logo.png'
      }
    },
    description: post.excerpt,
    mainEntityOfPage: `https://campagnesms.com/actualites/${post.slug}`
  };

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={post.slug} // Add key to ensure re-render when post changes
    >
      <SEOMetadata 
        title={pageTitle}
        description={pageDescription}
        keywords={`${post.category}, campagne sms, sms marketing, ${post.title}`}
        canonicalUrl={`https://campagnesms.com/actualites/${post.slug}`}
      />
      
      <SchemaData type="BlogPosting" data={blogPostingSchema} />
      
      {/* Reading progress bar */}
      <ScrollProgress className="fixed top-0 left-0 right-0 z-50" />
      
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <BlogPostHeader 
          title={post.title}
          date={post.date}
          author={post.author}
          category={post.category}
          readTime={post.readTime || "5 min"}
          image={post.image}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2">
            <BlogPostContent content={post.content} />
            
            <ShareSection 
              title={post.title}
              url={`https://campagnesms.com/actualites/${post.slug}`}
            />
          </div>
          
          <div className="col-span-1">
            <BlogSidebar 
              categories={[
                "Marketing",
                "GDPR",
                "Analytics",
                "Technologie",
                "Astuces"
              ]}
              popularPosts={blogPosts.slice(0, 3)}
              tags={[
                "SMS marketing",
                "RGPD",
                "Automatisation",
                "Taux de conversion",
                "ROI",
                "E-commerce"
              ]}
            />
          </div>
        </div>
        
        <RelatedPosts 
          currentPostId={post.id}
          currentCategory={post.category}
          posts={blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3)}
        />
      </div>
    </motion.div>
  );
};

export default BlogPost;
