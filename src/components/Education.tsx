import { GraduationCap, Calendar, MapPin, Award, Book, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's in Information Technology",
      institution: "Virtual University of Pakistan",
      year: "2024",
      location: "Lahore, Pakistan",
      description: "Comprehensive degree program focusing on modern software development, web technologies, and information systems.",
      gradient: "icon-gradient-1"
    },
    {
      degree: "Bachelor's in Arts",
      institution: "University of Punjab",
      year: "2019",
      location: "Lahore, Pakistan",
      description: "Developed strong communication and analytical skills that complement technical expertise.",
      gradient: "icon-gradient-2"
    }
  ];

  return (
    <section id="education" className="py-24 px-6 sm:px-8 lg:px-12 relative lendex-pattern">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="text-emerald-400">Education</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Academic background and continuous learning journey in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Education Cards */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card key={index} className="card-gradient card-hover border-0 relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 ${edu.gradient} rounded-2xl flex-shrink-0`}>
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-emerald-400 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-slate-300 text-sm">
                          <MapPin className="h-4 w-4 text-emerald-400" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-300 text-sm">
                          <Calendar className="h-4 w-4 text-emerald-400" />
                          <span>{edu.year}</span>
                        </div>
                      </div>

                      <p className="text-slate-300 leading-relaxed text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Side - Additional Info */}
          <div className="space-y-8">
            {/* Key Areas */}
            <Card className="card-gradient card-hover border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 icon-gradient-3 rounded-xl">
                    <Book className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Key Areas of Study</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Software Engineering",
                    "Web Development",
                    "Database Systems",
                    "Data Structures",
                    "Object-Oriented Programming",
                    "System Analysis",
                    "Network Security",
                    "Project Management"
                  ].map((area, index) => (
                    <div key={index} className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Practical Learning */}
            <Card className="card-gradient card-hover border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 icon-gradient-4 rounded-xl">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Practical Achievements</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">Projects Completed</span>
                    <span className="text-emerald-400 font-bold">10+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">Work Experience</span>
                    <span className="text-emerald-400 font-bold">1+ Year</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">Technologies Mastered</span>
                    <span className="text-emerald-400 font-bold">15+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievement Badge */}
            <Card className="card-gradient card-hover border-0">
              <CardContent className="p-8 text-center">
                <div className="p-4 icon-gradient-5 rounded-2xl w-fit mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Continuous Learner</h3>
                <p className="text-slate-300 text-sm">
                  Committed to staying current with the latest technologies and best practices in web development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;