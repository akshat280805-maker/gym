'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Mail, ArrowRight, Github } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <Link href="/">
            <img src="/gymnexai-logo.jpg" alt="GymnexAI" className="h-12 w-auto mb-6 hover:scale-105 transition-transform" />
          </Link>
          <h2 className="text-2xl font-black uppercase tracking-tighter italic">Secure Access</h2>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-2 text-center">
            GymnexAI Owner Command Center
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[2.5rem] p-10 shadow-2xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Business Email</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="email" 
                  placeholder="admin@yourgym.com"
                  className="w-full bg-black border border-white/10 rounded-full py-4 pl-14 pr-6 text-sm focus:outline-none focus:border-yellow-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Security Key</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-black border border-white/10 rounded-full py-4 pl-14 pr-6 text-sm focus:outline-none focus:border-yellow-500 transition-all"
                />
              </div>
            </div>

            <div className="flex justify-end px-4">
              <button type="button" className="text-[10px] font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors">
                Recover Access
              </button>
            </div>

            <button className="w-full bg-white text-black py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-yellow-500 hover:scale-[1.02] transition-all flex items-center justify-center group">
              Initialize Dashboard <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center">
            <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest mb-4 text-center">Authorized Integrations Only</p>
            <div className="flex space-x-4">
              <button className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Github className="w-5 h-5" />
              </button>
              <button className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Shield className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <p className="text-center mt-8 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
          New to GymnexAI? <Link href="/contact" className="text-white hover:text-yellow-500 transition-colors">Apply for Access</Link>
        </p>
      </motion.div>
    </div>
  );
}