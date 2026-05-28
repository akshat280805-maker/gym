import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] bg-paper text-ink flex items-center px-6 pt-32 pb-20">
      <div className="max-w-5xl mx-auto w-full">
        <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-mute">
          Error 404 · Not Found
        </span>
        <h1 className="mt-8 font-serif text-7xl md:text-[180px] leading-[0.85] tracking-tight">
          Off the <em className="italic text-mute">grid.</em>
        </h1>
        <p className="mt-10 max-w-xl text-mute text-lg leading-relaxed">
          The page you were looking for has either moved, retired or never existed.
          Let&apos;s get you back to a known location.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 rounded-full text-[12px] font-semibold tracking-[0.22em] uppercase hover:bg-ink-soft transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-2 py-4 text-[12px] uppercase tracking-[0.22em] font-semibold text-ink hover:text-mute"
          >
            Book a Demo <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
