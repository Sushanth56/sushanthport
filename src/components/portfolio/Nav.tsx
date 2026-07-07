import { motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-elegant" : "glass"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-brand text-white text-xs font-bold">
            SC
          </span>
          <span className="hidden sm:inline">Sushanth</span>
        </a>
        <div className="mx-1 hidden h-5 w-px bg-border md:block" />
        <ul className="hidden items-center md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent/40 hover:text-foreground"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="ml-1 hidden rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-transform hover:scale-[1.03] md:inline-block"
        >
          Let's talk
        </a>
        <a
          href="#contact"
          className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background md:hidden"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
