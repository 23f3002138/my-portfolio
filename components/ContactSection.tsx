'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Send, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactSection() {
  const email = '23f3002138@ds.study.iitm.ac.in';

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0d14] relative border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-6"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>GET IN TOUCH</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6"
        >
          Let&apos;s Build Engineering &amp; Data Solutions Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Whether you have questions about software architecture, machine learning models, data analytics capstone research, or potential technical collaboration, feel free to reach out.
        </motion.p>

        {/* Verified Email CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 rounded-2xl bg-zinc-900/80 border border-cyan-500/30 shadow-2xl backdrop-blur-md mb-12"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-zinc-400 font-mono block">Direct Student Email</span>
              <span className="text-sm sm:text-base font-bold text-white font-mono">{email}</span>
            </div>
          </div>

          <a
            href={`mailto:${email}`}
            className="px-5 py-2.5 rounded-xl font-semibold text-xs bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white transition-all shadow-lg flex items-center gap-2"
          >
            <span>Send Email</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/10">
          <a
            href="https://github.com/23f3002138"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub (23f3002138)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-blue-400 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
