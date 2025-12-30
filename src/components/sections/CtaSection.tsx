
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const CtaSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 dark:from-primary/20 dark:via-secondary/10 dark:to-primary/20 transition-colors duration-300">
        <div className="absolute inset-0 pattern-grid opacity-30 dark:opacity-20"></div>
        <motion.div 
          className="absolute -right-20 -top-20 w-60 md:w-96 h-60 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 dark:from-primary/30 dark:to-secondary/20 blur-3xl"
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
          className="absolute -left-20 -bottom-20 w-60 md:w-96 h-60 md:h-96 rounded-full bg-gradient-to-tr from-secondary/10 to-primary/20 dark:from-secondary/20 dark:to-primary/30 blur-3xl"
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
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 backdrop-blur-md shadow-lg dark:shadow-primary/20 flex items-center justify-center transition-colors duration-300 border border-white/20 dark:border-white/10">
            <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-primary" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-br from-primary via-primary to-secondary bg-clip-text text-transparent leading-tight px-2">
            Prêt à lancer votre campagne SMS?
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto transition-colors duration-300 font-light px-2">
            Rejoignez des milliers d'entreprises qui font confiance à Campagne SMS pour leurs communications importantes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2 sm:px-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <Button asChild variant="gradient" size={isMobile ? "responsive" : "xl"} rounded="full" className="relative shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all hover:brightness-110 hover:saturate-125 w-full sm:w-auto">
                <a href="https://client.campagnesms.com/inscription" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  Commencer gratuitement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full sm:w-auto"
            >
              <Button asChild variant="default" size={isMobile ? "responsive" : "xl"} rounded="full" className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all w-full sm:w-auto">
                <Link to="/contact" className="flex items-center justify-center">
                  Nous contacter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-gray-100/20 dark:border-gray-800/20 text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 flex flex-wrap justify-center gap-2 sm:gap-x-8 sm:gap-y-4 px-2">
            <motion.div
              className="flex items-center backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 px-3 py-2 rounded-full shadow-sm flex-grow sm:flex-grow-0"
              whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-1 sm:mr-2 flex-shrink-0" />
              <span>Pas d'engagement</span>
            </motion.div>
            
            <motion.div
              className="flex items-center backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 px-3 py-2 rounded-full shadow-sm flex-grow sm:flex-grow-0"
              whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-1 sm:mr-2 flex-shrink-0" />
              <span>Annulez à tout moment</span>
            </motion.div>
            
            <motion.div
              className="flex items-center backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 px-3 py-2 rounded-full shadow-sm flex-grow sm:flex-grow-0"
              whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-1 sm:mr-2 flex-shrink-0" />
              <span>Support client 24/7</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
