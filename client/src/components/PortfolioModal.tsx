import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    roi: string;
    duration: string;
    client: string;
    challenge: string;
    solution: string;
    tools: string[];
    result: string;
  };
}

export default function PortfolioModal({ isOpen, onClose, project }: PortfolioModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <Card className="max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <CardContent className="p-0">
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/80 hover:bg-white"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-[hsl(218,65%,32%)] mb-2">{project.title}</h2>
              <p className="text-gray-600 text-lg">{project.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[hsl(218,65%,32%)] mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-medium text-gray-700">Client:</span>
                    <span className="ml-2 text-gray-600">{project.client}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Duration:</span>
                    <span className="ml-2 text-gray-600">{project.duration}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">ROI:</span>
                    <span className="ml-2 text-green-600 font-semibold">{project.roi}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[hsl(218,65%,32%)] mb-4">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="bg-[hsl(218,65%,32%)]/10 text-[hsl(218,65%,32%)] px-3 py-1 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[hsl(218,65%,32%)] mb-4">Challenge</h3>
                <p className="text-gray-600">{project.challenge}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[hsl(218,65%,32%)] mb-4">Solution</h3>
                <p className="text-gray-600">{project.solution}</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[hsl(218,65%,32%)] mb-4">Result</h3>
              <p className="text-gray-600">{project.result}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}