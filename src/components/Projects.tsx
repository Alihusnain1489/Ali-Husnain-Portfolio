
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
      liveUrl: "https://loophole-defender.vercel.app/",
      githubUrl: "#",
      technologies: ["React", "Django", "JavaScript"],
      category: "Security Platform"
    },
    {
      id: 2,
      title: "Alif Threads",
      description: "Wholesale clothing marketplace with advanced filtering and product management features.",
      image: "/my.png",
      liveUrl: "https://alif-threads.vercel.app/",
      githubUrl: "#",
      technologies: ["React", "JavaScript", "CSS3"],
      category: "E-commerce Platform"
    },
    {
      id: 3,
      title: "Guardian Sheild",
      description: "A Security platform for public service company.It is a BOOKING platform for different type of service packages",
      image: "/security.png",
      liveUrl: "https://zaheer-sons-deals-shop.vercel.app/",
      githubUrl: "#",
      technologies: ["React", "Tailwind CSS", "Vercel"],
      category: "Booking PlaTFORM"
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
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative lendex-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 gradient-glow rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 gradient-glow rounded-full opacity-30 animate-pulse-custom"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-6 animate-fade-in">
            Category
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-montserrat animate-fade-in delay-200">
            Selected projects showcasing modern web development solutions and creative designs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="border border-border bg-card hover:shadow-2xl transition-all duration-500 group overflow-hidden hover:-translate-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="p-0 relative">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 text-xs gradient-primary text-white font-medium tracking-wide rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="gradient-primary text-white rounded-full px-6 hover:scale-105 transition-transform duration-300"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live
                      </Button>
                      {project.githubUrl !== "#" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/90 border-white text-foreground rounded-full hover:scale-105 transition-transform duration-300"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <CardTitle className="text-xl font-playfair font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed font-montserrat">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs text-muted-foreground border border-border rounded-full hover:border-primary hover:text-primary transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
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
