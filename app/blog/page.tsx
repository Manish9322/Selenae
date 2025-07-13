import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Search, ArrowUpRight, Calendar, Clock, BookMarked } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Animated, AnimatedGroup } from "@/components/ui/animated"

export const metadata = {
  title: "Beauty Blog - GlowVita",
  description: "Discover beauty tips, trends, and expert advice from GlowVita specialists",
}

export default function BlogPage() {
  // Featured blog posts
  const featuredPosts = [
    {
      title: "The Complete Guide to Skin Hydration",
      excerpt: "Learn the secrets to maintaining perfectly hydrated skin year-round with our comprehensive guide featuring expert tips and product recommendations.",
      image: "/placeholder.jpg",
      category: "Skincare",
      date: "May 18, 2023",
      readTime: "8 min read",
      featured: true,
    },
    {
      title: "Summer Hair Color Trends You Need to Try",
      excerpt: "Explore this season's hottest hair color trends that will keep you looking fresh and stylish throughout the summer months.",
      image: "/placeholder.jpg",
      category: "Hair",
      date: "June 2, 2023",
      readTime: "6 min read",
      featured: true,
    },
  ]

  // Blog posts by category
  const allPosts = {
    all: [
      {
        title: "Ultimate Guide to Winter Skincare",
        excerpt: "Protect your skin during the harsh winter months with these essential tips and product recommendations.",
        image: "/placeholder.jpg",
        category: "Skincare",
        date: "Feb 15, 2023",
        readTime: "7 min read",
      },
      {
        title: "Hair Color Trends for 2023",
        excerpt: "Discover the hottest hair color trends of the year and find the perfect shade for your style.",
        image: "/placeholder.jpg",
        category: "Hair",
        date: "Mar 5, 2023",
        readTime: "5 min read",
      },
      {
        title: "Self-Care Rituals to Reduce Stress",
        excerpt: "Incorporate these wellness practices into your routine to promote relaxation and mental clarity.",
        image: "/placeholder.jpg",
        category: "Wellness",
        date: "Apr 12, 2023",
        readTime: "4 min read",
      },
      {
        title: "The Art of Perfect Brows",
        excerpt: "Learn how to shape, fill, and maintain your eyebrows for a polished, face-framing look that enhances your features.",
        image: "/placeholder.jpg",
        category: "Makeup",
        date: "Apr 25, 2023",
        readTime: "6 min read",
      },
      {
        title: "Natural Ingredients for Radiant Skin",
        excerpt: "Discover the power of natural ingredients that can transform your skincare routine and give you that healthy, radiant glow.",
        image: "/placeholder.jpg",
        category: "Skincare",
        date: "May 8, 2023",
        readTime: "7 min read",
      },
      {
        title: "Nail Art Designs for Every Occasion",
        excerpt: "From minimalist elegance to bold statements, explore nail art designs perfect for any event or everyday wear.",
        image: "/placeholder.jpg",
        category: "Nails",
        date: "May 20, 2023",
        readTime: "5 min read",
      },
    ],
    skincare: [
      {
        title: "Ultimate Guide to Winter Skincare",
        excerpt: "Protect your skin during the harsh winter months with these essential tips and product recommendations.",
        image: "/placeholder.jpg",
        category: "Skincare",
        date: "Feb 15, 2023",
        readTime: "7 min read",
      },
      {
        title: "Natural Ingredients for Radiant Skin",
        excerpt: "Discover the power of natural ingredients that can transform your skincare routine and give you that healthy, radiant glow.",
        image: "/placeholder.jpg",
        category: "Skincare",
        date: "May 8, 2023",
        readTime: "7 min read",
      },
    ],
    hair: [
      {
        title: "Hair Color Trends for 2023",
        excerpt: "Discover the hottest hair color trends of the year and find the perfect shade for your style.",
        image: "/placeholder.jpg",
        category: "Hair",
        date: "Mar 5, 2023",
        readTime: "5 min read",
      },
    ],
    makeup: [
      {
        title: "The Art of Perfect Brows",
        excerpt: "Learn how to shape, fill, and maintain your eyebrows for a polished, face-framing look that enhances your features.",
        image: "/placeholder.jpg",
        category: "Makeup",
        date: "Apr 25, 2023",
        readTime: "6 min read",
      },
    ],
    wellness: [
      {
        title: "Self-Care Rituals to Reduce Stress",
        excerpt: "Incorporate these wellness practices into your routine to promote relaxation and mental clarity.",
        image: "/placeholder.jpg",
        category: "Wellness",
        date: "Apr 12, 2023",
        readTime: "4 min read",
      },
    ],
    nails: [
      {
        title: "Nail Art Designs for Every Occasion",
        excerpt: "From minimalist elegance to bold statements, explore nail art designs perfect for any event or everyday wear.",
        image: "/placeholder.jpg",
        category: "Nails",
        date: "May 20, 2023",
        readTime: "5 min read",
      },
    ],
  }

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-pink-100/50 to-purple-50 py-20 md:py-28 w-full">
        <div className="absolute inset-0 z-0 opacity-10 bg-dotted-pattern"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <Animated animation="fade-in-up">
            <div className="max-w-3xl mx-auto space-y-6 text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-heading">
                Beauty Tips & Expert Advice
              </h1>
              <p className="text-lg text-gray-600 md:text-xl max-w-2xl mx-auto">
                Discover the latest trends, techniques, and insights from our beauty and wellness experts.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-xl mx-auto">
                <div className="relative w-full">
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 py-6 text-base bg-white/90 backdrop-blur-sm border-pink-200 focus:border-pink-400 focus:ring-pink-400 rounded-full pr-4 w-full"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                <Button className="px-6 py-6 bg-pink-600 hover:bg-pink-700 rounded-full text-white shadow-md whitespace-nowrap">
                  Search
                </Button>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <Animated animation="fade-in-up">
            <div className="mb-12 space-y-2">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl text-pink-800">Featured Articles</h2>
              <p className="text-gray-600 text-lg">
                Hand-picked content from our beauty experts
              </p>
            </div>
          </Animated>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredPosts.map((post, index) => (
              <Animated key={post.title} animation="fade-in-up" delay={0.1 * (index + 1)}>
                <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="block group">
                  <Card className="overflow-hidden hover-lift border-pink-100 hover:border-pink-300 transition-all duration-300 group-hover:shadow-lg h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-pink-50/0 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div className="relative h-64 md:h-72 w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold text-pink-700 shadow-sm">
                        {post.category}
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2 pt-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1.5 text-pink-500" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1.5 text-pink-500" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-serif text-pink-800 group-hover:text-pink-700 transition-colors leading-tight">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-600 text-base leading-relaxed">{post.excerpt}</p>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <div className="flex items-center text-pink-600 font-medium group-hover:text-pink-700 transition-colors">
                        <span>Read Article</span>
                        <div className="transform transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="w-full py-20 bg-gradient-to-b from-white to-pink-50/20 relative">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-pink-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-purple-100/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <Animated animation="fade-in-up">
            <div className="mb-12 space-y-3">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl text-pink-800">Browse Articles</h2>
              <p className="text-gray-600 text-lg max-w-3xl">
                Explore our collection of beauty and wellness articles
              </p>
            </div>
          </Animated>

          <Tabs defaultValue="all" className="mb-10">
            <TabsList className="bg-white/80 backdrop-blur-sm mb-8 p-1 rounded-full border border-pink-100 inline-flex">
              <TabsTrigger value="all" className="rounded-full data-[state=active]:bg-pink-600 data-[state=active]:text-white px-5 py-2">
                All
              </TabsTrigger>
              <TabsTrigger value="skincare" className="rounded-full data-[state=active]:bg-pink-600 data-[state=active]:text-white px-5 py-2">
                Skincare
              </TabsTrigger>
              <TabsTrigger value="hair" className="rounded-full data-[state=active]:bg-pink-600 data-[state=active]:text-white px-5 py-2">
                Hair
              </TabsTrigger>
              <TabsTrigger value="makeup" className="rounded-full data-[state=active]:bg-pink-600 data-[state=active]:text-white px-5 py-2">
                Makeup
              </TabsTrigger>
              <TabsTrigger value="wellness" className="rounded-full data-[state=active]:bg-pink-600 data-[state=active]:text-white px-5 py-2">
                Wellness
              </TabsTrigger>
              <TabsTrigger value="nails" className="rounded-full data-[state=active]:bg-pink-600 data-[state=active]:text-white px-5 py-2">
                Nails
              </TabsTrigger>
            </TabsList>

            {Object.entries(allPosts).map(([category, posts]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                  {posts.map((post, index) => (
                    <Animated key={post.title} animation="fade-in-up" delay={0.05 * (index + 1)}>
                      <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="block h-full group">
                        <Card className="overflow-hidden hover-lift border-pink-100 hover:border-pink-300 h-full transition-all duration-300 group-hover:shadow-lg relative bg-white">
                          <div className="absolute inset-0 bg-gradient-to-b from-pink-50/0 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                          
                          <div className="relative h-52 w-full overflow-hidden">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-pink-700 shadow-sm">
                              {post.category}
                            </div>
                          </div>
                          
                          <CardHeader className="pb-2 pt-5">
                            <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                              <div className="flex items-center">
                                <Calendar className="h-3.5 w-3.5 mr-1 text-pink-500" />
                                {post.date}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-3.5 w-3.5 mr-1 text-pink-500" />
                                {post.readTime}
                              </div>
                            </div>
                            <CardTitle className="text-xl font-serif text-pink-800 group-hover:text-pink-700 transition-colors">{post.title}</CardTitle>
                          </CardHeader>
                          
                          <CardContent>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                          </CardContent>
                          
                          <CardFooter className="pt-0">
                            <div className="flex items-center text-pink-600 text-sm font-medium group-hover:text-pink-700 transition-colors">
                              <span>Read More</span>
                              <div className="transform transition-transform duration-300 group-hover:translate-x-1">
                                <ArrowRight className="ml-2 h-3.5 w-3.5" />
                              </div>
                            </div>
                          </CardFooter>
                        </Card>
                      </Link>
                    </Animated>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-10 text-center">
            <Animated animation="fade-in-up" delay={0.3}>
              <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 px-8 py-6 text-base shadow-sm hover:shadow-md btn-pulse">
                Load More Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Animated>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 md:p-12 lg:p-16 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-lg space-y-5 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Get Beauty Tips in Your Inbox</h2>
                <p className="text-white/90 text-lg">
                  Subscribe to our newsletter and receive exclusive beauty tips, product recommendations, and special offers.
                </p>
              </div>
              
              <div className="w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="flex flex-col space-y-4">
                    <Input 
                      type="text" 
                      placeholder="Your name" 
                      className="bg-white/80 border-white/30 focus:border-white focus:ring-white text-gray-800 placeholder:text-gray-500"
                    />
                    <Input 
                      type="email" 
                      placeholder="Your email address" 
                      className="bg-white/80 border-white/30 focus:border-white focus:ring-white text-gray-800 placeholder:text-gray-500"
                    />
                    <Button className="w-full bg-white hover:bg-white/90 text-pink-700 py-6 font-medium">
                      Subscribe Now
                    </Button>
                  </div>
                  <p className="text-white/70 text-sm mt-4 text-center">
                    By subscribing, you agree to our privacy policy and consent to receive updates from our company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 