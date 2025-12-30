
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen } from 'lucide-react';

// Import the case studies data
const caseStudies = [
  {
    id: 1,
    title: "Comment EcoStore a augmenté ses ventes de 42% grâce aux SMS",
    category: "Commerce",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    excerpt: "Découvrez comment cette marketplace de produits écologiques a transformé sa communication client avec une stratégie SMS ciblée.",
    slug: "ecostore-augmentation-ventes-sms"
  },
  {
    id: 2,
    title: "HealthFirst : 27% d'amélioration du taux de présence aux rendez-vous",
    category: "Santé",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000",
    excerpt: "Une étude de cas sur l'utilisation des rappels SMS automatisés pour réduire les absences aux consultations médicales.",
    slug: "healthfirst-amelioration-presence-rendez-vous"
  },
  {
    id: 3,
    title: "La transformation digitale de TechCorp via les alertes SMS",
    category: "Technologie",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000",
    excerpt: "Comment cette entreprise SaaS utilise les notifications SMS pour améliorer l'engagement utilisateur et réduire le churn.",
    slug: "techcorp-transformation-digitale-alertes-sms"
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen py-16">
      <Helmet>
        <title>Études de cas | Campagne SMS</title>
        <meta name="description" content="Découvrez comment nos clients utilisent notre plateforme SMS pour atteindre leurs objectifs commerciaux et marketing." />
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="gradient" className="mb-4 py-1.5 px-4 text-sm font-medium">Nos clients témoignent</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">Études de cas</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez comment des entreprises de différents secteurs ont transformé leur communication avec nos solutions SMS
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 text-gray-800 dark:text-gray-50">
                      {study.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 line-clamp-3">
                      {study.excerpt}
                    </p>
                    
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
      </div>
    </div>
  );
};

export default CaseStudies;
