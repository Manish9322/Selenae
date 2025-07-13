import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ShoppingBag, TrendingUp, Heart, Sparkles, Leaf, ChevronsUp, Filter } from "lucide-react"
import Image from "next/image"
import { Animated, AnimatedGroup } from "@/components/ui/animated"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Luxury Beauty Products - Selenae",
  description: "Shop premium salon-quality beauty products approved by expert stylists and estheticians",
}

export default function ProductsPage() {
  const categories = [
    { id: "all", label: "All Products" },
    { id: "hair", label: "Hair Care" },
    { id: "skin", label: "Skin Care" },
    { id: "makeup", label: "Makeup" },
    { id: "tools", label: "Tools & Accessories" },
  ]

  const products = [
    {
      id: 1,
      name: "Revitalizing Shampoo",
      description: "Nourishing shampoo for all hair types with argan oil and vitamin E",
      price: "$24.99",
      image: "/placeholder.svg?height=200&width=200",
      categories: ["all", "hair"],
      rating: 4.8,
      reviews: 124,
      bestseller: true,
    },
    {
      id: 2,
      name: "Hydrating Serum",
      description: "Intensive hydration for dry skin with hyaluronic acid and niacinamide",
      price: "$39.99",
      image: "/placeholder.svg?height=200&width=200",
      categories: ["all", "skin"],
      rating: 4.9,
      reviews: 86,
      new: true,
    },
    {
      id: 3,
      name: "Volumizing Mascara",
      description: "Long-lasting mascara for dramatic lashes with nourishing ingredients",
      price: "$19.99",
      image: "/placeholder.svg?height=200&width=200",
      categories: ["all", "makeup"],
      rating: 4.7,
      reviews: 59,
    },
    {
      id: 4,
      name: "Professional Hair Dryer",
      description: "Salon-quality ionic hair dryer for fast drying and reduced frizz",
      price: "$129.99",
      image: "/placeholder.svg?height=200&width=200",
      categories: ["all", "tools"],
      rating: 4.9,
      reviews: 37,
    },
    {
      id: 5,
      name: "Repair Hair Mask",
      description: "Deep conditioning treatment with keratin for damaged hair",
      price: "$34.99",
      image: "/placeholder.svg?height=200&width=200",
      categories: ["all", "hair"],
      rating: 4.8,
      reviews: 92,
      bestseller: true,
    },
    {
      id: 6,
      name: "Brightening Face Mask",
      description: "Illuminating mask with vitamin C for radiant, glowing skin",
      price: "$29.99",
      image: "/placeholder.svg?height=200&width=200",
      categories: ["all", "skin"],
      rating: 4.7,
      reviews: 48,
    },
    {
      id: 7,
      name: "Matte Lipstick Set",
      description: "Set of 4 long-lasting matte lipsticks in premium seasonal shades",
      price: "$45.99",
      image: "/placeholder.svg?height=200&width=200",
      categories: ["all", "makeup"],
      rating: 4.6,
      reviews: 71,
    },
    {
      id: 8,
      name: "Ceramic Flat Iron",
      description: "Professional titanium straightener with adjustable temperature",
      price: "$89.99",
      image: "/placeholder.svg?height=200&width=200",
      categories: ["all", "tools"],
      rating: 4.9,
      reviews: 28,
      new: true,
    },
    {
      id: 9,
      name: "Color Protection Conditioner",
      description: "Preserves color vibrancy for dyed hair with UV protection",
      price: "$22.99",
      image: "/placeholder.svg?height=200&width=200",
      categories: ["all", "hair"],
      rating: 4.7,
      reviews: 63,
    },
  ]

  const renderRatingStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < Math.floor(rating) ? "text-amber-400 fill-amber-400" : "text-gray-300"} 
          />
        ))}
        <span className="ml-1 text-sm font-medium text-gray-600 dark:text-gray-400">{rating}</span>
      </div>
    )
  }

  const ProductCard = ({ product, index }: { product: any, index: number }) => (
    <Animated key={product.id} animation="fade-in-up" delay={0.1 * index}>
      <Card className="overflow-hidden border-0 group transition-all duration-300 hover:shadow-xl relative bg-white dark:bg-gray-800/90 backdrop-blur-sm">
        {/* Badge overlays */}
        {product.bestseller && (
          <div className="absolute top-4 right-4 z-20">
            <div className="flex items-center px-3 py-1.5 rounded-full backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-lg">
              <div className="flex items-center">
                <TrendingUp className="h-3.5 w-3.5 text-amber-500 mr-1" />
                <span className="text-xs font-medium text-gray-900 dark:text-white">Bestseller</span>
              </div>
            </div>
          </div>
        )}
        {product.new && (
          <div className="absolute top-4 right-4 z-20">
            <div className="flex items-center px-3 py-1.5 rounded-full backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-lg">
              <div className="flex items-center">
                <Sparkles className="h-3.5 w-3.5 text-purple-500 mr-1" />
                <span className="text-xs font-medium text-gray-900 dark:text-white">New Arrival</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Product image */}
        <div className="relative h-64 bg-gradient-to-r from-pink-50/50 to-purple-50/50 dark:from-pink-900/10 dark:to-purple-900/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-pink-100/50 dark:to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer transform translate-x-4 group-hover:translate-x-0">
            <Heart size={18} className="text-pink-600 dark:text-pink-400" />
          </div>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain p-6 transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Product info */}
        <CardHeader className="px-6 pt-6 pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl text-gray-900 dark:text-white">{product.name}</CardTitle>
          </div>
        </CardHeader>
        
        <CardContent className="px-6 pb-2">
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between mt-2">
            {renderRatingStars(product.rating)}
            <span className="text-sm text-gray-500 dark:text-gray-400">{product.reviews} reviews</span>
          </div>
          <p className="mt-4 text-2xl font-bold text-pink-700 dark:text-pink-400">{product.price}</p>
        </CardContent>
        
        <CardFooter className="px-6 pb-6 pt-2 flex gap-2">
          <Button className="flex-1 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white py-6 text-base rounded-lg shadow-md transition-all duration-300 hover:shadow-lg group/btn">
            <span className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 transition-transform duration-300 group-hover/btn:scale-110" />
              Add to Cart
            </span>
          </Button>
          <Button variant="outline" className="w-12 h-12 p-0 border-pink-200 text-pink-700 dark:border-pink-700 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-lg">
            <ChevronsUp size={18} />
          </Button>
        </CardFooter>
      </Card>
    </Animated>
  );

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-pink-50/30 dark:from-gray-900 dark:to-gray-800/30">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-100/50 dark:bg-pink-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>
      
      <div className="container relative z-10 mx-auto px-6 md:px-8 py-20 md:py-24">
        {/* Hero section */}
        <Animated animation="fade-in-up">
          <div className="mb-20 space-y-5 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium mb-4">
              <Sparkles size={16} className="text-pink-500" />
              <span>Salon-Quality Products</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-gray-900 dark:text-white">Elevate Your Beauty</span>
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">with Premium Products</span>
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-600 dark:text-gray-300 text-lg md:text-xl pt-4 leading-relaxed">
              Explore our carefully curated collection of professional beauty products, selected by our expert stylists to help you maintain salon-quality results at home.
            </p>
          </div>
        </Animated>

        {/* Product tabs section */}
        <Animated animation="fade-in-up">
          <Tabs defaultValue="all" className="space-y-8">
            <div className="relative overflow-hidden bg-gradient-to-r from-rose-50/90 via-white to-violet-50/90 dark:from-gray-900/95 dark:via-gray-800/95 dark:to-purple-900/30 rounded-xl p-6 shadow-xl backdrop-blur-lg border border-rose-100/40 dark:border-indigo-900/30">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-pink-200/10 via-rose-300/10 to-amber-200/10 dark:from-pink-800/10 dark:via-rose-700/10 dark:to-amber-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-violet-200/10 via-indigo-300/10 to-purple-300/10 dark:from-violet-900/10 dark:via-indigo-800/10 dark:to-purple-800/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 z-0"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-gradient-to-br from-rose-300 via-pink-400 to-violet-400 dark:from-rose-600 dark:via-pink-600 dark:to-violet-600 rounded-xl shadow-lg">
                    <div className="bg-gradient-to-br from-white to-rose-50 dark:from-gray-800 dark:to-gray-900 p-2 rounded-lg">
                      <Filter size={22} className="text-transparent bg-clip-text bg-gradient-to-br from-rose-500 via-pink-500 to-violet-500 dark:from-rose-400 dark:via-pink-400 dark:to-violet-400" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-pink-700 to-violet-700 dark:from-rose-300 dark:via-pink-300 dark:to-violet-300">Browse Products</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Explore our luxury beauty collection</p>
                  </div>
                </div>

                <TabsList className="p-1.5 bg-gradient-to-r from-rose-50/90 via-pink-50/80 to-violet-50/90 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-purple-900/40 w-full md:w-auto grid grid-cols-2 sm:grid-cols-5 md:flex rounded-xl shadow-inner border border-rose-200/30 dark:border-violet-800/30">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="px-5 py-3 text-sm font-medium rounded-lg data-[state=active]:bg-gradient-to-br data-[state=active]:from-white data-[state=active]:to-rose-50/50 dark:data-[state=active]:from-gray-800 dark:data-[state=active]:to-gray-900/80 text-gray-600 dark:text-gray-400 data-[state=active]:text-rose-600 dark:data-[state=active]:text-rose-300 data-[state=active]:font-semibold data-[state=active]:shadow-md data-[state=active]:shadow-rose-200/20 dark:data-[state=active]:shadow-violet-900/20 transition-all duration-300 hover:text-pink-600 dark:hover:text-pink-400 overflow-hidden group relative"
                    >
                      <span className="relative z-10">{category.label}</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-rose-100/40 to-violet-100/40 dark:from-rose-900/20 dark:to-violet-900/20 opacity-0 group-hover:opacity-100 group-data-[state=active]:opacity-0 transition-opacity duration-300"></span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-rose-400 via-pink-500 to-violet-500 dark:from-rose-500 dark:via-pink-400 dark:to-violet-400 group-data-[state=active]:w-3/4 transition-all duration-300"></span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <AnimatedGroup className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {products
                    .filter((product) => product.categories.includes(category.id))
                    .map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </AnimatedGroup>
              </TabsContent>
            ))}
          </Tabs>
        </Animated>

        {/* Featured brands section */}
        <div className="mt-28 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-pink-100/30 dark:bg-pink-900/10 rounded-full blur-3xl -translate-x-1/2 z-0"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl translate-x-1/3 z-0"></div>
          
          <Animated animation="fade-in-up">
            <div className="relative z-10 text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100/80 to-purple-100/80 dark:from-pink-900/30 dark:to-purple-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium backdrop-blur-sm mb-4 shadow-sm">
                <Star size={16} className="text-pink-500" fill="currentColor" />
                <span>Exclusive Partnerships</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-200">
                Featured <span className="text-pink-600 dark:text-pink-400">Luxury Brands</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto my-6 rounded-full"></div>
              <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 text-lg pt-2 leading-relaxed">
                We partner with the world's most prestigious beauty brands to bring you premium products trusted and used by professionals worldwide.
              </p>
            </div>
          </Animated>
          
          <div className="relative z-10 grid gap-8 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                name: "Kerastase", 
                category: "Premium Hair Care", 
                description: "Leading luxury hair care brand recommended by top salons worldwide",
                founder: "Founded in Paris, 1964",
                image: "/placeholder.svg"
              },
              { 
                name: "Dermalogica", 
                category: "Professional Skin Care", 
                description: "Professional-grade skincare products formulated by dermatologists",
                founder: "Founded by Jane Wurwand in 1986",
                image: "/placeholder.svg" 
              },
              { 
                name: "MAC Cosmetics", 
                category: "Professional Makeup", 
                description: "Professional makeup artist quality products with worldwide acclaim",
                founder: "Founded in Toronto, 1984",
                image: "/placeholder.svg" 
              },
              { 
                name: "ghd", 
                category: "Professional Styling Tools", 
                description: "Premium styling tools used in high-end salons and by professionals",
                founder: "Founded in UK, 2001",
                image: "/placeholder.svg" 
              },
            ].map((brand, index) => (
              <Animated key={brand.name} animation="fade-in-up" delay={0.15 * index}>
                <div className="group relative rounded-2xl overflow-hidden transition-all duration-500">
                  {/* Background patterns */}
                  <div className="absolute inset-0 bg-white dark:bg-gray-800/90 opacity-95 z-10"></div>
                  <div className="absolute inset-0 bg-[url('/images/texture-light.png')] bg-cover opacity-5 mix-blend-overlay z-20"></div>
                  
                  {/* Decorative gradient accents */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-200/20 to-purple-200/20 dark:from-pink-800/20 dark:to-purple-800/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 z-0"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-200/20 to-purple-200/20 dark:from-pink-800/20 dark:to-purple-800/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 z-0"></div>

                  <div className="relative z-30 flex flex-col h-full p-8 transition-all duration-500">
                    {/* Brand logo with animated presence */}
                    <div className="mb-6 flex items-center justify-center">
                      <div className="p-1 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-800 dark:to-purple-800">
                        <div className="h-24 w-24 bg-gradient-to-br from-white to-pink-50 dark:from-gray-800 dark:to-gray-900 p-4 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-105">
                          <Image 
                            src={brand.image} 
                            alt={`${brand.name} Logo`} 
                            width={72} 
                            height={72} 
                            className="object-contain transition-all duration-500 group-hover:scale-110" 
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Brand info with enhanced typography */}
                    <h3 className="font-bold text-2xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-purple-700 dark:from-pink-400 dark:to-purple-400">{brand.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">{brand.category}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-2">{brand.description}</p>
                    
                    <div className="mt-auto pt-4 flex flex-col gap-4">
                      <div className="text-xs text-gray-500 dark:text-gray-400">{brand.founder}</div>
                      
                      {/* Award badges and certifications */}
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-transparent border-pink-200 text-pink-700 dark:border-pink-700 dark:text-pink-400 px-3 py-1">
                          <Star size={12} className="mr-1" fill="currentColor" /> Top Rated
                        </Badge>
                        <div className="flex items-center text-gray-400 dark:text-gray-500 text-xs gap-1">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                            <path d="M7.5 12H16.5" />
                            <path d="M12 7.5V16.5" />
                          </svg>
                          View Products
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-pink-200/50 dark:group-hover:border-pink-800/50 z-40 pointer-events-none"></div>
                </div>
              </Animated>
            ))}
          </div>

          {/* View all brands button */}
          <div className="mt-12 text-center relative z-10">
            <Button variant="outline" className="border-pink-200 bg-white/80 backdrop-blur-sm text-pink-700 hover:bg-pink-50/80 hover:text-pink-800 dark:border-pink-800 dark:bg-gray-900/80 dark:text-pink-400 dark:hover:bg-pink-950/30 dark:hover:text-pink-300 px-8 py-6 rounded-xl shadow-sm hover:shadow transition-all duration-300 group">
              <span className="flex items-center">
                <span className="mr-2">Explore All Partner Brands</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Button>
          </div>
        </div>

        {/* CTA section */}
        <Animated animation="scale-in" className="mt-28">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {/* Main background with enhanced gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-fuchsia-700 opacity-95"></div>
            
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-[url('/images/texture-light.png')] bg-cover opacity-10 mix-blend-overlay"></div>
            
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-purple-700/20 animate-gradient-shift"></div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
            
            {/* Subtle floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="particle1 absolute w-3 h-3 rounded-full bg-white/30 blur-sm"></div>
              <div className="particle2 absolute w-2 h-2 rounded-full bg-pink-300/30 blur-sm"></div>
              <div className="particle3 absolute w-4 h-4 rounded-full bg-purple-300/30 blur-sm"></div>
            </div>
            
            <div className="relative z-10 px-8 py-16 md:p-20">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-5 items-center gap-12">
                  <div className="md:col-span-3 space-y-8">
                    {/* Enhanced badge with animation */}
                    <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md shadow-lg text-white text-sm font-medium border border-white/20 animate-pulse-subtle">
                      <Leaf size={16} className="text-green-200" />
                      <span>Clean Beauty Collections</span>
                    </div>
                    
                    {/* Enhanced heading with gradient accent */}
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                      Experience Our <span className="relative">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-100">Curated Collections</span>
                        <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-70"></span>
                      </span>
                    </h2>
                    
                    {/* Enhanced description */}
                    <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
                      Discover our exclusive sets of premium beauty products, meticulously selected by our expert stylists to deliver salon-quality results and a truly luxurious experience at home.
                    </p>
                    
                    {/* Feature badges */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                        <svg className="w-4 h-4 text-pink-200" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Expertly Curated</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                        <svg className="w-4 h-4 text-pink-200" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Limited Edition</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                        <svg className="w-4 h-4 text-pink-200" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Value Sets</span>
                      </div>
                    </div>
                    
                    {/* Enhanced buttons with animations */}
                    <div className="flex flex-wrap gap-5 pt-4">
                      <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 shadow-lg hover:shadow-xl px-8 py-6 text-base font-medium rounded-xl relative overflow-hidden group">
                        <span className="absolute inset-0 w-0 bg-gradient-to-r from-pink-50 to-white opacity-50 transition-all duration-500 ease-out group-hover:w-full"></span>
                        <span className="relative flex items-center gap-2">
                          <ShoppingBag className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                          Shop Collections
                        </span>
                      </Button>
                      <Button size="lg" className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-6 text-base font-medium rounded-xl relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-white/20">
                        <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 duration-500 transition-opacity"></span>
                        <span className="absolute -inset-x-10 -inset-y-20 bg-gradient-to-r from-amber-300/20 to-pink-400/20 rotate-12 transform opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></span>
                        <span className="relative flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse-subtle" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          <span className="relative">Browse All Products</span>
                          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Enhanced product showcase */}
                  <div className="md:col-span-2 w-full">
                    <div className="relative">
                      {/* Collection cards with hover effects */}
                      <div className="relative z-20 transform transition-transform duration-500 hover:rotate-2 hover:scale-105">
                        <div className="bg-white/20 backdrop-blur-md rounded-xl p-5 border border-white/30 shadow-2xl relative overflow-hidden">
                          <div className="relative z-10">
                            <div className="absolute top-4 right-4">
                              <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 px-3 py-1 font-medium">
                                Limited Edition
                              </Badge>
                            </div>
                            
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                              <Image src="/placeholder.svg" alt="Luxury Collection" width={220} height={220} className="mx-auto" />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-2">Summer Glow Collection</h3>
                            <div className="flex justify-between items-center mb-4">
                              <p className="text-white/90 font-medium">5 premium products</p>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={14} className="text-amber-300 fill-amber-300" />
                                ))}
                              </div>
                            </div>
                            
                            <div className="space-y-2 mb-6">
                              <div className="flex items-center gap-2 text-white/90 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-pink-300"></div>
                                <span>Hydrating Serum (Full Size)</span>
                              </div>
                              <div className="flex items-center gap-2 text-white/90 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-pink-300"></div>
                                <span>Brightening Mask (Full Size)</span>
                              </div>
                              <div className="flex items-center gap-2 text-white/90 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-pink-300"></div>
                                <span>+ 3 More Premium Products</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="text-white">
                                <div className="text-lg font-bold">$149.99</div>
                                <div className="text-xs line-through text-white/70">$199.99</div>
                              </div>
                              <Badge className="bg-white/30 text-white backdrop-blur-sm border-0 px-3 py-1 font-bold">
                                Save 25%
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Secondary card for dimension */}
                      <div className="absolute top-8 -right-4 -rotate-6 w-full h-full z-10">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 h-full shadow-xl"></div>
                      </div>
                      
                      {/* Tertiary card for dimension */}
                      <div className="absolute top-16 -right-8 -rotate-12 w-full h-full z-0">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 h-full shadow-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Animated>

        {/* Benefits section */}
        <div className="mt-28">
          <Animated animation="fade-in-up">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="p-8 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-pink-100/50 dark:border-pink-800/20 shadow-md flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-600 dark:text-pink-400">
                    <path d="M4.5 9.5V21.5H19.5V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.5 21.5V13.5H14.5V21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.5 6.5L12 2.5L21.5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Free Delivery</h3>
                <p className="text-gray-600 dark:text-gray-300">On all orders over $75</p>
              </div>
              
              <div className="p-8 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-pink-100/50 dark:border-pink-800/20 shadow-md flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-600 dark:text-pink-400">
                    <path d="M19 8C19 11.866 15.866 15 12 15C8.13401 15 5 11.866 5 8C5 4.13401 8.13401 1 12 1C15.866 1 19 4.13401 19 8Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 15V23" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 19H16" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Expert Advice</h3>
                <p className="text-gray-600 dark:text-gray-300">Product recommendations from our professionals</p>
              </div>
              
              <div className="p-8 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-pink-100/50 dark:border-pink-800/20 shadow-md flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-600 dark:text-pink-400">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600 dark:text-gray-300">100% authentic products with satisfaction guarantee</p>
              </div>
            </div>
          </Animated>
        </div>
      </div>
    </div>
  )
}

