import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Save, ArrowLeft, Eye } from 'lucide-react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  path: z.string().min(1, {
    message: "Path is required.",
  }).regex(/^\/([a-z0-9-]+\/?)*$/, {
    message: "Path must start with / and contain only lowercase letters, numbers, and hyphens.",
  }),
  content: z.string().min(10, {
    message: "Content must be at least 10 characters.",
  }),
  metaTitle: z.string().min(3, {
    message: "Meta title must be at least 3 characters.",
  }),
  metaDescription: z.string().min(10, {
    message: "Meta description must be at least 10 characters.",
  }),
  status: z.enum(["Published", "Draft"]),
  lastUpdated: z.string(),
});

type PageFormValues = z.infer<typeof formSchema>;

// Sample pages data with rich content
const initialPages = [
  { 
    id: "1", 
    title: "Home", 
    path: "/", 
    status: "Published", 
    lastUpdated: "02 May 2025", 
    content: `<div class="hero-section">
      <h1>Welcome to our Website</h1>
      <p>We provide the best SMS solutions for your business</p>
      <button class="cta-button">Get Started</button>
    </div>
    <div class="features-section">
      <h2>Our Features</h2>
      <ul>
        <li>Fast and reliable SMS delivery</li>
        <li>Comprehensive analytics</li>
        <li>Easy integration with your systems</li>
      </ul>
    </div>`, 
    metaTitle: "Home | SMS Solutions", 
    metaDescription: "Welcome to our website offering top-quality SMS solutions for businesses of all sizes."
  },
  { 
    id: "2", 
    title: "Services", 
    path: "/services", 
    status: "Published", 
    lastUpdated: "28 Apr 2025", 
    content: `<h1>Our Services</h1>
    <p>Discover our range of SMS solutions designed to meet your business needs:</p>
    <div class="service-card">
      <h3>Bulk SMS Sending</h3>
      <p>Send thousands of messages in one go with our reliable platform.</p>
    </div>
    <div class="service-card">
      <h3>SMS Marketing</h3>
      <p>Reach your customers with targeted SMS marketing campaigns.</p>
    </div>
    <div class="service-card">
      <h3>Automated Notifications</h3>
      <p>Set up automated SMS notifications for your business processes.</p>
    </div>`, 
    metaTitle: "Our Services | SMS Solutions", 
    metaDescription: "Explore our comprehensive range of SMS services including bulk sending, marketing, and automated notifications."
  },
  { id: "3", title: "Le SMS", path: "/le-sms", status: "Published", lastUpdated: "15 Apr 2025", content: "Le SMS content", metaTitle: "Le SMS", metaDescription: "About Le SMS" },
  { id: "4", title: "Tarifs", path: "/tarifs", status: "Published", lastUpdated: "10 Apr 2025", content: "Tarifs content", metaTitle: "Tarifs", metaDescription: "Our pricing" },
  { id: "5", title: "Contact", path: "/contact", status: "Published", lastUpdated: "05 Apr 2025", content: "Contact content", metaTitle: "Contact Us", metaDescription: "Get in touch with us" },
  { id: "6", title: "Terms", path: "/terms", status: "Published", lastUpdated: "01 Mar 2025", content: "Terms content", metaTitle: "Terms and Conditions", metaDescription: "Our terms and conditions" },
  { id: "7", title: "Privacy", path: "/privacy", status: "Published", lastUpdated: "01 Mar 2025", content: "Privacy content", metaTitle: "Privacy Policy", metaDescription: "Our privacy policy" },
];

const PageEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = id !== undefined && id !== 'new';
  const [activeTab, setActiveTab] = useState("edit");
  const [previewContent, setPreviewContent] = useState("");
  
  const form = useForm<PageFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      path: "/",
      content: "",
      metaTitle: "",
      metaDescription: "",
      status: "Draft",
      lastUpdated: new Date().toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }),
    }
  });

  // Update preview content when form values change
  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value.content) {
        setPreviewContent(value.content as string);
      }
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  useEffect(() => {
    if (isEditing) {
      // Find the page data
      const page = initialPages.find(page => page.id === id);
      
      if (page) {
        // Update form values with page data
        form.reset({
          title: page.title,
          path: page.path,
          content: page.content || "",
          metaTitle: page.metaTitle || page.title,
          metaDescription: page.metaDescription || "",
          status: page.status as "Published" | "Draft" || "Draft",
          lastUpdated: page.lastUpdated || new Date().toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }),
        });
        setPreviewContent(page.content || "");
      }
    }
  }, [id, isEditing, form]);

  const onSubmit = (data: PageFormValues) => {
    // Here would be the API call to save the page
    console.log("Page form submitted:", data);
    
    toast({
      title: `Page ${isEditing ? "updated" : "created"} successfully`,
      description: `"${data.title}" has been ${isEditing ? "updated" : "created"}.`,
    });
    
    // Navigate back to pages list after saving
    navigate('/admin/pages');
  };

  const generatePathFromTitle = (title: string) => {
    if (title === "Home") return "/";
    
    const path = "/" + title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    form.setValue('path', path);
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="outline" size="sm" onClick={() => navigate('/admin/pages')} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Pages
          </Button>
          <h2 className="text-2xl font-bold">
            {isEditing ? 'Edit Page' : 'Create New Page'}
          </h2>
        </div>
        
        <div className="flex space-x-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => form.handleSubmit(onSubmit)()}
          >
            <Save className="h-4 w-4 mr-1" />
            Save
          </Button>
          
          <Button 
            type="button" 
            variant="default"
            size="sm"
            onClick={() => form.handleSubmit(onSubmit)()}
            className="bg-primary hover:bg-primary/90"
          >
            {isEditing ? 'Update Page' : 'Publish Page'}
          </Button>
        </div>
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
                          placeholder="Enter page title" 
                          {...field} 
                          className="text-lg" 
                          onChange={(e) => {
                            field.onChange(e);
                            if (!isEditing && form.getValues('path') === "/") {
                              generatePathFromTitle(e.target.value);
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
                  name="path"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Path</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="/page-path" 
                          {...field} 
                          disabled={field.value === "/"} // Can't change homepage path
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Card>

              <Card className="p-6">
                <Tabs defaultValue="edit" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-4">
                    <TabsTrigger value="edit">Edit</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="edit">
                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Write your page content here... (HTML/Markdown supported)" 
                              className="min-h-[400px] font-mono"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>
                  
                  <TabsContent value="preview">
                    <div className="border rounded-md p-4 min-h-[400px] bg-white">
                      <div 
                        className="page-preview prose max-w-none" 
                        dangerouslySetInnerHTML={{ __html: previewContent }}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Publish</h3>
                
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <FormControl>
                          <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            value={field.value}
                            onChange={field.onChange}
                          >
                            <option value="Published">Published</option>
                            <option value="Draft">Draft</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-500">
                      Last updated: {form.getValues('lastUpdated')}
                    </span>
                    
                    <Button 
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(form.getValues('path'), '_blank')}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <Button 
                      type="submit" 
                      variant="default"
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <Save className="h-4 w-4 mr-1" />
                      {isEditing ? 'Update Page' : 'Publish Page'}
                    </Button>
                  </div>
                </div>
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
                </div>
              </Card>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PageEditor;
