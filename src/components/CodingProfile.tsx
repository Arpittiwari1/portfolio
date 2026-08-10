"use client";

import { ExternalLink, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function CodingProfile() {
  const { codingProfile } = portfolioData;

  return (
    <section id="coding" className="py-12 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-amber-400">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
              Coding Profile
            </h2>
            <p className="text-xs text-slate-400">
              Data Structures & Algorithms problem-solving background
            </p>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-white font-mono">
                {codingProfile.platform}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-semibold">
                {codingProfile.solvedCount} Problems Solved
              </span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm">
              Solved across foundational topics:
            </p>

            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {codingProfile.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700/80 text-slate-300 text-[11px] font-mono"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <a
            href={codingProfile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-mono text-xs font-medium transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-amber-500 self-start sm:self-center"
          >
            <span>View LeetCode →</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
