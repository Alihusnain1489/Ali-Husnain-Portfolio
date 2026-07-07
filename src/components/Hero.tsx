import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import CV from "@/components/ui/Ali Husnain.pdf";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-background flex items-center pt-28 pb-16 sm:pt-32 lg:pt-24 lg:pb-0"
    >
      {/* Ambient background */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--coral)/0.28), transparent 65%)" }}
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--ink)/0.18), transparent 70%)" }}
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--ink)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--ink)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20 items-center"
        >
          {/* Left */}
          <div>
            <motion.div variants={item} className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-foreground/60">
              <a href="/" className="underline underline-offset-4 hover:text-foreground">Home</a>
              <span>/</span>
              <span>Full Stack &amp; AI Engineer</span>
            </motion.div>

            <motion.p variants={item} className="eyebrow mb-6 sm:mb-8 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--coral))]" />
              Ali Husnain — Portfolio
            </motion.p>

            <motion.h1
              variants={item}
              className="font-playfair uppercase text-[40px] leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-[78px] xl:text-[88px]"
            >
              <span className="text-primary block">Revolutionizing</span>
              Web &amp; <span className="text-gradient">AI-Powered</span><br />
              Products
            </motion.h1>


            <motion.p variants={item} className="mt-6 sm:mt-8 max-w-lg text-sm sm:text-base leading-relaxed text-foreground/70">
              Full Stack &amp; AI Engineer working across Next.js, React and Python.
              I ship performant SaaS platforms, e-commerce experiences and agentic AI
              workflows for teams in the UK, Middle East and beyond.
            </motion.p>

            <motion.div variants={item} className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <motion.a
                href="#contact"
                className="btn-ink"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Start a project <ArrowUpRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-ink"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Download CV <Download className="h-4 w-4" />
              </motion.a>
            </motion.div>

            <motion.div variants={item} className="mt-10 sm:mt-12 flex flex-wrap items-center gap-5 sm:gap-6 text-sm text-foreground/60">
              <a href="https://github.com/Alihusnain1489" target="_blank" rel="noreferrer" className="group flex items-center gap-2 hover:text-foreground transition">
                <Github className="h-4 w-4 transition group-hover:-translate-y-0.5" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ali-husnain-790929252/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 hover:text-foreground transition">
                <Linkedin className="h-4 w-4 transition group-hover:-translate-y-0.5" /> LinkedIn
              </a>
              <a href="mailto:mr.alihusnain11@gmail.com" className="group flex items-center gap-2 hover:text-foreground transition">
                <Mail className="h-4 w-4 transition group-hover:-translate-y-0.5" /> Email
              </a>
            </motion.div>
          </div>

          {/* Right — portrait */}
          <motion.div variants={item} className="relative">
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <motion.div
                className="relative overflow-hidden arch-top bg-secondary aspect-[3/4] shadow-[var(--shadow-editorial)]"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src="/lovable-uploads/b643cda2-a597-4516-8e97-273dcd1c9351.png"
                  alt="Ali Husnain — Full Stack & AI Engineer"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute left-3 bottom-3 sm:left-4 sm:bottom-4 location-pill">
                  <MapPin className="h-3.5 w-3.5" /> Lahore · Remote
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-4 -bottom-8 sm:-left-6 sm:-bottom-10 hidden sm:block"
                initial={{ opacity: 0, y: 20, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <motion.div
                  className="ink-block px-4 py-3 sm:px-5 sm:py-4 shadow-[var(--shadow-editorial)]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/70">Experience</p>
                  <p className="mt-1 font-playfair text-xl sm:text-2xl">5+ years · finance &amp; tech</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -right-3 top-6 hidden sm:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <div className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-[var(--shadow-soft)]">
                  ✦ Available for Q3
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          aria-label="Scroll to about"
          className="absolute left-1/2 bottom-6 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-foreground/60 hover:text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          Scroll
          <motion.span
            className="block h-8 w-px bg-foreground/40"
            animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
