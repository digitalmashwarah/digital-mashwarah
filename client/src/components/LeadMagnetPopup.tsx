import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { X, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function LeadMagnetPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const leadMagnetMutation = useMutation({
    mutationFn: (data: { email: string }) => 
      apiRequest('/api/lead-magnet', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    onSuccess: () => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to process request. Please try again.",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    // Check if popup was already closed in this session
    if (localStorage.getItem("popupClosed")) {
      return;
    }

    const timer = setTimeout(() => {
      if (!localStorage.getItem("popupClosed")) {
        setIsVisible(true);
      }
    }, 10000); // Show after 10 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      leadMagnetMutation.mutate({ email });
    }
  };

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem("popupClosed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay animate-in fade-in duration-300" onClick={closePopup}>
      <Card className="max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <CardContent className="p-0">
          <div className="relative bg-gradient-to-r from-[hsl(218,65%,32%)] to-[hsl(213,84%,55%)] p-8 text-white text-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closePopup}
            >
              <X className="h-4 w-4" />
            </Button>
            
            <Download className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Free Guide</h2>
            <h3 className="text-lg mb-4">Top 10 Digital Marketing Strategies for 2025</h3>
            <p className="text-sm opacity-90">Enter your email to get instant access</p>
          </div>
          
          <div className="p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
                <Button 
                  type="submit" 
                  className="w-full digital-primary"
                  disabled={leadMagnetMutation.isPending}
                >
                  <Download className="h-4 w-4 mr-2" />
                  {leadMagnetMutation.isPending ? "Processing..." : "Download Now"}
                </Button>
              </form>
            ) : (
              <div className="text-center">
                <div className="text-green-600 font-semibold mb-2">Thank you!</div>
                <p className="text-gray-600">Check your email for the download link.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}