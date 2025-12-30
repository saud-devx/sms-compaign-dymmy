
import React from 'react';
import { ArrowUpRight, FileText, FilePen, Users, BarChart2, Search, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedCard } from '@/components/enhanced-ui/EnhancedCard';
import { Link } from 'react-router-dom';
import StrapiStatus from '@/components/admin/StrapiStatus';

const StatCard = ({ title, value, icon, change, href }: { 
  title: string; 
  value: string; 
  icon: React.ReactNode; 
  change?: { value: string; positive: boolean };
  href: string;
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      {change && (
        <div className="flex items-center space-x-1 text-xs">
          <span className={change.positive ? "text-green-500" : "text-red-500"}>
            {change.value}
          </span>
          <span className="text-gray-500">from last month</span>
        </div>
      )}
      <Link 
        to={href}
        className="text-sm text-primary flex items-center mt-3 hover:underline"
      >
        View Details
        <ArrowUpRight className="ml-1 h-3 w-3" />
      </Link>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const recentPosts = [
    { id: "1", title: "Campagnes SMS Marketing Efficaces", date: "10 May 2025", views: 342 },
    { id: "2", title: "GDPR et Conformité des Campagnes SMS", date: "3 May 2025", views: 217 },
    { id: "3", title: "Analyse de Performance des Campagnes SMS", date: "28 Apr 2025", views: 189 }
  ];

  return (
    <div className="space-y-6">
      {/* Strapi CMS Status */}
      <StrapiStatus />
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Posts" 
          value="12" 
          icon={<FileText className="h-4 w-4 text-gray-500" />}
          change={{ value: "+2", positive: true }}
          href="/admin/posts"
        />
        <StatCard 
          title="Total Pages" 
          value="8" 
          icon={<FilePen className="h-4 w-4 text-gray-500" />}
          href="/admin/pages"
        />
        <StatCard 
          title="Site Visitors" 
          value="2,845" 
          icon={<Users className="h-4 w-4 text-gray-500" />}
          change={{ value: "+12%", positive: true }}
          href="/admin/analytics"
        />
        <StatCard 
          title="SEO Score" 
          value="86" 
          icon={<BarChart2 className="h-4 w-4 text-gray-500" />}
          change={{ value: "+4", positive: true }}
          href="/admin/seo"
        />
      </div>

      {/* Recent Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EnhancedCard variant="default" className="h-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Recent Blog Posts</h3>
              <Link 
                to="/admin/posts" 
                className="text-sm text-primary hover:underline flex items-center"
              >
                View All
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {recentPosts.map(post => (
                <div 
                  key={post.id}
                  className="py-3 flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">{post.title}</p>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>{post.views} views</span>
                    <Link 
                      to={`/admin/posts/edit/${post.id}`}
                      className="ml-4 text-primary hover:underline"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </EnhancedCard>

        <EnhancedCard variant="default" className="h-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Quick Actions</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link 
                to="/admin/posts/new"
                className="p-4 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md transition-colors group"
              >
                <FileText className="h-6 w-6 mb-2 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="font-medium">New Blog Post</h4>
                <p className="text-xs text-gray-500">Create a new article</p>
              </Link>
              <Link 
                to="/admin/pages/new"
                className="p-4 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md transition-colors group"
              >
                <FilePen className="h-6 w-6 mb-2 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="font-medium">New Page</h4>
                <p className="text-xs text-gray-500">Add a new web page</p>
              </Link>
              <Link 
                to="/admin/seo"
                className="p-4 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md transition-colors group"
              >
                <Search className="h-6 w-6 mb-2 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="font-medium">SEO Analysis</h4>
                <p className="text-xs text-gray-500">Optimize your content</p>
              </Link>
              <Link 
                to="/admin/settings"
                className="p-4 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md transition-colors group"
              >
                <Settings className="h-6 w-6 mb-2 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="font-medium">Site Settings</h4>
                <p className="text-xs text-gray-500">Manage configuration</p>
              </Link>
            </div>
          </div>
        </EnhancedCard>
      </div>
    </div>
  );
};

export default Dashboard;
