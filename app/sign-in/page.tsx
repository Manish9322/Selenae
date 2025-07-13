import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Animated } from "@/components/ui/animated"
import { ArrowRight, UserPlus } from "lucide-react"

export const metadata = {
  title: "Sign In - GlowVita",
  description: "Sign in to your GlowVita account",
}

export default function SignInPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50/30 dark:from-gray-900 dark:to-gray-800/30">
      <div className="w-full max-w-5xl space-y-8">
        <Animated animation="fade-in-up">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Welcome to GlowVita</h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Sign in to access your personalized beauty experience
            </p>
          </div>
        </Animated>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Sign In Card */}
          <Animated animation="fade-in-up" delay={0.1} className="md:col-span-2">
            <Card className="bg-white dark:bg-gray-900 border-pink-100 dark:border-gray-800 h-full">
              <CardHeader className="space-y-1 pb-6">
                <CardTitle className="text-2xl font-bold text-center text-pink-700 dark:text-pink-400">Sign in</CardTitle>
                <CardDescription className="text-center text-sm">
                  Access your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 px-6 sm:px-8">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">Email</Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    className="border-pink-100 dark:border-gray-700 h-11"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-base">Password</Label>
                    <Link href="/reset-password" className="text-sm text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="current-password"
                    className="border-pink-100 dark:border-gray-700 h-11"
                  />
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Remember me
                  </Label>
                </div>
                <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white dark:bg-pink-700 dark:hover:bg-pink-600 h-11 text-base">
                  Sign In
                </Button>
              </CardContent>
              <CardFooter className="flex flex-col space-y-5 px-6 sm:px-8 pb-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-pink-100 dark:border-gray-700" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 w-full">
                  <Button variant="outline" className="border-pink-100 dark:border-gray-700 h-11 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5 mr-3">
                      <path fill="currentColor" d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" />
                      <path fill="#EA4335" d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" />
                      <path fill="#FBBC05" d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" />
                      <path fill="#34A853" d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.25 12.0004 19.25C8.87043 19.25 6.21543 17.14 5.27043 14.295L1.27539 17.39C3.25539 21.31 7.31039 24 12.0004 24Z" />
                    </svg>
                    Continue with Google
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Animated>

          {/* Sign Up Card */}
          <Animated animation="fade-in-up" delay={0.2} className="md:col-span-1">
            <Card className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/10 border-pink-200 dark:border-pink-900/30 h-full flex flex-col">
              <CardHeader className="space-y-1 pb-4">
                <CardTitle className="text-xl font-bold text-center text-pink-700 dark:text-pink-400">New to GlowVita?</CardTitle>
                <CardDescription className="text-center text-sm text-pink-600/80 dark:text-pink-300/80">
                  Create an account to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-center space-y-4 text-center">
                <div className="mx-auto bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full">
                  <UserPlus className="h-10 w-10 text-pink-700 dark:text-pink-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-pink-700 dark:text-pink-400">Join our beauty community</h3>
                  <p className="text-sm text-pink-600/80 dark:text-pink-300/80">
                    Create a free account to book appointments, receive personalized recommendations, and access exclusive offers.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Link href="/sign-up" className="w-full">
                  <Button variant="secondary" className="w-full bg-white border-pink-200 hover:bg-pink-50 text-pink-700 dark:bg-gray-800 dark:border-pink-700 dark:text-pink-400 dark:hover:bg-gray-700 group">
                    Create Account
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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