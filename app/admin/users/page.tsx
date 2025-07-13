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
  Ban, 
  CheckCircle2, 
  Eye, 
  Filter, 
  MoreHorizontal, 
  Pencil, 
  Plus, 
  Search, 
  Users2
} from "lucide-react"

export const metadata = {
  title: "User Management | Selenae Admin",
}

export default function UsersPage() {
  // Sample user data for the UI
  const users = [
    {
      id: 1,
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      role: "customer",
      status: "active",
      joinDate: "Jan 15, 2023",
      lastActive: "2 hours ago",
      bookings: 12,
    },
    {
      id: 2,
      name: "Marcus Johnson",
      email: "marcus.j@example.com",
      role: "salon_owner",
      status: "active",
      joinDate: "Mar 3, 2023",
      lastActive: "1 day ago",
      bookings: 0,
    },
    {
      id: 3,
      name: "Olivia Martinez",
      email: "olivia.m@example.com",
      role: "customer",
      status: "active",
      joinDate: "Feb 21, 2023",
      lastActive: "Just now",
      bookings: 8,
    },
    {
      id: 4,
      name: "Alexander Lee",
      email: "alex.lee@example.com",
      role: "stylist",
      status: "active",
      joinDate: "Dec 12, 2022",
      lastActive: "3 days ago",
      bookings: 0,
    },
    {
      id: 5,
      name: "Sophia Brown",
      email: "sophia.b@example.com",
      role: "customer",
      status: "inactive",
      joinDate: "Apr 5, 2023",
      lastActive: "1 month ago",
      bookings: 1,
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Button size="sm" className="flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Add New User
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>User Overview</CardTitle>
          <CardDescription>
            Manage and monitor all users registered on the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4 mb-6">
            <div className="p-4 border rounded-lg flex items-center">
              <div className="mr-4 bg-blue-100 p-3 rounded-full">
                <Users2 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">2,584</p>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg flex items-center">
              <div className="mr-4 bg-pink-100 p-3 rounded-full">
                <Users2 className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Customers</p>
                <p className="text-2xl font-bold">2,245</p>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg flex items-center">
              <div className="mr-4 bg-purple-100 p-3 rounded-full">
                <Users2 className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Salon Owners</p>
                <p className="text-2xl font-bold">128</p>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg flex items-center">
              <div className="mr-4 bg-yellow-100 p-3 rounded-full">
                <Users2 className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stylists</p>
                <p className="text-2xl font-bold">211</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search users by name or email..." 
                className="pl-8" 
              />
            </div>
            
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <select className="px-2 py-1 border rounded-md text-sm">
                <option>All Roles</option>
                <option>Customers</option>
                <option>Salon Owners</option>
                <option>Stylists</option>
                <option>Admins</option>
              </select>
            </div>
          </div>

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="text-right">Bookings</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.role === 'customer' 
                          ? 'bg-blue-100 text-blue-800'
                          : user.role === 'salon_owner'
                            ? 'bg-purple-100 text-purple-800'
                            : user.role === 'stylist'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                      }`}>
                        {user.role === 'salon_owner' 
                          ? 'Salon Owner' 
                          : user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === 'active' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${
                          user.status === 'active' ? 'bg-green-600' : 'bg-gray-600'
                        } mr-1.5`}></span>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>{user.joinDate}</TableCell>
                    <TableCell>{user.lastActive}</TableCell>
                    <TableCell className="text-right">{user.bookings}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-1">
                        <Button variant="ghost" size="icon" title="View User">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Edit User">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        {user.status === 'active' ? (
                          <Button variant="ghost" size="icon" title="Deactivate User">
                            <Ban className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button variant="ghost" size="icon" title="Activate User">
                            <CheckCircle2 className="h-4 w-4" />
                          </Button>
                        )}
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
              Showing <strong>5</strong> of <strong>2,584</strong> users
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