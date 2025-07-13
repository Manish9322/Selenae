import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ArrowUpRight, 
  BarChart3,
  Calendar, 
  CreditCard, 
  DollarSign, 
  Users,
  TrendingUp,
  Clock,
  Star,
  ChevronRight,
  ArrowDownRight
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Admin Dashboard | Selenae",
}

export default function DashboardPage() {
  // Sample data for visualization
  const weeklyData = [
    { day: "Mon", bookings: 22 },
    { day: "Tue", bookings: 18 },
    { day: "Wed", bookings: 25 },
    { day: "Thu", bookings: 32 },
    { day: "Fri", bookings: 38 },
    { day: "Sat", bookings: 42 },
    { day: "Sun", bookings: 35 },
  ]
  
  const maxBookings = Math.max(...weeklyData.map(day => day.bookings))
  
  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome to Selenae Dashboard</h1>
            <p className="text-white/80 max-w-2xl">Get a quick overview of your business performance, bookings, and customer activity. Here's what's happening today.</p>
          </div>
          <div className="flex gap-3 mt-2 md:mt-0">
            <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg backdrop-blur-sm transition-colors">
              View Reports
            </button>
            <button className="bg-white hover:bg-white/90 text-pink-600 px-4 py-2 rounded-lg font-medium transition-colors">
              New Booking
            </button>
          </div>
        </div>
      </div>
    
      {/* Stats Grid */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all">
          <div className="h-1 w-full bg-gradient-to-r from-pink-500 to-pink-400"></div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <p className="text-3xl font-bold text-pink-600">$12,456</p>
                <p className="text-xs text-green-500 flex items-center mt-1 font-medium">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  12% from last month
                </p>
              </div>
              <div className="p-3 bg-pink-100 text-pink-600 rounded-full">
                <DollarSign className="h-7 w-7" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all">
          <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                <p className="text-3xl font-bold text-purple-600">2,345</p>
                <p className="text-xs text-green-500 flex items-center mt-1 font-medium">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  8% from last month
                </p>
              </div>
              <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
                <Users className="h-7 w-7" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all">
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-blue-400"></div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">New Bookings</p>
                <p className="text-3xl font-bold text-blue-600">342</p>
                <p className="text-xs text-green-500 flex items-center mt-1 font-medium">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  5% from last month
                </p>
              </div>
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                <Calendar className="h-7 w-7" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all">
          <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Transactions</p>
                <p className="text-3xl font-bold text-emerald-600">546</p>
                <p className="text-xs text-red-500 flex items-center mt-1 font-medium">
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  3% from yesterday
                </p>
              </div>
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full">
                <CreditCard className="h-7 w-7" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Visualization Section */}
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        <Card className="md:col-span-2 border-0 shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Booking Trends</CardTitle>
                <CardDescription>Weekly overview of bookings</CardDescription>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-blue-500">+18%</span>
                <span>vs last week</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="pt-4 h-[250px] flex items-end justify-between gap-2">
              {weeklyData.map((day) => (
                <div key={day.day} className="flex flex-col items-center gap-2 w-full">
                  <div 
                    className="w-full max-w-[40px] bg-gradient-to-t from-blue-400 to-blue-600 rounded-t-md"
                    style={{ 
                      height: `${(day.bookings / maxBookings) * 180}px`,
                    }}
                  ></div>
                  <span className="text-xs font-medium">{day.day}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle>Activity Feed</CardTitle>
            <CardDescription>Recent platform activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ActivityItem 
                icon={<Users className="h-4 w-4 text-purple-500" />}
                title="New customer sign-up"
                description="Sarah Johnson just created an account"
                time="2 minutes ago"
                highlight
              />
              <ActivityItem 
                icon={<Calendar className="h-4 w-4 text-blue-500" />}
                title="New booking received"
                description="Manicure & Pedicure at Elegant Nails"
                time="15 minutes ago"
              />
              <ActivityItem 
                icon={<Star className="h-4 w-4 text-amber-500" />}
                title="New review received"
                description="5-star review for Golden Glow salon"
                time="42 minutes ago"
              />
              <ActivityItem 
                icon={<CreditCard className="h-4 w-4 text-emerald-500" />}
                title="Payment received"
                description="$89 for Facial Treatment"
                time="1 hour ago"
              />
              <ActivityItem 
                icon={<Clock className="h-4 w-4 text-pink-500" />}
                title="Appointment rescheduled"
                description="Hair styling moved to tomorrow"
                time="2 hours ago"
              />
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Tabs Content */}
      <Tabs defaultValue="overview" className="space-y-5">
        <TabsList className="bg-gray-100/50 p-1 dark:bg-gray-800/50">
          <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-pink-600 data-[state=active]:shadow-sm">
            Overview
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-white data-[state=active]:text-pink-600 data-[state=active]:shadow-sm">
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" className="data-[state=active]:bg-white data-[state=active]:text-pink-600 data-[state=active]:shadow-sm">
            Reports
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-5 mt-6">
          {/* Recent Bookings Section */}
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Bookings</CardTitle>
                  <CardDescription>Latest service appointments</CardDescription>
                </div>
                <Link 
                  href="/admin/bookings" 
                  className="text-sm text-pink-600 hover:text-pink-700 flex items-center font-medium"
                >
                  View All
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <BookingRow
                      id="B1001"
                      service="Spa Treatment - Premier Salon"
                      customer="Emma Thompson"
                      avatar="/placeholders/avatar1.jpg"
                      datetime="Today, 2:30 PM"
                      amount="$120.00"
                      status="confirmed"
                    />
                    <BookingRow
                      id="B1002"
                      service="Hair Coloring - Beauty Hub"
                      customer="Michael Johnson"
                      avatar="/placeholders/avatar2.jpg"
                      datetime="Today, 4:00 PM"
                      amount="$95.00"
                      status="pending"
                    />
                    <BookingRow
                      id="B1003"
                      service="Manicure - Elegant Nails"
                      customer="Sophia Williams"
                      avatar="/placeholders/avatar3.jpg"
                      datetime="Tomorrow, 10:15 AM"
                      amount="$45.00"
                      status="confirmed"
                    />
                    <BookingRow
                      id="B1004"
                      service="Facial Treatment - Skin Perfection"
                      customer="David Miller"
                      avatar="/placeholders/avatar4.jpg"
                      datetime="Tomorrow, 1:00 PM"
                      amount="$75.00"
                      status="confirmed"
                    />
                    <BookingRow
                      id="B1005"
                      service="Massage Therapy - Golden Glow"
                      customer="Isabella Garcia"
                      avatar="/placeholders/avatar5.jpg"
                      datetime="Jan 18, 11:30 AM"
                      amount="$110.00"
                      status="cancelled"
                    />
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          {/* Salon & Service Stats */}
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Top Performing Salons</CardTitle>
                    <CardDescription>Based on bookings this month</CardDescription>
                  </div>
                  <span className="text-xs px-2 py-1 bg-pink-100 text-pink-600 rounded-full font-medium">
                    January 2023
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  {[
                    { name: "Premier Salon", bookings: 105, rating: 4.9, growth: "+12%" },
                    { name: "Elegant Nails", bookings: 93, rating: 4.8, growth: "+8%" },
                    { name: "Golden Glow", bookings: 81, rating: 4.7, growth: "+15%" },
                    { name: "Beauty Hub", bookings: 72, rating: 4.6, growth: "+5%" },
                    { name: "Skin Perfection", bookings: 65, rating: 4.8, growth: "+10%" }
                  ].map((salon, i) => (
                    <div key={salon.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center font-medium text-white text-sm">
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-medium">{salon.name}</div>
                          <div className="flex items-center text-amber-500 text-xs">
                            <Star className="h-3 w-3 fill-current mr-1" /> 
                            {salon.rating}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{salon.bookings} bookings</div>
                        <div className="text-xs text-green-500">{salon.growth}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Popular Services</CardTitle>
                    <CardDescription>Most booked services this month</CardDescription>
                  </div>
                  <Link 
                    href="/admin/services" 
                    className="text-sm text-pink-600 hover:text-pink-700 flex items-center font-medium"
                  >
                    Manage
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  {[
                    { name: "Manicure & Pedicure", bookings: 180, price: "$45-120", growth: "+15%" },
                    { name: "Facial Treatment", bookings: 165, price: "$75-150", growth: "+8%" },
                    { name: "Hair Styling", bookings: 150, price: "$60-200", growth: "+12%" },
                    { name: "Massage Therapy", bookings: 135, price: "$85-180", growth: "+10%" },
                    { name: "Waxing", bookings: 120, price: "$30-90", growth: "+5%" }
                  ].map((service, i) => (
                    <div key={service.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center font-medium text-white text-sm">
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-medium">{service.name}</div>
                          <div className="text-xs text-muted-foreground">{service.price}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{service.bookings}</div>
                        <div className="text-xs text-green-500">{service.growth}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="space-y-4">
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Revenue Analytics</CardTitle>
                  <CardDescription>Monthly revenue trends and projections</CardDescription>
                </div>
                <div className="flex gap-2">
                  <select className="text-sm border rounded-md px-2 py-1">
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                    <option>Last 12 months</option>
                    <option>Year to date</option>
                  </select>
                  <button className="bg-gray-100 p-1 rounded-md hover:bg-gray-200">
                    <BarChart3 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="h-96 flex flex-col items-center justify-center p-10 gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <p className="text-lg font-medium text-center">Comprehensive analytics dashboard coming soon</p>
              <p className="text-muted-foreground text-center max-w-md">
                Our team is working on building powerful visualization tools to help you better understand your business performance.
              </p>
              <button className="mt-2 px-4 py-2 bg-pink-600 text-white rounded-md text-sm font-medium hover:bg-pink-700">
                Request Early Access
              </button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-4">
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Business Reports</CardTitle>
                  <CardDescription>Generate and download essential reports</CardDescription>
                </div>
                <button className="px-3 py-1.5 bg-pink-100 text-pink-600 text-sm rounded-md font-medium hover:bg-pink-200">
                  Schedule Reports
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ReportCard
                  title="Monthly Sales & Revenue"
                  description="Comprehensive analysis of revenue, bookings, and user acquisition"
                  icon={<DollarSign className="h-5 w-5" />}
                  lastGenerated="Jan 5, 2023"
                />
                
                <ReportCard
                  title="Salon Performance Analysis"
                  description="Detailed metrics on salon bookings, ratings, and customer satisfaction"
                  icon={<Star className="h-5 w-5" />}
                  lastGenerated="Jan 3, 2023"
                />
                
                <ReportCard
                  title="Service Popularity & Pricing"
                  description="Analysis of most popular services, pricing strategies, and trends"
                  icon={<TrendingUp className="h-5 w-5" />}
                  lastGenerated="Dec 28, 2022"
                />

                <ReportCard
                  title="Customer Demographics"
                  description="User profiles, booking patterns, and loyalty metrics"
                  icon={<Users className="h-5 w-5" />}
                  lastGenerated="Never"
                  isNew
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Component interfaces
interface ActivityItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  highlight?: boolean;
}

interface BookingRowProps {
  id: string;
  service: string;
  customer: string;
  avatar: string;
  datetime: string;
  amount: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

interface ReportCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  lastGenerated: string;
  isNew?: boolean;
}

// Component for Activity Feed Items
function ActivityItem({ icon, title, description, time, highlight = false }: ActivityItemProps) {
  return (
    <div className={`flex gap-3 ${highlight ? 'p-2 -mx-2 bg-pink-50/50 rounded-lg' : ''}`}>
      <div className="mt-0.5">
        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <p className="font-medium text-sm">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  )
}

// Component for Booking Rows
function BookingRow({ id, service, customer, avatar, datetime, amount, status }: BookingRowProps) {
  const statusColors = {
    confirmed: "bg-green-100 text-green-700",
    pending: "bg-amber-100 text-amber-700",
    cancelled: "bg-red-100 text-red-700"
  }
  
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
        {id}
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-sm">
        {service}
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
            {customer.charAt(0)}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">{customer}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-sm">
        {datetime}
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
        {amount}
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </td>
    </tr>
  )
}

// Component for Report Cards
function ReportCard({ title, description, icon, lastGenerated, isNew = false }: ReportCardProps) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-pink-200 hover:shadow-sm transition-all">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-medium">{title}</p>
            {isNew && <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">New</span>}
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          <p className="text-xs text-gray-500 mt-1">Last generated: {lastGenerated}</p>
        </div>
      </div>
      <button className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-md text-sm transition-colors">
        Generate
      </button>
    </div>
  )
} 