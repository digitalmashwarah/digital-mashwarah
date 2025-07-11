import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Clock } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+", color: "text-blue-600" },
    { icon: Target, label: "Projects Completed", value: "1200+", color: "text-green-600" },
    { icon: Award, label: "Years Experience", value: "8+", color: "text-purple-600" },
    { icon: Clock, label: "Average ROI", value: "320%", color: "text-orange-600" }
  ];

  const teamMembers = [
    {
      name: "Aftab Ahmed",
      role: "CEO & Founder",
      expertise: "Digital Strategy, Business Development",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      description: "With 8+ years of experience in digital marketing, Aftab leads our strategic vision and client success initiatives."
    },
    {
      name: "Yasir Aslam",
      role: "Creative Director",
      expertise: "Brand Design, Content Strategy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      description: "Yasir brings creative excellence to every project with his expertise in visual storytelling and brand development."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of digital trends and embrace cutting-edge technologies to deliver exceptional results."
    },
    {
      title: "Transparency",
      description: "We believe in complete transparency with our clients, providing detailed reports and regular updates."
    },
    {
      title: "Results-Driven",
      description: "Every strategy we implement is focused on delivering measurable results and maximizing your ROI."
    },
    {
      title: "Partnership",
      description: "We work as your trusted partner, understanding your business goals and growing together."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[hsl(218,75%,25%)] to-[hsl(213,84%,55%)] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About Digital Mashwarah</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                Empowering businesses with innovative digital marketing solutions since 2018
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-lg">8+ Years Experience</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">500+ Happy Clients</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">1200+ Projects</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 ${stat.color}`}>
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(218,65%,32%)] mb-6">Our Story</h2>
                <p className="text-gray-600 text-lg mb-6">
                  Founded in 2018, Digital Mashwarah began with a simple mission: to help businesses thrive in the digital age. 
                  What started as a small team of passionate digital marketers has grown into a leading agency serving clients across industries.
                </p>
                <p className="text-gray-600 text-lg mb-6">
                  Over the past 8 years, we've helped over 500 businesses transform their digital presence, increase their online visibility, 
                  and achieve remarkable growth. Our expertise spans across all aspects of digital marketing, from strategic planning to execution.
                </p>
                <p className="text-gray-600 text-lg">
                  Today, we continue to innovate and adapt to the ever-evolving digital landscape, ensuring our clients stay ahead of the competition.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Our Team"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(218,65%,32%)] mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced team of digital marketing professionals is dedicated to your success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-[hsl(218,65%,32%)]">{member.name}</h3>
                        <p className="text-[hsl(213,84%,55%)] font-medium">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{member.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.split(', ').map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
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
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(218,65%,32%)] mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and define who we are as a company.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[hsl(218,65%,32%)] mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-r from-[hsl(218,75%,25%)] to-[hsl(213,84%,55%)] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              To empower businesses with innovative digital marketing solutions that drive growth, 
              increase visibility, and deliver measurable results in the ever-evolving digital landscape.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}