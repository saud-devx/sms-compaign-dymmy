
import React from 'react';
import { motion } from 'framer-motion';

interface BlogPostContentProps {
  content: string;
  children?: React.ReactNode;
}

const BlogPostContent = ({ content, children }: BlogPostContentProps) => {
  // Safety check to ensure content is a string
  const safeContent = typeof content === 'string' ? content : '';
  
  return (
    <motion.div 
      className="mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {safeContent && <div dangerouslySetInnerHTML={{ __html: safeContent }} />}
        {!safeContent && <p>Le contenu de cet article n'est pas disponible.</p>}
        {children}
      </div>
    </motion.div>
  );
};

export default BlogPostContent;
