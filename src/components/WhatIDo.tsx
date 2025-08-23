import { Layers, Code, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const WhatIDo = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const hasShownAnimation = localStorage.getItem('whatido-animation-shown');
    if (!hasShownAnimation) {
      setHasAnimated(true);
      localStorage.setItem('whatido-animation-shown', 'true');
    }
  }, []);

  const services = [
    {
      icon: Layers,
      title: "UI/UX Design",
      description: "Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design",
      gradient: "service-gradient-1"
    },
    {
      icon: Code,
      title: "Development", 
      description: "HTML/CSS, JavaScript, Animation, WordPress, React",
      gradient: "service-gradient-2"
    },
    {
      icon: Palette,
      title: "Illustration",
      description: "Character Design, Icon Set, Illustration Guide, Illustration Set, Motion Graphic",
      gradient: "service-gradient-3"
    }
  ];

  return (
    <section id="what-i-do" className="py-24 px-4 sm:px-6 lg:px-8 relative lendex-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 gradient-glow rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 gradient-glow rounded-full opacity-30 animate-pulse-custom"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-6 ${hasAnimated ? 'animate-slide-up' : ''}`}>
            Service Provide For My Clients.
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`group relative overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 ${hasAnimated ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: hasAnimated ? `${300 + index * 100}ms` : '0ms' }}
              >
                <CardContent className="p-8 text-center relative z-10">
                  {/* Icon with Gradient Background */}
                  <div className="mb-8">
                    <div className={`w-20 h-20 mx-auto ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed font-montserrat">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className={`mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hasAnimated ? 'animate-slide-up' : ''}`}>
                    <div className="w-12 h-12 mx-auto gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">→</span>
                    </div>
                  </div>
                </CardContent>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;