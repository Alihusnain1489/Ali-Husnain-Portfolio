
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Loopholedefender",
      description: "Cybersecurity package purchasing platform with modern UI and secure payment integration.",
      image: "/loopholedefender.png",
      liveUrl: "https://lovable.dev/projects/1d42e610-404d-4c8c-9d4c-05f38eca317a",
      githubUrl: "#",
      technologies: ["React", "Django", "JavaScript"],
      category: "Security Platform"
    },
    {
      id: 2,
      title: "Wholesale Threads Bazaar",
      description: "Wholesale clothing marketplace with advanced filtering and product management features.",
      image: "/my.png",
      liveUrl: "https://wholesale-threads-bazaar.vercel.app/",
      githubUrl: "#",
      technologies: ["React", "JavaScript", "CSS3"],
      category: "E-commerce Platform"
    },
    {
      id: 3,
      title: "Zaheer Sons Deals Shop",
      description: "E-commerce platform for deals and shopping with modern UI design and responsive layout.",
      image: "/zsh.png",
      liveUrl: "https://zaheer-sons-deals-shop.vercel.app/",
      githubUrl: "#",
      technologies: ["React", "Tailwind CSS", "Vercel"],
      category: "Online Store"
    },
    {
      id: 4,
      title: "Alif Technologies",
      description: "Corporate technology website showcasing services and solutions with professional design.",
      image: "/alif.png",
      liveUrl: "https://alihusnain1489.github.io/Alif-Technologies/",
      githubUrl: "https://github.com/Alihusnain1489/Alif-Technologies",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      category: "Corporate Website"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
            Recent <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in delay-200">
            Rapid solutions to the most complex business challenges with cooperative process-driven development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-slate-800/50 border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 group overflow-hidden transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-emerald-400 to-green-400 text-slate-900 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold text-white mb-2 group-hover:gradient-to-r from-emerald-400 to-green-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs  text-white rounded-full border border-emerald-500/90 hover:bg-emerald-500 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-emerald-400 to-green-400 hover:gradient-to-r from-emerald-400 to-green-400 text-white transform hover:scale-105 transition-all duration-300"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  {project.githubUrl !== "#" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 transform hover:scale-105 transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
