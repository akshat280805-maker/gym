import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Owner Console — Login",
  description: "Access the GymnexAI Owner Console.",
  alternates: { canonical: "/login" },
  robots: { index: false, follow: true },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
