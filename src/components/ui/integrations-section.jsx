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

const ICON_NAMES = {
  "5968854.png": "Java Development",
  "732221.png": "Microsoft Excel Sheets",
  "733609.png": "GitHub Repository",
  "732084.png": "CSS3 Styling",
  "733585.png": "Slack Workspace Chat",
  "281763.png": "Google Authentication",
  "888879.png": "Figma Collaborative Design",
  "174857.png": "LinkedIn Certification Sharing",
  "906324.png": "Telegram Channel Messages",
  "888841.png": "Google Chrome Extension",
  "5968875.png": "Zoom Video Meetings",
  "906361.png": "Notion Workspace Pages",
  "732190.png": "Microsoft Word Document",
  "888847.png": "Dropbox Cloud Storage"
};

export function IntegrationsSection() {
  const getAltText = (src) => {
    const filename = src.split("/").pop();
    return `${ICON_NAMES[filename] || "Integration Logo"} Icon`;
  };

  return (
    <section className="relative py-28 overflow-hidden bg-primary text-primary-foreground border-y border-primary-foreground/10">
      {/* Ambient decorative glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-300 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 dark:bg-emerald-400/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 dark:border-emerald-400/25">
            <Zap size={12} className="inline-block" /> APIs & INTEGRATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-6 mb-4 text-white">
            Explore our APIs & <br className="hidden sm:inline" />
            Integrations
          </h2>
          <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed">
            Connect your LMS, CRM, or app directly to our secure issuance engine.
          </p>
        </div>

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
                  alt={getAltText(src)}
                  loading="lazy"
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
                  alt={getAltText(src)}
                  loading="lazy"
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
