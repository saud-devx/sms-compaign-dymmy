import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ArrowUpRight, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { cn } from "@/lib/utils";

const SEOScoreCard = ({ score, title, description }: { score: number; title: string; description: string }) => {
  let color = "text-gray-500";
  let bgColor = "bg-gray-100";
  
  if (score >= 80) {
    color = "text-green-600";
    bgColor = "bg-green-100";
  } else if (score >= 50) {
    color = "text-amber-600";
    bgColor = "bg-amber-100";
  } else {
    color = "text-red-600";
    bgColor = "bg-red-100";
  }
  
  return (
    <div className={`p-6 rounded-lg ${bgColor} flex items-center`}>
      <div className={`text-3xl font-bold ${color} mr-4`}>
        {score}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Sample SEO data for URLs
const seoData = [
  {
    url: "/",
    title: "Plateforme d'envoi de SMS professionnels",
    metaDescription: "Campagne SMS est une plateforme en ligne d'envoi de SMS professionnels. Envois unitaires ou campagnes de SMS, sans engagement, sans frais additionnels, sans date limite d'utilisation.",
    score: 86,
    issues: 2,
  },
  {
    url: "/services",
    title: "Nos services d'envoi de SMS professionnels",
    metaDescription: "Découvrez nos services d'envoi de SMS professionnels. Envois unitaires ou campagnes de SMS, sans engagement, sans frais additionnels.",
    score: 78,
    issues: 3,
  },
  {
    url: "/le-sms",
    title: "Tout savoir sur le SMS - Campagne SMS",
    metaDescription: "Qu'est-ce que le SMS et comment l'utiliser dans votre stratégie de communication ? Découvrez tous nos conseils et astuces pour optimiser vos campagnes SMS.",
    score: 91,
    issues: 1,
  },
  {
    url: "/tarifs",
    title: "Tarifs d'envoi de SMS - Campagne SMS",
    metaDescription: "Découvrez nos tarifs d'envoi de SMS professionnels. Envois unitaires ou campagnes de SMS, sans engagement, sans frais additionnels.",
    score: 82,
    issues: 2,
  },
  {
    url: "/contact",
    title: "Contactez Campagne SMS",
    metaDescription: "Vous avez des questions sur nos services d'envoi de SMS ? Contactez-nous dès maintenant pour en savoir plus.",
    score: 65,
    issues: 5,
  },
];

// Sample SEO issues
const seoIssues = [
  { 
    type: "error", 
    page: "/contact", 
    message: "Meta description trop courte (moins de 100 caractères)", 
    impact: "High", 
    icon: <AlertTriangle className="h-5 w-5 text-red-500" /> 
  },
  { 
    type: "warning", 
    page: "/services", 
    message: "Titre H1 similaire au title tag", 
    impact: "Medium", 
    icon: <AlertCircle className="h-5 w-5 text-amber-500" /> 
  },
  { 
    type: "success", 
    page: "/le-sms", 
    message: "Structured data implemented correctly", 
    impact: "Positive", 
    icon: <CheckCircle className="h-5 w-5 text-green-500" /> 
  },
  { 
    type: "error", 
    page: "/actualites", 
    message: "Missing canonical tag", 
    impact: "High", 
    icon: <AlertTriangle className="h-5 w-5 text-red-500" /> 
  },
  { 
    type: "warning", 
    page: "/", 
    message: "Page speed can be improved", 
    impact: "Medium", 
    icon: <AlertCircle className="h-5 w-5 text-amber-500" /> 
  },
];

// Sample keywords data
const keywordsData = [
  { keyword: "envoi sms pro", position: 3, change: "+2", volume: 1800 },
  { keyword: "plateforme sms", position: 5, change: "-1", volume: 2400 },
  { keyword: "campagne sms marketing", position: 2, change: "+4", volume: 1200 },
  { keyword: "tarif envoi sms", position: 8, change: "0", volume: 900 },
  { keyword: "sms professionnel", position: 4, change: "+1", volume: 1500 },
];

const SEO = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter SEO data based on search query
  const filteredSeoData = seoData.filter(item => 
    item.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const overallScore = Math.round(
    seoData.reduce((acc, item) => acc + item.score, 0) / seoData.length
  );

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SEOScoreCard 
          score={overallScore} 
          title="Overall SEO Score" 
          description="Average score across all pages"
        />
        <SEOScoreCard 
          score={92} 
          title="Mobile Usability" 
          description="Mobile responsive performance"
        />
        <SEOScoreCard 
          score={78} 
          title="Page Speed" 
          description="Average page load time score"
        />
      </div>

      <Tabs defaultValue="pages">
        <TabsList className="mb-6">
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
          <TabsTrigger value="keywords">Keywords</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pages">
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="relative max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search pages..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>URL</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Score</TableHead>
                  <TableHead className="hidden md:table-cell">Issues</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSeoData.map((item) => (
                  <TableRow key={item.url}>
                    <TableCell>
                      <code className="text-xs bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">
                        {item.url}
                      </code>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-xs text-gray-500 truncate max-w-[300px]">
                        {item.metaDescription}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <Progress 
                          value={item.score} 
                          className={cn(
                            "h-2 w-16",
                            item.score >= 80 ? "bg-green-100 dark:bg-green-900" : 
                            item.score >= 50 ? "bg-amber-100 dark:bg-amber-900" : 
                            "bg-red-100 dark:bg-red-900"
                          )}
                        />
                        <span className={
                          item.score >= 80 ? "text-green-600" : 
                          item.score >= 50 ? "text-amber-600" : 
                          "text-red-600"
                        }>
                          {item.score}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge 
                        variant="outline"
                        className={
                          item.issues === 0 ? "bg-green-50 text-green-700 border-green-200" :
                          item.issues <= 2 ? "bg-amber-50 text-amber-700 border-amber-200" :
                          "bg-red-50 text-red-700 border-red-200"
                        }
                      >
                        {item.issues} {item.issues === 1 ? 'issue' : 'issues'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          asChild
                        >
                          <Link to={item.url} target="_blank">
                            <ArrowUpRight className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Link>
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          asChild
                        >
                          <Link to={`/admin/seo/analyze${item.url}`}>
                            <Search className="h-4 w-4" />
                            <span className="sr-only">Analyze</span>
                          </Link>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="issues">
          <Card>
            <CardHeader>
              <CardTitle>SEO Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]"></TableHead>
                    <TableHead>Issue</TableHead>
                    <TableHead>Page</TableHead>
                    <TableHead className="hidden md:table-cell">Impact</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {seoIssues.map((issue, i) => (
                    <TableRow key={i}>
                      <TableCell>{issue.icon}</TableCell>
                      <TableCell>
                        <div className="font-medium">{issue.message}</div>
                      </TableCell>
                      <TableCell>
                        <code className="text-xs bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">
                          {issue.page}
                        </code>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge 
                          variant="outline"
                          className={
                            issue.type === "error" ? "bg-red-50 text-red-700 border-red-200" :
                            issue.type === "warning" ? "bg-amber-50 text-amber-700 border-amber-200" :
                            "bg-green-50 text-green-700 border-green-200"
                          }
                        >
                          {issue.impact}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8"
                          asChild
                        >
                          <Link to={`/admin/seo/analyze${issue.page}`}>
                            Fix Issue
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="keywords">
          <Card>
            <CardHeader>
              <CardTitle>Keyword Rankings</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Keyword</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead className="hidden md:table-cell">Search Volume</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keywordsData.map((keyword, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="font-medium">{keyword.keyword}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          #{keyword.position}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className={
                          keyword.change.startsWith("+") ? "text-green-600" :
                          keyword.change.startsWith("-") ? "text-red-600" :
                          "text-gray-600"
                        }>
                          {keyword.change}
                        </span>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {keyword.volume.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                        >
                          <Link to={`/admin/seo/keyword/${encodeURIComponent(keyword.keyword)}`}>
                            Optimize
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SEO;
