
import React from 'react';
import { Shield, Users, Zap, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <Shield className="h-7 w-7 text-primary" />,
    title: "Sécurité et confidentialité",
    description: "Grâce à nos serveurs sécurisés, ainsi qu'à la sauvegarde permanente des données stockées, vos informations restent protégées.",
    color: "primary"
  },
  {
    icon: <Users className="h-7 w-7 text-secondary" />,
    title: "Conforme GDPR",
    description: "Serveurs hébergés en France, partenaires français et conformité GDPR pour une tranquillité d'esprit totale.",
    color: "secondary"
  },
  {
    icon: <Zap className="h-7 w-7 text-primary" />,
    title: "Simple et Rapide",
    description: "Pas plus de quelques minutes pour réaliser votre campagne. Interface intuitive et processus optimisé.",
    color: "primary"
  },
  {
    icon: <MessageSquare className="h-7 w-7 text-secondary" />,
    title: "Support client illimité",
    description: "Nous sommes heureux de vous guider dans la réalisation de vos campagnes. Assistance personnalisée disponible.",
    color: "secondary"
  }
];

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

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -left-10 top-10 w-40 h-40 rounded-full bg-primary"></div>
        <div className="absolute -right-10 bottom-10 w-40 h-40 rounded-full bg-secondary"></div>
        <div className="absolute left-1/2 top-1/3 w-20 h-20 rounded-full bg-primary/50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title text-center mb-4">Pourquoi nous choisir</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Découvrez les avantages qui font de Campagne SMS la solution de choix pour vos communications par SMS professionnelles.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card transition-all duration-300 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 dark:hover:from-primary/10 dark:hover:to-secondary/10 flex flex-col h-full border border-gray-100 dark:border-gray-800 rounded-2xl shadow-md p-6 hover:border-primary/20"
              variants={item}
            >
              <div className={`h-14 w-14 bg-${feature.color === "primary" ? "primary" : "secondary"}/10 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:bg-${feature.color === "primary" ? "primary" : "secondary"}/20`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{feature.description}</p>
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 hover:border-primary/10 transition-colors">
                <Link to="/services" className="text-primary flex items-center text-sm font-medium hover:underline group">
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">En savoir plus</span> 
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
