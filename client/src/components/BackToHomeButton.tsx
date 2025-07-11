import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function BackToHomeButton() {
  return (
    <div className="mb-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}