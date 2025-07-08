import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import logoPath from "@assets/Digitalmashwarah logo_1751971220696.jpg";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src={logoPath} 
              alt="Digital Mashwarah" 
              className="h-10 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 mb-4">
              Empowering businesses with innovative digital marketing solutions.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-[hsl(213,90%,69%)]">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-[hsl(213,90%,69%)]">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-[hsl(213,90%,69%)]">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-[hsl(213,90%,69%)]">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-[hsl(213,90%,69%)] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[hsl(213,90%,69%)] transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[hsl(213,90%,69%)] transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-[hsl(213,90%,69%)] transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[hsl(213,90%,69%)] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[hsl(213,90%,69%)] transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(213,90%,69%)] transition-colors">SEO</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(213,90%,69%)] transition-colors">Google Ads</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(213,90%,69%)] transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(213,90%,69%)] transition-colors">Content Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and insights.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-800 border-gray-700 text-white"
              />
              <Button type="submit" className="digital-accent ml-2">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © 2025 Digital Mashwarah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
