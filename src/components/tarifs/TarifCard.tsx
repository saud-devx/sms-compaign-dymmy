
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

export interface TarifPlan {
  title: string;
  price: string;
  priceUnit: string;
  priceDetail: string;
  features: string[];
  button: {
    label: string;
    link: string;
    style: 'primary' | 'secondary';
  };
  iconBg: string;
  iconColor: string;
  popular?: boolean;
}

interface TarifCardProps {
  plan: TarifPlan;
  index: number;
}

export const TarifCard = ({ plan, index }: TarifCardProps) => {
  return (
    <motion.div 
      className="h-full relative pt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {plan.popular && (
        <div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-1/2 z-10">
          <Badge
            variant="gradient"
            className="px-4 py-1.5 text-xs font-medium flex items-center gap-1.5 shadow-lg"
          >
            <Star className="w-3.5 h-3.5" /> Populaire
          </Badge>
        </div>
      )}
      
      <div className={`
        relative h-full neo-glass-card flex flex-col
        ${plan.popular ? "ring-2 ring-primary shadow-lg" : ""}
      `}>
        {/* Premium gradient top bar */}
        <div 
          className={`h-2.5 w-full ${plan.popular ? 'bg-gradient-to-r from-primary/90 via-primary to-secondary/90' : 'bg-gradient-to-r from-gray-300/80 to-gray-400/80 dark:from-gray-600/80 dark:to-gray-700/80'}`}
        />

        <div className="p-8 flex flex-col flex-grow">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {plan.title}
            </h3>
            
            <div className="flex justify-center items-baseline mt-4">
              <span className="text-4xl font-extrabold gradient-text">{plan.price}</span>
              <span className="text-xl font-medium text-gray-700 dark:text-gray-200 ml-1">{plan.priceUnit}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                {plan.priceDetail}
              </span>
            </div>
          </div>
          
          {/* Divider with gradient */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-6"></div>
          
          {/* Features with improved styling */}
          <ul className="space-y-5 mb-8 flex-grow">
            {plan.features.map((feature, fidx) => (
              <motion.li 
                key={fidx} 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * fidx + 0.3 }}
              >
                <div className={`
                  h-6 w-6 rounded-full flex items-center justify-center 
                  ${plan.iconBg} flex-shrink-0 mt-0.5 shadow-sm
                `}>
                  <Check className={`w-3.5 h-3.5 ${plan.iconColor}`} />
                </div>
                <span className="text-gray-800 dark:text-gray-200">{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          {/* CTA Button with enhanced styling - now in a mt-auto container */}
          <div className="mt-auto pt-4">
            <Link
              to={plan.button.link}
              className={`
                w-full inline-block text-center py-3.5 px-5 rounded-full font-medium transition-all duration-300
                ${plan.button.style === "primary" 
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:brightness-105"
                  : "bg-white/90 dark:bg-gray-800/90 border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-md"}
              `}
            >
              {plan.button.label}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
