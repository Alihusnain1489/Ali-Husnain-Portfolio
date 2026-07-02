const Skills = () => {
  const groups = [
    {
      title: "Libraries / Frameworks",
      items: ["React.js", "Next.js", "Redux Toolkit", "React Router", "TanStack Query", "Tailwind CSS", "Bootstrap", "Ant Design", "Material UI", "Framer Motion"],
    },
    {
      title: "Programming",
      items: ["JavaScript", "Python", "HTML", "CSS", "SQL", "Node.js"],
    },
    {
      title: "AI / Automation",
      items: ["Agentic Workflows", "RAG", "LangChain", "LangGraph", "AI Automation", "Image Generation"],
    },
    {
      title: "Databases",
      items: ["MongoDB", "MySQL", "SQLite", "Supabase"],
    },
    {
      title: "DevOps / CI-CD",
      items: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Netlify"],
    },
    {
      title: "Marketing / Ads",
      items: ["Meta Ads", "Google Ads", "Lead Generation", "Canva", "Video Editing"],
    },
    {
      title: "Business Platforms",
      items: ["Fiverr", "Upwork", "Apollo.io", "LinkedIn Sales Navigator", "HubSpot CRM"],
    },
  ];

  return (
    <section id="skills" className="bg-[hsl(var(--cream-warm))] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16">
          <p className="eyebrow mb-6">Capabilities</p>
          <h2 className="font-playfair text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl max-w-4xl">
            A modern stack for shipping <span className="italic text-[hsl(var(--coral))]">product</span>, not just prototypes
          </h2>
        </div>

        <div className="grid gap-px bg-border overflow-hidden border border-border md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <div key={g.title} className="bg-background p-8 lg:p-10">
              <div className="flex items-baseline justify-between">
                <h3 className="font-playfair text-2xl text-foreground">{g.title}</h3>
                <span className="text-xs text-foreground/40">0{i + 1}</span>
              </div>
              <div className="hairline my-5" />
              <ul className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
