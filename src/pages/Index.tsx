
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
