import { Code, Database, Palette, Server, Globe, Smartphone, ArrowUpRight, Layout, Zap, TestTube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const services = [
    {
      title: "React.js Development",
      description: "I develop high-performance, scalable web apps with React.js, Tailwind CSS, and modern JavaScript (ES6+), ensuring your digital product stands out.",
      icon: Code,
    },
    {
      title: "State Management",
      description: "I integrate Redux Toolkit or React Context to handle complex state, making your app fast, maintainable, and future-ready.",
      icon: Database,
    },
    {
      title: "UI/UX Design",
      description: "From wireframes to pixel-perfect interfaces, I focus on clean layouts and seamless user journeys that keep visitors engaged.",
      icon: Layout,
    },
    {
      title: "API Integration",
      description: "I connect your frontend seamlessly with REST APIs using Axios & Fetch, enabling real-time data and dynamic features.",
      icon: Server,
    },
    {
      title: "SEO & Deployment",
      description: "I apply on-page SEO best practices and deploy to platforms like Vercel or Netlify, so your app is fast, discoverable, and live with CI/CD.",
      icon: Globe,
    },
    {
      title: "Cross-Browser Testing",
      description: "I ensure your website works flawlessly across modern browsers and devices, delivering consistent experiences to all your users.",
      icon: TestTube,
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen lendex-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-24 h-24 gradient-glow rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 gradient-glow rounded-full opacity-30 animate-pulse-custom"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-6 animate-fade-in">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-montserrat animate-fade-in delay-200">
            Specialized in creating modern, responsive web applications with cutting-edge technologies
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group border border-border bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-playfair font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed font-montserrat text-sm">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="h-5 w-5 text-primary mx-auto transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;