
import { Check, MessageSquare, Zap, Lock, BarChart, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const advantages = [
  {
    title: 'Taux d\'ouverture de 95%',
    description: 'Presque tous vos SMS sont lus par vos clients',
    iconBg: 'bg-primary/10 dark:bg-primary/20',
    iconColor: 'text-primary',
    icon: MessageSquare,
  },
  {
    title: 'Lecture en moins de 3 minutes',
    description: 'Une réactivité inégalée par les autres canaux',
    iconBg: 'bg-secondary/10 dark:bg-secondary/20',
    iconColor: 'text-secondary',
    icon: Zap,
  },
  {
    title: 'Communication directe et personnelle',
    description: 'Un canal privilégié pour s\'adresser directement à vos clients',
    iconBg: 'bg-primary/10 dark:bg-primary/20',
    iconColor: 'text-primary',
    icon: Lock,
  },
  {
    title: 'ROI prouvé et mesurable',
    description: 'Des résultats concrets et quantifiables',
    iconBg: 'bg-secondary/10 dark:bg-secondary/20',
    iconColor: 'text-secondary',
    icon: BarChart,
  },
  {
    title: 'Compatible tous appareils',
    description: 'Disponible partout',
    iconBg: 'bg-primary/10 dark:bg-primary/20',
    iconColor: 'text-primary',
    icon: Check,
  },
  {
    title: 'Coût maîtrisé',
    description: 'Budget prévisible',
    iconBg: 'bg-secondary/10 dark:bg-secondary/20',
    iconColor: 'text-secondary',
    icon: Check,
  },
];

export const AdvantagesSection = () => {
  return (
    <section className="py-16 px-4 sm:py-24">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="text-center">
          <motion.div
            className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Smartphone className="h-10 w-10 text-primary" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="inline-block">Pourquoi choisir <span className="gradient-text">le SMS ?</span></span>
          </motion.h2>
        </div>
        
        <div className="glass-morphism p-6 sm:p-10 rounded-2xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 group hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className={`h-12 w-12 ${advantage.iconBg} rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-5 w-5 ${advantage.iconColor}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-gray-900 dark:text-white mb-1">{advantage.title}</p>
                    <p className="text-gray-700 dark:text-gray-300">{advantage.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
