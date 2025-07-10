import { Card, CardContent } from "@/components/ui/card";
import yasirAslamImage from "@assets/Screenshot_20250710_162439_Gallery_1752146873606.jpg";
import aftabHussainImage from "@assets/ChatGPT Image Jul 10, 2025, 04_49_45 PM_1752148197976.png";
import digitalMashwarahLogo from "@assets/Digitalmashwarah logo_1752147771011.jpg";

export default function About() {
  const teamMembers = [
    {
      name: "Yasir Aslam",
      role: "CEO",
      image: yasirAslamImage,
      bio: "Visionary leader driving Digital Mashwarah's strategic growth and business development.",
      specialty: "Strategic Leadership & Business Development"
    },
    {
      name: "Aftab Hussain",
      role: "Creative Director",
      image: aftabHussainImage,
      bio: "Creative visionary specializing in brand identity and visual storytelling.",
      specialty: "Brand Design & Visual Identity"
    },
    {
      name: "Emily Rodriguez",
      role: "Data Analyst",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Analytics expert focused on performance optimization and ROI maximization.",
      specialty: "Data Analytics & Performance Optimization"
    }
  ];

  return (
    <section id="about" className="py-20 digital-light-bg team-spacing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">About Digital Mashwarah</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading digital marketing agency committed to helping businesses 
            achieve their online goals through innovative strategies and cutting-edge technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={digitalMashwarahLogo} 
              alt="Digital Mashwarah Logo" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[hsl(218,65%,32%)] mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To empower businesses with comprehensive digital marketing solutions that drive growth, 
              increase brand visibility, and maximize ROI through innovative strategies and data-driven approaches.
            </p>
            <h3 className="text-2xl font-semibold text-[hsl(218,65%,32%)] mb-6">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted digital marketing partner for businesses worldwide, 
              setting new standards in creativity, performance, and client satisfaction.
            </p>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[hsl(218,65%,32%)] mb-4">Our Expert Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our talented professionals who bring years of experience and passion to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center team-card relative overflow-hidden group">
              <CardContent className="p-6 relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover object-center ring-4 ring-blue-100"
                  style={{ 
                    imageRendering: member.name === 'Aftab Hussain' ? 'pixelated' : 'crisp-edges',
                    filter: member.name === 'Aftab Hussain' ? 'contrast(1.2) brightness(1.1) saturate(1.1)' : 'none'
                  }}
                />
                <h4 className="text-xl font-semibold text-[hsl(218,65%,32%)] mb-2">{member.name}</h4>
                <p className="text-gray-500 mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[hsl(218,65%,32%)]/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center px-4">
                    <div className="text-lg font-semibold mb-2">Specialty</div>
                    <div className="text-sm">{member.specialty}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
