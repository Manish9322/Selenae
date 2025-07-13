import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata = {
  title: "FAQ - GlowVita",
  description: "Frequently asked questions about our beauty and wellness booking platform",
}

export default function FaqPage() {
  const categories = [
    { id: "general", label: "General" },
    { id: "booking", label: "Booking" },
    { id: "services", label: "Services" },
    { id: "payment", label: "Payment & Pricing" },
  ]

  const faqs = {
    general: [
      {
        question: "What is GlowVita?",
        answer:
          "GlowVita is a comprehensive beauty and wellness booking platform that connects clients with top-rated salons and spas. We make it easy to discover, book, and enjoy beauty and wellness services in your area.",
      },
      {
        question: "How do I create an account?",
        answer:
          "Creating an account is simple. Click on the 'Sign Up' button in the top right corner of our website, enter your email address and create a password. You can also sign up using your Google or Facebook account for faster access.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Yes, we take data security very seriously. All personal information is encrypted and stored securely. We never share your information with third parties without your consent. Please review our Privacy Policy for more details.",
      },
      {
        question: "How do I contact customer support?",
        answer:
          "You can reach our customer support team by email at support@glowvita.com, by phone at (123) 456-7890, or through the contact form on our website. Our support team is available Monday through Friday from 9:00 AM to 6:00 PM.",
      },
    ],
    booking: [
      {
        question: "How do I book an appointment?",
        answer:
          "To book an appointment, search for a salon or service, select your preferred date and time, choose your stylist if applicable, and confirm your booking. You'll receive an email confirmation with all the details of your appointment.",
      },
      {
        question: "Can I book for someone else?",
        answer:
          "Yes, you can book appointments for friends or family members. During the booking process, you'll have the option to enter the client's name and contact information.",
      },
      {
        question: "How do I cancel or reschedule an appointment?",
        answer:
          "You can cancel or reschedule your appointment through your account dashboard. Navigate to 'My Appointments,' find the booking you want to change, and select 'Cancel' or 'Reschedule.' Please note that cancellation policies vary by salon.",
      },
      {
        question: "What is the cancellation policy?",
        answer:
          "Cancellation policies vary by salon. Generally, cancellations made at least 24 hours before the appointment time are free of charge. Late cancellations or no-shows may incur a fee, typically 50-100% of the service price. Always check the specific salon's policy during booking.",
      },
    ],
    services: [
      {
        question: "What types of services can I book?",
        answer:
          "GlowVita offers a wide range of beauty and wellness services including hair styling and coloring, nail care, facials, massages, waxing, makeup application, and more. The specific services available depend on the salons in your area.",
      },
      {
        question: "How do I know if a salon is good?",
        answer:
          "All salons on our platform are vetted for quality and professionalism. You can also read verified customer reviews, view salon ratings, and browse photos of their work to help you make an informed decision.",
      },
      {
        question: "Can I request a specific stylist?",
        answer:
          "Yes, many salons allow you to select a specific stylist when booking. If this option is available, you'll see a list of stylists to choose from during the booking process.",
      },
      {
        question: "What should I do if I'm not satisfied with a service?",
        answer:
          "If you're not satisfied with a service, we recommend first speaking directly with the salon. Most salons want to ensure your satisfaction and will work to resolve any issues. If you're unable to resolve the matter with the salon, please contact our customer support team.",
      },
    ],
    payment: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Apple Pay. Some salons may also accept payment at the time of service.",
      },
      {
        question: "When am I charged for my booking?",
        answer:
          "Payment policies vary by salon. Some require a deposit at the time of booking, while others only require payment after the service is completed. The payment details will be clearly displayed during the booking process.",
      },
      {
        question: "Do you offer gift cards?",
        answer:
          "Yes, we offer digital gift cards that can be used at any participating salon on our platform. Gift cards can be purchased in various denominations and sent directly to the recipient via email.",
      },
      {
        question: "How does the loyalty program work?",
        answer:
          "Our loyalty program rewards you for booking through GlowVita. You earn points for every booking, which can be redeemed for discounts on future services, free add-ons, or exclusive offers. You can track your points and rewards in your account dashboard.",
      },
    ],
  }

  return (
    <div className="container mx-auto px-6 md:px-8 py-20 md:py-24">
      <div className="mb-16 space-y-5 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Frequently Asked Questions</h1>
        <p className="mx-auto max-w-[700px] text-gray-600 text-lg pt-2">
          Find answers to common questions about our beauty and wellness booking platform.
        </p>
      </div>

      <Tabs defaultValue="general" className="mb-16">
        <div className="flex justify-center mb-8">
          <TabsList className="p-1">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="px-5 py-2.5 text-base data-[state=active]:bg-pink-100 data-[state=active]:text-pink-700"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs[category.id as keyof typeof faqs].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-pink-100 py-2">
                  <AccordionTrigger className="text-left font-medium text-lg text-pink-800 py-4 hover:text-pink-700">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 pb-4 pr-6 pl-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-20 space-y-10">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-pink-800">Popular Topics</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Card className="p-8 border-pink-100 hover:shadow-md transition-all">
            <h3 className="mb-4 text-xl font-bold text-pink-800">Booking Process</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Learn how to book, reschedule, or cancel your salon appointments.
            </p>
            <Link href="/help-center/booking" className="text-base font-medium text-pink-600 hover:text-pink-700 hover:underline">
              Learn more
            </Link>
          </Card>
          <Card className="p-8 border-pink-100 hover:shadow-md transition-all">
            <h3 className="mb-4 text-xl font-bold text-pink-800">Payment Options</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Find out about our secure payment methods and billing policies.
            </p>
            <Link href="/help-center/payment" className="text-base font-medium text-pink-600 hover:text-pink-700 hover:underline">
              Learn more
            </Link>
          </Card>
          <Card className="p-8 border-pink-100 hover:shadow-md transition-all">
            <h3 className="mb-4 text-xl font-bold text-pink-800">Loyalty Program</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Discover how to earn and redeem points for salon services.
            </p>
            <Link href="/help-center/loyalty" className="text-base font-medium text-pink-600 hover:text-pink-700 hover:underline">
              Learn more
            </Link>
          </Card>
          <Card className="p-8 border-pink-100 hover:shadow-md transition-all">
            <h3 className="mb-4 text-xl font-bold text-pink-800">Gift Cards</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Learn how to purchase and redeem gift cards for salon services.
            </p>
            <Link href="/help-center/gift-cards" className="text-base font-medium text-pink-600 hover:text-pink-700 hover:underline">
              Learn more
            </Link>
          </Card>
          <Card className="p-8 border-pink-100 hover:shadow-md transition-all">
            <h3 className="mb-4 text-xl font-bold text-pink-800">Salon Partners</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Information for salon owners interested in joining our platform.
            </p>
            <Link href="/help-center/partners" className="text-base font-medium text-pink-600 hover:text-pink-700 hover:underline">
              Learn more
            </Link>
          </Card>
          <Card className="p-8 border-pink-100 hover:shadow-md transition-all">
            <h3 className="mb-4 text-xl font-bold text-pink-800">Mobile App</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Get help with downloading and using our mobile booking app.
            </p>
            <Link href="/help-center/mobile-app" className="text-base font-medium text-pink-600 hover:text-pink-700 hover:underline">
              Learn more
            </Link>
          </Card>
        </div>
      </div>

      <div className="mt-20 rounded-2xl bg-gradient-to-r from-pink-50 via-pink-100 to-purple-50 p-12 md:p-16 shadow-md">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className="text-2xl font-bold md:text-3xl text-pink-800">Still have questions?</h2>
          <p className="text-gray-700 text-lg max-w-2xl">
            Our support team is here to help. Contact us and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row mt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-base shadow-sm">
                Contact Us
              </Button>
            </Link>
            <Link href="/help-center">
              <Button variant="outline" size="lg" className="border-pink-200 text-pink-700 hover:bg-pink-50 px-8 py-6 text-base">
                Visit Help Center
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

