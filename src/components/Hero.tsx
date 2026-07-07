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
      className="relative min-h-screen w-full overflow-hidden bg-background flex items-center pt-24 pb-14 sm:pt-32 sm:pb-16 lg:pt-24 lg:pb-0"
    >
      {/* Ambient background — scaled down on mobile to avoid overflow/clipping issues */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-[280px] w-[280px] rounded-full blur-3xl sm:-top-40 sm:-right-40 sm:h-[520px] sm:w-[520px]"
        style={{ background: "radial-gradient(circle, hsl(var(--coral)/0.28), transparent 65%)" }}
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 h-[220px] w-[220px] rounded-full blur-3xl sm:-bottom-32 sm:-left-32 sm:h-[420px] sm:w-[420px]"
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
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-10 sm:gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20 items-center"
        >
          {/* Left */}
          <div className="text-center lg:text-left">
            <motion.h1
              variants={item}
              className="font-playfair uppercase text-[32px] leading-[1.05] tracking-tight text-foreground sm:text-5xl sm:leading-[1.02] lg:text-[68px] lg:leading-[0.98]"
            >
              <span className="text-primary block">Building</span>
              <span className="block">
                Scalable <span className="text-gradient">Web</span>
              </span>
              <span className="block">Applications</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 sm:mt-8 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed text-foreground/70"
            >
              Full Stack &amp; AI Engineer
            </motion.p>

            <motion.div
              variants={item}
              className="mt-7 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <motion.a
                href="#contact"
                className="btn-ink justify-center w-full sm:w-auto"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Start a project <ArrowUpRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-ink justify-center w-full sm:w-auto"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Download CV <Download className="h-4 w-4" />
              </motion.a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-foreground/60"
            >
              <a
                href="https://github.com/Alihusnain1489"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 hover:text-foreground transition"
              >
                <Github className="h-4 w-4 transition group-hover:-translate-y-0.5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ali-husnain-790929252/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 hover:text-foreground transition"
              >
                <Linkedin className="h-4 w-4 transition group-hover:-translate-y-0.5" /> LinkedIn
              </a>
              <a
                href="mailto:mr.alihusnain11@gmail.com"
                className="group flex items-center gap-2 hover:text-foreground transition"
              >
                <Mail className="h-4 w-4 transition group-hover:-translate-y-0.5" /> Email
              </a>
            </motion.div>
          </div>

          {/* Right — portrait */}
          <motion.div variants={item} className="relative order-first lg:order-last">
            <div className="relative mx-auto w-full max-w-[220px] sm:max-w-xs lg:max-w-md">
              <motion.div
                className="relative overflow-hidden arch-top aspect-[3/4] shadow-[var(--shadow-editorial)]"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src="/cvvv.png"
                  alt="Ali Husnain — Full Stack & AI Engineer"
                  className="h-full w-full object-cover object-top"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue — desktop only */}
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