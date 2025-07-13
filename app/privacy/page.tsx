import { Animated } from "@/components/ui/animated"

export const metadata = {
  title: "Privacy Policy - Selenae",
  description: "Selenae Privacy Policy and Data Usage",
}

export default function PrivacyPage() {
  return (
    <div className="bg-gradient-to-b from-white to-pink-50/30 dark:from-gray-900 dark:to-gray-800/30 min-h-[80vh] py-12">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Animated animation="fade-in-up">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
              Privacy Policy
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
                At Selenae, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our beauty and wellness services.
              </p>
              <p>
                Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </section>
          </Animated>

          <Animated animation="fade-in-up" delay={0.2}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                We collect information that you provide directly to us when you register for an account, create or modify your profile, schedule an appointment, or communicate with us.
              </p>
              <p className="mb-4">
                The types of data we may collect include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Personal identifiers (name, email address, phone number)</li>
                <li>Account credentials (username, password)</li>
                <li>Demographic information</li>
                <li>Beauty and wellness preferences</li>
                <li>Payment and transaction information</li>
                <li>Appointment history</li>
              </ul>
              <p>
                We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, pages viewed, and time spent on pages.
              </p>
            </section>
          </Animated>

          <Animated animation="fade-in-up" delay={0.3}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Providing and improving our services</li>
                <li>Processing and managing appointments</li>
                <li>Communicating with you about your appointments, account, and our services</li>
                <li>Personalizing your experience</li>
                <li>Sending promotional communications (with your consent)</li>
                <li>Analyzing usage patterns to improve our website and services</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </section>
          </Animated>

          <Animated animation="fade-in-up" delay={0.4}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-4">4. Sharing Your Information</h2>
              <p className="mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Beauty professionals and service providers to fulfill your appointments</li>
                <li>Third-party service providers who perform services on our behalf</li>
                <li>Business partners with your consent</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p>
                We do not sell your personal information to third parties for their direct marketing purposes.
              </p>
            </section>
          </Animated>

          <Animated animation="fade-in-up" delay={0.5}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-4">5. Your Rights and Choices</h2>
              <p className="mb-4">
                You have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Accessing and updating your personal information</li>
                <li>Opting out of marketing communications</li>
                <li>Requesting deletion of your account and personal information</li>
                <li>Setting browser cookies preferences</li>
              </ul>
              <p>
                To exercise these rights, please contact us at privacy@selenae.com.
              </p>
            </section>
          </Animated>

          <Animated animation="fade-in-up" delay={0.6}>
            <section>
              <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-4">6. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this privacy policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons.
              </p>
              <p>
                We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date at the top of this policy.
              </p>
            </section>
          </Animated>
        </div>
      </div>
    </div>
  )
}