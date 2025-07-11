import { Button } from "@/components/ui/button";
import { MessageCircle, FileText } from "lucide-react";

export default function FloatingButtons() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923104090921", "_blank");
  };

  const handleProposalClick = () => {
    // Handle proposal request
    console.log("Request proposal clicked");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <Button
        onClick={handleProposalClick}
        className="digital-primary shadow-lg hover:shadow-xl transition-shadow hidden md:flex"
      >
        <FileText className="h-4 w-4 mr-2" />
        Request Proposal
      </Button>
      
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg hover:shadow-xl transition-shadow p-0"
      >
        <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
      </Button>
    </div>
  );
}
