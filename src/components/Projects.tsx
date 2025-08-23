
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Booking Platform",
      description: "A cyber security company website designed to book cyber product services. Architecture based on React.js modern components with React, TypeScript, Redux, Tailwind CSS, BootStrap.",
      image: "/face-swap.png",
      liveUrl: "https://github.com/Alihusnain1489",
      githubUrl: "https://github.com/Alihusnain1489",
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Bootstrap"],
      category: "Security Platform"
    },
    {
      id: 2,
      title: "Ecommerce Website",
      description: "Developed and deployed a responsive wholesale e-commerce platform using React, Tailwind CSS, and Next.js. Implemented dynamic product listings, category filters, and clean, mobile-friendly UI for seamless user experience.",
      image: "/loopholedefender.png",
      liveUrl: "https://alif-threads.vercel.app/",
      githubUrl: "https://github.com/Alihusnain1489",
      technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      category: "E-commerce Platform"
    },
    {
      id: 3,
      title: "Professional Portfolio",
      description: "Designed and built a personal portfolio website using React and Tailwind CSS to professionally highlight development projects and skills. Integrated smooth scroll, responsive layout, project galleries, and animated sections.",
      image: "/my.png",
      liveUrl: "https://alihusnain11.vercel.app",
      githubUrl: "https://github.com/Alihusnain1489",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "Portfolio"
    },
    {
      id: 4,
      title: "Employee Management System",
      description: "Built a full-stack Employee Management system using React, Tailwind CSS for the frontend, and Spring Boot REST API for the backend. Implemented full CRUD operations with real-time UI updates and responsive design for desktop and mobile.",
      image: "/security.png",
      liveUrl: "https://github.com/Alihusnain1489",
      githubUrl: "https://github.com/Alihusnain1489",
      technologies: ["React", "Spring Boot", "Java", "MySQL", "Tailwind CSS"],
      category: "Full Stack"
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 sm:px-8 lg:px-12 relative lendex-pattern">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Selected projects showcasing modern web development solutions and creative designs
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="card-gradient card-hover border-0 group overflow-hidden relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="p-0 relative">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 text-xs bg-emerald-500 text-white font-medium tracking-wide rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="gradient-emerald text-white rounded-full px-6 hover:scale-105 transition-transform duration-300 shadow-lg"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live
                      </Button>
                      {project.githubUrl !== "#" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/90 border-white text-slate-900 rounded-full hover:scale-105 transition-transform duration-300"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8 relative z-10">
                <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs text-slate-400 border border-slate-600 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
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

export default Projects;
