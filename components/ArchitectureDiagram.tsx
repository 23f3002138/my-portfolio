'use client';

import { ArchitectureNode } from '@/data/projects';
import { ArrowRight, Cpu, Server, Database, Activity, Mail, FileSpreadsheet, Sparkles } from 'lucide-react';

interface ArchitectureDiagramProps {
  flow: ArchitectureNode[];
  accentColor?: 'cyan' | 'emerald' | 'violet' | 'amber' | 'rose' | 'indigo';
}

export default function ArchitectureDiagram({ flow, accentColor = 'emerald' }: ArchitectureDiagramProps) {
  if (!flow || flow.length === 0) return null;

  const colorMap = {
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', arrow: 'text-cyan-500' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', arrow: 'text-emerald-500' },
    violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/30', text: 'text-violet-400', arrow: 'text-violet-500' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', arrow: 'text-amber-500' },
    rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400', arrow: 'text-rose-500' },
    indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400', arrow: 'text-indigo-500' },
  };

  const activeColor = colorMap[accentColor] || colorMap.emerald;

  const getStepIcon = (index: number) => {
    switch (index % 5) {
      case 0: return Cpu;
      case 1: return Server;
      case 2: return Database;
      case 3: return Activity;
      case 4: return Mail;
      default: return Sparkles;
    }
  };

  return (
    <div className="w-full my-6 p-6 rounded-2xl bg-zinc-950/80 border border-white/10 backdrop-blur-md">
      <div className="flex items-center gap-2 mb-6">
        <div className={`w-2 h-2 rounded-full ${activeColor.bg} animate-ping`} />
        <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold">
          Verified System Architecture &amp; Workflow Flowchart
        </span>
      </div>

      {/* Responsive Horizontal / Vertical Flowchart */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {flow.map((node, idx) => {
          const IconComponent = getStepIcon(idx);
          const isLast = idx === flow.length - 1;

          return (
            <div key={idx} className="flex-1 flex flex-col md:flex-row items-center gap-3">
              {/* Node Box */}
              <div className={`w-full p-4 rounded-xl ${activeColor.bg} border ${activeColor.border} text-center flex flex-col items-center justify-center hover:scale-[1.02] transition-transform`}>
                <div className="w-8 h-8 rounded-lg bg-zinc-900/80 flex items-center justify-center mb-2">
                  <IconComponent className={`w-4 h-4 ${activeColor.text}`} />
                </div>
                <div className="text-sm font-bold text-white mb-0.5">{node.title}</div>
                <div className="text-[11px] text-zinc-400 font-mono">{node.sub}</div>
              </div>

              {/* Arrow Connector */}
              {!isLast && (
                <div className="flex items-center justify-center my-1 md:my-0">
                  <ArrowRight className={`w-5 h-5 ${activeColor.arrow} hidden md:block rotate-0`} />
                  <div className={`w-0.5 h-6 ${activeColor.bg} md:hidden`} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
