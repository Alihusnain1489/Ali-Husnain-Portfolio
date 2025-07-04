
import { Users, Award, Trophy, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "16+", label: "Years of Experience", icon: Award },
    { number: "215+", label: "Project Completed", icon: Trophy },
    { number: "97+", label: "Happy Clients", icon: Users },
    { number: "100%", label: "Client Satisfaction", icon: Target },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen bg-gray-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-green-400/5 to-emerald-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-400/5 to-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-400/10 text-green-400 rounded-full text-sm font-medium border border-green-400/20 mb-4 animate-scale-in">
            LET ME INTRODUCE MYSELF
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            About me
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in delay-200">
            A story of hardwork and perseverance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Image with stats */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative">
              <div className="w-full max-w-md mx-auto relative">
                <img
                  src="face-swap.png"
                  alt="Ali Husnain"
                  className="w-full h-auto rounded-2xl shadow-2xl shadow-green-500/20"
                />
                
                {/* Floating stats */}
                <div className="absolute -top-8 -left-8 bg-gray-800 rounded-2xl p-6 border border-green-400/30 transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">16+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">Years of Experience</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -right-8 bg-gray-800 rounded-2xl p-6 border border-green-400/30 transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">215+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">Project Completed</div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-gray-800 rounded-2xl p-6 border border-green-400/30 hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">97+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 animate-fade-in delay-500">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate front-end developer with expertise in creating 
                beautiful and functional user interfaces. My journey in web development 
                started during my studies at Virtual University of Pakistan, where I 
                developed a deep appreciation for user-centered design.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                With 6 months of remote work experience, I specialize in React, 
                TypeScript, and modern CSS frameworks. I believe in writing clean, 
                maintainable code and creating seamless user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing 
                to open-source projects, and constantly learning to stay at the 
                forefront of web development trends.
              </p>
            </div>

            {/* Contact section */}
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-green-400/20">
              <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
              <p className="text-gray-300 mb-6">
                I'm always looking to take on new projects and collaborate with amazing people.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="bg-gradient-to-r from-green-400 to-emerald-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:from-green-500 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  HIRE ME
                </button>
                <button 
                  className="border border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400/10 transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("/Ali CV.pdf", "_blank")}
                >
                  DOWNLOAD CV
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center p-8 bg-gray-800/50 border-green-400/30 hover:border-green-400/60 transition-all duration-500 transform hover:scale-105 animate-fade-in hover:shadow-xl hover:shadow-green-500/10"
              style={{ animationDelay: `${600 + index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-xl">
                    <stat.icon className="h-8 w-8 text-green-400" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
