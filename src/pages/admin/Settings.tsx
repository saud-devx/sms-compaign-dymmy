
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
import { EnhancedButton } from '@/components/enhanced-ui/EnhancedButton';
import { Save } from 'lucide-react';

const generalFormSchema = z.object({
  siteName: z.string().min(2, {
    message: "Site name must be at least 2 characters.",
  }),
  siteDescription: z.string().min(10, {
    message: "Site description must be at least 10 characters.",
  }),
  contactEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().min(1, {
    message: "Please enter a phone number.",
  }),
  address: z.string(),
});

const seoFormSchema = z.object({
  defaultTitle: z.string().min(5, {
    message: "Default title must be at least 5 characters.",
  }),
  defaultDescription: z.string().min(10, {
    message: "Default description must be at least 10 characters.",
  }),
  defaultKeywords: z.string(),
  googleAnalyticsId: z.string(),
  enableSitemap: z.boolean(),
  enableRobotsTxt: z.boolean(),
  ogImage: z.string().url().optional().or(z.literal('')),
});

const socialFormSchema = z.object({
  facebook: z.string().url().optional().or(z.literal('')),
  twitter: z.string().url().optional().or(z.literal('')),
  linkedin: z.string().url().optional().or(z.literal('')),
  instagram: z.string().url().optional().or(z.literal('')),
  youtube: z.string().url().optional().or(z.literal('')),
});

const Settings = () => {
  const generalForm = useForm<z.infer<typeof generalFormSchema>>({
    resolver: zodResolver(generalFormSchema),
    defaultValues: {
      siteName: "Campagne SMS",
      siteDescription: "Plateforme en ligne d'envoi de SMS professionnels.",
      contactEmail: "contact@campagnesms.com",
      phoneNumber: "+33 1 23 45 67 89",
      address: "123 Avenue des SMS, 75008 Paris",
    },
  });

  const seoForm = useForm<z.infer<typeof seoFormSchema>>({
    resolver: zodResolver(seoFormSchema),
    defaultValues: {
      defaultTitle: "Plateforme d'envoi de SMS professionnels",
      defaultDescription: "Campagne SMS est une plateforme en ligne d'envoi de SMS professionnels. Envois unitaires ou campagnes de SMS, sans engagement, sans frais additionnels, sans date limite d'utilisation.",
      defaultKeywords: "campagne sms, sms marketing, envoi sms professionnel, messagerie sms entreprise",
      googleAnalyticsId: "UA-12345678-9",
      enableSitemap: true,
      enableRobotsTxt: true,
      ogImage: "https://campagnesms.com/og-image.jpg",
    },
  });

  const socialForm = useForm<z.infer<typeof socialFormSchema>>({
    resolver: zodResolver(socialFormSchema),
    defaultValues: {
      facebook: "https://facebook.com/campagnesms",
      twitter: "https://twitter.com/campagnesms",
      linkedin: "https://linkedin.com/company/campagnesms",
      instagram: "https://instagram.com/campagnesms",
      youtube: "",
    },
  });

  function onGeneralSubmit(data: z.infer<typeof generalFormSchema>) {
    console.log("General form data:", data);
    toast({
      title: "General settings saved",
      description: "Your general settings have been updated successfully.",
    });
  }

  function onSeoSubmit(data: z.infer<typeof seoFormSchema>) {
    console.log("SEO form data:", data);
    toast({
      title: "SEO settings saved",
      description: "Your SEO settings have been updated successfully.",
    });
  }

  function onSocialSubmit(data: z.infer<typeof socialFormSchema>) {
    console.log("Social form data:", data);
    toast({
      title: "Social media settings saved",
      description: "Your social media settings have been updated successfully.",
    });
  }

  return (
    <Tabs defaultValue="general" className="space-y-6">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="seo">SEO</TabsTrigger>
        <TabsTrigger value="social">Social Media</TabsTrigger>
      </TabsList>

      <TabsContent value="general">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>
              Manage your website's basic information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...generalForm}>
              <form onSubmit={generalForm.handleSubmit(onGeneralSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={generalForm.control}
                    name="siteName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Site Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your site name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={generalForm.control}
                    name="contactEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="contact@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={generalForm.control}
                  name="siteDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Brief description of your site" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={generalForm.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={generalForm.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Street Name, City, Country" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-end">
                  <EnhancedButton type="submit" variant="gradient">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </EnhancedButton>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="seo">
        <Card>
          <CardHeader>
            <CardTitle>SEO Settings</CardTitle>
            <CardDescription>
              Optimize your website for search engines.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...seoForm}>
              <form onSubmit={seoForm.handleSubmit(onSeoSubmit)} className="space-y-6">
                <FormField
                  control={seoForm.control}
                  name="defaultTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Default Meta Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Default page title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={seoForm.control}
                  name="defaultDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Default Meta Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Default page description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={seoForm.control}
                  name="defaultKeywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Default Keywords</FormLabel>
                      <FormControl>
                        <Input placeholder="keyword1, keyword2, keyword3" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={seoForm.control}
                  name="ogImage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Default Open Graph Image</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com/og-image.jpg" {...field} />
                      </FormControl>
                      <FormMessage />
                      {field.value && (
                        <div className="mt-2 rounded-md overflow-hidden border border-gray-200 h-32 w-64">
                          <img 
                            src={field.value} 
                            alt="OG Preview" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "https://placehold.co/1200x630?text=Invalid+Image";
                            }} 
                          />
                        </div>
                      )}
                    </FormItem>
                  )}
                />

                <FormField
                  control={seoForm.control}
                  name="googleAnalyticsId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Google Analytics ID</FormLabel>
                      <FormControl>
                        <Input placeholder="UA-XXXXXXXXX-X or G-XXXXXXXXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={seoForm.control}
                    name="enableSitemap"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Sitemap
                          </FormLabel>
                          <FormDescription>
                            Enable automatic sitemap generation
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={seoForm.control}
                    name="enableRobotsTxt"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Robots.txt
                          </FormLabel>
                          <FormDescription>
                            Enable robots.txt file
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-end">
                  <EnhancedButton type="submit" variant="gradient">
                    <Save className="h-4 w-4 mr-2" />
                    Save SEO Settings
                  </EnhancedButton>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="social">
        <Card>
          <CardHeader>
            <CardTitle>Social Media Settings</CardTitle>
            <CardDescription>
              Connect your website to social media platforms.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...socialForm}>
              <form onSubmit={socialForm.handleSubmit(onSocialSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={socialForm.control}
                    name="facebook"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Facebook URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://facebook.com/yourpage" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={socialForm.control}
                    name="twitter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Twitter URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://twitter.com/yourhandle" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={socialForm.control}
                    name="linkedin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://linkedin.com/company/yourcompany" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={socialForm.control}
                    name="instagram"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Instagram URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://instagram.com/yourhandle" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={socialForm.control}
                    name="youtube"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>YouTube URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://youtube.com/channel/yourchannelid" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-end">
                  <EnhancedButton type="submit" variant="gradient">
                    <Save className="h-4 w-4 mr-2" />
                    Save Social Media Settings
                  </EnhancedButton>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Settings;
