"use client";

import { ArrowRight, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Hero() {
  const { personal, socialLinks } = portfolioData;

  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 border-b border-slate-800/60 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Software Engineer · LevelUP MultiLink LLP</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans">
              {personal.name}
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-slate-400 mt-2 font-sans">
              {personal.role}
            </h2>

            <p className="mt-6 text-xl sm:text-2xl font-semibold text-slate-100 leading-snug font-sans">
              {personal.heroMessage}
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-sans">
              {personal.heroSubtext}
            </p>

            {/* Simplified 3 Focus Tags */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {personal.focus.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800/80 border border-slate-700/60 text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-200 hover:bg-slate-700/80 hover:text-white font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <GithubIcon className="w-4 h-4 text-slate-400" />
                <span>GitHub</span>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-200 hover:bg-slate-700/80 hover:text-white font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={socialLinks.email}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact</span>
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-700" />
                  <span className="w-3 h-3 rounded-full bg-slate-700" />
                  <span className="w-3 h-3 rounded-full bg-slate-700" />
                </div>
                <span className="text-xs font-mono text-cyan-400 font-semibold">
                  backend.system.arch
                </span>
              </div>

              <div className="space-y-3 font-sans text-xs">
                <div className="flex items-center justify-between bg-slate-950 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-300 font-bold">FastAPI / Node.js</span>
                  <span className="text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30 font-mono text-[11px]">REST APIs</span>
                </div>

                <div className="flex justify-center text-slate-500">↓</div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
                    <span className="text-slate-300 font-semibold block">Job Queue</span>
                    <span className="text-slate-400 text-[11px]">Async Tasks</span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
                    <span className="text-amber-300 font-semibold block">Ollama / Claude</span>
                    <span className="text-slate-400 text-[11px]">AI Integration</span>
                  </div>
                </div>

                <div className="flex justify-center text-slate-500">↓</div>

                <div className="flex items-center justify-between bg-slate-950 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-300 font-bold">Data & Security Layer</span>
                  <span className="text-slate-400 text-[11px]">Supabase · OAuth · RBAC</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
