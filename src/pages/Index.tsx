
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 relative">
      {/* Main background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-5 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/d10debca-e79e-4cc0-af3b-5dadf28dc25b.png')"
        }}
      ></div>
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"></div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Index;
