
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
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className={`space-y-8 ${hasAnimated ? 'animate-slide-left' : ''}`}>
            {/* Name and Role */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-foreground tracking-tight">
                Ali Husnain
              </h1>
              <p className={`text-xl sm:text-2xl text-primary font-montserrat font-medium ${hasAnimated ? 'animate-slide-left delay-200' : ''}`}>
                ( frontend_developer )
              </p>
            </div>

            {/* Description */}
            <p className={`text-lg text-muted-foreground leading-relaxed max-w-lg font-montserrat ${hasAnimated ? 'animate-slide-left delay-300' : ''}`}>
              A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
            </p>

            {/* Social Links - Colorful like reference */}
            <div className={`flex gap-4 ${hasAnimated ? 'animate-slide-left delay-400' : ''}`}>
              <a
                href="https://github.com/Alihusnain1489"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-github text-white flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ali-husnain-790929252/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-linkedin text-white flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:mr.alihusnain11@gmail.com"
                className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${hasAnimated ? 'animate-slide-left delay-500' : ''}`}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-medium px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                ⭐ View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-montserrat font-medium px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
                onClick={() => window.open("/Ali Husnain CV.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className={`flex justify-center lg:justify-end ${hasAnimated ? 'animate-slide-right delay-300' : ''}`}>
            <div className="relative">
              {/* Developer Illustration placeholder - similar to reference */}
              <div className="relative w-96 h-96 flex items-center justify-center">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-blue rounded-full opacity-20 animate-pulse-custom"></div>
                <div className="absolute inset-4 bg-gradient-purple rounded-full opacity-30 animate-float"></div>
                
                {/* Profile Image */}
                <div className="relative z-10 w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-2xl hover:scale-105 transition-transform duration-300">
                  <img
                    src="/lovable-uploads/b643cda2-a597-4516-8e97-273dcd1c9351.png"
                    alt="Ali Husnain"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-green rounded-lg flex items-center justify-center text-white font-bold text-xl animate-bounce-custom">
                  &lt;/&gt;
                </div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center text-white animate-float">
                  💡
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
