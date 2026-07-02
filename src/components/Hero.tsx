import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import CV from "@/components/ui/Ali Husnain.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-2 text-sm text-foreground/60 animate-fade-in">
          <a href="/" className="underline underline-offset-4 hover:text-foreground">Home</a>
          <span>/</span>
          <span>Full Stack &amp; AI Engineer</span>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20 items-start">
          {/* Left — Editorial headline */}
          <div className="animate-fade-up">
            <p className="eyebrow mb-8">Ali Husnain — Portfolio</p>
            <h1 className="font-playfair text-[46px] leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[76px]">
              Building fast, elegant<br/>
              web &amp; <span className="italic text-[hsl(var(--coral))]">AI-powered</span><br/>
              products
            </h1>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-foreground/70">
              Full Stack &amp; AI Engineer working across Next.js, React and Python.
              I ship performant SaaS platforms, e-commerce experiences and agentic AI
              workflows for teams in the UK, Middle East and beyond.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-ink">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={CV} target="_blank" rel="noopener noreferrer" className="btn-outline-ink">
                Download CV <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-foreground/60">
              <a href="https://github.com/Alihusnain1489" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ali-husnain-790929252/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="mailto:mr.alihusnain11@gmail.com" className="flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>

          {/* Right — Arched portrait with location pill */}
          <div className="relative animate-fade-in delay-200">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden arch-top bg-secondary aspect-[3/4] shadow-[var(--shadow-editorial)]">
                <img
                  src="/lovable-uploads/b643cda2-a597-4516-8e97-273dcd1c9351.png"
                  alt="Ali Husnain — Full Stack & AI Engineer"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute left-4 bottom-4 location-pill">
                  <MapPin className="h-3.5 w-3.5" /> Lahore, Pakistan · Remote
                </div>
              </div>

              {/* Little floating stat block, echoing tenure card */}
              <div className="absolute -left-6 -bottom-10 hidden sm:block">
                <div className="ink-block px-5 py-4 shadow-[var(--shadow-editorial)]">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/70">Experience</p>
                  <p className="mt-1 font-playfair text-2xl">5+ years across finance &amp; tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
