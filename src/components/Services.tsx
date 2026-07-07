import {
  ArrowUpRight,
  Code2,
  Bot,
  ShoppingBag,
  Rocket,
  TrendingUp,
  Cloud,
} from "lucide-react";

const services = [
  {
    n: "01",
    title: "Full stack web engineering",
    icon: Code2,
    tag: "Next.js · React · Node.js",
  },
  {
    n: "02",
    title: "Agentic AI & automation",
    icon: Bot,
    tag: "LangGraph · RAG · Python",
  },
  {
    n: "03",
    title: "E-commerce platforms",
    icon: ShoppingBag,
    tag: "Supabase · Stripe · Tailwind",
  },
  {
    n: "04",
    title: "SaaS landing & marketing sites",
    icon: Rocket,
    tag: "Framer Motion · SEO · CRO",
  },
  {
    n: "05",
    title: "Growth & lead generation",
    icon: TrendingUp,
    tag: "Meta Ads · Apollo · HubSpot",
  },
  {
    n: "06",
    title: "DevOps & cloud delivery",
    icon: Cloud,
    tag: "Docker · AWS · Vercel",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col justify-center py-20 lg:h-screen lg:py-12"
      style={{ backgroundColor: "#0A0E17" }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-12">
        <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p
              className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "#5B9BFF" }}
            >
              <span
                className="h-[2px] w-8"
                style={{ background: "linear-gradient(90deg,#2F6FED,#5B9BFF)" }}
              />
              Services
            </p>
            <h2
              className="max-w-xl text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: "#F5F7FA" }}
            >
              What I{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#2F6FED,#7BB0FF)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                build
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed" style={{ color: "#9CA6B8" }}>
            End-to-end delivery — from architecture to launch, growth and
            iteration. Pick a lane, or combine several.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-3"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.n}
                className="group relative flex flex-col gap-4 p-6 transition-colors duration-300 hover:bg-white/[0.03]"
                style={{ backgroundColor: "#121826" }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ background: "linear-gradient(135deg,#2F6FED,#5B9BFF)" }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "#F5F7FA" }} strokeWidth={2} />
                  </div>
                  <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.2)" }}>
                    {s.n}
                  </span>
                </div>

                <h3 className="text-base font-bold leading-snug sm:text-lg" style={{ color: "#F5F7FA" }}>
                  {s.title}
                </h3>

                <div className="mt-auto flex items-center justify-between gap-3 pt-1">
                  <span
                    className="rounded-full px-2.5 py-1 text-[10px] font-medium tracking-wide"
                    style={{
                      backgroundColor: "rgba(91,155,255,0.12)",
                      color: "#7BB0FF",
                    }}
                  >
                    {s.tag}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ color: "#5B9BFF" }}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;