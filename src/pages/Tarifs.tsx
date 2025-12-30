
import LiveChat from '../components/LiveChat';
import { TarifCard, type TarifPlan } from '../components/tarifs/TarifCard';
import { AdvantagesSection } from '../components/tarifs/AdvantagesSection';
import { CTASection } from '../components/tarifs/CTASection';
import { TarifsHeader } from '../components/tarifs/TarifsHeader';
import { FAQ } from '../components/tarifs/FAQ';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { BadgeCheck, BadgePercent } from 'lucide-react';
import { EnhancedCard } from '../components/enhanced-ui/EnhancedCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import SEOMetadata from '../components/SEOMetadata';
import { PricingSchema } from '../components/tarifs/PricingSchema';
import { InternalLinks } from '../components/seo/InternalLinks';

const tarifs: TarifPlan[] = [
  {
    title: 'Starter',
    price: '0.055',
    priceUnit: '€',
    priceDetail: '/SMS',
    features: [
      "200 SMS",
      "Support email",
      "Aide à la création de campagne sms",
    ],
    button: {
      label: 'Commencer',
      link: 'https://client.campagnesms.com/inscription',
      style: 'secondary'
    },
    iconBg: 'bg-primary/10 dark:bg-primary/20',
    iconColor: 'text-primary',
  },
  {
    title: 'Pro',
    price: '0.047',
    priceUnit: '€',
    priceDetail: '/SMS',
    features: [
      "7 000 SMS",
      "Support email et téléphone",
      "API sms & Webhooks",
      "Rapports campagne sms avancés"
    ],
    button: {
      label: 'Choisir Pro',
      link: 'https://client.campagnesms.com/inscription',
      style: 'primary'
    },
    iconBg: 'bg-primary/10 dark:bg-primary/20',
    iconColor: 'text-primary',
    popular: true
  },
  {
    title: 'Enterprise',
    price: '0.043',
    priceUnit: '€',
    priceDetail: '/SMS',
    features: [
      "20 000 SMS ou plus",
      "Account manager dédié",
      "Intégration plateforme sms personnalisée",
      "Suivi campagnes sms marketing complet"
    ],
    button: {
      label: 'Choisir Enterprise',
      link: 'https://client.campagnesms.com/inscription',
      style: 'secondary'
    },
    iconBg: 'bg-secondary/10 dark:bg-secondary/20',
    iconColor: 'text-secondary',
  }
];

const Tarifs = () => {
  return (
    <>
      <SEOMetadata
        title="Prix SMS - Tarif Campagne SMS Marketing Pas Cher"
        description="Découvrez nos prix SMS compétitifs et tarif campagne SMS à partir de 0.029€. Prix d'un SMS, coût SMS et forfait SMS professionnel. SMS en masse pas cher sans engagement avec forfait SMS illimité."
        keywords="prix sms, tarif sms, prix campagne sms, prix d'un sms, prix d un sms, prix du sms, prix des sms, coût sms, tarif campagne sms, combien coute un sms, sms prix, prix sms en masse, tarif sms pro, forfait sms, forfait sms illimité, pack sms professionnel, sms en masse pas cher, campagne sms prix, prix d une campagne sms, sms plans, sms plan"
        canonicalUrl="https://www.campagnesms.com/tarifs"
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Enhanced background decoration */}
        <div className="fixed inset-0 overflow-hidden -z-10 opacity-30 dark:opacity-20">
          <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-purple-200/70 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] bg-blue-200/70 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>

          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmNWY1ZjUiPjwvcmVjdD4KPC9zdmc+')] opacity-[0.015] dark:opacity-[0.03]"></div>
        </div>

        <div className="relative">
          <TarifsHeader />

          {/* Pricing Section - with improved layout and animations */}
          <section className="py-20 px-4 max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-24"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex mb-6">
                <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium inline-block">
                  Prix SMS transparents
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                Tarif SMS <span className="gradient-text">Flexible</span> pour Votre Entreprise
              </h2>

              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                Choisissez le forfait SMS qui correspond à vos besoins. Prix d'un SMS compétitif et tarif campagne SMS sans engagement
                pour vos communications professionnelles avec nos SMS plans et pack SMS professionnel.
              </p>
            </motion.div>

            {/* Cards container with improved spacing and staggered animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-12 mx-auto max-w-6xl mb-24">
              {tarifs.map((plan, index) => (
                <TarifCard key={plan.title} plan={plan} index={index} />
              ))}
            </div>

            {/* Custom Pack Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="max-w-4xl mx-auto mb-8"
            >
              <EnhancedCard
                variant="glass"
                animation="hover"
                className="p-8 rounded-2xl text-center"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Pack SMS sur mesure avec forfait SMS illimité !
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Achetez la quantité précise de SMS dont vous avez besoin. Voici notre grille tarifaire avec prix du SMS selon le volume choisi pour vos campagnes SMS marketing.
                </p>
              </EnhancedCard>
            </motion.div>

            {/* Enhanced Pricing Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <EnhancedCard
                variant="glass"
                animation="hover"
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="overflow-x-auto rounded-2xl">
                  <Table className="w-full">
                    <TableHeader>
                      <TableRow className="border-0 bg-gradient-to-r from-primary to-primary/90">
                        <TableHead className="text-white font-bold text-center py-6 text-lg border-0">
                          Quantité SMS
                        </TableHead>
                        <TableHead className="text-white font-bold text-center py-6 text-lg border-0">
                          Prix unitaire HT
                        </TableHead>
                        <TableHead className="text-white font-bold text-center py-6 text-lg border-0">
                          Prix du pack HT
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-300 border-b border-gray-100 dark:border-gray-700">
                        <TableCell className="text-center py-5 font-semibold text-gray-900 dark:text-white text-base">
                          200 SMS
                        </TableCell>
                        <TableCell className="text-center py-5 text-gray-700 dark:text-gray-300 text-base">
                          0.055€ ht
                        </TableCell>
                        <TableCell className="text-center py-5 font-bold text-primary text-lg">
                          11.00€ ht
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 bg-primary/5 dark:bg-primary/10 border-b border-gray-100 dark:border-gray-700">
                        <TableCell className="text-center py-5 font-semibold text-gray-900 dark:text-white text-base">
                          700 SMS
                        </TableCell>
                        <TableCell className="text-center py-5 text-gray-700 dark:text-gray-300 text-base">
                          0.053€ ht
                        </TableCell>
                        <TableCell className="text-center py-5 font-bold text-primary text-lg">
                          37.10€ ht
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-300 border-b border-gray-100 dark:border-gray-700">
                        <TableCell className="text-center py-5 font-semibold text-gray-900 dark:text-white text-base">
                          3000 SMS
                        </TableCell>
                        <TableCell className="text-center py-5 text-gray-700 dark:text-gray-300 text-base">
                          0.050€ ht
                        </TableCell>
                        <TableCell className="text-center py-5 font-bold text-primary text-lg">
                          150.00€ ht
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 bg-primary/5 dark:bg-primary/10 border-b border-gray-100 dark:border-gray-700">
                        <TableCell className="text-center py-5 font-semibold text-gray-900 dark:text-white text-base">
                          7000 SMS
                        </TableCell>
                        <TableCell className="text-center py-5 text-gray-700 dark:text-gray-300 text-base">
                          0.047€ ht
                        </TableCell>
                        <TableCell className="text-center py-5 font-bold text-primary text-lg">
                          329.00€ ht
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-300 border-0">
                        <TableCell className="text-center py-5 font-semibold text-gray-900 dark:text-white text-base">
                          20000 SMS
                        </TableCell>
                        <TableCell className="text-center py-5 text-gray-700 dark:text-gray-300 text-base">
                          0.043€ ht
                        </TableCell>
                        <TableCell className="text-center py-5 font-bold text-primary text-lg">
                          860.00€ ht
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </EnhancedCard>
            </motion.div>

            {/* Additional information and CTA with enhanced EnhancedCard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <EnhancedCard
                variant="glass"
                animation="hover"
                className="p-8 rounded-2xl"
              >
                <div className="flex items-center justify-center gap-3 mb-5">
                  <BadgePercent className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-lg text-gray-900 dark:text-white">Réductions prix SMS volumes importants</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                  Des tarifs SMS personnalisés sont disponibles pour les entreprises avec des besoins importants
                  en campagnes SMS marketing et SMS en masse pas cher. Contactez notre équipe pour un prix d'une campagne SMS adapté à votre volume.
                </p>

                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 group font-medium shadow-sm hover:shadow-md transition-all duration-300"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <BadgeCheck className="w-5 h-5 group-hover:text-primary transition-colors" />
                    <span>Demander un tarif SMS personnalisé</span>
                  </Button>
                </div>
              </EnhancedCard>
            </motion.div>
          </section>

          <AdvantagesSection />

          <FAQ />

          {/* Internal Links Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Découvrez nos autres services SMS
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Explorez notre gamme complète de solutions SMS pour optimiser votre communication d'entreprise avec notre plateforme SMS et logiciel SMS marketing
                </p>
              </motion.div>

              <InternalLinks currentPage="tarifs" variant="grid" />
            </div>
          </section>

          <CTASection />

          <LiveChat />

          <PricingSchema plans={tarifs} />
        </div>
      </div>
    </>
  );
};

export default Tarifs;
