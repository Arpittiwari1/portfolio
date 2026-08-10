"use client";

import { Wrench } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-cyan-400">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              Technical Stack & Capabilities
            </h2>
          </div>
        </div>
        <p className="text-slate-400 text-base max-w-2xl mb-10">
          Cleanly grouped technologies, tools, and backend engineering concepts used in production environments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-sm font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-4 pb-2 border-b border-slate-800">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-200 text-xs font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
