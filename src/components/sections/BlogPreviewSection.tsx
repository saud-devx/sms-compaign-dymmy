import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const BlogPreviewSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Beautiful enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <motion.div 
            className="absolute top-10 right-10 w-96 h-96 rounded-full bg-primary/30 blur-[100px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1], 
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-secondary/30 blur-[100px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge variant="gradient" className="mb-4 py-1 px-4 text-sm font-medium">Nos actualités</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight">Conseils & Actualités</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
            Découvrez nos articles et conseils pour optimiser vos campagnes SMS marketing
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Article 1 */}
          <motion.div variants={item} className="group">
            <div className="glowing-border overflow-hidden h-full">
              <div className="glowing-border-content h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full">
                    Marketing
                  </Badge>
                  <motion.img 
                    src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1000"
                    alt="Marketing SMS" 
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>12 Mai 2023</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>Jean Dupont</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Comment Créer des Campagnes SMS Marketing Efficaces
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
                    Découvrez les meilleures pratiques pour créer des campagnes SMS marketing qui génèrent des résultats concrets.
                  </p>
                  
                  <div className="mt-auto">
                    <Link to="/actualites/campagnes-sms-marketing-efficaces" className="inline-flex items-center group/link">
                      <span className="text-primary font-medium border-b border-transparent group-hover/link:border-primary transition-all">
                        Lire l'article
                      </span>
                      <motion.div
                        className="ml-1 text-primary"
                        initial={false}
                        animate={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Article 2 */}
          <motion.div variants={item} className="group">
            <div className="glowing-border overflow-hidden h-full">
              <div className="glowing-border-content h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-secondary to-primary text-white px-3 py-1 rounded-full">
                    GDPR
                  </Badge>
                  <motion.img 
                    src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=1000"
                    alt="GDPR" 
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>3 Juin 2023</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>Sophie Martin</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    GDPR et Conformité : Ce que Vous Devez Savoir
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
                    La conformité au GDPR est essentielle pour toute campagne SMS. Découvrez comment respecter les réglementations.
                  </p>
                  
                  <div className="mt-auto">
                    <Link to="/actualites/gdpr-conformite-campagnes-sms" className="inline-flex items-center group/link">
                      <span className="text-primary font-medium border-b border-transparent group-hover/link:border-primary transition-all">
                        Lire l'article
                      </span>
                      <motion.div
                        className="ml-1 text-primary"
                        initial={false}
                        animate={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Article 3 */}
          <motion.div variants={item} className="group">
            <div className="glowing-border overflow-hidden h-full">
              <div className="glowing-border-content h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full">
                    Analytics
                  </Badge>
                  <motion.img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000"
                    alt="Analytics" 
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>21 Juillet 2023</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>Thomas Bernard</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Comment Analyser la Performance de Votre Campagne SMS
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
                    L'analyse des données est cruciale pour optimiser vos campagnes SMS. Apprenez à interpréter les métriques clés.
                  </p>
                  
                  <div className="mt-auto">
                    <Link to="/actualites/analyse-performance-campagne-sms" className="inline-flex items-center group/link">
                      <span className="text-primary font-medium border-b border-transparent group-hover/link:border-primary transition-all">
                        Lire l'article
                      </span>
                      <motion.div
                        className="ml-1 text-primary"
                        initial={false}
                        animate={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild variant="outline" size="lg" rounded="full" className="border-2 hover:bg-white/5 dark:hover:bg-gray-800/50 font-medium">
            <Link to="/actualites" className="flex items-center gap-2">
              <span className="mr-2">Voir toutes nos actualités</span>
              <motion.div
                animate={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
