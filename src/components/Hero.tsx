
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-4">
              <span className="text-emerald-400 text-lg font-medium">HELLO, I'M A</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-scale-in">
              Front-End{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Developer.
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl animate-fade-in delay-200">
              Hi I'm Ali Husnain, a passionate Front-end Developer based in Pakistan. 
              Welcome to my portfolio website where you can explore my work and experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in delay-300">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
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
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 hover:text-white transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open("/Ali Husnain CV.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                DOWNLOAD CV
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in delay-500">
              <a
                href="https://github.com/Alihusnain1489"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                <Github className="h-6 w-6 text-emerald-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/ali-husnain-790929252/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                <Linkedin className="h-6 w-6 text-emerald-400" />
              </a>
              <a
                href="mailto:mr.alihusnain11@gmail.com"
                className="p-3 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                <Mail className="h-6 w-6 text-emerald-400" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in delay-300">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-emerald-400/30 shadow-2xl shadow-emerald-500/20 transform hover:scale-105 transition-all duration-500">
                <img
                  src="/public/lovable-uploads/hero.png"
                  alt="Ali Husnain - Front-end Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
