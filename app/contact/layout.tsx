import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Tell us about your operation. We'll come back within one working day with a private GymnexAI walkthrough — tailored to your stack, not a generic pitch.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book a Demo — GymnexAI",
    description: "A private walkthrough, tailored to your fitness operation.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
