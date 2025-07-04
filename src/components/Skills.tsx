import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Palette,
  Globe,
  Zap,
  Layers,
  Star,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "React",
      level: 80,
      color: "bg-cyan-500",
      icon: Code,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
      experience: "6+ months",
      description: "Building modern web applications with React",
    },
    {
      name: "JavaScript",
      level: 80,
      color: "bg-yellow-500",
      icon: Code,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Frontend",
      experience: "8+ months",
      description: "Dynamic and interactive web development",
    },
    {
      name: "TypeScript",
      level: 70,
      color: "bg-blue-600",
      icon: Code,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "Frontend",
      experience: "5+ months",
      description: "Type-safe JavaScript development",
    },
    {
      name: "Redux Toolkit",
      level: 75,
      color: "bg-purple-600",
      icon: Layers,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      category: "Frontend",
      experience: "4+ months",
      description: "State management for React applications",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      color: "bg-cyan-400",
      icon: Palette,
      image:
        "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg",
      category: "Frontend",
      experience: "6+ months",
      description: "Utility-first CSS framework",
    },
    {
      name: "CSS",
      level: 90,
      color: "bg-blue-500",
      icon: Palette,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "Frontend",
      experience: "1+ year",
      description: "Styling and responsive design",
    },
    {
      name: "HTML",
      level: 95,
      color: "bg-orange-500",
      icon: Globe,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "Frontend",
      experience: "1+ year",
      description: "Semantic markup and accessibility",
    },
    {
      name: "Java",
      level: 70,
      color: "bg-red-600",
      icon: Database,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      category: "Backend",
      experience: "6+ months",
      description: "Object-oriented programming",
    },
    {
      name: "Spring Boot",
      level: 65,
      color: "bg-green-600",
      icon: Database,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      category: "Backend",
      experience: "4+ months",
      description: "Enterprise Java applications",
    },
  ];

  const categories = {
    Frontend: skills.filter((skill) => skill.category === "Frontend"),
    Backend: skills.filter((skill) => skill.category === "Backend"),
  };

  const getStars = (level: number) => {
    const stars = Math.floor(level / 20);
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < stars ? "text-yellow-400 fill-current" : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage:
            "url('/lovable-uploads/cf6a0912-aa6b-49a7-9aaa-3ec73ca99ac7.png')",
        }}
      ></div>
      <div className="absolute inset-0 bg-slate-900"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full border border-emerald-500/30">
              <Zap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {Object.entries(categories).map(([categoryName, categorySkills]) => (
            <Card
              key={categoryName}
              className="hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border-cyan-500/30 bg-slate-800/60 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-8 text-center flex items-center justify-center gap-2">
                  {categoryName === "Frontend" ? (
                    <Code className="h-6 w-6 text-cyan-400" />
                  ) : (
                    <Database className="h-6 w-6 text-blue-400" />
                  )}
                  {categoryName} Technologies
                </h3>
                <div className="grid gap-6">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="group">
                      <Card className="border-gray-700/50 bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            {/* Skill Icon */}
                            <div className="w-16 h-16 bg-white rounded-xl p-3 flex items-center justify-center flex-shrink-0 shadow-lg">
                              <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-10 h-10"
                              />
                            </div>

                            {/* Skill Details */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-xl font-semibold text-white">
                                  {skill.name}
                                </h4>
                                <span className="text-sm text-cyan-400 font-bold bg-cyan-500/20 px-2 py-1 rounded">
                                  {skill.level}%
                                </span>
                              </div>

                              {/* Star Rating */}
                              <div className="flex items-center gap-1 mb-2">
                                {getStars(skill.level)}
                                <span className="text-xs text-gray-400 ml-2">
                                  {skill.experience}
                                </span>
                              </div>

                              {/* Description */}
                              <p className="text-gray-300 text-sm mb-3">
                                {skill.description}
                              </p>

                              {/* Progress Bar */}
                              <div className="w-full bg-slate-800/60 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                                  style={{ width: `${skill.level}%` }}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Overview */}
        <Card className="border-cyan-500/30 bg-slate-800/60 backdrop-blur-sm">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Technical Proficiency Overview
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Frontend Development
                </h4>
                <p className="text-gray-300 text-sm">
                  Building responsive and interactive user interfaces with
                  modern React and TypeScript
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Backend Development
                </h4>
                <p className="text-gray-300 text-sm">
                  Creating robust server-side applications with Java and Spring
                  Boot
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Full Stack
                </h4>
                <p className="text-gray-300 text-sm">
                  End-to-end web development from database design to user
                  interface
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-gray-300 flex items-center justify-center gap-2">
            <Globe className="h-5 w-5 text-cyan-400" />
            Always learning and exploring new technologies to stay current with
            industry trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
