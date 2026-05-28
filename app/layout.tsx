import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Concierge from "../components/Concierge";
import "./globals.css";

// Display: Instrument Serif — the modern editorial display face used across
// premium studios and "quiet-luxury" brands. Sharp terminals, exquisite italic.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

// Body: Inter Tight — the tighter sister of Inter. Premium SaaS body face,
// holds rhythm at every size from caption to hero.
const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gymnex.ai";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "GymnexAI — The Operating System for Modern Fitness Businesses",
    template: "%s — GymnexAI",
  },
  description:
    "Retain more members. Convert more leads. Run your gym with AI. GymnexAI is the intelligent operating layer behind premium gyms, studios and fitness clubs.",
  applicationName: "GymnexAI",
  keywords: [
    "gym CRM",
    "fitness CRM",
    "WhatsApp AI for gyms",
    "gym retention software",
    "gym management software",
    "fitness business OS",
    "AI for fitness studios",
    "boutique gym software",
  ],
  authors: [{ name: "GymnexAI" }],
  creator: "GymnexAI",
  publisher: "GymnexAI",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "GymnexAI",
    url: SITE,
    title: "GymnexAI — The Operating System for Modern Fitness Businesses",
    description:
      "Retain more members. Convert more leads. Run your gym with AI.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gymnexai",
    creator: "@gymnexai",
    title: "GymnexAI — The Operating System for Modern Fitness Businesses",
    description:
      "Retain more members. Convert more leads. Run your gym with AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GymnexAI",
  url: SITE,
  logo: `${SITE}/icon.svg`,
  sameAs: [
    "https://instagram.com/gymnexai",
    "https://twitter.com/gymnexai",
    "https://www.linkedin.com/company/gymnexai",
  ],
  founder: { "@type": "Person", name: "Akshat Chauhan" },
  description:
    "The operating system for modern fitness businesses — retention intelligence, automated operations and an AI member experience.",
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GymnexAI",
  url: SITE,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${interTight.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded-full focus:text-[11px] focus:tracking-[0.2em] focus:uppercase focus:font-semibold"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Concierge />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </body>
    </html>
  );
}
