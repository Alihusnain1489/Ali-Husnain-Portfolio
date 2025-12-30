import { Code, Database, Cloud, Wrench, Server, GitBranch } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Libraries / Frameworks",
      icon: Code,
      gradient: "icon-gradient-1",
      skills: ["React.js", "Next.js", "Redux Toolkit", "React Router", "TanStack Query", "Tailwind CSS", "Bootstrap", "Ant Design", "Spring Boot"]
    },
    {
      title: "Programming Languages",
      icon: Server,
      gradient: "icon-gradient-2",
      skills: ["JavaScript (Proficient)", "TypeScript (Proficient)", "Java (Familiar)", "HTML5", "CSS3", "SQL"]
    },
    {
      title: "DevOps / CI-CD",
      icon: GitBranch,
      gradient: "icon-gradient-3",
      skills: ["GitHub Actions", "CI/CD Pipelines", "Build & Deployment Automation"]
    },
    {
      title: "Cloud / Platforms",
      icon: Cloud,
      gradient: "icon-gradient-4",
      skills: ["AWS (EC2, S3 - basic)", "Vercel", "Netlify"]
    },
    {
      title: "Tools & Databases",
      icon: Database,
      gradient: "icon-gradient-5",
      skills: ["Git", "GitHub", "Postman", "MySQL", "MongoDB", "SQLite"]
    },
    {
      title: "Development Practices",
      icon: Wrench,
      gradient: "icon-gradient-6",
      skills: ["RESTful APIs", "Responsive Design", "SEO Optimization", "Agile Methodology"]
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 sm:px-8 lg:px-12 relative lendex-pattern">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="text-emerald-400">Skills</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Technical expertise and tools I use to build modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="card-gradient card-hover border-0 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${category.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/50 border border-slate-700 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
