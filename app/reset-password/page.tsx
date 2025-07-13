import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Animated } from "@/components/ui/animated"

export const metadata = {
  title: "Reset Password - GlowVita",
  description: "Reset your GlowVita account password",
}

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50/30 dark:from-gray-900 dark:to-gray-800/30">
      <div className="w-full max-w-md space-y-8">
        <Animated animation="fade-in-up">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Reset Password</h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Recover access to your GlowVita account
            </p>
          </div>
        </Animated>

        <Animated animation="fade-in-up" delay={0.1}>
          <Card className="bg-white dark:bg-gray-900 border-pink-100 dark:border-gray-800">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-2xl font-bold text-center text-pink-700 dark:text-pink-400">Coming Soon</CardTitle>
              <CardDescription className="text-center">
                This feature is currently under development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <div className="py-8">
                <div className="inline-flex rounded-full bg-pink-50 p-6 dark:bg-pink-900/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-pink-600 dark:text-pink-400">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
                  Our password reset functionality is currently being developed.
                  <br />
                  Please check back soon or contact customer support for assistance.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Link href="/sign-in" className="w-full">
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white dark:bg-pink-700 dark:hover:bg-pink-600">
                  Return to Sign In
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </Animated>
      </div>
    </div>
  )
} 