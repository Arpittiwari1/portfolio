"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2, Cpu } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-cyan-400">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              Work Experience
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Production engineering roles & key accomplishments
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 sm:p-8 hover:border-slate-700/80 transition-colors shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <div className="text-lg font-semibold text-cyan-400 mt-0.5">
                    {item.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-md border border-slate-700/50">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {item.duration}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-md border border-slate-700/50">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="text-slate-300 mt-6 leading-relaxed text-base">
                {item.summary}
              </p>

              {/* Accomplishment Bullets */}
              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Key Engineering Accomplishments
                </h4>
                <ul className="space-y-3">
                  {item.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-slate-200 bg-slate-950/40 p-3.5 rounded-lg border border-slate-800/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Technologies Row */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-slate-400" />
                  Core Technologies:
                </span>
                {item.coreTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-800/80 border border-slate-700/60 text-slate-300"
                  >
                    {tech}
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
