
import { Briefcase, Code, Users, Clock, Trophy, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const stats = [
    { number: "6+", label: "Months Experience", icon: Clock },
    { number: "10+", label: "Projects Completed", icon: Trophy },
    { number: "5+", label: "Technologies", icon: Code },
    { number: "100%", label: "Client Satisfaction", icon: TrendingUp },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Modern Development",
      description: "Built responsive web applications using React, TypeScript, and modern CSS frameworks with industry best practices."
    },
    {
      icon: Users,
      title: "Remote Collaboration", 
      description: "Successfully collaborated with distributed teams across different time zones and cultural backgrounds."
    },
    {
      icon: Clock,
      title: "Project Delivery",
      description: "Consistently delivered high-quality code within project deadlines while maintaining code quality standards."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen bg-slate-800">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30 animate-scale-in">
              <Trophy className="h-8 w-8 text-yellow-400" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
            Experience & <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in delay-200">
            Rapid solutions to the most complex development challenges with cooperative process-driven approach.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center p-6 bg-slate-900/60 border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-500 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg">
                    <stat.icon className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in delay-300">
            <Card className="p-8 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-500 border-yellow-500/30 bg-slate-900/60 backdrop-blur-sm transform hover:scale-105">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg">
                    <Briefcase className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Front-end Developer</h3>
                    <p className="text-yellow-400 font-medium">Remote Position</p>
                    <p className="text-sm text-gray-400">6 Months Experience</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Developed responsive web applications using React and TypeScript</p>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Implemented state management solutions with Redux Toolkit</p>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Created modern UI components with Tailwind CSS</p>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Collaborated effectively in remote team environments</p>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Maintained clean, well-documented, and scalable code</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in delay-500">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-500 border-yellow-500/30 bg-slate-900/60 backdrop-blur-sm transform hover:scale-105"
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg flex-shrink-0">
                      <highlight.icon className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
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
