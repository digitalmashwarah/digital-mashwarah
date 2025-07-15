import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Lightbulb, Target, Users, Award, Rocket } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Passionate Excellence",
      description: "We pour our heart into every project, delivering work that exceeds expectations and drives real business growth."
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "We embrace new ideas and cutting-edge technologies to create unique digital experiences that set you apart."
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "Every strategy we implement is designed to achieve your specific business goals and deliver measurable outcomes."
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "We work as your trusted partner, understanding your vision and collaborating closely to achieve success together."
    }
  ];

  const teamMembers = [
    {
      name: "Aftab Ahmed",
      role: "CEO & Founder",
      expertise: ["Digital Strategy", "Business Development", "Leadership"],
      description: "Visionary leader with deep expertise in digital marketing strategy and business growth. Passionate about helping businesses unlock their full potential in the digital world."
    },
    {
      name: "Yasir Aslam",
      role: "Creative Director",
      expertise: ["Brand Design", "Content Strategy", "Visual Communication"],
      description: "Creative mastermind who brings brands to life through compelling visual storytelling and innovative design solutions that captivate and convert."
    }
  ];

  const services = [
    "Digital Strategy & Consulting",
    "Brand Development & Design",
    "Social Media Marketing",
    "Search Engine Optimization",
    "Content Creation & Marketing",
    "Web Design & Development",
    "Video Production & Animation",
    "Analytics & Performance Tracking"
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[hsl(218,75%,25%)] via-[hsl(213,84%,55%)] to-[hsl(218,65%,32%)] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                About <span className="text-[hsl(213,90%,69%)]">Digital Mashwarah</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
                Your trusted partner in digital transformation, creating meaningful connections between brands and audiences through innovative marketing solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(218,65%,32%)] mb-6">Our Story</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Digital Mashwarah was born from a simple belief: every business deserves to thrive in the digital world. 
                    Founded in 2018 in the heart of Lahore, we started as a small team of passionate digital enthusiasts 
                    who saw the untapped potential in Pakistan's growing digital landscape.
                  </p>
                  <p>
                    What began as a vision to bridge the gap between traditional businesses and digital opportunities has 
                    evolved into a comprehensive digital marketing agency. We've witnessed firsthand how the right digital 
                    strategy can transform a business, and this drives us every single day.
                  </p>
                  <p>
                    Today, we continue to grow and innovate, always staying ahead of digital trends while maintaining our 
                    core values of integrity, creativity, and results-driven excellence.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[hsl(218,75%,25%)] to-[hsl(213,84%,55%)] rounded-2xl p-8 text-white text-center">
                  <Rocket className="h-16 w-16 mx-auto mb-4 text-[hsl(213,90%,69%)]" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg opacity-90 leading-relaxed max-w-md mx-auto">
                    To empower businesses with innovative digital marketing solutions that create lasting impact, 
                    drive meaningful growth, and build stronger connections with their audiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(218,65%,32%)] mb-4">Meet Our Leadership</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Led by experienced professionals who are passionate about digital marketing and committed to your success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-[hsl(218,75%,25%)] to-[hsl(213,84%,55%)] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[hsl(218,65%,32%)] mb-2">{member.name}</h3>
                      <p className="text-[hsl(213,84%,55%)] font-semibold text-lg">{member.role}</p>
                    </div>
                    <p className="text-gray-600 mb-6 text-center leading-relaxed">{member.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-sm px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(218,65%,32%)] mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These fundamental principles guide every decision we make and every solution we create.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[hsl(218,75%,25%)] to-[hsl(213,84%,55%)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[hsl(218,65%,32%)] mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(218,65%,32%)] mb-4">What We Do</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive digital marketing services designed to help your business grow and succeed online.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[hsl(213,84%,55%)]">
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-[hsl(213,84%,55%)] mr-3" />
                    <span className="font-semibold text-[hsl(218,65%,32%)]">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[hsl(218,75%,25%)] to-[hsl(213,84%,55%)] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Digital Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let's discuss how we can help transform your business with innovative digital marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/923104090921" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-[hsl(218,65%,32%)] hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Get Free Consultation
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[hsl(218,65%,32%)] px-8 py-3 text-lg font-semibold">
                View Our Work
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}