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
  BarChart,
  DollarSign, 
  Edit, 
  Eye, 
  Filter, 
  ImageIcon, 
  MoreHorizontal, 
  Package, 
  Plus, 
  Search, 
  ShoppingBag, 
  Tag
} from "lucide-react"

export const metadata = {
  title: "Products Management | GlowVita Admin",
}

export default function ProductsPage() {
  // Sample product categories for the UI
  const categories = [
    { id: 1, name: "Skin Care", count: 32 },
    { id: 2, name: "Hair Care", count: 28 },
    { id: 3, name: "Makeup", count: 24 },
    { id: 4, name: "Nail Care", count: 16 },
    { id: 5, name: "Bath & Body", count: 20 },
    { id: 6, name: "Fragrances", count: 12 },
  ]

  // Sample products data for the UI
  const products = [
    {
      id: 1,
      name: "Hydrating Facial Serum",
      image: "/product-placeholder.jpg",
      category: "Skin Care",
      price: "$48.00",
      stock: 145,
      sales: 368,
      rating: 4.8,
      featured: true,
    },
    {
      id: 2,
      name: "Volumizing Shampoo",
      image: "/product-placeholder.jpg",
      category: "Hair Care",
      price: "$26.50",
      stock: 237,
      sales: 524,
      rating: 4.6,
      featured: true,
    },
    {
      id: 3,
      name: "Matte Lipstick Collection",
      image: "/product-placeholder.jpg",
      category: "Makeup",
      price: "$32.00",
      stock: 98,
      sales: 412,
      rating: 4.7,
      featured: true,
    },
    {
      id: 4,
      name: "Strengthening Nail Polish",
      image: "/product-placeholder.jpg",
      category: "Nail Care",
      price: "$18.99",
      stock: 176,
      sales: 283,
      rating: 4.5,
      featured: false,
    },
    {
      id: 5,
      name: "Exfoliating Body Scrub",
      image: "/product-placeholder.jpg",
      category: "Bath & Body",
      price: "$34.50",
      stock: 124,
      sales: 295,
      rating: 4.4,
      featured: true,
    },
    {
      id: 6,
      name: "Natural Rose Perfume",
      image: "/product-placeholder.jpg",
      category: "Fragrances",
      price: "$85.00",
      stock: 67,
      sales: 158,
      rating: 4.9,
      featured: false,
    },
    {
      id: 7,
      name: "Anti-Aging Night Cream",
      image: "/product-placeholder.jpg",
      category: "Skin Care",
      price: "$58.00",
      stock: 93,
      sales: 276,
      rating: 4.7,
      featured: false,
    },
    {
      id: 8,
      name: "Hair Repair Mask",
      image: "/product-placeholder.jpg",
      category: "Hair Care",
      price: "$42.99",
      stock: 115,
      sales: 347,
      rating: 4.8,
      featured: false,
    },
  ]

  // Top selling products
  const topSelling = products.sort((a, b) => b.sales - a.sales).slice(0, 5)

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Products Management</h1>
        <Button size="sm" className="flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Add New Product
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Products</p>
                <p className="text-2xl font-bold">532</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <Package className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Sales</p>
                <p className="text-2xl font-bold">8,942</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <ShoppingBag className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold">$258,320</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average Rating</p>
                <p className="text-2xl font-bold">4.6/5</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <BarChart className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Top Selling Products</CardTitle>
            <CardDescription>
              Most popular products based on sales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topSelling.map((product, i) => (
                <div 
                  key={product.id} 
                  className="flex items-center p-2 border rounded-md"
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-medium">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Tag className="h-3 w-3 mr-1" />
                        <span>{product.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{product.sales} sold</p>
                    <p className="text-muted-foreground">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <Button variant="outline" className="w-full">
                View All Products
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Product Categories</CardTitle>
            <CardDescription>
              Browse products by category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category) => (
                <div 
                  key={category.id} 
                  className="p-3 border rounded-md hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer"
                >
                  <p className="font-medium">{category.name}</p>
                  <p className="text-sm text-muted-foreground">{category.count} products</p>
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
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Products</CardTitle>
          <CardDescription>
            Manage your beauty and wellness products inventory
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search products..." 
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
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Stock</TableHead>
                  <TableHead className="text-right">Sales</TableHead>
                  <TableHead className="text-right">Rating</TableHead>
                  <TableHead className="text-right">Featured</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                          <ImageIcon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <span>{product.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {product.category}
                      </span>
                    </TableCell>
                    <TableCell className="font-medium">{product.price}</TableCell>
                    <TableCell className="text-right">
                      <span className={`${product.stock < 100 ? 'text-amber-600' : ''}`}>
                        {product.stock}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">{product.sales}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end">
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">★</span>
                          <span>{product.rating}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end">
                        {product.featured ? (
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
              Showing <strong>8</strong> of <strong>532</strong> products
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