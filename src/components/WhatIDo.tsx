import { Code, Palette, Globe, Smartphone, Database, Zap } from "lucide-react";
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
      title: "Frontend Development",
      description: "Building responsive, interactive web applications using React, TypeScript, and modern CSS frameworks.",
      icon: Code,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with focus on user experience and accessibility.",
      icon: Palette,
      gradient: "from-purple-500 to-pink-400"
    },
    {
      title: "Web Applications",
      description: "Developing full-stack applications with modern frameworks and best practices for scalability.",
      icon: Globe,
      gradient: "from-green-500 to-emerald-400"
    },
    {
      title: "Mobile-First Design",
      description: "Ensuring perfect user experience across all devices with responsive and mobile-optimized designs.",
      icon: Smartphone,
      gradient: "from-orange-500 to-yellow-400"
    },
    {
      title: "Database Integration",
      description: "Implementing robust data solutions with modern databases and efficient query optimization.",
      icon: Database,
      gradient: "from-red-500 to-rose-400"
    },
    {
      title: "Performance Optimization",
      description: "Optimizing applications for speed, SEO, and user engagement with latest web technologies.",
      icon: Zap,
      gradient: "from-indigo-500 to-blue-400"
    }
  ];

  return (
    <section id="what-i-do" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-6 tracking-wide ${hasAnimated ? 'animate-slide-up' : ''}`}>
            What I Do?
          </h2>
          <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-montserrat ${hasAnimated ? 'animate-slide-up delay-200' : ''}`}>
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`group border border-border bg-card hover:shadow-xl hover-lift transition-all duration-500 ${hasAnimated ? 'animate-slide-up' : ''}`}
              style={{ animationDelay: hasAnimated ? `${300 + index * 100}ms` : '0ms' }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 font-montserrat">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-montserrat">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;