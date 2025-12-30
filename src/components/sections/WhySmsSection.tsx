
import React from 'react';
import { MessageCircle, Users, TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const WhySmsSection = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section 
      id="why-sms-section" 
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl mb-4">
              <span className="gradient-text">Pourquoi le SMS marketing?</span>
            </h2>
            <div className="w-40 h-1 bg-gradient-to-r from-primary to-secondary"></div>
          </div>
          <div className="mt-6 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Des résultats concrets pour votre communication d'entreprise
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* 98% Taux de lecture */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 transition-all duration-300 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <div className="text-green-500">
                <MessageCircle size={42} strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-5xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">98%</h3>
            <h4 className="text-xl font-medium text-center mb-3 text-gray-800 dark:text-gray-100">Taux de lecture</h4>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Des SMS envoyés sont lus dans les 3 minutes
            </p>
          </motion.div>
          
          {/* 1200+ Clients actifs */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 transition-all duration-300 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <div className="text-green-500">
                <Users size={42} strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-5xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">1200+</h3>
            <h4 className="text-xl font-medium text-center mb-3 text-gray-800 dark:text-gray-100">Clients actifs</h4>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Entreprises utilisent notre plateforme
            </p>
          </motion.div>
          
          {/* 35% Conversion moyenne */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 transition-all duration-300 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <div className="text-green-500">
                <TrendingUp size={42} strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-5xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">35%</h3>
            <h4 className="text-xl font-medium text-center mb-3 text-gray-800 dark:text-gray-100">Conversion moyenne</h4>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Des campagnes SMS génèrent des actions
            </p>
          </motion.div>
          
          {/* 24/7 Support client */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 transition-all duration-300 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <div className="text-green-500">
                <Clock size={42} strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-5xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">24/7</h3>
            <h4 className="text-xl font-medium text-center mb-3 text-gray-800 dark:text-gray-100">Support client</h4>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Assistance disponible à tout moment
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySmsSection;
