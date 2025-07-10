import { Button } from "@/components/ui/button";
import { ChartBar, Users, Megaphone, Monitor, Share2, Search } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
      
      particlesRef.current.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 6000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(218,65%,32%)] via-[hsl(213,84%,55%)] to-[hsl(218,65%,32%)] hexagon-pattern overflow-hidden"
    >
      {/* Animated Particles */}
      <div ref={particlesRef} className="particles" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element top-1/5 left-1/10" style={{ animationDelay: '0s' }} />
        <div className="floating-element top-3/5 left-4/5" style={{ animationDelay: '2s' }} />
        <div className="floating-element top-2/5 right-1/10" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 hero-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Grow Your Business with{" "}
              <span className="text-[hsl(213,90%,69%)]">Digital Mashwarah</span>
            </h1>
            <p className="text-xl mb-8 text-white">
              Transform your digital presence with our comprehensive marketing solutions. 
              We help businesses achieve remarkable growth through innovative strategies 
              and cutting-edge technology.
            </p>
            <Button className="digital-accent px-8 py-4 rounded-full text-lg font-semibold mb-8">
              Get Free Consultation
            </Button>
            

          </div>
          
          <div className="relative animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Service Icons Section */}
              <div className="flex justify-between mb-8">
                <div className="flex flex-col items-center text-center group cursor-pointer service-item-1">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-white/30 group-hover:shadow-lg group-hover:shadow-white/20">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-sm leading-tight mb-1">Web Design & Development</h3>
                  <p className="text-[#e0e0e0] text-sm leading-tight">Modern, responsive websites that convert.</p>
                </div>
                
                <div className="flex flex-col items-center text-center group cursor-pointer service-item-2">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-white/30 group-hover:shadow-lg group-hover:shadow-white/20">
                    <Share2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-sm leading-tight mb-1">Social Media Marketing</h3>
                  <p className="text-[#e0e0e0] text-sm leading-tight">Engage your audience with impactful content.</p>
                </div>
                
                <div className="flex flex-col items-center text-center group cursor-pointer service-item-3">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-white/30 group-hover:shadow-lg group-hover:shadow-white/20">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-sm leading-tight mb-1">SEO & SEM</h3>
                  <p className="text-[#e0e0e0] text-sm leading-tight">Boost your rankings and visibility.</p>
                </div>
              </div>
              
              {/* Dashboard Mockup */}
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
            
            {/* Trusted By Section */}
            <div className="mt-8 text-center">
              <p className="text-white/60 text-sm mb-4">Trusted by leading brands</p>
              <div className="flex items-center justify-center space-x-8 opacity-70">
                <div className="text-white/80 text-lg font-semibold hover:text-white transition-all duration-300 cursor-pointer grayscale hover:grayscale-0">Google</div>
                <div className="text-white/80 text-lg font-semibold hover:text-white transition-all duration-300 cursor-pointer grayscale hover:grayscale-0">Meta</div>
                <div className="text-white/80 text-lg font-semibold hover:text-white transition-all duration-300 cursor-pointer grayscale hover:grayscale-0">LinkedIn</div>
                <div className="text-white/80 text-lg font-semibold hover:text-white transition-all duration-300 cursor-pointer grayscale hover:grayscale-0">Instagram</div>
                <div className="text-white/80 text-lg font-semibold hover:text-white transition-all duration-300 cursor-pointer grayscale hover:grayscale-0">Twitter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
