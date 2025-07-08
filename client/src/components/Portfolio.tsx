import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Revolution",
      description: "Increased online sales by 250% through comprehensive digital marketing strategy.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      roi: "+250%",
      duration: "6 months"
    },
    {
      title: "Restaurant Chain Success",
      description: "Boosted brand awareness and foot traffic through social media campaigns.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      roi: "+180%",
      duration: "4 months"
    },
    {
      title: "Tech Startup Launch",
      description: "Complete brand identity and digital presence for a successful product launch.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      roi: "+320%",
      duration: "3 months"
    }
  ];

  return (
    <section id="portfolio" className="py-20 digital-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our success stories and see how we've helped businesses achieve remarkable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-xl transition-shadow">
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
      </div>
    </section>
  );
}
