import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Award, CheckCircle, Heart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Animated } from "@/components/ui/animated"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Selenae",
  description: "Learn about our mission to transform the beauty and wellness industry",
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/placeholder-user.jpg",
      bio: "With over 15 years in the beauty industry, Sarah founded Selenae with a vision to revolutionize how people discover and book beauty services."
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/placeholder-user.jpg",
      bio: "A tech veteran passionate about creating seamless digital experiences that connect beauty professionals with clients."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Partner Relations",
      image: "/placeholder-user.jpg",
      bio: "Emily brings extensive experience in salon management and focuses on building strong partnerships with top beauty establishments."
    },
    {
      name: "David Kim",
      role: "Creative Director",
      image: "/placeholder-user.jpg",
      bio: "Award-winning designer dedicated to creating beautiful and intuitive experiences for our users."
    }
  ]

  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Selenae was founded with a mission to transform the beauty and wellness industry."
    },
    {
      year: "2021",
      title: "Rapid Growth",
      description: "Expanded to 50+ cities and partnered with over 1,000 premium salons."
    },
    {
      year: "2022",
      title: "Mobile Innovation",
      description: "Launched our award-winning mobile app, making beauty services more accessible than ever."
    },
    {
      year: "2023",
      title: "Industry Leader",
      description: "Recognized as the fastest-growing beauty and wellness platform in the region."
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
                Transforming Beauty & Wellness
              </h1>
              <p className="text-lg text-gray-600 md:text-xl max-w-2xl mx-auto">
                At Selenae, we're on a mission to revolutionize how people discover, book, and experience beauty and wellness services.
              </p>
            </Animated>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-24 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Animated animation="fade-in-right">
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-72 h-72 bg-pink-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="relative z-10">
                  <Image
                    src="/placeholder.jpg"
                    alt="Our Story"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </Animated>
            
            <Animated animation="fade-in-left">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading">Our Story</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Founded in 2020, Selenae emerged from a simple observation: booking beauty services should be as effortless as the relaxation they provide. Our platform bridges the gap between premium beauty establishments and clients seeking exceptional services.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Today, we're proud to partner with thousands of top-rated salons and beauty professionals, serving clients across multiple cities. Our commitment to quality, innovation, and customer satisfaction drives everything we do.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="space-y-2">
                    <div className="text-3xl font-serif font-bold text-pink-600">5,000+</div>
                    <div className="text-gray-600">Partner Salons</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-serif font-bold text-pink-600">500K+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-24 md:py-28 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <Animated animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading mb-6">Our Values</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                These core principles guide everything we do at Selenae
              </p>
            </div>
          </Animated>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Animated animation="fade-in-up" delay={0.1}>
              <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group">
                <CardHeader className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-pink-50 flex items-center justify-center">
                    <Star className="h-8 w-8 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl font-serif text-pink-800">Excellence</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-6 pb-6">
                  <p className="text-gray-600">
                    We maintain the highest standards in every aspect of our service, from partner selection to customer support.
                  </p>
                </CardContent>
              </Card>
            </Animated>

            <Animated animation="fade-in-up" delay={0.2}>
              <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group">
                <CardHeader className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-pink-50 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl font-serif text-pink-800">Passion</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-6 pb-6">
                  <p className="text-gray-600">
                    We're passionate about beauty and wellness, and it shows in our dedication to client satisfaction.
                  </p>
                </CardContent>
              </Card>
            </Animated>

            <Animated animation="fade-in-up" delay={0.3}>
              <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group">
                <CardHeader className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-pink-50 flex items-center justify-center">
                    <Award className="h-8 w-8 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl font-serif text-pink-800">Innovation</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-6 pb-6">
                  <p className="text-gray-600">
                    We continuously innovate to provide the best possible experience for our clients and partners.
                  </p>
                </CardContent>
              </Card>
            </Animated>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-24 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <Animated animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading mb-6">Meet Our Team</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                The passionate individuals behind Selenae's success
              </p>
            </div>
          </Animated>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Animated key={member.name} animation="fade-in-up" delay={0.1 * (index + 1)}>
                <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <CardHeader className="text-center p-6">
                    <CardTitle className="text-xl font-serif text-pink-800">{member.name}</CardTitle>
                    <CardDescription className="text-pink-600 font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center px-6 pb-6">
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="w-full py-24 md:py-28 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full md:max-w-7xl">
          <Animated animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl lg:text-5xl gradient-heading mb-6">Our Journey</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Key milestones in our mission to transform beauty and wellness
              </p>
            </div>
          </Animated>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Animated key={milestone.year} animation="fade-in-up" delay={0.1 * (index + 1)}>
                <Card className="bg-white border-pink-100 hover:border-pink-300 transition-all hover-lift overflow-hidden group">
                  <CardHeader className="text-center p-6">
                    <div className="text-3xl font-serif font-bold text-pink-600 mb-4">{milestone.year}</div>
                    <CardTitle className="text-xl font-serif text-pink-800">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-6 pb-6">
                    <p className="text-gray-600">{milestone.description}</p>
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
                Join Our Growing Community
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Experience the future of beauty and wellness booking with Selenae
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white hover:bg-white/90 text-pink-700 px-8 py-6">
                    Book an Appointment <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/careers">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6">
                    Join Our Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </div>
  )
} 