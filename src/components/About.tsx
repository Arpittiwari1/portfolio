"use client";

import { User } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { about } = portfolioData.personal;

  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-cyan-400">
            <User className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
            About Me
          </h2>
        </div>

        <div className="max-w-3xl bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 sm:p-8 space-y-4">
          {about.map((paragraph, idx) => (
            <p key={idx} className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
