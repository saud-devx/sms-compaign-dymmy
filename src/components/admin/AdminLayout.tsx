
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useLocation } from 'react-router-dom';

type AdminLayoutProps = {
  children: React.ReactNode;
};

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Extract the current section from the URL path
  const getCurrentSection = () => {
    const path = currentPath.split('/')[2] || 'dashboard';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1">
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              {getCurrentSection()}
            </h1>
            <div className="mb-8">
              {children}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
      <ScrollToTop />
    </div>
  );
};

export default AdminLayout;
