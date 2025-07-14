import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoPath from "@assets/Digitalmashwarah logo_1751971220696.jpg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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
    { href: "#services", label: "Services", hasDropdown: true },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const serviceItems = [
    { href: "/services/social-media-marketing", label: "Social Media Marketing" },
    { href: "/services/seo", label: "SEO & Search Marketing" },
    { href: "/services/google-ads", label: "Google Ads & PPC" },
    { href: "/services/web-design", label: "Web Design & Development" },
    { href: "/services/content-marketing", label: "Content Marketing" },
    { href: "/services/email-marketing", label: "Email Marketing" },
    { href: "/services/video-production", label: "Video Production" },
    { href: "/services/branding", label: "Branding & Design" },
    { href: "/services/influencer-marketing", label: "Influencer Marketing" },
    { href: "/services/analytics", label: "Analytics & Reporting" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/')) {
      // Navigate to page
      window.location.href = href;
    } else {
      // Check if we're on home page or need to navigate to home first
      if (window.location.pathname === '/') {
        // We're on home page, scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home page with hash
        window.location.href = '/' + href;
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
              <div key={item.href} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`flex items-center space-x-1 ${
                        isScrolled ? 'text-gray-700 hover:text-[hsl(218,65%,32%)]' : 'text-white hover:text-[hsl(213,90%,69%)]'
                      } transition-colors`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {/* Services Dropdown */}
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-50">
                        <div className="py-2">
                          {serviceItems.map((service) => (
                            <a
                              key={service.href}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[hsl(218,65%,32%)] transition-colors"
                            >
                              {service.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`${
                      isScrolled ? 'text-gray-700 hover:text-[hsl(218,65%,32%)]' : 'text-white hover:text-[hsl(213,90%,69%)]'
                    } transition-colors`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <a 
              href="https://wa.me/923104090921" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="digital-primary rounded-full px-6 py-2">
                Get Free Consultation
              </Button>
            </a>
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
              <div key={item.href}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="flex items-center justify-between w-full text-left py-2 text-gray-700 hover:text-[hsl(218,65%,32%)]"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mobile Services Dropdown */}
                    {isMobileServicesOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {serviceItems.map((service) => (
                          <a
                            key={service.href}
                            href={service.href}
                            className="block py-2 text-sm text-gray-600 hover:text-[hsl(218,65%,32%)] transition-colors"
                          >
                            {service.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left py-2 text-gray-700 hover:text-[hsl(218,65%,32%)]"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <a 
              href="https://wa.me/923104090921" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full digital-primary rounded-full py-2 mt-4">
                Get Free Consultation
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
