
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Palette, Globe, Zap, Layers } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "React", level: 90, color: "bg-cyan-500", icon: Code },
    { name: "JavaScript", level: 85, color: "bg-blue-500", icon: Code },
    { name: "TypeScript", level: 80, color: "bg-cyan-600", icon: Code },
    { name: "Redux Toolkit", level: 75, color: "bg-blue-600", icon: Layers },
    { name: "Tailwind CSS", level: 85, color: "bg-cyan-400", icon: Palette },
    { name: "CSS", level: 90, color: "bg-blue-400", icon: Palette },
    { name: "HTML", level: 95, color: "bg-cyan-300", icon: Globe },
    { name: "Java", level: 70, color: "bg-blue-700", icon: Database },
    { name: "Spring Boot", level: 65, color: "bg-cyan-700", icon: Database },
  ];

  const categories = {
    "Frontend": ["React", "JavaScript", "TypeScript", "Redux Toolkit", "Tailwind CSS", "CSS", "HTML"],
    "Backend": ["Java", "Spring Boot"]
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-20 w-32 h-32 bg-cyan-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full">
              <Zap className="h-8 w-8 text-cyan-600" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(categories).map(([category, categorySkills]) => (
            <Card key={category} className="hover:shadow-xl transition-all duration-300 border-cyan-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
                  {category === "Frontend" ? <Code className="h-6 w-6 text-cyan-600" /> : <Database className="h-6 w-6 text-blue-600" />}
                  {category} Technologies
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter(skill => categorySkills.includes(skill.name))
                    .map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <skill.icon className="h-4 w-4 text-cyan-600" />
                          <span className="text-sm font-medium text-gray-700">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out shadow-sm`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <Globe className="h-5 w-5 text-cyan-600" />
            Always learning and exploring new technologies to stay current with industry trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
