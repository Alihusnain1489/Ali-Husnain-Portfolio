
import { Briefcase, Code, Users, Clock, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const highlights = [
    {
      icon: Code,
      title: "Modern Development",
      description: "Built responsive web applications using React, TypeScript, and modern CSS frameworks"
    },
    {
      icon: Users,
      title: "Remote Collaboration", 
      description: "Successfully collaborated with distributed teams across different time zones"
    },
    {
      icon: Clock,
      title: "Project Delivery",
      description: "Consistently delivered high-quality code within project deadlines"
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: "url('/lovable-uploads/eeee430f-ed7f-4af6-9613-846053800aee.png')"
        }}
      ></div>
      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              <Trophy className="h-8 w-8 text-cyan-400" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experience & Achievements
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Building valuable experience through remote work and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border-cyan-500/30 bg-black/60 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                    <Briefcase className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Front-end Developer</h3>
                    <p className="text-gray-300">Remote Position</p>
                    <p className="text-sm text-gray-400">6 Months Experience</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-gray-300">
                    • Developed responsive web applications using React and TypeScript
                  </p>
                  <p className="text-gray-300">
                    • Implemented state management solutions with Redux Toolkit
                  </p>
                  <p className="text-gray-300">
                    • Created modern UI components with Tailwind CSS
                  </p>
                  <p className="text-gray-300">
                    • Collaborated effectively in remote team environments
                  </p>
                  <p className="text-gray-300">
                    • Maintained clean, well-documented, and scalable code
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border-cyan-500/30 bg-black/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
