import { Animated } from "@/components/ui/animated"

export const metadata = {
  title: "Terms of Service - Selenae",
  description: "Selenae Terms of Service and Conditions",
}

export default function TermsPage() {
  return (
    <div className="bg-gradient-to-b from-white to-pink-50/30 dark:from-gray-900 dark:to-gray-800/30 min-h-[80vh] py-12">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Animated animation="fade-in-up">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Last Updated: May 1, 2023
            </p>
          </div>
        </Animated>

        <div className="prose dark:prose-invert prose-pink max-w-none">
          <Animated animation="fade-in-up" delay={0.1}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Selenae. These Terms of Service govern your use of our website and services. By accessing or using Selenae, you agree to be bound by these Terms.
              </p>
              <p>
                Selenae provides beauty and wellness services, including but not limited to appointments, consultations, and product recommendations. These Terms outline the rules for using our platform and the various services we offer.
              </p>
            </section>
          </Animated>

          <Animated animation="fade-in-up" delay={0.2}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-4">2. Eligibility</h2>
              <p className="mb-4">
                To use Selenae, you must be at least 18 years old and capable of forming a binding contract. By using our services, you represent and warrant that you meet these requirements.
              </p>
              <p>
                If you are using the service on behalf of a business or other entity, you represent that you have the authority to bind that entity to these Terms.
              </p>
            </section>
          </Animated>

          <Animated animation="fade-in-up" delay={0.3}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-4">3. Your Account</h2>
              <p className="mb-4">
                When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding your password and for all activities that occur under your account.
              </p>
              <p>
                You agree to notify us immediately of any unauthorized use of your account. Selenae cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
              </p>
            </section>
          </Animated>

          <Animated animation="fade-in-up" delay={0.4}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-4">4. Booking and Cancellation</h2>
              <p className="mb-4">
                Selenae allows you to book appointments with beauty professionals through our platform. When you book an appointment, you agree to arrive on time and to provide at least 24 hours' notice for cancellations or rescheduling.
              </p>
              <p>
                Late cancellations or no-shows may result in a cancellation fee, as determined by the individual service provider's policies.
              </p>
            </section>
          </Animated>

          <Animated animation="fade-in-up" delay={0.5}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-4">5. Limitation of Liability</h2>
              <p className="mb-4">
                Selenae is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the reliability or availability of the service.
              </p>
              <p>
                To the maximum extent permitted by law, in no event shall Selenae be liable for any indirect, punitive, incidental, special, or consequential damages arising out of or in any way connected with your use of our services.
              </p>
            </section>
          </Animated>

          <Animated animation="fade-in-up" delay={0.6}>
            <section>
              <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-4">6. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p>
                By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>
          </Animated>
        </div>
      </div>
    </div>
  )
} 