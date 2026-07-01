"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const ICONS_ROW1 = [
  "https://cdn-icons-png.flaticon.com/512/5968/5968854.png", // Java / Tech
  "https://cdn-icons-png.flaticon.com/512/732/732221.png", // Excel
  "https://cdn-icons-png.flaticon.com/512/733/733609.png", // GitHub
  "https://cdn-icons-png.flaticon.com/512/732/732084.png", // CSS
  "https://cdn-icons-png.flaticon.com/512/733/733585.png", // Slack
  "https://cdn-icons-png.flaticon.com/512/281/281763.png", // Google
  "https://cdn-icons-png.flaticon.com/512/888/888879.png", // Figma
];

const ICONS_ROW2 = [
  "https://cdn-icons-png.flaticon.com/512/174/174857.png", // LinkedIn
  "https://cdn-icons-png.flaticon.com/512/906/906324.png", // Telegram
  "https://cdn-icons-png.flaticon.com/512/888/888841.png", // Chrome
  "https://cdn-icons-png.flaticon.com/512/5968/5968875.png", // Zoom
  "https://cdn-icons-png.flaticon.com/512/906/906361.png", // Notion
  "https://cdn-icons-png.flaticon.com/512/732/732190.png", // Word
  "https://cdn-icons-png.flaticon.com/512/888/888847.png", // Dropbox
];

// Utility to repeat icons enough times
const repeatedIcons = (icons, repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => icons);

// Helper to detect black/dark logos that need inverting in dark mode
const shouldInvert = (src) => {
  const darkLogos = [
    "733609", // GitHub
    "906361", // Notion
    "nike",
    "apple",
    "github",
    "notion",
  ];
  return darkLogos.some((term) => src.toLowerCase().includes(term));
};

export function IntegrationsSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-primary text-primary-foreground border-y border-primary-foreground/10">
      {/* Ambient decorative glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center z-10 flex flex-col items-center gap-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-2 text-[13px] font-mono font-bold tracking-wider rounded-full border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground">
          <Zap size={12} className="inline-block" /> APIs & INTEGRATIONS
        </span>
        <h2 className="text-4xl md:text-5xl text-primary-foreground font-extrabold tracking-tight leading-tight">
          Explore our APIs & <br className="hidden sm:inline" />
          <span className="text-white opacity-90">500+ Integrations</span>
        </h2>
        <p className="text-primary-foreground/80 text-sm sm:text-base max-w-[560px] leading-relaxed mt-2">
          Effortlessly generate and send certificates with zero manual
          intervention using the most trusted digital credential management
          software.
        </p>
        <Button
          variant="default"
          className="mt-6 px-6 py-2.5 rounded-full bg-white hover:bg-white/90 text-primary font-bold transition shadow-md"
        >
          Get started
        </Button>

        {/* Carousel */}
        <div className="w-full mt-16 overflow-hidden relative pb-2 flex flex-col gap-6">
          {/* Row 1 */}
          <div className="flex gap-8 whitespace-nowrap animate-scroll-left w-max">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div
                key={i}
                className="h-16 w-16 flex-shrink-0 rounded-2xl bg-white dark:bg-zinc-800/90 border border-border/40 backdrop-blur-sm shadow-[0px_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center p-3"
              >
                <img
                  src={src}
                  alt="icon"
                  className={`h-10 w-10 object-contain ${shouldInvert(src) ? "dark:invert dark:brightness-200" : ""}`}
                />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-8 whitespace-nowrap animate-scroll-right w-max">
            {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
              <div
                key={i}
                className="h-16 w-16 flex-shrink-0 rounded-2xl bg-white dark:bg-zinc-800/90 border border-border/40 backdrop-blur-sm shadow-[0px_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center p-3"
              >
                <img
                  src={src}
                  alt="icon"
                  className={`h-10 w-10 object-contain ${shouldInvert(src) ? "dark:invert dark:brightness-200" : ""}`}
                />
              </div>
            ))}
          </div>

          {/* Fade overlays */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-primary to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-primary to-transparent pointer-events-none z-10" />
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
