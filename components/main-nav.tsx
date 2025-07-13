import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Animated } from "@/components/ui/animated"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()
  
  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/services",
      label: "Services",
    },
    {
      href: "/products",
      label: "Products",
    },
    {
      href: "/special-offers",
      label: "Special Offers",
    },
    {
      href: "/contact",
      label: "Contact",
    },
    {
      href: "/faq",
      label: "FAQ",
    },
    {
      href: "/help-center",
      label: "Help Center",
    },
  ]

  return (
    <nav className={cn("flex items-center", className)} {...props}>
      <div className="flex items-center flex-wrap space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6">
        {routes.map((route, index) => (
          <Animated 
            key={route.href} 
            animation="fade-in-down" 
            delay={0.05 * (index + 1)}
            duration={0.5}
          >
            <Link 
              href={route.href} 
              className={cn(
                "text-sm sm:text-base font-medium transition-colors relative whitespace-nowrap px-1 py-1.5 group",
                pathname === route.href 
                  ? "text-pink-700" 
                  : "text-gray-600 hover:text-pink-700"
              )}
            >
              {route.label}
              <span 
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-pink-500 transition-all duration-300 ease-out",
                  pathname === route.href 
                    ? "w-full" 
                    : "w-0 group-hover:w-full"
                )}
                style={{ pointerEvents: 'none' }}
              />
            </Link>
          </Animated>
        ))}
      </div>
    </nav>
  )
}

