import React from 'react';
import { motion } from 'framer-motion';
import SEOMetadata from '../components/SEOMetadata';
import SchemaData from '../components/SchemaData';

const Privacy = () => {
  return (
    <>
      <SEOMetadata
        title="Politique de confidentialité | Campagne SMS"
        description="Notre politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles."
        keywords="politique de confidentialité, protection des données, RGPD, données personnelles, SMS marketing"
        canonicalUrl="https://campagnesms.com/privacy"
      />
      
      <SchemaData
        type="WebPage"
        data={{
          'name': 'Politique de confidentialité | Campagne SMS',
          'description': 'Notre politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles.',
          'url': 'https://campagnesms.com/privacy'
        }}
      />
      
      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">Politique de confidentialité</h1>
            
            <div className="prose max-w-none prose-headings:text-gray-900 prose-headings:dark:text-white prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-strong:text-gray-900 prose-strong:dark:text-white prose-li:text-gray-700 prose-li:dark:text-gray-300">
              <p>Dernière mise à jour: 14 mai 2025</p>
              
              <h2>1. Introduction</h2>
              <p>Chez Campagne SMS, nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité vous informe sur la façon dont nous collectons, utilisons, partageons et protégeons vos données personnelles lorsque vous utilisez notre service.</p>
              
              <h2>2. Données que nous collectons</h2>
              <p>Nous pouvons collecter les types de données suivants:</p>
              <ul>
                <li><strong>Données d'identification:</strong> nom, adresse email, numéro de téléphone, adresse postale, etc.</li>
                <li><strong>Données de facturation:</strong> coordonnées bancaires, historique des paiements</li>
                <li><strong>Données d'utilisation:</strong> statistiques d'envoi, taux de clic, taux d'ouverture, etc.</li>
                <li><strong>Données techniques:</strong> adresse IP, type de navigateur, appareil utilisé, etc.</li>
              </ul>
              
              <h2>3. Comment nous utilisons vos données</h2>
              <p>Nous utilisons vos données personnelles pour:</p>
              <ul>
                <li>Fournir et gérer notre service</li>
                <li>Traiter vos paiements</li>
                <li>Vous envoyer des communications relatives au service</li>
                <li>Personnaliser et améliorer notre service</li>
                <li>Respecter nos obligations légales</li>
                <li>Détecter et prévenir les fraudes</li>
              </ul>
              
              <h2>4. Base légale du traitement</h2>
              <p>Nous traitons vos données personnelles sur les bases légales suivantes:</p>
              <ul>
                <li><strong>Exécution d'un contrat:</strong> pour vous fournir notre service</li>
                <li><strong>Consentement:</strong> lorsque vous acceptez explicitement le traitement de vos données</li>
                <li><strong>Intérêts légitimes:</strong> pour améliorer notre service et prévenir la fraude</li>
                <li><strong>Obligations légales:</strong> pour respecter la législation applicable</li>
              </ul>
              
              <h2>5. Conservation des données</h2>
              <p>Nous conservons vos données personnelles aussi longtemps que nécessaire pour les finalités pour lesquelles elles ont été collectées, y compris pour satisfaire aux exigences légales, comptables ou de reporting.</p>
              
              <h2>6. Partage des données</h2>
              <p>Nous pouvons partager vos données avec:</p>
              <ul>
                <li>Nos fournisseurs de services qui nous aident à fournir notre service</li>
                <li>Nos partenaires commerciaux, avec votre consentement</li>
                <li>Les autorités publiques lorsque la loi l'exige</li>
              </ul>
              
              <h2>7. Transferts internationaux</h2>
              <p>Vos données peuvent être transférées et traitées dans des pays autres que celui dans lequel vous résidez. Nous prenons des mesures appropriées pour assurer que vos données bénéficient d'un niveau de protection adéquat.</p>
              
              <h2>8. Vos droits</h2>
              <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants:</p>
              <ul>
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition au traitement</li>
                <li>Droit de retirer votre consentement</li>
              </ul>
              
              <h2>9. Sécurité des données</h2>
              <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre toute perte, accès non autorisé, divulgation, altération et destruction.</p>
              
              <h2>10. Cookies et technologies similaires</h2>
              <p>Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience sur notre site web, analyser l'utilisation du site et personnaliser le contenu.</p>
              
              <h2>11. Liens vers d'autres sites</h2>
              <p>Notre service peut contenir des liens vers d'autres sites web qui ne sont pas exploités par nous. Nous n'avons aucun contrôle sur le contenu et les pratiques de ces sites et ne pouvons accepter aucune responsabilité pour leurs politiques de confidentialité respectives.</p>
              
              <h2>12. Modifications de cette politique</h2>
              <p>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement significatif par email ou par une notification sur notre site web.</p>
              
              <h2>13. Contact</h2>
              <p>Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière de protection des données, veuillez nous contacter à <a href="mailto:privacy@campagnesms.com" className="text-primary hover:underline">privacy@campagnesms.com</a>.</p>
              
              <h2>14. Autorité de contrôle</h2>
              <p>Si vous estimez que notre traitement de vos données personnelles enfreint les lois sur la protection des données, vous pouvez déposer une plainte auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) en France ou de l'autorité de protection des données de votre pays de résidence.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
