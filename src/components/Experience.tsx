
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
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-10 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full">
              <Trophy className="h-8 w-8 text-cyan-600" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building valuable experience through remote work and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg">
                    <Briefcase className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Front-end Developer</h3>
                    <p className="text-gray-600">Remote Position</p>
                    <p className="text-sm text-gray-500">6 Months Experience</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-gray-700">
                    • Developed responsive web applications using React and TypeScript
                  </p>
                  <p className="text-gray-700">
                    • Implemented state management solutions with Redux Toolkit
                  </p>
                  <p className="text-gray-700">
                    • Created modern UI components with Tailwind CSS
                  </p>
                  <p className="text-gray-700">
                    • Collaborated effectively in remote team environments
                  </p>
                  <p className="text-gray-700">
                    • Maintained clean, well-documented, and scalable code
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-cyan-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600">
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
