import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const background = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
  );
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ["1px solid rgba(228, 228, 231, 0)", "1px solid rgba(228, 228, 231, 1)"]
  );

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      style={{
        background,
        backdropFilter,
        borderBottom,
        WebkitBackdropFilter: backdropFilter,
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-24 h-20 transition-all duration-300"
    >
      <a 
        href="#home" 
        className="text-lg font-semibold tracking-tight text-zinc-900 z-10"
      >
        Alex Morgan
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            {item.label}
          </a>
        ))}
        <a 
          href="#contact"
          className="ml-4 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
        >
          Let's talk
        </a>
      </nav>

      {/* Mobile Nav Button - minimal for now */}
      <button className="md:hidden z-10 flex flex-col gap-1.5 p-2">
        <span className="w-5 h-0.5 bg-zinc-900 rounded-full"></span>
        <span className="w-5 h-0.5 bg-zinc-900 rounded-full"></span>
      </button>
    </motion.header>
  );
}
