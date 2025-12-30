
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User } from 'lucide-react';

// Sample related posts data (in a real app, this would be dynamically fetched)
const RELATED_POSTS = [
  {
    id: 1,
    title: "5 astuces pour augmenter vos taux d'ouverture SMS",
    slug: "astuces-augmenter-taux-ouverture-sms",
    excerpt: "Découvrez comment optimiser vos campagnes SMS pour maximiser l'engagement de vos clients.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: "28 Avr 2025",
    category: "Marketing SMS",
    author: "Admin"
  },
  {
    id: 2,
    title: "Intégrer les SMS dans votre stratégie marketing omnicanal",
    slug: "integrer-sms-strategie-marketing-omnicanal",
    excerpt: "Comment les SMS peuvent renforcer votre présence sur tous les canaux de communication.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    date: "20 Avr 2025",
    category: "Stratégie",
    author: "Admin"
  },
  {
    id: 3,
    title: "La conformité RGPD dans vos campagnes SMS en 2025",
    slug: "conformite-rgpd-campagnes-sms-2025",
    excerpt: "Les meilleures pratiques pour respecter la réglementation tout en optimisant vos résultats.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    date: "15 Avr 2025",
    category: "Réglementations",
    author: "Admin"
  }
];

// Case studies for when viewing case studies
const CASE_STUDIES = [
  {
    id: 1,
    title: "Comment EcoStore a augmenté ses ventes de 42% grâce aux SMS",
    slug: "ecostore-augmentation-ventes-sms",
    excerpt: "Découvrez comment cette marketplace de produits écologiques a transformé sa communication client avec une stratégie SMS ciblée.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    date: "30 Avr 2025",
    category: "Commerce",
    author: "Admin"
  },
  {
    id: 2,
    title: "HealthFirst : 27% d'amélioration du taux de présence aux rendez-vous",
    slug: "healthfirst-amelioration-presence-rendez-vous",
    excerpt: "Une étude de cas sur l'utilisation des rappels SMS automatisés pour réduire les absences aux consultations médicales.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000",
    date: "25 Avr 2025",
    category: "Santé",
    author: "Admin"
  },
  {
    id: 3,
    title: "La transformation digitale de TechCorp via les alertes SMS",
    slug: "techcorp-transformation-digitale-alertes-sms",
    excerpt: "Comment cette entreprise SaaS utilise les notifications SMS pour améliorer l'engagement utilisateur et réduire le churn.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000",
    date: "22 Avr 2025",
    category: "Technologie",
    author: "Admin"
  }
];

export interface RelatedPostsProps {
  currentPostId?: number;
  currentCategory?: string;
  currentPostSlug?: string;
  category?: string;
  posts?: any[];
  isCaseStudy?: boolean;
}

const RelatedPosts = ({ 
  currentPostId, 
  currentPostSlug, 
  currentCategory,
  category, 
  posts,
  isCaseStudy = false 
}: RelatedPostsProps) => {
  // Determine which posts to show based on context
  const sourcePosts = posts || (isCaseStudy ? CASE_STUDIES : RELATED_POSTS);
  
  // Filter posts: exclude current post and optionally filter by category
  const filteredPosts = sourcePosts.filter(post => {
    if (currentPostId && post.id === currentPostId) return false;
    if (currentPostSlug && post.slug === currentPostSlug) return false;
    if (category && category !== post.category) return false;
    if (currentCategory && currentCategory !== post.category) return false;
    return true;
  }).slice(0, 3); // Limit to 3 posts max

  const targetPath = isCaseStudy ? "case-studies" : "actualites";
  const sectionTitle = isCaseStudy ? "Études de cas similaires" : "Articles Similaires";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg p-8 neo-card">
      <div className="mb-6">
        <h3 className="text-2xl font-bold">{sectionTitle}</h3>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mt-2 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="group bg-gray-50 dark:bg-gray-700/50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Link to={`/${targetPath}/${post.slug}`} className="block">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback image in case of error
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7";
                    }}
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary">{post.category}</span>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <User className="h-3 w-3 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                    <div className="text-primary text-xs font-medium flex items-center group-hover:underline">
                      Lire la suite <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-8 text-gray-500">
            Aucun contenu similaire trouvé.
          </div>
        )}
      </div>
      
      <div className="mt-8 text-center">
        <Link 
          to={`/${targetPath}`} 
          className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-primary/90 to-secondary/90 text-white rounded-lg hover:from-primary hover:to-secondary shadow-md hover:shadow-lg transition-all duration-300"
        >
          Voir tous les {isCaseStudy ? "études de cas" : "articles"} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default RelatedPosts;
