'use client';

import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-[#07090e] border-t border-white/5 text-center text-xs text-zinc-500 font-mono">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-zinc-400">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="font-bold text-white">YASWANTH VADDI</span>
          <span>&bull;</span>
          <span>IIT Madras BS in Data Science &amp; Applications</span>
        </div>

        <div>
          &copy; {new Date().getFullYear()} Yaswanth Vaddi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
