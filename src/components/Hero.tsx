
import { Github, Linkedin, Mail, Download, Globe } from "lucide-react";
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
      className="pt-20 pb-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden min-h-screen flex items-center lendex-pattern"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 animate-float"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-emerald-500/30 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className={`space-y-8 ${hasAnimated ? 'animate-slide-left' : ''}`}>
            <div className={`space-y-6 ${hasAnimated ? 'animate-slide-left delay-100' : ''}`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-emerald-500"></div>
                <span className="text-emerald-500 text-sm font-medium tracking-wider uppercase">
                  Hello! I'm
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Ali Husnain
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl sm:text-2xl text-emerald-500 font-medium">
                  Frontend Developer
                </p>
                <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                  UI/UX Designer specializing in Shopify & Webflow. 
                  I create sustainable and scalable digital solutions that make a real impact.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className={`${hasAnimated ? 'animate-slide-left delay-400' : ''}`}>
              <Button
                size="lg"
                className="gradient-emerald text-white font-medium px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-xl border-0 group"
                onClick={() => window.open("/Ali-cv.pdf", "_blank")}
              >
                <span>Get Resume</span>
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Side - Professional Image */}
          <div className={`flex justify-center lg:justify-end ${hasAnimated ? 'animate-slide-right delay-300' : ''}`}>
            <div className="relative">
              {/* Main Image Container - Responsive */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Background Circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 transform rotate-6"></div>
                
                {/* Profile Image */}
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-slate-700 hover:scale-105 transition-transform duration-500">
                  <img
                    src="/lovable-uploads/b643cda2-a597-4516-8e97-273dcd1c9351.png"
                    alt="Ali Husnain - Frontend Developer"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                
                {/* Floating Social Icons - Responsive positioning */}
                <div className="absolute -right-2 sm:-right-4 top-1/4 space-y-3 sm:space-y-4">
                  <a
                    href="https://github.com/Alihusnain1489"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800 border border-slate-600 text-white flex items-center justify-center hover:bg-emerald-600 hover:scale-110 transition-all duration-300 shadow-lg"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ali-husnain-790929252/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800 border border-slate-600 text-white flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-lg"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a
                    href="mailto:mr.alihusnain11@gmail.com"
                    className="block w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800 border border-slate-600 text-white flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-300 shadow-lg"
                    aria-label="Email Contact"
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a
                    href="https://alihusnain11.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800 border border-slate-600 text-white flex items-center justify-center hover:bg-purple-600 hover:scale-110 transition-all duration-300 shadow-lg"
                    aria-label="Portfolio Website"
                  >
                    <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
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
