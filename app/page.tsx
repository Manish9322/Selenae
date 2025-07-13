import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, CheckCircle, Clock, Users, Award, MessageSquare, Heart, ArrowRight, Calendar, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Animated, AnimatedGroup } from "@/components/ui/animated"
import { Metadata } from "next"

export const metadata = {
  title: "Selenae - Beauty & Wellness Booking",
description: "Book your perfect beauty and wellness experience with Selenae",
}

export default function HomePage() {
  const testimonials = [
    {
      name: "Sophie Wright",
      content: "I've been using Selenae for all my salon appointments. The service is always exceptional and the booking process is seamless!",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
    {
      name: "Michael Chen",
      content: "Their mobile app makes booking so convenient. I love how I can see my favorite stylists' availability instantly.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
    {
      name: "Emma Johnson",
      content: "The spa services are incredible. I always leave feeling completely refreshed and rejuvenated.",
      avatar: "/placeholder-user.jpg",
      rating: 4,
    },
  ]

  const featuredServices = [
    {
      title: "Hair Styling",
      description: "Expert cuts, coloring, and styling for all hair types",
      icon: "/placeholder-logo.svg",
      href: "/services",
    },
    {
      title: "Skin Care",
      description: "Revitalizing facials and treatments for healthy skin",
      icon: "/placeholder-logo.svg",
      href: "/services",
    },
    {
      title: "Nail Services",
      description: "Manicures and pedicures with premium products",
      icon: "/placeholder-logo.svg",
      href: "/services",
    },
    {
      title: "Massage Therapy",
      description: "Relaxing massages to relieve stress and tension",
      icon: "/placeholder-logo.svg",
      href: "/services",
    },
  ]

  const beautyExperts = [
    {
      name: "Sophia Anderson",
      role: "Senior Hair Stylist",
      bio: "Sophia specializes in cutting-edge hair techniques with over 10 years of experience in luxury salons.",
      image: "/placeholder.jpg"
    },
    {
      name: "James Wilson",
      role: "Makeup Artist",
      bio: "A celebrity makeup artist with expertise in creating flawless looks for special occasions and photoshoots.",
      image: "/placeholder.jpg"
    },
    {
      name: "Emily Chen",
      role: "Skincare Specialist",
      bio: "Emily is a certified dermatologist who brings scientific expertise to all her facial treatments.",
      image: "/placeholder.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "Massage Therapist",
      bio: "Michael combines traditional and contemporary massage techniques for a uniquely restorative experience.",
      image: "/placeholder.jpg"
    }
  ]

  const beautyTips = [
    {
      title: "Ultimate Guide to Winter Skincare",
      excerpt: "Protect your skin during the harsh winter months with these essential tips and product recommendations.",
      image: "/placeholder.jpg",
      category: "Skincare",
      date: "Feb 15, 2023",
    },
    {
      title: "Hair Color Trends for 2023",
      excerpt: "Discover the hottest hair color trends of the year and find the perfect shade for your style.",
      image: "/placeholder.jpg",
      category: "Hair",
      date: "Mar 5, 2023",
    },
    {
      title: "Self-Care Rituals to Reduce Stress",
      excerpt: "Incorporate these wellness practices into your routine to promote relaxation and mental clarity.",
      image: "/placeholder.jpg",
      category: "Wellness",
      date: "Apr 12, 2023",
    },
  ]

  const questions = [
    {
      question: "How do I schedule an appointment?",
      answer: "Simply create an account, browse our services, select your preferred date and time, choose your stylist, and confirm your booking. You'll receive an email confirmation immediately."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand plans change. You can cancel or reschedule your appointment up to 24 hours before your scheduled time without any charge."
    },
    {
      question: "Can I request a specific beauty professional?",
      answer: "Absolutely! You can view profiles of our beauty professionals and select the one who best matches your preferences when booking your appointment."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept all major credit cards, digital wallets (Apple Pay, Google Pay), and gift cards for payment directly through our secure platform."
    },
  ]

  const featuredSalons = [
    {
      id: "elegance-salon",
      name: "Elegance Salon & Spa",
      location: "Downtown, New York",
      rating: 4.9,
      reviews: 287,
      specialty: "Hair styling, Facials, Massages",
      image: "/placeholder.jpg",
      verified: true,
      premium: true
    },
    {
      id: "pure-bliss",
      name: "Pure Bliss Wellness",
      location: "Beverly Hills, Los Angeles",
      rating: 4.8,
      reviews: 193,
      specialty: "Spa treatments, Aromatherapy, Nail art",
      image: "/placeholder.jpg",
      verified: true,
      premium: false
    },
    {
      id: "glow-studio",
      name: "Glow Beauty Studio",
      location: "SoHo, New York",
      rating: 4.9,
      reviews: 215,
      specialty: "Makeup, Skincare, Brow sculpting",
      image: "/placeholder.jpg",
      verified: true,
      premium: true
    },
    {
      id: "serene-spa",
      name: "Serene Day Spa & Retreat",
      location: "Miami Beach, Florida",
      rating: 4.7,
      reviews: 163,
      specialty: "Hot stone therapy, Deep tissue massage, Facials",
      image: "/placeholder.jpg",
      verified: true,
      premium: true
    },
    {
      id: "lavender-beauty",
      name: "Lavender Beauty Lounge",
      location: "Austin, Texas",
      rating: 4.8,
      reviews: 178,
      specialty: "Natural skincare, Organic treatments, Manicures",
      image: "/placeholder.jpg",
      verified: true,
      premium: false
    },
    {
      id: "urban-chic",
      name: "Urban Chic Hair Studio",
      location: "Chicago, Illinois",
      rating: 4.9,
      reviews: 201,
      specialty: "Hair coloring, Extensions, Styling",
      image: "/placeholder.jpg",
      verified: true,
      premium: true
    }
  ]

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 py-24 md:py-32 w-full">
        <div className="absolute inset-0 z-0 opacity-20 bg-dotted-pattern"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
            <Animated animation="fade-in-left" duration={0.8}>
              <div className="max-w-2xl space-y-8 text-center md:text-left">
                <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-heading">
                  Your Perfect Beauty Experience Awaits
              </h1>
                <p className="text-lg text-gray-600 md:text-xl">
                  Book appointments with top stylists and beauty professionals. Enjoy premium services tailored to your unique needs.
              </p>
                <div className="flex flex-wrap justify-center gap-5 pt-2 md:justify-start">
                <Link href="/contact">
                    <Button size="lg" className="bg-primary hover:bg-pink-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base shadow-md hover:shadow-glow transition-all">
                    Book Now
                  </Button>
                </Link>
                <Link href="/services">
                    <Button size="lg" variant="outline" className="border-pink-200 text-pink-700 hover:bg-pink-50 px-6 sm:px-8 py-5 sm:py-6 text-base">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
            </Animated>
            <Animated animation="fade-in-right" duration={0.8}>
              <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] mt-8 md:mt-0 float">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 shadow-lg"></div>
              <Image
                  src="/placeholder.jpg"
                  alt="Beauty Experience"
                fill
                  className="object-cover p-6 sm:p-8 rounded-full"
                priority
              />
            </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-y border-pink-100 w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            <Animated animation="fade-in-up" delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-pink-600">5,000+</p>
                <p className="text-gray-600 mt-2">Happy Clients</p>
              </div>
            </Animated>
            <Animated animation="fade-in-up" delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-pink-600">120+</p>
                <p className="text-gray-600 mt-2">Expert Stylists</p>
              </div>
            </Animated>
            <Animated animation="fade-in-up" delay={0.3}>
              <div className="flex flex-col items-center text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-pink-600">50+</p>
                <p className="text-gray-600 mt-2">Premium Salons</p>
              </div>
            </Animated>
            <Animated animation="fade-in-up" delay={0.4}>
              <div className="flex flex-col items-center text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-pink-600">4.9</p>
                <p className="text-gray-600 mt-2">Average Rating</p>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="w-full py-24 md:py-28 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <Animated animation="fade-in-up">
            <div className="mb-16 space-y-5 text-center">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading">Our Premium Services</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg pt-2">
                Experience exceptional beauty and wellness treatments delivered by our certified professionals.
          </p>
        </div>
          </Animated>
          <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service, index) => (
              <Animated key={service.title} animation="fade-in-up" delay={0.1 * (index + 1)}>
                <Link href={service.href} className="block h-full">
                  <Card className="h-full transition-all hover-lift hover:border-pink-300 hover:shadow-lg overflow-hidden group bg-white">
                    <div className="absolute inset-0 bg-gradient-to-b from-pink-100/10 to-pink-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardHeader className="flex flex-col items-center text-center p-8 sm:p-10 relative z-10">
                      <div className="mb-8 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-pink-50 to-pink-100 p-5 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 relative">
                        <span className="absolute inset-0 rounded-full bg-white/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={48}
                      height={48}
                          className="h-full w-full object-contain relative z-10"
                        />
                      </div>
                      <CardTitle className="text-pink-800 font-serif text-2xl mb-4 group-hover:text-pink-700 transition-colors">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-base leading-relaxed">{service.description}</CardDescription>
                      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                        <span className="text-pink-600 font-medium text-sm flex items-center justify-center">
                          Explore Service
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              </Animated>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Animated animation="fade-in-up" delay={0.6}>
              <Link href="/services">
                <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 px-8 py-6 text-base shadow-sm hover:shadow-md btn-pulse">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Animated>
          </div>
        </div>
      </section>

      {/* Meet Our Experts Section */}
      <section className="bg-gradient-to-b from-white to-pink-50 py-24 md:py-28 w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <Animated animation="fade-in-up">
            <div className="mb-16 space-y-5 text-center">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading">Meet Our Beauty Experts</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg pt-2">
                Our certified professionals bring years of experience and passion to every appointment.
              </p>
            </div>
          </Animated>
          <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {beautyExperts.map((expert, index) => (
              <Animated key={expert.name} animation="fade-in-up" delay={0.1 * (index + 1)}>
                <Card className="bg-white border-pink-100 hover:border-pink-300 hover-lift overflow-hidden group">
                  <CardHeader className="p-0 overflow-hidden">
                    <div className="h-72 w-full relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <Image
                        src={expert.image}
                        alt={expert.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                        <div className="flex justify-center space-x-4">
                          <button className="bg-white/90 hover:bg-white text-pink-700 p-2 rounded-full backdrop-blur-sm transition-all">
                            <MessageSquare className="h-5 w-5" />
                          </button>
                          <button className="bg-white/90 hover:bg-white text-pink-700 p-2 rounded-full backdrop-blur-sm transition-all">
                            <Calendar className="h-5 w-5" />
                          </button>
                          <button className="bg-white/90 hover:bg-white text-pink-700 p-2 rounded-full backdrop-blur-sm transition-all">
                            <Heart className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 text-center relative">
                    <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-pink-600 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                    <h3 className="text-xl font-serif font-bold text-pink-800 mb-2 group-hover:text-pink-700 transition-colors">{expert.name}</h3>
                    <p className="text-pink-600 font-medium text-sm tracking-wider uppercase mb-4">{expert.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{expert.bio}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex justify-center">
                    <Button variant="outline" className="border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 transition-all group-hover:bg-pink-600 group-hover:border-pink-600 group-hover:text-white w-full">
                      Book an Appointment
                    </Button>
                  </CardFooter>
                </Card>
              </Animated>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Animated animation="fade-in-up" delay={0.6}>
              <Link href="/experts">
                <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 px-8 py-6 text-base shadow-sm hover:shadow-md btn-pulse">
                  View All Experts <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Animated>
          </div>
        </div>
      </section>

      {/* Featured Salons Section */}
      <section className="w-full py-24 md:py-28 bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-pink-100/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl relative z-10">
          <Animated animation="fade-in-up">
            <div className="mb-16 space-y-5 text-center">
              <div className="bg-purple-100/50 text-purple-700 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center backdrop-blur-sm">
                <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                <span>Top-rated establishments</span>
              </div>
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading">Featured Luxury Salons</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg pt-2">
                Discover premium beauty and wellness destinations, each offering exceptional services in elegant settings
              </p>
            </div>
          </Animated>
          
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSalons.map((salon, index) => (
              <Animated key={salon.id} animation="fade-in-up" delay={0.15 * (index + 1)}>
                <Link href={`/salons/${salon.id}`}>
                  <Card className="bg-white/80 backdrop-blur-sm border-pink-100/50 hover:border-pink-300 transition-all duration-300 hover-lift overflow-hidden group h-full cursor-pointer">
                    <CardHeader className="p-0 overflow-hidden">
                      <div className="h-64 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-60 transition-opacity duration-300 z-10"></div>
                        <Image
                          src={salon.image}
                          alt={salon.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4 z-20 flex space-x-2">
                          {salon.verified && (
                            <div className="bg-white/90 text-blue-600 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm flex items-center">
                              <CheckCircle className="h-3.5 w-3.5 mr-1 fill-blue-600" />
                              Verified
                            </div>
                          )}
                          {salon.premium && (
                            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                              Premium
                            </div>
                          )}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                          <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-1 group-hover:text-pink-100 transition-colors">{salon.name}</h3>
                          <div className="flex items-center text-white/90 mb-1">
                            <span className="text-sm">{salon.location}</span>
                          </div>
                          <div className="flex items-center">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className={`h-4 w-4 ${star <= Math.floor(salon.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-400 text-gray-400'}`} />
                              ))}
                            </div>
                            <span className="text-sm text-white ml-2">{salon.rating}</span>
                            <span className="text-xs text-white/80 ml-1">({salon.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-2 mb-4">
                        <div className="text-pink-600 mt-1">
                          <Award className="h-5 w-5" />
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          <span className="font-medium">Specialty:</span> {salon.specialty}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <div className="text-xs bg-pink-50 text-pink-700 px-3 py-1 rounded-full">Hair</div>
                        <div className="text-xs bg-pink-50 text-pink-700 px-3 py-1 rounded-full">Spa</div>
                        <div className="text-xs bg-pink-50 text-pink-700 px-3 py-1 rounded-full">Facial</div>
                        <div className="text-xs bg-pink-50 text-pink-700 px-3 py-1 rounded-full">+2 more</div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>Opens 9:00 AM</span>
                      </div>
                      <div className="rounded-full h-10 w-10 bg-pink-50 hover:bg-pink-100 flex items-center justify-center transition-colors duration-300 group-hover:bg-pink-600 group-hover:text-white text-pink-600">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </Animated>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Animated animation="fade-in-up" delay={0.6}>
              <Link href="/salons">
                <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 px-8 py-6 text-base shadow-sm hover:shadow-md btn-pulse">
                  Explore All Salons <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Animated>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="w-full py-24 md:py-28 bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-pink-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl relative z-10">
          <Animated animation="fade-in-up">
            <div className="mb-16 space-y-5 text-center">
              <div className="bg-pink-100/50 text-pink-700 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center backdrop-blur-sm">
                <Sparkles className="h-4 w-4 mr-2" />
                <span>Exclusively from our partner salons</span>
              </div>
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading">Featured Beauty Products</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg pt-2">
                Shop premium beauty products used and recommended by our expert stylists
              </p>
            </div>
          </Animated>
          
          <div className="grid gap-8 sm:gap-10 grid-cols-2 lg:grid-cols-4">
            <Animated animation="fade-in-up" delay={0.1}>
              <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group h-full">
                <div className="absolute top-3 right-3 z-10">
                  <div className="bg-pink-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    Best Seller
                  </div>
                </div>
                <CardHeader className="p-0 overflow-hidden">
                  <div className="h-64 w-full relative">
                    <Image
                      src="/placeholder.jpg"
                      alt="Hydrating Facial Serum"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-10"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <div className="text-sm text-pink-600 font-medium uppercase tracking-wider mb-2">GlowSkin</div>
                  <h3 className="text-lg font-serif font-medium text-gray-900 mb-3 group-hover:text-pink-700 transition-colors">Hydrating Facial Serum</h3>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(128)</span>
                  </div>
                  <div className="text-lg font-medium text-pink-800">$48.00</div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-center">
                  <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 transition-all w-full">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </Animated>
            
            <Animated animation="fade-in-up" delay={0.2}>
              <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group h-full">
                <CardHeader className="p-0 overflow-hidden">
                  <div className="h-64 w-full relative">
                    <Image
                      src="/placeholder.jpg"
                      alt="Luxury Hair Treatment Oil"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-10"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <div className="text-sm text-pink-600 font-medium uppercase tracking-wider mb-2">LuxeLocks</div>
                  <h3 className="text-lg font-serif font-medium text-gray-900 mb-3 group-hover:text-pink-700 transition-colors">Luxury Hair Treatment Oil</h3>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(94)</span>
                  </div>
                  <div className="text-lg font-medium text-pink-800">$36.00</div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-center">
                  <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 transition-all w-full">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </Animated>
            
            <Animated animation="fade-in-up" delay={0.3}>
              <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group h-full">
                <div className="absolute top-3 right-3 z-10">
                  <div className="bg-purple-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    New Arrival
                  </div>
                </div>
                <CardHeader className="p-0 overflow-hidden">
                  <div className="h-64 w-full relative">
                    <Image
                      src="/placeholder.jpg"
                      alt="Rejuvenating Night Cream"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-10"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <div className="text-sm text-pink-600 font-medium uppercase tracking-wider mb-2">NatureSpa</div>
                  <h3 className="text-lg font-serif font-medium text-gray-900 mb-3 group-hover:text-pink-700 transition-colors">Rejuvenating Night Cream</h3>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-4 w-4 fill-gray-200 text-gray-200" />
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(76)</span>
                  </div>
                  <div className="text-lg font-medium text-pink-800">$42.00</div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-center">
                  <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 transition-all w-full">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </Animated>
            
            <Animated animation="fade-in-up" delay={0.4}>
              <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group h-full">
                <CardHeader className="p-0 overflow-hidden">
                  <div className="h-64 w-full relative">
                    <Image
                      src="/placeholder.jpg"
                      alt="Professional Nail Care Kit"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-10"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <div className="text-sm text-pink-600 font-medium uppercase tracking-wider mb-2">GlamNails</div>
                  <h3 className="text-lg font-serif font-medium text-gray-900 mb-3 group-hover:text-pink-700 transition-colors">Professional Nail Care Kit</h3>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-4 w-4 fill-gray-200 text-gray-200" />
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(52)</span>
                  </div>
                  <div className="text-lg font-medium text-pink-800">$65.00</div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-center">
                  <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 transition-all w-full">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </Animated>
            
            <Animated animation="fade-in-up" delay={0.5}>
              <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group h-full">
                <div className="absolute top-3 right-3 z-10">
                  <div className="bg-green-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    Organic
                  </div>
                </div>
                <CardHeader className="p-0 overflow-hidden">
                  <div className="h-64 w-full relative">
                    <Image
                      src="/placeholder.jpg"
                      alt="Vitamin C Brightening Serum"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-10"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <div className="text-sm text-pink-600 font-medium uppercase tracking-wider mb-2">PureGlow</div>
                  <h3 className="text-lg font-serif font-medium text-gray-900 mb-3 group-hover:text-pink-700 transition-colors">Vitamin C Brightening Serum</h3>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(87)</span>
                  </div>
                  <div className="text-lg font-medium text-pink-800">$54.00</div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-center">
                  <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 transition-all w-full">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </Animated>
            
            <Animated animation="fade-in-up" delay={0.6}>
              <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group h-full">
                <CardHeader className="p-0 overflow-hidden">
                  <div className="h-64 w-full relative">
                    <Image
                      src="/placeholder.jpg"
                      alt="Volumizing Mascara"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-10"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <div className="text-sm text-pink-600 font-medium uppercase tracking-wider mb-2">LashLuxe</div>
                  <h3 className="text-lg font-serif font-medium text-gray-900 mb-3 group-hover:text-pink-700 transition-colors">Volumizing Mascara</h3>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-4 w-4 fill-gray-200 text-gray-200" />
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(63)</span>
                  </div>
                  <div className="text-lg font-medium text-pink-800">$28.00</div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-center">
                  <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 transition-all w-full">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </Animated>
            
            <Animated animation="fade-in-up" delay={0.7}>
              <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group h-full">
                <div className="absolute top-3 right-3 z-10">
                  <div className="bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    Limited Edition
                  </div>
                </div>
                <CardHeader className="p-0 overflow-hidden">
                  <div className="h-64 w-full relative">
                    <Image
                      src="/placeholder.jpg"
                      alt="Luxury Perfume Collection"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-10"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <div className="text-sm text-pink-600 font-medium uppercase tracking-wider mb-2">EssenceElite</div>
                  <h3 className="text-lg font-serif font-medium text-gray-900 mb-3 group-hover:text-pink-700 transition-colors">Luxury Perfume Collection</h3>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(112)</span>
                  </div>
                  <div className="text-lg font-medium text-pink-800">$120.00</div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-center">
                  <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 transition-all w-full">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </Animated>
            
            <Animated animation="fade-in-up" delay={0.8}>
              <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group h-full">
                <CardHeader className="p-0 overflow-hidden">
                  <div className="h-64 w-full relative">
                    <Image
                      src="/placeholder.jpg"
                      alt="Anti-Aging Eye Cream"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-10"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <div className="text-sm text-pink-600 font-medium uppercase tracking-wider mb-2">AgelessBeauty</div>
                  <h3 className="text-lg font-serif font-medium text-gray-900 mb-3 group-hover:text-pink-700 transition-colors">Anti-Aging Eye Cream</h3>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(95)</span>
                  </div>
                  <div className="text-lg font-medium text-pink-800">$39.00</div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-center">
                  <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 transition-all w-full">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </Animated>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
            <Animated animation="fade-in-up" delay={0.5}>
              <div className="bg-white/70 backdrop-blur-sm border border-pink-100 px-8 py-6 rounded-xl flex items-center gap-4 shadow-sm">
                <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Salon-Quality Products</div>
                  <div className="text-sm text-gray-600">Used by our professionals daily</div>
                </div>
              </div>
            </Animated>
            
            <Animated animation="fade-in-up" delay={0.6}>
              <div className="bg-white/70 backdrop-blur-sm border border-pink-100 px-8 py-6 rounded-xl flex items-center gap-4 shadow-sm">
                <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Expert Recommended</div>
                  <div className="text-sm text-gray-600">Personally selected by our stylists</div>
                </div>
              </div>
            </Animated>
          </div>
          
          <div className="mt-12 text-center">
            <Animated animation="fade-in-up" delay={0.7}>
              <Link href="/shop">
                <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 px-8 py-6 text-base shadow-sm hover:shadow-md btn-pulse">
                  Shop All Products <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
            </Animated>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-24 md:py-28 bg-gradient-to-b from-white to-pink-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-pink-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl relative z-10">
          <Animated animation="fade-in-up">
            <div className="mb-16 space-y-5 text-center">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading">Why Choose Selenae</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg pt-2">
                Discover the exceptional benefits that set our premium beauty and wellness platform apart.
              </p>
            </div>
          </Animated>
          
          <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 md:grid-cols-3">
            <Animated animation="fade-in-up" delay={0.1}>
              <Card className="bg-white shadow-sm border-pink-100 hover:shadow-lg transition-all hover-lift overflow-hidden relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-50/0 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-pink-400 to-pink-600 group-hover:w-full transition-all duration-700"></div>
                <CardHeader className="flex flex-col items-center text-center p-8 sm:p-10 relative z-10">
                  <div className="mb-8 h-20 w-20 rounded-full bg-gradient-to-br from-pink-50 to-pink-100 p-4 text-pink-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 relative">
                    <span className="absolute inset-0 rounded-full bg-white/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <CheckCircle className="h-10 w-10 relative z-10" />
                  </div>
                  <CardTitle className="text-pink-800 font-serif text-2xl mb-4 group-hover:text-pink-700 transition-colors">Certified Professionals</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    Every beauty expert in our network is thoroughly vetted, certified, and committed to delivering exceptional service tailored to your needs.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Animated>
            
            <Animated animation="fade-in-up" delay={0.2}>
              <Card className="bg-white shadow-sm border-pink-100 hover:shadow-lg transition-all hover-lift overflow-hidden relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-50/0 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-pink-400 to-pink-600 group-hover:w-full transition-all duration-700"></div>
                <CardHeader className="flex flex-col items-center text-center p-8 sm:p-10 relative z-10">
                  <div className="mb-8 h-20 w-20 rounded-full bg-gradient-to-br from-pink-50 to-pink-100 p-4 text-pink-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 relative">
                    <span className="absolute inset-0 rounded-full bg-white/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <Award className="h-10 w-10 relative z-10" />
                  </div>
                  <CardTitle className="text-pink-800 font-serif text-2xl mb-4 group-hover:text-pink-700 transition-colors">Premium Experience</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    Indulge in a luxurious beauty journey with top-quality products, elegant salons, and attentive service that exceeds your expectations.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Animated>
            
            <Animated animation="fade-in-up" delay={0.3}>
              <Card className="bg-white shadow-sm border-pink-100 hover:shadow-lg transition-all hover-lift overflow-hidden relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-50/0 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-pink-400 to-pink-600 group-hover:w-full transition-all duration-700"></div>
                <CardHeader className="flex flex-col items-center text-center p-8 sm:p-10 relative z-10">
                  <div className="mb-8 h-20 w-20 rounded-full bg-gradient-to-br from-pink-50 to-pink-100 p-4 text-pink-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 relative">
                    <span className="absolute inset-0 rounded-full bg-white/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <Calendar className="h-10 w-10 relative z-10" />
                  </div>
                  <CardTitle className="text-pink-800 font-serif text-2xl mb-4 group-hover:text-pink-700 transition-colors">Effortless Booking</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    Our intuitive platform lets you browse, book, and manage appointments 24/7, with instant confirmations and seamless rescheduling.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Animated>
          </div>
          
          <div className="mt-16 pt-8 border-t border-pink-100/50 flex flex-col md:flex-row items-center justify-center md:justify-between">
            <Animated animation="fade-in-right">
              <div className="flex items-center space-x-8 mb-8 md:mb-0">
                <div className="flex items-center">
                  <Sparkles className="h-6 w-6 text-pink-500 mr-2" />
                  <span className="text-gray-700 font-medium">100% Satisfaction Guaranteed</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-pink-500 mr-2" />
                  <span className="text-gray-700 font-medium">Flexible Scheduling</span>
                </div>
              </div>
            </Animated>
            
            <Animated animation="fade-in-left">
              <Link href="/services">
                <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 px-8 py-6 text-base shadow-sm hover:shadow-md btn-pulse">
                  Explore Our Benefits <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Animated>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-24 md:py-32 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-pink-700 to-purple-700"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Animated animation="fade-in-right">
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-2">
                  <span className="mr-2">★</span> 4.9 Star Rating on App Store & Google Play
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                  Beauty & Wellness <br className="hidden md:inline" />
                  <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">in Your Pocket</span>
                </h2>
                <p className="text-white/90 text-base md:text-lg max-w-xl">
                  Take Selenae with you wherever you go. Our mobile app makes it effortless to discover, book, and manage your beauty appointments from the palm of your hand.
                </p>
                
                <div className="space-y-5">
                  <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-3 md:gap-6">
                    <div className="flex items-center text-white">
                      <CheckCircle className="h-5 w-5 mr-3 text-pink-200" />
                      <span>Real-time appointment scheduling</span>
                    </div>
                    <div className="flex items-center text-white">
                      <CheckCircle className="h-5 w-5 mr-3 text-pink-200" />
                      <span>Push notification reminders</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-3 md:gap-6">
                    <div className="flex items-center text-white">
                      <CheckCircle className="h-5 w-5 mr-3 text-pink-200" />
                      <span>Exclusive mobile-only offers</span>
                    </div>
                    <div className="flex items-center text-white">
                      <CheckCircle className="h-5 w-5 mr-3 text-pink-200" />
                      <span>Personal beauty profile</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
                  <Link href="#" className="transform transition-transform hover:scale-105">
                    <div className="bg-black text-white rounded-lg py-3 px-5 flex items-center shadow-lg hover:shadow-pink-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 mr-3">
                        <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
                        <path d="M16 19h6" />
                        <path d="M19 16v6" />
                      </svg>
                      <div>
                        <div className="text-xs">Download on the</div>
                        <div className="text-lg font-semibold -mt-1">App Store</div>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="#" className="transform transition-transform hover:scale-105">
                    <div className="bg-black text-white rounded-lg py-3 px-5 flex items-center shadow-lg hover:shadow-pink-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 mr-3">
                        <polygon points="3 3 21 12 3 21" />
                  </svg>
                      <div>
                        <div className="text-xs">GET IT ON</div>
                        <div className="text-lg font-semibold -mt-1">Google Play</div>
                      </div>
                    </div>
                  </Link>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start space-x-4 pt-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-pink-600 overflow-hidden">
                        <Image
                          src="/placeholder-user.jpg"
                          alt={`User ${i}`}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-white/90 text-sm">Join 50,000+ happy users</div>
                </div>
              </div>
            </Animated>
            
            <Animated animation="fade-in-left" className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -left-10 top-1/4 w-40 h-40 bg-gradient-to-br from-pink-300/30 to-purple-400/30 rounded-full blur-2xl"></div>
                
                <div className="relative flex items-center">
                  {/* Phone 1 */}
                  <div className="relative z-10 transform -rotate-6 translate-x-6 shadow-2xl rounded-[40px] overflow-hidden border-[8px] border-black bg-black">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-2xl z-20"></div>
                    <Image
                      src="/placeholder.jpg"
                      alt="Selenae App - Booking Screen"
                      width={240}
                      height={480}
                      className="w-56 h-auto object-cover"
                    />
                  </div>
                  
                  {/* Phone 2 */}
                  <div className="relative z-20 transform translate-y-4 -translate-x-4 shadow-2xl rounded-[40px] overflow-hidden border-[8px] border-black bg-black">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-2xl z-20"></div>
                    <Image
                      src="/placeholder.jpg"
                      alt="Selenae App - Home Screen"
                      width={260}
                      height={520}
                      className="w-64 h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-pink-600/10"></div>
                  </div>
                </div>
                
                <div className="absolute right-12 bottom-12 bg-white/20 backdrop-blur-md rounded-xl px-5 py-3 shadow-xl transform rotate-6">
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-white font-medium">4.9</div>
                  </div>
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* Beauty Tips & Trends */}
      <section className="w-full py-24 md:py-28 bg-gradient-to-b from-white to-pink-50/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-pink-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-purple-100/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl relative z-10">
          <Animated animation="fade-in-up">
            <div className="mb-16 space-y-5 text-center">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading">Beauty Tips & Trends</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg pt-2">
                Discover expert advice, latest trends, and insider secrets from our beauty specialists.
              </p>
            </div>
          </Animated>
          
          <div className="grid gap-8 md:gap-10 sm:grid-cols-2 md:grid-cols-3">
            {beautyTips.map((tip, index) => (
              <Animated key={tip.title} animation="fade-in-up" delay={0.1 * (index + 1)}>
                <Link href={`/blog/${tip.title.toLowerCase().replace(/\s+/g, '-')}`} className="block h-full group">
                  <Card className="overflow-hidden hover-lift border-pink-100 hover:border-pink-300 h-full transition-all duration-300 group-hover:shadow-lg relative bg-white">
                    <div className="absolute inset-0 bg-gradient-to-b from-pink-50/0 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={tip.image}
                        alt={tip.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold text-pink-700 shadow-sm">
                        {tip.category}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                        {tip.date}
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2 pt-6">
                      <CardTitle className="text-xl font-serif text-pink-800 group-hover:text-pink-700 transition-colors">{tip.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-600 text-base leading-relaxed line-clamp-3">{tip.excerpt}</p>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <div className="flex items-center text-pink-600 font-medium group-hover:text-pink-700 transition-colors">
                        <span>Read Article</span>
                        <div className="transform transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </Animated>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Animated animation="fade-in-up" delay={0.5}>
              <Link href="/blog">
                <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 px-8 py-6 text-base shadow-sm hover:shadow-md btn-pulse">
                  Explore All Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Animated>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-white to-pink-50/30 py-24 md:py-28 w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-pink-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-purple-100/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl relative z-10">
          <Animated animation="fade-in-up">
            <div className="mb-16 space-y-5 text-center">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg pt-2">
                Everything you need to know about our beauty and wellness services
              </p>
            </div>
          </Animated>
          
          <div className="max-w-4xl mx-auto">
            {questions.map((q, index) => (
              <Animated key={index} animation="fade-in-up" delay={0.1 * (index + 1)}>
                <Card className="mb-6 bg-white border-pink-100 hover:border-pink-200 hover:shadow-md transition-all duration-300 overflow-hidden group">
                  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-pink-300 to-pink-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  <CardHeader className="pb-3 pt-6 relative z-10">
                    <CardTitle className="text-xl font-serif font-bold flex items-start gap-4 text-pink-800 group-hover:text-pink-700 transition-colors">
                      <div className="h-8 w-8 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm group-hover:from-pink-200 group-hover:to-pink-300 transition-colors">
                        <Sparkles className="h-4 w-4 text-pink-600" />
                      </div>
                      <span>{q.question}</span>
                    </CardTitle>
              </CardHeader>
                  <CardContent className="pl-16">
                    <div className="bg-gradient-to-br from-pink-50/50 to-transparent p-4 rounded-lg">
                      <p className="text-gray-600 leading-relaxed">{q.answer}</p>
                    </div>
                  </CardContent>
            </Card>
              </Animated>
            ))}
          </div>
          
          <div className="mt-16 pt-6 flex flex-col md:flex-row items-center justify-center md:justify-between border-t border-pink-100/50">
            <Animated animation="fade-in-right">
              <p className="text-gray-600 mb-6 md:mb-0 text-center md:text-left">
                Can't find the answer you're looking for? Contact our support team
              </p>
            </Animated>
            
            <Animated animation="fade-in-left">
              <Link href="/faq">
                <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 px-8 py-6 text-base shadow-sm hover:shadow-md btn-pulse">
                  View All Questions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Animated>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-24 md:py-28 bg-gradient-to-b from-white to-pink-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-pink-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-purple-100/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl relative z-10">
          <Animated animation="fade-in-up">
            <div className="mb-16 space-y-5 text-center">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading">What Our Customers Say</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg pt-2">
            Read testimonials from our satisfied clients.
          </p>
        </div>
          </Animated>
          
          <div className="relative overflow-hidden -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8">
            {/* Carousel Controls */}
            <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2">
              <button className="h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white border border-pink-100 text-pink-600 flex items-center justify-center shadow-md hover:shadow-lg transition-all group">
                <ArrowRight className="h-5 w-5 transform rotate-180 group-hover:scale-110 transition-transform" />
              </button>
            </div>
            <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2">
              <button className="h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white border border-pink-100 text-pink-600 flex items-center justify-center shadow-md hover:shadow-lg transition-all group">
                <ArrowRight className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
            
            {/* Testimonial Carousel */}
            <div className="testimonial-carousel flex gap-6 md:gap-8 py-8 overflow-x-auto snap-x scrollbar-hide cursor-grab active:cursor-grabbing group">
              {/* Duplicate first set of testimonials for infinite effect */}
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div 
                  key={`${testimonial.name}-${index}`} 
                  className="min-w-[320px] sm:min-w-[340px] lg:min-w-[380px] snap-center group-hover:[animation-play-state:paused]"
                >
                  <Card className="w-full bg-white border-pink-100 hover:border-pink-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full group/card">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-300 to-pink-500 scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <div className="absolute top-6 right-6">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-100 group-hover/card:text-pink-200 transition-colors">
                        <path d="M9.33333 21.3333C7.86667 21.3333 6.61333 20.8 5.57333 19.7333C4.53333 18.6667 4 17.4 4 15.9333C4 14.6 4.34667 13.2667 5.04 11.9333C5.73333 10.6 6.69333 9.33333 7.92 8.13333C9.14667 6.93333 10.5067 5.93333 12 5.13333L14.2667 7.46667C12.9333 8.06667 11.7067 8.8 10.5867 9.66667C9.46667 10.5333 8.8 11.3333 8.58667 12.0667C8.90667 12 9.18667 11.9667 9.42667 11.9667C10.84 11.9667 12.0267 12.4333 12.9867 13.3667C13.9467 14.3 14.4267 15.4667 14.4267 16.8667C14.4267 18.2667 13.9467 19.4333 12.9867 20.3667C12.0267 21.0111 10.7978 21.3333 9.33333 21.3333ZM22.6667 21.3333C21.2 21.3333 19.9467 20.8 18.9067 19.7333C17.8667 18.6667 17.3333 17.4 17.3333 15.9333C17.3333 14.6 17.68 13.2667 18.3733 11.9333C19.0667 10.6 20.0267 9.33333 21.2533 8.13333C22.48 6.93333 23.84 5.93333 25.3333 5.13333L27.6 7.46667C26.2667 8.06667 25.04 8.8 23.92 9.66667C22.8 10.5333 22.1333 11.3333 21.92 12.0667C22.24 12 22.52 11.9667 22.76 11.9667C24.1733 11.9667 25.36 12.4333 26.32 13.3667C27.28 14.3 27.76 15.4667 27.76 16.8667C27.76 18.2667 27.28 19.4333 26.32 20.3667C25.36 21.0111 24.1311 21.3333 22.6667 21.3333Z" fill="currentColor"/>
                      </svg>
                    </div>
                    
                    <CardHeader className="pb-2 pt-8 px-6 sm:px-8">
                      <div className="flex items-center gap-5">
                        <div className="h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-full border-2 border-pink-100 shadow-sm group-hover:border-pink-200 transition-colors">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                            width={80}
                            height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                          <CardTitle className="text-xl font-serif text-pink-800 mb-1 group-hover:text-pink-700 transition-colors">{testimonial.name}</CardTitle>
                          <div className="flex items-center space-x-1.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                                className={`h-5 w-5 ${
                            i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
                    
                    <CardContent className="px-6 sm:px-8 pb-8 pt-6">
                      <div className="bg-gradient-to-br from-pink-50/50 to-transparent rounded-xl p-5">
                        <p className="text-gray-600 text-base leading-relaxed">{testimonial.content}</p>
                      </div>
              </CardContent>
                    
                    <CardFooter className="px-6 sm:px-8 pb-6 pt-0 flex items-center justify-between">
                      <div className="text-sm text-gray-500">Verified customer</div>
                      <div className="flex items-center text-pink-600 text-sm font-medium">
                        <CheckCircle className="h-4 w-4 mr-1.5" />
                        <span>Selenae Member</span>
                      </div>
                    </CardFooter>
            </Card>
                </div>
              ))}
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  className={`h-2.5 rounded-full transition-all ${
                    index === 0 ? "w-8 bg-pink-500" : "w-2.5 bg-pink-200 hover:bg-pink-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-14 text-center">
            <Animated animation="fade-in-up" delay={0.3}>
              <Link href="/testimonials">
                <Button className="bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 px-8 py-6 text-base shadow-sm hover:shadow-md btn-pulse">
                  Read More Reviews <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Animated>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/90 via-pink-600 to-purple-700/90 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl relative z-10">
          <Animated animation="fade-in-up">
            <div className="rounded-lg bg-white/10 backdrop-blur-md border border-white/20 p-10 sm:p-12 md:p-16 overflow-hidden relative shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 via-white to-purple-300"></div>
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl"></div>
              
              <div className="flex flex-col items-center gap-10 sm:gap-12 text-center lg:flex-row lg:text-left">
                <div className="flex-1 space-y-5 sm:space-y-6">
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight lg:text-5xl text-white drop-shadow-sm">
                    Ready to Experience<br className="hidden sm:block"/> 
                    <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">the Selenae Difference?</span>
                  </h2>
                  
                  <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Join thousands of satisfied clients who have transformed their beauty routine. Our premium services await you with special first-time client offers.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-3 lg:justify-start pt-4">
                    <div className="flex items-center text-white/95">
                      <CheckCircle className="h-5 w-5 mr-2 text-pink-200" />
                      <span className="text-sm sm:text-base">Expert stylists</span>
                    </div>
                    <div className="flex items-center text-white/95">
                      <CheckCircle className="h-5 w-5 mr-2 text-pink-200" />
                      <span className="text-sm sm:text-base">Premium products</span>
                    </div>
                    <div className="flex items-center text-white/95">
                      <CheckCircle className="h-5 w-5 mr-2 text-pink-200" />
                      <span className="text-sm sm:text-base">Satisfaction guaranteed</span>
                    </div>
                  </div>
            </div>
                
                <div className="flex flex-col space-y-4 w-full sm:w-auto">
                  <Animated animation="scale-in-bounce" delay={0.3}>
                    <Link href="/contact" className="block">
                      <Button size="lg" className="w-full sm:w-auto bg-white hover:bg-white/90 text-pink-700 shadow-lg hover:shadow-xl px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-medium transition-all rounded-lg">
                        Book Your Appointment <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
                  </Animated>
                  
                  <div className="flex items-center justify-center lg:justify-start space-x-2 pt-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-7 h-7 rounded-full border-2 border-pink-600 overflow-hidden ring-2 ring-white">
                          <Image
                            src="/placeholder-user.jpg"
                            alt={`User ${i}`}
                            width={28}
                            height={28}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="text-white/90 text-xs sm:text-sm">
                      <span className="font-semibold">4.9★</span> from 2,000+ reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </div>
  )
} 