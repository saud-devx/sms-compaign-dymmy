
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

interface BlogPostHeaderProps {
  title: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
}

const BlogPostHeader = ({
  title,
  date,
  author,
  category,
  readTime,
  image
}: BlogPostHeaderProps) => {
  return (
    <div className="relative mb-10">
      {/* Hero image with overlay */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl">
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/1200x600?text=Image+non+disponible";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/actualites"
              className="inline-flex items-center text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Retour aux actualités</span>
            </Link>
            
            <Badge className="mb-4 text-sm bg-primary hover:bg-primary/80">
              {category}
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-5 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{date}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/50"></div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{author}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/50"></div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{readTime} de lecture</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostHeader;
