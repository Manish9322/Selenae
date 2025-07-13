import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Briefcase, CheckCircle, Heart, Star, Users, GraduationCap, MapPin, Clock, Building, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Animated } from "@/components/ui/animated"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers - Selenae",
  description: "Join our team and help transform the beauty and wellness industry",
}

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our engineering team to build beautiful, responsive web applications that power the future of beauty and wellness booking."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      description: "Lead product strategy and work closely with design and engineering teams to deliver exceptional user experiences."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create intuitive and beautiful interfaces that delight our users and partners in the beauty industry."
    },
    {
      title: "Partnership Manager",
      department: "Business Development",
      location: "Los Angeles, CA",
      type: "Full-time",
      description: "Build and maintain relationships with premium beauty salons and spas across the region."
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Miami, FL",
      type: "Full-time",
      description: "Drive growth through innovative digital marketing strategies and campaigns."
    },
    {
      title: "Customer Success Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description: "Ensure our salon partners and end-users have the best possible experience with our platform."
    }
  ]

  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs",
      icon: Heart
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working hours, unlimited PTO, and remote work options",
      icon: Users
    },
    {
      title: "Growth & Development",
      description: "Learning stipend, mentorship programs, and career advancement opportunities",
      icon: Star
    },
    {
      title: "Competitive Package",
      description: "Attractive salary, equity options, and performance bonuses",
      icon: Briefcase
    }
  ]

  const values = [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace new technologies to revolutionize the beauty industry",
      icon: Star
    },
    {
      title: "Customer Obsession",
      description: "Everything we do starts with our customers - both salons and end-users",
      icon: Heart
    },
    {
      title: "Diversity & Inclusion",
      description: "We celebrate differences and create an environment where everyone belongs",
      icon: Users
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code to customer service",
      icon: Trophy
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Product Designer",
      image: "/placeholder-user.jpg",
      quote: "Working at Selenae has been incredible. The culture of innovation and support has helped me grow both personally and professionally.",
      yearsAtCompany: "2 years"
    },
    {
      name: "James Rodriguez",
      role: "Engineering Lead",
      image: "/placeholder-user.jpg",
      quote: "What I love most about Selenae is how we're empowered to make decisions and drive real change in the industry.",
      yearsAtCompany: "3 years"
    },
    {
      name: "Emily Thompson",
      role: "Customer Success Manager",
      image: "/placeholder-user.jpg",
      quote: "The growth opportunities here are endless. I started as a support agent and now lead a team of success managers.",
      yearsAtCompany: "4 years"
    }
  ]

  const developmentPrograms = [
    {
      title: "Learning & Development",
      description: "Annual learning stipend of $2,500 for courses, conferences, and certifications",
      icon: GraduationCap
    },
    {
      title: "Mentorship Program",
      description: "1:1 mentorship with senior team members and leadership",
      icon: Users
    },
    {
      title: "Career Progression",
      description: "Clear growth paths and regular promotion cycles",
      icon: Trophy
    }
  ]

  const locations = [
    {
      city: "New York",
      country: "United States",
      address: "123 Broadway, New York, NY",
      image: "/placeholder.jpg"
    },
    {
      city: "Los Angeles",
      country: "United States",
      address: "456 Santa Monica Blvd, LA, CA",
      image: "/placeholder.jpg"
    },
    {
      city: "Miami",
      country: "United States",
      address: "789 Ocean Drive, Miami, FL",
      image: "/placeholder.jpg"
    }
  ]

  const applicationSteps = [
    {
      step: 1,
      title: "Application Review",
      description: "Our team reviews your application within 48 hours",
      icon: Clock
    },
    {
      step: 2,
      title: "Initial Interview",
      description: "Virtual chat with our hiring team",
      icon: Users
    },
    {
      step: 3,
      title: "Technical/Skills Assessment",
      description: "Role-specific evaluation",
      icon: GraduationCap
    },
    {
      step: 4,
      title: "Final Interviews",
      description: "Meet the team and leadership",
      icon: Building
    }
  ]

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 py-24 md:py-32 w-full">
        <div className="absolute inset-0 z-0 opacity-20 bg-dotted-pattern"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <Animated animation="fade-in-up">
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-heading mb-6">
                Join Our Mission
              </h1>
              <p className="text-lg text-gray-600 md:text-xl max-w-2xl mx-auto">
                Help us revolutionize the beauty and wellness industry. We're looking for passionate individuals to join our growing team.
              </p>
            </Animated>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="w-full py-24 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Animated animation="fade-in-right">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading">Why Join Selenae?</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  At Selenae, we're more than just a beauty and wellness platform. We're a team of passionate individuals working together to transform how people experience beauty services.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-6 w-6 mt-1 text-pink-600">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <p className="text-gray-600">Work with cutting-edge technology and innovative solutions</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-6 w-6 mt-1 text-pink-600">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <p className="text-gray-600">Be part of a diverse and inclusive workplace</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-6 w-6 mt-1 text-pink-600">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <p className="text-gray-600">Make a real impact in the beauty and wellness industry</p>
                  </div>
                </div>
              </div>
            </Animated>
            
            <Animated animation="fade-in-left">
              <div className="relative">
                <div className="absolute -right-4 -top-4 w-72 h-72 bg-pink-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="relative z-10">
                  <Image
                    src="/placeholder.jpg"
                    alt="Team Culture"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* Culture & Values Section */}
      <section className="w-full py-24 md:py-28 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <Animated animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading mb-6">Our Culture & Values</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                The principles that guide us in building an exceptional workplace
              </p>
            </div>
          </Animated>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Animated key={value.title} animation="fade-in-up" delay={0.1 * (index + 1)}>
                <Card className="bg-white border-purple-100 hover:border-purple-300 transition-all hover-lift overflow-hidden group">
                  <CardHeader className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-50 flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl font-serif text-purple-800">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-6 pb-6">
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials Section */}
      <section className="w-full py-24 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <Animated animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading mb-6">Meet Our Team</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Hear from the people who make Selenae an amazing place to work
              </p>
            </div>
          </Animated>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Animated key={testimonial.name} animation="fade-in-up" delay={0.1 * (index + 1)}>
                <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      <div className="ml-4">
                        <h4 className="font-serif text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <p className="text-sm text-gray-500">{testimonial.yearsAtCompany}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  </CardContent>
                </Card>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Growth & Development Section */}
      <section className="w-full py-24 md:py-28 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <Animated animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading mb-6">Growth & Development</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We invest in your growth and provide opportunities to advance your career
              </p>
            </div>
          </Animated>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {developmentPrograms.map((program, index) => (
              <Animated key={program.title} animation="fade-in-up" delay={0.1 * (index + 1)}>
                <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group">
                  <CardHeader className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-pink-50 flex items-center justify-center">
                      <program.icon className="h-8 w-8 text-pink-600" />
                    </div>
                    <CardTitle className="text-xl font-serif text-pink-800">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-6 pb-6">
                    <p className="text-gray-600">{program.description}</p>
                  </CardContent>
                </Card>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="w-full py-24 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <Animated animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading mb-6">Our Offices</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Join us at one of our beautiful locations across the United States
              </p>
            </div>
          </Animated>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Animated key={location.city} animation="fade-in-up" delay={0.1 * (index + 1)}>
                <Card className="bg-white border-purple-100 hover:border-purple-300 transition-all hover-lift overflow-hidden group">
                  <div className="relative h-48">
                    <Image
                      src={location.image}
                      alt={location.city}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="p-6">
                    <CardTitle className="text-xl font-serif text-purple-800 mb-2">{location.city}</CardTitle>
                    <CardDescription className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {location.address}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="w-full py-24 md:py-28 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <Animated animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading mb-6">Application Process</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our streamlined hiring process is designed to be transparent and efficient
              </p>
            </div>
          </Animated>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <Animated key={step.title} animation="fade-in-up" delay={0.1 * (index + 1)}>
                <Card className="bg-white border-purple-100 hover:border-purple-300 transition-all hover-lift overflow-hidden group">
                  <CardHeader className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-50 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full w-fit mx-auto mb-4">
                      Step {step.step}
                    </div>
                    <CardTitle className="text-xl font-serif text-purple-800">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-6 pb-6">
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-24 md:py-28 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <Animated animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading mb-6">Benefits & Perks</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We take care of our team with comprehensive benefits and perks
              </p>
            </div>
          </Animated>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Animated key={benefit.title} animation="fade-in-up" delay={0.1 * (index + 1)}>
                <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group">
                  <CardHeader className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-pink-50 flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-pink-600" />
                    </div>
                    <CardTitle className="text-xl font-serif text-pink-800">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-6 pb-6">
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="w-full py-24 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <Animated animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading mb-6">Open Positions</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Join our team and help shape the future of beauty and wellness
              </p>
            </div>
          </Animated>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <Animated key={position.title} animation="fade-in-up" delay={0.1 * (index + 1)}>
                <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group">
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
                        {position.department}
                      </span>
                      <span className="text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                        {position.type}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-serif text-pink-800 mb-2">{position.title}</CardTitle>
                    <CardDescription className="flex items-center text-gray-600">
                      <Briefcase className="h-4 w-4 mr-2" />
                      {position.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <p className="text-gray-600 mb-6">{position.description}</p>
                    <Button className="w-full bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-br from-pink-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl relative z-10">
          <Animated animation="fade-in-up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl text-white mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button size="lg" className="bg-white hover:bg-white/90 text-pink-700 px-8 py-6">
                Send Your Resume <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Animated>
        </div>
      </section>
    </div>
  )
} 