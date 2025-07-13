import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Calendar,
  CheckCircle, 
  Clock, 
  Download, 
  Filter, 
  MoreHorizontal, 
  Search, 
  Scissors, 
  Store, 
  User, 
  XCircle 
} from "lucide-react"

export const metadata = {
  title: "Bookings Management | GlowVita Admin",
}

export default function BookingsPage() {
  // Sample booking data for the UI
  const bookings = [
    {
      id: "B10045",
      customer: "Sarah Johnson",
      salon: "Premier Spa & Salon",
      service: "Hair Styling",
      date: "Apr 10, 2023",
      time: "2:30 PM",
      duration: "60 min",
      status: "completed",
      amount: "$85.00",
    },
    {
      id: "B10044",
      customer: "Michael Chen",
      salon: "Elegant Nails & Beauty",
      service: "Manicure & Pedicure",
      date: "Apr 10, 2023",
      time: "1:00 PM",
      duration: "90 min",
      status: "completed",
      amount: "$120.00",
    },
    {
      id: "B10043",
      customer: "Emily Rodriguez",
      salon: "Beauty Hub Central",
      service: "Facial Treatment",
      date: "Apr 10, 2023",
      time: "10:30 AM",
      duration: "45 min",
      status: "cancelled",
      amount: "$65.00",
    },
    {
      id: "B10042",
      customer: "David Wilson",
      salon: "Golden Glow Wellness",
      service: "Massage Therapy",
      date: "Apr 9, 2023",
      time: "4:15 PM",
      duration: "60 min",
      status: "completed",
      amount: "$95.00",
    },
    {
      id: "B10041",
      customer: "Jennifer Lee",
      salon: "Skin Perfection Center",
      service: "Advanced Skincare",
      date: "Apr 9, 2023",
      time: "11:00 AM",
      duration: "75 min",
      status: "no-show",
      amount: "$110.00",
    },
    {
      id: "B10040",
      customer: "Robert Smith",
      salon: "Premier Spa & Salon",
      service: "Men's Haircut",
      date: "Apr 8, 2023",
      time: "3:30 PM",
      duration: "30 min",
      status: "completed",
      amount: "$45.00",
    },
  ]

  // Upcoming bookings
  const upcomingBookings = [
    {
      id: "B10046",
      customer: "Jessica Brown",
      salon: "Beauty Hub Central",
      service: "Hair Coloring",
      date: "Apr 11, 2023",
      time: "10:00 AM",
      duration: "120 min",
      status: "confirmed",
      amount: "$150.00",
    },
    {
      id: "B10047",
      customer: "Thomas Anderson",
      salon: "Premier Spa & Salon",
      service: "Beard Trim",
      date: "Apr 11, 2023",
      time: "11:30 AM",
      duration: "20 min",
      status: "confirmed",
      amount: "$25.00",
    },
    {
      id: "B10048",
      customer: "Lisa Martin",
      salon: "Skin Perfection Center",
      service: "Facial Treatment",
      date: "Apr 11, 2023",
      time: "2:00 PM",
      duration: "45 min",
      status: "confirmed",
      amount: "$65.00",
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Bookings Management</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            Calendar View
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Today's Bookings</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold">842</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Cancelled</p>
                <p className="text-2xl font-bold">64</p>
              </div>
              <div className="p-3 bg-red-100 rounded-full">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average Duration</p>
                <p className="text-2xl font-bold">52 min</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle>Booking History</CardTitle>
          <CardDescription>
            View and manage all bookings across the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Bookings</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center my-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search bookings..." 
                  className="pl-8" 
                />
              </div>
              
              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Input
                  type="date"
                  className="w-auto text-sm"
                />
              </div>
            </div>
            
            <TabsContent value="all">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Salon</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[...upcomingBookings, ...bookings].map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.customer}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Store className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.salon}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Scissors className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.service}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {booking.date} <br />
                          <span className="text-sm text-muted-foreground">{booking.time}</span>
                        </TableCell>
                        <TableCell>{booking.duration}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            booking.status === 'completed' 
                              ? 'bg-green-100 text-green-800'
                              : booking.status === 'confirmed'
                                ? 'bg-blue-100 text-blue-800'
                                : booking.status === 'cancelled'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-gray-100 text-gray-800'
                          }`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className="text-right font-medium">{booking.amount}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-muted-foreground">
                  Showing <strong>9</strong> of <strong>945</strong> bookings
                </p>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="upcoming">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Salon</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.customer}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Store className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.salon}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Scissors className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.service}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {booking.date} <br />
                          <span className="text-sm text-muted-foreground">{booking.time}</span>
                        </TableCell>
                        <TableCell>{booking.duration}</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Confirmed
                          </span>
                        </TableCell>
                        <TableCell className="text-right font-medium">{booking.amount}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="completed">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Salon</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.filter(b => b.status === 'completed').map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.customer}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Store className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.salon}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Scissors className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.service}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {booking.date} <br />
                          <span className="text-sm text-muted-foreground">{booking.time}</span>
                        </TableCell>
                        <TableCell>{booking.duration}</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Completed
                          </span>
                        </TableCell>
                        <TableCell className="text-right font-medium">{booking.amount}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="cancelled">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Salon</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.filter(b => b.status === 'cancelled' || b.status === 'no-show').map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.customer}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Store className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.salon}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Scissors className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.service}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {booking.date} <br />
                          <span className="text-sm text-muted-foreground">{booking.time}</span>
                        </TableCell>
                        <TableCell>{booking.duration}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            booking.status === 'cancelled' 
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {booking.status === 'no-show' ? 'No Show' : 'Cancelled'}
                          </span>
                        </TableCell>
                        <TableCell className="text-right font-medium">{booking.amount}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
} 