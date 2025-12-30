"use client";

import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Nextal Pest Control",
      description:
        "Built a complete service platform using Next.js and Tailwind CSS. Developed admin dashboard for bookings, services, users, and role management. Optimized SEO, performance, and mobile responsiveness.",
      image: "/lovable-uploads/f1fc6b74-a80c-449c-b59b-db02b8eec7d2.png",
      liveUrl: "https://nextalpestcontrol.com/",
      githubUrl: "https://github.com/Alihusnain1489", 
      technologies: ["Next.js", "Tailwind CSS", "Admin Dashboard", "SEO"],
      category: "Service Platform",
    },
    {
      id: 2,
      title: "Loophole Defender",
      description:
        "Cybersecurity service booking platform based on modern React.js architecture. Frontend built with React, Framer Motion for animations, and Material UI for component design. Implemented smooth transitions and responsive UI.",
      image: "/loopholedefender.png",
      liveUrl: "https://loophole-defender.vercel.app/",
      githubUrl: "https://github.com/Alihusnain1489/booking-platform", 
      technologies: ["React.js", "Framer Motion", "Material UI", "TypeScript"],
      category: "Security Platform",
    },
    {
      id: 3,
      title: "Solar House (E-commerce)",
      description:
        "Developed and deployed a responsive wholesale e-commerce platform using Next.js and Tailwind CSS. Implemented product listings, filters, and mobile-friendly UI with server-side rendering.",
      image: "/wholesale.png",
      liveUrl: "https://wholesale-threads.vercel.app/",
      githubUrl: "https://github.com/Alihusnain1489/alif-threads", 
      technologies: ["Next.js", "Tailwind CSS", "TanStack Query", "SSR"],
      category: "E-commerce Platform",
    },
    {
      id: 4,
      title: "Manzio",
      description:
        "A Next.js project using server-side rendering, Tailwind CSS, and SWR for data fetching. Built for an IT services company with modern design.",
      image: "/manzio.png",
      liveUrl: "https://manzio.vercel.app/", 
      githubUrl: "https://github.com/Alihusnain1489/manzio", 
      technologies: ["Next.js", "React.js", "SWR", "Tailwind CSS"],
      category: "IT Services",
    },
    {
      id: 5,
      title: "Next.js Portfolio",
      description:
        "Personal portfolio built with Next.js, React.js, and Framer Motion for smooth animations. Showcases projects and skills with modern design.",
      image: "/my1.png",
      liveUrl: "https://ali-husnain-nextjs.vercel.app/",
      githubUrl: "https://github.com/Alihusnain1489/Next.js-Portfolio",
      technologies: ["Next.js", "React.js", "Framer Motion", "Tailwind"],
      category: "Portfolio",
    },
  ];


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
