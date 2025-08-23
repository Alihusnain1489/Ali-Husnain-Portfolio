
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Lendex Background with Geometric Patterns */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 gradient-glow rounded-full opacity-10 animate-pulse-custom"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 gradient-glow rounded-full opacity-5 animate-float"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <Contact />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Index;
