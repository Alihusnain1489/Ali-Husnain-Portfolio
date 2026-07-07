import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Manzio Clarity",
    tag: "SaaS Landing Platform",
    description:
      "Modern, high-converting SaaS landing platform built with Next.js and Tailwind CSS. Optimized for performance, SEO and full mobile responsiveness.",
    image: "/manzio.png",
    url: "https://manzio.vercel.app/",
    stack: ["Next.js", "Tailwind CSS", "SEO"],
  },
  {
    title: "Nextal Pest Control",
    tag: "Service Booking Platform",
    description:
      "Complete service platform with admin dashboard for bookings, services, users and role management. Optimized SEO and mobile responsiveness.",
    image: "/sc1.png",
    url: "https://nextal-pest-website.vercel.app/",
    stack: ["Next.js", "Tailwind CSS", "Admin Dashboard"],
  },
  {
    title: "Loophole Defender",
    tag: "Cybersecurity Platform",
    description:
      "Cybersecurity service booking platform on modern React.js architecture. Framer Motion animations and Material UI components.",
    image: "/loopholedefender.png",
    url: "https://loophole-defender.vercel.app/",
    stack: ["React", "Framer Motion", "Material UI"],
  },
  {
    title: "Fruity Dubai Delights",
    tag: "E-commerce · Dubai",
    description:
      "E-commerce and ordering platform for a Dubai-based food brand. Product listings, mobile-friendly storefront and streamlined ordering flow.",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1400&h=900&fit=crop",
    url: "#",
    stack: ["Next.js", "E-commerce", "Mobile-first"],
  },
  {
    title: "A-Ryan",
    tag: "Business Portfolio",
    description:
      "Responsive business/portfolio website built with React and Next.js. Clean component-based UI with smooth, animated user experience.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop",
    url: "#",
    stack: ["React", "Next.js", "Animation"],
  },
  {
    title: "Global Drive Permit",
    tag: "Booking & Forms",
    description:
      "International driving permit application and booking platform. Multi-step form flow with validation and a responsive, user-friendly interface.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1400&h=900&fit=crop",
    url: "#",
    stack: ["Next.js", "Multi-step forms", "Validation"],
  },
  {
    title: "Wholesale E-commerce",
    tag: "E-commerce Platform",
    description:
      "Responsive wholesale e-commerce platform using React, Node.js, Tailwind CSS and Supabase. Product listings, filters and order booking.",
    image: "/wholesale.png",
    url: "https://wholesale-threads.vercel.app/",
    stack: ["React", "Node.js", "Supabase"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32" style={{ backgroundColor: "#0A0E17" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p
              className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "#5B9BFF" }}
            >
              <span
                className="h-[2px] w-8"
                style={{ background: "linear-gradient(90deg,#2F6FED,#5B9BFF)" }}
              />
              Selected work
            </p>
            <h2
              className="max-w-3xl text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: "#F5F7FA" }}
            >
              Recent{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#2F6FED,#7BB0FF)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                projects
              </span>{" "}
              shipped for clients &amp; product teams
            </h2>
          </div>
          <a
            href="https://github.com/Alihusnain1489"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 lg:self-auto"
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#F5F7FA",
            }}
          >
            View all on GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: "#121826",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="relative w-full overflow-hidden" style={{ backgroundColor: "#0D1119" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-auto w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <span
                  className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-medium tracking-wide"
                  style={{
                    backgroundColor: "rgba(10,14,23,0.75)",
                    color: "#7BB0FF",
                    border: "1px solid rgba(91,155,255,0.3)",
                  }}
                >
                  {p.tag}
                </span>
                <span
                  className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(135deg,#2F6FED,#5B9BFF)" }}
                >
                  <ArrowUpRight className="h-5 w-5" style={{ color: "#F5F7FA" }} />
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold" style={{ color: "#F5F7FA" }}>
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#9CA6B8" }}>
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full px-2.5 py-1 text-[10px] font-medium tracking-wide"
                      style={{
                        backgroundColor: "rgba(91,155,255,0.12)",
                        color: "#7BB0FF",
                      }}
                    >
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