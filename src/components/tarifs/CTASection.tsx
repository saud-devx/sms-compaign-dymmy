
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const CTASection = () => {
  return (
    <motion.section 
      className="mt-12 mb-24 text-center px-4 py-16 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className="max-w-4xl mx-auto glass-morphism py-12 px-8 rounded-2xl"
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h3 
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Prêt à commencer ?
        </motion.h3>
        <motion.p 
          className="text-gray-700 dark:text-gray-200 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Rejoignez des milliers d'entreprises qui font confiance à nos solutions SMS pour leur communication client.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Link 
            to="/inscription" 
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-medium hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            Créer un compte
          </Link>
          <Link 
            to="/contact" 
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 font-medium hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-md transition-all"
          >
            Contacter un expert
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
