import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-zinc-500 font-medium tracking-widest uppercase text-xs mb-4">Core Ecosystem</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Built for <span className="text-zinc-600">performance.</span> <br />
            Engineered for scale.
          </h1>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* WhatsApp AI - Large Card */}
          <div className="md:col-span-2 bg-zinc-900/30 border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-white/10 transition-colors">
            <div>
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <span className="text-xl">💬</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Autonomous WhatsApp AI</h3>
              <p className="text-zinc-400 font-light text-lg max-w-md">
                Your 24/7 digital concierge. It doesn't just reply—it sells. Automates member retention, handles diet queries, and schedules tours without human intervention.
              </p>
            </div>
            <div className="mt-12 p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-sm text-zinc-500">
              {">"} Member: "What should I eat before my 6am session?" <br/>
              {">"} GymnexAI: "Based on your goals, 30g of fast-acting carbs..."
            </div>
          </div>

          {/* Precision CRM - Small Card */}
          <div className="bg-zinc-900/30 border border-white/5 p-10 rounded-[2.5rem] hover:border-white/10 transition-colors">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
              <span className="text-xl">📊</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Elite CRM</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Real-time analytics and revenue tracking. No messy spreadsheets, just a pure data-driven view of your gym's health.
            </p>
          </div>

          {/* Auto-Billing - Small Card */}
          <div className="bg-zinc-900/30 border border-white/5 p-10 rounded-[2.5rem] hover:border-white/10 transition-colors">
             <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
              <span className="text-xl">💳</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Zero-Friction Billing</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Subscription management that actually works. Automated payouts and failed payment recovery built-in.
            </p>
          </div>

          {/* Scalability - Large Card */}
          <div className="md:col-span-2 bg-zinc-900/30 border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-white/10 transition-colors">
            <div>
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Engineered for Multi-Location</h3>
              <p className="text-zinc-400 font-light text-lg max-w-lg">
                Manage one gym or one hundred from a single command center. Sync members across locations with zero latency.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
            <Link href="/contact" className="bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
                Start Deploying GymnexAI
            </Link>
        </div>
      </div>
    </div>
  );
}