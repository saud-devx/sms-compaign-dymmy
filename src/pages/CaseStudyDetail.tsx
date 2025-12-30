
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import BlogPostHeader from '../components/blog/BlogPostHeader';
import BlogPostContent from '../components/blog/BlogPostContent';
import RelatedPosts from '../components/blog/RelatedPosts';

// Sample case studies data
const caseStudies = [
  {
    id: 1,
    title: "Comment EcoStore a augmenté ses ventes de 42% grâce aux SMS",
    category: "Commerce",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    excerpt: "Découvrez comment cette marketplace de produits écologiques a transformé sa communication client avec une stratégie SMS ciblée.",
    slug: "ecostore-augmentation-ventes-sms",
    author: "Admin",
    date: "30 Avr 2025",
    readTime: "8 min",
    content: `
      <h2>Un défi de taille pour EcoStore</h2>
      <p>EcoStore, une marketplace spécialisée dans les produits écologiques pour la maison, faisait face à un défi majeur : comment augmenter les taux de conversion et fidéliser les clients dans un marché de plus en plus concurrentiel ?</p>
      
      <p>L'entreprise disposait d'une base de 45 000 clients, mais constatait que plus de 60% des paniers étaient abandonnés et que le taux de réachat restait faible. Les campagnes par email généraient des résultats décevants avec un taux d'ouverture moyen de seulement 18%.</p>
      
      <h2>La solution SMS : une approche stratégique</h2>
      <p>En collaboration avec notre équipe, EcoStore a implémenté une stratégie SMS en trois volets :</p>
      
      <ol>
        <li><strong>Récupération de paniers abandonnés</strong> : Messages personnalisés envoyés 2 heures après l'abandon d'un panier avec un lien direct pour finaliser l'achat</li>
        <li><strong>Programme de fidélité par SMS</strong> : Offres exclusives pour les clients existants avec codes promotionnels limités dans le temps</li>
        <li><strong>Notifications de réapprovisionnement</strong> : Alertes automatiques lorsque des produits précédemment consultés ou épuisés sont de nouveau disponibles</li>
      </ol>
      
      <h2>Résultats spectaculaires</h2>
      <p>Après 6 mois d'implémentation, les résultats ont dépassé toutes les attentes :</p>
      
      <ul>
        <li>42% d'augmentation des ventes globales</li>
        <li>68% de taux de conversion sur les messages de récupération de paniers abandonnés</li>
        <li>96% de taux d'ouverture des SMS (contre 18% pour les emails)</li>
        <li>29% d'augmentation du taux de fidélisation client</li>
      </ul>
      
      <h2>Un ROI exceptionnel</h2>
      <p>Pour chaque euro investi dans la campagne SMS, EcoStore a généré 27€ de chiffre d'affaires, soit un ROI de 2600%.</p>
      
      <blockquote>
        "L'implémentation des campagnes SMS a transformé notre approche marketing. Les résultats sont immédiats et le ROI dépasse largement nos attentes. C'est devenu notre canal de communication privilégié avec nos clients." - Marie Dupont, Directrice Marketing d'EcoStore
      </blockquote>
      
      <h2>Les facteurs clés de succès</h2>
      <p>Plusieurs facteurs ont contribué à ces excellents résultats :</p>
      
      <ul>
        <li>La personnalisation poussée des messages</li>
        <li>Le timing précis des envois</li>
        <li>L'intégration fluide avec le système de e-commerce</li>
        <li>L'analyse continue des performances et l'optimisation des campagnes</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>L'expérience d'EcoStore démontre que le SMS reste un canal de communication extrêmement efficace pour le e-commerce, avec des taux de conversion et un ROI supérieurs à la plupart des autres canaux marketing. La clé réside dans une stratégie bien pensée, une segmentation précise et des messages pertinents.</p>
    `
  },
  {
    id: 2,
    title: "HealthFirst : 27% d'amélioration du taux de présence aux rendez-vous",
    category: "Santé",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000",
    excerpt: "Une étude de cas sur l'utilisation des rappels SMS automatisés pour réduire les absences aux consultations médicales.",
    slug: "healthfirst-amelioration-presence-rendez-vous",
    author: "Admin",
    date: "25 Avr 2025",
    readTime: "7 min",
    content: `
      <h2>Le défi des rendez-vous manqués</h2>
      <p>HealthFirst, un réseau de cliniques médicales comptant 15 établissements, était confronté à un taux d'absentéisme aux rendez-vous de 22%, entraînant des pertes financières importantes et une inefficacité dans la gestion des plannings.</p>
      
      <p>Les rappels téléphoniques manuels étaient coûteux en temps pour le personnel et peu efficaces, avec seulement 40% des patients joints. Les emails de rappel affichaient un taux d'ouverture de 31% et n'amélioraient que marginalement la situation.</p>
      
      <h2>Implémentation du système de rappel SMS</h2>
      <p>HealthFirst a mis en place un système de rappel par SMS automatisé avec une approche structurée :</p>
      
      <ol>
        <li>Rappel initial 72 heures avant le rendez-vous</li>
        <li>Second rappel 24 heures avant le rendez-vous avec possibilité de confirmation directe par réponse "OUI"</li>
        <li>Option de déplacer ou annuler le rendez-vous par SMS avec redirection vers un système de reprogrammation en ligne</li>
      </ol>
      
      <h2>Résultats transformateurs</h2>
      <p>Après trois mois d'utilisation, les résultats ont été remarquables :</p>
      
      <ul>
        <li>27% de réduction du taux d'absentéisme (de 22% à 16%)</li>
        <li>98% de taux de livraison des SMS</li>
        <li>82% de taux de lecture des messages</li>
        <li>68% de taux de réponse au système de confirmation</li>
        <li>31% d'économie sur les coûts administratifs liés à la gestion des rendez-vous</li>
      </ul>
      
      <blockquote>
        "Le système de rappel par SMS a révolutionné notre gestion des rendez-vous. Non seulement nous avons réduit les absences, mais nous avons aussi libéré un temps précieux pour notre personnel administratif, qui peut désormais se consacrer à des tâches à plus forte valeur ajoutée." - Dr. Philippe Laurent, Directeur Médical chez HealthFirst
      </blockquote>
      
      <h2>Impact financier</h2>
      <p>La réduction du taux d'absentéisme a généré une augmentation de revenus estimée à 430 000 € sur une année, pour un investissement dans la solution SMS de seulement 18 000 €.</p>
      
      <h2>Les clés du succès</h2>
      <p>Plusieurs facteurs ont contribué à l'efficacité de cette solution :</p>
      
      <ul>
        <li>La simplicité d'utilisation pour les patients</li>
        <li>Le timing stratégique des rappels</li>
        <li>L'intégration parfaite avec le système de gestion des rendez-vous existant</li>
        <li>La personnalisation des messages par spécialité médicale</li>
        <li>L'analyse continue des performances pour optimiser les heures d'envoi</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>L'expérience de HealthFirst démontre que les rappels par SMS constituent une solution particulièrement efficace pour réduire l'absentéisme dans le secteur médical. Au-delà de l'aspect financier, cette solution améliore l'expérience patient et l'efficacité opérationnelle des établissements de santé.</p>
    `
  },
  {
    id: 3,
    title: "La transformation digitale de TechCorp via les alertes SMS",
    category: "Technologie",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000",
    excerpt: "Comment cette entreprise SaaS utilise les notifications SMS pour améliorer l'engagement utilisateur et réduire le churn.",
    slug: "techcorp-transformation-digitale-alertes-sms",
    author: "Admin",
    date: "20 Avr 2025",
    readTime: "9 min",
    content: `
      <h2>Le défi de l'engagement et de la rétention</h2>
      <p>TechCorp, éditeur d'une solution SaaS de gestion de projet utilisée par plus de 8000 entreprises, faisait face à deux défis majeurs : un taux d'adoption initial insuffisant après inscription (seulement 52% des utilisateurs revenaient après la première connexion) et un taux de churn mensuel préoccupant de 5,8%.</p>
      
      <p>Les notifications in-app et les emails de réengagement ne parvenaient pas à inverser cette tendance, avec des taux d'ouverture des emails en baisse constante.</p>
      
      <h2>Stratégie SMS multi-niveaux</h2>
      <p>TechCorp a implémenté une stratégie de communication par SMS ciblée sur trois axes :</p>
      
      <ol>
        <li><strong>Onboarding amélioré</strong> : Messages personnalisés pendant les 14 premiers jours pour guider les nouveaux utilisateurs avec des conseils pratiques et des fonctionnalités à découvrir</li>
        <li><strong>Alertes critiques</strong> : Notifications par SMS pour les événements nécessitant une action rapide (échéances de projets, mentions, tâches en retard)</li>
        <li><strong>Réengagement</strong> : Messages ciblés pour les utilisateurs inactifs avec des fonctionnalités personnalisées basées sur leur comportement passé</li>
      </ol>
      
      <p>Chaque type de message incluait un lien profond redirigeant l'utilisateur directement vers la section pertinente de l'application.</p>
      
      <h2>Résultats significatifs</h2>
      <p>Après six mois d'implémentation, TechCorp a constaté des améliorations spectaculaires :</p>
      
      <ul>
        <li>78% des nouveaux utilisateurs revenaient après la première connexion (vs 52% auparavant)</li>
        <li>Réduction du taux de churn de 5,8% à 3,2% mensuel</li>
        <li>Augmentation de 34% du temps passé sur l'application</li>
        <li>Amélioration de 41% des taux de complétion des projets</li>
        <li>94% de taux de lecture des SMS (vs 23% pour les emails)</li>
      </ul>
      
      <h2>Impact sur le LTV et le ROI</h2>
      <p>La valeur vie client (LTV) a augmenté de 67%, passant de 2300€ à 3850€ en moyenne. Pour chaque euro investi dans la solution SMS, TechCorp a généré un retour de 18€, soit un ROI de 1700%.</p>
      
      <blockquote>
        "L'intégration des alertes SMS dans notre stratégie de communication a transformé notre capacité à engager les utilisateurs aux moments critiques. C'est désormais notre canal le plus performant pour les communications urgentes et le réengagement." - Thomas Bernard, Responsable Produit chez TechCorp
      </blockquote>
      
      <h2>Facteurs déterminants</h2>
      <p>Le succès de cette stratégie repose sur plusieurs éléments clés :</p>
      
      <ul>
        <li>Segmentation avancée des utilisateurs basée sur leur comportement</li>
        <li>Personnalisation poussée des messages</li>
        <li>Timing précis des envois basé sur l'analyse des données d'utilisation</li>
        <li>Liens profonds permettant une action immédiate</li>
        <li>A/B testing continu pour optimiser les messages</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>L'expérience de TechCorp démontre que, même dans un secteur B2B technologique, le SMS reste un canal de communication extrêmement efficace pour l'engagement utilisateur. La clé du succès réside dans la pertinence du message, le timing approprié et la facilité d'action pour l'utilisateur.</p>
    `
  }
];

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the case study that matches the slug
  const caseStudy = caseStudies.find(study => study.slug === slug);
  
  useEffect(() => {
    // If case study doesn't exist, redirect to the case studies index
    if (!caseStudy) {
      navigate('/case-studies', { replace: true });
    }
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [caseStudy, navigate]);
  
  if (!caseStudy) {
    return null; // Will redirect via the useEffect
  }
  
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{caseStudy.title} | Campagne SMS</title>
        <meta name="description" content={caseStudy.excerpt} />
      </Helmet>
      
      <article className="pb-16">
        {/* Header */}
        <BlogPostHeader
          title={caseStudy.title}
          date={caseStudy.date}
          author={caseStudy.author}
          category={caseStudy.category}
          readTime={caseStudy.readTime}
          image={caseStudy.image}
        />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Content */}
              <BlogPostContent content={caseStudy.content} />
            </div>
            
            <div className="lg:col-span-1">
              {/* Sidebar with related case studies */}
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold mb-4">À propos de cette étude</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Publié le {caseStudy.date}</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <User className="h-4 w-4 mr-2" />
                        <span>Par {caseStudy.author}</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{caseStudy.readTime} de lecture</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Tag className="h-4 w-4 mr-2" />
                        <span>
                          <Badge variant="outline">{caseStudy.category}</Badge>
                        </span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
                
                {/* Call to action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="bg-gradient-to-r from-primary/90 to-secondary/90 text-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Envie d'obtenir les mêmes résultats ?</h3>
                    <p className="mb-4 text-white/90 text-sm">
                      Discutez avec nos experts pour voir comment nos solutions SMS peuvent transformer votre business.
                    </p>
                    <Link 
                      to="/contact"
                      className="inline-block w-full py-2 px-4 bg-white text-primary font-medium text-center rounded-lg hover:bg-opacity-90 transition-all"
                    >
                      Nous contacter
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Related case studies */}
          <div className="mt-16">
            <RelatedPosts 
              currentPostId={caseStudy.id} 
              currentCategory={caseStudy.category}
              posts={caseStudies}
              isCaseStudy={true}
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default CaseStudyDetail;
