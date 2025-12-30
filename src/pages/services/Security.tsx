
import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LiveChat from '../../components/LiveChat';
import { Button } from '@/components/ui/button';

const Security = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Sécurité maximale</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
              Nous accordons une priorité absolue à la sécurité de vos données et à la confidentialité de vos communications. Notre infrastructure est conçue selon les normes les plus strictes.
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
              <h2 className="text-2xl font-bold">Nos mesures de sécurité</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Chiffrement de bout en bout</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Toutes vos données sont chiffrées en transit et au repos.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Authentification à deux facteurs</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Ajoutez une couche de sécurité supplémentaire à votre compte.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Conformité RGPD</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Nous respectons strictement les règles de protection des données.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-0.5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Audits de sécurité réguliers</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Notre infrastructure est régulièrement auditée par des experts indépendants.</p>
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
              <h3 className="text-xl font-semibold mb-4">Notre engagement</h3>
              <div className="space-y-4">
                <p className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Protection des données personnelles de vos contacts</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Hébergement sur des serveurs sécurisés en Europe</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Pas de revente ou d'exploitation commerciale de vos données</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Suppression sécurisée des données à votre demande</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Équipe dédiée à la sécurité et à la protection des données</span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Votre sécurité est notre priorité</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Découvrez comment nous protégeons vos données et pourquoi des milliers d'entreprises nous font confiance.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://client.campagnesms.com/inscription" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg">
                    Créer un compte sécurisé
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Contactez-nous
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

export default Security;
