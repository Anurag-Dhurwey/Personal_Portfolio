"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useLenis } from "@/components/providers/smooth-scroll";

interface SectionNavState {
  activeIndex: number;
  progress: number;
  goToPanel: (index: number) => void;
}

const SectionNavContext = createContext<SectionNavState>({
  activeIndex: 0,
  progress: 0,
  goToPanel: () => {},
});

export const useSectionNav = () => useContext(SectionNavContext);

export function SectionNavProvider({
  count,
  children,
}: {
  count: number;
  children: React.ReactNode;
}) {
  const lenis = useLenis();
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // plain vertical scroll: track progress + which section is most centered in view
  useEffect(() => {
    const sections = Array.from({ length: count }, (_, i) =>
      document.getElementById(`section-${i}`)
    ).filter((el): el is HTMLElement => !!el);

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);

      const viewportMid = scrollTop + window.innerHeight / 3;
      let closest = 0;
      let closestDist = Infinity;
      sections.forEach((el, i) => {
        const dist = Math.abs(el.offsetTop - viewportMid + el.offsetHeight / 2);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [count]);

  const goToPanel = (index: number) => {
    const el = document.getElementById(`section-${index}`);
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionNavContext.Provider value={{ activeIndex, progress, goToPanel }}>
      {children}
    </SectionNavContext.Provider>
  );
}

export function Section({
  id,
  index,
  className = "",
  children,
}: {
  id: string;
  index: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={`section-${index}`}
      data-section={id}
      className={`w-full scroll-mt-20 ${className}`}
    >
      {children}
    </section>
  );
}
