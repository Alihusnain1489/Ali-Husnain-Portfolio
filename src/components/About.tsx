import { MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <p className="eyebrow mb-4 sm:mb-6">About</p>
        <div className="grid gap-8 sm:gap-16 lg:grid-cols-[1.2fr_1fr] items-start">
          <h2 className="font-playfair text-3xl leading-[1.1] text-foreground sm:text-5xl sm:leading-[1.05] lg:text-6xl">
            A full stack engineer shipping <span className="italic text-[hsl(var(--coral))]">production</span> web
            and AI systems from Lahore to the world.
          </h2>

          <div className="space-y-5 sm:space-y-6 text-base leading-relaxed text-foreground/75">
            <p>
              I'm Ali Husnain — a Full Stack &amp; AI Engineer currently building
              scalable web platforms at LUXKODE (Aberdeen, UK · Remote) and delivering
              client work as a top freelancer on Fiverr.
            </p>
            <p>
              My stack centers on Next.js, React, Python and modern cloud tooling. I
              specialize in high-converting SaaS interfaces, e-commerce platforms and
              agentic AI workflows using LangChain, LangGraph and RAG.
            </p>
            <p>
              Before tech, I spent 3+ years as a Cash Officer at Bank Al Habib Limited —
              which is where I learned the operational discipline that keeps my code shipping.
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-12 sm:mt-20 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border lg:grid-cols-4">
          {[
            { k: "5+", v: "Years professional experience" },
            { k: "20+", v: "Web & AI projects shipped" },
            { k: "10+", v: "International clients" },
            { k: "2", v: "Bachelor's degrees" },
          ].map((s) => (
            <div key={s.v} className="bg-background p-5 sm:p-8">
              <p className="font-playfair text-3xl sm:text-4xl text-foreground">{s.k}</p>
              <p className="mt-2 text-sm text-foreground/60">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;