import { Button } from "@/components/ui/button";
import { ChartBar, Users, Megaphone } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(218,65%,32%)] to-[hsl(213,84%,55%)] hexagon-pattern"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element top-1/5 left-1/10" style={{ animationDelay: '0s' }} />
        <div className="floating-element top-3/5 left-4/5" style={{ animationDelay: '2s' }} />
        <div className="floating-element top-2/5 right-1/10" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Grow Your Business with{" "}
              <span className="text-[hsl(213,90%,69%)]">Digital Mashwarah</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Transform your digital presence with our comprehensive marketing solutions. 
              We help businesses achieve remarkable growth through innovative strategies 
              and cutting-edge technology.
            </p>
            <Button className="digital-accent px-8 py-4 rounded-full text-lg font-semibold">
              Get Free Consultation
            </Button>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-24 bg-[hsl(213,90%,69%)] rounded"></div>
                  <div className="h-4 w-16 bg-blue-300 rounded"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[hsl(213,90%,69%)] rounded-lg flex items-center justify-center">
                      <ChartBar className="text-[hsl(218,65%,32%)]" />
                    </div>
                    <div>
                      <div className="h-3 w-20 bg-blue-300 rounded mb-2"></div>
                      <div className="h-2 w-16 bg-blue-200 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center">
                      <Users className="text-[hsl(218,65%,32%)]" />
                    </div>
                    <div>
                      <div className="h-3 w-24 bg-[hsl(213,90%,69%)] rounded mb-2"></div>
                      <div className="h-2 w-20 bg-blue-200 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                      <Megaphone className="text-[hsl(218,65%,32%)]" />
                    </div>
                    <div>
                      <div className="h-3 w-28 bg-blue-300 rounded mb-2"></div>
                      <div className="h-2 w-24 bg-blue-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
