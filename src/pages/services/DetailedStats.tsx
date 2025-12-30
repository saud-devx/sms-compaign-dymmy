
import { BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LiveChat from '../../components/LiveChat';
import { Button } from '@/components/ui/button';
import SEOMetadata from '../../components/SEOMetadata';

const DetailedStats = () => {
  return (
    <>
      <SEOMetadata 
        title="Statistiques Détaillées SMS - Analyses Campagnes SMS Marketing"
        description="Suivez les performances de vos campagnes SMS marketing en temps réel. Tableaux de bord analytiques et rapports détaillés pour optimiser vos stratégies de communication SMS avec notre plateforme SMS."
        keywords="statistiques sms, analyses campagnes sms, rapports sms, tableaux de bord sms, performance campagne sms, campagnes sms marketing, suivi sms, analytics sms, plateforme sms, logiciel sms marketing, campagne sms, sms commercial, prix campagne sms"
        canonicalUrl="https://campagnesms.com/services/detailed-stats"
      />
      
      <div className="min-h-screen">
        <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-8 w-8 text-secondary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Statistiques <span className="gradient-text">détaillées</span> SMS
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                Suivez les performances de vos campagnes SMS marketing en temps réel grâce à nos tableaux de bord analytiques et nos rapports détaillés pour optimiser vos stratégies de communication SMS avec notre plateforme SMS pro.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1300" 
                  alt="Analytics Dashboard" 
                  className="w-full h-auto rounded-xl shadow-lg object-cover mb-6"
                  loading="lazy"
                />
                
                <h2 className="text-2xl font-bold mb-4">Fonctionnalités d'analyse pour vos campagnes SMS</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">Tableau de bord en temps réel pour campagne SMS</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Visualisez instantanément les performances de vos campagnes SMS marketing et SMS commercial.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">Suivi des statuts de livraison SMS</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Suivez chaque SMS : envoyé, livré, échec, et raison des échecs pour optimiser votre prix campagne SMS.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">Analyse des clics sur liens SMS</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Mesurez les taux de clics sur les URL dans vos SMS promotionnel et campagne publicitaire par SMS.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">Rapports exportables de campagnes SMS</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Exportez vos données en CSV, Excel ou PDF pour analyse externe de vos campagnes SMS marketing.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-md mb-8">
                  <h3 className="text-xl font-semibold mb-4">Métriques clés disponibles pour votre plateforme SMS</h3>
                  <div className="space-y-4">
                    <p className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Taux de livraison global et par opérateur pour vos campagnes SMS</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Taux d'ouverture et de clic pour les SMS avec liens et campagne marketing SMS</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Performance par segment de clientèle et SMS pour entreprise</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Analyse comparative entre campagnes SMS marketing</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Performance horaire pour optimiser vos futurs envoi de SMS</span>
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1300" 
                    alt="Data Analytics" 
                    className="w-full h-auto rounded-xl shadow-lg object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Prenez des décisions éclairées pour vos campagnes SMS</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Optimisez vos campagnes SMS marketing grâce à nos analyses détaillées et maximisez votre retour sur investissement avec notre logiciel SMS marketing et plateforme SMS pro.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="https://client.campagnesms.com/inscription" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg">
                      Débloquer les statistiques
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/services">
                      Explorer nos services SMS
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LiveChat />
      </div>
    </>
  );
};

export default DetailedStats;
