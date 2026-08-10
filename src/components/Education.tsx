"use client";

import { GraduationCap, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="py-12 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-cyan-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
            Education
          </h2>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white">
              {education.institution}
            </h3>
            <p className="text-cyan-400 font-mono text-xs mt-0.5">
              {education.degree}
            </p>
          </div>

          <div className="flex items-center gap-2 text-slate-400 font-mono text-xs bg-slate-800/60 px-3 py-1 rounded-md border border-slate-700/50 shrink-0 self-start sm:self-center">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{education.duration}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
