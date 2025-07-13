import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, CheckCircle, Clock, MapPin, Shield, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Animated } from "@/components/animated"

export const metadata: Metadata = {
  title: "Luxury Salons - GlowVita",
  description: "Discover our partner salons offering premium beauty and wellness services in elegant settings",
}

export default function SalonsPage() {
  // In a real app, this would come from a database or API
  const salons = [
    {
      id: "elegance-salon",
      name: "Elegance Salon & Spa",
      location: "Downtown, New York",
      rating: 4.9,
      reviews: 287,
      specialty: "Hair styling, Facials, Massages",
      image: "/placeholder.jpg",
      verified: true,
      premium: true,
      description: "A luxury salon offering premium services in an elegant setting.",
      categories: ["Hair", "Spa", "Facial", "Massage", "Nails"]
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
      premium: false,
      description: "Holistic wellness center with a focus on natural and organic treatments.",
      categories: ["Spa", "Wellness", "Nails", "Massage"]
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
      premium: true,
      description: "Specializing in transformative makeup and advanced skincare treatments.",
      categories: ["Makeup", "Skincare", "Brows", "Lashes"]
    },
    {
      id: "harmony-spa",
      name: "Harmony Day Spa",
      location: "Chicago, Illinois",
      rating: 4.7,
      reviews: 178,
      specialty: "Therapeutic massage, Facials, Body treatments",
      image: "/placeholder.jpg",
      verified: true,
      premium: false,
      description: "A peaceful retreat offering rejuvenating spa services for mind and body.",
      categories: ["Spa", "Massage", "Facial", "Body"]
    },
    {
      id: "style-lounge",
      name: "Style Lounge",
      location: "Miami, Florida",
      rating: 4.8,
      reviews: 164,
      specialty: "Hair coloring, Cutting, Styling",
      image: "/placeholder.jpg",
      verified: true,
      premium: true,
      description: "Trendsetting hair salon with master stylists and colorists.",
      categories: ["Hair", "Color", "Style", "Treatment"]
    },
    {
      id: "serenity-wellness",
      name: "Serenity Wellness Center",
      location: "Seattle, Washington",
      rating: 4.9,
      reviews: 205,
      specialty: "Holistic treatments, Meditation, Spa services",
      image: "/placeholder.jpg",
      verified: true,
      premium: false,
      description: "A holistic approach to beauty and wellness with spiritual elements.",
      categories: ["Wellness", "Spa", "Holistic", "Meditation"]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-r from-pink-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-pink-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Animated animation="fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight gradient-heading mb-6">
                Find Your Perfect Beauty Destination
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Discover luxury salons and spas that deliver exceptional beauty and wellness experiences, curated just for you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-base shadow-lg hover-lift">
                  Book an Appointment <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 px-8 py-6 text-base">
                  View Featured Services
                </Button>
              </div>
            </Animated>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <Animated animation="fade-in-up" delay={0.1}>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Verified Partners</h3>
                <p className="text-gray-600 text-sm">All our salon partners are verified for quality, hygiene, and service excellence</p>
              </div>
            </Animated>
            
            <Animated animation="fade-in-up" delay={0.2}>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Rated by Clients</h3>
                <p className="text-gray-600 text-sm">Real reviews from real clients to help you make informed decisions</p>
              </div>
            </Animated>
            
            <Animated animation="fade-in-up" delay={0.3}>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Premium Experiences</h3>
                <p className="text-gray-600 text-sm">Curated selection of establishments known for exceptional service</p>
              </div>
            </Animated>
          </div>
        </div>
      </section>
      
      {/* Salons Listing */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <div className="mb-12 space-y-5">
            <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl gradient-heading">Our Partner Salons</h2>
            <p className="max-w-[700px] text-gray-600 text-lg">
              Explore our curated collection of premium beauty and wellness establishments
            </p>
          </div>
          
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {salons.map((salon, index) => (
              <Animated key={salon.id} animation="fade-in-up" delay={0.1 * (index % 3 + 1)}>
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
                            <MapPin className="h-4 w-4 mr-1" />
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
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        {salon.description}
                      </p>
                      <div className="flex items-start gap-2 mb-4">
                        <div className="text-pink-600 mt-1">
                          <Award className="h-5 w-5" />
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          <span className="font-medium">Specialty:</span> {salon.specialty}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {salon.categories.slice(0, 4).map((category) => (
                          <div key={category} className="text-xs bg-pink-50 text-pink-700 px-3 py-1 rounded-full">
                            {category}
                          </div>
                        ))}
                        {salon.categories.length > 4 && (
                          <div className="text-xs bg-pink-50 text-pink-700 px-3 py-1 rounded-full">
                            +{salon.categories.length - 4} more
                          </div>
                        )}
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
        </div>
      </section>
    </div>
  )
} 