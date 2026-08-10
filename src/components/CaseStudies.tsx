"use client";

import {
  Code2,
  Lock,
  Layers,
  Bot,
  Zap,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Cpu,
  UserCheck,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function CaseStudies() {
  const { caseStudies, socialLinks } = portfolioData;

  return (
    <section id="case-studies" className="py-16 md:py-24 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-cyan-400">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              Engineering Case Studies
            </h2>
          </div>
        </div>
        <p className="text-slate-400 text-base max-w-2xl mb-12 font-sans">
          In-depth architectural breakdowns of production backend, workflow automation, and AI systems built at LevelUP MultiLink LLP.
        </p>

        <div className="space-y-16">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl"
            >
              {/* Header & Tag */}
              <div className="space-y-3 pb-6 border-b border-slate-800">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-xs font-sans">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{study.tag}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                  {study.title}
                </h3>
                <p className="text-cyan-400 font-sans text-sm font-medium">
                  {study.subtitle}
                </p>
                <p className="text-slate-300 text-base leading-relaxed font-sans">
                  {study.description}
                </p>
              </div>

              {/* Problem Section */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  The Problem
                </h4>
                <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 sm:p-5 text-slate-300 text-sm leading-relaxed font-sans">
                  {study.problem}
                </div>
              </div>

              {/* How it works */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-slate-200 mb-4 flex items-center gap-2 font-sans">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  How it works
                </h4>
                <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    {study.architectureDiagram.map((node, index) => (
                      <div key={node.step} className="flex items-center gap-2 sm:gap-3">
                        <div className="flex items-center gap-2 bg-slate-900 border border-slate-700/80 px-3.5 py-2.5 rounded-lg shadow-sm hover:border-cyan-500/50 transition-colors">
                          <span className="w-5 h-5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-sans text-xs font-bold shrink-0">
                            {node.step}
                          </span>
                          <span className="text-xs font-sans font-medium text-slate-200">
                            {node.label}
                          </span>
                        </div>
                        {index < study.architectureDiagram.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* What I built */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2 font-sans">
                  <UserCheck className="w-4 h-4 text-cyan-400" />
                  What I built
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {study.ownership.map((item) => (
                    <div
                      key={item}
                      className="bg-slate-950/70 border border-slate-800 px-3 py-2 rounded-lg text-xs font-sans text-slate-200 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Assistant Detail */}
              {study.aiDetails && (
                <div className="mt-8 bg-cyan-950/20 border border-cyan-500/30 rounded-xl p-5 sm:p-6 space-y-4">
                  <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-base font-sans">
                    <Bot className="w-5 h-5" />
                    <span>Retrieval-Grounded AI Assistant</span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed font-sans">
                    {study.aiDetails.overview}
                  </p>

                  <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-4">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      {study.aiDetails.flow.map((node, index) => (
                        <div key={node.step} className="flex items-center gap-2 sm:gap-3">
                          <div className="bg-slate-900 border border-slate-700 px-3 py-2 rounded-md font-sans text-xs text-amber-300">
                            {node.label}
                          </div>
                          {index < (study.aiDetails?.flow.length || 0) - 1 && (
                            <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-cyan-950/40 p-3 rounded-lg border border-cyan-500/20 text-xs font-sans text-cyan-300">
                    💡 <strong>Engineering Constraint:</strong> {study.aiDetails.emphasis}
                  </div>
                </div>
              )}

              {/* Security */}
              {study.security && (
                <div className="mt-8 bg-slate-950/60 border border-slate-800 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-slate-200 font-semibold text-sm mb-3 font-sans">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>Security & Authentication Flow</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                      <span className="text-slate-400 block mb-1">Auth Pipeline:</span>
                      <span className="text-slate-200 font-medium">
                        {study.security.authFlow.join(" → ")}
                      </span>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                      <span className="text-slate-400 block mb-1">RBAC Roles:</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {study.security.roles.map((role) => (
                          <span
                            key={role}
                            className="bg-slate-800 text-cyan-300 px-2 py-0.5 rounded text-[11px]"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Engineering Details */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2 font-sans">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  Engineering details
                </h4>
                <ul className="space-y-3">
                  {study.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-slate-300 bg-slate-950/40 p-3.5 rounded-lg border border-slate-800/60 font-sans"
                    >
                      <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="mt-8 bg-slate-950 border border-emerald-900/40 rounded-xl p-5">
                <div className="flex items-center gap-2 text-emerald-400 font-sans text-xs font-semibold uppercase tracking-wider mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Results</span>
                </div>
                <p className="text-slate-200 text-sm font-medium leading-relaxed font-sans">
                  {study.businessImpact}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-sm font-semibold text-slate-200 mb-3 font-sans">
                  Tech stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-slate-800/90 border border-slate-700/70 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Open Source Card */}
        <div className="mt-12 bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white font-sans">Open Source & Experiments</h4>
            <p className="text-slate-400 text-sm mt-0.5 font-sans">
              Public engineering projects are currently being prepared. Check GitHub for available repositories and experiments.
            </p>
          </div>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-sans transition-colors shrink-0"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Explore GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
