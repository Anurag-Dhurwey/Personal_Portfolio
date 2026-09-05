"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useSectionNav } from "@/components/scroll/section-nav";
import { useLenis } from "@/components/providers/smooth-scroll";

const TABS = [
  { label: "Home.tsx", dot: "text-syntax-function" },
  { label: "Skills.tsx", dot: "text-syntax-string" },
  { label: "Projects.tsx", dot: "text-syntax-keyword" },
  { label: "Gallery.tsx", dot: "text-syntax-number" },
  { label: "Contact.tsx", dot: "text-syntax-comment" },
];

const HIDE_AFTER = 12;
const SHOW_AFTER = 8;
const ALWAYS_SHOW_BELOW = 24;

const Navbar = () => {
  const { activeIndex, progress, goToPanel } = useSectionNav();
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastY = useRef<number | null>(null);
  const acc = useRef(0);

  useEffect(() => {
    const onScroll = (y: number) => {
      setScrolled(y > 8);

      if (lastY.current === null) {
        lastY.current = y;
        return;
      }

      const delta = y - lastY.current;
      lastY.current = y;

      if (y < ALWAYS_SHOW_BELOW) {
        setNavHidden(false);
        acc.current = 0;
        return;
      }

      if ((delta > 0 && acc.current < 0) || (delta < 0 && acc.current > 0)) {
        acc.current = 0;
      }
      acc.current += delta;

      if (acc.current > HIDE_AFTER) setNavHidden(true);
      if (acc.current < -SHOW_AFTER) setNavHidden(false);
    };

    if (lenis) {
      const unsubscribe = lenis.on("scroll", () => onScroll(lenis.scroll));
      onScroll(lenis.scroll);
      return unsubscribe;
    }

    const native = () => onScroll(window.scrollY);
    native();
    window.addEventListener("scroll", native, { passive: true });
    return () => window.removeEventListener("scroll", native);
  }, [lenis]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: navHidden ? "-120%" : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:px-6 ${
        navHidden ? "pointer-events-none" : ""
      }`}
    >
      <div
        className={`w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-background/80 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/10" : "shadow-sm"
        }`}
      >
        <div className="flex items-center gap-1.5 overflow-x-auto px-2 py-2 sm:px-3">
          <Terminal className="mr-1 h-4 w-4 shrink-0 text-syntax-function" />
          {TABS.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => goToPanel(i)}
              className={`relative flex shrink-0 cursor-pointer items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-medium transition-colors sm:text-sm ${
                activeIndex === i
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeIndex === i && (
                <motion.span
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 -z-10 rounded-lg bg-muted"
                  transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
                />
              )}
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-current ${tab.dot}`} />
              {tab.label}
            </button>
          ))}
          <div className="ml-auto flex shrink-0 items-center pl-2">
            <ThemeToggle />
          </div>
        </div>
        <div className="h-0.5 w-full bg-muted">
          <div
            className="h-full bg-syntax-function transition-[width] duration-150 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;

