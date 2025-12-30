import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { Button } from '@/components/ui/button';
import { Search, Filter, BookOpen, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    slug: "campagnes-sms-marketing-efficaces",
    title: "Comment Créer des Campagnes SMS Marketing Efficaces",
    excerpt: "Découvrez les meilleures pratiques pour créer des campagnes SMS marketing qui génèrent des résultats concrets. De la rédaction de messages percutants au choix du moment idéal pour l'envoi.",
    date: "10 Mai 2025",
    author: "Sophie Laurent",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1000",
    featured: true,
    categories: ["Marketing", "SMS"],
    category: "Marketing" // Added the primary category here
  },
  {
    id: 2,
    slug: "gdpr-conformite-campagnes-sms",
    title: "GDPR et Conformité : Ce que Vous Devez Savoir pour Vos Campagnes SMS",
    excerpt: "La conformité au GDPR est essentielle pour toute campagne SMS. Découvrez comment respecter les réglementations tout en maximisant l'efficacité de vos communications.",
    date: "3 Mai 2025",
    author: "Thomas Dubois",
    image: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=1000",
    categories: ["GDPR", "Conformité"],
    category: "GDPR" // Added the primary category here
  },
  {
    id: 3,
    slug: "analyse-performance-campagne-sms",
    title: "Comment Analyser la Performance de Votre Campagne SMS",
    excerpt: "L'analyse des données est cruciale pour optimiser vos campagnes SMS. Apprenez à interpréter les métriques clés et à ajuster vos stratégies pour de meilleurs résultats.",
    date: "26 Avril 2025",
    author: "Marie Clement",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    categories: ["Analyse", "Performance"],
    category: "Analyse" // Added the primary category here
  },
  {
    id: 4,
    slug: "personnalisation-sms-marketing",
    title: "L'Art de la Personnalisation dans le SMS Marketing",
    excerpt: "La personnalisation est la clé d'une campagne SMS réussie. Découvrez comment adapter vos messages pour créer une connexion unique avec chaque destinataire.",
    date: "18 Avril 2025",
    author: "Philippe Martin",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    categories: ["Personnalisation", "Marketing"],
    category: "Personnalisation" // Added the primary category here
  },
  {
    id: 5,
    slug: "taux-ouverture-sms-ameliorer",
    title: "5 Astuces pour Améliorer Votre Taux d'Ouverture SMS",
    excerpt: "Le taux d'ouverture est un indicateur crucial pour mesurer l'efficacité de vos campagnes SMS. Voici 5 techniques éprouvées pour optimiser ce taux et maximiser votre impact.",
    date: "10 Avril 2025",
    author: "Claire Durand",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000",
    categories: ["Optimisation", "Performance"],
    category: "Optimisation" // Added the primary category here
  },
  {
    id: 6,
    slug: "sms-vs-email-marketing",
    title: "SMS vs Email Marketing : Quand Utiliser Chaque Canal",
    excerpt: "Ces deux canaux de communication ont chacun leurs avantages. Découvrez comment les combiner efficacement pour une stratégie marketing omnicanale performante.",
    date: "2 Avril 2025",
    author: "Vincent Leroy",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000",
    categories: ["Stratégie", "Email"],
    category: "Stratégie" // Added the primary category here
  },
  {
    id: 7,
    slug: "automatisation-campagnes-sms",
    title: "Comment Automatiser Vos Campagnes SMS pour Plus d'Efficacité",
    excerpt: "L'automatisation peut transformer votre stratégie SMS marketing. Découvrez les outils et techniques pour mettre en place des campagnes automatisées qui convertissent.",
    date: "25 Mars 2025",
    author: "Sophie Laurent",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000",
    featured: true,
    categories: ["Automatisation", "Technologie"],
    category: "Automatisation" // Added the primary category here
  },
  {
    id: 8,
    slug: "erreurs-eviter-sms-marketing",
    title: "Les 7 Erreurs à Éviter dans Votre Stratégie SMS Marketing",
    excerpt: "Même les professionnels du marketing peuvent commettre ces erreurs courantes. Apprenez à les identifier et à les éviter pour optimiser vos campagnes SMS.",
    date: "15 Mars 2025",
    author: "Thomas Dubois",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1000",
    categories: ["Stratégie", "Optimisation"],
    category: "Stratégie" // Added the primary category here
  }
];

const categories = ["Tous", "Marketing", "SMS", "GDPR", "Conformité", "Analyse", "Performance", "Personnalisation", "Optimisation", "Stratégie", "Email", "Automatisation", "Technologie"];

// Find featured posts
const featuredPosts = blogPosts.filter(post => post.featured);

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState('');
  const featuredRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: featuredRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Tous" || post.categories.includes(selectedCategory);
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="pt-36 pb-24 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-secondary/10 blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 relative inline-block">
              <span className="gradient-text">Actualités</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.7 }}
              ></motion.span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              Découvrez nos derniers articles, conseils et astuces pour optimiser vos campagnes SMS marketing.
            </p>
            
            <div className="max-w-xl mx-auto relative mb-14">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-4 pr-12 rounded-full border-2 border-gray-200 dark:border-gray-700
                            focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none
                            bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-sm transition-all duration-300"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 bg-gray-100 dark:bg-gray-700 p-2 rounded-full">
                  <Search size={18} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Posts Slider */}
      {featuredPosts.length > 0 && (
        <motion.section 
          ref={featuredRef}
          style={{ opacity, scale }}
          className="py-16 bg-white dark:bg-gray-900 relative z-10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold flex items-center">
                <BookOpen size={24} className="mr-2 text-primary" />
                Articles à la Une
              </h2>
              <Button variant="ghost" asChild className="text-primary">
                <a href="#all-posts" className="flex items-center">
                  <span className="mr-2">Toutes les actualités</span>
                  <ArrowRight size={18} />
                </a>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <motion.div 
                  key={post.id}
                  whileHover={{ 
                    y: -8,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="h-full"
                >
                  <BlogCard
                    slug={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    author={post.author}
                    image={post.image}
                    category={post.category}
                    featured={true}
                    readTime="5 min"
                    className="h-full transform-gpu shadow-lg hover:shadow-xl"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
      
      {/* Filter Section */}
      <section id="all-posts" className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="categories" className="w-full max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Filter size={18} className="mr-2 text-primary" />
                Filtrer les articles
              </h3>
              <TabsList className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-1 rounded-lg">
                <TabsTrigger value="categories">Catégories</TabsTrigger>
                <TabsTrigger value="popular">Populaire</TabsTrigger>
                <TabsTrigger value="recent">Récents</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="categories" className="mt-0">
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                      selectedCategory === category 
                        ? 'bg-primary text-white hover:bg-primary/90' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary'
                    }`}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="popular" className="mt-0">
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <p className="text-center text-gray-600 dark:text-gray-300">Popularité basée sur le nombre de vues et de partages</p>
              </div>
            </TabsContent>
            <TabsContent value="recent" className="mt-0">
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <p className="text-center text-gray-600 dark:text-gray-300">Classement par date de publication, du plus récent au plus ancien</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <BlogCard
                    slug={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    author={post.author}
                    image={post.image}
                    category={post.category}
                    featured={post.featured}
                    readTime="5 min"
                    className="h-full transform-gpu"
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20 px-4 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-medium mb-3">Aucun article trouvé</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Essayez avec d'autres termes de recherche ou catégories.
              </p>
              <Button 
                onClick={() => {setSearchQuery(''); setSelectedCategory('Tous');}}
                className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all duration-300"
              >
                Réinitialiser les filtres
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
