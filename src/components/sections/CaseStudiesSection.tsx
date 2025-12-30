
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, BookOpen, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: "Comment EcoStore a augmenté ses ventes de 42% grâce aux SMS",
    category: "Commerce",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    excerpt: "Découvrez comment cette marketplace de produits écologiques a transformé sa communication client avec une stratégie SMS ciblée.",
    slug: "ecostore-augmentation-ventes-sms"
  },
  {
    id: 2,
    title: "HealthFirst : 27% d'amélioration du taux de présence aux rendez-vous",
    category: "Santé",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000",
    excerpt: "Une étude de cas sur l'utilisation des rappels SMS automatisés pour réduire les absences aux consultations médicales.",
    slug: "healthfirst-amelioration-presence-rendez-vous"
  },
  {
    id: 3,
    title: "La transformation digitale de TechCorp via les alertes SMS",
    category: "Technologie",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000",
    excerpt: "Comment cette entreprise SaaS utilise les notifications SMS pour améliorer l'engagement utilisateur et réduire le churn.",
    slug: "techcorp-transformation-digitale-alertes-sms"
  }
];

const CaseStudiesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Beautiful enhanced background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 dark:from-primary/10 dark:via-secondary/15 dark:to-primary/10">
        <motion.div 
          className="absolute inset-0 pattern-grid opacity-30 dark:opacity-40"
          animate={{
            backgroundPosition: ["0px 0px", "20px 20px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-gradient-to-tr from-secondary/10 to-primary/10 dark:from-secondary/20 dark:to-primary/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-4 py-1 px-4 text-sm font-medium">Résultats concrets</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight">Histoires de succès</h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto font-light">
            Découvrez comment nos clients utilisent notre plateforme pour atteindre leurs objectifs
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glowing-border overflow-hidden h-full">
                <div className="glowing-border-content h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <motion.img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-700"
                      initial={false}
                      whileHover={{ scale: 1.05 }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/800x400?text=Case+Study";
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="gradient" className="px-3 py-1.5 rounded-full backdrop-blur-sm shadow-md">
                        {study.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 text-gray-800 dark:text-gray-50">{study.title}</h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 line-clamp-3">
                      {study.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <User className="h-3.5 w-3.5 mr-1" />
                        <span>{study.author}</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Link to={`/case-studies/${study.slug}`} className="inline-flex items-center group/link">
                        <BookOpen className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-primary font-medium border-b border-transparent group-hover/link:border-primary transition-all">
                          Lire l'étude complète
                        </span>
                        <motion.div
                          className="ml-1 text-primary"
                          initial={false}
                          animate={{ x: 0 }}
                          whileHover={{ x: 3 }}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            to="/case-studies" 
            className="inline-flex items-center text-primary font-medium text-lg group bg-white/50 dark:bg-gray-800/50 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
          >
            <span className="border-b border-transparent group-hover:border-primary transition-all">
              Voir toutes nos études de cas
            </span>
            <motion.div
              className="ml-2"
              animate={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
