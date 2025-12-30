
import { Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LiveChat from '../../components/LiveChat';
import { Button } from '@/components/ui/button';

const OptimalPerformance = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Performance <span className="gradient-text">optimale</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
              Notre infrastructure de pointe garantit une livraison ultra-rapide de vos SMS, même lors des pics d'envoi, avec un suivi en temps réel de chaque message.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative overflow-hidden rounded-xl shadow-xl mb-8">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1300" 
                  alt="Server Infrastructure" 
                  className="w-full h-auto object-cover rounded-xl relative z-10"
                  loading="lazy"
                />
              </div>
              
              <h2 className="text-2xl font-bold">Nos garanties de performance</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Livraison ultra-rapide</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Envoi de SMS traités en quelques secondes, même pour les grandes campagnes.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Taux de livraison {'>'}99%</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Nous garantissons la livraison quasi-totale de vos messages.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Connexions directes aux opérateurs</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Routage optimisé pour tous les opérateurs mobiles.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Haute disponibilité</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Notre plateforme est disponible 24/7 avec un SLA de 99,9%.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between h-full"
            >
              <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Avantages techniques</h3>
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Infrastructure cloud scalable pour les pics d'envoi</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Technologie de routage intelligent pour optimiser les chemins d'envoi</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Système de file d'attente avancé pour gérer des millions de SMS</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Capacité d'envoi massive : jusqu'à 500 SMS par seconde</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Suivi en temps réel du statut de chaque message</span>
                  </p>
                </div>
              </div>
              
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1300" 
                  alt="Performance Technology" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">La fiabilité au service de votre communication</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Expérimentez la différence avec notre plateforme haute performance pour vos campagnes SMS critiques.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://client.campagnesms.com/inscription" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg">
                    Tester notre performance
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Discuter avec un expert
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LiveChat />
    </div>
  );
};

export default OptimalPerformance;
