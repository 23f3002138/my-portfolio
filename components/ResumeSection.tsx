'use client';

import { motion } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle2, GraduationCap, Briefcase, Award } from 'lucide-react';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#07090e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-zinc-900/90 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
                <FileText className="w-3.5 h-3.5" />
                <span>CURRICULUM VITAE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Professional Resume &amp; Technical Qualifications
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                Comprehensive summary of academic background at IIT Madras, full-stack software architecture, data analytics capstone projects, machine learning achievements, and technical expertise.
              </p>

              {/* Quick Resume Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <GraduationCap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>IIT Madras BS</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <Briefcase className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Software Systems</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Kaggle &amp; Data Science</span>
                </div>
              </div>
            </div>

            {/* Resume Action CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 text-center"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </a>

              <a
                href="/resume.pdf"
                download="Yaswanth_Vaddi_Resume.pdf"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-zinc-900 hover:bg-zinc-800 border border-white/15 text-zinc-200 hover:text-white transition-all flex items-center justify-center gap-2 text-center"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
