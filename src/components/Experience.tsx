
import { Briefcase, Code, Users, Clock, Trophy, TrendingUp, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const stats = [
    { number: "6+", label: "Months Experience", icon: Clock },
    { number: "10+", label: "Projects Completed", icon: Trophy },
    { number: "5+", label: "Technologies", icon: Code },
    { number: "100%", label: "Client Satisfaction", icon: TrendingUp },
  ];

  const experiences = [
    {
      title: "Front-end Developer",
      company: "Remote Position",
      period: "2024 - Present",
      type: "Full-time",
      description: "Developing modern web applications using React, TypeScript, and various CSS frameworks. Collaborating with cross-functional teams to deliver high-quality user experiences.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "REST APIs"]
    },
    {
      title: "Web Developer",
      company: "Freelance",
      period: "2023 - 2024",
      type: "Contract",
      description: "Built responsive websites and web applications for various clients. Focused on performance optimization and user-friendly interfaces.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen bg-gray-800">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-green-400/5 to-emerald-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-400/5 to-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-400/10 text-green-400 rounded-full text-sm font-medium border border-green-400/20 mb-4 animate-scale-in">
            MY JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            Experience & <span className="text-green-400">Achievements</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in delay-200">
            My professional journey in web development and the milestones I've achieved.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center p-6 bg-gray-900/60 border-green-400/30 hover:border-green-400/60 transition-all duration-500 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-xl">
                    <stat.icon className="h-6 w-6 text-green-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="bg-gray-900/60 border-green-400/30 hover:border-green-400/60 transition-all duration-500 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-2">{exp.title}</h4>
                      <div className="flex items-center gap-4 text-green-400 mb-2">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <span className="inline-block px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm font-medium border border-green-400/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">Education</h3>
          <Card className="bg-gray-900/60 border-green-400/30 hover:border-green-400/60 transition-all duration-500 transform hover:scale-105 animate-fade-in delay-1000">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-2">BS - Information Technology</h4>
                  <div className="flex items-center gap-4 text-green-400 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Virtual University of Pakistan</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Comprehensive study of computer science fundamentals, software development, 
                    database management, and web technologies. Developed strong problem-solving 
                    skills and learned industry best practices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
