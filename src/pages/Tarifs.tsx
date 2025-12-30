
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
import { useEffect, useState } from 'react';

const Tarifs = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('https://sms-compaign-backend.onrender.com/api/tarifs')
      .then(res => res.json())
      .then(res => {
        setData(res);
      });
  }, []);

  if (!data) return null;

  const { page, plans, volumes, advantages, faqs } = data;

  return (
    <>
      <SEOMetadata
        title="Prix SMS - Tarif Campagne SMS Marketing Pas Cher"
        description="Découvrez nos prix SMS compétitifs..."
        keywords="prix sms, tarif sms..."
        canonicalUrl="https://www.campagnesms.com/tarifs"
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="relative">

          {/* HEADER */}
          <TarifsHeader
            badgeText={page?.header?.badgeText}
            title={page?.header?.title}
            highlightedWord={page?.header?.highlightedWord}
            subtitle={page?.header?.subtitle}
          />
         
          {/* PRICING CARDS */}
          <section className="py-20 px-4 max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-12 mx-auto max-w-6xl mb-24">
              {plans.map((plan: any, index: number) => (
                <TarifCard
                  key={plan._id}
                  plan={{
                    ...plan,
                    iconBg:
                      plan.color === 'secondary'
                        ? 'bg-secondary/10 dark:bg-secondary/20'
                        : 'bg-primary/10 dark:bg-primary/20',
                    iconColor:
                      plan.color === 'secondary'
                        ? 'text-secondary'
                        : 'text-primary'
                  }}
                  index={index}
                />
              ))}
            </div>

            {/* CUSTOM PACK */}
            <EnhancedCard className="p-8 rounded-2xl text-center mb-16">
              <h3 className="text-2xl font-bold mb-4">
                {page?.customPack?.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {page?.customPack?.description}
              </p>
            </EnhancedCard>

            {/* VOLUME PRICING TABLE */}
         <EnhancedCard
  variant="glass"
  animation="hover"
  className="rounded-2xl overflow-hidden shadow-xl mb-16"
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
        {volumes.map((row, index) => {
          // Determine background color for alternating rows and highlighted
          const isHighlighted = row.highlighted
          const isEven = index % 2 === 1

          const rowClass = isHighlighted
            ? 'hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 bg-primary/5 dark:bg-primary/10 border-b border-gray-100 dark:border-gray-700'
            : isEven
            ? 'hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-300 border-b border-gray-100 dark:border-gray-700'
            : 'hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-300 border-0'

          return (
            <TableRow key={row._id} className={rowClass}>
              <TableCell className="text-center py-5 font-semibold text-gray-900 dark:text-white text-base">
                {row.quantity} SMS
              </TableCell>
              <TableCell className="text-center py-5 text-gray-700 dark:text-gray-300 text-base">
                {row.unitPrice}€ ht
              </TableCell>
              <TableCell className="text-center py-5 font-bold text-primary text-lg">
                {row.totalPrice}€ ht
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </div>
</EnhancedCard>

          </section>

          {/* ADVANTAGES */}
          <AdvantagesSection data={advantages} />

          {/* FAQ */}
          <FAQ data={faqs} />

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
          <CTASection
            title={page?.cta?.title}
            description={page?.cta?.description}
            buttonLabel={page?.cta?.buttonLabel}
            buttonLink={page?.cta?.buttonLink}
          />

          <LiveChat />

          {/* SCHEMA */}
          <PricingSchema plans={plans} />
        </div>
      </div>
    </>
  );
};

export default Tarifs;
