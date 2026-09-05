"use client";
import Link from "next/link";
import { Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
import { WindowChrome } from "@/components/dev/window-chrome";

const socials = [
  { Icon: FaGithub, link: "https://github.com/Anurag-Dhurwey" },
  {
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/anurag-dhurwey-03732024b/",
  },
  { Icon: FaXTwitter, link: "https://twitter.com/anurag_dhurwey2" },
  { Icon: FaInstagram, link: "https://www.instagram.com/anurag__dhurwey/" },
  {
    Icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=100051249822154",
  },
];

const Footer = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 md:px-16">
      <WindowChrome title="zsh — contact" className="w-full max-w-xl">
        <div className="space-y-3 font-mono text-sm">
          <p>
            <span className="text-syntax-function">visitor@portfolio</span>:
            <span className="text-syntax-keyword">~</span>$ contact --anurag
          </p>
          <p className="text-muted-foreground">
            Open to new opportunities and collaborations.
          </p>
          <Link
            href="mailto:anuragdhurwey9211@gmail.com"
            className="inline-flex items-center gap-2 text-syntax-string hover:underline"
          >
            <Mail className="h-4 w-4" />
            anuragdhurwey9211@gmail.com
          </Link>
          <p className="pt-1">
            <span className="text-syntax-function">visitor@portfolio</span>:
            <span className="text-syntax-keyword">~</span>$ social --list
          </p>
          <ul className="flex gap-3">
            {socials.map(({ Icon, link }) => (
              <li key={link}>
                <Link
                  href={link}
                  target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="pt-4 text-xs text-syntax-comment">
            {"// © "}
            {new Date().getFullYear()} Anurag Dhurwey. All rights reserved.
          </p>
          <p className="caret" />
        </div>
      </WindowChrome>
    </div>
  );
};

export default Footer;
