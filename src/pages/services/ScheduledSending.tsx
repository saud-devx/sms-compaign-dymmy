
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LiveChat from '../../components/LiveChat';
import { Button } from '@/components/ui/button';

const ScheduledSending = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Envoi <span className="gradient-text">programmé</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
              Planifiez vos campagnes SMS à l'avance et automatisez l'envoi au moment optimal pour maximiser votre impact auprès de votre audience.
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
              <h2 className="text-2xl font-bold">Fonctionnalités principales</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Programmation à l'avance</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Planifiez vos campagnes jusqu'à plusieurs mois à l'avance.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Envois récurrents</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Créez des campagnes SMS qui se répètent automatiquement (quotidien, hebdomadaire, mensuel).</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Optimisation des horaires</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Utilisez notre analyse pour déterminer les meilleurs moments d'envoi.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Modification flexible</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Modifiez ou annulez vos campagnes programmées à tout moment.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&q=80&w=1300" 
                alt="Scheduled SMS sending" 
                className="w-full h-auto rounded-xl shadow-lg object-cover"
                loading="lazy"
              />
              <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-md mt-6">
                <h3 className="text-xl font-semibold mb-4">Avantages</h3>
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Gagnez du temps en préparant vos campagnes à l'avance</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Envoyez des SMS à vos clients au moment le plus opportun</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Automatisez vos communications récurrentes</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Respectez les fuseaux horaires de vos destinataires</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Interface intuitive de planification avec calendrier</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Optimisez votre communication</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Commencez dès aujourd'hui à planifier vos campagnes SMS pour une communication plus efficace.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://client.campagnesms.com/inscription" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg">
                    Démarrer maintenant
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">
                    Autres services
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

export default ScheduledSending;
