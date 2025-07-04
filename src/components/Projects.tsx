
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
      category: "UI & UX Design"
    },
    {
      id: 2,
      title: "Wholesale Threads Bazaar",
      description: "Wholesale clothing marketplace with advanced filtering and product management features.",
      image: "/my.png",
      liveUrl: "https://wholesale-threads-bazaar.vercel.app/",
      githubUrl: "#",
      technologies: ["React", "JavaScript", "CSS3"],
      category: "Branding"
    },
    {
      id: 3,
      title: "Zaheer Sons Deals Shop",
      description: "E-commerce platform for deals and shopping with modern UI design and responsive layout.",
      image: "/zsh.png",
      liveUrl: "https://zaheer-sons-deals-shop.vercel.app/",
      githubUrl: "#",
      technologies: ["React", "Tailwind CSS", "Vercel"],
      category: "Graphic Design"
    },
    {
      id: 4,
      title: "Alif Technologies",
      description: "Corporate technology website showcasing services and solutions with professional design.",
      image: "/alif.png",
      liveUrl: "https://alihusnain1489.github.io/Alif-Technologies/",
      githubUrl: "https://github.com/Alihusnain1489/Alif-Technologies",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      category: "Web Design"
    },
  ];

  const categories = ["All", "UI & UX Design", "Branding", "Graphic Design", "Web Design"];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-400/10 text-green-400 rounded-full text-sm font-medium border border-green-400/20 mb-4 animate-scale-in">
            SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            <span className="text-green-400">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in delay-200">
            A collection of projects that demonstrate my skills and passion for creating exceptional digital experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0 
                  ? 'bg-green-400 text-gray-900' 
                  : 'bg-gray-800 text-gray-300 hover:bg-green-400/10 hover:text-green-400 border border-gray-700 hover:border-green-400/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-gray-800/50 border-gray-700 hover:border-green-400/30 transition-all duration-500 group overflow-hidden transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs bg-green-400/90 text-gray-900 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      className="bg-green-400 hover:bg-green-500 text-gray-900"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    {project.githubUrl !== "#" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-green-400 text-green-400 hover:bg-green-400/10"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-green-400/10 text-green-400 rounded-full border border-green-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-gray-900 font-semibold transform hover:scale-105 transition-all duration-300 px-8 py-3"
          >
            VIEW MORE PROJECTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
