import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Manzio Clarity",
      tag: "SaaS Landing Platform",
      description: "Modern, high-converting SaaS landing platform built with Next.js and Tailwind CSS. Optimized for performance, SEO and full mobile responsiveness.",
      image: "/manzio.png",
      url: "https://manzio.vercel.app/",
      stack: ["Next.js", "Tailwind CSS", "SEO"],
    },
    {
      title: "Nextal Pest Control",
      tag: "Service Booking Platform",
      description: "Complete service platform with admin dashboard for bookings, services, users and role management. Optimized SEO and mobile responsiveness.",
      image: "/sc1.png",
      url: "https://nextal-pest-website.vercel.app/",
      stack: ["Next.js", "Tailwind CSS", "Admin Dashboard"],
    },
    {
      title: "Loophole Defender",
      tag: "Cybersecurity Platform",
      description: "Cybersecurity service booking platform on modern React.js architecture. Framer Motion animations and Material UI components.",
      image: "/loopholedefender.png",
      url: "https://loophole-defender.vercel.app/",
      stack: ["React", "Framer Motion", "Material UI"],
    },
    {
      title: "Fruity Dubai Delights",
      tag: "E-commerce · Dubai",
      description: "E-commerce and ordering platform for a Dubai-based food brand. Product listings, mobile-friendly storefront and streamlined ordering flow.",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=900&h=700&fit=crop",
      url: "#",
      stack: ["Next.js", "E-commerce", "Mobile-first"],
    },
    {
      title: "A-Ryan",
      tag: "Business Portfolio",
      description: "Responsive business/portfolio website built with React and Next.js. Clean component-based UI with smooth, animated user experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=700&fit=crop",
      url: "#",
      stack: ["React", "Next.js", "Animation"],
    },
    {
      title: "Global Drive Permit",
      tag: "Booking & Forms",
      description: "International driving permit application and booking platform. Multi-step form flow with validation and a responsive, user-friendly interface.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&h=700&fit=crop",
      url: "#",
      stack: ["Next.js", "Multi-step forms", "Validation"],
    },
    {
      title: "Wholesale E-commerce",
      tag: "E-commerce Platform",
      description: "Responsive wholesale e-commerce platform using React, Node.js, Tailwind CSS and Supabase. Product listings, filters and order booking.",
      image: "/wholesale.png",
      url: "https://wholesale-threads.vercel.app/",
      stack: ["React", "Node.js", "Supabase"],
    },
  ];

  return (
    <section id="projects" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-6">Selected Work</p>
            <h2 className="font-playfair text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl max-w-3xl">
              Recent projects shipped for clients and product teams
            </h2>
          </div>
          <a href="https://github.com/Alihusnain1489" target="_blank" rel="noreferrer" className="btn-outline-ink self-start lg:self-auto">
            View all on GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Editorial staggered grid — echoing the 3-portrait Hilton reference */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`group block ${i % 3 === 1 ? "lg:translate-y-12" : ""} ${i % 3 === 2 ? "lg:translate-y-24" : ""}`}
            >
              <div className="relative overflow-hidden bg-secondary aspect-[3/4]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="location-pill absolute left-4 top-4">{p.tag}</span>
                <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center bg-background text-foreground opacity-0 transition group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
              <div className="mt-5">
                <h3 className="font-playfair text-2xl text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] uppercase tracking-wider text-foreground/50">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
