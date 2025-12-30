
import React from 'react';
import { motion } from 'framer-motion';
import SEOMetadata from '../components/SEOMetadata';
import SchemaData from '../components/SchemaData';

const Terms = () => {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Conditions d'utilisation | Campagne SMS",
    "description": "Conditions générales d'utilisation de notre service de campagnes SMS marketing.",
    "url": "https://campagnesms.com/terms",
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "about": {
        "@type": "Thing",
        "name": "Conditions d'utilisation de Campagne SMS"
      }
    },
    "specialty": "Envoi de SMS professionnels"
  };

  return (
    <>
      <SEOMetadata
        title="Conditions d'utilisation | Campagne SMS"
        description="Conditions générales d'utilisation de notre service de campagnes SMS marketing. Envoi de SMS professionnels pas cher pour vos communications clients."
        keywords="conditions d'utilisation, termes et conditions, conditions générales, SMS marketing, campagne sms, envoi de sms pas cher"
        canonicalUrl="https://campagnesms.com/terms"
      />
      
      <SchemaData type="WebPage" data={termsSchema} />
      
      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">Conditions d'utilisation</h1>
            
            <div className="prose max-w-none prose-headings:text-gray-900 prose-headings:dark:text-white prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-strong:text-gray-900 prose-strong:dark:text-white prose-li:text-gray-700 prose-li:dark:text-gray-300">
              <p>Dernière mise à jour: 14 mai 2025</p>
              
              <h2>1. Acceptation des conditions</h2>
              <p>En utilisant le service de Campagne SMS, vous acceptez d'être lié par les présentes Conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.</p>
              
              <h2>2. Description du service</h2>
              <p>Campagne SMS fournit une plateforme permettant aux utilisateurs d'envoyer des messages SMS à leurs clients et prospects. Le service est fourni "tel quel", sans garantie d'aucune sorte.</p>
              
              <h2>3. Inscription et sécurité</h2>
              <p>Pour utiliser Campagne SMS, vous devez créer un compte et fournir des informations précises et complètes. Vous êtes responsable du maintien de la confidentialité de votre mot de passe et de toutes les activités qui se produisent sous votre compte.</p>
              
              <h2>4. Utilisation acceptable</h2>
              <p>Vous acceptez de n'utiliser le service que pour des fins légales et conformément à toutes les lois et réglementations applicables, y compris les lois sur la protection des données et la vie privée. Vous acceptez de ne pas utiliser le service pour:</p>
              <ul>
                <li>Envoyer des messages non sollicités (spam)</li>
                <li>Harceler, abuser ou menacer des individus</li>
                <li>Promouvoir des activités illégales</li>
                <li>Usurper l'identité d'une autre personne ou entité</li>
                <li>Manipuler les en-têtes ou identifiants pour dissimuler l'origine des messages</li>
              </ul>
              
              <h2>5. Protection des données et confidentialité</h2>
              <p>Notre traitement des données personnelles est régi par notre <a href="/privacy" className="text-primary hover:underline">Politique de confidentialité</a>. En utilisant notre service, vous consentez à la collecte, au traitement et au stockage de vos données comme décrit dans cette politique.</p>
              
              <h2>6. Tarifs et paiements</h2>
              <p>Les tarifs de nos services sont indiqués sur notre page <a href="/tarifs" className="text-primary hover:underline">Tarifs</a>. Nous nous réservons le droit de modifier nos tarifs à tout moment, avec un préavis raisonnable. Les paiements sont dus à l'avance et sont non remboursables.</p>
              
              <h2>7. Propriété intellectuelle</h2>
              <p>Tous les droits, titres et intérêts dans et sur le service, y compris tous les contenus, logiciels, graphiques, interfaces utilisateur et logos sont la propriété exclusive de Campagne SMS ou de ses concédants de licence.</p>
              
              <h2>8. Limitation de responsabilité</h2>
              <p>Dans la mesure maximale permise par la loi, Campagne SMS ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ou de toute perte de profits ou de revenus.</p>
              
              <h2>9. Résiliation</h2>
              <p>Nous pouvons suspendre ou résilier votre accès au service à tout moment, pour quelque raison que ce soit, y compris mais sans s'y limiter, une violation des présentes Conditions.</p>
              
              <h2>10. Modifications des conditions</h2>
              <p>Nous nous réservons le droit de modifier ces Conditions à tout moment. Les modifications entreront en vigueur dès leur publication sur notre site. Votre utilisation continue du service après la publication des modifications constitue votre acceptation de ces modifications.</p>
              
              <h2>11. Loi applicable et juridiction</h2>
              <p>Ces Conditions sont régies par les lois de la France. Tout litige découlant de ou lié à ces Conditions sera soumis à la juridiction exclusive des tribunaux de Paris, France.</p>
              
              <h2>12. Contact</h2>
              <p>Si vous avez des questions concernant ces Conditions, veuillez nous contacter à <a href="mailto:legal@campagnesms.com" className="text-primary hover:underline">legal@campagnesms.com</a>.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Terms;
