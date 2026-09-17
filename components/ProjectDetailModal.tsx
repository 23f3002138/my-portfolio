'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/projects';
import ArchitectureDiagram from './ArchitectureDiagram';
import { X, Lock, CheckCircle2, Cpu, FileText, Layers, ShieldCheck, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isPrivate = project.links.isPrivate;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-50 w-full max-w-4xl bg-[#0b0e17] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Top Bar / Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold font-mono text-cyan-400">{project.number}</span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto pr-2 pt-6 space-y-8 flex-1">
            {/* Title & Subtitle */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-sm font-mono text-cyan-400">
                {project.subtitle}
              </p>

              {/* Privacy Warning Banner if applicable */}
              {project.privacyNote && (
                <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>{project.privacyNote}</span>
                </div>
              )}
            </div>

            {/* Quick Metrics Badges if present */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 text-center">
                    <div className="text-xs text-zinc-400 font-mono mb-1">{m.label}</div>
                    <div className="text-base font-bold text-white font-mono">{m.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* 01 — Overview */}
            <div>
              <h3 className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-2 font-bold">
                01 — Overview
              </h3>
              <p className="text-zinc-300 text-base leading-relaxed">
                {project.fullOverview}
              </p>
            </div>

            {/* 02 — Problem Statement */}
            {project.problemStatement && (
              <div>
                <h3 className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-2 font-bold">
                  02 — Problem Statement
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed p-4 rounded-xl bg-zinc-950/60 border border-white/5">
                  {project.problemStatement}
                </p>
              </div>
            )}

            {/* 03 — Approach */}
            {project.approach && (
              <div>
                <h3 className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-2 font-bold">
                  03 — Approach &amp; Technical Design
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed p-4 rounded-xl bg-zinc-950/60 border border-white/5">
                  {project.approach}
                </p>
              </div>
            )}

            {/* 04 — Technical Implementation & Architecture Flow */}
            {project.architectureFlow && project.architectureFlow.length > 0 && (
              <div>
                <h3 className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-2 font-bold">
                  04 — Technical Architecture Workflow
                </h3>
                <ArchitectureDiagram flow={project.architectureFlow} accentColor={project.accentColor} />
              </div>
            )}

            {/* 05 — Key Features */}
            <div>
              <h3 className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-4 font-bold">
                05 — Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feat) => (
                  <div key={feat.title} className="p-4 rounded-xl bg-zinc-950/80 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                    </div>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {feat.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 06 — Results / Findings */}
            {project.resultsAndFindings && project.resultsAndFindings.length > 0 && (
              <div>
                <h3 className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3 font-bold">
                  06 — Key Results &amp; Findings
                </h3>
                <ul className="space-y-2">
                  {project.resultsAndFindings.map((res, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 07 — Technologies */}
            <div>
              <h3 className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3 font-bold">
                07 — Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-900 border border-white/10 text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 08 — Links */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-xs font-mono text-zinc-500 uppercase mb-1 font-bold">
                  08 — Repository Access
                </h3>
                <p className="text-xs text-zinc-400">
                  {isPrivate ? 'Private project repository' : 'Public verified GitHub repository'}
                </p>
              </div>

              {isPrivate ? (
                <button
                  disabled
                  className="px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-500 font-mono text-xs cursor-not-allowed flex items-center gap-2"
                >
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span>[ Private Project ]</span>
                </button>
              ) : (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs transition-all shadow-lg flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
