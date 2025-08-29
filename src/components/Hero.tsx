
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="max-w-4xl mx-auto relative z-10 w-full text-center">
        <div className="animate-fade-in">
          {/* Hexagonal logo similar to reference */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <svg 
                width="100" 
                height="100" 
                viewBox="0 0 100 100" 
                className="text-primary stroke-2"
              >
                <polygon 
                  points="50,5 85,25 85,75 50,95 15,75 15,25" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
                <polygon 
                  points="50,15 75,30 75,70 50,85 25,70 25,30" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-thin text-foreground mb-6 tracking-wide animate-scale-in">
            Ali Husnain
          </h1>
          
          <div className="relative mb-8">
            <p className="text-xl sm:text-2xl text-muted-foreground font-light tracking-wider animate-fade-in delay-200">
              Front-End Developer
            </p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-primary mt-4"></div>
          </div>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
            Crafting digital experiences with modern web technologies. 
            Passionate about clean code, minimal design, and user-centered interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in delay-500">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-light tracking-wide px-8 py-3 rounded-none border border-primary hover:shadow-lg transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-light tracking-wide px-8 py-3 rounded-none transition-all duration-300"
              onClick={() => window.open("/Ali Husnain CV.pdf", "_blank")}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>

          <div className="flex gap-6 justify-center animate-fade-in delay-700">
            <a
              href="https://github.com/Alihusnain1489"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-husnain-790929252/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:mr.alihusnain11@gmail.com"
              className="p-3 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
