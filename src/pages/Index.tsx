
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 relative">
      {/* Main background with green accents */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20 z-0"></div>
      
      {/* Floating green elements */}
      <div className="fixed top-20 right-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl animate-float z-0"></div>
      <div className="fixed bottom-40 left-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl animate-float delay-300 z-0"></div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Index;
