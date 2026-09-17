'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { ExternalLink, Lock, Cpu, Server, Activity, ArrowUpRight, BarChart3, Database, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const isPrivate = project.links.isPrivate;

  // Custom accent themes based on project category / accent color
  const themeStyles = {
    cyan: {
      badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      borderHover: 'hover:border-cyan-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
      gradient: 'from-cyan-500/10 to-blue-500/5',
      accentText: 'text-cyan-400',
    },
    emerald: {
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      borderHover: 'hover:border-emerald-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
      gradient: 'from-emerald-500/10 to-teal-500/5',
      accentText: 'text-emerald-400',
    },
    violet: {
      badge: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
      borderHover: 'hover:border-violet-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
      gradient: 'from-violet-500/10 to-purple-500/5',
      accentText: 'text-violet-400',
    },
    amber: {
      badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      borderHover: 'hover:border-amber-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
      gradient: 'from-amber-500/10 to-orange-500/5',
      accentText: 'text-amber-400',
    },
    rose: {
      badge: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      borderHover: 'hover:border-rose-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]',
      gradient: 'from-rose-500/10 to-pink-500/5',
      accentText: 'text-rose-400',
    },
    indigo: {
      badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      borderHover: 'hover:border-indigo-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
      gradient: 'from-indigo-500/10 to-violet-500/5',
      accentText: 'text-indigo-400',
    },
  };

  const theme = themeStyles[project.accentColor] || themeStyles.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`group relative rounded-2xl bg-zinc-900/60 border border-white/10 ${theme.borderHover} ${theme.glow} transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer backdrop-blur-md p-6 sm:p-8`}
      onClick={() => onSelect(project)}
    >
      {/* Background Gradient Subtle Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-50 pointer-events-none`} />

      <div>
        {/* Header Row: Number & Badge */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-3xl font-extrabold font-mono text-zinc-600 group-hover:text-white transition-colors">
            {project.number}
          </span>
          <span className={`text-[11px] font-mono tracking-wider font-semibold px-3 py-1 rounded-full border ${theme.badge}`}>
            {project.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </h3>

        {/* Subtitle */}
        <p className={`text-xs font-mono mb-4 ${theme.accentText}`}>
          {project.subtitle}
        </p>

        {/* Short Description */}
        <p className="text-zinc-300 text-sm leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        {/* Custom Mini Visual Element based on Project ID */}
        <div className="w-full mb-6 p-4 rounded-xl bg-zinc-950/80 border border-white/5 font-mono text-xs text-zinc-400">
          {project.id === 'hospital-management-v2' && (
            <div className="flex items-center justify-between gap-2 text-[11px]">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Server className="w-3.5 h-3.5" />
                <span>Flask API</span>
              </div>
              <span className="text-zinc-600">&rarr;</span>
              <div className="flex items-center gap-1.5 text-cyan-400">
                <Database className="w-3.5 h-3.5" />
                <span>Redis Broker</span>
              </div>
              <span className="text-zinc-600">&rarr;</span>
              <div className="flex items-center gap-1.5 text-amber-400">
                <Activity className="w-3.5 h-3.5" />
                <span>Celery Workers</span>
              </div>
            </div>
          )}

          {project.id === 'cinema-forecasting' && (
            <div className="flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1 text-rose-400">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>LightGBM + CatBoost</span>
              </div>
              <div className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                Score: 0.27
              </div>
            </div>
          )}

          {project.id === 'bdm-capstone' && (
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-amber-400">RFM Clusters &bull; ABC Matrix</span>
              <span className="text-zinc-400">SARIMA Forecasting</span>
            </div>
          )}

          {project.id === 'quiz-master-app' && (
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-violet-400">Subjects &bull; Chapters &bull; Quizzes</span>
              <span className="text-zinc-400">Real-Time Engine</span>
            </div>
          )}

          {project.id === 'may2026-team-006' && (
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-cyan-400">Team Software Engineering</span>
              <span className="text-zinc-400">Modular Architecture</span>
            </div>
          )}

          {project.id === 'rehax-xr' && (
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-indigo-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> XR Trajectory Tracking
              </span>
              <span className="text-zinc-400 font-bold">Bio-Feedback</span>
            </div>
          )}
        </div>
      </div>

      {/* Tech Tags & Link Buttons */}
      <div>
        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-950/70 border border-white/10 text-zinc-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-zinc-950/70 border border-white/10 text-zinc-400">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
            className="text-xs font-semibold text-white group-hover:text-cyan-400 flex items-center gap-1 transition-colors"
          >
            <span>Case Study Details</span>
            <span>&rarr;</span>
          </button>

          {/* GitHub / Private Button */}
          {isPrivate ? (
            <span
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 border border-white/10 text-[11px] font-mono text-zinc-400"
            >
              <Lock className="w-3 h-3 text-amber-400" />
              <span>Private Project</span>
            </span>
          ) : (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-white/15 text-[11px] font-mono text-zinc-300 hover:text-white transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
