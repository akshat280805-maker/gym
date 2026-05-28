import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "GymnexAI | Precision Performance",
  description: "The AI-Powered Operating System for Elite Gyms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black scroll-smooth">
      <body className="antialiased bg-black text-white selection:bg-white selection:text-black">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}