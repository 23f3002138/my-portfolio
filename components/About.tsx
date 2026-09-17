'use client';

import { motion } from 'framer-motion';
import { Wrench, Database, Code, Brain, LineChart, Glasses, CheckCircle2 } from 'lucide-react';

const DISCIPLINES = [
  {
    title: 'Mechanical Engineering',
    description: 'Analytical problem-solving, physical systems modeling, kinetic dynamics, and engineering rigor.',
    icon: Wrench,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
    bgColor: 'bg-cyan-500/5',
  },
  {
    title: 'Data Science & Applications',
    description: 'IIT Madras BS program focusing on statistical learning, time-series forecasting, and data structures.',
    icon: Database,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    bgColor: 'bg-emerald-500/5',
  },
  {
    title: 'Software Engineering',
    description: 'Building asynchronous Vue 3 & Flask platforms, Celery + Redis task queues, JWT auth, and modular REST APIs.',
    icon: Code,
    color: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    bgColor: 'bg-blue-500/5',
  },
  {
    title: 'Machine Learning',
    description: 'Kaggle competition forecasting using LightGBM, CatBoost, lag feature engineering, and temporal rolling windows.',
    icon: Brain,
    color: 'text-rose-400',
    borderColor: 'border-rose-500/20',
    bgColor: 'bg-rose-500/5',
  },
  {
    title: 'Data Analytics',
    description: 'RFM customer behavioral segmentation, ABC product classification, SARIMA forecasting, and scenario profit modeling.',
    icon: LineChart,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    bgColor: 'bg-amber-500/5',
  },
  {
    title: 'Interactive / XR Tech',
    description: 'Internship focus on interactive XR physical rehabilitation, movement trajectory tracking, and bio-feedback UI.',
    icon: Glasses,
    color: 'text-indigo-400',
    borderColor: 'border-indigo-500/20',
    bgColor: 'bg-indigo-500/5',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0d14] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4"
          >
            <span>DISCIPLINARY SPECTRUM</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Bridging Physical Engineering &amp; Computational Science
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            Combining mechanical engineering principles with modern software architecture, predictive machine learning models, and quantitative business analytics to solve complex computational problems.
          </motion.p>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISCIPLINES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className={`p-6 rounded-2xl bg-zinc-900/60 border ${item.borderColor} hover:border-white/20 transition-all hover:-translate-y-1 group`}
              >
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-mono">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${item.color}`} />
                  <span>Verified Domain</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
