import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Tag, Sparkles, CalendarCheck, Gift, Star, ArrowRight, Mail } from "lucide-react"
import Image from "next/image"
import { Animated, AnimatedGroup } from "@/components/ui/animated"

export const metadata = {
  title: "Exclusive Offers | Premium Beauty Deals - GlowVita",
  description: "Discover limited-time luxury beauty offers, special packages, and exclusive deals on premium salon and spa services at GlowVita.",
}

export default function SpecialOffersPage() {
  const offers = [
    {
      id: 1,
      title: "Luxury Summer Beauty Package",
      description: "Indulge in our complete beauty experience with premium hair styling, gel manicure, and rejuvenating facial treatment with collagen mask.",
      image: "/placeholder.jpg?height=300&width=600",
      discount: "30% OFF",
      expiresIn: "14 days",
      type: "Premium Package",
      originalPrice: 199.99,
      salePrice: 139.99,
      featured: true,
      tag: "Best Value"
    },
    {
      id: 2,
      title: "New Client Welcome Experience",
      description: "Begin your GlowVita journey with a special introductory offer on any premium service of your choice.",
      image: "/placeholder.jpg?height=300&width=600",
      discount: "25% OFF",
      expiresIn: "Ongoing",
      type: "New Client Special",
      featured: false,
      tag: "Popular"
    },
    {
      id: 3,
      title: "Couples Relaxation Retreat",
      description: "Share a luxurious experience with hot stone massage for two, aromatherapy, and complimentary champagne in our premium suite.",
      image: "/placeholder.jpg?height=300&width=600",
      discount: "Save $50",
      expiresIn: "30 days",
      type: "Spa Package",
      originalPrice: 249.99,
      salePrice: 199.99,
      featured: false,
      tag: "Limited Time"
    },
    {
      id: 4,
      title: "Professional Color Transformation",
      description: "Transform your look with our expert colorists using premium ammonia-free hair color, followed by precision cut and styling.",
      image: "/placeholder.jpg?height=300&width=600",
      discount: "20% OFF",
      expiresIn: "21 days",
      type: "Salon Service",
      originalPrice: 150,
      salePrice: 120,
      featured: false,
      tag: "Trending"
    },
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-rose-50/30 dark:from-gray-900 dark:to-gray-800/30">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-100/50 dark:bg-pink-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>
      
      <div className="container relative z-10 mx-auto px-6 md:px-8 py-20 md:py-24">
        {/* Hero section */}
        <Animated animation="fade-in-up">
          <div className="mb-20 space-y-5 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium mb-4">
              <Sparkles size={16} className="text-pink-500" />
              <span>Limited-Time Exclusive Offers</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-gray-900 dark:text-white">Exclusive Beauty</span>
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Offers & Packages</span>
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-600 dark:text-gray-300 text-lg md:text-xl pt-4 leading-relaxed">
              Discover our carefully curated selection of premium beauty offers, designed to provide exceptional value while maintaining our commitment to luxury and quality.
            </p>
          </div>
        </Animated>

        {/* Featured offer section */}
        <Animated animation="fade-in-up" delay={0.1} className="mb-24">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {/* Main background with enhanced gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-rose-600 to-purple-700 opacity-95"></div>
            
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-[url('/images/texture-light.png')] bg-cover opacity-10 mix-blend-overlay"></div>
            
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-purple-700/20 animate-gradient-shift"></div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
            
            <div className="relative z-10 px-8 py-12 md:p-16">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                <div className="space-y-6">
                  <Badge className="bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full">
                    <div className="flex items-center gap-2">
                      <Star className="h-3.5 w-3.5 text-amber-300 fill-amber-300" />
                      <span>Featured Offer</span>
                    </div>
                  </Badge>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    New Client <span className="relative">
                      <span className="relative z-10">Welcome Package</span>
                      <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-70"></span>
                    </span>
                  </h2>
                  
                  <p className="text-xl text-white/90 leading-relaxed">
                    Begin your journey to radiance with 40% off your first premium service package when you book any combination of treatments totaling $100 or more.
                  </p>
                  
                  <div className="pt-2 space-y-3">
                    <div className="flex items-center gap-3 text-white/90">
                      <Clock className="h-5 w-5 text-pink-200" />
                      <span className="text-lg">Limited time offer - Expires in 7 days</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <CalendarCheck className="h-5 w-5 text-pink-200" />
                      <span className="text-lg">Book online or via phone</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 shadow-lg hover:shadow-xl px-8 py-6 text-base font-medium rounded-xl relative overflow-hidden group">
                      <span className="absolute inset-0 w-0 bg-gradient-to-r from-pink-50 to-white opacity-50 transition-all duration-500 ease-out group-hover:w-full"></span>
                      <span className="relative flex items-center gap-2">
                        Book Appointment
                      </span>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 px-8 py-6 text-base font-medium rounded-xl">
                      <span className="flex items-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 h-72 w-72 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl flex items-center justify-center transform hover:scale-105 transition-all duration-500 group">
                      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 animate-pulse-slow"></div>
                      <div className="relative z-20 flex flex-col items-center">
                        <span className="text-7xl font-extrabold text-white text-center">40%</span>
                        <span className="text-xl font-bold text-white mt-2 tracking-wider">OFF</span>
                        <div className="h-1 w-16 bg-white/50 rounded-full mt-2"></div>
                        <span className="text-lg text-white/90 mt-2">First Visit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Animated>

        {/* Offers grid */}
        <Animated animation="fade-in-up" delay={0.2}>
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Current <span className="text-pink-600 dark:text-pink-400">Special Offers</span>
              </h2>
              <div className="h-10 flex items-center mt-4 md:mt-0">
                <div className="px-4 py-2 rounded-full bg-pink-100/70 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium">
                  <span>All offers valid while availability lasts</span>
                </div>
              </div>
            </div>
            
            <AnimatedGroup className="grid gap-8 md:gap-10 md:grid-cols-2">
              {offers.map((offer, index) => (
                <Animated key={offer.id} animation="fade-in-up" delay={0.1 * index}>
                  <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm group">
                    <div className="relative">
                      <Image
                        src={offer.image || "/placeholder.jpg"}
                        alt={offer.title}
                        width={600}
                        height={300}
                        className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute right-4 top-4 z-10">
                        <Badge className="text-sm font-bold bg-gradient-to-r from-pink-500 to-pink-700 border-0 text-white hover:from-pink-600 hover:to-pink-800 px-4 py-1.5 shadow-lg">
                          {offer.discount}
                        </Badge>
                      </div>
                      {offer.tag && (
                        <div className="absolute left-4 top-4 z-10">
                          <Badge className="text-xs font-medium bg-white/90 dark:bg-gray-900/90 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800 px-3 py-1 backdrop-blur-sm">
                            {offer.tag}
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <CardHeader className="p-8 pb-4">
                      <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-700 dark:from-pink-400 dark:to-purple-400">{offer.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4 px-8 pb-4">
                      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{offer.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="border-pink-200 dark:border-pink-800 bg-transparent text-pink-700 dark:text-pink-400 px-3 py-1">
                          {offer.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="h-4 w-4 text-pink-500 dark:text-pink-400" />
                          <span>{offer.expiresIn}</span>
                        </div>
                      </div>
                      
                      {offer.originalPrice && offer.salePrice && (
                        <div className="flex items-center gap-3 pt-2">
                          <span className="text-3xl font-bold text-pink-700 dark:text-pink-400">${offer.salePrice.toFixed(2)}</span>
                          <span className="text-lg text-gray-500 dark:text-gray-400 line-through">${offer.originalPrice.toFixed(2)}</span>
                          <Badge className="ml-auto bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 border-0">
                            Save ${(offer.originalPrice - offer.salePrice).toFixed(2)}
                          </Badge>
                        </div>
                      )}
                    </CardContent>
                    
                    <CardFooter className="px-8 pb-8 pt-4">
                      <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-6 text-base rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                        <span className="flex items-center gap-2">
                          <Gift className="h-5 w-5" />
                          Book This Offer
                        </span>
                      </Button>
                    </CardFooter>
                  </Card>
                </Animated>
              ))}
            </AnimatedGroup>
          </div>
        </Animated>

        {/* How to redeem section */}
        <Animated animation="fade-in-up" delay={0.3} className="mt-24">
          <div className="relative overflow-hidden rounded-2xl p-12 md:p-16 bg-gradient-to-r from-white to-pink-50/50 dark:from-gray-900/95 dark:to-gray-800/95 shadow-xl border border-pink-100/30 dark:border-pink-900/20 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-200/20 to-purple-200/20 dark:from-pink-700/10 dark:to-purple-700/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-200/20 to-purple-200/20 dark:from-pink-700/10 dark:to-purple-700/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3 z-0"></div>
            
            <div className="relative z-10 space-y-10">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  How to <span className="text-pink-600 dark:text-pink-400">Redeem Your Offer</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg">Follow these simple steps to enjoy your exclusive beauty package</p>
              </div>
              
              <div className="grid gap-8 md:gap-6 md:grid-cols-3">
                {[
                  {
                    step: 1,
                    title: "Select Your Offer",
                    description: "Browse our exclusive offers and select the one that best suits your beauty needs",
                    icon: <Gift className="h-6 w-6" />
                  },
                  {
                    step: 2,
                    title: "Book Your Appointment",
                    description: "Schedule your visit online or call our luxury booking concierge",
                    icon: <CalendarCheck className="h-6 w-6" />
                  },
                  {
                    step: 3,
                    title: "Mention Your Offer",
                    description: "Reference your selected offer when you arrive for your appointment",
                    icon: <Sparkles className="h-6 w-6" />
                  }
                ].map((step) => (
                  <div key={step.step} className="p-8 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-pink-100/50 dark:border-pink-800/30 shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-pink-600 dark:from-pink-600 dark:to-pink-700 text-xl font-bold text-white shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                          {step.step}
                        </div>
                        <div className="p-2 rounded-full bg-pink-100/70 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                          {step.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed flex-grow">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Animated>

        {/* Newsletter subscription */}
        <Animated animation="fade-in-up" delay={0.4} className="mt-24">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative overflow-hidden bg-gradient-to-br from-rose-100 to-purple-100 dark:from-rose-900/40 dark:to-purple-900/40 p-12 md:p-16">
              <div className="absolute inset-0 bg-[url('/images/texture-light.png')] bg-cover opacity-5 mix-blend-overlay"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 justify-between">
                <div className="flex-1 space-y-5 text-center md:text-left">
                  <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-pink-700 dark:text-pink-300 text-sm font-medium mb-2">
                    <Mail className="h-4 w-4" />
                    <span>Stay Updated</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Get <span className="text-pink-600 dark:text-pink-400">Exclusive Offers</span> First
                  </h2>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-lg max-w-md">
                    Subscribe to our newsletter for VIP access to our newest offers, special event invitations, and beauty tips from our experts.
                  </p>
                </div>
                
                <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-14 rounded-xl border border-pink-200/50 dark:border-purple-800/50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 dark:focus-visible:ring-pink-700 focus-visible:ring-offset-2 w-full"
                  />
                  <Button className="h-14 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-md px-8 py-6 text-base whitespace-nowrap">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Animated>
        
        {/* Terms & Conditions */}
        <div className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          <p>
            *Terms and conditions apply. Offers cannot be combined with other promotions. Subject to availability. 
            Prices may vary based on stylist level and additional services requested.
          </p>
        </div>
      </div>
    </div>
  )
}

