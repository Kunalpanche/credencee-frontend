"use client";

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Award,
  BadgeCheck,
  CheckCircle,
  Check,
  Linkedin,
  Layers,
  FileCheck,
  Compass,
  Monitor,
  CheckCircle2,
  Sparkles,
  Share2,
  ArrowRightCircle,
} from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { BorderBeam } from "./border-beam";
import { Header } from "./header-2";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Hero195() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("trust");
  const [isGlitching, setIsGlitching] = useState(false);

  const words = [
    "trust",
    "security",
    "integrity",
    "truth",
    "safety",
    "validity",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (wordIndex + 1) % words.length;
      const targetWord = words[nextIndex];
      let iteration = 0;
      setIsGlitching(true);

      const scrambleInterval = setInterval(() => {
        setCurrentText((prev) =>
          targetWord
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return targetWord[index];
              }
              const symbols = "01!@#$%^&*()_+{}|:<>?[]-=";
              return symbols[Math.floor(Math.random() * symbols.length)];
            })
            .join(""),
        );

        if (iteration >= targetWord.length) {
          clearInterval(scrambleInterval);
          setIsGlitching(false);
          setWordIndex(nextIndex);
        }

        iteration += 1 / 3;
      }, 35);
    }, 3000);

    return () => clearInterval(interval);
  }, [wordIndex]);

  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      try {
        await fetch("https://formsubmit.co/ajax/contact@credencee.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            email: email,
            _subject: "New Staging Lead Inquiry - CredenceE",
            message: `A prospective client has requested to get in touch from the CredenceE staging platform.\n\nClient Email: ${email}`
          })
        });
      } catch (err) {
        console.error("Functional email dispatch failed:", err);
      }
      
      // Reset the success state alert after a few seconds
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 5000);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let time = 0;

    const computeThemeColors = () => {
      const rootStyles = getComputedStyle(document.documentElement);

      const resolveColor = (variables, alpha = 1) => {
        const tempEl = document.createElement("div");
        tempEl.style.position = "absolute";
        tempEl.style.visibility = "hidden";
        tempEl.style.width = "1px";
        tempEl.style.height = "1px";
        document.body.appendChild(tempEl);

        let color = `rgba(255, 255, 255, ${alpha})`;

        for (const variable of variables) {
          const value = rootStyles.getPropertyValue(variable).trim();
          if (value) {
            const isRawHsl =
              value.includes("%") &&
              !value.includes("hsl") &&
              !value.includes("rgb");
            if (isRawHsl) {
              tempEl.style.backgroundColor = `hsl(var(${variable}))`;
            } else {
              tempEl.style.backgroundColor = `var(${variable})`;
            }
            const computedColor = getComputedStyle(tempEl).backgroundColor;

            if (computedColor && computedColor !== "rgba(0, 0, 0, 0)") {
              if (alpha < 1) {
                const rgbMatch = computedColor.match(
                  /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/,
                );
                if (rgbMatch) {
                  color = `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${alpha})`;
                } else {
                  color = computedColor;
                }
              } else {
                color = computedColor;
              }
              break;
            }
          }
        }

        document.body.removeChild(tempEl);
        return color;
      };

      return {
        backgroundTop: resolveColor(["--muted", "--background"], 0.95),
        backgroundBottom: resolveColor(["--background"], 1),
        wavePalette: [
          {
            offset: 0,
            amplitude: 70,
            frequency: 0.003,
            color: resolveColor(["--primary"], 0.8),
            opacity: 0.45,
          },
          {
            offset: Math.PI / 2,
            amplitude: 90,
            frequency: 0.0026,
            color: resolveColor(["--accent", "--primary"], 0.7),
            opacity: 0.35,
          },
          {
            offset: Math.PI,
            amplitude: 60,
            frequency: 0.0034,
            color: resolveColor(["--secondary", "--foreground"], 0.65),
            opacity: 0.3,
          },
          {
            offset: Math.PI * 1.5,
            amplitude: 80,
            frequency: 0.0022,
            color: resolveColor(["--primary-foreground", "--foreground"], 0.25),
            opacity: 0.25,
          },
          {
            offset: Math.PI * 2,
            amplitude: 55,
            frequency: 0.004,
            color: resolveColor(["--foreground"], 0.2),
            opacity: 0.2,
          },
        ],
      };
    };

    let themeColors = computeThemeColors();

    const handleThemeMutation = () => {
      themeColors = computeThemeColors();
    };

    const observer = new MutationObserver(handleThemeMutation);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const mouseInfluence = prefersReducedMotion ? 10 : 70;
    const influenceRadius = prefersReducedMotion ? 160 : 320;
    const smoothing = prefersReducedMotion ? 0.04 : 0.1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const recenterMouse = () => {
      const centerPoint = { x: canvas.width / 2, y: canvas.height / 2 };
      mouseRef.current = centerPoint;
      targetMouseRef.current = centerPoint;
    };

    const handleResize = () => {
      resizeCanvas();
      recenterMouse();
    };

    const handleMouseMove = (event) => {
      targetMouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseLeave = () => {
      recenterMouse();
    };

    resizeCanvas();
    recenterMouse();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const drawWave = (wave) => {
      ctx.save();
      ctx.beginPath();

      for (let x = 0; x <= canvas.width; x += 4) {
        const dx = x - mouseRef.current.x;
        const dy = canvas.height / 2 - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / influenceRadius);
        const mouseEffect =
          influence *
          mouseInfluence *
          Math.sin(time * 0.001 + x * 0.01 + wave.offset);

        const y =
          canvas.height / 2 +
          Math.sin(x * wave.frequency + time * 0.002 + wave.offset) *
          wave.amplitude +
          Math.sin(x * wave.frequency * 0.4 + time * 0.003) *
          (wave.amplitude * 0.45) +
          mouseEffect;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.lineWidth = 2.5;
      ctx.strokeStyle = wave.color;
      ctx.globalAlpha = wave.opacity;
      ctx.shadowBlur = 35;
      ctx.shadowColor = wave.color;
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      time += 1;

      mouseRef.current.x +=
        (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
      mouseRef.current.y +=
        (targetMouseRef.current.y - mouseRef.current.y) * smoothing;

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, themeColors.backgroundTop);
      gradient.addColorStop(1, themeColors.backgroundBottom);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      themeColors.wavePalette.forEach(drawWave);

      animationId = window.requestAnimationFrame(animate);
    };

    animationId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full bg-background text-foreground font-sans select-none overflow-x-clip relative">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Glow overlays */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px] dark:bg-foreground/[0.06]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-foreground/[0.025] blur-[120px] dark:bg-foreground/[0.05]" />
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[150px] dark:bg-primary/[0.05]" />
      </div>

      {/* Navigation Header */}
      <Header />

      <main className="w-full pt-16 pb-24 relative z-10 flex items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-6 pt-8 w-full"
        >
          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-[13px] font-semibold uppercase tracking-wider border border-primary/20 bg-background/60 backdrop-blur"
          >
            <Shield size={12} className="text-primary animate-pulse" />
            <span>Modern Credential Infrastructure</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-foreground leading-[1.15] max-w-3xl"
          >
            Credentials of{" "}
            <span
              className="bg-gradient-to-r from-emerald-600 to-black dark:from-emerald-400 dark:to-white bg-clip-text text-transparent px-2 inline-block select-text transition-all duration-75"
              style={{
                fontFamily: "'Orbit', sans-serif",
                textShadow: isGlitching
                  ? "2px -1px 0 #00ff00, -2px 1px 0 #0000ff"
                  : "none",
                animation: isGlitching
                  ? "glitch-flicker 0.15s infinite"
                  : "none",
              }}
            >
              {currentText}
            </span>{" "}
            unleashed
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Turn your certificates and digital badges into your most powerful
            brand advocates. Create, verify, and programmatically issue secure
            digital credentials in minutes.
          </motion.p>

          {/* Email Signup Form (Calio layout, pill-shaped) */}
          <motion.div
            id="contact-form"
            variants={itemVariants}
            className="w-full max-w-md mt-4"
          >
            <form
              onSubmit={handleSubscribe}
              className="w-full flex gap-2 p-1.5 bg-card/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-border/80 rounded-full shadow-lg focus-within:ring-2 focus-within:ring-primary/20 transition-all"
            >
              <div className="flex-1 flex flex-col items-start gap-1">
                <Label htmlFor="email" className="sr-only">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter organization email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 px-4 py-2.5 rounded-full text-[13px] sm:text-sm text-foreground placeholder:text-muted-foreground/60 h-10"
                />
              </div>
              <Button
                type="submit"
                className="rounded-full px-6 h-10 bg-primary text-primary-foreground hover:bg-primary/95 flex items-center gap-1.5 shrink-0 transition-all shadow-md font-semibold text-sm"
              >
                {subscribed ? "Sending..." : "Get in Touch"}{" "}
                <ArrowRightCircle size={14} />
              </Button>
            </form>

            {subscribed ? (
              <p className="text-[13px] text-emerald-500 font-medium flex items-center gap-1 justify-center mt-2 animate-pulse">
                <CheckCircle size={12} /> Inquiry sent successfully to contact@credencee.com!
              </p>
            ) : (
              <p className="text-[13px] text-muted-foreground mt-2 tracking-wide font-mono uppercase">
                Trusted by 10,000+ certified students & institutions.
              </p>
            )}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
