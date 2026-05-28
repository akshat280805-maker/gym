import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter uppercase">GYMNEXAI</Link>
        <div className="hidden md:flex space-x-12 text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-500">
          <Link href="/#crm" className="hover:text-white transition-colors">Core CRM</Link>
          <Link href="/#ai" className="hover:text-white transition-colors">WhatsApp AI</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Case Studies</Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-[11px] font-bold tracking-widest uppercase text-zinc-500 hover:text-white">Login</Link>
          <Link href="/contact" className="bg-white text-black px-5 py-2 rounded-sm text-[11px] font-bold tracking-widest uppercase hover:bg-zinc-200">
            Get Access
          </Link>
        </div>
      </div>
    </nav>
  );
}