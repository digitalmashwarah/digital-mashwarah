import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Users2, Zap, Target, Star, ArrowRight, CheckCircle } from "lucide-react";

export default function About() {
  const founders = [
    {
      name: "Aftab Ahmed",
      role: "Founder & CEO",
      specialties: ["Strategic Planning", "Client Relations", "Business Growth"],
      bio: "Leading Digital Mashwarah with 8+ years of experience in transforming businesses through innovative digital strategies and client-focused solutions."
    },
    {
      name: "Yasir Aslam",
      role: "Creative Director",
      specialties: ["Brand Design", "Creative Strategy", "Visual Identity"],
      bio: "Bringing creative vision to life with expertise in brand development, visual storytelling, and creating compelling digital experiences that drive results."
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Results-Driven Approach",
      description: "Every campaign is designed with clear objectives and measurable outcomes to ensure your investment delivers real business growth."
    },
    {
      icon: Users2,
      title: "Personalized Service",
      description: "We take time to understand your unique business needs and create customized solutions that align with your goals and brand identity."
    },
    {
      icon: Zap,
      title: "Cutting-Edge Solutions",
      description: "We stay ahead of digital trends and leverage the latest technologies to keep your business competitive in the digital landscape."
    },
    {
      icon: Star,
      title: "Proven Track Record",
      description: "Years of successful campaigns and satisfied clients demonstrate our ability to deliver consistent, high-quality results across industries."
    }
  ];

  const ourServices = [
    "Social Media Management & Marketing",
    "Search Engine Optimization (SEO)",
    "Google Ads & PPC Campaigns",
    "Website Design & Development",
    "Content Creation & Strategy",
    "Email Marketing Automation",
    "Brand Identity & Design",
    "Video Production & Animation",
    "Influencer Marketing",
    "Analytics & Performance Tracking"
  ];

  const companyValues = [
    {
      title: "Innovation First",
      description: "We embrace new technologies and creative approaches to deliver cutting-edge solutions that set you apart from competitors."
    },
    {
      title: "Transparency Always",
      description: "Open communication, detailed reporting, and honest feedback form the foundation of our client relationships."
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in every project, ensuring exceptional results that exceed expectations."
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to achieving your business objectives through strategic digital marketing."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-32 md:py-40 bg-gradient-to-br from-[hsl(218,75%,25%)] via-[hsl(213,84%,55%)] to-[hsl(218,65%,32%)] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
                Who We <span className="text-white drop-shadow-lg" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>Are</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
                We are a premier digital marketing agency dedicated to helping businesses thrive in the digital age through innovative strategies and exceptional results.
              </p>
              
              {/* Abstract Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-white/30 to-white/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Soft transition wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-16 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
            </svg>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[hsl(218,65%,32%)] mb-8">Our Journey</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Founded in 2018, Digital Mashwarah emerged from a passion for helping businesses navigate the rapidly evolving digital landscape. We recognized that many companies struggled to establish a strong online presence and effectively reach their target audiences.
                  </p>
                  <p>
                    Our mission was clear: to bridge the gap between traditional business practices and modern digital marketing strategies. We started with a simple belief that every business, regardless of size, deserves access to professional digital marketing services that drive real results.
                  </p>
                  <p>
                    Today, we continue to grow and evolve, staying at the forefront of digital marketing trends while maintaining our commitment to personalized service and measurable results for every client we serve.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[hsl(218,75%,25%)] to-[hsl(213,84%,55%)] rounded-3xl p-8 text-white shadow-2xl">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      To empower businesses with innovative digital marketing solutions that create meaningful connections, drive sustainable growth, and deliver measurable success in today's competitive digital marketplace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(218,65%,32%)] mb-6">Meet Our Leaders</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced leadership team brings together years of expertise in digital marketing, creative design, and business strategy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {founders.map((founder, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-[hsl(218,75%,25%)] to-[hsl(213,84%,55%)] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users2 className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[hsl(218,65%,32%)] mb-2">{founder.name}</h3>
                      <p className="text-[hsl(213,84%,55%)] font-semibold text-lg mb-4">{founder.role}</p>
                    </div>
                    <p className="text-gray-600 mb-6 text-center leading-relaxed">{founder.bio}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {founder.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-sm px-3 py-1">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(218,65%,32%)] mb-6">Why Choose Digital Mashwarah</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine strategic thinking, creative excellence, and technical expertise to deliver digital marketing solutions that drive real business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[hsl(218,75%,25%)] to-[hsl(213,84%,55%)] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[hsl(218,65%,32%)] mb-4">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(218,65%,32%)] mb-6">Our Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive digital marketing services designed to help your business succeed in the digital world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ourServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-[hsl(213,84%,55%)] group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-semibold text-[hsl(218,65%,32%)]">{service}</span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[hsl(213,84%,55%)] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(218,65%,32%)] mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core principles guide everything we do and shape how we work with our clients and partners.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[hsl(218,65%,32%)] mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-[hsl(218,75%,25%)] to-[hsl(213,84%,55%)] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let's discuss how Digital Mashwarah can help you achieve your digital marketing goals and drive meaningful business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://wa.me/923104090921" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-[hsl(218,65%,32%)] hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Journey
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[hsl(218,65%,32%)] px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.location.href = '#contact'}
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}