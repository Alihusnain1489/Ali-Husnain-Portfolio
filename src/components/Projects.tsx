"use client";

import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Booking Platform",
      description:
        "A cyber security company website designed to book cyber product services. Architecture based on React.js modern components with React, TypeScript, Redux, Tailwind CSS, BootStrap.",
      image: "/loopholedefender.png",
      liveUrl: "https://loophole-defender.vercel.app/", // Replace with actual live URL
      githubUrl: "https://github.com/Alihusnain1489/booking-platform", // Replace with actual repo URL
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Bootstrap"],
      category: "Security Platform",
    },
    {
      id: 2,
      title: "Ecommerce Website",
      description:
        "Developed and deployed a responsive wholesale e-commerce platform using React, Tailwind CSS, and Next.js. Implemented dynamic product listings, category filters, and clean, mobile-friendly UI for seamless user experience.",
      image: "/my.png",
      liveUrl: "https://alif-threads.vercel.app/",
      githubUrl: "https://github.com/Alihusnain1489/alif-threads", // Replace with actual repo URL
      technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      category: "E-commerce Platform",
    },
    {
      id: 3,
      title: "Next.js Portfolio",
      description:
        "This is an ongoing project.I am building this project using Next.js, React.js, Tailwind-css And for managing state redux-toolkit .",
      image: "/my1.png",
      liveUrl: "https://ali-husnain-nextjs.vercel.app/",
      githubUrl: "https://github.com/Alihusnain1489/Next.js-Portfolio", // Replace with actual repo URL
      technologies: ["Next.js", "React.js", "Framer Motion", "Tailwind"],
      category: "Portfolio",
    },
     {
      id: 4,
      title: "Security Company",
      description:
        "This is an ongoing project.I am building this project using Loveable an AI tool for Front-end .",
      image: "/security.png/",
      liveUrl: "https://lahore-security.vercel.app/",
      githubUrl: "https://github.com/Alihusnain1489/lahore-security", // Replace with actual repo URL
      technologies: ["Next.js", "React.js", "Framer Motion", "Tailwind"],
      category: "Company",
    },
  ];

  // Simple working link handler
  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

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
                    alt={`Screenshot of ${project.title}`}
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

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs text-slate-400 border border-slate-600 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Links (optional) */}
                <div className="flex gap-3 mt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-300 text-sm font-medium"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-slate-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      Source Code
                    </a>
                  )}
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
