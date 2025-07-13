import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Animated } from "@/components/ui/animated"

export const metadata = {
  title: "Sign Up - Selenae",
  description: "Create a new Selenae account",
}

export default function SignUpPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50/30 dark:from-gray-900 dark:to-gray-800/30">
      <div className="w-full max-w-md space-y-8">
        <Animated animation="fade-in-up">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Create an account</h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Join Selenae for personalized beauty services
            </p>
          </div>
        </Animated>

        <Animated animation="fade-in-up" delay={0.1}>
          <Card className="bg-white dark:bg-gray-900 border-pink-100 dark:border-gray-800">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-2xl font-bold text-center text-pink-700 dark:text-pink-400">Sign up</CardTitle>
              <CardDescription className="text-center">
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="border-pink-100 dark:border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="border-pink-100 dark:border-gray-700"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  className="border-pink-100 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  autoCapitalize="none"
                  autoCorrect="off"
                  className="border-pink-100 dark:border-gray-700"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Password must be at least 8 characters long
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  I agree to the{" "}
                  <Link href="/terms" className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300">
                    terms of service
                  </Link>
                  {" "}and{" "}
                  <Link href="/privacy" className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300">
                    privacy policy
                  </Link>
                </Label>
              </div>
              <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white dark:bg-pink-700 dark:hover:bg-pink-600">
                Create Account
              </Button>
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
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="border-pink-100 dark:border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5 mr-2">
                    <path fill="currentColor" d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" />
                    <path fill="#EA4335" d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" />
                    <path fill="#FBBC05" d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" />
                    <path fill="#34A853" d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.25 12.0004 19.25C8.87043 19.25 6.21543 17.14 5.27043 14.295L1.27539 17.39C3.25539 21.31 7.31039 24 12.0004 24Z" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="border-pink-100 dark:border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5 mr-2 text-pink-700 dark:text-pink-400 fill-current">
                    <path d="M9.03954 8.25954H13.3182V10.128C13.8676 9.02625 15.2628 8.09204 17.3649 8.09204C21.9101 8.09204 23 10.7445 23 15.2877V22.9489H18.3715V16.256C18.3715 13.86 17.7893 12.5129 16.2812 12.5129C14.2063 12.5129 13.668 13.9801 13.668 16.2129V22.9489H9.03954V8.25954" />
                    <path d="M1.02954 22.7816H5.65794V8.09204H1.02954V22.7816Z" />
                    <path d="M6.5 3.3305C6.5 4.58928 5.48298 5.60709 4.22499 5.60709C2.96701 5.60709 1.95 4.58928 1.95 3.3305C1.95 2.07173 2.96701 1.05469 4.22499 1.05469C5.48298 1.05469 6.5 2.07173 6.5 3.3305Z" />
                  </svg>
                  LinkedIn
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                <div className="text-gray-600 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link href="/sign-in" className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 font-medium">
                    Sign in
                  </Link>
                </div>
              </div>
            </CardFooter>
          </Card>
        </Animated>
      </div>
    </div>
  )
} 