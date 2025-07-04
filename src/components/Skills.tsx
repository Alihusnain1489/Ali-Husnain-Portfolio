
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Layers, Monitor } from "lucide-react";

const Skills = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "UI & UX Design", 
      description: "Designing user interfaces and experiences with focus on usability and aesthetics. Creating wireframes, prototypes, and user-centered designs.",
      featured: true
    },
    {
      icon: Layers,
      title: "Front-end Development",
      description: "Building responsive and interactive web applications using modern frameworks like React, Vue, and Angular with clean, maintainable code.",
      featured: false
    },
    {
      icon: Monitor,
      title: "Web Development",
      description: "Developing modern, responsive websites with clean code. Frontend development using React, TypeScript, and modern CSS frameworks.",
      featured: false
    }
  ];

  const skills = [
    {
      name: "React",
      level: 90,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      level: 85,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      level: 80,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "CSS3",
      level: 90,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "HTML5",
      level: 95,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg",
    }
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen bg-gray-800"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-green-400/5 to-emerald-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-400/5 to-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Services Section */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-green-400/10 text-green-400 rounded-full text-sm font-medium border border-green-400/20 mb-4 animate-scale-in">
            WHAT I DO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            My <span className="text-green-400">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden transition-all duration-500 transform hover:scale-105 animate-fade-in ${
                service.featured 
                  ? 'bg-gradient-to-br from-green-400 to-emerald-400 text-gray-900' 
                  : 'bg-gray-900/80 border-gray-700 hover:border-green-400/30 text-white'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  service.featured 
                    ? 'bg-gray-900/20' 
                    : 'bg-green-400/10'
                }`}>
                  <service.icon className={`h-8 w-8 ${
                    service.featured ? 'text-gray-900' : 'text-green-400'
                  }`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className={`leading-relaxed ${
                  service.featured ? 'text-gray-800' : 'text-gray-300'
                }`}>
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Technical Skills</h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="bg-gray-900/80 border-gray-700 hover:border-green-400/30 transition-all duration-500 transform hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center">
                    <img src={skill.image} alt={skill.name} className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                    <span className="text-green-400 font-medium">{skill.level}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
