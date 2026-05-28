import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* SECTION 1: THE HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] -z-10" />
        <div className="text-center max-w-5xl mx-auto space-y-12">
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">
            The Future of Fitness
          </div>
          <h1 className="text-[12vw] md:text-[180px] font-bold tracking-tighter leading-[0.8] uppercase">
            Precision <br /> Performance.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            The first fully integrated AI ecosystem that makes your gym feel alive. 
            Combining a powerful native CRM with an intelligent WhatsApp assistant.
          </p>
          <Link href="/contact" className="inline-block bg-white text-black px-12 py-5 rounded-sm font-bold tracking-widest uppercase hover:scale-105 transition-transform">
            Deploy GymnexAI →
          </Link>
        </div>
      </section>

      {/* SECTION 2: REVENUE IMPACT (The ₹15 Lakh Card) */}
      <section id="crm" className="py-40 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-left">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
              An Intelligent CRM, <br /> <span className="text-zinc-700">Not Just Software.</span>
            </h2>
            <p className="text-zinc-400 text-xl font-light leading-relaxed">
              We built AI directly into the foundation of your operations. The GymnexAI CRM tracks members seamlessly and predicts drop-offs.
            </p>
          </div>

          <div className="bg-zinc-950 p-12 rounded-3xl border border-white/5 space-y-12 shadow-2xl">
             <div>
                <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest mb-4">Without AI</p>
                <p className="text-4xl font-bold text-zinc-700 line-through">₹7-8 Lakh</p>
             </div>
             <div className="pt-8 border-t border-white/5">
                <p className="text-white text-xs font-bold uppercase tracking-widest mb-4">With GymnexAI</p>
                <p className="text-7xl md:text-8xl font-bold tracking-tighter">₹15 Lakh</p>
                <p className="mt-4 text-xs text-zinc-500 font-medium italic">Driven by automated retention and PT upgrades.</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHATSAPP AI */}
      <section id="ai" className="py-40 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-20 items-center text-left">
          <div className="flex-1 space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
              Your AI Assistant, <br /> <span className="text-zinc-700">Inside WhatsApp.</span>
            </h2>
            <p className="text-zinc-400 text-xl font-light leading-relaxed">
              GymnexAI lives in your members' pockets, offering respectful, highly personalized guidance integrated with your CRM data.
            </p>
          </div>

          <div className="flex-1 w-full bg-zinc-900/30 p-8 rounded-3xl border border-white/5 space-y-4 font-sans">
             <div className="bg-zinc-800/50 p-4 rounded-2xl rounded-bl-none max-w-[80%] text-sm">
                Hi Sarah! Great workout yesterday. Ready for legs today?
             </div>
             <div className="bg-white text-black p-4 rounded-2xl rounded-br-none ml-auto max-w-[80%] text-sm font-medium">
                Just checked in! What's the plan?
             </div>
             <div className="bg-zinc-800/50 p-4 rounded-2xl rounded-bl-none max-w-[80%] text-sm">
                Perfect. I've updated your profile in the CRM. Here is your structured routine...
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}