
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      year: "Dec 2025 – Present",
      title: "Frontend Developer",
      company: "DevStax",
      location: "Lahore, Pakistan",
      description: "Developing and maintaining web applications using Next.js, React.js, JavaScript, Tailwind CSS, and Bootstrap. Building modern, scalable frontend solutions.",
      status: "active"
    },
    {
      year: "Sep 2025 – Dec 2025",
      title: "Junior Full Stack Developer",
      company: "Nextal Solutions",
      location: "Lahore, Pakistan",
      description: "Developed and maintained web applications using Next.js, React.js, JavaScript, Tailwind CSS, and Bootstrap. Worked on frontend–backend integration, API consumption, and debugging. Collaborated with senior developers to deliver responsive UI.",
      status: "completed"
    },
    {
      year: "Mar 2025 – Jul 2025",
      title: "Junior Frontend Developer",
      company: "Freelance Company",
      location: "Remote",
      description: "Worked on a cybersecurity service purchasing and booking platform with an admin dashboard. Implemented UI using React, JavaScript, Tailwind CSS, Bootstrap, and Ant Design. Assisted in UI design improvements and responsive component development.",
      status: "completed"
    },
  ];

 

  return (
    <section id="experience" className="py-24 px-6 sm:px-8 lg:px-12 relative lendex-pattern">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="text-emerald-400">Experience</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Professional journey in web development and software engineering
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-slate-600 to-transparent hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card 
                  key={index}
                  className="card-gradient card-hover border-0 relative overflow-hidden ml-0 md:ml-20"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-20 top-8 w-4 h-4 rounded-full hidden md:block ${
                    exp.status === 'active' 
                      ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50 animate-pulse' 
                      : 'bg-slate-500'
                  }`}></div>
                  
                  {/* Timeline Icon */}
                  <div className="absolute -left-24 top-6 w-8 h-8 icon-gradient-1 rounded-lg hidden md:flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>

                  <CardContent className="p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-400/10 rounded-full mb-3">
                          {exp.year}
                        </span>
                        <h3 className="text-xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-slate-400 font-medium flex items-center gap-2 mt-1">
                          <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full"></span>
                          {exp.company} • {exp.location}
                        </p>
                      </div>
                      {exp.status === 'active' && (
                        <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>
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
