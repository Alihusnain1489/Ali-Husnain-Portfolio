
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const hasShownAnimation = localStorage.getItem('hero-animation-shown');
    if (!hasShownAnimation) {
      setHasAnimated(true);
      localStorage.setItem('hero-animation-shown', 'true');
    }
  }, []);

  return (
    <section
      id="home"
      className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center lendex-pattern"
    >
      {/* Lendex Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 gradient-glow rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 gradient-glow rounded-full opacity-20 animate-pulse-custom"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-bounce-custom"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content - Lendex Style */}
          <div className={`space-y-8 ${hasAnimated ? 'animate-slide-left' : ''}`}>
            {/* Greeting */}
            <div className={`space-y-2 ${hasAnimated ? 'animate-slide-left delay-100' : ''}`}>
              <p className="text-lg text-muted-foreground font-montserrat">Hello! I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-foreground tracking-tight leading-tight">
                Ali Husnain
              </h1>
              <div className="flex items-center gap-4 mt-4">
                <div className="h-px bg-primary w-16"></div>
                <p className="text-xl sm:text-2xl text-primary font-montserrat font-medium">
                  Frontend Developer
                </p>
              </div>
            </div>

            {/* Description */}
            <p className={`text-lg text-muted-foreground leading-relaxed max-w-xl font-montserrat ${hasAnimated ? 'animate-slide-left delay-300' : ''}`}>
              UI/UX Designer specializing in React & modern web technologies. 
              I create sustainable and scalable digital solutions that make a real impact.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 ${hasAnimated ? 'animate-slide-left delay-400' : ''}`}>
              <Button
                size="lg"
                className="gradient-primary text-white font-montserrat font-medium px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 shadow-xl border-0"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-montserrat font-medium px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300"
                onClick={() => window.open("/Ali Husnain CV.pdf", "_blank")}
              >
                <Download className="mr-2 h-5 w-5" />
                Get Resume
              </Button>
            </div>

            {/* Social Links - Floating Style */}
            <div className={`flex gap-4 pt-6 ${hasAnimated ? 'animate-slide-left delay-500' : ''}`}>
              <a
                href="https://github.com/Alihusnain1489"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border text-foreground flex items-center justify-center hover:scale-110 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ali-husnain-790929252/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border text-foreground flex items-center justify-center hover:scale-110 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:mr.alihusnain11@gmail.com"
                className="w-12 h-12 rounded-full bg-card border border-border text-foreground flex items-center justify-center hover:scale-110 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Professional Portrait */}
          <div className={`flex justify-center lg:justify-end ${hasAnimated ? 'animate-slide-right delay-300' : ''}`}>
            <div className="relative">
              {/* Background Geometric Shapes - Lendex Style */}
              <div className="relative w-96 h-96 flex items-center justify-center">
                {/* Geometric Background */}
                <div className="absolute inset-0 gradient-secondary rounded-3xl opacity-80 transform rotate-6"></div>
                <div className="absolute inset-4 bg-card rounded-3xl shadow-2xl transform -rotate-3"></div>
                
                {/* Profile Image */}
                <div className="relative z-10 w-80 h-80 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                  <img
                    src="/lovable-uploads/b643cda2-a597-4516-8e97-273dcd1c9351.png"
                    alt="Ali Husnain - Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Social Icons */}
                <div className="absolute -top-4 -right-4 w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl animate-bounce-custom shadow-xl">
                  &lt;/&gt;
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 service-gradient-2 rounded-full flex items-center justify-center text-white animate-float shadow-xl">
                  ✨
                </div>
                <div className="absolute top-1/4 -right-8 w-6 h-6 bg-primary rounded-full animate-pulse-custom"></div>
                <div className="absolute bottom-1/4 -left-8 w-4 h-4 bg-accent rounded-full animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
