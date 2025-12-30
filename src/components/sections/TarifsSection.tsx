
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TarifCard, type TarifPlan } from '../tarifs/TarifCard';

const tarifs: TarifPlan[] = [
  {
    title: 'Starter',
    price: '0.055',
    priceUnit: '€',
    priceDetail: '/SMS',
    features: [
      "200 SMS",
      "Support email",
      "Aide à la création de campagne",
    ],
    button: {
      label: 'Commencer',
      link: 'https://client.campagnesms.com/inscription',
      style: 'secondary'
    },
    iconBg: 'bg-primary/10 dark:bg-primary/20',
    iconColor: 'text-primary',
  },
  {
    title: 'Pro',
    price: '0.047',
    priceUnit: '€',
    priceDetail: '/SMS',
    features: [
      "7 000 SMS",
      "Support email et téléphone",
      "API & Webhooks",
      "Rapports avancés"
    ],
    button: {
      label: 'Choisir Pro',
      link: 'https://client.campagnesms.com/inscription',
      style: 'primary'
    },
    iconBg: 'bg-primary/10 dark:bg-primary/20',
    iconColor: 'text-primary',
    popular: true
  },
  {
    title: 'Enterprise',
    price: '0.043',
    priceUnit: '€',
    priceDetail: '/SMS',
    features: [
      "20 000 SMS ou plus",
      "Account manager dédié",
      "Intégration personnalisée",
      "Suivi des performances de campagnes"
    ],
    button: {
      label: 'Choisir Enterprise',
      link: 'https://client.campagnesms.com/inscription',
      style: 'secondary'
    },
    iconBg: 'bg-secondary/10 dark:bg-secondary/20',
    iconColor: 'text-secondary',
  }
];

const TarifsSection = () => {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Nos <span className="gradient-text">Tarifs</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Solutions flexibles pour vos besoins en communication SMS
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {tarifs.map((plan, index) => (
              <TarifCard key={plan.title} plan={plan} index={index} />
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-xl p-8 shadow-lg text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Besoin d'une solution personnalisée ?</h3>
          <p className="text-gray-700 dark:text-gray-200 mb-6">
            Nos experts vous accompagnent pour créer un forfait adapté à vos besoins spécifiques.
          </p>
          
          <Button 
            variant="default" 
            className="group"
            asChild
          >
            <a href="#contact">
              Contactez-nous <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Ce qui est inclus</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Plateforme intuitive et facile d'utilisation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Support technique réactif</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Statistiques détaillées de vos campagnes</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Personnalisation des messages</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Pourquoi nous choisir</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Sans engagement ni frais cachés</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Tarifs dégressifs selon volume</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Plateforme sécurisée et fiable</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Plus de 10 ans d'expertise</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TarifsSection;
