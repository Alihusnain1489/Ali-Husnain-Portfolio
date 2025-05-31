
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Ali Husnain
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Front-end Developer
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              Passionate front-end developer with 6 months of remote work experience, 
              specializing in React, TypeScript, and modern web technologies. 
              I create beautiful, responsive, and user-friendly web applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-cyan-300 text-cyan-700 hover:bg-cyan-50"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/Alihusnain1489" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-cyan-100 hover:bg-cyan-200 rounded-full transition-colors duration-200"
              >
                <Github className="h-6 w-6 text-cyan-700" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ali-husnain-790929252/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-cyan-100 hover:bg-cyan-200 rounded-full transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6 text-cyan-700" />
              </a>
              <a 
                href="mailto:mr.alihusnain11@gmail.com"
                className="p-3 bg-cyan-100 hover:bg-cyan-200 rounded-full transition-colors duration-200"
              >
                <Mail className="h-6 w-6 text-cyan-700" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="/lovable-uploads/2ecd07b9-c5c3-48c1-bf61-c2a3cbad2309.png" 
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
