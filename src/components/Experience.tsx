import { ArrowDownRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      n: "01",
      year: "Mar 2026 – Present",
      title: "Full Stack Engineer",
      company: "LUXKODE",
      location: "Aberdeen, UK · Remote",
      bullets: [
        "Building scalable, high-performance web apps and digital solutions.",
        "Shipping full-stack features with React, Next.js and Python.",
        "Delivering agentic AI and full-stack solutions across client projects.",
      ],
      active: true,
    },
    {
      n: "02",
      year: "Jan 2026 – Present",
      title: "Full Stack Engineer (Freelance)",
      company: "Fiverr",
      location: "Remote",
      bullets: [
        "Custom web apps, e-commerce platforms and AI-powered automations.",
        "End-to-end delivery with strong client communication and on-time shipping.",
      ],
      active: true,
    },
    {
      n: "03",
      year: "Sep 2025 – Dec 2025",
      title: "Junior Frontend Developer",
      company: "Nextal Solutions",
      location: "Lahore, Pakistan",
      bullets: [
        "Built and maintained apps in Next.js, React, Tailwind CSS and Bootstrap.",
        "Owned frontend–backend integration, API consumption and debugging.",
      ],
    },
    {
      n: "04",
      year: "Mar 2025 – Jul 2025",
      title: "Junior Frontend Developer",
      company: "Freelance Company",
      location: "Remote",
      bullets: [
        "Cybersecurity service booking platform with admin dashboard.",
        "UI in React, Tailwind CSS, Bootstrap and Ant Design.",
      ],
    },
    {
      n: "05",
      year: "Oct 2021 – Feb 2025",
      title: "Cash Officer",
      company: "Bank Al Habib Limited",
      location: "Pakistan",
      bullets: [
        "Managed daily cash operations, deposits, withdrawals and balancing.",
        "Ensured AML compliance and prepared daily cash reports.",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow mb-6">Tenure</p>
            <h2 className="font-playfair text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              5+ years across finance, freelance and full-stack engineering
            </h2>
          </div>
          <p className="text-foreground/70 max-w-md lg:justify-self-end">
            A career built on operational precision at a leading bank, then re-forged
            through freelance and product engineering across the UK and remote teams.
          </p>
        </div>

        {/* Ink-block timeline — echoing the Hilton "8 years at Hilton" cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((e, i) => (
            <article
              key={e.n}
              className={`relative p-8 lg:p-10 ${
                i % 2 === 0 ? "ink-block" : "bg-secondary text-foreground"
              } ${i % 3 === 1 ? "lg:translate-y-8" : ""}`}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className={`text-[10px] uppercase tracking-[0.22em] ${i % 2 === 0 ? "text-white/60" : "text-foreground/60"}`}>
                    {e.year}
                  </p>
                  <h3 className="mt-3 font-playfair text-2xl leading-tight">{e.title}</h3>
                  <p className={`mt-1 text-sm ${i % 2 === 0 ? "text-white/70" : "text-foreground/70"}`}>
                    {e.company} · {e.location}
                  </p>
                </div>
                <span className={`font-playfair text-2xl ${i % 2 === 0 ? "text-white/50" : "text-foreground/40"}`}>
                  {e.n}
                </span>
              </div>

              <ul className={`mt-6 space-y-2 text-sm leading-relaxed ${i % 2 === 0 ? "text-white/80" : "text-foreground/75"}`}>
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 inline-block h-1 w-3 flex-shrink-0 bg-current opacity-60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {e.active && (
                <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--coral))] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> Current
                </span>
              )}

              <ArrowDownRight className={`mt-8 h-5 w-5 ${i % 2 === 0 ? "text-white/60" : "text-foreground/50"}`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
