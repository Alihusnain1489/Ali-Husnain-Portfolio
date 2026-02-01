
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "React.js & Next.js Development",
      description: "Expert in building high-performance web applications using React.js, Next.js, and modern JavaScript (ES6+) with TypeScript for type safety.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop"
    },
    {
      title: "State Management & Routing", 
      description: "Proficient in Redux-Toolkit, React Context, and React-Router for complex state management and seamless navigation experiences.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop"
    },
    {
      title: "Modern CSS & Styling",
      description: "Skilled in Tailwind CSS, Bootstrap, and custom CSS to create responsive, beautiful, and accessible user interfaces.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      title: "API Integration & Data Fetching",
      description: "Experience with TanStack Query, REST APIs, and modern data fetching patterns for dynamic, real-time applications.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"
    },
    {
      title: "Full-Stack Technologies",
      description: "Knowledge of Java, Spring Boot, Maven, JDBC, MySQL, and MongoDB for comprehensive web development solutions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      title: "Development Tools & Version Control",
      description: "Proficient with GitHub, modern development workflows, testing, and deployment strategies for reliable applications.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop"
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
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              </div>
              
              <CardContent className="p-6 relative z-10">
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="h-6 w-6 text-emerald-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
