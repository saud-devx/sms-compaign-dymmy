
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from '@/components/ui/button';
import { EnhancedButton } from '@/components/enhanced-ui/EnhancedButton';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar, Image, Save, ArrowLeft } from 'lucide-react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import blogPosts from '@/data/blogPosts';

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  slug: z.string().min(5, {
    message: "Slug must be at least 5 characters.",
  }).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: "Slug must contain only lowercase letters, numbers, and hyphens.",
  }),
  excerpt: z.string().min(10, {
    message: "Excerpt must be at least 10 characters.",
  }),
  content: z.string().min(50, {
    message: "Content must be at least 50 characters.",
  }),
  category: z.string().min(1, {
    message: "Category is required.",
  }),
  author: z.string().min(1, {
    message: "Author is required.",
  }),
  readTime: z.string().min(1, {
    message: "Read time is required.",
  }),
  featuredImage: z.string().url({
    message: "Featured image must be a valid URL.",
  }),
  date: z.string(),
  metaTitle: z.string().min(5, {
    message: "Meta title must be at least 5 characters.",
  }),
  metaDescription: z.string().min(10, {
    message: "Meta description must be at least 10 characters.",
  }),
  keywords: z.string(),
});

type PostFormValues = z.infer<typeof formSchema>;

const PostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = id !== 'new';
  
  const form = useForm<PostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "",
      author: "",
      readTime: "",
      featuredImage: "",
      date: new Date().toISOString().split('T')[0],
      metaTitle: "",
      metaDescription: "",
      keywords: "",
    }
  });

  useEffect(() => {
    if (isEditing) {
      // Find the post data - convert id to string for proper comparison
      const post = blogPosts.find(post => post.id.toString() === id);
      
      if (post) {
        // Update form values with post data
        form.reset({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt || "",
          content: post.content || "",
          category: post.category || "",
          author: post.author || "",
          readTime: post.readTime || "",
          featuredImage: post.image || "",
          date: post.date || new Date().toISOString().split('T')[0],
          metaTitle: post.title, // Use same title as meta title by default
          metaDescription: post.excerpt || "",
          keywords: post.category || "",
        });
      }
    }
  }, [id, isEditing, form]);

  const onSubmit = (data: PostFormValues) => {
    // Here would be the API call to save the post
    console.log("Form submitted:", data);
    
    toast({
      title: `Post ${isEditing ? "updated" : "created"} successfully`,
      description: `"${data.title}" has been ${isEditing ? "updated" : "created"}.`,
    });
    
    // Navigate back to posts list after saving
    navigate('/admin/posts');
  };

  const generateSlugFromTitle = (title: string) => {
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    form.setValue('slug', slug);
  };

  return (
    <div>
      <div className="mb-6 flex items-center">
        <Button variant="outline" size="sm" onClick={() => navigate('/admin/posts')} className="mr-4">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Posts
        </Button>
        <h2 className="text-2xl font-bold">
          {isEditing ? 'Edit Post' : 'Create New Post'}
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter post title" 
                          {...field} 
                          className="text-lg" 
                          onChange={(e) => {
                            field.onChange(e);
                            if (!isEditing && !form.getValues('slug')) {
                              generateSlugFromTitle(e.target.value);
                            }
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input placeholder="post-url-slug" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="excerpt"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Excerpt</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Brief description of the post..." 
                          className="h-24"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Card>

              <Card className="p-6">
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Write your post content here..." 
                          className="min-h-[400px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Card>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Publish</h3>
                
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Publication Date
                        </FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-between pt-4">
                    <Button type="button" variant="outline">
                      Save Draft
                    </Button>
                    <EnhancedButton type="submit" variant="gradient">
                      <Save className="h-4 w-4 mr-1" />
                      {isEditing ? 'Update' : 'Publish'}
                    </EnhancedButton>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Details</h3>
                
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Marketing" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Author</FormLabel>
                        <FormControl>
                          <Input placeholder="Author name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="readTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Read Time</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 5 min" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Featured Image</h3>
                
                <FormField
                  control={form.control}
                  name="featuredImage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Image className="h-4 w-4" />
                        Image URL
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com/image.jpg" {...field} />
                      </FormControl>
                      <FormMessage />
                      
                      {field.value && (
                        <div className="mt-4 rounded-md overflow-hidden border border-gray-200 aspect-video">
                          <img 
                            src={field.value} 
                            alt="Featured" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "https://placehold.co/600x400?text=Invalid+Image";
                            }} 
                          />
                        </div>
                      )}
                    </FormItem>
                  )}
                />
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">SEO</h3>
                
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="metaTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta Title</FormLabel>
                        <FormControl>
                          <Input placeholder="SEO title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="metaDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="SEO description" 
                            className="h-20"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="keywords"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Keywords</FormLabel>
                        <FormControl>
                          <Input placeholder="keyword1, keyword2, keyword3" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </Card>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PostEditor;
