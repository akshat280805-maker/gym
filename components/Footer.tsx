import Link from "next/link";
import { Instagram } from "lucide-react";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5">
            <Logo size="lg" className="text-ink" />
            <p className="mt-6 max-w-sm text-mute text-[15px] leading-relaxed">
              The operating system for modern fitness businesses. Retention intelligence,
              automated operations and an AI member experience — under one premium brand.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 rounded-full text-[11px] font-semibold tracking-[0.22em] uppercase hover:bg-ink-soft transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-ink hover:text-mute transition-colors"
              >
                See the System →
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-mute-soft mb-5">System</h4>
            <ul className="space-y-3 text-[14px] text-ink/80">
              <li><Link href="/features" className="hover:text-ink">Retention AI</Link></li>
              <li><Link href="/features" className="hover:text-ink">CRM</Link></li>
              <li><Link href="/features" className="hover:text-ink">WhatsApp AI</Link></li>
              <li><Link href="/features" className="hover:text-ink">Billing</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-mute-soft mb-5">Company</h4>
            <ul className="space-y-3 text-[14px] text-ink/80">
              <li><Link href="/about" className="hover:text-ink">About</Link></li>
              <li><Link href="/blog" className="hover:text-ink">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-ink">Contact</Link></li>
              <li><Link href="/login" className="hover:text-ink">Login</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-mute-soft mb-5">Briefings</h4>
            <p className="text-[14px] text-mute leading-relaxed">
              A monthly intelligence note for operators of modern fitness businesses.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-line flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[12px] text-mute-soft tracking-wide">
            © {new Date().getFullYear()} GymnexAI. The operating layer for modern fitness.
          </p>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-mute-soft">
            <Link
              href="https://instagram.com/gymnexai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-ink"
              aria-label="GymnexAI on Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
              @gymnexai
            </Link>
            <Link href="#" className="hover:text-ink">Privacy</Link>
            <Link href="#" className="hover:text-ink">Terms</Link>
            <Link href="#" className="hover:text-ink">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
