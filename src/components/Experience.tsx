
import { Briefcase, Code, Users, Clock, Trophy, TrendingUp, GraduationCap, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      year: "2024 - Present",
      title: "Frontend Developer",
      company: "Infinix.io (Remote)",
      description: "Building fast, responsive UIs with React.js and Tailwind CSS, focused on user experience and scalable architecture.",
      status: "active"
    },
    {
      year: "2023 - 2024",
      title: "React Developer (Internship)",
      company: "Beyond Logics",
      description: "Developed custom web solutions, integrated APIs, and ensured SEO-friendly, high-performance applications.",
      status: "completed"
    },
    {
      year: "2022 - 2023",
      title: "Frontend Developer",
      company: "Self Learning",
      description: "Created SaaS dashboards and reusable components, emphasizing clean code, speed, and mobile-first design.",
      status: "completed"
    }
  ];

  const sidebarItems = [
    { label: "Experience", active: true },
    { label: "Education", active: false },
    { label: "Skills", active: false },
    { label: "AboutMe", active: false }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left side - Why Hire Me */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why Hire Me?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I specialize in building modern, fast, and scalable frontend applications. With a focus on user-centric design and clean code, I can help transform your ideas into responsive digital products.
            </p>
            
            {/* Sidebar Navigation */}
            <div className="space-y-2">
              {sidebarItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    item.active
                      ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                      : "bg-slate-800/50 border-slate-700 text-gray-400 hover:border-slate-600"
                  }`}
                >
                  <div className="text-center font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Experience Timeline */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              My <span className="text-emerald-400">Experience</span>
            </h2>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card 
                  key={index}
                  className="bg-slate-800/60 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                        exp.status === 'active' ? 'bg-emerald-400' : 'bg-slate-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="text-emerald-400 text-sm font-medium mb-1">
                              {exp.year}
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-gray-400 mb-3">
                              ● {exp.company}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
