
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full border border-emerald-500/30 animate-scale-in">
              <Award className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
            About <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in delay-200">
            Dedicated to creating exceptional digital experiences through clean code and innovative design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in delay-300">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate front-end developer with a strong foundation in modern web technologies. 
              My journey in web development started during my studies at Virtual University of Pakistan, 
              where I developed a deep appreciation for creating user-centered digital solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With 6 months of remote work experience, I've had the opportunity to work on diverse projects, 
              collaborating with teams across different time zones and contributing to real-world applications 
              that serve users globally.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm constantly learning and staying up-to-date with the latest trends and best practices 
              in front-end development, always striving to write clean, efficient, and maintainable code.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in delay-500">
            <Card className="hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-500 border-yellow-500/30 bg-slate-800/60 backdrop-blur-sm transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                    <p className="text-gray-300 font-medium">BS - Information Technology</p>
                    <p className="text-gray-400">Virtual University of Pakistan</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 border-emerald-500/30 bg-slate-800/60 backdrop-blur-sm transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-lg">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Experience</h3>
                    <p className="text-gray-300 font-medium">6 Months Remote Work</p>
                    <p className="text-gray-400">Front-end Development</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 border-emerald-500/30 bg-slate-800/60 backdrop-blur-sm transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-300 font-medium">Pakistan</p>
                    <p className="text-gray-400">Available for Remote Work</p>
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

export default About;
