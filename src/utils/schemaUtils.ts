
/**
 * Utility functions for generating schema.org structured data
 */

export type SchemaType = 'Organization' | 'WebSite' | 'WebPage' | 'FAQPage' | 'Service' | 'BlogPosting' | 'Product' | 'BreadcrumbList' | 'LocalBusiness';

/**
 * Generate Organization schema
 */
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Campagne SMS",
  "url": "https://campagnesms.com",
  "logo": "https://campagnesms.com/logo.png",
  "description": "Plateforme d'envoi de SMS professionnels pour vos campagnes marketing",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-4-84-84-98-33",
    "contactType": "customer service",
    "availableLanguage": ["French"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "42 Rue de la Communication",
    "addressLocality": "Paris",
    "postalCode": "75001",
    "addressCountry": "FR"
  },
  "sameAs": [
    "https://facebook.com/campagnesms",
    "https://twitter.com/campagnesms",
    "https://linkedin.com/company/campagnesms"
  ]
});

/**
 * Generate Website schema
 */
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Campagne SMS",
  "url": "https://campagnesms.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://campagnesms.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

/**
 * Generate Breadcrumb schema
 */
export const generateBreadcrumbSchema = (breadcrumbItems: {name: string, item: string}[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbItems.map((breadcrumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": breadcrumb.name,
    "item": breadcrumb.item
  }))
});

/**
 * Generate FAQ schema
 */
export const generateFaqSchema = (questions: {question: string, answer: string}[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": questions.map(q => ({
    "@type": "Question",
    "name": q.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": q.answer
    }
  }))
});

/**
 * Generate Local Business schema
 */
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Campagne SMS",
  "image": "https://campagnesms.com/logo.png",
  "priceRange": "€€",
  "telephone": "+33-4-84-84-98-33",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "42 Rue de la Communication",
    "addressLocality": "Paris",
    "postalCode": "75001",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "48.8566",
    "longitude": "2.3522"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
});
