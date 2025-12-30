
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUp, ArrowDown, Eye, Users, Clock, Globe } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

// Sample analytics data
const visitorsData = [
  { name: 'Mon', visitors: 1200 },
  { name: 'Tue', visitors: 1400 },
  { name: 'Wed', visitors: 1650 },
  { name: 'Thu', visitors: 1500 },
  { name: 'Fri', visitors: 2100 },
  { name: 'Sat', visitors: 1800 },
  { name: 'Sun', visitors: 1950 },
];

const pageViewsData = [
  { name: '/', views: 5400, unique: 4200 },
  { name: '/services', views: 3200, unique: 2700 },
  { name: '/blog', views: 2800, unique: 2100 },
  { name: '/tarifs', views: 1900, unique: 1650 },
  { name: '/contact', views: 1200, unique: 1050 },
];

const deviceData = [
  { name: 'Mobile', value: 58 },
  { name: 'Desktop', value: 32 },
  { name: 'Tablet', value: 10 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#8dd1e1'];

const countryData = [
  { name: 'France', visitors: 4500 },
  { name: 'Belgium', visitors: 1200 },
  { name: 'Switzerland', visitors: 950 },
  { name: 'Canada', visitors: 820 },
  { name: 'Other', visitors: 1530 },
];

const trafficSourceData = [
  { name: 'Direct', value: 35 },
  { name: 'Organic Search', value: 40 },
  { name: 'Social Media', value: 15 },
  { name: 'Referral', value: 10 },
];

const StatCard = ({ title, value, indicator, icon }: { 
  title: string; 
  value: string; 
  indicator: { value: string; positive: boolean }; 
  icon: React.ReactNode; 
}) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          <div className="flex items-center text-sm mt-1">
            <span className={indicator.positive ? "text-green-600" : "text-red-600"}>
              {indicator.positive ? <ArrowUp className="h-3 w-3 mr-1 inline" /> : <ArrowDown className="h-3 w-3 mr-1 inline" />}
              {indicator.value}
            </span>
            <span className="text-gray-500 ml-1">vs last period</span>
          </div>
        </div>
        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
          {icon}
        </div>
      </div>
    </CardContent>
  </Card>
);

const Analytics = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Visitors"
          value="12,845"
          indicator={{ value: "12%", positive: true }}
          icon={<Users className="h-5 w-5 text-primary" />}
        />
        <StatCard
          title="Page Views"
          value="35,721"
          indicator={{ value: "8%", positive: true }}
          icon={<Eye className="h-5 w-5 text-primary" />}
        />
        <StatCard
          title="Avg. Session Duration"
          value="2m 15s"
          indicator={{ value: "5%", positive: false }}
          icon={<Clock className="h-5 w-5 text-primary" />}
        />
        <StatCard
          title="Bounce Rate"
          value="42.3%"
          indicator={{ value: "3%", positive: true }}
          icon={<ArrowDown className="h-5 w-5 text-primary" />}
        />
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">Traffic Sources</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Visitors Over Time</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={visitorsData}
                    margin={{
                      top: 20, right: 30, left: 0, bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="visitors" 
                      stroke="#8884d8" 
                      strokeWidth={3}
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={trafficSourceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      fill="#8884d8"
                      paddingAngle={3}
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {trafficSourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="traffic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Top Pages</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={pageViewsData}
                    margin={{
                      top: 20, right: 30, left: 0, bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="views" name="Page Views" fill="#8884d8" barSize={20} />
                    <Bar dataKey="unique" name="Unique Views" fill="#82ca9d" barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Top Countries</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    layout="vertical"
                    data={countryData}
                    margin={{
                      top: 20, right: 30, left: 55, bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Bar dataKey="visitors" name="Visitors" fill="#8884d8" barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audience">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Device Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Geographic Distribution</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <Globe className="h-24 w-24 mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500">Interactive map visualization is available in the full version</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Content Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-3 font-medium">Page</th>
                      <th className="text-left pb-3 font-medium">Views</th>
                      <th className="text-left pb-3 font-medium">Avg. Time</th>
                      <th className="text-left pb-3 font-medium">Bounce Rate</th>
                      <th className="text-right pb-3 font-medium">Conversion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Home Page</td>
                      <td>10,245</td>
                      <td>1:45</td>
                      <td>32%</td>
                      <td className="text-right">4.2%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Services</td>
                      <td>5,382</td>
                      <td>2:30</td>
                      <td>28%</td>
                      <td className="text-right">3.8%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Blog: Marketing Efficaces</td>
                      <td>3,921</td>
                      <td>4:12</td>
                      <td>18%</td>
                      <td className="text-right">5.1%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Tarifs</td>
                      <td>3,245</td>
                      <td>3:18</td>
                      <td>22%</td>
                      <td className="text-right">8.5%</td>
                    </tr>
                    <tr>
                      <td className="py-3">Contact</td>
                      <td>1,850</td>
                      <td>1:52</td>
                      <td>45%</td>
                      <td className="text-right">12.3%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
