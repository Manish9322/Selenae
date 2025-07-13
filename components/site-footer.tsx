"use client"

import Link from "next/link"
import { Animated } from "@/components/ui/animated"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function SiteFooter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const pathname = usePathname()
  
  // Hide footer on admin routes
  if (pathname?.startsWith('/admin')) {
    return null
  }
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically handle the subscription with an API
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <footer className="border-t border-pink-100/50 dark:border-pink-800/30 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-100/30 dark:bg-pink-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>
      
      {/* Newsletter subscription section */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Animated animation="fade-in-up">
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 border border-pink-100/50 dark:border-pink-800/30 shadow-xl backdrop-blur-sm max-w-5xl mx-auto">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-200/30 to-purple-200/30 dark:from-pink-700/10 dark:to-purple-700/10 rounded-full blur-xl -translate-y-1/3 translate-x-1/3 z-0"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-200/30 to-purple-200/30 dark:from-pink-700/10 dark:to-purple-700/10 rounded-full blur-xl translate-y-1/3 -translate-x-1/3 z-0"></div>
              
              <div className="relative z-10 px-6 py-10 sm:px-12 md:py-12 lg:px-16 lg:py-14">

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 to-purple-300"></div>


                <div className="grid gap-12 md:grid-cols-5 items-center">
                  <div className="md:col-span-3 space-y-4">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-xs font-medium mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 mr-1.5">
                        <path d="m22 2-7 20-4-9-9-4Z"/>
                        <path d="M22 2 11 13"/>
                      </svg>
                      <span>Stay Connected</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                      Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400">Beauty Newsletter</span>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
                      Subscribe to receive exclusive offers, beauty tips, and be the first to know about new services and special promotions.
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <form onSubmit={handleSubscribe} className="space-y-4">
                      <div className="relative overflow-hidden rounded-lg shadow-sm border border-pink-100/50 dark:border-pink-800/30">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-4 py-6 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 h-14"
                        />
                      </div>
                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white rounded-lg py-6 h-14 font-medium text-base transition-all duration-300 hover:shadow-lg"
                      >
                        {isSubscribed ? (
                          <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
                              <path d="M20 6 9 17l-5-5"/>
                            </svg>
                            Subscribed!
                          </span>
                        ) : (
                          "Subscribe Now"
                        )}
                      </Button>
                      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        By subscribing, you agree to our <Link href="/privacy-policy" className="text-pink-600 dark:text-pink-400 hover:underline">Privacy Policy</Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Animated>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 max-w-full md:max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <Animated animation="fade-in-up" delay={0.1}>
            <div className="space-y-5">
              <Link href="/" className="inline-block">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl mr-2">G</div>
                  <span className="inline-block font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400">GLOWVITA</span>
                </div>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Your one-stop destination for all beauty and wellness services. Book appointments with top professionals in your area.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="h-9 w-9 rounded-full bg-pink-50 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400 transition-all duration-200 hover:bg-pink-100 dark:hover:bg-pink-800/50 hover:scale-110">
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="h-9 w-9 rounded-full bg-pink-50 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400 transition-all duration-200 hover:bg-pink-100 dark:hover:bg-pink-800/50 hover:scale-110">
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="h-9 w-9 rounded-full bg-pink-50 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400 transition-all duration-200 hover:bg-pink-100 dark:hover:bg-pink-800/50 hover:scale-110">
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </Animated>
          
          <Animated animation="fade-in-up" delay={0.2}>
            <div className="space-y-5">
              <h3 className="text-sm font-medium tracking-wider text-gray-900 dark:text-gray-100 uppercase">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="group text-sm text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                    Hair Styling
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="group text-sm text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                    Skin Care
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="group text-sm text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                    Nail Services
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="group text-sm text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                    Massage Therapy
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="group text-sm text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                    Special Packages
                  </Link>
                </li>
              </ul>
            </div>
          </Animated>
          
          <Animated animation="fade-in-up" delay={0.3}>
            <div className="space-y-5">
              <h3 className="text-sm font-medium tracking-wider text-gray-900 dark:text-gray-100 uppercase">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="group text-sm text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="group text-sm text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="group text-sm text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/special-offers" className="group text-sm text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                    Special Offers
                  </Link>
                </li>
                <li>
                  <Link href="/help-center" className="group text-sm text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </Animated>
          
          <Animated animation="fade-in-up" delay={0.4}>
            <div className="space-y-5">
              <h3 className="text-sm font-medium tracking-wider text-gray-900 dark:text-gray-100 uppercase">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy-policy" className="group text-sm text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="group text-sm text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="group text-sm text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                    FAQ
                  </Link>
                </li>
              </ul>
              
              <div className="pt-5 mt-5 border-t border-pink-100/50 dark:border-pink-800/30">
                <h3 className="text-sm font-medium tracking-wider text-gray-900 dark:text-gray-100 uppercase mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-7 w-7 rounded-md bg-pink-50 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">(123) 456-7890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-7 w-7 rounded-md bg-pink-50 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">info@glowvita.com</span>
                  </div>
                </div>
              </div>
            </div>
          </Animated>
        </div>
        
        <div className="border-t border-pink-100/50 dark:border-pink-800/30 mt-12 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} GlowVita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

