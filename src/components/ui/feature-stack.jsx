"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Mail,
  Linkedin,
  Share2,
  FileSpreadsheet,
  TrendingUp,
  ShieldCheck,
  MousePointer,
  Check,
  Sparkles,
  Search,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    id: "design",
    title: "Design",
    header: "Design credentials in a visual editor",
    description:
      "Create professional certificates and badges in minutes. Add dynamic text attributes, custom fonts, signatures, and QR codes.",
  },
  {
    id: "generate",
    title: "Generate",
    header: "Generate certificates in bulk",
    description:
      "Generate certificates in bulk - saving time and reducing errors. Issue certificates with dynamic QR codes.",
  },
  {
    id: "send",
    title: "Send",
    header: "Distribute certificates in seconds",
    description:
      "Send certificates automatically to thousands of recipients at once. Customize email templates to match your brand.",
  },
  {
    id: "share",
    title: "Share",
    header: "Increase your brand visibility",
    description:
      "Make it easy for earners to share their digital credentials on LinkedIn, Facebook, and Twitter, driving traffic back to your brand.",
  },
  {
    id: "verify",
    title: "Verify",
    header: "Verify credentials in one click",
    description:
      "Prevent fraud with cryptographic verification. Anyone can scan the QR code to verify the credential’s authenticity instantly.",
  },
  {
    id: "analyze",
    title: "Analyze",
    header: "Track certificate engagement",
    description:
      "Analyze certificate delivery, email opens, social shares, and verification rates. Export detailed reports to monitor success.",
  },
];

// High-fidelity vector QR Code SVG component
function QRCodeSVG() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full text-zinc-900 dark:text-white fill-current"
    >
      {/* Top Left Finder Pattern */}
      <path d="M1 1h6v6H1V1zm1 1v4h4V2H2zm1 1h2v2H3V3z" />
      {/* Top Right Finder Pattern */}
      <path d="M17 1h6v6h-6V1zm1 1v4h4V2H18zm1 1h2v2h-2V3z" />
      {/* Bottom Left Finder Pattern */}
      <path d="M1 17h6v6H1v-6zm1 1v4h4v-4H2zm1 1h2v2H3v-2z" />
      {/* Alignment Pattern */}
      <path d="M17 17h2v2h-2v-2zm2 2h2v2h-2v-2zm0-2h2v2h-2v-2z" />
      {/* Random Code Data Dots */}
      <path d="M9 1h2v2H9V1zm4 0h2v2h-2V1zm-4 4h2v2H9V5zm4 0h2v2h-2V5zm-4 4h2v2H9V9zm2 2h2v2h-2v-2zm4 0h2v2h-2v-2zm-6 2h2v2h-2v-2zm4 2h2v2h-2v-2zm-6 4h2v2H9v-2zm4 0h2v2h-2v-2zm2 2h2v2h-2v-2z" />
    </svg>
  );
}

// --- 1. DESIGN PANEL ANIMATION ---
function DesignPanel({ isActive }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setStep(0);
      return;
    }
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2000); // Sped up from 3000ms
    return () => clearInterval(interval);
  }, [isActive]);

  const getCursorCoords = () => {
    switch (step) {
      case 0:
        return { x: 30, y: 150 };
      case 1:
        return { x: 260, y: 220 };
      case 2:
        return { x: 140, y: 220 };
      case 3:
        return { x: 200, y: 120 };
      default:
        return { x: 30, y: 150 };
    }
  };

  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950/20 flex relative text-zinc-800 dark:text-zinc-200 select-none overflow-hidden transition-colors duration-300">
      {/* Sidebar controls */}
      <div className="w-1/3 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3 flex flex-col gap-2.5 z-10 transition-colors duration-300">
        <div className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 tracking-wider uppercase mb-1">
          Canvas Layers
        </div>

        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-2 text-xs flex items-center gap-2 bg-zinc-50 dark:bg-zinc-950/30 text-zinc-800 dark:text-zinc-200 font-medium transition-colors duration-300">
          <div className="w-2.5 h-2.5 rounded bg-primary" />
          <span>Text Attribute</span>
        </div>

        <motion.div
          animate={
            step === 1
              ? { scale: 0.92, borderColor: "hsl(var(--primary))" }
              : { scale: 1, borderColor: "currentColor" }
          }
          className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-2 text-xs flex items-center gap-2 bg-zinc-50 dark:bg-zinc-950/30 text-zinc-800 dark:text-zinc-200 font-medium cursor-grab transition-colors duration-300"
        >
          <div className="w-2.5 h-2.5 rounded bg-primary" />
          <span>Dynamic QR Code</span>
        </motion.div>

        <motion.div
          animate={
            step === 2
              ? { scale: 0.92, borderColor: "hsl(var(--primary))" }
              : { scale: 1, borderColor: "currentColor" }
          }
          className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-2 text-xs flex items-center gap-2 bg-zinc-50 dark:bg-zinc-950/30 text-zinc-800 dark:text-zinc-200 font-medium cursor-grab transition-colors duration-300"
        >
          <div className="w-2.5 h-2.5 rounded bg-zinc-900 dark:bg-white" />
          <span>Author Signature</span>
        </motion.div>
      </div>

      {/* Editor Canvas workspace */}
      <div className="flex-1 p-6 flex flex-col justify-center items-center relative bg-zinc-100 dark:bg-zinc-950/60 transition-colors duration-300">
        <div className="w-[280px] h-[190px] bg-white dark:bg-zinc-900 rounded-xl border-2 border-zinc-300 dark:border-zinc-800 shadow-md p-4 flex flex-col justify-between relative transition-colors duration-300">
          <div className="absolute inset-1 border border-zinc-200 dark:border-zinc-800 pointer-events-none rounded-lg transition-colors duration-300" />
          <div className="absolute inset-1.5 border border-dashed border-zinc-100 dark:border-zinc-800/40 pointer-events-none rounded-lg transition-colors duration-300" />

          {/* Header with CredenceE Logo */}
          <div className="flex justify-between items-center z-10">
            <img
              src="/3.png"
              alt="CredenceE Logo"
              width={16}
              height={16}
              loading="lazy"
              className="h-4 w-auto object-contain dark:brightness-110"
            />
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            </div>
          </div>

          {/* Certificate Main Title & Dynamic Field */}
          <div className="text-center z-10 mt-2">
            <h5 className="text-[10px] font-bold text-zinc-900 dark:text-zinc-50 uppercase tracking-wide transition-colors duration-300">
              Certificate of Achievement
            </h5>

            <div className="mt-2.5 relative inline-block">
              <AnimatePresence mode="wait">
                {step >= 3 ? (
                  <motion.div
                    key="name"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                    className="text-xs font-serif font-semibold text-primary dark:text-primary bg-primary dark:bg-primary/30 px-2.5 py-0.5 rounded border border-primary dark:border-primary/40 transition-colors duration-300 animate-pulse"
                  >
                    Piyush Kumar
                  </motion.div>
                ) : (
                  <motion.div
                    key="variable"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                    className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 font-medium"
                  >
                    {"{{ recipient.name }}"}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <p className="text-[7px] text-zinc-500 dark:text-zinc-400 mt-2 max-w-[180px] mx-auto leading-tight transition-colors duration-300">
              for successfully completing the advanced certification
              requirements.
            </p>
          </div>

          {/* Footer slot components */}
          <div className="flex justify-between items-end z-10 pt-2 border-t border-zinc-100 dark:border-zinc-800/55 transition-colors duration-300">
            {/* Signature Slot */}
            <div className="w-[60px] h-[30px] border border-dashed border-zinc-200 dark:border-zinc-800 rounded flex items-center justify-center relative transition-colors duration-300">
              {step >= 2 ? (
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-[9px] font-serif italic text-zinc-700 dark:text-zinc-300 transition-colors duration-300 font-bold"
                >
                  CredenceE
                </motion.span>
              ) : (
                <span className="text-[6px] text-zinc-500 dark:text-zinc-400 font-mono transition-colors duration-300">
                  signature
                </span>
              )}
            </div>

            {/* QR Code Slot */}
            <div className="w-[30px] h-[30px] border border-dashed border-zinc-200 dark:border-zinc-800 rounded flex items-center justify-center overflow-hidden transition-colors duration-300">
              {step >= 1 ? (
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className="w-full h-full bg-white dark:bg-zinc-900 p-0.5"
                >
                  <QRCodeSVG />
                </motion.div>
              ) : (
                <span className="text-[6px] text-zinc-500 dark:text-zinc-400 font-mono transition-colors duration-300">
                  QR
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={getCursorCoords()}
        transition={{ type: "spring", stiffness: 150, damping: 15 }} // Sped up spring stiffness
        className="absolute z-35 pointer-events-none flex items-start"
      >
        <MousePointer
          size={18}
          className="text-primary fill-primary drop-shadow-md"
        />
        {step === 1 && (
          <div className="ml-2 bg-[hsl(var(--primary))] text-white text-[7px] px-1 py-0.5 rounded shadow">
            QR
          </div>
        )}
        {step === 2 && (
          <div className="ml-2 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-[7px] px-1 py-0.5 rounded shadow border border-zinc-800/20">
            Signature
          </div>
        )}
      </motion.div>
    </div>
  );
}

// --- 2. GENERATE PANEL ANIMATION ---
function GeneratePanel({ isActive }) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setLoading(false);
      setProgress(0);
      setCompleted(false);
      return;
    }

    const interval = setInterval(() => {
      setLoading(true);
      setCompleted(false);
      setProgress(0);

      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setLoading(false);
            setCompleted(true);
            return 100;
          }
          return prev + 20; // Sped up loading steps from 10 to 20
        });
      }, 100); // Sped up interval timer from 150ms to 100ms
    }, 3800); // Sped up cycle interval from 4500ms to 3800ms

    return () => clearInterval(interval);
  }, [isActive]);

  const mockRecipients = [
    {
      name: "Piyush Kumar",
      email: "piyush@example.com",
      status: completed ? "Issued" : "Pending",
    },
    {
      name: "Alex Robinson",
      email: "alex.r@example.com",
      status: completed ? "Issued" : "Pending",
    },
    {
      name: "Sarah Connor",
      email: "s.connor@example.com",
      status: completed ? "Issued" : "Pending",
    },
  ];

  return (
    <div className="w-full h-full bg-white dark:bg-zinc-900 p-5 flex flex-col justify-between text-zinc-800 dark:text-zinc-200 select-none font-sans relative transition-colors duration-300">
      <div className="flex flex-col gap-3">
        {/* Table header */}
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2 transition-colors duration-300">
          <div className="flex items-center gap-2">
            <FileSpreadsheet size={16} className="text-primary" />
            <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
              Recipients List (CSV Upload)
            </span>
          </div>
          <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono transition-colors duration-300">
            3 Uploaded
          </span>
        </div>

        {/* Recipients Table */}
        <div className="flex flex-col gap-2">
          {mockRecipients.map((user, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border border-zinc-100 dark:border-zinc-800 rounded-lg p-2.5 text-[11px] bg-zinc-50/50 dark:bg-zinc-950/20 transition-colors duration-300"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
                  {user.name}
                </span>
                <span className="text-[9px] text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                  {user.email}
                </span>
              </div>
              <div>
                <motion.span
                  animate={{
                    color: completed ? "hsl(var(--primary))" : "#f59e0b",
                  }}
                  className={cn(
                    "px-2 py-0.5 rounded text-[9px] font-bold flex items-center gap-1 transition-colors duration-300 bg-amber-50 dark:bg-amber-950/20 text-amber-600",
                    completed && "bg-primary dark:bg-primary/30 text-primary",
                  )}
                >
                  {completed ? (
                    <Check size={10} />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                  )}
                  {user.status}
                </motion.span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Control panel and progress status */}
      <div className="flex flex-col gap-3 mt-4 border-t border-zinc-100 dark:border-zinc-800 pt-3 transition-colors duration-300">
        {loading && (
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-[10px] text-zinc-500 dark:text-zinc-405 font-mono transition-colors duration-300">
              <span>Generating batch...</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden transition-colors duration-300">
              <motion.div
                className="h-full bg-primary"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        )}

        <AnimatePresence>
          {completed && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="bg-primary dark:bg-primary/20 border border-primary dark:border-primary/40 text-primary dark:text-primary text-[10px] p-2.5 rounded-lg flex items-center justify-between font-semibold transition-colors duration-300"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2
                  size={13}
                  className="text-primary dark:text-primary"
                />
                <span>1,250 certificates successfully generated!</span>
              </div>
              <Sparkles size={12} className="text-primary animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className={cn(
            "w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2",
            loading
              ? "bg-primary dark:bg-primary/30 text-primary"
              : "bg-primary hover:bg-primary text-white shadow-md shadow-primary/10",
          )}
        >
          {loading
            ? "Processing..."
            : completed
              ? "Generated successfully!"
              : "Generate 1,250 Credentials"}
        </button>
      </div>
    </div>
  );
}

// --- 3. SEND PANEL ANIMATION ---
function SendPanel({ isActive }) {
  const [status, setStatus] = useState("compose");

  useEffect(() => {
    if (!isActive) {
      setStatus("compose");
      return;
    }

    const interval = setInterval(() => {
      setStatus("sending");
      setTimeout(() => {
        setStatus("sent");
      }, 1000); // Sped up dispatch time from 1800ms to 1000ms
      setTimeout(() => {
        setStatus("compose");
      }, 3500); // Sped up refresh from 4500ms to 3500ms
    }, 4500); // Sped up cycle from 5500ms to 4500ms

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950/10 p-4 flex flex-col justify-between text-zinc-800 dark:text-zinc-200 select-none font-sans overflow-hidden relative transition-colors duration-300">
      {/* Composer header with CredenceE Logo */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-4 flex flex-col gap-2 transition-colors duration-300">
        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2 transition-colors duration-300">
          <div className="flex items-center gap-2">
            <img
              src="/3.png"
              alt="CredenceE Logo"
              width={16}
              height={16}
              loading="lazy"
              className="h-4 w-auto object-contain dark:brightness-110"
            />
            <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
              Email Distribution Builder
            </span>
          </div>
          <span className="text-[8px] bg-primary dark:bg-primary/30 text-primary dark:text-primary font-bold px-1.5 py-0.5 rounded uppercase transition-colors duration-300">
            Active Template
          </span>
        </div>

        <div className="flex flex-col gap-1 text-[10px]">
          <div className="flex border-b border-zinc-100 dark:border-zinc-800/50 py-1 transition-colors duration-300">
            <span className="text-zinc-500 dark:text-zinc-400 w-12 font-medium">
              From:
            </span>
            <span className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
              delivery@credencee.com
            </span>
          </div>
          <div className="flex border-b border-zinc-100 dark:border-zinc-800/50 py-1 transition-colors duration-300">
            <span className="text-zinc-500 dark:text-zinc-400 w-12 font-medium">
              To:
            </span>
            <span className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
              {"{{ recipient.email }}"}
            </span>
          </div>
          <div className="flex border-b border-zinc-100 dark:border-zinc-800/50 py-1 transition-colors duration-300">
            <span className="text-zinc-500 dark:text-zinc-400 w-12 font-medium">
              Subject:
            </span>
            <span className="text-zinc-800 dark:text-zinc-200 font-semibold transition-colors duration-300">
              Your Credential is ready, {"{{ recipient.name }}"}!
            </span>
          </div>
        </div>
      </div>

      {/* Flight Area */}
      <div className="flex-1 flex justify-center items-center relative my-3 min-h-[90px]">
        {status === "compose" && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-[10px] text-zinc-500 text-center flex flex-col items-center gap-2"
          >
            <div className="w-12 h-8 border border-zinc-200 dark:border-zinc-800 rounded bg-white dark:bg-zinc-900 flex items-center justify-center shadow-sm transition-colors duration-300">
              <Mail size={16} className="text-zinc-500 dark:text-zinc-400" />
            </div>
            <span>Ready for bulk delivery queue...</span>
          </motion.div>
        )}

        {status === "sending" && (
          <motion.div
            animate={{
              y: [-10, -35, 25, -10],
              opacity: [1, 0, 0, 1],
              scale: [1, 0.3, 0.7, 1],
              rotate: [0, 45, -90, 0], // Increased spin degree
            }}
            transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }} // Fast loop
            className="w-14 h-9 bg-primary rounded shadow-lg flex items-center justify-center text-white z-10"
          >
            <Mail size={18} />
          </motion.div>
        )}

        {status === "sent" && (
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full bg-primary dark:bg-primary/40 flex items-center justify-center text-primary dark:text-primary shadow-md transition-colors duration-300">
              <Check size={24} strokeWidth={3} />
            </div>
            <span className="text-[10px] font-bold text-primary dark:text-primary bg-primary dark:bg-primary/30 px-2 py-0.5 rounded border border-primary dark:border-primary/40 transition-colors duration-305">
              Mails Dispatched successfully
            </span>
          </motion.div>
        )}
      </div>

      <button
        className={cn(
          "w-full py-2.5 rounded-xl text-xs font-bold transition-all shadow-md",
          status === "sending"
            ? "bg-amber-500 text-white"
            : status === "sent"
              ? "bg-primary text-white"
              : "bg-primary text-white",
        )}
      >
        {status === "compose"
          ? "Send to 1,250 Earner Inbox"
          : status === "sending"
            ? "Dispatching Delivery Streams..."
            : "Sent successfully!"}
      </button>
    </div>
  );
}

// --- 4. SHARE PANEL ANIMATION ---
function SharePanel({ isActive }) {
  const [shared, setShared] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!isActive) {
      setShared(false);
      setParticles([]);
      return;
    }

    const interval = setInterval(() => {
      setShared(true);

      // More explosive particles
      const newParticles = Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        angle: i * 15 * (Math.PI / 180),
        color: [
          "hsl(var(--primary))",
          "#059669",
          "#f59e0b",
          "#09090b",
          "#ffffff",
        ][i % 5], // Adapted to green + black + white
      }));
      setParticles(newParticles);

      setTimeout(() => {
        setShared(false);
        setParticles([]);
      }, 2500); // Sped up decay
    }, 3800);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="w-full h-full bg-[#f3f6f8] dark:bg-zinc-950/20 p-4 flex flex-col justify-between text-zinc-800 dark:text-zinc-200 select-none font-sans overflow-hidden relative transition-colors duration-300">
      {/* Mock LinkedIn Feed Card */}
      <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm p-3 flex flex-col gap-2.5 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-zinc-300 dark:bg-zinc-800 overflow-hidden flex items-center justify-center text-zinc-500 dark:text-zinc-400 font-bold text-xs transition-colors duration-300">
            PK
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-zinc-900 dark:text-zinc-100 leading-none transition-colors duration-300">
              Piyush Kumar
            </span>
            <span className="text-[8px] text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
              Software Engineer & Leader
            </span>
          </div>
        </div>

        <p className="text-[9px] text-zinc-600 dark:text-zinc-300 leading-tight transition-colors duration-300">
          Stoked to receive my verified Certificate of Leadership from
          CredenceE! Verifiable, safe, and easily sharable.
        </p>

        {/* Certificate preview */}
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-md p-2 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-950/20 transition-colors duration-300">
          <div className="flex flex-col gap-0.5">
            <span className="text-[8px] font-bold text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
              Certificate of Leadership
            </span>
            <span className="text-[7px] text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
              Issued by Acme Corp & CredenceE
            </span>
          </div>
          <Linkedin size={18} className="text-[#0a66c2]" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center relative min-h-[50px]">
        {shared && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-1.5 bg-[#d4edda] dark:bg-primary/30 text-[#155724] dark:text-primary border border-[#c3e6cb] dark:border-primary/40 px-3 py-1.5 rounded-full text-[10px] font-bold z-10 shadow-sm transition-colors duration-300 animate-bounce"
          >
            <Share2 size={11} />
            <span>Shared on LinkedIn!</span>
          </motion.div>
        )}

        {particles.map((p) => {
          const distance = 65 + Math.random() * 65; // Farther confetti distance
          const targetX = Math.cos(p.angle) * distance;
          const targetY = Math.sin(p.angle) * distance;

          return (
            <motion.div
              key={p.id}
              initial={{ x: 0, y: 0, scale: 1.2, opacity: 1 }}
              animate={{ x: targetX, y: targetY, scale: 0, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }} // Sped up confetti travel
              className="absolute w-2 h-2 rounded-full"
              style={{ backgroundColor: p.color }}
            />
          );
        })}
      </div>

      <button
        className={cn(
          "w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border shadow-sm",
          shared
            ? "bg-[#0a66c2] text-white border-transparent"
            : "bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-[#0a66c2] dark:text-primary border-[#0a66c2]/40 dark:border-zinc-800",
        )}
      >
        <Linkedin
          size={14}
          className={shared ? "text-white" : "text-[#0a66c2] dark:text-primary"}
        />
        <span>
          {shared ? "Profile Updated!" : "Add to LinkedIn Social Wallet"}
        </span>
      </button>
    </div>
  );
}

// --- 5. VERIFY PANEL ANIMATION ---
function VerifyPanel({ isActive }) {
  const [typedId, setTypedId] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setTypedId("");
      setVerifying(false);
      setVerified(false);
      return;
    }

    const fullId = "CRED-2026-X81A";
    const interval = setInterval(() => {
      setVerified(false);
      setVerifying(false);
      setTypedId("");

      let currentText = "";
      let index = 0;
      const typeTimer = setInterval(() => {
        if (index < fullId.length) {
          currentText += fullId[index];
          setTypedId(currentText);
          index++;
        } else {
          clearInterval(typeTimer);

          setVerifying(true);
          setTimeout(() => {
            setVerifying(false);
            setVerified(true);
          }, 800); // Sped up verification scanner search from 1500ms to 800ms
        }
      }, 50); // Sped up typing speed from 100ms to 50ms
    }, 4200); // Sped up cycle from 5500ms to 4200ms

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="w-full h-full bg-white dark:bg-zinc-900 p-5 flex flex-col justify-between text-zinc-800 dark:text-zinc-200 select-none font-sans relative transition-colors duration-300">
      <div className="flex flex-col gap-4">
        {/* Verification header */}
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2 transition-colors duration-300">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-primary" />
            <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
              Decentralized Trust Verification
            </span>
          </div>
          <span className="text-[8px] bg-primary dark:bg-primary/30 text-primary dark:text-primary font-bold px-1.5 py-0.5 rounded uppercase">
            Resolver Online
          </span>
        </div>

        {/* Input box */}
        <div className="relative flex items-center">
          <input
            type="text"
            readOnly
            value={typedId}
            placeholder="Scan QR or Enter Credential ID..."
            className="w-full pl-8 pr-3 py-2 text-xs border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-200 bg-zinc-50 dark:bg-zinc-950/50 font-mono tracking-wide placeholder-zinc-300 dark:placeholder-zinc-600 focus:outline-none transition-colors duration-300"
          />
          <Search
            size={12}
            className="absolute left-2.5 text-zinc-500 dark:text-zinc-400"
          />

          {verifying && (
            <div className="absolute right-2.5 w-4 h-4 rounded-full border-[2px] border-primary border-t-transparent animate-spin" />
          )}
        </div>
      </div>

      {/* Verification status output card with CredenceE Logo */}
      <div className="flex-1 flex items-center justify-center my-4">
        <AnimatePresence>
          {verified && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="w-full border border-primary dark:border-primary/40 rounded-xl bg-primary/50 dark:bg-primary/20 p-4 flex flex-col gap-2.5 transition-colors duration-300"
            >
              <div className="flex justify-between items-center text-primary dark:text-primary">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-primary dark:text-primary"
                  />
                  <span className="text-xs font-bold">VERIFIED AUTHENTIC</span>
                </div>
                <img
                  src="/3.png"
                  alt="CredenceE verified logo"
                  width={16}
                  height={16}
                  loading="lazy"
                  className="h-4 w-auto object-contain dark:brightness-110"
                />
              </div>

              <div className="grid grid-cols-2 gap-y-2 text-[9px] border-t border-primary/40 pt-2 font-mono">
                <div>
                  <span className="text-zinc-500 dark:text-zinc-400 block uppercase">
                    Recipient
                  </span>
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
                    Piyush Kumar
                  </span>
                </div>
                <div>
                  <span className="text-zinc-500 dark:text-zinc-400 block uppercase">
                    Issuer
                  </span>
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
                    CredenceE Trust
                  </span>
                </div>
                <div>
                  <span className="text-zinc-500 dark:text-zinc-400 block uppercase">
                    Signed Date
                  </span>
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
                    12/06/2026
                  </span>
                </div>
                <div>
                  <span className="text-zinc-500 dark:text-zinc-400 block uppercase">
                    Status
                  </span>
                  <span className="font-bold text-primary dark:text-primary uppercase transition-colors duration-300">
                    Cryptographic Secure
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!verified && !verifying && (
          <div className="text-[10px] text-zinc-500 dark:text-zinc-500 text-center font-mono transition-colors duration-300">
            Waiting for verification key submission...
          </div>
        )}

        {verifying && (
          <div className="text-[10px] text-primary text-center font-mono flex items-center gap-1.5 animate-pulse">
            Resolving secure cryptographic key...
          </div>
        )}
      </div>

      <button
        className={cn(
          "w-full py-2.5 rounded-xl text-xs font-bold transition-all shadow-md",
          verified ? "bg-primary text-white" : "bg-primary text-white",
        )}
      >
        {verifying
          ? "Querying Trust Ledger..."
          : verified
            ? "Resolved Authentic"
            : "Verify Credential Integrity"}
      </button>
    </div>
  );
}

// --- 6. ANALYZE PANEL ANIMATION ---
function AnalyzePanel({ isActive }) {
  const [dataPoints, setDataPoints] = useState([]);
  const [opens, setOpens] = useState(0);
  const [shares, setShares] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setDataPoints([]);
      setOpens(0);
      setShares(0);
      return;
    }

    const points = [
      { x: 0, y: 120 },
      { x: 50, y: 100 },
      { x: 100, y: 110 },
      { x: 150, y: 40 },
      { x: 200, y: 70 },
      { x: 250, y: 20 },
      { x: 300, y: 30 },
    ];
    setDataPoints(points);

    // Number counters ticking up faster
    const opensInterval = setInterval(() => {
      setOpens((prev) => {
        if (prev >= 1250) {
          clearInterval(opensInterval);
          return 1250;
        }
        return prev + 125; // Sped up increment step
      });
    }, 25); // Sped up counter interval

    const sharesInterval = setInterval(() => {
      setShares((prev) => {
        if (prev >= 832) {
          clearInterval(sharesInterval);
          return 832;
        }
        return prev + 83; // Sped up increment step
      });
    }, 25); // Sped up counter interval

    const resetTimeout = setTimeout(() => {
      setDataPoints([]);
      setOpens(0);
      setShares(0);
    }, 4000); // Sped up cycle reset to 4000ms

    return () => {
      clearInterval(opensInterval);
      clearInterval(sharesInterval);
      clearTimeout(resetTimeout);
    };
  }, [isActive]);

  const generateSvgPath = () => {
    if (dataPoints.length === 0) return "";
    return `M ${dataPoints.map((p) => `${p.x} ${p.y}`).join(" L ")}`;
  };

  return (
    <div className="w-full h-full bg-white dark:bg-zinc-900 p-5 flex flex-col justify-between text-zinc-850 dark:text-zinc-200 select-none font-sans relative transition-colors duration-300">
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2 transition-colors duration-300">
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-primary animate-pulse" />
            <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
              Analytics Metric Stream
            </span>
          </div>
          <span className="text-[8px] bg-primary dark:bg-primary/30 text-primary dark:text-primary font-bold px-1.5 py-0.5 rounded uppercase">
            Live Feed
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-1">
          {/* Stat 1 */}
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 bg-zinc-50/50 dark:bg-zinc-950/20 flex flex-col gap-1 shadow-sm transition-colors duration-300">
            <span className="text-[8px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-bold">
              Email Opens
            </span>
            <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight font-mono transition-colors duration-300">
              {opens} / 1250
            </span>
            <span className="text-[8px] text-primary dark:text-primary font-bold">
              98.4% open rate
            </span>
          </div>

          {/* Stat 2 */}
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 bg-zinc-50/50 dark:bg-zinc-950/20 flex flex-col gap-1 shadow-sm transition-colors duration-300">
            <span className="text-[8px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-bold">
              Social Shares
            </span>
            <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight font-mono transition-colors duration-300">
              {shares} shares
            </span>
            <span className="text-[8px] text-primary dark:text-primary font-bold">
              +12% from last week
            </span>
          </div>
        </div>
      </div>

      {/* Drawing graph */}
      <div className="flex-1 flex flex-col justify-end min-h-[90px] mt-2 pb-2 relative">
        <div className="absolute inset-0 flex flex-col justify-between border-b border-l border-zinc-200 dark:border-zinc-800 pointer-events-none opacity-40 z-0 transition-colors duration-300">
          <div className="w-full border-t border-zinc-200/50 dark:border-zinc-800 h-px"></div>
          <div className="w-full border-t border-zinc-200/50 dark:border-zinc-800 h-px"></div>
          <div className="w-full border-t border-zinc-200/50 dark:border-zinc-800 h-px"></div>
        </div>

        <svg
          viewBox="0 0 300 130"
          className="w-full h-full overflow-visible z-10 relative"
        >
          <motion.path
            d={generateSvgPath()}
            fill="none"
            stroke="hsl(var(--primary))" // Swapped stroke from blue to emerald green
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: dataPoints.length > 0 ? 1 : 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }} // Sped up chart draw time from 1.8s to 1.1s
          />

          {/* Shadow gradient path */}
          {dataPoints.length > 0 && (
            <motion.path
              d={`${generateSvgPath()} L 300 130 L 0 130 Z`}
              fill="url(#gradient-chart)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 0.8, delay: 0.4 }} // Sped up shadow fade
            />
          )}

          <defs>
            <linearGradient
              id="gradient-chart"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop
                offset="100%"
                stopColor="hsl(var(--primary))"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <button className="w-full py-2.5 rounded-xl text-xs font-bold transition-all shadow-md bg-primary text-white">
        Download Analytics Audit Report
      </button>
    </div>
  );
}

export function FeatureStack() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const pinTrigger = ScrollTrigger.create({
          id: "feature-pin",
          trigger: containerRef.current,
          start: "top top",
          end: "+=350%",
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.min(
              Math.floor(progress * STEPS.length),
              STEPS.length - 1,
            );
            setActiveIdx(index);
          },
        });

        scrollTriggerRef.current = pinTrigger;
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  const handleTabClick = (index) => {
    const trigger =
      scrollTriggerRef.current || ScrollTrigger.getById("feature-pin");
    if (trigger) {
      const start = trigger.start;
      const end = trigger.end;
      const targetScroll = start + (end - start) * (index / (STEPS.length - 1));
      window.scrollTo({
        top: targetScroll,
        behavior: "instant",
      });
    } else {
      setActiveIdx(index);
    }
  };

  const renderPanel = (index, isPanelActive) => {
    switch (index) {
      case 0:
        return <DesignPanel isActive={isPanelActive} />;
      case 1:
        return <GeneratePanel isActive={isPanelActive} />;
      case 2:
        return <SendPanel isActive={isPanelActive} />;
      case 3:
        return <SharePanel isActive={isPanelActive} />;
      case 4:
        return <VerifyPanel isActive={isPanelActive} />;
      case 5:
        return <AnalyzePanel isActive={isPanelActive} />;
      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full relative select-none overflow-hidden transition-colors duration-300"
    >
      {/* Luxury Glow specifically for this section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-primary/15 dark:bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Desktop / Sticky Scroll Layout */}
      <div className="hidden lg:flex w-full max-w-7xl mx-auto px-8 lg:px-12 h-screen flex-col justify-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-3 mb-10"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest transition-colors duration-300">
            ALL-IN-ONE SOLUTION
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight transition-colors duration-300 text-zinc-900 dark:text-white">
            The complete certification management platform
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed transition-colors duration-300">
            CredenceE helps you manage and automate every step of the digital
            credential journey.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* Left Column: Stacked Tabs */}
          <div className="col-span-5 flex flex-col gap-4">
            {STEPS.map((step, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div key={step.id} className="flex flex-col">
                  <button
                    onClick={() => handleTabClick(idx)}
                    className={cn(
                      "group text-left py-2 text-xl lg:text-2xl font-bold transition-all duration-300 focus:outline-none focus:ring-0 outline-none border-none flex items-center gap-4 cursor-pointer",
                      isActive
                        ? "text-primary"
                        : "text-zinc-400/80 hover:text-zinc-600 dark:text-zinc-550 dark:hover:text-zinc-300",
                    )}
                  >
                    <span>{step.title}</span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <h4 className="text-foreground font-semibold text-base mt-2 transition-colors duration-300">
                      {step.header}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed transition-colors duration-300">
                      {step.description}
                    </p>

                    {/* Divider line */}
                    <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 mt-4 transition-colors duration-300" />
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Mockup Frame */}
          <div className="col-span-7 flex justify-center items-center">
            <div className="relative w-full aspect-[4/3] max-w-[620px] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl flex flex-col border border-zinc-200/80 dark:border-zinc-800 overflow-hidden transition-colors duration-300">
              {/* Browser Header Bar with URL and Logo */}
              <div className="w-full h-8 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800/80 flex items-center justify-between px-4 shrink-0 transition-colors duration-300">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                </div>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono select-none font-medium">
                  app.credencee.com
                </span>
                <img
                  src="/3.png"
                  alt="CredenceE logo header"
                  width={16}
                  height={16}
                  loading="lazy"
                  className="h-4 w-auto object-contain dark:brightness-110"
                />
              </div>

              {/* Showcase Panel Body */}
              <div className="flex-1 relative overflow-hidden bg-white dark:bg-zinc-900 transition-colors duration-300">
                {STEPS.map((step, idx) => {
                  const isPanelActive = idx === activeIdx;
                  return (
                    <div
                      key={step.id}
                      className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                      style={{
                        opacity: isPanelActive ? 1 : 0,
                        pointerEvents: isPanelActive ? "auto" : "none",
                      }}
                    >
                      {renderPanel(idx, isPanelActive)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (Stacked Showcase) */}
      <div className="flex lg:hidden flex-col gap-16 px-6 py-20 max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-3 text-center"
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-widest transition-colors duration-300">
            ALL-IN-ONE SOLUTION
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight leading-tight transition-colors duration-300 text-zinc-900 dark:text-white">
            The complete certification management platform
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-300">
            CredenceE helps you manage and automate every step of the digital
            credential journey.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {STEPS.map((step, idx) => (
            <div key={step.id} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-primary dark:text-primary text-xs font-bold font-mono transition-colors duration-300">
                  0{idx + 1} / {step.title.toUpperCase()}
                </span>
                <h3 className="text-xl font-bold text-foreground transition-colors duration-300">
                  {step.header}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              {/* Showcase Card */}
              <div className="relative w-full h-[360px] xs:h-[385px] sm:h-[430px] bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-zinc-200/80 dark:border-zinc-800 overflow-hidden transition-colors duration-300 flex flex-col">
                {/* Mobile Browser Header Bar */}
                <div className="w-full h-7 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800/80 flex items-center justify-between px-3 shrink-0 transition-colors duration-300">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  </div>
                  <span className="text-[9px] text-zinc-500 dark:text-zinc-400 font-mono select-none">
                    app.credencee.com
                  </span>
                  <img
                    src="/3.png"
                    alt="CredenceE logo header mobile"
                    width={14}
                    height={14}
                    loading="lazy"
                    className="h-3.5 w-auto object-contain dark:brightness-110"
                  />
                </div>

                {/* Mobile Panel Body */}
                <div className="flex-1 relative overflow-hidden bg-white dark:bg-zinc-900 transition-colors duration-300">
                  {renderPanel(idx, true)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
