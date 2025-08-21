import { Code, Database, Palette, Server, Globe, TestTube, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "React.js Development",
      description: "I develop high-performance, scalable web apps with React.js, Tailwind CSS, and modern JavaScript (ES6+), ensuring your digital product stands out.",
      icon: Code,
      gradient: "icon-gradient-1"
    },
    {
      title: "State Management", 
      description: "I integrate Redux Toolkit or React Context to handle complex state, making your app fast, maintainable, and future-ready.",
      icon: Database,
      gradient: "icon-gradient-2"
    },
    {
      title: "UI/UX Design",
      description: "From wireframes to pixel-perfect interfaces, I focus on clean layouts and seamless user journeys that keep visitors engaged.",
      icon: Palette,
      gradient: "icon-gradient-3"
    },
    {
      title: "API Integration",
      description: "I connect your frontend seamlessly with REST APIs using Axios & Fetch, enabling real-time data and dynamic features.",
      icon: Server,
      gradient: "icon-gradient-4"
    },
    {
      title: "SEO & Deployment",
      description: "I apply on-page SEO best practices and deploy to platforms like Vercel or Netlify, so your app is fast, discoverable, and live with CI/CD.",
      icon: Globe,
      gradient: "icon-gradient-5"
    },
    {
      title: "Cross-Browser Testing",
      description: "I ensure your website works flawlessly across modern browsers and devices, delivering consistent experiences to all your users.",
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