import { GraduationCap, Calendar, MapPin, Award, Book, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 sm:px-8 lg:px-12 relative lendex-pattern">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="text-emerald-400">Education</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Academic background and continuous learning journey in technology and software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Education Details */}
          <div className="space-y-8">
            <Card className="card-gradient card-hover border-0 relative overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 icon-gradient-1 rounded-2xl flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Bachelor of Science
                      </h3>
                      <p className="text-emerald-400 font-semibold text-lg">
                        Information Technology
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-slate-300">
                        <MapPin className="h-5 w-5 text-emerald-400" />
                        <span>Virtual University, Pakistan</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300">
                        <Calendar className="h-5 w-5 text-emerald-400" />
                        <span>Present - Ongoing</span>
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed">
                      Currently pursuing a comprehensive degree program focusing on modern software development, 
                      web technologies, and information systems management.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
                  {/* left Side - Achievements & Stats */}
                   <Card className="card-gradient card-hover border-0">
              <CardContent className="p-8 text-center">
                <div className="p-4 icon-gradient-3 rounded-2xl w-fit mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Academic Excellence</h3>
                <p className="text-slate-300 leading-relaxed">
                  Maintaining strong academic performance while gaining practical experience 
                  through freelance projects and mentorship roles.
                </p>
              </CardContent>
            </Card>
            
          </div>

          
          <div className="space-y-8 ">
         

            {/* Skills Acquired */}
            <Card className="card-gradient card-hover border-0 mb-13">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-12">
                  <div className="p-6 icon-gradient-2 rounded-xl">
                    <Book className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Key Areas of Study</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-slate-300">• Software Engineering</p>
                    <p className="text-slate-300">• Web Development</p>
                    <p className="text-slate-300">• Database Systems</p>
                    <p className="text-slate-300">• Data Structures</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-300">• Object-Oriented Programming</p>
                    <p className="text-slate-300">• System Analysis</p>
                    <p className="text-slate-300">• Network Security</p>
                    <p className="text-slate-300">• Project Management</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient card-hover border-0 mb-10">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-16">
                  <div className="p-3 icon-gradient-4 rounded-xl">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Practical Learning</h3>
                </div>
                
                <div className="space-y-8 ">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Project Completion</span>
                    <span className="text-emerald-400 font-bold">10+ Projects</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Freelance Experience</span>
                    <span className="text-emerald-400 font-bold">6+ Months</span>
                  </div>
                 
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;