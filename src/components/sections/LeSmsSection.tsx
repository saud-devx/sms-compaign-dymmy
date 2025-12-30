
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Lock, BarChart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LeSmsSection = () => {
  return (
    <div id="le-sms" className="py-24 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="gradient-text">Le SMS Marketing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Une solution efficace pour communiquer directement avec vos clients
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mt-12">
          <motion.div 
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/30 border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              Pourquoi choisir le SMS ?
            </h3>
            <ul className="space-y-5">
              <motion.li 
                whileHover={{ x: 5 }} 
                transition={{ duration: 0.2 }}
                className="flex items-start gap-4 transition-all"
              >
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mt-1 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Taux d'ouverture supérieur à 95%</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Presque tous vos SMS sont lus par vos clients</p>
                </div>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }} 
                transition={{ duration: 0.2 }}
                className="flex items-start gap-4 transition-all"
              >
                <div className="h-10 w-10 bg-secondary/10 rounded-full flex items-center justify-center mt-1 group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                  <Zap className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Lecture dans les 3 minutes pour 90% des SMS</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Une réactivité inégalée par les autres canaux</p>
                </div>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }} 
                transition={{ duration: 0.2 }}
                className="flex items-start gap-4 transition-all"
              >
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mt-1 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Communication directe et personnelle</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Un canal privilégié pour s'adresser directement à vos clients</p>
                </div>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }} 
                transition={{ duration: 0.2 }}
                className="flex items-start gap-4 transition-all"
              >
                <div className="h-10 w-10 bg-secondary/10 rounded-full flex items-center justify-center mt-1 group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                  <BarChart className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">ROI démontré et mesurable</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Des résultats concrets et quantifiables</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/30 border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              Les avantages du SMS
            </h3>
            <ul className="space-y-4">
              <motion.li 
                whileHover={{ x: 5 }} 
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 transition-all"
              >
                <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                </div>
                <p className="text-gray-800 dark:text-gray-200">Communication instantanée avec vos clients</p>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }} 
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 transition-all"
              >
                <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                </div>
                <p className="text-gray-800 dark:text-gray-200">Forte réactivité des destinataires</p>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }} 
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 transition-all"
              >
                <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                </div>
                <p className="text-gray-800 dark:text-gray-200">Couverture nationale complète</p>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }} 
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 transition-all"
              >
                <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                </div>
                <p className="text-gray-800 dark:text-gray-200">Efficacité prouvée par des milliers de clients</p>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }} 
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 transition-all"
              >
                <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                </div>
                <p className="text-gray-800 dark:text-gray-200">Budget maîtrisé et prévisible</p>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }} 
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 transition-all"
              >
                <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                </div>
                <p className="text-gray-800 dark:text-gray-200">Facilité d'utilisation de notre plateforme</p>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg text-lg font-medium"
            asChild
          >
            <a href="#contact">Contactez-nous pour en savoir plus</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeSmsSection;
