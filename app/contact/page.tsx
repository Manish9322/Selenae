"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Clock, CalendarCheck, ArrowRight, Send, MessageSquare } from "lucide-react"
import { useState } from "react"
import { Animated, AnimatedGroup } from "@/components/ui/animated"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-rose-50/30 dark:from-gray-900 dark:to-gray-800/30">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-100/50 dark:bg-pink-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>
      
      <div className="container relative z-10 mx-auto px-6 md:px-8 py-20 md:py-24">
        {/* Hero section */}
        <Animated animation="fade-in-up">
          <div className="mb-20 space-y-5 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium mb-4">
              <MessageSquare size={16} className="text-pink-500" />
              <span>We'd Love to Hear from You</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-gray-900 dark:text-white">Get in Touch</span>
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">With Our Team</span>
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-600 dark:text-gray-300 text-lg md:text-xl pt-4 leading-relaxed">
              Contact our luxury beauty professionals for personalized consultations, appointments, or inquiries about our premium services and products.
        </p>
      </div>
        </Animated>

        <div className="grid gap-12 md:grid-cols-12">
          {/* Contact form */}
          <Animated animation="fade-in-up" delay={0.1} className="md:col-span-7">
            <Card className="overflow-hidden border-0 shadow-xl dark:shadow-pink-900/5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <div className="relative h-3 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500"></div>
              <CardHeader className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-1.5 bg-gradient-to-br from-rose-300 via-pink-400 to-violet-400 dark:from-rose-600 dark:via-pink-600 dark:to-violet-600 rounded-xl shadow-md">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded-lg">
                      <Send size={22} className="text-transparent bg-clip-text bg-gradient-to-br from-rose-500 via-pink-500 to-violet-500 dark:from-rose-400 dark:via-pink-400 dark:to-violet-400" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-pink-700 to-violet-700 dark:from-rose-300 dark:via-pink-300 dark:to-violet-300">
                    Send Us a Message
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base lg:text-lg">
                  Fill out the form below and our team will get back to you promptly.
                </CardDescription>
          </CardHeader>
              <CardContent className="p-8 md:p-10 pt-0">
            {isSubmitted ? (
                  <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 text-green-700 dark:text-green-300 border border-green-200/50 dark:border-green-700/30 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-green-100 dark:bg-green-700/30">
                        <svg className="h-6 w-6 text-green-700 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-xl">Thank you for your message!</h3>
                    </div>
                    <p className="text-base text-green-600 dark:text-green-300 ml-11">We'll respond to your inquiry as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                        <Label htmlFor="name" className="text-base font-medium text-gray-700 dark:text-gray-300">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                          placeholder="Your full name"
                    required
                          className="p-6 text-base bg-white dark:bg-gray-800 border-rose-100 dark:border-pink-900/50 focus-visible:ring-pink-500"
                  />
                </div>
                <div className="space-y-3">
                        <Label htmlFor="email" className="text-base font-medium text-gray-700 dark:text-gray-300">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                          placeholder="your.email@example.com"
                    required
                          className="p-6 text-base bg-white dark:bg-gray-800 border-rose-100 dark:border-pink-900/50 focus-visible:ring-pink-500"
                  />
                </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                        <Label htmlFor="phone" className="text-base font-medium text-gray-700 dark:text-gray-300">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                          placeholder="(123) 456-7890"
                          className="p-6 text-base bg-white dark:bg-gray-800 border-rose-100 dark:border-pink-900/50 focus-visible:ring-pink-500"
                  />
                </div>
                <div className="space-y-3">
                        <Label htmlFor="service" className="text-base font-medium text-gray-700 dark:text-gray-300">Service Interested In</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                          className="w-full rounded-md border border-rose-100 dark:border-pink-900/50 bg-white dark:bg-gray-800 px-6 py-5 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
                  >
                    <option value="">Select a service</option>
                          <option value="hair">Hair Styling & Treatment</option>
                          <option value="nails">Nail Art & Care</option>
                          <option value="spa">Spa & Massage Therapy</option>
                          <option value="facial">Facials & Skin Care</option>
                          <option value="makeup">Professional Makeup</option>
                          <option value="other">Other Services</option>
                  </select>
                      </div>
                </div>
                <div className="space-y-3">
                      <Label htmlFor="message" className="text-base font-medium text-gray-700 dark:text-gray-300">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                        placeholder="Please provide details about your inquiry..."
                    rows={5}
                    required
                        className="p-6 text-base resize-none bg-white dark:bg-gray-800 border-rose-100 dark:border-pink-900/50 focus-visible:ring-pink-500"
                  />
                </div>
                    <div className="pt-4">
                <Button 
                  type="submit" 
                        className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300 px-8 py-6 text-base font-medium rounded-xl" 
                  disabled={isSubmitting}
                >
                        <span className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                        </span>
                </Button>
                      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                        We respect your privacy and will never share your information with third parties.
                      </p>
                    </div>
              </form>
            )}
          </CardContent>
        </Card>
          </Animated>

          {/* Contact info & hours */}
          <Animated animation="fade-in-up" delay={0.2} className="md:col-span-5 space-y-8">
            <Card className="overflow-hidden border-0 shadow-lg dark:shadow-pink-900/5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-pink-700 to-violet-700 dark:from-rose-300 dark:via-pink-300 dark:to-violet-300">
                  Contact Details
                </CardTitle>
            </CardHeader>
              <CardContent className="space-y-8 p-8">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  </div>
                <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Visit Our Salon</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      123 Beauty Street, Suite 100<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-pink-600 dark:text-pink-400 font-medium mt-2 text-sm hover:text-pink-700 transition-colors duration-200">
                      <span>Get directions</span>
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
                <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base">
                      <a href="tel:+11234567890" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200">(123) 456-7890</a>
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      For bookings and inquiries
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
                <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base">
                      <a href="mailto:info@glowvita.com" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200">info@glowvita.com</a>
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
              </div>
            </CardContent>
          </Card>

            <Card className="overflow-hidden border-0 shadow-lg dark:shadow-pink-900/5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center gap-3 mb-1">
                  <Clock className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                  <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-violet-700 dark:from-rose-300 dark:to-violet-300">
                    Salon Hours
                  </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-8 pt-2">
              <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-pink-100/50 dark:border-pink-900/20 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Monday - Friday</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-pink-100/70 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300">Open Today</span>
                    </div>
                    <span className="text-pink-700 dark:text-pink-400 font-semibold">9:00 AM - 8:00 PM</span>
                </div>
                  <div className="flex justify-between border-b border-pink-100/50 dark:border-pink-900/20 pb-3">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Saturday</span>
                    <span className="text-pink-700 dark:text-pink-400 font-semibold">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Sunday</span>
                    <span className="text-pink-700 dark:text-pink-400 font-semibold">11:00 AM - 5:00 PM</span>
                  </div>
              </div>
            </CardContent>
          </Card>

            <Card className="overflow-hidden border-0 shadow-lg dark:shadow-pink-900/5 bg-gradient-to-br from-pink-600 via-rose-600 to-purple-700 text-white">
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center gap-3 mb-1">
                  <CalendarCheck className="h-5 w-5 text-pink-200" />
                  <CardTitle className="text-2xl font-bold text-white">
                    Book an Appointment
                  </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-6 p-8 pt-2">
                <p className="text-white/90 text-base leading-relaxed">
                  Ready to experience premium beauty services? Schedule your appointment now.
                </p>
                <Button className="w-full bg-white text-pink-600 hover:bg-pink-50 shadow-lg hover:shadow-xl px-8 py-6 text-base font-medium rounded-xl relative overflow-hidden group">
                  <span className="absolute inset-0 w-0 bg-gradient-to-r from-pink-50 to-white opacity-50 transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center gap-2">
                    <CalendarCheck className="h-5 w-5" />
                    Book Now
                  </span>
                </Button>
            </CardContent>
          </Card>
          </Animated>
      </div>

        {/* Map section */}
        <Animated animation="fade-in-up" delay={0.3} className="mt-24">
          <div className="relative overflow-hidden rounded-2xl shadow-xl h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 flex items-center justify-center">
              <p className="text-white text-center px-6">
                [Interactive Map Would Be Displayed Here]<br />
                <span className="text-sm opacity-80">Connect Google Maps API for live implementation</span>
              </p>
            </div>
          </div>
        </Animated>

        {/* FAQ section */}
        <Animated animation="fade-in-up" delay={0.4} className="mt-24">
          <div className="relative overflow-hidden rounded-2xl p-12 md:p-16 bg-gradient-to-r from-white to-pink-50/50 dark:from-gray-900/95 dark:to-gray-800/95 shadow-xl border border-pink-100/30 dark:border-pink-900/20 backdrop-blur-sm">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-200/20 to-purple-200/20 dark:from-pink-700/10 dark:to-purple-700/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-200/20 to-purple-200/20 dark:from-pink-700/10 dark:to-purple-700/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3 z-0"></div>
            <div className="absolute -left-24 top-1/2 w-48 h-48 bg-gradient-to-tr from-pink-100/30 to-purple-100/30 dark:from-pink-900/10 dark:to-purple-900/10 rounded-full blur-xl -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                    <path d="M12 17h.01"/>
                  </svg>
                  <span>Helpful Information</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Frequently <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400">Asked Questions</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Find answers to our most commonly asked questions. If you need further assistance, please don't hesitate to contact us.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                {[
                  {
                    question: "How do I cancel or reschedule my appointment?",
                    answer: "You can cancel or reschedule your appointment up to 24 hours before your scheduled time without any penalty. Please call us directly at (123) 456-7890 or use our online booking system through your customer account. If you need to cancel with less than 24 hours notice, a cancellation fee may apply depending on the service.",
                    icon: <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  },
                  {
                    question: "Do you offer gift cards for your services?",
                    answer: "Yes, we offer beautifully designed digital and physical gift cards in various denominations starting from $50. They can be purchased online through our website or in person at our salon. All gift cards are valid for one year from the purchase date and can be used for any service or product in our salon.",
                    icon: <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  },
                  {
                    question: "What happens if I'm late for my appointment?",
                    answer: "We understand that delays can happen. If you're running late, please call us as soon as possible. For arrivals up to 15 minutes late, we'll do our best to accommodate your full service. Beyond that, we may need to reschedule or modify your service to ensure we don't impact appointments for other clients.",
                    icon: <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  },
                  {
                    question: "Do you offer mobile beauty services?",
                    answer: "Yes, for select premium services we offer in-home or on-location beauty services for special events like weddings, photo shoots, or executive meetings. Our mobile services include hair styling, makeup application, and certain spa treatments. Please contact us at least two weeks in advance to check availability and pricing.",
                    icon: <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg>
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and digital payment methods including Apple Pay, Google Pay, and PayPal. We also accept cash payments. For services exceeding $500, we may require a deposit at the time of booking.",
                    icon: <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                  },
                  {
                    question: "Do you have parking available near the salon?",
                    answer: "Yes, we offer complimentary valet parking for all our clients during their appointments. Additionally, there is a public parking garage located directly beneath our building with hourly rates. Street parking is also available, but may be limited during peak hours.",
                    icon: <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                  }
                ].map((faq, index) => (
                  <div key={index} className="mb-5 [&:not(:last-child)]:border-b border-pink-100/40 dark:border-pink-900/20 pb-5">
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/30 dark:to-purple-900/30 border border-pink-100/50 dark:border-pink-800/30 flex items-center justify-center shadow-sm">
                            <div className="text-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400">
                              {faq.icon}
        </div>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                            {faq.question}
                          </h3>
                        </div>
                        <div className="relative ml-2 flex-shrink-0 h-6 w-6 rounded-full bg-pink-100/70 dark:bg-pink-900/30 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600 dark:text-pink-400 transform group-open:rotate-180 transition-transform duration-300">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </summary>
                      <div className="mt-6 ml-14 pl-4 border-l-2 border-pink-100 dark:border-pink-900/50">
                        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  </div>
                ))}
      </div>

              <div className="mt-12 flex justify-center">
                <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-pink-50/80 dark:bg-pink-900/20 backdrop-blur-sm border border-pink-100/50 dark:border-pink-900/30 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600 dark:text-pink-400">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <p className="text-gray-700 dark:text-gray-300">
                    Have a question not answered here? <a href="#" className="text-pink-600 dark:text-pink-400 font-medium hover:underline">Contact our team</a> for personalized assistance.
            </p>
          </div>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    </div>
  )
}

