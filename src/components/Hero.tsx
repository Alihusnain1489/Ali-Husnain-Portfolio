
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-40 left-10 w-4 h-4 bg-green-400/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-60 right-32 w-6 h-6 bg-emerald-400/20 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-green-400/40 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-green-400/10 text-green-400 rounded-full text-sm font-medium border border-green-400/20 animate-scale-in">
                HELLO, I'M A
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-scale-in leading-tight">
              UI & UX{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Designer.
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl animate-fade-in delay-200 leading-relaxed">
              Hi I'm Ali Husnain, a passionate Front-end Developer based in 
              Pakistan. Welcome to my portfolio website.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in delay-500">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-gray-900 font-semibold transform hover:scale-105 transition-all duration-300 px-8 py-3"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                VIEW PORTFOLIO
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-400 text-green-400 hover:bg-green-400/10 hover:text-white transform hover:scale-105 transition-all duration-300 px-8 py-3"
                onClick={() => window.open("/Ali CV.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                DOWNLOAD CV
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in delay-700">
              <a
                href="https://github.com/Alihusnain1489"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-green-400/20 rounded-lg transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-green-400/30"
              >
                <Github className="h-6 w-6 text-gray-300 hover:text-green-400 transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/ali-husnain-790929252/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-green-400/20 rounded-lg transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-green-400/30"
              >
                <Linkedin className="h-6 w-6 text-gray-300 hover:text-green-400 transition-colors duration-300" />
              </a>
              <a
                href="mailto:mr.alihusnain11@gmail.com"
                className="p-3 bg-gray-800 hover:bg-green-400/20 rounded-lg transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-green-400/30"
              >
                <Mail className="h-6 w-6 text-gray-300 hover:text-green-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in delay-300">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-green-500/20 transform hover:scale-105 transition-all duration-500 border-4 border-green-400/30">
                <img
                  src="face-swap.png"
                  alt="Ali Husnain - Front-end Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements around image */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
              
              {/* Decorative dots */}
              <div className="absolute top-10 -left-4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-20 -right-4 w-3 h-3 bg-emerald-400 rounded-full animate-ping delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
