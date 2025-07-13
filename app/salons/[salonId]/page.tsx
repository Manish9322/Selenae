import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Award, Calendar, Check, CheckCircle, Clock, Flame, Heart, Mail, MapPin, Phone, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Animated } from "@/components/ui/animated"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function generateMetadata({ params }: { params: { salonId: string } }): Metadata {
  // This would normally fetch data from an API
  const salon = getSalonById(params.salonId)
  
  return {
    title: `${salon.name} - GlowVita`,
    description: `Book appointments at ${salon.name} - ${salon.description}`,
  }
}

// This would normally fetch data from an API
function getSalonById(salonId: string) {
  const salons = {
    "elegance-salon": {
      id: "elegance-salon",
      name: "Elegance Salon & Spa",
      location: "Downtown, New York",
      fullAddress: "123 Fashion Avenue, Downtown, New York, NY 10001",
      phone: "+1 (123) 456-7890",
      email: "info@elegancesalon.com",
      website: "www.elegancesalon.com",
      rating: 4.9,
      reviews: 287,
      specialty: "Hair styling, Facials, Massages",
      image: "/placeholder.jpg",
      gallery: Array(6).fill("/placeholder.jpg"),
      verified: true,
      premium: true,
      description: "A luxury salon offering premium services in an elegant setting.",
      longDescription: "Elegance Salon & Spa is a premier beauty destination in the heart of New York City. Our team of expert stylists and therapists are dedicated to providing exceptional services tailored to your individual needs. We pride ourselves on using only the finest products and staying at the forefront of beauty innovations.",
      openingHours: {
        monday: "9:00 AM - 7:00 PM",
        tuesday: "9:00 AM - 7:00 PM",
        wednesday: "9:00 AM - 7:00 PM",
        thursday: "9:00 AM - 8:00 PM",
        friday: "9:00 AM - 8:00 PM",
        saturday: "10:00 AM - 6:00 PM",
        sunday: "11:00 AM - 5:00 PM"
      },
      categories: ["Hair", "Spa", "Facial", "Massage", "Nails"],
      staff: [
        {
          name: "Sophie Wright",
          role: "Master Stylist",
          image: "/placeholder.jpg",
          bio: "With over 15 years of experience, Sophie specializes in cutting-edge hair techniques."
        },
        {
          name: "James Chen",
          role: "Spa Therapist",
          image: "/placeholder.jpg",
          bio: "James is a certified massage therapist with expertise in aromatherapy and deep tissue massage."
        },
        {
          name: "Olivia Martinez",
          role: "Makeup Artist",
          image: "/placeholder.jpg",
          bio: "Olivia has worked with celebrities and brings her glamorous touch to all her clients."
        }
      ],
      services: [
        {
          category: "Hair",
          items: [
            { name: "Women's Haircut", price: "$75+", duration: "60 min" },
            { name: "Men's Haircut", price: "$45+", duration: "30 min" },
            { name: "Blowout", price: "$55+", duration: "45 min" },
            { name: "Full Highlights", price: "$150+", duration: "120 min" },
            { name: "Hair Color", price: "$85+", duration: "90 min" }
          ]
        },
        {
          category: "Facial",
          items: [
            { name: "Classic Facial", price: "$95", duration: "60 min" },
            { name: "Anti-Aging Facial", price: "$125", duration: "75 min" },
            { name: "Hydrating Facial", price: "$110", duration: "60 min" },
            { name: "Acne Treatment", price: "$120", duration: "60 min" }
          ]
        },
        {
          category: "Massage",
          items: [
            { name: "Swedish Massage", price: "$110", duration: "60 min" },
            { name: "Deep Tissue Massage", price: "$130", duration: "60 min" },
            { name: "Hot Stone Massage", price: "$145", duration: "75 min" },
            { name: "Aromatherapy Massage", price: "$125", duration: "60 min" }
          ]
        },
        {
          category: "Nails",
          items: [
            { name: "Manicure", price: "$35", duration: "30 min" },
            { name: "Pedicure", price: "$45", duration: "45 min" },
            { name: "Gel Manicure", price: "$50", duration: "45 min" },
            { name: "Spa Mani-Pedi", price: "$75", duration: "75 min" }
          ]
        }
      ],
      features: [
        "Complimentary refreshments",
        "Relaxation lounge",
        "Luxury products",
        "Free WiFi",
        "Private treatment rooms",
        "Group bookings available"
      ],
      testimonials: [
        {
          name: "Rebecca Thompson",
          date: "2 months ago",
          rating: 5,
          text: "The most incredible massage I've ever had! The ambiance was perfect and the staff was so attentive."
        },
        {
          name: "David Wilson",
          date: "1 month ago",
          rating: 5,
          text: "My haircut was exactly what I wanted. The stylist really listened to me and gave great advice."
        },
        {
          name: "Jennifer Lee",
          date: "3 months ago",
          rating: 4,
          text: "Beautiful spa with excellent service. The facial left my skin glowing for days."
        }
      ],
      products: [
        {
          name: "Luxury Hair Serum",
          price: "$45",
          image: "/placeholder.jpg",
          rating: 4.8
        },
        {
          name: "Hydrating Face Mask",
          price: "$38",
          image: "/placeholder.jpg",
          rating: 4.7
        },
        {
          name: "Essential Oil Set",
          price: "$65",
          image: "/placeholder.jpg",
          rating: 4.9
        },
        {
          name: "Nail Care Kit",
          price: "$29",
          image: "/placeholder.jpg",
          rating: 4.6
        }
      ]
    },
    "pure-bliss": {
      id: "pure-bliss",
      name: "Pure Bliss Wellness",
      location: "Beverly Hills, Los Angeles",
      fullAddress: "456 Serenity Lane, Beverly Hills, Los Angeles, CA 90210",
      phone: "+1 (987) 654-3210",
      email: "contact@purebliss.com",
      website: "www.pureblisswellness.com",
      rating: 4.8,
      reviews: 193,
      specialty: "Spa treatments, Aromatherapy, Nail art",
      image: "/placeholder.jpg",
      gallery: Array(6).fill("/placeholder.jpg"),
      verified: true,
      premium: false,
      description: "Holistic wellness center with a focus on natural and organic treatments.",
      longDescription: "Pure Bliss Wellness is a sanctuary dedicated to holistic well-being. Our approach combines ancient techniques with modern innovations to create transformative experiences. Every treatment is performed using organic, ethically-sourced products that nourish your body and respect our planet.",
      openingHours: {
        monday: "10:00 AM - 6:00 PM",
        tuesday: "10:00 AM - 6:00 PM",
        wednesday: "10:00 AM - 6:00 PM",
        thursday: "10:00 AM - 8:00 PM",
        friday: "10:00 AM - 8:00 PM",
        saturday: "9:00 AM - 6:00 PM",
        sunday: "Closed"
      },
      categories: ["Spa", "Wellness", "Nails", "Massage"],
      staff: [
        {
          name: "Maya Johnson",
          role: "Wellness Director",
          image: "/placeholder.jpg",
          bio: "Maya is certified in holistic healing and specializes in customized wellness programs."
        },
        {
          name: "Aiden Roberts",
          role: "Massage Therapist",
          image: "/placeholder.jpg",
          bio: "Aiden combines traditional and contemporary massage techniques for a unique experience."
        },
        {
          name: "Emma Chang",
          role: "Nail Artist",
          image: "/placeholder.jpg",
          bio: "Emma is known for her creative nail designs and meticulous attention to detail."
        }
      ],
      services: [
        {
          category: "Spa",
          items: [
            { name: "Organic Facial", price: "$120", duration: "60 min" },
            { name: "Body Scrub", price: "$95", duration: "45 min" },
            { name: "Detox Wrap", price: "$135", duration: "75 min" }
          ]
        },
        {
          category: "Massage",
          items: [
            { name: "Holistic Massage", price: "$115", duration: "60 min" },
            { name: "Chakra Balancing", price: "$140", duration: "90 min" },
            { name: "Aromatherapy Session", price: "$125", duration: "60 min" }
          ]
        },
        {
          category: "Nails",
          items: [
            { name: "Organic Manicure", price: "$40", duration: "30 min" },
            { name: "Luxury Pedicure", price: "$65", duration: "60 min" },
            { name: "Nail Art", price: "$20+", duration: "15+ min" }
          ]
        },
        {
          category: "Wellness",
          items: [
            { name: "Meditation Session", price: "$70", duration: "45 min" },
            { name: "Yoga Class", price: "$25", duration: "60 min" },
            { name: "Wellness Consultation", price: "$90", duration: "60 min" }
          ]
        }
      ],
      features: [
        "Organic products only",
        "Meditation garden",
        "Herbal tea bar",
        "Wellness library",
        "Eco-friendly facility",
        "Personalized wellness plans"
      ],
      testimonials: [
        {
          name: "Sarah Miller",
          date: "1 month ago",
          rating: 5,
          text: "The most peaceful spa experience I've ever had. The aromatherapy massage was divine!"
        },
        {
          name: "Michael Chen",
          date: "3 weeks ago",
          rating: 4,
          text: "Great wellness center with knowledgeable staff. The yoga class was exactly what I needed."
        },
        {
          name: "Amanda Lee",
          date: "2 months ago",
          rating: 5,
          text: "My nails have never looked better! Emma is a true artist and so detail-oriented."
        }
      ],
      products: [
        {
          name: "Organic Face Oil",
          price: "$52",
          image: "/placeholder.jpg",
          rating: 4.9
        },
        {
          name: "Meditation Candle Set",
          price: "$45",
          image: "/placeholder.jpg",
          rating: 4.7
        },
        {
          name: "Body Scrub",
          price: "$38",
          image: "/placeholder.jpg",
          rating: 4.6
        },
        {
          name: "Wellness Tea Collection",
          price: "$32",
          image: "/placeholder.jpg",
          rating: 4.8
        }
      ]
    },
    "glow-studio": {
      id: "glow-studio",
      name: "Glow Beauty Studio",
      location: "SoHo, New York",
      fullAddress: "789 Beauty Boulevard, SoHo, New York, NY 10012",
      phone: "+1 (555) 123-4567",
      email: "hello@glowbeauty.com",
      website: "www.glowbeautystudio.com",
      rating: 4.9,
      reviews: 215,
      specialty: "Makeup, Skincare, Brow sculpting",
      image: "/placeholder.jpg",
      gallery: Array(6).fill("/placeholder.jpg"),
      verified: true,
      premium: true,
      description: "Specializing in transformative makeup and advanced skincare treatments.",
      longDescription: "Glow Beauty Studio is where art meets beauty. Our team of makeup artists and skincare specialists are trained in the latest techniques to enhance your natural beauty. From everyday looks to special occasion glamour, we're dedicated to helping you look and feel your absolute best.",
      openingHours: {
        monday: "9:00 AM - 7:00 PM",
        tuesday: "9:00 AM - 7:00 PM",
        wednesday: "9:00 AM - 7:00 PM",
        thursday: "9:00 AM - 8:00 PM",
        friday: "9:00 AM - 8:00 PM",
        saturday: "10:00 AM - 7:00 PM",
        sunday: "11:00 AM - 5:00 PM"
      },
      categories: ["Makeup", "Skincare", "Brows", "Lashes"],
      staff: [],
      services: [],
      features: [],
      testimonials: [],
      products: []
    }
  }
  
  return salons[salonId as keyof typeof salons] || salons["elegance-salon"]
}

export default function SalonPage({ params }: { params: { salonId: string } }) {
  const salon = getSalonById(params.salonId)
  
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] md:h-[650px] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50 z-10"></div>
        <div className="absolute inset-0 bg-black/30 mix-blend-overlay z-10"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-pink-900/20 to-transparent z-10"></div>
        
        {/* Background particles */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-pink-400/10 blur-3xl z-5"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-purple-400/10 blur-3xl z-5"></div>
        
        <Image 
          src={salon.image} 
          alt={salon.name} 
          fill 
          className="object-cover scale-105 animate-subtle-zoom"
          priority
        />
        
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
            <div className="max-w-3xl">
              <Animated animation="fade-in-up">
                <div className="relative">
                  {/* Status badges */}
                  <div className="flex items-center gap-3 mb-5">
                    {salon.verified && (
                      <Badge variant="secondary" className="bg-white/95 text-blue-600 rounded-full px-4 py-1.5 text-xs font-medium shadow-sm backdrop-blur-sm flex items-center gap-1.5 border-blue-100">
                        <CheckCircle className="h-3.5 w-3.5 fill-blue-600" />
                        Verified Partner
                      </Badge>
                    )}
                    {salon.premium && (
                      <Badge variant="secondary" className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full px-4 py-1.5 text-xs font-medium shadow-sm backdrop-blur-sm flex items-center gap-1.5">
                        <Flame className="h-3.5 w-3.5" />
                        Premium
                      </Badge>
                    )}
                  </div>
                  
                  {/* Main heading with decorative line */}
                  <div className="relative">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">{salon.name}</h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mb-5"></div>
                  </div>
                  
                  {/* Ratings with enhanced styling */}
                  <div className="flex items-center mb-5 px-4 py-2 bg-black/20 backdrop-blur-sm inline-block rounded-lg">
                    <div className="flex mr-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`h-5 w-5 ${star <= Math.floor(salon.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-400 text-gray-400'}`} />
                      ))}
                    </div>
                    <span className="text-white font-medium">{salon.rating}</span>
                    <span className="text-white/80 ml-1">({salon.reviews} reviews)</span>
                  </div>
                  
                  {/* Location with enhanced styling */}
                  <div className="flex items-center text-white/90 mb-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg inline-flex">
                    <MapPin className="h-5 w-5 mr-2 text-pink-300" />
                    <span>{salon.fullAddress}</span>
                  </div>
                  
                  {/* Description with better contrast */}
                  <div className="bg-black/30 backdrop-blur-sm p-5 rounded-xl mb-8 border border-white/10">
                    <p className="text-white/90 text-lg leading-relaxed">{salon.longDescription}</p>
                  </div>
                  
                  {/* Call to action buttons with enhanced styling */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-8 py-6 text-base shadow-lg hover-lift rounded-full group transition-all duration-300">
                      Book an Appointment
                      <div className="w-7 h-7 ml-2 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                        <Calendar className="h-4 w-4" />
                      </div>
                    </Button>
                    <Button variant="outline" className="border-white/40 text-white hover:bg-white/15 hover:border-white/70 px-8 py-6 text-base rounded-full backdrop-blur-sm">
                      View Services
                    </Button>
                  </div>
                </div>
              </Animated>
            </div>
          </div>
        </div>
        
        {/* Decorative scrolling indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce z-30">
          <div className="h-10 w-6 border-2 border-white/40 rounded-full mb-1 flex justify-center">
            <div className="h-2 w-2 bg-white/70 rounded-full mt-1 animate-pulse"></div>
          </div>
          <span className="text-xs font-medium">Scroll Down</span>
        </div>
      </section>
      
      {/* Contact and Quick Info */}
      <section className="bg-white py-12 border-b border-gray-100 relative">
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-gray-100/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:bg-pink-50/50 p-4 rounded-xl">
              <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-pink-700 transition-colors">Contact</h3>
                <p className="text-gray-700">{salon.phone}</p>
                <p className="text-gray-700">{salon.email}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:bg-pink-50/50 p-4 rounded-xl">
              <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-pink-700 transition-colors">Opening Hours</h3>
                <p className="text-gray-700">Today: {salon.openingHours.monday}</p>
                <Link href="#hours" className="text-pink-600 hover:text-pink-500 text-sm inline-flex items-center">
                  View all hours
                  <svg className="w-3 h-3 ml-1" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:bg-pink-50/50 p-4 rounded-xl">
              <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-pink-700 transition-colors">Specialties</h3>
                <p className="text-gray-700">{salon.specialty}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:bg-pink-50/50 p-4 rounded-xl">
              <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-pink-700 transition-colors">Visitors</h3>
                <p className="text-gray-700">3,500+ monthly clients</p>
                <div className="flex -space-x-2 mt-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-6 w-6 rounded-full border-2 border-white overflow-hidden">
                      <div className="bg-pink-100 h-full w-full flex items-center justify-center text-[8px] text-pink-700 font-bold">
                        GV
                      </div>
                    </div>
                  ))}
                  <div className="h-6 w-6 rounded-full border-2 border-white bg-pink-600 flex items-center justify-center text-[8px] text-white font-bold">
                    +99
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content - This will be completed in the next part */}
      <div className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl py-12">
          <div className="w-full">
            {/* Main Content Area */}
            <div className="w-full">
              {/* Gallery Section */}
              <section className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="mb-2 inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1">
                        <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                        <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                      </svg>
                      Our Space
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">Salon Gallery</h2>
                  </div>
                  <Link href="#all-photos" className="hidden md:flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors">
                    View All Photos
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 h-80">
                  <div className="relative col-span-2 row-span-2 overflow-hidden rounded-xl group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
                      <div className="p-4">
                        <span className="text-white text-sm font-medium">Main Salon Area</span>
                      </div>
                    </div>
                    <Image
                      src={salon.gallery[0]}
                      alt={`Gallery image 1`}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  
                  {salon.gallery.slice(1, 5).map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-xl group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
                        <div className="p-3">
                          <span className="text-white text-xs font-medium">
                            {index === 0 ? "Reception" : index === 1 ? "Treatment Room" : index === 2 ? "Styling Station" : "Relaxation Area"}
                          </span>
                        </div>
                      </div>
                      <Image
                        src={image}
                        alt={`Gallery image ${index + 2}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-all duration-700"
                      />
                    </div>
                  ))}
                  
                  <div className="relative overflow-hidden rounded-xl group">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center transition-all duration-300 z-10">
                      <div className="text-center">
                        <span className="text-white text-lg font-medium">+{salon.gallery.length - 5}</span>
                        <p className="text-white/80 text-xs">More Photos</p>
                      </div>
                    </div>
                    <Image
                      src={salon.gallery[5]}
                      alt={`Gallery image 6`}
                      fill
                      className="object-cover group-hover:scale-110 transition-all duration-700"
                    />
                  </div>
                </div>
              </section>
              
              {/* About Section */}
              <section className="mb-16 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-50 rounded-full opacity-30 blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full opacity-30 blur-3xl -z-10"></div>
                
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="mb-2 inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                      </svg>
                      Our Story
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">About {salon.name}</h2>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-10">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-3/5">
                      <p className="text-gray-700 leading-relaxed mb-6 first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:text-pink-600 first-letter:mr-1 first-letter:float-left">
                        {salon.longDescription}
                      </p>
                      
                      <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-6">
                        <div className="flex -space-x-3">
                          {salon.staff.slice(0, 3).map((member, i) => (
                            <div key={i} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                              <Image 
                                src={member.image} 
                                alt={member.name}
                                width={40}
                                height={40}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          ))}
                          {salon.staff.length > 3 && (
                            <div className="h-10 w-10 rounded-full border-2 border-white bg-pink-600 flex items-center justify-center text-[10px] text-white font-bold">
                              +{salon.staff.length - 3}
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Established in 2015</p>
                          <p className="text-sm font-medium text-gray-900">{salon.staff.length} Expert Stylists</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/5 grid grid-cols-1 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="font-medium text-gray-900 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-pink-600">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                        Premium Salon Features
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {salon.features.map((feature, index) => (
                          <div key={index} className="flex items-center bg-white p-3 rounded-lg border border-gray-100 hover:border-pink-200 transition-colors">
                            <div className="h-8 w-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <Check className="h-4 w-4" />
                            </div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-gray-100 hover:border-pink-200 transition-all shadow-sm">
                    <CardHeader className="pb-2 pt-6 px-6">
                      <h3 className="text-lg font-medium text-gray-900 flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-pink-600" />
                        Opening Hours
                      </h3>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      <div className="space-y-3">
                        {Object.entries(salon.openingHours).map(([day, hours], index) => (
                          <div key={day} className={`flex justify-between ${day === 'sunday' ? 'text-pink-800 font-medium' : ''}`}>
                            <span className={`text-gray-600 capitalize ${day === 'sunday' ? 'text-pink-800' : ''}`}>{day}</span>
                            <span className={`text-gray-900 ${day === 'sunday' ? 'text-pink-800' : ''}`}>{hours || "Closed"}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                        <p>Holiday hours may vary. Please call ahead for confirmation.</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gray-100 hover:border-pink-200 transition-all shadow-sm bg-gradient-to-br from-pink-50/50 to-purple-50/50">
                    <CardHeader className="pb-0 pt-6 px-6">
                      <h3 className="text-lg font-medium text-gray-900 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-pink-600" />
                        Awards & Recognition
                      </h3>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      <div className="space-y-4 mt-4">
                        <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">Best Luxury Salon</p>
                              <p className="text-sm text-gray-600">Beauty Excellence Awards</p>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">2023</span>
                        </div>
                        
                        <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M11.25 4.533A9.707 9.707 0 006 3c-2.756 0-5.217.48-7.12 1.295A.75.75 0 00-1.5 5.25v5.527c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.626a48.517 48.517 0 019 0v.626c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.382-.651C18.217 3.48 15.756 3 13 3c-1.395 0-2.726.144-3.966.414A9.707 9.707 0 0012 3c1.395 0 2.726.144 3.966.414.378.082.748.178 1.114.285a.75.75 0 001.023-.611A.75.75 0 0017.25 1.5a.75.75 0 00-.12.026A19.717 19.717 0 0012 0 19.717 19.717 0 006.87 1.526.75.75 0 005.25 3a.75.75 0 001.023.611 19.737 19.737 0 013.25-.425 9.707 9.707 0 001.727-.11z" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">Top-Rated Service</p>
                              <p className="text-sm text-gray-600">City Business Association</p>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">2022</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">Customer Satisfaction</p>
                              <p className="text-sm text-gray-600">National Salon Association</p>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">2021</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
              
              {/* Booking Section (Moved from aside) */}
              <section className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="mb-2 inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-medium">
                      <Calendar className="h-3 w-3 mr-1" />
                      Book Now
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">Schedule Your Visit</h2>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <Card className="border-gray-100 shadow-sm overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-400/10 to-transparent rounded-full"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full"></div>
                      
                      <div id="booking" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-6">
                        <div className="mb-1 inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-medium">
                          <span className="flex h-2 w-2 relative mr-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                          </span>
                          Online Booking
                        </div>
                        <h3 className="text-xl font-serif font-medium mb-2 mt-2">Book Your Appointment</h3>
                        <p className="text-white/90 text-sm">Choose your preferred date and time for a luxurious experience</p>
                      </div>
                      
                      <CardContent className="p-6 relative z-10">
                        <div className="bg-pink-50/50 rounded-lg p-4 border border-pink-100 mb-6 relative">
                          <div className="absolute -top-3 -right-3 bg-pink-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                            Limited Time
                          </div>
                          <h4 className="text-lg font-medium text-pink-800 flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1.5">
                              <path fillRule="evenodd" d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 001.029.696l3.471-1.388 3.472 1.388a.75.75 0 00.556 0l3.472-1.388 3.471 1.388a.75.75 0 001.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0012 1.5zm3.53 7.28a.75.75 0 00-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 10-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.5-3.5z" clipRule="evenodd" />
                            </svg>
                            First Visit Special
                          </h4>
                          <div className="flex items-center mb-3">
                            <div className="bg-white/80 text-pink-700 text-sm font-semibold px-2 py-0.5 rounded mr-2">20% OFF</div>
                            <span className="text-gray-700 text-sm">Any service over $50</span>
                          </div>
                          <div className="space-y-2 mb-3">
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-500" />
                              <span className="text-gray-700 text-sm">Complimentary consultation</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-500" />
                              <span className="text-gray-700 text-sm">Product samples</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-500" />
                              <span className="text-gray-700 text-sm">Extended appointment time</span>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">
                            Use code <span className="font-medium text-pink-600">FIRSTVISIT</span> when booking
                          </div>
                        </div>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-100 transition-colors">
                            <div className="h-8 w-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="h-4 w-4" />
                            </div>
                            <div className="flex-grow">
                              <span className="text-gray-900 font-medium text-sm">Instant Confirmation</span>
                              <p className="text-gray-500 text-xs">Book now, receive confirmation immediately</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-100 transition-colors">
                            <div className="h-8 w-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="flex-grow">
                              <span className="text-gray-900 font-medium text-sm">Flexible Rescheduling</span>
                              <p className="text-gray-500 text-xs">Change your appointment up to 24 hours before</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-100 transition-colors">
                            <div className="h-8 w-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" />
                              </svg>
                            </div>
                            <div className="flex-grow">
                              <span className="text-gray-900 font-medium text-sm">SMS Reminders</span>
                              <p className="text-gray-500 text-xs">Receive convenient reminders via text</p>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white rounded-full py-6 shadow-md group">
                          <span className="mr-2">Book Your Appointment</span>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            <Calendar className="h-4 w-4 inline-block" />
                          </span>
                        </Button>
                        
                        <div className="flex items-center justify-center mt-4">
                          <div className="h-px w-full bg-gray-100"></div>
                          <span className="text-xs text-gray-400 px-2 whitespace-nowrap">or call us</span>
                          <div className="h-px w-full bg-gray-100"></div>
                        </div>
                        
                        <div className="mt-4 text-center">
                          <a href={`tel:${salon.phone}`} className="text-pink-600 hover:text-pink-700 font-medium text-sm flex items-center justify-center gap-2">
                            <Phone className="h-4 w-4" />
                            {salon.phone}
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <div className="space-y-8">
                      {/* Client Reviews Summary */}
                      <Card className="border-gray-100 shadow-sm overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium text-gray-900">Client Reviews</h3>
                            <div className="text-sm text-pink-600 font-medium">
                              {salon.rating} <span className="text-gray-400">/ 5</span>
                            </div>
                          </div>
                          
                          <div className="flex mb-4">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < Math.floor(salon.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`} />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 ml-2 pt-0.5">({salon.reviews} reviews)</span>
                          </div>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center">
                              <span className="text-sm text-gray-600 w-16">5 Stars</span>
                              <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden mx-2">
                                <div className="h-full bg-yellow-400 rounded-full" style={{ width: '80%' }}></div>
                              </div>
                              <span className="text-sm text-gray-600 w-8">80%</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm text-gray-600 w-16">4 Stars</span>
                              <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden mx-2">
                                <div className="h-full bg-yellow-400 rounded-full" style={{ width: '15%' }}></div>
                              </div>
                              <span className="text-sm text-gray-600 w-8">15%</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm text-gray-600 w-16">3 Stars</span>
                              <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden mx-2">
                                <div className="h-full bg-yellow-400 rounded-full" style={{ width: '4%' }}></div>
                              </div>
                              <span className="text-sm text-gray-600 w-8">4%</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm text-gray-600 w-16">2 Stars</span>
                              <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden mx-2">
                                <div className="h-full bg-yellow-400 rounded-full" style={{ width: '1%' }}></div>
                              </div>
                              <span className="text-sm text-gray-600 w-8">1%</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm text-gray-600 w-16">1 Star</span>
                              <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden mx-2">
                                <div className="h-full bg-yellow-400 rounded-full" style={{ width: '0%' }}></div>
                              </div>
                              <span className="text-sm text-gray-600 w-8">0%</span>
                            </div>
                          </div>
                          
                          <div className="text-center">
                            <Link href="#reviews" className="text-pink-600 hover:text-pink-700 text-sm font-medium inline-flex items-center">
                              Read All Reviews
                              <svg className="w-3 h-3 ml-1" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                      
                      {/* Location Map */}
                      <Card className="border-gray-100 shadow-sm overflow-hidden">
                        <CardContent className="p-0">
                          <div className="aspect-[4/3] relative bg-gray-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center px-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-pink-600 mx-auto mb-2">
                                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                                <p className="text-gray-600 mb-4">Interactive map available on desktop view</p>
                                <Button variant="outline" className="bg-white shadow-sm border-pink-100 text-pink-700 hover:border-pink-300 hover:bg-pink-50">
                                  Get Directions
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 border-t border-gray-100">
                            <div className="flex items-start">
                              <MapPin className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                              <div className="ml-2">
                                <h4 className="text-sm font-medium text-gray-900 mb-1">Our Location</h4>
                                <p className="text-sm text-gray-600">{salon.fullAddress}</p>
                                <p className="text-xs text-gray-500 mt-1">Free parking available for clients</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Services Section */}
              <section className="mb-16" id="services">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="mb-2 inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-medium">
                      <Star className="h-3 w-3 mr-1 fill-pink-600 text-pink-600" />
                      Expert Services
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">Our Premium Services</h2>
                  </div>
                  <Link href="#booking" className="hidden md:flex items-center text-pink-600 hover:text-pink-700 font-medium text-sm transition-colors">
                    Book Now 
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
                
                <Tabs defaultValue={salon.services[0]?.category || "Hair"} className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -right-16 w-32 h-32 bg-pink-100/50 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-16 w-32 h-32 bg-purple-100/50 rounded-full blur-3xl"></div>
                  
                  <TabsList className="mb-8 flex flex-wrap justify-start bg-gray-50/50 backdrop-blur-sm rounded-xl p-1.5 border border-gray-100 w-full h-auto overflow-x-auto scrollbar-hide">
                    {salon.services.map((service) => (
                      <TabsTrigger 
                        key={service.category} 
                        value={service.category}
                        className="data-[state=active]:bg-white data-[state=active]:text-pink-700 data-[state=active]:shadow-sm rounded-lg px-6 py-2.5 text-base font-medium hover:text-pink-600 transition-all duration-200 flex-shrink-0"
                      >
                        {service.category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {salon.services.map((service) => (
                    <TabsContent key={service.category} value={service.category} className="focus-visible:outline-none focus-visible:ring-0">
                      <div className="grid gap-5">
                        {service.items.map((item, index) => (
                          <Card key={index} className="border-gray-100 hover:border-pink-200 transition-all hover:shadow-sm overflow-hidden group">
                            <CardContent className="flex justify-between items-center p-0">
                              <div className="p-6 flex flex-col md:flex-row md:items-center flex-grow">
                                <div className="flex-grow">
                                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-pink-700 transition-colors mb-2">{item.name}</h3>
                                  <div className="flex flex-wrap items-center gap-4">
                                    <div className="text-sm text-gray-500 flex items-center">
                                      <Clock className="h-4 w-4 mr-1.5 text-gray-400" />
                                      {item.duration}
                                    </div>
                                    
                                    <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                                    
                                    <div className="text-sm text-gray-500 flex items-center">
                                      <Users className="h-4 w-4 mr-1.5 text-gray-400" />
                                      1 Stylist
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-4 mt-4 md:mt-0">
                                  <div className="text-xl font-medium text-pink-700 tracking-tight">{item.price}</div>
                                </div>
                              </div>
                              
                              <div className="h-full">
                                <Button className="h-full px-6 py-6 md:px-8 rounded-none bg-gray-50 hover:bg-pink-50 text-pink-700 hover:text-pink-800 border-l border-gray-100 hover:border-pink-100 transition-all duration-300 group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600">
                                  <div className="flex items-center gap-2">
                                    Book Now
                                    <Calendar className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                                  </div>
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      
                      <div className="mt-8 flex justify-center">
                        <div className="text-center p-5 bg-pink-50/50 rounded-xl border border-pink-100/50 max-w-lg">
                          <Award className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                          <p className="text-gray-700 text-sm">
                            All services include complimentary consultation and premium products. For customized options or special requests, please <Link href="#contact" className="text-pink-600 hover:text-pink-700 font-medium">contact us</Link>.
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </section>
              
              {/* Staff Section */}
              {salon.staff && salon.staff.length > 0 && (
                <section className="mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="mb-2 inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        <Users className="h-3 w-3 mr-1" />
                        Meet The Team
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">Our Expert Stylists</h2>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {salon.staff.map((member, index) => (
                      <div key={index} className="group">
                        <Card className="border-gray-100 overflow-hidden hover:border-pink-200 transition-all hover:shadow-md bg-white h-full">
                          <div className="aspect-[4/3] relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
                              <div className="p-4 w-full">
                                <div className="flex justify-center space-x-3">
                                  <Button variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm border-none hover:bg-white text-pink-700 rounded-full w-9 h-9 p-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>
                                  </Button>
                                  <Button variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm border-none hover:bg-white text-pink-700 rounded-full w-9 h-9 p-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                    </svg>
                                  </Button>
                                  <Button variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm border-none hover:bg-white text-pink-700 rounded-full w-9 h-9 p-0">
                                    <Calendar className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-pink-600 text-xs font-medium px-2.5 py-1 rounded-full z-10">
                              {index === 0 ? "Lead Stylist" : "Expert"}
                            </div>
                          </div>
                          <CardContent className="p-6 relative">
                            <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-pink-600 absolute -top-0.5 left-1/2 transform -translate-x-1/2 rounded-full"></div>
                            <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-pink-700 transition-colors">{member.name}</h3>
                            <p className="text-pink-600 text-sm font-medium mb-3">{member.role}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                            
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star, i) => (
                                  <Star key={i} className={`h-4 w-4 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`} />
                                ))}
                                <span className="text-xs text-gray-500 ml-1.5 pt-0.5">5.0</span>
                              </div>
                              <span className="text-xs bg-pink-50 text-pink-700 px-2 py-0.5 rounded-full font-medium">
                                {index === 0 ? "8+ years" : index === 1 ? "6+ years" : "5+ years"}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </section>
              )}
              
              {/* Products Section */}
              {salon.products && salon.products.length > 0 && (
                <section className="mb-16 relative">
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-50/30 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-50/30 rounded-full blur-3xl -z-10"></div>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="mb-2 inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1">
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        Exclusive Products
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">Premium Beauty Products</h2>
                    </div>
                    <Link href="/shop" className="hidden md:flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors">
                      View All Products
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {salon.products.map((product, index) => (
                      <div key={index} className="group">
                        <Card className="border-gray-100 overflow-hidden hover:border-amber-200 transition-all hover:shadow-md bg-white h-full">
                          <div className="aspect-square relative overflow-hidden bg-gray-50">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-between">
                              <div className="p-4 w-full flex justify-between items-center">
                                <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm border-none hover:bg-white text-pink-700 text-xs py-1">
                                  Details
                                </Button>
                                <Button size="sm" className="bg-pink-600 hover:bg-pink-700 text-white text-xs py-1">
                                  Add to Cart
                                </Button>
                              </div>
                            </div>
                            
                            {index === 0 && (
                              <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs px-2.5 py-1 rounded-full font-medium shadow-sm">
                                Best Seller
                              </div>
                            )}
                            
                            {index === 2 && (
                              <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs px-2.5 py-1 rounded-full font-medium shadow-sm">
                                New Arrival
                              </div>
                            )}
                            
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className={`h-3 w-3 ${star <= Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">{product.rating}</span>
                            </div>
                            <div className="mb-1">
                              <span className="text-xs text-amber-600 font-medium uppercase tracking-wider">
                                {index === 0 ? "GlowSkin" : index === 1 ? "PureBeauty" : index === 2 ? "LuxeHair" : "NaturalCare"}
                              </span>
                            </div>
                            <h3 className="text-gray-900 font-medium text-sm mb-1 line-clamp-2 group-hover:text-pink-700 transition-colors">{product.name}</h3>
                            <div className="flex items-center justify-between">
                              <p className="text-pink-700 font-semibold">{product.price}</p>
                              {index === 1 && (
                                <span className="text-xs bg-pink-100 text-pink-700 px-1.5 py-0.5 rounded">
                                  Save 15%
                                </span>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 flex justify-center">
                    <div className="text-center p-6 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-xl border border-amber-100/50 max-w-2xl">
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-amber-100/70">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-600 mx-auto mb-2">
                          <path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39.92 3.31 0l4.431-4.43a2.25 2.25 0 000-3.188l-9.58-9.581a3 3 0 00-2.12-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clipRule="evenodd" />
                        </svg>
                        <p className="text-gray-700 text-sm mb-2 font-medium">
                          Exclusive In-Salon Discount
                        </p>
                        <p className="text-gray-600 text-sm">
                          Buy any service and get 10% off all products purchased during your visit.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              
              {/* Testimonials Section */}
              {salon.testimonials && salon.testimonials.length > 0 && (
                <section className="mb-16" id="reviews">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="mb-2 inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1">
                          <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                        </svg>
                        Client Experiences
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">What Our Clients Say</h2>
                    </div>
                    <div className="hidden md:flex items-center space-x-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-gray-700 font-medium">{salon.rating} out of 5</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {salon.testimonials.map((testimonial, index) => (
                      <Card key={index} className={`border-gray-100 hover:border-indigo-200 transition-all bg-white relative overflow-hidden group ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                        <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-50 rounded-full -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 w-20 h-20 bg-pink-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        
                        <CardContent className="p-6 relative">
                          <div className="flex mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className={`h-4 w-4 ${star <= testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
                            ))}
                          </div>
                          
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-indigo-100 absolute top-6 right-6">
                            <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                          </svg>
                          
                          <div className={index === 0 ? 'mb-6' : 'mb-4'}>
                            <p className={`text-gray-700 ${index === 0 ? 'text-lg leading-relaxed' : 'text-sm leading-relaxed'}`}>"{testimonial.text}"</p>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 text-white flex items-center justify-center mr-3 shadow-sm">
                                {testimonial.name.split(' ').map(name => name[0]).join('').toUpperCase()}
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{testimonial.name}</p>
                                <p className="text-xs text-gray-500">{index === 0 ? 'Verified Customer' : 'Regular Client'}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500">{testimonial.date}</p>
                              <div className="mt-1 flex justify-end">
                                {index === 0 && (
                                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                                    Top Review
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          {index === 0 && (
                            <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                              <div className="text-sm text-gray-500">
                                <span className="text-indigo-600 font-medium">90 people</span> found this helpful
                              </div>
                              <Button variant="outline" size="sm" className="h-8 px-3 rounded-full border-gray-200 text-gray-700 hover:bg-gray-50 text-xs">
                                Helpful
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-10 p-6 rounded-xl border border-gray-200 bg-gradient-to-r from-indigo-50/50 to-pink-50/50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">Share Your Experience</h3>
                      <p className="text-gray-600 md:max-w-md">
                        We value your feedback! Let us know about your recent visit and help others discover our services.
                      </p>
                    </div>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white min-w-[180px]">
                      Write a Review
                    </Button>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 