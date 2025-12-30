
import { motion } from 'framer-motion';

export const TarifsHeader = () => {
  return (
    <section className="relative pt-32 pb-20 animate-fade-in overflow-hidden">
      {/* Enhanced gradient background */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/5 via-secondary/5 to-blue-100/5 dark:from-primary/10 dark:via-secondary/10 dark:to-blue-900/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-10 gradient-text drop-shadow-sm mx-auto">
            <span>Tarifs Campagne SMS</span>
            <motion.span 
              className="block h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-3 mb-6 w-1/3"
              initial={{ width: 0 }}
              animate={{ width: "25%" }}
              transition={{ delay: 0.5, duration: 0.7 }}
            ></motion.span>
          </h1>
        </motion.div>
        
        <motion.p 
          className="text-center text-gray-700 dark:text-gray-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Des solutions adaptées à chaque besoin. Comparez nos formules et choisissez celle qui correspond 
          vraiment à votre stratégie de communication SMS.
        </motion.p>
        
        <motion.div
          className="max-w-2xl mx-auto px-6 py-4 bg-white/80 dark:bg-gray-800/80 rounded-full backdrop-blur-xl shadow-md border border-white/30 dark:border-gray-700/30 text-center text-sm md:text-base text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-2.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></span>
            <span className="font-medium">Tous nos plans incluent un support technique et une garantie de livraison à 95%</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
