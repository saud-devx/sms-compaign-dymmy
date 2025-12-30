
import { ShoppingCart, UserPlus, Users, CreditCard } from 'lucide-react';
import { ActionType, PlanType } from './types';

// French names data
export const frenchNames = [
  'Thomas', 'Nicolas', 'Julien', 'Antoine', 'Mathieu',
  'Sophie', 'Camille', 'Manon', 'Léa', 'Chloé',
  'Lucas', 'Hugo', 'Louis', 'Émilie', 'Charlotte',
  'Pierre', 'Jean', 'Marie', 'Céline', 'Laurent',
  'Élise', 'Marc', 'François', 'Claire', 'Aurélie'
];

// French cities
export const frenchCities = [
  'Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille',
  'Toulouse', 'Nice', 'Strasbourg', 'Nantes', 'Montpellier',
  'Rennes', 'Grenoble', 'Toulon', 'Angers', 'Dijon',
  'Le Havre', 'Reims', 'Aix-en-Provence', 'Brest', 'Tours'
];

// SMS Plans
export const plans: PlanType[] = [
  { name: 'Starter', price: '0.045€/SMS' },
  { name: 'Pro', price: '0.035€/SMS' },
  { name: 'Enterprise', price: 'Sur mesure' }
];

// Action types with consistent getMessage function signatures
export const actions: ActionType[] = [
  { 
    type: 'purchase', 
    verb: 'a souscrit au forfait', 
    icon: CreditCard,
    getMessage: (name: string, city: string, plan: PlanType | null = null) => 
      `${name} de ${city} a souscrit au forfait ${plan?.name || 'Pro'}`,
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    textColor: 'text-purple-600 dark:text-purple-400',
    pulseColor: 'from-purple-400/20 to-purple-600/20 dark:from-purple-400/30 dark:to-purple-600/30'
  },
  { 
    type: 'signup', 
    verb: 's\'est inscrit(e)', 
    icon: UserPlus,
    getMessage: (name: string, city: string, plan: PlanType | null = null) => 
      `${name} de ${city} vient de créer un compte`,
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    textColor: 'text-blue-600 dark:text-blue-400',
    pulseColor: 'from-blue-400/20 to-blue-600/20 dark:from-blue-400/30 dark:to-blue-600/30'
  },
  { 
    type: 'viewing', 
    verb: 'personnes consultent actuellement cette page', 
    icon: Users,
    getMessage: (name: string, city: string, plan: PlanType | null = null) => {
      const viewerCount = Math.floor(Math.random() * 10) + 5; // 5-14 viewers for more impact
      return `${viewerCount} personnes consultent actuellement cette page`
    },
    bgColor: 'bg-amber-100 dark:bg-amber-900/30',
    textColor: 'text-amber-600 dark:text-amber-400',
    pulseColor: 'from-amber-400/20 to-amber-600/20 dark:from-amber-400/30 dark:to-amber-600/30'
  }
];
