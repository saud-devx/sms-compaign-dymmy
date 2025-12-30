
import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOMetadataProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  schema?: Record<string, any>;
  articleMeta?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  twitterUsername?: string;
  locales?: {
    locale: string;
    url: string;
  }[];
  noindex?: boolean;
  nofollow?: boolean;
}

export const SEOMetadata = memo(({
  title,
  description,
  keywords = "campagne sms, campagne de sms, envoi de sms, sms marketing, plateforme d'envoi de sms, envoi de sms pas cher",
  ogImage = "https://campagnesms.com/og-image.jpg",
  canonicalUrl,
  schema,
  articleMeta,
  twitterUsername = "@campagnesms",
  locales,
  noindex = false,
  nofollow = false
}: SEOMetadataProps) => {
  const siteName = "Campagne SMS";
  const fullTitle = `${title} | ${siteName}`;
  const defaultCanonical = typeof window !== 'undefined' ? window.location.href.split('?')[0] : '';
  
  // Dynamically set robots meta based on props
  const robotsContent = [];
  if (noindex) robotsContent.push('noindex');
  if (nofollow) robotsContent.push('nofollow');
  const robotsValue = robotsContent.length > 0 ? robotsContent.join(',') : 'index,follow';
  
  return (
    <Helmet>
      <html lang="fr" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsValue} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={articleMeta ? "article" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Article specific meta tags */}
      {articleMeta && articleMeta.publishedTime && (
        <meta property="article:published_time" content={articleMeta.publishedTime} />
      )}
      {articleMeta && articleMeta.modifiedTime && (
        <meta property="article:modified_time" content={articleMeta.modifiedTime} />
      )}
      {articleMeta && articleMeta.author && (
        <meta property="article:author" content={articleMeta.author} />
      )}
      {articleMeta && articleMeta.section && (
        <meta property="article:section" content={articleMeta.section} />
      )}
      {articleMeta && articleMeta.tags && articleMeta.tags.map((tag, index) => (
        <meta property="article:tag" content={tag} key={index} />
      ))}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {twitterUsername && <meta name="twitter:site" content={twitterUsername} />}
      
      {/* Alternate language versions */}
      {locales && locales.length > 0 && locales.map((locale, index) => (
        <link rel="alternate" href={locale.url} hrefLang={locale.locale} key={index} />
      ))}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || defaultCanonical} />
      
      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
});

SEOMetadata.displayName = 'SEOMetadata';

export default SEOMetadata;
