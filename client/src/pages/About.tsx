import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Users2, Zap, Target, Star, ArrowRight, CheckCircle, Eye, Heart, Calendar, Linkedin } from "lucide-react";
import yasirAslamImage from "@assets/Screenshot_20250710_162439_Gallery_1752146873606.jpg";
import aftabHussainImage from "@assets/ChatGPT Image Jul 10, 2025, 04_49_45 PM_1752148197976.png";

export default function About() {
  const timelineEvents = [
    {
      year: "2018",
      title: "Digital Mashwarah Founded",
      description: "Started our journey with a vision to transform digital marketing in Pakistan"
    },
    {
      year: "2019",
      title: "First Major Campaign",
      description: "Launched successful campaigns for leading jewelry brands, achieving 300% ROI"
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Grew our team to 15+ specialists across design, development, and marketing"
    },
    {
      year: "2021",
      title: "Multi-Industry Growth",
      description: "Expanded services to e-commerce, healthcare, and education sectors"
    },
    {
      year: "2022",
      title: "Award Recognition",
      description: "Won 'Best Digital Marketing Agency' at Pakistan Digital Awards"
    },
    {
      year: "2023",
      title: "International Reach",
      description: "Started serving clients across Middle East and North America"
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Launched AI-powered marketing solutions and advanced analytics platform"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Leading digital transformation with cutting-edge technology and strategies"
    }
  ];

  const teamMembers = [
    {
      name: "Yasir Aslam",
      role: "CEO & Founder",
      image: yasirAslamImage,
      bio: "Visionary leader with 8+ years of experience in digital marketing and business strategy.",
      linkedin: "https://linkedin.com/in/yasiraslam"
    },
    {
      name: "Aftab Hussain",
      role: "Creative Director",
      image: aftabHussainImage,
      bio: "Award-winning designer specializing in brand identity and creative campaigns.",
      linkedin: "https://linkedin.com/in/aftabhussain"
    },
    {
      name: "Sarah Ahmed",
      role: "Head of Strategy",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Strategic marketing expert with expertise in data-driven campaign optimization.",
      linkedin: "https://linkedin.com/in/sarahahmed"
    },
    {
      name: "Ahmad Khan",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Full-stack developer specializing in web applications and marketing automation.",
      linkedin: "https://linkedin.com/in/ahmadkhan"
    }
  ];

  const missionVisionValues = [
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Our Mission",
      description: "To empower businesses with innovative digital marketing solutions that create meaningful connections, drive sustainable growth, and deliver measurable success in today's competitive digital marketplace."
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: "Our Vision",
      description: "To become the leading digital marketing agency in Pakistan and beyond, recognized for our creativity, innovation, and commitment to client success in the digital age."
    }
  ];

  const coreValues = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Client-Centric Approach",
      description: "We put our clients' success at the heart of everything we do, building lasting partnerships based on trust and results."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Innovation & Excellence",
      description: "Constantly pushing boundaries with cutting-edge strategies and creative solutions that set new industry standards."
    },
    {
      icon: <Star className="w-8 h-8 text-purple-500" />,
      title: "Integrity & Transparency",
      description: "Building trust through honest communication, transparent reporting, and ethical business practices in all our interactions."
    },
    {
      icon: <Users2 className="w-8 h-8 text-teal-500" />,
      title: "Collaborative Partnership",
      description: "Working closely with clients as partners, understanding their unique needs and delivering customized solutions that exceed expectations."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section - Who We Are */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-[hsl(218,65%,32%)] via-[hsl(213,84%,55%)] to-[hsl(213,90%,69%)] text-white relative overflow-hidden">
          {/* Abstract Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Who We Are
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 opacity-90">
                We're digital storytellers, growth hackers, and brand builders who transform 
                businesses through innovative marketing strategies and creative excellence.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-[hsl(218,65%,32%)] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section id="journey" className="py-20 bg-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(218,65%,32%)] mb-6">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to industry leadership - discover the milestones that shaped our story.
              </p>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[hsl(218,65%,32%)] to-[hsl(213,84%,55%)] rounded-full hidden md:block"></div>
              
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[hsl(218,65%,32%)] rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                    
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <Calendar className="w-5 h-5 text-[hsl(213,84%,55%)] mr-2" />
                            <Badge variant="outline" className="text-[hsl(218,65%,32%)] font-semibold">
                              {event.year}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-[hsl(218,65%,32%)] mb-3">{event.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(218,65%,32%)] mb-6">Our Foundation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles and values that drive our passion for excellence in digital marketing.
              </p>
            </div>
            
            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {missionVisionValues.map((item, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[hsl(218,65%,32%)] to-[hsl(213,84%,55%)] rounded-2xl flex items-center justify-center mr-4">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[hsl(218,65%,32%)]">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Core Values */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[hsl(218,65%,32%)] mb-4">Our Core Values</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The fundamental beliefs that guide our work and shape our relationships with clients and partners.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[hsl(218,65%,32%)] group-hover:to-[hsl(213,84%,55%)] transition-all duration-300">
                        <div className="group-hover:text-white transition-colors duration-300">
                          {value.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-[hsl(218,65%,32%)] mb-3">{value.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-20 bg-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(218,65%,32%)] mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The passionate professionals behind Digital Mashwarah's success, combining expertise with creativity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                      />
                      <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-[hsl(218,65%,32%)] to-[hsl(213,84%,55%)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-xl font-bold text-[hsl(218,65%,32%)] mb-2">{member.name}</h3>
                    <p className="text-[hsl(213,84%,55%)] font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[hsl(213,84%,55%)] hover:text-[hsl(218,65%,32%)] transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-[hsl(218,65%,32%)] to-[hsl(213,84%,55%)] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let's discuss how Digital Mashwarah can help you achieve your digital marketing goals and drive meaningful business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://wa.me/923104090921" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-[hsl(218,65%,32%)] hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[hsl(218,65%,32%)] px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = '/#contact'}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}