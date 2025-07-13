"use client"

import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, LogIn } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { Animated } from "@/components/ui/animated"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const isMobile = useMobile()
  const pathname = usePathname()
  
  // Hide header on admin routes
  if (pathname?.startsWith('/admin')) {
    return null
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-pink-100 bg-white/95 backdrop-blur-sm dark:bg-gray-900/95 dark:border-gray-800">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl mx-auto">
        <div className="flex gap-6 md:gap-8 lg:gap-12">
          <Animated animation="fade-in" duration={0.5}>
            <Link href="/" className="flex items-center">
              <span className="inline-block font-bold text-xl sm:text-2xl text-pink-700 dark:text-pink-500">SELENAE</span>
            </Link>
          </Animated>
          {!isMobile && <MainNav />}
        </div>
        <div className="flex items-center gap-3">
          {!isMobile && (
            <>
              <Animated animation="fade-in" duration={0.5}>
                <Link href="/sign-in">
                  <Button variant="outline" className="border-pink-200 text-pink-700 dark:border-pink-700 dark:text-pink-400">
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
              </Animated>
              <Animated animation="fade-in" duration={0.5}>
                <Link href="/contact">
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white px-5 sm:px-6 py-5 text-sm sm:text-base font-medium rounded-md shadow-sm btn-pulse dark:bg-pink-700 dark:hover:bg-pink-600">
                    Book Now
                  </Button>
                </Link>
              </Animated>
            </>
          )}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-pink-200 text-pink-700 dark:border-pink-700 dark:text-pink-400">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-pink-100 w-4/5 sm:w-80 max-w-full dark:bg-gray-900 dark:border-gray-800">
                <div className="flex flex-col gap-6 py-6">
                  <div className="flex items-center justify-between mb-4">
                    <Link href="/" className="flex items-center">
                      <span className="inline-block font-bold text-xl text-pink-700 dark:text-pink-500">SELENAE</span>
                    </Link>
                  </div>
                  <MainNav className="flex flex-col items-start space-y-5" />
                  <div className="mt-4 pt-4 border-t border-pink-100 dark:border-gray-800 space-y-3">
                    
                    <Link href="/contact">
                      <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-5 text-base shadow-sm dark:bg-pink-700 dark:hover:bg-pink-600">
                        Book Now
                      </Button>
                    </Link>

                    <Link href="/sign-in">
                      <Button variant="outline" className="w-full border-pink-200 text-pink-700 dark:border-pink-700 dark:text-pink-400">
                        <LogIn className="w-4 h-4 mr-2" />
                        Sign In
                      </Button>
                    </Link>

                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}

