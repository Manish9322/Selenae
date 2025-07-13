import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { 
  Bell,
  Cloud, 
  CreditCard, 
  Lock, 
  Mail, 
  Save, 
  Shield, 
  User, 
} from "lucide-react"

export const metadata = {
  title: "Admin Settings | Selenae Admin",
}

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid grid-cols-5 w-full md:w-auto">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Settings</CardTitle>
              <CardDescription>
                Manage your platform's general settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="platform-name">Platform Name</Label>
                <Input 
                  id="platform-name" 
                  placeholder="Selenae Beauty & Wellness"
defaultValue="Selenae Beauty & Wellness" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="platform-description">Platform Description</Label>
                <Textarea 
                  id="platform-description" 
                  placeholder="Your platform description"
                  defaultValue="Selenae is your one-stop destination for all beauty and wellness services, connecting customers with top-rated salons and professionals."
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact-email">Contact Email</Label>
                <Input 
                  id="contact-email" 
                  type="email"
                  placeholder="contact@selenae.com"
defaultValue="contact@selenae.com" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="support-phone">Support Phone</Label>
                <Input 
                  id="support-phone" 
                  placeholder="+1 (555) 123-4567" 
                  defaultValue="+1 (555) 123-4567" 
                />
              </div>
              
              <div className="space-y-2">
                <Label>Time Zone</Label>
                <select className="w-full p-2 border rounded-md">
                  <option>UTC-8 Pacific Time (US & Canada)</option>
                  <option>UTC-5 Eastern Time (US & Canada)</option>
                  <option>UTC+0 London</option>
                  <option>UTC+1 Paris, Berlin</option>
                  <option>UTC+5:30 Mumbai, New Delhi</option>
                  <option>UTC+8 Singapore, Beijing</option>
                </select>
              </div>
              
              <div className="pt-4">
                <Button className="mr-2">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
                <Button variant="outline">Reset</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>
                Optimize your platform for search engines
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="meta-title">Meta Title</Label>
                <Input 
                  id="meta-title" 
                  placeholder="Selenae - Beauty & Wellness Booking Platform"
defaultValue="Selenae - Beauty & Wellness Booking Platform" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="meta-description">Meta Description</Label>
                <Textarea 
                  id="meta-description" 
                  placeholder="Meta description for your platform"
                  defaultValue="Book your perfect beauty and wellness experience with Selenae. Discover top-rated salons, spas, and beauty professionals near you."
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="meta-keywords">Meta Keywords</Label>
                <Input 
                  id="meta-keywords" 
                  placeholder="beauty, wellness, salon, spa, booking" 
                  defaultValue="beauty, wellness, salon, spa, booking, haircut, manicure, pedicure, facial, massage" 
                />
              </div>
              
              <div className="pt-4">
                <Button className="mr-2">
                  <Save className="h-4 w-4 mr-2" />
                  Save SEO Settings
                </Button>
                <Button variant="outline">Reset</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>
                Update your admin account details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-name">Full Name</Label>
                <Input 
                  id="admin-name" 
                  placeholder="John Doe" 
                  defaultValue="Admin User" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="admin-email">Email Address</Label>
                <Input 
                  id="admin-email" 
                  type="email"
                  placeholder="johndoe@example.com" 
                  defaultValue="admin@selenae.com" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="admin-phone">Phone Number</Label>
                <Input 
                  id="admin-phone" 
                  placeholder="+1 (555) 123-4567" 
                  defaultValue="+1 (555) 987-6543" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="admin-role">Role</Label>
                <Input 
                  id="admin-role" 
                  placeholder="Administrator" 
                  defaultValue="Super Administrator" 
                  disabled
                />
              </div>
              
              <div className="flex items-center pt-4">
                <User className="h-10 w-10 p-2 border rounded-full mr-4 text-primary" />
                <div>
                  <p className="text-sm font-medium">Profile Picture</p>
                  <div className="flex mt-2">
                    <Button size="sm" variant="outline" className="mr-2">Change</Button>
                    <Button size="sm" variant="outline" className="text-red-500">Remove</Button>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="mr-2">
                  <Save className="h-4 w-4 mr-2" />
                  Update Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>
                Manage your subscription and payment methods
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="mb-6 p-4 border rounded-md bg-primary/5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-primary" />
                    <span className="font-medium">Current Plan</span>
                  </div>
                  <span className="font-bold text-primary">Enterprise</span>
                </div>
                <p className="text-sm text-muted-foreground">Your plan renews on April 23, 2023</p>
                <div className="flex mt-3">
                  <Button size="sm" variant="outline" className="mr-2">Change Plan</Button>
                  <Button size="sm" variant="outline" className="text-red-500">Cancel Subscription</Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Payment Methods</Label>
                <div className="border rounded-md divide-y">
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-6 bg-blue-500 rounded mr-3 flex items-center justify-center text-white text-xs font-bold">VISA</div>
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 05/2025</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded-full">Primary</span>
                      <Button size="sm" variant="ghost">Edit</Button>
                    </div>
                  </div>
                  
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-6 bg-red-500 rounded mr-3 flex items-center justify-center text-white text-xs font-bold">MC</div>
                      <div>
                        <p className="font-medium">Mastercard ending in 8888</p>
                        <p className="text-sm text-muted-foreground">Expires 12/2024</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Button size="sm" variant="ghost">Make Primary</Button>
                      <Button size="sm" variant="ghost">Edit</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="mr-2">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
              </div>
              
              <div className="space-y-2 pt-6">
                <Label>Billing History</Label>
                <div className="border rounded-md divide-y">
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enterprise Plan - Monthly</p>
                      <p className="text-sm text-muted-foreground">March 23, 2023</p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-3 font-medium">$299.00</span>
                      <Button size="sm" variant="ghost">Receipt</Button>
                    </div>
                  </div>
                  
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enterprise Plan - Monthly</p>
                      <p className="text-sm text-muted-foreground">February 23, 2023</p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-3 font-medium">$299.00</span>
                      <Button size="sm" variant="ghost">Receipt</Button>
                    </div>
                  </div>
                  
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enterprise Plan - Monthly</p>
                      <p className="text-sm text-muted-foreground">January 23, 2023</p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-3 font-medium">$299.00</span>
                      <Button size="sm" variant="ghost">Receipt</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Manage your email and system notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Email Notifications</div>
                    <div className="text-sm text-muted-foreground">Receive emails about platform activities</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div className="pl-6 pt-2 space-y-2 border-l-2 border-l-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">New user registrations</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">New salon registrations</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Booking confirmations</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Canceled bookings</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Customer reviews</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Platform Notifications</div>
                    <div className="text-sm text-muted-foreground">Receive in-app notifications</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div className="pl-6 pt-2 space-y-2 border-l-2 border-l-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">System alerts</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">New bookings</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Payment notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="mr-2">
                  <Bell className="h-4 w-4 mr-2" />
                  Save Notification Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Manage your account security and password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input 
                  id="current-password" 
                  type="password"
                  placeholder="••••••••••••" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input 
                  id="new-password" 
                  type="password"
                  placeholder="••••••••••••" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input 
                  id="confirm-password" 
                  type="password"
                  placeholder="••••••••••••" 
                />
              </div>
              
              <div className="pt-4">
                <Button className="mr-2">
                  <Lock className="h-4 w-4 mr-2" />
                  Update Password
                </Button>
              </div>
              
              <div className="border-t pt-6 mt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="space-y-0.5">
                    <div className="font-medium">Two-Factor Authentication</div>
                    <div className="text-sm text-muted-foreground">Add an extra layer of security to your account</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <Button variant="outline" className="w-full">
                  <Shield className="h-4 w-4 mr-2" />
                  Setup Two-Factor Authentication
                </Button>
              </div>
              
              <div className="border-t pt-6 mt-6">
                <div className="mb-4">
                  <div className="font-medium">Login Sessions</div>
                  <div className="text-sm text-muted-foreground">Manage your active sessions</div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 border rounded-md flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Cloud className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium">Current Session</p>
                        <p className="text-xs text-muted-foreground">Windows 10 • Chrome • New York, USA</p>
                      </div>
                    </div>
                    <span className="text-xs text-green-500 bg-green-50 px-2 py-1 rounded">Active Now</span>
                  </div>
                  
                  <div className="p-3 border rounded-md flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Cloud className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Mobile App</p>
                        <p className="text-xs text-muted-foreground">iOS 16 • iPhone • New York, USA</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">3 days ago</span>
                      <Button size="sm" variant="ghost" className="h-7 text-red-500 hover:text-red-600">Revoke</Button>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  <Shield className="h-4 w-4 mr-2" />
                  Log Out All Other Sessions
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 