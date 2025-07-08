import { Button } from "@/components/ui/button";
import { MessageCircle, FileText } from "lucide-react";

export default function FloatingButtons() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  const handleProposalClick = () => {
    // Handle proposal request
    console.log("Request proposal clicked");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <Button
        onClick={handleProposalClick}
        className="digital-primary shadow-lg hover:shadow-xl transition-shadow"
      >
        <FileText className="h-4 w-4 mr-2" />
        Request Proposal
      </Button>
      
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-shadow p-0"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}
