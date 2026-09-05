"use client";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiPython,
  SiLangchain,
  SiPostgresql,
  SiFlutter,
} from "react-icons/si";
import { WindowChrome } from "@/components/dev/window-chrome";

const mainSkills = [
  { title: "react", version: "19.2.8", Icon: SiReact, color: "#61DAFB" },
  { title: "next", version: "16.3.4", Icon: SiNextdotjs, color: "currentColor" },
  { title: "angular", version: "18.2.0", Icon: SiAngular, color: "#DD0031" },
  { title: "node", version: "22.10.0", Icon: SiNodedotjs, color: "#5FA04E" },
  { title: "express", version: "4.21.0", Icon: SiExpress, color: "currentColor" },
  { title: "nestjs", version: "11.x", Icon: SiNestjs, color: "#E0234E" },
  { title: "mongodb", version: "8.0.0", Icon: SiMongodb, color: "#47A248" },
  { title: "postgresql", version: "18.x", Icon: SiPostgresql, color: "#4169E1" },
  { title: "python", version: "3.14", Icon: SiPython, color: "#3776AB" },
  { title: "ai-ml-rag", version: "applied", Icon: SiLangchain, color: "#1C3C3C" },
  { title: "langchain", version: "1.x", Icon: SiLangchain, color: "#1C3C3C" },
  { title: "langgraph", version: "1.x", Icon: SiLangchain, color: "#1C3C3C" },
  { title: "flutter", version: "3.x", Icon: SiFlutter, color: "#02569B" },
  { title: "react-native", version: "0.8x", Icon: SiReact, color: "#61DAFB" },
];

const Skills = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 md:px-16">
      <div className="mb-10 text-center">
        <span className="text-xs text-syntax-comment">{"// tech stack"}</span>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Skills</h2>
      </div>

      <WindowChrome title="zsh — npm ls" className="w-full max-w-3xl">
        <div className="grid gap-4 font-mono text-sm sm:grid-cols-2 sm:gap-x-8">
          <p className="text-syntax-comment">$ npm ls --depth=0</p>
          {mainSkills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex items-center gap-3.5"
            >
              <span className="text-syntax-comment">
                {i === mainSkills.length - 1 ? "└──" : "├──"}
              </span>
              <skill.Icon
                className="h-5 w-5 shrink-0 text-foreground"
                style={{ color: skill.color }}
              />
              <span>
                {skill.title}@
                <span className="text-syntax-string">{skill.version}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </WindowChrome>
    </div>
  );
};

export default Skills;