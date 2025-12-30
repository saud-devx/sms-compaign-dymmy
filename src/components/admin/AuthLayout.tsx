
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import { Loader2 } from 'lucide-react';

export const AuthLayout = () => {
  const { status } = useAuth();
  const location = useLocation();

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-gray-700 dark:text-gray-300">Loading...</span>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    // If not logged in and not already on login page
    if (!location.pathname.includes('/admin/login')) {
      return <Navigate to="/admin/login" state={{ from: location }} replace />;
    }
  } else {
    // If logged in and on login page
    if (location.pathname.includes('/admin/login')) {
      return <Navigate to="/admin" replace />;
    }
  }

  return <Outlet />;
};

export default AuthLayout;
