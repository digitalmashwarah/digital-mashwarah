import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/Digitalmashwarah logo_1751971220696.jpg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/')) {
      // Navigate to page
      window.location.href = href;
    } else {
      // Scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'sticky-nav' : 'bg-white/10 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={() => handleNavClick("#home")}
              className="block"
            >
              <h1 className={`text-2xl font-black transition-all duration-300 cursor-pointer max-h-[50px] leading-tight ${
                isScrolled 
                  ? 'text-[hsl(218,75%,25%)] hover:text-[hsl(213,84%,55%)]' 
                  : 'text-white hover:text-gray-200'
              }`}>
                Digital Mashwarah
              </h1>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`${
                  isScrolled ? 'text-gray-700 hover:text-[hsl(218,65%,32%)]' : 'text-white hover:text-[hsl(213,90%,69%)]'
                } transition-colors`}
              >
                {item.label}
              </button>
            ))}
            <Button className="digital-primary rounded-full px-6 py-2">
              Get Free Consultation
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? 'text-gray-700' : 'text-white'}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-2 text-gray-700 hover:text-[hsl(218,65%,32%)]"
              >
                {item.label}
              </button>
            ))}
            <Button className="w-full digital-primary rounded-full py-2 mt-4">
              Get Free Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
