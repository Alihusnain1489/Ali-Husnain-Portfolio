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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-emerald-400">Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group relative overflow-hidden bg-slate-800/60 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-emerald-400 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
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