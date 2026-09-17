'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, Cpu, Database, Binary, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import HeroCanvas from './HeroCanvas';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#07090e]">
      {/* Background Interactive Nodes Canvas */}
      <HeroCanvas />

      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-6 backdrop-blur-md shadow-lg shadow-cyan-500/5"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>IIT Madras &bull; Mechanical Engineering &amp; Data Science</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
        >
          YASWANTH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">VADDI</span>
        </motion.h1>

        {/* Multidisciplinary Pillars Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-zinc-300 max-w-3xl font-light mb-8 leading-relaxed"
        >
          Engineering robust software systems, quantitative data analytics, time-series forecasting, and interactive technology at the intersection of <span className="text-cyan-400 font-normal">Mechanical Engineering</span> and <span className="text-blue-400 font-normal">Data Science</span>.
        </motion.p>

        {/* Specialized Skills Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10 text-xs font-medium text-zinc-300"
        >
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-white/10">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Software Engineering
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-white/10">
            <Database className="w-3.5 h-3.5 text-emerald-400" /> Celery &amp; Redis Architecture
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-white/10">
            <Binary className="w-3.5 h-3.5 text-rose-400" /> Machine Learning (Kaggle 0.27)
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-white/10">
            <Layers className="w-3.5 h-3.5 text-amber-400" /> RFM &amp; Time-Series Analytics
          </span>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] transition-all flex items-center gap-2"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('resume')}
            className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 text-zinc-200 hover:text-white transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Resume</span>
          </button>

          <a
            href="https://github.com/23f3002138"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 text-zinc-300 hover:text-cyan-400 transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 text-zinc-300 hover:text-blue-400 transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Key Metrics Quick Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl"
        >
          <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-md text-center">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono">06</div>
            <div className="text-xs text-zinc-400 mt-1 uppercase font-mono tracking-wider">Technical Projects</div>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-md text-center">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">Vue+Flask</div>
            <div className="text-xs text-zinc-400 mt-1 uppercase font-mono tracking-wider">Celery &amp; Redis Queue</div>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-md text-center">
            <div className="text-2xl sm:text-3xl font-bold text-rose-400 font-mono">0.27</div>
            <div className="text-xs text-zinc-400 mt-1 uppercase font-mono tracking-wider">Kaggle Score</div>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-md text-center">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-mono">RFM &amp; ABC</div>
            <div className="text-xs text-zinc-400 mt-1 uppercase font-mono tracking-wider">Data Analytics</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
