
import { Helmet } from "react-helmet-async";
import { Shield, Lock, Hand, Lightbulb, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { elementVariants } from "@/components/Layout";
import { EnhancedCard } from "@/components/ui/enhanced-card";

const Avantages = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Avantages SMS Marketing - Plateforme Envoi SMS Professionnel | Campagne SMS</title>
        <meta 
          name="description" 
          content="Découvrez tous les avantages de notre plateforme SMS : sécurité, confidentialité, liberté et simplicité pour vos campagnes SMS marketing. SMS commercial, envoi de SMS, prix campagne SMS compétitifs, logiciel SMS marketing professionnel." 
        />
        <meta 
          name="keywords" 
          content="plateforme SMS, campagne SMS, SMS marketing, envoi de SMS, SMS commercial, SMS promotionnel, plateforme envoi SMS, SMS pour entreprise, outil envoi SMS, envoi sms en ligne, sms en masse pas cher, forfait sms, prix campagne sms, logiciel sms marketing, api sms, sms automatique, campagnes sms, tarif sms pro, pack sms professionnel, sms transactionnel, prix d'un sms, coût sms, campagne d'envoi sms" 
        />
      </Helmet>

      {/* Hero Section with reduced height matching other pages */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:via-gray-800/90 dark:to-gray-900 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              className="text-center"
              variants={elementVariants}
              initial="initial"
              animate="in"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-800 dark:text-white">
                <span className="gradient-text">Avantages SMS Marketing</span>
                <motion.span 
                  className="block h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 w-1/3"
                  initial={{ width: 0 }}
                  animate={{ width: "50%" }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                ></motion.span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl mb-4 max-w-2xl mx-auto font-medium text-center text-gray-700 dark:text-gray-200"
              variants={elementVariants}
              initial="initial"
              animate="in"
              transition={{ delay: 0.3 }}
            >
              Découvrez pourquoi des milliers d'entreprises choisissent notre logiciel SMS marketing pour leurs campagnes SMS et campagne d'envoi SMS. Prix campagne SMS compétitifs et API SMS performante.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section with improved layout */}
      <section id="avantages-section" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-relaxed">
              Pour vos campagnes SMS et campagne publicitaire par SMS, notre 
              <span className="text-primary font-bold"> plateforme envoi SMS</span> met à votre disposition un 
              <span className="text-primary font-bold"> outil envoi SMS</span> complet avec un tarif SMS pro avantageux :
            </h2>
          </motion.div>

          {/* Key Advantages Grid - Redesigned with more visual appeal */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Security Card */}
            <motion.div variants={itemVariants}>
              <EnhancedCard variant="glass" className="h-full group hover:-translate-y-1 transition-all duration-300">
                <div className="relative overflow-hidden rounded-xl">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-full"></div>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 shadow-md group-hover:shadow-xl transition-all">
                        <Shield className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">La sécurité</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          Effectuez vos paiements sans aucun risque sur les sites sécurisés de Paybox ou Paypal. Votre compte est automatiquement crédité ; vous pouvez envoyer des SMS immédiatement après le paiement avec notre logiciel SMS marketing sécurisé pour vos campagnes SMS et vos envoi de SMS professionnels.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </EnhancedCard>
            </motion.div>

            {/* Confidentiality Card */}
            <motion.div variants={itemVariants}>
              <EnhancedCard variant="glass" className="h-full group hover:-translate-y-1 transition-all duration-300">
                <div className="relative overflow-hidden rounded-xl">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-full"></div>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 shadow-md group-hover:shadow-xl transition-all">
                        <Lock className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">La confidentialité</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          Importez vos listes de contacts sur votre interface Campagne SMS en toute confiance pour vos campagnes SMS marketing et vos SMS bulk. Vos listes de contacts sont 100% CONFIDENTIELLES pour vos SMS commercial et SMS transactionnel. Elles ne seront JAMAIS prêtées, cédées, vendues, ni exploitées de quelque manière que ce soit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </EnhancedCard>
            </motion.div>

            {/* Freedom Card */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <EnhancedCard variant="3d" className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 group hover:-translate-y-1 transition-all duration-300">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 shadow-md group-hover:shadow-xl transition-all">
                      <Hand className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">La liberté</h3>
                      <p className="mb-5 text-gray-700 dark:text-gray-400">
                        Acheter des SMS se fait en toute liberté sur Campagne SMS avec nos pack SMS professionnel et forfait SMS illimité flexibles. Combien coûte un SMS ? Nos prix d'un SMS sont parmi les plus compétitifs :
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          {
                            title: "PAS D'ABONNEMENT",
                            desc: "L'inscription est gratuite et vos commandes de SMS ne nécessitent aucun engagement auprès de Campagne SMS. Profitez de notre service d'envoi SMS en ligne sans contrainte avec un coût SMS transparent."
                          },
                          {
                            title: "PAS DE DATE LIMITE",
                            desc: "Une fois commandés, vous pouvez envoyer des SMS automatique un par un, ou par lot ; vos SMS n'ont aucune date limite d'utilisation pour vos campagnes SMS marketing et SMS de confirmation."
                          },
                          {
                            title: "PAS DE QUANTITÉ IMPOSÉE",
                            desc: "À partir du minimum de 200 SMS, vous pouvez commander vos SMS à l'unité! Des paliers de référence ont été définis pour vous fournir des prix SMS en masse attractifs avec notre API SMS."
                          }
                        ].map((item, index) => (
                          <motion.div 
                            key={index}
                            className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-full h-1 bg-gradient-to-r from-primary to-secondary mb-4 rounded-full"></div>
                            <p className="font-bold text-sm text-center mb-3 text-gray-800 dark:text-white">{item.title}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {item.desc}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </EnhancedCard>
            </motion.div>

            {/* Simplicity Card */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <EnhancedCard variant="gradient" className="group hover:-translate-y-1 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 shadow-md group-hover:shadow-xl transition-all">
                      <Lightbulb className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">La simplicité</h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Avec Campagne SMS, envoyer des SMS commercial, SMS promotionnel et rappel SMS est très simple grâce à notre outil envoi SMS intuitif. Notre plateforme SMS pro permet une gestion assistée de vos listes de contacts. Inutile d'ajouter 1 à 1 vos centaines ou milliers de contacts. Gagnez du temps en créant vos listes de contacts à partir de vos fichiers excel, ou tout autre type de fichier pour vos SMS relation client et SMS fidélisation avec le SMS.
                      </p>
                    </div>
                  </div>
                </div>
              </EnhancedCard>
            </motion.div>
          </motion.div>

          {/* Marketing Options Section - Enhanced design */}
          <div className="relative mt-32 mb-14">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-3xl -z-10 transform -skew-y-1"></div>
            
            <motion.div 
              className="text-center p-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50"></div>
                <BarChart3 className="h-10 w-10 text-primary relative z-10" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Les options SMS marketing pour vos campagnes SMS massive
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
                Découvrez les puissantes fonctionnalités de notre logiciel SMS marketing pour optimiser vos campagne marketing SMS et SMS masse avec un tarif campagne SMS avantageux
              </p>
            </motion.div>
          </div>

          {/* Marketing Options Cards - Redesigned with better visual hierarchy */}
          <div className="max-w-4xl mx-auto mb-20 px-4">
            {[
              "D'une grande simplicité, vous pourrez envoyer à chacun de vos destinataires un SMS personnalisé par son nom, prénom ou toute autre information de votre choix pour vos campagnes SMS commercial et campagne publicitaire par SMS.",
              "Prévoyez à l'avance vos campagnes d'envois de SMS. Choisissez simplement la date et l'heure à laquelle seront envoyés vos SMS automatique pour votre envoi SMS en ligne et vos SMS transactionnel.",
              "Personnalisez, si vous le souhaitez, l'expéditeur du SMS pour que votre nom apparaisse sur le mobile de vos clients avant même de lire le message pour vos SMS promotionnel et SMS de confirmation (entraîne un surcoût dans le prix des SMS).",
              "Récupérez les accusés de réception de vos SMS pour un suivi précis de vos campagnes SMS marketing massive avec notre pack SMS professionnel et API SMS (entraîne un surcoût dans le coût SMS)."
            ].map((text, index) => (
              <motion.div 
                key={index}
                className="mb-5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 p-5 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                      {text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section - Enhanced with better visual design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="relative overflow-hidden rounded-2xl">
              {/* Background with gradient and effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 dark:from-primary/20 dark:via-secondary/10 dark:to-primary/20"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 dark:bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl"></div>
              
              <div className="relative z-10 p-10 md:p-14">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                    Prêt à profiter de tous ces avantages SMS pour vos campagnes SMS avec un prix campagne SMS imbattable ?
                  </h3>
                  <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                    Inscrivez-vous gratuitement et commencez à envoyer vos campagnes SMS commercial et SMS promotionnel dès aujourd'hui avec notre forfait SMS illimité flexible et notre API SMS performante.
                  </p>
                  <div className="flex flex-wrap gap-6 justify-center">
                    <Button 
                      asChild
                      size="lg" 
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 h-auto text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                      <a href="https://client.campagnesms.com/inscription" target="_blank" rel="noopener">
                        Inscription gratuite
                      </a>
                    </Button>
                    <Button 
                      asChild
                      variant="outline"
                      size="lg" 
                      className="px-8 py-3 h-auto text-lg font-semibold hover:-translate-y-1 transition-all border-2"
                    >
                      <a href="/contact">
                        Nous contacter
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Avantages;
