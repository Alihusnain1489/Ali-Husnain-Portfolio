import { ArrowDownRight } from "lucide-react";

const experiences = [
  {
    n: "01",
    year: "Mar 2026 – Present",
    title: "Full stack engineer",
    company: "LuxKode · Aberdeen, UK",
    active: true,
  },
  {
    n: "02",
    year: "Jan 2026 – Present",
    title: "Full stack engineer (freelance)",
    company: "Fiverr · Remote",
    active: true,
  },
  {
    n: "03",
    year: "Sep 2025 – Dec 2025",
    title: "Junior frontend developer",
    company: "Nextal Solutions · Lahore",
  },
  {
    n: "04",
    year: "Mar 2025 – Jul 2025",
    title: "Junior frontend developer",
    company: "Freelance company · Remote",
  },
  {
    n: "05",
    year: "Oct 2021 – Feb 2025",
    title: "Cash officer",
    company: "Bank Al Habib Limited",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
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
              Tenure
            </p>
            <h2
              className="max-w-xl text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: "#F5F7FA" }}
            >
              5+ years across{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#2F6FED,#7BB0FF)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                finance & engineering
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed" style={{ color: "#9CA6B8" }}>
            From operational precision at a leading bank to freelance and
            product engineering across the UK and remote teams.
          </p>
        </div>

        <div className="flex flex-col" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {experiences.map((e) => (
            <article
              key={e.n}
              className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:gap-6 sm:py-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* On mobile this row shows year + current badge; at sm+ it flattens into the row via `contents` */}
              <div className="flex items-center justify-between sm:contents">
                <span
                  className="hidden w-8 shrink-0 text-sm font-semibold sm:block"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {e.n}
                </span>

                <span
                  className="text-xs font-semibold uppercase tracking-[0.15em] sm:w-36 sm:shrink-0 sm:font-normal"
                  style={{ color: "#5B9BFF" }}
                >
                  {e.year}
                </span>

                {e.active && (
                  <span
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider sm:hidden"
                    style={{
                      background: "linear-gradient(90deg,#2F6FED,#5B9BFF)",
                      color: "#F5F7FA",
                    }}
                  >
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> Current
                  </span>
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-base font-bold sm:text-lg" style={{ color: "#F5F7FA" }}>
                  {e.title}
                </h3>
                <p className="text-sm" style={{ color: "#9CA6B8" }}>
                  {e.company}
                </p>
              </div>

              <div className="hidden shrink-0 items-center gap-3 sm:flex">
                {e.active && (
                  <span
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      background: "linear-gradient(90deg,#2F6FED,#5B9BFF)",
                      color: "#F5F7FA",
                    }}
                  >
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> Current
                  </span>
                )}
                <ArrowDownRight
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  style={{ color: "#5B9BFF" }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;