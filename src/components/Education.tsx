import { GraduationCap } from "lucide-react";

const Education = () => {
  const items = [
    {
      degree: "Bachelor's in Information Technology",
      institution: "Virtual University of Pakistan",
      year: "2024",
      location: "Lahore, Pakistan",
      description:
        "Software engineering, web technologies, databases and information systems.",
    },
    {
      degree: "Bachelor's in Arts",
      institution: "University of Punjab",
      year: "2019",
      location: "Lahore, Pakistan",
      description:
        "Broad-based degree that sharpened communication, research and analytical thinking.",
    },
  ];

  const focus = [
    "Software Engineering",
    "Modern Web Development",
    "Database Systems",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "AI & Automation",
    "System Analysis & Design",
    "Applied Communication",
  ];

  return (
    <section id="education" className="bg-[hsl(var(--cream-warm))] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow mb-6">Education</p>
            <h2 className="font-playfair text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Two degrees, one continuous learning practice
            </h2>
          </div>
          <p className="text-foreground/70 max-w-md lg:justify-self-end">
            Formal training in IT and the arts, combined with a daily practice of shipping,
            reading and rebuilding.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            {items.map((e, i) => (
              <article key={e.degree} className="editorial-card bg-card p-8 lg:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-foreground text-background">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="eyebrow mb-2">{e.year} · {e.location}</p>
                      <h3 className="font-playfair text-2xl text-foreground">{e.degree}</h3>
                      <p className="mt-1 text-sm text-foreground/70">{e.institution}</p>
                      <p className="mt-4 text-sm leading-relaxed text-foreground/70">{e.description}</p>
                    </div>
                  </div>
                  <span className="font-playfair text-3xl text-foreground/30">0{i + 1}</span>
                </div>
              </article>
            ))}
          </div>

          <aside className="ink-block p-10">
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">Focus areas</p>
            <h3 className="mt-4 font-playfair text-3xl leading-tight">
              What I studied &amp; keep sharpening today
            </h3>
            <div className="hairline my-8 !bg-white/20" />
            <ul className="grid gap-y-3 gap-x-6 sm:grid-cols-2">
              {focus.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--coral))]" /> {f}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Education;
