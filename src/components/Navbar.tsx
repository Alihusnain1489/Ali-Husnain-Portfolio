
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: "home", label: "Hello" },
    { href: "about", label: "About" },
    { href: "skills", label: "Portfolio" },
    { href: "projects", label: "Work" },
    { href: "experience", label: "Blog" },
    { href: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-green-500/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('home')} className="group flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center mr-3">
                <span className="text-gray-900 font-bold text-xl">A</span>
              </div>
              <h1 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                Alex
              </h1>
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.href
                      ? "text-green-400 bg-green-400/10"
                      : "text-gray-300 hover:text-green-400 hover:bg-green-400/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-green-400 to-emerald-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:from-green-500 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105">
              LET'S TALK
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md border-b border-green-500/20">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                  activeSection === item.href
                    ? "text-green-400 bg-green-400/10"
                    : "text-gray-300 hover:text-green-400 hover:bg-green-400/5"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full bg-gradient-to-r from-green-400 to-emerald-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:from-green-500 hover:to-emerald-500 transition-all duration-300 mt-4">
              LET'S TALK
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
