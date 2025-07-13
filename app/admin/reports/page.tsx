import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BarChart,
  Calendar, 
  Download, 
  FileText, 
  PieChart, 
  RefreshCw, 
  Timer
} from "lucide-react"

export const metadata = {
  title: "Business Reports | Selenae Admin",
}

export default function ReportsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Reports</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Data
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export Reports
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="salons">Salons</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Card>
            <CardHeader className="py-3">
              <CardTitle className="text-sm font-medium">Report Period</CardTitle>
            </CardHeader>
            <CardContent className="py-3">
              <div className="flex items-center gap-2">
                <select className="p-2 border rounded-md text-sm flex-1">
                  <option>Last 30 days</option>
                  <option>This month</option>
                  <option>Last month</option>
                  <option>Last 3 months</option>
                  <option>Last 6 months</option>
                  <option>This year</option>
                  <option>Last year</option>
                  <option>Custom range</option>
                </select>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="py-3">
              <CardTitle className="text-sm font-medium">Report Format</CardTitle>
            </CardHeader>
            <CardContent className="py-3">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  PDF
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Excel
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  CSV
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="py-3">
              <CardTitle className="text-sm font-medium">Data Refresh</CardTitle>
            </CardHeader>
            <CardContent className="py-3">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground flex items-center">
                  <Timer className="h-4 w-4 mr-2" />
                  Last updated 2 hours ago
                </div>
                <Button variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Total revenue across all salons and services</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center">
                  <BarChart className="h-16 w-16 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-muted-foreground">Revenue chart visualization would appear here</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Bookings Distribution</CardTitle>
                <CardDescription>Breakdown of bookings by service category</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="h-16 w-16 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-muted-foreground">Bookings pie chart would appear here</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Available Reports</CardTitle>
              <CardDescription>Quick access to all types of reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { 
                    title: "Sales & Revenue", 
                    description: "Financial performance across the platform",
                    icon: <BarChart className="h-5 w-5" />
                  },
                  { 
                    title: "Salon Performance", 
                    description: "Salon-wise bookings, revenue and ratings",
                    icon: <PieChart className="h-5 w-5" />
                  },
                  { 
                    title: "Service Analytics", 
                    description: "Most booked services and performance metrics",
                    icon: <FileText className="h-5 w-5" />
                  },
                  { 
                    title: "User Engagement", 
                    description: "Customer signups, activity and retention",
                    icon: <FileText className="h-5 w-5" />
                  },
                  { 
                    title: "Bookings Report", 
                    description: "Booking trends, cancellations and completions",
                    icon: <Calendar className="h-5 w-5" />
                  },
                  { 
                    title: "Product Sales", 
                    description: "Product sales performance and trends",
                    icon: <FileText className="h-5 w-5" />
                  },
                ].map((report, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        {report.icon}
                      </div>
                      <h3 className="font-medium">{report.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{report.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sales" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sales Reports</CardTitle>
              <CardDescription>Financial performance metrics and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Total Revenue</h3>
                    <div className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded">+15% vs last period</div>
                  </div>
                  <div className="text-3xl font-bold mb-1">$187,429.45</div>
                  <div className="text-sm text-muted-foreground">Last 30 days</div>
                  <div className="mt-4 h-36 flex items-center justify-center">
                    <div className="text-center">
                      <BarChart className="h-10 w-10 mx-auto text-muted-foreground" />
                      <p className="mt-2 text-xs text-muted-foreground">Revenue chart would appear here</p>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Transactions</h3>
                    <div className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded">+8% vs last period</div>
                  </div>
                  <div className="text-3xl font-bold mb-1">4,752</div>
                  <div className="text-sm text-muted-foreground">Last 30 days</div>
                  <div className="mt-4 h-36 flex items-center justify-center">
                    <div className="text-center">
                      <BarChart className="h-10 w-10 mx-auto text-muted-foreground" />
                      <p className="mt-2 text-xs text-muted-foreground">Transactions chart would appear here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Available Reports</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Revenue by Service Category</p>
                        <p className="text-sm text-muted-foreground">Breakdown of revenue across different service types</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Revenue by Salon</p>
                        <p className="text-sm text-muted-foreground">Revenue generated by each salon</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Monthly Revenue Trend</p>
                        <p className="text-sm text-muted-foreground">Revenue trends over the selected period</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Transaction Report</p>
                        <p className="text-sm text-muted-foreground">Detailed breakdown of all transactions</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="salons" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Salon Reports</CardTitle>
              <CardDescription>Performance metrics for all salons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="border rounded-lg p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Salons</h3>
                  <div className="text-2xl font-bold">45</div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Active Salons</h3>
                  <div className="text-2xl font-bold">38</div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Average Rating</h3>
                  <div className="text-2xl font-bold">4.7</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Available Reports</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Salon Performance Report</p>
                        <p className="text-sm text-muted-foreground">Bookings, revenue, and ratings for each salon</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Salon Growth Report</p>
                        <p className="text-sm text-muted-foreground">Month-over-month growth for each salon</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Top Performing Salons</p>
                        <p className="text-sm text-muted-foreground">Salons with highest bookings and revenue</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Salon Ratings & Reviews</p>
                        <p className="text-sm text-muted-foreground">Detailed report on salon ratings and customer feedback</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="services" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Service Reports</CardTitle>
              <CardDescription>Analytics for service bookings and performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-medium">Available Reports</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Popular Services</p>
                        <p className="text-sm text-muted-foreground">Most booked services across all salons</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Service Category Analysis</p>
                        <p className="text-sm text-muted-foreground">Bookings and revenue by service category</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Service Pricing Analysis</p>
                        <p className="text-sm text-muted-foreground">Price comparison across salons for similar services</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Seasonal Service Trends</p>
                        <p className="text-sm text-muted-foreground">Service popularity by season and month</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Reports</CardTitle>
              <CardDescription>User demographics and behavior analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="border rounded-lg p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Users</h3>
                  <div className="text-2xl font-bold">12,584</div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Active Users</h3>
                  <div className="text-2xl font-bold">8,942</div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">New Users (30d)</h3>
                  <div className="text-2xl font-bold">1,245</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Available Reports</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Customer Demographics</p>
                        <p className="text-sm text-muted-foreground">Age, location, and other demographic data</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Customer Acquisition</p>
                        <p className="text-sm text-muted-foreground">New user signups and acquisition channels</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Customer Retention</p>
                        <p className="text-sm text-muted-foreground">Repeat booking rates and customer loyalty</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Customer Spending</p>
                        <p className="text-sm text-muted-foreground">Average spending per user and frequency</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 