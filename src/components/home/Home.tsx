"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { WindowChrome, CodeLine } from "@/components/dev/window-chrome";
import { useSectionNav } from "@/components/scroll/section-nav";

const Home = () => {
  const { goToPanel } = useSectionNav();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-12 px-6 py-24 md:flex-row md:gap-16 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex max-w-xl flex-col items-start gap-5"
      >
        <span className="rounded-md border border-border bg-muted/60 px-3 py-1 text-xs text-syntax-comment">
          {"// available for hire"}
        </span>

        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          <span className="text-syntax-keyword">const</span> developer ={" "}
          <span className="text-syntax-string">&quot;Anurag Dhurwey&quot;</span>;
        </h1>

        <p className="max-w-lg text-muted-foreground">
          Full-stack developer building polished web and mobile products,
          scalable APIs, and AI-powered experiences. I work across React,
          Next.js, NestJS, Flutter, and Python to turn ideas into reliable,
          maintainable software.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2.5 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Resume
            <Download className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => goToPanel(2)}
            className="inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="w-full max-w-md"
      >
        <WindowChrome title="profile.ts">
          <div className="space-y-1 font-mono text-[13px] leading-6 sm:text-sm">
            <CodeLine n={1}>
              <span className="text-syntax-keyword">const</span> profile ={" "}
              {"{"}
            </CodeLine>
            <CodeLine n={2} indent={1}>
              name: <span className="text-syntax-string">&quot;Anurag Dhurwey&quot;</span>,
            </CodeLine>
            <CodeLine n={3} indent={1}>
              role: <span className="text-syntax-string">&quot;Full-Stack Developer&quot;</span>,
            </CodeLine>
            <CodeLine n={4} indent={1}>
              focus: [<span className="text-syntax-string">&quot;Web&quot;</span>,{" "}
              <span className="text-syntax-string">&quot;Mobile&quot;</span>,{" "}
              <span className="text-syntax-string">&quot;AI / RAG&quot;</span>],
            </CodeLine>
            <CodeLine n={5} indent={1}>
              hireable: <span className="text-syntax-number">true</span>,
            </CodeLine>
            <CodeLine n={6}>
              {"}"}
              <span className="caret" />
            </CodeLine>
          </div>
        </WindowChrome>
      </motion.div>
    </div>
  );
};

export default Home;
