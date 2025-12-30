// This file is now deprecated - blog posts are fetched from Strapi or Supabase
// via the hybrid API in src/api/hybrid.ts
// This data is kept as fallback for mock mode

import { fetchPosts } from '@/api/posts';

// Export the hybrid API function as the main export
export const getBlogPosts = fetchPosts;

// Original mock data (kept for fallback)
const blogPosts = [
  {
    id: 1,
    slug: 'campagnes-sms-marketing-efficaces',
    title: 'Comment Créer des Campagnes SMS Marketing Efficaces',
    excerpt: 'Découvrez les meilleures pratiques pour créer des campagnes SMS marketing qui génèrent des résultats concrets.',
    content: `<p class="mb-4">Les campagnes SMS marketing restent l'un des canaux de communication les plus efficaces avec un taux d'ouverture de près de 98%. Dans cet article, nous allons explorer comment créer des campagnes SMS marketing efficaces qui génèrent des résultats concrets pour votre entreprise.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">1. Segmentez votre audience</h2>
<p class="mb-4">La segmentation est la clé d'une campagne SMS réussie. En divisant votre liste de contacts en groupes spécifiques basés sur des critères démographiques, comportementaux ou géographiques, vous pouvez personnaliser vos messages pour répondre aux besoins spécifiques de chaque segment.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">2. Créez un contenu concis et percutant</h2>
<p class="mb-4">Les SMS sont limités à 160 caractères, il est donc essentiel d'être concis. Allez droit au but et incluez un appel à l'action clair. Évitez le jargon et utilisez un langage simple que vos clients peuvent comprendre facilement.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">3. Choisissez le bon moment</h2>
<p class="mb-4">Le timing est crucial pour le succès de votre campagne SMS. Évitez d'envoyer des messages trop tôt le matin ou tard le soir. Les études montrent que les mardi et jeudi entre 10h et 15h sont généralement les moments les plus efficaces pour envoyer des SMS marketing.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">4. Personnalisez vos messages</h2>
<p class="mb-4">La personnalisation peut augmenter significativement votre taux de conversion. Utilisez le prénom du client et faites référence à ses achats précédents ou à ses préférences pour créer une expérience plus personnalisée.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">5. Incluez une offre de valeur</h2>
<p class="mb-4">Les clients sont plus susceptibles d'agir s'ils perçoivent une valeur claire dans votre message. Offrez des promotions exclusives, des remises, ou des informations utiles qui ne sont pas disponibles par d'autres canaux.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">6. Respectez les réglementations</h2>
<p class="mb-4">Assurez-vous de respecter les réglementations en matière de messagerie marketing, comme le RGPD en Europe. Obtenez le consentement explicite des clients avant de leur envoyer des SMS marketing et incluez toujours une option de désabonnement.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">7. Analysez et optimisez</h2>
<p class="mb-4">Suivez les performances de vos campagnes SMS et utilisez ces données pour optimiser vos futures campagnes. Analysez les taux d'ouverture, les taux de clics et les conversions pour comprendre ce qui fonctionne et ce qui peut être amélioré.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
<p class="mb-4">Les campagnes SMS marketing peuvent être extrêmement efficaces lorsqu'elles sont bien exécutées. En suivant ces bonnes pratiques, vous pouvez créer des campagnes qui génèrent des résultats concrets pour votre entreprise tout en offrant une valeur réelle à vos clients.</p>`,
    date: '12 Mai 2023',
    author: 'Admin',
    category: 'Marketing',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1000'
  },
  {
    id: 2,
    slug: 'gdpr-conformite-campagnes-sms',
    title: 'GDPR et Conformité : Ce que Vous Devez Savoir',
    excerpt: 'La conformité au GDPR est essentielle pour toute campagne SMS. Découvrez comment respecter les réglementations.',
    content: `<p class="mb-4">Le Règlement Général sur la Protection des Données (RGPD ou GDPR en anglais) a considérablement modifié la façon dont les entreprises doivent gérer les données personnelles, y compris dans le contexte des campagnes SMS. Cet article vous guide sur les aspects essentiels du RGPD pour vos campagnes SMS marketing.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">1. Obtenez un consentement explicite</h2>
<p class="mb-4">Selon le RGPD, vous devez obtenir un consentement explicite avant d'envoyer des messages marketing à vos contacts. Un consentement tacite ou présumé n'est pas suffisant. Assurez-vous que vos formulaires d'inscription incluent des cases à cocher non pré-cochées pour le consentement marketing.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">2. Documentez le consentement</h2>
<p class="mb-4">Conservez des enregistrements détaillés du consentement, y compris quand et comment il a été obtenu, et ce à quoi la personne a consenti. Cette documentation est essentielle en cas d'audit ou de plainte.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">3. Offrez une option de désabonnement facile</h2>
<p class="mb-4">Chaque SMS marketing doit inclure une méthode simple pour se désabonner, comme répondre avec "STOP". Traitez rapidement les demandes de désabonnement et assurez-vous que ces contacts ne reçoivent plus de communications.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">4. Sécurisez les données personnelles</h2>
<p class="mb-4">Mettez en place des mesures de sécurité appropriées pour protéger les données personnelles contre les accès non autorisés, la divulgation, la modification ou la destruction.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">5. Minimisez la collecte de données</h2>
<p class="mb-4">Ne collectez que les données nécessaires à votre objectif marketing. Le principe de minimisation des données est fondamental dans le RGPD : moins vous collectez de données, moins vous êtes exposé à des risques.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">6. Respectez les droits des individus</h2>
<p class="mb-4">Les individus ont le droit d'accéder à leurs données, de les rectifier, de les effacer, et de s'opposer au traitement. Mettez en place des procédures pour répondre à ces demandes dans les délais impartis par le RGPD.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">7. Préparez-vous aux violations de données</h2>
<p class="mb-4">Élaborez un plan de réponse en cas de violation de données pour pouvoir agir rapidement et notifier les autorités compétentes dans les 72 heures, comme l'exige le RGPD.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
<p class="mb-4">La conformité au RGPD n'est pas seulement une obligation légale, c'est aussi une opportunité de renforcer la confiance avec vos clients. En respectant ces principes, vous pouvez mener des campagnes SMS efficaces tout en protégeant les droits et la vie privée de vos contacts.</p>`,
    date: '3 Juin 2023',
    author: 'Admin',
    category: 'GDPR',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=1000'
  },
  {
    id: 3,
    slug: 'analyse-performance-campagne-sms',
    title: 'Comment Analyser la Performance de Votre Campagne SMS',
    excerpt: "L'analyse des données est cruciale pour optimiser vos campagnes SMS. Apprenez à interpréter les métriques clés.",
    content: `<p class="mb-4">L'analyse des performances est un élément crucial pour optimiser vos campagnes SMS marketing. Sans une compréhension claire de ce qui fonctionne et de ce qui ne fonctionne pas, vous risquez de gaspiller des ressources précieuses. Voici comment analyser efficacement la performance de vos campagnes SMS.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">1. Taux de délivrabilité</h2>
<p class="mb-4">Le taux de délivrabilité mesure le pourcentage de messages qui ont été effectivement livrés aux destinataires. Un faible taux de délivrabilité peut indiquer des problèmes avec votre liste de contacts, comme des numéros invalides ou des erreurs de formatage.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">2. Taux d'ouverture</h2>
<p class="mb-4">Bien que les SMS n'aient pas de "taux d'ouverture" traditionnel comme les emails, certaines plateformes peuvent fournir des estimations basées sur les accusés de réception ou les interactions. Cette métrique peut vous donner une idée de l'engagement initial avec votre message.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">3. Taux de clic (CTR)</h2>
<p class="mb-4">Si votre SMS contient un lien, le taux de clic mesure le pourcentage de destinataires qui ont cliqué sur ce lien. Cette métrique est un excellent indicateur de l'efficacité de votre appel à l'action.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">4. Taux de conversion</h2>
<p class="mb-4">Le taux de conversion mesure le pourcentage de destinataires qui ont effectué l'action souhaitée après avoir reçu votre SMS, comme effectuer un achat ou remplir un formulaire. C'est l'une des métriques les plus importantes pour évaluer le ROI de votre campagne.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">5. Taux de désabonnement</h2>
<p class="mb-4">Le taux de désabonnement mesure le pourcentage de destinataires qui se désabonnent après avoir reçu votre SMS. Un taux élevé peut indiquer que votre contenu n'est pas pertinent ou que vous envoyez des messages trop fréquemment.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">6. Retour sur investissement (ROI)</h2>
<p class="mb-4">Le ROI mesure la rentabilité de votre campagne SMS en comparant les revenus générés aux coûts engagés. Pour calculer le ROI, soustrayez le coût de votre campagne des revenus générés, puis divisez par le coût de la campagne.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">7. Tests A/B</h2>
<p class="mb-4">Les tests A/B vous permettent de comparer deux versions d'un SMS pour déterminer laquelle performe mieux. Testez différents éléments comme l'heure d'envoi, le contenu du message ou l'appel à l'action.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
<p class="mb-4">L'analyse des performances de vos campagnes SMS est essentielle pour optimiser votre stratégie marketing. En comprenant ces métriques clés et en utilisant ces données pour informer vos décisions, vous pouvez améliorer continuellement l'efficacité de vos campagnes et maximiser votre ROI.</p>`,
    date: '21 Juillet 2023',
    author: 'Admin',
    category: 'Analytics',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000'
  },
  {
    id: 4,
    slug: 'automatisation-campagnes-sms',
    title: 'L\'Automatisation des Campagnes SMS : Gain de Temps et Efficacité',
    excerpt: 'Découvrez comment l\'automatisation peut révolutionner vos campagnes SMS et augmenter leur efficacité tout en réduisant votre charge de travail.',
    content: `<p class="mb-4">L'automatisation des campagnes SMS est devenue un élément essentiel pour les entreprises qui souhaitent optimiser leur stratégie de marketing mobile. Dans cet article, nous explorons comment l'automatisation peut transformer vos campagnes SMS pour les rendre plus efficaces et moins chronophages.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">1. Les avantages de l'automatisation SMS</h2>
<p class="mb-4">L'automatisation des SMS permet d'envoyer des messages ciblés et personnalisés au bon moment, sans intervention manuelle. Elle améliore l'efficacité opérationnelle, réduit les erreurs humaines, et permet de communiquer avec votre audience à grande échelle.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">2. Messages déclenchés par des comportements</h2>
<p class="mb-4">Les messages déclenchés sont envoyés automatiquement en réponse à des actions spécifiques des clients. Par exemple, un message de confirmation après un achat, un rappel lorsqu'un panier est abandonné, ou un message de remerciement après un premier achat.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">3. Séquences SMS programmées</h2>
<p class="mb-4">Les séquences SMS sont des séries de messages envoyés à intervalles prédéfinis. Elles sont particulièrement efficaces pour l'onboarding de nouveaux clients, les programmes de fidélité, ou les campagnes promotionnelles à long terme.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">4. Segmentation automatisée</h2>
<p class="mb-4">La segmentation automatisée divise votre audience en groupes pertinents basés sur des données comportementales ou démographiques. Cette approche permet d'envoyer des messages plus pertinents et personnalisés à chaque segment.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">5. Personnalisation dynamique</h2>
<p class="mb-4">La personnalisation dynamique permet d'adapter automatiquement le contenu de chaque SMS en fonction des données du destinataire. Cela va au-delà de l'insertion du prénom et peut inclure des recommandations de produits, des offres personnalisées, ou des informations spécifiques à la localisation.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">6. Intégration avec d'autres canaux</h2>
<p class="mb-4">L'automatisation SMS est encore plus puissante lorsqu'elle est intégrée à vos autres canaux marketing comme l'email, les réseaux sociaux, ou votre site web. Cette approche omnicanal crée une expérience client cohérente et renforce votre message.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">7. Analyse et optimisation automatisées</h2>
<p class="mb-4">Les plateformes d'automatisation SMS avancées peuvent analyser automatiquement les performances de vos campagnes et suggérer des optimisations. Certaines peuvent même ajuster automatiquement les paramètres de vos campagnes en fonction des résultats.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
<p class="mb-4">L'automatisation des campagnes SMS offre un potentiel énorme pour améliorer l'efficacité de votre marketing mobile tout en réduisant votre charge de travail. En mettant en place des stratégies d'automatisation intelligentes, vous pouvez offrir une expérience client plus personnalisée et générer de meilleurs résultats pour votre entreprise.</p>`,
    date: '14 Août 2023',
    author: 'Admin',
    category: 'Technologie',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000'
  },
  {
    id: 5,
    slug: 'optimiser-taux-conversion-sms',
    title: '10 Astuces pour Optimiser votre Taux de Conversion SMS',
    excerpt: 'Maximisez l\'efficacité de vos campagnes SMS avec ces 10 astuces éprouvées pour booster votre taux de conversion.',
    content: `<p class="mb-4">Le SMS marketing offre l'un des meilleurs taux d'engagement parmi tous les canaux de marketing. Cependant, pour maximiser votre retour sur investissement, il est essentiel d'optimiser votre taux de conversion. Voici 10 astuces éprouvées pour améliorer les performances de vos campagnes SMS.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">1. Créez un sentiment d\'urgence</h2>
<p class="mb-4">Utilisez des expressions comme "Offre limitée", "Dernière chance", ou "Aujourd'hui seulement" pour encourager une action immédiate. Le sentiment d'urgence est un puissant moteur de conversion.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">2. Personnalisez vos messages</h2>
<p class="mb-4">La personnalisation va au-delà de l'ajout du prénom du client. Utilisez les données comportementales et les préférences pour adapter votre message et votre offre à chaque segment de votre audience.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">3. Optimisez vos appels à l'action</h2>
<p class="mb-4">Votre appel à l'action (CTA) doit être clair, concis et convaincant. Testez différentes formulations pour trouver celle qui génère le meilleur taux de conversion.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">4. Simplifiez le parcours de conversion</h2>
<p class="mb-4">Minimisez le nombre d'étapes entre la réception du SMS et la conversion. Si vous incluez un lien, assurez-vous qu'il mène directement à la page pertinente et que cette page est optimisée pour mobile.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">5. Choisissez le bon moment</h2>
<p class="mb-4">Le timing est crucial pour le succès de vos campagnes SMS. Analysez les données de vos campagnes précédentes pour identifier les jours et les heures qui génèrent les meilleurs taux de conversion.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">6. Utilisez des codes promotionnels exclusifs</h2>
<p class="mb-4">Les codes promotionnels exclusifs aux destinataires de vos SMS créent un sentiment d'exclusivité et peuvent augmenter significativement votre taux de conversion.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">7. Intégrez des témoignages clients</h2>
<p class="mb-4">La preuve sociale est un puissant facteur de conversion. Incluez des témoignages courts ou des statistiques impressionnantes pour renforcer la crédibilité de votre offre.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">8. Testez différentes offres</h2>
<p class="mb-4">Expérimentez avec différents types d'offres (pourcentage de réduction, montant fixe, cadeau offert, livraison gratuite, etc.) pour déterminer ce qui résonne le mieux avec votre audience.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">9. Utilisez des liens trackables</h2>
<p class="mb-4">Les liens trackables vous permettent de mesurer précisément combien de clics et de conversions chaque campagne génère. Utilisez des services de raccourcissement d'URL qui offrent des fonctionnalités de tracking.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">10. Suivez et analysez vos résultats</h2>
<p class="mb-4">L'analyse continue est la clé de l'optimisation. Suivez vos KPIs, identifiez les tendances, et utilisez ces informations pour affiner constamment votre stratégie SMS.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
<p class="mb-4">L'optimisation du taux de conversion de vos campagnes SMS est un processus continu qui nécessite des tests, des analyses et des ajustements réguliers. En appliquant ces 10 astuces et en restant attentif aux performances de vos campagnes, vous pourrez maximiser le retour sur investissement de votre stratégie SMS marketing.</p>`,
    date: '5 Septembre 2023',
    author: 'Admin',
    category: 'Marketing',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?q=80&w=1000'
  },
  {
    id: 6,
    slug: 'tendances-sms-marketing-2024',
    title: 'Les Tendances SMS Marketing à Suivre en 2024',
    excerpt: 'Restez à la pointe du SMS marketing en découvrant les tendances émergentes qui façonneront le paysage en 2024.',
    content: `<p class="mb-4">Le SMS marketing continue d'évoluer rapidement avec l'émergence de nouvelles technologies et l'évolution des comportements des consommateurs. Pour rester compétitif, il est essentiel de se tenir informé des dernières tendances. Voici les principales tendances SMS marketing à surveiller en 2024.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">1. Messagerie RCS (Rich Communication Services)</h2>
<p class="mb-4">Le RCS est souvent décrit comme la prochaine génération du SMS. Il offre des fonctionnalités avancées comme les images haute résolution, les vidéos, les carrousels de produits, et les boutons d'action interactifs, tout en conservant la simplicité et l'accessibilité du SMS.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">2. Intelligence artificielle et apprentissage automatique</h2>
<p class="mb-4">L'IA et le machine learning transforment le SMS marketing en permettant une personnalisation plus poussée, une optimisation automatique des campagnes, et une prédiction plus précise du comportement des clients.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">3. Conversational Marketing</h2>
<p class="mb-4">Les consommateurs s'attendent de plus en plus à des interactions bidirectionnelles plutôt qu'à des communications à sens unique. Les SMS conversationnels permettent aux marques d'engager un dialogue avec leurs clients et de créer des expériences plus personnalisées.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">4. Intégration avec les chatbots</h2>
<p class="mb-4">L'intégration des SMS avec des chatbots intelligents permet de fournir des réponses instantanées aux questions des clients, de qualifier des leads, et même de faciliter des transactions, le tout sans intervention humaine.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">5. Marketing par géolocalisation</h2>
<p class="mb-4">La combinaison des SMS avec la géolocalisation permet d'envoyer des messages hautement contextuels basés sur l'emplacement physique des clients, comme des offres spéciales lorsqu'ils sont à proximité d'un magasin.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">6. Messages vidéo et multimédia</h2>
<p class="mb-4">Avec l'augmentation de la bande passante mobile et la popularité croissante du contenu vidéo, l'inclusion de vidéos courtes et d'autres contenus multimédias dans les campagnes SMS devient une tendance majeure.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">7. Personnalisation hyper-ciblée</h2>
<p class="mb-4">La personnalisation va au-delà du simple nom du client. Les marques utilisent désormais des données comportementales, contextuelles et prédictives pour créer des messages SMS extrêmement pertinents et individualisés.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">8. Vérification en deux étapes et authentification</h2>
<p class="mb-4">Avec l'augmentation des préoccupations en matière de sécurité, l'utilisation des SMS pour la vérification en deux étapes et l'authentification continue de croître, offrant aux entreprises une opportunité supplémentaire d'engagement.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">9. Intégration omnicanale</h2>
<p class="mb-4">Le SMS ne fonctionne plus en silo. L'intégration transparente du SMS avec d'autres canaux marketing crée une expérience client cohérente et maximise l'impact de vos campagnes.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">10. Respect accru de la vie privée</h2>
<p class="mb-4">Avec l'évolution des réglementations sur la protection des données et la sensibilisation croissante des consommateurs à la confidentialité, les stratégies SMS marketing qui respectent et protègent la vie privée des utilisateurs gagnent en importance.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
<p class="mb-4">Le paysage du SMS marketing continue d'évoluer rapidement. En restant informé de ces tendances et en adaptant votre stratégie en conséquence, vous pouvez vous assurer que vos campagnes SMS restent efficaces et compétitives en 2024 et au-delà.</p>`,
    date: '18 Octobre 2023',
    author: 'Admin',
    category: 'Technologie',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1000'
  }
];

export default blogPosts;
