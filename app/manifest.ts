import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GymnexAI — The Operating System for Modern Fitness",
    short_name: "GymnexAI",
    description:
      "Retain more members. Convert more leads. Run your gym with AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f6",
    theme_color: "#0a0a0a",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png", purpose: "maskable" },
    ],
  };
}
