import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, Clock, Star, Leaf } from "lucide-react"
import Link from "next/link"
import { Animated, AnimatedGroup } from "@/components/ui/animated"

export const metadata = {
  title: "Luxury Beauty Services - GlowVita",
  description: "Experience premium beauty and wellness services tailored to enhance your natural beauty",
}

export default function ServicesPage() {
  const services = [
    {
      title: "Hair Styling",
      description: "Professional hair styling services for all hair types",
      features: ["Haircuts & Styling", "Hair Coloring", "Highlights & Balayage", "Hair Treatments"],
      price: "$49",
      period: "starting at",
      icon: "✂️"
    },
    {
      title: "Spa & Massage",
      description: "Relaxing spa treatments and therapeutic massages",
      features: ["Swedish Massage", "Deep Tissue Massage", "Hot Stone Therapy", "Aromatherapy"],
      price: "$79",
      period: "per session",
      featured: true,
      icon: "🌿"
    },
    {
      title: "Nail Care",
      description: "Complete nail care services for hands and feet",
      features: ["Manicures", "Pedicures", "Gel Polish", "Nail Art"],
      price: "$35",
      period: "starting at",
      icon: "💅"
    },
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-pink-50/30 dark:from-gray-900 dark:to-gray-800/30">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-100/50 dark:bg-pink-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>
      
      <div className="container relative z-10 mx-auto px-6 md:px-8 py-20 md:py-24">
        {/* Hero section */}
        <Animated animation="fade-in-up">
          <div className="mb-20 space-y-5 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium mb-4">
              <Sparkles size={16} className="text-pink-500" />
              <span>Premium Beauty Experiences</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-gray-900 dark:text-white">Enhance Your Natural</span>
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Beauty & Wellness</span>
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-600 dark:text-gray-300 text-lg md:text-xl pt-4 leading-relaxed">
              Experience personalized beauty services delivered by our expert stylists and therapists, designed to bring out your unique beauty and restore your well-being.
            </p>
            <div className="pt-6 flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-base shadow-md">
                  Book an Appointment
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" size="lg" className="border-pink-200 text-pink-700 dark:border-pink-700 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20 px-8 py-6 text-base">
                  Explore Services
                </Button>
              </Link>
            </div>
      </div>
        </Animated>

        {/* Services section */}
        <div id="services" className="pt-8">
          <div className="text-center mb-16">
            <Animated animation="fade-in-up">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium mb-4">
                <Star size={16} className="text-pink-500" />
                <span>Our Signature Services</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-4 text-gray-900 dark:text-white">
                Premium Beauty <span className="text-pink-600 dark:text-pink-400">Services</span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 text-lg pt-4">
                Indulge in our carefully crafted services designed to elevate your beauty and wellness experience.
              </p>
            </Animated>
          </div>
          
          <div className="grid gap-8 md:gap-10 md:grid-cols-3">
            {services.map((service, index) => (
              <Animated key={service.title} animation="fade-in-up" delay={0.1 * (index + 1)}>
                <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${service.featured ? "border-pink-300 shadow-lg" : "border-pink-100 dark:border-gray-800"}`}>
                  {service.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="relative flex items-center justify-center px-3 py-1.5 rounded-full backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-lg">
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-80"></span>
                        <div className="relative flex items-center">
                          <Star className="h-3.5 w-3.5 text-white mr-1 fill-white" />
                          <span className="text-xs font-medium text-white">Popular</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <CardHeader className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-xl mr-4">
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-8 pb-4">
                    <div className="mb-6 flex items-baseline">
                      <span className="text-3xl font-bold text-pink-600 dark:text-pink-400">{service.price}</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-1"> {service.period}</span>
                    </div>
                    <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                          <Check className="mr-3 h-5 w-5 text-pink-600 dark:text-pink-400" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
                  <CardFooter className="px-8 pb-8 pt-4">
                    <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-5 text-base shadow-md transition-all duration-300 hover:shadow-lg">Book Now</Button>
            </CardFooter>
          </Card>
              </Animated>
        ))}
      </div>
        </div>
        
        {/* Salon Process Section */}
        <div className="my-28 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50/50 to-purple-50/50 dark:from-pink-900/10 dark:to-purple-900/10 rounded-3xl transform -skew-y-1 z-0"></div>
          <div className="relative z-10 py-16 px-6 sm:px-10">
            <Animated animation="fade-in-up">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium mb-4">
                  <Clock size={16} className="text-pink-500" />
                  <span>Our Approach</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-4 text-gray-900 dark:text-white">
                  The <span className="text-pink-600 dark:text-pink-400">GlowVita</span> Experience
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 text-lg pt-4">
                  Our professional beauty services follow a four-step process designed to ensure you receive the best possible care and results.
                </p>
              </div>
            </Animated>
            
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-200 to-purple-200 dark:from-pink-800/50 dark:to-purple-800/50 transform -translate-x-1/2 z-0"></div>
              
              <div className="grid gap-16 md:gap-0">
                <Animated animation="fade-in-right" delay={0.1}>
                  <div className="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="md:text-right">
                      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 relative z-10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-pink-100 dark:border-gray-700">
                        <div className="md:hidden absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-lg font-bold shadow-md overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-90"></div>
                          <div className="absolute inset-0 bg-[url('/images/texture-light.png')] bg-cover opacity-10 mix-blend-overlay"></div>
                          <span className="relative z-10 text-white drop-shadow-sm">1</span>
                        </div>
                        <div className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-lg font-bold shadow-lg z-20 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-90"></div>
                          <div className="absolute inset-0 bg-[url('/images/texture-light.png')] bg-cover opacity-10 mix-blend-overlay"></div>
                          <span className="relative z-10 text-white drop-shadow-sm">1</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Personal Consultation</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                          We begin with an in-depth consultation to understand your unique beauty goals, preferences, and concerns. Our experts will assess your needs and recommend personalized treatments.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex justify-start items-center">
                      <div className="bg-pink-50 dark:bg-pink-900/20 rounded-full p-6 shadow-md">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-600 dark:text-pink-400">
                          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4.58 16.59L4 17.17V4H20V16ZM7 9H9V11H7V9ZM15 9H17V11H15V9ZM11 9H13V11H11V9Z" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Animated>
                
                <Animated animation="fade-in-left" delay={0.2}>
                  <div className="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="hidden md:flex justify-end items-center">
                      <div className="bg-pink-50 dark:bg-pink-900/20 rounded-full p-6 shadow-md">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-600 dark:text-pink-400">
                          <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 22 20.1 22 19V5C22 3.9 21.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 relative z-10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-pink-100 dark:border-gray-700">
                        <div className="md:hidden absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-lg font-bold shadow-md overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-90"></div>
                          <div className="absolute inset-0 bg-[url('/images/texture-light.png')] bg-cover opacity-10 mix-blend-overlay"></div>
                          <span className="relative z-10 text-white drop-shadow-sm">2</span>
                        </div>
                        <div className="hidden md:flex absolute top-1/2 -left-6 transform -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-lg font-bold shadow-lg z-20 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-90"></div>
                          <div className="absolute inset-0 bg-[url('/images/texture-light.png')] bg-cover opacity-10 mix-blend-overlay"></div>
                          <span className="relative z-10 text-white drop-shadow-sm">2</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Preparation & Planning</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                          Our professionals carefully prepare all tools, products, and equipment for your service. We use only premium products selected specifically for your beauty needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </Animated>
                
                <Animated animation="fade-in-right" delay={0.3}>
                  <div className="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="md:text-right">
                      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 relative z-10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-pink-100 dark:border-gray-700">
                        <div className="md:hidden absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-lg font-bold shadow-md overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-90"></div>
                          <div className="absolute inset-0 bg-[url('/images/texture-light.png')] bg-cover opacity-10 mix-blend-overlay"></div>
                          <span className="relative z-10 text-white drop-shadow-sm">3</span>
                        </div>
                        <div className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-lg font-bold shadow-lg z-20 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-90"></div>
                          <div className="absolute inset-0 bg-[url('/images/texture-light.png')] bg-cover opacity-10 mix-blend-overlay"></div>
                          <span className="relative z-10 text-white drop-shadow-sm">3</span>
            </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Expert Service Delivery</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                          Relax and enjoy as our skilled professionals transform your look. We combine technical expertise with artistic vision to deliver exceptional results that exceed your expectations.
            </p>
          </div>
                    </div>
                    <div className="hidden md:flex justify-start items-center">
                      <div className="bg-pink-50 dark:bg-pink-900/20 rounded-full p-6 shadow-md">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-600 dark:text-pink-400">
                          <path d="M20 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Animated>
                
                <Animated animation="fade-in-left" delay={0.4}>
                  <div className="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="hidden md:flex justify-end items-center">
                      <div className="bg-pink-50 dark:bg-pink-900/20 rounded-full p-6 shadow-md">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-600 dark:text-pink-400">
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 relative z-10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-pink-100 dark:border-gray-700">
                        <div className="md:hidden absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-lg font-bold shadow-md overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-90"></div>
                          <div className="absolute inset-0 bg-[url('/images/texture-light.png')] bg-cover opacity-10 mix-blend-overlay"></div>
                          <span className="relative z-10 text-white drop-shadow-sm">4</span>
                        </div>
                        <div className="hidden md:flex absolute top-1/2 -left-6 transform -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-lg font-bold shadow-lg z-20 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-90"></div>
                          <div className="absolute inset-0 bg-[url('/images/texture-light.png')] bg-cover opacity-10 mix-blend-overlay"></div>
                          <span className="relative z-10 text-white drop-shadow-sm">4</span>
            </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Aftercare & Guidance</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                          We provide detailed aftercare advice and product recommendations to help you maintain your new look. Our relationship continues beyond your visit with ongoing support.
            </p>
          </div>
                    </div>
                  </div>
                </Animated>
              </div>
            </div>
          </div>
        </div>

        {/* Specialized Services */}
        <div className="my-28">
          <Animated animation="fade-in-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium mb-4">
                <Sparkles size={16} className="text-pink-500" />
                <span>Tailored Experiences</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-4 text-gray-900 dark:text-white">
                Specialized <span className="text-pink-600 dark:text-pink-400">Beauty Services</span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 text-lg pt-4">
                Premium beauty experiences crafted for specific occasions and personalized needs.
              </p>
            </div>
          </Animated>
          
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            <Animated animation="fade-in-left">
              <Card className="overflow-hidden border-0 shadow-lg group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-[url('/images/bridal-services.jpg')] bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2">Bridal Services</h3>
                    <p className="text-white/90 text-sm">
                      Look radiant on your special day
                    </p>
                  </div>
                </div>
                <CardContent className="px-8 py-6">
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    Our comprehensive bridal beauty packages are designed to ensure you look and feel exquisite on your wedding day. From trials to the main event, we'll be with you every step of the way.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-xl">
                      <h4 className="text-sm font-semibold text-pink-700 dark:text-pink-400 mb-1">Bridal Trial</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Perfect your look before the big day</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-xl">
                      <h4 className="text-sm font-semibold text-pink-700 dark:text-pink-400 mb-1">Wedding Day</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Complete styling for your ceremony</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-xl">
                      <h4 className="text-sm font-semibold text-pink-700 dark:text-pink-400 mb-1">Bridal Party</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Services for your entire entourage</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-xl">
                      <h4 className="text-sm font-semibold text-pink-700 dark:text-pink-400 mb-1">Packages</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Customized to your wedding needs</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-8 pb-8 pt-0">
                  <Button variant="outline" className="w-full border-pink-200 text-pink-700 hover:bg-pink-50 dark:border-pink-700 dark:text-pink-400 dark:hover:bg-pink-900/20 px-6 py-5 text-base group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600 transition-all duration-300">
                    Explore Bridal Services
                  </Button>
                </CardFooter>
              </Card>
            </Animated>

            <Animated animation="fade-in-right">
              <Card className="overflow-hidden border-0 shadow-lg group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-[url('/images/mens-grooming.jpg')] bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2">Men's Grooming</h3>
                    <p className="text-white/90 text-sm">
                      Premium grooming experiences
            </p>
          </div>
        </div>
                <CardContent className="px-8 py-6">
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    Our dedicated men's grooming services combine traditional techniques with modern styles to help you achieve a polished, confident look that fits your lifestyle and personality.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-xl">
                      <h4 className="text-sm font-semibold text-pink-700 dark:text-pink-400 mb-1">Haircuts</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Precision cuts and styling</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-xl">
                      <h4 className="text-sm font-semibold text-pink-700 dark:text-pink-400 mb-1">Beard Service</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Trims, shaves, and grooming</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-xl">
                      <h4 className="text-sm font-semibold text-pink-700 dark:text-pink-400 mb-1">Facials</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Skincare for men's unique needs</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-xl">
                      <h4 className="text-sm font-semibold text-pink-700 dark:text-pink-400 mb-1">Packages</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Complete grooming experiences</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-8 pb-8 pt-0">
                  <Button variant="outline" className="w-full border-pink-200 text-pink-700 hover:bg-pink-50 dark:border-pink-700 dark:text-pink-400 dark:hover:bg-pink-900/20 px-6 py-5 text-base group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600 transition-all duration-300">
                    Explore Men's Grooming
                  </Button>
                </CardFooter>
              </Card>
            </Animated>
      </div>

          <div className="grid gap-8 md:gap-10 md:grid-cols-3 mt-10">
            <Animated animation="fade-in-up" delay={0.1}>
              <Card className="border-pink-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardHeader className="p-6">
                  <div className="mb-4 bg-pink-100 dark:bg-pink-900/30 h-12 w-12 flex items-center justify-center rounded-full">
                    <Leaf className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">Skin Care Services</CardTitle>
                </CardHeader>
                <CardContent className="px-6 flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Rejuvenating facials and treatments that restore, hydrate, and revitalize your skin for a natural glow.
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="link" className="text-pink-600 dark:text-pink-400 p-0 hover:no-underline">
                    Learn More &rarr;
                  </Button>
                </CardFooter>
              </Card>
            </Animated>
            
            <Animated animation="fade-in-up" delay={0.2}>
              <Card className="border-pink-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardHeader className="p-6">
                  <div className="mb-4 bg-pink-100 dark:bg-pink-900/30 h-12 w-12 flex items-center justify-center rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 dark:text-pink-400">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.31 11.14C10.54 10.69 9.97 10.2 9.97 9.47C9.97 8.63 10.76 8.04 12.07 8.04C13.45 8.04 13.97 8.7 14.03 9.64H15.53C15.47 8.29 14.72 7.11 13.07 6.67V5H11.07V6.64C9.53 7.01 8.38 8.02 8.38 9.47C8.38 11.24 9.83 12.04 12.02 12.56C13.95 13.03 14.35 13.68 14.35 14.4C14.35 14.92 13.97 15.72 12.07 15.72C10.3 15.72 9.65 15 9.54 14.06H8.04C8.16 15.72 9.52 16.75 11.07 17.09V18.73H13.07V17.12C14.62 16.79 15.94 15.85 15.94 14.4C15.94 12.19 14.08 11.59 12.31 11.14Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">Beauty Packages</CardTitle>
            </CardHeader>
                <CardContent className="px-6 flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Save with our curated beauty packages combining multiple services for a complete beauty transformation.
                  </p>
            </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="link" className="text-pink-600 dark:text-pink-400 p-0 hover:no-underline">
                    Learn More &rarr;
                  </Button>
            </CardFooter>
          </Card>
            </Animated>
            
            <Animated animation="fade-in-up" delay={0.3}>
              <Card className="border-pink-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardHeader className="p-6">
                  <div className="mb-4 bg-pink-100 dark:bg-pink-900/30 h-12 w-12 flex items-center justify-center rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 dark:text-pink-400">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">VIP Memberships</CardTitle>
            </CardHeader>
                <CardContent className="px-6 flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Join our membership program for exclusive benefits, priority booking, and special discounts on all services.
                  </p>
            </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="link" className="text-pink-600 dark:text-pink-400 p-0 hover:no-underline">
                    Learn More &rarr;
                  </Button>
            </CardFooter>
          </Card>
            </Animated>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="my-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/10 dark:to-purple-900/10 rounded-3xl z-0"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-pink-200/30 dark:bg-pink-900/20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl z-0"></div>
          
          <div className="relative z-10 py-16 px-6 sm:px-10">
            <Animated animation="fade-in-up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium mb-4">
                  <Star size={16} className="text-pink-500" />
                  <span>Client Experiences</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-4 text-gray-900 dark:text-white">
                  What Our <span className="text-pink-600 dark:text-pink-400">Clients Say</span>
                </h2>
              </div>
            </Animated>
            
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              <Animated animation="fade-in-up" delay={0.1}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md relative">
                  <div className="absolute -top-4 left-6 text-5xl text-pink-200 dark:text-pink-800">"</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 pt-4">
                    The hair styling services at GlowVita are exceptional. My stylist listened carefully to what I wanted and delivered beyond my expectations. I've never received so many compliments!
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-pink-100 dark:bg-pink-900/30"></div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Jennifer K.</p>
                      <p className="text-xs text-pink-600 dark:text-pink-400">Hair Styling Client</p>
                    </div>
                  </div>
                </div>
              </Animated>
              
              <Animated animation="fade-in-up" delay={0.2}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md relative">
                  <div className="absolute -top-4 left-6 text-5xl text-pink-200 dark:text-pink-800">"</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 pt-4">
                    I treat myself to a monthly massage at GlowVita and it's always a highlight. The therapists are skilled and attentive, creating a truly relaxing experience every time.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-pink-100 dark:bg-pink-900/30"></div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Michael T.</p>
                      <p className="text-xs text-pink-600 dark:text-pink-400">Massage Client</p>
                    </div>
                  </div>
                </div>
              </Animated>
              
              <Animated animation="fade-in-up" delay={0.3}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md relative">
                  <div className="absolute -top-4 left-6 text-5xl text-pink-200 dark:text-pink-800">"</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 pt-4">
                    The bridal package was perfect for my wedding day. The team arrived on time and made sure everyone in my party looked amazing. It made the day completely stress-free!
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-pink-100 dark:bg-pink-900/30"></div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Sarah L.</p>
                      <p className="text-xs text-pink-600 dark:text-pink-400">Bridal Client</p>
                    </div>
                  </div>
                </div>
              </Animated>
            </div>
        </div>
      </div>

        {/* Final CTA */}
        <Animated animation="scale-in">
          <div className="my-28 rounded-lg overflow-hidden relative shadow-xl group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 opacity-80 transition-opacity duration-700 group-hover:opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/images/cta-background.jpg')] bg-cover bg-center mix-blend-overlay transition-transform duration-700 group-hover:scale-105"></div>
            
            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 mix-blend-overlay"></div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
            
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-white">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                  <div className="md:w-7/12">
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
                      <Sparkles size={16} className="text-pink-200" />
                      <span>Experience Luxury Beauty</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                      Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200">Transform</span> Your Look?
                    </h2>
                    <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-xl">
                      Experience the GlowVita difference with our premium beauty and wellness services. Our expert stylists and therapists are dedicated to enhancing your natural beauty and helping you feel your absolute best.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/contact">
                        <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 shadow-lg px-8 py-6 text-base relative overflow-hidden group/btn">
                          <span className="absolute inset-0 w-0 bg-gradient-to-r from-pink-100 to-pink-200 transition-all duration-300 ease-out group-hover/btn:w-full"></span>
                          <span className="relative flex items-center">
                            Book Your Appointment
                            <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </span>
          </Button>
        </Link>
                      <Button variant="outline" size="lg" className="border-white/60 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm px-8 py-6 text-base relative overflow-hidden group/price">
                        <span className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover/price:opacity-100 transition-opacity duration-300 rounded-md"></span>
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent transform scale-x-0 group-hover/price:scale-x-100 transition-transform duration-500"></span>
                        <span className="relative flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                            <path d="M21 5H3"></path>
                            <path d="M21 12H3"></path>
                            <path d="M12 19H3"></path>
                            <path d="M19 16l-3 3 3 3"></path>
                          </svg>
                          View Price List
                        </span>
                      </Button>
                    </div>
                    
                    {/* Trust indicators */}
                    <div className="flex items-center gap-6 mt-10">
                      <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold text-white">500+</div>
                        <div className="text-xs text-white/80">Happy Clients</div>
                      </div>
                      <div className="w-px h-10 bg-white/20"></div>
                      <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold text-white">15+</div>
                        <div className="text-xs text-white/80">Expert Stylists</div>
                      </div>
                      <div className="w-px h-10 bg-white/20"></div>
                      <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold text-white">4.9</div>
                        <div className="text-xs text-white/80">Star Rating</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card element */}
                  <div className="md:w-5/12 relative hidden md:block">
                    <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-lg blur-xl"></div>
                    <div className="relative bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20 shadow-2xl transform transition-transform duration-300 group-hover:translate-y-2">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-lg font-bold text-white">Special Offer</h3>
                          <p className="text-sm text-white/70">First-time clients only</p>
                        </div>
                        <div className="bg-pink-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-sm font-medium text-white">20% OFF</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Check className="h-5 w-5 text-pink-300 mr-3" />
                          <span className="text-sm text-white">Complimentary consultation</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="h-5 w-5 text-pink-300 mr-3" />
                          <span className="text-sm text-white">Personalized beauty plan</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="h-5 w-5 text-pink-300 mr-3" />
                          <span className="text-sm text-white">Product samples included</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="h-5 w-5 text-pink-300 mr-3" />
                          <span className="text-sm text-white">Valid on any service over $50</span>
                        </div>
                      </div>
                      <div className="mt-8">
                        <Button className="w-full bg-white text-pink-600 hover:bg-pink-50 text-sm font-medium">
                          Claim Offer
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    </div>
  )
}

