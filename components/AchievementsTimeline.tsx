'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS_DATA, Achievement } from '@/data/achievements';
import { Award, Trophy, BookOpen, Code2, Star, Calendar, ExternalLink } from 'lucide-react';

const CATEGORIES = ['All', 'Academic', 'Kaggle', 'Software Engineering', 'Projects'];

export default function AchievementsTimeline() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredAchievements = selectedFilter === 'All'
    ? ACHIEVEMENTS_DATA
    : ACHIEVEMENTS_DATA.filter((a) => a.category === selectedFilter);

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'trophy': return Trophy;
      case 'book': return BookOpen;
      case 'code': return Code2;
      case 'star': return Star;
      default: return Award;
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0d14] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
              <span>MILESTONES &amp; RECOGNITION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Achievements &amp; Competition Results
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-zinc-400 text-sm max-w-md">
            Academic achievements, Kaggle competition scores, capstone milestones, and architectural engineering accomplishments.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedFilter === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'bg-zinc-900 text-zinc-400 border border-white/5 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAchievements.map((item, idx) => {
            const Icon = getIcon(item.iconName);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-cyan-400 block">{item.category}</span>
                        <span className="text-xs text-zinc-400 flex items-center gap-1 font-mono">
                          <Calendar className="w-3 h-3 text-zinc-500" />
                          {item.date}
                        </span>
                      </div>
                    </div>

                    {item.highlightMetric && (
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30">
                        {item.highlightMetric}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-zinc-400 mb-3">
                    {item.organization}
                  </p>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>{item.badgeText || 'Verified Milestone'}</span>
                  <span className="text-cyan-400 font-bold">&bull;</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
