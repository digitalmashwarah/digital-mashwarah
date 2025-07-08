import { Card, CardContent } from "@/components/ui/card";
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
  const services = [
    {
      icon: <Facebook className="text-2xl" />,
      title: "Social Media Marketing",
      description: "Build your brand presence across all major social platforms with engaging content and targeted campaigns."
    },
    {
      icon: <Search className="text-2xl" />,
      title: "Search Engine Optimization",
      description: "Improve your website's visibility and rankings on search engines to drive organic traffic."
    },
    {
      icon: <Settings className="text-2xl" />,
      title: "Google Ads (PPC)",
      description: "Maximize your ROI with targeted pay-per-click advertising campaigns on Google and other platforms."
    },
    {
      icon: <Code className="text-2xl" />,
      title: "Web Design & Development",
      description: "Create stunning, responsive websites that convert visitors into customers."
    },
    {
      icon: <PenTool className="text-2xl" />,
      title: "Content Marketing",
      description: "Engage your audience with high-quality, valuable content that drives traffic and conversions."
    },
    {
      icon: <Mail className="text-2xl" />,
      title: "Email Marketing",
      description: "Build lasting relationships with your customers through personalized email campaigns."
    },
    {
      icon: <Video className="text-2xl" />,
      title: "Video Production",
      description: "Create compelling video content that tells your brand story and engages your audience."
    },
    {
      icon: <Palette className="text-2xl" />,
      title: "Branding & Graphic Design",
      description: "Develop a strong brand identity with professional design that stands out from the competition."
    },
    {
      icon: <Star className="text-2xl" />,
      title: "Influencer Marketing",
      description: "Connect with your target audience through authentic influencer partnerships and collaborations."
    },
    {
      icon: <BarChart className="text-2xl" />,
      title: "Analytics & Reporting",
      description: "Track performance and gain valuable insights with comprehensive analytics and detailed reports."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="service-card border-2 border-transparent hover:border-[hsl(218,65%,32%)]">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[hsl(218,65%,32%)]/10 rounded-lg flex items-center justify-center mb-6 text-[hsl(218,65%,32%)]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[hsl(218,65%,32%)] mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
