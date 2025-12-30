
import React from 'react';
import { Clock, BarChart, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background with gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title mb-4"><span className="gradient-text">Nos Services</span></h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des solutions sur mesure pour tous vos besoins en communication SMS.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="modern-card group hover-lift flex flex-col h-full transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary/20 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 dark:hover:from-primary/10 dark:hover:to-secondary/10 dark:bg-gray-800/95"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-12 w-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/20">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors text-gray-800 dark:text-white">Mise en place instantanée</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
              Aussitôt que vous avez rechargé votre compte de SMS via nos plateformes de paiement sécurisées, vos crédits sont disponibles et prêts à être utilisés pour une campagne SMS.
            </p>
          </motion.div>

          <motion.div 
            className="modern-card group hover-lift flex flex-col h-full transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary/20 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 dark:hover:from-primary/10 dark:hover:to-secondary/10 dark:bg-gray-800/95"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="h-12 w-12 bg-secondary/10 dark:bg-secondary/20 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-secondary/20">
              <BarChart className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors text-gray-800 dark:text-white">Sauvegardes constantes</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
              Nos serveurs effectuent régulièrement des sauvegardes afin de protéger au maximum vos informations et garantir la continuité de vos campagnes.
            </p>
          </motion.div>

          <motion.div 
            className="modern-card group hover-lift flex flex-col h-full transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary/20 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 dark:hover:from-primary/10 dark:hover:to-secondary/10 dark:bg-gray-800/95"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="h-12 w-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/20">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors text-gray-800 dark:text-white">Sécurité des données</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
              La sécurité de vos données est notre priorité absolue. Nous utilisons des technologies de pointe pour protéger toutes vos informations sensibles.
            </p>
          </motion.div>
        </div>
        
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/tarifs">
              <Button 
                className="font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 bg-gradient-to-r from-primary to-secondary rounded-full px-8 py-6 hover:brightness-110 hover:saturate-125"
              >
                <span className="flex items-center gap-2">
                  Voir nos tarifs <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
