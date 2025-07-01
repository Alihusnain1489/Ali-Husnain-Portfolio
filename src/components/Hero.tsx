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
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ali Husnain
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-300 mb-8">
              Front-end Developer
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            Creative and detail-oriented front-end developer with 6 months of remote experience building responsive, user-friendly web applications. Skilled in React, JavaScript, and modern web technologies to deliver clean, high-performance interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                onClick={() => window.open("/Ali CV.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-cyan-400 text-sky-500 hover:bg-cyan-400/10 hover:text-white"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Alihusnain1489"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-full transition-colors duration-200"
              >
                <Github className="h-6 w-6 text-cyan-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/ali-husnain-790929252/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-full transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6 text-blue-400" />
              </a>
              <a
                href="mailto:mr.alihusnain11@gmail.com"
                className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-full transition-colors duration-200"
              >
                <Mail className="h-6 w-6 text-cyan-400" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
                <img
                  src="face-swap.png"
                  alt="Ali Husnain - Front-end Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
