import { Code, Database, Palette, Server, Globe, TestTube, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "React.js & Next.js Development",
      description: "Expert in building high-performance web applications using React.js, Next.js, and modern JavaScript (ES6+) with TypeScript for type safety.",
      icon: Code,
      gradient: "icon-gradient-1"
    },
    {
      title: "State Management & Routing", 
      description: "Proficient in Redux-Toolkit, React Context, and React-Router for complex state management and seamless navigation experiences.",
      icon: Database,
      gradient: "icon-gradient-2"
    },
    {
      title: "Modern CSS & Styling",
      description: "Skilled in Tailwind CSS, Bootstrap, and custom CSS to create responsive, beautiful, and accessible user interfaces.",
      icon: Palette,
      gradient: "icon-gradient-3"
    },
    {
      title: "API Integration & Data Fetching",
      description: "Experience with TanStack Query, REST APIs, and modern data fetching patterns for dynamic, real-time applications.",
      icon: Server,
      gradient: "icon-gradient-4"
    },
    {
      title: "Full-Stack Technologies",
      description: "Knowledge of Java, Spring Boot, Maven, JDBC, MySQL, and MongoDB for comprehensive web development solutions.",
      icon: Globe,
      gradient: "icon-gradient-5"
    },
    {
      title: "Development Tools & Version Control",
      description: "Proficient with GitHub, modern development workflows, testing, and deployment strategies for reliable applications.",
      icon: TestTube,
      gradient: "icon-gradient-6"
    },
  ];

  return (
    <section id="services" className="py-24 px-6 sm:px-8 lg:px-12 relative lendex-pattern">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="text-emerald-400">Services</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Specialized in creating modern, responsive web applications with cutting-edge technologies
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group card-gradient card-hover border-0 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="h-6 w-6 text-emerald-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </CardContent>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;