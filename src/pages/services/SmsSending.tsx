
import { MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LiveChat from '../../components/LiveChat';
import { Button } from '@/components/ui/button';
import SEOMetadata from '../../components/SEOMetadata';
import SchemaData from '../../components/SchemaData';
import { generateBreadcrumbSchema, generateFaqSchema } from '../../utils/schemaUtils';

const SmsSending = () => {
  // Service schema for structured data
  const serviceSchema = {
    "name": "Envoi de SMS Professionnels",
    "description": "Notre service d'envoi de SMS vous permet de communiquer avec vos clients via SMS marketing. Envois unitaires ou campagnes de SMS en masse.",
    "provider": {
      "@type": "Organization",
      "name": "Campagne SMS"
    },
    "serviceType": "Service d'envoi de SMS",
    "areaServed": "France",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Options d'envoi de SMS",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "SMS Marketing",
          "description": "Envoi de SMS pour vos campagnes marketing"
        },
        {
          "@type": "OfferCatalog",
          "name": "SMS Transactionnels",
          "description": "Envoi de SMS de confirmation et d'alerte"
        }
      ]
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://client.campagnesms.com/",
      "servicePhone": "+33-4-84-84-98-33",
      "serviceSmsNumber": "+33-4-84-84-98-33"
    }
  };

  // FAQ items for this service
  const faqItems = [
    {
      question: "Combien coûte un SMS avec votre plateforme ?",
      answer: "Le prix d'un SMS varie entre 0,029€ et 0,059€ selon le volume d'envoi et la destination. Notre prix campagne SMS est très compétitif. Consultez notre page tarifs pour connaître le coût SMS détaillé et nos forfait SMS."
    },
    {
      question: "Peut-on personnaliser les SMS avec votre logiciel SMS marketing ?",
      answer: "Oui, notre plateforme envoi SMS permet d'insérer des champs personnalisés comme le prénom, nom ou toute autre information spécifique à chaque destinataire pour vos campagnes SMS marketing et campagne publicitaire par SMS."
    },
    {
      question: "Quelle est la longueur maximale d'un SMS sur votre API SMS ?",
      answer: "Un SMS standard peut contenir jusqu'à 160 caractères. Au-delà, le message sera divisé en plusieurs SMS et facturé en conséquence dans le prix des SMS."
    }
  ];

  // Breadcrumb for this page
  const breadcrumbItems = [
    { name: "Accueil", item: "https://campagnesms.com/" },
    { name: "Services", item: "https://campagnesms.com/services" },
    { name: "Envoi de SMS", item: "https://campagnesms.com/services/sms-sending" }
  ];

  return (
    <>
      <SEOMetadata 
        title="Envoi de SMS Professionnels - Service de Campagne SMS Marketing"
        description="Service d'envoi de SMS professionnels pour vos campagnes SMS marketing et campagne d'envoi SMS. Envoi de SMS en masse pas cher, SMS commercial, logiciel SMS marketing avec API SMS. Prix campagne SMS compétitifs, forfait SMS professionnel."
        keywords="envoi de sms, envoi sms, sms envoie, envoi sms de masse, envoi sms masse, envoi sms en ligne, envoyer sms en ligne, sms envoi, sms automatique, sms bulk, sms transactionnel, envoi sms immédiat, campagne sms, sms campagne, campagne de sms, campagnes sms, campagne sms marketing, campagne d'envoi sms, campagne publicitaire par sms, plateforme envoi sms, logiciel sms marketing, api sms, outil envoi sms, sms commercial, sms pour entreprise, prix campagne sms, tarif sms pro, coût sms, prix d'un sms, forfait sms professionnel, pack sms professionnel, sms en masse pas cher"
        canonicalUrl="https://campagnesms.com/services/sms-sending"
        locales={[
          { locale: "fr", url: "https://campagnesms.com/services/sms-sending" },
          { locale: "en", url: "https://campagnesms.com/en/services/sms-sending" }
        ]}
      />
      
      {/* Enhanced schema data with multiple types */}
      <SchemaData 
        type={['Service', 'BreadcrumbList', 'FAQPage']} 
        data={[
          serviceSchema,
          generateBreadcrumbSchema(breadcrumbItems),
          generateFaqSchema(faqItems)
        ]} 
      />
      
      <div className="min-h-screen">
        <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Envoi de <span className="gradient-text">SMS</span> Professionnels
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                Notre plateforme envoi SMS et logiciel SMS marketing vous permettent d'envoyer des SMS pas cher à vos clients. Que ce soit pour des envoi de SMS individuels, des campagnes SMS marketing ou des campagne publicitaire par SMS à grande échelle avec notre API SMS et outil envoi sms professionnel.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mt-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold">Fonctionnalités principales de notre plateforme SMS</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">Envoi de SMS individuels et sms automatique</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Envoyez des SMS personnalisés à des contacts spécifiques avec un prix d'un SMS compétitif et envoi sms immédiat.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">Campagnes SMS massive et SMS bulk</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Envoyez des milliers de SMS simultanément avec notre forfait SMS professionnel et sms en masse pas cher.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">SMS commercial et SMS promotionnel personnalisés</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Incluez le nom, prénom et autres informations dans vos campagnes SMS marketing et sms pour entreprise.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">Plateforme sms pro intuitive</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Notre logiciel SMS marketing est facile à utiliser pour tous vos envoi SMS en ligne.</p>
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
                <h3 className="text-xl font-semibold mb-4">Avantages de notre API SMS et pack SMS professionnel</h3>
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Taux de lecture supérieur à 95% en moins de 5 minutes pour vos SMS transactionnel et sms de confirmation</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Communication instantanée avec SMS automatique et rappel SMS</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Plus efficace que l'email pour les communications urgentes et sms relation client</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Idéal pour les alertes, campagne marketing SMS et sms fidélisation</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Rapport détaillé des livraisons avec un coût SMS transparent</span>
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 sm:p-8 rounded-xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Prêt à commencer vos campagnes SMS avec un prix campagne SMS imbattable ?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Créez un compte dès maintenant et envoyez vos premiers SMS commercial et sms masse en quelques minutes avec notre forfait SMS illimité et plateforme sms pro.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="https://client.campagnesms.com/inscription" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg">
                      Créer un compte
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/tarifs">
                      Voir notre tarif SMS pro
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

export default SmsSending;
