"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Folder, FolderOpen, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { WindowChrome } from "@/components/dev/window-chrome";
import ecommerce from "@/assets/img/project/ecommerce.png";
import social_media from "@/assets/img/project/social_media.png";
import fuzionApp from "@/assets/img/project/fuzionApp.png";

const myProjects = [
  {
    title: "Social_App",
    logo: social_media,
    webUrl: "https://next-js-internship-assignment.vercel.app/",
    sourceCode:
      "https://github.com/Anurag-Dhurwey/NextJs_Internship_assignment",
    usedTools: "NextJs, Sanity, NodeJs & Socket-Io",
    desc: `Developed an Social platform, I used NextJs for front-end, sanity as backend service, Socket-io for real time comments and likes updates, and
      Implemented user authentication, Logged in user can Upload posts and also able to like comment`,
  },
  {
    title: "Fuzion_App",
    logo: fuzionApp,
    webUrl: "https://fuzion-app.onrender.com",
    sourceCode: "https://github.com/Anurag-Dhurwey/Fuzion_App",
    usedTools: "Angular, Socket-io, HTML Canvas, Fabric-js, Redis",
    desc: `I created a collabrative drawing app, and implemented
import export functionality and real-time shape
manipulation using socket-io and redis`,
  },
  {
    title: "ECOMMERCE WEB APP",
    logo: ecommerce,
    webUrl: "https://techtreasure.vercel.app/",
    sourceCode: "https://github.com/Anurag-Dhurwey/techtreasure",
    usedTools: `ReactJs, Redux Toolkit, NodeJs & ExpressJs, MongoDB`,
    desc: `My friend and I worked together to build an ecommerce
web app for a local client. Implemented all the
functionality an eCommerce app should have. secure
authentication, wishlist and add to cart functionality
implemented.
And created a admin panel for admin using reactJs to
control our ecommerce store.`,
  },
];

const Projects = () => {
  const [active, setActive] = useState(0);
  const project = myProjects[active];

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-6 py-24 md:px-16">
      <div className="text-center">
        <span className="text-xs text-syntax-comment">
          {"// selected work"}
        </span>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Projects</h2>
      </div>

      <div className="flex w-full max-w-3xl flex-wrap justify-center gap-2">
        {myProjects.map((p, i) => (
          <button
            key={p.title}
            type="button"
            onClick={() => setActive(i)}
            className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
              active === i
                ? "border-border bg-muted text-foreground"
                : "border-transparent text-muted-foreground hover:bg-muted/50"
            }`}
          >
            {active === i ? (
              <FolderOpen className="h-4 w-4 shrink-0 text-syntax-function" />
            ) : (
              <Folder className="h-4 w-4 shrink-0" />
            )}
            <span className="truncate">{p.title}</span>
          </button>
        ))}
      </div>

      <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-3xl"
      >
        <WindowChrome title={`README.md — ${project.title}`}>
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className="relative h-48 w-full overflow-hidden rounded-lg sm:h-56 md:h-64">
              <Image
                src={project.logo}
                alt={project.title}
                fill
                priority={active === 0}
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {project.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.usedTools
                  .split(/,|\n/)
                  .map((tool) => tool.trim())
                  .filter(Boolean)
                  .map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs text-syntax-function"
                    >
                      {tool}
                    </span>
                  ))}
              </div>
              <div className="mt-5 flex gap-3">
                <Link
                  href={project.sourceCode}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-xs font-medium transition-colors hover:bg-muted"
                >
                  <FaGithub className="h-4 w-4" /> Source
                </Link>
                <Link
                  href={project.webUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </Link>
              </div>
            </div>
          </div>
        </WindowChrome>
      </motion.div>
    </div>
  );
};

export default Projects;
