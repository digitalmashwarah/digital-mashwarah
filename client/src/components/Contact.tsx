import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest('/api/contacts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    },
    onError: (error) => {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to grow your business? Contact us today for a free consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="mt-2"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full digital-primary"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[hsl(218,65%,32%)]/10 rounded-lg flex items-center justify-center mr-4">
                <MapPin className="text-[hsl(218,65%,32%)]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[hsl(218,65%,32%)] mb-2">Office Address</h3>
                <p className="text-gray-600">
                  123 Business Street<br />
                  Marketing District, City 12345
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[hsl(218,65%,32%)]/10 rounded-lg flex items-center justify-center mr-4">
                <Phone className="text-[hsl(218,65%,32%)]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[hsl(218,65%,32%)] mb-2">Phone</h3>
                <a 
                  href="tel:+923104090921" 
                  className="text-gray-600 hover:text-[hsl(218,65%,32%)] transition-colors"
                >
                  +92 310 4090921
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[hsl(218,65%,32%)]/10 rounded-lg flex items-center justify-center mr-4">
                <Mail className="text-[hsl(218,65%,32%)]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[hsl(218,65%,32%)] mb-2">Email</h3>
                <a 
                  href="mailto:digitalmashwarah@gmail.com" 
                  className="text-gray-600 hover:text-[hsl(218,65%,32%)] transition-colors"
                >
                  digitalmashwarah@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button size="icon" className="digital-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" className="digital-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" className="digital-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="icon" className="digital-primary">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
