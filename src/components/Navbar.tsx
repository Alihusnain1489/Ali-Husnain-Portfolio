import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: "home", label: "Home" },
    { href: "services", label: "Services" },
    { href: "experience", label: "Experience" },
    { href: "projects", label: "Projects" },
    { href: "education", label: "Education" },
    { href: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="font-playfair text-xl font-semibold tracking-tight text-foreground"
          >
            Ali Husnain<span className="text-[hsl(var(--coral))]">.</span>
          </button>

          <div className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-foreground/70 transition hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <button onClick={() => scrollToSection("contact")} className="btn-ink !py-2.5 !px-5 text-xs">
              Get in touch <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full rounded px-3 py-3 text-left text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollToSection("contact")} className="btn-ink w-full justify-center mt-2">
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
