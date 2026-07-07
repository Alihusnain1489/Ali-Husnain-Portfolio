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
    
  ];

  return (
    <section id="skills" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-6">
            Capabilities
          </p>
          <h2 className="font-extrabold uppercase leading-[1.05] text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
            <span className="text-white">A modern stack for shipping</span>{" "}
            <span className="text-blue-500">product</span>
            <span className="text-white">, not just prototypes</span>
          </h2>
        </div>

        <div className="grid gap-px bg-white/10 overflow-hidden rounded-2xl border border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="bg-white/[0.03] p-8 lg:p-10 transition hover:bg-white/[0.05]"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-extrabold text-xl text-white">{g.title}</h3>
                <span className="text-xs font-semibold text-blue-400">0{i + 1}</span>
              </div>
              <div className="my-5 h-px w-full bg-white/10" />
              <ul className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 hover:border-blue-500/50 hover:text-blue-300 transition"
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