import { Card, CardContent } from "@/components/ui/card";
import { Home, ShoppingBag, Heart, GraduationCap, UtensilsCrossed } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: <Home className="text-3xl" />,
      title: "Real Estate",
      description: "Property marketing and lead generation solutions"
    },
    {
      icon: <ShoppingBag className="text-3xl" />,
      title: "E-Commerce",
      description: "Online store optimization and sales growth"
    },
    {
      icon: <Heart className="text-3xl" />,
      title: "Healthcare",
      description: "Medical practice marketing and patient acquisition"
    },
    {
      icon: <GraduationCap className="text-3xl" />,
      title: "Education",
      description: "Student enrollment and educational institution branding"
    },
    {
      icon: <UtensilsCrossed className="text-3xl" />,
      title: "Food & Restaurants",
      description: "Restaurant marketing and food delivery optimization"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in delivering tailored digital marketing solutions across diverse industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry) => (
            <Card key={industry.title} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[hsl(218,65%,32%)]/10 rounded-lg flex items-center justify-center mb-4 mx-auto text-[hsl(218,65%,32%)]">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-[hsl(218,65%,32%)] mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}