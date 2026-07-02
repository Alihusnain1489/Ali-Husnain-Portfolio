import { ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Full Stack Web Engineering",
      description:
        "Production Next.js and React applications with performant APIs, clean architecture, SEO and Core Web Vitals baked in.",
      image:
        "https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=900&h=1100&fit=crop",
      tag: "Next.js · React · Node.js",
    },
    {
      title: "Agentic AI &amp; Automation",
      description:
        "LangChain, LangGraph and RAG systems that turn documents, APIs and CRMs into intelligent workflows and copilots.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=1100&fit=crop",
      tag: "LangGraph · RAG · Python",
    },
    {
      title: "E-commerce Platforms",
      description:
        "Custom storefronts, ordering flows and admin dashboards — from Fruity Dubai Delights to wholesale marketplaces.",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&h=1100&fit=crop",
      tag: "Supabase · Stripe · Tailwind",
    },
    {
      title: "SaaS Landing &amp; Marketing Sites",
      description:
        "High-converting landing platforms optimized for performance, SEO and mobile — Manzio Clarity style.",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&h=1100&fit=crop",
      tag: "Framer Motion · SEO · CRO",
    },
    {
      title: "Growth &amp; Lead Generation",
      description:
        "Meta &amp; Google Ads campaigns, Apollo.io outreach and HubSpot pipelines wired straight into your product.",
      image:
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&h=1100&fit=crop",
      tag: "Meta Ads · Apollo · HubSpot",
    },
    {
      title: "DevOps &amp; Cloud Delivery",
      description:
        "Dockerized services, GitHub Actions CI/CD and deployments to AWS, Vercel and Netlify with monitoring.",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=900&h=1100&fit=crop",
      tag: "Docker · AWS · Vercel",
    },
  ];

  return (
    <section id="services" className="bg-[hsl(var(--cream-warm))] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-6">Services</p>
            <h2 className="font-playfair text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl max-w-3xl">
              What I build for clients and product teams
            </h2>
          </div>
          <p className="max-w-md text-foreground/70">
            End-to-end delivery — from architecture and design to launch, growth
            and iteration. Pick a lane below, or combine several.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group editorial-card overflow-hidden bg-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="location-pill absolute left-4 top-4" dangerouslySetInnerHTML={{ __html: s.tag }} />
              </div>
              <div className="p-6">
                <h3
                  className="font-playfair text-2xl text-foreground"
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  className="mt-3 text-sm leading-relaxed text-foreground/70"
                  dangerouslySetInnerHTML={{ __html: s.description }}
                />
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-foreground">
                  Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
