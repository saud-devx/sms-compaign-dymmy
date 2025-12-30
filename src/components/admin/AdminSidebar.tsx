
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard,
  FileText,
  FilePen,
  Settings,
  ChevronLeft,
  ChevronRight,
  Users,
  Search,
  BarChart2
} from "lucide-react";
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      title: 'Dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: '/admin',
    },
    {
      title: 'Blog Posts',
      icon: <FileText className="h-5 w-5" />,
      href: '/admin/posts',
    },
    {
      title: 'Pages',
      icon: <FilePen className="h-5 w-5" />,
      href: '/admin/pages',
    },
    {
      title: 'SEO',
      icon: <Search className="h-5 w-5" />,
      href: '/admin/seo',
    },
    {
      title: 'Analytics',
      icon: <BarChart2 className="h-5 w-5" />,
      href: '/admin/analytics',
    },
    {
      title: 'Users',
      icon: <Users className="h-5 w-5" />,
      href: '/admin/users',
    },
    {
      title: 'Settings',
      icon: <Settings className="h-5 w-5" />,
      href: '/admin/settings',
    },
  ];

  return (
    <div
      className={cn(
        "h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo & Header */}
      <div className="p-4 flex items-center justify-between">
        {!collapsed && (
          <Link to="/" className="flex items-center">
            <h2 className="text-xl font-bold text-primary">Admin Panel</h2>
          </Link>
        )}
        <Button
          onClick={() => setCollapsed(!collapsed)}
          variant="ghost"
          size="icon"
          className="ml-auto"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href || 
                            (item.href !== '/admin' && location.pathname.startsWith(item.href));
            
            return (
              <li key={item.href}>
                {collapsed ? (
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          "flex justify-center items-center p-3 rounded-md transition-colors",
                          isActive 
                            ? "bg-primary/10 text-primary" 
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary"
                        )}
                      >
                        {item.icon}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{item.title}</TooltipContent>
                  </Tooltip>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-md transition-colors",
                      isActive 
                        ? "bg-primary/10 text-primary" 
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary"
                    )}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            A
          </div>
          {!collapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Admin</p>
              <Link to="/admin/settings" className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary">
                View settings
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
