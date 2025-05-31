
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Palette, Globe, Zap, Layers } from "lucide-react";

const Skills = () => {
  const skills = [
    { 
      name: "React", 
      level: 90, 
      color: "bg-cyan-500", 
      icon: Code,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    { 
      name: "JavaScript", 
      level: 85, 
      color: "bg-blue-500", 
      icon: Code,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    { 
      name: "TypeScript", 
      level: 80, 
      color: "bg-cyan-600", 
      icon: Code,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    { 
      name: "Redux Toolkit", 
      level: 75, 
      color: "bg-blue-600", 
      icon: Layers,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
    },
    { 
      name: "Tailwind CSS", 
      level: 85, 
      color: "bg-cyan-400", 
      icon: Palette,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
    },
    { 
      name: "CSS", 
      level: 90, 
      color: "bg-blue-400", 
      icon: Palette,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    { 
      name: "HTML", 
      level: 95, 
      color: "bg-cyan-300", 
      icon: Globe,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    { 
      name: "Java", 
      level: 70, 
      color: "bg-blue-700", 
      icon: Database,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    { 
      name: "Spring Boot", 
      level: 65, 
      color: "bg-cyan-700", 
      icon: Database,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
    },
  ];

  const categories = {
    "Frontend": ["React", "JavaScript", "TypeScript", "Redux Toolkit", "Tailwind CSS", "CSS", "HTML"],
    "Backend": ["Java", "Spring Boot"]
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/lovable-uploads/cf6a0912-aa6b-49a7-9aaa-3ec73ca99ac7.png')"
        }}
      ></div>
      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              <Zap className="h-8 w-8 text-cyan-400" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {Object.entries(categories).map(([category, categorySkills]) => (
            <Card key={category} className="hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border-cyan-500/30 bg-black/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center flex items-center justify-center gap-2">
                  {category === "Frontend" ? <Code className="h-6 w-6 text-cyan-400" /> : <Database className="h-6 w-6 text-blue-400" />}
                  {category} Technologies
                </h3>
                <div className="space-y-6">
                  {skills
                    .filter(skill => categorySkills.includes(skill.name))
                    .map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center">
                          <img 
                            src={skill.image} 
                            alt={skill.name}
                            className="w-8 h-8"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-lg font-medium text-white">
                              {skill.name}
                            </span>
                            <span className="text-sm text-cyan-400 font-bold">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-3">
                            <div
                              className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out shadow-sm relative overflow-hidden`}
                              style={{ width: `${skill.level}%` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-300 flex items-center justify-center gap-2">
            <Globe className="h-5 w-5 text-cyan-400" />
            Always learning and exploring new technologies to stay current with industry trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
