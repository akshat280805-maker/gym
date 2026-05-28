"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 pt-20">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] -z-10" />

      <div className="w-full max-w-xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            REQUEST ACCESS.
          </h1>
          <p className="text-zinc-500 font-light text-lg">
            Join the elite waitlist for GymnexAI. <br />
            Our team will reach out for a private demo.
          </p>
        </div>

        <form className="space-y-6 bg-zinc-950/50 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm shadow-2xl">
          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold ml-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter Name"
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold ml-1">Gym / Business Name</label>
            <input 
              type="text" 
              placeholder="Gym Name"
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold ml-1">WhatsApp Number</label>
            <input 
              type="tel" 
              placeholder="+91 00000 00000"
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-white text-black py-4 rounded-full font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mt-4"
          >
            Submit Request
          </button>

          <p className="text-center text-[11px] text-zinc-600 pt-4 tracking-tight">
            By submitting, you agree to receive a WhatsApp briefing from our AI assistant.
          </p>
        </form>
      </div>
    </div>
  );
}