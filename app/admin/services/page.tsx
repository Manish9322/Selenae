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
import { 
  Clock,
  DollarSign,
  Edit, 
  Eye, 
  Filter, 
  MoreHorizontal, 
  Plus, 
  Search, 
  Scissors, 
  Tag,
  Trash
} from "lucide-react"

export const metadata = {
  title: "Services Management | Selenae Admin",
}

export default function ServicesPage() {
  // Sample service categories for the UI
  const categories = [
    { id: 1, name: "Hair", count: 24 },
    { id: 2, name: "Nails", count: 18 },
    { id: 3, name: "Skin Care", count: 15 },
    { id: 4, name: "Massage", count: 12 },
    { id: 5, name: "Makeup", count: 10 },
    { id: 6, name: "Waxing", count: 8 },
  ]

  // Sample services data for the UI
  const services = [
    {
      id: 1,
      name: "Women's Haircut & Styling",
      category: "Hair",
      price: "$45 - $80",
      duration: "60 min",
      salons: 28,
      bookings: 456,
      featured: true,
    },
    {
      id: 2,
      name: "Manicure & Pedicure",
      category: "Nails",
      price: "$65 - $90",
      duration: "90 min",
      salons: 34,
      bookings: 523,
      featured: true,
    },
    {
      id: 3,
      name: "Facial Treatment",
      category: "Skin Care",
      price: "$75 - $120",
      duration: "60 min",
      salons: 24,
      bookings: 312,
      featured: true,
    },
    {
      id: 4,
      name: "Swedish Massage",
      category: "Massage",
      price: "$80 - $110",
      duration: "60 min",
      salons: 18,
      bookings: 285,
      featured: false,
    },
    {
      id: 5,
      name: "Bridal Makeup",
      category: "Makeup",
      price: "$120 - $200",
      duration: "90 min",
      salons: 15,
      bookings: 127,
      featured: false,
    },
    {
      id: 6,
      name: "Men's Haircut",
      category: "Hair",
      price: "$30 - $50",
      duration: "30 min",
      salons: 26,
      bookings: 384,
      featured: true,
    },
    {
      id: 7,
      name: "Full Body Waxing",
      category: "Waxing",
      price: "$120 - $180",
      duration: "120 min",
      salons: 12,
      bookings: 98,
      featured: false,
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Services Management</h1>
        <Button size="sm" className="flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Add New Service
        </Button>
      </div>
      
      <div className="grid gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Service Categories</CardTitle>
            <CardDescription>
              Manage service types offered across salons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div 
                  key={category.id} 
                  className="flex items-center justify-between p-2 rounded-md hover:bg-muted"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>{category.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{category.count} services</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Category
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Featured Services</CardTitle>
            <CardDescription>
              Services highlighted on the homepage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {services
                .filter(service => service.featured)
                .map((service) => (
                  <div 
                    key={service.id} 
                    className="flex items-center justify-between p-2 rounded-md border"
                  >
                    <div>
                      <p className="font-medium">{service.name}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Tag className="h-3 w-3 mr-1" />
                          {service.category}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="h-3 w-3 mr-1" />
                          {service.price.split(" - ")[0]}+
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <Button variant="outline" className="w-full">
                Manage Featured Services
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Service Statistics</CardTitle>
            <CardDescription>
              Overview of service performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Services</span>
                <span className="font-bold">87</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Top Category</span>
                <span className="font-bold">Hair (24)</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Most Booked</span>
                <span className="font-bold">Manicure & Pedicure</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Average Price</span>
                <span className="font-bold">$78.50</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Average Duration</span>
                <span className="font-bold">65 minutes</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <Button variant="outline" className="w-full">
                View Detailed Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Services</CardTitle>
          <CardDescription>
            Manage beauty and wellness services offered on the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search services..." 
                className="pl-8" 
              />
            </div>
            
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <select className="px-2 py-1 border rounded-md text-sm">
                <option>All Categories</option>
                {categories.map(cat => (
                  <option key={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price Range</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead className="text-right">Salons</TableHead>
                  <TableHead className="text-right">Bookings</TableHead>
                  <TableHead className="text-right">Featured</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Scissors className="h-4 w-4 text-muted-foreground" />
                        <span>{service.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {service.category}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span>{service.price}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{service.duration}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{service.salons}</TableCell>
                    <TableCell className="text-right">{service.bookings}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end">
                        {service.featured ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Yes
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            No
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-1">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Showing <strong>7</strong> of <strong>87</strong> services
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
        </CardContent>
      </Card>
    </div>
  )
} 