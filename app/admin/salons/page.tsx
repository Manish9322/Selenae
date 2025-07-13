import Link from "next/link"
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
  AlertTriangle, 
  CheckCircle, 
  Edit, 
  MoreHorizontal, 
  Plus, 
  Search, 
  Star, 
  Trash2, 
  XCircle 
} from "lucide-react"

export const metadata = {
  title: "Salon Management | GlowVita Admin",
}

export default function SalonsPage() {
  // Sample salon data for the UI
  const salons = [
    {
      id: 1,
      name: "Premier Spa & Salon",
      location: "New York, NY",
      owner: "Sarah Johnson",
      status: "active",
      rating: 4.8,
      bookings: 245,
      created: "Jan 15, 2023",
    },
    {
      id: 2,
      name: "Elegant Nails & Beauty",
      location: "Los Angeles, CA",
      owner: "Michael Chen",
      status: "active",
      rating: 4.6,
      bookings: 188,
      created: "Feb 3, 2023",
    },
    {
      id: 3,
      name: "Golden Glow Wellness",
      location: "Chicago, IL",
      owner: "Jessica Smith",
      status: "pending",
      rating: 0,
      bookings: 0,
      created: "Mar 21, 2023",
    },
    {
      id: 4,
      name: "Beauty Hub Central",
      location: "Miami, FL",
      owner: "David Rodriguez",
      status: "active",
      rating: 4.2,
      bookings: 134,
      created: "Dec 5, 2022",
    },
    {
      id: 5,
      name: "Skin Perfection Center",
      location: "Seattle, WA",
      owner: "Amanda Taylor",
      status: "inactive",
      rating: 3.9,
      bookings: 78,
      created: "Apr 18, 2023",
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Salon Management</h1>
        <Button size="sm" className="flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Add New Salon
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Salon Overview</CardTitle>
          <CardDescription>
            Manage and monitor all registered salons in the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4 mb-6">
            <div className="p-4 border rounded-lg flex items-center">
              <div className="mr-4 bg-blue-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Salons</p>
                <p className="text-2xl font-bold">32</p>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg flex items-center">
              <div className="mr-4 bg-yellow-100 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Approval</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg flex items-center">
              <div className="mr-4 bg-red-100 p-3 rounded-full">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Inactive Salons</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg flex items-center">
              <div className="mr-4 bg-purple-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
                <p className="text-2xl font-bold">4.5</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search salons..." 
                className="pl-8" 
              />
            </div>
            
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm">
                Export
              </Button>
              <select className="px-2 py-1 border rounded-md text-sm">
                <option>All Statuses</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Salon Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Rating</TableHead>
                  <TableHead className="text-right">Bookings</TableHead>
                  <TableHead className="text-right">Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {salons.map((salon) => (
                  <TableRow key={salon.id}>
                    <TableCell className="font-medium">
                      <Link href={`/admin/salons/${salon.id}`} className="hover:underline">
                        {salon.name}
                      </Link>
                    </TableCell>
                    <TableCell>{salon.location}</TableCell>
                    <TableCell>{salon.owner}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        salon.status === 'active' 
                          ? 'bg-green-100 text-green-800'
                          : salon.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                      }`}>
                        {salon.status.charAt(0).toUpperCase() + salon.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {salon.rating > 0 ? (
                        <div className="flex items-center justify-end">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span>{salon.rating}</span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-sm">N/A</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">{salon.bookings}</TableCell>
                    <TableCell className="text-right">{salon.created}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-1">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
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
              Showing <strong>5</strong> of <strong>45</strong> salons
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