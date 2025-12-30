
import { MessageSquare, Shield, Clock, Users, Zap, BarChart, ArrowRight, CheckCircle, FileText } from 'lucide-react';
import LiveChat from '../components/LiveChat';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOMetadata from '../components/SEOMetadata';
import { InternalLinks } from '../components/seo/InternalLinks';

const Services = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <SEOMetadata 
        title="Services SMS - Plateforme d'envoi de SMS professionnels"
        description="Notre plateforme SMS offre tous les outils pour l'envoi de SMS : API SMS, logiciel SMS marketing, envoi SMS automatique, SMS bulk et SMS transactionnel pour entreprises. Prix SMS compétitifs et forfait SMS professionnel."
        keywords="plateforme sms, plateforme envoi sms, sms plateforme, api sms, logiciel sms marketing, outil envoi sms, envoi sms automatique, sms bulk, sms transactionnel, sms automatique, plateforme sms pro, campagne sms, campagnes sms marketing, sms commercial, sms pour entreprise, envoi de sms, envoi sms en ligne, prix campagne sms, forfait sms professionnel, pack sms professionnel"
        canonicalUrl="https://www.campagnesms.com/services"
      />
      
      <div className="min-h-screen">
        <section className="min-h-[80vh] pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
                <span className="gradient-text">Services SMS Professionnels</span>
                <motion.span 
                  className="block h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 w-1/5"
                  initial={{ width: 0 }}
                  animate={{ width: "20%" }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                ></motion.span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Notre plateforme SMS offre des solutions complètes pour l'envoi de SMS professionnel : campagnes SMS marketing, envoi SMS en masse, API SMS et logiciel SMS marketing avec prix SMS compétitifs adapté à vos besoins.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="card hover-scale bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 group">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Envoi de SMS professionnel</h3>
                <p className="text-gray-600 dark:text-gray-300">Plateforme envoi SMS pour vos campagnes SMS marketing et campagne publicitaire par SMS. Envoi SMS en ligne simple avec forfait SMS professionnel pour vos SMS commercial.</p>
              </div>

              <div className="card hover-scale bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 group">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">API SMS sécurisée</h3>
                <p className="text-gray-600 dark:text-gray-300">API SMS robuste avec cryptage de bout en bout. Intégrez facilement l'envoi SMS automatique dans vos applications avec notre outil envoi SMS et plateforme SMS pro.</p>
              </div>

              <div className="card hover-scale bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 group">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">SMS automatique programmé</h3>
                <p className="text-gray-600 dark:text-gray-300">Planifiez vos campagnes SMS avec notre logiciel SMS marketing. Envoi SMS automatique et rappel SMS pour optimiser vos SMS transactionnel et sms de confirmation.</p>
              </div>

              <div className="card hover-scale bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 group">
                <div className="h-14 w-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">SMS en masse pas cher</h3>
                <p className="text-gray-600 dark:text-gray-300">Envoi de SMS en masse avec segmentation avancée. Notre plateforme SMS permet le SMS bulk et campagne SMS massive avec prix SMS compétitifs pour vos SMS masse.</p>
              </div>

              <div className="card hover-scale bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 group">
                <div className="h-14 w-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Zap className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">Performance SMS optimale</h3>
                <p className="text-gray-600 dark:text-gray-300">Envoi SMS immédiat avec taux de délivrabilité exceptionnel. Notre plateforme SMS garantit des performances optimales pour vos campagnes SMS et sms pour entreprise.</p>
              </div>

              <div className="card hover-scale bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 group">
                <div className="h-14 w-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <BarChart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">Statistiques SMS détaillées</h3>
                <p className="text-gray-600 dark:text-gray-300">Analysez vos campagnes SMS marketing en temps réel. Notre logiciel SMS marketing fournit des rapports complets sur l'envoi de SMS et sms relation client.</p>
              </div>
            </div>
          </div>
        </section>

        {/* New section: Features in detail */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6"><span className="gradient-text">Fonctionnalités Avancées</span></h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Découvrez nos outils professionnels qui permettent d'optimiser vos campagnes SMS marketing et d'obtenir des résultats exceptionnels avec notre pack SMS professionnel.
              </p>
            </motion.div>

            <div className="space-y-16">
              {/* Feature 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
              >
                <div className="md:w-1/2">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1300" 
                        alt="API Integration" 
                        className="w-full h-auto rounded-lg object-cover aspect-video"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Intégration API SMS Transparente</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Notre API SMS robuste et bien documentée vous permet d'intégrer facilement nos services SMS dans vos applications existantes. Automatisez vos envoi de SMS directement depuis vos systèmes avec notre outil envoi SMS.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200">Documentation complète avec exemples de code pour campagne SMS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200">Support pour plusieurs langages de programmation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200">Implémentation rapide en quelques heures seulement</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12"
              >
                <div className="md:w-1/2">
                  <div className="p-2 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1300" 
                        alt="Personnalisation" 
                        className="w-full h-auto rounded-lg object-cover aspect-video"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Personnalisation Complète des SMS</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Créez des messages qui parlent directement à vos clients en utilisant nos outils avancés de personnalisation. Insérez automatiquement des informations client dans vos SMS commercial et SMS promotionnel pour une communication plus engageante.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200">Variables dynamiques pour les informations client et sms fidélisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200">Modèles de messages réutilisables pour vos campagnes SMS marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200">URLs personnalisés et raccourcis intelligents</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
              >
                <div className="md:w-1/2">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1300" 
                        alt="Analytics" 
                        className="w-full h-auto rounded-lg object-cover aspect-video"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Analyses et Rapports Avancés</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Prenez des décisions éclairées grâce à nos outils d'analyse détaillés. Visualisez les performances de vos campagnes SMS et identifiez les opportunités d'amélioration pour vos SMS pour entreprise.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200">Tableaux de bord interactifs et personnalisables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200">Exports de rapports en PDF et CSV</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200">Analyses comparatives et historiques</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section with updated content */}
        <section className="py-20 relative bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-gray-800 dark:to-gray-900">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000" 
              alt="Background" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 text-center"
            >
              <FileText className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Prêt à démarrer votre campagne SMS ?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Découvrez notre plateforme SMS avec prix SMS compétitifs. Forfait SMS illimité adapté à tous types d'entreprises pour vos campagnes SMS marketing et campagne d'envoi SMS.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/tarifs">
                  <Button variant="default" size="lg" className="rounded-full px-8">
                    <span className="flex items-center gap-2">
                      Voir nos prix SMS <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="rounded-full px-8">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Explorez nos solutions complètes
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Découvrez comment notre plateforme SMS peut transformer votre communication d'entreprise avec nos forfait SMS et logiciel SMS marketing
              </p>
            </motion.div>
            
            <InternalLinks currentPage="services" variant="horizontal" />
          </div>
        </section>

        <LiveChat />
      </div>
    </>
  );
};

export default Services;
