
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Palette,
  Globe,
  Zap,
  Layers,
  Star,
  Trophy,
  Target,
  Sparkles,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "React",
      level: 80,
      color: "from-cyan-500 to-blue-500",
      icon: Code,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
      experience: "6+ months",
      description: "Building modern web applications with React",
      projects: 8,
    },
    {
      name: "JavaScript",
      level: 80,
      color: "from-yellow-500 to-orange-500",
      icon: Code,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Frontend",
      experience: "8+ months",
      description: "Dynamic and interactive web development",
      projects: 12,
    },
    {
      name: "TypeScript",
      level: 70,
      color: "from-blue-600 to-indigo-600",
      icon: Code,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "Frontend",
      experience: "5+ months",
      description: "Type-safe JavaScript development",
      projects: 6,
    },
    {
      name: "Redux Toolkit",
      level: 75,
      color: "from-purple-600 to-violet-600",
      icon: Layers,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      category: "Frontend",
      experience: "4+ months",
      description: "State management for React applications",
      projects: 4,
    },
    {
      name: "Tailwind CSS",
      level: 85,
      color: "from-cyan-400 to-teal-400",
      icon: Palette,
      image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg",
      category: "Frontend",
      experience: "6+ months",
      description: "Utility-first CSS framework",
      projects: 10,
    },
    {
      name: "CSS",
      level: 90,
      color: "from-blue-500 to-cyan-500",
      icon: Palette,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "Frontend",
      experience: "1+ year",
      description: "Styling and responsive design",
      projects: 15,
    },
    {
      name: "HTML",
      level: 95,
      color: "from-orange-500 to-red-500",
      icon: Globe,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "Frontend",
      experience: "1+ year",
      description: "Semantic markup and accessibility",
      projects: 20,
    },
    {
      name: "Java",
      level: 70,
      color: "from-red-600 to-pink-600",
      icon: Database,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      category: "Backend",
      experience: "6+ months",
      description: "Object-oriented programming",
      projects: 5,
    },
    {
      name: "Spring Boot",
      level: 65,
      color: "from-green-600 to-emerald-600",
      icon: Database,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      category: "Backend",
      experience: "4+ months",
      description: "Enterprise Java applications",
      projects: 3,
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
        className={`h-4 w-4 transition-all duration-300 ${
          i < stars ? "text-yellow-400 fill-current animate-pulse" : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl animate-float-horizontal delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="p-6 bg-gradient-to-r from-emerald-400 to-green-400 rounded-2xl border border-emerald-500/30 animate-pulse-glow">
                <Sparkles className="h-10 w-10 text-white animate-wiggle" />
              </div>
              <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1 animate-bounce-horizontal">
                <Trophy className="h-4 w-4 text-yellow-800" />
              </div>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-slide-in-left">
            Skills & <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-in-right delay-200">
            A comprehensive toolkit for building modern web applications with cutting-edge technologies
          </p>
        </div>

        {/* Advanced Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(categories).map(([categoryName, categorySkills], categoryIndex) => (
            <div key={categoryName} className={`animate-${categoryIndex === 0 ? 'slide-in-left' : 'slide-in-right'} delay-300`}>
              <Card className="hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 border-emerald-500/30 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center gap-3 mb-8">
                    {categoryName === "Frontend" ? (
                      <Code className="h-8 w-8 text-cyan-400 animate-bounce-horizontal" />
                    ) : (
                      <Database className="h-8 w-8 text-blue-400 animate-bounce-horizontal delay-200" />
                    )}
                    <h3 className="text-3xl font-bold text-white">
                      {categoryName} <span className="text-emerald-400">Technologies</span>
                    </h3>
                    <Target className="h-6 w-6 text-emerald-400 animate-pulse" />
                  </div>
                  
                  <div className="grid gap-6">
                    {categorySkills.map((skill, index) => (
                      <div key={skill.name} className={`group animate-fade-in-${index % 2 === 0 ? 'left' : 'right'} delay-${(index + 1) * 100}`}>
                        <Card className="border-gray-700/50 bg-gradient-to-r from-gray-900/80 to-slate-800/80 hover:from-gray-800/80 hover:to-slate-700/80 transition-all duration-500 hover:scale-105 hover-glow">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              {/* Enhanced Skill Icon */}
                              <div className="relative">
                                <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl p-3 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:shadow-2xl transition-all duration-300 animate-float`}>
                                  <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-10 h-10 filter brightness-110"
                                  />
                                </div>
                                <div className="absolute -top-1 -right-1 bg-emerald-400 rounded-full p-1 animate-pulse">
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                              </div>

                              {/* Enhanced Skill Details */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-3">
                                  <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                                    {skill.name}
                                  </h4>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
                                      {skill.level}%
                                    </span>
                                    <div className="text-xs text-gray-400 bg-slate-700/50 px-2 py-1 rounded">
                                      {skill.projects} projects
                                    </div>
                                  </div>
                                </div>

                                {/* Enhanced Star Rating */}
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-1">
                                    {getStars(skill.level)}
                                  </div>
                                  <span className="text-xs text-gray-400 font-medium bg-slate-800/50 px-2 py-1 rounded">
                                    {skill.experience}
                                  </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors duration-300">
                                  {skill.description}
                                </p>

                                {/* Enhanced Progress Bar */}
                                <div className="w-full bg-slate-800/80 rounded-full h-3 overflow-hidden">
                                  <div
                                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden group-hover:shadow-lg`}
                                    style={{ width: `${skill.level}%` }}
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-bounce-horizontal"></div>
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
            </div>
          ))}
        </div>

        {/* Enhanced Overview Section */}
        <Card className="border-emerald-500/30 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm hover-lift animate-fade-in delay-700">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4 animate-slide-in-left">
                Technical Excellence <span className="text-emerald-400">Overview</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto rounded-full animate-pulse"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group animate-slide-in-left delay-200">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 hover-glow animate-float">
                  <Code className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  Frontend Development
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Building responsive and interactive user interfaces with modern React, TypeScript, and cutting-edge styling frameworks
                </p>
              </div>
              
              <div className="text-center group animate-fade-in delay-400">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 hover-glow animate-float delay-300">
                  <Database className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  Backend Development
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Creating robust server-side applications with Java and Spring Boot for scalable enterprise solutions
                </p>
              </div>
              
              <div className="text-center group animate-slide-in-right delay-600">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 hover-glow animate-float delay-500">
                  <Globe className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  Full Stack Excellence
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  End-to-end web development from database architecture to stunning user interfaces with modern best practices
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Footer */}
        <div className="text-center mt-12 animate-fade-in delay-1000">
          <p className="text-gray-300 flex items-center justify-center gap-3 text-lg">
            <Sparkles className="h-6 w-6 text-emerald-400 animate-pulse" />
            Always learning and exploring new technologies to stay current with industry trends
            <Sparkles className="h-6 w-6 text-emerald-400 animate-pulse delay-500" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
