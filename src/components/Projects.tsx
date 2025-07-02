
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Loopholedefender",
      description: "Cybersecurity package purchasing platform.",
      image: "/loopholedefender.png",
      liveUrl: "https://lovable.dev/projects/1d42e610-404d-4c8c-9d4c-05f38eca317a",
      githubUrl: "#",
      technologies: ["React", "Django", "JavaScript"]
    },
    {
      id: 2,
      title: "Wholesale Threads",
      description: "Wholesale clothing marketplace with advanced filtering and product management features.",
      image: "/my.png",
      liveUrl: "https://wholesale-threads.vercel.app/",
      githubUrl: "#",
      technologies: ["React", "JavaScript", "CSS3"]
    },
    {
      id: 3,
      title: "Alif Technologies",
      description: "Corporate technology website showcasing services and solutions with professional design.",
      image: "/alif.png",
      liveUrl: "https://alihusnain1489.github.io/Alif-Technologies/",
      githubUrl: "https://github.com/Alihusnain1489/Alif-Technologies",
      technologies: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      id: 4,
      title: "Zaheer Sons Deals Shop",
      description: "E-commerce platform for deals and shopping with modern UI design and responsive layout.",
      image: "/zsh.png",
      liveUrl: "https://zaheer-sons-deals-shop.vercel.app/",
      githubUrl: "#",
      technologies: ["React", "Tailwind CSS", "Vercel"]
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Recent <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent web development projects showcasing modern technologies and responsive design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300 mb-4">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  {project.githubUrl !== "#" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
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
