
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen lendex-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 gradient-glow rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-40 right-20 w-12 h-12 gradient-glow rounded-full opacity-30 animate-pulse-custom"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Frontend Developer specializing in React.js, Next.js, and modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in delay-300">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate Frontend Developer with expertise in React.js, Next.js, JavaScript, TypeScript, 
              and modern web technologies. Currently pursuing my Bachelor of Science in Information Technology 
              at Virtual University of Pakistan, I combine academic knowledge with practical experience.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              With hands-on experience at Upwork as a Front-End Developer, I've worked on cyber security platforms, 
              service booking systems, and e-commerce solutions. I also mentor aspiring developers and provide 
              career guidance to students in programming and web development.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-emerald-400 mb-2">6+</h4>
                <p className="text-slate-300">Months Experience</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-emerald-400 mb-2">15+</h4>
                <p className="text-slate-300">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Right Side - Info Cards */}
          <div className="space-y-6 animate-fade-in delay-500">
            <Card className="card-gradient card-hover border-0">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 icon-gradient-1 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Education</h3>
                  <p className="text-slate-300 text-sm">BS - Information Technology</p>
                  <p className="text-slate-300 text-xs">Virtual University of Pakistan</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient card-hover border-0">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 icon-gradient-2 rounded-xl">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Experience</h3>
                  <p className="text-slate-300 text-sm">6+ Months Professional Work</p>
                  <p className="text-slate-300 text-xs">Frontend Development & Mentoring</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient card-hover border-0">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 icon-gradient-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                  <p className="text-slate-300 text-sm">Lahore, Pakistan</p>
                  <p className="text-slate-300 text-xs">Available for Remote Work</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
