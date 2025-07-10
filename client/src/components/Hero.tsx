import { Button } from "@/components/ui/button";
import { ChartBar, Users, Megaphone, Monitor, Share2, Search, FileText, Mail, Palette } from "lucide-react";
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
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 relative overflow-hidden">
              {/* Lottie Animation Corner - Hidden on small screens */}
              <div className="absolute top-4 right-4 w-12 h-12 opacity-30 hidden md:block">
                <div className="analytics-animation">
                  <div className="bar-chart">
                    <div className="bar bar-1"></div>
                    <div className="bar bar-2"></div>
                    <div className="bar bar-3"></div>
                    <div className="bar bar-4"></div>
                  </div>
                </div>
              </div>
              
              {/* Service Icons Section - 3x2 Grid */}
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {/* First Row */}
                <div className="flex flex-col items-center text-center group cursor-pointer service-item-1 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:bg-white/30 group-hover:shadow-lg group-hover:shadow-white/20">
                    <Monitor className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xs md:text-sm leading-tight mb-1">Web Design & Development</h3>
                  <p className="text-[#e0e0e0] text-xs md:text-sm leading-tight">Modern, responsive websites that convert.</p>
                </div>
                
                <div className="flex flex-col items-center text-center group cursor-pointer service-item-2 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:bg-white/30 group-hover:shadow-lg group-hover:shadow-white/20">
                    <Share2 className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xs md:text-sm leading-tight mb-1">Social Media Marketing</h3>
                  <p className="text-[#e0e0e0] text-xs md:text-sm leading-tight">Engage your audience with impactful content.</p>
                </div>
                
                <div className="flex flex-col items-center text-center group cursor-pointer service-item-3 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:bg-white/30 group-hover:shadow-lg group-hover:shadow-white/20">
                    <Palette className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xs md:text-sm leading-tight mb-1">Branding & Logo Design</h3>
                  <p className="text-[#e0e0e0] text-xs md:text-sm leading-tight">Memorable brand identity that stands out.</p>
                </div>
                
                {/* Second Row */}
                <div className="flex flex-col items-center text-center group cursor-pointer service-item-4 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:bg-white/30 group-hover:shadow-lg group-hover:shadow-white/20">
                    <FileText className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xs md:text-sm leading-tight mb-1">Content Writing</h3>
                  <p className="text-[#e0e0e0] text-xs md:text-sm leading-tight">Compelling copy that drives action.</p>
                </div>
                
                <div className="flex flex-col items-center text-center group cursor-pointer service-item-5 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:bg-white/30 group-hover:shadow-lg group-hover:shadow-white/20">
                    <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xs md:text-sm leading-tight mb-1">Email Marketing</h3>
                  <p className="text-[#e0e0e0] text-xs md:text-sm leading-tight">Targeted campaigns that boost sales.</p>
                </div>
                
                <div className="flex flex-col items-center text-center group cursor-pointer service-item-6 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:bg-white/30 group-hover:shadow-lg group-hover:shadow-white/20">
                    <Search className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xs md:text-sm leading-tight mb-1">SEO & SEM</h3>
                  <p className="text-[#e0e0e0] text-xs md:text-sm leading-tight">Boost your rankings and visibility.</p>
                </div>
              </div>
            </div>
            
            {/* Trusted By Section */}
            <div className="mt-8 text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border-t border-white/10">
              <p className="text-white/60 text-sm mb-4">Trusted by leading brands</p>
              <div className="flex items-center justify-center flex-wrap gap-6 opacity-70">
                <div className="text-white/80 text-lg font-semibold hover:scale-105 hover:opacity-80 transition-all duration-300 cursor-pointer">Google</div>
                <div className="text-white/80 text-lg font-semibold hover:scale-105 hover:opacity-80 transition-all duration-300 cursor-pointer">Meta</div>
                <div className="text-white/80 text-lg font-semibold hover:scale-105 hover:opacity-80 transition-all duration-300 cursor-pointer">LinkedIn</div>
                <div className="text-white/80 text-lg font-semibold hover:scale-105 hover:opacity-80 transition-all duration-300 cursor-pointer">Instagram</div>
                <div className="text-white/80 text-lg font-semibold hover:scale-105 hover:opacity-80 transition-all duration-300 cursor-pointer">Twitter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
