"use client";

import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { socialLinks, personal } = portfolioData;

  return (
    <footer className="py-10 bg-[#060910] text-slate-400 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-slate-200 font-semibold">{personal.name}</span>
          <span>·</span>
          <span>{personal.role}</span>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={socialLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition-colors"
          >
            LeetCode
          </a>
          <a
            href={socialLinks.email}
            className="hover:text-slate-200 transition-colors"
          >
            Email
          </a>
        </div>

        <div className="text-xs font-mono text-slate-400">
          © {currentYear} Arpit Tiwari. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
