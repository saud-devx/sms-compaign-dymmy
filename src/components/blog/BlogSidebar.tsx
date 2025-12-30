
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Tag as TagIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BlogSidebarProps {
  categories: string[];
  popularPosts: {
    id: number;
    slug: string;
    title: string;
    image?: string;
    date?: string;
  }[];
  tags: string[];
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ categories, popularPosts, tags }) => {
  return (
    <div className="space-y-8">
      {/* Search Box */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
        <h3 className="text-lg font-bold mb-4">Recherche</h3>
        <div className="flex gap-2">
          <Input 
            type="text" 
            placeholder="Rechercher..." 
            className="border-gray-300 dark:border-gray-700" 
          />
          <Button size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Categories */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
        <h3 className="text-lg font-bold mb-4">Catégories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <Link 
                to={`/actualites/categorie/${category.toLowerCase()}`}
                className="flex items-center justify-between group"
              >
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
                  {category}
                </span>
                <Badge variant="outline" className="text-xs">
                  {Math.floor(Math.random() * 20) + 1}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Popular Posts */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
        <h3 className="text-lg font-bold mb-4">Articles Populaires</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/actualites/${post.slug}`}
              className="flex gap-3 group"
            >
              {post.image && (
                <div className="w-20 h-16 flex-shrink-0 overflow-hidden rounded">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              )}
              <div>
                <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                {post.date && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Tags Cloud */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
        <h3 className="text-lg font-bold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Link key={index} to={`/actualites/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                <TagIcon className="h-3 w-3 mr-1" /> {tag}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
