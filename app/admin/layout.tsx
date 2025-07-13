import { Metadata } from "next"
import Link from "next/link"
import { 
  LayoutDashboard, 
  Store, 
  Users, 
  Scissors, 
  ShoppingBag, 
  Calendar, 
  BarChart, 
  Settings, 
  LogOut 
} from "lucide-react"

export const metadata: Metadata = {
  title: "GlowVita Admin",
  description: "Admin panel for GlowVita Beauty & Wellness Platform",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full overflow-auto">
        <div className="p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-pink-700">GlowVita</span>
            <span className="ml-2 text-sm bg-pink-100 text-pink-700 px-2 py-0.5 rounded">Admin</span>
          </Link>
        </div>
        <nav className="p-4 space-y-1">
          <Link href="/admin/dashboard" className="flex items-center py-3 px-4 rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-700 group transition-colors">
            <LayoutDashboard className="h-5 w-5 mr-3 text-gray-500 group-hover:text-pink-700" />
            <span>Dashboard</span>
          </Link>
          <Link href="/admin/salons" className="flex items-center py-3 px-4 rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-700 group transition-colors">
            <Store className="h-5 w-5 mr-3 text-gray-500 group-hover:text-pink-700" />
            <span>Salons</span>
          </Link>
          <Link href="/admin/users" className="flex items-center py-3 px-4 rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-700 group transition-colors">
            <Users className="h-5 w-5 mr-3 text-gray-500 group-hover:text-pink-700" />
            <span>Users</span>
          </Link>
          <Link href="/admin/services" className="flex items-center py-3 px-4 rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-700 group transition-colors">
            <Scissors className="h-5 w-5 mr-3 text-gray-500 group-hover:text-pink-700" />
            <span>Services</span>
          </Link>
          <Link href="/admin/products" className="flex items-center py-3 px-4 rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-700 group transition-colors">
            <ShoppingBag className="h-5 w-5 mr-3 text-gray-500 group-hover:text-pink-700" />
            <span>Products</span>
          </Link>
          <Link href="/admin/bookings" className="flex items-center py-3 px-4 rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-700 group transition-colors">
            <Calendar className="h-5 w-5 mr-3 text-gray-500 group-hover:text-pink-700" />
            <span>Bookings</span>
          </Link>
          <Link href="/admin/reports" className="flex items-center py-3 px-4 rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-700 group transition-colors">
            <BarChart className="h-5 w-5 mr-3 text-gray-500 group-hover:text-pink-700" />
            <span>Reports</span>
          </Link>
          <Link href="/admin/settings" className="flex items-center py-3 px-4 rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-700 group transition-colors">
            <Settings className="h-5 w-5 mr-3 text-gray-500 group-hover:text-pink-700" />
            <span>Settings</span>
          </Link>
          
          <div className="pt-4 mt-4 border-t border-gray-200">
            <Link href="/" className="flex items-center py-3 px-4 rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-700 group transition-colors">
              <LogOut className="h-5 w-5 mr-3 text-gray-500 group-hover:text-pink-700" />
              <span>Return to Website</span>
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-6 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  )
} 