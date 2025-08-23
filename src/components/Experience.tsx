
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      year: "04/2025 - 05/2025",
      title: "Front-End Developer",
      company: "Upwork (Freelancer Platform)",
      description: "Started working on a Cyber Security package purchasing platform, a service booking platform with admin dashboard as an associate. Implemented latest React, JavaScript, BootStrap, Tailwind CSS and React UI library Ant Design.",
      status: "active"
    },
    {
      year: "2024 - Present", 
      title: "Bachelor of Science Student",
      company: "Virtual University, Pakistan",
      description: "Major in Information Technology, focusing on modern web development technologies and software engineering principles.",
      status: "active"
    },
    {
      year: "2023 - 2024",
      title: "Mentorship & Teaching", 
      company: "PakistanCitizenAlliance & Private Tutoring",
      description: "Freelancing Bootcamp Mentor responsible for mentoring and giving career advice to PCA students. Computer Science Tutor for Programming, web development, career advice, and professional portfolio development.",
      status: "completed"
    }
  ];

  const sidebarItems = [
    { label: "Experience", active: true },
    { label: "Education", active: false },
    { label: "Skills", active: false },
    { label: "About Me", active: false }
  ];

  return (
    <section id="experience" className="py-24 px-6 sm:px-8 lg:px-12 relative lendex-pattern">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left side - Why Hire Me */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Why Hire Me?
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                I specialize in building modern, fast, and scalable frontend applications. With a focus on user-centric design and clean code, I can help transform your ideas into responsive digital products.
              </p>
            </div>
            
            {/* Sidebar Navigation */}
            <div className="space-y-3">
              {sidebarItems.map((item) => (
                <div
                  key={item.label}
                  className={`p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    item.active
                      ? "card-gradient border border-emerald-500/30 text-emerald-400 shadow-lg"
                      : "bg-slate-800/50 border border-slate-700 text-slate-400 hover:border-slate-600 hover:bg-slate-700/50"
                  }`}
                >
                  <div className="font-medium text-center">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Experience Timeline */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              My <span className="text-emerald-400">Experience</span>
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card 
                  key={index}
                  className="card-gradient card-hover border-0 relative overflow-hidden"
                >
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-6">
                      {/* Timeline dot */}
                      <div className="flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                          exp.status === 'active' 
                            ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50' 
                            : 'bg-slate-500'
                        }`}></div>
                        {index < experiences.length - 1 && (
                          <div className="w-px bg-slate-600 h-20 mt-4"></div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <span className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">
                          {exp.year}
                        </span>
                        <h3 className="text-xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-slate-400 font-medium">
                          <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                          {exp.company}
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Hover effect background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                    <div className="w-full h-full bg-gradient-to-r from-emerald-500/20 to-transparent"></div>
                  </div>
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
