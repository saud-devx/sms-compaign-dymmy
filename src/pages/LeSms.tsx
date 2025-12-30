
import { MessageSquare, Zap, Lock, BarChart, Check, Award, Users } from 'lucide-react';
import LiveChat from '../components/LiveChat';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOMetadata from '../components/SEOMetadata';
import SchemaData from '../components/SchemaData';

const LeSms = () => {
  // FAQ schema for the SMS page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Pourquoi choisir le SMS marketing ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le SMS marketing offre un taux d'ouverture supérieur à 95%, une lecture dans les 3 minutes pour 90% des messages, et une communication directe avec vos clients. C'est un canal avec un ROI démontré et mesurable pour vos campagnes sms."
        }
      },
      {
        "@type": "Question",
        "name": "Quels sont les cas d'usage courants du SMS marketing ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les cas d'usage courants incluent les campagnes sms promotionnelles, les rappels de rendez-vous, les confirmations de commande, les alertes, les sondages et les campagnes de fidélisation client."
        }
      },
      {
        "@type": "Question",
        "name": "Quels sont les avantages du SMS par rapport à l'email ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le SMS offre une communication instantanée, une forte réactivité des destinataires, une couverture nationale complète et une efficacité prouvée par des milliers de clients pour vos campagnes marketing."
        }
      }
    ]
  };

  return (
    <>
      <SEOMetadata 
        title="Le SMS Marketing - Campagne SMS et Stratégies Marketing"
        description="Découvrez le sms marketing avec un taux d'ouverture de 95%. Campagne sms marketing, sms commercial, sms promotionnel et campagne publicitaire par sms pour fidéliser vos clients."
        keywords="sms marketing, campagne sms marketing, sms commercial, sms promotionnel, campagne publicitaire par sms, sms pour entreprise, sms relation client, sms fidélisation, campagne marketing sms, smsmarketing"
        canonicalUrl="https://www.campagnesms.com/le-sms"
      />
      <SchemaData type="FAQPage" data={faqSchema} />
      
      <div className="min-h-screen">
        <section className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              <span className="gradient-text">Le SMS Marketing</span>
              <motion.span 
                className="block h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 w-1/5"
                initial={{ width: 0 }}
                animate={{ width: "20%" }}
                transition={{ delay: 0.5, duration: 0.7 }}
              ></motion.span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mt-12">
              <motion.div 
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/30 border border-gray-100 dark:border-gray-700"
              >
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                  <Award className="h-6 w-6 text-primary" />
                  Pourquoi choisir le sms marketing ?
                </h2>
                <ul className="space-y-5">
                  <motion.li 
                    whileHover={{ x: 5 }} 
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 transition-all"
                  >
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mt-1 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Taux d'ouverture supérieur à 95%</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Presque tous vos campagnes sms sont lues par vos clients</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }} 
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 transition-all"
                  >
                    <div className="h-10 w-10 bg-secondary/10 rounded-full flex items-center justify-center mt-1 group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                      <Zap className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Lecture dans les 3 minutes pour 90% des SMS</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Une réactivité inégalée pour vos campagnes marketing sms</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }} 
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 transition-all"
                  >
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mt-1 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Communication directe et personnelle</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Un canal privilégié pour votre sms relation client</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }} 
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 transition-all"
                  >
                    <div className="h-10 w-10 bg-secondary/10 rounded-full flex items-center justify-center mt-1 group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                      <BarChart className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">ROI démontré et mesurable</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Des résultats concrets pour vos campagnes sms marketing</p>
                    </div>
                  </motion.li>
                </ul>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/30 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                  <Users className="h-5 w-5 text-primary" />
                  Les avantages du SMS pour entreprise
                </h3>
                <ul className="space-y-4">
                  <motion.li 
                    whileHover={{ x: 5 }} 
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 transition-all"
                  >
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary/20">
                      <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-gray-800 dark:text-gray-200">Communication instantanée avec vos clients</p>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }} 
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 transition-all"
                  >
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary/20">
                      <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-gray-800 dark:text-gray-200">Forte réactivité pour vos campagnes publicitaires par sms</p>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }} 
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 transition-all"
                  >
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary/20">
                      <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-gray-800 dark:text-gray-200">Couverture nationale complète</p>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }} 
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 transition-all"
                  >
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary/20">
                      <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-gray-800 dark:text-gray-200">Efficacité prouvée par des milliers de clients</p>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }} 
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 transition-all"
                  >
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary/20">
                      <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-gray-800 dark:text-gray-200">Budget maîtrisé pour vos campagnes sms</p>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }} 
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 transition-all"
                  >
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary/20">
                      <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-gray-800 dark:text-gray-200">Facilité d'utilisation de notre plateforme sms</p>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }} 
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 transition-all"
                  >
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary/20">
                      <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-gray-800 dark:text-gray-200">Personnalisation avancée des messages</p>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }} 
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 transition-all"
                  >
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary/20">
                      <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-gray-800 dark:text-gray-200">Compatible avec tous les appareils mobiles</p>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
            
            {/* Cas d'usage section */}
            <div className="mt-16 sm:mt-24">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-white">
                Cas <span className="gradient-text">d'usage</span> SMS Marketing
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <motion.div 
                  whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="card hover-scale bg-white dark:bg-gray-800 backdrop-blur-sm hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 group p-6 rounded-xl"
                >
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110 group-hover:bg-primary/20">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors text-gray-900 dark:text-white">SMS promotionnel</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Informez vos clients de vos offres avec des campagnes sms promotionnelles qui augmentent vos ventes rapidement.
                  </p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="card hover-scale bg-white dark:bg-gray-800 backdrop-blur-sm hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 group p-6 rounded-xl"
                >
                  <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110 group-hover:bg-secondary/20">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors text-gray-900 dark:text-white">Rappel SMS</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Réduisez les absences en rappelant automatiquement les rendez-vous à vos clients via rappel sms.
                  </p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="card hover-scale bg-white dark:bg-gray-800 backdrop-blur-sm hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 group p-6 rounded-xl"
                >
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110 group-hover:bg-primary/20">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors text-gray-900 dark:text-white">SMS de confirmation</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Envoyez des sms de confirmation de commande ou de livraison pour rassurer vos clients.
                  </p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="card hover-scale bg-white dark:bg-gray-800 backdrop-blur-sm hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 group p-6 rounded-xl"
                >
                  <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110 group-hover:bg-secondary/20">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors text-gray-900 dark:text-white">Alertes SMS</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Informez rapidement vos clients en cas d'urgence ou de changement important.
                  </p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="card hover-scale bg-white dark:bg-gray-800 backdrop-blur-sm hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 group p-6 rounded-xl"
                >
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110 group-hover:bg-primary/20">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors text-gray-900 dark:text-white">Sondages SMS</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Recueillez l'avis de vos clients facilement avec des mini-questionnaires par sms.
                  </p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="card hover-scale bg-white dark:bg-gray-800 backdrop-blur-sm hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 group p-6 rounded-xl"
                >
                  <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110 group-hover:bg-secondary/20">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors text-gray-900 dark:text-white">SMS fidélisation</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Entretenez la relation client avec vos clients grâce à des messages personnalisés de fidélisation.
                  </p>
                </motion.div>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="mt-16 sm:mt-24 text-center">
              <motion.div 
                whileHover={{ scale: 1.03, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl p-6 sm:p-10 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Prêt à lancer votre campagne SMS marketing ?</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
                  Notre plateforme sms simple et intuitive vous permet de démarrer vos campagnes sms en quelques minutes.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Link to="/tarifs" className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Voir nos prix SMS
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <LiveChat />
      </div>
    </>
  );
};

export default LeSms;
