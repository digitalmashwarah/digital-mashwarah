import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";
import { 
  Facebook, 
  Search, 
  Code, 
  PenTool, 
  Mail, 
  Video, 
  Palette, 
  Star, 
  BarChart,
  Settings
} from "lucide-react";

export default function Services() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const services = [
    {
      icon: <Facebook className="text-2xl" />,
      title: "Social Media Marketing",
      description: "Build your brand presence across all major social platforms with engaging content and targeted campaigns.",
      url: "/services/social-media-marketing"
    },
    {
      icon: <Search className="text-2xl" />,
      title: "Search Engine Optimization",
      description: "Improve your website's visibility and rankings on search engines to drive organic traffic.",
      url: "/services/seo"
    },
    {
      icon: <Settings className="text-2xl" />,
      title: "Google Ads (PPC)",
      description: "Maximize your ROI with targeted pay-per-click advertising campaigns on Google and other platforms.",
      url: "/services/google-ads"
    },
    {
      icon: <Code className="text-2xl" />,
      title: "Web Design & Development",
      description: "Create stunning, responsive websites that convert visitors into customers.",
      url: "/services/web-design"
    },
    {
      icon: <PenTool className="text-2xl" />,
      title: "Content Marketing",
      description: "Engage your audience with high-quality, valuable content that drives traffic and conversions.",
      url: "/services/content-marketing"
    },
    {
      icon: <Mail className="text-2xl" />,
      title: "Email Marketing",
      description: "Build lasting relationships with your customers through personalized email campaigns.",
      url: "/services/email-marketing"
    },
    {
      icon: <Video className="text-2xl" />,
      title: "Video Production",
      description: "Create compelling video content that tells your brand story and engages your audience.",
      url: "/services/video-production"
    },
    {
      icon: <Palette className="text-2xl" />,
      title: "Branding & Graphic Design",
      description: "Develop a strong brand identity with professional design that stands out from the competition.",
      url: "/services/branding"
    },
    {
      icon: <Star className="text-2xl" />,
      title: "Influencer Marketing",
      description: "Connect with your target audience through authentic influencer partnerships and collaborations.",
      url: "/services/influencer-marketing"
    },
    {
      icon: <BarChart className="text-2xl" />,
      title: "Analytics & Reporting",
      description: "Track performance and gain valuable insights with comprehensive analytics and detailed reports.",
      url: "/services/analytics"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-12 md:py-20 bg-white relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-8 md:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold gradient-text mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={service.title} href={service.url}>
              <Card className={`service-card group border-2 border-transparent hover:border-[hsl(218,65%,32%)] cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                
                <CardContent className="p-6 relative z-10">
                  <div className="w-16 h-16 bg-[hsl(218,65%,32%)]/10 rounded-lg flex items-center justify-center mb-6 text-[hsl(218,65%,32%)] group-hover:bg-[hsl(218,65%,32%)]/20 transition-all duration-300 group-hover:scale-110 relative">
                    {/* Floating icon with enhanced animation */}
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-[hsl(218,65%,32%)]/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-150" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[hsl(218,65%,32%)] mb-4 group-hover:text-[hsl(218,65%,25%)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
