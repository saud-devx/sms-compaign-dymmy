
import { Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LiveChat from '../../components/LiveChat';
import { Button } from '@/components/ui/button';

const ClientSegmentation = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Segmentation client</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
              Ciblez précisément vos destinataires en fonction de critères démographiques, comportementaux et préférentiels pour des campagnes SMS ciblées et plus performantes.
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
                    <p className="font-medium">Segmentation multicritères</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Filtrez par âge, localisation, comportement d'achat et bien plus.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Listes personnalisées</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Créez et gérez des listes de contacts selon vos besoins spécifiques.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Import de contacts</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Importez facilement vos contacts depuis Excel, CSV ou votre CRM.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Segmentation automatique</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Laissez notre système créer des segments pertinents basés sur vos données.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Avantages</h3>
              <div className="space-y-4">
                <p className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Augmentez vos taux de conversion avec des messages ciblés</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Réduisez les coûts en envoyant uniquement aux contacts pertinents</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Améliorez la satisfaction client avec des communications personnalisées</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Évitez la fatigue marketing et les désabonnements</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Analysez les performances par segment pour affiner votre stratégie</span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Communication ciblée, résultats optimisés</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Découvrez comment notre segmentation client peut transformer votre stratégie de communication par SMS.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://client.campagnesms.com/inscription" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg">
                    Essayer gratuitement
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/tarifs">
                    Voir nos tarifs
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

export default ClientSegmentation;
