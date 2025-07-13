"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, FileText, HelpCircle, LifeBuoy, MessageSquare, Search, ShieldCheck, Scissors, Sparkles, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Animated, AnimatedGroup } from "@/components/ui/animated"

export default function HelpCenterPage() {
  const categories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using our beauty and wellness booking platform",
      icon: <BookOpen className="h-6 w-6" />,
      href: "/help-center/getting-started",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20"
    },
    {
      title: "Account & Profile",
      description: "Manage your account settings and personal information",
      icon: <ShieldCheck className="h-6 w-6" />,
      href: "/help-center/account",
      color: "from-rose-500 to-red-500",
      bgColor: "from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20"
    },
    {
      title: "Booking Appointments",
      description: "Learn how to book, reschedule, and cancel appointments",
      icon: <Scissors className="h-6 w-6" />,
      href: "/help-center/booking",
      color: "from-fuchsia-500 to-purple-500",
      bgColor: "from-fuchsia-50 to-purple-50 dark:from-fuchsia-900/20 dark:to-purple-900/20"
    },
    {
      title: "Services & Salons",
      description: "Information about our salon partners and available services",
      icon: <LifeBuoy className="h-6 w-6" />,
      href: "/help-center/services",
      color: "from-violet-500 to-indigo-500",
      bgColor: "from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20"
    },
    {
      title: "Payments & Billing",
      description: "Learn about payment methods, pricing, and receipts",
      icon: <FileText className="h-6 w-6" />,
      href: "/help-center/payments",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20"
    },
    {
      title: "Troubleshooting",
      description: "Solutions to common issues and technical problems",
      icon: <HelpCircle className="h-6 w-6" />,
      href: "/help-center/troubleshooting",
      color: "from-pink-500 to-purple-500",
      bgColor: "from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20"
    },
  ]

  const popularArticles = [
    {
      title: "How to book your first appointment",
      category: "Getting Started",
      href: "/help-center/article/book-first-appointment",
    },
    {
      title: "Cancellation and refund policy",
      category: "Booking Appointments",
      href: "/help-center/article/cancellation-policy",
    },
    {
      title: "Understanding salon ratings and reviews",
      category: "Services & Salons",
      href: "/help-center/article/ratings-explained",
    },
    {
      title: "Payment methods accepted",
      category: "Payments & Billing",
      href: "/help-center/article/payment-methods",
    },
    {
      title: "How to earn and redeem loyalty points",
      category: "Account & Profile",
      href: "/help-center/article/loyalty-program",
    },
    {
      title: "Troubleshooting booking issues",
      category: "Troubleshooting",
      href: "/help-center/article/booking-issues",
    },
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-rose-50/30 dark:from-gray-900 dark:to-gray-800/30">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-100/50 dark:bg-pink-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>
      
      <div className="container relative z-10 mx-auto px-6 md:px-8 py-20 md:py-24">
        <Animated animation="fade-in-up">
      <div className="mb-16 space-y-5 text-center">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium mb-4">
              <Sparkles size={16} className="text-pink-500" />
              <span>Find the Answers You Need</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-gray-900 dark:text-white">Help</span>
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Center</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 text-lg md:text-xl pt-4 leading-relaxed">
              Find answers to your questions and get the support you need with our comprehensive resources and guides.
        </p>
      </div>
        </Animated>

        <Animated animation="fade-in-up" delay={0.1}>
          <div className="mx-auto mb-20 max-w-2xl">
        <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-purple-100/50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl blur-xl"></div>
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-pink-100/50 dark:border-pink-800/30">
                <div className="flex items-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/30 dark:to-purple-900/30">
                    <Search className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <Input 
                    type="search" 
                    placeholder="Search for help articles..." 
                    className="border-0 outline-none focus-visible:ring-0 bg-transparent text-base h-16 py-6 px-4 flex-1" 
                  />
                  <Button className="h-10 mr-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white rounded-lg shadow-md">
                    Search
                  </Button>
                </div>
              </div>
        </div>
      </div>
        </Animated>

        <div className="mb-20">
          <Animated animation="fade-in-up" delay={0.2}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Help <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400">Categories</span>
            </h2>
          </Animated>
          
          <AnimatedGroup className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Animated key={category.title} animation="fade-in-up" delay={0.1 * (index + 1)}>
                <Link href={category.href}>
                  <Card className="group h-full transition-all duration-300 hover:shadow-xl border-pink-100/50 dark:border-pink-800/30 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50/80 dark:from-gray-800/95 dark:to-gray-800/95 transition-opacity group-hover:opacity-0 duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-100/50 dark:from-gray-800 dark:to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardHeader className="p-8 relative">
                      <div className={`mb-4 h-16 w-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${category.bgColor} shadow-sm border border-pink-100/50 dark:border-pink-800/30`}>
                        <div className={`text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                  {category.icon}
                </div>
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                        {category.description}
                      </CardDescription>
              </CardHeader>
                    <CardFooter className="p-8 pt-0 relative">
                      <div className="flex items-center text-sm font-medium text-pink-600 dark:text-pink-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-2 transition-all duration-300">
                        <span>Explore articles</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardFooter>
            </Card>
          </Link>
              </Animated>
        ))}
          </AnimatedGroup>
      </div>

      <div className="mb-20">
          <Animated animation="fade-in-up" delay={0.3}>
            <div className="flex items-center mb-8">
              <div className="flex-shrink-0 h-10 w-1 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400">Articles</span>
              </h2>
            </div>
          </Animated>
          
          <AnimatedGroup className="grid gap-6 md:grid-cols-2">
            {popularArticles.map((article, index) => {
              // Define gradient colors based on category
              let gradientColors = {
                "Getting Started": { 
                  badge: "bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
                  text: "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500",
                  icon: <BookOpen className="h-4 w-4" />
                },
                "Booking Appointments": { 
                  badge: "bg-gradient-to-r from-fuchsia-50 to-purple-50 dark:from-fuchsia-900/20 dark:to-purple-900/20",
                  text: "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500",
                  icon: <Scissors className="h-4 w-4" />
                },
                "Services & Salons": { 
                  badge: "bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20",
                  text: "text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500",
                  icon: <LifeBuoy className="h-4 w-4" />
                },
                "Payments & Billing": { 
                  badge: "bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
                  text: "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-500",
                  icon: <FileText className="h-4 w-4" />
                },
                "Account & Profile": { 
                  badge: "bg-gradient-to-r from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20",
                  text: "text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-500",
                  icon: <ShieldCheck className="h-4 w-4" />
                },
                "Troubleshooting": { 
                  badge: "bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20",
                  text: "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500",
                  icon: <HelpCircle className="h-4 w-4" />
                }
              };
              
              const colors = gradientColors[article.category as keyof typeof gradientColors];
              
              return (
                <Animated key={article.title} animation="fade-in-up" delay={0.1 * (index + 1)}>
                  <Link href={article.href}>
                    <Card className="group transition-all duration-300 hover:shadow-lg border-pink-100/50 dark:border-pink-800/30 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400/60 to-purple-400/60 dark:from-pink-600/60 dark:to-purple-600/60 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-pink-100/20 to-purple-100/20 dark:from-pink-900/10 dark:to-purple-900/10 rounded-tl-full blur-xl -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <CardHeader className="p-8 relative z-10">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <div className={`flex-shrink-0 h-6 w-6 rounded-md ${colors.badge} flex items-center justify-center border border-pink-100/50 dark:border-pink-800/30`}>
                                <div className={colors.text}>
                                  {colors.icon}
                                </div>
                              </div>
                              <div className="inline-block px-3 py-1 rounded-full bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-xs font-medium">
                                {article.category}
                              </div>
                            </div>
                            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                              {article.title}
                            </CardTitle>
                            <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                <circle cx="12" cy="12" r="3" />
                              </svg>
                              <span className="mr-4">{1000 + index * 250} views</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                <line x1="16" x2="16" y1="2" y2="6" />
                                <line x1="8" x2="8" y1="2" y2="6" />
                                <line x1="3" x2="21" y1="10" y2="10" />
                              </svg>
                              <span>Updated {index + 1} {index === 0 ? 'day' : 'days'} ago</span>
                            </div>
                          </div>
                          <div className="flex-shrink-0 ml-4 h-10 w-10 rounded-full bg-pink-50 dark:bg-pink-900/30 flex items-center justify-center transform group-hover:bg-pink-100 dark:group-hover:bg-pink-800/50 transition-colors duration-300 group-hover:scale-110">
                            <ChevronRight className="h-5 w-5 text-pink-600 dark:text-pink-400 transform group-hover:translate-x-0.5 transition-transform duration-300" />
                          </div>
                        </div>
                </CardHeader>
              </Card>
            </Link>
                </Animated>
              );
            })}
          </AnimatedGroup>

          <div className="mt-8 flex justify-center">
            <Animated animation="fade-in-up" delay={0.6}>
              <Link href="/help-center/all-articles">
                <Button variant="outline" className="rounded-full border-2 border-pink-200 dark:border-pink-800/40 text-pink-700 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20 px-6 py-2.5">
                  <span>View all articles</span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Animated>
          </div>
      </div>

      <div className="grid gap-8 md:gap-10 md:grid-cols-2">
          <Animated animation="fade-in-up" delay={0.4}>
            <Card className="border-pink-100/50 dark:border-pink-800/30 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-rose-500"></div>
          <CardHeader className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-1.5 bg-gradient-to-br from-pink-400 to-rose-400 dark:from-pink-600 dark:to-rose-600 rounded-xl shadow-md">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded-lg">
                      <MessageSquare size={20} className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-rose-500 dark:from-pink-400 dark:to-rose-400" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-rose-700 dark:from-pink-300 dark:to-rose-300">
                    Contact Support
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base ml-12">
                  Can't find what you're looking for? Our support team is here to help you with any questions or concerns.
                </CardDescription>
          </CardHeader>
              <CardContent className="space-y-5 px-8 pb-4">
                <div className="flex items-center gap-3 p-4 rounded-lg border border-pink-100/50 dark:border-pink-800/30 bg-gradient-to-r from-white to-pink-50/30 dark:from-gray-800 dark:to-pink-900/10">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 flex items-center justify-center shadow-sm border border-pink-100/50 dark:border-pink-800/30">
                    <MessageSquare className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email Us</p>
                    <p className="text-gray-900 dark:text-white text-base font-medium">support@glowvita.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg border border-pink-100/50 dark:border-pink-800/30 bg-gradient-to-r from-white to-pink-50/30 dark:from-gray-800 dark:to-pink-900/10">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 flex items-center justify-center shadow-sm border border-pink-100/50 dark:border-pink-800/30">
                    <HelpCircle className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Call Us</p>
                    <p className="text-gray-900 dark:text-white text-base font-medium">(123) 456-7890</p>
            </div>
            </div>
          </CardContent>
          <CardFooter className="px-8 pb-8 pt-4">
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-6 text-base shadow-md rounded-xl font-medium">
                    Contact Us
                  </Button>
            </Link>
          </CardFooter>
        </Card>
          </Animated>

          <Animated animation="fade-in-up" delay={0.5}>
            <Card className="border-pink-100/50 dark:border-pink-800/30 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-violet-500"></div>
          <CardHeader className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-1.5 bg-gradient-to-br from-purple-400 to-violet-400 dark:from-purple-600 dark:to-violet-600 rounded-xl shadow-md">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded-lg">
                      <FileText size={20} className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-violet-500 dark:from-purple-400 dark:to-violet-400" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-700 dark:from-purple-300 dark:to-violet-300">
                    Frequently Asked Questions
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base ml-12">
                  Find quick answers to common questions about our services, booking process, and policies.
                </CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-4">
                <div className="space-y-4">
                  {[
                    "How do I cancel or reschedule my appointment?",
                    "What payment methods do you accept?",
                    "Do you offer gift cards for your services?",
                    "Is there a loyalty rewards program?"
                  ].map((question, index) => (
                    <div key={index} className="flex items-center gap-3 p-3.5 rounded-lg border border-pink-100/50 dark:border-pink-800/30 bg-gradient-to-r from-white to-pink-50/30 dark:from-gray-800 dark:to-pink-900/10">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100/70 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 text-xs font-medium">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-base">{question}</p>
                    </div>
                  ))}
                </div>
          </CardContent>
          <CardFooter className="px-8 pb-8 pt-4">
                <Link href="/faq" className="w-full">
                  <Button variant="outline" className="w-full border-2 border-purple-200 dark:border-purple-800/30 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-6 py-6 text-base rounded-xl font-medium">
                    View All FAQs
                  </Button>
            </Link>
          </CardFooter>
        </Card>
          </Animated>
        </div>
      </div>
    </div>
  )
}

