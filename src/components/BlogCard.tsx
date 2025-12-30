
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { CardImage } from '@/components/ui/card';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  featured?: boolean;
  readTime?: string;
  isCaseStudy?: boolean;
  className?: string;
}

const BlogCard = ({ 
  slug, 
  title, 
  excerpt, 
  date, 
  author, 
  image, 
  category,
  readTime = "5 min", 
  featured = false,
  isCaseStudy = false,
  className
}: BlogCardProps) => {
  // Determine the correct link path based on whether it's a case study or blog post
  const linkPath = isCaseStudy ? `/case-studies/${slug}` : `/actualites/${slug}`;
  
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group overflow-hidden rounded-xl",
        "bg-white dark:bg-gray-800 shadow-md",
        "border border-gray-100 dark:border-gray-700",
        "hover:shadow-xl transition-all duration-300 hover:border-primary/30",
        "after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0",
        "after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded-r-full",
        "group-hover:after:w-full after:transition-all after:duration-700 after:ease-out",
        "relative",
        featured ? "md:col-span-2" : "",
        className
      )}
    >
      <div className="relative overflow-hidden">
        <Link to={linkPath}>
          <CardImage 
            src={image} 
            alt={title}
            containerClassName="h-52"
          />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="bg-primary/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              {category}
            </span>
            {isCaseStudy && (
              <span className="bg-secondary/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Étude de cas
              </span>
            )}
            {featured && (
              <span className="bg-amber-500/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                À la une
              </span>
            )}
          </div>
        </Link>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="group-hover:text-primary transition-colors" />
            <span>{date}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div className="flex items-center gap-1.5">
            <User size={14} className="group-hover:text-primary transition-colors" />
            <span>{author}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="group-hover:text-primary transition-colors" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <Link to={linkPath}>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 text-gray-900 dark:text-gray-100">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <Link 
          to={linkPath}
          className="inline-flex items-center text-primary font-medium group/link"
        >
          <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover/link:after:w-full">
            Lire la suite
          </span> 
          <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
