import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import PortfolioModal from "./PortfolioModal";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "E-commerce Revolution",
      description: "Increased online sales by 250% through comprehensive digital marketing strategy.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      roi: "+250%",
      duration: "6 months",
      client: "Javed Express",
      challenge: "Low conversion rates and poor online visibility despite having quality products.",
      solution: "Implemented comprehensive SEO strategy, redesigned user experience, and launched targeted social media campaigns.",
      tools: ["Google Ads", "Facebook Ads", "SEO Tools", "Analytics", "Email Marketing"],
      result: "Achieved 250% increase in sales, 180% boost in organic traffic, and improved customer retention by 40%."
    },
    {
      title: "Restaurant Chain Success",
      description: "Boosted brand awareness and foot traffic through social media campaigns.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      roi: "+180%",
      duration: "4 months",
      client: "Flavor Town Restaurants",
      challenge: "Declining foot traffic and limited online presence in competitive food market.",
      solution: "Created engaging social media content, implemented location-based advertising, and launched influencer partnerships.",
      tools: ["Instagram Marketing", "Google My Business", "Influencer Platform", "Content Creation"],
      result: "Increased foot traffic by 180%, grew social media following by 300%, and improved customer engagement significantly."
    },
    {
      title: "Tech Startup Launch",
      description: "Complete brand identity and digital presence for a successful product launch.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      roi: "+320%",
      duration: "3 months",
      client: "Digital University",
      challenge: "New startup with no brand recognition or digital presence entering competitive tech market.",
      solution: "Developed complete brand identity, built responsive website, and executed multi-channel launch campaign.",
      tools: ["Brand Design", "Web Development", "LinkedIn Ads", "Content Marketing", "PR"],
      result: "Successfully launched with 320% ROI, acquired 500+ leads in first month, and established strong market presence."
    }
  ];

  const clientLogos = [
    "TechShop", "Flavor Town", "InnovateTech", "GrowthCorp", "StartupHub", "DigitalPro"
  ];

  return (
    <section id="portfolio" className="py-12 md:py-20 digital-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our success stories and see how we've helped businesses achieve remarkable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[hsl(218,65%,32%)] mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>ROI: {project.roi}</span>
                  <span>Duration: {project.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[hsl(218,65%,32%)] mb-8">Trusted by Leading Brands</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="text-[hsl(218,65%,32%)] font-bold text-lg px-4 py-2 border border-[hsl(218,65%,32%)]/20 rounded-lg"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        <PortfolioModal 
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject || projects[0]}
        />
      </div>
    </section>
  );
}
