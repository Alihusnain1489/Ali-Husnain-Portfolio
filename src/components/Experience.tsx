
import { Briefcase, Code, Users, Clock } from "lucide-react";
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
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building valuable experience through remote work and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Briefcase className="h-6 w-6 text-blue-600" />
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
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-blue-600" />
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
