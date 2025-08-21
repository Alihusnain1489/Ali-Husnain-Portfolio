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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-thin text-foreground mb-6 tracking-wide animate-fade-in">
            Services
          </h2>
          <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
            Specialized in creating modern, responsive web applications
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group border border-border bg-card hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                </div>
                
                <h3 className="text-lg font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
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

export default Skills;