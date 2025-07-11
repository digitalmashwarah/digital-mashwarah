import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const handleBack = () => {
    // Use browser's back functionality
    window.history.back();
  };

  return (
    <div className="mb-8">
      <Button 
        variant="ghost" 
        className="text-white hover:text-white hover:bg-white/10 flex items-center gap-2"
        onClick={handleBack}
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>
    </div>
  );
}