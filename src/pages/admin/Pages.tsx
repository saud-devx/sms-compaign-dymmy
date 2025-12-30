
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";
import { useRealtime } from '@/hooks/use-realtime';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPages, deletePage } from '@/api/pages';
import { PageRow } from '@/types/admin';
import { format } from 'date-fns';

const Pages = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pageToDelete, setPageToDelete] = useState<string | null>(null);
  const queryClient = useQueryClient();
  
  // Fetch pages with react-query
  const { 
    data: pages = [], 
    isLoading, 
    error 
  } = useQuery({
    queryKey: ['pages'],
    queryFn: fetchPages
  });

  // Delete page mutation
  const deletePageMutation = useMutation({
    mutationFn: deletePage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pages'] });
      toast({
        title: "Page deleted",
        description: "The page has been successfully deleted.",
      });
    },
    onError: (error) => {
      console.error('Error deleting page:', error);
      toast({
        title: "Delete failed",
        description: "There was an error deleting the page.",
        variant: "destructive"
      });
    }
  });

  // Set up realtime subscriptions
  useRealtime({
    table: 'pages',
    onInsert: () => {
      queryClient.invalidateQueries({ queryKey: ['pages'] });
    },
    onUpdate: () => {
      queryClient.invalidateQueries({ queryKey: ['pages'] });
    },
    onDelete: () => {
      queryClient.invalidateQueries({ queryKey: ['pages'] });
    }
  });
  
  // Filter pages based on search query
  const filteredPages = pages.filter(page => 
    page.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.slug?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeletePage = (id: string) => {
    // Prevent deletion of homepage
    const page = pages.find(p => p.id === id);
    if (page?.slug === "/") {
      toast({
        title: "Cannot delete homepage",
        description: "The homepage cannot be deleted.",
        variant: "destructive"
      });
      return;
    }
    setPageToDelete(id);
  };

  const confirmDelete = () => {
    if (pageToDelete) {
      deletePageMutation.mutate(pageToDelete);
      setPageToDelete(null);
    }
  };

  const cancelDelete = () => {
    setPageToDelete(null);
  };
  
  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Error loading pages. Please try again later.</p>
      </div>
    );
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A";
    return format(new Date(dateString), 'dd MMM yyyy');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-auto max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search pages..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90">
          <Link to="/admin/pages/new" className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            New Page
          </Link>
        </Button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Path</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  <div className="flex justify-center">Loading pages...</div>
                </TableCell>
              </TableRow>
            ) : filteredPages.length > 0 ? (
              filteredPages.map((page) => (
                <TableRow key={page.id}>
                  <TableCell className="font-medium">{page.title}</TableCell>
                  <TableCell>
                    <code className="text-xs bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">
                      {page.slug}
                    </code>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="outline" className={page.published ? "bg-green-50 text-green-700 hover:bg-green-50 border-green-200" : "bg-yellow-50 text-yellow-700 hover:bg-yellow-50 border-yellow-200"}>
                      {page.published ? 'Published' : 'Draft'}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-gray-500">
                    {formatDate(page.updated_at)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hidden md:flex h-8 w-8 p-0"
                        asChild
                      >
                        <Link to={page.slug} target="_blank">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Link>
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hidden md:flex h-8 w-8 p-0"
                        asChild
                      >
                        <Link to={`/admin/pages/edit/${page.id}`}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Link>
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hidden md:flex h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                        onClick={() => handleDeletePage(page.id)}
                        disabled={page.slug === "/"} // Can't delete homepage
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                      
                      {/* Mobile dropdown menu */}
                      <div className="md:hidden">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                              </svg>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link to={page.slug} target="_blank" className="flex items-center">
                                <Eye className="mr-2 h-4 w-4" />
                                <span>View</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link to={`/admin/pages/edit/${page.id}`} className="flex items-center">
                                <Edit className="mr-2 h-4 w-4" />
                                <span>Edit</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              className="text-red-600" 
                              disabled={page.slug === "/"}
                              onClick={() => handleDeletePage(page.id)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No pages found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={pageToDelete !== null} onOpenChange={() => setPageToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the page.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={cancelDelete}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Pages;
